import type { Plugin } from 'vite'

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
      return {
        html,
        tags: [
          {
            tag: 'script',
            injectTo: 'body',
            children:
              `window._buildTime="${buildTime}";console.log("%c Build: ${buildTime} ","background-color:#4DBA87;color:#fff;padding:1px 2px;border-radius:2px")
          `.replace(/\s{2,}/g, ' '),
          },
        ],
      }
    },
  }
}