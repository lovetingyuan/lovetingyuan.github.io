<template>
  <section>
    <span class="cate-name">
      <router-link :to="`/blog/${cate}`">{{ cate }}</router-link>
      <a class="edit" title="编辑" target="_blank" rel="noopener noreferrer"
        :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/blogs/${cate}/${name}.md`">
        <icon-material-symbols-edit-document-rounded />
      </a>
    </span>
    <p v-if="blogStatus === 'loading'" style="padding-top: 15vh">
      <CircleLoading></CircleLoading>
    </p>
    <p v-if="blogStatus === 'failed'">加载失败，请重试...</p>
    <p v-if="blogStatus === 'notFound'">文章不存在</p>
    <article v-if="blogStatus === 'loaded'">
      <component :is="articleCmp"></component>
    </article>
  </section>
</template>

<script lang="ts" setup>
import useBlogs from '@/blogs'
import { useColorMode, useStyleTag } from '@vueuse/core'
import CircleLoading from '@/components/CircleLoading.vue'
import { watchEffect } from 'vue'

const { articleCmp, blogStatus, cate, name } = useBlogs()
const colorMode = useColorMode()
watchEffect(() => {
  const githubMdCss =
    colorMode.value === 'dark'
      ? import('github-markdown-css/github-markdown-dark.css?inline')
      : import('github-markdown-css/github-markdown-light.css?inline')
  githubMdCss.then(({ default: css }) => {
    useStyleTag(css, { id: 'github-markdown-css' })
  })
})
</script>

<style>
article .markdown-body {
  background-color: transparent;
}

article .markdown-body :is(p, blockquote, ul, ol, dl, table, pre, details) {
  font-size: 15px;
}

article .markdown-body :is(p, li) {
  line-height: 1.7;
}

article .markdown-body li {
  margin: 10px 0;
}

article .markdown-body ul {
  padding-left: 16px;
}

article .markdown-body code:not([class]) {
  font-weight: bold;
  margin: 0 5px;
}

article .markdown-body {
  background-color: transparent;
}

article .markdown-body summary:hover {
  font-weight: bold;
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

svg {
  vertical-align: text-top;
}
</style>
