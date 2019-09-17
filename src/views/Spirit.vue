<template>
  <div>
    <h2>
      随着海风吹，吹向来时庭院...
    </h2>
    <ul class="story-list">
      <li v-for="(story, name) in stories" :key="name">
        <details>
          <summary class="title">{{name}}</summary>
          <article class="content" v-html="story"></article>
        </details>
      </li>
    </ul>
  </div>
</template>

<script>
const stories = {}

function importAll (r) {
  r.keys().forEach(key => {
    const name = key.slice(2, -3)
    stories[name] = r(key)
  })
}

importAll(require.context('@/../public/data/story/', false, /\.md$/))

export default {
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes open {
  0% {opacity: 0; margin-top: -20px}
  100% {opacity: 1; margin-top: 0px}
}

.story-list {
  margin-top: 20px;
  details[open] summary ~ * {
    animation: open .5s ease-in-out;
  }
  details {
    margin: 20px 0;
    line-height: 2;
    .title {
      font-weight: 500;
      font-size: 1.2em;
    }
    .content {
      text-indent: 2em;
    }
  }
}
</style>
