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
  "/assets/precache/precache-manifest.7fd7d17ebbbf49a4a357cf58af549a4e.js"
);

self.__precacheManifest = [
  {
    "revision": "60d77e184d05c6f4abbd",
    "url": "/index.html"
  },
  {
    "revision": "57cbc29675de9071d828",
    "url": "/blog/index.html"
  },
  {
    "revision": "99d212b917cbc7ce07d3",
    "url": "/music/index.html"
  },
  {
    "revision": "ccc117bd33353d9b3e14",
    "url": "/movie/index.html"
  },
  {
    "revision": "fc24ea874b075f11aa32",
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
