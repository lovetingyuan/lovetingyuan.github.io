<template>
  <section>
    <figure class="mt-2 mb-5">
      <ul class="mb-8 flex flex-wrap gap-4">
        <li v-for="a of commonLinks2" :key="a.url">
          <LinkItem :a="a" :size="28" />
        </li>

        <li>
          <a
            target="_blank"
            title="添加"
            class="btn btn-square btn-ghost btn-md align-text-top text-3xl"
            href="https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/pages/SitesList/common-sites.txt"
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
import LinkItem from '@/components/LinkItem.vue'

import CollectionSites from './CollectionSites.vue'
import commonLinks from './common-sites.txt?raw'
const commonLinks2 = commonLinks
  .trim()
  .split('\n')
  .map(v => {
    const [title, url] = v.split(': ').map(v => v.trim())
    return {
      title,
      url
    }
  })
</script>
