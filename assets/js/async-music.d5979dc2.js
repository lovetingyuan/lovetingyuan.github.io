(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["async-music"],{

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5125":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9f1d1c74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Music.vue?vue&type=template&id=f779466e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h2',[_vm._v("喜欢的音乐")]),_c('div',{staticClass:"music-list"},_vm._l((_vm.bestSongs),function(song){return _c('music-item',_vm._b({key:song.name},'music-item',song,false))}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Music.vue?vue&type=template&id=f779466e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9f1d1c74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MusicItem.vue?vue&type=template&id=c82ec17e&scoped=true&
var MusicItemvue_type_template_id_c82ec17e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"music-item",style:({backgroundImage: ("url(" + _vm.cover + ")")})},[_c('table',{staticClass:"music-info-table"},[_c('tbody',[_c('tr',[_c('td',[_vm._v("歌曲名")]),_c('td',[_vm._v("\n          "+_vm._s(_vm.name)+"\n        ")])]),_c('tr',[_c('td',[_vm._v("歌手")]),_c('td',[_vm._v(_vm._s(_vm.singer))])]),_c('tr',[_c('td',[_vm._v("专辑")]),_c('td',[_vm._v("《"+_vm._s(_vm.album)+"》"+_vm._s(_vm.year))])])])])])}
var MusicItemvue_type_template_id_c82ec17e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MusicItem.vue?vue&type=template&id=c82ec17e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MusicItem.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MusicItemvue_type_script_lang_js_ = ({
  props: {
    name: String,
    singer: String,
    album: String,
    year: Number,
    cover: String,
    link: String
  }
});
// CONCATENATED MODULE: ./src/components/MusicItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MusicItemvue_type_script_lang_js_ = (MusicItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/MusicItem.vue?vue&type=style&index=0&id=c82ec17e&lang=less&scoped=true&
var MusicItemvue_type_style_index_0_id_c82ec17e_lang_less_scoped_true_ = __webpack_require__("fdac");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/MusicItem.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MusicItemvue_type_script_lang_js_,
  MusicItemvue_type_template_id_c82ec17e_scoped_true_render,
  MusicItemvue_type_template_id_c82ec17e_scoped_true_staticRenderFns,
  false,
  null,
  "c82ec17e",
  null
  
)

/* harmony default export */ var MusicItem = (component.exports);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("3835");

// EXTERNAL MODULE: ./src/modules/utils.js
var utils = __webpack_require__("080f");

// CONCATENATED MODULE: ./src/modules/music.js



/* harmony default export */ var music = ({
  bestSongs: Object(utils["a" /* init */])([]),

  set(_ref) {
    let _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    this[key] = val;
  },

  $fetchMusic() {
    var _this = this;

    return Object(asyncToGenerator["a" /* default */])(function* () {
      if (Object(utils["a" /* init */])(_this.bestSongs)) {
        const _ref3 = yield utils["b" /* request */].get('/data/music.json'),
              best = _ref3.best;

        _this.set(['bestSongs', best]);
      }
    })();
  }

});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Music.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Musicvue_type_script_lang_js_ = ({
  components: {
    MusicItem: MusicItem
  },

  asyncData(store) {
    store.addModule('Music', music);
    return store.Music.$fetchMusic();
  },

  computed: {
    bestSongs() {
      return this.$store.Music.bestSongs;
    }

  }
});
// CONCATENATED MODULE: ./src/views/Music.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Musicvue_type_script_lang_js_ = (Musicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Music.vue?vue&type=style&index=0&id=f779466e&lang=less&scoped=true&
var Musicvue_type_style_index_0_id_f779466e_lang_less_scoped_true_ = __webpack_require__("f225");

// CONCATENATED MODULE: ./src/views/Music.vue






/* normalize component */

var Music_component = Object(componentNormalizer["a" /* default */])(
  views_Musicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f779466e",
  null
  
)

/* harmony default export */ var Music = __webpack_exports__["default"] = (Music_component.exports);

/***/ }),

/***/ "bee2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f225":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_style_index_0_id_f779466e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("32a6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_style_index_0_id_f779466e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_style_index_0_id_f779466e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_style_index_0_id_f779466e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fdac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MusicItem_vue_vue_type_style_index_0_id_c82ec17e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bee2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MusicItem_vue_vue_type_style_index_0_id_c82ec17e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MusicItem_vue_vue_type_style_index_0_id_c82ec17e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MusicItem_vue_vue_type_style_index_0_id_c82ec17e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);