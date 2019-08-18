import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from './views/Home.vue'
import View404 from './views/404.vue'

Vue.use(VueRouter)

const route404 = () => ({
  path: '*',
  component: View404
})

export default () => {
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        component: Home,
        beforeEnter (to, from, next) {
          if (to.query.redirect) {
            next({
              path: to.query.redirect,
              replace: true
            })
          } else {
            next()
          }
        }
      },
      {
        path: '/blog/:tag?/:name?',
        component: () => import('./views/Blog.vue')
      },
      { path: '/music', component: () => import('./views/Music.vue') },
      { path: '/movie', component: () => import('./views/Movie.vue') },
      { path: '/spirit', component: () => import('./views/Story.vue') },
      route404()
    ]
  })
  return router
}
