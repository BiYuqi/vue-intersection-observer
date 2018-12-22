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
import Observer from '@/components/index.js'
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

<style scoped>
.header{
  position: fixed;
  top: 0;
  left: 180px;
  background-color: #f50;
  color: #fff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
}
.header.active{
  background-color: green;
  color: #fff;
}
.test{
  background-color: #f50;
  color: #fff;
  width: 100px;
  height: 100px;
}
.test.active{
  background-color: green;
  color: #fff;
}
.content{
  height: 2000px;
  line-height: 1000px;
  text-align: center;
  font-size: 30px;
  color: #2c3e50;
  font-weight: bold;
}
</style>