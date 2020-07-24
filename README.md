# [vue-intersection-observer](https://github.com/BiYuqi/vue-intersection-observer)

## 前言
**Vue Intersection Observer** 是一个Vue组件，基于[IntersectionObserver API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)的集成, 包装，便于实现需要用到元素交集变化的信息.

比如：
* 当页面滚动时，实现懒加载图片功能。
* 实现`可无限滚动`网站，也就是当用户滚动网页时直接加载更多内容，无需翻页。
* 为计算广告收益，检测其广告元素的曝光情况。
* 根据用户是否已滚动到相应区域来灵活开始执行任务或动画

## 如何使用 ( How to use? )

```js
npm i vue-intersection-observer -S
```

在懒加载图片中使用(Usage in Lazy-load-image):

[Demo](https://biyuqi.github.io/vue-intersection-observer/#/lazy-load)

```js
<!-- 基于本插件封装LazyImage组件 -->
<template>
  <observer @on-change="onChange" class="test-lazy">
    <img height="200" style="max-width: 100%" :src="currentInfo" alt="">
  </observer>
</template>

<script>
import Observer from 'vue-intersection-observer'
export default {
  data() {
    return{
      currentInfo: false
    }
  },
  props: {
    imageSrc: {
      type: [String, Number]
    }
  },
  components: {
    Observer
  },
  methods: {
    onChange(entry, unobserve) {
      // 加载后 取消监听,优化性能
      if (entry.isIntersecting) {
        unobserve()
      }
      this.currentInfo = entry.isIntersecting ? this.imageSrc : 'https://avatars2.githubusercontent.com/u/20992106?s=460&v=4'
    }
  }
}
```
实战懒加载：
```js
<template>
  <div class="w800">
    <div class="header">图片懒加载测试<i class="tips">请快速向下滚动屏幕测试懒加载</i></div>
    <div class="content"></div>
    <div v-for="item in imgList" :key="item" class="img-box-mock">
      <LazyImage :imageSrc="item"></LazyImage>
    </div>
  </div>
</template>

<script>
import LazyImage from './LazyImage'
export default {
  data() {
    return {
      imgList: []
    }
  },
  components: {
    LazyImage
  }
}
</script>
```

在普通场景中使用(Usage in normal):
```js
<template>
  <div>
    <div class="left w800">
      <div class="header w800" :class="{active: visible}">
        检测元素从屏幕区域显示隐藏{{visible ? 'visible' : 'unvisible'}}
      </div>
      <div class="content">
        Please Scroll Page Down and Up To Test
      </div>
      <observer @on-change="onChange">
        <div class="test" :class="{active: visible}">终于出现了</div>
      </observer>
    </div>
  </div>
</template>

<script>
import Observer from 'vue-intersection-observer'
export default {
  data() {
    return{
      visible: false
    }
  },
  components: {
    Observer
  },
  methods: {
    onChange(entry, obv) {
      this.visible = entry.isIntersecting
    }
  }
}
</script>
```

Optionally add the polyfill and make sure it's required on your dependendencies for unsupporting browsers:

```js
npm install --save intersection-observer
```

## IntersectionObserver做了些什么( What does IntersectionObserver do? )

![](http://loadingmore-1254319003.coscd.myqcloud.com/observe.png)

## 为什么要用这个组件 ( Why use this component? )

该组件的目的是为观察在Vue代码库上进入视口的元素提供最简单的解决方案. 它完全是声明性的，所有复杂性都被抽象出来,专注于可重用性和低内存消耗.

## 文档 ( Documentation )

[DEMO](https://biyuqi.github.io/vue-intersection-observer)

## Options And Method
Name | Type | Default | Required | Description
--------- | --------- | --------- | --------- | ---------
root | HTMLElement |   | false | 如果root参数指定为null或者不指定的时候默认使用浏览器视口做为root
rootMargin | String | '0px' | false | 定义根元素的margin，用来扩展或缩小rootBounds这个矩形的大小，从而影响intersectionRect交叉区域的大小。它使用CSS的定义方法，比如10px 20px 30px 40px，表示 top、right、bottom 和 left 四个方向的值
threshold | Number or Array\<number> | 0 | false | threshold属性决定了什么时候触发回调函数。它是一个数组，每个成员都是一个门槛值，默认为[0]，即交叉比例（intersectionRatio）达到0时触发回调函数
on-change |  Function | | required | (entry, unobserve) => {}

## Method Detail Callback parms
```js
<observer @on-change="onChange" class="test-lazy">
  <img height="200" style="max-width: 100%" :src="currentInfo" alt="">
</observer>

onChange(entry, unobserve) {
  // entry: 
  // time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒

  // target：被观察的目标元素，是一个 DOM 节点对象

  // rootBounds：根元素的矩形区域的信息，

  // getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null

  // boundingClientRect：目标元素的矩形区域的信息

  // intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
  // isIntersecting: boolean 返回当前元素在可视区域是否显示 (很重要，大部分场景基于此字段判断)

  // intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0
  // unobserve
  // The method can remove target describe
}
```
