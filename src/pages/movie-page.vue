<template>
  <div>
    <movie-item
      v-for="movie of movies"
      :key="movie.link"
      :image="movie.image"
      :link="movie.link"
      :info-list="movie.infos"
      style="margin-top: 45px"
    />
  </div>
</template>

<script lang="ts" setup>
import MovieItem from '../components/MediaItem.vue'

const movies = [
  {
    cover: 'https://img5.mtime.cn/mg/2019/06/20/161106.48021449_270X405X4.jpg',
    name: '千与千寻 / 千と千尋の神隠し',
    director: '宫崎骏',
    studio: '吉卜力',
    area: '日本',
    time: '2001-7-20',
    link: 'https://baike.baidu.com/item/%E5%8D%83%E4%B8%8E%E5%8D%83%E5%AF%BB/389041'
  },
  {
    cover: 'https://img31.mtime.cn/mt/2014/02/22/230130.33587497_1280X720X2.jpg',
    name: '天空之城 / 天空の城ラピュタ',
    director: '宫崎骏',
    studio: '吉卜力',
    area: '日本',
    time: '1986-8-2',
    link: 'https://baike.baidu.com/item/%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E/6298'
  },
  {
    cover: 'https://img5.mtime.cn/mt/2019/02/13/104653.23607322_1280X720X2.jpg',
    name: '龙猫 / となりのトトロ',
    director: '宫崎骏',
    studio: '吉卜力',
    area: '日本',
    time: '1988-4-16',
    link: 'https://baike.baidu.com/item/%E9%BE%99%E7%8C%AB/12015836'
  },
  {
    cover: 'https://img31.mtime.cn/mt/2014/02/22/224224.35649043_1280X720X2.jpg',
    name: '楚门的世界 / The Truman Show',
    actor: '金·凯瑞',
    studio: '派拉蒙',
    director: '彼得·威尔',
    time: '1998-06-05',
    area: '美国',
    link: 'https://baike.baidu.com/item/%E6%A5%9A%E9%97%A8%E7%9A%84%E4%B8%96%E7%95%8C/2027215'
  },
  {
    cover: 'https://img5.mtime.cn/img2x/mt/2011/01/02/002740.33762853_1280X720X2.jpg',
    name: '怦然心动 / Flipped',
    studio: '华纳兄弟',
    director: '罗伯·莱纳',
    time: '2010-9-10',
    area: '美国',
    link: 'https://baike.baidu.com/item/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8/413'
  },
  {
    cover: 'https://img31.mtime.cn/mt/2013/11/20/172527.42989246_1280X720X2.jpg',
    name: '机器人总动员 / WALL·E',
    studio: '迪士尼',
    director: '安德鲁·斯坦顿',
    area: '美国',
    time: '2008-6-27',
    link: 'https://baike.baidu.com/item/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%80%BB%E5%8A%A8%E5%91%98/27212'
  },
  {
    cover: 'https://img31.mtime.cn/mt/2014/03/16/170353.61991681_1280X720X2.jpg',
    name: '飞屋环游记 / Up',
    studio: '迪士尼',
    director: '彼特·道格特, 鲍勃·彼德森',
    time: '2009-8-4',
    area: '美国',
    link: 'https://baike.baidu.com/item/%E9%A3%9E%E5%B1%8B%E7%8E%AF%E6%B8%B8%E8%AE%B0/30591'
  },
  {
    cover: 'https://img5.mtime.cn/mt/2016/12/30/113826.86886728_1280X720X2.jpg',
    name: '卑鄙的我 / Despicable Me',
    studio: '环球影业',
    director: '皮埃尔·柯芬, 克里斯·雷纳德',
    time: '2010-7-9',
    area: '美国 | 法国',
    link: 'https://baike.baidu.com/item/%E7%A5%9E%E5%81%B7%E5%A5%B6%E7%88%B8/6976115'
  },
  {
    cover: 'https://img5.mtime.cn/mt/2020/06/04/161609.43043291_1280X720X2.jpg',
    name: '肖申克的救赎 / The Shawshank Redemption',
    studio: '哥伦比亚影业',
    director: '弗兰克·德拉邦特',
    area: '美国',
    time: '1994-9-23',
    link: 'https://baike.baidu.com/item/%E8%82%96%E7%94%B3%E5%85%8B%E7%9A%84%E6%95%91%E8%B5%8E/312883'
  },
  {
    cover: 'https://img31.mtime.cn/mt/2014/02/23/040522.39376765_1280X720X2.jpg',
    name: '了不起的狐狸爸爸 / Fantastic Mr. Fox',
    studio: '二十世纪福克斯',
    director: '韦斯·安德森',
    area: '美国',
    time: '2009-11-13',
    link: 'https://baike.baidu.com/item/%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%E7%8B%90%E7%8B%B8%E7%88%B8%E7%88%B8/9915300'
  }
].map((item) => {
  return {
    image: item.cover,
    link: item.link,
    infos: [
      item.name,
      `${item.director} ${item.studio ? `(${item.studio})` : ''}`,
      item.actor,
      `${item.area} ${item.time}`
    ].filter(Boolean) as string[]
  }
})
</script>
