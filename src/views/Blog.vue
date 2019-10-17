<template>
  <div>
    <nav class="tag-list">
      <router-link v-for="tag in tags" :key="tag" class="tag" :to="`/blog/${tag}`" :exact="!tag">{{tag || 'all'}}</router-link>
      <span @click="onEdit">edit</span>
    </nav>
    <section class="article">
      <ul class="blog-list" v-if="!content">
        <li v-for="(val, name) in articles" :key="name">
          <h2>
            <router-link :to="`/blog/${val.tag}/${val.name}`">
              {{val.title}}
            </router-link>
          </h2>
        </li>
      </ul>
      <article v-html="content" v-else class="markdown-body"></article>
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
      return [''].concat(this.$store.Blog.tags)
    },
    currentTag () {
      return this.$route.params.tag
    },
    blogName () {
      return this.$route.params.name
    },
    articles () {
      if (this.currentTag) {
        return this.$store.Blog.blogs[this.currentTag]
      }
      return this.$store.Blog.allBlogs
    },
    content () {
      if (this.blogName) {
        return this.$store.Blog.content
      }
      return null
    }
  },
  data () {
    return { token: '' }
  },
  methods: {
    verify () {
      const t = prompt('请认证:')
      if (!t) return
      try {
        const ciphertext = 'U2FsdGVkX1/Fnzeor5i6wdpxKOW0/h+Q0+epQVP8w0s='
        let key = window.CryptoJS.SHA512(t)
        key = window.CryptoJS.SHA512(t + key)
        const bytes = window.CryptoJS.AES.decrypt(ciphertext, key.toString(window.CryptoJS.enc.HEX))
        this.token = bytes.toString(window.CryptoJS.enc.Utf8).trim()
      } catch (err) {}
    },
    onEdit () {
      if (typeof CryptoJS !== 'object') {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/crypto-js@3.1.9-1/crypto-js.js'
        script.onload = () => {
          script.onload = null
          script.remove()
          this.verify()
        }
        document.head.appendChild(script)
      } else {
        this.verify()
      }
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
  },
  beforeDestroy () {
    this.$store.removeModule('Blog', blogModule)
  }
}
</script>

<style lang="less" scoped>
  .tag-list {
    .tag {
      display: inline-block;
      padding: 6px 16px;
      background-color: #eee;
      border-radius: 100px;
      margin-right: 20px;
      text-decoration: none;
      transition: background-color .3s;
      margin-top: 12px;
      &:hover {
        background-color: darken(#eee, 8%);
      }
    }
  }
  .blog-list {
    // list-style: none;
    margin: 20px 0;
    padding: 0;
  }
  .article {
    margin: 30px 0;
  }
</style>
