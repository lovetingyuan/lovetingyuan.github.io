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
          <IconifyIcon mode="style" icon="material-symbols:add"></IconifyIcon>
        </a>
      </h3>
      <ul class="mb-8 ml-4">
        <li v-for="{ zh, en } of list" :key="zh" class="my-3">
          <RouterLink :to="`/blog/${c}/${zh}`">{{ zh }}</RouterLink>
          <RouterLink v-if="en" :to="`/blog/${c}/${en}`" class="ml-4">🌐𝐸𝓃𝑔𝓁𝒾𝓈𝒽</RouterLink>
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
  return blogList.value.reduce<Record<string, Record<string, { zh: string; en: string }>>>(
    (blogs, k) => {
      const [cate, name] = k.split('/')
      if (!blogs[cate]) {
        blogs[cate] = {}
      }
      const group = blogs[cate]
      let blogName = name
      let blogEnName = ''
      if (name.endsWith('.en')) {
        blogEnName = name
        blogName = name.slice(0, -3)
      }
      if (!group[blogName]) {
        group[blogName] = {
          zh: blogName,
          en: blogEnName
        }
      }
      return blogs
    },
    {}
  )
})

// const columns = computed(() => (cate.value ? 1 : 2))
</script>
