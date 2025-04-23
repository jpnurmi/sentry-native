window.BENCHMARK_DATA = {
  "lastUpdate": 1745392624256,
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
      }
    ]
  }
}