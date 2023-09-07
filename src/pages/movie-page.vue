<template>
  <div class="grid grid-cols-2 gap-x-4 gap-y-10 max-sm:grid-cols-1">
    <div class="flex gap-6 text-sm" v-for="movie of movies" :key="movie.name">
      <img
        class="inline-block shrink-0 rounded-md object-cover"
        loading="lazy"
        width="120"
        height="165"
        :src="movie.image"
        alt="封面"
      />
      <div class="flex flex-col gap-3 break-words py-2">
        <p>
          <a :href="movie.baike" target="_blank" rel="noreferrer noopener" class="text-lg">{{
            movie.name
          }}</a>
        </p>
        <p class="leading-[1.5]" v-for="info of movie.infos" :key="info">
          <span class="text-sm">{{ info }}</span>
        </p>
        <p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            :href="movie.douban"
            class="inline-block h-5 w-5 cursor-pointer select-none rounded-sm bg-green-700 text-center text-sm font-bold text-white no-underline hover:bg-green-600 hover:text-white"
            >豆
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const movies = [
  {
    // cover: 'https://img5.mtime.cn/mg/2019/06/20/161106.48021449_270X405X4.jpg',
    cover:
      'https://image11.m1905.cn/mdb/uploadfile/2019/0524/thumb_1_283_390_20190524013700133933.jpg',
    name: '千与千寻 / 千と千尋の神隠し',
    director: '宫崎骏',
    studio: '吉卜力',
    area: '日本',
    time: '2001-7-20',
    baike: 'https://baike.baidu.com/item/%E5%8D%83%E4%B8%8E%E5%8D%83%E5%AF%BB/389041',
    douban: 'https://movie.douban.com/subject/1291561/'
  },
  {
    // cover: 'https://img31.mtime.cn/mt/2014/02/22/230130.33587497_1280X720X2.jpg',
    cover:
      'https://image11.m1905.cn/mdb/uploadfile/2023/0523/thumb_1_283_390_20230523023846881911.jpeg',
    name: '天空之城 / 天空の城ラピュタ',
    director: '宫崎骏',
    studio: '吉卜力',
    area: '日本',
    time: '1986-8-2',
    baike: 'https://baike.baidu.com/item/%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E/6298',
    douban: 'https://movie.douban.com/subject/1291583/'
  },
  {
    cover: 'https://img5.mtime.cn/mt/2019/02/13/104653.23607322_283X406X2.jpg',
    name: '龙猫 / となりのトトロ',
    director: '宫崎骏',
    studio: '吉卜力',
    area: '日本',
    time: '1988-4-16',
    baike: 'https://baike.baidu.com/item/%E9%BE%99%E7%8C%AB/12015836',
    douban: 'https://movie.douban.com/subject/1291560/'
  },
  {
    // cover: 'https://img31.mtime.cn/mt/2014/02/22/224224.35649043_1280X720X2.jpg',
    cover: 'https://image11.m1905.cn/uploadfile/2012/0608/thumb_1_283_390_20120608044652700.jpg',
    name: '楚门的世界 / The Truman Show',
    actor: '金·凯瑞',
    studio: '派拉蒙',
    director: '彼得·威尔',
    time: '1998-06-05',
    area: '美国',
    baike: 'https://baike.baidu.com/item/%E6%A5%9A%E9%97%A8%E7%9A%84%E4%B8%96%E7%95%8C/2027215',
    douban: 'https://movie.douban.com/subject/1292064/'
  },
  {
    // cover: 'https://img5.mtime.cn/img2x/mt/2011/01/02/002740.33762853_1280X720X2.jpg',
    cover: 'https://image11.m1905.cn/uploadfile/2010/0809/thumb_1_283_390_20100809042031789.jpg',
    name: '怦然心动 / Flipped',
    studio: '华纳兄弟',
    director: '罗伯·莱纳',
    time: '2010-9-10',
    area: '美国',
    baike: 'https://baike.baidu.com/item/%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8/413',
    douban: 'https://movie.douban.com/subject/3319755/'
  },
  {
    // cover: 'https://img31.mtime.cn/mt/2013/11/20/172527.42989246_1280X720X2.jpg',
    cover: 'https://image11.m1905.cn/uploadfile/2008/0918/thumb_1_283_390_150403179.jpg',
    name: '机器人总动员 / WALL·E',
    studio: '迪士尼',
    director: '安德鲁·斯坦顿',
    area: '美国',
    time: '2008-6-27',
    baike:
      'https://baike.baidu.com/item/%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%80%BB%E5%8A%A8%E5%91%98/27212',
    douban: 'https://movie.douban.com/subject/2131459/'
  },
  {
    // cover: 'https://img31.mtime.cn/mt/2014/03/16/170353.61991681_1280X720X2.jpg',
    cover: 'https://image11.m1905.cn/uploadfile/2013/1031/thumb_1_283_390_20131031025551448.jpg',
    name: '飞屋环游记 / Up',
    studio: '迪士尼',
    director: '彼特·道格特, 鲍勃·彼德森',
    time: '2009-8-4',
    area: '美国',
    baike: 'https://baike.baidu.com/item/%E9%A3%9E%E5%B1%8B%E7%8E%AF%E6%B8%B8%E8%AE%B0/30591',
    douban: 'https://movie.douban.com/subject/2129039/'
  },
  {
    cover: 'https://img5.mtime.cn/mt/2016/12/30/113826.86886728_283X450X2.jpg',
    name: '卑鄙的我 / Despicable Me',
    studio: '环球影业',
    director: '皮埃尔·柯芬, 克里斯·雷纳德',
    time: '2010-7-9',
    area: '美国 | 法国',
    baike: 'https://baike.baidu.com/item/%E7%A5%9E%E5%81%B7%E5%A5%B6%E7%88%B8/6976115',
    douban: 'https://movie.douban.com/subject/3287562/'
  },
  {
    // cover: 'https://img5.mtime.cn/mt/2020/06/04/161609.43043291_1280X720X2.jpg',
    cover:
      'https://image11.m1905.cn/mdb/uploadfile/2016/1208/thumb_1_283_390_20161208044311673629.jpg',
    name: '肖申克的救赎 / The Shawshank Redemption',
    studio: '哥伦比亚影业',
    director: '弗兰克·德拉邦特',
    area: '美国',
    time: '1994-9-23',
    baike:
      'https://baike.baidu.com/item/%E8%82%96%E7%94%B3%E5%85%8B%E7%9A%84%E6%95%91%E8%B5%8E/312883',
    douban: 'https://movie.douban.com/subject/1292052/'
  },
  {
    // cover: 'https://img31.mtime.cn/mt/2014/02/23/040522.39376765_1280X720X2.jpg',
    cover: 'https://image11.m1905.cn/uploadfile/2012/0927/thumb_1_283_390_20120927013959300.jpg',
    name: '了不起的狐狸爸爸 / Fantastic Mr. Fox',
    studio: '二十世纪福克斯',
    director: '韦斯·安德森',
    area: '美国',
    time: '2009-11-13',
    baike:
      'https://baike.baidu.com/item/%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%E7%8B%90%E7%8B%B8%E7%88%B8%E7%88%B8/9915300',
    douban: 'https://movie.douban.com/subject/1759386/'
  }
].map((item) => {
  return {
    name: item.name,
    image: item.cover,
    baike: item.baike,
    douban: item.douban,
    infos: [
      `${item.director} ${item.studio ? `(${item.studio})` : ''}`,
      item.actor,
      `${item.area} ${item.time}`
    ].filter(Boolean)
  }
})
</script>
