window.BENCHMARK_DATA = {
  "lastUpdate": 1745337978703,
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
          "id": "e095f4a139da09a78a5679b81de464a698eaced9",
          "message": "Drop --capture=no",
          "timestamp": "2025-04-22T17:48:18+02:00",
          "tree_id": "8ce882c35cd2a42b914ab4a56b6e26438149c6e8",
          "url": "https://github.com/jpnurmi/sentry-native/commit/e095f4a139da09a78a5679b81de464a698eaced9"
        },
        "date": 1745337170503,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 1.8194699999867225,
            "unit": "ms",
            "extra": "cpu 0.8693830000000005 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 0.8472590000110358,
            "unit": "ms",
            "extra": "cpu 0.8124650000000001 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.9369169999899896,
            "unit": "ms",
            "extra": "cpu 0.8572909999999996 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 3.2145029999810504,
            "unit": "ms",
            "extra": "cpu 1.6663090000000003 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.017071999991458142,
            "unit": "ms",
            "extra": "cpu 0.015799999999999842 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.025397999991128017,
            "unit": "ms",
            "extra": "cpu 0.024035000000000376 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 1.961922000020877,
            "unit": "ms",
            "extra": "cpu 0.5987170000000004 ms"
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
          "id": "5e37b8118a792ce1e9d1b14f140e2105cd683962",
          "message": "WIP: benchmark-action/github-action-benchmark",
          "timestamp": "2025-04-22T17:59:21+02:00",
          "tree_id": "8ce882c35cd2a42b914ab4a56b6e26438149c6e8",
          "url": "https://github.com/jpnurmi/sentry-native/commit/5e37b8118a792ce1e9d1b14f140e2105cd683962"
        },
        "date": 1745337978181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 1.904266000053667,
            "unit": "ms",
            "extra": "cpu 0.9273909999999996 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 0.7694229999515301,
            "unit": "ms",
            "extra": "cpu 0.7684739999999999 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.7990680001057626,
            "unit": "ms",
            "extra": "cpu 0.7981289999999999 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 3.8588999999547013,
            "unit": "ms",
            "extra": "cpu 1.6706260000000006 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.013394000006883289,
            "unit": "ms",
            "extra": "cpu 0.012101999999999946 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.02408399996056687,
            "unit": "ms",
            "extra": "cpu 0.02292200000000074 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 1.9025739999278812,
            "unit": "ms",
            "extra": "cpu 0.5835589999999999 ms"
          }
        ]
      }
    ]
  }
}