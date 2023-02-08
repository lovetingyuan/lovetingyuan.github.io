import { useRoute } from 'vue-router'
import { ref, computed, watchEffect, reactive } from 'vue'
import { RouteName } from './constants'

type BlogGlob = Record<string, () => Promise<{ default: string }>>

const blogsMap = reactive(import.meta.glob('/blogs/**/*.md') as BlogGlob)

export default function useBlogs() {
  const route = useRoute()
  const blogContent = ref('')
  const blogStatus = ref<'loading' | 'loaded' | 'failed' | 'notFound'>('loading')
  const cate = computed(() => route.params.cate)
  const name = computed(() => route.params.name)
  const blogList = computed(() => {
    if (route.name !== RouteName.BlogList) {
      return []
    }
    return Object.keys(blogsMap)
      .map((key) => key.slice(7, -3))
      .filter((v) => (cate.value ? v.startsWith(cate.value + '/') : true))
  })
  watchEffect(() => {
    if (route.name === RouteName.BlogContent) {
      const blog = blogsMap[`/blogs/${cate.value}/${name.value}.md`]
      if (!blog) {
        blogStatus.value = 'notFound'
        blogContent.value = '当前博客不存在'
        return
      }
      blogStatus.value = 'loading'
      blogContent.value = '加载中，请稍候...'
      blog().then(
        (r) => {
          blogStatus.value = 'loaded'
          blogContent.value = r.default
        },
        () => {
          blogStatus.value = 'failed'
          blogContent.value = '加载失败，请重试'
        }
      )
    }
  })

  return {
    blogList,
    blogStatus,
    blogContent,
    cate,
    name,
  }
}

if (typeof window === 'object' && import.meta.hot) {
  window.addEventListener('__hotUpdateBlog', (evt: CustomEventInit<[ImportMeta, { default: string }]>) => {
    if (!evt.detail) return
    const [meta, module] = evt.detail
    const { pathname } = new URL(meta.url)
    blogsMap[decodeURIComponent(pathname)] = async () => module
  })
}
