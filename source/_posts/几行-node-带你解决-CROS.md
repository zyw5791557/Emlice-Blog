title: 几行 node 带你解决 CROS
author: Emlice
date: 2018-01-09 16:52:06
tags:
---
```
const express = require('express');
const request = require('request');
const app = express();

app.use('/', (req,res) => {
	const url = 'http://www.kan100.com' + req.url;
	req.pipe(request(url)).pipe(res.set('Access-Control-Allow-Origin', '*'));
});

app.listen(process.env.PORT || 3001);
```
### 依赖
1. express
2. request


### 使用方法

项目启动前, 先启动该代理，api访问3001端口或自定义端口，nodejs将自动帮你代理url。

### 原理

同源策略只存在于浏览器端，终端不存在跨域问题。