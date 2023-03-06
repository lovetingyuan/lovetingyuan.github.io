import { renderToString } from 'vue/server-renderer'
import { GlobalRegistrator } from '@happy-dom/global-registrator'
import cp from 'node:child_process'

const useDocument = (url: string, html: string) => {
  const DocType = '<!DOCTYPE html>'
  GlobalRegistrator.register()
  Object.assign(window.happyDOM.settings, {
    disableJavaScriptFileLoading: true,
    disableJavaScriptEvaluation: true,
    disableCSSFileLoading: true,
    enableFileSystemHttpRequests: false
  })
  window.happyDOM.setURL('https://localhost' + url)
  document.write(html.replace(DocType, ''))
  return () => {
    const html = DocType + '\n' + document.documentElement.outerHTML
    GlobalRegistrator.unregister()
    return html
  }
}

export default async function render([url, html]: string[]) {
  const getHtml = useDocument(url, html)
  const buildTime = new Intl.DateTimeFormat('zh', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Shanghai'
  }).format(new Date())
  const gitHash = cp.execSync('git rev-parse HEAD').toString('utf-8').trim().slice(0, 8)
  window._buildTime = buildTime
  const { default: render } = await import('./main')
  const { app, router } = render()
  // set the router to the desired URL before rendering
  await router.push(url)
  await router.isReady()

  document.getElementById('app')!.innerHTML = await renderToString(app)
  const script = document.createElement('script')
  script.textContent = `
  window._buildTime="${buildTime}";typeof console==='object'&&console.log("%c Build: ${buildTime} ${gitHash} ","background-color:#4DBA87;color:#fff;padding:1px 2px;border-radius:2px")
  `.trim()
  document.body.appendChild(script)
  return getHtml()
}
