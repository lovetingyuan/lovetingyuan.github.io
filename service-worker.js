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
  "/assets/precache/precache-manifest.a8bcb5d0d26b414f67640a7158c72ded.js"
);

self.__precacheManifest = [
  {
    "revision": "4f3ac074772cdc03aae6",
    "url": "/index.html"
  },
  {
    "revision": "3c86757a81d83d6f0083",
    "url": "/blog/index.html"
  },
  {
    "revision": "ece94f4ce6ec9d395a31",
    "url": "/music/index.html"
  },
  {
    "revision": "f4f7e48ae310b4762eba",
    "url": "/movie/index.html"
  },
  {
    "revision": "9cd59b3cabdc04ab3926",
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
