title: Swiper 常用 api 和注意点
author: Emlice
tags:
  - swiper
categories: []
date: 2018-01-09 17:12:00
---
### Swiper 初始化
```html
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">slider1</div>
    <div class="swiper-slide">slider2</div>
    <div class="swiper-slide">slider3</div>
  </div>
</div>
```
```javascript
var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
})
```
<!-- more -->


### 常用api
**direction**  
`Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)`  
**freeMode**   
`默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。`  
**freeModeMomentumRatio**  
`free模式动量值（移动惯量）。设置的值越大，当释放slide时的滑动时间越长。默认1s。`  
**slidesPerView**  
`设置slider容器能够同时显示的slides数量(carousel模式)。
可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。
loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。`  
**observer**  
`启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
默认false，不开启，可以使用update()方法更新。
`  
**observeParents**  
`将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。`  


### 重要！！！
1.初始化的 Swiper 容器 id 必须保持唯一性。当一个页面存在多个 Swiper 并同时初始化的时候, 必须给不同的标识，不然初始化失败，切记切记！！！(哭。。。)