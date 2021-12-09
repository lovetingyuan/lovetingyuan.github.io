<template>
  <ul v-if="Object.keys(displayBlogList).length" class="blog-list">
    <li v-for="(list, cate) of displayBlogList" :key="cate">
      <h3>
        <router-link :to="`/blog/${cate}`">{{cate}}</router-link>
      </h3>
      <ul>
        <li v-for="name of list" :key="name">
          <router-link :to="`/blog/${cate}/${name}`">{{name}}</router-link>
        </li>
      </ul>
    </li>
  </ul>
  <p v-else>暂无博客</p>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import useBlogs from '../blogs'

const { blogList, cate } = useBlogs()

const displayBlogList = computed(() => {
  const blogs: Record<string, string[]> = {}
  blogList.value.forEach(k => {
    const [cate, name] = k.split('/')
    blogs[cate] ??= []
    blogs[cate].push(name)
  })
  return blogs
})

const columns = computed(() => {
  return cate.value ? 1 : 2;
})

</script>

<style scoped>
.blog-list {
  column-count: v-bind(columns);
  column-gap: 20px;
}
.blog-list a {
  text-transform: capitalize;
}
.blog-list li {
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
  padding-left: 20px;
}
.blog-list ul {
  padding-left: 16px;
}
</style>
