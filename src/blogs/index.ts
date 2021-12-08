import { useRoute } from 'vue-router'
import { ref, computed, watchEffect, reactive } from 'vue'

type BlogGlob = Record<string, () => Promise<{ default: string }>>

const importMap = reactive(
  import.meta.glob('./**/*.md') as BlogGlob
)

export default function useBlogs() {
  const route = useRoute()
  const blogContent = ref('')
  const blogList = computed(() => {
    if (route.name !== 'BlogList') {
      return []
    }
    const { cate } = route.params
    return Object.keys(importMap).map(key => {
      return key.slice(2, -3)
    }).filter(v => cate ? v.startsWith(cate + '/') : true)
  })
  watchEffect(() => {
    if (route.name === 'BlogContent') {
      const { name, cate } = route.params
      const blog = importMap[`./${cate}/${name}.md`]
      if (!blog) {
        blogContent.value = '当前博客不存在'
        return
      }
      blog().then(r => {
        blogContent.value = r.default
      }).catch(err => {
        blogContent.value = '加载失败，请重试'
      })
    }
  })
  const cate = computed(() => route.params.cate)
  const name = computed(() => route.params.name)
  return {
    blogList, blogContent,
    cate, name
  }
}

if (import.meta.env.DEV) {
  if (typeof window === 'object' && import.meta.hot) {
    // @ts-ignore
    window._hotUpdateBlog = (meta: ImportMeta, module: { default: string }) => {
      const { pathname } = new URL(meta.url)
      const key = pathname.split('/').slice(-2).join('/')
      importMap[`./${decodeURIComponent(key)}`] = async () => module
    }
  }
}
