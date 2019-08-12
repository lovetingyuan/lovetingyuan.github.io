<template>
  <div>
    <h2>一些有用的链接</h2>
    <ul class="links">
      <li v-for="link in homeLinks" :key="link.url">
        <a :href="link.url" target="_blank">{{link.name}}</a>
      </li>
    </ul>
    <h2>Github好的项目</h2>
    <ul class="github-cats">
      <li v-for="(item, name) in githubLinks" :key="name" class="github-cat">
        <details>
          <summary>{{name}}</summary>
          <ul class="github-links">
            <li v-for="link in item" :key="link.name" class="github-link">
              <a :href="link.url || link.git" rel="noopener" target="_blank">{{link.name}}</a>&nbsp;&nbsp;
              <a :href="link.git" rel="noopener" target="_blank" class="github-logo" title="github"></a>
              <p>{{link.description}}</p>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData (store) {
    return store.$fetchLinks('/data/home.json')
  },
  computed: {
    homeLinks () {
      return this.$store.links
    },
    githubLinks () {
      return this.$store.githubs
    }
  }
}
</script>

<style lang="less" scoped>
.links {
  li {
    margin: 20px;
  }
  li a {
    text-transform: capitalize;
    text-decoration: none;
  }
}
.github-cats {
  .github-cat {
    margin: 20px 0;
  }
  .github-links {
    margin-top: 20px;
    .github-link {
      // float: left;
    }
    .github-logo {
      display: inline-block;
      width: 18px;
      height: 18px;
      vertical-align: middle;
      background-image: url(~@/assets/github-mark.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>
