import { init, request } from './utils'

export default {
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
  }
}
