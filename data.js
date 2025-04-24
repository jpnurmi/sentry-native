window.BENCHMARK_DATA = {
  "lastUpdate": 1745483672958,
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
    ],
    "Linux": [
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
        "date": 1745483672601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 0.6733740000015587,
            "unit": "ms",
            "extra": "0.673ms (CPU 0.673ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.6631360000142195,
            "unit": "ms",
            "extra": "0.663ms (CPU 0.663ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 2.714535999984946,
            "unit": "ms",
            "extra": "2.715ms (CPU 1.464ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.012784000006149654,
            "unit": "ms",
            "extra": "0.013ms (CPU 0.012ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.022622000017236132,
            "unit": "ms",
            "extra": "0.023ms (CPU 0.022ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 1.7165790000035486,
            "unit": "ms",
            "extra": "1.717ms (CPU 0.478ms)"
          }
        ]
      }
    ]
  }
}