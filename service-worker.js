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
  "/assets/precache/precache-manifest.6a4f14325cc5aacecc989328a5548324.js"
);

self.__precacheManifest = [
  {
    "revision": "0a94a7b6bd5371f38b3d",
    "url": "/index.html"
  },
  {
    "revision": "a83f145bd4853e177794",
    "url": "/blog/index.html"
  },
  {
    "revision": "6244acfe204723c5e563",
    "url": "/music/index.html"
  },
  {
    "revision": "2e0c69e4bf6f65efe1a3",
    "url": "/movie/index.html"
  },
  {
    "revision": "d186a25c1ba3a76d6ec4",
    "url": "/spirit/index.html"
  }
].concat(self.__precacheManifest || []);

workbox.core.setCacheNameDetails({prefix: "tingyuan"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "ignoreUrlParametersMatching": [/^v/]
});
