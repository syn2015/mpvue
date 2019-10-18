require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_vue__ = __webpack_require__(43);



var detail = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__detail_vue__["a" /* default */]);

detail.$mount();

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7d14940e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__(65);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7d14940e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d14940e", Component.options)
  } else {
    hotAPI.reload("data-v-7d14940e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datas_isPlay__ = __webpack_require__(64);

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



/* harmony default export */ __webpack_exports__["a"] = ({
  //    onLoad(options){
  //      console.log(options);
  //    }
  data: function data() {
    return {
      detailObj: {},
      isCollected: false, // 标识文章是否被收藏
      isMusicPlay: false // 标识音乐是否播放
    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    console.log(this);
    // 使用this.$mp.query.index取代 onLoad中的options
    this.index = this.$mp.query.index;

    // 预处理工作： 本地是否收藏的缓存
    var oldStorage = wx.getStorageSync('isCollected');
    if (!oldStorage) {
      // 为空
      wx.setStorage({
        key: 'isCollected',
        data: {}
      });
    } else {
      // 用户缓存过
      // oldStorage[this.index] ---> true || false || undefined
      this.isCollected = oldStorage[this.index] ? true : false;
    }
    // 判断当前页面加载的时候音乐是否在播放
    __WEBPACK_IMPORTED_MODULE_2__datas_isPlay__["a" /* default */].pageIndex === this.index && __WEBPACK_IMPORTED_MODULE_2__datas_isPlay__["a" /* default */].isPlay ? this.isMusicPlay = true : this.isMusicPlay = false;

    // 监听音乐的播放和暂停
    wx.onBackgroundAudioPlay(function () {
      console.log('音乐播放');
      // 修改状态
      _this.isMusicPlay = true;
      __WEBPACK_IMPORTED_MODULE_2__datas_isPlay__["a" /* default */].pageIndex = _this.index;
      __WEBPACK_IMPORTED_MODULE_2__datas_isPlay__["a" /* default */].isPlay = true;
    });
    wx.onBackgroundAudioPause(function () {
      console.log('音乐暂停');
      _this.isMusicPlay = false;
      __WEBPACK_IMPORTED_MODULE_2__datas_isPlay__["a" /* default */].isPlay = false;
    });
  },
  mounted: function mounted() {
    console.log(this);
    // 更新state中的数据
    this.detailObj = this.listTmp[this.$mp.query.index];
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapState */])(['listTmp'])),
  methods: {
    handleCollection: function handleCollection() {
      // 修改状态
      var isCollected = !this.isCollected;
      this.isCollected = isCollected;
      var title = isCollected ? '收藏成功' : '取消收藏';
      wx.showToast({
        title: title,
        icon: 'success'
      });

      // 读取之前本地缓存的状态查看是否收藏

      var oldStorage = wx.getStorageSync('isCollected');
      oldStorage[this.index] = isCollected;
      // 将本次设置的结果再缓存到本地
      wx.setStorage({
        key: 'isCollected',
        data: oldStorage
      });
    },
    handleMusicPlay: function handleMusicPlay() {
      // 处理音乐播放
      var isMusicPlay = !this.isMusicPlay;
      this.isMusicPlay = isMusicPlay;
      var _detailObj$music = this.detailObj.music,
          dataUrl = _detailObj$music.dataUrl,
          title = _detailObj$music.title;

      if (isMusicPlay) {
        wx.playBackgroundAudio({
          dataUrl: dataUrl,
          title: title
        });
      } else {
        wx.pauseBackgroundAudio();
      }
    },
    handleShare: function handleShare() {
      wx.showActionSheet({
        itemList: ['分享到朋友圈', '分享到微博', '分享给微信好友']
      });
    }
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  pageIndex: null, // 标识页面的下标
  isPlay: false // 标识页面音乐是否在播放
});

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detailContainer"
  }, [_c('img', {
    staticClass: "detail_img",
    attrs: {
      "src": _vm.isMusicPlay ? _vm.detailObj.music.coverImgUrl : _vm.detailObj.detail_img,
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "music_img",
    attrs: {
      "src": _vm.isMusicPlay ? '/static/images/music/music-start.png' : '/static/images/music/music-stop.png',
      "alt": "",
      "eventid": '0'
    },
    on: {
      "tap": _vm.handleMusicPlay
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "avatar_date"
  }, [_c('img', {
    attrs: {
      "src": _vm.detailObj.avatar,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.detailObj.author))]), _vm._v(" "), _c('span', [_vm._v("发布于")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.detailObj.date))])]), _vm._v(" "), _c('p', {
    staticClass: "company"
  }, [_vm._v(_vm._s(_vm.detailObj.title))]), _vm._v(" "), _c('div', {
    staticClass: "collection_share_container"
  }, [_c('div', {
    staticClass: "collection_share"
  }, [_c('img', {
    attrs: {
      "src": _vm.isCollected ? '/static/images/icon/collection.png' : '/static/images/icon/collection-anti.png',
      "alt": "",
      "eventid": '1'
    },
    on: {
      "tap": _vm.handleCollection
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/icon/share-anti.png",
      "alt": "",
      "eventid": '2'
    },
    on: {
      "tap": _vm.handleShare
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "line"
  })]), _vm._v(" "), _c('Button', {
    attrs: {
      "open-type": "share",
      "mpcomid": '0'
    }
  }, [_vm._v("转发此文章")]), _vm._v(" "), _c('p', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.detailObj.detail_content))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7d14940e", esExports)
  }
}

/***/ })

},[42]);
//# sourceMappingURL=main.js.map