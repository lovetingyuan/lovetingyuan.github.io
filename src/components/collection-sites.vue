<template>
  <ul class="list-none pl-2.5">
    <li v-for="(list, cate) in collections" :key="cate" class="mt-11">
      <details open>
        <summary
          class="cursor-pointer rounded bg-slate-200 px-4 py-1 text-base tracking-wider transition-[background-color] hover:bg-slate-300 hover:font-bold dark:bg-slate-700 hover:dark:bg-slate-600"
        >
          <span>
            {{ cate }}
          </span>
          <a
            target="_blank"
            title="添加"
            class="float-right"
            :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/collection/${cate}.txt`"
          >
            <!-- <icon-material-symbols-add class="align-sub" /> -->
            <iconify-icon icon="material-symbols:add" class="align-sub text-lg"></iconify-icon>
          </a>
        </summary>
        <ul class="mt-5">
          <li v-for="site of list" :key="site.url" class="mx-4 my-2.5 inline-block">
            <link-item :a="site" :size="24" />
          </li>
        </ul>
      </details>
    </li>
  </ul>
</template>

<script setup lang="ts">
import collections from '../collection'
import LinkItem from './link-item.vue'
</script>
