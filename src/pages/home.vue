<template>
  <section>
    <figure>
      <figcaption>常用站点</figcaption>
      <ul class="common-sites">
        <li v-for="a of commonLinks" :key="a.url" class="common-site-item">
          <link-item :a="a" :size="36" class="common-site-link" />
        </li>
      </ul>
    </figure>
    <figure>
      <figcaption>技术站点</figcaption>
      <ul class="tech-sites">
        <li v-for="a of homeLinks" :key="a.url" class="tech-site-item">
          <link-item :a="a" :size="20" />
        </li>
        <li class="tech-site-item">
          <a
            target="_blank"
            title="添加"
            href="https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/config.json"
            >➕</a
          >
        </li>
      </ul>
    </figure>
  </section>
</template>

<script setup lang="ts">
import { homeLinks, commonLinks } from '@/config.json'
import LinkItem from '@/components/LinkItem.vue'
</script>

<style scoped>
figcaption {
  margin-bottom: 10px;
}
.common-sites {
  padding: 0;
  margin: 0;
  list-style: none;
}
.common-site-item {
  margin: 16px 30px;
  display: inline-block;
}
.common-site-link {
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
}
.common-site-link :deep(img) {
  display: block;
  margin-bottom: 10px;
}
.tech-sites {
  padding: 0;
  margin: 0;
  list-style: none;
}
.tech-site-item {
  display: inline-block;
  margin: 10px 20px;
}
.tech-site-item :deep(img) {
  vertical-align: middle;
  margin-right: 10px;
}
.tech-site-item :deep(span) {
  vertical-align: middle;
}
</style>
