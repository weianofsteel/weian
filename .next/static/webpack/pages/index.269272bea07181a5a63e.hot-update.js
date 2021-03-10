webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Public/PublicComponent.js":
/*!*********************************************!*\
  !*** ./component/Public/PublicComponent.js ***!
  \*********************************************/
/*! exports provided: Select, Select2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select2", function() { return Select2; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Translate */ "./node_modules/@material-ui/icons/Translate.js");
/* harmony import */ var _material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\PublicComponent.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  inputLabel: {
    fontSize: "1rem",
    fontFamily: "微軟正黑體",
    display: "flex",
    flexDirection: "row-Reverse"
  },
  selectRequired: {// marginLeft:"-7px"
  }
});
function Select(props) {
  _s();

  var _this = this;

  var classes = useStyles();
  var onOpen = props.onOpen,
      onClose = props.onClose,
      onChange = props.onChange,
      items = props.items,
      open = props.open,
      value = props.value,
      mode = props.mode;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      labelId: "demo-controlled-open-select-label",
      id: "demo-controlled-open-select",
      open: open,
      onClose: onClose,
      onOpen: onOpen,
      value: value,
      onChange: onChange,
      disableUnderline: true,
      autoFocus: false,
      renderValue: function renderValue() {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_7___default.a, {
          style: {
            color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 28
        }, _this);
      },
      style: {
        backgroundColor: 'transparent'
      },
      children: items.map(function (item, index) {
        var _item$props, _item$value, _item$label;

        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], _objectSpread(_objectSpread({}, (_item$props = item.props) !== null && _item$props !== void 0 ? _item$props : null), {}, {
          key: index,
          value: (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : "",
          classes: {
            root: classes.input
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }
        }), (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : "");
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}

_s(Select, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Select;
function Select2(props) {
  _s2();

  var classes = useStyles();
  var label = props.label,
      value = props.value,
      name = props.name,
      items = props.items,
      formControlProps = props.formControlProps,
      selectProps = props.selectProps,
      required = props.required,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      mode = props.mode;

  var newProps = _objectSpread({}, props);

  delete newProps["helperText"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 2,
      style: {
        marginTop: '1rem'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 9,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], _objectSpread(_objectSpread({}, formControlProps), {}, {
        size: "small",
        fullWidth: true,
        disabled: disabled,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
          required: required,
          id: "demo-simple-select-label",
          classes: {
            root: classes.inputLabel,
            required: classes.selectRequired
          },
          style: {
            color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
          },
          children: label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], _objectSpread(_objectSpread(_objectSpread({}, selectProps), {}, {
          labelId: "demo-simple-select-label",
          id: "demo-simple-select",
          style: {
            backgroundColor: 'transparent',
            color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
          },
          disableUnderline: true,
          inputProps: {
            name: name,
            classes: {
              select: classes.input
            }
          },
          SelectDisplayProps: {
            tabIndex: tabIndex
          },
          value: value === null ? "" : value,
          label: label,
          displayEmpty: true,
          renderValue: function renderValue(selected) {
            function checkEqual(a, b) {
              if (a === null || a === undefined) {
                a = "";
              }

              if (b === null || b === undefined) {
                b = "";
              }

              if (typeof a === "number") {
                a = a.toString();
              }

              if (typeof b === "number") {
                b = b.toString();
              }

              return a == b;
            }

            var filters = items.filter(function (item) {
              return checkEqual(item.value, selected);
            });
            return filters[0] ? filters[0]["label"] : "";
          }
        }, newProps), {}, {
          children: items.map(function (item, index) {
            var _item$props2, _item$value2, _item$label2;

            return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], _objectSpread(_objectSpread({}, (_item$props2 = item.props) !== null && _item$props2 !== void 0 ? _item$props2 : null), {}, {
              key: index,
              value: (_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : "",
              classes: {
                root: classes.input
              },
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 29
              }
            }), (_item$label2 = item.label) !== null && _item$label2 !== void 0 ? _item$label2 : "");
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 9
  }, this);
}

_s2(Select2, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c2 = Select2;
Select.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]).isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  inputLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  selectProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
Select2.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]).isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  inputLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  selectProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};

var _c, _c2;

$RefreshReg$(_c, "Select");
$RefreshReg$(_c2, "Select2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9QdWJsaWNDb21wb25lbnQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImlucHV0TGFiZWwiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInNlbGVjdFJlcXVpcmVkIiwiU2VsZWN0IiwicHJvcHMiLCJjbGFzc2VzIiwib25PcGVuIiwib25DbG9zZSIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJvcGVuIiwidmFsdWUiLCJtb2RlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyb290IiwiaW5wdXQiLCJsYWJlbCIsIlNlbGVjdDIiLCJuYW1lIiwiZm9ybUNvbnRyb2xQcm9wcyIsInNlbGVjdFByb3BzIiwicmVxdWlyZWQiLCJkaXNhYmxlZCIsInRhYkluZGV4IiwibmV3UHJvcHMiLCJtYXJnaW5Ub3AiLCJzZWxlY3QiLCJzZWxlY3RlZCIsImNoZWNrRXF1YWwiLCJhIiwiYiIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiZmlsdGVycyIsImZpbHRlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYXJyYXkiLCJvYmplY3QiLCJpbnB1dExhYmVsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxZQUFVLEVBQUU7QUFDUkMsWUFBUSxFQUFDLE1BREQ7QUFFUkMsY0FBVSxFQUFDLE9BRkg7QUFHUkMsV0FBTyxFQUFFLE1BSEQ7QUFJUkMsaUJBQWEsRUFBRTtBQUpQLEdBRGE7QUFPekJDLGdCQUFjLEVBQUMsQ0FDWDtBQURXO0FBUFUsQ0FB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RyxVQVBSO0FBUWZuQyxPQUFLLEVBQUUrQixpREFBUyxDQUFDTSxLQUFWLENBQWdCRixVQVJSO0FBU2ZyQixrQkFBZ0IsRUFBRWlCLGlEQUFTLENBQUNPLE1BVGI7QUFVZkMsaUJBQWUsRUFBRVIsaURBQVMsQ0FBQ08sTUFWWjtBQVdmdkIsYUFBVyxFQUFFZ0IsaURBQVMsQ0FBQ087QUFYUixDQUFuQjtBQWNBMUIsT0FBTyxDQUFDa0IsU0FBUixHQUFvQjtBQUNoQm5CLE9BQUssRUFBRW9CLGlEQUFTLENBQUNDLE1BREQ7QUFFaEI5QixPQUFLLEVBQUU2QixpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQ3ZCRixpREFBUyxDQUFDQyxNQURhLEVBRXZCRCxpREFBUyxDQUFDRyxNQUZhLENBQXBCLEVBR0pDLFVBTGE7QUFNaEJwQyxVQUFRLEVBQUVnQyxpREFBUyxDQUFDSyxJQUFWLENBQWVELFVBTlQ7QUFPaEJ0QixNQUFJLEVBQUVrQixpREFBUyxDQUFDQyxNQUFWLENBQWlCRyxVQVBQO0FBUWhCbkMsT0FBSyxFQUFFK0IsaURBQVMsQ0FBQ00sS0FBVixDQUFnQkYsVUFSUDtBQVNoQnJCLGtCQUFnQixFQUFFaUIsaURBQVMsQ0FBQ08sTUFUWjtBQVVoQkMsaUJBQWUsRUFBRVIsaURBQVMsQ0FBQ08sTUFWWDtBQVdoQnZCLGFBQVcsRUFBRWdCLGlEQUFTLENBQUNPO0FBWFAsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjY5MjcyYmVhMDcxODFhNWE2M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWxlY3QgYXMgTWF0ZXJpYWxTZWxlY3QsIElucHV0TGFiZWwsIEZvcm1Db250cm9sLCBNZW51SXRlbSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUcmFuc2xhdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBpbnB1dExhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6XCIxcmVtXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTpcIuW+rui7n+ato+m7kemrlFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gICAgfSxcclxuICAgIHNlbGVjdFJlcXVpcmVkOntcclxuICAgICAgICAvLyBtYXJnaW5MZWZ0OlwiLTdweFwiXHJcbiAgICB9LFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBvbk9wZW4sXHJcbiAgICAgICAgb25DbG9zZSxcclxuICAgICAgICBvbkNoYW5nZSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBvcGVuLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgb25PcGVuPXtvbk9wZW59XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUcmFuc2xhdGVJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19Lz5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZT8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbD8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPiAgICAgICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIGZvcm1Db250cm9sUHJvcHMsXHJcbiAgICAgICAgc2VsZWN0UHJvcHMsXHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgZGlzYWJsZWQgPWZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4PTAsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBuZXdQcm9wcyA9IHtcclxuICAgICAgICAuLi5wcm9wc1xyXG4gICAgfTtcclxuICAgIGRlbGV0ZSBuZXdQcm9wc1tcImhlbHBlclRleHRcIl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZUljb24vPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1Db250cm9sUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6Y2xhc3Nlcy5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDpjbGFzc2VzLnNlbGVjdFJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxNYXRlcmlhbFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5zZWxlY3RQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge3NlbGVjdDogY2xhc3Nlcy5pbnB1dH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBTZWxlY3REaXNwbGF5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6dGFiSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZT09PW51bGw/XCJcIjp2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclZhbHVlPXtzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRXF1YWwoYSxiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBudWxsIHx8IGE9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiID09PSBudWxsIHx8IGIgPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gYi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhID09IGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzPSBpdGVtcy5maWx0ZXIoaXRlbT0+IGNoZWNrRXF1YWwoaXRlbS52YWx1ZSxzZWxlY3RlZCkgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzWzBdP2ZpbHRlcnNbMF1bXCJsYWJlbFwiXTpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn1cclxuXHJcblNlbGVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuU2VsZWN0Mi5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9