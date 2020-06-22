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
  "/assets/precache/precache-manifest.70830a48b7700dcd1b25cea66b7c4930.js"
);

self.__precacheManifest = [
  {
    "revision": "b1e4dddce3c5cdfab9cb",
    "url": "/index.html"
  },
  {
    "revision": "866633cd4459563b2c2e",
    "url": "/blog/index.html"
  },
  {
    "revision": "f09d61a103173082779e",
    "url": "/music/index.html"
  },
  {
    "revision": "38d36339c541a2ecd61b",
    "url": "/movie/index.html"
  },
  {
    "revision": "eaaa6637e6a19112ab40",
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
