import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { GlobalRegistrator } from '@happy-dom/global-registrator'

const DocType = '<!DOCTYPE html>'
GlobalRegistrator.register()
window.happyDOM.settings.disableJavaScriptFileLoading = true
window.happyDOM.settings.disableJavaScriptEvaluation = true
window.happyDOM.settings.disableCSSFileLoading = true
window.happyDOM.settings.enableFileSystemHttpRequests = false
window.happyDOM.setURL('https://localhost:3000')

export default async function render([url, html]: string[]) {
  document.write(html.replace(DocType, ''))
  const [{ default: App }, { default: createRouter }] = await Promise.all([import('./App.vue'), import('./router')])
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  // set the router to the desired URL before rendering
  await router.push(url)
  await router.isReady()
  document.getElementById('app')!.innerHTML = await renderToString(app)
  return DocType + '\n' + document.documentElement.outerHTML
}
