window.BENCHMARK_DATA = {
  "lastUpdate": 1745336395317,
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
          "id": "46952de89a24687c2db0462b71fa9accd82e022e",
          "message": "zlib1g-dev",
          "timestamp": "2025-04-22T17:35:35+02:00",
          "tree_id": "0138646f6b6ac1dfb117384c3f2adb5055d429fa",
          "url": "https://github.com/jpnurmi/sentry-native/commit/46952de89a24687c2db0462b71fa9accd82e022e"
        },
        "date": 1745336394427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 1.5386880000107794,
            "unit": "ms",
            "extra": "cpu 0.9550119999999999 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 0.8461519999798384,
            "unit": "ms",
            "extra": "cpu 0.8372420000000002 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.7941249999987576,
            "unit": "ms",
            "extra": "cpu 0.7931500000000002 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 3.469387999984974,
            "unit": "ms",
            "extra": "cpu 1.8786840000000002 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.017732999992858822,
            "unit": "ms",
            "extra": "cpu 0.01627000000000052 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.046246000010796706,
            "unit": "ms",
            "extra": "cpu 0.04360100000000075 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 1.9844090000447068,
            "unit": "ms",
            "extra": "cpu 0.6559639999999993 ms"
          }
        ]
      }
    ]
  }
}