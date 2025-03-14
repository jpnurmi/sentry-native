extern "C" {
#include "sentry_logger.h"

#include "sentry_path.h"
#include "sentry_screenshot.h"
}

#ifdef QT_GUI_LIB
#    include <QtGui/qguiapplication.h>
#    include <QtGui/qpainter.h>
#    include <QtGui/qpixmap.h>
#    include <QtGui/qscreen.h>
#    include <QtGui/qwindow.h>
#endif

bool
sentry__screenshot_capture(const sentry_path_t *path)
{
#ifdef QT_GUI_LIB
    qreal dpr = 1.0;
    QRect bounds;
    QList<QRect> rects;
    QList<QPixmap> pixmaps;
    QSet<QWindow *> captured;

    const QWindowList windows = QGuiApplication::topLevelWindows();
    for (auto window : windows) {
        if (!window->isVisible()) {
            continue;
        }

        QPixmap pixmap = window->screen()->grabWindow(window->winId());
        if (!pixmap.isNull()) {
            dpr = std::max(dpr, pixmap.devicePixelRatio());
            pixmaps += pixmap;
            rects += window->geometry();
            bounds = bounds.united(rects.last());
        }
    }

    if (bounds.isEmpty()) {
        SENTRY_INFO("no visible windows to capture");
        return false;
    }

    QPixmap pixmap(bounds.size() * dpr);
    pixmap.setDevicePixelRatio(dpr);
    pixmap.fill(Qt::transparent);
    QPainter painter(&pixmap);
    for (int i = 0; i < pixmaps.size(); ++i) {
        painter.drawPixmap(rects[i].topLeft() - bounds.topLeft(), pixmaps[i]);
    }
    painter.end();
    if (pixmap.save(path->path)) {
        SENTRY_DEBUGF("Saved screenshot: \"%" SENTRY_PATH_PRI "\"", path->path);
    } else {
        SENTRY_WARNF(
            "Failed to save screenshot: \"%" SENTRY_PATH_PRI "\"", path->path);
    }
    return true;
#else
    (void)path;
    return false;
#endif
}
