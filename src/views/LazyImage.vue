<template>
  <observer @on-change="onChange">
    <div class="test">我是第几{{imageSrc}}张图片被加载!</div>
    <div class="test-status">是否加载: {{currentInfo}}</div>
  </observer>
</template>

<script>
import Observer from '@/components/index.js'
export default {
  data() {
    return{
      currentInfo: false
    }
  },
  props: {
    imageSrc: {
      type: [String, Number],
      default: '我是占位图片, 稍后为您加载真实图片'
    }
  },
  components: {
    Observer
  },
  methods: {
    onChange(entry, unobserve) {
      // 加载后 取消监听
      if (entry.isIntersecting) {
        unobserve()
      }
      this.currentInfo = entry.isIntersecting
    }
  }
}
</script>

<style scoped>

</style>