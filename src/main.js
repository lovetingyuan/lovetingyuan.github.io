import App from './App.vue'
import Vue from 'vue'
import createRouter from './router'
import createStore from './store'
import 'regenerator-runtime/runtime'


Vue.mixin({
  beforeMount () {
    const { asyncData } = this.$options
    if (asyncData) {
      this.asyncDataPromise = asyncData(this.$store, this.$route)
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

class Deferred {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
}

export default context => {
  const app = createApp()
  const { store, router } = app.$options
  store.origin = context.origin
  router.push(context.url)
  const { promise, reject, resolve } = new Deferred()
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents()
    Promise.all(matchedComponents.filter(v => v.asyncData).map(Component => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Fetching data for ${Component.__file} ...`)
      }
      return Component.asyncData(store, router)
    })).then(() => {
      context.state = store.getState()
      resolve(app)
    }).catch(reject)
  }, reject)
  router.onError(reject)
  return promise
}
