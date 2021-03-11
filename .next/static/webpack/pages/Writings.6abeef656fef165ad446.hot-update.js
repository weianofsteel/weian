webpackHotUpdate_N_E("pages/Writings",{

/***/ "./component/Writings/component/Showcase.js":
/*!**************************************************!*\
  !*** ./component/Writings/component/Showcase.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ArticleBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ArticleBlock */ "./component/Writings/component/ArticleBlock.js");
/* harmony import */ var _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/image/writings/dynamic-import.png */ "./public/image/writings/dynamic-import.png");
/* harmony import */ var _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/image/writings/globe.png */ "./public/image/writings/globe.png");
/* harmony import */ var _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Writings\\component\\Showcase.js",
    _this = undefined,
    _s = $RefreshSig$();










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  showcase: {
    marginTop: '1rem'
  },
  link: {
    backgroundColor: '#F5F5F5',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    marginTop: '1rem'
  },
  linkOnHover: {
    backgroundColor: '#1F1F1F',
    opacity: '100%',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    transition: '.4s ease-in-out',
    marginTop: '1rem'
  },
  title: {
    fontFamily: 'Roboto',
    color: 'black'
  },
  titleOnHover: {
    fontFamily: 'Roboto',
    color: 'white'
  },
  description: {
    fontFamily: 'Roboto',
    color: 'black'
  },
  descriptionOnHover: {
    fontFamily: 'Roboto',
    color: 'white'
  }
});

var Showcase = function Showcase(_ref) {
  _s();

  var t = _ref.t,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["t"]);

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      box1 = _React$useState2[0],
      setBox1 = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      box2 = _React$useState4[0],
      setBox2 = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      box3 = _React$useState6[0],
      setBox3 = _React$useState6[1];

  var handleBox1On = function handleBox1On() {
    setBox1(false);
  };

  var handleBox2On = function handleBox2On() {
    setBox2(false);
  };

  var handleBox3On = function handleBox3On() {
    setBox3(false);
  };

  var handleMouseLeave = function handleMouseLeave() {
    setBox1(true);
    setBox2(true);
    setBox3(true);
  };

  var mode = props.mode;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "./",
      underline: "none",
      target: "_blank",
      rel: "noopener",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box1 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox1On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          container: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 7,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: box1 === true ? classes.title : classes.titleOnHover,
              children: "Exploring Next.js : multi-lingual support with next-i18next"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: box1 === true ? classes.description : classes.descriptionOnHover,
              children: "Dynamic import help us cut down loading time when website first render. Next.js provides us a strong feature 'next/dynamic' to do this. Let's check it!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "./",
      underline: "none",
      target: "_blank",
      rel: "noopener",
      className: classes.showcase,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box2 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox2On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          container: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 7,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: box2 === true ? classes.title : classes.titleOnHover,
              children: "Exploring Next.js : dynamic import"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: box2 === true ? classes.description : classes.descriptionOnHover,
              children: "Nowadays multi-lingual support is getting more and more important. Here is an example using next-i18next to implement multi-lingual support to a next.js project..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "./",
      underline: "none",
      target: "_blank",
      rel: "noopener",
      className: classes.showcase,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box3 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox3On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          container: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 5
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 7,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: box3 === true ? classes.title : classes.titleOnHover,
              children: "Exploring Next.js : multi-lingual support with next-i18next"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: box1 === true ? classes.link : classes.linkOnHover,
      onMouseEnter: handleBox1On,
      onMouseLeave: handleMouseLeave,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: t('title1'),
        description: t('description1'),
        image: _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        url: './',
        mode: mode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: t('title2'),
      description: t('description2'),
      image: _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_11___default.a,
      url: './',
      mode: mode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 9
  }, _this);
};

_s(Showcase, "iSExCQP/c9A1Ep5vFeVTbAivHdQ=", false, function () {
  return [useStyles];
});

_c = Showcase;
Showcase.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["withTranslation"])('article')(Showcase));

var _c;

$RefreshReg$(_c, "Showcase");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dyaXRpbmdzL2NvbXBvbmVudC9TaG93Y2FzZS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic2hvd2Nhc2UiLCJtYXJnaW5Ub3AiLCJsaW5rIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJvdmVyZmxvdyIsImxpbmtPbkhvdmVyIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJ0aXRsZSIsImZvbnRGYW1pbHkiLCJjb2xvciIsInRpdGxlT25Ib3ZlciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25PbkhvdmVyIiwiU2hvd2Nhc2UiLCJ0IiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImJveDEiLCJzZXRCb3gxIiwiYm94MiIsInNldEJveDIiLCJib3gzIiwic2V0Qm94MyIsImhhbmRsZUJveDFPbiIsImhhbmRsZUJveDJPbiIsImhhbmRsZUJveDNPbiIsImhhbmRsZU1vdXNlTGVhdmUiLCJtb2RlIiwiaW1nMDEiLCJpbWcwMiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxVQUFRLEVBQUU7QUFDTkMsYUFBUyxFQUFDO0FBREosR0FEZTtBQUl6QkMsTUFBSSxFQUFFO0FBQ0ZDLG1CQUFlLEVBQUUsU0FEZjtBQUVGQyxVQUFNLEVBQUUsTUFGTjtBQUdGQyxTQUFLLEVBQUMsTUFISjtBQUlGQyxZQUFRLEVBQUMsUUFKUDtBQUtGTCxhQUFTLEVBQUM7QUFMUixHQUptQjtBQVd6Qk0sYUFBVyxFQUFFO0FBQ1RKLG1CQUFlLEVBQUMsU0FEUDtBQUVUSyxXQUFPLEVBQUMsTUFGQztBQUdUSixVQUFNLEVBQUUsTUFIQztBQUlUQyxTQUFLLEVBQUMsTUFKRztBQUtUQyxZQUFRLEVBQUMsUUFMQTtBQU1URyxjQUFVLEVBQUUsaUJBTkg7QUFPVFIsYUFBUyxFQUFDO0FBUEQsR0FYWTtBQW9CekJTLE9BQUssRUFBQztBQUNGQyxjQUFVLEVBQUMsUUFEVDtBQUVGQyxTQUFLLEVBQUM7QUFGSixHQXBCbUI7QUF3QnpCQyxjQUFZLEVBQUM7QUFDVEYsY0FBVSxFQUFDLFFBREY7QUFFVEMsU0FBSyxFQUFDO0FBRkcsR0F4Qlk7QUE0QnpCRSxhQUFXLEVBQUM7QUFDUkgsY0FBVSxFQUFDLFFBREg7QUFFUkMsU0FBSyxFQUFDO0FBRkUsR0E1QmE7QUFnQ3pCRyxvQkFBa0IsRUFBQztBQUNmSixjQUFVLEVBQUMsUUFESTtBQUVmQyxTQUFLLEVBQUM7QUFGUztBQWhDTSxDQUFELENBQTVCOztBQXNDQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxDQUFnQixRQUFoQkEsQ0FBZ0I7QUFBQSxNQUFYQyxLQUFXOztBQUUvQixNQUFNQyxPQUFPLEdBQUdyQixTQUFTLEVBQXpCOztBQUYrQix3QkFJTnNCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBSk07QUFBQTtBQUFBLE1BSXZCQyxJQUp1QjtBQUFBLE1BSWpCQyxPQUppQjs7QUFBQSx5QkFNTkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FOTTtBQUFBO0FBQUEsTUFNdkJHLElBTnVCO0FBQUEsTUFNakJDLE9BTmlCOztBQUFBLHlCQVFOTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQVJNO0FBQUE7QUFBQSxNQVF2QkssSUFSdUI7QUFBQSxNQVFqQkMsT0FSaUI7O0FBVS9CLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJMLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJKLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJILFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQlIsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBRSxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FFLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDSCxHQUpEOztBQXRCK0IsTUE2QjNCSyxJQTdCMkIsR0E4QjNCZCxLQTlCMkIsQ0E2QjNCYyxJQTdCMkI7QUFnQy9CLHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUVJLHFFQUFDLDhEQUFEO0FBQ0ksVUFBSSxFQUFDLElBRFQ7QUFFSSxlQUFTLEVBQUMsTUFGZDtBQUdJLFlBQU0sRUFBQyxRQUhYO0FBSUksU0FBRyxFQUFDLFVBSlI7QUFBQSw2QkFNSTtBQUNJLGlCQUFTLEVBQUVWLElBQUksS0FBRyxJQUFQLEdBQVlILE9BQU8sQ0FBQ2pCLElBQXBCLEdBQXlCaUIsT0FBTyxDQUFDWixXQURoRDtBQUVJLG9CQUFZLEVBQUVxQixZQUZsQjtBQUdJLG9CQUFZLEVBQUVHLGdCQUhsQjtBQUFBLCtCQUtJLHFFQUFDLDhEQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFBLGtDQUNJLHFFQUFDLDhEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFXLGNBQUUsRUFBRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSxxRUFBQyw4REFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxjQUFFLEVBQUUsQ0FBZjtBQUFBLG9DQUNJO0FBQUcsdUJBQVMsRUFBRVQsSUFBSSxLQUFHLElBQVAsR0FBWUgsT0FBTyxDQUFDVCxLQUFwQixHQUEwQlMsT0FBTyxDQUFDTixZQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUlJO0FBQUcsdUJBQVMsRUFBRVMsSUFBSSxLQUFHLElBQVAsR0FBWUgsT0FBTyxDQUFDTCxXQUFwQixHQUFnQ0ssT0FBTyxDQUFDSixrQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUE2QkkscUVBQUMsOERBQUQ7QUFDSSxVQUFJLEVBQUMsSUFEVDtBQUVJLGVBQVMsRUFBQyxNQUZkO0FBR0ksWUFBTSxFQUFDLFFBSFg7QUFJSSxTQUFHLEVBQUMsVUFKUjtBQUtJLGVBQVMsRUFBRUksT0FBTyxDQUFDbkIsUUFMdkI7QUFBQSw2QkFPSTtBQUNJLGlCQUFTLEVBQUV3QixJQUFJLEtBQUcsSUFBUCxHQUFZTCxPQUFPLENBQUNqQixJQUFwQixHQUF5QmlCLE9BQU8sQ0FBQ1osV0FEaEQ7QUFFSSxvQkFBWSxFQUFFc0IsWUFGbEI7QUFHSSxvQkFBWSxFQUFFRSxnQkFIbEI7QUFBQSwrQkFLSSxxRUFBQyw4REFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBQSxrQ0FDSSxxRUFBQyw4REFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxjQUFFLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUkscUVBQUMsOERBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQVcsY0FBRSxFQUFFLENBQWY7QUFBQSxvQ0FDSTtBQUFHLHVCQUFTLEVBQUVQLElBQUksS0FBRyxJQUFQLEdBQVlMLE9BQU8sQ0FBQ1QsS0FBcEIsR0FBMEJTLE9BQU8sQ0FBQ04sWUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFJSTtBQUFHLHVCQUFTLEVBQUVXLElBQUksS0FBRyxJQUFQLEdBQVlMLE9BQU8sQ0FBQ0wsV0FBcEIsR0FBZ0NLLE9BQU8sQ0FBQ0osa0JBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCSixlQXlESSxxRUFBQyw4REFBRDtBQUNJLFVBQUksRUFBQyxJQURUO0FBRUksZUFBUyxFQUFDLE1BRmQ7QUFHSSxZQUFNLEVBQUMsUUFIWDtBQUlJLFNBQUcsRUFBQyxVQUpSO0FBS0ksZUFBUyxFQUFFSSxPQUFPLENBQUNuQixRQUx2QjtBQUFBLDZCQU9JO0FBQ0ksaUJBQVMsRUFBRTBCLElBQUksS0FBRyxJQUFQLEdBQVlQLE9BQU8sQ0FBQ2pCLElBQXBCLEdBQXlCaUIsT0FBTyxDQUFDWixXQURoRDtBQUVJLG9CQUFZLEVBQUV1QixZQUZsQjtBQUdJLG9CQUFZLEVBQUVDLGdCQUhsQjtBQUFBLCtCQUtJLHFFQUFDLDhEQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFBLGtDQUNJLHFFQUFDLDhEQUFEO0FBQU0sZ0JBQUksTUFBVjtBQUFXLGNBQUUsRUFBRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSxxRUFBQyw4REFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxjQUFFLEVBQUUsQ0FBZjtBQUFBLG1DQUNJO0FBQUcsdUJBQVMsRUFBRUwsSUFBSSxLQUFHLElBQVAsR0FBWVAsT0FBTyxDQUFDVCxLQUFwQixHQUEwQlMsT0FBTyxDQUFDTixZQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6REosZUFnRkk7QUFDSSxlQUFTLEVBQUVTLElBQUksS0FBRyxJQUFQLEdBQVlILE9BQU8sQ0FBQ2pCLElBQXBCLEdBQXlCaUIsT0FBTyxDQUFDWixXQURoRDtBQUVJLGtCQUFZLEVBQUVxQixZQUZsQjtBQUdJLGtCQUFZLEVBQUVHLGdCQUhsQjtBQUFBLDZCQUtBLHFFQUFDLHFEQUFEO0FBQ0ksYUFBSyxFQUFFZCxDQUFDLENBQUMsUUFBRCxDQURaO0FBRUksbUJBQVcsRUFBRUEsQ0FBQyxDQUFDLGNBQUQsQ0FGbEI7QUFHSSxhQUFLLEVBQUVnQixpRkFIWDtBQUlJLFdBQUcsRUFBRSxJQUpUO0FBS0ksWUFBSSxFQUFFRDtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEZKLGVBOEZJLHFFQUFDLHFEQUFEO0FBQ0ksV0FBSyxFQUFFZixDQUFDLENBQUMsUUFBRCxDQURaO0FBRUksaUJBQVcsRUFBRUEsQ0FBQyxDQUFDLGNBQUQsQ0FGbEI7QUFHSSxXQUFLLEVBQUVpQix3RUFIWDtBQUlJLFNBQUcsRUFBRSxJQUpUO0FBS0ksVUFBSSxFQUFFRjtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5Rko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwR0gsQ0ExSUQ7O0dBQU1oQixRO1VBRWNsQixTOzs7S0FGZGtCLFE7QUE0SU5BLFFBQVEsQ0FBQ21CLFNBQVQsR0FBcUI7QUFDakJsQixHQUFDLEVBQUVtQixpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREQsQ0FBckI7QUFJZUMsNEhBQWUsQ0FBQyxTQUFELENBQWYsQ0FBMkJ2QixRQUEzQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1dyaXRpbmdzLjZhYmVlZjY1NmZlZjE2NWFkNDQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IEFydGljbGVCbG9jayBmcm9tICcuL0FydGljbGVCbG9jaydcclxuaW1wb3J0IGltZzAxIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS93cml0aW5ncy9keW5hbWljLWltcG9ydC5wbmcnXHJcbmltcG9ydCBpbWcwMiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2Uvd3JpdGluZ3MvZ2xvYmUucG5nJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBzaG93Y2FzZToge1xyXG4gICAgICAgIG1hcmdpblRvcDonMXJlbSdcclxuICAgIH0sIFxyXG4gICAgbGluazoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUY1RjUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgbGlua09uSG92ZXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyMxRjFGMUYnLFxyXG4gICAgICAgIG9wYWNpdHk6JzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnLjRzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlT25Ib3Zlcjp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uT25Ib3Zlcjp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBTaG93Y2FzZSA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFsgYm94MSwgc2V0Qm94MV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbIGJveDIsIHNldEJveDJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgWyBib3gzLCBzZXRCb3gzXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDFPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3gxKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3gyT24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94M09uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDMoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MSh0cnVlKTtcclxuICAgICAgICBzZXRCb3gyKHRydWUpO1xyXG4gICAgICAgIHNldEJveDModHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgaHJlZj0nLi8nXHJcbiAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94MT09PXRydWU/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua09uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gxT259XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtib3gxPT09dHJ1ZT9jbGFzc2VzLnRpdGxlOmNsYXNzZXMudGl0bGVPbkhvdmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBsb3JpbmcgTmV4dC5qcyA6IG11bHRpLWxpbmd1YWwgc3VwcG9ydCB3aXRoIG5leHQtaTE4bmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtib3gxPT09dHJ1ZT9jbGFzc2VzLmRlc2NyaXB0aW9uOmNsYXNzZXMuZGVzY3JpcHRpb25PbkhvdmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEeW5hbWljIGltcG9ydCBoZWxwIHVzIGN1dCBkb3duIGxvYWRpbmcgdGltZSB3aGVuIHdlYnNpdGUgZmlyc3QgcmVuZGVyLiBOZXh0LmpzIHByb3ZpZGVzIHVzIGEgc3Ryb25nIGZlYXR1cmUgJ25leHQvZHluYW1pYycgdG8gZG8gdGhpcy4gTGV0J3MgY2hlY2sgaXQhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgaHJlZj0nLi8nXHJcbiAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNob3djYXNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Mj09PXRydWU/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua09uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gyT259XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtib3gyPT09dHJ1ZT9jbGFzc2VzLnRpdGxlOmNsYXNzZXMudGl0bGVPbkhvdmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBsb3JpbmcgTmV4dC5qcyA6IGR5bmFtaWMgaW1wb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2JveDI9PT10cnVlP2NsYXNzZXMuZGVzY3JpcHRpb246Y2xhc3Nlcy5kZXNjcmlwdGlvbk9uSG92ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vd2FkYXlzIG11bHRpLWxpbmd1YWwgc3VwcG9ydCBpcyBnZXR0aW5nIG1vcmUgYW5kIG1vcmUgaW1wb3J0YW50LiBIZXJlIGlzIGFuIGV4YW1wbGUgdXNpbmcgbmV4dC1pMThuZXh0IHRvIGltcGxlbWVudCBtdWx0aS1saW5ndWFsIHN1cHBvcnQgdG8gYSBuZXh0LmpzIHByb2plY3QuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgIGhyZWY9Jy4vJ1xyXG4gICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnIFxyXG4gICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaG93Y2FzZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDM9PT10cnVlP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94M09ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Ym94Mz09PXRydWU/Y2xhc3Nlcy50aXRsZTpjbGFzc2VzLnRpdGxlT25Ib3Zlcn0+RXhwbG9yaW5nIE5leHQuanMgOiBtdWx0aS1saW5ndWFsIHN1cHBvcnQgd2l0aCBuZXh0LWkxOG5leHQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94MT09PXRydWU/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua09uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDFPbn1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXJ0aWNsZUJsb2NrIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3QoJ3RpdGxlMScpfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2Rlc2NyaXB0aW9uMScpfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltZzAxfVxyXG4gICAgICAgICAgICAgICAgdXJsPXsnLi8nfVxyXG4gICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8QXJ0aWNsZUJsb2NrIFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3QoJ3RpdGxlMicpfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2Rlc2NyaXB0aW9uMicpfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltZzAyfVxyXG4gICAgICAgICAgICAgICAgdXJsPXsnLi8nfVxyXG4gICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNob3djYXNlLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignYXJ0aWNsZScpKFNob3djYXNlKSJdLCJzb3VyY2VSb290IjoiIn0=