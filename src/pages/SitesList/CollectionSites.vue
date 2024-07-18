<template>
  <ul class="list-none pl-2.5">
    <li v-for="(list, cate, i) in collections" :key="cate" :class="!i ? '' : 'mt-10'">
      <details class="collapse collapse-arrow bg-neutral-100 dark:bg-neutral-800" open>
        <summary
          class="collapse-title pl-6 text-lg font-medium hover:font-bold hover:tracking-widest"
        >
          {{ cate.split('.')[1] }}
        </summary>
        <div class="collapse-content">
          <ul class="mt-5 flex flex-wrap gap-4">
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
