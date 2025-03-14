#ifndef SENTRY_SCREENSHOT_H_INCLUDED
#define SENTRY_SCREENSHOT_H_INCLUDED

#include "sentry_boot.h"

#include "sentry_path.h"

/**
 * Captures screenshots and saves them to the specified dir.
 *
 * Returns the number of screenshots that were successfully captured and saved.
 */
int sentry__screenshot_capture(const sentry_path_t *dir);

/**
 * Returns the path where a screenshot at the specified index should be saved.
 */
sentry_path_t *sentry__screenshot_get_path(
    const sentry_path_t *dir, size_t index);

#endif
