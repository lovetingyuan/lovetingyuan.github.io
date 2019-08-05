import App from './App.vue'
import Vue from 'vue'
import router from './router'

window.app = new Vue({
  render: h => h(App),
  router
})

app.$mount('#app')
