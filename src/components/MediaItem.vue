<template>
  <div class="item">
    <img class="cover" loading="lazy" width="120" style="min-height: 120px" :src="image" alt="封面" />
    <div class="info-list">
      <p class="info-item" v-for="(info, i) of infoList" :key="info">
        <a :href="link" target="_blank" rel="noreferrer noopener" v-if="!i">{{ info }}</a>
        <span class="info-item-text" v-else>{{ info }}</span>
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
}>()
</script>

<style scoped>
.item {
  overflow: hidden;
  font-size: 14px;
  display: flex;
}

.cover {
  object-fit: cover;
  /* float: left; */
  margin-right: 20px;
  border-radius: 3px;
  display: inline-block;
}

.info-list {
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  word-wrap: break-word;
  gap: 12px;
  /* justify-content: space-between; */
}

.info-item:first-of-type {
  /* font-size: 16px;
  margin-bottom: 20px; */
  font-size: 16px;
  margin-bottom: 10px;
}

.info-item {
  line-height: 1.5;
  margin: 0;
}
</style>
