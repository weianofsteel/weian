webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CUSER%5CDesktop%5Cweian%5Cpages%5C_error%5Cindex.js!./":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CUSER%5CDesktop%5Cweian%5Cpages%5C_error%5Cindex.js ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return __webpack_require__(/*! ./pages/_error/index.js */ "./pages/_error/index.js");
        }
      ]);
    

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error/index.js":
/*!*******************************!*\
  !*** ./pages/_error/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\pages\\_error\\index.js",
    _this = undefined;




var Error = function Error(_ref) {
  var statusCode = _ref.statusCode,
      t = _ref.t;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
    children: statusCode ? t('error-with-status', {
      statusCode: statusCode
    }) : t('error-without-status')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c = Error;

Error.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var res, err, statusCode;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = _ref2.res, err = _ref2.err;
            statusCode = null;

            if (res) {
              statusCode = res.statusCode;
            } else if (err) {
              statusCode = err.statusCode;
            }

            return _context.abrupt("return", {
              namespacesRequired: ['common'],
              statusCode: statusCode
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

Error.defaultProps = {
  statusCode: null
};
Error.propTypes = {
  statusCode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])('common')(Error));

var _c;

$RefreshReg$(_c, "Error");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzP2ZhYzQiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19lcnJvci9pbmRleC5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInN0YXR1c0NvZGUiLCJ0IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyx3REFBMEQ7QUFDbkY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLE1BQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLE1BQWVDLENBQWYsUUFBZUEsQ0FBZjtBQUFBLHNCQUNaO0FBQUEsY0FDR0QsVUFBVSxHQUNQQyxDQUFDLENBQUMsbUJBQUQsRUFBc0I7QUFBRUQsZ0JBQVUsRUFBVkE7QUFBRixLQUF0QixDQURNLEdBRVBDLENBQUMsQ0FBQyxzQkFBRDtBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWQ7O0tBQU1GLEs7O0FBUU5BLEtBQUssQ0FBQ0csZUFBTjtBQUFBLCtMQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsZUFBVCxTQUFTQSxHQUFULEVBQWNDLEdBQWQsU0FBY0EsR0FBZDtBQUNsQkosc0JBRGtCLEdBQ0wsSUFESzs7QUFFdEIsZ0JBQUlHLEdBQUosRUFBUztBQUNKSCx3QkFESSxHQUNXRyxHQURYLENBQ0pILFVBREk7QUFFUixhQUZELE1BRU8sSUFBSUksR0FBSixFQUFTO0FBQ1hKLHdCQURXLEdBQ0lJLEdBREosQ0FDWEosVUFEVztBQUVmOztBQU5xQiw2Q0FPZjtBQUNMSyxnQ0FBa0IsRUFBRSxDQUFDLFFBQUQsQ0FEZjtBQUVMTCx3QkFBVSxFQUFWQTtBQUZLLGFBUGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYUFELEtBQUssQ0FBQ08sWUFBTixHQUFxQjtBQUNuQk4sWUFBVSxFQUFFO0FBRE8sQ0FBckI7QUFJQUQsS0FBSyxDQUFDUSxTQUFOLEdBQWtCO0FBQ2hCUCxZQUFVLEVBQUVRLGlEQUFTLENBQUNDLE1BRE47QUFFaEJSLEdBQUMsRUFBRU8saURBQVMsQ0FBQ0UsSUFBVixDQUFlQztBQUZGLENBQWxCO0FBS2VDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCYixLQUExQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19lcnJvci42MDU2NWU5MTg0NTliYzg3NzcxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXFVTRVJcXFxcRGVza3RvcFxcXFx3ZWlhblxcXFxwYWdlc1xcXFxfZXJyb3JcXFxcaW5kZXguanNcIik7XG4gICAgICAgIH1cbiAgICAgIF0pO1xuICAgICIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuXHJcbmNvbnN0IEVycm9yID0gKHsgc3RhdHVzQ29kZSwgdCB9KSA9PiAoXHJcbiAgPHA+XHJcbiAgICB7c3RhdHVzQ29kZVxyXG4gICAgICA/IHQoJ2Vycm9yLXdpdGgtc3RhdHVzJywgeyBzdGF0dXNDb2RlIH0pXHJcbiAgICAgIDogdCgnZXJyb3Itd2l0aG91dC1zdGF0dXMnKX1cclxuICA8L3A+XHJcbilcclxuXHJcbkVycm9yLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcywgZXJyIH0pID0+IHtcclxuICBsZXQgc3RhdHVzQ29kZSA9IG51bGxcclxuICBpZiAocmVzKSB7XHJcbiAgICAoeyBzdGF0dXNDb2RlIH0gPSByZXMpXHJcbiAgfSBlbHNlIGlmIChlcnIpIHtcclxuICAgICh7IHN0YXR1c0NvZGUgfSA9IGVycilcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nXSxcclxuICAgIHN0YXR1c0NvZGUsXHJcbiAgfVxyXG59XHJcblxyXG5FcnJvci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc3RhdHVzQ29kZTogbnVsbCxcclxufVxyXG5cclxuRXJyb3IucHJvcFR5cGVzID0ge1xyXG4gIHN0YXR1c0NvZGU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdjb21tb24nKShFcnJvcikiXSwic291cmNlUm9vdCI6IiJ9