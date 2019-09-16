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
  "/assets/precache/precache-manifest.dac79fdbe2dcf861f3c1d703ec726b43.js"
);

self.__precacheManifest = [
  {
    "revision": "dfea3ae892b41c340d2d",
    "url": "/index.html"
  },
  {
    "revision": "cbe27d7047460c1a808b",
    "url": "/blog/index.html"
  },
  {
    "revision": "0b635910d341664cdd7a",
    "url": "/music/index.html"
  },
  {
    "revision": "fb2eaa402c30a3f2a6d3",
    "url": "/movie/index.html"
  },
  {
    "revision": "c51cba8735fb58414fdf",
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
