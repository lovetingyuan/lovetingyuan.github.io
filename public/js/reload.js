if (location.hostname === 'localhost') {
  fetch('/@vite/client')
    .then(r => r.text())
    .then(code => {
      if (code.includes('<!DOCTYPE html>')) return
      const client = document.createElement('script')
      client.type = 'module'
      client.textContent =
        code +
        `
    socket.addEventListener('message', ({data}) => {
      JSON.parse(data).type === 'full-reload' && location.reload()
    })
    `
      document.head.append(client)
    })
    .catch(() => {})
}
