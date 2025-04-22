window.BENCHMARK_DATA = {
  "lastUpdate": 1745336006427,
  "repoUrl": "https://github.com/jpnurmi/sentry-native",
  "entries": {
    "Linux benchmarks": [
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
          "id": "f5dc712a509f16c4014e6914a20431b7106ec1f1",
          "message": "windows",
          "timestamp": "2025-04-22T17:29:10+02:00",
          "tree_id": "8210dc63a3959cb08a41e28094607eb15a10dfab",
          "url": "https://github.com/jpnurmi/sentry-native/commit/f5dc712a509f16c4014e6914a20431b7106ec1f1"
        },
        "date": 1745336005514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 1.733204000004207,
            "unit": "ms",
            "extra": "cpu 1.0394149999999993 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 1.010116999964339,
            "unit": "ms",
            "extra": "cpu 1.0084769999999998 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.9373690000415991,
            "unit": "ms",
            "extra": "cpu 0.926675 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 3.395519999969565,
            "unit": "ms",
            "extra": "cpu 1.81071 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.032981999993353384,
            "unit": "ms",
            "extra": "cpu 0.03174900000000019 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.029434999987643096,
            "unit": "ms",
            "extra": "cpu 0.027751000000000338 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 2.050080000003618,
            "unit": "ms",
            "extra": "cpu 0.6079509999999998 ms"
          }
        ]
      }
    ]
  }
}