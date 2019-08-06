const fse = require('fs-extra')
const path = require('path')

const dest = path.join(__dirname, '../')
const src = path.join(__dirname, '../dist')

fse.readdirSync(dest).forEach(file => {
  if (file.startsWith('precache-manifest.')) {
    fse.removeSync(path.join(dest, file))
  }
})

fse.copySync(src, dest)

console.log('copy done!')
