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
  "/assets/precache/precache-manifest.4b7381d8e81ceff84f8200e5c0160563.js"
);

self.__precacheManifest = [
  {
    "revision": "c5d9e5870c0bcd9c3f96",
    "url": "/index.html"
  },
  {
    "revision": "46dacaf91267959535d3",
    "url": "/blog/index.html"
  },
  {
    "revision": "97380f2032dba26767f7",
    "url": "/music/index.html"
  },
  {
    "revision": "721a314fb86cb3155b09",
    "url": "/movie/index.html"
  },
  {
    "revision": "2f777ea43620afb6b55f",
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
