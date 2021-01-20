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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/Public/Header.module.css */ \"./css/Public/Header.module.css\");\n/* harmony import */ var _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ \"@material-ui/core/Link\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Translate */ \"@material-ui/icons/Translate\");\n/* harmony import */ var _material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/weianwang/component/Public/Header.js\";\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  title: {\n    fontFamily: 'Roboto',\n    fontWeight: 400,\n    paddingTop: '1rem'\n  },\n  link: {\n    fontFamily: 'Roboto',\n    fontWeight: 400,\n    letterSpacing: '1px',\n    marginLeft: '32px',\n    color: '#8F8F8F',\n    fontSize: '1rem',\n    \"&:hover\": {\n      color: 'black'\n    }\n  },\n  linkAnchor: {\n    fontFamily: 'Roboto',\n    fontWeight: 400,\n    letterSpacing: '1px',\n    marginLeft: '32px',\n    color: 'black',\n    fontSize: '1rem'\n  }\n});\n\nconst Header = ({\n  t\n}) => {\n  const classes = useStyles();\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      container: true,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 2,\n        style: {\n          marginTop: '0.5rem'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: classes.title,\n          children: t('title')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 2,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          type: \"button\",\n          className: classes.link,\n          style: {\n            backgroundColor: 'transparent'\n          },\n          disableRipple: true,\n          onClick: () => _i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"i18n\"].language === 'en' ? 'zhHant' : 'en'),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 19\n          }, undefined), \"language/\\u8A9E\\u8A00\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 1,\n        style: {\n          marginTop: '0.5rem'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n          href: \"./Work\",\n          underline: \"none\",\n          className: router.pathname == '/Work' ? classes.linkAnchor : classes.link,\n          children: t('work')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 1,\n        style: {\n          marginTop: '0.5rem'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n          href: \"./Writings\",\n          underline: \"none\",\n          className: router.pathname == '/Writings' ? classes.linkAnchor : classes.link,\n          children: t('writings')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 1,\n        style: {\n          marginTop: '0.5rem'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n          href: \"./About\",\n          underline: \"none\",\n          className: router.pathname == '/About' ? classes.linkAnchor : classes.link,\n          children: t('about')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 15\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        item: true,\n        xs: 1,\n        style: {\n          marginTop: '0.5rem'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n          href: \"./Resume\",\n          underline: \"none\",\n          className: router.pathname == '/Resume' ? classes.linkAnchor : classes.link,\n          children: t('resume')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 15\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 9\n  }, undefined);\n};\n\nHeader.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"withTranslation\"])('header')(Header));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0hlYWRlci5qcz85Mzk1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwicGFkZGluZ1RvcCIsImxpbmsiLCJsZXR0ZXJTcGFjaW5nIiwibWFyZ2luTGVmdCIsImNvbG9yIiwiZm9udFNpemUiLCJsaW5rQW5jaG9yIiwiSGVhZGVyIiwidCIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpMThuIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInBhdGhuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQkMsT0FBSyxFQUFFO0FBQ0xDLGNBQVUsRUFBQyxRQUROO0FBRUxDLGNBQVUsRUFBQyxHQUZOO0FBR0xDLGNBQVUsRUFBQztBQUhOLEdBRG9CO0FBTTNCQyxNQUFJLEVBQUU7QUFDSkgsY0FBVSxFQUFDLFFBRFA7QUFFSkMsY0FBVSxFQUFDLEdBRlA7QUFHSkcsaUJBQWEsRUFBQyxLQUhWO0FBSUpDLGNBQVUsRUFBRSxNQUpSO0FBS0pDLFNBQUssRUFBQyxTQUxGO0FBTUpDLFlBQVEsRUFBQyxNQU5MO0FBT0osZUFBVTtBQUNORCxXQUFLLEVBQUM7QUFEQTtBQVBOLEdBTnFCO0FBaUIzQkUsWUFBVSxFQUFFO0FBQ1ZSLGNBQVUsRUFBQyxRQUREO0FBRVZDLGNBQVUsRUFBQyxHQUZEO0FBR1ZHLGlCQUFhLEVBQUMsS0FISjtBQUlWQyxjQUFVLEVBQUUsTUFKRjtB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QUFBWCxTQUF6QjtBQUFBLCtCQUNFLHFFQUFDLDZEQUFEO0FBQ0UsY0FBSSxFQUFDLFNBRFA7QUFFRSxtQkFBUyxFQUFDLE1BRlo7QUFHRSxtQkFBUyxFQUFFRixNQUFNLENBQUNPLFFBQVAsSUFBbUIsUUFBbkIsR0FBNEJSLE9BQU8sQ0FBQ0gsVUFBcEMsR0FBK0NHLE9BQU8sQ0FBQ1IsSUFIcEU7QUFBQSxvQkFLR08sQ0FBQyxDQUFDLE9BQUQ7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQ0YsZUE2Q0UscUVBQUMsNkRBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsQ0FBZjtBQUFrQixhQUFLLEVBQUU7QUFBQ0ksbUJBQVMsRUFBQztBQUFYLFNBQXpCO0FBQUEsK0JBQ0UscUVBQUMsNkRBQUQ7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLG1CQUFTLEVBQUMsTUFGWjtBQUdFLG1CQUFTLEVBQUVGLE1BQU0sQ0FBQ08sUUFBUCxJQUFtQixTQUFuQixHQUE2QlIsT0FBTyxDQUFDSCxVQUFyQyxHQUFnREcsT0FBTyxDQUFDUixJQUhyRTtBQUFBLG9CQUtHTyxDQUFDLENBQUMsUUFBRDtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFnRUgsQ0F0RUQ7O0FBd0VBRCxNQUFNLENBQUNXLFNBQVAsR0FBbUI7QUFDakJWLEdBQUMsRUFBRVcsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURELENBQW5CO0FBS2VDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCZixNQUExQixDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50L1B1YmxpYy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBUcmFuc2xhdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGUnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0aXRsZToge1xuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXG4gICAgZm9udFdlaWdodDo0MDAsXG4gICAgcGFkZGluZ1RvcDonMXJlbSdcbiAgfSxcbiAgbGluazoge1xuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXG4gICAgZm9udFdlaWdodDo0MDAsXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXG4gICAgY29sb3I6JyM4RjhGOEYnLFxuICAgIGZvbnRTaXplOicxcmVtJyxcbiAgICBcIiY6aG92ZXJcIjp7XG4gICAgICAgIGNvbG9yOidibGFjaydcbiAgICB9XG4gIH0sXG4gIGxpbmtBbmNob3I6IHtcbiAgICBmb250RmFtaWx5OidSb2JvdG8nLFxuICAgIGZvbnRXZWlnaHQ6NDAwLFxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXG4gICAgbWFyZ2luTGVmdDogJzMycHgnLFxuICAgIGNvbG9yOidibGFjaycsXG4gICAgZm9udFNpemU6JzFyZW0nXG4gIH1cbn0pXG5cbmNvbnN0IEhlYWRlciA9ICh7IHQgfSkgPT4ge1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3QoJ3RpdGxlJyl9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpMThuLmNoYW5nZUxhbmd1YWdlKGkxOG4ubGFuZ3VhZ2UgPT09ICdlbicgPyAnemhIYW50JyA6ICdlbicpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVJY29uLz5sYW5ndWFnZS/oqp7oqIBcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxuICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV29ya1wiXG4gICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dvcmsnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dyaXRpbmdzXCJcbiAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV3JpdGluZ3MnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QoJ3dyaXRpbmdzJyl9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XG4gICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICBocmVmPVwiLi9BYm91dFwiXG4gICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL0Fib3V0Jz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0KCdhYm91dCcpfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxuICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vUmVzdW1lXCJcbiAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvUmVzdW1lJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0KCdyZXN1bWUnKX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+TGVhcm4gTW9yZTwvcD4gKi99XG4gICAgICAgICAgICAgXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoSGVhZGVyKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Public/Header.js\n");

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

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst {\n  localeSubpaths\n} = __webpack_require__(/*! next/config */ \"next/config\").default().publicRuntimeConfig;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = new NextI18Next({\n  otherLanguages: ['zhHant'],\n  localeSubpaths,\n  localePath: path.resolve('./public/static/locales')\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLmpzPzkzYjQiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFxQkYsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLENBQXVCQyxPQUF2QixHQUFpQ0UsbUJBQTVEOztBQUNBLE1BQU1DLElBQUksR0FBR0osbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlQLFdBQUosQ0FBZ0I7QUFDL0JRLGdCQUFjLEVBQUUsQ0FBQyxRQUFELENBRGU7QUFFL0JMLGdCQUYrQjtBQUcvQk0sWUFBVSxFQUFFSixJQUFJLENBQUNLLE9BQUwsQ0FBYSx5QkFBYjtBQUhtQixDQUFoQixDQUFqQiIsImZpbGUiOiIuL2kxOG4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdFxuY29uc3QgeyBsb2NhbGVTdWJwYXRocyB9ID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0KCkucHVibGljUnVudGltZUNvbmZpZ1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ3poSGFudCddLFxuICBsb2NhbGVTdWJwYXRocyxcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Public_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Public/Header */ \"./component/Public/Header.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_Public_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Public/Banner */ \"./component/Public/Banner.js\");\n\nvar _jsxFileName = \"/Users/wangweian/Desktop/weianwang/pages/index.js\";\n\n\n\n\n\n\nconst HomePage = ({\n  t\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_Public_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 15\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_component_Public_Banner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, undefined);\n};\n\nHomePage.getInitialProps = async () => ({\n  namespacesRequired: ['header', 'banner', 'common']\n});\n\nHomePage.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__[\"withTranslation\"])('header')(HomePage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwidCIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBVTtBQUN2QixzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFFSTtBQUFBLDZCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBTUk7QUFBQSw2QkFDRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWNILENBZkQ7O0FBaUJBRCxRQUFRLENBQUNFLGVBQVQsR0FBMkIsYUFBYTtBQUNwQ0Msb0JBQWtCLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQjtBQURnQixDQUFiLENBQTNCOztBQUlBSCxRQUFRLENBQUNJLFNBQVQsR0FBcUI7QUFDbkJILEdBQUMsRUFBRUksaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURDLENBQXJCO0FBSWVDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCUixRQUExQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyJ1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50L1B1YmxpYy9CYW5uZXInXG5cbmNvbnN0IEhvbWVQYWdlID0gKHsgdCB9KSA9PntcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCYW5uZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gICAgXG59XG5cbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2hlYWRlcicsICdiYW5uZXInLCAnY29tbW9uJ10sXG4gIH0pXG4gIFxuSG9tZVBhZ2UucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuICBcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoSG9tZVBhZ2UpICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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