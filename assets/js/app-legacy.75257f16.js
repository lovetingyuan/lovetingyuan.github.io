(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "080f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return request; });
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f559");
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_tingyuan_github_lovetingyuan_lovetingyuan_github_io_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7618");



function init(val) {
  if (val && Object(_Users_tingyuan_github_lovetingyuan_lovetingyuan_github_io_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(val) === 'object') {
    if (val.__init__) {
      return true;
    }

    val.__init__ = true;
  }

  return val;
} // eslint-disable-next-line

var _fetch;

if (true) {
  _fetch = __webpack_require__("a18f");
} else {}

var data = {};

if (false) { var context; }

var request = {
  get: function get(url) {
    if (!url.startsWith('/data')) {
      throw new Error('request not startsWith /data is not supported.');
    }

    if (false) {} else {
      var baseUrl = (typeof location === "undefined" ? "undefined" : Object(_Users_tingyuan_github_lovetingyuan_lovetingyuan_github_io_node_modules_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(location)) === 'object' ? location.origin : 'http://localhost:8081';
      return _fetch(baseUrl + url).then(function (res) {
        return res.json();
      });
    }
  }
};

/***/ }),

/***/ "0db5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "20c5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/github-mark.ef7a02b6.png";

/***/ }),

/***/ "3db1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3db6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5050":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5698":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("7618");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__("097d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9f1d1c74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=57a67ad0&
var Appvue_type_template_id_57a67ad0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('app-header',{attrs:{"navs-list":_vm.navs}}),_c('main',{style:(("margin-top: " + _vm.marginTop + "px"))},[_c('transition',{attrs:{"name":"slide-fade","mode":"out-in"}},[_c('router-view')],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=57a67ad0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9f1d1c74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=template&id=e8edb7d4&scoped=true&
var Headervue_type_template_id_e8edb7d4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('nav',[_c('ul',{staticClass:"nav-list"},[_vm._l((_vm.navsList),function(nav){return _c('li',{key:nav.title + nav.path},[_c('router-link',{staticClass:"a-link",attrs:{"to":nav.path || nav.to,"exact":!!nav.exact}},[_vm._v("\n          "+_vm._s(nav.title)+"\n        ")])],1)}),_vm._m(0)],2)])])}
var Headervue_type_template_id_e8edb7d4_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":"https://github.com/lovetingyuan/lovetingyuan.github.io","target":"_blank","rel":"noopener","title":"github"}},[_c('img',{staticStyle:{"vertical-align":"top"},attrs:{"src":__webpack_require__("20c5"),"alt":"github","width":"22"}})])])}]


// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=template&id=e8edb7d4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  props: {
    navsList: Array
  }
});
// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Header.vue?vue&type=style&index=0&id=e8edb7d4&lang=less&scoped=true&
var Headervue_type_style_index_0_id_e8edb7d4_lang_less_scoped_true_ = __webpack_require__("58c7");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Header.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  Headervue_type_template_id_e8edb7d4_scoped_true_render,
  Headervue_type_template_id_e8edb7d4_scoped_true_staticRenderFns,
  false,
  null,
  "e8edb7d4",
  null
  
)

/* harmony default export */ var Header = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  components: {
    AppHeader: Header
  },
  data: function data() {
    return {
      marginTop: 0,
      navs: [{
        title: '首页',
        path: '/',
        exact: true
      }, {
        title: '博客',
        path: '/blog'
      }, {
        title: '音乐',
        to: {
          path: '/music'
        }
      }, {
        title: '电影',
        path: '/movie'
      }, {
        title: '远方',
        path: '/spirit'
      }]
    };
  },
  created: function created() {// console.log('app created')
    // const url = 'https://1650493675298486.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/common_data_proxy/test2/'
    // typeof fetch === 'function' && fetch(url).then(res => res.json()).then(data => {
    //   this.date = data.date
    // })
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      var headerHeight = document.querySelector('header').clientHeight;
      _this.marginTop = headerHeight;
    });
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/style.css?vue&type=style&index=0&lang=css&
var stylevue_type_style_index_0_lang_css_ = __webpack_require__("f22e");

// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=1&lang=less&
var Appvue_type_style_index_1_lang_less_ = __webpack_require__("94fb");

// CONCATENATED MODULE: ./src/App.vue







/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_57a67ad0_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/register-service-worker/index.js
var register_service_worker = __webpack_require__("9483");

// CONCATENATED MODULE: ./src/service-worker.js


/* eslint-disable no-console */


if ( true && (typeof window === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(window)) === 'object' && window.document) {
  Object(register_service_worker["a" /* register */])("".concat("/", "service-worker.js"), {
    ready: function ready() {
      console.log('App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB');
    },
    registered: function registered() {
      console.log('Service worker has been registered.');
    },
    cached: function cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound: function updatefound() {
      console.log('New content is downloading.');
    },
    updated: function updated() {
      console.log('New content is available; please refresh.');
    },
    offline: function offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error: function error(_error) {
      console.error('Error during service worker registration:', _error);
    }
  });
}
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9f1d1c74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=55d60363&scoped=true&
var Homevue_type_template_id_55d60363_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h2',[_vm._v("一些有用的链接")]),_c('ul',{staticClass:"links"},_vm._l((_vm.homeLinks),function(link){return _c('li',{key:link.url},[_c('a',{attrs:{"href":link.url,"target":"_blank"}},[_vm._v(_vm._s(link.name))])])}),0),_c('h2',[_vm._v("Github好的项目")]),_c('ul',{staticClass:"github-cats"},_vm._l((_vm.githubLinks),function(item,name){return _c('li',{key:name,staticClass:"github-cat"},[_c('details',[_c('summary',[_vm._v(_vm._s(name))]),_c('ul',{staticClass:"github-links"},_vm._l((item),function(link){return _c('li',{key:link.name,staticClass:"github-link"},[_c('a',{attrs:{"href":link.url || link.git,"rel":"noopener","target":"_blank"}},[_vm._v(_vm._s(link.name))]),_vm._v("  \n            "),_c('a',{staticClass:"github-logo",attrs:{"href":link.git,"rel":"noopener","target":"_blank","title":"github"}}),_c('p',[_vm._v(_vm._s(link.description))])])}),0)])])}),0)])}
var Homevue_type_template_id_55d60363_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=template&id=55d60363&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  asyncData: function asyncData(store) {
    return store.$fetchLinks('/data/home.json');
  },
  computed: {
    homeLinks: function homeLinks() {
      return this.$store.links;
    },
    githubLinks: function githubLinks() {
      return this.$store.githubs;
    }
  }
});
// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Home.vue?vue&type=style&index=0&id=55d60363&lang=less&scoped=true&
var Homevue_type_style_index_0_id_55d60363_lang_less_scoped_true_ = __webpack_require__("a76b");

// CONCATENATED MODULE: ./src/views/Home.vue






/* normalize component */

var Home_component = Object(componentNormalizer["a" /* default */])(
  views_Homevue_type_script_lang_js_,
  Homevue_type_template_id_55d60363_scoped_true_render,
  Homevue_type_template_id_55d60363_scoped_true_staticRenderFns,
  false,
  null,
  "55d60363",
  null
  
)

/* harmony default export */ var Home = (Home_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9f1d1c74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/404.vue?vue&type=template&id=8f2fc636&scoped=true&
var _404vue_type_template_id_8f2fc636_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page404"},[_c('h1',[_vm._v("Page Not Found")]),_c('p',[_vm._v("\n    抱歉，您请求的页面不存在，"),_c('br'),_vm._v("在此返回\n    "),_c('router-link',{attrs:{"to":"/","replace":""}},[_c('span',{staticClass:"home-link"},[_vm._v("\n        首页\n      ")])])],1),_c('div',[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","id":"Capa_1","enable-background":"new 0 0 512 512","height":"320","viewBox":"0 0 512 512","width":"320"}},[_c('path',{attrs:{"d":"m512 128-256-21.333-10.667 181.333 10.667 185.667h256z","fill":"#9ccefd"}}),_c('path',{attrs:{"d":"m0 128v345.667h256v-367z","fill":"#c4e2fe"}}),_c('path',{attrs:{"d":"m189.347 305.605h-16.545v21.317h-30.704v-21.317h-58.862v-20.522l49.954-69.521h32.613l-45.34 65.067h22.59v-18.931h29.75v18.931h16.545v24.976z","fill":"#fc5b3f"}}),_c('path',{attrs:{"d":"m428.764 305.605h-16.545v21.317h-30.704v-21.317h-58.863v-20.522l49.954-69.521h32.613l-45.34 65.067h22.59v-18.931h29.75v18.931h16.545z","fill":"#fc3636"}}),_c('path',{attrs:{"d":"m512 38.333h-256l-21.333 36.333 21.333 53.334h256z","fill":"#efe2dd"}}),_c('path',{attrs:{"d":"m89.666 38.333-14.999 47 14.999 42.667h166.334v-89.667z","fill":"#f7f0eb"}}),_c('path',{attrs:{"d":"m89.666 128h-89.666v-89.667h89.666z","fill":"#fc5b3f"}}),_c('path',{attrs:{"d":"m303.408 271.241c0-36.055-19.913-57.089-47.408-57.871l-10.667 10.63 10.667 15.188c9.196.906 15.75 9.925 15.75 32.054 0 22.128-6.554 31.147-15.75 32.053l-10.667 6.039 10.667 19.778c27.495-.782 47.408-21.815 47.408-57.871z","fill":"#fc3636"}}),_c('path',{attrs:{"d":"m254.409 303.377c-10.182 0-17.5-8.75-17.5-32.136s7.318-32.136 17.5-32.136c.539 0 1.068.031 1.591.082v-25.817c-.529-.015-1.056-.037-1.591-.037-28.477 0-49.158 21.159-49.158 57.908 0 36.75 20.681 57.908 49.158 57.908.535 0 1.061-.022 1.591-.037v-25.817c-.523.051-1.052.082-1.591.082z","fill":"#fc5b3f"}}),_c('path',{attrs:{"d":"m341.333 358.333h-85.333l-10.667 15 10.667 15h85.333z","fill":"#f7f0eb"}}),_c('path',{attrs:{"d":"m170.666 358.333h85.334v30h-85.334z","fill":"#fffbf5"}})])])])}
var _404vue_type_template_id_8f2fc636_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/404.vue?vue&type=template&id=8f2fc636&scoped=true&

// EXTERNAL MODULE: ./src/views/404.vue?vue&type=style&index=0&id=8f2fc636&scoped=true&lang=css&
var _404vue_type_style_index_0_id_8f2fc636_scoped_true_lang_css_ = __webpack_require__("67a7");

// CONCATENATED MODULE: ./src/views/404.vue

var script = {}



/* normalize component */

var _404_component = Object(componentNormalizer["a" /* default */])(
  script,
  _404vue_type_template_id_8f2fc636_scoped_true_render,
  _404vue_type_template_id_8f2fc636_scoped_true_staticRenderFns,
  false,
  null,
  "8f2fc636",
  null
  
)

/* harmony default export */ var _404 = (_404_component.exports);
// CONCATENATED MODULE: ./src/router.js




vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

var router_route404 = function route404() {
  return {
    path: '*',
    component: _404
  };
};

/* harmony default export */ var src_router = (function () {
  var router = new vue_router_esm["a" /* default */]({
    mode: 'history',
    base: "/",
    routes: [{
      path: '/',
      component: Home,
      beforeEnter: function beforeEnter(to, from, next) {
        if (to.query.redirect) {
          next({
            path: to.query.redirect,
            replace: true
          });
        } else {
          next();
        }
      }
    }, {
      path: '/blog/:category?',
      component: function component() {
        return __webpack_require__.e(/* import() | async-blog */ "async-blog").then(__webpack_require__.bind(null, "fd3f"));
      },
      children: [{
        path: '',
        component: function component() {
          return __webpack_require__.e(/* import() | async-articleslist */ "async-articleslist").then(__webpack_require__.bind(null, "8683"));
        }
      }, {
        path: 'javascript',
        component: function component() {
          return __webpack_require__.e(/* import() | async-articleslist */ "async-articleslist").then(__webpack_require__.bind(null, "8683"));
        }
      }, {
        path: 'css',
        component: function component() {
          return __webpack_require__.e(/* import() | async-articleslist */ "async-articleslist").then(__webpack_require__.bind(null, "8683"));
        }
      }]
    }, {
      path: '/music',
      component: function component() {
        return __webpack_require__.e(/* import() | async-music */ "async-music").then(__webpack_require__.bind(null, "5125"));
      }
    }, {
      path: '/movie',
      component: function component() {
        return __webpack_require__.e(/* import() | async-movie */ "async-movie").then(__webpack_require__.bind(null, "def6"));
      }
    }, {
      path: '/spirit',
      component: function component() {
        return __webpack_require__.e(/* import() | async-story */ "async-story").then(__webpack_require__.bind(null, "095a"));
      }
    }, router_route404()]
  });
  return router;
});
// EXTERNAL MODULE: ./node_modules/@tingyuan/vue-store/dist/index.esm.js
var index_esm = __webpack_require__("bce8");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("3b8d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("768b");

// EXTERNAL MODULE: ./src/modules/utils.js
var utils = __webpack_require__("080f");

// CONCATENATED MODULE: ./src/modules/home.js




/* harmony default export */ var home = ({
  links: Object(utils["a" /* init */])([]),
  githubs: Object(utils["a" /* init */])([]),
  set: function set(_ref) {
    var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    this[key] = val;
  },
  $showDialog: function $showDialog(show) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dialog';
    var dialog = document.getElementById('dialog');
    show ? dialog.showModal() : dialog.close();
  },
  $fetchLinks: function () {
    var _$fetchLinks = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _ref3, links, githubs;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!Object(utils["a" /* init */])(this.links)) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return utils["b" /* request */].get('/data/home.json');

            case 3:
              _ref3 = _context.sent;
              links = _ref3.links;
              githubs = _ref3.githubs;
              this.set(['links', links]);
              this.set(['githubs', githubs]);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function $fetchLinks() {
      return _$fetchLinks.apply(this, arguments);
    }

    return $fetchLinks;
  }()
});
// CONCATENATED MODULE: ./src/store.js



vue_runtime_esm["a" /* default */].use(index_esm["a" /* default */]);
function createStore() {
  var store = index_esm["a" /* default */].createStore(home, {
    strict: "production" === 'development'
  });

  if (false) {}

  return store;
}
// CONCATENATED MODULE: ./src/main.js












vue_runtime_esm["a" /* default */].config.productionTip = false;
vue_runtime_esm["a" /* default */].mixin({
  beforeMount: function beforeMount() {
    var asyncData = this.$options.asyncData;

    if (asyncData) {
      this.asyncDataPromise = asyncData(this.$store, this.$route);
    }
  },
  mounted: function mounted() {
    var routerLink = vue_runtime_esm["a" /* default */].component('RouterLink');

    if (this.constructor === routerLink) {
      if (this.$el && this.$router && this.to) {
        var path = this.$router.resolve(this.to).resolved.path;

        if (!this.$el.title) {
          this.$el.title = path;
        }
      }
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var asyncData = this.$options.asyncData;

    if (asyncData) {
      asyncData(this.$store, to).then(next).catch(next);
    } else {
      next();
    }
  }
});

var main_createApp = function createApp() {
  return new vue_runtime_esm["a" /* default */]({
    render: function render(h) {
      return h(App);
    },
    router: src_router(),
    store: createStore()
  });
};

if ((typeof window === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(window)) === 'object' && window.document) {
  var app = main_createApp();

  if (window.__INITIAL_STATE__) {
    app.$store.replaceState(window.__INITIAL_STATE__);
  }

  app.$router.onReady(function () {
    app.$mount('#app');
  });
}

/* harmony default export */ var main = __webpack_exports__["default"] = (function (context) {
  var app = main_createApp();
  var _app$$options = app.$options,
      store = _app$$options.store,
      router = _app$$options.router;
  router.push(context.url);

  var _ref = new function () {
    var _this = this;

    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }(),
      promise = _ref.promise,
      reject = _ref.reject,
      resolve = _ref.resolve;

  router.onReady(function () {
    var matchedComponents = router.getMatchedComponents();
    Promise.all(matchedComponents.filter(function (v) {
      return v.asyncData;
    }).map(function (Component) {
      if (false) {}

      return Component.asyncData(store, router);
    })).then(function () {
      context.state = store.getState();
      resolve(app);
    }).catch(reject);
  }, reject);
  router.onError(reject);
  return promise;
});

/***/ }),

/***/ "58c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_e8edb7d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0db5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_e8edb7d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_e8edb7d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_e8edb7d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "67a7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_8f2fc636_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3db6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_8f2fc636_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_8f2fc636_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_8f2fc636_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "94fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5698");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a76b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_55d60363_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3db1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_55d60363_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_55d60363_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_55d60363_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f22e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5050");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_style_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

},[[0,"manifest","chunk-vendors"]]]);