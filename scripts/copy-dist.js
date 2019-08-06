const fse = require('fs-extra')
const path = require('path')

const dist = path.join(__dirname, '../dist')

fse.copySync(dist, path.join(__dirname, '../'))

console.log('copy done!')
