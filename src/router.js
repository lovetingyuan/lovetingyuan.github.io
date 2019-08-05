import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})

export default router
