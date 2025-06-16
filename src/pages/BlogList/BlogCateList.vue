<template>
  <ul class="menu rounded-box bg-base-200">
    <li>
      <h2 class="menu-title capitalize">{{ cate }}</h2>
      <ul class="ml-4">
        <li v-for="{ zh, en } of list" :key="zh" class="my-3">
          <span class="justify-between">
            <RouterLink class="link-hover link" :to="`/blog/${cate}/${zh}`">{{ zh }}</RouterLink>
            <RouterLink
              v-if="en"
              class="link-hover link tooltip ml-4"
              data-tip="English version"
              :to="`/blog/${cate}/${en}`"
              >🌐<span class="tracking-[-2px] italic">𝐸𝓃𝑔𝓁𝒾𝓈𝒽</span></RouterLink
            >
          </span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import useBlogs from '@/blogs'

const { cate, displayBlogList } = useBlogs()

const list = computed(() => {
  return Object.values(displayBlogList.value)[0]
})
</script>
