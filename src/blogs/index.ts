import { type Component, computed, ref, shallowRef, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import { RouteName } from '@/constants'

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
    // if (route.name !== RouteName.BlogList) {
    //   return []
    // }
    return Object.keys(blogsMap)
      .map((key) => key.slice(7, -3))
      .filter((v) => (cate.value ? v.startsWith(cate.value + '/') : true))
  })
  const allCates = computed(() => {
    const cates = new Set<string>()
    Object.keys(blogsMap)
      .map((key) => key.slice(7, -3))
      .forEach((p) => {
        cates.add(p.split('/').shift() as string)
      })
    return [...cates]
  })
  const displayBlogList = computed(() => {
    return blogList.value.reduce<Record<string, Record<string, { zh: string; en: string }>>>(
      (blogs, k) => {
        const [cate, name] = k.split('/')
        if (!blogs[cate]) {
          blogs[cate] = {}
        }
        const group = blogs[cate]
        let blogName = name
        let blogEnName = ''
        if (name.endsWith('.en')) {
          blogEnName = name
          blogName = name.slice(0, -3)
        }
        if (!group[blogName]) {
          group[blogName] = {
            zh: blogName,
            en: blogEnName
          }
        }
        return blogs
      },
      {}
    )
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
        (err) => {
          if (import.meta.env.DEV) {
            // eslint-disable-next-line no-console
            console.log(err)
          }
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
    name,
    allCates,
    displayBlogList
  }
}
