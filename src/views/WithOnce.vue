<template>
  <div class="w800">
    <div class="header">
      图片懒加载测试<i class="tips">请快速向下滚动屏幕测试懒加载</i>
    </div>
    <div class="content"></div>
    <div v-for="item in imgList" :key="item" class="img-box-mock">
      <LazyImage :imageSrc="item"></LazyImage>
    </div>
  </div>
</template>

<script>
import LazyImage from "./LazyImage";
export default {
  data() {
    return {
      imgList: [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1587301982468-b42fee82b65e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1565094706851-13d3d16157a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1575650772417-e6b418b0d106?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1574449143339-1f8bb5139faa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1573957065303-110b23048d68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1576124018534-1fb60d360142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1575841004965-bca4f2a31c1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1581299893528-b2d0a61b9d48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1581338772954-b7e9189cb528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      ]
    };
  },
  components: {
    LazyImage
  }
};
</script>

<style scoped>
.header {
  height: 40px;
  line-height: 40px;
  background-color: rgb(51, 129, 103);
  color: #fff;
  text-align: center;
}
.img-box-mock {
  margin-bottom: 15px;
  width: auto;
  border: 1px solid #eee;
}
.tips {
  font-size: 12px;
  color: rgb(44, 202, 202);
}
</style>
