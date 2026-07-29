<template>
  <ul class="blog-list columns-2 gap-5 py-2 max-sm:columns-1">
    <li
      v-for="(list, category) of displayBlogList"
      :key="category"
      class="blog-group mb-8 flow-root"
    >
      <h3 class="mb-3 text-lg font-bold">
        <span v-if="cate" class="capitalize">{{ category }}</span>
        <RouterLink v-else :to="`/blog/${category}`" class="capitalize">
          {{ category }}
        </RouterLink>
        <a
          v-if="cate"
          :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/new/main/blogs/${cate}`"
          class="ml-3 align-text-top text-xl"
          target="_blank"
          rel="noopener noreferrer"
          title="新增"
        >
          <IconifyIcon icon="material-symbols:add" />
        </a>
      </h3>
      <ul class="ml-3">
        <li v-for="{ zh, en } of list" :key="zh" class="my-3">
          <RouterLink class="article-link link-hover link" :to="`/blog/${category}/${zh}`">
            {{ zh }}
          </RouterLink>
          <RouterLink
            v-if="en"
            class="link-hover link ml-3 text-xs"
            :to="`/blog/${category}/${en}`"
          >
            EN
          </RouterLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import useBlogs from '@/blogs'

const { cate, displayBlogList } = useBlogs()
</script>
