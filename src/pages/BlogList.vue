<template>
  <ul v-if="Object.keys(displayBlogList).length > 0" class="blog-list columns-2 gap-5">
    <li
      v-for="(list, c, i) of displayBlogList"
      :key="c"
      class="flow-root"
      :class="colors[i].join(' ')"
    >
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
          <RouterLink class="link-hover link" :to="`/blog/${c}/${zh}`">{{ zh }}</RouterLink>
          <RouterLink v-if="en" class="link-hover link ml-4" :to="`/blog/${c}/${en}`"
            >🌐𝐸𝓃𝑔𝓁𝒾𝓈𝒽</RouterLink
          >
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

const colors = [
  ['text-violet-800', 'dark:text-violet-300'],
  ['text-lime-800', 'dark:text-lime-300'],
  ['text-fuchsia-800', 'dark:text-fuchsia-300'],
  ['text-teal-800', 'dark:text-teal-300'],
  ['text-rose-800', 'dark:text-rose-300'],
  ['text-yellow-800', 'dark:text-yellow-300'],
  ['text-orange-800', 'dark:text-orange-300'],
  ['text-cyan-800', 'dark:text-cyan-300'],
  ['text-green-800', 'dark:text-green-300'],
  ['text-amber-800', 'dark:text-amber-300'],
  ['text-blue-800', 'dark:text-blue-300'],
  ['text-sky-800', 'dark:text-sky-300'],
  ['text-green-800', 'dark:text-green-300']
]

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
