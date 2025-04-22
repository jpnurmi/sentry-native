window.BENCHMARK_DATA = {
  "lastUpdate": 1745336347360,
  "repoUrl": "https://github.com/jpnurmi/sentry-native",
  "entries": {
    "macOS benchmarks": [
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
          "id": "46952de89a24687c2db0462b71fa9accd82e022e",
          "message": "zlib1g-dev",
          "timestamp": "2025-04-22T17:35:35+02:00",
          "tree_id": "0138646f6b6ac1dfb117384c3f2adb5055d429fa",
          "url": "https://github.com/jpnurmi/sentry-native/commit/46952de89a24687c2db0462b71fa9accd82e022e"
        },
        "date": 1745336346143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 3.3170840000025237,
            "unit": "ms",
            "extra": "cpu 1.922999999999897 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 3.4717080000064016,
            "unit": "ms",
            "extra": "cpu 1.887000000000194 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 3.3306249999895954,
            "unit": "ms",
            "extra": "cpu 2.0959999999999868 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 11.974208999959046,
            "unit": "ms",
            "extra": "cpu 4.4279999999998765 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.008874999991803634,
            "unit": "ms",
            "extra": "cpu 0.008999999999925734 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.24537499996313272,
            "unit": "ms",
            "extra": "cpu 0.24500000000027278 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 13.513041000010162,
            "unit": "ms",
            "extra": "cpu 1.0220000000000784 ms"
          }
        ]
      }
    ]
  }
}