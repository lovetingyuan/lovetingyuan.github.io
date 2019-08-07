/* eslint-disable */

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
            }
            catch (_a) {
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
                    }
                    else {
                        throw new Error(`Namespace sub module ${key} does not exist`);
                    }
                }
                else { // avoid to trigger getter
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
            if (process.env.NODE_ENV !== 'production') {
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
                }
                else {
                    const getter = Object.getOwnPropertyDescriptor(newModule, key).get;
                    if (typeof getter === 'function') {
                        Module.__module__[key] = getter;
                    }
                    else if (typeof newModule[key] === 'function') {
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
        const vueOption = { __state__: state, __stateGetters__: stateGetters, data: {} };
        const routesPath = routes.join('/');
        Object.keys(Modules).forEach(key => {
            if (/[A-Z]/.test(key[0])) {
                if (!Modules[key])
                    return;
                const [_Module, _state, _stateGetters] = _createStore(Modules[key], routes.concat(key));
                Object.defineProperty(Module, key, {
                    value: _Module,
                    enumerable: true,
                    configurable: false
                });
                state[key] = _state;
                stateGetters[key] = _stateGetters;
            }
            else {
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
                        get() { return vueIns[key]; },
                        enumerable: true
                    };
                    Object.defineProperty(stateGetters, key, descriptor);
                    Object.defineProperty(Module, key, descriptor);
                }
                else if (typeof Modules[key] === 'function') {
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
                    }
                    else {
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
                }
                else {
                    vueOption.data[key] = Modules[key];
                    const descriptor = {
                        get() { return vueIns[key]; },
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
            value: Modules,
        });
        return [Module, state, stateGetters];
    }
    const [_store, state, stateGetters] = _createStore(modules);
    const store = _store;
    if (option && option.strict) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('Only use strict option in development mode!');
        }
        eventBus.$watch(() => state, () => {
            if (!isCommitting && !isReplacing) {
                setTimeout(() => {
                    throw new Error('Only mutation could change state!');
                });
            }
        }, { deep: true, sync: true });
    }
    if (option && Array.isArray(option.plugins)) {
        option.plugins.forEach(plugin => {
            typeof plugin === 'function' && plugin(store);
        });
    }
    // const useDevtools = (option && option.devtools !== undefined) ? option.devtools : Vue.config.devtools
    return store;
}
class VueStorePlugin {
    static install(vue) {
        if (Vue && Vue === vue) {
            console.warn('Do not install the plugin again.');
        }
        Vue = vue;
        Vue.mixin({ beforeCreate() {
            const options = this.$options
            // store injection
            if (options.store) {
            this.$store = typeof options.store === 'function'
                ? options.store()
                : options.store
            } else if (options.parent && options.parent.$store) {
                this.$store = options.parent.$store
            }
        } })
    }
}
VueStorePlugin.createVueStore = createVueStore;

import _Vue from 'vue'
_Vue.use(VueStorePlugin)
import request from './api'

function init(val) {
  if (val && typeof val === 'object') {
    if (val.__init__) {
      return true
    }
    val.__init__ = true
  }
  return val
}

export default function createStore() {
  const store = VueStorePlugin.createVueStore({
    links: init([]),
    set([key, val]) {
      this[key] = val
    },
    async $fetchLinks() {
      if (init(this.links)) {
        const { links } = await request.get('/data/home.json')
        this.set(['links', links])
      }
    },
    Music: {
      bestSongs: init([]),
      set([key, val]) {
        this[key] = val
      },
      async $fetchMusic() {
        if (init(this.bestSongs)) {
          const { best } = await request.get('/data/music.json')
          this.set(['bestSongs', best])
        }
      }
    }
  })
  _Vue.prototype.$store = store
  if (process.env.NODE_ENV !== 'production') {
    console.log('store', store)
  }
  return store
}
