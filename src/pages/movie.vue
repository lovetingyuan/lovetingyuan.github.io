<template>
<movie-item
  v-for="movie of movies"
  :image="movie.image"
  :info-list="movie.infos"
  style="margin-top: 30px;"
/>
</template>

<script lang='ts' setup>
import MovieItem from '../components/Item.vue'

const movies = [
  {
    cover: 'https://img5.mtime.cn/mg/2019/06/20/161106.48021449_270X405X4.jpg',
    name: '千与千寻 / 千と千尋の神隠し',
    director: '宫崎骏',
    studio: '吉卜力',
    area: '日本',
    time: '2001-7-20'
  },
  {
    cover: 'https://img31.mtime.cn/mt/2014/02/22/230130.33587497_1280X720X2.jpg',
    name: '天空之城 / 天空の城ラピュタ',
    director: '宫崎骏',
    studio: '吉卜力',
    area: '日本',
    time: '1986-8-2'
  },
  {
    cover: 'https://img5.mtime.cn/mt/2019/02/13/104653.23607322_1280X720X2.jpg',
    name: '龙猫 / となりのトトロ',
    director: '宫崎骏',
    studio: '吉卜力',
    area: '日本',
    time: '1988-4-16'
  },
  {
    cover: 'https://img31.mtime.cn/mt/2014/02/22/224224.35649043_1280X720X2.jpg',
    name: '楚门的世界 / The Truman Show',
    actor: '金·凯瑞',
    studio: '派拉蒙',
    director: '彼得·威尔',
    time: '1998-06-05',
    area: '美国'
  },
  {
    cover: 'https://img5.mtime.cn/img2x/mt/2011/01/02/002740.33762853_1280X720X2.jpg',
    name: '怦然心动 / Flipped',
    studio: '华纳兄弟',
    director: '罗伯·莱纳',
    time: '2010-9-10',
    area: '美国'
  },
  {
    cover: 'https://img31.mtime.cn/mt/2013/11/20/172527.42989246_1280X720X2.jpg',
    name: '机器人总动员 / WALL·E',
    studio: '迪士尼',
    director: '安德鲁·斯坦顿',
    area: '美国',
    time: '2008-6-27'
  },
  {
    cover: 'https://img31.mtime.cn/mt/2014/03/16/170353.61991681_1280X720X2.jpg',
    name: '飞屋环游记 / Up',
    studio: '迪士尼',
    director: '彼特·道格特, 鲍勃·彼德森',
    time: '2009-8-4',
    area: '美国'
  },
  {
    cover: 'https://img5.mtime.cn/mt/2016/12/30/113826.86886728_1280X720X2.jpg',
    name: '卑鄙的我 / Despicable Me',
    studio: '环球影业',
    director: '皮埃尔·柯芬, 克里斯·雷纳德',
    time: '2010-7-9',
    area: '美国 | 法国'
  },
  {
    cover: 'https://img5.mtime.cn/mt/2020/06/04/161609.43043291_1280X720X2.jpg',
    name: '肖申克的救赎 / The Shawshank Redemption',
    studio: '哥伦比亚影业',
    director: '弗兰克·德拉邦特',
    area: '美国',
    time: '1994-9-23'
  },
  {
    cover: 'https://img31.mtime.cn/mt/2014/02/23/040522.39376765_1280X720X2.jpg',
    name: '了不起的狐狸爸爸 / Fantastic Mr. Fox',
    studio: '二十世纪福克斯',
    director: '韦斯·安德森',
    area: '美国',
    time: '2009-11-13'
  }
].map(item => {
  return {
    image: item.cover,
    infos: [
      item.name,
      `${item.director} ${item.studio ? `(${item.studio})` : ''}`,
      item.actor,
      `${item.area} ${item.time}`
    ].filter(Boolean)
  }
})
</script>
