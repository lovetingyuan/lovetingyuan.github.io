<template>
<music-item
  v-for="music of musics"
  :image="music.image"
  :info-list="music.infos"
  style="margin-top: 30px;"
>

</music-item>
</template>

<script setup lang="ts">
import MusicItem from '../components/Item.vue'
const musics = [
  {
    name: 'Breeze',
    singer: 'Sophie Zelmani',
    cover: 'https://pic.xiami.net/images/album/img88/23488/1688691354849018.jpg',
    album: 'Sing and Dance',
    year: 2002
  },
  {
    name: '500 miles',
    singer: 'Hedy West',
    cover: 'https://pic.xiami.net/images/album/img56/23256/4754217101375421710.jpg',
    album: 'The Journeymen',
    year: '1961'
  },
  {
    name: 'Arrietty\'s Song',
    singer: 'Cécile Corbel',
    cover: 'https://pic.xiami.net/images/album/img87/60187/3872801389084989.jpg',
    album: '《借东西的小人阿莉埃蒂》片尾曲',
    year: 2010
  },
  {
    name: '白鸽',
    singer: '伍佰&China Blue',
    cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000001tmqtx2UY1pD_1.jpg',
    album: '白鸽',
    year: 1999
  },
  {
    name: 'Let Her Go',
    singer: 'Passenger',
    album: 'All The Little Lights',
    cover: 'https://pic.xiami.net/images/album/img81/27081/4966281390373517.jpg',
    year: 2013
  },
  {
    name: 'Safe And Sound',
    singer: 'Taylor Swift',
    album: '《饥饿游戏》片尾曲',
    cover: 'https://pic.xiami.net/images/album/img8/105/582d60c28e4d8_5267808_1479368898.jpg',
    year: 2011
  },
  {
    name: '庭院',
    singer: '樱桃帮',
    album: '乖乖',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001G2cRu0aj1lK_2.jpg',
    year: 2007
  }
].map(item => {
  return {
    image: item.cover,
    infos: [
      item.name,
      item.singer,
      `《${item.album}》${item.year}`
    ]
  }
})
</script>

<style scoped>
.music-item {
  overflow: hidden;
  margin: 30px 0;
  font-size: 14px;
}
.cover {
  width: 90px;
  height: 90px;
  object-fit: contain;
  float: left;
  margin-right: 20px;
}
.description {
  display: flex;
  flex-direction: column;
  margin: 8px 0;
}
.description-item {
  line-height: 1.8;
  margin: 0;
}
</style>
