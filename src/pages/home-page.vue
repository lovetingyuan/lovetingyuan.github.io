<template>
  <section>
    <figure>
      <figcaption>
        常用站点
        <a
          target="_blank"
          title="添加"
          style="vertical-align: sub"
          href="https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/common-sites.txt"
        >
          <icon-material-symbols-add />
        </a>
      </figcaption>
      <ul class="common-sites">
        <li v-for="a of commonLinks2" :key="a.url" class="common-site-item">
          <link-item :a="a" :size="30" />
        </li>
      </ul>
    </figure>
    <figure>
      <figcaption>
        集锦
        <a
          target="_blank"
          title="添加"
          style="vertical-align: sub"
          href="https://github.com/lovetingyuan/lovetingyuan.github.io/new/main/src/collection"
        >
          <icon-material-symbols-add />
        </a>
      </figcaption>
      <CollectionSites />
    </figure>
  </section>
</template>

<script setup lang="ts">
import commonLinks from './common-sites.txt?raw'
import LinkItem from '@/components/LinkItem.vue'
import CollectionSites from '@/components/CollectionSites.vue'
const commonLinks2 = commonLinks
  .trim()
  .split('\n')
  .map((v) => {
    const [title, url] = v.split(': ').map((v) => v.trim())
    return {
      title,
      url,
    }
  })
</script>

<style scoped>
figure {
  margin: 20px;
  margin-bottom: 30px;
}

figcaption {
  margin-bottom: 10px;
  font-size: 17px;
}

.common-sites {
  padding: 0;
  margin-top: 10px;
  list-style: none;
}

.common-site-item {
  margin: 10px 15px;
  display: inline-block;
}

.common-site-link {
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
}
</style>
