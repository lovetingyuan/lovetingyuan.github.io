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
  "/assets/precache/precache-manifest.cf758631f47787baca9a3f8499c18ccb.js"
);

workbox.core.setCacheNameDetails({prefix: "tingyuan"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "revision": "eb50f0526be93b8e2d48",
    "url": "/music/index.html"
  },
  {
    "revision": "7a74370fbd7e8e97afe1",
    "url": "/blog/index.html"
  },
  {
    "revision": "00acc8341dd57461a28e",
    "url": "/movie/index.html"
  },
  {
    "revision": "90137d9bcec0ca8881c6",
    "url": "/spirit/index.html"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
