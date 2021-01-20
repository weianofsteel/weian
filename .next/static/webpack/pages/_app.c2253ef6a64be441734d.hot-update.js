webpackHotUpdate_N_E("pages/_app",{

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var NextI18Next = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/commonjs/index.js")["default"];

var localeSubpaths = __webpack_require__(/*! next/config */ "./node_modules/next/config.js")["default"]().publicRuntimeConfig.localeSubpaths;

var path = __webpack_require__(/*! path */ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js");

module.exports = new NextI18Next({
  otherLanguages: ['zhHant'],
  localeSubpaths: localeSubpaths,
  localePath: path.resolve('./public/static/locales')
}); // export const nextI18Next = new NextI18Next({
//   otherLanguages: ['zhHant'],
//   localeSubpaths,
//   localePath: path.resolve('./public/static/locales')
// })
// export const useTranslation = nextI18Next.useTranslation;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaTE4bi5qcyJdLCJuYW1lcyI6WyJOZXh0STE4TmV4dCIsInJlcXVpcmUiLCJsb2NhbGVTdWJwYXRocyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJwYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsIm90aGVyTGFuZ3VhZ2VzIiwibG9jYWxlUGF0aCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLGtEQUFNQSxXQUFXLEdBQUdDLG1CQUFPLENBQUMsd0VBQUQsQ0FBUCxXQUFwQjs7SUFDUUMsYyxHQUFtQkQsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLGNBQWlDRSxtQixDQUFwREQsYzs7QUFDUixJQUFNRSxJQUFJLEdBQUdILG1CQUFPLENBQUMsb0ZBQUQsQ0FBcEI7O0FBRUFJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixJQUFJTixXQUFKLENBQWdCO0FBQy9CTyxnQkFBYyxFQUFFLENBQUMsUUFBRCxDQURlO0FBRS9CTCxnQkFBYyxFQUFkQSxjQUYrQjtBQUcvQk0sWUFBVSxFQUFFSixJQUFJLENBQUNLLE9BQUwsQ0FBYSx5QkFBYjtBQUhtQixDQUFoQixDQUFqQixDLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzIyNTNlZjZhNjRiZTQ0MTczNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcclxuY29uc3QgeyBsb2NhbGVTdWJwYXRocyB9ID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0KCkucHVibGljUnVudGltZUNvbmZpZ1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnemhIYW50J10sXHJcbiAgbG9jYWxlU3VicGF0aHMsXHJcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXHJcbn0pXHJcbi8vIGV4cG9ydCBjb25zdCBuZXh0STE4TmV4dCA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbi8vICAgb3RoZXJMYW5ndWFnZXM6IFsnemhIYW50J10sXHJcbi8vICAgbG9jYWxlU3VicGF0aHMsXHJcbi8vICAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXHJcbi8vIH0pXHJcbi8vIGV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9IG5leHRJMThOZXh0LnVzZVRyYW5zbGF0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=