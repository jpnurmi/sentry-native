#include "sentry_xcb.h"

#include "sentry_logger.h"

#include <dlfcn.h>
#include <stdlib.h>
#include <string.h>

static void *libxcb_handle = NULL;

xcb_connection_t *(*p_xcb_connect)(const char *, int *);
int (*p_xcb_connection_has_error)(xcb_connection_t *);
const xcb_setup_t *(*p_xcb_get_setup)(xcb_connection_t *);
xcb_screen_iterator_t (*p_xcb_setup_roots_iterator)(const xcb_setup_t *);
xcb_query_tree_cookie_t (*p_xcb_query_tree)(xcb_connection_t *, xcb_window_t);
xcb_query_tree_reply_t *(*p_xcb_query_tree_reply)(
    xcb_connection_t *, xcb_query_tree_cookie_t, xcb_generic_error_t **);
xcb_window_t *(*p_xcb_query_tree_children)(const xcb_query_tree_reply_t *);
int (*p_xcb_query_tree_children_length)(const xcb_query_tree_reply_t *);
xcb_get_window_attributes_cookie_t (*p_xcb_get_window_attributes)(
    xcb_connection_t *, xcb_window_t);
xcb_get_window_attributes_reply_t *(*p_xcb_get_window_attributes_reply)(
    xcb_connection_t *, xcb_get_window_attributes_cookie_t,
    xcb_generic_error_t **);
xcb_get_geometry_cookie_t (*p_xcb_get_geometry)(
    xcb_connection_t *, xcb_drawable_t);
xcb_get_geometry_reply_t *(*p_xcb_get_geometry_reply)(
    xcb_connection_t *, xcb_get_geometry_cookie_t, xcb_generic_error_t **);
xcb_translate_coordinates_cookie_t (*p_xcb_translate_coordinates)(
    xcb_connection_t *, xcb_window_t, xcb_window_t, int16_t, int16_t);
xcb_translate_coordinates_reply_t *(*p_xcb_translate_coordinates_reply)(
    xcb_connection_t *, xcb_translate_coordinates_cookie_t,
    xcb_generic_error_t **);
xcb_get_property_cookie_t (*p_xcb_get_property)(xcb_connection_t *, uint8_t,
    xcb_window_t, xcb_atom_t, xcb_atom_t, uint32_t, uint32_t);
xcb_get_property_reply_t *(*p_xcb_get_property_reply)(
    xcb_connection_t *, xcb_get_property_cookie_t, xcb_generic_error_t **);
uint8_t *(*p_xcb_get_property_value)(const xcb_get_property_reply_t *);
int (*p_xcb_get_property_value_length)(const xcb_get_property_reply_t *);
void (*p_xcb_disconnect)(xcb_connection_t *);
xcb_intern_atom_cookie_t (*p_xcb_intern_atom)(
    xcb_connection_t *, uint8_t, uint16_t, const char *);
xcb_intern_atom_reply_t *(*p_xcb_intern_atom_reply)(
    xcb_connection_t *, xcb_intern_atom_cookie_t, xcb_generic_error_t **);
xcb_get_image_cookie_t (*p_xcb_get_image)(xcb_connection_t *, uint8_t,
    xcb_drawable_t, int16_t, int16_t, uint16_t, uint16_t, uint32_t);
xcb_get_image_reply_t *(*p_xcb_get_image_reply)(
    xcb_connection_t *, xcb_get_image_cookie_t, xcb_generic_error_t **);
uint8_t *(*p_xcb_get_image_data)(const xcb_get_image_reply_t *);

bool
load_libxcb(void)
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

void
unload_libxcb(void)
{
    if (libxcb_handle) {
        dlclose(libxcb_handle);
        libxcb_handle = NULL;
    }
}

xcb_connection_t *
sentry_xcb_connect(void)
{
    if (!load_libxcb()) {
        return NULL;
    }

    xcb_connection_t *connection = p_xcb_connect(NULL, NULL);
    if (p_xcb_connection_has_error(connection)) {
        SENTRY_WARN("xcb_connect failed");
        unload_libxcb();
        return NULL;
    }

    return connection;
}

void
sentry_xcb_disconnect(xcb_connection_t *connection)
{
    if (libxcb_handle) {
        p_xcb_disconnect(connection);
        unload_libxcb();
    }
}

xcb_window_t
sentry_xcb_get_root(xcb_connection_t *connection)
{
    const xcb_setup_t *setup = p_xcb_get_setup(connection);
    xcb_screen_t *screen = p_xcb_setup_roots_iterator(setup).data;
    if (!screen) {
        SENTRY_WARN("xcb_get_setup failed");
        return XCB_WINDOW_NONE;
    }
    return screen->root;
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

bool
sentry_xcb_is_visible(xcb_connection_t *connection, xcb_window_t window)
{
    xcb_get_window_attributes_cookie_t attributes_cookie
        = p_xcb_get_window_attributes(connection, window);
    xcb_get_window_attributes_reply_t *attributes_reply
        = p_xcb_get_window_attributes_reply(
            connection, attributes_cookie, NULL);
    if (!attributes_reply) {
        return false;
    }

    uint8_t map_state = attributes_reply->map_state;
    free(attributes_reply);
    return map_state == XCB_MAP_STATE_VIEWABLE;
}

pid_t
sentry_xcb_get_pid(xcb_connection_t *connection, xcb_window_t window)
{
    static xcb_atom_t pid_atom = XCB_ATOM_NONE;
    if (pid_atom == XCB_ATOM_NONE) {
        pid_atom = get_atom(connection, "_NET_WM_PID");
    }

    xcb_get_property_cookie_t property_cookie = p_xcb_get_property(
        connection, 0, window, pid_atom, XCB_ATOM_CARDINAL, 0, 1);
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
adjust_frame_extents(xcb_connection_t *connection, xcb_window_t window,
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

bool
sentry_xcb_get_geometry(
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

    static xcb_atom_t frame_atom = XCB_ATOM_NONE;
    if (frame_atom == XCB_ATOM_NONE) {
        frame_atom = get_atom(connection, "_NET_FRAME_EXTENTS");
    }
    if (!adjust_frame_extents(connection, window, frame_atom, rect)) {
        static xcb_atom_t gtk_frame_atom = XCB_ATOM_NONE;
        if (gtk_frame_atom == XCB_ATOM_NONE) {
            gtk_frame_atom = get_atom(connection, "_GTK_FRAME_EXTENTS");
        }
        adjust_frame_extents(connection, window, gtk_frame_atom, rect);
    }

    free(geometry_reply);
    free(translate_reply);
    return true;
}

int
sentry_xcb_foreach_child(xcb_connection_t *connection, xcb_window_t window,
    bool (*callback)(xcb_connection_t *, xcb_window_t, void *), void *data)
{
    xcb_query_tree_cookie_t tree_cookie = p_xcb_query_tree(connection, window);
    xcb_query_tree_reply_t *tree_reply
        = p_xcb_query_tree_reply(connection, tree_cookie, NULL);
    if (!tree_reply) {
        return -1;
    }

    int rv = 0;
    xcb_window_t *children = p_xcb_query_tree_children(tree_reply);
    int len = p_xcb_query_tree_children_length(tree_reply);

    for (int i = 0; i < len; i++) {
        if (callback(connection, children[i], data)) {
            rv++;
        }
    }

    free(tree_reply);
    return rv;
}

uint8_t *
sentry_xcb_get_image(xcb_connection_t *connection, xcb_window_t window,
    int16_t x, int16_t y, uint16_t width, uint16_t height)
{
    xcb_get_image_cookie_t image_cookie = p_xcb_get_image(
        connection, XCB_IMAGE_FORMAT_Z_PIXMAP, window, x, y, width, height, ~0);
    xcb_get_image_reply_t *image_reply
        = p_xcb_get_image_reply(connection, image_cookie, NULL);
    if (!image_reply) {
        SENTRY_WARN("xcb_get_image failed");
        return NULL;
    }

    return p_xcb_get_image_data(image_reply);
}

void
sentry_xcb_image_free(uint8_t *image)
{
    xcb_get_image_reply_t *image_reply = (xcb_get_image_reply_t *)image - 1;
    free(image_reply);
}
