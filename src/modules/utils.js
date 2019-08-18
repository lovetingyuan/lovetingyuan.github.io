export function init (val) {
  if (val && typeof val === 'object') {
    if (val.__INIT__) {
      return true
    }
    Object.defineProperty(val, '__INIT__', { value: true })
  }
  return val
}

// eslint-disable-next-line
let _fetch
if (process.env.VUE_ENV === 'server') {
  _fetch = require('node-fetch')
} else {
  _fetch = fetch
}

const data = {}

if (process.env.NODE_ENV === 'development') {
  const context = require.context('@/../public/data', true, /\.(json|md)$/)
  context.keys().forEach(path => {
    data[path] = context(path)
  })
  console.log(data)
}

export const request = {
  get (url) {
    if (!url.startsWith('/data')) {
      throw new Error('request not startsWith /data is not supported.')
    }
    if (process.env.NODE_ENV === 'development') {
      console.log('request: ' + url)
      return Promise.resolve(data['.' + url.substr('/data'.length)])
    } else {
      const baseUrl = typeof location === 'object' ? location.origin : 'http://localhost:8081'
      const headers = url.endsWith('.md') ? {
        'accept': 'application/vnd.github.v3.raw'
      } : null
      return _fetch(baseUrl + url, {
        method: 'GET',
        headers
      }).then(res => {
        if (url.endsWith('.json')) {
          return res.json()
        }
        return res.text()
      })
    }
  }
}
