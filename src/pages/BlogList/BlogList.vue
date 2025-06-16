<template>
  <div class="drawer sm:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content px-6">
      <!-- Page content here -->
      <label for="my-drawer-2" class="btn btn-square btn-ghost drawer-button mb-2 sm:hidden">
        <IconifyIcon icon="ep:menu" class="text-3xl"></IconifyIcon>
      </label>
      <RouterView></RouterView>
      <!-- <p v-else>当前文章分类不存在</p> -->
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul
        class="menu menu-md bg-base-200 text-base-content min-h-full w-auto min-w-32 rounded-lg px-0 py-2 [&_li>*]:rounded-none"
      >
        <!-- Sidebar content here -->
        <li>
          <RouterLink
            :to="{ name: RouteName.BlogAllList }"
            class="py-4 capitalize"
            :class="cate ? '' : 'active'"
            >All -----------</RouterLink
          >
        </li>
        <li v-for="item of allCates" :key="item">
          <RouterLink
            :to="`/blog/${item}`"
            class="py-4 capitalize"
            :class="cate === item ? 'active' : ''"
            >{{ item }}</RouterLink
          >
          <!-- <a @click.prevent="handleChangeCate(c)" class="capitalize">{{ c }}</a> -->
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
