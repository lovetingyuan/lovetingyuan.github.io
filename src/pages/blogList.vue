<template>
  <ul v-if="Object.keys(displayBlogList).length" class="blog-list">
    <li v-for="(list, cate) of displayBlogList" :key="cate">
      <span>
        <router-link :to="`/blog/${cate}`">{{cate}}</router-link>
      </span>
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

const { blogList } = useBlogs()

const displayBlogList = computed(() => {
  const blogs: Record<string, string[]> = {}
  blogList.value.forEach(k => {
    const [cate, name] = k.split('/')
    blogs[cate] ??= []
    blogs[cate].push(name)
  })
  return blogs
})

</script>

<style scoped>
.blog-list {
  column-count: 2;
  column-gap: 20px;
}
.blog-list a {
  text-transform: capitalize;
}
.blog-list li {
  margin: 12px 0;
  font-size: 14px;
}
.blog-list > li {
  margin-top: 32px;
  font-size: 15px;
}
.blog-list > li:first-child {
  margin-top: 0;
}

.blog-list {
  padding-left: 20px;
}
.blog-list ul {
  padding-left: 16px;
}
</style>
