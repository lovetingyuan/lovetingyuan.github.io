<template>
  <section class="px-2">
    <div class="mb-4 flex items-center justify-between">
      <button title="返回" class="btn btn-square btn-sm" @click.prevent="$router.back()">
        <IconifyIcon icon="material-symbols:arrow-back-rounded" :width="28"></IconifyIcon>
      </button>
      <span class="ml-3 text-base">
        <RouterLink :to="`/blog/${cate}`" class="capitalize">{{ cate }}</RouterLink>
        <a
          class="ml-3 align-text-top"
          title="编辑"
          target="_blank"
          rel="noopener noreferrer"
          :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/blogs/${cate}/${name}.md`"
        >
          <IconifyIcon icon="material-symbols:edit-document-rounded" mode="style"></IconifyIcon>
        </a>
      </span>
    </div>
    <div v-if="true" class="pb-[10vh] pt-[15vh]">
      <CircleLoading :defer="400" />
    </div>
    <div v-if="blogStatus === 'failed'">加载失败，请重试...</div>
    <div v-if="blogStatus === 'notFound'">当前文章不存在</div>
    <article v-if="blogStatus === 'loaded'">
      <component :is="articleCmp"> </component>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useColorMode, useStyleTag } from '@vueuse/core'
import { watchEffect } from 'vue'

import useBlogs from '@/blogs'
import CircleLoading from '@/components/CircleLoading.vue'

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

article .markdown-body a:hover {
  text-decoration: underline;
}

article .markdown-body :is(p, blockquote, ul, ol, dl, table, pre, details) {
  font-size: 15px;
}

article .markdown-body:empty:after {
  content: '⌛️ Todo...';
  margin: 20px;
  font-style: italic;
  font-size: 20px;
}

article .markdown-body :is(p, li) {
  line-height: 1.7;
}

article .markdown-body li {
  margin: 10px 0;
}

article .markdown-body :is(ul, ol) {
  padding-left: 20px;
  list-style: auto;
}

article .markdown-body code:not([class]) {
  font-weight: 500;
  margin: 0 4px;
  font-size: 0.9em;
  padding: 0.15em 0.4em;
  font-family: 'Sriracha', 'Wotfard-fallback', sans-serif;
}

article .markdown-body img {
  width: 50%;
  max-width: 100%;
}

article .markdown-body summary:hover {
  font-weight: bold;
}

article .markdown-body .shiki {
  border: 0.5px solid #c9d1d9;
}

html.dark article .markdown-body a {
  color: #7bb1ff;
}
</style>
