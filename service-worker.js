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
  "/assets/precache/precache-manifest.cb15bfb7bc952a2fc9f3beb3d4cb002f.js"
);

self.__precacheManifest = [
  {
    "revision": "ed38f951dfbaeba1aa67",
    "url": "/index.html"
  },
  {
    "revision": "aef7d61f867a3243cb1e",
    "url": "/blog/index.html"
  },
  {
    "revision": "6dbdb6dc4c0fb57a1b03",
    "url": "/music/index.html"
  },
  {
    "revision": "5fe30e1b9f7d9730f8f7",
    "url": "/movie/index.html"
  },
  {
    "revision": "e6dccbfd487609286e91",
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
