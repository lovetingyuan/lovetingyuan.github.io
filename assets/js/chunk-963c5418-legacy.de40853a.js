(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-963c5418"],{

/***/ "5125":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"188f8b5a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Music.vue?vue&type=template&id=b9479284&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h2',[_vm._v("喜欢的音乐")]),_c('ul',{staticClass:"music-list"},_vm._l((_vm.bestSongs),function(song){return _c('li',{key:song.name,staticClass:"music-item clearfix"},[_c('img',{staticClass:"music-img",attrs:{"src":song.cover,"alt":song.name}}),_c('ul',{staticClass:"music-info"},[_c('li',{attrs:{"data-title":"歌曲名"}},[_c('a',{attrs:{"href":song.xiami,"target":"_blank","rel":"noopener"}},[_vm._v(_vm._s(song.name))])]),_c('li',{attrs:{"data-title":"演唱者"}},[_vm._v(_vm._s(song.singer))]),_c('li',{attrs:{"data-title":"专辑年份"}},[_vm._v(_vm._s(song.album)+" - "+_vm._s(song.year))])])])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Music.vue?vue&type=template&id=b9479284&scoped=true&

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
//
//
//
//
//
//
/* harmony default export */ var Musicvue_type_script_lang_js_ = ({
  asyncData: function asyncData(store) {
    return store.Music.$fetchMusic();
  },
  computed: {
    bestSongs: function bestSongs() {
      return this.$store.Music.bestSongs;
    }
  }
});
// CONCATENATED MODULE: ./src/views/Music.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Musicvue_type_script_lang_js_ = (Musicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Music.vue?vue&type=style&index=0&id=b9479284&lang=less&scoped=true&
var Musicvue_type_style_index_0_id_b9479284_lang_less_scoped_true_ = __webpack_require__("f385");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Music.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_Musicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "b9479284",
  null
  
)

/* harmony default export */ var Music = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "793e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f385":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_style_index_0_id_b9479284_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("793e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_style_index_0_id_b9479284_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_style_index_0_id_b9479284_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_index_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Music_vue_vue_type_style_index_0_id_b9479284_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);