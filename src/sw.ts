import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'

declare let self: ServiceWorkerGlobalScope

// self.__WB_MANIFEST is default injection point
const cacheFiles = self.__WB_MANIFEST
precacheAndRoute(cacheFiles)
if (cacheFiles.find((v: any) => v.url === 'index.html')) {
  // to allow work offline
  registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html'), { denylist: [/^\/backoffice/] }))
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
