---
title: test
tag: 
- test
---



## 测试两下



- 我是你毛呵呵




{% blockquote @Emlice https://www.emlice.top %}

测试一下引用，因为真的很棒！！！

{% endblockquote %}

```js
// 截图上传
app.post('/api/ps_upload', upload.single('ps'), function(req,res,next) {
	// 设置编码格式
	req.header('Content-Type', 'charset=utf-8');
	if(req.file) {
		// 谁上传的  req.body.avatarName
		var name = req.body.avatarName;
		// 获取时间戳
		var date = Date.now();
		// 存哪里, 取什么名字。
		var fileFormat = req.file.originalname.split('.');
		// 远程访问地址
		var remoteAvatar = STATIC_SERVER + '/images/printscreen/' + 'message_' + date + '.' + fileFormat[fileFormat.length - 1];
		var avatarName = MessageImgPath_BASE + 'message_' + date + '.' + fileFormat[fileFormat.length - 1];
		// 写入磁盘
		fs.writeFile(avatarName, req.file.buffer, function(err) {
			if(err) {
				res.send({ Code: -1, Str: '文件上传失败！' });
			} else {
				res.send({ Code: 0, Str: '文件上传成功！', ps: remoteAvatar });
			}
		});
	}
});
```