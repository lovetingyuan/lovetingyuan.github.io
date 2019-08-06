import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from './views/Home.vue'

Vue.use(VueRouter)
// import a from './views/About.vue'

export default () => {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      { path: '/', component: Home },
      // { path: '/about', component: a }
      { path: '/about', component: () => import('./views/About.vue') }
    ]
  })
}
