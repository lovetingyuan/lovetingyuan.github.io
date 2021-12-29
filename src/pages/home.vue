<template>
  <p>
    <i style="margin-left: 1em"> ❄️ 随着海风吹，吹向来时庭院~ </i>
  </p>
  <br />
  <ul>
    <li v-for="a of links" :key="a.url" class="link-item">
      <a :href="a.url" target="_blank" rel="noopener noreferrer">{{
        a.title
      }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const links = [
  {
    title: "代码随想录",
    url: "https://programmercarl.com/",
  },
  {
    title: "labuladong算法小抄",
    url: "https://labuladong.gitee.io/algo/",
  },
];
</script>

<style scoped>
.link-item {
  margin: 20px 0;
}
</style>