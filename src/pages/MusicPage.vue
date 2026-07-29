<template>
  <section class="grid grid-cols-2 gap-x-6 gap-y-8 max-sm:grid-cols-1">
    <div
      v-for="music of musics"
      :key="music.name"
      class="media-card card card-side card-compact bg-base-100 h-32"
    >
      <figure class="relative min-h-max min-w-max overflow-hidden">
        <img
          :src="music.image"
          :alt="`${music.name} 封面`"
          class="media-cover h-full w-32"
          loading="lazy"
        />
        <button
          v-show="music.playLink !== store.playingMusic"
          type="button"
          class="play-button absolute inset-0 m-auto"
          :aria-label="`播放 ${music.name}`"
          @click="store.playingMusic = music.playLink"
        >
          <IconifyIcon icon="material-symbols:play-circle-outline-rounded" />
        </button>
        <iframe
          v-if="music.playLink === store.playingMusic"
          :src="store.playingMusic"
          :title="`${music.name} 播放器`"
          class="absolute inset-0 m-auto h-full w-full border-0"
        />
      </figure>
      <div class="card-body justify-between px-4 py-3">
        <h2 class="card-title mb-2 font-normal">
          <a
            :href="music.baike"
            target="_blank"
            rel="noreferrer noopener"
            class="link-hover link inline-block text-lg text-teal-700 dark:text-teal-300"
          >
            {{ music.name }}
          </a>
        </h2>
        <div class="flex flex-col gap-y-1">
          <p v-for="info of music.infos" :key="info" class="text-sm">
            {{ info }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'

import { store } from '@/store'

const url = 'https://www.bilibili.com/blackboard/html5mobileplayer.html?&bvid='

onUnmounted(() => {
  store.playingMusic = ''
})

const musics = [
  {
    name: 'Breeze',
    singer: 'Sophie Zelmani',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000014fYuS0c26xs_1.jpg',
    album: 'Sing and Dance',
    year: 2002,
    baike: 'https://baike.baidu.com/item/breeze/18612901',
    playLink: url + 'BV13s4y1a7v5'
  },
  {
    name: '500 miles',
    singer: 'Hedy West',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003NY5cG15yFa7_1.jpg',
    album: 'The Journeymen',
    year: '1961',
    baike: 'https://baike.baidu.com/item/500%20miles',
    playLink: url + 'BV1FA411s7df'
  },
  {
    name: "Arrietty's Song",
    singer: 'Cécile Corbel',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000xZF0P0g2Ide_1.jpg',
    album: '《借东西的小人阿莉埃蒂》片尾曲',
    year: 2010,
    baike: 'https://baike.baidu.com/item/arrietty%27s%20song/6510590',
    playLink: url + 'BV1S34y127fZ'
  },
  {
    name: '白鸽',
    singer: '伍佰&China Blue',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001tmqtx2UY1pD_3.jpg',
    album: '白鸽',
    year: 1999,
    baike: 'https://baike.baidu.com/item/%E7%99%BD%E9%B8%BD/3366',
    playLink: url + 'BV1iq4y1W7M3'
  },
  {
    name: 'Let Her Go',
    singer: 'Passenger',
    album: 'All The Little Lights',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002Ihs301jQP7R_1.jpg',
    year: 2013,
    baike: 'https://baike.baidu.com/item/let%20her%20go',
    playLink: url + 'BV1HG4y1g7G8'
  },
  {
    name: 'Safe And Sound',
    singer: 'Taylor Swift',
    album: '《饥饿游戏》片尾曲',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000Vud1B17iKlX_2.jpg',
    year: 2011,
    baike: 'https://baike.baidu.com/item/Safe%20%26%20Sound/15439451',
    playLink: url + 'BV17W411t7yi'
  },
  {
    name: '庭院',
    singer: '樱桃帮',
    album: '乖乖',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001G2cRu0aj1lK_2.jpg',
    year: 2007,
    baike: 'https://baike.baidu.com/item/%E5%BA%AD%E9%99%A2/18634073',
    playLink: url + 'BV1LD4y1o7vd'
  },
  {
    name: 'No One But You',
    singer: 'Doug Paisley',
    album: 'Constant Companion',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000017IzR53A8UQO_2.jpg',
    year: 2010,
    baike: 'https://baike.baidu.com/item/No%20One%20But%20You/23545457',
    playLink: url + 'BV13U4y1J7aG'
  },
  {
    name: '无与伦比的美丽',
    singer: '苏打绿',
    album: '无与伦比的美丽',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002ht3QR0efHR3_3.jpg',
    year: 2007,
    baike:
      'https://baike.baidu.com/item/%E6%97%A0%E4%B8%8E%E4%BC%A6%E6%AF%94%E7%9A%84%E7%BE%8E%E4%B8%BD/16767707',
    playLink: url + 'BV1UJ411T728'
  },
  {
    name: '爸爸妈妈',
    singer: '王蓉',
    album: '多爱',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002MaTCR2gou69_1.jpg',
    year: 2005,
    baike: 'https://baike.baidu.com/item/%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88/3560533',
    playLink: url + 'BV1N44y1n7f8'
  }
].map(item => ({
  image: item.cover,
  baike: item.baike,
  name: item.name,
  infos: [item.singer, `${item.album} - ${item.year}`],
  playLink: item.playLink
}))
</script>
