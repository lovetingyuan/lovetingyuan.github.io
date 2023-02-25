<template>
  <ul class="cate-list">
    <li v-for="(list, cate) in collections" :key="cate" class="cate-item">
      <details open>
        <summary>
          {{ cate }}
          <a
            target="_blank"
            title="添加"
            style="vertical-align: sub"
            :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/collection/${cate}.txt`"
          >
            <icon-material-symbols-add />
          </a>
        </summary>
        <ul class="site-list">
          <li v-for="site of list" :key="site.url" class="site-item">
            <link-item :a="site" :size="24" />
          </li>
        </ul>
      </details>
    </li>
  </ul>
</template>

<script setup lang="ts">
import collections from '@/collection'
import LinkItem from './LinkItem.vue'
</script>

<style scoped>
.cate-list {
  list-style: none;
  padding-left: 15px;
}

.cate-item {
  margin: 25px 0;
}

summary {
  cursor: pointer;
  transition: font-weight 0.2s;
  letter-spacing: 2px;
}

summary:hover {
  font-weight: bold;
  /* letter-spacing: 3px; */
}

.site-list {
  list-style: none;
  padding-left: 0;
  margin-top: 12px;
}

.site-item {
  display: inline-block;
  margin: 10px 15px;
}
</style>
