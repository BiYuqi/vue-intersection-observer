<template>
  <div>
    <div class="left">
      <div class="header" :class="{active: visible}">
        {{visible ? 'visible' : 'unvisible'}}
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
.left{
  width: 800px;
}
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
  width: 800px;
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
  height: 1000px;
  line-height: 1000px;
  text-align: center;
  font-size: 30px;
  color: #2c3e50;
  font-weight: bold;
}
</style>