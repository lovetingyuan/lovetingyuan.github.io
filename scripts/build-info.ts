import cp from 'node:child_process'

import type { Plugin } from 'vite'

export default (): Plugin => {
  const buildTime = new Intl.DateTimeFormat('zh', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Shanghai'
  }).format(new Date())
  // eslint-disable-next-line sonarjs/no-os-command-from-path
  const gitHash = cp.execSync('git rev-parse HEAD').toString('utf8').trim().slice(0, 8)
  return {
    name: 'inject-build-info-plugin',
    transformIndexHtml() {
      return [
        {
          tag: 'script',
          children: `window._buildTime="${buildTime}";window._buildHash="${gitHash}";`,
          injectTo: 'body'
        }
      ]
    }
  }
}
