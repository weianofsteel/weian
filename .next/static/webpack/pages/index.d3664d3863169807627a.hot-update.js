webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Home/Home.js":
/*!********************************!*\
  !*** ./component/Home/Home.js ***!
  \********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Public_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Public/Header */ "./component/Public/Header.js");
/* harmony import */ var _Public_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Public/Banner */ "./component/Public/Banner.js");
/* harmony import */ var _Public_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Public/Drawer */ "./component/Public/Drawer.js");
/* harmony import */ var _Public_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Public/Footer */ "./component/Public/Footer.js");
/* harmony import */ var _About_component_Bio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../About/component/Bio */ "./component/About/component/Bio.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Public_PageLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Public/PageLoader */ "./component/Public/PageLoader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Home\\Home.js",
    _this = undefined,
    _s = $RefreshSig$();










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  dayBackground: {
    backgroundColor: '#FFFFFF',
    color: '#1F1F1F'
  },
  nightBackground: {
    backgroundColor: 'black',
    color: '#FFFFFF'
  },
  body: {
    paddingLeft: '8%',
    paddingRight: '8%'
  }
});
var Home = function Home() {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      drawer = _React$useState2[0],
      setDrawer = _React$useState2[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setDrawer(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setDrawer(false);
  };

  var mode = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.mode;
  });
  var lang = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.lang;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [drawer == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: mode === 'day' ? classes.dayBackground : classes.nightBackground,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_PageLoader__WEBPACK_IMPORTED_MODULE_9__["PageLoader"], {
          mode: mode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
            handleDrawerOpen: handleDrawerOpen,
            mode: mode,
            lang: lang
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '8rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '1rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_About_component_Bio__WEBPACK_IMPORTED_MODULE_7__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '1rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }, _this), drawer == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          height: '100vh',
          backgroundColor: '#1f1f1f'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          handleDrawerClose: handleDrawerClose,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};

_s(Home, "3z7pdNqtoSa8856y7mZq5l2kt7o=", false, function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/***/ }),

/***/ "./component/Home/component/LearnByDoing.js":
false,

/***/ "./component/Home/component/Sharing.js":
false,

/***/ "./component/Home/component/Skill.js":
false,

/***/ "./component/Public/Carousel.js":
false,

/***/ "./component/Public/Scrollup.js":
false,

/***/ "./css/Home.module.css":
false,

/***/ "./node_modules/@material-ui/icons/ArrowBackIos.js":
false,

/***/ "./node_modules/@material-ui/icons/ArrowForwardIos.js":
false,

/***/ "./node_modules/@material-ui/icons/ExpandLess.js":
false,

/***/ "./node_modules/@material-ui/icons/PlayCircleFilled.js":
false,

/***/ "./node_modules/@material-ui/icons/RadioButtonUnchecked.js":
false,

/***/ "./node_modules/@material-ui/icons/Search.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./css/Home.module.css":
false,

/***/ "./public/image/gif/gif10.gif":
false,

/***/ "./public/image/gif/gif4.gif":
false,

/***/ "./public/image/gif/gif5.gif":
false,

/***/ "./public/image/gif/gif6.gif":
false,

/***/ "./public/image/gif/gif7.gif":
false,

/***/ "./public/image/gif/gif8.gif":
false,

/***/ "./public/image/home/Next-night.png":
false,

/***/ "./public/image/home/css-night.png":
false,

/***/ "./public/image/home/css.png":
false,

/***/ "./public/image/home/figma-night.png":
false,

/***/ "./public/image/home/figma.png":
false,

/***/ "./public/image/home/git-night.png":
false,

/***/ "./public/image/home/git.png":
false,

/***/ "./public/image/home/javascript-night.png":
false,

/***/ "./public/image/home/javascript.png":
false,

/***/ "./public/image/home/jest-night.png":
false,

/***/ "./public/image/home/jest.png":
false,

/***/ "./public/image/home/mysql-night.png":
false,

/***/ "./public/image/home/mysql.png":
false,

/***/ "./public/image/home/next.png":
false,

/***/ "./public/image/home/npm-night.png":
false,

/***/ "./public/image/home/npm.png":
false,

/***/ "./public/image/home/php-night.png":
false,

/***/ "./public/image/home/php.png":
false,

/***/ "./public/image/home/react-night.png":
false,

/***/ "./public/image/home/react.png":
false,

/***/ "./public/image/home/symfony-night.png":
false,

/***/ "./public/image/home/symfony.png":
false,

/***/ "./public/image/home/view1.jpeg":
false,

/***/ "./public/image/home/view2.jpeg":
false,

/***/ "./public/image/home/webpack-night.png":
false,

/***/ "./public/image/home/webpack.png":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0hvbWUvSG9tZS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiZGF5QmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibmlnaHRCYWNrZ3JvdW5kIiwiYm9keSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiSG9tZSIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiZHJhd2VyIiwic2V0RHJhd2VyIiwiaGFuZGxlRHJhd2VyT3BlbiIsImhhbmRsZURyYXdlckNsb3NlIiwibW9kZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsYW5nIiwibWFyZ2luVG9wIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsZUFBYSxFQUFDO0FBQ1ZDLG1CQUFlLEVBQUMsU0FETjtBQUVWQyxTQUFLLEVBQUM7QUFGSSxHQURXO0FBS3pCQyxpQkFBZSxFQUFDO0FBQ1pGLG1CQUFlLEVBQUMsT0FESjtBQUVaQyxTQUFLLEVBQUM7QUFGTSxHQUxTO0FBU3pCRSxNQUFJLEVBQUM7QUFDREMsZUFBVyxFQUFDLElBRFg7QUFFREMsZ0JBQVksRUFBQztBQUZaO0FBVG9CLENBQUQsQ0FBNUI7QUFlTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRXRCLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6Qjs7QUFGc0Isd0JBSU1XLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSk47QUFBQTtBQUFBLE1BSWZDLE1BSmU7QUFBQSxNQUlQQyxTQUpPOztBQU10QixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0JELGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSCxHQUZEOztBQUlBLE1BQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1QkYsYUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsTUFBTUcsSUFBSSxHQUFHQyxnRUFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLElBQWpCO0FBQUEsR0FBRCxDQUF4QjtBQUNBLE1BQU1HLElBQUksR0FBR0YsZ0VBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBeEI7QUFFQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxlQUVLUCxNQUFNLElBQUksS0FBVixpQkFDRyxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVJLElBQUksS0FBRyxLQUFQLEdBQWFQLE9BQU8sQ0FBQ1IsYUFBckIsR0FBbUNRLE9BQU8sQ0FBQ0wsZUFBM0Q7QUFBQSxnQ0FFSSxxRUFBQyw2REFBRDtBQUFZLGNBQUksRUFBRVk7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUlJO0FBQUssbUJBQVMsRUFBRVAsT0FBTyxDQUFDSixJQUF4QjtBQUFBLGlDQUNJLHFFQUFDLHNEQUFEO0FBQ0ksNEJBQWdCLEVBQUVTLGdCQUR0QjtBQUVJLGdCQUFJLEVBQUVFLElBRlY7QUFHSSxnQkFBSSxFQUFFRztBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBWUk7QUFBSyxtQkFBUyxFQUFFVixPQUFPLENBQUNKLElBQXhCO0FBQThCLGVBQUssRUFBRTtBQUFDZSxxQkFBUyxFQUFDO0FBQVgsV0FBckM7QUFBQSxpQ0FDSSxxRUFBQyxzREFBRDtBQUNJLGdCQUFJLEVBQUVKO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkosZUFrQkk7QUFBSyxtQkFBUyxFQUFFUCxPQUFPLENBQUNKLElBQXhCO0FBQThCLGVBQUssRUFBRTtBQUFDZSxxQkFBUyxFQUFDO0FBQVgsV0FBckM7QUFBQSxpQ0FDSSxxRUFBQyw0REFBRDtBQUNJLGdCQUFJLEVBQUVKO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJKLGVBd0JJO0FBQUssbUJBQVMsRUFBRVAsT0FBTyxDQUFDSixJQUF4QjtBQUE4QixlQUFLLEVBQUU7QUFBQ2UscUJBQVMsRUFBQztBQUFYLFdBQXJDO0FBQUEsaUNBQ0kscUVBQUMsc0RBQUQ7QUFDSSxnQkFBSSxFQUFFSjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSFIsRUFzQ0tKLE1BQU0sSUFBSSxJQUFWLGlCQUNHLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDZCQUNJO0FBQUssYUFBSyxFQUFFO0FBQUNTLGdCQUFNLEVBQUMsT0FBUjtBQUFpQm5CLHlCQUFlLEVBQUM7QUFBakMsU0FBWjtBQUFBLCtCQUNBLHFFQUFDLHNEQUFEO0FBQ0ksMkJBQWlCLEVBQUVhLGlCQUR2QjtBQUVJLGNBQUksRUFBRUk7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvREgsQ0FyRU07O0dBQU1YLEk7VUFFT1QsUyxFQVlIa0Isd0QsRUFDQUEsd0Q7OztLQWZKVCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQzNjY0ZDM4NjMxNjk4MDc2MjdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vUHVibGljL0hlYWRlcidcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9QdWJsaWMvQmFubmVyJ1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4uL1B1YmxpYy9EcmF3ZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vUHVibGljL0Zvb3RlcidcclxuaW1wb3J0IEJpbyBmcm9tICcuLi9BYm91dC9jb21wb25lbnQvQmlvJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBQYWdlTG9hZGVyIH0gZnJvbSAnLi4vUHVibGljL1BhZ2VMb2FkZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGRheUJhY2tncm91bmQ6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonI0ZGRkZGRicsXHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICB9LFxyXG4gICAgbmlnaHRCYWNrZ3JvdW5kOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJyxcclxuICAgICAgICBjb2xvcjonI0ZGRkZGRidcclxuICAgIH0sXHJcbiAgICBib2R5OntcclxuICAgICAgICBwYWRkaW5nTGVmdDonOCUnLCBcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6JzglJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbZHJhd2VyLCBzZXREcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubW9kZSlcclxuICAgIGNvbnN0IGxhbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxhbmcpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gZmFsc2UgJiZcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGF5QmFja2dyb3VuZDpjbGFzc2VzLm5pZ2h0QmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUxvYWRlciBtb2RlPXttb2RlfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzhyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzEwMHZoJywgYmFja2dyb3VuZENvbG9yOicjMWYxZjFmJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9