export default {
  validate(parameters: string) {
    return parameters.trim().match(/^detail /)
  },
  render(tokens: any[], index: number) {
    let { info = '' }: { info?: string } = tokens[index]
    info = info.trim()
    if (!info) {
      return '</div></details>\n'
    }
    let title
    let link
    if (info.includes('[')) {
      ;[, title, link] = info.match(/detail \[(.*)]\((.*)\)$/) || []
    } else {
      ;[, title, link] = info.split(' ')
    }
    return `\n<details><summary>${
      link
        ? `<a href="${link}" target="_blank" rel="noopener" style="margin-left: 8px">${title}</a>`
        : title
    }</summary><div style="padding-top: 10px;">\n`
  }
}
