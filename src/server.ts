import { renderToString } from 'vue/server-renderer'
import { GlobalRegistrator } from '@happy-dom/global-registrator'

const useDocument = (url: string, html: string) => {
  const DocType = '<!DOCTYPE html>'
  GlobalRegistrator.register()
  Object.assign(window.happyDOM.settings, {
    disableJavaScriptFileLoading: true,
    disableJavaScriptEvaluation: true,
    disableCSSFileLoading: true,
    enableFileSystemHttpRequests: false,
    disableIframePageLoading: true,
    disableComputedStyleRendering: true,
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
  const { default: render } = await import('./main')
  const { app, router } = render()
  await router.push(url)
  await router.isReady()
  document.getElementById('app')!.innerHTML = await renderToString(app)
  if (url !== '/404') {
    const script = document.createElement('script')
    script.textContent = 'window._ssrPage=true'
    document.head.appendChild(script)
  }
  return getHtml()
}
