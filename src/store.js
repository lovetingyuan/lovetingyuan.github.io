import Vue from 'vue'
import VueStore from '@tingyuan/vue-store'
import request from './api'

Vue.use(VueStore)

function init (val) {
  if (val && typeof val === 'object') {
    if (val.__init__) {
      return true
    }
    val.__init__ = true
  }
  return val
}

export default function createStore () {
  const store = VueStore.createStore({
    links: init([]),
    githubs: init([]),
    set ([key, val]) {
      this[key] = val
    },
    $showDialog (show, id = 'dialog') {
      const dialog = document.getElementById('dialog')
      show ? dialog.showModal() : dialog.close()
    },
    async $fetchLinks () {
      if (init(this.links)) {
        const { links, githubs } = await request.get('/data/home.json')
        this.set(['links', links])
        this.set(['githubs', githubs])
      }
    },
    Music: {
      bestSongs: init([]),
      set ([key, val]) {
        this[key] = val
      },
      async $fetchMusic () {
        if (init(this.bestSongs)) {
          const { best } = await request.get('/data/music.json')
          this.set(['bestSongs', best])
        }
      }
    }
  })
  if (process.env.NODE_ENV !== 'production') {
    console.log('store', store)
  }
  return store
}
