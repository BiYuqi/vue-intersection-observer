# [vue-intersection-observer](https://github.com/BiYuqi/webpack-seed)

<p align="left">
</p>

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

Usage:
```js
<template>
  <div id="app">
    <div class="content"></div>
    <Observer @on-change="onChange">
      <div class="test">测试是否出现</div>
    </Observer>
  </div>
</template>

<script>
import Observer from 'vue-intersection-observer'

export default {
  methods: {
    onChange(entry, unobserve) {
      if (entry.isIntersecting) {
        unobserve()
      }
    }
  },
  components: {
    Observer
  }
}
</script>

<style>
.content{
  height: 1000px;
}
</style>
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

## Options

root: 如果root参数指定为null或者不指定的时候默认使用浏览器视口做为root

rootMargin: root元素的外边距。string | default 0px 0px 0px 0px.

threshold: 可以是单一的number也可以是number数组，target元素和root元素相交程度达到该值的时候IntersectionOserver注册的回调函数将会被执行。number|Array<number> | default: 0

disabled: boolean | default: false

on-change (required): 回调函数,返回两个参数，一个是当前监听元素数据<IntersectionObserverEntry>, 一个是取消监听当前元素的方法<unobserve>