#include "sentry_path.h"
#include "sentry_scope.h"
#include "sentry_testsupport.h"
#include "sentry_value.h"

#include "../vendor/mpack.h"

SENTRY_TEST(mpack_removed_tags)
{
    sentry_value_t obj = sentry_value_new_object();

    sentry_set_tag("foo", "foo");
    sentry_set_tag("bar", "bar");
    sentry_set_tag("baz", "baz");
    sentry_set_tag("qux", "qux");
    sentry_remove_tag("bar");
    sentry_set_extra("null", sentry_value_new_null());
    sentry_set_extra("bool", sentry_value_new_bool(true));
    sentry_set_extra("int", sentry_value_new_int32(1234));
    sentry_set_extra("double", sentry_value_new_double(12.34));

    SENTRY_TEST_OPTIONS_NEW(options);
    SENTRY_WITH_SCOPE (scope) {
        sentry__scope_apply_to_event(scope, options, obj, SENTRY_SCOPE_NONE);
    }

    size_t size;
    char *buf = sentry_value_to_msgpack(obj, &size);

    sentry_options_free(options);
    sentry_value_decref(obj);
    sentry_free(buf);
    sentry__scope_cleanup();
}

SENTRY_TEST(mpack_newlines)
{
    sentry_value_t o = sentry_value_new_object();
    sentry_value_set_by_key(
        o, "some prop", sentry_value_new_string("lf\ncrlf\r\nlf\n..."));
    sentry_value_set_by_key(o, "some other", sentry_value_new_string("prop"));

    size_t size;
    char *buf = sentry_value_to_msgpack(o, &size);

    sentry_path_t *file
        = sentry__path_from_str(SENTRY_TEST_PATH_PREFIX ".mpack-buf");
    sentry__path_append_buffer(file, buf, size);

    size_t size_rt;
    char *buf_rt = sentry__path_read_to_buffer(file, &size_rt);

    TEST_CHECK_INT_EQUAL(size, size_rt);
    TEST_CHECK(!memcmp(buf, buf_rt, size));

    sentry_value_decref(o);
    sentry_free(buf);
    sentry_free(buf_rt);

    sentry__path_remove(file);
    sentry__path_free(file);
}

SENTRY_TEST(mpack_ring_buffer)
{
    sentry_value_t rb = sentry_value_new_list();

    sentry__value_append_ringbuffer(
        rb, sentry_value_new_breadcrumb("info", "foo"), 3);
    sentry__value_append_ringbuffer(
        rb, sentry_value_new_breadcrumb("info", "bar"), 3);
    sentry__value_append_ringbuffer(
        rb, sentry_value_new_breadcrumb("info", "baz"), 3);
    sentry__value_append_ringbuffer(
        rb, sentry_value_new_breadcrumb("info", "qux"), 3);

    size_t size;
    char *buf = sentry__value_ring_buffer_to_msgpack(rb, &size);

    mpack_reader_t reader;
    mpack_reader_init_data(&reader, buf, size);

    // a flat stream of 3 objects (not an array)
    for (int i = 0; i < 3; i++) {
        mpack_tag_t tag = mpack_peek_tag(&reader);
        TEST_CHECK(tag.type == mpack_type_map);
        mpack_discard(&reader);
    }

    mpack_tag_t tag = mpack_peek_tag(&reader);
    TEST_CHECK(tag.type == mpack_type_nil);

    mpack_reader_destroy(&reader);

    sentry_free(buf);
    sentry_value_decref(rb);
}
