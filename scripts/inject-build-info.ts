import type { Plugin } from 'vite'
import cp from 'node:child_process'

export default (): Plugin => {
  return {
    name: 'build-time-plugin',
    apply: 'build',
    transformIndexHtml(html) {
      const buildTime = new Intl.DateTimeFormat('zh', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Shanghai',
      }).format(new Date())
      const gitHash = cp.execSync('git rev-parse HEAD').toString('utf-8').trim()
      return {
        html,
        tags: [
          {
            tag: 'script',
            injectTo: 'body',
            children: `window._buildTime="${buildTime}";window._gitHash="${gitHash}";typeof console==='object'&&console.log("%c Build: ${buildTime} ","background-color:#4DBA87;color:#fff;padding:1px 2px;border-radius:2px")`,
          },
        ],
      }
    },
  }
}
