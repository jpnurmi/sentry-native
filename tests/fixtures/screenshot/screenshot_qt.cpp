#include <sentry.h>

#include <QtCore/qtimer.h>
#include <QtGui/qpalette.h>
#include <QtWidgets/qapplication.h>
#include <QtWidgets/qwidget.h>

static void *invalid_mem = (void *)1;

static void
trigger_crash()
{
    memset((char *)invalid_mem, 1, 100);
}

static void
trigger_stack_overflow()
{
    alloca(1024);
    trigger_stack_overflow();
}

int
main(int argc, char *argv[])
{
    sentry_options_t *options = sentry_options_new();
    sentry_options_set_release(options, "sentry-screenshot");
    sentry_options_set_attach_screenshot(options, true);
    sentry_options_set_debug(options, true);
    sentry_init(options);

    QApplication app(argc, argv);

    QWidget window;
    QPalette palette;
    palette.setColor(QPalette::Window, QColor(37, 31, 61));
    window.setPalette(palette);
    window.setWindowTitle("Hello, Sentry!");
    window.setWindowFlag(Qt::WindowStaysOnTopHint);
    window.resize(300, 200);
    window.show();

    int delay = 100;
    const QStringList args = app.arguments();
    if (args.contains("crash")) {
        QTimer::singleShot(delay, trigger_crash);
    }
    if (args.contains("stack-overflow")) {
        QTimer::singleShot(delay, trigger_stack_overflow);
    }

    int res = app.exec();
    sentry_close();
    return res;
}
