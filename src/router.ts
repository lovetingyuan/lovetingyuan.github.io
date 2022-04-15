import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from './pages/home.vue'
import BlogList from './pages/blogList.vue'
import Music from './pages/music.vue'
import Movie from './pages/movie.vue'

import { h } from 'vue'

const NotFound = {
  name: 'NotFound',
  render() {
    return h(
      'h3',
      {
        style: 'margin: 20vh 0; text-align: center',
      },
      ['页面找不到，请检查地址']
    )
  },
}

export default function () {
  const originTitle = document.title
  const historyMethod =
    typeof document === 'object' ? createWebHistory : createMemoryHistory
  const router = createRouter({
    history: historyMethod(import.meta.env.BASE_URL),
    scrollBehavior: () => ({ top: 0 }),
    routes: [
      { path: '/:anyPath(.*)*', name: 'NotFound', component: NotFound },
      {
        path: '/',
        component: Home,
        beforeEnter(to) {
          if (to.query.redirect) {
            return {
              path: to.query.redirect as string,
              replace: true,
            }
          }
        },
      },
      {
        path: '/index.html',
        redirect: '/',
      },
      {
        name: 'BlogList',
        path: '/blog/:cate?',
        component: BlogList,
        meta: { title: ({ cate }: any) => `博客${cate ? ' - ' + cate : ''}` },
      },
      {
        name: 'BlogContent',
        path: '/blog/:cate/:name',
        component: () => import('./pages/blogContent.vue'),
        meta: { title: ({ cate, name }: any) => `博客 - ${cate + '/' + name}` },
      },
      {
        path: '/music',
        component: Music,
        meta: { title: '歌曲', animation: 'slide' },
      },
      {
        path: '/movie',
        component: Movie,
        meta: { title: '电影', animation: 'slide' },
      },
    ],
  })
  router.afterEach((to) => {
    let title = ''
    if (to.meta?.title) {
      if (typeof to.meta.title === 'function') {
        title = ' ' + to.meta.title(to.params)
      } else if (typeof to.meta.title === 'string') {
        title = ' ' + to.meta.title
      }
    }
    document.title = originTitle + title
  })
  return router
}
