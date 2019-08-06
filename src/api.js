const request = {
  get (url) {
    const baseUrl = typeof location === 'object' ? location.origin : this.origin
    return fetch(baseUrl + url).then(res => res.json())
  }
}

export default request
