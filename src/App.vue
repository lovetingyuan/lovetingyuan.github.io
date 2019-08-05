<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <p>{{date}}</p>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  },
  data() {
    return {
      date: null
    }
  },
  created() {
    const url = 'https://1650493675298486.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/common_data_proxy/test2/'
    fetch(url).then(res => res.json()).then(data => {
      this.date = data.date;
    })
  }
}
</script>

<style lang="less" scoped>
main {
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid yellowgreen;
}
</style>

