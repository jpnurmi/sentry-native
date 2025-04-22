window.BENCHMARK_DATA = {
  "lastUpdate": 1745334895853,
  "repoUrl": "https://github.com/jpnurmi/sentry-native",
  "entries": {
    "macos-latest benchmarks": [
      {
        "commit": {
          "author": {
            "email": "jpnurmi@gmail.com",
            "name": "J-P Nurmi",
            "username": "jpnurmi"
          },
          "committer": {
            "email": "jpnurmi@gmail.com",
            "name": "J-P Nurmi",
            "username": "jpnurmi"
          },
          "distinct": true,
          "id": "56251e5fac2c48b5cf5aaf03d0c250618cb5541f",
          "message": "macos",
          "timestamp": "2025-04-22T17:11:32+02:00",
          "tree_id": "4835d77c251ec095a6d0cf6394b1fb34508dafad",
          "url": "https://github.com/jpnurmi/sentry-native/commit/56251e5fac2c48b5cf5aaf03d0c250618cb5541f"
        },
        "date": 1745334894345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 3.3694169999876067,
            "unit": "ms",
            "extra": 1.8199999999999328
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 4.026082999985192,
            "unit": "ms",
            "extra": 1.607000000000136
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 3.3099169999672995,
            "unit": "ms",
            "extra": 1.6330000000001066
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 12.257709000039085,
            "unit": "ms",
            "extra": 4.293000000000324
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.02395899997509332,
            "unit": "ms",
            "extra": 0.024000000000024002
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.2417079999759153,
            "unit": "ms",
            "extra": 0.2409999999999357
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 6.126832999996168,
            "unit": "ms",
            "extra": 0.8220000000001004
          }
        ]
      }
    ]
  }
}