window.BENCHMARK_DATA = {
  "lastUpdate": 1745483661388,
  "repoUrl": "https://github.com/jpnurmi/sentry-native",
  "entries": {
    "macOS": [
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
          "id": "1ce4a8b0cb2ceedd625456aae1a7047ff9692b24",
          "message": "WIP: test benchmark-action/github-action-benchmark",
          "timestamp": "2025-04-24T10:31:17+02:00",
          "tree_id": "6e70dc57ee6647ceec56852bff09bcab21eb45f5",
          "url": "https://github.com/jpnurmi/sentry-native/commit/1ce4a8b0cb2ceedd625456aae1a7047ff9692b24"
        },
        "date": 1745483660113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 3.5197500000094806,
            "unit": "ms",
            "extra": "3.520ms (CPU 2.153ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 5.790790999981255,
            "unit": "ms",
            "extra": "5.791ms (CPU 2.949ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 22.23816599996553,
            "unit": "ms",
            "extra": "22.238ms (CPU 8.223ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.03779200000053606,
            "unit": "ms",
            "extra": "0.038ms (CPU 0.037ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.23387499999216743,
            "unit": "ms",
            "extra": "0.234ms (CPU 0.233ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 7.122457999969356,
            "unit": "ms",
            "extra": "7.122ms (CPU 0.916ms)"
          }
        ]
      }
    ]
  }
}