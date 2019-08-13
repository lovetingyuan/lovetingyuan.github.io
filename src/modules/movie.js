import { init, request } from './utils'

export default {
  ghibli: init([]),
  set ([key, val]) {
    this[key] = val
  },
  async $fetchMovies () {
    if (init(this.ghibli)) {
      const { ghibli } = await request.get('/data/movie.json')
      this.set(['ghibli', ghibli])
    }
  }
}
