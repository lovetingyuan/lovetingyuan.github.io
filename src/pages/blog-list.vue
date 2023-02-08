<template>
  <ul v-if="Object.keys(displayBlogList).length" class="blog-list">
    <li v-for="(list, c) of displayBlogList" :key="c">
      <h3>
        <router-link :to="`/blog/${c}`">{{ c }}</router-link>
        <a
          v-if="cate"
          :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/new/main/blogs/${cate}`"
          class="add"
          target="_blank"
          rel="noopener noreferrer"
          title="新增"
          >➕
        </a>
      </h3>
      <ul>
        <li v-for="name of list" :key="name">
          <router-link :to="`/blog/${c}/${name}`">{{ name }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
  <p v-else>暂无文章</p>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import useBlogs from '../blogs'

const { blogList, cate } = useBlogs()

const displayBlogList = computed(() => {
  return blogList.value.reduce((blogs, k) => {
    const [cate, name] = k.split('/')
    blogs[cate] ??= []
    blogs[cate].push(name)
    return blogs
  }, {} as Record<string, string[]>)
})

const columns = computed(() => {
  return cate.value ? 1 : 2
})
</script>

<style scoped>
.blog-list {
  column-count: v-bind(columns);
  column-gap: 20px;
  list-style: none;
}
.blog-list .add {
  margin-left: 12px;
  font-size: 15px;
  user-select: none;
}
.blog-list li {
  text-transform: capitalize;
}
.blog-list ul li {
  margin: 12px 0;
  font-size: 15px;
}
.blog-list > li {
  margin-top: 32px;
  font-size: 16px;
}
.blog-list > li:first-child {
  margin-top: 0;
}
.blog-list > li:first-child h3 {
  margin-top: 0;
}

.blog-list {
  padding-left: 10px;
}
.blog-list ul {
  padding-left: 16px;
  list-style-position: inside;
}
</style>
