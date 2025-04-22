window.BENCHMARK_DATA = {
  "lastUpdate": 1745334961677,
  "repoUrl": "https://github.com/jpnurmi/sentry-native",
  "entries": {
    "ubuntu-latest benchmarks": [
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
        "date": 1745334960793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 1.5610150000213707,
            "unit": "ms",
            "extra": 0.9755990000000005
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 0.8315670000058617,
            "unit": "ms",
            "extra": 0.8305689999999998
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.9304419999978109,
            "unit": "ms",
            "extra": 0.9289820000000001
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 3.2841390000157844,
            "unit": "ms",
            "extra": 1.724474
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.021499999945717718,
            "unit": "ms",
            "extra": 0.019876999999999742
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.04886100003886895,
            "unit": "ms",
            "extra": 0.04740799999999965
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 2.0543690000067727,
            "unit": "ms",
            "extra": 0.6754380000000004
          }
        ]
      }
    ]
  }
}