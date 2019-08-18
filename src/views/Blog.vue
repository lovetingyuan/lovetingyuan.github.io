<template>
  <div>
    <nav class="tag-list">
      <router-link v-for="tag in tags" :key="tag" class="tag" :to="`/blog/${tag}`">{{tag}}</router-link>
    </nav>
    <section>
      <ul class="blog-list" v-if="!content">
        <li v-for="(val, name) in articles" :key="name">
          <h2>
            <router-link :to="`/blog/${val.tag}/${val.name}`">
              {{val.title}}
            </router-link>
          </h2>
        </li>
      </ul>
      <article v-html="content" v-else class="markdown-body">
      </article>
    </section>
  </div>
</template>

<script>
import blogModule from '@/modules/blog'

export default {
  asyncData (store, route) {
    store.addModule('Blog', blogModule)
    return Promise.all([
      store.Blog.$fetchBlogs(),
      route.params.name && store.Blog.$fetchBlogContent({
        name: route.params.name,
        tag: route.params.tag
      })
    ])
  },
  computed: {
    tags () {
      return this.$store.Blog.tags
    },
    currentTag () {
      return this.$route.params.tag
    },
    articles () {
      if (this.currentTag) {
        return this.$store.Blog.blogs[this.currentTag]
      }
      return this.$store.Blog.allBlogs
    },
    content () {
      if (this.$route.params.name) {
        return this.$store.Blog.content
      }
      return null
    }
  },
  mounted () {
    if (!document.getElementById('github-css-style')) {
      const style = document.createElement('link')
      style.rel = 'stylesheet'
      style.id = 'github-css-style'
      style.href = 'https://cdn.jsdelivr.net/npm/github-markdown-css/github-markdown.min.css'
      document.head.appendChild(style)
    }
  }
}
</script>

<style lang="less" scoped>
  .tag-list {
    .tag {
      display: inline-block;
      padding: 5px 10px;
      background-color: #eee;
      border-radius: 30%;
      margin-right: 20px;
    }
  }
  .blog-list {
    // list-style: none;
    margin: 20px 0;
    padding: 0;
  }
</style>
