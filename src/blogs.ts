import { useRoute } from 'vue-router'
import { ref, computed, watchEffect, reactive } from 'vue'

type BlogGlob = Record<string, () => Promise<{ default: string }>>

const blogsMap = reactive(import.meta.glob('/blogs/**/*.md') as BlogGlob)

export default function useBlogs() {
  const route = useRoute()
  const blogContent = ref('')
  const cate = computed(() => route.params.cate)
  const name = computed(() => route.params.name)
  const blogList = computed(() => {
    if (route.name !== 'BlogList') {
      return []
    }
    return Object.keys(blogsMap)
      .map((key) => key.slice(7, -3))
      .filter((v) => (cate.value ? v.startsWith(cate.value + '/') : true))
  })
  watchEffect(() => {
    if (route.name === 'BlogContent') {
      const blog = blogsMap[`/blogs/${cate.value}/${name.value}.md`]
      if (!blog) {
        blogContent.value = '当前博客不存在'
        return
      }
      blogContent.value = '加载中，请稍候...'
      blog().then(
        (r) => {
          blogContent.value = r.default
        },
        () => {
          blogContent.value = '加载失败，请重试'
        }
      )
    }
  })

  return {
    blogList,
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
