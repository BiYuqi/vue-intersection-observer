<template>
  <div>
    <div class="header">图片懒加载测试</div>
    <div class="content"></div>
    <div v-for="item in 20" :key="item" class="img-box-mock">
      <LazyImage :imageSrc="item"></LazyImage>
    </div>
  </div>
</template>

<script>
import LazyImage from './LazyImage'
export default {
  components: {
    LazyImage
  }
}
</script>

<style scoped>
.header{
  height: 40px;
  line-height: 40px;
  background-color: rgb(51, 129, 103);
  color: #fff;
}
.img-box-mock{
  height: 50px;
  margin-bottom: 15px;
  width: auto;
  border: 1px solid #eee;
}
</style>