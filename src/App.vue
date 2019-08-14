<template>
  <div id="app">
    <app-header :navs-list="navs"></app-header>
    <main :style="`margin-top: ${marginTop}px`">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'

export default {
  components: { AppHeader },
  data () {
    return {
      marginTop: 0,
      navs: [
        {
          title: '首页',
          path: '/',
          exact: true
        },
        {
          title: '博客',
          path: '/blog'
        },
        {
          title: '音乐',
          to: {
            path: '/music'
          }
        },
        {
          title: '电影',
          path: '/movie'
        },
        {
          title: '远方',
          path: '/spirit'
        }
      ]
    }
  },
  created () {
    const url = 'https://1650493675298486.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/common_data_proxy/test2/'
    typeof fetch === 'function' && fetch(url).then(res => res.json()).then(data => {
      this.date = data.date
    })
  },
  mounted () {
    this.$nextTick(() => {
      const headerHeight = document.querySelector('header').clientHeight
      this.marginTop = headerHeight
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
  position: relative;
  @media screen and (max-width: 544px) {
    width: 90%;
    padding: 20px;
  }

  flex-grow: 1;
  width: 80%;
  padding: 40px;
  padding-top: 20px;

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
