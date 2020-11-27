# [vue-intersection-observer](https://github.com/BiYuqi/vue-intersection-observer)

[简体中文](https://github.com/BiYuqi/vue-intersection-observer/blob/master/README.zh-CN.md) | English

## Preface
The **Vue Intersection Observer** is a Vue component based on the [IntersectionObserver API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API) integration, the packaging facilitates the implementation of information that needs to be used for element intersection changes.

For example.
* Implementation of the lazy loading of images when the page is scrolled.
* Implementation of 'infinitely scrollable' websites, i.e. more content is loaded directly when the user scrolls the page, without turning the page.
* Detection of the exposure of its advertising elements for the purpose of calculating advertising revenue.
* Flexibility to start tasks or animations depending on whether the user has scrolled to the appropriate area or not.

## Usage

```js
npm i vue-intersection-observer -S
```

Use in Lazy-load-image:

[Demo](https://biyuqi.github.io/vue-intersection-observer/#/lazy-load)

```js
// Wrapping the LazyImage component based on this plug-in
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
      // After loading Cancel monitoring, optimise performance
      if (entry.isIntersecting) {
        unobserve()
      }
      this.currentInfo = entry.isIntersecting ? this.imageSrc : 'https://avatars2.githubusercontent.com/u/20992106?s=460&v=4'
    }
  }
}
```
Practical lazy loading.

```js
<template>
  <div class="w800">
    <div class="header">Image lazy loading test<i class="tips">Please scroll down the screen quickly to test lazy loading</i></div>.
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

Use in normal scenarios (Usage in normal):

```js
<template>
  <div>
    <div class="left w800">
      <div class="header w800" :class="{active: visible}">
        Detects when an element is displayed hidden from the screen area {{visible ? 'visible' : 'unvisible'}}}
      </div>
      <div class="content">
        Please Scroll Page Down and Up To Test
      </div>
      <observer @on-change="onChange">
        <div class="test" :class="{active: visible}">At last</div>.
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

## What does IntersectionObserver do?

! [](http://loadingmore-1254319003.coscd.myqcloud.com/observe.png)

## Why use this component?

The purpose of this component is to provide the simplest solution for observing the elements that enter the viewport on the Vue codebase. It is completely declarative, all complexity is abstracted away, and the focus is on reusability and low memory consumption.

## Documentation

[DEMO](https://biyuqi.github.io/vue-intersection-observer)

## Options And Method
Name | Type | Default | Required | Description 
--------- | --------- | --------- | --------- | ---------
root | HTMLElement | false | default browser viewport is used as root if root is specified as null or unspecified.
rootMargin | String | '0px' | false | defines the margin of the root element, which is used to expand or reduce the size of the rootBounds rectangle and thus affects the size of the intersection area of the intersectionRect. It uses CSS definitions such as 10px 20px 30px 40px to represent the values of top, right, bottom and left.
threshold | Number or Array\<number> | 0 | false | The threshold property determines when the callback function is triggered. It is an array where each member is a threshold value, which defaults to [0], i.e. when the intersectionRatio reaches 0, the callback function is triggered.
on-change | Function | required | (entry, unobserve) => {}

## Method Detail Callback params
```js
<observer @on-change="onChange" class="test-lazy">
  <img height="200" style="max-width: 100%" :src="currentInfo" alt="">
</observer>

onChange(entry, unobserve) {
  // entry: 
  // time: the time at which the change in visibility occurred, a high-precision time stamp in milliseconds

  // target: the target element to be observed, which is a DOM node object

  // rootBounds: information about the rectangular area of the root element.

  // Return value of the getBoundingClientRect() method, or null if there is no root element (i.e. scrolling directly relative to the viewport).

  // boundingClientRect: Information about the rectangular area of the target element.

  // intersectionRect: Information about the intersection area of the target element with the viewport (or root element)
  // isIntersecting: boolean returns whether the current element is displayed in the visible area (important, most scenarios are based on this field)

  // intersectionRatio: the visible ratio of the target element, i.e. the ratio of the intersectionRect to the bindingClientRect, 1 if fully visible, less than or equal to 0 if not visible at all
  // unobserve
  // The method can remove target describe
}
```
