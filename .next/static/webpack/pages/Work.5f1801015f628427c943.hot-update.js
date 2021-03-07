webpackHotUpdate_N_E("pages/Work",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






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

  var classes = useStyles();
  var onOpen = props.onOpen,
      onClose = props.onClose,
      onChange = props.onChange,
      items = props.items,
      open = props.open,
      value = props.value,
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 10,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 2,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], _objectSpread(_objectSpread({}, formControlProps), {}, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], _objectSpread(_objectSpread(_objectSpread({
          labelId: "demo-controlled-open-select-label",
          id: "demo-controlled-open-select",
          open: open,
          onClose: onClose,
          onOpen: onOpen,
          value: value,
          onChange: onChange,
          disableUnderline: true,
          renderValue: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 38
          }, this)
        }, selectProps), newProps), {}, {
          children: items.map(function (item, index) {
            var _item$props, _item$value, _item$label;

            return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], _objectSpread(_objectSpread({}, (_item$props = item.props) !== null && _item$props !== void 0 ? _item$props : null), {}, {
              key: index,
              value: (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : "",
              classes: {
                root: classes.input
              },
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }
            }), (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : "");
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
      _props$disabled2 = props.disabled,
      disabled = _props$disabled2 === void 0 ? false : _props$disabled2,
      _props$tabIndex2 = props.tabIndex,
      tabIndex = _props$tabIndex2 === void 0 ? 0 : _props$tabIndex2,
      mode = props.mode;

  var newProps = _objectSpread({}, props);

  delete newProps["helperText"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 2,
      style: {
        marginTop: '1rem'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 9,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], _objectSpread(_objectSpread({}, formControlProps), {}, {
        size: "small",
        fullWidth: true,
        disabled: disabled,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
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
          lineNumber: 114,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], _objectSpread(_objectSpread(_objectSpread({}, selectProps), {}, {
          labelId: "demo-simple-select-label",
          id: "demo-simple-select",
          style: {
            color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
          },
          disableUnderline: true,
          disableRipple: true,
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

            return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], _objectSpread(_objectSpread({}, (_item$props2 = item.props) !== null && _item$props2 !== void 0 ? _item$props2 : null), {}, {
              key: index,
              value: (_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : "",
              classes: {
                root: classes.input
              },
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 29
              }
            }), (_item$label2 = item.label) !== null && _item$label2 !== void 0 ? _item$label2 : "");
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9QdWJsaWNDb21wb25lbnQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImlucHV0TGFiZWwiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInNlbGVjdFJlcXVpcmVkIiwiU2VsZWN0IiwicHJvcHMiLCJjbGFzc2VzIiwib25PcGVuIiwib25DbG9zZSIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJvcGVuIiwidmFsdWUiLCJmb3JtQ29udHJvbFByb3BzIiwic2VsZWN0UHJvcHMiLCJyZXF1aXJlZCIsImRpc2FibGVkIiwidGFiSW5kZXgiLCJtb2RlIiwibmV3UHJvcHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyb290IiwiaW5wdXQiLCJsYWJlbCIsIlNlbGVjdDIiLCJuYW1lIiwibWFyZ2luVG9wIiwiY29sb3IiLCJzZWxlY3QiLCJzZWxlY3RlZCIsImNoZWNrRXF1YWwiLCJhIiwiYiIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiZmlsdGVycyIsImZpbHRlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYXJyYXkiLCJvYmplY3QiLCJpbnB1dExhYmVsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxZQUFVLEVBQUU7QUFDUkMsWUFBUSxFQUFDLE1BREQ7QUFFUkMsY0FBVSxFQUFDLE9BRkg7QUFHUkMsV0FBTyxFQUFFLE1BSEQ7QUFJUkMsaUJBQWEsRUFBRTtBQUpQLEdBRGE7QUFPekJDLGdCQUFjLEVBQUMsQ0FDWDtBQURXO0FBUFUsQ0FBRCxDQUE1QjtBQWFPLFNBQVND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QixpREFBUyxDQUFDTSxLQUFWLENBQWdCRixVQVJQO0FBU2hCL0Isa0JBQWdCLEVBQUUyQixpREFBUyxDQUFDTyxNQVRaO0FBVWhCQyxpQkFBZSxFQUFFUixpREFBUyxDQUFDTyxNQVZYO0FBV2hCakMsYUFBVyxFQUFFMEIsaURBQVMsQ0FBQ087QUFYUCxDQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Xb3JrLjVmMTgwMTAxNWY2Mjg0MjdjOTQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgU2VsZWN0IGFzIE1hdGVyaWFsU2VsZWN0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbCwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHJhbnNsYXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaW5wdXRMYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOlwiMXJlbVwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6XCLlvq7ou5/mraPpu5Hpq5RcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1SZXZlcnNlXCJcclxuICAgIH0sXHJcbiAgICBzZWxlY3RSZXF1aXJlZDp7XHJcbiAgICAgICAgLy8gbWFyZ2luTGVmdDpcIi03cHhcIlxyXG4gICAgfSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0KHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgb25PcGVuLFxyXG4gICAgICAgIG9uQ2xvc2UsXHJcbiAgICAgICAgb25DaGFuZ2UsXHJcbiAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgb3BlbixcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBmb3JtQ29udHJvbFByb3BzLFxyXG4gICAgICAgIHNlbGVjdFByb3BzLFxyXG4gICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgIGRpc2FibGVkID1mYWxzZSxcclxuICAgICAgICB0YWJJbmRleD0wLFxyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBsZXQgbmV3UHJvcHMgPSB7XHJcbiAgICAgICAgLi4ucHJvcHNcclxuICAgIH07XHJcbiAgICBkZWxldGUgbmV3UHJvcHNbXCJoZWxwZXJUZXh0XCJdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlSWNvbi8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgey4uLmZvcm1Db250cm9sUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXRlcmlhbFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW49e29uT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9ezxUcmFuc2xhdGVJY29uLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5zZWxlY3RQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZT8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbD8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3QyKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBmb3JtQ29udHJvbFByb3BzLFxyXG4gICAgICAgIHNlbGVjdFByb3BzLFxyXG4gICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgIGRpc2FibGVkID1mYWxzZSxcclxuICAgICAgICB0YWJJbmRleD0wLFxyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBsZXQgbmV3UHJvcHMgPSB7XHJcbiAgICAgICAgLi4ucHJvcHNcclxuICAgIH07XHJcbiAgICBkZWxldGUgbmV3UHJvcHNbXCJoZWxwZXJUZXh0XCJdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzdHlsZT17e21hcmdpblRvcDonMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVJY29uLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHsuLi5mb3JtQ29udHJvbFByb3BzfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290OmNsYXNzZXMuaW5wdXRMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6Y2xhc3Nlcy5zZWxlY3RSZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TWF0ZXJpYWxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB7Li4uc2VsZWN0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7c2VsZWN0OiBjbGFzc2VzLmlucHV0fSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdERpc3BsYXlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDp0YWJJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPT09bnVsbD9cIlwiOnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9e3NlbGVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tFcXVhbChhLGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBiLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcnM9IGl0ZW1zLmZpbHRlcihpdGVtPT4gY2hlY2tFcXVhbChpdGVtLnZhbHVlLHNlbGVjdGVkKSAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnNbMF0/ZmlsdGVyc1swXVtcImxhYmVsXCJdOlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWU/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWw/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufVxyXG5cclxuU2VsZWN0LnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5TZWxlY3QyLnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=