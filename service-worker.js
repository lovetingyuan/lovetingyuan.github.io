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
  "/assets/precache/precache-manifest.1795e91d643b1ee7e3615c621effe86b.js"
);

self.__precacheManifest = [
  {
    "revision": "23c9db43bd929bebd9ee",
    "url": "/index.html"
  },
  {
    "revision": "0f57f588f85b2b8893bc",
    "url": "/blog/index.html"
  },
  {
    "revision": "34d5e9bd017a18802287",
    "url": "/music/index.html"
  },
  {
    "revision": "56b13a4511c45e280de4",
    "url": "/movie/index.html"
  },
  {
    "revision": "07827205672603780558",
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
