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
  "/assets/precache/precache-manifest.c91efe8f69dec07d2e5098758891e630.js"
);

self.__precacheManifest = [
  {
    "revision": "d471740ea0a55ff7cc90",
    "url": "/index.html"
  },
  {
    "revision": "a5cd794d4988b6befb4d",
    "url": "/blog/index.html"
  },
  {
    "revision": "bbc6be76d586b0e78a08",
    "url": "/music/index.html"
  },
  {
    "revision": "6beb0165884ce8b49a60",
    "url": "/movie/index.html"
  },
  {
    "revision": "4269dc05f1c14be608f5",
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
