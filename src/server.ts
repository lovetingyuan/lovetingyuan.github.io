import { GlobalRegistrator } from '@happy-dom/global-registrator'
import { renderToString } from 'vue/server-renderer'

const DocType = '<!DOCTYPE html>'

const useDocument = (url: string, html: string) => {
  GlobalRegistrator.register()
  Object.assign(window.happyDOM.settings, {
    disableJavaScriptFileLoading: true,
    disableJavaScriptEvaluation: true,
    disableCSSFileLoading: true,
    enableFileSystemHttpRequests: false,
    disableIframePageLoading: true,
    disableComputedStyleRendering: true
  })
  window.happyDOM.setURL('https://localhost' + url)
  document.write(html.replace(DocType, ''))
  return (rendered: string) => {
    const container = document.querySelector('#app')
    const id = Math.random().toString()
    if (container) {
      container.innerHTML = id
    }
    try {
      return DocType + '\n' + document.documentElement.outerHTML.replace(id, rendered)
    } finally {
      GlobalRegistrator.unregister()
    }
  }
}

export default async function render([url, html]: string[]) {
  const getHtml = useDocument(url, html)
  const { default: render } = await import('./main')
  const { app, router } = await render()
  await router.push(url)
  await router.isReady()
  const rendered = await renderToString(app)

  if (url !== '/404') {
    document.body.dataset.ssr = 'true'
  }
  return getHtml(rendered)
}
