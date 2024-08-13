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
        class="menu menu-md min-h-full w-auto min-w-32 rounded-lg bg-base-200 px-0 py-2 text-base-content [&_li>*]:rounded-none"
      >
        <!-- Sidebar content here -->
        <li>
          <RouterLink to="/blog" class="py-4 capitalize" :class="cate ? '' : 'active'"
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
import { computed } from 'vue'

import useBlogs from '@/blogs'

const { blogList, cate, allCates } = useBlogs()

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
  ['text-green-800', 'dark:text-green-300'],
  ['text-purple-800', 'dark:text-purple-300']
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

const columns = computed(() => (cate.value ? 1 : 2))
</script>
