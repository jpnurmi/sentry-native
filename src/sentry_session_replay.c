#include "sentry_session_replay.h"

#include <stdio.h>

// static LRESULT CALLBACK
// window_proc(int nCode, WPARAM wParam, LPARAM lParam)
// {
//     fprintf(stderr, "### window_callback %d\n", nCode);
//     HWND hwnd = (HWND)wParam;
//     WCHAR title[256];
//     switch (nCode) {
//     case HCBT_CREATEWND:
//         GetWindowText(hwnd, title, sizeof(title));
//         fprintf(stderr, "### HCBT_CREATEWND hwnd=%p, title=%S\n", hwnd,
//         title); break;
//     case HCBT_DESTROYWND:
//         GetWindowText(hwnd, title, sizeof(title));
//         fprintf(stderr, "### HCBT_DESTROYWND hwnd=%p, title=%S\n", hwnd,
//         title); break;
//     }
//     return CallNextHookEx(NULL, nCode, wParam, lParam);
// }

static LRESULT CALLBACK
mouse_proc(int nCode, WPARAM wParam, LPARAM lParam)
{
    if (nCode >= 0) {
        MOUSEHOOKSTRUCT *pMouse = (MOUSEHOOKSTRUCT *)lParam;
        WCHAR title[256];

        sentry_value_t crumb = sentry_value_new_breadcrumb("ui.click", );

        sentry_value_set_by_key(
            crumb, "category", sentry_value_new_string("info"));
        sentry_value_set_by_key(
            crumb, "level", sentry_value_new_string("info"));

        sentry_value_t location = sentry_value_new_object();
        sentry_value_set_by_key(
            location, "file", sentry_value_new_string(context.file));
        sentry_value_set_by_key(
            location, "line", sentry_value_new_int32(context.line));
        sentry_value_set_by_key(crumb, "data", location);

        if (wParam == WM_LBUTTONDOWN) {
            GetWindowText(pMouse->hwnd, title, sizeof(title));
            fprintf(stderr,
                "### WM_LBUTTONDOWN hwnd=%p, x=%ld, y=%ld, title=%S\n",
                pMouse->hwnd, pMouse->pt.x, pMouse->pt.y, title);
            sentry_add_breadcrumb(sentry_value_new_breadcrumb("click", title));
        } else if (wParam == WM_RBUTTONDOWN) {
            GetWindowText(pMouse->hwnd, title, sizeof(title));
            fprintf(stderr,
                "### WM_RBUTTONDOWN hwnd=%p, x=%ld, y=%ld, title=%S\n",
                pMouse->hwnd, pMouse->pt.x, pMouse->pt.y, title);
        }
    }
    return CallNextHookEx(NULL, nCode, wParam, lParam);
}

void
sentry__session_replay_init(void)
{
    // SetWindowsHookEx(WH_CBT, window_proc, NULL, GetCurrentThreadId());
    SetWindowsHookEx(WH_MOUSE, mouse_proc, NULL, GetCurrentThreadId());
}
