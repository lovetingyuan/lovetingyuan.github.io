<template>
  <section class="sites-page">
    <figure class="mt-2 mb-5">
      <ul class="quick-links mb-8 flex flex-wrap gap-3">
        <li v-for="a of commonLinks2" :key="a.url">
          <LinkItem :a="a" :size="28" />
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="添加"
            aria-label="添加常用网站"
            class="btn btn-square btn-ghost add-link"
            href="https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/pages/SitesList/common-sites.txt"
          >
            <IconifyIcon icon="material-symbols:add" />
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
    const [title = '', url = ''] = v.split(': ').map(value => value.trim())
    return { title, url }
  })
</script>
