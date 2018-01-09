title: koa 挂载服务器
author: Emlice
tags:
  - Koa
categories: []
date: 2018-01-09 17:08:00
---
```
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname, '../public'))

app.use(main);

app.listen(4001);
```


### 依赖
- koa
- koa-static


### 用途

通过 koa 启动一个服务器，把 public 下的项目挂载到该服务器指定的端口下。