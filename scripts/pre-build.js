const fse = require('fs-extra')
const path = require('path')

const dest = path.join(__dirname, '../')
const src = path.join(__dirname, '../dist')

fse.readdirSync(dest).forEach(file => {
  if (
    file.startsWith('precache-manifest.') ||
    file === 'assets'
  ) {
    fse.removeSync(path.join(dest, file))
  }
})

fse.copySync(src, dest)

fse.readdirSync(dest).forEach(file => {
  if (file === 'ssr' || file === 'report.html') {
    fse.removeSync(path.join(dest, file))
  }
})

console.log('copy done!')
