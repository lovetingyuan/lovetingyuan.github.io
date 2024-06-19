<template>
  <section>
    <figure class="my-3">
      <ul class="list-none p-0">
        <li v-for="a of commonLinks2" :key="a.url" class="mx-6 my-4 inline-block text-center">
          <LinkItem :a="a" :size="28" />
        </li>
        <li class="mx-6 my-4 inline-block text-center">
          <a
            target="_blank"
            title="添加"
            class="align-text-top text-4xl"
            href="https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/pages/common-sites.txt"
          >
            <iconify-icon icon="material-symbols:add"></iconify-icon>
          </a>
        </li>
      </ul>
    </figure>
    <figure class="my-2">
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
