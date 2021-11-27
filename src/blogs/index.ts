const getBlogContent = (cate: string, name: string) => {
  return importMap[`./${cate}/${name}.md`]().then(r => r.default)
}
const getBlogList = (cate?: string) => {
  return Object.keys(importMap).map(key => {
    return key.slice(2, -3)
  }).filter(v => cate ? v.startsWith(cate + '/') : true)
}
const importMap = import.meta.glob('./**/*.md') as Record<string, () => Promise<{ default: string }>>

export default function useBlogs () {
  return {
    getBlogList, getBlogContent
  }
}
