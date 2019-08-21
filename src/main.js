import Vue from 'vue'
import App from './App.vue'
import './service-worker'

import createRouter from './router'
import createStore from './store'

Vue.config.productionTip = false

Vue.mixin({
  beforeMount () {
    const { asyncData } = this.$options
    if (asyncData) {
      this.asyncDataPromise = asyncData(this.$store, this.$route)
    }
  },
  mounted () {
    const routerLink = Vue.component('RouterLink')
    if (this.constructor === routerLink) {
      if (this.$el && this.$router && this.to) {
        const { path } = this.$router.resolve(this.to).resolved
        if (!this.$el.title) {
          this.$el.title = path
        }
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData(this.$store, to).then(next).catch(next)
    } else {
      next()
    }
  }
})

const createApp = () => {
  return new Vue({
    render: h => h(App),
    router: createRouter(),
    store: createStore()
  })
}

if (typeof window === 'object' && window.document) {
  const app = createApp()
  if (window.__INITIAL_STATE__) {
    app.$store.replaceState(window.__INITIAL_STATE__)
  }
  app.$router.onReady(() => {
    app.$mount('#app')
  })
}

export default context => {
  const app = createApp()
  const { store, router } = app.$options
  router.push(context.url)
  const { promise, reject, resolve } = new function () {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }()
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents()
    Promise.all(matchedComponents.filter(v => v.asyncData).map(Component => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Fetching data for ${Component.__file} ...`)
      }
      return Component.asyncData(store, router.currentRoute)
    })).then(() => {
      context.state = store.getState()
      resolve(app)
    }).catch(reject)
  }, reject)
  router.onError(reject)
  return promise
}
