#include "sentry_screenshot.h"

#include "sentry_logger.h"
#include "sentry_path.h"
#include "sentry_xcb.h"

#include <stdlib.h>
#include <string.h>

#include "../vendor/stb_image_write.h"

typedef struct {
    struct xcb_rectangle_t rect;
    bool value;
} region_item_t;

typedef struct {
    region_item_t *items;
    size_t count;
    size_t capacity;
    xcb_rectangle_t bounds;
    bool dirty;
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
    memset(&region->bounds, 0, sizeof(region->bounds));
    region->dirty = false;
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
    region->dirty = true;
}

static void
region_update_bounds(region_t *region)
{
    int16_t min_x = INT16_MAX;
    int16_t min_y = INT16_MAX;
    int16_t max_x = INT16_MIN;
    int16_t max_y = INT16_MIN;

    for (size_t i = 0; i < region->count; i++) {
        region_item_t *item = &region->items[i];
        if (item->value) {
            min_x = MIN(min_x, item->rect.x);
            min_y = MIN(min_y, item->rect.y);
            max_x = MAX(max_x, item->rect.x + item->rect.width);
            max_y = MAX(max_y, item->rect.y + item->rect.height);
        }
    }

    if (min_x < max_x && min_y < max_y) {
        region->bounds.x = min_x;
        region->bounds.y = min_y;
        region->bounds.width = max_x - min_x;
        region->bounds.height = max_y - min_y;
    } else {
        region->bounds.x = 0;
        region->bounds.y = 0;
        region->bounds.width = 0;
        region->bounds.height = 0;
    }
    region->dirty = false;
}

static bool
region_get_bounds(region_t *region, xcb_rectangle_t *bounds)
{
    if (!region || region->count == 0) {
        return false;
    }

    if (region->dirty) {
        region_update_bounds(region);
    }

    *bounds = region->bounds;
    return true;
}

static bool
region_contains(region_t *region, int16_t x, int16_t y)
{
    if (!region || region->count == 0) {
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
capture_region(xcb_connection_t *connection, xcb_window_t window,
    region_t *region, const sentry_path_t *path)
{
    xcb_rectangle_t bounds;
    if (!region_get_bounds(region, &bounds) || bounds.width == 0
        || bounds.height == 0) {
        SENTRY_WARN("no visible windows to capture");
        return false;
    }

    xcb_get_image_cookie_t image_cookie
        = p_xcb_get_image(connection, XCB_IMAGE_FORMAT_Z_PIXMAP, window,
            bounds.x, bounds.y, bounds.width, bounds.height, ~0);
    xcb_get_image_reply_t *image_reply
        = p_xcb_get_image_reply(connection, image_cookie, NULL);
    if (!image_reply) {
        SENTRY_WARN("xcb_get_image failed");
        return false;
    }

    uint8_t *data = p_xcb_get_image_data(image_reply);
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
    free(image_reply);
    return rv;
}

static bool
is_app_window(xcb_connection_t *connection, xcb_window_t window, void *data)
{
    pid_t pid = *(pid_t *)data;
    return sentry_xcb_get_pid(connection, window) == pid;
}

static bool
add_region(xcb_connection_t *connection, xcb_window_t window, void *data)
{
    if (!sentry_xcb_is_visible(connection, window)) {
        return true;
    }

    xcb_rectangle_t rect;
    if (!sentry_xcb_get_geometry(connection, window, &rect)) {
        return true;
    }

    // either top-level-window (CSD) or its child (SSD)
    pid_t pid = getpid();
    bool value = is_app_window(connection, window, &pid)
        || sentry_xcb_foreach_child(connection, window, is_app_window, &pid)
            > 0;

    region_add((region_t *)data, rect, value);
    return true;
}

bool
sentry__screenshot_capture(const sentry_path_t *path)
{
    if (!sentry_xcb_load_symbols()) {
        return false;
    }

    xcb_connection_t *connection = p_xcb_connect(NULL, NULL);
    if (p_xcb_connection_has_error(connection)) {
        SENTRY_WARN("xcb_connect failed");
        sentry_xcb_unload_symbols();
        return false;
    }

    const xcb_setup_t *setup = p_xcb_get_setup(connection);
    xcb_screen_t *screen = p_xcb_setup_roots_iterator(setup).data;
    if (!screen) {
        SENTRY_WARN("xcb_get_setup failed");
        p_xcb_disconnect(connection);
        sentry_xcb_unload_symbols();
        return false;
    }

    region_t *region = region_new();
    sentry_xcb_foreach_child(connection, screen->root, add_region, region);
    bool rv = capture_region(connection, screen->root, region, path);
    region_free(region);

    p_xcb_disconnect(connection);
    sentry_xcb_unload_symbols();
    return rv;
}
