#include "sentry_screenshot.h"

sentry_path_t *
sentry__screenshot_get_path(const sentry_path_t *dir, size_t index)
{
#ifdef SENTRY_PLATFORM_WINDOWS
    (void)index;
    return sentry__path_join_wstr(dir, L"screenshot.png");
#else
    // screenshot.png, screenshot-1.png, screenshot-2.png, ...
    if (index == 0) {
        return sentry__path_join_str(dir, "screenshot.png");
    }
    char filename[20];
    snprintf(filename, sizeof(filename), "screenshot-%zu.png", index);
    return sentry__path_join_str(dir, filename);
#endif
}
