import { GlobalRegistrator } from '@happy-dom/global-registrator'

GlobalRegistrator.register()

window.happyDOM.settings.disableJavaScriptFileLoading = true
window.happyDOM.settings.disableJavaScriptEvaluation = true
window.happyDOM.settings.disableCSSFileLoading = true
window.happyDOM.settings.enableFileSystemHttpRequests = false
window.happyDOM.setURL('https://localhost:3000')
