require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movies_vue__ = __webpack_require__(87);



var movies = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__movies_vue__["a" /* default */]);
movies.$mount();

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_movies_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_775a81b9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_movies_vue__ = __webpack_require__(90);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(88)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_movies_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_775a81b9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_movies_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\movies\\movies.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] movies.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-775a81b9", Component.options)
  } else {
    hotAPI.reload("data-v-775a81b9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

var MOVIE_URL = 'http://t.yushu.im/v2/movie/top250';
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      moviesArr: []
    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    // fly
    this.$fly.get(MOVIE_URL).then(function (response) {
      console.log(response);
      var moviesArr = response.data.subjects;
      console.log(moviesArr);
      _this.$store.dispatch('getMoviesArr', moviesArr);
      _this.moviesArr = moviesArr;
    }).catch(function (error) {
      console.log(error);
    });
  },

  methods: {
    toMoviesDetail: function toMoviesDetail(index) {
      wx.navigateTo({
        url: '/pages/movieDetail/main?index=' + index
      });
    }
  }
});

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.moviesArr), function(item, index) {
    return _c('div', {
      staticClass: "moviesContainer",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "tap": function($event) {
          _vm.toMoviesDetail(index)
        }
      }
    }, [_c('img', {
      staticClass: "movies_img",
      attrs: {
        "src": item.images.large,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "movies_info"
    }, [_c('p', {
      staticClass: "movies_name"
    }, [_vm._v(_vm._s(item.original_title))]), _vm._v(" "), _c('p', {
      staticClass: "movies_year"
    }, [_vm._v("年份: " + _vm._s(item.year))]), _vm._v(" "), _c('p', {
      staticClass: "movies_dir"
    }, [_vm._v("导演: " + _vm._s(item.directors[0].name))])], 1), _vm._v(" "), _c('p', {
      staticClass: "movies_rating"
    }, [_vm._v(_vm._s(item.rating.average))])], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-775a81b9", esExports)
  }
}

/***/ })

},[86]);
//# sourceMappingURL=main.js.map