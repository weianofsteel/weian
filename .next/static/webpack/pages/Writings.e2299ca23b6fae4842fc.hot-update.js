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
      renderValue: function renderValue() {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_7___default.a, {
          style: {
            backgroundColor: 'transparent'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
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
            lineNumber: 50,
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
        lineNumber: 88,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      xs: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
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
          lineNumber: 98,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], _objectSpread(_objectSpread(_objectSpread({}, selectProps), {}, {
          labelId: "demo-simple-select-label",
          id: "demo-simple-select",
          style: {
            backgroundColor: 'transparent',
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
          lineNumber: 109,
          columnNumber: 17
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1B1YmxpYy9QdWJsaWNDb21wb25lbnQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImlucHV0TGFiZWwiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInNlbGVjdFJlcXVpcmVkIiwiU2VsZWN0IiwicHJvcHMiLCJjbGFzc2VzIiwib25PcGVuIiwib25DbG9zZSIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJvcGVuIiwidmFsdWUiLCJtb2RlIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiaXRlbSIsImluZGV4Iiwicm9vdCIsImlucHV0IiwibGFiZWwiLCJTZWxlY3QyIiwibmFtZSIsImZvcm1Db250cm9sUHJvcHMiLCJzZWxlY3RQcm9wcyIsInJlcXVpcmVkIiwiZGlzYWJsZWQiLCJ0YWJJbmRleCIsIm5ld1Byb3BzIiwibWFyZ2luVG9wIiwiY29sb3IiLCJzZWxlY3QiLCJzZWxlY3RlZCIsImNoZWNrRXF1YWwiLCJhIiwiYiIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiZmlsdGVycyIsImZpbHRlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYXJyYXkiLCJvYmplY3QiLCJpbnB1dExhYmVsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxZQUFVLEVBQUU7QUFDUkMsWUFBUSxFQUFDLE1BREQ7QUFFUkMsY0FBVSxFQUFDLE9BRkg7QUFHUkMsV0FBTyxFQUFFLE1BSEQ7QUFJUkMsaUJBQWEsRUFBRTtBQUpQLEdBRGE7QUFPekJDLGdCQUFjLEVBQUMsQ0FDWDtBQURXO0FBUFUsQ0FB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QUFTLENBQUNNLEtBQVYsQ0FBZ0JGLFVBUlI7QUFTZnRCLGtCQUFnQixFQUFFa0IsaURBQVMsQ0FBQ08sTUFUYjtBQVVmQyxpQkFBZSxFQUFFUixpREFBUyxDQUFDTyxNQVZaO0FBV2Z4QixhQUFXLEVBQUVpQixpREFBUyxDQUFDTztBQVhSLENBQW5CO0FBY0EzQixPQUFPLENBQUNtQixTQUFSLEdBQW9CO0FBQ2hCcEIsT0FBSyxFQUFFcUIsaURBQVMsQ0FBQ0MsTUFERDtBQUVoQjlCLE9BQUssRUFBRTZCLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FDdkJGLGlEQUFTLENBQUNDLE1BRGEsRUFFdkJELGlEQUFTLENBQUNHLE1BRmEsQ0FBcEIsRUFHSkMsVUFMYTtBQU1oQnBDLFVBQVEsRUFBRWdDLGlEQUFTLENBQUNLLElBQVYsQ0FBZUQsVUFOVDtBQU9oQnZCLE1BQUksRUFBRW1CLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJHLFVBUFA7QUFRaEJuQyxPQUFLLEVBQUUrQixpREFBUyxDQUFDTSxLQUFWLENBQWdCRixVQVJQO0FBU2hCdEIsa0JBQWdCLEVBQUVrQixpREFBUyxDQUFDTyxNQVRaO0FBVWhCQyxpQkFBZSxFQUFFUixpREFBUyxDQUFDTyxNQVZYO0FBV2hCeEIsYUFBVyxFQUFFaUIsaURBQVMsQ0FBQ087QUFYUCxDQUFwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Xcml0aW5ncy5lMjI5OWNhMjNiNmZhZTQ4NDJmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFNlbGVjdCBhcyBNYXRlcmlhbFNlbGVjdCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2wsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFRyYW5zbGF0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGlucHV0TGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTpcIjFyZW1cIixcclxuICAgICAgICBmb250RmFtaWx5Olwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3ctUmV2ZXJzZVwiXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0UmVxdWlyZWQ6e1xyXG4gICAgICAgIC8vIG1hcmdpbkxlZnQ6XCItN3B4XCJcclxuICAgIH0sXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG9uT3BlbixcclxuICAgICAgICBvbkNsb3NlLFxyXG4gICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIG9wZW4sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8TWF0ZXJpYWxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvbk9wZW49e29uT3Blbn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmVcclxuICAgICAgICAgICAgICAgIHJlbmRlclZhbHVlPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VHJhbnNsYXRlSWNvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319Lz5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZT8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbD8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPiAgICAgICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIGZvcm1Db250cm9sUHJvcHMsXHJcbiAgICAgICAgc2VsZWN0UHJvcHMsXHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgZGlzYWJsZWQgPWZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4PTAsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBuZXdQcm9wcyA9IHtcclxuICAgICAgICAuLi5wcm9wc1xyXG4gICAgfTtcclxuICAgIGRlbGV0ZSBuZXdQcm9wc1tcImhlbHBlclRleHRcIl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZUljb24vPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1Db250cm9sUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6Y2xhc3Nlcy5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDpjbGFzc2VzLnNlbGVjdFJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxNYXRlcmlhbFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5zZWxlY3RQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7c2VsZWN0OiBjbGFzc2VzLmlucHV0fSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdERpc3BsYXlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDp0YWJJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPT09bnVsbD9cIlwiOnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9e3NlbGVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tFcXVhbChhLGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBiLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcnM9IGl0ZW1zLmZpbHRlcihpdGVtPT4gY2hlY2tFcXVhbChpdGVtLnZhbHVlLHNlbGVjdGVkKSAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnNbMF0/ZmlsdGVyc1swXVtcImxhYmVsXCJdOlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWU/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWw/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufVxyXG5cclxuU2VsZWN0LnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5TZWxlY3QyLnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=