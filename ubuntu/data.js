window.BENCHMARK_DATA = {
  "lastUpdate": 1745335556879,
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
          "id": "6743c4b914aeacadabf425ad296bc7441893612f",
          "message": "matrix.os vs. runner.os",
          "timestamp": "2025-04-22T17:21:30+02:00",
          "tree_id": "4ff4c4ff3261f6554e658c2028beb8667bc9ed6e",
          "url": "https://github.com/jpnurmi/sentry-native/commit/6743c4b914aeacadabf425ad296bc7441893612f"
        },
        "date": 1745335556233,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 1.5567660000215255,
            "unit": "ms",
            "extra": 0.92186
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 0.8836680000001707,
            "unit": "ms",
            "extra": 0.8784590000000007
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.9706090000065615,
            "unit": "ms",
            "extra": 0.9602200000000003
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 3.3068289999960143,
            "unit": "ms",
            "extra": 1.6706460000000005
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.014937999992525874,
            "unit": "ms",
            "extra": 0.01367600000000066
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.040936000004876405,
            "unit": "ms",
            "extra": 0.039563999999999745
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 2.0079450000025645,
            "unit": "ms",
            "extra": 0.6656819999999999
          }
        ]
      }
    ]
  }
}