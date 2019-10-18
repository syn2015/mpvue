require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stroe__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mutations__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getter__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__getter__);








// 声明使用vuex
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: __WEBPACK_IMPORTED_MODULE_3__state__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_6__getter___default.a,
  mutations: __WEBPACK_IMPORTED_MODULE_5__mutations__["a" /* default */]
}));

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RECEIVE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOVIES_ARR; });
var RECEIVE_LIST = 'receive_list';
var MOVIES_ARR = 'movies_arr';

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_stroe__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_flyio_dist_npm_wx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_flyio_dist_npm_wx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_flyio_dist_npm_wx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_vue__ = __webpack_require__(38);





// 设置vue的提示功能关闭
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

// 声明当前组件的类型
__WEBPACK_IMPORTED_MODULE_3__app_vue__["a" /* default */].mpType = 'app'; // 应用


// 将store对象放置Vue的原型上，为的是每个实例都可以使用
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_1__store_stroe__["a" /* default */];

var fly = new __WEBPACK_IMPORTED_MODULE_2_flyio_dist_npm_wx___default.a();
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$fly = fly;

// 生成应用的实例
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_3__app_vue__["a" /* default */]);

// 挂载整个应用
app.$mount();

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  listTmp: [],
  moviesArr: []
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_type__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datas_list_data__ = __webpack_require__(22);


/* harmony default export */ __webpack_exports__["a"] = ({
  getList: function getList(_ref) {
    var commit = _ref.commit;

    // 触发对应的mutation
    console.log('actions');
    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["b" /* RECEIVE_LIST */], __WEBPACK_IMPORTED_MODULE_1__datas_list_data__["a" /* default */]);
  },
  getMoviesArr: function getMoviesArr(_ref2, data) {
    var commit = _ref2.commit;

    commit(__WEBPACK_IMPORTED_MODULE_0__mutation_type__["a" /* MOVIES_ARR */], data);
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var list_data = [{

  date: 'may 19 2018',
  title: '理念',
  detail_img: '/static/images/detail/carousel/02.jpg',
  avatar: '/static/images/avatar/4.png',
  detail_content: '一群有活力、有理想、有责任、有担当的人组成',
  headImgSrc: '/static/images/detail/carousel/02.jpg',
  author: '钢铁侠 ',
  dataTime: '24time',
  detail_love_image1: '/static/images/icon/chat.png',
  detail_love_image2: '/static/images/icon/view.png',
  love_count: 88,
  attention_count: 66,
  detail: '钢铁战队。。',
  music: {
    dataUrl: 'http://up.mcyt.net/down/46100.mp3', // 音乐链接
    title: 'IF-Ken Arai', // 音乐标题
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
  },
  postId: 0
}, {

  date: 'may 19 2018',
  title: '前端开发',
  detail_img: '/static/images/detail/carousel/01.jpg',
  avatar: '/static/images/avatar/4.png',
  detail_content: '邯郸市软件开发有限公司',
  headImgSrc: '/static/images/detail/carousel/01.jpg',
  author: '美国队长',
  dataTime: '24time',
  detail_love_image1: '/static/images/icon/chat.png',
  detail_love_image2: '/static/images/icon/view.png',
  love_count: 88,
  attention_count: 66,
  detail: '有魅力的老男人。',
  music: {
    dataUrl: 'http://www.ytmp3.cn/down/50395.mp3', // 音乐链接
    title: '一路向北', // 音乐标题
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
  },
  postId: 1
}, {

  date: 'may 19 2018',
  title: '学科介绍',
  detail_img: '/static/images/detail/carousel/03.jpg',
  avatar: '/static/images/avatar/4.png',
  detail_content: 'JavaEE',
  headImgSrc: '/static/images/detail/carousel/03.jpg',
  author: '绿巨人',
  dataTime: '24time',
  detail_love_image1: '/static/images/icon/chat.png',
  detail_love_image2: '/static/images/icon/view.png',
  love_count: 88,
  attention_count: 66,
  detail: '巨无霸教授。',
  music: {
    dataUrl: 'http://www.ytmp3.cn/down/50355.mp3', // 音乐链接
    title: '听海', // 音乐标题
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
  },
  postId: 2
}, {
  date: '2018/3/15 下午 4:30:35',
  title: '贾静雯简介',
  detail_img: '/static/images/detail/list/j2.jpg',
  detail_content: '贾静雯（Alyssa Chia），1974年10月7日出生于台湾省台北市，祖籍天津市，华语影视女演员、节目主持人。1990年，贾静雯因接拍爱之味妞妞甜八宝广告而出道演艺圈；同年，她还出演了个人的首部电视剧《佳家福》。1994年，贾静雯开始担任一系列儿童节目的主持人。1997年，她凭借家庭剧《四千金》获得台湾电视金钟奖最佳新人奖[1]  。2000年，贾静雯主演的古装剧《飞龙在天》获得了台湾电视剧年度收视冠军。',
  detail_love_image1: '/static/images/icon/chat.png',
  detail_love_image2: '/static/images/icon/view.png',
  love_count: 92,
  headImgSrc: '/static/images/detail/list/j2.jpg',
  author: '新华社',
  attention_count: 88,
  avatar: '/static/images/avatar/1.png',
  music: {
    dataUrl: 'http://up.mcyt.net/down/46101.mp3', // 音乐链接
    title: 'Sunset Jesus-Avicii', // 音乐标题
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
  },
  postId: 3
}, {
  date: '2018/3/17 下午3:30:35',
  title: '贾静雯作品展',
  detail_img: '/static/images/detail/list/j3.jpg',
  detail_content: '2001年，贾静雯将工作重心转向内地，并主演了传奇剧《大汉天子》。2002年，她凭借武侠剧《倚天屠龙记》在内地赢得更高关注度[2]  。2003年，贾静雯获得FHM全球百大性感美女亚洲区冠军。2006年，他主演了现代剧《悲伤时唱首歌》。此后几年，贾静雯相继出演了传奇剧《太平公主秘史》、剧情片《不能说的夏天》等影视作品',
  detail_love_image1: '/static/images/icon/chat.png',
  detail_love_image2: '/static/images/icon/view.png',
  love_count: 88,
  attention_count: 66,
  headImgSrc: '/static/images/detail/list/j3.jpg',
  author: '新华社',
  avatar: '/static/images/avatar/2.png',
  music: {
    dataUrl: 'http://up.mcyt.net/down/46102.mp3', // 音乐链接
    title: '汪峰 - 儿时', // 音乐标题
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
  },
  postId: 4
}, {

  date: 'sep 19 2016',
  title: '娱乐新闻',
  detail_img: '/static/images/detail/list/j4.jpg',
  avatar: '/static/images/avatar/3.png',
  detail_content: '2014年，贾静雯与小自己九岁的台湾演员修杰楷相恋[41]  。2015年5月5日，贾静雯的男友修杰楷在微博宣布了贾静雯已身怀有孕的消息，并发出了他与贾静雯和梧桐妹的两张合照，随后，贾静雯转发了此条微博并希望得到大家的祝福[42]  ；同年8月7日，贾静雯以剖宫产方式生下了与修杰楷的第一个女儿“咘咘”，而此前两人已正式注册结婚[43]  。',
  headImgSrc: '/static/images/detail/list/j4.jpg',
  author: '李白3',
  detail_love_image1: '/static/images/icon/chat.png',
  detail_love_image2: '/static/images/icon/view.png',
  love_count: 88,
  attention_count: 66,
  detail: '女神。。。',
  music: {
    dataUrl: 'http://up.mcyt.net/down/46110.mp3', // 音乐链接
    title: '曲婉婷 - 我的歌声里-(电视剧《在线爱》主题曲)', // 音乐标题
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
  },
  postId: 5
}, {

  date: 'sep 19 2016',
  title: '社会活动',
  detail_img: '/static/images/detail/list/j6.jpg',
  avatar: '/static/images/avatar/4.png',
  detail_content: '2012年，贾静雯担任公益大使，发起为弱势儿童和青少年课后照护计划，并为此次活动献唱了个人单曲《许一个愿望》。2014年，贾静雯参加了最终梦想年度时尚魅力女性颁奖盛典，并在典礼上获得了亲情天使奖[50] ',
  headImgSrc: '/static/images/detail/list/j6.jpg',
  author: '新华社',
  detail_love_image1: '/static/images/icon/chat.png',
  detail_love_image2: '/static/images/icon/view.png',
  love_count: 88,
  attention_count: 66,
  detail: '女神2。。。',
  music: {
    dataUrl: 'http://up.mcyt.net/down/46100.mp3', // 音乐链接
    title: 'IF-Ken Arai', // 音乐标题
    coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
  },
  postId: 6
}];

/* harmony default export */ __webpack_exports__["a"] = ({ list_data: list_data });

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_type__ = __webpack_require__(10);


var _RECEIVE_LIST$MOVIES_;



/* harmony default export */ __webpack_exports__["a"] = (_RECEIVE_LIST$MOVIES_ = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_RECEIVE_LIST$MOVIES_, __WEBPACK_IMPORTED_MODULE_1__mutation_type__["b" /* RECEIVE_LIST */], function (state, _ref) {
  var list_data = _ref.list_data;

  state.listTmp = list_data;
  console.log(state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_RECEIVE_LIST$MOVIES_, __WEBPACK_IMPORTED_MODULE_1__mutation_type__["a" /* MOVIES_ARR */], function (state, data) {
  state.moviesArr = data;
  console.log(state);
}), _RECEIVE_LIST$MOVIES_);

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports) {



/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(41);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_app_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f0501a54", Component.options)
  } else {
    hotAPI.reload("data-v-f0501a54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ })
],[18]);
//# sourceMappingURL=app.js.map