<template>
  <section class="px-2">
    <span class="float-right ml-3 text-base">
      <router-link :to="`/blog/${cate}`" class="capitalize">{{ cate }}</router-link>
      <a
        class="ml-3 align-text-top"
        title="编辑"
        target="_blank"
        rel="noopener noreferrer"
        :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/blogs/${cate}/${name}.md`"
      >
        <iconify-icon icon="material-symbols:edit-document-rounded"></iconify-icon>
      </a>
    </span>
    <div class="pb-[10vh] pt-[15vh]" v-if="blogStatus === 'loading'">
      <CircleLoading :defer="600" />
    </div>
    <div v-if="blogStatus === 'failed'">加载失败，请重试...</div>
    <div v-if="blogStatus === 'notFound'">当前文章不存在</div>
    <article v-if="blogStatus === 'loaded'" ref="articleContainerRef">
      <component :is="articleCmp"> </component>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useColorMode, useStyleTag } from '@vueuse/core'
import { ref, watchEffect } from 'vue'

import useBlogs from '@/blogs'
import CircleLoading from '@/components/circle-loading.vue'

const { articleCmp, blogStatus, cate, name } = useBlogs()
const articleContainerRef = ref<HTMLElement | null>(null)

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
  text-decoration: none;
}

article .markdown-body :is(p, blockquote, ul, ol, dl, table, pre, details) {
  font-size: 15px;
}

article .markdown-body:empty:after {
  content: '⌛️ Todo...';
  margin: 20px;
  font-style: italic;
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
}
article .markdown-body img {
  width: 50%;
  max-width: 100%;
}
/* article .markdown-body pre.shiki code {
  font-weight: 400;
  margin: 0;
  padding: 0;
} */
/*
article .markdown-body {
  background-color: transparent;
} */

article .markdown-body summary:hover {
  font-weight: bold;
}

article .markdown-body .shiki {
  border: 0.5px solid #c9d1d9;
}

html.dark article .markdown-body a {
  color: #7bb1ff;
}

/* article .markdown-body .shiki .line:last-child:empty {
  display: none;
} */
</style>
