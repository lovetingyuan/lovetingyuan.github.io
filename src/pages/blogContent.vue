<template>
  <span class="catename">
    <router-link :to="`/blog/${cate}`">{{ cate }}</router-link>
  </span>
  <article v-html="blogContent" ref="article" class="markdown-body"></article>
</template>

<script lang="ts" setup>
import { ref, nextTick, watchEffect } from 'vue'
import useBlogs from '../blogs'
import 'github-markdown-css/github-markdown.css'

import * as Prism from 'prismjs'
// @ts-ignore
import('prismjs/components/prism-typescript')
// @ts-ignore
// import('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard')
import 'prismjs/themes/prism-tomorrow.css'

window.Prism = Prism

const { blogContent, cate } = useBlogs()
const article = ref<HTMLElement | null>(null)

watchEffect(() => {
  if (blogContent.value) {
    nextTick(() => {
      if (article.value) {
        Prism.highlightAllUnder(article.value)
      }
    })
  }
})

</script>

<style scoped>
.catename {
  position: absolute;
  right: 0;
  text-transform: capitalize;
}
</style>
