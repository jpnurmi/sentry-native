#ifndef SENTRY_XCB_H
#define SENTRY_XCB_H

#include <stdbool.h>
#include <xcb/xcb.h>

bool sentry_xcb_load_symbols(void);
void sentry_xcb_unload_symbols(void);

bool sentry_xcb_is_visible(xcb_connection_t *connection, xcb_window_t window);
pid_t sentry_xcb_get_pid(xcb_connection_t *connection, xcb_window_t window);
bool sentry_xcb_get_geometry(
    xcb_connection_t *connection, xcb_window_t window, xcb_rectangle_t *rect);
int sentry_xcb_foreach_child(xcb_connection_t *connection, xcb_window_t window,
    bool (*callback)(xcb_connection_t *, xcb_window_t, void *), void *data);

extern xcb_connection_t *(*p_xcb_connect)(const char *, int *);
extern int (*p_xcb_connection_has_error)(xcb_connection_t *);
extern const xcb_setup_t *(*p_xcb_get_setup)(xcb_connection_t *);
extern xcb_screen_iterator_t (*p_xcb_setup_roots_iterator)(const xcb_setup_t *);
extern void (*p_xcb_disconnect)(xcb_connection_t *);
extern xcb_get_image_cookie_t (*p_xcb_get_image)(xcb_connection_t *, uint8_t,
    xcb_drawable_t, int16_t, int16_t, uint16_t, uint16_t, uint32_t);
extern xcb_get_image_reply_t *(*p_xcb_get_image_reply)(
    xcb_connection_t *, xcb_get_image_cookie_t, xcb_generic_error_t **);
extern uint8_t *(*p_xcb_get_image_data)(const xcb_get_image_reply_t *);

#endif // SENTRY_XCB_H
