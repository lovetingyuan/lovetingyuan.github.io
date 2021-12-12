<template>
  <section>
    <span class="catename">
      <router-link :to="`/blog/${cate}`">{{ cate }}</router-link>
    </span>
    <article v-html="blogContent" ref="article" class="markdown-body"></article>
  </section>
</template>

<script lang="ts">
import 'github-markdown-css/github-markdown.css'
import * as Prism from 'prismjs'
// @ts-ignore
import('prismjs/components/prism-typescript')
// @ts-ignore
// import('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard')
import 'prismjs/themes/prism-tomorrow.css'

window.Prism = Prism

</script>

<script lang="ts" setup>
import { ref, nextTick, watchEffect } from 'vue'
import useBlogs from '../blogs'

const { blogContent, cate } = useBlogs()
const article = ref<HTMLElement | null>(null)

watchEffect(() => {
  if (blogContent.value) {
    nextTick(() => {
      if (article.value) {
        Prism.highlightAllUnder(article.value as HTMLElement)
      }
    })
  }
})

</script>

<style>
/* markdown */
.markdown-body p, .markdown-body blockquote, .markdown-body ul, .markdown-body ol, .markdown-body dl, .markdown-body table, .markdown-body pre, .markdown-body details {
  font-size: 15px;
}
.markdown-body p, .markdown-body li {
  line-height: 30px;
}
.markdown-body code:not([class]) {
  font-weight: bold;
  font-size: 14px;
}
article.markdown-body ul {
  padding-left: 14px;
}
article.markdown-body {
  background-color: transparent;
}
</style>

<style scoped>

.catename {
  position: absolute;
  right: 0;
  text-transform: capitalize;
}
</style>
