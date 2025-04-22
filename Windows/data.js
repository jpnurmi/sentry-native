window.BENCHMARK_DATA = {
  "lastUpdate": 1745336615096,
  "repoUrl": "https://github.com/jpnurmi/sentry-native",
  "entries": {
    "Windows benchmarks": [
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
        "date": 1745336224291,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 11.768599999982143,
            "unit": "ms",
            "extra": "cpu 15.625 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 7.622900000001209,
            "unit": "ms",
            "extra": "cpu 15.625 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 7.768599999963044,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 21.967700000004697,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.009900000009110954,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.3083000000287939,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 19.564100000025064,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          }
        ]
      },
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
        "date": 1745336609337,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 10.753499999964333,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 7.291000000009262,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 7.758100000046397,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 21.880300000020725,
            "unit": "ms",
            "extra": "cpu 15.625 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.009500000032858225,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.3166000001328939,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 12.505899999950998,
            "unit": "ms",
            "extra": "cpu 15.625 ms"
          }
        ]
      }
    ]
  }
}