window.BENCHMARK_DATA = {
  "lastUpdate": 1745485115615,
  "repoUrl": "https://github.com/jpnurmi/sentry-native",
  "entries": {
    "Windows": [
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
        "date": 1745483798716,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 7.382199999995009,
            "unit": "ms",
            "extra": "7.382ms (CPU 0.000ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 7.363800000007359,
            "unit": "ms",
            "extra": "7.364ms (CPU 15.625ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 19.27490000002763,
            "unit": "ms",
            "extra": "19.275ms (CPU 0.000ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.01020000001972221,
            "unit": "ms",
            "extra": "0.010ms (CPU 0.000ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.3118999999855987,
            "unit": "ms",
            "extra": "0.312ms (CPU 0.000ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 9.579400000006899,
            "unit": "ms",
            "extra": "9.579ms (CPU 0.000ms)"
          }
        ]
      }
    ],
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
      },
      {
        "commit": {
          "author": {
            "name": "J-P Nurmi",
            "username": "jpnurmi",
            "email": "jpnurmi@gmail.com"
          },
          "committer": {
            "name": "J-P Nurmi",
            "username": "jpnurmi",
            "email": "jpnurmi@gmail.com"
          },
          "id": "1ce4a8b0cb2ceedd625456aae1a7047ff9692b24",
          "message": "WIP: test benchmark-action/github-action-benchmark",
          "timestamp": "2025-04-22T14:16:19Z",
          "url": "https://github.com/jpnurmi/sentry-native/commit/1ce4a8b0cb2ceedd625456aae1a7047ff9692b24"
        },
        "date": 1745485103949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 2.732707999939521,
            "unit": "ms",
            "extra": "2.733ms (CPU 1.448ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 3.6906660000113334,
            "unit": "ms",
            "extra": "3.691ms (CPU 2.138ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 11.579834000031042,
            "unit": "ms",
            "extra": "11.580ms (CPU 4.184ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.016041999970184406,
            "unit": "ms",
            "extra": "0.016ms (CPU 0.015ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.2932500000270011,
            "unit": "ms",
            "extra": "0.293ms (CPU 0.293ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 5.465041999968889,
            "unit": "ms",
            "extra": "5.465ms (CPU 0.654ms)"
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
      },
      {
        "commit": {
          "author": {
            "name": "J-P Nurmi",
            "username": "jpnurmi",
            "email": "jpnurmi@gmail.com"
          },
          "committer": {
            "name": "J-P Nurmi",
            "username": "jpnurmi",
            "email": "jpnurmi@gmail.com"
          },
          "id": "1ce4a8b0cb2ceedd625456aae1a7047ff9692b24",
          "message": "WIP: test benchmark-action/github-action-benchmark",
          "timestamp": "2025-04-22T14:16:19Z",
          "url": "https://github.com/jpnurmi/sentry-native/commit/1ce4a8b0cb2ceedd625456aae1a7047ff9692b24"
        },
        "date": 1745485109245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 0.8199060000038116,
            "unit": "ms",
            "extra": "0.820ms (CPU 0.819ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.7169820000001437,
            "unit": "ms",
            "extra": "0.717ms (CPU 0.717ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 2.878033999991203,
            "unit": "ms",
            "extra": "2.878ms (CPU 1.540ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.014136999993752397,
            "unit": "ms",
            "extra": "0.014ms (CPU 0.013ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.024897000002965797,
            "unit": "ms",
            "extra": "0.025ms (CPU 0.024ms)"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 1.9675130000109675,
            "unit": "ms",
            "extra": "1.968ms (CPU 0.560ms)"
          }
        ]
      }
    ]
  }
}