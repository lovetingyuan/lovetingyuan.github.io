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
    <p v-if="blogStatus === 'loading'">加载中，请稍候...</p>
    <p v-if="blogStatus === 'failed'">加载失败，请重试...</p>
    <p v-if="blogStatus === 'notFound'">文章不存在</p>
    <article v-if="blogStatus === 'loaded'" v-html="blogContent" ref="article" class="markdown-body"></article>
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
import useBlogs from '@/blogs'
import { getHighlighter } from 'shiki'
const { blogContent, blogStatus, cate, name } = useBlogs()
const article = ref<HTMLElement | null>(null)
// console.log(shiki)
watchEffect(() => {
  if (blogContent.value && blogStatus.value === 'loaded') {
    // getHighlighter({
    //   themes: ['github-light', 'nord'],
    //   langs: ['javascript', 'python'],
    // }).then((highlighter) => {
    //   if (article.value) {
    //     article.value.querySelectorAll('code').forEach((code) => {
    //       const lang =
    //         Array.from(code.classList)
    //           .find((v) => v.startsWith('language-'))
    //           ?.split('-')[0] || 'ts'
    //       code.innerHTML = highlighter.codeToHtml(code.textContent as string, { lang })
    //     })
    //     // Prism.highlightAllUnder(article.value as HTMLElement)
    //   }
    // })
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
  letter-spacing: 1px;
}
.markdown-body code {
  letter-spacing: initial;
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
  float: right;
  margin-left: 10px;
  text-transform: uppercase;
  font-size: 14px;
}
.edit {
  margin-left: 10px;
}
</style>
