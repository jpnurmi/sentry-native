#include "sentry_screenshot.h"

#include "sentry_logger.h"
#include "sentry_path.h"

#ifndef DWMWA_EXTENDED_FRAME_BOUNDS
#    define DWMWA_EXTENDED_FRAME_BOUNDS 9
#endif

typedef enum { GpOk = 0 } GpStatus;
typedef struct {
    UINT32 GdiplusVersion;
    PVOID DebugEventCallback;
    BOOL SuppressBackgroundThread;
    BOOL SuppressExternalCodecs;
} GdiplusStartupInput;
typedef void GpBitmap;
typedef void GpImage;

typedef GpStatus(WINAPI *GdiplusStartup_t)(
    ULONG_PTR *token, const GdiplusStartupInput *input, void *output);
typedef GpStatus(WINAPI *GdipCreateBitmapFromHBITMAP_t)(
    HBITMAP hbm, HPALETTE hpal, GpBitmap **bitmap);
typedef GpStatus(WINAPI *GdipSaveImageToFile_t)(GpImage *image,
    const wchar_t *filename, const CLSID *encoder, const void *params);
typedef GpStatus(WINAPI *GdipDisposeImage_t)(GpImage *image);

typedef HRESULT(WINAPI *DwmGetWindowAttribute_t)(
    HWND hwnd, DWORD dwAttribute, PVOID pvAttribute, DWORD cbAttribute);

static bool
save_bitmap(HBITMAP bitmap, const wchar_t *path)
{
    HMODULE gdiplus = LoadLibraryW(L"gdiplus.dll");
    if (!gdiplus) {
        return false;
    }

    GdiplusStartup_t pGdiplusStartup
        = (GdiplusStartup_t)GetProcAddress(gdiplus, "GdiplusStartup");
    GdipCreateBitmapFromHBITMAP_t pGdipCreateBitmapFromHBITMAP
        = (GdipCreateBitmapFromHBITMAP_t)GetProcAddress(
            gdiplus, "GdipCreateBitmapFromHBITMAP");
    GdipSaveImageToFile_t pGdipSaveImageToFile
        = (GdipSaveImageToFile_t)GetProcAddress(gdiplus, "GdipSaveImageToFile");
    GdipDisposeImage_t pGdipDisposeImage
        = (GdipDisposeImage_t)GetProcAddress(gdiplus, "GdipDisposeImage");

    if (!pGdiplusStartup || !pGdipCreateBitmapFromHBITMAP
        || !pGdipSaveImageToFile || !pGdipDisposeImage) {
        FreeLibrary(gdiplus);
        return false;
    }

    GdiplusStartupInput input;
    ZeroMemory(&input, sizeof(input));
    input.GdiplusVersion = 1;

    ULONG_PTR token = 0;
    if (pGdiplusStartup(&token, &input, NULL) != GpOk) {
        FreeLibrary(gdiplus);
        return false;
    }

    GpImage *image = NULL;
    if (pGdipCreateBitmapFromHBITMAP(bitmap, NULL, &image) != GpOk) {
        FreeLibrary(gdiplus);
        return false;
    }

    // CLSIDFromString(L"{557cf406-1a04-11d3-9a73-0000f81ef32e}")
    CLSID GdiPngEncoder = { 0x557cf406, 0x1a04, 0x11d3,
        { 0x9a, 0x73, 0x00, 0x00, 0xf8, 0x1e, 0xf3, 0x2e } };
    GpStatus rv = pGdipSaveImageToFile(image, path, &GdiPngEncoder, NULL);
    pGdipDisposeImage(image);
    FreeLibrary(gdiplus);
    return rv == GpOk;
}

static void
calculate_region(DWORD pid, HRGN region)
{
    HMODULE dwmapi = LoadLibraryW(L"dwmapi.dll");
    if (!dwmapi) {
        return;
    }
    DwmGetWindowAttribute_t pDwmGetWindowAttribute
        = (DwmGetWindowAttribute_t)GetProcAddress(
            dwmapi, "DwmGetWindowAttribute");
    if (!pDwmGetWindowAttribute) {
        return;
    }

    HWND hwnd = GetShellWindow();
    while (hwnd) {
        if (IsWindowVisible(hwnd)) {
            RECT frame = { 0 };
            pDwmGetWindowAttribute(
                hwnd, DWMWA_EXTENDED_FRAME_BOUNDS, &frame, sizeof(RECT));
            if (frame.right > frame.left && frame.bottom > frame.top) {
                DWORD wpid = 0;
                GetWindowThreadProcessId(hwnd, &wpid);
                HRGN wregion = CreateRectRgnIndirect(&frame);
                if (wpid == pid) {
                    CombineRgn(region, region, wregion, RGN_OR);
                } else {
                    CombineRgn(region, region, wregion, RGN_DIFF);
                }
                DeleteObject(wregion);
            }
        }
        hwnd = GetWindow(hwnd, GW_HWNDPREV);
    }
}

bool
sentry__screenshot_capture(const sentry_path_t *path)
{
    HRGN region = CreateRectRgn(0, 0, 0, 0);
    calculate_region(GetCurrentProcessId(), region);

    RECT box;
    GetRgnBox(region, &box);
    LONG width = box.right - box.left;
    LONG height = box.bottom - box.top;
    if (width <= 0 || height <= 0) {
        DeleteObject(region);
        return false;
    }

    HDC src = GetDC(NULL);
    HDC hdc = CreateCompatibleDC(src);
    HBITMAP bitmap = CreateCompatibleBitmap(src, width, height);
    SelectObject(hdc, bitmap);
    OffsetRgn(region, -box.left, -box.top);
    SelectClipRgn(hdc, region);
    BitBlt(hdc, 0, 0, width, height, src, box.left, box.top, SRCCOPY);

    bool rv = save_bitmap(bitmap, path->path);
    if (!rv) {
        SENTRY_WARNF(
            "Failed to save screenshot: \"%" SENTRY_PATH_PRI "\"", path->path);
    } else {
        SENTRY_DEBUGF("Saved screenshot: \"%" SENTRY_PATH_PRI "\"", path->path);
    }

    DeleteObject(bitmap);
    DeleteDC(hdc);
    ReleaseDC(NULL, src);
    DeleteObject(region);
    return rv;
}
