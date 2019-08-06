<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
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
    typeof fetch === 'function' && fetch(url).then(res => res.json()).then(data => {
      this.date = data.date;
    })
  }
}
</script>

<style src="./style.css"></style>

<style lang="less">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  max-width: var(--max-width);
  margin: 0 auto;
  border: 1px solid yellowgreen;
  flex-grow: 1;
  width: 80%;
  padding: 40px;

  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(16px);
    opacity: 0;
  }
}

</style>

