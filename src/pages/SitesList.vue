<template>
  <section>
    <figure class="mb-5 mt-2">
      <ul class="list-none p-0">
        <li v-for="a of commonLinks2" :key="a.url" class="mx-6 my-4 inline-block text-center">
          <LinkItem :a="a" :size="30" />
        </li>
        <li class="mx-6 my-4 inline-block text-center">
          <a
            target="_blank"
            title="添加"
            class="align-text-top text-3xl"
            href="https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/pages/common-sites.txt"
          >
            <IconifyIcon icon="material-symbols:add" class="inline"></IconifyIcon>
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
