<template>
  <div class="container">
    <music-item
      v-for="music of musics"
      :key="music.link"
      :image="music.image"
      :link="music.link"
      :info-list="music.infos"
      :play-link="music.playLink"
    />
  </div>
</template>

<script setup lang="ts">
import MusicItem from '../components/MediaItem.vue'

const musics = [
  {
    name: 'Breeze',
    singer: 'Sophie Zelmani',
    cover: 'https://pic.xiami.net/images/album/img88/23488/1688691354849018.jpg',
    album: 'Sing and Dance',
    year: 2002,
    link: 'https://baike.baidu.com/item/breeze/18612901',
    song: 'https://mp3.haoge500.com/new/2008/05-24/117452.mp3',
    playLink: 'https://player.bilibili.com/player.html?aid=949308637&bvid=BV13s4y1a7v5&cid=1005088800&page=1',
  },
  {
    name: '500 miles',
    singer: 'Hedy West',
    cover: 'https://pic.xiami.net/images/album/img56/23256/4754217101375421710.jpg',
    album: 'The Journeymen',
    year: '1961',
    link: 'https://baike.baidu.com/item/500%20miles',
    playLink: 'https://player.bilibili.com/player.html?aid=330624190&bvid=BV1FA411s7df&cid=262875402&page=1',
  },
  {
    name: "Arrietty's Song",
    singer: 'Cécile Corbel',
    cover: 'https://pic.xiami.net/images/album/img87/60187/3872801389084989.jpg',
    album: '《借东西的小人阿莉埃蒂》片尾曲',
    year: 2010,
    link: 'https://baike.baidu.com/item/arrietty%27s%20song/6510590',
    playLink: 'https://player.bilibili.com/player.html?aid=808682273&bvid=BV1S34y127fZ&cid=499250353&page=1',
  },
  {
    name: '白鸽',
    singer: '伍佰&China Blue',
    cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000001tmqtx2UY1pD_1.jpg',
    album: '白鸽',
    year: 1999,
    link: 'https://baike.baidu.com/item/%E7%99%BD%E9%B8%BD/3366',
    playLink: 'https://player.bilibili.com/player.html?aid=546753572&bvid=BV1iq4y1W7M3&cid=372949126&page=1',
  },
  {
    name: 'Let Her Go',
    singer: 'Passenger',
    album: 'All The Little Lights',
    cover: 'https://pic.xiami.net/images/album/img81/27081/4966281390373517.jpg',
    year: 2013,
    link: 'https://baike.baidu.com/item/let%20her%20go',
    playLink: 'https://player.bilibili.com/player.html?aid=818843810&bvid=BV1HG4y1g7G8&cid=925286793&page=1',
  },
  {
    name: 'Safe And Sound',
    singer: 'Taylor Swift',
    album: '《饥饿游戏》片尾曲',
    cover: 'https://pic.xiami.net/images/album/img8/105/582d60c28e4d8_5267808_1479368898.jpg',
    year: 2011,
    link: 'https://baike.baidu.com/item/Safe%20%26%20Sound/15439451',
    playLink: 'https://player.bilibili.com/player.html?aid=20167734&bvid=BV17W411t7yi&cid=32923619&page=1',
  },
  {
    name: '庭院',
    singer: '樱桃帮',
    album: '乖乖',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001G2cRu0aj1lK_2.jpg',
    year: 2007,
    link: 'https://baike.baidu.com/item/%E5%BA%AD%E9%99%A2/18634073',
    playLink:
      'https://www.bilibili.com/blackboard/webplayer/embed-old.html?aid=801335944&bvid=BV1Vy4y1p7hX&cid=285242906&page=9',
  },
  {
    name: 'No One But You',
    singer: 'Doug Paisley',
    album: 'Constant Companion',
    cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000017IzR53A8UQO_2.jpg',
    year: 2010,
    link: 'https://baike.baidu.com/item/No%20One%20But%20You/23545457',
    playLink: 'https://player.bilibili.com/player.html?aid=674536765&bvid=BV13U4y1J7aG&cid=460629633&page=1',
  },
].map((item) => {
  return {
    image: item.cover,
    link: item.link,
    infos: [item.name, item.singer, `${item.album} - ${item.year}`],
    playLink: item.playLink,
  }
})
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(300px, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 10px;
}

@media screen and (max-width: 640px) {
  .container {
    grid-template-columns: 100%;
  }
}
</style>
