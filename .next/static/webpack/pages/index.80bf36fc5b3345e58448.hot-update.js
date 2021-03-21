webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Public/Carousel.js":
/*!**************************************!*\
  !*** ./component/Public/Carousel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _css_public_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../css/public.module.css */ "./css/public.module.css");
/* harmony import */ var _css_public_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_public_module_css__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\Carousel.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Carousel = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  function Carousel(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Carousel);

    _this = _super.call(this, props);
    _this.state = {
      count: 0,
      isBoxHover: false
    };
    _this.handleTimer = _this.handleTimer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.timer = _this.timer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleBoxHover = _this.handleBoxHover.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleMouseLeave = _this.handleMouseLeave.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.handleTimer);
    }
  }, {
    key: "handleTimer",
    value: function handleTimer() {
      var _this2 = this;

      setInterval(function () {
        _this2.timer();
      }, 1000);
    }
  }, {
    key: "timer",
    value: function timer() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "handleBoxHover",
    value: function handleBoxHover() {
      this.setState({
        isBoxHover: true
      });
      console.log(this.props.mode, 999);
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      this.setState({
        isBoxHover: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imgsrc = _this$props.imgsrc,
          rotateBy = _this$props.rotateBy,
          width = _this$props.width,
          height = _this$props.height,
          mode = _this$props.mode;
      var list = [];

      if (!imgsrc) {
        return list;
      } else {
        if (!rotateBy) {
          for (var i = 0; i <= imgsrc.length - 1; i++) {
            list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: mode == 'day' ? _css_public_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.imgBox : _css_public_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.imgBoxNight,
              onMouseEnter: this.handleBoxHover,
              onMouseLeave: this.handleMouseLeave // style={{width:'100%', height:'100%'}}
              ,
              children: parseInt(this.state.count / 3) % imgsrc.length === i ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: imgsrc[i],
                  style: {
                    margin: '0 auto',
                    width: '100%',
                    height: '100%'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, this) : ''
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 25
            }, this));
          }
        } else {
          for (var _i = 0; _i <= imgsrc.length - 1; _i++) {
            list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _css_public_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.imgBox,
              onMouseEnter: this.handleBoxHover,
              onMouseLeave: this.handleMouseLeave,
              children: parseInt(this.state.count / rotateBy) % imgsrc.length === _i ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  width: width ? width : '600px',
                  height: height ? height : '500px'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: imgsrc[_i],
                  style: {
                    margin: '0 auto',
                    width: '100%',
                    height: '100%'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, this) : ''
            }, _i, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 25
            }, this));
          }
        }
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
          container: true,
          justify: "center",
          alignItems: "center",
          children: this.state.isBoxHover == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "hllo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, this);
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwic3RhdGUiLCJjb3VudCIsImlzQm94SG92ZXIiLCJoYW5kbGVUaW1lciIsImJpbmQiLCJ0aW1lciIsImhhbmRsZUJveEhvdmVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiY29uc29sZSIsImxvZyIsIm1vZGUiLCJpbWdzcmMiLCJyb3RhdGVCeSIsIndpZHRoIiwiaGVpZ2h0IiwibGlzdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwic3R5bGVzIiwiaW1nQm94IiwiaW1nQm94TmlnaHQiLCJwYXJzZUludCIsIm1hcmdpbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQUNGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFLENBREU7QUFFVEMsZ0JBQVUsRUFBRTtBQUZILEtBQWI7QUFLQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLHlHQUFuQjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdELElBQVgseUdBQWI7QUFDQSxVQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JGLElBQXBCLHlHQUF0QjtBQUNBLFVBQUtHLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCSCxJQUF0Qix5R0FBeEI7QUFWZTtBQVdsQjs7Ozt3Q0FFbUI7QUFDaEIsV0FBS0QsV0FBTDtBQUNIOzs7MkNBRXNCO0FBQ25CSyxtQkFBYSxDQUFDLEtBQUtMLFdBQU4sQ0FB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QUNLLEVBQUQsQ0FBaEI7QUFBcUIsdUJBQUssRUFBRTtBQUFDTywwQkFBTSxFQUFFLFFBQVQ7QUFBbUJWLHlCQUFLLEVBQUMsTUFBekI7QUFBaUNDLDBCQUFNLEVBQUM7QUFBeEM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREgsR0FJQTtBQVZMLGVBQ1NFLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESjtBQWNIO0FBQ0o7QUFDSjs7QUFFRCwwQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwrQkFFSSxxRUFBQyw4REFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0IsaUJBQU8sRUFBQyxRQUF4QjtBQUFpQyxvQkFBVSxFQUFDLFFBQTVDO0FBQUEsb0JBS0ssS0FBS3BCLEtBQUwsQ0FBV0UsVUFBWCxJQUF1QixJQUF2QixpQkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFnQkg7Ozs7RUFySGtCMEIsNENBQUssQ0FBQ0MsUzs7QUF3SGQvQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MGJmMzZmYzViMzM0NWU1ODQ0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL3B1YmxpYy5tb2R1bGUuY3NzJztcclxuXHJcbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvdW50OiAwLFxyXG4gICAgICAgICAgICBpc0JveEhvdmVyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaW1lciA9IHRoaXMuaGFuZGxlVGltZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy50aW1lci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQm94SG92ZXIgPSB0aGlzLmhhbmRsZUJveEhvdmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gdGhpcy5oYW5kbGVNb3VzZUxlYXZlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oYW5kbGVUaW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVGltZXIoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLnRpbWVyKCk7fSwxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpPT4oe1xyXG4gICAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50ICsgMVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVCb3hIb3ZlcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0JveEhvdmVyOnRydWV9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLm1vZGUsIDk5OSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTW91c2VMZWF2ZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0JveEhvdmVyOmZhbHNlfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpbWdzcmMsXHJcbiAgICAgICAgICAgIHJvdGF0ZUJ5LFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICBtb2RlXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgaWYoIWltZ3NyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gbGlzdFxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYoIXJvdGF0ZUJ5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGltZ3NyYy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9zdHlsZXMuaW1nQm94OnN0eWxlcy5pbWdCb3hOaWdodH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlQm94SG92ZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZT17e3dpZHRoOicxMDAlJywgaGVpZ2h0OicxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIDMpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNCb3hIb3Zlcj09ZmFsc2UgJiYgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nc3JjW2ldfSBzdHlsZT17e21hcmdpbjogJzAgYXV0bycsIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIH0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQm94SG92ZXI9PXRydWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09J2RheSc/c3R5bGVzLmltZ0Rlc2NyaXB0aW9uOnN0eWxlcy5pbWdEZXNjcmlwdGlvbk5pZ2h0fT5oZWxsbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ30gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ0JveH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlQm94SG92ZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIHJvdGF0ZUJ5KSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDp3aWR0aD93aWR0aDonNjAwcHgnLCBoZWlnaHQ6aGVpZ2h0P2hlaWdodDonNTAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdzcmNbaV19IHN0eWxlPXt7bWFyZ2luOiAnMCBhdXRvJywgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5pc0JveEhvdmVyPT1mYWxzZSYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXNCb3hIb3Zlcj09dHJ1ZSYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+aGxsbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsOyJdLCJzb3VyY2VSb290IjoiIn0=