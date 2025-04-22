window.BENCHMARK_DATA = {
  "lastUpdate": 1745335469853,
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
          "id": "6743c4b914aeacadabf425ad296bc7441893612f",
          "message": "matrix.os vs. runner.os",
          "timestamp": "2025-04-22T17:21:30+02:00",
          "tree_id": "4ff4c4ff3261f6554e658c2028beb8667bc9ed6e",
          "url": "https://github.com/jpnurmi/sentry-native/commit/6743c4b914aeacadabf425ad296bc7441893612f"
        },
        "date": 1745335468489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 2.718917000009924,
            "unit": "ms",
            "extra": 1.4660000000001894
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 3.114250000010088,
            "unit": "ms",
            "extra": 1.619000000000037
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 3.1340000000454893,
            "unit": "ms",
            "extra": 1.8800000000001038
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 8.959708000020328,
            "unit": "ms",
            "extra": 3.2369999999999344
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.012499999968440534,
            "unit": "ms",
            "extra": 0.013000000000262801
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.20824999995738835,
            "unit": "ms",
            "extra": 0.20799999999976393
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 4.61195799999814,
            "unit": "ms",
            "extra": 0.6369999999999987
          }
        ]
      }
    ]
  }
}