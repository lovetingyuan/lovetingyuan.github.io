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
  "/assets/precache/precache-manifest.3a0f05b144ff007c1b0865815be9a4b4.js"
);

self.__precacheManifest = [
  {
    "revision": "7db9265f753f3567f0d6",
    "url": "/index.html"
  },
  {
    "revision": "455465ba1bf45a880e36",
    "url": "/blog/index.html"
  },
  {
    "revision": "2548fa10baced5eee62a",
    "url": "/music/index.html"
  },
  {
    "revision": "f94317f4c7cca98061b5",
    "url": "/movie/index.html"
  },
  {
    "revision": "c69a4235c2f169c8834d",
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
