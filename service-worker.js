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
  "/assets/precache/precache-manifest.6b1900b446499a689fad813a13513ed0.js"
);

self.__precacheManifest = [
  {
    "revision": "0db513e73f207f27e99f",
    "url": "/index.html"
  },
  {
    "revision": "fb804894522fd40c4f8a",
    "url": "/blog/index.html"
  },
  {
    "revision": "1dc173e3f53c142e12e2",
    "url": "/music/index.html"
  },
  {
    "revision": "3635260699f09b897a90",
    "url": "/movie/index.html"
  },
  {
    "revision": "700d142eb1de7b852d91",
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
