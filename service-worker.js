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
  "/assets/precache/precache-manifest.9ce6d8d55bbd6127ec359da51d0173a3.js"
);

self.__precacheManifest = [
  {
    "revision": "dcf9ab09040262e814cd",
    "url": "/index.html"
  },
  {
    "revision": "e44e853c902620d393c5",
    "url": "/blog/index.html"
  },
  {
    "revision": "5e9e5b7aaa7e03e4b9d9",
    "url": "/music/index.html"
  },
  {
    "revision": "3f20bec98c1ab745b81f",
    "url": "/movie/index.html"
  },
  {
    "revision": "fadb333303bf286dafe1",
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
