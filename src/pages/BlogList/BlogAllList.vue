<template>
  <ul class="blog-list columns-2 gap-5">
    <li v-for="(list, c) of displayBlogList" :key="c" class="mb-8 flow-root">
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
      <ul class="ml-4">
        <li v-for="{ zh, en } of list" :key="zh" class="my-3">
          <RouterLink class="link-hover link" :to="`/blog/${c}/${zh}`">{{ zh }}</RouterLink>
          <RouterLink v-if="en" class="link-hover link ml-4" :to="`/blog/${c}/${en}`"
            >🌐𝐸𝓃𝑔𝓁𝒾𝓈𝒽</RouterLink
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import useBlogs from '@/blogs'

const { cate, displayBlogList } = useBlogs()
</script>
