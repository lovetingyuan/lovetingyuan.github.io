/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-sw@3.6.3/build/workbox-sw.min.js",
  "/assets/precache/precache-manifest.659c85ec1324df80fb759bb7366f1866.js"
);

self.__precacheManifest = [
  {
    "revision": "30f98fffd6fcdfca4846",
    "url": "/index.html"
  },
  {
    "revision": "5060a2b6765b6a6fea44",
    "url": "/blog/index.html"
  },
  {
    "revision": "4acd3c850ae0d4a5ce21",
    "url": "/music/index.html"
  },
  {
    "revision": "8b2cba7b8457cbd7811a",
    "url": "/movie/index.html"
  },
  {
    "revision": "44c441153912c6fb0a57",
    "url": "/spirit/index.html"
  }
].concat(self.__precacheManifest || []);

workbox.core.setCacheNameDetails({prefix: "tingyuan"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "ignoreURLParametersMatching": [/^v/]
});
