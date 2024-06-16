import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import { RouteName } from './constants'
import BlogList from './pages/blog-list.vue'
import Home from './pages/home-page.vue'
import Loading from './pages/loading-page.vue'
import Movie from './pages/movie-page.vue'
import Music from './pages/music-page.vue'
import NotFound from './pages/not-found.vue'
import SitesList from './pages/sites-list.vue'

function createRoute() {
  const historyMethod = import.meta.env.SSR ? createMemoryHistory : createWebHistory
  const router = createRouter({
    history: historyMethod(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
      // return desired position
      if (to.name === RouteName.BlogContent) {
        return { top: 0 }
      }
      return savedPosition || { top: 0 }
    },
    routes: [
      { path: '/:anyPath(.*)*', name: RouteName.NotFound, component: NotFound },
      {
        path: '/',
        component: Home,
        name: RouteName.Home,
        children: [
          {
            path: '/',
            component: SitesList,
            name: RouteName.SitesList
          },
          {
            path: '/404', // just for SSG to 404.html
            name: RouteName.Loading,
            component: Loading
          },
          {
            name: RouteName.BlogList,
            path: '/blog/:cate?',
            component: BlogList,
            meta: {
              title: ({ cate }: { cate: string }) => `博客${cate ? ' - ' + cate : ''}`,
              animation: 'slide'
            }
          },
          {
            name: RouteName.BlogContent,
            path: '/blog/:cate/:name',
            component: () => import('@/pages/blog-content.vue'),
            meta: {
              title: ({ cate, name }: { cate: string; name: string }) =>
                `博客 - ${cate + '/' + name}`
            }
          },
          {
            name: RouteName.Music,
            path: '/music',
            component: Music,
            meta: { title: '歌曲', animation: 'slide' }
          },
          {
            name: RouteName.Movie,
            path: '/movie',
            component: Movie,
            meta: { title: '电影', animation: 'slide' }
          }
        ]
      },
      {
        path: '/index.html',
        redirect: '/'
      }
    ]
  })
  router.afterEach((to) => {
    let title = 'tingyuan'
    if (typeof to.meta.title === 'function') {
      title += ' ' + to.meta.title(to.params)
    } else if (typeof to.meta.title === 'string') {
      title += ' ' + to.meta.title
    }
    document.title = title
  })
  return router
}

export { createRoute }
