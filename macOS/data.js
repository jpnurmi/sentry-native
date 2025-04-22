window.BENCHMARK_DATA = {
  "lastUpdate": 1745337822817,
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
          "id": "46952de89a24687c2db0462b71fa9accd82e022e",
          "message": "zlib1g-dev",
          "timestamp": "2025-04-22T17:35:35+02:00",
          "tree_id": "0138646f6b6ac1dfb117384c3f2adb5055d429fa",
          "url": "https://github.com/jpnurmi/sentry-native/commit/46952de89a24687c2db0462b71fa9accd82e022e"
        },
        "date": 1745336346143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 3.3170840000025237,
            "unit": "ms",
            "extra": "cpu 1.922999999999897 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 3.4717080000064016,
            "unit": "ms",
            "extra": "cpu 1.887000000000194 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 3.3306249999895954,
            "unit": "ms",
            "extra": "cpu 2.0959999999999868 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 11.974208999959046,
            "unit": "ms",
            "extra": "cpu 4.4279999999998765 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.008874999991803634,
            "unit": "ms",
            "extra": "cpu 0.008999999999925734 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.24537499996313272,
            "unit": "ms",
            "extra": "cpu 0.24500000000027278 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 13.513041000010162,
            "unit": "ms",
            "extra": "cpu 1.0220000000000784 ms"
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
        "date": 1745337114427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 3.1319170000188024,
            "unit": "ms",
            "extra": "cpu 1.7139999999999933 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 3.286333999994895,
            "unit": "ms",
            "extra": "cpu 1.7240000000000588 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 3.632500000037453,
            "unit": "ms",
            "extra": "cpu 1.8290000000000806 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 16.313625000009324,
            "unit": "ms",
            "extra": "cpu 5.020000000000024 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.03258300000652525,
            "unit": "ms",
            "extra": "cpu 0.03100000000011427 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.3206250000289401,
            "unit": "ms",
            "extra": "cpu 0.31999999999987594 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 16.85308300000088,
            "unit": "ms",
            "extra": "cpu 2.4330000000001295 ms"
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
        "date": 1745337821289,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 4.763291000017489,
            "unit": "ms",
            "extra": "cpu 2.308000000000199 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 16.583958000012444,
            "unit": "ms",
            "extra": "cpu 1.9780000000000353 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 9.442499999977372,
            "unit": "ms",
            "extra": "cpu 4.3640000000000345 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 19.18170800001917,
            "unit": "ms",
            "extra": "cpu 5.606 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.027084000009836018,
            "unit": "ms",
            "extra": "cpu 0.026999999999999247 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.2579169999989972,
            "unit": "ms",
            "extra": "cpu 0.2569999999999517 ms"
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 5.682791000026555,
            "unit": "ms",
            "extra": "cpu 0.6919999999999149 ms"
          }
        ]
      }
    ]
  }
}