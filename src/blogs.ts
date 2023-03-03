import { useRoute } from 'vue-router'
import { ref, computed, watchEffect, reactive, type Component, shallowRef } from 'vue'
import { RouteName } from './constants'

type BlogGlob = Record<string, () => Promise<{ default: Component }>>

const blogsMap = reactive(import.meta.glob('/blogs/**/*.md') as BlogGlob)

export default function useBlogs() {
  const route = useRoute()
  const articleCmp = shallowRef<Component | null>(null)
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
        return
      }
      blogStatus.value = 'loading'
      blog().then(
        (r) => {
          blogStatus.value = 'loaded'
          articleCmp.value = r.default
        },
        () => {
          blogStatus.value = 'failed'
        }
      )
    }
  })

  return {
    blogList,
    blogStatus,
    articleCmp,
    cate,
    name
  }
}
