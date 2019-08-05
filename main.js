// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K/mD":[function(require,module,exports) {

        var $00f579 = exports.default || module.exports;
      
      if (typeof $00f579 === 'function') {
        $00f579 = $00f579.options;
      }
    
        /* template */
        Object.assign($00f579, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('nav',[_c('ul',[_c('router-link',{attrs:{"tag":"li","to":"/"}},[_vm._v("Home")]),_vm._v(" "),_c('router-link',{attrs:{"tag":"li","to":"/about"}},[_vm._v("About")])],1)])])}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-00f579",
            functional: undefined
          };
        })());
      
},{}],"Js2s":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Header = _interopRequireDefault(require("./components/Header.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var _default = {
  components: {
    appHeader: _Header.default
  },

  data() {
    return {
      date: null
    };
  },

  created() {
    const url = 'https://1650493675298486.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/common_data_proxy/test2/';
    fetch(url).then(res => res.json()).then(data => {
      this.date = data.date;
    });
  }

};
exports.default = _default;
        var $62780d = exports.default || module.exports;
      
      if (typeof $62780d === 'function') {
        $62780d = $62780d.options;
      }
    
        /* template */
        Object.assign($62780d, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('app-header'),_vm._v(" "),_c('main',[_c('transition',{attrs:{"name":"slide-fade","mode":"out-in"}},[_c('router-view')],1)],1)],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-62780d",
            functional: undefined
          };
        })());
      
},{"./components/Header.vue":"K/mD"}],"LVu9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const request = {
  get(url) {
    const baseUrl = typeof location === 'object' ? location.origin : this.origin;
    return fetch(baseUrl + url).then(res => res.json());
  }

};
var _default = request;
exports.default = _default;
},{}],"XQhA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(require("../api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var _default = {
  asyncData(store) {
    return store.$fetchLinks('/data/home.json');
  },

  computed: {
    homeLinks() {
      return this.$store.links;
    }

  }
};
exports.default = _default;
        var $783cde = exports.default || module.exports;
      
      if (typeof $783cde === 'function') {
        $783cde = $783cde.options;
      }
    
        /* template */
        Object.assign($783cde, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',_vm._l((_vm.homeLinks),function(link){return _c('li',{key:link.url},[_c('a',{attrs:{"href":link.url,"target":"_blank"}},[_vm._v(_vm._s(link.name))])])}),0)])}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"../api":"LVu9"}],"3Fhe":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"21/1":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"3Fhe"}],"hPM2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vue = _interopRequireDefault(require("vue"));

var _Home = _interopRequireDefault(require("./views/Home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.use(_vueRouter.default);

var _default = () => {
  return new _vueRouter.default({
    mode: 'history',
    routes: [{
      path: '/',
      component: _Home.default
    }, {
      path: '/about',
      component: () => require("_bundle_loader")(require.resolve('./views/About.vue'))
    }]
  });
};

exports.default = _default;
},{"./views/Home.vue":"XQhA","_bundle_loader":"21/1","./views/About.vue":[["About.490d48e7.js","15h9"],"15h9"]}],"iz0v":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _vue = _interopRequireDefault(require("vue"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Vue;

function createVueStore(modules, option) {
  if (!Vue) {
    throw new Error('Please install VueStorePlugin first.');
  }

  let isCommitting = false;
  let isGetting = false;
  let isReplacing = false;
  let subscribeName = '';
  const eventBus = new Vue();
  const base = {
    addModule(path, _module) {
      const routes = path.split('.');
      const moduleName = routes.pop();
      let parentModule = store;
      routes.forEach(r => {
        parentModule = parentModule[r];
      });
      Object.defineProperty(parentModule, moduleName, {
        value: _createStore(_module, routes.concat(moduleName))[0],
        enumerable: true,
        configurable: true // allow to delete dynamic module

      });
      return parentModule[moduleName];
    },

    removeModule(path) {
      'use strict';

      const routes = path.split('.');
      const moduleName = routes.pop();
      let parentModule = store;
      routes.forEach(r => {
        parentModule = parentModule[r];
      });

      try {
        const vueIns = parentModule[moduleName].__vue__;
        delete parentModule[moduleName];
        vueIns.$destroy();
      } catch (_a) {
        throw new Error(`Only dynamic module can be removed while ${path} is an initial module.`);
      }
    },

    subscribe(listener) {
      if (!subscribeName) {
        subscribeName = 'vuestore-mutation-action-subscribe-event';
      }

      const _listener = (data, state) => {
        listener(data, state);
      };

      eventBus.$on(subscribeName, _listener);
      return () => eventBus.$off(subscribeName, _listener);
    },

    replaceState(state, _store = store) {
      isReplacing = true;
      const vueInstance = _store.__vue__;
      Object.keys(state).forEach(key => {
        if (/[A-Z]/.test(key[0])) {
          const replaceState = base.replaceState;

          if (_store[key]) {
            replaceState(state[key], _store[key]);
          } else {
            throw new Error(`Namespace sub module ${key} does not exist`);
          }
        } else {
          // avoid to trigger getter
          const getter = Object.getOwnPropertyDescriptor(state, key).get;

          if (typeof getter !== 'function' && typeof state[key] !== 'function') {
            vueInstance.$set(vueInstance, key, state[key]);
          }
        }
      });
      isReplacing = false;
    },

    watch(fn, cb, option) {
      const getter = fn.bind(stateGetters);
      return eventBus.$watch(getter, cb, option);
    },

    getState() {
      if (process.env.NODE_ENV !== 'development') {
        console.warn('Only use getState in development mode.');
      }

      return JSON.parse(JSON.stringify(state));
    },

    hotUpdate(path, _module) {
      const newModule = typeof path === 'string' ? _module : path;
      const routesPath = typeof path === 'string' ? path : '';
      const routes = routesPath.split('/');
      let Module = store;
      routes.forEach(r => {
        Module = Module[r];
      });
      Object.keys(Module.__module__).forEach(k => {
        if (typeof Module.__module__[k] === 'function') {
          delete Module.__module__[k];
        }
      });
      Object.keys(newModule).forEach(key => {
        if (/[A-Z]/.test(key[0])) {
          const hotUpdate = base.hotUpdate;
          hotUpdate(routesPath + '/' + key, newModule[key]);
        } else {
          const getter = Object.getOwnPropertyDescriptor(newModule, key).get;

          if (typeof getter === 'function') {
            Module.__module__[key] = getter;
          } else if (typeof newModule[key] === 'function') {
            Module.__module__[key] = newModule[key];
          }
        }
      });
    }

  };

  function _createStore(Modules, routes = []) {
    const Module = routes.length ? {} : Object.create(base);
    const state = {};
    const stateGetters = {};
    const vueOption = {
      __state__: state,
      __stateGetters__: stateGetters,
      data: {}
    };
    const routesPath = routes.join('/');
    Object.keys(Modules).forEach(key => {
      if (/[A-Z]/.test(key[0])) {
        if (!Modules[key]) return;

        const [_Module, _state, _stateGetters] = _createStore(Modules[key], routes.concat(key));

        Object.defineProperty(Module, key, {
          value: _Module,
          enumerable: true,
          configurable: false
        });
        state[key] = _state;
        stateGetters[key] = _stateGetters;
      } else {
        const getter = Object.getOwnPropertyDescriptor(Modules, key).get;

        if (typeof getter === 'function') {
          delete Modules[key];
          Modules[key] = getter;
          vueOption.computed = vueOption.computed || {};

          vueOption.computed[key] = function () {
            isGetting = true;
            const value = Modules[key].call(stateGetters);
            isGetting = false;
            return value;
          };

          const descriptor = {
            get() {
              return vueIns[key];
            },

            enumerable: true
          };
          Object.defineProperty(stateGetters, key, descriptor);
          Object.defineProperty(Module, key, descriptor);
        } else if (typeof Modules[key] === 'function') {
          vueOption.methods = vueOption.methods || {};

          if (key[0] === '$') {
            Module[key] = function (payload) {
              if (subscribeName) {
                eventBus.$emit(subscribeName, {
                  actionType: routesPath ? `${routesPath}/${key}` : key,
                  payload
                }, state);
              }

              return Modules[key].call(Module, payload);
            };
          } else {
            Module[key] = function (payload) {
              isCommitting = true;

              if (subscribeName) {
                eventBus.$emit(subscribeName, {
                  type: routesPath ? `${routesPath}/${key}` : key,
                  payload
                }, state);
              }

              Modules[key].call(state, payload);
              isCommitting = false;
            };
          }
        } else {
          vueOption.data[key] = Modules[key];
          const descriptor = {
            get() {
              return vueIns[key];
            },

            set(val) {
              vueIns[key] = val;
            },

            enumerable: true
          };
          Object.defineProperty(state, key, descriptor);
          Object.defineProperty(stateGetters, key, descriptor);
          Object.defineProperty(Module, key, descriptor);
        }
      }
    });
    const vueIns = new Vue(vueOption);
    Object.defineProperty(Module, '__vue__', {
      value: vueIns
    });
    Object.defineProperty(Module, '__module__', {
      value: Modules
    });
    return [Module, state, stateGetters];
  }

  const [_store, state, stateGetters] = _createStore(modules);

  const store = _store;

  if (option && option.strict) {
    if (process.env.NODE_ENV !== 'development') {
      console.warn('Only use strict option in development mode!');
    }

    eventBus.$watch(() => state, () => {
      if (!isCommitting && !isReplacing) {
        setTimeout(() => {
          throw new Error('Only mutation could change state!');
        });
      }
    }, {
      deep: true,
      sync: true
    });
  }

  if (option && Array.isArray(option.plugins)) {
    option.plugins.forEach(plugin => {
      typeof plugin === 'function' && plugin(store);
    });
  } // const useDevtools = (option && option.devtools !== undefined) ? option.devtools : Vue.config.devtools


  return store;
}

class VueStorePlugin {
  static install(vue) {
    if (Vue && Vue === vue) {
      console.warn('Do not install the plugin again.');
    }

    Vue = vue;
    Vue.mixin({
      beforeCreate() {
        const options = this.$options; // store injection

        if (options.store) {
          this.$store = typeof options.store === 'function' ? options.store() : options.store;
        } else if (options.parent && options.parent.$store) {
          this.$store = options.parent.$store;
        }
      }

    });
  }

}

VueStorePlugin.createVueStore = createVueStore;

_vue.default.use(VueStorePlugin);

function init(val) {
  if (val && typeof val === 'object') {
    if (val.__init__) {
      return true;
    }

    val.__init__ = true;
  }

  return val;
}

function createStore() {
  const store = VueStorePlugin.createVueStore({
    links: init([]),

    setLinks(links) {
      this.links = links;
    },

    async $fetchLinks() {
      if (init(this.links)) {
        const {
          links
        } = await _api.default.get('/data/home.json');
        this.setLinks(links);
      }
    }

  });
  _api.default.origin || Object.defineProperty(_api.default, 'origin', {
    get() {
      return store.origin;
    }

  });
  _vue.default.prototype.$store = store;
  return store;
}
},{"./api":"LVu9"}],"epB2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _App = _interopRequireDefault(require("./App.vue"));

var _vue = _interopRequireDefault(require("vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("regenerator-runtime/runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.mixin({
  beforeMount() {
    const {
      asyncData
    } = this.$options;

    if (asyncData) {
      this.asyncDataPromise = asyncData(this.$store, this.$route);
    }
  },

  beforeRouteUpdate(to, from, next) {
    const {
      asyncData
    } = this.$options;

    if (asyncData) {
      asyncData(this.$store, to).then(next).catch(next);
    } else {
      next();
    }
  }

});

const createApp = () => {
  return new _vue.default({
    render: h => h(_App.default),
    router: (0, _router.default)(),
    store: (0, _store.default)()
  });
};

if (typeof window === 'object' && window.document) {
  const app = createApp();

  if (window.__INITIAL_STATE__) {
    app.$store.replaceState(window.__INITIAL_STATE__);
  }

  app.$router.onReady(() => {
    app.$mount('#app');
  });
}

class Deferred {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }

}

var _default = context => {
  const app = createApp();
  const {
    store,
    router
  } = app.$options;
  store.origin = context.origin;
  router.push(context.url);
  const {
    promise,
    reject,
    resolve
  } = new Deferred();
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents();
    Promise.all(matchedComponents.filter(v => v.asyncData).map(Component => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Fetching data for ${Component.__file} ...`);
      }

      return Component.asyncData(store, router);
    })).then(() => {
      context.state = store.getState();
      resolve(app);
    }).catch(reject);
  }, reject);
  router.onError(reject);
  return promise;
};

exports.default = _default;
},{"./App.vue":"Js2s","./router":"hPM2","./store":"iz0v"}],"gIV6":[function(require,module,exports) {
var fs = require('fs');

module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    fs.readFile(__dirname + bundle, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        // wait for the next event loop iteration, so we are sure
        // the current module is fully loaded
        setImmediate(function () {
          resolve(data);
        });
      }
    });
  }).then(function (code) {
    new Function('', code)();
  });
};
},{}],0:[function(require,module,exports) {
var b=require("21/1");b.register("js",require("gIV6"));
},{}]},{},[0,"epB2"], null)