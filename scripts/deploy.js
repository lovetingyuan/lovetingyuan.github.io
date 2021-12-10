// 用于github actions自动部署到github pages
// const core = require('@actions/core')
const {exec} = require('@actions/exec')
const {rmRF, mkdirP, cp} = require('@actions/io')
const path = require('path')

console.log(__filename, process.cwd())

async function main () {
  const workDir = path.join(__dirname, '..')
  const docs = path.join(workDir, 'docs')
  await exec('npm', ['run', 'build'])
  console.log('run npm build')
  await exec('git', ['checkout', '-b', 'gh', 'origin/gh'])
  console.log('git checkout to gh')
  await rmRF(docs)
  console.log('remove old docs dir')
  await mkdirP(docs)
  console.log('make new docs dir')
  const dist = path.join(workDir, 'dist')
  await cp(dist, docs, {
    recursive: true, force: true
  })
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
  await exec('git', ['commit', '-m', `Build at ${buildTime}`])
  console.log('git commit')
  await exec('git', ['push', 'origin', 'gh'])
  console.log('git push to origin gh')
}

main().catch(err => {
  console.log('部署失败')
  console.error(err)
})


