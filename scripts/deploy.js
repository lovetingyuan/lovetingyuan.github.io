// 用于github actions自动部署到github pages
import { join } from 'node:path'

import core from '@actions/core'
import { exec } from '@actions/exec'
import { mv, rmRF } from '@actions/io'

async function main() {
  const workDir = join(__dirname, '..')
  const docs = join(workDir, 'docs')
  const distribution = join(workDir, 'dist')
  await exec('npm', ['run', 'build'])
  console.log('run npm build')
  await exec('git', ['fetch', 'origin'])
  console.log('git fetch origin')
  await exec('git', ['checkout', 'gh'])
  console.log('git checkout to gh')
  await rmRF(docs)
  console.log('delete docs')
  await mv(distribution, docs)
  console.log('rename dist to docs')
  await exec('git', ['add', '.'])
  console.log('git add all files')
  const buildTime = new Intl.DateTimeFormat('zh', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Shanghai'
  }).format(new Date())
  await exec('git', ['config', 'user.email', '1932294867@qq.com'])
  await exec('git', ['config', 'user.name', 'tingyuan'])
  await exec('git', ['commit', '-m', `Build at ${buildTime}`])
  console.log('git commit')
  await exec('git', ['push'])
  console.log('git push to origin gh')
}

main().catch(error => {
  console.log('部署失败')
  console.error(error)
  core.setFailed(error.message)
  process.exit(-1)
})
