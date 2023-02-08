export default {
  validate(params: string) {
    return params.trim().match(/^detail /)
  },
  render(tokens: any[], idx: number) {
    let { info = '' }: { info?: string } = tokens[idx]
    info = info.trim()
    if (!info) {
      return '</div></details>\n'
    }
    let title
    let link
    if (info.includes('[')) {
      ;[, title, link] = info.match(/detail \[(.*)\] (.*)$/) || []
    } else {
      ;[, title, link] = info.split(' ')
    }
    return `\n<details><summary>${
      link ? `<a href="${link}" target="_blank" style="margin-left: 20px">${title}</a>` : title
    }</summary><div class="details-content">\n`
  },
}
