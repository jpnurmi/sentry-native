#include "sentry_screenshot.h"

#include "sentry_logger.h"
#include "sentry_path.h"

#include <dlfcn.h>
#include <stdlib.h>
#include <string.h>
#include <xcb/xcb.h>

#include "../vendor/stb_image_write.h"

typedef struct {
    struct xcb_rectangle_t rect;
    bool value;
} region_item_t;

typedef struct {
    region_item_t *items;
    size_t count;
    size_t capacity;
} region_t;

static region_t *
region_new(void)
{
    region_t *region = (region_t *)malloc(sizeof(region_t));
    if (!region) {
        return NULL;
    }
    region->count = 0;
    region->capacity = 4;
    region->items = malloc(region->capacity * sizeof(*region->items));
    if (!region->items) {
        free(region);
        return NULL;
    }
    return region;
}

static void
region_free(region_t *region)
{
    if (!region) {
        return;
    }
    free(region->items);
    free(region);
}

static void
region_add(region_t *region, xcb_rectangle_t rect, bool value)
{
    if (!region) {
        return;
    }
    if (region->count >= region->capacity) {
        region->capacity *= 2;
        region->items
            = realloc(region->items, region->capacity * sizeof(*region->items));
    }
    region_item_t *item = &region->items[region->count++];
    item->rect = rect;
    item->value = value;
}

static bool
region_get_bounds(region_t *region, xcb_rectangle_t *bounds)
{
    if (!region || region->count == 0) {
        return false;
    }

    bool rv = false;
    int16_t min_x = INT16_MAX;
    int16_t min_y = INT16_MAX;
    int16_t max_x = INT16_MIN;
    int16_t max_y = INT16_MIN;

    for (size_t i = 0; i < region->count; i++) {
        region_item_t *item = &region->items[i];
        if (!item->value) {
            continue;
        }

        rv = true;
        min_x = MIN(min_x, item->rect.x);
        min_y = MIN(min_y, item->rect.y);
        max_x = MAX(max_x, item->rect.x + item->rect.width);
        max_y = MAX(max_y, item->rect.y + item->rect.height);
    }

    if (rv) {
        bounds->x = min_x;
        bounds->y = min_y;
        bounds->width = max_x - min_x;
        bounds->height = max_y - min_y;
    }
    return rv;
}

static bool
region_contains(region_t *region, int16_t x, int16_t y)
{
    if (!region) {
        return false;
    }

    size_t i = region->count;
    while (i > 0) {
        region_item_t *item = &region->items[--i];
        if (x >= item->rect.x && x < item->rect.x + item->rect.width
            && y >= item->rect.y && y < item->rect.y + item->rect.height) {
            return item->value;
        }
    }

    return false;
}

// Define function pointers for all xcb functions used in this file
static void *libxcb_handle = NULL;
static xcb_connection_t *(*p_xcb_connect)(const char *, int *);
static int (*p_xcb_connection_has_error)(xcb_connection_t *);
static const xcb_setup_t *(*p_xcb_get_setup)(xcb_connection_t *);
static xcb_screen_iterator_t (*p_xcb_setup_roots_iterator)(const xcb_setup_t *);
static xcb_query_tree_cookie_t (*p_xcb_query_tree)(
    xcb_connection_t *, xcb_window_t);
static xcb_query_tree_reply_t *(*p_xcb_query_tree_reply)(
    xcb_connection_t *, xcb_query_tree_cookie_t, xcb_generic_error_t **);
static xcb_window_t *(*p_xcb_query_tree_children)(
    const xcb_query_tree_reply_t *);
static int (*p_xcb_query_tree_children_length)(const xcb_query_tree_reply_t *);
static xcb_get_window_attributes_cookie_t (*p_xcb_get_window_attributes)(
    xcb_connection_t *, xcb_window_t);
static xcb_get_window_attributes_reply_t *(*p_xcb_get_window_attributes_reply)(
    xcb_connection_t *, xcb_get_window_attributes_cookie_t,
    xcb_generic_error_t **);
static xcb_get_geometry_cookie_t (*p_xcb_get_geometry)(
    xcb_connection_t *, xcb_drawable_t);
static xcb_get_geometry_reply_t *(*p_xcb_get_geometry_reply)(
    xcb_connection_t *, xcb_get_geometry_cookie_t, xcb_generic_error_t **);
static xcb_translate_coordinates_cookie_t (*p_xcb_translate_coordinates)(
    xcb_connection_t *, xcb_window_t, xcb_window_t, int16_t, int16_t);
static xcb_translate_coordinates_reply_t *(*p_xcb_translate_coordinates_reply)(
    xcb_connection_t *, xcb_translate_coordinates_cookie_t,
    xcb_generic_error_t **);
static xcb_get_property_cookie_t (*p_xcb_get_property)(xcb_connection_t *,
    uint8_t, xcb_window_t, xcb_atom_t, xcb_atom_t, uint32_t, uint32_t);
static xcb_get_property_reply_t *(*p_xcb_get_property_reply)(
    xcb_connection_t *, xcb_get_property_cookie_t, xcb_generic_error_t **);
static uint8_t *(*p_xcb_get_property_value)(const xcb_get_property_reply_t *);
static int (*p_xcb_get_property_value_length)(const xcb_get_property_reply_t *);
static void (*p_xcb_disconnect)(xcb_connection_t *);
static xcb_intern_atom_cookie_t (*p_xcb_intern_atom)(
    xcb_connection_t *, uint8_t, uint16_t, const char *);
static xcb_intern_atom_reply_t *(*p_xcb_intern_atom_reply)(
    xcb_connection_t *, xcb_intern_atom_cookie_t, xcb_generic_error_t **);
static xcb_get_image_cookie_t (*p_xcb_get_image)(xcb_connection_t *, uint8_t,
    xcb_drawable_t, int16_t, int16_t, uint16_t, uint16_t, uint32_t);
static xcb_get_image_reply_t *(*p_xcb_get_image_reply)(
    xcb_connection_t *, xcb_get_image_cookie_t, xcb_generic_error_t **);
static uint8_t *(*p_xcb_get_image_data)(const xcb_get_image_reply_t *);

// Function to load libxcb and resolve symbols
static bool
load_xcb_symbols(void)
{
    libxcb_handle = dlopen("libxcb.so", RTLD_LAZY);
    if (!libxcb_handle) {
        SENTRY_WARN("Failed to load libxcb.so");
        return false;
    }

#define LOAD_SYMBOL(handle, sym)                                               \
    do {                                                                       \
        p_##sym = dlsym(handle, #sym);                                         \
        if (!p_##sym) {                                                        \
            SENTRY_WARN("Failed to load symbol: " #sym);                       \
            return false;                                                      \
        }                                                                      \
    } while (0)

    LOAD_SYMBOL(libxcb_handle, xcb_connect);
    LOAD_SYMBOL(libxcb_handle, xcb_connection_has_error);
    LOAD_SYMBOL(libxcb_handle, xcb_get_setup);
    LOAD_SYMBOL(libxcb_handle, xcb_setup_roots_iterator);
    LOAD_SYMBOL(libxcb_handle, xcb_query_tree);
    LOAD_SYMBOL(libxcb_handle, xcb_query_tree_reply);
    LOAD_SYMBOL(libxcb_handle, xcb_query_tree_children);
    LOAD_SYMBOL(libxcb_handle, xcb_query_tree_children_length);
    LOAD_SYMBOL(libxcb_handle, xcb_get_window_attributes);
    LOAD_SYMBOL(libxcb_handle, xcb_get_window_attributes_reply);
    LOAD_SYMBOL(libxcb_handle, xcb_get_geometry);
    LOAD_SYMBOL(libxcb_handle, xcb_get_geometry_reply);
    LOAD_SYMBOL(libxcb_handle, xcb_translate_coordinates);
    LOAD_SYMBOL(libxcb_handle, xcb_translate_coordinates_reply);
    LOAD_SYMBOL(libxcb_handle, xcb_get_property);
    LOAD_SYMBOL(libxcb_handle, xcb_get_property_reply);
    LOAD_SYMBOL(libxcb_handle, xcb_get_property_value);
    LOAD_SYMBOL(libxcb_handle, xcb_get_property_value_length);
    LOAD_SYMBOL(libxcb_handle, xcb_disconnect);
    LOAD_SYMBOL(libxcb_handle, xcb_intern_atom);
    LOAD_SYMBOL(libxcb_handle, xcb_intern_atom_reply);
    LOAD_SYMBOL(libxcb_handle, xcb_get_image);
    LOAD_SYMBOL(libxcb_handle, xcb_get_image_reply);
    LOAD_SYMBOL(libxcb_handle, xcb_get_image_data);

#undef LOAD_SYMBOL

    return true;
}

// Function to unload libxcb
static void
unload_xcb_symbols(void)
{
    if (libxcb_handle) {
        dlclose(libxcb_handle);
        libxcb_handle = NULL;
    }
}

static xcb_atom_t
get_atom(xcb_connection_t *connection, const char *name)
{
    xcb_intern_atom_cookie_t atom_cookie
        = p_xcb_intern_atom(connection, 0, strlen(name), name);
    xcb_intern_atom_reply_t *atom_reply
        = p_xcb_intern_atom_reply(connection, atom_cookie, NULL);
    if (!atom_reply) {
        return XCB_ATOM_NONE;
    }
    xcb_atom_t atom = atom_reply->atom;
    free(atom_reply);
    return atom;
}

static uint8_t
get_window_state(xcb_connection_t *connection, xcb_window_t window)
{
    xcb_get_window_attributes_cookie_t attributes_cookie
        = p_xcb_get_window_attributes(connection, window);
    xcb_get_window_attributes_reply_t *attributes_reply
        = p_xcb_get_window_attributes_reply(
            connection, attributes_cookie, NULL);
    if (!attributes_reply) {
        return XCB_MAP_STATE_UNMAPPED;
    }
    uint8_t map_state = attributes_reply->map_state;
    free(attributes_reply);
    return map_state;
}

static pid_t
get_window_pid(xcb_connection_t *connection, xcb_window_t window)
{
    static xcb_atom_t atom = XCB_ATOM_NONE;
    if (atom == XCB_ATOM_NONE) {
        atom = get_atom(connection, "_NET_WM_PID");
    }

    xcb_get_property_cookie_t property_cookie = p_xcb_get_property(
        connection, 0, window, atom, XCB_ATOM_CARDINAL, 0, 1);
    xcb_get_property_reply_t *property_reply
        = p_xcb_get_property_reply(connection, property_cookie, NULL);
    if (!property_reply
        || p_xcb_get_property_value_length(property_reply) == 0) {
        free(property_reply);
        return -1;
    }
    pid_t pid = *(pid_t *)p_xcb_get_property_value(property_reply);
    free(property_reply);
    return pid;
}

static bool
is_app_window(xcb_connection_t *connection, xcb_window_t window, pid_t pid)
{
    if (get_window_pid(connection, window) == pid) {
        return true;
    }

    xcb_query_tree_cookie_t tree_cookie = p_xcb_query_tree(connection, window);
    xcb_query_tree_reply_t *tree_reply
        = p_xcb_query_tree_reply(connection, tree_cookie, NULL);
    if (!tree_reply) {
        return false;
    }

    xcb_window_t *children = p_xcb_query_tree_children(tree_reply);
    int len = p_xcb_query_tree_children_length(tree_reply);

    for (int i = 0; i < len; i++) {
        xcb_window_t child = children[i];
        if (get_window_pid(connection, child) == pid) {
            free(tree_reply);
            return true;
        }
    }

    free(tree_reply);
    return false;
}

static bool
get_frame_extents(xcb_connection_t *connection, xcb_window_t window,
    xcb_atom_t atom, xcb_rectangle_t *rect)
{
    xcb_get_property_cookie_t property_cookie = p_xcb_get_property(
        connection, 0, window, atom, XCB_ATOM_CARDINAL, 0, 4);
    xcb_get_property_reply_t *property_reply
        = p_xcb_get_property_reply(connection, property_cookie, NULL);
    if (!property_reply
        || p_xcb_get_property_value_length(property_reply) == 0) {
        free(property_reply);
        return false;
    }
    int32_t *extents = (int32_t *)p_xcb_get_property_value(property_reply);
    rect->x += extents[0];
    rect->y += extents[2];
    rect->width -= extents[0] + extents[1];
    rect->height -= extents[2] + extents[3];
    free(property_reply);
    return true;
}

static bool
get_window_geometry(
    xcb_connection_t *connection, xcb_window_t window, xcb_rectangle_t *rect)
{
    xcb_get_geometry_cookie_t geometry_cookie
        = p_xcb_get_geometry(connection, window);
    xcb_get_geometry_reply_t *geometry_reply
        = p_xcb_get_geometry_reply(connection, geometry_cookie, NULL);
    if (!geometry_reply) {
        SENTRY_WARN("xcb_get_geometry failed");
        return false;
    }

    xcb_translate_coordinates_cookie_t translate_cookie
        = p_xcb_translate_coordinates(
            connection, window, geometry_reply->root, 0, 0);
    xcb_translate_coordinates_reply_t *translate_reply
        = p_xcb_translate_coordinates_reply(connection, translate_cookie, NULL);
    if (!translate_reply) {
        SENTRY_WARN("xcb_translate_coordinates failed");
        free(geometry_reply);
        return false;
    }

    rect->x = translate_reply->dst_x;
    rect->y = translate_reply->dst_y;
    rect->width = geometry_reply->width;
    rect->height = geometry_reply->height;

    static xcb_atom_t net = XCB_ATOM_NONE;
    if (net == XCB_ATOM_NONE) {
        net = get_atom(connection, "_NET_FRAME_EXTENTS");
    }
    if (!get_frame_extents(connection, window, net, rect)) {
        static xcb_atom_t gtk = XCB_ATOM_NONE;
        if (gtk == XCB_ATOM_NONE) {
            gtk = get_atom(connection, "_GTK_FRAME_EXTENTS");
        }
        get_frame_extents(connection, window, gtk, rect);
    }

    free(geometry_reply);
    free(translate_reply);

    return true;
}

static bool
save_image(
    const uint8_t *data, int width, int height, const sentry_path_t *path)
{
    bool rv = stbi_write_png(path->path, width, height, 4, data, width * 4);
    if (!rv) {
        SENTRY_WARNF("Failed to save screenshot: \"%s\"", path->path);
    } else {
        SENTRY_DEBUGF("Saved screenshot: \"%s\"", path->path);
    }
    return rv;
}

static bool
capture_region(xcb_connection_t *connection, xcb_screen_t *screen,
    region_t *region, const sentry_path_t *path)
{
    xcb_rectangle_t bounds;
    if (!region_get_bounds(region, &bounds) || bounds.width == 0
        || bounds.height == 0) {
        SENTRY_WARN("no visible windows to capture");
        return false;
    }

    xcb_get_image_cookie_t cookie
        = p_xcb_get_image(connection, XCB_IMAGE_FORMAT_Z_PIXMAP, screen->root,
            bounds.x, bounds.y, bounds.width, bounds.height, ~0);
    xcb_get_image_reply_t *image
        = p_xcb_get_image_reply(connection, cookie, NULL);
    if (!image) {
        SENTRY_WARN("xcb_get_image failed");
        return false;
    }

    uint8_t *data = p_xcb_get_image_data(image);
    for (uint16_t y = 0; y < bounds.height; y++) {
        for (uint16_t x = 0; x < bounds.width; x++) {
            int offset = (x + y * bounds.width) * 4;
            if (region_contains(region, bounds.x + x, bounds.y + y)) {
                // convert BGRA -> RGBA
                uint8_t b = data[offset];
                data[offset] = data[offset + 2]; // R
                data[offset + 2] = b; // B
            } else {
                // mask out (black)
                data[offset] = 0; // R
                data[offset + 1] = 0; // G
                data[offset + 2] = 0; // B
                data[offset + 3] = 255; // A
            }
        }
    }

    bool rv = save_image(data, bounds.width, bounds.height, path);
    free(image);
    return rv;
}

static region_t *
calculate_region(xcb_connection_t *connection, xcb_screen_t *screen, pid_t pid)
{
    xcb_query_tree_cookie_t cookie = p_xcb_query_tree(connection, screen->root);
    xcb_query_tree_reply_t *tree
        = p_xcb_query_tree_reply(connection, cookie, NULL);
    if (!tree) {
        return NULL;
    }

    region_t *region = region_new();
    xcb_window_t *windows = p_xcb_query_tree_children(tree);
    int len = p_xcb_query_tree_children_length(tree);

    for (int i = 0; i < len; i++) {
        xcb_window_t window = windows[i];
        if (get_window_state(connection, window) != XCB_MAP_STATE_VIEWABLE) {
            continue;
        }

        xcb_rectangle_t rect;
        if (!get_window_geometry(connection, window, &rect)) {
            continue;
        }

        region_add(region, rect, is_app_window(connection, window, pid));
    }

    free(tree);
    return region;
}

bool
sentry__screenshot_capture(const sentry_path_t *path)
{
    if (!load_xcb_symbols()) {
        return false;
    }

    xcb_connection_t *connection = p_xcb_connect(NULL, NULL);
    if (p_xcb_connection_has_error(connection)) {
        SENTRY_WARN("xcb_connect failed");
        unload_xcb_symbols();
        return false;
    }

    const xcb_setup_t *setup = p_xcb_get_setup(connection);
    xcb_screen_t *screen = p_xcb_setup_roots_iterator(setup).data;
    if (!screen) {
        SENTRY_WARN("xcb_get_setup failed");
        p_xcb_disconnect(connection);
        unload_xcb_symbols();
        return false;
    }

    region_t *region = calculate_region(connection, screen, getpid());
    bool rv = capture_region(connection, screen, region, path);
    region_free(region);

    p_xcb_disconnect(connection);
    unload_xcb_symbols();
    return rv;
}
