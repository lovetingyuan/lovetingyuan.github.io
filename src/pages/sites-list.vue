<template>
  <section>
    <figure class="my-5">
      <figcaption class="mb-3 text-lg">
        常用站点
        <a
          target="_blank"
          title="添加"
          class="align-text-top text-xl"
          href="https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/pages/common-sites.txt"
        >
          <iconify-icon icon="material-symbols:add"></iconify-icon>
        </a>
      </figcaption>
      <ul class="mt-3 list-none p-0">
        <li v-for="a of commonLinks2" :key="a.url" class="mx-6 my-4 inline-block text-center">
          <link-item :a="a" :size="28" />
        </li>
      </ul>
    </figure>
    <figure class="my-5">
      <figcaption class="mb-3 text-lg">
        集锦
        <a
          target="_blank"
          title="添加"
          class="align-text-top text-xl"
          href="https://github.com/lovetingyuan/lovetingyuan.github.io/new/main/src/collection"
        >
          <iconify-icon icon="material-symbols:add"></iconify-icon>
        </a>
      </figcaption>
      <CollectionSites />
    </figure>
  </section>
</template>

<script setup lang="ts">
import CollectionSites from '@/components/CollectionSites.vue'

import LinkItem from '../components/LinkItem.vue'
import commonLinks from './common-sites.txt?raw'
const commonLinks2 = commonLinks
  .trim()
  .split('\n')
  .map((v) => {
    const [title, url] = v.split(': ').map((v) => v.trim())
    return {
      title,
      url
    }
  })
</script>
