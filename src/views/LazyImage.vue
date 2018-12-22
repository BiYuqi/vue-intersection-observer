<template>
  <observer @on-change="onChange" class="test-lazy">
    <img height="200" style="max-width: 100%" :src="currentInfo" alt="">
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
</script>
