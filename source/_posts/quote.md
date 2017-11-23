---
title: 文本居中引用
date: 2017-11-23 17:23:17
tags: 
 - hexo
 - tag
---
<!-- HTML方式: 直接在 Markdown 文件中编写 HTML 来调用 -->
<!-- 其中, class="blockquote-center" 是必须的 -->
<blockquote class="blockquote-center">人的一切痛苦, 本质都是对自己无能的愤怒。
**王小波**</blockquote>一只上海的蝴蝶煽动翅膀后, 引起了厦门两个人的龙卷风。世事无常, 往往事情的发展总是出人意料, 令人啼笑皆非。且不问结果如何, 尽自己之所能, 积极地面对。古语有言, 尽人事听天命, 大概便是如此。

<!-- 标签 方式, 要求版本在 0.4.5 或以上 -->
{% centerquote %}blah blah blah{% endcenterquote %}

<!-- 标签别名 -->
{% cq %} blah blah blah {% endcq %}