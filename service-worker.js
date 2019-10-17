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
    "revision": "a0807718f181441bc8fd",
    "url": "/index.html"
  },
  {
    "revision": "b9ce2294fdb2bc4611ad",
    "url": "/blog/index.html"
  },
  {
    "revision": "6133411f7ec0f92090ed",
    "url": "/music/index.html"
  },
  {
    "revision": "9420f5500108b2be7955",
    "url": "/movie/index.html"
  },
  {
    "revision": "dd43f5adfc7df75cd22a",
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
