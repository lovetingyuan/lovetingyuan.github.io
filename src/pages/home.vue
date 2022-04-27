<template>
  <ul>
    <li>
      <ul>
        <li v-for="a of commonLinks" :key="a.url" class="link-item">
          <link-item :a="a" />
        </li>
      </ul>
    </li>
    <li>
      <ul>
        <li v-for="a of homeLinks" :key="a.url" class="link-item">
          <link-item :a="a" />
        </li>
      </ul>
    </li>
    <li>
      <a
        target="_blank"
        title="添加"
        href="https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/config.json"
        >➕</a
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import { homeLinks, commonLinks } from '@/config.json'
import LinkItem from '@/components/LinkItem.vue'
</script>

<style scoped>
ul {
  padding-left: 16px;
}
.link-item {
  margin: 20px 0;
}
</style>
