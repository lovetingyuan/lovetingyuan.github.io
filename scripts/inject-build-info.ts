import type { Plugin } from 'vite'

export default (): Plugin => {
  return {
    name: 'build-time-plugin',
    apply: 'build',
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          // {
          //   tag: 'script',
          //   injectTo: 'body',
          //   children: `window._buildTime="${buildTime}";window._gitHash="${gitHash}";typeof console==='object'&&console.log("%c Build: ${buildTime} ","background-color:#4DBA87;color:#fff;padding:1px 2px;border-radius:2px")`,
          // },
          {
            tag: 'script',
            attrs: {
              type: 'importmap',
            },
            children: JSON.stringify(
              {
                imports: {
                  vue: 'https://cdn.bootcdn.net/ajax/libs/vue/3.2.47/vue.runtime.esm-browser.js',
                },
              },
              null,
              2
            ),
            injectTo: 'head-prepend',
          },
        ],
      }
    },
  }
}
