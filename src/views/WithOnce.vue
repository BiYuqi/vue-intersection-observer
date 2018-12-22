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
      imgList: [
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-new-commit0.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-new-commit1.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-new-commit2.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-new-commit3.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-new-commit4.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-new-commit5.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-old0.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-old1.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-old2.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-old3.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-old4.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-old5.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-old6.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-old7.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-old8.png',
        'http://loadingmore-1254319003.coscd.myqcloud.com/edit-old9.png'
      ]
    }
  },
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
  text-align: center;
}
.img-box-mock{
  margin-bottom: 15px;
  width: auto;
  border: 1px solid #eee;
}
.tips{
  font-size: 12px;
  color: rgb(44, 202, 202);
}
</style>