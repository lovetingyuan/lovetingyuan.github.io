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
    const container = document.getElementById('app')
    const id = Math.random().toString()
    if (container) {
      container.innerHTML = id
    }
    // <link rel="stylesheet" href="/path/to/my.css" media="print" onload="this.media='all'; this.onload=null;">
    // document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    //   link.setAttribute('media', 'print')
    //   link.setAttribute('onload', "this.media='all'; this.onload=null;")
    // })
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
  const { app, router } = render()
  await router.push(url)
  await router.isReady()
  const rendered = await renderToString(app)

  // url === '/' && console.log(1234, rendered)
  // happy-dom可能有bug，这里直接写入会导致最终序列化的结果不符合原始html
  // document.getElementById('app')!.innerHTML = rendered
  // url === '/' && console.log(4444, document.getElementById('app')!.innerHTML)
  if (url !== '/404') {
    document.body.dataset.ssr = 'true'
  }
  return getHtml(rendered)
}
