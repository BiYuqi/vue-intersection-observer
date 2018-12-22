<template>
  <div class="observer-demo">
    <ul class="side-bar-wrap">
      <li
        v-for="(item, index) in sideBarData"
        :key="index"
        @click="switchRouter(item)">
        <router-link :to="{name: item.path}">
          {{item.name}}
        </router-link>
        </li>
    </ul>
    <div class="render-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideBarData: [
        {
          name: 'Window',
          path: 'win-global'
        },
        {
          name: 'WithOnce',
          path: 'lazy-load'
        },
        {
          name: 'WithRootMargin',
          path: 'root-margin'
        },
        {
          name: 'WithThresholds',
          path: 'root-threshold'
        },
        {
          name: 'WithFrame',
          path: 'root-frame'
        },
      ]
    }
  },
  methods: {
    switchRouter({name, path}) {
      this.$router.push({
        name: path
      })
    }
  }
}
</script>

<style scoped>
.observer-demo{
  display: flex;
  height: 100%;
  position: relative;
}
.side-bar-wrap{
  list-style: none;
  width: 180px;
  background-color: #f6f6f7;
}
.side-bar-wrap li{
  border-bottom: 1px solid #666;
}
.side-bar-wrap li a{
  display: inline-block;
  width: 100%;
  padding: 10px;
  text-decoration: none;
  color: #000;
  font-size: 16px;
  font-weight: bolder;
}
.side-bar-wrap .router-link-exact-active{
  background-color: #1a9494;
  color: #fff;
}
.render-right{
  overflow: scroll;
  flex: 1;
  position: relative;
}
</style>