import { request, init } from './utils'

export default {
  blogs: init({}),
  content: '',
  get tags () {
    return Object.keys(this.blogs)
  },
  get allBlogs () {
    const allBlogs = []
    this.tags.forEach(tag => {
      allBlogs.push(...this.blogs[tag])
    })
    return allBlogs
  },
  setBlogs (blogs) {
    Object.keys(blogs).forEach(tag => {
      blogs[tag].forEach(blog => {
        blog.tag = tag
      })
    })
    this.blogs = blogs
  },
  setBlogContent (content) {
    this.content = content
  },
  $fetchBlogs () {
    return request.get('/data/blog/blog.json').then(data => {
      this.setBlogs(data.blogs)
    })
  },
  $fetchBlogContent ({ tag, name }) {
    return request.get(`/data/blog/${tag}/${name}.md`).then(res => {
      this.setBlogContent(res)
    })
  }
}
