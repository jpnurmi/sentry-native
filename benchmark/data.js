window.BENCHMARK_DATA = {
  "lastUpdate": 1745334062217,
  "repoUrl": "https://github.com/jpnurmi/sentry-native",
  "entries": {
    "ubuntu-24.04 benchmarks": [
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
          "id": "6ba5434c10ec15ce1e929d9bdef6bc52cfd82e0d",
          "message": "WIP",
          "timestamp": "2025-04-22T16:56:58+02:00",
          "tree_id": "5e6d52dabe4b23c63e4f3eae6bed335261b19612",
          "url": "https://github.com/jpnurmi/sentry-native/commit/6ba5434c10ec15ce1e929d9bdef6bc52cfd82e0d"
        },
        "date": 1745334061869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tests/benchmark.py::test_benchmark[init-none]",
            "value": 1.5505229999916992,
            "unit": "ms",
            "extra": 1.0478919999999998
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-inproc]",
            "value": 1.02092200000925,
            "unit": "ms",
            "extra": 0.9627949999999998
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-breakpad]",
            "value": 0.9520129999600613,
            "unit": "ms",
            "extra": 0.9507819999999998
          },
          {
            "name": "tests/benchmark.py::test_benchmark[init-crashpad]",
            "value": 3.2975909999777286,
            "unit": "ms",
            "extra": 1.6443460000000005
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-inproc]",
            "value": 0.017372999991493998,
            "unit": "ms",
            "extra": 0.0158890000000007
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-breakpad]",
            "value": 0.03403400000934198,
            "unit": "ms",
            "extra": 0.03254000000000017
          },
          {
            "name": "tests/benchmark.py::test_benchmark[backend-crashpad]",
            "value": 2.089078999972571,
            "unit": "ms",
            "extra": 0.6484589999999997
          }
        ]
      }
    ]
  }
}