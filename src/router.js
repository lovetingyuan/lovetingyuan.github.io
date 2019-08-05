import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from './views/Home.vue'

Vue.use(VueRouter)

export default () => {
  return new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: () => import('./views/About.vue') }
    ]
  })
}
