<template>
  <div class="drawer sm:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content px-3 sm:px-6">
      <label
        for="my-drawer-2"
        class="btn btn-square btn-ghost drawer-button mb-2 sm:hidden"
        aria-label="打开文章分类"
      >
        <IconifyIcon icon="ep:menu" class="text-2xl" />
      </label>
      <RouterView />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="关闭文章分类" class="drawer-overlay" />
      <ul class="blog-categories menu menu-md min-h-full w-auto min-w-32 rounded-xl px-0 py-2">
        <li>
          <RouterLink
            :to="{ name: RouteName.BlogAllList }"
            class="py-3 capitalize"
            :class="cate ? '' : 'active'"
          >
            All
          </RouterLink>
        </li>
        <li v-for="item of allCates" :key="item">
          <RouterLink
            :to="`/blog/${item}`"
            class="py-3 capitalize"
            :class="cate === item ? 'active' : ''"
          >
            {{ item }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useBlogs from '@/blogs'
import { RouteName } from '@/constants'

const { cate, allCates } = useBlogs()
</script>
