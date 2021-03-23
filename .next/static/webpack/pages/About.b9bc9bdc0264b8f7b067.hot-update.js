webpackHotUpdate_N_E("pages/About",{

/***/ "./component/About/component/Test.js":
/*!*******************************************!*\
  !*** ./component/About/component/Test.js ***!
  \*******************************************/
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
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\About\\component\\Test.js",
    _this = undefined,
    _s = $RefreshSig$();






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  content: {
    fontFamily: 'Roboto',
    fontSize: '2rem'
  }
});

var Test = function Test(_ref) {
  _s();

  var t = _ref.t,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["t"]);

  var classes = useStyles();
  var mode = props.mode;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: classes.content,
        children: t('title')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
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

_s(Test, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Test;
Test.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])('about')(Test));

var _c;

$RefreshReg$(_c, "Test");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0Fib3V0L2NvbXBvbmVudC9UZXN0LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjb250ZW50IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiVGVzdCIsInQiLCJwcm9wcyIsImNsYXNzZXMiLCJtb2RlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLFNBQU8sRUFBQztBQUNKQyxjQUFVLEVBQUMsUUFEUDtBQUVKQyxZQUFRLEVBQUM7QUFGTDtBQURpQixDQUFELENBQTVCOztBQU9BLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLENBQWdCLFFBQWhCQSxDQUFnQjtBQUFBLE1BQVhDLEtBQVc7O0FBRTNCLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUYyQixNQUt2QlMsSUFMdUIsR0FNdkJGLEtBTnVCLENBS3ZCRSxJQUx1QjtBQVEzQixzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwyQkFFSTtBQUFBLDZCQUVJO0FBQUcsaUJBQVMsRUFBRUQsT0FBTyxDQUFDTixPQUF0QjtBQUFBLGtCQUNDSSxDQUFDLENBQUMsT0FBRDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBL0JEOztHQUFNRCxJO1VBRWNMLFM7OztLQUZkSyxJO0FBaUNOQSxJQUFJLENBQUNLLFNBQUwsR0FBaUI7QUFDYkosR0FBQyxFQUFFSyxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREwsQ0FBakI7QUFJZUMsNEhBQWUsQ0FBQyxPQUFELENBQWYsQ0FBeUJULElBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQWJvdXQuYjliYzliZGMwMjY0YjhmN2IwNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAncmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGNvbnRlbnQ6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBUZXN0ID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICB7dCgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlU3BlZWQ9ezgwMH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlU3BlZWQ9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnMjRweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT17J1JvYm90byd9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e21vZGU9PSdkYXknPydibGFjayc6J3doaXRlJ31cclxuICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXsnVHlwZXdyaXRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRleHQ9e1sgdCgnY29udGV4dDEnKSwgdCgnY29udGV4dDInKV19XHJcbiAgICAgICAgICAgICAgICAvPiAgICovfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblRlc3QucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdhYm91dCcpKFRlc3QpICJdLCJzb3VyY2VSb290IjoiIn0=