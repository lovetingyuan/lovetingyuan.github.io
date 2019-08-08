// eslint-disable-next-line
let _fetch
if (process.env.SERVER_SSR) {
  _fetch = require('node-fetch')
} else {
  _fetch = fetch
}

const data = {}

if (process.env.NODE_ENV === 'development') {
  const context = require.context('./data', true, /\.json$/)
  context.keys().forEach(path => {
    data[path] = context(path)
  })
}

const request = {
  get (url) {
    if (process.env.NODE_ENV === 'development') {
      if (url.startsWith('/data')) {
        return Promise.resolve(data['.' + url.substr('/data'.length)])
      }
    } else {
      const baseUrl = typeof location === 'object' ? location.origin : 'http://localhost:8081'
      return _fetch(baseUrl + url).then(res => res.json())
    }
  }
}

export default request
