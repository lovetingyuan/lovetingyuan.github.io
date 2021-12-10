// 用于github actions自动部署到github pages
// const core = require('@actions/core')
const {exec} = require('@actions/exec')
const {rmRF, mkdirP, cp} = require('@actions/io')
const path = require('path')
const fs = require('fs')

console.log(__filename, process.cwd())

async function main () {
  const workDir = path.join(__dirname, '..')
  const docs = path.join(workDir, 'docs')
  await exec('npm', ['run', 'build'])
  console.log('run npm build')
  await exec('git', ['fetch', 'origin'])
  console.log('git fetch origin')
  await exec('git', ['checkout', 'gh'])
  console.log('git checkout to gh')
  await rmRF(docs)
  console.log('remove old docs dir')
  await mkdirP(docs)
  console.log('make new docs dir')
  const dist = path.join(workDir, 'dist')
  const files = fs.readdirSync(dist)
  await Promise.all(files.map(async f => {
    await cp(path.join(dist, f), docs, {
      recursive: true, force: true
    })
  }))
  console.log('copy dist to docs')
  await exec('git', ['add', '.'])
  console.log('git add all files')
  const buildTime = new Intl.DateTimeFormat('zh', {
    year: 'numeric',  
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(new Date())
  await exec('git', ['config', 'user.email', '1932294867@qq.com'])
  await exec('git', ['config', 'user.name', 'tingyuan'])
  await exec('git', ['commit', '-m', `"Build at ${buildTime}"`])
  console.log('git commit')
  await exec('git', ['push'])
  console.log('git push to origin gh')
}

main().catch(err => {
  console.log('部署失败')
  console.error(err)
})
