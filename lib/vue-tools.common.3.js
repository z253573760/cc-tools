((typeof self !== 'undefined' ? self : this)["webpackJsonpvue_tools"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_tools"] || []).push([[3],{

/***/ "3465":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b116":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_style_index_0_id_517a2973_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3465");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_style_index_0_id_517a2973_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_style_index_0_id_517a2973_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_uploader_vue_vue_type_style_index_0_id_517a2973_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dacc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/uploader/src/uploader.vue?vue&type=template&id=517a2973&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"cc-uploader-warpper"},[_c('div',{staticClass:"cc-file-list-warpper"},[_c('transition-group',{staticClass:"cc-file-list-item-warpper",attrs:{"name":"list-complete"}},[_c('div',{key:"cc-uploader",staticClass:"cc-file-list-item"},[(this.fileList.length < _vm.limit)?_c('div',{staticClass:"cc-file-uploader-warpper",style:(_vm.style)},[_c('input',{staticClass:"cc-file-uploader",attrs:{"accept":_vm.accept,"type":"file"},on:{"change":_vm.handlerUpload}}),_c('div',{staticClass:"cc-upload"},[_c('div',{staticClass:"add-icon"},[_vm._v("+")]),(_vm.text)?_c('div',{staticStyle:{"font-size":"12px"},domProps:{"textContent":_vm._s(_vm.text)}}):_vm._e()])]):_vm._e()]),_vm._l((_vm.fileList),function(item,index){return _c('div',{key:item.uuid,staticClass:"cc-file-list-item"},[_c('div',{staticClass:"cc-file-list-item-img-warpper",style:(_vm.style)},[_c('div',{staticClass:"cc-file-action-warpper"},[_c('i',{staticClass:"el-icon-view",on:{"click":function($event){return _vm.preview(index)}}}),_c('i',{staticClass:"el-icon-delete",on:{"click":function($event){return _vm.remove(index)}}})]),(item.percentage === 100)?_c('transition',{attrs:{"name":"fade"}},[_c('img',{attrs:{"src":item.url,"alt":item.uuid}})]):_c('transition',{attrs:{"name":"fade"}},[_c('div',{staticClass:"progress-warpper"},[_c('Progress',{attrs:{"type":"circle","width":_vm.width - 10,"percentage":item.percentage}})],1)])],1)])})],2)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/uploader/src/uploader.vue?vue&type=template&id=517a2973&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("75fc");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("3b8d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("5c96");

// EXTERNAL MODULE: ./packages/utils/img.js
var img = __webpack_require__("2d2d");

// EXTERNAL MODULE: ./packages/utils/tools.js
var tools = __webpack_require__("612d");

// EXTERNAL MODULE: ./packages/utils/type.js + 1 modules
var type = __webpack_require__("1fb8");

// EXTERNAL MODULE: ./packages/utils/log.js
var log = __webpack_require__("3d0b");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./packages/utils/aliOss.js




var aliOss_axios = axios_default.a.create();
function ossUpload(_x, _x2) {
  return _ossUpload.apply(this, arguments);
}

function _ossUpload() {
  _ossUpload = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(file, ossOpts) {
    var cb,
        request,
        uuid,
        src,
        result,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cb = _args.length > 2 && _args[2] !== undefined ? _args[2] : function () {};
            request = new FormData();
            uuid = Object(tools["e" /* generateUUID */])();
            src = "".concat(ossOpts.dir).concat(uuid);
            request.append("OSSAccessKeyId", ossOpts.app_id); // Bucket 拥有者的Access Key Id。

            request.append("name", uuid);
            request.append("policy", ossOpts.policy); // policy规定了请求的表单域的合法性

            request.append("Signature", ossOpts.signature); // 根据Access Key Secret和policy计算的签名信息，OSS验证该签名信息从而验证该Post请求的合法性

            request.append("key", src); // 文件名字，可设置路径

            request.append("region", ossOpts.region);
            request.append("dir", ossOpts.dir);
            request.append("success_action_status", "200"); // 让服务端返回200,不然，默认会返回204

            request.append("file", file, uuid);
            result = "".concat(ossOpts.showurl, "/").concat(src);
            _context.prev = 14;
            _context.next = 17;
            return aliOss_axios.post(ossOpts.showurl, request, {
              onUploadProgress: cb
            });

          case 17:
            return _context.abrupt("return", {
              uuid: uuid,
              url: result,
              err: null
            });

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](14);
            console.log("上传OSS失败", _context.t0);
            return _context.abrupt("return", {
              err: _context.t0
            });

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[14, 20]]);
  }));
  return _ossUpload.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/uploader/src/uploader.vue?vue&type=script&lang=js&





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
//
//
//






/* harmony default export */ var uploadervue_type_script_lang_js_ = ({
  name: "CcUploader",
  components: {
    Progress: element_ui_common["Progress"]
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 100
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    accept: {
      type: String,
      default: ".jpg,.jpeg,.png"
    },
    limit: {
      type: Number,
      default: 6
    },
    ossOpts: {
      type: Object,
      default: null
    },
    beforeUpload: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    beforeRemove: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    onPreview: {
      type: Function,
      default: function _default() {}
    },
    onSuccess: {
      type: Function,
      default: function _default() {}
    },
    onError: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      fileList: []
    };
  },
  created: function created() {
    this.init();
  },
  computed: {
    style: function style() {
      return {
        width: "".concat(this.width, "px"),
        height: "".concat(this.width, "px")
      };
    }
  },
  methods: {
    init: function init() {
      this.fileList = this.list.map(function (_) {
        return {
          uuid: Object(tools["e" /* generateUUID */])(),
          percentage: 100,
          url: _
        };
      });
    },
    remove: function () {
      var _remove = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(index) {
        var canRemove;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.beforeRemove(Object(objectSpread["a" /* default */])({}, this.fileList[index]), index);

              case 2:
                canRemove = _context.sent;

                if (canRemove) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                this.fileList.splice(index, 1);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function remove(_x) {
        return _remove.apply(this, arguments);
      }

      return remove;
    }(),
    preview: function preview(index) {
      var result = this.fileList[index];
      this.onPreview(Object(objectSpread["a" /* default */])({}, result), index);
    },
    handlerBeforeUpload: function () {
      var _handlerBeforeUpload = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(file) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.beforeUpload(file);

              case 3:
                result = _context2.sent;

                if (!Object(type["c" /* isFile */])(result)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", result);

              case 6:
                Object(log["a" /* warn */])("beforeUpload 返回的结果不是一个有效的file对象");
                return _context2.abrupt("return", false);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                Object(log["a" /* warn */])("beforeUolader ".concat(_context2.t0));
                return _context2.abrupt("return", false);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function handlerBeforeUpload(_x2) {
        return _handlerBeforeUpload.apply(this, arguments);
      }

      return handlerBeforeUpload;
    }(),
    handlerUpload: function () {
      var _handlerUpload = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(e) {
        var _this = this;

        var files, file, fileBeforeUpload, uuid, result, timer;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                files = e.target.files;
                file = files[0];
                e.target.value = "";
                _context3.next = 5;
                return this.handlerBeforeUpload(file);

              case 5:
                fileBeforeUpload = _context3.sent;

                if (fileBeforeUpload) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return");

              case 8:
                if (this.ossOpts) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return");

              case 10:
                uuid = Object(tools["e" /* generateUUID */])();
                this.fileList = [].concat(Object(toConsumableArray["a" /* default */])(this.fileList), [{
                  uuid: uuid,
                  url: "",
                  percentage: 0
                }]);
                _context3.next = 14;
                return this.$nextTick();

              case 14:
                _context3.next = 16;
                return ossUpload(fileBeforeUpload, this.ossOpts, function (progressEvent) {
                  var complete = progressEvent.loaded / progressEvent.total * 60 | 0;
                  _this.fileList[_this.fileList.length - 1].percentage = complete;
                });

              case 16:
                result = _context3.sent;

                if (!result.err) {
                  _context3.next = 21;
                  break;
                }

                this.onError(result.err, fileBeforeUpload);
                setTimeout(function () {
                  _this.fileList.pop();
                }, 2000);
                return _context3.abrupt("return");

              case 21:
                timer = setInterval(function () {
                  if (_this.fileList[_this.fileList.length - 1].percentage >= 95) {
                    clearInterval(timer);
                    return;
                  }

                  _this.fileList[_this.fileList.length - 1].percentage = _this.fileList[_this.fileList.length - 1].percentage + 1;
                }, 500);
                Object(img["b" /* preLoadImg */])(result.url, function () {
                  clearInterval(timer);
                  _this.fileList[_this.fileList.length - 1].url = result.url;
                  _this.fileList[_this.fileList.length - 1].percentage = 100;

                  _this.onSuccess(result.url, fileBeforeUpload);
                });

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handlerUpload(_x3) {
        return _handlerUpload.apply(this, arguments);
      }

      return handlerUpload;
    }()
  }
});
// CONCATENATED MODULE: ./packages/components/uploader/src/uploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_uploadervue_type_script_lang_js_ = (uploadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/uploader/src/uploader.vue?vue&type=style&index=0&id=517a2973&lang=scss&scoped=true&
var uploadervue_type_style_index_0_id_517a2973_lang_scss_scoped_true_ = __webpack_require__("b116");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/uploader/src/uploader.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_uploadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "517a2973",
  null
  
)

/* harmony default export */ var uploader = (component.exports);
// CONCATENATED MODULE: ./packages/components/uploader/index.js


/* istanbul ignore next */

uploader.install = function (Vue) {
  Vue.component(uploader.name, uploader);
};

/* harmony default export */ var components_uploader = __webpack_exports__["default"] = (uploader);

/***/ })

}]);
//# sourceMappingURL=vue-tools.common.3.js.map