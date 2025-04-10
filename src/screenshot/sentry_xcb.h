#ifndef SENTRY_XCB_H
#define SENTRY_XCB_H

#include <stdbool.h>
#include <xcb/xcb.h>

xcb_connection_t *sentry_xcb_connect(void);
void sentry_xcb_disconnect(xcb_connection_t *connection);
xcb_window_t sentry_xcb_get_root(xcb_connection_t *connection);
bool sentry_xcb_is_visible(xcb_connection_t *connection, xcb_window_t window);
pid_t sentry_xcb_get_pid(xcb_connection_t *connection, xcb_window_t window);
bool sentry_xcb_get_geometry(
    xcb_connection_t *connection, xcb_window_t window, xcb_rectangle_t *rect);
int sentry_xcb_foreach_child(xcb_connection_t *connection, xcb_window_t window,
    bool (*callback)(xcb_connection_t *, xcb_window_t, void *), void *data);
uint8_t *sentry_xcb_get_image(xcb_connection_t *connection, xcb_window_t window,
    int16_t x, int16_t y, uint16_t width, uint16_t height);
void sentry_xcb_image_free(uint8_t *image);

#endif // SENTRY_XCB_H
