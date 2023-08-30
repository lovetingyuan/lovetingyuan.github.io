<template>
  <ul class="list-none pl-2.5">
    <li v-for="(list, cate) in collections" :key="cate">
      <details open>
        <summary class="cursor-pointer tracking-wider hover:font-bold">
          {{ cate }}
          <a
            target="_blank"
            title="添加"
            :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/collection/${cate}.txt`"
          >
            <icon-material-symbols-add />
          </a>
        </summary>
        <ul class="my-6">
          <li v-for="site of list" :key="site.url" class="inline-block mx-4 my-2.5">
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
