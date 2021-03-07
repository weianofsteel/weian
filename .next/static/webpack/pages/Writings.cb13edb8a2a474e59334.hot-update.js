webpackHotUpdate_N_E("pages/Writings",{

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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], _objectSpread(_objectSpread({
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
        }, selectProps), {}, {
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
                lineNumber: 63,
                columnNumber: 33
              }
            }), (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : "");
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this)
      }, void 0, false, {
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
        lineNumber: 103,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
          lineNumber: 113,
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
                lineNumber: 170,
                columnNumber: 29
              }
            }), (_item$label2 = item.label) !== null && _item$label2 !== void 0 ? _item$label2 : "");
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9QdWJsaWNDb21wb25lbnQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImlucHV0TGFiZWwiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInNlbGVjdFJlcXVpcmVkIiwiU2VsZWN0IiwicHJvcHMiLCJjbGFzc2VzIiwib25PcGVuIiwib25DbG9zZSIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJvcGVuIiwidmFsdWUiLCJmb3JtQ29udHJvbFByb3BzIiwic2VsZWN0UHJvcHMiLCJyZXF1aXJlZCIsImRpc2FibGVkIiwidGFiSW5kZXgiLCJtb2RlIiwibmV3UHJvcHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyb290IiwiaW5wdXQiLCJsYWJlbCIsIlNlbGVjdDIiLCJuYW1lIiwibWFyZ2luVG9wIiwiY29sb3IiLCJzZWxlY3QiLCJzZWxlY3RlZCIsImNoZWNrRXF1YWwiLCJhIiwiYiIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiZmlsdGVycyIsImZpbHRlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYXJyYXkiLCJvYmplY3QiLCJpbnB1dExhYmVsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxZQUFVLEVBQUU7QUFDUkMsWUFBUSxFQUFDLE1BREQ7QUFFUkMsY0FBVSxFQUFDLE9BRkg7QUFHUkMsV0FBTyxFQUFFLE1BSEQ7QUFJUkMsaUJBQWEsRUFBRTtBQUpQLEdBRGE7QUFPekJDLGdCQUFjLEVBQUMsQ0FDWDtBQURXO0FBUFUsQ0FBRCxDQUE1QjtBQWFPLFNBQVNDLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQzFCLE1BQU1DLE9BQU8sR0FBR1YsU0FBUyxFQUF6QjtBQUQwQixNQUd0QlcsTUFIc0IsR0FldEJGLEtBZnNCLENBR3RCRSxNQUhzQjtBQUFBLE1BSXRCQyxPQUpzQixHQWV0QkgsS0Fmc0IsQ0FJdEJHLE9BSnNCO0FBQUEsTUFLdEJDLFFBTHNCLEdBZXRCSixLQWZzQixDQUt0QkksUUFMc0I7QUFBQSxNQU10QkMsS0FOc0IsR0FldEJMLEtBZnNCLENBTXRCSyxLQU5zQjtBQUFBLE1BT3RCQyxJQVBzQixHQWV0Qk4sS0Fmc0IsQ0FPdEJNLElBUHNCO0FBQUEsTUFRdEJDLEtBUnNCLEdBZXRCUCxLQWZzQixDQVF0Qk8sS0FSc0I7QUFBQSxNQVN0QkMsZ0JBVHNCLEdBZXRCUixLQWZzQixDQVN0QlEsZ0JBVHNCO0FBQUEsTUFVdEJDLFdBVnNCLEdBZXRCVCxLQWZzQixDQVV0QlMsV0FWc0I7QUFBQSxNQVd0QkMsUUFYc0IsR0FldEJWLEtBZnNCLENBV3RCVSxRQVhzQjtBQUFBLHdCQWV0QlYsS0Fmc0IsQ0FZdEJXLFFBWnNCO0FBQUEsTUFZdEJBLFFBWnNCLGdDQVlaLEtBWlk7QUFBQSx3QkFldEJYLEtBZnNCLENBYXRCWSxRQWJzQjtBQUFBLE1BYXRCQSxRQWJzQixnQ0FhYixDQWJhO0FBQUEsTUFjdEJDLElBZHNCLEdBZXRCYixLQWZzQixDQWN0QmEsSUFkc0I7O0FBaUIxQixNQUFJQyxRQUFRLHFCQUNMZCxLQURLLENBQVo7O0FBR0EsU0FBT2MsUUFBUSxDQUFDLFlBQUQsQ0FBZjtBQUVBLHNCQUNJLHFFQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQUEsNEJBQ0kscUVBQUMsOERBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFBLDZCQUNJLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSSxxRUFBQyw4REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQUEsNkJBQ0kscUVBQUMsNkRBQUQ7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUNJLGlCQUFPLEVBQUMsbUNBRFo7QUFFSSxZQUFFLEVBQUMsNkJBRlA7QUFHSSxjQUFJLEVBQUVSLElBSFY7QUFJSSxpQkFBTyxFQUFFSCxPQUpiO0FBS0ksZ0JBQU0sRUFBRUQsTUFMWjtBQU1JLGVBQUssRUFBRUssS0FOWDtBQU9JLGtCQUFRLEVBQUVILFFBUGQ7QUFRSSwwQkFBZ0IsTUFScEI7QUFTSSxxQkFBVyxlQUFFLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUakIsV0FVUUssV0FWUjtBQUFBLG9CQVlLSixLQUFLLENBQUNVLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFDNUIsZ0NBQ0ksNERBQUMsMERBQUQsaURBQ1FELElBQUksQ0FBQ2hCLEtBRGIscURBQ3NCLElBRHRCO0FBRUksaUJBQUcsRUFBRWlCLEtBRlQ7QUFHSSxtQkFBSyxpQkFBRUQsSUFBSSxDQUFDVCxLQUFQLHFEQUFjLEVBSHZCO0FBSUkscUJBQU8sRUFBRTtBQUFDVyxvQkFBSSxFQUFDakIsT0FBTyxDQUFDa0I7QUFBZCxlQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTUtILElBQUksQ0FBQ0ksS0FOVixxREFNaUIsRUFOakIsQ0FESjtBQVVILFdBWEE7QUFaTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9DSDs7R0ExRGVyQixNO1VBQ0lSLFM7OztLQURKUSxNO0FBNERULFNBQVNzQixPQUFULENBQWlCckIsS0FBakIsRUFBd0I7QUFBQTs7QUFDM0IsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpCO0FBRDJCLE1BR3ZCNkIsS0FIdUIsR0FhdkJwQixLQWJ1QixDQUd2Qm9CLEtBSHVCO0FBQUEsTUFJdkJiLEtBSnVCLEdBYXZCUCxLQWJ1QixDQUl2Qk8sS0FKdUI7QUFBQSxNQUt2QmUsSUFMdUIsR0FhdkJ0QixLQWJ1QixDQUt2QnNCLElBTHVCO0FBQUEsTUFNdkJqQixLQU51QixHQWF2QkwsS0FidUIsQ0FNdkJLLEtBTnVCO0FBQUEsTUFPdkJHLGdCQVB1QixHQWF2QlIsS0FidUIsQ0FPdkJRLGdCQVB1QjtBQUFBLE1BUXZCQyxXQVJ1QixHQWF2QlQsS0FidUIsQ0FRdkJTLFdBUnVCO0FBQUEsTUFTdkJDLFFBVHVCLEdBYXZCVixLQWJ1QixDQVN2QlUsUUFUdUI7QUFBQSx5QkFhdkJWLEtBYnVCLENBVXZCVyxRQVZ1QjtBQUFBLE1BVXZCQSxRQVZ1QixpQ0FVYixLQVZhO0FBQUEseUJBYXZCWCxLQWJ1QixDQVd2QlksUUFYdUI7QUFBQSxNQVd2QkEsUUFYdUIsaUNBV2QsQ0FYYztBQUFBLE1BWXZCQyxJQVp1QixHQWF2QmIsS0FidUIsQ0FZdkJhLElBWnVCOztBQWUzQixNQUFJQyxRQUFRLHFCQUNMZCxLQURLLENBQVo7O0FBR0EsU0FBT2MsUUFBUSxDQUFDLFlBQUQsQ0FBZjtBQUVBLHNCQUNJLHFFQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQUEsNEJBQ0kscUVBQUMsOERBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsQ0FBZjtBQUFrQixXQUFLLEVBQUU7QUFBQ1MsaUJBQVMsRUFBQztBQUFYLE9BQXpCO0FBQUEsNkJBQ0kscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLHFFQUFDLDhEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBS0kscUVBQUMsOERBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsQ0FBZjtBQUFBLDZCQUNBLHFFQUFDLDZEQUFELGtDQUNRZixnQkFEUjtBQUVJLFlBQUksRUFBQyxPQUZUO0FBR0ksaUJBQVMsTUFIYjtBQUlJLGdCQUFRLEVBQUVHLFFBSmQ7QUFBQSxnQ0FNSSxxRUFBQyw0REFBRDtBQUNJLGtCQUFRLEVBQUVELFFBRGQ7QUFFSSxZQUFFLEVBQUMsMEJBRlA7QUFHSSxpQkFBTyxFQUFFO0FBQ0xRLGdCQUFJLEVBQUNqQixPQUFPLENBQUNSLFVBRFI7QUFFTGlCLG9CQUFRLEVBQUNULE9BQU8sQ0FBQ0g7QUFGWixXQUhiO0FBT0ksZUFBSyxFQUFFO0FBQUMwQixpQkFBSyxFQUFFWCxJQUFJLEtBQUcsS0FBUCxHQUFhLFNBQWIsR0FBdUI7QUFBL0IsV0FQWDtBQUFBLG9CQVNLTztBQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFpQkkscUVBQUMsd0RBQUQsZ0RBQ1FYLFdBRFI7QUFFSSxpQkFBTyxFQUFDLDBCQUZaO0FBR0ksWUFBRSxFQUFDLG9CQUhQO0FBSUksZUFBSyxFQUFFO0FBQUNlLGlCQUFLLEVBQUVYLElBQUksS0FBRyxLQUFQLEdBQWEsU0FBYixHQUF1QjtBQUEvQixXQUpYO0FBS0ksMEJBQWdCLE1BTHBCO0FBTUksdUJBQWEsRUFBRSxJQU5uQjtBQU9JLG9CQUFVLEVBQUU7QUFDUlMsZ0JBQUksRUFBRUEsSUFERTtBQUVSckIsbUJBQU8sRUFBRTtBQUFDd0Isb0JBQU0sRUFBRXhCLE9BQU8sQ0FBQ2tCO0FBQWpCO0FBRkQsV0FQaEI7QUFXSSw0QkFBa0IsRUFBRTtBQUNoQlAsb0JBQVEsRUFBQ0E7QUFETyxXQVh4QjtBQWNJLGVBQUssRUFBRUwsS0FBSyxLQUFHLElBQVIsR0FBYSxFQUFiLEdBQWdCQSxLQWQzQjtBQWVJLGVBQUssRUFBRWEsS0FmWDtBQWdCSSxzQkFBWSxFQUFFLElBaEJsQjtBQWlCSSxxQkFBVyxFQUFFLHFCQUFBTSxRQUFRLEVBQUk7QUFDckIscUJBQVNDLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXNCQyxDQUF0QixFQUF3QjtBQUNwQixrQkFBSUQsQ0FBQyxLQUFLLElBQU4sSUFBY0EsQ0FBQyxLQUFHRSxTQUF0QixFQUFnQztBQUM1QkYsaUJBQUMsR0FBRyxFQUFKO0FBQ0g7O0FBRUQsa0JBQUlDLENBQUMsS0FBSyxJQUFOLElBQWNBLENBQUMsS0FBSUMsU0FBdkIsRUFBaUM7QUFDN0JELGlCQUFDLEdBQUcsRUFBSjtBQUNIOztBQUVELGtCQUFJLE9BQU9ELENBQVAsS0FBYSxRQUFqQixFQUEwQjtBQUN0QkEsaUJBQUMsR0FBR0EsQ0FBQyxDQUFDRyxRQUFGLEVBQUo7QUFDSDs7QUFFRCxrQkFBSSxPQUFPRixDQUFQLEtBQWEsUUFBakIsRUFBMEI7QUFDdEJBLGlCQUFDLEdBQUdBLENBQUMsQ0FBQ0UsUUFBRixFQUFKO0FBQ0g7O0FBRUQscUJBQU9ILENBQUMsSUFBSUMsQ0FBWjtBQUNIOztBQUVELGdCQUFJRyxPQUFPLEdBQUUzQixLQUFLLENBQUM0QixNQUFOLENBQWEsVUFBQWpCLElBQUk7QUFBQSxxQkFBR1csVUFBVSxDQUFDWCxJQUFJLENBQUNULEtBQU4sRUFBWW1CLFFBQVosQ0FBYjtBQUFBLGFBQWpCLENBQWI7QUFFQSxtQkFBT00sT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFXQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVcsT0FBWCxDQUFYLEdBQStCLEVBQXRDO0FBQ0g7QUF6Q0wsV0EwQ1FsQixRQTFDUjtBQUFBLG9CQTRDS1QsS0FBSyxDQUFDVSxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQzVCLGdDQUNJLDREQUFDLDBEQUFELGtEQUNRRCxJQUFJLENBQUNoQixLQURiLHVEQUNzQixJQUR0QjtBQUVJLGlCQUFHLEVBQUVpQixLQUZUO0FBR0ksbUJBQUssa0JBQUVELElBQUksQ0FBQ1QsS0FBUCx1REFBYyxFQUh2QjtBQUlJLHFCQUFPLEVBQUU7QUFBQ1csb0JBQUksRUFBQ2pCLE9BQU8sQ0FBQ2tCO0FBQWQsZUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQU1LSCxJQUFJLENBQUNJLEtBTlYsdURBTWlCLEVBTmpCLENBREo7QUFVSCxXQVhBO0FBNUNMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFGSDs7SUF6R2VDLE87VUFDSTlCLFM7OztNQURKOEIsTztBQTJHaEJ0QixNQUFNLENBQUNtQyxTQUFQLEdBQW1CO0FBQ2ZkLE9BQUssRUFBRWUsaURBQVMsQ0FBQ0MsTUFERjtBQUVmN0IsT0FBSyxFQUFFNEIsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUN2QkYsaURBQVMsQ0FBQ0MsTUFEYSxFQUV2QkQsaURBQVMsQ0FBQ0csTUFGYSxDQUFwQixFQUdKQyxVQUxZO0FBTWZuQyxVQUFRLEVBQUUrQixpREFBUyxDQUFDSyxJQUFWLENBQWVELFVBTlY7QUFPZmpCLE1BQUksRUFBRWEsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkcsVUFQUjtBQVFmbEMsT0FBSyxFQUFFOEIsaURBQVMsQ0FBQ00sS0FBVixDQUFnQkYsVUFSUjtBQVNmL0Isa0JBQWdCLEVBQUUyQixpREFBUyxDQUFDTyxNQVRiO0FBVWZDLGlCQUFlLEVBQUVSLGlEQUFTLENBQUNPLE1BVlo7QUFXZmpDLGFBQVcsRUFBRTBCLGlEQUFTLENBQUNPO0FBWFIsQ0FBbkI7QUFjQXJCLE9BQU8sQ0FBQ2EsU0FBUixHQUFvQjtBQUNoQmQsT0FBSyxFQUFFZSxpREFBUyxDQUFDQyxNQUREO0FBRWhCN0IsT0FBSyxFQUFFNEIsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUN2QkYsaURBQVMsQ0FBQ0MsTUFEYSxFQUV2QkQsaURBQVMsQ0FBQ0csTUFGYSxDQUFwQixFQUdKQyxVQUxhO0FBTWhCbkMsVUFBUSxFQUFFK0IsaURBQVMsQ0FBQ0ssSUFBVixDQUFlRCxVQU5UO0FBT2hCakIsTUFBSSxFQUFFYSxpREFBUyxDQUFDQyxNQUFWLENBQWlCRyxVQVBQO0FBUWhCbEMsT0FBSyxFQUFFOEIsaURBQVMsQ0FBQ00sS0FBVixDQUFnQkYsVUFSUDtBQVNoQi9CLGtCQUFnQixFQUFFMkIsaURBQVMsQ0FBQ08sTUFUWjtBQVVoQkMsaUJBQWUsRUFBRVIsaURBQVMsQ0FBQ08sTUFWWDtBQVdoQmpDLGFBQVcsRUFBRTBCLGlEQUFTLENBQUNPO0FBWFAsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvV3JpdGluZ3MuY2IxM2VkYjhhMmE0NzRlNTkzMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWxlY3QgYXMgTWF0ZXJpYWxTZWxlY3QsIElucHV0TGFiZWwsIEZvcm1Db250cm9sLCBNZW51SXRlbSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUcmFuc2xhdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBpbnB1dExhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6XCIxcmVtXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTpcIuW+rui7n+ato+m7kemrlFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gICAgfSxcclxuICAgIHNlbGVjdFJlcXVpcmVkOntcclxuICAgICAgICAvLyBtYXJnaW5MZWZ0OlwiLTdweFwiXHJcbiAgICB9LFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBvbk9wZW4sXHJcbiAgICAgICAgb25DbG9zZSxcclxuICAgICAgICBvbkNoYW5nZSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBvcGVuLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGZvcm1Db250cm9sUHJvcHMsXHJcbiAgICAgICAgc2VsZWN0UHJvcHMsXHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgZGlzYWJsZWQgPWZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4PTAsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBuZXdQcm9wcyA9IHtcclxuICAgICAgICAuLi5wcm9wc1xyXG4gICAgfTtcclxuICAgIGRlbGV0ZSBuZXdQcm9wc1tcImhlbHBlclRleHRcIl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVJY29uLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8TWF0ZXJpYWxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tY29udHJvbGxlZC1vcGVuLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuPXtvbk9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclZhbHVlPXs8VHJhbnNsYXRlSWNvbi8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uc2VsZWN0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0saW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtLnByb3BzID8/IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7cm9vdDpjbGFzc2VzLmlucHV0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWF0ZXJpYWxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIGZvcm1Db250cm9sUHJvcHMsXHJcbiAgICAgICAgc2VsZWN0UHJvcHMsXHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgZGlzYWJsZWQgPWZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4PTAsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBuZXdQcm9wcyA9IHtcclxuICAgICAgICAuLi5wcm9wc1xyXG4gICAgfTtcclxuICAgIGRlbGV0ZSBuZXdQcm9wc1tcImhlbHBlclRleHRcIl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZUljb24vPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1Db250cm9sUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6Y2xhc3Nlcy5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDpjbGFzc2VzLnNlbGVjdFJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxNYXRlcmlhbFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5zZWxlY3RQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IHtzZWxlY3Q6IGNsYXNzZXMuaW5wdXR9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0RGlzcGxheVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4OnRhYkluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWU9PT1udWxsP1wiXCI6dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbXB0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJWYWx1ZT17c2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja0VxdWFsKGEsYil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYSA9PT0gbnVsbCB8fCBhPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYiA9PT0gbnVsbCB8fCBiID09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYiA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9IGIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSA9PSBiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVycz0gaXRlbXMuZmlsdGVyKGl0ZW09PiBjaGVja0VxdWFsKGl0ZW0udmFsdWUsc2VsZWN0ZWQpICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyc1swXT9maWx0ZXJzWzBdW1wibGFiZWxcIl06XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5uZXdQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0saW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtLnByb3BzID8/IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZT8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7cm9vdDpjbGFzc2VzLmlucHV0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbD8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvTWF0ZXJpYWxTZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5TZWxlY3QucHJvcFR5cGVzID0ge1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICBdKS5pc1JlcXVpcmVkLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRMYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcblNlbGVjdDIucHJvcFR5cGVzID0ge1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICBdKS5pc1JlcXVpcmVkLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRMYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==