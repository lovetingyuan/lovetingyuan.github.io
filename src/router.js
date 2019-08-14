import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from './views/Home.vue'

Vue.use(VueRouter)

export default () => {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      { path: '/', component: Home },
      {
        path: '/blog/:category?',
        component: () => import('./views/Blog.vue'),
        children: [
          {
            path: '', component: () => import('./views/blog/ArticlesList.vue')
          },
          {
            path: 'javascript', component: () => import('./views/blog/ArticlesList.vue')
          },
          {
            path: 'css', component: () => import('./views/blog/ArticlesList.vue')
          }
        ]
      },
      { path: '/music', component: () => import('./views/Music.vue') },
      { path: '/movie', component: () => import('./views/Movie.vue') },
      { path: '/spirit', component: () => import('./views/Story.vue') }
    ]
  })
}
