<template>
  <div class="flex text-sm">
    <div class="mr-5 flex items-center justify-center">
      <img
        class="inline-block rounded-md object-cover"
        loading="lazy"
        width="120"
        height="120"
        :src="image"
        alt="封面"
      />
      <a
        v-if="playLink"
        :href="playLink"
        target="_blank"
        rel="noreferrer noopener"
        class="absolute text-5xl text-white no-underline hover:text-gray-300"
      >
        <icon-material-symbols-play-circle-outline-rounded />
      </a>
    </div>
    <div class="flex flex-col gap-3 break-words py-2">
      <p class="leading-[1.5]" v-for="(info, i) of infoList" :key="info">
        <template v-if="!i">
          <a :href="link" target="_blank" rel="noreferrer noopener" class="text-lg">{{ info }}</a>
          <!-- <a v-if="playLink" :href="playLink" style="margin-left: 1em;font-size: 14px" target="_blank"
            rel="noreferrer noopener">(播放)</a> -->
        </template>
        <span class="text-sm" v-else>{{ info }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  infoList: string[]
  image: string
  song?: string
  link?: string
  playLink?: string
}>()
</script>
