webpackHotUpdate_N_E("pages/_app",{

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = exports.nextI18Next = void 0;

var NextI18Next = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/commonjs/index.js")["default"];

var localeSubpaths = __webpack_require__(/*! next/config */ "./node_modules/next/config.js")["default"]().publicRuntimeConfig.localeSubpaths;

var path = __webpack_require__(/*! path */ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js");

module.exports = new NextI18Next({
  otherLanguages: ['zhHant'],
  localeSubpaths: localeSubpaths,
  localePath: path.resolve('./public/static/locales')
});
var nextI18Next = new NextI18Next({
  otherLanguages: ['zhHant'],
  localeSubpaths: localeSubpaths,
  localePath: path.resolve('./public/static/locales')
});
exports.nextI18Next = nextI18Next;
var useTranslation = nextI18Next.useTranslation;
exports.useTranslation = useTranslation;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaTE4bi5qcyJdLCJuYW1lcyI6WyJOZXh0STE4TmV4dCIsInJlcXVpcmUiLCJsb2NhbGVTdWJwYXRocyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJwYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsIm90aGVyTGFuZ3VhZ2VzIiwibG9jYWxlUGF0aCIsInJlc29sdmUiLCJuZXh0STE4TmV4dCIsInVzZVRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQyx3RUFBRCxDQUFQLFdBQXBCOztJQUNRQyxjLEdBQW1CRCxtQkFBTyxDQUFDLGtEQUFELENBQVAsY0FBaUNFLG1CLENBQXBERCxjOztBQUNSLElBQU1FLElBQUksR0FBR0gsbUJBQU8sQ0FBQyxvRkFBRCxDQUFwQjs7QUFFQUksTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlOLFdBQUosQ0FBZ0I7QUFDL0JPLGdCQUFjLEVBQUUsQ0FBQyxRQUFELENBRGU7QUFFL0JMLGdCQUFjLEVBQWRBLGNBRitCO0FBRy9CTSxZQUFVLEVBQUVKLElBQUksQ0FBQ0ssT0FBTCxDQUFhLHlCQUFiO0FBSG1CLENBQWhCLENBQWpCO0FBS08sSUFBTUMsV0FBVyxHQUFHLElBQUlWLFdBQUosQ0FBZ0I7QUFDekNPLGdCQUFjLEVBQUUsQ0FBQyxRQUFELENBRHlCO0FBRXpDTCxnQkFBYyxFQUFkQSxjQUZ5QztBQUd6Q00sWUFBVSxFQUFFSixJQUFJLENBQUNLLE9BQUwsQ0FBYSx5QkFBYjtBQUg2QixDQUFoQixDQUFwQjs7QUFLQSxJQUFNRSxjQUFjLEdBQUdELFdBQVcsQ0FBQ0MsY0FBbkMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMDljY2I2NTczODYzY2M5ZjI1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdFxyXG5jb25zdCB7IGxvY2FsZVN1YnBhdGhzIH0gPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHQoKS5wdWJsaWNSdW50aW1lQ29uZmlnXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcclxuICBvdGhlckxhbmd1YWdlczogWyd6aEhhbnQnXSxcclxuICBsb2NhbGVTdWJwYXRocyxcclxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcclxufSlcclxuZXhwb3J0IGNvbnN0IG5leHRJMThOZXh0ID0gbmV3IE5leHRJMThOZXh0KHtcclxuICBvdGhlckxhbmd1YWdlczogWyd6aEhhbnQnXSxcclxuICBsb2NhbGVTdWJwYXRocyxcclxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcclxufSlcclxuZXhwb3J0IGNvbnN0IHVzZVRyYW5zbGF0aW9uID0gbmV4dEkxOE5leHQudXNlVHJhbnNsYXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==