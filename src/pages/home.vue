<template>
  <div>
    <p>
      <i style="margin-left: 1em"> ❄️ 随着海风吹，吹向来时庭院~ </i>
    </p>
    <ul>
      <li v-for="a of links" :key="a.url" class="link-item">
        <a :href="a.url" target="_blank" rel="noopener noreferrer">{{ a.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    title: '代码随想录',
    url: 'https://programmercarl.com/',
  },
  {
    title: 'labuladong算法小抄',
    url: 'https://labuladong.gitee.io/algo/',
  },
  {
    title: '一些LeetCode题目',
    url: 'https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode%20%E9%A2%98%E8%A7%A3%20-%20%E7%9B%AE%E5%BD%95.md',
  },
  {
    title: 'CodeTop',
    url: 'https://codetop.cc/home',
  },
]
</script>

<style scoped>
.link-item {
  margin: 20px 0;
}
</style>
