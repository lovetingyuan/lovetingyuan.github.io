import { readFileSync } from 'fs'
import type { Plugin } from 'vite'
import MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'
import mila from 'markdown-it-link-attributes'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

md.use(mila, {
  attrs: {
    target: '_blank',
    rel: 'noopener noreferrer',
  },
})
md.use(container, 'detail', {
  validate(params: string) {
    return params.trim().match(/^detail /)
  },
  // eslint-disable-next-line consistent-return
  render(tokens: any[], idx: number) {
    let { info = '' }: { info?: string } = tokens[idx]
    info = info.trim()
    if (!info) {
      return '</div></details>\n'
    }
    const [, title, link] = info.split(' ')
    return `\n</div></details>\n<details><summary>${title}${
      link ? `<a href="${link}" target="_blank" style="margin-left: 20px">leetcode</a>` : ''
    }</summary><div class="details-content">\n`
  },
})

export default (): Plugin => {
  return {
    name: 'md-plugin',
    load(id) {
      if (id.endsWith('.md')) {
        const code = readFileSync(id, 'utf-8')
        const src = JSON.stringify(md.render(code))
        return (
          `export default ${src};\n` +
          `
        if (import.meta.hot) {
          import.meta.hot.accept((m) => {
            window.dispatchEvent(new CustomEvent('__hotUpdateBlog', {
              detail: [import.meta, m],
            }));
          })
        }
        `
        )
      }
    },
  }
}
