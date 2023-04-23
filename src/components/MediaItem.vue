<template>
  <div class="item">
    <div class="cover-container">
      <img
        class="cover"
        loading="lazy"
        width="120"
        style="min-height: 120px"
        :src="image"
        alt="封面"
      />
      <a
        v-if="playLink"
        :href="playLink"
        target="_blank"
        rel="noreferrer noopener"
        class="no-underline play-icon"
      >
        <icon-material-symbols-play-circle-outline-rounded />
      </a>
    </div>
    <div class="info-list">
      <p class="info-item" v-for="(info, i) of infoList" :key="info">
        <template v-if="!i">
          <a :href="link" target="_blank" rel="noreferrer noopener">{{ info }}</a>
          <!-- <a v-if="playLink" :href="playLink" style="margin-left: 1em;font-size: 14px" target="_blank"
            rel="noreferrer noopener">(播放)</a> -->
        </template>
        <span class="info-item-text" v-else>{{ info }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  infoList: string[]
  image: string
  song?: string
  link?: string
  playLink?: string
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
  /* margin-right: 20px; */
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

.cover-container {
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.play-icon {
  position: absolute;
  color: white;
  text-decoration: none;
  font-size: 0;
}

.play-icon svg {
  font-size: 48px;
}
</style>
