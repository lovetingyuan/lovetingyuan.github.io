import { init, request } from './utils'

export default {
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
