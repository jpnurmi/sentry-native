import email
import gzip
import os
import shutil
import sys

import pytest

from . import make_dsn, run


def assert_screenshot_file(database_path):
    run_dirs = [d for d in database_path.glob("*.run") if d.is_dir()]
    assert (
        len(run_dirs) == 1
    ), f"Expected exactly one .run directory, found {len(run_dirs)}"
    screenshot_path = run_dirs[0] / "screenshot.png"
    assert screenshot_path.exists(), "No screenshot was captured"
    assert screenshot_path.stat().st_size > 0, "Screenshot file is empty"


def assert_screenshot_upload(req):
    multipart = gzip.decompress(req.get_data())
    msg = email.message_from_bytes(bytes(str(req.headers), encoding="utf8") + multipart)
    payload = None
    for part in msg.walk():
        if part.get_filename() == "screenshot.png":
            payload = part.get_payload(decode=True)
            break
    assert payload is not None
    assert len(payload) > 0


@pytest.mark.skipif(
    sys.platform != "win32",
    reason="Screenshots are only supported on Windows",
)
@pytest.mark.parametrize(
    "build_args",
    [
        ({"SENTRY_BACKEND": "inproc"}),
        ({"SENTRY_BACKEND": "breakpad"}),
    ],
)
def test_capture_screesnhot(cmake, httpserver, build_args):
    build_args.update({"SENTRY_TRANSPORT": "none"})
    tmp_path = cmake(["sentry_screenshot"], build_args)

    # make sure we are isolated from previous runs
    shutil.rmtree(tmp_path / ".sentry-native", ignore_errors=True)

    env = dict(os.environ, SENTRY_DSN=make_dsn(httpserver))

    child = run(tmp_path, "sentry_screenshot", ["crash"], env=env)
    assert child.returncode

    assert_screenshot_file(tmp_path / ".sentry-native")


@pytest.mark.skipif(
    sys.platform != "win32",
    reason="Screenshots are only supported on Windows",
)
def test_capture_screesnhot_crashpad(cmake, httpserver):
    tmp_path = cmake(["sentry_screenshot"], {"SENTRY_BACKEND": "crashpad"})

    # make sure we are isolated from previous runs
    shutil.rmtree(tmp_path / ".sentry-native", ignore_errors=True)

    env = dict(os.environ, SENTRY_DSN=make_dsn(httpserver), SENTRY_RELEASE="🤮🚀")
    httpserver.expect_oneshot_request("/api/123456/minidump/").respond_with_data("OK")
    httpserver.expect_request("/api/123456/envelope/").respond_with_data("OK")

    with httpserver.wait(timeout=10) as waiting:
        child = run(tmp_path, "sentry_screenshot", ["crash"], env=env)
        assert child.returncode

    assert waiting.result

    assert len(httpserver.log) == 1
    assert_screenshot_upload(httpserver.log[0][0])
    assert_screenshot_file(tmp_path / ".sentry-native")
