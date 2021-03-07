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




var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\PublicComponent.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  inputLabel: {
    fontSize: "17px",
    fontFamily: "微軟正黑體",
    display: "flex",
    flexDirection: "row-Reverse"
  },
  selectRequired: {
    marginLeft: "-7px"
  }
});
function Select(props) {
  _s();

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], _objectSpread(_objectSpread({}, formControlProps), {}, {
    size: "small",
    fullWidth: true,
    variant: "outlined",
    disabled: disabled,
    style: {
      borderColor: 'blue'
    },
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
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], _objectSpread(_objectSpread(_objectSpread({}, selectProps), {}, {
      labelId: "demo-simple-select-label",
      id: "demo-simple-select",
      style: {
        color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
      },
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
            lineNumber: 102,
            columnNumber: 25
          }
        }), (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : "");
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], _objectSpread(_objectSpread({}, formControlProps), {}, {
    size: "small",
    fullWidth: true // variant="outlined"
    ,
    disabled: disabled,
    style: {
      borderColor: 'blue'
    },
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
      lineNumber: 146,
      columnNumber: 13
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
            lineNumber: 204,
            columnNumber: 25
          }
        }), (_item$label2 = item.label) !== null && _item$label2 !== void 0 ? _item$label2 : "");
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9QdWJsaWNDb21wb25lbnQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImlucHV0TGFiZWwiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInNlbGVjdFJlcXVpcmVkIiwibWFyZ2luTGVmdCIsIlNlbGVjdCIsInByb3BzIiwiY2xhc3NlcyIsImxhYmVsIiwidmFsdWUiLCJuYW1lIiwiaXRlbXMiLCJmb3JtQ29udHJvbFByb3BzIiwic2VsZWN0UHJvcHMiLCJyZXF1aXJlZCIsImRpc2FibGVkIiwidGFiSW5kZXgiLCJtb2RlIiwibmV3UHJvcHMiLCJib3JkZXJDb2xvciIsInJvb3QiLCJjb2xvciIsInNlbGVjdCIsImlucHV0Iiwic2VsZWN0ZWQiLCJjaGVja0VxdWFsIiwiYSIsImIiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsImZpbHRlcnMiLCJmaWx0ZXIiLCJpdGVtIiwibWFwIiwiaW5kZXgiLCJTZWxlY3QyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIm9uQ2hhbmdlIiwiZnVuYyIsImFycmF5Iiwib2JqZWN0IiwiaW5wdXRMYWJlbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxZQUFVLEVBQUU7QUFDUkMsWUFBUSxFQUFDLE1BREQ7QUFFUkMsY0FBVSxFQUFDLE9BRkg7QUFHUkMsV0FBTyxFQUFFLE1BSEQ7QUFJUkMsaUJBQWEsRUFBRTtBQUpQLEdBRGE7QUFPekJDLGdCQUFjLEVBQUM7QUFDWEMsY0FBVSxFQUFDO0FBREE7QUFQVSxDQUFELENBQTVCO0FBWU8sU0FBU0MsTUFBVCxDQUFnQkMs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UFI7QUFRZjlCLE9BQUssRUFBRTBCLGlEQUFTLENBQUNPLEtBQVYsQ0FBZ0JILFVBUlI7QUFTZjdCLGtCQUFnQixFQUFFeUIsaURBQVMsQ0FBQ1EsTUFUYjtBQVVmQyxpQkFBZSxFQUFFVCxpREFBUyxDQUFDUSxNQVZaO0FBV2ZoQyxhQUFXLEVBQUV3QixpREFBUyxDQUFDUTtBQVhSLENBQW5CO0FBY0FWLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQjtBQUNoQjVCLE9BQUssRUFBRTZCLGlEQUFTLENBQUNDLE1BREQ7QUFFaEI3QixPQUFLLEVBQUU0QixpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQ3ZCRixpREFBUyxDQUFDQyxNQURhLEVBRXZCRCxpREFBUyxDQUFDRyxNQUZhLENBQXBCLEVBR0pDLFVBTGE7QUFNaEJDLFVBQVEsRUFBRUwsaURBQVMsQ0FBQ00sSUFBVixDQUFlRixVQU5UO0FBT2hCL0IsTUFBSSxFQUFFMkIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkcsVUFQUDtBQVFoQjlCLE9BQUssRUFBRTBCLGlEQUFTLENBQUNPLEtBQVYsQ0FBZ0JILFVBUlA7QUFTaEI3QixrQkFBZ0IsRUFBRXlCLGlEQUFTLENBQUNRLE1BVFo7QUFVaEJDLGlCQUFlLEVBQUVULGlEQUFTLENBQUNRLE1BVlg7QUFXaEJoQyxhQUFXLEVBQUV3QixpREFBUyxDQUFDUTtBQVhQLENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1dyaXRpbmdzLjg0YjE4YjNiZjdiYTExNjU2YjIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgU2VsZWN0IGFzIE1hdGVyaWFsU2VsZWN0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbCwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGlucHV0TGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTpcIjE3cHhcIixcclxuICAgICAgICBmb250RmFtaWx5Olwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3ctUmV2ZXJzZVwiXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0UmVxdWlyZWQ6e1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6XCItN3B4XCJcclxuICAgIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0KHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBmb3JtQ29udHJvbFByb3BzLFxyXG4gICAgICAgIHNlbGVjdFByb3BzLFxyXG4gICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgIGRpc2FibGVkID1mYWxzZSxcclxuICAgICAgICB0YWJJbmRleD0wLFxyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBsZXQgbmV3UHJvcHMgPSB7XHJcbiAgICAgICAgLi4ucHJvcHNcclxuICAgIH07XHJcbiAgICBkZWxldGUgbmV3UHJvcHNbXCJoZWxwZXJUZXh0XCJdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIHsuLi5mb3JtQ29udHJvbFByb3BzfVxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICBzdHlsZT17e2JvcmRlckNvbG9yOidibHVlJ319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6Y2xhc3Nlcy5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOmNsYXNzZXMuc2VsZWN0UmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICB7Li4uc2VsZWN0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7c2VsZWN0OiBjbGFzc2VzLmlucHV0fSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBTZWxlY3REaXNwbGF5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDp0YWJJbmRleFxyXG4gICAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWU9PT1udWxsP1wiXCI6dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJWYWx1ZT17c2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRXF1YWwoYSxiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9IGIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT0gYjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzPSBpdGVtcy5maWx0ZXIoaXRlbT0+IGNoZWNrRXF1YWwoaXRlbS52YWx1ZSxzZWxlY3RlZCkgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnNbMF0/ZmlsdGVyc1swXVtcImxhYmVsXCJdOlwiXCI7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0saW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtLnByb3BzID8/IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWU/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7cm9vdDpjbGFzc2VzLmlucHV0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWw/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvTWF0ZXJpYWxTZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3QyKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBmb3JtQ29udHJvbFByb3BzLFxyXG4gICAgICAgIHNlbGVjdFByb3BzLFxyXG4gICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgIGRpc2FibGVkID1mYWxzZSxcclxuICAgICAgICB0YWJJbmRleD0wLFxyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBsZXQgbmV3UHJvcHMgPSB7XHJcbiAgICAgICAgLi4ucHJvcHNcclxuICAgIH07XHJcbiAgICBkZWxldGUgbmV3UHJvcHNbXCJoZWxwZXJUZXh0XCJdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgIHsuLi5mb3JtQ29udHJvbFByb3BzfVxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgLy8gdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICBzdHlsZT17e2JvcmRlckNvbG9yOidibHVlJ319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXRMYWJlbFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6Y2xhc3Nlcy5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOmNsYXNzZXMuc2VsZWN0UmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICB7Li4uc2VsZWN0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge3NlbGVjdDogY2xhc3Nlcy5pbnB1dH0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgU2VsZWN0RGlzcGxheVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6dGFiSW5kZXhcclxuICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPT09bnVsbD9cIlwiOnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9e3NlbGVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja0VxdWFsKGEsYil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBudWxsIHx8IGE9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiID09PSBudWxsIHx8IGIgPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBiLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhID09IGI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVycz0gaXRlbXMuZmlsdGVyKGl0ZW09PiBjaGVja0VxdWFsKGl0ZW0udmFsdWUsc2VsZWN0ZWQpICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzWzBdP2ZpbHRlcnNbMF1bXCJsYWJlbFwiXTpcIlwiO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHsuLi5uZXdQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICApO1xyXG59XHJcblxyXG5TZWxlY3QucHJvcFR5cGVzID0ge1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICBdKS5pc1JlcXVpcmVkLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRMYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcblNlbGVjdDIucHJvcFR5cGVzID0ge1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICBdKS5pc1JlcXVpcmVkLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRMYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==