<template>
  <ul class="blog-list columns-2 gap-5" v-if="Object.keys(displayBlogList).length">
    <li v-for="(list, c) of displayBlogList" :key="c">
      <h3 class="mb-3 text-lg font-bold">
        <span v-if="cate" class="capitalize">{{ c }}</span>
        <router-link v-else :to="`/blog/${c}`" class="capitalize">{{ c }}</router-link>
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
          <router-link :to="`/blog/${c}/${name}`">{{ name }}</router-link>
        </li>
      </ul>
    </li>
  </ul>
  <p v-else>当前文章分类不存在</p>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

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
