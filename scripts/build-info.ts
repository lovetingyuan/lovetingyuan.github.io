import type { Plugin } from 'vite'
import cp from 'node:child_process'

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
  const gitHash = cp.execSync('git rev-parse HEAD').toString('utf-8').trim().slice(0, 8)
  return {
    name: 'inject-build-info-plugin',
    apply: 'build',
    transformIndexHtml() {
      return [
        {
          tag: 'script',
          children: `
          window._buildTime="${buildTime}";
          if (typeof console === 'object') {
            console.log("%c Build: ${buildTime} ${gitHash} ", "background-color:#4DBA87;color:#fff;padding:1px 2px;border-radius:2px")
          }
          `.replace(/\s{2,}/g, ' '),
          injectTo: 'body'
        }
      ]
    }
  }
}
