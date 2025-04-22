window.BENCHMARK_DATA = {
  "lastUpdate": 1745335873006,
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
        "date": 1745335872660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 1.350367000014785,
            "unit": "ms",
            "extra": "cpu 1.0841689999999995 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 0.8857889999944746,
            "unit": "ms",
            "extra": "cpu 0.8842669999999994 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.8993499999974119,
            "unit": "ms",
            "extra": "cpu 0.8982130000000002 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 3.353269999990971,
            "unit": "ms",
            "extra": "cpu 1.8451460000000006 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.01894500002208588,
            "unit": "ms",
            "extra": "cpu 0.017643000000000346 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.027781999961007386,
            "unit": "ms",
            "extra": "cpu 0.02646899999999945 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 2.0836739999481324,
            "unit": "ms",
            "extra": "cpu 0.6873489999999994 ms"
          }
        ]
      }
    ]
  }
}