import { reactive } from 'vue'

type DSM = { default: string }

const mdCache: Record<string, DSM> = {}
const importMap = import.meta.glob('./**/*.md')

const fetchMd = () => {
  if (import.meta.env.DEV) return importMap
  return Object.keys(importMap).reduce((map, k) => {
    map[k] = () => {
      const url = k.replace('./', import.meta.env.BASE_URL + 'blogs/').replace('.md', '.html')
      if (mdCache[url]) {
        return Promise.resolve(mdCache[url])
      }
      return fetch(url).then(r => r.text()).then(v => (mdCache[url] = { default: v }))
    }
    return map
  }, {} as Record<string, () => Promise<DSM>>)
}

const store = reactive(new class {
  static namespace = 'Blogs'
  blogs = fetchMd()
  cate = ''
  article = ''
  fetchBlogContent = () => {
    const { cate, article, blogsMap } = this;
    if (!article || !cate) return Promise.reject()
    const fetchBlog = blogsMap[cate][article]
    if (!fetchBlog) {
      return Promise.reject()
    }
    return fetchBlog().then(res => res.default)
  }
  setCateArticle([cate, article]: [string, string]) {
    this.cate = cate
    this.article = article
    if (typeof document === 'object') {
      document.title = 'Blog'
      if (cate) {
        document.title += ' - ' + cate
      }
      if (article) {
        document.title += ' - ' + article
      }
    }
  }
  get articleList() {
    const { article, cate, blogsMap } = this
    if (article) return []
    if (cate) {
      return blogsMap[cate] ? Object.keys(blogsMap[cate]) : [];
    }
    const list: string[] = []
    Object.keys(blogsMap).forEach(c => {
      Object.keys(blogsMap[c]).forEach(name => {
        list.push(c + '/' + name)
      })
    })
    return list
  }
  get blogsMap() {
    const blogsMap: {
      [k: string]: {
        [k: string]: (() => Promise<DSM>)
      }
    } = {}
    const { blogs } = this
    Object.keys(blogs).forEach(path => {
      const paths = path.split('/')
      const name = paths.pop()?.slice(0, -3) as string
      const cate = paths.pop() as string
      if (!blogsMap[cate]) {
        blogsMap[cate] = {
          [name]: blogs[path] as () => Promise<any>
        }
      } else {
        blogsMap[cate][name] = blogs[path] as () => Promise<any>
      }
    })
    return blogsMap
  }
  get cateList() {
    return Object.keys(this.blogsMap).map(cate => {
      return {
        name: cate,
        count: Object.keys(this.blogsMap[cate]).length
      }
    })
  }
})

if (import.meta.env.DEV) {
  console.log('store', store)
  if (typeof window === 'object' && import.meta.hot) {
    (window as any)._hotUpdateBlog = (meta: ImportMeta, module: DSM) => {
      const { pathname } = new URL(meta.url)
      const mdPath = decodeURIComponent(pathname.replace(import.meta.env.BASE_URL, '/'))
      store.blogs[mdPath] = () => Promise.resolve(module)
    }
  }
}

export default store
