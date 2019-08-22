import Vue from 'vue'
import VueStore from '@tingyuan/vue-store'
import Home from '@/modules/home'

Vue.use(VueStore)

export default function createStore () {
  const store = VueStore.createStore(Home, {
    strict: process.env.NODE_ENV === 'development'
  })
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    Object.defineProperty(window, '_store', { value: store })
  }
  return store
}
