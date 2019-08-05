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
  const router = createRouter()
  const store = createStore()
  return new Vue({
    render: h => h(App),
    router,
    store
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
  app.$store.origin = context.origin
  app.$router.push(context.url)
  const { promise, reject, resolve } = new Deferred()
  app.$router.onReady(() => {
    const matchedComponents = app.$router.getMatchedComponents()
    Promise.all(matchedComponents.filter(v => v.asyncData).map(Component => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`fetching data for ${Component.__file} ...`)
      }
      return Component.asyncData(app.$store, app.$router)
    })).then(() => {
      context.state = app.$store.getState()
      resolve(app)
    }).catch(reject)
  }, reject)
  app.$router.onError(reject)
  return promise
}
