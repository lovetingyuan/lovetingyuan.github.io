import { useRoute } from 'vue-router'
import { ref, computed, watchEffect, type Component, shallowRef } from 'vue'
import { RouteName } from './constants'

const blogsMap = import.meta.glob<Component>('/blogs/**/*.md', {
  import: 'default'
})

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
          articleCmp.value = r
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
