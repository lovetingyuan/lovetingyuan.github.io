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
          <ul class="mt-5">
            <li v-for="site of list" :key="site.url" class="mx-4 my-2.5 inline-block">
              <LinkItem :a="site" :size="24" />
            </li>
            <li class="mx-4 my-2.5 inline-block">
              <LinkItem
                :a="{
                  title: 'Add',
                  icon: 'material-symbols:add',
                  url: `https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/collection/${cate}.txt`
                }"
                :size="24"
              />
            </li>
          </ul>
        </div>
      </details>
      <details hidden open>
        <summary
          class="cursor-pointer rounded bg-slate-200 px-4 py-1 text-base tracking-wider transition-[background-color] hover:bg-slate-300 hover:font-bold dark:bg-slate-700 hover:dark:bg-slate-600"
        >
          <span class="ml-2">
            {{ cate.split('.')[1] }}
          </span>
          <a
            target="_blank"
            title="添加"
            class="float-right"
            :href="`https://github.com/lovetingyuan/lovetingyuan.github.io/edit/main/src/collection/${cate}.txt`"
          >
            <!-- <icon-material-symbols-add class="align-sub" /> -->
            <IconifyIcon icon="material-symbols:add" class="align-sub text-lg"></IconifyIcon>
          </a>
        </summary>
        <ul class="mt-5">
          <li v-for="site of list" :key="site.url" class="mx-4 my-2.5 inline-block">
            <LinkItem :a="site" :size="24" />
          </li>
        </ul>
      </details>
    </li>
  </ul>
</template>

<script setup lang="ts">
import collections from '../collection'
import LinkItem from './LinkItem.vue'
</script>
