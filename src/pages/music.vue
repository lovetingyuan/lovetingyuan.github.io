<template>
<div>
  <music-item
  v-for="music of musics"
  :image="music.image"
  :link="music.link"
  :info-list="music.infos"
  style="margin-top: 40px;"
  />
</div>
</template>

<script setup lang="ts">
import MusicItem from '../components/Item.vue'
const musics = [
  {
    name: 'Breeze',
    singer: 'Sophie Zelmani',
    cover: 'https://pic.xiami.net/images/album/img88/23488/1688691354849018.jpg',
    album: 'Sing and Dance',
    year: 2002,
    link: 'https://baike.baidu.com/item/breeze/18612901'
  },
  {
    name: '500 miles',
    singer: 'Hedy West',
    cover: 'https://pic.xiami.net/images/album/img56/23256/4754217101375421710.jpg',
    album: 'The Journeymen',
    year: '1961',
    link: 'https://baike.baidu.com/item/500%20miles'
  },
  {
    name: 'Arrietty\'s Song',
    singer: 'Cécile Corbel',
    cover: 'https://pic.xiami.net/images/album/img87/60187/3872801389084989.jpg',
    album: '《借东西的小人阿莉埃蒂》片尾曲',
    year: 2010,
    link: 'https://baike.baidu.com/item/arrietty%27s%20song/6510590'
  },
  {
    name: '白鸽',
    singer: '伍佰&China Blue',
    cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000001tmqtx2UY1pD_1.jpg',
    album: '白鸽',
    year: 1999,
    link: 'https://baike.baidu.com/item/%E7%99%BD%E9%B8%BD/3366'
  },
  {
    name: 'Let Her Go',
    singer: 'Passenger',
    album: 'All The Little Lights',
    cover: 'https://pic.xiami.net/images/album/img81/27081/4966281390373517.jpg',
    year: 2013,
    link: 'https://baike.baidu.com/item/let%20her%20go'
  },
  {
    name: 'Safe And Sound',
    singer: 'Taylor Swift',
    album: '《饥饿游戏》片尾曲',
    cover: 'https://pic.xiami.net/images/album/img8/105/582d60c28e4d8_5267808_1479368898.jpg',
    year: 2011,
    link: 'https://baike.baidu.com/item/Safe%20%26%20Sound/15439451'
  },
  {
    name: '庭院',
    singer: '樱桃帮',
    album: '乖乖',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001G2cRu0aj1lK_2.jpg',
    year: 2007,
    link: 'https://baike.baidu.com/item/%E5%BA%AD%E9%99%A2/18634073'
  }
].map(item => {
  return {
    image: item.cover,
    link: item.link,
    infos: [
      item.name,
      item.singer,
      `${item.album} - ${item.year}`
    ]
  }
})
</script>
