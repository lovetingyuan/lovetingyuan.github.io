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
  "/assets/precache/precache-manifest.477addc5811589c69d6e18711e2a69b1.js"
);

self.__precacheManifest = [
  {
    "revision": "910b910a563aecc36305",
    "url": "/index.html"
  },
  {
    "revision": "82594d8e3842f7c20c75",
    "url": "/blog/index.html"
  },
  {
    "revision": "21ed4d30a71782ff2708",
    "url": "/music/index.html"
  },
  {
    "revision": "401660b47ad7e0ba9079",
    "url": "/movie/index.html"
  },
  {
    "revision": "100a597775391e16ccdc",
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
