<template>
  <ul v-if="Object.keys(blogsList).length" class="blog-list">
    <li v-for="(list, cate) of blogsList" :key="cate">
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
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import useBlogs from '../blogs'

const { getBlogList } = useBlogs()
const props = defineProps<{
  cate?: string
}>()
const blogsList = ref<Record<string, string[]>>({})
watchEffect(() => {
  const list = getBlogList(props.cate)
  const blogs: Record<string, string[]> = {}
  list.forEach(k => {
    const [cate, name] = k.split('/')
    blogs[cate] ??= []
    blogs[cate].push(name)
  })
  blogsList.value = blogs
})

</script>

<style scoped>
.blog-list a {
  text-transform: capitalize;
}
.blog-list > li {
  margin-top: 30px;
}
li {
  margin: 15px 0;
}
.blog-list {
  padding-left: 20px;
}
.blog-list ul {
  padding-left: 16px;
}
</style>
