import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from './pages/home-page.vue'
import BlogList from './pages/blog-list.vue'
import BlogContent from './pages/blog-content.vue'
import Music from './pages/music-page.vue'
import Movie from './pages/movie-page.vue'
import NotFound from './pages/not-found.vue'
import { RouteName } from './constants'

export default function () {
  const originTitle = import.meta.env.SSR ? '' : document.title
  const historyMethod = import.meta.env.SSR ? createMemoryHistory : createWebHistory
  const router = createRouter({
    history: historyMethod(import.meta.env.BASE_URL),
    scrollBehavior: () => ({ top: 0 }),
    routes: [
      { path: '/:anyPath(.*)*', name: RouteName.NotFound, component: NotFound },
      {
        path: '/',
        component: Home,
        name: RouteName.Home,
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
        name: RouteName.BlogList,
        path: '/blog.html/:cate?',
        component: BlogList,
        meta: {
          title: ({ cate }: { cate: string }) => `博客${cate ? ' - ' + cate : ''}`,
          animation: 'slide',
        },
      },
      {
        name: RouteName.BlogContent,
        path: '/blog.html/:cate/:name',
        component: BlogContent,
        meta: {
          title: ({ cate, name }: { cate: string; name: string }) => `博客 - ${cate + '/' + name}`,
        },
      },
      {
        name: RouteName.Music,
        path: '/music.html',
        component: Music,
        meta: { title: '歌曲', animation: 'slide' },
      },
      {
        name: RouteName.Movie,
        path: '/movie.html',
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
    if (!import.meta.env.SSR) {
      document.title = originTitle + title
    }
  })
  return router
}
