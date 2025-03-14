extern "C" {
#include "sentry_logger.h"

#include "sentry_path.h"
#include "sentry_screenshot.h"
}

#ifdef QT_WIDGETS_LIB
#    include <QtGui/qpixmap.h>
#    include <QtWidgets/qapplication.h>
#    include <QtWidgets/qwidget.h>
#endif

#ifdef QT_QUICK_LIB
#    include <QtGui/qguiapplication.h>
#    include <QtGui/qimage.h>
#    include <QtQuick/qquickwindow.h>
#endif

int
sentry__screenshot_capture(const sentry_path_t *dir)
{
#if defined(QT_WIDGETS_LIB) || defined(QT_QUICK_LIB)
    int rv = 0;

#    ifdef QT_WIDGETS_LIB
    const QWidgetList widgets = QApplication::topLevelWidgets();
    for (auto widget : widgets) {
        if (!widget->isVisible()) {
            continue;
        }

        QPixmap pixmap = widget->grab();
        if (!pixmap.isNull()) {
            sentry_path_t *path = sentry__screenshot_get_path(dir, rv);
            if (pixmap.save(path->path)) {
                SENTRY_DEBUGF(
                    "Saved screenshot: \"%" SENTRY_PATH_PRI "\"", path->path);
                rv++;
            } else {
                SENTRY_WARNF("Failed to save screenshot: \"%" SENTRY_PATH_PRI
                             "\"",
                    path->path);
            }
            sentry__path_free(path);
        }
    }
#    endif

#    ifdef QT_QUICK_LIB
    const QWindowList windows = QGuiApplication::topLevelWindows();
    for (auto window : windows) {
        QQuickWindow *quickWindow = qobject_cast<QQuickWindow *>(window);
        if (!window->isVisible() || !quickWindow) {
            continue;
        }

        QImage image = quickWindow->grabWindow();
        if (!image.isNull()) {
            sentry_path_t *path = sentry__screenshot_get_path(dir, rv);
            if (image.save(path->path)) {
                SENTRY_DEBUGF(
                    "Saved screenshot: \"%" SENTRY_PATH_PRI "\"", path->path);
                rv++;
            } else {
                SENTRY_WARNF("Failed to save screenshot: \"%" SENTRY_PATH_PRI
                             "\"",
                    path->path);
            }
            sentry__path_free(path);
        }
    }
#    endif

    if (rv == 0) {
        SENTRY_INFO("no visible windows to capture");
    }
    return rv;
#else
    (void)dir;
    return 0;
#endif
}
