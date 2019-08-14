export function init (val) {
  if (val && typeof val === 'object') {
    if (val.__init__) {
      return true
    }
    val.__init__ = true
  }
  return val
}

// eslint-disable-next-line
let _fetch
if (process.env.SERVER_SSR) {
  _fetch = require('node-fetch')
} else {
  _fetch = fetch
}

const data = {}

if (process.env.NODE_ENV === 'development') {
  const context = require.context('@/../public/data', true, /\.json$/)
  context.keys().forEach(path => {
    data[path] = context(path)
  })
}

export const request = {
  get (url) {
    if (!url.startsWith('/data')) {
      throw new Error('request not startsWith /data is not supported.')
    }
    if (process.env.NODE_ENV === 'development') {
      return Promise.resolve(data['.' + url.substr('/data'.length)])
    } else {
      const baseUrl = typeof location === 'object' ? location.origin : 'http://localhost:8081'
      return _fetch(baseUrl + url).then(res => res.json())
    }
  }
}
