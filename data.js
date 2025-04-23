window.BENCHMARK_DATA = {
  "lastUpdate": 1745393556064,
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
          "id": "aa599c7f3bbcc6d5cd9b1a5bf758fe7857001c01",
          "message": "WIP",
          "timestamp": "2025-04-23T09:13:25+02:00",
          "tree_id": "ff54b26c16fe6e49b771f78a6dfc7bc9caa3b473",
          "url": "https://github.com/jpnurmi/sentry-native/commit/aa599c7f3bbcc6d5cd9b1a5bf758fe7857001c01"
        },
        "date": 1745392622755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 4.576292000024296,
            "unit": "ms",
            "extra": "cpu 1.9639999999999658 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 3.0263750001040535,
            "unit": "ms",
            "extra": "cpu 1.6599999999997728 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 3.2256670000379017,
            "unit": "ms",
            "extra": "cpu 1.9419999999998883 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 17.95104200004971,
            "unit": "ms",
            "extra": "cpu 4.734000000000016 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.03012499996657425,
            "unit": "ms",
            "extra": "cpu 0.02999999999997449 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.3009160000146949,
            "unit": "ms",
            "extra": "cpu 0.29999999999996696 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 7.647166999959154,
            "unit": "ms",
            "extra": "cpu 0.9269999999999001 ms"
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
          "id": "acea6a64dd9034baeac146b7f183db10254ed840",
          "message": "WIP",
          "timestamp": "2025-04-23T09:23:54+02:00",
          "tree_id": "9fcb27f518546b32d717f2254ea1aaf53b69995a",
          "url": "https://github.com/jpnurmi/sentry-native/commit/acea6a64dd9034baeac146b7f183db10254ed840"
        },
        "date": 1745393280963,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 4.539958000009392,
            "unit": "ms",
            "extra": "cpu 1.8810000000000215 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 4.258124999978463,
            "unit": "ms",
            "extra": "cpu 2.0999999999999908 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 3.321416000062527,
            "unit": "ms",
            "extra": "cpu 1.706999999999903 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 15.022624999915024,
            "unit": "ms",
            "extra": "cpu 4.985999999999935 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.040000000012696546,
            "unit": "ms",
            "extra": "cpu 0.03900000000012227 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.27204200000596757,
            "unit": "ms",
            "extra": "cpu 0.27200000000005 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 32.33050000005733,
            "unit": "ms",
            "extra": "cpu 1.8449999999998745 ms"
          }
        ]
      }
    ],
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
          "id": "aa599c7f3bbcc6d5cd9b1a5bf758fe7857001c01",
          "message": "WIP",
          "timestamp": "2025-04-23T09:13:25+02:00",
          "tree_id": "ff54b26c16fe6e49b771f78a6dfc7bc9caa3b473",
          "url": "https://github.com/jpnurmi/sentry-native/commit/aa599c7f3bbcc6d5cd9b1a5bf758fe7857001c01"
        },
        "date": 1745392661695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 1.5098590000093282,
            "unit": "ms",
            "extra": "cpu 0.8616769999999999 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 0.7712240000046222,
            "unit": "ms",
            "extra": "cpu 0.7703380000000006 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.7880269999986922,
            "unit": "ms",
            "extra": "cpu 0.7869089999999997 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 3.380002000028526,
            "unit": "ms",
            "extra": "cpu 1.6798960000000003 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.014376999956766667,
            "unit": "ms",
            "extra": "cpu 0.013114999999999308 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.026789999992615776,
            "unit": "ms",
            "extra": "cpu 0.025667999999999525 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 2.1510499999521926,
            "unit": "ms",
            "extra": "cpu 0.6187340000000001 ms"
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
          "id": "acea6a64dd9034baeac146b7f183db10254ed840",
          "message": "WIP",
          "timestamp": "2025-04-23T09:23:54+02:00",
          "tree_id": "9fcb27f518546b32d717f2254ea1aaf53b69995a",
          "url": "https://github.com/jpnurmi/sentry-native/commit/acea6a64dd9034baeac146b7f183db10254ed840"
        },
        "date": 1745393333994,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 2.1129680000058215,
            "unit": "ms",
            "extra": "cpu 0.8742300000000002 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 0.7777680000060627,
            "unit": "ms",
            "extra": "cpu 0.7769480000000004 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.7947390000140331,
            "unit": "ms",
            "extra": "cpu 0.793869 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 3.2637659999750213,
            "unit": "ms",
            "extra": "cpu 1.6538920000000006 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.015930000017760904,
            "unit": "ms",
            "extra": "cpu 0.014628000000000037 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.025226999980532128,
            "unit": "ms",
            "extra": "cpu 0.02386499999999965 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 2.0361320000006344,
            "unit": "ms",
            "extra": "cpu 0.5926940000000004 ms"
          }
        ]
      }
    ],
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
          "id": "aa599c7f3bbcc6d5cd9b1a5bf758fe7857001c01",
          "message": "WIP",
          "timestamp": "2025-04-23T09:13:25+02:00",
          "tree_id": "ff54b26c16fe6e49b771f78a6dfc7bc9caa3b473",
          "url": "https://github.com/jpnurmi/sentry-native/commit/aa599c7f3bbcc6d5cd9b1a5bf758fe7857001c01"
        },
        "date": 1745392896433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 10.488499999837586,
            "unit": "ms",
            "extra": "cpu 15.625 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 8.046500000091328,
            "unit": "ms",
            "extra": "cpu 15.625 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 7.91439999989052,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 22.158799999942858,
            "unit": "ms",
            "extra": "cpu 15.625 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.00969999996414117,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.36509999995359976,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 18.182100000103674,
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
          "id": "acea6a64dd9034baeac146b7f183db10254ed840",
          "message": "WIP",
          "timestamp": "2025-04-23T09:23:54+02:00",
          "tree_id": "9fcb27f518546b32d717f2254ea1aaf53b69995a",
          "url": "https://github.com/jpnurmi/sentry-native/commit/acea6a64dd9034baeac146b7f183db10254ed840"
        },
        "date": 1745393545863,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 10.703400000011243,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 7.457300000169198,
            "unit": "ms",
            "extra": "cpu 15.625 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 7.7922999998918385,
            "unit": "ms",
            "extra": "cpu 15.625 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 21.45539999992252,
            "unit": "ms",
            "extra": "cpu 31.25 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.009500000032858225,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.33130000019809813,
            "unit": "ms",
            "extra": "cpu 0.0 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 12.875000000121872,
            "unit": "ms",
            "extra": "cpu 15.625 ms"
          }
        ]
      }
    ]
  }
}