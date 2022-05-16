<template>
  <section>
    <span class="cate-name">
      <router-link :to="`/blog/${cate}`">{{ cate }}</router-link>
      <a
        class="edit"
        title="编辑"
        target="_blank"
        rel="noopener noreferrer"
        :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/blogs/${cate}/${name}.md`"
        >✍️</a
      >
    </span>
    <article v-html="blogContent" ref="article" class="markdown-body"></article>
  </section>
</template>

<script lang="ts">
import 'github-markdown-css/github-markdown.css'
import * as Prism from 'prismjs'
// eslint-disable-next-line
// @ts-ignore
import('prismjs/components/prism-typescript')
// eslint-disable-next-line
// @ts-ignore
import 'prismjs/themes/prism-tomorrow.css'

window.Prism = Prism
</script>

<script lang="ts" setup>
import { ref, nextTick, watchEffect } from 'vue'
import useBlogs from '../blogs'

const { blogContent, cate, name } = useBlogs()
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
.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  font-size: 15px;
}
.markdown-body p,
.markdown-body li {
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
.cate-name {
  position: absolute;
  right: 0;
  top: 0;
  text-transform: uppercase;
}
.edit {
  margin-left: 1em;
  color: #00b722;
  font-size: 18px;
}
</style>
