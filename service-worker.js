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
  "/assets/precache/precache-manifest.60a9b294600b784c04ec22cb6205974a.js"
);

self.__precacheManifest = [
  {
    "revision": "f5794d421bbc3853ca02",
    "url": "/index.html"
  },
  {
    "revision": "56753dc255b976dea570",
    "url": "/blog/index.html"
  },
  {
    "revision": "d9a7f935938bf1898fdf",
    "url": "/music/index.html"
  },
  {
    "revision": "934f8a4ac957a69d04cd",
    "url": "/movie/index.html"
  },
  {
    "revision": "864038772ab8e5177994",
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
