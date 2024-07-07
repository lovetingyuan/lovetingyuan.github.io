<template>
  <div class="grid grid-cols-2 gap-x-4 gap-y-10 max-sm:grid-cols-1">
    <div v-for="music of musics" :key="music.name" class="flex gap-4">
      <div class="relative shrink-0">
        <img
          class="inline-block rounded-md object-cover"
          loading="lazy"
          width="120"
          height="120"
          :src="music.image"
          alt="封面"
        />
        <span
          v-if="music.playLink"
          rel="noreferrer noopener"
          class="absolute left-1/2 top-[60px] -translate-x-1/2 -translate-y-1/2 cursor-pointer text-5xl text-white no-underline hover:text-gray-300"
          @click="store.playingMusic = music.playLink"
        >
          <IconifyIcon
            v-show="music.playLink !== store.playingMusic"
            icon="material-symbols:play-circle-outline-rounded"
          ></IconifyIcon>
          <iframe
            v-if="music.playLink === store.playingMusic"
            :src="store.playingMusic"
            class="h-[120px] w-[120px] border-0"
          ></iframe>
          <!-- <icon-material-symbols-play-circle-outline-rounded /> -->
        </span>
      </div>
      <div class="break-words py-2">
        <p>
          <a
            :href="music.baike"
            target="_blank"
            rel="noreferrer noopener"
            class="mb-4 inline-block text-lg"
            >{{ music.name }}</a
          >
        </p>
        <p v-for="info of music.infos" :key="info" class="leading-[2]">
          <span class="text-sm">{{ info }}</span>
        </p>
      </div>
    </div>
  </div>
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
    // cover: 'https://pic.xiami.net/images/album/img88/23488/1688691354849018.jpg',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000014fYuS0c26xs_1.jpg',
    album: 'Sing and Dance',
    year: 2002,
    baike: 'https://baike.baidu.com/item/breeze/18612901',
    song: 'https://mp3.haoge500.com/new/2008/05-24/117452.mp3',
    playLink: url + 'BV13s4y1a7v5'
    // 'https://player.bilibili.com/player.html?aid=949308637&bvid=BV13s4y1a7v5&cid=1005088800&page=1'
  },
  {
    name: '500 miles',
    singer: 'Hedy West',
    // cover: 'https://pic.xiami.net/images/album/img56/23256/4754217101375421710.jpg',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003NY5cG15yFa7_1.jpg',
    album: 'The Journeymen',
    year: '1961',
    baike: 'https://baike.baidu.com/item/500%20miles',
    playLink: url + 'BV1FA411s7df'
    // 'https://player.bilibili.com/player.html?aid=330624190&bvid=BV1FA411s7df&cid=262875402&page=1'
  },
  {
    name: "Arrietty's Song",
    singer: 'Cécile Corbel',
    // cover: 'https://pic.xiami.net/images/album/img87/60187/3872801389084989.jpg',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000xZF0P0g2Ide_1.jpg',
    album: '《借东西的小人阿莉埃蒂》片尾曲',
    year: 2010,
    baike: 'https://baike.baidu.com/item/arrietty%27s%20song/6510590',
    playLink: url + 'BV1S34y127fZ'
    // 'https://player.bilibili.com/player.html?aid=808682273&bvid=BV1S34y127fZ&cid=499250353&page=1'
  },
  {
    name: '白鸽',
    singer: '伍佰&China Blue',
    // cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000001tmqtx2UY1pD_1.jpg',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001tmqtx2UY1pD_3.jpg',
    album: '白鸽',
    year: 1999,
    baike: 'https://baike.baidu.com/item/%E7%99%BD%E9%B8%BD/3366',
    playLink: url + 'BV1iq4y1W7M3'
    // 'https://player.bilibili.com/player.html?aid=546753572&bvid=BV1iq4y1W7M3&cid=372949126&page=1'
  },
  {
    name: 'Let Her Go',
    singer: 'Passenger',
    album: 'All The Little Lights',
    // cover: 'https://pic.xiami.net/images/album/img81/27081/4966281390373517.jpg',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002Ihs301jQP7R_1.jpg',
    year: 2013,
    baike: 'https://baike.baidu.com/item/let%20her%20go',
    playLink: url + 'BV1HG4y1g7G8'
    // 'https://player.bilibili.com/player.html?aid=818843810&bvid=BV1HG4y1g7G8&cid=925286793&page=1'
  },
  {
    name: 'Safe And Sound',
    singer: 'Taylor Swift',
    album: '《饥饿游戏》片尾曲',
    // cover: 'https://pic.xiami.net/images/album/img8/105/582d60c28e4d8_5267808_1479368898.jpg',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000Vud1B17iKlX_2.jpg',
    year: 2011,
    baike: 'https://baike.baidu.com/item/Safe%20%26%20Sound/15439451',
    playLink: url + 'BV17W411t7yi'
    // 'https://www.bilibili.com/blackboard/newplayer.html?crossDomain=true&bvid=BV17W411t7yi&as_wide=1&page=1&autoplay=0&poster=1'
    // 'https://player.bilibili.com/player.html?aid=20167734&bvid=BV17W411t7yi&cid=32923619&page=1'
  },
  {
    name: '庭院',
    singer: '樱桃帮',
    album: '乖乖',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001G2cRu0aj1lK_2.jpg',
    year: 2007,
    baike: 'https://baike.baidu.com/item/%E5%BA%AD%E9%99%A2/18634073',
    playLink: url + 'BV1LD4y1o7vd'
    // 'https://www.bilibili.com/blackboard/webplayer/embed-old.html?aid=801335944&bvid=BV1Vy4y1p7hX&cid=285242906&page=9'
  },
  {
    name: 'No One But You',
    singer: 'Doug Paisley',
    album: 'Constant Companion',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000017IzR53A8UQO_2.jpg',
    year: 2010,
    baike: 'https://baike.baidu.com/item/No%20One%20But%20You/23545457',
    playLink: url + 'BV13U4y1J7aG'
    // 'https://player.bilibili.com/player.html?aid=674536765&bvid=BV13U4y1J7aG&cid=460629633&page=1'
  },
  {
    name: '无与伦比的美丽',
    singer: '苏打绿',
    album: '无与伦比的美丽',
    // cover: 'https://i.kfs.io/album/global/98914,2v1/fit/500x500.jpg',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002ht3QR0efHR3_3.jpg',
    year: 2007,
    baike:
      'https://baike.baidu.com/item/%E6%97%A0%E4%B8%8E%E4%BC%A6%E6%AF%94%E7%9A%84%E7%BE%8E%E4%B8%BD/16767707',
    playLink: url + 'BV1UJ411T728'
    // 'https://player.bilibili.com/player.html?aid=69169384&bvid=BV1UJ411T728&cid=119877561&page=1'
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
].map((item) => {
  return {
    image: item.cover,
    baike: item.baike,
    name: item.name,
    infos: [item.singer, `${item.album} - ${item.year}`],
    playLink: item.playLink
  }
})
</script>
