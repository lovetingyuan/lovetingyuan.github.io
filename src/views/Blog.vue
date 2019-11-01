<template>
  <div>
    <nav class="tag-list">
      <router-link v-for="tag in tags" :key="tag" class="tag" :to="`/blog/${tag}`" :exact="!tag">{{tag || 'all'}}</router-link>
      <span @click="onEdit">edit</span>
    </nav>
    <section class="article">
      <transition-group name="list-complete" tag="ul" class="blog-list" v-if="!content">
        <li v-for="(val) in articles" :key="val.tag + val.name" class="blog-item list-complete-item">
          <router-link :to="`/blog/${val.tag}/${val.name}`"> {{val.title}} </router-link>
        </li>
      </transition-group>
      <article v-html="content" v-else class="markdown-body"></article>
    </section>
  </div>
</template>

<style>
.list-complete-item {
  transition: all .4s;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

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
        let key = this.CryptoJS.SHA512(t)
        key = this.CryptoJS.SHA512(t + key)
        const bytes = this.CryptoJS.AES.decrypt(ciphertext, key.toString(this.CryptoJS.enc.HEX))
        this.token = bytes.toString(this.CryptoJS.enc.Utf8).trim()
      } catch (err) {}
    },
    onEdit () {
      if (typeof CryptoJS !== 'object') {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/crypto-js@3.1.9-1/crypto-js.js'
        script.onload = () => {
          script.onload = null
          script.remove()
          this.CryptoJS = window.CryptoJS
          delete window.CryptoJS
          this.verify()
        }
        script.onerror = () => alert('auth error')
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
      padding: 4px 16px;
      background-color: #eee;
      text-transform: capitalize;
      border-radius: 100px;
      margin-right: 20px;
      text-decoration: none;
      transition: background-color .3s;
      margin-top: 12px;
      font-size: 14px;
      &:hover {
        background-color: darken(#eee, 8%);
      }
    }
  }
  .blog-list {
    margin: 20px 0;
    padding: 0;
    list-style-position: inside;
  }
  .blog-item {
    font-size: 20px;
    margin: 12px 0;
    a {
      text-decoration: none;
    }
  }
  .article {
    margin: 30px 0;
  }
</style>
