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
              // className={mode=='day'?styles.imgBox:styles.imgBoxNight} 
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
              // className={styles.imgBox} 
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            padding: '1rem'
          },
          children: list
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsInByb3BzIiwic3RhdGUiLCJjb3VudCIsImlzQm94SG92ZXIiLCJoYW5kbGVUaW1lciIsImJpbmQiLCJ0aW1lciIsImhhbmRsZUJveEhvdmVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiY29uc29sZSIsImxvZyIsIm1vZGUiLCJpbWdzcmMiLCJyb3RhdGVCeSIsIndpZHRoIiwiaGVpZ2h0IiwibGlzdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwicGFyc2VJbnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxXQUFLLEVBQUUsQ0FERTtBQUVUQyxnQkFBVSxFQUFFO0FBRkgsS0FBYjtBQUtBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIseUdBQW5CO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0QsSUFBWCx5R0FBYjtBQUNBLFVBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYsSUFBcEIseUdBQXRCO0FBQ0EsVUFBS0csZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JILElBQXRCLHlHQUF4QjtBQVZlO0FBV2xCOzs7O3dDQUVtQjtBQUNoQixXQUFLRCxXQUFMO0FBQ0g7OzsyQ0FFc0I7QUFDbkJLLG1CQUFhLENBQUMsS0FBS0wsV0FBTixDQUFiO0FBQ0g7OztrQ0FFYTtBQUFBOztBQUNWTSxpQkFBVyxDQUFDLFlBQUk7QUFBQyxjQUFJLENBQUNKLEtBQUw7QUFBYyxPQUFwQixFQUFxQixJQUFyQixDQUFYO0FBQ0g7Ozs0QkFFTztBQUNKLFdBQUtLLFFBQUwsQ0FBYyxVQUFDQyxTQUFEO0FBQUEsZUFBYztBQUN4QlYsZUFBSyxFQUFFVSxTQUFTLENBQUNWLEtBQVYsR0FBa0I7QUFERCxTQUFkO0FBQUEsT0FBZDtBQUdIOzs7cUNBRWdCO0FBQ2IsV0FBS1MsUUFBTCxDQUFjO0FBQUNSLGtCQUFVLEVBQUM7QUFBWixPQUFkO0FBQ0FVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtkLEtBQUwsQ0FBV2UsSUFBdkIsRUFBNkIsR0FBN0I7QUFDSDs7O3VDQUVrQjtBQUNmLFdBQUtKLFFBQUwsQ0FBYztBQUFDUixrQkFBVSxFQUFDO0FBQVosT0FBZDtBQUNIOzs7NkJBRVE7QUFBQSx3QkFRRCxLQUFLSCxLQVJKO0FBQUEsVUFHRGdCLE1BSEMsZUFHREEsTUFIQztBQUFBLFVBSURDLFFBSkMsZUFJREEsUUFKQztBQUFBLFVBS0RDLEtBTEMsZUFLREEsS0FMQztBQUFBLFVBTURDLE1BTkMsZUFNREEsTUFOQztBQUFBLFVBT0RKLElBUEMsZUFPREEsSUFQQztBQVVMLFVBQU1LLElBQUksR0FBRyxFQUFiOztBQUVBLFVBQUcsQ0FBQ0osTUFBSixFQUFZO0FBQ1IsZUFBT0ksSUFBUDtBQUNILE9BRkQsTUFFTTtBQUNGLFlBQUcsQ0FBQ0gsUUFBSixFQUFjO0FBQ1YsZUFBSSxJQUFJSSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLElBQUlMLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQUFwQyxFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUN4Q0QsZ0JBQUksQ0FBQ0csSUFBTCxlQUNJO0FBRUk7QUFDQSwwQkFBWSxFQUFFLEtBQUtoQixjQUh2QjtBQUlJLDBCQUFZLEVBQUUsS0FBS0MsZ0JBSnZCLENBS0k7QUFMSjtBQUFBLHdCQU9LZ0IsUUFBUSxDQUFFLEtBQUt2QixLQUFMLENBQVdDLEtBQVgsR0FBbUIsQ0FBckIsQ0FBUixHQUFrQ2MsTUFBTSxDQUFDTSxNQUF6QyxLQUFvREQsQ0FBcEQsZ0JBQ0c7QUFBQSx1Q0FHUTtBQUFLLHFCQUFHLEVBQUVMLE1BQU0sQ0FBQ0ssQ0FBRCxDQUFoQjtBQUFxQix1QkFBSyxFQUFFO0FBQUNJLDBCQUFNLEVBQUUsUUFBVDtBQUFtQlAseUJBQUssRUFBQyxNQUF6QjtBQUFpQ0MsMEJBQU0sRUFBQztBQUF4QztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESCxHQVdBO0FBbEJMLGVBQ1NFLENBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESjtBQXNCSDtBQUNKLFNBekJELE1BeUJNO0FBQ0YsZUFBSSxJQUFJQSxFQUFDLEdBQUcsQ0FBWixFQUFlQSxFQUFDLElBQUlMLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQUFwQyxFQUF1Q0QsRUFBQyxFQUF4QyxFQUE0QztBQUN4Q0QsZ0JBQUksQ0FBQ0csSUFBTCxlQUNJO0FBRUk7QUFDQSwwQkFBWSxFQUFFLEtBQUtoQixjQUh2QjtBQUlJLDBCQUFZLEVBQUUsS0FBS0MsZ0JBSnZCO0FBQUEsd0JBTUtnQixRQUFRLENBQUUsS0FBS3ZCLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQmUsUUFBckIsQ0FBUixHQUF5Q0QsTUFBTSxDQUFDTSxNQUFoRCxLQUEyREQsRUFBM0QsZ0JBQ0c7QUFBSyxxQkFBSyxFQUFFO0FBQUNILHVCQUFLLEVBQUNBLEtBQUssR0FBQ0EsS0FBRCxHQUFPLE9BQW5CO0FBQTRCQyx3QkFBTSxFQUFDQSxNQUFNLEdBQUNBLE1BQUQsR0FBUTtBQUFqRCxpQkFBWjtBQUFBLHVDQUNJO0FBQUsscUJBQUcsRUFBRUgsTUFBTSxDQUFDSyxFQUFELENBQWhCO0FBQXFCLHVCQUFLLEVBQUU7QUFBQ0ksMEJBQU0sRUFBRSxRQUFUO0FBQW1CUCx5QkFBSyxFQUFDLE1BQXpCO0FBQWlDQywwQkFBTSxFQUFDO0FBQXhDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURILEdBSUE7QUFWTCxlQUNTRSxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREo7QUFjSDtBQUNKO0FBQ0o7O0FBRUQsMEJBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsK0JBRUk7QUFBSyxlQUFLLEVBQUU7QUFBQ0ssbUJBQU8sRUFBQztBQUFULFdBQVo7QUFBQSxvQkFFS047QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBV0g7Ozs7RUFoSGtCTyw0Q0FBSyxDQUFDQyxTOztBQW1IZDdCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc2N2JiYjM0OWE1N2FmYmRiNzE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvcHVibGljLm1vZHVsZS5jc3MnO1xyXG5cclxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgIGlzQm94SG92ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVRpbWVyID0gdGhpcy5oYW5kbGVUaW1lci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnRpbWVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCb3hIb3ZlciA9IHRoaXMuaGFuZGxlQm94SG92ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhhbmRsZVRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUaW1lcigpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKT0+e3RoaXMudGltZXIoKTt9LDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pih7XHJcbiAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgKyAxXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJveEhvdmVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQm94SG92ZXI6dHJ1ZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMubW9kZSwgOTk5KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQm94SG92ZXI6ZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGltZ3NyYyxcclxuICAgICAgICAgICAgcm90YXRlQnksXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgIG1vZGVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xyXG5cclxuICAgICAgICBpZighaW1nc3JjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpZighcm90YXRlQnkpIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e21vZGU9PSdkYXknP3N0eWxlcy5pbWdCb3g6c3R5bGVzLmltZ0JveE5pZ2h0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVCb3hIb3Zlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KCB0aGlzLnN0YXRlLmNvdW50IC8gMykgJSBpbWdzcmMubGVuZ3RoID09PSBpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0JveEhvdmVyPT1mYWxzZSAmJiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdzcmNbaV19IHN0eWxlPXt7bWFyZ2luOiAnMCBhdXRvJywgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNCb3hIb3Zlcj09dHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9zdHlsZXMuaW1nRGVzY3JpcHRpb246c3R5bGVzLmltZ0Rlc2NyaXB0aW9uTmlnaHR9PmhlbGxvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBpbWdzcmMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtzdHlsZXMuaW1nQm94fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVCb3hIb3Zlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KCB0aGlzLnN0YXRlLmNvdW50IC8gcm90YXRlQnkpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOndpZHRoP3dpZHRoOic2MDBweCcsIGhlaWdodDpoZWlnaHQ/aGVpZ2h0Oic1MDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3NyY1tpXX0gc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8nLCB3aWR0aDonMTAwJScsIGhlaWdodDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzonMXJlbSd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsOyJdLCJzb3VyY2VSb290IjoiIn0=