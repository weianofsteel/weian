webpackHotUpdate_N_E("pages/Writings",{

/***/ "./component/Writings/component/ArticleBlock.js":
/*!******************************************************!*\
  !*** ./component/Writings/component/ArticleBlock.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Writings\\component\\ArticleBlock.js",
    _this = undefined,
    _s = $RefreshSig$();







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  title: {
    fontFamily: 'Roboto',
    color: 'black',
    fontWeight: 700,
    fontSize: '2rem'
  },
  description: {
    // fontFamily:'Roboto',
    color: 'black',
    marginTop: '1rem'
  },
  img: {
    width: '80%',
    paddingTop: '10%'
  }
});

var ArticleBlock = function ArticleBlock(_ref) {
  _s();

  var t = _ref.t,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["t"]);

  var classes = useStyles();
  var title = props.title,
      description = props.description,
      image = props.image,
      urlEn = props.urlEn,
      urlZhHant = props.urlZhHant,
      mode = props.mode,
      box = props.box,
      lang = props.lang;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: lang === 'en' ? urlEn : urlZhHant,
      underline: "none",
      target: "_blank",
      rel: "noopener",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        container: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: image,
            className: classes.img
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          md: 8,
          children: [box == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.title,
              style: {
                color: mode == 'day' ? 'black' : 'white'
              },
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              style: {
                color: mode == 'day' ? 'black' : 'white'
              },
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 29
          }, _this), box == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.title,
              style: {
                color: mode == 'day' ? 'white' : 'black'
              },
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              style: {
                color: mode == 'day' ? 'white' : 'black'
              },
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, _this);
};

_s(ArticleBlock, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ArticleBlock;
ArticleBlock.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])('article')(ArticleBlock));

var _c;

$RefreshReg$(_c, "ArticleBlock");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dyaXRpbmdzL2NvbXBvbmVudC9BcnRpY2xlQmxvY2suanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRpdGxlIiwiZm9udEZhbWlseSIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJpbWciLCJ3aWR0aCIsInBhZGRpbmdUb3AiLCJBcnRpY2xlQmxvY2siLCJ0IiwicHJvcHMiLCJjbGFzc2VzIiwiaW1hZ2UiLCJ1cmxFbiIsInVybFpoSGFudCIsIm1vZGUiLCJib3giLCJsYW5nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsT0FBSyxFQUFDO0FBQ0ZDLGNBQVUsRUFBQyxRQURUO0FBRUZDLFNBQUssRUFBQyxPQUZKO0FBR0ZDLGNBQVUsRUFBQyxHQUhUO0FBSUZDLFlBQVEsRUFBQztBQUpQLEdBRG1CO0FBT3pCQyxhQUFXLEVBQUM7QUFDUjtBQUNBSCxTQUFLLEVBQUMsT0FGRTtBQUdSSSxhQUFTLEVBQUM7QUFIRixHQVBhO0FBWXpCQyxLQUFHLEVBQUM7QUFDQUMsU0FBSyxFQUFDLEtBRE47QUFFQUMsY0FBVSxFQUFDO0FBRlg7QUFacUIsQ0FBRCxDQUE1Qjs7QUFrQkEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFoQkMsQ0FBZ0IsUUFBaEJBLENBQWdCO0FBQUEsTUFBWEMsS0FBVzs7QUFFbkMsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBRm1DLE1BSy9CRSxLQUwrQixHQWEvQlksS0FiK0IsQ0FLL0Ja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QlQsR0FBQyxFQUFFVSxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREcsQ0FBekI7QUFJZUMsNEhBQWUsQ0FBQyxTQUFELENBQWYsQ0FBMkJkLFlBQTNCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvV3JpdGluZ3MuOTVjZDQ3NmNhNDY5MmQ3YzFhMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NzAwLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOntcclxuICAgICAgICAvLyBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgbWFyZ2luVG9wOicxcmVtJ1xyXG4gICAgfSxcclxuICAgIGltZzp7XHJcbiAgICAgICAgd2lkdGg6JzgwJScsXHJcbiAgICAgICAgcGFkZGluZ1RvcDonMTAlJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQXJ0aWNsZUJsb2NrID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIHVybEVuLFxyXG4gICAgICAgIHVybFpoSGFudCxcclxuICAgICAgICBtb2RlLFxyXG4gICAgICAgIGJveCxcclxuICAgICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2xhbmc9PT0nZW4nP3VybEVuOnVybFpoSGFudH1cclxuICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtib3g9PXRydWUmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gc3R5bGU9e3tjb2xvcjoobW9kZT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0gc3R5bGU9e3tjb2xvcjoobW9kZT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym94PT1mYWxzZSYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBzdHlsZT17e2NvbG9yOihtb2RlPT0nZGF5Jz8nd2hpdGUnOidibGFjaycpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufSBzdHlsZT17e2NvbG9yOihtb2RlPT0nZGF5Jz8nd2hpdGUnOidibGFjaycpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuQXJ0aWNsZUJsb2NrLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignYXJ0aWNsZScpKEFydGljbGVCbG9jaykiXSwic291cmNlUm9vdCI6IiJ9