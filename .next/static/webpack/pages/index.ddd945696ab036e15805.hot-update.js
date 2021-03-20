webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Public/Banner.js":
/*!************************************!*\
  !*** ./component/Public/Banner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_typewriting_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-typewriting-animation */ "./node_modules/react-typewriting-animation/lib/Typewriter.js");
/* harmony import */ var react_typewriting_animation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\Banner.js",
    _this = undefined,
    _s = $RefreshSig$();






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  content: {
    fontFamily: 'Roboto',
    fontSize: '2rem'
  }
});

var Banner = function Banner(_ref) {
  _s();

  var t = _ref.t,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["t"]);

  var classes = useStyles();
  var mode = props.mode;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: classes.content,
        children: ["I am a front-end developer base in Taipei.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 63
        }, _this), "Open to opportunities."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_4___default.a, {
        rotateSpeed: 800,
        typeSpeed: 80,
        fontSize: '24px',
        fontFamily: 'Roboto',
        color: mode == 'day' ? 'black' : 'white',
        heading: 'Typewriter',
        dataText: [t('context1'), t('context2')]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, _this);
};

_s(Banner, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Banner;
Banner.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])('banner')(Banner));

var _c;

$RefreshReg$(_c, "Banner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9CYW5uZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNvbnRlbnQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJCYW5uZXIiLCJ0IiwicHJvcHMiLCJjbGFzc2VzIiwibW9kZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxTQUFPLEVBQUM7QUFDSkMsY0FBVSxFQUFDLFFBRFA7QUFFSkMsWUFBUSxFQUFDO0FBRkw7QUFEaUIsQ0FBRCxDQUE1Qjs7QUFPQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxDQUFnQixRQUFoQkEsQ0FBZ0I7QUFBQSxNQUFYQyxLQUFXOztBQUU3QixNQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7QUFGNkIsTUFLekJTLElBTHlCLEdBTXpCRixLQU55QixDQUt6QkUsSUFMeUI7QUFRN0Isc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBRUk7QUFBQSw4QkFFSTtBQUFHLGlCQUFTLEVBQUVELE9BQU8sQ0FBQ04sT0FBdEI7QUFBQSw4RUFDOEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFPSSxxRUFBQyxrRUFBRDtBQUNJLG1CQUFXLEVBQUUsR0FEakI7QUFFSSxpQkFBUyxFQUFFLEVBRmY7QUFHSSxnQkFBUSxFQUFFLE1BSGQ7QUFJSSxrQkFBVSxFQUFFLFFBSmhCO0FBS0ksYUFBSyxFQUFFTyxJQUFJLElBQUUsS0FBTixHQUFZLE9BQVosR0FBb0IsT0FML0I7QUFNSSxlQUFPLEVBQUUsWUFOYjtBQU9JLGdCQUFRLEVBQUUsQ0FBRUgsQ0FBQyxDQUFDLFVBQUQsQ0FBSCxFQUFpQkEsQ0FBQyxDQUFDLFVBQUQsQ0FBbEI7QUFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0JILENBaENEOztHQUFNRCxNO1VBRWNMLFM7OztLQUZkSyxNO0FBa0NOQSxNQUFNLENBQUNLLFNBQVAsR0FBbUI7QUFDZkosR0FBQyxFQUFFSyxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREgsQ0FBbkI7QUFJZUMsNEhBQWUsQ0FBQyxRQUFELENBQWYsQ0FBMEJULE1BQTFCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGRkOTQ1Njk2YWIwMzZlMTU4MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAncmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGNvbnRlbnQ6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBCYW5uZXIgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICBJIGFtIGEgZnJvbnQtZW5kIGRldmVsb3BlciBiYXNlIGluIFRhaXBlaS48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIE9wZW4gdG8gb3Bwb3J0dW5pdGllcy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGVTcGVlZD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGVlZD17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9eycyNHB4J31cclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PXsnUm9ib3RvJ31cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17bW9kZT09J2RheSc/J2JsYWNrJzond2hpdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9eydUeXBld3JpdGVyJ31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhVGV4dD17WyB0KCdjb250ZXh0MScpLCB0KCdjb250ZXh0MicpXX1cclxuICAgICAgICAgICAgICAgIC8+ICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5CYW5uZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdiYW5uZXInKShCYW5uZXIpICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=