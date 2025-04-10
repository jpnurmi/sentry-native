#ifndef SENTRY_XCB_H
#define SENTRY_XCB_H

#include <stdbool.h>
#include <xcb/xcb.h>

bool sentry_xcb_load_symbols(void);
void sentry_xcb_unload_symbols(void);

extern xcb_connection_t *(*p_xcb_connect)(const char *, int *);
extern int (*p_xcb_connection_has_error)(xcb_connection_t *);
extern const xcb_setup_t *(*p_xcb_get_setup)(xcb_connection_t *);
extern xcb_screen_iterator_t (*p_xcb_setup_roots_iterator)(const xcb_setup_t *);
extern xcb_query_tree_cookie_t (*p_xcb_query_tree)(
    xcb_connection_t *, xcb_window_t);
extern xcb_query_tree_reply_t *(*p_xcb_query_tree_reply)(
    xcb_connection_t *, xcb_query_tree_cookie_t, xcb_generic_error_t **);
extern xcb_window_t *(*p_xcb_query_tree_children)(
    const xcb_query_tree_reply_t *);
extern int (*p_xcb_query_tree_children_length)(const xcb_query_tree_reply_t *);
extern xcb_get_window_attributes_cookie_t (*p_xcb_get_window_attributes)(
    xcb_connection_t *, xcb_window_t);
extern xcb_get_window_attributes_reply_t *(*p_xcb_get_window_attributes_reply)(
    xcb_connection_t *, xcb_get_window_attributes_cookie_t,
    xcb_generic_error_t **);
extern xcb_get_geometry_cookie_t (*p_xcb_get_geometry)(
    xcb_connection_t *, xcb_drawable_t);
extern xcb_get_geometry_reply_t *(*p_xcb_get_geometry_reply)(
    xcb_connection_t *, xcb_get_geometry_cookie_t, xcb_generic_error_t **);
extern xcb_translate_coordinates_cookie_t (*p_xcb_translate_coordinates)(
    xcb_connection_t *, xcb_window_t, xcb_window_t, int16_t, int16_t);
extern xcb_translate_coordinates_reply_t *(*p_xcb_translate_coordinates_reply)(
    xcb_connection_t *, xcb_translate_coordinates_cookie_t,
    xcb_generic_error_t **);
extern xcb_get_property_cookie_t (*p_xcb_get_property)(xcb_connection_t *,
    uint8_t, xcb_window_t, xcb_atom_t, xcb_atom_t, uint32_t, uint32_t);
extern xcb_get_property_reply_t *(*p_xcb_get_property_reply)(
    xcb_connection_t *, xcb_get_property_cookie_t, xcb_generic_error_t **);
extern uint8_t *(*p_xcb_get_property_value)(const xcb_get_property_reply_t *);
extern int (*p_xcb_get_property_value_length)(const xcb_get_property_reply_t *);
extern void (*p_xcb_disconnect)(xcb_connection_t *);
extern xcb_intern_atom_cookie_t (*p_xcb_intern_atom)(
    xcb_connection_t *, uint8_t, uint16_t, const char *);
extern xcb_intern_atom_reply_t *(*p_xcb_intern_atom_reply)(
    xcb_connection_t *, xcb_intern_atom_cookie_t, xcb_generic_error_t **);
extern xcb_get_image_cookie_t (*p_xcb_get_image)(xcb_connection_t *, uint8_t,
    xcb_drawable_t, int16_t, int16_t, uint16_t, uint16_t, uint32_t);
extern xcb_get_image_reply_t *(*p_xcb_get_image_reply)(
    xcb_connection_t *, xcb_get_image_cookie_t, xcb_generic_error_t **);
extern uint8_t *(*p_xcb_get_image_data)(const xcb_get_image_reply_t *);

#endif // SENTRY_XCB_H
