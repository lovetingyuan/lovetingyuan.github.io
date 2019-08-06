// eslint-disable-next-line
let _fetch
if (process.env.SERVER_SSR) {
  _fetch = require('node-fetch')
} else {
  _fetch = fetch
}

const request = {
  get (url) {
    const baseUrl = typeof location === 'object' ? location.origin : 'http://localhost:8081'
    return _fetch(baseUrl + url).then(res => res.json())
  }
}

export default request
