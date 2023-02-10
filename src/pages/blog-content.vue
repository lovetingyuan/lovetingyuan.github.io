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
      >
        <icon-material-symbols-edit-document-rounded />
      </a>
    </span>
    <p v-if="blogStatus === 'loading'">加载中，请稍候...</p>
    <p v-if="blogStatus === 'failed'">加载失败，请重试...</p>
    <p v-if="blogStatus === 'notFound'">文章不存在</p>
    <article v-if="blogStatus === 'loaded'">
      <component :is="articleCmp"></component>
    </article>
  </section>
</template>

<script lang="ts" setup>
import useBlogs from '@/blogs'
const { articleCmp, blogStatus, cate, name } = useBlogs()
</script>

<style src="github-markdown-css/github-markdown.css"></style>
<style>
.markdown-body :is(p, blockquote, ul, ol, dl, table, pre, details) {
  font-size: 15px;
}
.markdown-body :is(p, li) {
  line-height: 1.7;
}
.markdown-body li {
  margin: 10px 0;
}
.markdown-body ul {
  padding-left: 16px;
}
.markdown-body code:not([class]) {
  font-weight: bold;
  margin: 0 5px;
}
.markdown-body {
  background-color: transparent;
}
.markdown-body summary:hover {
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
