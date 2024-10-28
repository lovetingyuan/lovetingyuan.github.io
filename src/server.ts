import { GlobalRegistrator } from '@happy-dom/global-registrator'
import { renderToString } from 'vue/server-renderer'

const DocType = '<!DOCTYPE html>'
const settings = {
  disableJavaScriptFileLoading: true,
  disableJavaScriptEvaluation: true,
  disableCSSFileLoading: true,
  enableFileSystemHttpRequests: false,
  disableIframePageLoading: true,
  disableComputedStyleRendering: true
}
// eslint-disable-next-line no-console
const logError = console.error
// eslint-disable-next-line no-console
console.error = function error(...args) {
  if (
    args[0] instanceof Error &&
    /(JavaScript|CSS) file loading is disabled/.test(args[0].message)
  ) {
    return
  }
  logError.call(console, ...args)
}

const useDocument = (url: string, html: string) => {
  GlobalRegistrator.register({
    url: 'https://localhost' + url,
    settings
  })
  document.write(html.replace(DocType, ''))
  return (rendered: string) => {
    const container = document.querySelector('#app')
    // eslint-disable-next-line sonarjs/pseudo-random
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
