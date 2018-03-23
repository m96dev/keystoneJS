# result of apache bench for nginx

## gcloud nginx

300人同時アクセス
`ab -c 300 -n 300 "http://<Gcloud IP:3000/login"`

```log
Failed requests: 0
```

## sakura apache

比較例 SAKURA 共用 サーバ

21人同時アクセス
`ab -c 21 -n 21 "http://<sakura url>/index.php"`

```log
Failed requests: 20
```

sakura
 21人同時でしばらくサーバーが応答不可になる設定

## 03/23 log

```log
This is ApacheBench, Version 2.3 <$Revision: 1807734 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 35.194.108.26 (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Finished 300 requests


Server Software:        
Server Hostname:        35.194.108.26
Server Port:            3000

Document Path:          /login
Document Length:        3784 bytes

Concurrency Level:      300
Time taken for tests:   15.127 seconds
Complete requests:      300
Failed requests:        0
Total transferred:      1245818 bytes
HTML transferred:       1135200 bytes
Requests per second:    19.83 [#/sec] (mean)
Time per request:       15127.340 [ms] (mean)
Time per request:       50.424 [ms] (mean, across all concurrent requests)
Transfer rate:          80.43 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:       73   84  23.3     76     185
Processing:   103 10934 2060.8   9795   15043
Waiting:      102 7533 4283.8   7477   15009
Total:        176 11018 2068.2   9871   15120

Percentage of the requests served within a certain time (ms)
  50%   9871
  66%  11656
  75%  11661
  80%  13437
  90%  15117
  95%  15118
  98%  15119
  99%  15119
 100%  15120 (longest request)
 ```
