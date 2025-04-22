window.BENCHMARK_DATA = {
  "lastUpdate": 1745335835025,
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
          "id": "c5f422d0521196ac2c9c242ce54550181ee582f2",
          "message": "extra",
          "timestamp": "2025-04-22T17:26:53+02:00",
          "tree_id": "1c9d711d5dc347fbfd4b0713282022af775d1f6d",
          "url": "https://github.com/jpnurmi/sentry-native/commit/c5f422d0521196ac2c9c242ce54550181ee582f2"
        },
        "date": 1745335833516,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 3.245832999994036,
            "unit": "ms",
            "extra": "cpu 1.915000000000111 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 3.4363330000246606,
            "unit": "ms",
            "extra": "cpu 1.7179999999999973 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 2.831082999989576,
            "unit": "ms",
            "extra": "cpu 1.6380000000000283 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 18.778791999977784,
            "unit": "ms",
            "extra": "cpu 7.099999999999884 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.11383300000034069,
            "unit": "ms",
            "extra": "cpu 0.11200000000011201 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.33691699997007163,
            "unit": "ms",
            "extra": "cpu 0.336000000000114 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 6.917000000044027,
            "unit": "ms",
            "extra": "cpu 1.0030000000000872 ms"
          }
        ]
      }
    ]
  }
}