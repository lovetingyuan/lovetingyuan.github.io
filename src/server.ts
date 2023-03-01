import { renderToString } from 'vue/server-renderer'
import { GlobalRegistrator } from '@happy-dom/global-registrator'

const DocType = '<!DOCTYPE html>'

export default async function render([url, html]: string[]) {
  GlobalRegistrator.register()
  Object.assign(window.happyDOM.settings, {
    disableJavaScriptFileLoading: true,
    disableJavaScriptEvaluation: true,
    disableCSSFileLoading: true,
    enableFileSystemHttpRequests: false,
  })
  window.happyDOM.setURL('https://localhost:3000')
  document.write(html.replace(DocType, ''))
  const { default: render } = await import('./main')
  const { app, router } = render()
  // set the router to the desired URL before rendering
  await router.push(url)
  await router.isReady()
  document.getElementById('app')!.innerHTML = await renderToString(app)
  const renderedHtml = DocType + '\n' + document.documentElement.outerHTML
  GlobalRegistrator.unregister()
  return renderedHtml
}
