webpackHotUpdate_N_E("pages/Writings",{

/***/ "./component/Writings/component/ArticleBlock2.js":
/*!*******************************************************!*\
  !*** ./component/Writings/component/ArticleBlock2.js ***!
  \*******************************************************/
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



var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Writings\\component\\ArticleBlock2.js",
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
    fontFamily: 'Roboto',
    color: 'black',
    marginTop: '1rem',
    fontSize: '1.2rem'
  },
  img: {
    width: '80%',
    height: '80%'
  }
});

var ArticleBlock2 = function ArticleBlock2(_ref) {
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
            lineNumber: 52,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          md: 8,
          style: {
            padding: '1rem'
          },
          children: [box == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.title,
              style: {
                color: mode == 'day' ? 'black' : 'white'
              },
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              style: {
                color: mode == 'day' ? 'black' : 'white'
              },
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
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
              lineNumber: 70,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              style: {
                color: mode == 'day' ? 'white' : 'black'
              },
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, _this);
};

_s(ArticleBlock2, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ArticleBlock2;
ArticleBlock2.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])('article')(ArticleBlock2));

var _c;

$RefreshReg$(_c, "ArticleBlock2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dyaXRpbmdzL2NvbXBvbmVudC9BcnRpY2xlQmxvY2syLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsImZvbnRGYW1pbHkiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJBcnRpY2xlQmxvY2syIiwidCIsInByb3BzIiwiY2xhc3NlcyIsImltYWdlIiwidXJsRW4iLCJ1cmxaaEhhbnQiLCJtb2RlIiwiYm94IiwibGFuZyIsInBhZGRpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxPQUFLLEVBQUM7QUFDRkMsY0FBVSxFQUFDLFFBRFQ7QUFFRkMsU0FBSyxFQUFDLE9BRko7QUFHRkMsY0FBVSxFQUFDLEdBSFQ7QUFJRkMsWUFBUSxFQUFDO0FBSlAsR0FEbUI7QUFPekJDLGFBQVcsRUFBQztBQUNSSixjQUFVLEVBQUMsUUFESDtBQUVSQyxTQUFLLEVBQUMsT0FGRTtBQUdSSSxhQUFTLEVBQUMsTUFIRjtBQUlSRixZQUFRLEVBQUM7QUFKRCxHQVBhO0FBYXpCRyxLQUFHLEVBQUM7QUFDQUMsU0FBSyxFQUFDLEtBRE47QUFFQUMsVUFBTSxFQUFDO0FBRlA7QUFicUIsQ0FBRCxDQUE1Qjs7QUFtQkEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxDQUFnQixRQUFoQkEsQ0FBZ0I7QUFBQSxNQUFYQyxLQUFXOztBQUVwQyxNQUFNQyxPQUFPLEdBQUdmLFNB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QUFBO0FBQUE7QUFBQSxXQURKO0FBeUNILENBeEREOztHQUFNSyxhO1VBRWNaLFM7OztLQUZkWSxhO0FBMEROQSxhQUFhLENBQUNXLFNBQWQsR0FBMEI7QUFDdEJWLEdBQUMsRUFBRVcsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURJLENBQTFCO0FBSWVDLDRIQUFlLENBQUMsU0FBRCxDQUFmLENBQTJCZixhQUEzQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1dyaXRpbmdzLjMwN2EzNDBjNDU1NDAxYzgxNDI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBmb250V2VpZ2h0OjcwMCxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIG1hcmdpblRvcDonMXJlbScsXHJcbiAgICAgICAgZm9udFNpemU6JzEuMnJlbSdcclxuICAgIH0sXHJcbiAgICBpbWc6e1xyXG4gICAgICAgIHdpZHRoOic4MCUnLFxyXG4gICAgICAgIGhlaWdodDonODAlJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQXJ0aWNsZUJsb2NrMiA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICB1cmxFbixcclxuICAgICAgICB1cmxaaEhhbnQsXHJcbiAgICAgICAgbW9kZSxcclxuICAgICAgICBib3gsXHJcbiAgICAgICAgbGFuZ1xyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtsYW5nPT09J2VuJz91cmxFbjp1cmxaaEhhbnR9XHJcbiAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgXHJcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9IHN0eWxlPXt7cGFkZGluZzonMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JveD09dHJ1ZSYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBzdHlsZT17e2NvbG9yOihtb2RlPT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufSBzdHlsZT17e2NvbG9yOihtb2RlPT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtib3g9PWZhbHNlJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHN0eWxlPXt7Y29sb3I6KG1vZGU9PSdkYXknPyd3aGl0ZSc6J2JsYWNrJyl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259IHN0eWxlPXt7Y29sb3I6KG1vZGU9PSdkYXknPyd3aGl0ZSc6J2JsYWNrJyl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5BcnRpY2xlQmxvY2syLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignYXJ0aWNsZScpKEFydGljbGVCbG9jazIpIl0sInNvdXJjZVJvb3QiOiIifQ==