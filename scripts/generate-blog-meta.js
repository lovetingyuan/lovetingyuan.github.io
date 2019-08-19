// [comment]: <> (title: 'css 1', date: '2019-8-18', update: '', keyword: 'css, css 1')
const path = require('path')
const src = path.join(__dirname, '../public/data/blog')
const fse = require('fs-extra')
const metaReg = /\[comment\]: <.*?> \((.+?)\)/
let count = 0
const blogsMeta = fse.readdirSync(src).reduce((ret, tag) => {
  const dir = path.join(src, tag)
  if (fse.lstatSync(dir).isDirectory()) {
    ret[tag] = fse.readdirSync(dir).map(md => {
      const file = path.join(dir, md)
      const mdContent = fse.readFileSync(file, 'utf8')
      // eslint-disable-next-line no-eval
      const meta = eval(`({${mdContent.match(metaReg)[1]}})`)
      return {
        name: md.slice(0, -3),
        title: meta.title,
        date: [meta.date, meta.update],
        keywords: meta.keywords ? meta.keywords.split(',').map(v => v.trim()) : []
      }
    })
    count += ret[tag].length
  }
  return ret
}, {})

fse.outputJSONSync(path.join(src, 'blog.json'), {
  count,
  blogs: blogsMeta
}, {
  spaces: 2
})
