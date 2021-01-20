module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/About/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/About/About.js":
/*!**********************************!*\
  !*** ./component/About/About.js ***!
  \**********************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"About\", function() { return About; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Public_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Public/Header */ \"./component/Public/Header.js\");\n/* harmony import */ var _Public_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Public/Banner */ \"./component/Public/Banner.js\");\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/weianwang/component/About/About.js\";\n\n\n\nconst About = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Public_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Public_Banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvQWJvdXQvQWJvdXQuanM/ODBiOSJdLCJuYW1lcyI6WyJBYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ3ZCLHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUVJO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFNSTtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBYUgsQ0FkTSIsImZpbGUiOiIuL2NvbXBvbmVudC9BYm91dC9BYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vUHVibGljL0hlYWRlcidcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vUHVibGljL0Jhbm5lcidcblxuZXhwb3J0IGNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJhbm5lci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/About/About.js\n");

/***/ }),

/***/ "./component/Public/Banner.js":
/*!************************************!*\
  !*** ./component/Public/Banner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_typewriting_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-typewriting-animation */ \"react-typewriting-animation\");\n/* harmony import */ var react_typewriting_animation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/weianwang/component/Public/Banner.js\";\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({});\n\nconst Banner = ({\n  t\n}) => {\n  const classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        rotateSpeed: 800,\n        typeSpeed: 80,\n        fontSize: '24px',\n        fontFamily: 'Roboto',\n        color: '#6f6f6f',\n        heading: 'Typewriter',\n        dataText: [t('context1'), t('context2')]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, undefined);\n};\n\nBanner.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__[\"withTranslation\"])('banner')(Banner));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Jhbm5lci5qcz9jMTE1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJCYW5uZXIiLCJ0IiwiY2xhc3NlcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLEVBQUQsQ0FBNUI7O0FBSUEsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVM7QUFFcEIsUUFBTUMsT0FBTyxHQUFHSixTQUFTLEVBQXpCO0FBRUEsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBRUk7QUFBQSw2QkFFSSxxRUFBQyxrRUFBRDtBQUNJLG1CQUFXLEVBQUUsR0FEakI7QUFFSSxpQkFBUyxFQUFFLEVBRmY7QUFHSSxnQkFBUSxFQUFFLE1BSGQ7QUFJSSxrQkFBVSxFQUFFLFFBSmhCO0FBS0ksYUFBSyxFQUFFLFNBTFg7QUFNSSxlQUFPLEVBQUUsWUFOYjtBQU9JLGdCQUFRLEVBQUUsQ0FBRUcsQ0FBQyxDQUFDLFVBQUQsQ0FBSCxFQUFpQkEsQ0FBQyxDQUFDLFVBQUQsQ0FBbEI7QUFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW1CSCxDQXZCRDs7QUF5QkFELE1BQU0sQ0FBQ0csU0FBUCxHQUFtQjtBQUNmRixHQUFDLEVBQUVHLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFESCxDQUFuQjtBQUllQyw0SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQlAsTUFBMUIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudC9QdWJsaWMvQmFubmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcblxufSlcblxuY29uc3QgQmFubmVyID0gKHt0fSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlU3BlZWQ9ezgwMH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXs4MH1cbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9eycyNHB4J31cbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT17J1JvYm90byd9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnIzZmNmY2Zid9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9eydUeXBld3JpdGVyJ31cbiAgICAgICAgICAgICAgICAgICAgZGF0YVRleHQ9e1sgdCgnY29udGV4dDEnKSwgdCgnY29udGV4dDInKV19XG4gICAgICAgICAgICAgICAgLz4gIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuQmFubmVyLnByb3BUeXBlcyA9IHtcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Jhbm5lcicpKEJhbm5lcikiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Public/Banner.js\n");

/***/ }),

/***/ "./component/Public/Header.js":
/*!************************************!*\
  !*** ./component/Public/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/Public/Header.module.css */ \"./css/Public/Header.module.css\");\n/* harmony import */ var _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ \"@material-ui/core/Link\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Translate */ \"@material-ui/icons/Translate\");\n/* harmony import */ var _material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Hidden */ \"@material-ui/core/Hidden\");\n/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__);\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/weianwang/component/Public/Header.js\";\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  title: {\n    fontFamily: 'Roboto',\n    fontWeight: 400,\n    paddingTop: '1rem'\n  },\n  link: {\n    fontFamily: 'Roboto',\n    fontWeight: 400,\n    letterSpacing: '1px',\n    marginLeft: '32px',\n    color: '#8F8F8F',\n    fontSize: '1rem',\n    \"&:hover\": {\n      color: 'black'\n    }\n  },\n  linkAnchor: {\n    fontFamily: 'Roboto',\n    fontWeight: 400,\n    letterSpacing: '1px',\n    marginLeft: '32px',\n    color: 'black',\n    fontSize: '1rem'\n  }\n});\n\nconst Header = ({\n  t\n}) => {\n  const classes = useStyles();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])(); // const {\n  //   handleDrawerOpen\n  // } = props;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      container: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 2,\n        style: {\n          marginTop: '0.5rem'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: classes.title,\n          children: t('title')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12___default.a, {\n        mdDown: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          item: true,\n          xs: 2,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            type: \"button\",\n            className: classes.link,\n            style: {\n              backgroundColor: 'transparent'\n            },\n            disableRipple: true,\n            onClick: () => _i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].language === 'en' ? 'zhHant' : 'en'),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 21\n            }, undefined), \"language/\\u8A9E\\u8A00\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 19\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          item: true,\n          xs: 1,\n          style: {\n            marginTop: '0.5rem'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n            href: \"./Work\",\n            underline: \"none\",\n            className: router.pathname == '/Work' ? classes.linkAnchor : classes.link,\n            children: t('work')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 19\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          item: true,\n          xs: 1,\n          style: {\n            marginTop: '0.5rem'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n            href: \"./Writings\",\n            underline: \"none\",\n            className: router.pathname == '/Writings' ? classes.linkAnchor : classes.link,\n            children: t('writings')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 19\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          item: true,\n          xs: 1,\n          style: {\n            marginTop: '0.5rem'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n            href: \"./About\",\n            underline: \"none\",\n            className: router.pathname == '/About' ? classes.linkAnchor : classes.link,\n            children: t('about')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 19\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          item: true,\n          xs: 1,\n          style: {\n            marginTop: '0.5rem'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n            href: \"./Resume\",\n            underline: \"none\",\n            className: router.pathname == '/Resume' ? classes.linkAnchor : classes.link,\n            children: t('resume')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 19\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12___default.a, {\n        lgUp: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          item: true,\n          xs: 2\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          item: true,\n          xs: 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          item: true,\n          xs: 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          item: true,\n          xs: 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          item: true,\n          xs: 1,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default.a // onClick={handleDrawerOpen}\n          , {\n            onClick: () => {\n              console.log(444, _i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].t('title'), _i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].t('resume'));\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 21\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 19\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 15\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 9\n  }, undefined);\n};\n\nHeader.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"withTranslation\"])('header')(Header));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0hlYWRlci5qcz85Mzk1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwicGFkZGluZ1RvcCIsImxpbmsiLCJsZXR0ZXJTcGFjaW5nIiwibWFyZ2luTGVmdCIsImNvbG9yIiwiZm9udFNpemUiLCJsaW5rQW5jaG9yIiwiSGVhZGVyIiwidCIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpMThuIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImJhbGwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxPQUFLLEVBQUU7QUFDTEMsY0FBVSxFQUFDLFFBRE47QUFFTEMsY0FBVSxFQUFDLEdBRk47QUFHTEMsY0FBVSxFQUFDO0FBSE4sR0FEb0I7QUFNM0JDLE1BQUksRUFBRTtBQUNKSCxjQUFVLEVBQUMsUUFEUDtBQUVKQyxjQUFVLEVBQUMsR0FGUDtBQUdKRyxpQkFBYSxFQUFDLEtBSFY7QUFJSkMsY0FBVSxFQUFFLE1BSlI7QUFLSkMsU0FBSyxFQUFDLFNBTEY7QUFNSkMsWUFBUSxFQUFDLE1BTkw7QUFPSixlQUFVO0FBQ05ELFdBQUssRUFBQztBQURBO0FBUE4sR0FOcUI7QUFpQjNCRSxZQUFVLEVBQUU7QUFDVlIsY0FBVSxFQUFDLFFBREQ7QUFFVkMsY0FBVSxF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QUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUUscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBS0UscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNFLHFFQUFDLG9FQUFELENBQ0U7QUFERjtBQUVFLG1CQUFPLEVBQUUsTUFBSTtBQUFDVSxxQkFBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQkwsMENBQUksQ0FBQ04sQ0FBTCxDQUFPLE9BQVAsQ0FBakIsRUFBa0NNLDBDQUFJLENBQUNOLENBQUwsQ0FBTyxRQUFQLENBQWxDO0FBQW9ELGFBRnBFO0FBQUEsbUNBSUUscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBNEVJO0FBQUcsZUFBUyxFQUFFWSxvRUFBTSxDQUFDQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWlGSCxDQTNGRDs7QUE2RkFkLE1BQU0sQ0FBQ2UsU0FBUCxHQUFtQjtBQUNqQmQsR0FBQyxFQUFFZSxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREQsQ0FBbkI7QUFLZUMsNEhBQWUsQ0FBQyxRQUFELENBQWYsQ0FBMEJuQixNQUExQixDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50L1B1YmxpYy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBUcmFuc2xhdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGUnXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHRpdGxlOiB7XG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcbiAgICBmb250V2VpZ2h0OjQwMCxcbiAgICBwYWRkaW5nVG9wOicxcmVtJ1xuICB9LFxuICBsaW5rOiB7XG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcbiAgICBmb250V2VpZ2h0OjQwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxuICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcbiAgICBjb2xvcjonIzhGOEY4RicsXG4gICAgZm9udFNpemU6JzFyZW0nLFxuICAgIFwiJjpob3ZlclwiOntcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xuICAgIH1cbiAgfSxcbiAgbGlua0FuY2hvcjoge1xuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXG4gICAgZm9udFdlaWdodDo0MDAsXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXG4gICAgY29sb3I6J2JsYWNrJyxcbiAgICBmb250U2l6ZTonMXJlbSdcbiAgfVxufSlcblxuY29uc3QgSGVhZGVyID0gKHt0fSkgPT4ge1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAvLyBjb25zdCB7XG4gICAgLy8gICBoYW5kbGVEcmF3ZXJPcGVuXG4gICAgLy8gfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0KCd0aXRsZScpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cbiAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaTE4bi5jaGFuZ2VMYW5ndWFnZShpMThuLmxhbmd1YWdlID09PSAnZW4nID8gJ3poSGFudCcgOiAnZW4nKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZUljb24vPmxhbmd1YWdlL+iqnuiogFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XG4gICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV29ya1wiXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xb3JrJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxuICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dyaXRpbmdzXCJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dyaXRpbmdzJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9BYm91dFwiXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9BYm91dCc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3QoJ2Fib3V0Jyl9XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XG4gICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vUmVzdW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1Jlc3VtZSc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3QoJ3Jlc3VtZScpfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9IaWRkZW4+XG5cbiAgICAgICAgICAgICAgPEhpZGRlbiBsZ1VwPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57Y29uc29sZS5sb2coNDQ0LCBpMThuLnQoJ3RpdGxlJyksIGkxOG4udCgncmVzdW1lJykpfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uLz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxuXG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PjwvcD5cbiAgICAgICAgICAgICBcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShIZWFkZXIpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Public/Header.js\n");

/***/ }),

/***/ "./css/Public/Header.module.css":
/*!**************************************!*\
  !*** ./css/Public/Header.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"button2\": \"Header_button2__wF7XG\",\n\t\"bounce\": \"Header_bounce__24tU9\",\n\t\"ball\": \"Header_ball__3pRi7\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3MvUHVibGljL0hlYWRlci5tb2R1bGUuY3NzPzRmNWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvbjJcIjogXCJIZWFkZXJfYnV0dG9uMl9fd0Y3WEdcIixcblx0XCJib3VuY2VcIjogXCJIZWFkZXJfYm91bmNlX18yNHRVOVwiLFxuXHRcImJhbGxcIjogXCJIZWFkZXJfYmFsbF9fM3BSaTdcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./css/Public/Header.module.css\n");

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.useTranslation = exports.nextI18Next = void 0;\n\nconst NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst {\n  localeSubpaths\n} = __webpack_require__(/*! next/config */ \"next/config\").default().publicRuntimeConfig;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = new NextI18Next({\n  otherLanguages: ['zhHant'],\n  localeSubpaths,\n  localePath: path.resolve('./public/static/locales')\n});\nconst nextI18Next = new NextI18Next({\n  otherLanguages: ['zhHant'],\n  localeSubpaths,\n  localePath: path.resolve('./public/static/locales')\n});\nexports.nextI18Next = nextI18Next;\nconst useTranslation = nextI18Next.useTranslation;\nexports.useTranslation = useTranslation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLmpzPzkzYjQiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSIsIm5leHRJMThOZXh0IiwidXNlVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxNQUFNQSxXQUFXLEdBQUdDLG1CQUFPLENBQUMsa0NBQUQsQ0FBUCxDQUF3QkMsT0FBNUM7O0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQXFCRixtQkFBTyxDQUFDLGdDQUFELENBQVAsQ0FBdUJDLE9BQXZCLEdBQWlDRSxtQkFBNUQ7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHSixtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUVBSyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsSUFBSVAsV0FBSixDQUFnQjtBQUMvQlEsZ0JBQWMsRUFBRSxDQUFDLFFBQUQsQ0FEZTtBQUUvQkwsZ0JBRitCO0FBRy9CTSxZQUFVLEVBQUVKLElBQUksQ0FBQ0ssT0FBTCxDQUFhLHlCQUFiO0FBSG1CLENBQWhCLENBQWpCO0FBS08sTUFBTUMsV0FBVyxHQUFHLElBQUlYLFdBQUosQ0FBZ0I7QUFDekNRLGdCQUFjLEVBQUUsQ0FBQyxRQUFELENBRHlCO0FBRXpDTCxnQkFGeUM7QUFHekNNLFlBQVUsRUFBRUosSUFBSSxDQUFDSyxPQUFMLENBQWEseUJBQWI7QUFINkIsQ0FBaEIsQ0FBcEI7O0FBS0EsTUFBTUUsY0FBYyxHQUFHRCxXQUFXLENBQUNDLGNBQW5DIiwiZmlsZSI6Ii4vaTE4bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XG5jb25zdCB7IGxvY2FsZVN1YnBhdGhzIH0gPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHQoKS5wdWJsaWNSdW50aW1lQ29uZmlnXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcbiAgb3RoZXJMYW5ndWFnZXM6IFsnemhIYW50J10sXG4gIGxvY2FsZVN1YnBhdGhzLFxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcbn0pXG5leHBvcnQgY29uc3QgbmV4dEkxOE5leHQgPSBuZXcgTmV4dEkxOE5leHQoe1xuICBvdGhlckxhbmd1YWdlczogWyd6aEhhbnQnXSxcbiAgbG9jYWxlU3VicGF0aHMsXG4gIGxvY2FsZVBhdGg6IHBhdGgucmVzb2x2ZSgnLi9wdWJsaWMvc3RhdGljL2xvY2FsZXMnKVxufSlcbmV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9IG5leHRJMThOZXh0LnVzZVRyYW5zbGF0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/About/index.js":
/*!******************************!*\
  !*** ./pages/About/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/About/About */ \"./component/About/About.js\");\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/weianwang/pages/About/index.js\";\n\n\n\nconst AboutPage = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_About_About__WEBPACK_IMPORTED_MODULE_2__[\"About\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, undefined);\n};\n\nAboutPage.getInitialProps = async () => ({\n  namespacesRequired: ['header', 'banner']\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BYm91dC9pbmRleC5qcz8wMTA3Il0sIm5hbWVzIjpbIkFib3V0UGFnZSIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBQ3BCLHNCQUNJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUdILENBSkQ7O0FBTUFBLFNBQVMsQ0FBQ0MsZUFBVixHQUE0QixhQUFhO0FBQ3JDQyxvQkFBa0IsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYO0FBRGlCLENBQWIsQ0FBNUI7O0FBSWVGLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvQWJvdXQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBYm91dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9BYm91dC9BYm91dCdcblxuY29uc3QgQWJvdXRQYWdlID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPEFib3V0Lz4gXG4gICAgKVxufVxuXG5BYm91dFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnaGVhZGVyJywgJ2Jhbm5lciddLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/About/index.js\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI/ZjZmYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Grid\n");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Hidden\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIj84ZTMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Hidden\n");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI/N2ZmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/IconButton\n");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI/YjIxZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Link\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Menu\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiPzhlZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Menu\n");

/***/ }),

/***/ "@material-ui/icons/Translate":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Translate" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Translate\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlXCI/YThlNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Translate\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-typewriting-animation":
/*!**********************************************!*\
  !*** external "react-typewriting-animation" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-typewriting-animation\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cIj9mOWMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-typewriting-animation\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });