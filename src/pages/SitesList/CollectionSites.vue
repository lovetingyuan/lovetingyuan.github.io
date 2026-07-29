<template>
  <ul class="collection-list list-none">
    <li v-for="(list, cate, index) in collections" :key="cate" :class="index ? 'mt-6' : ''">
      <details class="collection-panel collapse-arrow collapse" open>
        <summary class="collapse-title collection-title">
          {{ cate.split('.')[1] }}
        </summary>
        <div class="collapse-content">
          <ul class="collection-links mt-2 flex flex-wrap gap-3">
            <li v-for="site of list" :key="site.url">
              <LinkItem :a="site" :size="24" />
            </li>
            <li>
              <LinkItem
                :a="{
                  title: '',
                  icon: 'material-symbols:add',
                  url: `https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/collection/${cate}.txt`
                }"
                :size="24"
              />
            </li>
          </ul>
        </div>
      </details>
    </li>
  </ul>
</template>

<script setup lang="ts">
import collections from '@/collection'
import LinkItem from '@/components/LinkItem.vue'
</script>
