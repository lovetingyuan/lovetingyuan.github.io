import { createRouter, createWebHistory, createMemoryHistory, Router } from 'vue-router'
import Home from './pages/home.vue'
import BlogList from './pages/blogList.vue'
import Music from './pages/music.vue'
import Movie from './pages/movie.vue'

import { h } from 'vue'

export let router: Router | null = null

const NotFound = {
  name: 'NotFound',
  render() {
    return h('h3', {
      style: 'margin: 20vh 0; text-align: center'
    }, ['页面找不到，请检查地址'])
  }
}

export default function () {
  const historyMethod = typeof document === 'object' ? createWebHistory : createMemoryHistory
  router = createRouter({
    history: historyMethod(import.meta.env.BASE_URL),
    routes: [
      { path: '/:anyPath(.*)*', name: 'NotFound', component: NotFound },
      {
        path: '/',
        component: Home,
        beforeEnter (to, from, next) {
          if (to.query.redirect) {
            next({
              path: to.query.redirect as string,
              replace: true
            })
          } else {
            next()
          }
        }
      },
      {
        path: '/index.html',
        redirect: '/'
      },
      {
        path: '/blog/:cate?', component: BlogList,
        props: true, meta: { title: '博客 - {{cate}}' }
      },
      {
        path: '/blog/:cate/:name', component: () => import('./pages/blogContent.vue'),
        props: true, meta: { title: '博客 - {{ name }}' }
      },
      {
        path: '/music',
        component: Music,
        meta: { title: '歌曲' }
      },
      {
        path: '/movie',
        component: Movie,
        meta: { title: '电影' }
      }
    ]
  })
  router.afterEach((to) => {
    let _title = ''
    if (to.meta?.title) {
      _title = ' ' + (to.meta.title as string).replace(/\{\{([^}]+?)\}\}/g, (_s, g) => {
        return to.params[g.trim()] + ''
      })
    }
    document.title = 'tingyuan' + _title
  })
  return router;
}
