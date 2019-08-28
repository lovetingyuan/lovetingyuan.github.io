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
  "/assets/precache/precache-manifest.ab58f9aeae5ce89762c0e51352dd73a5.js"
);

self.__precacheManifest = [
  {
    "revision": "d5deeed3bc1418bbbebe",
    "url": "/index.html"
  },
  {
    "revision": "b77007cf1948be860d7d",
    "url": "/blog/index.html"
  },
  {
    "revision": "d70313b716958cfe84aa",
    "url": "/music/index.html"
  },
  {
    "revision": "19c0aa0314ee6581c9dc",
    "url": "/movie/index.html"
  },
  {
    "revision": "d232cc0dfac174cfa737",
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
