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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Writings/index.js");
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_typewriting_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-typewriting-animation */ "react-typewriting-animation");
/* harmony import */ var react_typewriting_animation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\Banner.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  content: {
    fontFamily: 'Roboto',
    fontSize: '2rem'
  }
});

const Banner = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const {
    mode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: classes.content,
        children: [t('context1'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 36
        }, undefined), t('context2')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

Banner.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('banner')(Banner));

/***/ }),

/***/ "./component/Public/Drawer.js":
/*!************************************!*\
  !*** ./component/Public/Drawer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\Drawer.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  main: {
    height: '100vh',
    overflowY: 'hidden',
    backgroundColor: '#1f1f1f',
    paddingLeft: '8%',
    paddingRight: '8%'
  },
  title: {
    fontFamily: 'Bebas Neue ',
    fontWeight: 400,
    letterSpacing: '1px',
    color: '#CACACA',
    fontSize: '2rem',
    "&:hover": {
      color: 'white'
    }
  },
  drawerLink: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: 400,
    letterSpacing: '1px',
    color: '#CACACA',
    fontSize: '22px',
    "&:hover": {
      color: 'white'
    }
  },
  drawerHeader: {
    marginTop: '3rem'
  },
  icon: {
    fontSize: '1.5rem',
    color: '#8F8F8F',
    "&:hover": {
      color: 'white'
    }
  }
});

const Drawer = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const {
    handleDrawerClose,
    lang
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          md: 2,
          style: {
            marginTop: '0.5rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: ".",
            underline: "none",
            className: classes.title,
            children: "WEIAN WANG"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 1,
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 1,
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 1,
          style: {
            textAlign: 'right'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
            style: {
              backgroundColor: 'transparent'
            },
            disableRipple: true,
            onClick: handleDrawerClose,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
              className: classes.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        className: classes.drawerHeader,
        style: {
          marginTop: '4rem'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/Work",
            underline: "none",
            className: classes.drawerLink,
            children: t('work')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        className: classes.drawerHeader,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/Writings",
            underline: "none",
            className: classes.drawerLink,
            children: t('writings')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        className: classes.drawerHeader,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: lang == 'en' ? './resume.pdf' : './履歷.pdf',
            target: "_blank",
            rel: "noopener",
            underline: "none",
            className: classes.drawerLink,
            children: t('resume')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, undefined);
};

Drawer.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('header')(Drawer));

/***/ }),

/***/ "./component/Public/Footer.js":
/*!************************************!*\
  !*** ./component/Public/Footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_public_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css/public.module.css */ "./css/public.module.css");
/* harmony import */ var _css_public_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_public_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\Footer.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  link: {
    color: 'black',
    "&:hover": {
      color: '#919191'
    }
  },
  linkNight: {
    color: 'white',
    "&:hover": {
      color: '#BDBDBD'
    }
  }
});

const Footer = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const {
    mode
  } = props;
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      container: true,
      className: mode == 'day' ? _css_public_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footerBlock : _css_public_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footerBlockNight,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 8,
        sm: 7,
        md: 4,
        style: {
          marginBottom: '2rem'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('contactTitle')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "+8869 12 597 109"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "weianofsteel@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 4,
        sm: 5,
        md: 4,
        style: {
          marginBottom: '2rem'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('followTitle')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "https://weianofsteel.medium.com/",
          target: "_blank",
          rel: "noopener",
          underline: "none",
          className: mode == 'day' ? classes.link : classes.linkNight,
          children: "Medium"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "https://github.com/weianofsteel",
          target: "_blank",
          rel: "noopener",
          underline: "none",
          className: mode == 'day' ? classes.link : classes.linkNight,
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "https://www.linkedin.com/in/weian-wang/",
          target: "_blank",
          rel: "noopener",
          underline: "none",
          className: mode == 'day' ? classes.link : classes.linkNight,
          children: "Linkedin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12,
        md: 4,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('copyright')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('copyrightDescription')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

Footer.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('footer')(Footer));

/***/ }),

/***/ "./component/Public/Header.js":
/*!************************************!*\
  !*** ./component/Public/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Public/Header.module.css */ "./css/Public/Header.module.css");
/* harmony import */ var _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _PublicComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PublicComponent */ "./component/Public/PublicComponent.js");
/* harmony import */ var _material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Brightness2Outlined */ "@material-ui/icons/Brightness2Outlined");
/* harmony import */ var _material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/WbSunnyOutlined */ "@material-ui/icons/WbSunnyOutlined");
/* harmony import */ var _material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../store */ "./store.js");

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\Header.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  title: {
    fontFamily: 'Bebas Neue ',
    fontWeight: 400,
    letterSpacing: '1px',
    fontSize: '2rem'
  },
  link: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '1px',
    marginLeft: '32px',
    color: '#8F8F8F',
    fontSize: '1.1rem',
    "&:hover": {
      color: 'black'
    }
  },
  nightLink: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '1px',
    marginLeft: '32px',
    color: '#FFFFFF',
    fontSize: '1.1rem',
    "&:hover": {
      color: '#BDBDBD'
    }
  },
  linkAnchor: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '1px',
    marginLeft: '32px',
    color: 'black',
    fontSize: '1.1rem'
  },
  nightLinkAnchor: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '1px',
    marginLeft: '32px',
    color: '#BDBDBD',
    fontSize: '1.1rem'
  },
  icon: {
    fontSize: '1.5rem',
    color: '#8F8F8F',
    "&:hover": {
      color: '#1F1F1F'
    }
  },
  nightIcon: {
    fontSize: '1.5rem',
    color: '#FFFFFF',
    "&:hover": {
      color: '#BDBDBD'
    }
  },
  formControl: {
    margin: '0.5rem',
    width: '6rem'
  },
  inputLabel: {
    fontSize: "17px",
    fontFamily: "微軟正黑體",
    display: "flex",
    flexDirection: "row-Reverse"
  }
});

const Header = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])(); // const [ language, setLanguage ] = React.useState('en');

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const handleChange = event => {
    // setLanguage(event.target.value);
    handleLangToRedux(event.target.value);
    _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].changeLanguage(event.target.value);
  };

  const handleLangToRedux = value => {
    if (value == 'en') {
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_16__["toEn"])());
    } else if (value == 'zhHant') {
      dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_16__["toZhHant"])());
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["useDispatch"])();
  const {
    handleDrawerOpen,
    mode,
    lang
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 4,
        md: 2,
        style: {
          marginTop: '0.5rem'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: ".",
          underline: "none",
          className: classes.title,
          style: {
            color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
          },
          children: "WEIAN WANG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 1,
        md: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 1,
        md: 2,
        lg: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
        mdDown: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 2,
          style: {
            marginTop: '0.3rem',
            paddingLeft: '6%'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PublicComponent__WEBPACK_IMPORTED_MODULE_12__["Select2"], {
            name: "lang",
            value: lang,
            onChange: handleChange,
            items: [{
              value: 'en',
              label: "English"
            }, {
              value: 'zhHant',
              label: "中文"
            }],
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '0.3rem',
            textAlign: 'center'
          },
          children: mode === 'day' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
            style: {
              backgroundColor: 'transparent',
              color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
            },
            disableRipple: true,
            onClick: () => dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_16__["toNight"])()),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_13___default.a, {
              fontSize: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 21
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
            style: {
              backgroundColor: 'transparent',
              color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
            },
            disableRipple: true,
            onClick: () => dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_16__["toDay"])()),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, {
              fontSize: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 23
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '1.5rem',
            marginLeft: lang == 'en' ? '-1rem' : ''
          },
          children: [mode === 'day' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Work",
            underline: "none",
            className: router.pathname == '/Work' ? classes.linkAnchor : classes.link,
            style: {
              fontWeight: lang == 'en' ? 'normal' : 'bold'
            },
            children: t('work')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Work",
            underline: "none",
            className: router.pathname == '/Work' ? classes.nightLinkAnchor : classes.nightLink,
            style: {
              fontWeight: lang == 'en' ? 'normal' : 'bold'
            },
            children: t('work')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '1.5rem',
            marginLeft: lang == 'en' ? '-1rem' : ''
          },
          children: [mode === 'day' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Writings",
            underline: "none",
            className: router.pathname == '/Writings' ? classes.linkAnchor : classes.link,
            style: {
              fontWeight: lang == 'en' ? 'normal' : 'bold'
            },
            children: t('writings')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Writings",
            underline: "none",
            className: router.pathname == '/Writings' ? classes.nightLinkAnchor : classes.nightLink,
            style: {
              fontWeight: lang == 'en' ? 'normal' : 'bold'
            },
            children: t('writings')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '1.5rem',
            marginLeft: lang == 'en' ? '0.8rem' : ''
          },
          children: [mode === 'day' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: lang == 'en' ? './resume.pdf' : './履歷.pdf',
            target: "_blank",
            rel: "noopener",
            underline: "none",
            className: router.pathname == '/Resume' ? classes.linkAnchor : classes.link,
            style: {
              fontWeight: lang == 'en' ? 'normal' : 'bold'
            },
            children: t('resume')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 23
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: lang == 'en' ? './resume.pdf' : './履歷.pdf',
            target: "_blank",
            rel: "noopener",
            underline: "none",
            className: router.pathname == '/Resume' ? classes.nightLinkAnchor : classes.nightLink,
            style: {
              fontWeight: lang == 'en' ? 'normal' : 'bold'
            },
            children: t('resume')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 23
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
        lgUp: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          sm: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          children: mode === 'day' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
            style: {
              backgroundColor: 'transparent',
              color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
            },
            disableRipple: true,
            onClick: () => dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_16__["toNight"])()),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_13___default.a, {
              fontSize: "inherit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 21
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
            style: {
              backgroundColor: 'transparent',
              color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
            },
            disableRipple: true,
            onClick: () => dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_16__["toDay"])()),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, {
              fontSize: "inherit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 23
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
          smUp: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '0.5rem',
            textAlign: 'center'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PublicComponent__WEBPACK_IMPORTED_MODULE_12__["Select"], {
            name: "lang",
            value: lang,
            onChange: handleChange,
            open: open,
            onClose: handleClose,
            onOpen: handleOpen,
            items: [{
              value: 'en',
              label: "English"
            }, {
              value: 'zhHant',
              label: "中文"
            }],
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            textAlign: 'right'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
            style: {
              backgroundColor: 'transparent'
            },
            disableRipple: true,
            onClick: handleDrawerOpen,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
              className: mode == 'day' ? classes.icon : classes.nightIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 9
  }, undefined);
};

Header.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('header')(Header));

/***/ }),

/***/ "./component/Public/PageLoader.js":
/*!****************************************!*\
  !*** ./component/Public/PageLoader.js ***!
  \****************************************/
/*! exports provided: PageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoader", function() { return PageLoader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-top-loading-bar */ "react-top-loading-bar");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\PageLoader.js";


const PageLoader = props => {
  const [progress, setProgress] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setProgress(100);
  }, []);
  const {
    mode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      color: mode === 'day' ? 'black' : 'white',
      height: 3,
      waitingTime: 500,
      transitionTime: 1000,
      loaderSpeed: 600,
      progress: progress,
      onLoaderFinished: () => setProgress(0)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./component/Public/PublicComponent.js":
/*!*********************************************!*\
  !*** ./component/Public/PublicComponent.js ***!
  \*********************************************/
/*! exports provided: Select, Select2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select2", function() { return Select2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Translate */ "@material-ui/icons/Translate");
/* harmony import */ var _material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\PublicComponent.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  inputLabel: {
    fontSize: "1.1rem",
    fontFamily: "微軟正黑體",
    display: "flex",
    flexDirection: "row-Reverse"
  }
});
function Select(props) {
  const classes = useStyles();
  const {
    onOpen,
    onClose,
    onChange,
    items,
    open,
    value,
    mode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      labelId: "demo-controlled-open-select-label",
      id: "demo-controlled-open-select",
      open: open,
      onClose: onClose,
      onOpen: onOpen,
      value: value,
      onChange: onChange,
      disableUnderline: true,
      autoFocus: false,
      renderValue: () => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_6___default.a, {
          style: {
            color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 28
        }, this);
      },
      style: {
        backgroundColor: 'transparent'
      },
      children: items.map(function (item, index) {
        var _item$props, _item$value, _item$label;

        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], _objectSpread(_objectSpread({}, (_item$props = item.props) !== null && _item$props !== void 0 ? _item$props : null), {}, {
          key: index,
          value: (_item$value = item.value) !== null && _item$value !== void 0 ? _item$value : "",
          classes: {
            root: classes.input
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }
        }), (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : "");
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}
function Select2(props) {
  const classes = useStyles();
  const {
    label,
    value,
    name,
    items,
    formControlProps,
    selectProps,
    required,
    disabled = false,
    tabIndex = 0,
    mode
  } = props;

  let newProps = _objectSpread({}, props);

  delete newProps["helperText"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      item: true,
      xs: 2,
      style: {
        marginTop: '1rem'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      item: true,
      xs: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      item: true,
      xs: 9,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], _objectSpread(_objectSpread({}, formControlProps), {}, {
        size: "small",
        fullWidth: true,
        disabled: disabled,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
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
          lineNumber: 95,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], _objectSpread(_objectSpread(_objectSpread({}, selectProps), {}, {
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
          renderValue: selected => {
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

            let filters = items.filter(item => checkEqual(item.value, selected));
            return filters[0] ? filters[0]["label"] : "";
          }
        }, newProps), {}, {
          children: items.map(function (item, index) {
            var _item$props2, _item$value2, _item$label2;

            return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], _objectSpread(_objectSpread({}, (_item$props2 = item.props) !== null && _item$props2 !== void 0 ? _item$props2 : null), {}, {
              key: index,
              value: (_item$value2 = item.value) !== null && _item$value2 !== void 0 ? _item$value2 : "",
              classes: {
                root: classes.input
              },
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 29
              }
            }), (_item$label2 = item.label) !== null && _item$label2 !== void 0 ? _item$label2 : "");
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }, this);
}
Select.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]).isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  inputLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  selectProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
Select2.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]).isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  inputLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  selectProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};

/***/ }),

/***/ "./component/Writings/Writings.js":
/*!****************************************!*\
  !*** ./component/Writings/Writings.js ***!
  \****************************************/
/*! exports provided: Writings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Writings", function() { return Writings; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Public_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Public/Header */ "./component/Public/Header.js");
/* harmony import */ var _Public_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Public/Banner */ "./component/Public/Banner.js");
/* harmony import */ var _Public_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Public/Drawer */ "./component/Public/Drawer.js");
/* harmony import */ var _Public_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Public/Footer */ "./component/Public/Footer.js");
/* harmony import */ var _component_Showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/Showcase */ "./component/Writings/component/Showcase.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Public_PageLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Public/PageLoader */ "./component/Public/PageLoader.js");

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Writings\\Writings.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  dayBackground: {
    backgroundColor: '#FFFFFF',
    color: '#1F1F1F'
  },
  nightBackground: {
    backgroundColor: 'black',
    color: '#FFFFFF'
  },
  body: {
    paddingLeft: '8%',
    paddingRight: '8%'
  }
});
const Writings = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const mode = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.mode);
  const lang = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.lang);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [drawer == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: mode === 'day' ? classes.dayBackground : classes.nightBackground,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_PageLoader__WEBPACK_IMPORTED_MODULE_9__["PageLoader"], {
          mode: mode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
            handleDrawerOpen: handleDrawerOpen,
            mode: mode,
            lang: lang
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '8rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Showcase__WEBPACK_IMPORTED_MODULE_6__["default"], {
            mode: mode,
            lang: lang
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '2rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }, undefined), drawer == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          height: '100vh',
          backgroundColor: '#1f1f1f'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          handleDrawerClose: handleDrawerClose,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./component/Writings/component/ArticleBlock.js":
/*!******************************************************!*\
  !*** ./component/Writings/component/ArticleBlock.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Writings\\component\\ArticleBlock.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
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
    paddingTop: '10%'
  }
});

const ArticleBlock = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const {
    title,
    description,
    image,
    urlEn,
    urlZhHant,
    mode,
    box,
    lang
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: lang === 'en' ? urlEn : urlZhHant,
      underline: "none",
      target: "_blank",
      rel: "noopener",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
          item: true,
          xs: 12,
          md: 8,
          style: {
            padding: '1rem'
          },
          children: [box == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
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
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              style: {
                color: mode == 'day' ? 'black' : 'white'
              },
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 29
          }, undefined), box == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
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
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              style: {
                color: mode == 'day' ? 'white' : 'black'
              },
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, undefined);
};

ArticleBlock.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('article')(ArticleBlock));

/***/ }),

/***/ "./component/Writings/component/ArticleBlock2.js":
/*!*******************************************************!*\
  !*** ./component/Writings/component/ArticleBlock2.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Writings\\component\\ArticleBlock2.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
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
    width: '70%' // padding:'5%',

  }
});

const ArticleBlock2 = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const {
    title,
    description,
    image,
    urlEn,
    urlZhHant,
    mode,
    box,
    lang
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: lang === 'en' ? urlEn : urlZhHant,
      underline: "none",
      target: "_blank",
      rel: "noopener",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
          item: true,
          xs: 12,
          md: 8,
          style: {
            padding: '1rem'
          },
          children: [box == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
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
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              style: {
                color: mode == 'day' ? 'black' : 'white'
              },
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 29
          }, undefined), box == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
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
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              style: {
                color: mode == 'day' ? 'white' : 'black'
              },
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, undefined);
};

ArticleBlock2.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('article')(ArticleBlock2));

/***/ }),

/***/ "./component/Writings/component/Showcase.js":
/*!**************************************************!*\
  !*** ./component/Writings/component/Showcase.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ArticleBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ArticleBlock */ "./component/Writings/component/ArticleBlock.js");
/* harmony import */ var _ArticleBlock2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ArticleBlock2 */ "./component/Writings/component/ArticleBlock2.js");
/* harmony import */ var _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/image/writings/dynamic-import.png */ "./public/image/writings/dynamic-import.png");
/* harmony import */ var _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/image/writings/globe.png */ "./public/image/writings/globe.png");
/* harmony import */ var _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/image/writings/npm.png */ "./public/image/writings/npm.png");
/* harmony import */ var _public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_image_writings_laptop_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/image/writings/laptop.png */ "./public/image/writings/laptop.png");
/* harmony import */ var _public_image_writings_laptop_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_laptop_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_image_writings_typewriter_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../public/image/writings/typewriter.png */ "./public/image/writings/typewriter.png");
/* harmony import */ var _public_image_writings_typewriter_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_typewriter_png__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Writings\\component\\Showcase.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  showcase: {
    marginTop: '1rem'
  },
  link: {
    backgroundColor: '#F5F5F5',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    marginTop: '1rem'
  },
  linkOnHover: {
    backgroundColor: '#1F1F1F',
    opacity: '100%',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    transition: '.4s ease-in-out',
    marginTop: '1rem'
  },
  nightLink: {
    backgroundColor: '#5c5c5c',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    marginTop: '1rem'
  },
  nightLinkOnHover: {
    backgroundColor: '#FFFFFF',
    opacity: '100%',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    transition: '.4s ease-in-out',
    marginTop: '1rem'
  },
  title: {
    fontFamily: 'Roboto',
    color: 'black'
  },
  titleOnHover: {
    fontFamily: 'Roboto',
    color: 'white'
  },
  description: {
    fontFamily: 'Roboto',
    color: 'black'
  },
  descriptionOnHover: {
    fontFamily: 'Roboto',
    color: 'white'
  }
});

const Showcase = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const [box1, setBox1] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const [box2, setBox2] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const [box3, setBox3] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const [box4, setBox4] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const [box5, setBox5] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);

  const handleBox1On = () => {
    setBox1(false);
  };

  const handleBox2On = () => {
    setBox2(false);
  };

  const handleBox3On = () => {
    setBox3(false);
  };

  const handleBox4On = () => {
    setBox4(false);
  };

  const handleBox5On = () => {
    setBox5(false);
  };

  const handleMouseLeave = () => {
    setBox1(true);
    setBox2(true);
    setBox3(true);
    setBox4(true);
    setBox5(true);
  };

  const {
    mode,
    lang
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [mode == 'day' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box1 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox1On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock2__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: t('title1'),
          description: t('description1'),
          image: _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_10___default.a,
          urlEn: 'https://levelup.gitconnected.com/exploring-next-js-multi-lingual-support-with-next-i18next-f4275d63c0e9',
          urlZhHant: 'https://weianofsteel.medium.com/%E6%8E%A2%E7%B4%A2-next-js-%E7%94%A8-next-i18next-%E5%AE%8C%E6%88%90%E5%A4%9A%E8%AA%9E%E8%A8%80%E6%94%AF%E6%8F%B4-eced3f5f99dc',
          mode: mode,
          box: box1,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box3 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox3On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title3'),
          description: t('description3'),
          image: _public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_11___default.a,
          urlEn: 'https://weianofsteel.medium.com/how-to-publish-your-react-component-package-to-npm-20ee4f81a506',
          urlZhHant: 'https://weianofsteel.medium.com/%E5%A6%82%E4%BD%95%E7%99%BC%E5%B8%83%E8%87%AA%E5%B7%B1%E7%9A%84-react-component-%E5%A5%97%E4%BB%B6%E5%88%B0-npm-%E4%B8%8A-acb042118ef5',
          mode: mode,
          box: box3,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box2 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox2On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title2'),
          description: t('description2'),
          image: _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_9___default.a,
          urlEn: 'https://javascript.plainenglish.io/exploring-next-js-dynamic-import-ccb28a03e7f9',
          urlZhHant: 'https://javascript.plainenglish.io/exploring-next-js-dynamic-import-ccb28a03e7f9',
          mode: mode,
          box: box2,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box4 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox4On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock2__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: t('title4'),
          description: t('description4'),
          image: _public_image_writings_typewriter_png__WEBPACK_IMPORTED_MODULE_13___default.a,
          urlEn: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          urlZhHant: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          mode: mode,
          box: box4,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box5 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox5On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title5'),
          description: t('description5'),
          image: _public_image_writings_laptop_png__WEBPACK_IMPORTED_MODULE_12___default.a,
          urlEn: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          urlZhHant: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          mode: mode,
          box: box5,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }, undefined), mode == 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box1 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox1On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock2__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: t('title1'),
          description: t('description1'),
          image: _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_10___default.a,
          urlEn: 'https://levelup.gitconnected.com/exploring-next-js-multi-lingual-support-with-next-i18next-f4275d63c0e9',
          urlZhHant: 'https://weianofsteel.medium.com/%E6%8E%A2%E7%B4%A2-next-js-%E7%94%A8-next-i18next-%E5%AE%8C%E6%88%90%E5%A4%9A%E8%AA%9E%E8%A8%80%E6%94%AF%E6%8F%B4-eced3f5f99dc',
          mode: mode,
          box: box1,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box3 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox3On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title3'),
          description: t('description3'),
          image: _public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_11___default.a,
          urlEn: 'https://weianofsteel.medium.com/how-to-publish-your-react-component-package-to-npm-20ee4f81a506',
          urlZhHant: 'https://weianofsteel.medium.com/%E5%A6%82%E4%BD%95%E7%99%BC%E5%B8%83%E8%87%AA%E5%B7%B1%E7%9A%84-react-component-%E5%A5%97%E4%BB%B6%E5%88%B0-npm-%E4%B8%8A-acb042118ef5',
          mode: mode,
          box: box3,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box2 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox2On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title2'),
          description: t('description2'),
          image: _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_9___default.a,
          urlEn: 'https://javascript.plainenglish.io/exploring-next-js-dynamic-import-ccb28a03e7f9',
          urlZhHant: 'https://javascript.plainenglish.io/exploring-next-js-dynamic-import-ccb28a03e7f9',
          mode: mode,
          box: box2,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box4 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox4On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock2__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: t('title4'),
          description: t('description4'),
          image: _public_image_writings_typewriter_png__WEBPACK_IMPORTED_MODULE_13___default.a,
          urlEn: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          urlZhHant: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          mode: mode,
          box: box4,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box5 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox5On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title5'),
          description: t('description5'),
          image: _public_image_writings_laptop_png__WEBPACK_IMPORTED_MODULE_12___default.a,
          urlEn: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          urlZhHant: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          mode: mode,
          box: box5,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 9
  }, undefined);
};

Showcase.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('article')(Showcase));

/***/ }),

/***/ "./css/Public/Header.module.css":
/*!**************************************!*\
  !*** ./css/Public/Header.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button2": "Header_button2__wF7XG",
	"bounce": "Header_bounce__24tU9",
	"ball": "Header_ball__3pRi7"
};


/***/ }),

/***/ "./css/public.module.css":
/*!*******************************!*\
  !*** ./css/public.module.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footerBlock": "public_footerBlock__XuCr-",
	"footerBlockNight": "public_footerBlockNight__3mi7b",
	"imgDescription": "public_imgDescription__2GBDJ",
	"imgDescriptionNight": "public_imgDescriptionNight__3CXJE",
	"bar": "public_bar__347QX"
};


/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next").default;

const localeSubpaths = __webpack_require__(/*! next/config */ "next/config").default().publicRuntimeConfig;

const path = __webpack_require__(/*! path */ "path");

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zhHant', 'fr', 'es'],
  localeSubpaths: {
    zhHant: 'cn',
    fr: 'fr',
    es: 'es'
  },
  localePath: path.resolve('./public/static/locales')
}); // export const useTranslation = nextI18Next.useTranslation;

/***/ }),

/***/ "./pages/Writings/index.js":
/*!*********************************!*\
  !*** ./pages/Writings/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Writings_Writings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Writings/Writings */ "./component/Writings/Writings.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\pages\\Writings\\index.js";





const WritingsPage = ({
  t
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Writings_Writings__WEBPACK_IMPORTED_MODULE_2__["Writings"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

WritingsPage.getInitialProps = async () => ({
  namespacesRequired: ['header', 'banner', 'article', 'footer']
});

WritingsPage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])('header')(WritingsPage));

/***/ }),

/***/ "./public/image/writings/dynamic-import.png":
/*!**************************************************!*\
  !*** ./public/image/writings/dynamic-import.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dynamic-import-32140e6fde0316b4afda7fb4f35d8722.png";

/***/ }),

/***/ "./public/image/writings/globe.png":
/*!*****************************************!*\
  !*** ./public/image/writings/globe.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/globe-df80796ce55c229fc47428e7722f523f.png";

/***/ }),

/***/ "./public/image/writings/laptop.png":
/*!******************************************!*\
  !*** ./public/image/writings/laptop.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/laptop-c4e417f4abbbaaf0bf29e9fc4c6c2b78.png";

/***/ }),

/***/ "./public/image/writings/npm.png":
/*!***************************************!*\
  !*** ./public/image/writings/npm.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/image/writings/typewriter.png":
/*!**********************************************!*\
  !*** ./public/image/writings/typewriter.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/typewriter-101f81af2f133059394472b09605138c.png";

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, toDay, toNight, toEn, toZhHant, resetCount, initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDay", function() { return toDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNight", function() { return toNight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEn", function() { return toEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toZhHant", function() { return toZhHant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCount", function() { return resetCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let store;
const exampleInitialState = {
  mode: 'day',
  lang: 'en'
};
const actionTypes = {
  DAY: 'DAY',
  NIGHT: 'NIGHT',
  EN: 'EN',
  ZHHANT: 'ZHHANT',
  RESET: 'RESET'
}; // REDUCERS

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.DAY:
      return _objectSpread(_objectSpread({}, state), {}, {
        mode: 'day'
      });

    case actionTypes.NIGHT:
      return _objectSpread(_objectSpread({}, state), {}, {
        mode: 'night'
      });

    case actionTypes.EN:
      return _objectSpread(_objectSpread({}, state), {}, {
        lang: 'en'
      });

    case actionTypes.ZHHANT:
      return _objectSpread(_objectSpread({}, state), {}, {
        lang: 'zhHant'
      });

    case actionTypes.RESET:
      return _objectSpread(_objectSpread({}, state), {}, {
        mode: 'day',
        lang: 'en'
      });

    default:
      return state;
  }
}; // ACTIONS

const toDay = () => {
  return {
    type: actionTypes.DAY
  };
};
const toNight = () => {
  return {
    type: actionTypes.NIGHT
  };
};
const toEn = () => {
  return {
    type: actionTypes.EN
  };
};
const toZhHant = () => {
  return {
    type: actionTypes.ZHHANT
  };
};
const resetCount = () => {
  return {
    type: actionTypes.RESET
  };
};
const persistConfig = {
  key: 'primary',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default()),
  whitelist: ['mode', 'lang'] // place to select which state you want to persist

};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistReducer"])(persistConfig, reducer);

function makeStore(initialState = exampleInitialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(persistedReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])()));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : makeStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = makeStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
} // import { useMemo } from 'react'
// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// let store
// const initialState = {
//     mode:'day'
// }
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'DAY':
//       return {
//         ...state,
//         mode: 'day',
//       }
//     case 'NIGHT':
//       return {
//         ...state,
//         mode: 'night',
//       }
//     case 'RESET':
//       return {
//         ...state,
//       }
//     default:
//       return state
//   }
// }
// function initStore(preloadedState = initialState) {
//   return createStore(
//     reducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware())
//   )
// }
// export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState)
//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     })
//     // Reset the current store
//     store = undefined
//   }
//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store
//   // Create the store once in the client
//   if (!store) store = _store
//   return _store
// }
// export function useStore(initialState) {
//   const store = useMemo(() => initializeStore(initialState), [initialState])
//   return store
// }

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Brightness2Outlined":
/*!*********************************************************!*\
  !*** external "@material-ui/icons/Brightness2Outlined" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Brightness2Outlined");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Translate":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Translate" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Translate");

/***/ }),

/***/ "@material-ui/icons/WbSunnyOutlined":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/WbSunnyOutlined" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/WbSunnyOutlined");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-top-loading-bar");

/***/ }),

/***/ "react-typewriting-animation":
/*!**********************************************!*\
  !*** external "react-typewriting-animation" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typewriting-animation");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9EcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9QYWdlTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvUHVibGljQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Xcml0aW5ncy9Xcml0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV3JpdGluZ3MvY29tcG9uZW50L0FydGljbGVCbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV3JpdGluZ3MvY29tcG9uZW50L0FydGljbGVCbG9jazIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1dyaXRpbmdzL2NvbXBvbmVudC9TaG93Y2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvUHVibGljL0hlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Nzcy9wdWJsaWMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9pMThuLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL1dyaXRpbmdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS93cml0aW5ncy9keW5hbWljLWltcG9ydC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL3dyaXRpbmdzL2dsb2JlLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2Uvd3JpdGluZ3MvbGFwdG9wLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2Uvd3JpdGluZ3MvbnBtLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2Uvd3JpdGluZ3MvdHlwZXdyaXRlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjb250ZW50IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiQmFubmVyIiwidCIsInByb3BzIiwiY2xhc3NlcyIsIm1vZGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiIsIm1haW4iLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInRpdGxlIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJjb2xvciIsImRyYXdlckxpbmsiLCJ0ZXh0QWxpZ24iLCJkcmF3ZXJIZWFkZXIiLCJtYXJnaW5Ub3AiLCJpY29uIiwiRHJhd2VyIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJsYW5nIiwibGluayIsImxpbmtOaWdodCIsIkZvb3RlciIsInN0eWxlcyIsImZvb3RlckJsb2NrIiwiZm9vdGVyQmxvY2tOaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJuaWdodExpbmsiLCJsaW5rQW5jaG9yIiwibmlnaHRMaW5rQW5jaG9yIiwibmlnaHRJY29uIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJ3aWR0aCIsImlucHV0TGFiZWwiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaGFuZGxlTGFuZ1RvUmVkdXgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImRpc3BhdGNoIiwidG9FbiIsInRvWmhIYW50IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVEcmF3ZXJPcGVuIiwibGFiZWwiLCJ0b05pZ2h0IiwidG9EYXkiLCJwYXRobmFtZSIsIlBhZ2VMb2FkZXIiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwidXNlRWZmZWN0IiwiU2VsZWN0Iiwib25PcGVuIiwib25DbG9zZSIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyb290IiwiaW5wdXQiLCJTZWxlY3QyIiwibmFtZSIsImZvcm1Db250cm9sUHJvcHMiLCJzZWxlY3RQcm9wcyIsInJlcXVpcmVkIiwiZGlzYWJsZWQiLCJ0YWJJbmRleCIsIm5ld1Byb3BzIiwic2VsZWN0UmVxdWlyZWQiLCJzZWxlY3QiLCJzZWxlY3RlZCIsImNoZWNrRXF1YWwiLCJhIiwiYiIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiZmlsdGVycyIsImZpbHRlciIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImFycmF5Iiwib2JqZWN0IiwiaW5wdXRMYWJlbFByb3BzIiwiZGF5QmFja2dyb3VuZCIsIm5pZ2h0QmFja2dyb3VuZCIsImJvZHkiLCJXcml0aW5ncyIsImRyYXdlciIsInNldERyYXdlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkZXNjcmlwdGlvbiIsImltZyIsInBhZGRpbmdUb3AiLCJBcnRpY2xlQmxvY2siLCJpbWFnZSIsInVybEVuIiwidXJsWmhIYW50IiwiYm94IiwicGFkZGluZyIsIkFydGljbGVCbG9jazIiLCJzaG93Y2FzZSIsIm92ZXJmbG93IiwibGlua09uSG92ZXIiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsIm5pZ2h0TGlua09uSG92ZXIiLCJ0aXRsZU9uSG92ZXIiLCJkZXNjcmlwdGlvbk9uSG92ZXIiLCJTaG93Y2FzZSIsImJveDEiLCJzZXRCb3gxIiwiYm94MiIsInNldEJveDIiLCJib3gzIiwic2V0Qm94MyIsImJveDQiLCJzZXRCb3g0IiwiYm94NSIsInNldEJveDUiLCJoYW5kbGVCb3gxT24iLCJoYW5kbGVCb3gyT24iLCJoYW5kbGVCb3gzT24iLCJoYW5kbGVCb3g0T24iLCJoYW5kbGVCb3g1T24iLCJoYW5kbGVNb3VzZUxlYXZlIiwiaW1nMDIiLCJpbWcwMyIsImltZzAxIiwiaW1nMDUiLCJpbWcwNCIsIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJsb2NhbGVTdWJwYXRocyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJwYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHRMYW5ndWFnZSIsIm90aGVyTGFuZ3VhZ2VzIiwiemhIYW50IiwiZnIiLCJlcyIsImxvY2FsZVBhdGgiLCJyZXNvbHZlIiwiV3JpdGluZ3NQYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwic3RvcmUiLCJleGFtcGxlSW5pdGlhbFN0YXRlIiwiYWN0aW9uVHlwZXMiLCJEQVkiLCJOSUdIVCIsIkVOIiwiWkhIQU5UIiwiUkVTRVQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsInJlc2V0Q291bnQiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmFnZSIsIndoaXRlbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJwZXJzaXN0UmVkdWNlciIsIm1ha2VTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiX3N0b3JlIiwiZ2V0U3Rh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b250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvV3JpdGluZ3MvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBjb250ZW50OntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQmFubmVyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRleHQxJyl9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29udGV4dDInKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5CYW5uZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdiYW5uZXInKShCYW5uZXIpICAgICAgICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVpZ2h0OicxMDB2aCcsXHJcbiAgICAgICAgb3ZlcmZsb3dZOidoaWRkZW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonIzFmMWYxZicsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzglJywgXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Oic4JSdcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J0JlYmFzIE5ldWUgJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOicjQ0FDQUNBJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonI0NBQ0FDQScsXHJcbiAgICAgICAgZm9udFNpemU6JzIycHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9LFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBEcmF3ZXIgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZSxcclxuICAgICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV0VJQU4gV0FOR1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfSBzdHlsZT17e21hcmdpblRvcDonNHJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xb3JrXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV3JpdGluZ3NcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCd3cml0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xhbmc9PSdlbic/Jy4vcmVzdW1lLnBkZic6Jy4v5bGl5q23LnBkZid9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXInIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgncmVzdW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkRyYXdlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKERyYXdlcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvcHVibGljLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGluazoge1xyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonIzkxOTE5MSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGlua05pZ2h0OntcclxuICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyNCREJEQkQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgRm9vdGVyID0gKHt0LCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSAgPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PSdkYXknP3N0eWxlcy5mb290ZXJCbG9jazpzdHlsZXMuZm9vdGVyQmxvY2tOaWdodH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBzbT17N30gbWQ9ezR9IHN0eWxlPXt7bWFyZ2luQm90dG9tOicycmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb250YWN0VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPis4ODY5IDEyIDU5NyAxMDk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPndlaWFub2ZzdGVlbEBnbWFpbC5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBzbT17NX0gbWQ9ezR9IHN0eWxlPXt7bWFyZ2luQm90dG9tOicycmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdmb2xsb3dUaXRsZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93ZWlhbm9mc3RlZWwubWVkaXVtLmNvbS8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09J2RheSc/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua05pZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVkaXVtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vd2VpYW5vZnN0ZWVsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGU9PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtOaWdodH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdpdGh1YlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dlaWFuLXdhbmcvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGU9PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtOaWdodH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmtlZGluXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnY29weXJpZ2h0Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2NvcHlyaWdodERlc2NyaXB0aW9uJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcbiAgXHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignZm9vdGVyJykoRm9vdGVyKVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljL0hlYWRlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IHtTZWxlY3QsIFNlbGVjdDJ9IGZyb20gJy4vUHVibGljQ29tcG9uZW50JztcclxuaW1wb3J0IEJyaWdodG5lc3MyT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMk91dGxpbmVkJztcclxuaW1wb3J0IFdiU3VubnlPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1diU3VubnlPdXRsaW5lZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHRvRGF5LCB0b05pZ2h0LCB0b0VuLCB0b1poSGFudCB9IGZyb20gJy4uLy4uL3N0b3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRGYW1pbHk6J0JlYmFzIE5ldWUgJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIGZvbnRTaXplOicycmVtJyxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICBmb250U2l6ZTonMS4xcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9XHJcbiAgfSxcclxuICBuaWdodExpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonI0ZGRkZGRicsXHJcbiAgICBmb250U2l6ZTonMS4xcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgZm9udFNpemU6JzEuMXJlbSdcclxuICB9LFxyXG4gIG5pZ2h0TGlua0FuY2hvcjoge1xyXG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgIGNvbG9yOicjQkRCREJEJyxcclxuICAgIGZvbnRTaXplOicxLjFyZW0nXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgIH1cclxuICB9LFxyXG4gIG5pZ2h0SWNvbjp7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGZvcm1Db250cm9sOiB7XHJcbiAgICBtYXJnaW46ICcwLjVyZW0nLFxyXG4gICAgd2lkdGg6JzZyZW0nLFxyXG4gIH0sXHJcbiAgaW5wdXRMYWJlbDoge1xyXG4gICAgZm9udFNpemU6XCIxN3B4XCIsXHJcbiAgICBmb250RmFtaWx5Olwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gY29uc3QgWyBsYW5ndWFnZSwgc2V0TGFuZ3VhZ2UgXSA9IFJlYWN0LnVzZVN0YXRlKCdlbicpO1xyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgLy8gc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaGFuZGxlTGFuZ1RvUmVkdXgoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMYW5nVG9SZWR1eCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZih2YWx1ZSA9PSAnZW4nKSB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9FbigpKVxyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIGlmICh2YWx1ZSA9PSAnemhIYW50Jykge1xyXG4gICAgICAgIGRpc3BhdGNoKHRvWmhIYW50KCkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBoYW5kbGVEcmF3ZXJPcGVuLFxyXG4gICAgICBtb2RlLFxyXG4gICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFdFSUFOIFdBTkdcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfSBsZz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuM3JlbScsIHBhZGRpbmdMZWZ0Oic2JSd9fT5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdDJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOidlbicsbGFiZWw6XCJFbmdsaXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonemhIYW50JyxsYWJlbDpcIuS4reaWh1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuM3JlbScsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlID09PSAnZGF5Jz9cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmRpc3BhdGNoKHRvTmlnaHQoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJpZ2h0bmVzczJPdXRsaW5lZEljb24gZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmRpc3BhdGNoKHRvRGF5KCkpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxXYlN1bm55T3V0bGluZWRJY29uIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbScsIG1hcmdpbkxlZnQ6KGxhbmc9PSdlbic/Jy0xcmVtJzonJyl9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nZGF5JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xb3JrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV29yayc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDoobGFuZz09J2VuJz8nbm9ybWFsJzonYm9sZCcpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV29ya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dvcmsnP2NsYXNzZXMubmlnaHRMaW5rQW5jaG9yOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OihsYW5nPT0nZW4nPydub3JtYWwnOidib2xkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3b3JrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJywgbWFyZ2luTGVmdDoobGFuZz09J2VuJz8nLTFyZW0nOicnKX19PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSdkYXknJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dyaXRpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV3JpdGluZ3MnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6KGxhbmc9PSdlbic/J25vcm1hbCc6J2JvbGQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dyaXRpbmdzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J25pZ2h0JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xcml0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dyaXRpbmdzJz9jbGFzc2VzLm5pZ2h0TGlua0FuY2hvcjpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDoobGFuZz09J2VuJz8nbm9ybWFsJzonYm9sZCcpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbScsIG1hcmdpbkxlZnQ6KGxhbmc9PSdlbic/JzAuOHJlbSc6JycpfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlPT09J2RheScgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsYW5nPT0nZW4nPycuL3Jlc3VtZS5wZGYnOicuL+Wxpeatty5wZGYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1Jlc3VtZSc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OihsYW5nPT0nZW4nPydub3JtYWwnOidib2xkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgncmVzdW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU9PT0nbmlnaHQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGFuZz09J2VuJz8nLi9yZXN1bWUucGRmJzonLi/lsaXmrbcucGRmJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9SZXN1bWUnP2NsYXNzZXMubmlnaHRMaW5rQW5jaG9yOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6KGxhbmc9PSdlbic/J25vcm1hbCc6J2JvbGQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdyZXN1bWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICA8SGlkZGVuIGxnVXA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzbT17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlID09PSAnZGF5Jz9cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmRpc3BhdGNoKHRvTmlnaHQoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJpZ2h0bmVzczJPdXRsaW5lZEljb24gZm9udFNpemU9J2luaGVyaXQnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9EYXkoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFdiU3VubnlPdXRsaW5lZEljb24gZm9udFNpemU9J2luaGVyaXQnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbk9wZW49e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonZW4nLGxhYmVsOlwiRW5nbGlzaFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6J3poSGFudCcsbGFiZWw6XCLkuK3mlodcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT17bW9kZT09J2RheSc/Y2xhc3Nlcy5pY29uOmNsYXNzZXMubmlnaHRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT48L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKEhlYWRlcikiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInXHJcbiBcclxuZXhwb3J0IGNvbnN0IFBhZ2VMb2FkZXIgPSAocHJvcHMpID0+IHtcclxuICBcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldFByb2dyZXNzKDEwMCk7XHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgbW9kZVxyXG4gIH0gPSBwcm9wcztcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TG9hZGluZ0JhclxyXG4gICAgICAgIGNvbG9yPXttb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnfVxyXG4gICAgICAgIGhlaWdodD17M31cclxuICAgICAgICB3YWl0aW5nVGltZT17NTAwfVxyXG4gICAgICAgIHRyYW5zaXRpb25UaW1lPXsxMDAwfVxyXG4gICAgICAgIGxvYWRlclNwZWVkPXs2MDB9XHJcbiAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxyXG4gICAgICAgIG9uTG9hZGVyRmluaXNoZWQ9eygpID0+IHNldFByb2dyZXNzKDApfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFNlbGVjdCBhcyBNYXRlcmlhbFNlbGVjdCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2wsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFRyYW5zbGF0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGlucHV0TGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTpcIjEuMXJlbVwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6XCLlvq7ou5/mraPpu5Hpq5RcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1SZXZlcnNlXCJcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBvbk9wZW4sXHJcbiAgICAgICAgb25DbG9zZSxcclxuICAgICAgICBvbkNoYW5nZSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBvcGVuLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgb25PcGVuPXtvbk9wZW59XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUcmFuc2xhdGVJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19Lz5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZT8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbD8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPiAgICAgICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIGZvcm1Db250cm9sUHJvcHMsXHJcbiAgICAgICAgc2VsZWN0UHJvcHMsXHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgZGlzYWJsZWQgPWZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4PTAsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBuZXdQcm9wcyA9IHtcclxuICAgICAgICAuLi5wcm9wc1xyXG4gICAgfTtcclxuICAgIGRlbGV0ZSBuZXdQcm9wc1tcImhlbHBlclRleHRcIl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZUljb24vPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1Db250cm9sUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6Y2xhc3Nlcy5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDpjbGFzc2VzLnNlbGVjdFJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxNYXRlcmlhbFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5zZWxlY3RQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge3NlbGVjdDogY2xhc3Nlcy5pbnB1dH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBTZWxlY3REaXNwbGF5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6dGFiSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZT09PW51bGw/XCJcIjp2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclZhbHVlPXtzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRXF1YWwoYSxiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBudWxsIHx8IGE9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiID09PSBudWxsIHx8IGIgPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gYi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhID09IGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzPSBpdGVtcy5maWx0ZXIoaXRlbT0+IGNoZWNrRXF1YWwoaXRlbS52YWx1ZSxzZWxlY3RlZCkgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzWzBdP2ZpbHRlcnNbMF1bXCJsYWJlbFwiXTpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn1cclxuXHJcblNlbGVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuU2VsZWN0Mi5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vUHVibGljL0hlYWRlcidcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9QdWJsaWMvQmFubmVyJ1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4uL1B1YmxpYy9EcmF3ZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vUHVibGljL0Zvb3RlcidcclxuaW1wb3J0IFNob3djYXNlIGZyb20gJy4vY29tcG9uZW50L1Nob3djYXNlJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUGFnZUxvYWRlciB9IGZyb20gJy4uL1B1YmxpYy9QYWdlTG9hZGVyJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBkYXlCYWNrZ3JvdW5kOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyNGRkZGRkYnLFxyXG4gICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgfSxcclxuICAgIG5pZ2h0QmFja2dyb3VuZDp7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidibGFjaycsXHJcbiAgICAgICAgY29sb3I6JyNGRkZGRkYnXHJcbiAgICB9LFxyXG4gICAgYm9keTp7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzglJywgXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Oic4JSdcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBXcml0aW5ncyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW2RyYXdlciwgc2V0RHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXREcmF3ZXIoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1vZGUpXHJcbiAgICBjb25zdCBsYW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sYW5nKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZHJhd2VyID09IGZhbHNlICYmXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmRheUJhY2tncm91bmQ6Y2xhc3Nlcy5uaWdodEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VMb2FkZXIgbW9kZT17bW9kZX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonOHJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93Y2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzJyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge2RyYXdlciA9PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6JyMxZjFmMWYnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZT17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NzAwLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgbWFyZ2luVG9wOicxcmVtJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJ1xyXG4gICAgfSxcclxuICAgIGltZzp7XHJcbiAgICAgICAgd2lkdGg6JzgwJScsXHJcbiAgICAgICAgcGFkZGluZ1RvcDonMTAlJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQXJ0aWNsZUJsb2NrID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIHVybEVuLFxyXG4gICAgICAgIHVybFpoSGFudCxcclxuICAgICAgICBtb2RlLFxyXG4gICAgICAgIGJveCxcclxuICAgICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2xhbmc9PT0nZW4nP3VybEVuOnVybFpoSGFudH1cclxuICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0gc3R5bGU9e3twYWRkaW5nOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym94PT10cnVlJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHN0eWxlPXt7Y29sb3I6KG1vZGU9PSdkYXknPydibGFjayc6J3doaXRlJyl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259IHN0eWxlPXt7Y29sb3I6KG1vZGU9PSdkYXknPydibGFjayc6J3doaXRlJyl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JveD09ZmFsc2UmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gc3R5bGU9e3tjb2xvcjoobW9kZT09J2RheSc/J3doaXRlJzonYmxhY2snKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0gc3R5bGU9e3tjb2xvcjoobW9kZT09J2RheSc/J3doaXRlJzonYmxhY2snKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkFydGljbGVCbG9jay5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2FydGljbGUnKShBcnRpY2xlQmxvY2spIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgZm9udFdlaWdodDo3MDAsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzFyZW0nLFxyXG4gICAgICAgIGZvbnRTaXplOicxLjJyZW0nXHJcbiAgICB9LFxyXG4gICAgaW1nOntcclxuICAgICAgICB3aWR0aDonNzAlJyxcclxuICAgICAgICAvLyBwYWRkaW5nOic1JScsXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBBcnRpY2xlQmxvY2syID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIHVybEVuLFxyXG4gICAgICAgIHVybFpoSGFudCxcclxuICAgICAgICBtb2RlLFxyXG4gICAgICAgIGJveCxcclxuICAgICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2xhbmc9PT0nZW4nP3VybEVuOnVybFpoSGFudH1cclxuICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0gc3R5bGU9e3twYWRkaW5nOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym94PT10cnVlJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHN0eWxlPXt7Y29sb3I6KG1vZGU9PSdkYXknPydibGFjayc6J3doaXRlJyl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259IHN0eWxlPXt7Y29sb3I6KG1vZGU9PSdkYXknPydibGFjayc6J3doaXRlJyl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JveD09ZmFsc2UmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gc3R5bGU9e3tjb2xvcjoobW9kZT09J2RheSc/J3doaXRlJzonYmxhY2snKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0gc3R5bGU9e3tjb2xvcjoobW9kZT09J2RheSc/J3doaXRlJzonYmxhY2snKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkFydGljbGVCbG9jazIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdhcnRpY2xlJykoQXJ0aWNsZUJsb2NrMikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IEFydGljbGVCbG9jayBmcm9tICcuL0FydGljbGVCbG9jaydcclxuaW1wb3J0IEFydGljbGVCbG9jazIgZnJvbSAnLi9BcnRpY2xlQmxvY2syJ1xyXG5pbXBvcnQgaW1nMDEgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL3dyaXRpbmdzL2R5bmFtaWMtaW1wb3J0LnBuZydcclxuaW1wb3J0IGltZzAyIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS93cml0aW5ncy9nbG9iZS5wbmcnXHJcbmltcG9ydCBpbWcwMyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2Uvd3JpdGluZ3MvbnBtLnBuZydcclxuaW1wb3J0IGltZzA0IGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS93cml0aW5ncy9sYXB0b3AucG5nJ1xyXG5pbXBvcnQgaW1nMDUgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL3dyaXRpbmdzL3R5cGV3cml0ZXIucG5nJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBzaG93Y2FzZToge1xyXG4gICAgICAgIG1hcmdpblRvcDonMXJlbSdcclxuICAgIH0sIFxyXG4gICAgbGluazoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUY1RjUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgbGlua09uSG92ZXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyMxRjFGMUYnLFxyXG4gICAgICAgIG9wYWNpdHk6JzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnLjRzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgbmlnaHRMaW5rOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNWM1YzVjJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDonMTAwJScsXHJcbiAgICAgICAgb3ZlcmZsb3c6J2hpZGRlbicsXHJcbiAgICAgICAgbWFyZ2luVG9wOicxcmVtJ1xyXG4gICAgfSxcclxuICAgIG5pZ2h0TGlua09uSG92ZXI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyNGRkZGRkYnLFxyXG4gICAgICAgIG9wYWNpdHk6JzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnLjRzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlT25Ib3Zlcjp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uT25Ib3Zlcjp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBTaG93Y2FzZSA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFsgYm94MSwgc2V0Qm94MV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbIGJveDIsIHNldEJveDJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgWyBib3gzLCBzZXRCb3gzXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFsgYm94NCwgc2V0Qm94NF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbIGJveDUsIHNldEJveDVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94MU9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDEoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDJPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3gyKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3gzT24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94NE9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDVPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3g1KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDEodHJ1ZSk7XHJcbiAgICAgICAgc2V0Qm94Mih0cnVlKTtcclxuICAgICAgICBzZXRCb3gzKHRydWUpO1xyXG4gICAgICAgIHNldEJveDQodHJ1ZSk7XHJcbiAgICAgICAgc2V0Qm94NSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZSxcclxuICAgICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICB7bW9kZT09J2RheScmJlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94MT09PXRydWU/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua09uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94MU9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUJsb2NrMiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCd0aXRsZTEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdkZXNjcmlwdGlvbjEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWcwMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybEVuPXsnaHR0cHM6Ly9sZXZlbHVwLmdpdGNvbm5lY3RlZC5jb20vZXhwbG9yaW5nLW5leHQtanMtbXVsdGktbGluZ3VhbC1zdXBwb3J0LXdpdGgtbmV4dC1pMThuZXh0LWY0Mjc1ZDYzYzBlOSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxaaEhhbnQ9eydodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tLyVFNiU4RSVBMiVFNyVCNCVBMi1uZXh0LWpzLSVFNyU5NCVBOC1uZXh0LWkxOG5leHQtJUU1JUFFJThDJUU2JTg4JTkwJUU1JUE0JTlBJUU4JUFBJTlFJUU4JUE4JTgwJUU2JTk0JUFGJUU2JThGJUI0LWVjZWQzZjVmOTlkYyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94PXtib3gxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDM9PT10cnVlP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDNPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVCbG9jayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCd0aXRsZTMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdkZXNjcmlwdGlvbjMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWcwM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybEVuPXsnaHR0cHM6Ly93ZWlhbm9mc3RlZWwubWVkaXVtLmNvbS9ob3ctdG8tcHVibGlzaC15b3VyLXJlYWN0LWNvbXBvbmVudC1wYWNrYWdlLXRvLW5wbS0yMGVlNGY4MWE1MDYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsWmhIYW50PXsnaHR0cHM6Ly93ZWlhbm9mc3RlZWwubWVkaXVtLmNvbS8lRTUlQTYlODIlRTQlQkQlOTUlRTclOTklQkMlRTUlQjglODMlRTglODclQUElRTUlQjclQjElRTclOUElODQtcmVhY3QtY29tcG9uZW50LSVFNSVBNSU5NyVFNCVCQiVCNiVFNSU4OCVCMC1ucG0tJUU0JUI4JThBLWFjYjA0MjExOGVmNSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94PXtib3gzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDI9PT10cnVlP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDJPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVCbG9jayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCd0aXRsZTInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdkZXNjcmlwdGlvbjInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWcwMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybEVuPXsnaHR0cHM6Ly9qYXZhc2NyaXB0LnBsYWluZW5nbGlzaC5pby9leHBsb3JpbmctbmV4dC1qcy1keW5hbWljLWltcG9ydC1jY2IyOGEwM2U3ZjknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsWmhIYW50PXsnaHR0cHM6Ly9qYXZhc2NyaXB0LnBsYWluZW5nbGlzaC5pby9leHBsb3JpbmctbmV4dC1qcy1keW5hbWljLWltcG9ydC1jY2IyOGEwM2U3ZjknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveD17Ym94Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3g0PT09dHJ1ZT9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5saW5rT25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3g0T259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQmxvY2syXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGU0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZGVzY3JpcHRpb240Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1nMDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxFbj17J2h0dHBzOi8vd2VpYW5vZnN0ZWVsLm1lZGl1bS5jb20vaG93LWktdHJhbnNpdGlvbmVkLXRvLWZyb250LWVuZC1kZXZlbG9wZXItaW4tNi1tb250aHMtZWFlN2ExZDczNCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxaaEhhbnQ9eydodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tL2hvdy1pLXRyYW5zaXRpb25lZC10by1mcm9udC1lbmQtZGV2ZWxvcGVyLWluLTYtbW9udGhzLWVhZTdhMWQ3MzQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveD17Ym94NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3g1PT09dHJ1ZT9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5saW5rT25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3g1T259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQmxvY2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGU1Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZGVzY3JpcHRpb241Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1nMDR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxFbj17J2h0dHBzOi8vd2VpYW5vZnN0ZWVsLm1lZGl1bS5jb20vaG93LWktdHJhbnNpdGlvbmVkLXRvLWZyb250LWVuZC1kZXZlbG9wZXItaW4tNi1tb250aHMtZWFlN2ExZDczNCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxaaEhhbnQ9eydodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tL2hvdy1pLXRyYW5zaXRpb25lZC10by1mcm9udC1lbmQtZGV2ZWxvcGVyLWluLTYtbW9udGhzLWVhZTdhMWQ3MzQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveD17Ym94NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7bW9kZT09J25pZ2h0JyYmXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3gxPT09dHJ1ZT9jbGFzc2VzLm5pZ2h0TGluazpjbGFzc2VzLm5pZ2h0TGlua09uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94MU9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQmxvY2syIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGUxJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdkZXNjcmlwdGlvbjEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltZzAyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxFbj17J2h0dHBzOi8vbGV2ZWx1cC5naXRjb25uZWN0ZWQuY29tL2V4cGxvcmluZy1uZXh0LWpzLW11bHRpLWxpbmd1YWwtc3VwcG9ydC13aXRoLW5leHQtaTE4bmV4dC1mNDI3NWQ2M2MwZTknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxaaEhhbnQ9eydodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tLyVFNiU4RSVBMiVFNyVCNCVBMi1uZXh0LWpzLSVFNyU5NCVBOC1uZXh0LWkxOG5leHQtJUU1JUFFJThDJUU2JTg4JTkwJUU1JUE0JTlBJUU4JUFBJTlFJUU4JUE4JTgwJUU2JTk0JUFGJUU2JThGJUI0LWVjZWQzZjVmOTlkYyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveD17Ym94MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Mz09PXRydWU/Y2xhc3Nlcy5uaWdodExpbms6Y2xhc3Nlcy5uaWdodExpbmtPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDNPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVCbG9jayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCd0aXRsZTMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdkZXNjcmlwdGlvbjMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWcwM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybEVuPXsnaHR0cHM6Ly93ZWlhbm9mc3RlZWwubWVkaXVtLmNvbS9ob3ctdG8tcHVibGlzaC15b3VyLXJlYWN0LWNvbXBvbmVudC1wYWNrYWdlLXRvLW5wbS0yMGVlNGY4MWE1MDYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsWmhIYW50PXsnaHR0cHM6Ly93ZWlhbm9mc3RlZWwubWVkaXVtLmNvbS8lRTUlQTYlODIlRTQlQkQlOTUlRTclOTklQkMlRTUlQjglODMlRTglODclQUElRTUlQjclQjElRTclOUElODQtcmVhY3QtY29tcG9uZW50LSVFNSVBNSU5NyVFNCVCQiVCNiVFNSU4OCVCMC1ucG0tJUU0JUI4JThBLWFjYjA0MjExOGVmNSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94PXtib3gzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDI9PT10cnVlP2NsYXNzZXMubmlnaHRMaW5rOmNsYXNzZXMubmlnaHRMaW5rT25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gyT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQmxvY2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGUyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZGVzY3JpcHRpb24yJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1nMDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxFbj17J2h0dHBzOi8vamF2YXNjcmlwdC5wbGFpbmVuZ2xpc2guaW8vZXhwbG9yaW5nLW5leHQtanMtZHluYW1pYy1pbXBvcnQtY2NiMjhhMDNlN2Y5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFpoSGFudD17J2h0dHBzOi8vamF2YXNjcmlwdC5wbGFpbmVuZ2xpc2guaW8vZXhwbG9yaW5nLW5leHQtanMtZHluYW1pYy1pbXBvcnQtY2NiMjhhMDNlN2Y5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3g9e2JveDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94ND09PXRydWU/Y2xhc3Nlcy5uaWdodExpbms6Y2xhc3Nlcy5uaWdodExpbmtPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDRPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVCbG9jazIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGU0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZGVzY3JpcHRpb240Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1nMDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxFbj17J2h0dHBzOi8vd2VpYW5vZnN0ZWVsLm1lZGl1bS5jb20vaG93LWktdHJhbnNpdGlvbmVkLXRvLWZyb250LWVuZC1kZXZlbG9wZXItaW4tNi1tb250aHMtZWFlN2ExZDczNCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxaaEhhbnQ9eydodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tL2hvdy1pLXRyYW5zaXRpb25lZC10by1mcm9udC1lbmQtZGV2ZWxvcGVyLWluLTYtbW9udGhzLWVhZTdhMWQ3MzQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveD17Ym94NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3g1PT09dHJ1ZT9jbGFzc2VzLm5pZ2h0TGluazpjbGFzc2VzLm5pZ2h0TGlua09uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94NU9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUJsb2NrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ3RpdGxlNScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2Rlc2NyaXB0aW9uNScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltZzA0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsRW49eydodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tL2hvdy1pLXRyYW5zaXRpb25lZC10by1mcm9udC1lbmQtZGV2ZWxvcGVyLWluLTYtbW9udGhzLWVhZTdhMWQ3MzQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsWmhIYW50PXsnaHR0cHM6Ly93ZWlhbm9mc3RlZWwubWVkaXVtLmNvbS9ob3ctaS10cmFuc2l0aW9uZWQtdG8tZnJvbnQtZW5kLWRldmVsb3Blci1pbi02LW1vbnRocy1lYWU3YTFkNzM0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3g9e2JveDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuU2hvd2Nhc2UucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdhcnRpY2xlJykoU2hvd2Nhc2UpIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uMlwiOiBcIkhlYWRlcl9idXR0b24yX193RjdYR1wiLFxuXHRcImJvdW5jZVwiOiBcIkhlYWRlcl9ib3VuY2VfXzI0dFU5XCIsXG5cdFwiYmFsbFwiOiBcIkhlYWRlcl9iYWxsX18zcFJpN1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyQmxvY2tcIjogXCJwdWJsaWNfZm9vdGVyQmxvY2tfX1h1Q3ItXCIsXG5cdFwiZm9vdGVyQmxvY2tOaWdodFwiOiBcInB1YmxpY19mb290ZXJCbG9ja05pZ2h0X18zbWk3YlwiLFxuXHRcImltZ0Rlc2NyaXB0aW9uXCI6IFwicHVibGljX2ltZ0Rlc2NyaXB0aW9uX18yR0JESlwiLFxuXHRcImltZ0Rlc2NyaXB0aW9uTmlnaHRcIjogXCJwdWJsaWNfaW1nRGVzY3JpcHRpb25OaWdodF9fM0NYSkVcIixcblx0XCJiYXJcIjogXCJwdWJsaWNfYmFyX18zNDdRWFwiXG59O1xuIiwiXHJcbmNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdFxyXG5jb25zdCBsb2NhbGVTdWJwYXRocyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdCgpLnB1YmxpY1J1bnRpbWVDb25maWdcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gIGRlZmF1bHRMYW5ndWFnZTonZW4nLFxyXG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ3poSGFudCcsICdmcicsICdlcyddLFxyXG4gIGxvY2FsZVN1YnBhdGhzOntcclxuICAgIHpoSGFudDonY24nLFxyXG4gICAgZnI6ICdmcicsXHJcbiAgICBlczogJ2VzJ1xyXG4gIH0sXHJcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXHJcbn0pXHJcbi8vIGV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9IG5leHRJMThOZXh0LnVzZVRyYW5zbGF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV3JpdGluZ3MgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvV3JpdGluZ3MvV3JpdGluZ3MnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuXHJcbmNvbnN0IFdyaXRpbmdzUGFnZSA9ICh7dH0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8V3JpdGluZ3MvPlxyXG4gICAgKVxyXG59XHJcblxyXG5Xcml0aW5nc1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcclxuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydoZWFkZXInLCAnYmFubmVyJywgJ2FydGljbGUnLCAnZm9vdGVyJ10sXHJcbn0pXHJcblxyXG5Xcml0aW5nc1BhZ2UucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKFdyaXRpbmdzUGFnZSkiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZHluYW1pYy1pbXBvcnQtMzIxNDBlNmZkZTAzMTZiNGFmZGE3ZmI0ZjM1ZDg3MjIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dsb2JlLWRmODA3OTZjZTU1YzIyOWZjNDc0MjhlNzcyMmY1MjNmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sYXB0b3AtYzRlNDE3ZjRhYmJiYWFmMGJmMjllOWZjNGM2YzJiNzgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBeUFBQUFKWUNBTUFBQUN0cUhKQ0FBQUFTMUJNVkVWSGNFeVJCUVdSQlFYTUFBQ1JCUVdSQlFXUkJRV1JCUVdSQlFXUkJRV1JCUVgvLy8ra0F3T2FCQVREQUFDM0FRR3ZBZ0xpY0hEOTh2TFhOamJkVVZIUkdSbjUzdDd6djcvcm01dEVHd1NZQUFBQUNuUlNUbE1BbHJmL0UzSlE3QzNXcGhWK29BQUFHUkpKUkVGVWVOcnQzZXQ2MnpZYVJlR3hWTnNSZGJSc1diNy9LeDJQMjJrU1J3ZVFCRUVjM3YyanY1cjJpYVhsL1MwQUJQL3pIOGtoZnowOVBUNDhQQ3crOC9EdytQajB3NDlFNUc4MmZueXlzWHJ1ZnMzemF2SHcrT012UHh4cHZqa2VGcit6OFNzbEQ0OFlrWmJ4ZUx4S3h6OVpQUnEycEZVOEhsYmQvVHd2SUNKTnRrY0lIbCtJUEVCRVdzdFRLQjVmZzlZREY1R1c4dVBodWV1VnhSTkVCQjQzRWZHREUvSkJSYVJ4K1ZoMFE3T3lMU0ttS3lvaXpVNVg0L0Q0UXNTY0plU0RpZ2o1b0NJaWtlU0RpZ2o1NkRGblVSRWhIN2RQbjBCRUtwbXVGdDBVV1ptemhIeFFFYWw3dWdySFkvdi9oQ05penBLaThRZzcxTDdkYmc3Ny9lNS9XWDc5Yzc4L2JNSTRlZmJFb2RRdEg5dk5mcmU4bE4xK3M2VWkwclI4YkE5WDZQZy9JNGR0aUlyNFlVdDU4ckVLd09NV0hmOHdFb0NJMHlkU25IemNuNjQyKy90NGhDTGltVndwYTdxSzBoNy9JaElnSTFSRWFwS1BIbmo4alFnVmtWcW1xMVhBZExYc216MFZrVWJrWTlzZmo2OFZyWUE1eTBGNGFVaytoc3haRUpHRzVLTTNJczlVUkpxU0R5b2lWV1F5K2ZpV0F4V1JLcWVyN2FqcHF0K3VDQldSMHVSakV3Y1BLaUkxeWtlVTZZcUtDUG1nSWtJKzBzeFpWRVRtbnE0ZWs4ckhBQlV4WjBsTDh0SDc5SWxuY2lWcitkZ3RwOHlPaWdqNWNCQmV5TWZ3SlY4cUl0bkp4MkpXK1JneVowRkVrazFYQVhnY2xnbERSYVFzK1VnMFhUbDlJdVFqRkpHQUc3U2NQcEdXNUlPS1NJSHlzVnZPbGQzQlRhV1N0M3pNaUVmZ2txOWRFWmxJUGdMT2xjeUxoNFB3UWo0Y2hKY2NwNnN1OSttcTMrbVRsVGxMa3NySEpoYzg3SXBJNnVscVZjcDBSVVdFZkRoOUlrWEpSM2ZZTFhPTVozSWxBL25JRlkvZ2cvQlVSQ2FVajgxK21YTThreXVUSllNbmFxbUltSzQ4a3lzRjRySEs4MUM3WjNLbERQblk3cGZsSk9SVjB1WXNpU2dmaDJWUm9TS1NVRDYyeFV4WFZFUWlUMWVQRmNsSGZ4Vngra1J1eThlaUx2bWdJcEpZUHZhN1pibWhJa0krcUlpUUR5b2k1TU9jSlpsTVY0dnM3eXRKajRpdmhmeUR4Mk1EOHVFZ3ZKQVB6K1FLK1hBOWtDU1VqNjRsK2ZpdUlxNEhrdHZ5MGVSMDFVdEZ1Z2VJa0k4MjhRaFdFWE5XbS9MeFhQZTVFcnNpWXVlRGlnajU4RXl1WkNjZisyVkxvU0x5YjU1YVh0cWxJbkpudW5vZ0h3N0NDL2x3RUY3NkwrMnVXajFYRWs5RnpGa1Z5NGVkRHlvaXcrV2pPN1NOQnhXeHRFcytxSWdNVzlyZFl5UDhJRHdWYVUwK1RGZFVoSHlZcnFLcWlEbUxmRkFSS2xMM3pnZjVvQ0pDUHFpSURKaXV5QWNWRWZKQlJXU1NuWStENzc4NXE5R2xYZktSR0JHblQweFg1cXliMXdPWnMyckN3OUl1RlNFZjVJT0t5RGY1OEVUdGRJaTRIcWg0UE1pSE9VdXVobnhNam9pWEpwUXNINllyS2lMa0kzc1ZlYVlpbG5hcGlEbUxmTWdJRlRGbmtROHFRa1Zxa0EvWCtVeUFpT3VCeUlkUWtkS25LM2VKVWhFaEh3V3J5T0lKSWpOTlYrU2pFQlV4WjVFUEtrSkZ5SWRjak91QjhsdmFKUi9GN1lwUWthemt3NkYyS2tJK3lFYytoRkNSYkpaMnlRY1ZrV3Q0T05SdVYwU3VUMWZrZzRvSStTaFlSVHlUT3hjZVA4aEhOVXUrVkNUK3pnZjVvQ0pDUHFxSW0wckpoNHhGaElyRU8xZmlMbEVxSXVTak5rVHVsNGhuY3BOTVYvRElkTTZ5NUVzK0JDTGtReVpWRVV1KzVJT0t1QjdJZENXV2ZIT2FydUJSa1lxNDdycFg3ajl4YnJxcVRFVThLdElqOXcrV3dLTTBSTzdQV2E2WWkzYndpbnhVT1djdEVCS1VCL0xSS0NJSWlkRWYrS2gzemtKSWdIODRXRkl6SW5kSzVBRUE5OWF2N3ZVSFBxb201QkVDdC9jLzdxM3ZtcS9xSnVUWmZzaE5BYm0zUCtqb1ZlMkVyT3lwajFuQU1tQlZzSmhGMUtjU2tHN2o2MVZCTmpSa29nR0xnZFF4WkhXR3JFbFdlTHZPaE5WQ2hSaXlCcTVnVVpCS2N1Y1JFU3RaUXdzRUlFMW91Z29aV0NCR3JEWWtoS2NQV3VJbDZjMDBTTGRTSVlNS3hESnZJNEN3a0NFR1FrSWFXY1g2bjRVQW92Y2VpS01telNqSVo0WFlDL20raWQ2RmhZVlV2OHJyM1B0UVJUZGsxVkVnMjREUG1hWi9tN0JXWFNnaE9xUndQalpCbnpOTjczZE1FU0h0R0xxdGtJRnJXTzc4YWFZLzdLWi95NklQSUVxa2J2K3dqalZzbDlETldPV3ZYMjNEUDJJejFvQkZYbGVQbHB6OXBzOG5iS0YzcUlKQXBHNzdzSmsrZkJmRW5GVXNIbjJtS3pzaDR4d2RJdVZOVjl2ZW55MUFmc2xxSUNEbXJBcmx3ekpXUkVBZ1VwOThBQ1FxSU9hczJ1UURJSkVCY2FGMVhmSUJrT2lBbUxOcWtnK0F4QWZFQzlNcmtnK0E5QUJrdTlrY0RvZk5ka3RGbXBFUGdBUUQ4bk55Mm9YTXNsU2tDdmtBU0NnZ3YzL2hBK1paS2xLRGZBQWtFSkROZ0Y5S0RzTG5NVjBGaWlOQVJnQnk0ZW56a0xHV2loUWhIOXZOWWIvZjdYYjdxLzh5UU80QXNodTRNTEtsSXRuTHgyK3o4SlUvQUpEYmdHeUdUN2RVSk8rbDNlK2Z6K1UvQTVEYmdPekcvSXFpSWpNbHhNMy9iUGlMRCtJQzVDWWcyNUZETGhYSlZENHVmakNYZnVjQjVDWWdoOUZGYnM1S3pVZVFmRnorc3dlQTlBVGtYZ0ZRa1FyazR5WmNBTGtGU01BTm8zdHpWbW5UMWE2UHZBQmtKQ0JVcEFMNStQbnJEaUQ5QUlsVzYrYXM2WGMrTnNQbDQvcU1CWkR4Z0ZDUjR1WGozd0NrRnlEQjcxcmIyUldaZWJxSzlNVG5CaUJUTkVqWUFMeWxJbE5OVjlFZTFEa0FaSklHTVdkbFAxMkYvYmNBTWxXRFFLUnMrUURJNUEzeTlmTzE1RnZZemdkQUVqYUlYWkhVT2NTK0pRQWcwelpJV09XYnMzS2NyZ0NTb2tGQ2wzeGRENVFFajk0YnRBQ1p2RUhNV1dudzJFOXlCeE5BcG0rUTBJMHJ6K1Jtc2ZNQmtQUU5Zc20zUFBrQVNOSUdDZndsUjBXRzRiR2Q3SmNQUUZJMUNCVXBabWtYSVBNMFNDZ2k1cXpZOGpIaVdDaEFFallJRlNsSVBnQXlSNE9FcW9nNUs1cDhqSHcwRFNDSkc4U2NsZnZPQjBCbWJwREF3UUFpODhvSFFHWnJFQ3BTZ253QVpNWUdvU0lKcHRRNEhReVFlUnFFaWt3OVhVWGFVQUxJWEExQ1JmS1dENERNM1NCVVpMS2wzWWcvTTRETTJDQmZId0FWeVZNK0FKSkRnMUNSYk9VRElIazB5TkpOcFRFSDB1aDFDNUM1R3lSMHliZDVSRkx0ZkFBa3R3YXhLNUtqZkFBa293WlpCdDVVMm02SnBKY1BnR1RWSUlFVGRxTnpWc3k3UkFGU1pvUFlGY2xsNXdNZ21UWkk0SzVJYzgva3ppUWZBTW12UWFoSVJ2SUJrQndiaElwa0l4OEF5YkpCZ3BkOFcwQWtaR2wzYWlrRFNHNE5FcW9pMVJPeW0zdTZBa2ltRGJKMFUya0c4Z0dRakJ2RWt1ODg1MG9BVWtxREJLdEl1L0tSYUtVQ0lKazJTTXNxY3BoK3VqcTl2QUtrOEFZSkd6VHEyeFZKOFVUdDIvbjRCcERpRzJUWjRFSDRGUEx4K25GY3J3RlNRWU0wcHlJcDVPUDA4cjVlQTZTU0JsazI5VXh1aXFYZHQvTjZEWkNLR21UWnpQVkFLWjZvL1pxdUFGSlZnd1RQV1dVamtrSSsvcG11QUZKWmd5d0RYeVZkc0lvazJmbDRPYS9YQUtteVFXcFhrUlR5OFhPNkFraDlEVkwxcnNndXdjN0g2ZU45dlFaSXhRMVM3Wkp2aWlkcVQyL245Um9nbFRkSWxZZ2t1YzduOVh4Y0E2U0JCZ244ZlZ2UW5KWGlYTW12YTFjQXFieEJsbFhkVkpya0x0R0xlQUNrMWdhcGFGY2t5Uk8xMzlhdUFGSi9nM3g5YkJWY0Q1UkNQazdYOEFCSXpRMFMrTnMzNnprcnhjN0hoYlVyZ0xUUklKK0VGSzBpU2E3emViMkJ4OXJ6SUhVM1NORkx2a25rNDQrZFFRM1NWSU1FZjlIeVF5VEpYYUl2dC9FQVNBTU5Fcllya3R2cGt5Ukx1Mi9uNHgwK2pGZ05ORWpnOXkyblozSjNLZkM0c1hhbFFkcHFrTUNKSlpjNUs0MTgzSjJ1QU5KUWd5d0xPZ2kvVHlFZk45ZXVqRmdOTnNpeWtOTW5TZVRqTldTNjBpQnROY2dYSXR2cDl4WHkzL2tJbks0MFNHc05zc3o5bWR3MEx6SzR2M2FsUVZwdGtMeFZKSTE4ZlBUQVE0TzAxaUNoWTh3TWlDU1JqeDdUbFFacHMwRUNmMVdubnJQU3ZNamc3ZHdQRHczU1lvTmt1Q3VTUmo3NlRWY2FwTjBHV1diMlRHNlMxMFQxbnE0MFNNTU5FamJVcERsOWtrWStlazlYR3FUcEJzbEdSVUxlc3hoanVocUVod1pwdUVHeVFDVE5XOVR1UGZTaFFUUklua3UrYWQ1Uit6WVlEdzNTZUlQTXF5Sko1T1BpZFhBYVJJTmtQMmVsa1k5QmExY2FSSVAwUG4yeVQvLy83T2JHUTROb2tIQVZpVHBucGJoTGRQamFsUWJSSUxNaWtrWStUaC9IOWVnQVJJT2tWcEUwNTBwT2IrL2o4ZEFnR2lTMWlpUjVrY0hZdFNzTm9rRm1tck5DcHF0TmhPbnFQUW9lR2tTREpOMFYyYVdSajVkSWVHZ1FEZkxIVjNnLzNaeVZabWszOU1JU0RhSkI4bEtSUlBMeGNWeEhERUEwU0pvNUs1RjhSSnl1TklnR0dmRnQ3bmY1VHBMcmZPSk9WeHBFZzZTYXMxTEpSOXpwU29Ob2tGNmYrVkJFRXUxOHhKNnVOSWdHR1Q4V2JlNjlCWFFYaEVlRUxmcTM4d1I0YUJBTk12TDBTYmU5eFVnUUhUSHdtR0M2QW9nR2liTTArOG5JWWIvYmZXK08vV0d6RGZuVEVlUmptdWtLSUJva1JDQzZzR3kzbTgzaGNOanY5NGZENWhPTmJlQ2ZpL0JBNzl0VWVIQVFEUkpIUlFabmsrOTBwVUUwU0VRVkdaUUlPeCtubHdueEFJZ0dpYWdpdmZHSU1GMjluTmRyZ0dpUUd1ZXNDSGhNT2wxeEVBMHlJeUl4bG5aZjNxZkdRNE5va0ZsVUpNWjczdDZteHdNZ0dpVDJBYTB1emM3SDhtMzY2UW9nR21TV09TdkMwdTdFYTFjY1JJTU1uck0yODh2SDh1VTlFUjRhUklPa1ZaRVkxL3krbnRkcmdHaVFHbFVreXRMdSt4b2dHcVJHRllrd1haM2VVdUlCRUEweWRHdDludnA0TzYvWEFORWdWWnBJaEhOWEg4YzFRRFJJbllTTTV1UDA4cjVlQTBTREZDTWl2UWlKOEtLbzlSb2dHcVJTUXNiMngydjY2ZXJ2dkFKRWcwdy9aUjBLbks3K2JoQ0FhSkRwQ1JuSlIvUzFxL2V6QnRFZythejJqbHZmalQ1ZEhUOWVYelNJQmttU2tCM0Q3UzZyNmVyODZkMHZHa1NEWkNQcSs2eW1xNWZUc2djZ0drU0RqTlNRS1FWa2d1bnE5UFVmMWlBYUpKY2hhL2lBRlgyNk9wNy92NnVoUVRSSUxrUFc0QUVyK3JIRTk3ZlRzaThnR2tTRFREdGtiZktacm43NXJtc1FEWkl1Mi9nRDFpbjZReDhmdjMzVE5ZZ0d5YU5DQnYycU9FVmZ1enEvbkphREFORWdHbVJTVHg5U0lOR1BKUjYvNGFGQk5FZ21GVEpnaVRmKzJ0WEhuMTl5RGFKQnNsakk2bDhnRTZ4ZFhmaS9hQkFOa3NPUnJFMy82U3J5MnRYN0g5T1ZCdEVnMlZSSXp6MlErSS9VZmx6NWZtc1FEWktCcHZkYjR6MUZmNVhCK2UyMEhBbUlCdEVnMDJuNm9kOTB0VTR5WFFGRWcrUXlZL1dZc0tiZE9BZUlCc2x3TnoxOHdvcC9IZHo1OW1VTEhFU0R6TCtPRmZ4cjRpM1IycFVHMFNBNVNVamdUK0UwMVVNZkFORWdXVXRJa0lKTThOQkh3SGNhSUJwazlvWGVJQVdKLzBodDBFMXZIRVNEekEvSURHdFhkK1ZEZzJpUVhDeDlrM3k2dXJkMkJSQU5VaEFncC9pWDdZYnlBUkFOa2o4Z3I5RnYyejBDUklPVXM4NmJIaEFOb2tFQW9rRTBDRUEwaUFZQmlBYlJJQURSSUtKQk5BaEFOSWdHQVlnRzBTQUEwU0FhQkNBYVJJTUFSSU1BUklOb0VJQm9FQTBDRUEyaVFRQ2lRUUNpUVRRSVFEU0lCZ0dJQnRFZ0FORWdBQUdJQmpGaUFVU0RhQkNBYUJDQUFFU0RBTVNJcFVFQW9rRTBDRUFBQWhBTkFoQ0FhSkNvZ0p3QW9rRUFva0ZFZzJnUWdHZ1FEUUlRRGFKQkFLSkJNbW1RZDRCb0VJQUFSRFRJb0JFTElCb0VJQnBFTklnR0FZZ0cwU0FBMFNBYUJDQWFSSU1BUklOb0VJQm9FQTBDRUEyaVFRQ2lRUUFDRUEwQ0VJQUFSSU1BQkNBYUJDQUEwU0FBQVlnR0FRaEFOQWhBQUtKQkFBSVFEUUlRZ0dnUWdBQkVnd0FFSUJvRUlBQUJpQVlCQ0VBMENFQUFva0VBQWhBTkFoQ0FhQkNBQUVTREFBUWdHZ1FnQU5FZ0FBR0lCZ0VJUUFDaVFRQUNFQTBDRUlCb0VJQUFSSU5VQXNnTFFEUUlRRFNJQmdFSVFEUUlRSXhZR2dRZ0dnUWdHZ1FnQU5FZ1JpeUFhQkFOQWhBTm9rRUFva0UwQ0VBMENFQTBpQVlCaUFiUklBRFJJQm9FSUJvRUlCb2s2SWVnUVRRSVFEU0lhSkI2RytRZElCcUVwR3NRRGRKRWd4aXhOSWdHMFNBYXBBMUF6aHhFZ3dBa0pTQkdMQTBDRUNPV0JnRUlRRFFJUURpSUJnR0lCaEdBYUJDQUFFU0RBQVFnQVBrdDV4TkFwZ0JrQjVBYUFEbCtCUEt4M0FBRUlLMEJjandIYnp3Q3BCOGczUjRnOTllNk13ZmsvZVVVL3RmZkFxUVhJQWVBRk40Z3h6NTRMSGNBNlFmSUJpQkZBM0k4djQ3ODJ3UGtKaUR0U1VoVmdQU1FqeXNLQXBEYmdIUUFLZGRCM2o5T1BmL3lmMDVZQUxrRHlBRWdoVGJJOGVPMTkxOSsxd0drSnlBYmdKVFpJTDJucTR2YmhBQzVCMGh6RWxKSGcvUmEycjJsSU4wS0lEK3o2TXhZTlRUSWtPbnFpb0owcTc5dzhXOGVPaFZTUVlNTXhPTmlnWFFMZ1B6TTQ0VWZVR3ViNmNVM3lNRHA2a3FCZEF0WS9NelRKVUEyQUNrSWtPRjRYRlQwcm51QXhjLzhXSm14aWdhazc4YjU3N2xVSU4wakxPNUlTR01WVXJLRERGcmF2VjBnVm5udlMwaGJGbEp1ZzR5WnJxNFpDRWYvSmlIUHpWZElxWUFjUDA3ai91SVhDOFNFOVh2K1dqVmZJWVVDTW02NnVsb2d6MCtndUM4aFRYbDZrWUM4djUzRzhyRzUrTW5iSmd5YXNWcmFUaThRa1BlUDF3bisyaFo1TDg1WWk2N3hJYXM0UU1ZdDdkNGNzS3hoQmU0VnRqUmtsUWJJK2VVVWdZK05BaG1uNmQxbUI1QWNBWW1CeDdVVnJLNmo2S0dhM3M1YWIxbUF4TWsxUG15QzlLaVFWa1M5UVVDdUNMcE5rRDY3NmMwUTBoNGcrNjBDaVZJaGJSRFNIQ0JYK2JCSjJHOHZwT3UyQjRCVUI4aFZQaFRJMVFxNTV1bE5kRWhqZ0Z6MUR3K2pYOCtQcTBOV0E2dTlUUUd5TzF6OXBCbjZFRS8vSExQMkFLa0drR3Y3Z3dhc29ac2hEWlJJTzREc0R0dk9nQlY3SmV2TDFYY0FLUitRL1EwOHJHQ04wSkN2T1dzSGtMSUIyVzl1ZmNEUEJHVHdXbS90YzFZVGdOeVNjNGNVb3hCU0xTSU5BSEpUUHI3NElPZ2hTMWwzQ0tsVVJlb0haSDhIRHd0WWtRaXBjOG0zZGtCdXk0ZitpRGxsVlRsbkRRRGtveHhBN3NrSFB2cXRaUzI2NWhDcHVVSHV5a2ZYclI3eDBZZVFoN3NsVXB1S1ZOd2dkK1hqa3cvN0gzM0hyUHNsVXBlS1ZOc2c5K1dqZTFZZlE4NzJQamMxWjFYYUlBSFQxZlBDOFpLcDVxeUtFS215UVFMdzZCWlA2bVBTT1d1blFYSUZKR0M2SXVmajVxeW5WU3NxVWwrRDdFTGt3M1JGUmRwc2tDRDVzSFpGUlFwcWtORnZNdmdsUWZMaHl4MXB6bXBCUldadmtPUG9OeG1RRHlwU0x5RGozMlRRU3o0ZXlJYzVhMkpBVGhFQmVZODNYWkdQdVJEcHFqNTlNbWVESENPODZLT0hmS3pzZkZDUmtnQWhIN1VnOGhnd1orMEIwbk82ZWlFZkxhbkl0bEFWbVFtUTkzalRGZm5JQXBGRnBTb3lEeURuZVBLeEp4OEZxUWhBZ3ZDSU4xMEZ5WWZwS3BHSzFMZ3JraDZRSS9tZ0lnQkpzTFJMUHFoSWRZREVYTm9sSDFTa01rRGVrOHFIUSszNTdvcnNBRExwcWQyQTYzdzZUOVJtckNKZE1YTldNa0NPSDIveDhQQkViZkVxVXNycjIxSUI4aDd2b2FnUStYQ3VoSXFVQkFqNW9DS0Zxa2dLUUk3eE5zNURkajdJaDEyUm9nQTVrNDlHVThPY05Ua2c3NG5QbGNBanF6bXIrTk1uRXdNUzhkUnVDQjdPbFdTSFNPblA1RTRMU016cGluellGYWtNa0hPMEN4bklSOUVxVXZLY05SMGdFUzlrc1BOUitxNUl1WWhNQmNneHFYdzQxRjdCbkpXbmlrd0VTRkw1Y0ZsaUVZaDBSYXJJSklCRVhOb2xIL1hNV1VYdWlrd0F5REh4MGk0OEt0b1Z5ZTU2b1BpQWZDUTlWMEkrTFBrV0JVaThDeGs4VVF1UjZnQkpLeCtlcUxYa1d4UWdxWmQyNFZHb2lwUjBVMmxFUUNJdTdkN0hveU1mVmM5WjJkeDlFZzJROXhmblNpUVlrVVVwdXlLUkFEbW1QVmNDanhhV2ZMTlFrU2lBUkh5Tm1uTWxFTWxLUldJQWtsUSs0RUZGeWdJa3RYejRZaldsSW5Nak1oYVFtRXU3NU1PY2xkMmNOUklROGlFSmRrVjJoUUlTY2JweW5ROFZ5WExKZHdRZzhTNWtzUFBSZG9rRXFVaHBnRVM4RGM0VHRlYXNiSGRGQmdEeUV2ZENCdkloR2F2SXNBWTVrZytKbktjOGQwV0dBSElrSHpJRklqbXF5QUJBM3Q0U3lzY3orYUFpYys2S0RBREV6b2RNaGtoMjF3UE5Cb2kzcU1uQVhaR2tLaklUSU9SRHJxcElWa3UrOHdCQ1BxUVFGWmtERUlmYXBSZ1ZTUThJK1pDQ2RrVlNBMEkrSkt4RU1sR1J4SURzQW81ZHVjNUg4bEdScElDUUQ0bTg1RHY1UWZpRWdIaWlWbnFyeUdKdUZVa0dTQkFlbG5ibFcrWStDSjhLRUhlSlNwRXFrZ1lROGlHRnFrZ0tRQ3p0eXJnU21mRjZvQVNBZUpHQmxEdG5UUTZJUSsxU01pSVRBMEkrSktHS1REQm5UUXJJTG1pNjh0RkxXSW5NOFV6dWxJQWNYT2NqcGM5WjB3RkNQbVFLUkJLL3YyMHFRRUxlb3VaUXV3eFFrYlNuVDZZQlpHZHBWeVpMVWhXWkJCQlAxRW90S2pJQklPUkRzbENSWFphQWtBOUpRVWdxRllrTWlFUHRra3hGa2h5RWp3c0krWkRLVkNRbUlPUkRFaS81VG44OVVEeEF5SWZNc2VRN3NZckVBbVRuWEluVXFDS1JBQ0VmVXFlS1JBR0VmRWl0S2hJQmtLQzdSQjFxbHlKVlpEUWc1RU5xVnBHeGdJVEloK3Q4Sk1HY05ZMktqQVBFRTdWU3VZcU1BWVI4U1BVcU1od1E4aUg1SmZwTnBZTUJJUi9TZ29vTUJNVE9oMlNMeUNMbVRhV0RBSEdkaitTdEl2RnVLdjBUa08zZFAwaytKTy84RlU5RkxpeEU3VXhYMG9DS2JJTlU1QUlnaDdHSDJ1RWhSYWhJeUp4MTRmdStKUi9TaklvTUFXUlBQcVFWRmJreloxMThMZk9HZkVndEtqTHk5TW5sd3lMN2djZXVQRkVyK2MxWm8xVGs4cmYrejVWZTUwcWtSUlhaaGEwUncwUGFWSkhOOVYyVW55V3lJeDlTdUlvTVBBaC91Tms2KzkxbjlvZk4vZlp3blkvVXFDTDNEdVJ1UDlNRnhIUWwrYzlaSWMvay9vN0lJZWpiN3pvZmFVZEZQaEhaaFl0RkVCN2tRMnBTa1c2N09YeG1FNmM5UEZFcnRhbEl6SkFQS1U1RkZzbndJQjlTNUp5MVNvT0hwVjJwV0VYSWg3UThaejJURDVFYmlFdzVaN25PUjhxZnN4NmZKOFBEZENWVnFBajVFTG1wSXVSRDVBWWlqNnZJMDVXbFhhbHN6bHBGM1Brd1hVbDlpTVJhOG5XZGoxQVI4aUZVaEh5SWZGT1JaL0loY2t0RlJzaUg2VXFvQ1BrUUtrSStST0twQ1BtUXR0SnJ6akpkQ1JXQmgwaC9GVm1SRDJtM1JlNjR5UFBpRVI3U3RLNC9MbGJQMStoNHNQRWg4dGZUNDhQdmxEeXZGZytQVHovUUlmSXZKVStQanc5ZmVjUkdQdmt2NU40WHlKeEJRWDRBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3R5cGV3cml0ZXItMTAxZjgxYWYyZjEzMzA1OTM5NDQ3MmIwOTYwNTEzOGMucG5nXCI7IiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdcclxuXHJcbmxldCBzdG9yZVxyXG5cclxuY29uc3QgZXhhbXBsZUluaXRpYWxTdGF0ZSA9IHtcclxuICBtb2RlOidkYXknLFxyXG4gIGxhbmc6J2VuJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgREFZOiAnREFZJyxcclxuICBOSUdIVDogJ05JR0hUJyxcclxuICBFTjogJ0VOJyxcclxuICBaSEhBTlQ6ICdaSEhBTlQnLFxyXG4gIFJFU0VUOiAnUkVTRVQnXHJcbn1cclxuXHJcbi8vIFJFRFVDRVJTXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5EQVk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheSdcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5OSUdIVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnbmlnaHQnXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU46XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGFuZzogJ2VuJ1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlpISEFOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsYW5nOiAnemhIYW50J1xyXG4gICAgICB9IFxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRVNFVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnZGF5JyxcclxuICAgICAgICBsYW5nOiAnZW4nXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuLy8gQUNUSU9OU1xyXG5leHBvcnQgY29uc3QgdG9EYXkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuREFZIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvTmlnaHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTklHSFQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9FbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5FTiB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b1poSGFudCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5aSEhBTlQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRDb3VudCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRVNFVCB9XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAga2V5OiAncHJpbWFyeScsXHJcbiAgc3RvcmFnZSxcclxuICB3aGl0ZWxpc3Q6IFsnbW9kZScsICdsYW5nJ10sIC8vIHBsYWNlIHRvIHNlbGVjdCB3aGljaCBzdGF0ZSB5b3Ugd2FudCB0byBwZXJzaXN0XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VyKVxyXG5cclxuZnVuY3Rpb24gbWFrZVN0b3JlKGluaXRpYWxTdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gbWFrZVN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gbWFrZVN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbiAgcmV0dXJuIF9zdG9yZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG5cclxuXHJcbi8vIGltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG4vLyBpbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5cclxuLy8gbGV0IHN0b3JlXHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vICAgICBtb2RlOidkYXknXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gICAgIGNhc2UgJ0RBWSc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgbW9kZTogJ2RheScsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGNhc2UgJ05JR0hUJzpcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICBtb2RlOiAnbmlnaHQnLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBjYXNlICdSRVNFVCc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJldHVybiBzdGF0ZVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSB7XHJcbi8vICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4vLyAgICAgcmVkdWNlcixcclxuLy8gICAgIHByZWxvYWRlZFN0YXRlLFxyXG4vLyAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuLy8gICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuLy8gICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuLy8gICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4vLyAgIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4vLyAgICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcclxuLy8gICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuLy8gICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbi8vICAgICB9KVxyXG4vLyAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuLy8gICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4vLyAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4vLyAgIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbi8vICAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbi8vICAgcmV0dXJuIF9zdG9yZVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbi8vICAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuLy8gICByZXR1cm4gc3RvcmVcclxuLy8gfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1diU3VubnlPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==