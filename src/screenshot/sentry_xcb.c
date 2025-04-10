#include "sentry_xcb.h"
#include "sentry_logger.h"
#include <dlfcn.h>

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
sentry_xcb_load_symbols(void)
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
sentry_xcb_unload_symbols(void)
{
    if (libxcb_handle) {
        dlclose(libxcb_handle);
        libxcb_handle = NULL;
    }
}
