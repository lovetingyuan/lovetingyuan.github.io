<template>
  <ul v-if="Object.keys(displayBlogList).length > 0" class="blog-list columns-2 gap-5">
    <li v-for="(list, c) of displayBlogList" :key="c" class="overflow-hidden">
      <h3 class="mb-3 text-lg font-bold">
        <span v-if="cate" class="capitalize">{{ c }}</span>
        <RouterLink v-else :to="`/blog/${c}`" class="capitalize">{{ c }}</RouterLink>
        <a
          v-if="cate"
          :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/new/main/blogs/${cate}`"
          class="ml-3 align-text-top text-xl"
          target="_blank"
          rel="noopener noreferrer"
          title="新增"
        >
          <iconify-icon icon="material-symbols:add"></iconify-icon>
          <!-- <icon-material-symbols-add /> -->
        </a>
      </h3>
      <ul class="mb-8 ml-4">
        <li v-for="name of list" :key="name" class="my-3">
          <RouterLink :to="`/blog/${c}/${name}`">{{ name }}</RouterLink>
        </li>
      </ul>
    </li>
  </ul>
  <p v-else>当前文章分类不存在</p>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
defineOptions({
  name: 'BlogList'
})

import useBlogs from '@/blogs'

const { blogList, cate } = useBlogs()

const displayBlogList = computed(() => {
  return blogList.value.reduce<Record<string, string[]>>((blogs, k) => {
    const [cate, name] = k.split('/')
    ;(blogs[cate] ??= []).push(name)
    return blogs
  }, {})
})

// const columns = computed(() => (cate.value ? 1 : 2))
</script>
