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
    handleDrawerClose
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
            lineNumber: 66,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 1,
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
          xs: 2
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
          xs: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
              lineNumber: 85,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
            lineNumber: 92,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
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
            lineNumber: 100,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        className: classes.drawerHeader,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/About",
            underline: "none",
            className: classes.drawerLink,
            children: t('about')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        className: classes.drawerHeader,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "./SalieChien_Resume.pdf",
            target: "_blank",
            rel: "noopener",
            underline: "none",
            className: classes.drawerLink,
            children: t('resume')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
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

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\Footer.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Footer = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const {
    mode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      container: true,
      className: mode == 'day' ? _css_public_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footerBlock : _css_public_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footerBlockNight,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('contactTitle')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('followTitle')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 4,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('copyright')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('copyrightDescription')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "\xA0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
    fontSize: '1rem',
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
    fontSize: '1rem',
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
    fontSize: '1rem'
  },
  nightLinkAnchor: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    letterSpacing: '1px',
    marginLeft: '32px',
    color: '#BDBDBD',
    fontSize: '1rem'
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
        lg: 1
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
            marginTop: '1.5rem'
          },
          children: [mode === 'day' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Work",
            underline: "none",
            className: router.pathname == '/Work' ? classes.linkAnchor : classes.link,
            children: t('work')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Work",
            underline: "none",
            className: router.pathname == '/Work' ? classes.nightLinkAnchor : classes.nightLink,
            children: t('work')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
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
            marginLeft: '-1rem'
          },
          children: [mode === 'day' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Writings",
            underline: "none",
            className: router.pathname == '/Writings' ? classes.linkAnchor : classes.link,
            children: t('writings')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Writings",
            underline: "none",
            className: router.pathname == '/Writings' ? classes.nightLinkAnchor : classes.nightLink,
            children: t('writings')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '1.5rem',
            marginLeft: '0.5rem'
          },
          children: [mode === 'day' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./About",
            underline: "none",
            className: router.pathname == '/About' ? classes.linkAnchor : classes.link,
            children: t('about')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./About",
            underline: "none",
            className: router.pathname == '/About' ? classes.nightLinkAnchor : classes.nightLink,
            children: t('about')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '1.5rem',
            paddingLeft: '0.5rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Sample",
            underline: "none",
            className: router.pathname == '/Sample' ? classes.linkAnchor : classes.link,
            children: "Sample"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
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
          lineNumber: 257,
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
              lineNumber: 265,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
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
              lineNumber: 272,
              columnNumber: 23
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
          smUp: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 276,
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
            lineNumber: 280,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
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
              lineNumber: 301,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
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
    fontSize: "1rem",
    fontFamily: "微軟正黑體",
    display: "flex",
    flexDirection: "row-Reverse"
  },
  selectRequired: {}
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
          lineNumber: 45,
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
        lineNumber: 89,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      item: true,
      xs: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
          lineNumber: 99,
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
          handleDrawerClose: handleDrawerClose
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
/* harmony import */ var _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/image/writings/dynamic-import.png */ "./public/image/writings/dynamic-import.png");
/* harmony import */ var _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/image/writings/globe.png */ "./public/image/writings/globe.png");
/* harmony import */ var _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/image/writings/npm.png */ "./public/image/writings/npm.png");
/* harmony import */ var _public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_image_writings_laptop_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/image/writings/laptop.png */ "./public/image/writings/laptop.png");
/* harmony import */ var _public_image_writings_laptop_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_image_writings_laptop_png__WEBPACK_IMPORTED_MODULE_11__);

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

  const handleMouseLeave = () => {
    setBox1(true);
    setBox2(true);
    setBox3(true);
    setBox4(true);
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title1'),
          description: t('description1'),
          image: _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_8___default.a,
          urlEn: './',
          urlZhHant: './',
          mode: mode,
          box: box1,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box2 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox2On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title2'),
          description: t('description2'),
          image: _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_9___default.a,
          urlEn: './',
          urlZhHant: './',
          mode: mode,
          box: box2,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box3 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox3On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title3'),
          description: t('description3'),
          image: _public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_10___default.a,
          urlEn: 'https://weianofsteel.medium.com/how-to-publish-your-react-component-package-to-npm-20ee4f81a506',
          urlZhHant: 'https://weianofsteel.medium.com/%E5%A6%82%E4%BD%95%E7%99%BC%E5%B8%83%E8%87%AA%E5%B7%B1%E7%9A%84-react-component-%E5%A5%97%E4%BB%B6%E5%88%B0-npm-%E4%B8%8A-acb042118ef5',
          mode: mode,
          box: box3,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box4 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox4On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title4'),
          description: t('description4'),
          image: _public_image_writings_laptop_png__WEBPACK_IMPORTED_MODULE_11___default.a,
          urlEn: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          urlZhHant: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          mode: mode,
          box: box4,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }, undefined), mode == 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box1 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox1On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title1'),
          description: t('description1'),
          image: _public_image_writings_dynamic_import_png__WEBPACK_IMPORTED_MODULE_8___default.a,
          urlEn: './',
          urlZhHant: './',
          mode: mode,
          box: box1,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box2 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox2On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title2'),
          description: t('description2'),
          image: _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_9___default.a,
          urlEn: './',
          urlZhHant: './',
          mode: mode,
          box: box2,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box3 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox3On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title3'),
          description: t('description3'),
          image: _public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_10___default.a,
          urlEn: 'https://weianofsteel.medium.com/how-to-publish-your-react-component-package-to-npm-20ee4f81a506',
          urlZhHant: 'https://weianofsteel.medium.com/%E5%A6%82%E4%BD%95%E7%99%BC%E5%B8%83%E8%87%AA%E5%B7%B1%E7%9A%84-react-component-%E5%A5%97%E4%BB%B6%E5%88%B0-npm-%E4%B8%8A-acb042118ef5',
          mode: mode,
          box: box3,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box4 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox4On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title4'),
          description: t('description4'),
          image: _public_image_writings_laptop_png__WEBPACK_IMPORTED_MODULE_11___default.a,
          urlEn: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          urlZhHant: 'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734',
          mode: mode,
          box: box4,
          lang: lang
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9EcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9QYWdlTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvUHVibGljQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Xcml0aW5ncy9Xcml0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV3JpdGluZ3MvY29tcG9uZW50L0FydGljbGVCbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV3JpdGluZ3MvY29tcG9uZW50L1Nob3djYXNlLmpzIiwid2VicGFjazovLy8uL2Nzcy9QdWJsaWMvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL3B1YmxpYy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV3JpdGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL3dyaXRpbmdzL2R5bmFtaWMtaW1wb3J0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2Uvd3JpdGluZ3MvZ2xvYmUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS93cml0aW5ncy9sYXB0b3AucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS93cml0aW5ncy9ucG0ucG5nIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY29udGVudCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIkJhbm5lciIsInQiLCJwcm9wcyIsImNsYXNzZXMiLCJtb2RlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iLCJtYWluIiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJkcmF3ZXJMaW5rIiwidGV4dEFsaWduIiwiZHJhd2VySGVhZGVyIiwibWFyZ2luVG9wIiwiaWNvbiIsIkRyYXdlciIsImhhbmRsZURyYXdlckNsb3NlIiwiRm9vdGVyIiwic3R5bGVzIiwiZm9vdGVyQmxvY2siLCJmb290ZXJCbG9ja05pZ2h0IiwibGluayIsIm1hcmdpbkxlZnQiLCJuaWdodExpbmsiLCJsaW5rQW5jaG9yIiwibmlnaHRMaW5rQW5jaG9yIiwibmlnaHRJY29uIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJ3aWR0aCIsImlucHV0TGFiZWwiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaGFuZGxlTGFuZ1RvUmVkdXgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImRpc3BhdGNoIiwidG9FbiIsInRvWmhIYW50IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVEcmF3ZXJPcGVuIiwibGFuZyIsImxhYmVsIiwidG9OaWdodCIsInRvRGF5IiwicGF0aG5hbWUiLCJQYWdlTG9hZGVyIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZUVmZmVjdCIsInNlbGVjdFJlcXVpcmVkIiwiU2VsZWN0Iiwib25PcGVuIiwib25DbG9zZSIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyb290IiwiaW5wdXQiLCJTZWxlY3QyIiwibmFtZSIsImZvcm1Db250cm9sUHJvcHMiLCJzZWxlY3RQcm9wcyIsInJlcXVpcmVkIiwiZGlzYWJsZWQiLCJ0YWJJbmRleCIsIm5ld1Byb3BzIiwic2VsZWN0Iiwic2VsZWN0ZWQiLCJjaGVja0VxdWFsIiwiYSIsImIiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsImZpbHRlcnMiLCJmaWx0ZXIiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJhcnJheSIsIm9iamVjdCIsImlucHV0TGFiZWxQcm9wcyIsImRheUJhY2tncm91bmQiLCJuaWdodEJhY2tncm91bmQiLCJib2R5IiwiV3JpdGluZ3MiLCJkcmF3ZXIiLCJzZXREcmF3ZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJpbWciLCJwYWRkaW5nVG9wIiwiQXJ0aWNsZUJsb2NrIiwiaW1hZ2UiLCJ1cmxFbiIsInVybFpoSGFudCIsImJveCIsInBhZGRpbmciLCJzaG93Y2FzZSIsIm92ZXJmbG93IiwibGlua09uSG92ZXIiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsIm5pZ2h0TGlua09uSG92ZXIiLCJ0aXRsZU9uSG92ZXIiLCJkZXNjcmlwdGlvbk9uSG92ZXIiLCJTaG93Y2FzZSIsImJveDEiLCJzZXRCb3gxIiwiYm94MiIsInNldEJveDIiLCJib3gzIiwic2V0Qm94MyIsImJveDQiLCJzZXRCb3g0IiwiaGFuZGxlQm94MU9uIiwiaGFuZGxlQm94Mk9uIiwiaGFuZGxlQm94M09uIiwiaGFuZGxlQm94NE9uIiwiaGFuZGxlTW91c2VMZWF2ZSIsImltZzAxIiwiaW1nMDIiLCJpbWcwMyIsImltZzA0IiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJ6aEhhbnQiLCJmciIsImVzIiwibG9jYWxlUGF0aCIsInJlc29sdmUiLCJXcml0aW5nc1BhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJzdG9yZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJhY3Rpb25UeXBlcyIsIkRBWSIsIk5JR0hUIiwiRU4iLCJaSEhBTlQiLCJSRVNFVCIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwicmVzZXRDb3VudCIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwid2hpdGVsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwibWFrZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNB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b0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoicGFnZXMvV3JpdGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1dyaXRpbmdzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgVHlwZXdyaXRlciBmcm9tICdyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb24nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgY29udGVudDp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IEJhbm5lciA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZXh0MScpfTxici8+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRleHQyJyl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuQmFubmVyLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignYmFubmVyJykoQmFubmVyKSAgICAgICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbWFpbjoge1xyXG4gICAgICAgIGhlaWdodDonMTAwdmgnLFxyXG4gICAgICAgIG92ZXJmbG93WTonaGlkZGVuJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyMxZjFmMWYnLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0Oic4JScsIFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDonOCUnXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250RmFtaWx5OidCZWJhcyBOZXVlICcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonI0NBQ0FDQScsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJMaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2xlZnQnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyNDQUNBQ0EnLFxyXG4gICAgICAgIGZvbnRTaXplOicyMnB4JyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VySGVhZGVyOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiczcmVtJ1xyXG4gICAgfSxcclxuICAgIGljb246IHtcclxuICAgICAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgRHJhd2VyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2VcclxuICAgIH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXRUlBTiBXQU5HXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9IHN0eWxlPXt7bWFyZ2luVG9wOic0cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dvcmtcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCd3b3JrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xcml0aW5nc1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3dyaXRpbmdzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQWJvdXRcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdhYm91dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLi9TYWxpZUNoaWVuX1Jlc3VtZS5wZGYnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyJyB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdyZXN1bWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuRHJhd2VyLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoRHJhd2VyKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9wdWJsaWMubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7dCwgLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PSdkYXknP3N0eWxlcy5mb290ZXJCbG9jazpzdHlsZXMuZm9vdGVyQmxvY2tOaWdodH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnY29udGFjdFRpdGxlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2ZvbGxvd1RpdGxlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2NvcHlyaWdodCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb3B5cmlnaHREZXNjcmlwdGlvbicpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5Gb290ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdmb290ZXInKShGb290ZXIpXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9QdWJsaWMvSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQge1NlbGVjdCwgU2VsZWN0Mn0gZnJvbSAnLi9QdWJsaWNDb21wb25lbnQnO1xyXG5pbXBvcnQgQnJpZ2h0bmVzczJPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWQnO1xyXG5pbXBvcnQgV2JTdW5ueU91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdG9EYXksIHRvTmlnaHQsIHRvRW4sIHRvWmhIYW50IH0gZnJvbSAnLi4vLi4vc3RvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICB0aXRsZToge1xyXG4gICAgZm9udEZhbWlseTonQmViYXMgTmV1ZSAnLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgZm9udFNpemU6JzJyZW0nLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgIGZvbnRTaXplOicxcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9XHJcbiAgfSxcclxuICBuaWdodExpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonI0ZGRkZGRicsXHJcbiAgICBmb250U2l6ZTonMXJlbScsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6JyNCREJEQkQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsaW5rQW5jaG9yOiB7XHJcbiAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgY29sb3I6J2JsYWNrJyxcclxuICAgIGZvbnRTaXplOicxcmVtJ1xyXG4gIH0sXHJcbiAgbmlnaHRMaW5rQW5jaG9yOiB7XHJcbiAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgY29sb3I6JyNCREJEQkQnLFxyXG4gICAgZm9udFNpemU6JzFyZW0nXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgIH1cclxuICB9LFxyXG4gIG5pZ2h0SWNvbjp7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGZvcm1Db250cm9sOiB7XHJcbiAgICBtYXJnaW46ICcwLjVyZW0nLFxyXG4gICAgd2lkdGg6JzZyZW0nLFxyXG4gIH0sXHJcbiAgaW5wdXRMYWJlbDoge1xyXG4gICAgZm9udFNpemU6XCIxN3B4XCIsXHJcbiAgICBmb250RmFtaWx5Olwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gY29uc3QgWyBsYW5ndWFnZSwgc2V0TGFuZ3VhZ2UgXSA9IFJlYWN0LnVzZVN0YXRlKCdlbicpO1xyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgLy8gc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaGFuZGxlTGFuZ1RvUmVkdXgoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMYW5nVG9SZWR1eCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZih2YWx1ZSA9PSAnZW4nKSB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9FbigpKVxyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIGlmICh2YWx1ZSA9PSAnemhIYW50Jykge1xyXG4gICAgICAgIGRpc3BhdGNoKHRvWmhIYW50KCkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBoYW5kbGVEcmF3ZXJPcGVuLFxyXG4gICAgICBtb2RlLFxyXG4gICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFdFSUFOIFdBTkdcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfSBsZz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuM3JlbScsIHBhZGRpbmdMZWZ0Oic2JSd9fT5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdDJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOidlbicsbGFiZWw6XCJFbmdsaXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonemhIYW50JyxsYWJlbDpcIuS4reaWh1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuM3JlbScsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlID09PSAnZGF5Jz9cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmRpc3BhdGNoKHRvTmlnaHQoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJpZ2h0bmVzczJPdXRsaW5lZEljb24gZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmRpc3BhdGNoKHRvRGF5KCkpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxXYlN1bm55T3V0bGluZWRJY29uIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nZGF5JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xb3JrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV29yayc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV29ya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dvcmsnP2NsYXNzZXMubmlnaHRMaW5rQW5jaG9yOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3b3JrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJywgbWFyZ2luTGVmdDonLTFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J2RheScmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV3JpdGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xcml0aW5ncyc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nbmlnaHQnJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dyaXRpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV3JpdGluZ3MnP2NsYXNzZXMubmlnaHRMaW5rQW5jaG9yOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3cml0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbScsIG1hcmdpbkxlZnQ6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nZGF5JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9BYm91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL0Fib3V0Jz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdhYm91dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vQWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9BYm91dCc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2Fib3V0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJywgcGFkZGluZ0xlZnQ6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1Jlc3VtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvUmVzdW1lJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ3Jlc3VtZScpfVxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9TYW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1NhbXBsZSc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNhbXBsZVxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbGdVcD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAge21vZGUgPT09ICdkYXknP1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9OaWdodCgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh0b0RheSgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8V2JTdW5ueU91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOidlbicsbGFiZWw6XCJFbmdsaXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonemhIYW50JyxsYWJlbDpcIuS4reaWh1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0J319PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9jbGFzc2VzLmljb246Y2xhc3Nlcy5uaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgey8qIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPiAqL31cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoSGVhZGVyKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJ3JlYWN0LXRvcC1sb2FkaW5nLWJhcidcclxuIFxyXG5leHBvcnQgY29uc3QgUGFnZUxvYWRlciA9IChwcm9wcykgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0UHJvZ3Jlc3MoMTAwKTtcclxuICB9LFtdKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBtb2RlXHJcbiAgfSA9IHByb3BzO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMb2FkaW5nQmFyXHJcbiAgICAgICAgY29sb3I9e21vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZSd9XHJcbiAgICAgICAgaGVpZ2h0PXszfVxyXG4gICAgICAgIHdhaXRpbmdUaW1lPXs1MDB9XHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU9ezEwMDB9XHJcbiAgICAgICAgbG9hZGVyU3BlZWQ9ezYwMH1cclxuICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgb25Mb2FkZXJGaW5pc2hlZD17KCkgPT4gc2V0UHJvZ3Jlc3MoMCl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgU2VsZWN0IGFzIE1hdGVyaWFsU2VsZWN0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbCwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHJhbnNsYXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaW5wdXRMYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOlwiMXJlbVwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6XCLlvq7ou5/mraPpu5Hpq5RcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1SZXZlcnNlXCJcclxuICAgIH0sXHJcbiAgICBzZWxlY3RSZXF1aXJlZDp7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBvbk9wZW4sXHJcbiAgICAgICAgb25DbG9zZSxcclxuICAgICAgICBvbkNoYW5nZSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBvcGVuLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgb25PcGVuPXtvbk9wZW59XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUcmFuc2xhdGVJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19Lz5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZT8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbD8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPiAgICAgICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIGZvcm1Db250cm9sUHJvcHMsXHJcbiAgICAgICAgc2VsZWN0UHJvcHMsXHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgZGlzYWJsZWQgPWZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4PTAsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBuZXdQcm9wcyA9IHtcclxuICAgICAgICAuLi5wcm9wc1xyXG4gICAgfTtcclxuICAgIGRlbGV0ZSBuZXdQcm9wc1tcImhlbHBlclRleHRcIl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZUljb24vPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1Db250cm9sUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6Y2xhc3Nlcy5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDpjbGFzc2VzLnNlbGVjdFJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxNYXRlcmlhbFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5zZWxlY3RQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge3NlbGVjdDogY2xhc3Nlcy5pbnB1dH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBTZWxlY3REaXNwbGF5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6dGFiSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZT09PW51bGw/XCJcIjp2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclZhbHVlPXtzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRXF1YWwoYSxiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBudWxsIHx8IGE9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiID09PSBudWxsIHx8IGIgPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gYi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhID09IGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzPSBpdGVtcy5maWx0ZXIoaXRlbT0+IGNoZWNrRXF1YWwoaXRlbS52YWx1ZSxzZWxlY3RlZCkgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzWzBdP2ZpbHRlcnNbMF1bXCJsYWJlbFwiXTpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn1cclxuXHJcblNlbGVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuU2VsZWN0Mi5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vUHVibGljL0hlYWRlcidcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9QdWJsaWMvQmFubmVyJ1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4uL1B1YmxpYy9EcmF3ZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vUHVibGljL0Zvb3RlcidcclxuaW1wb3J0IFNob3djYXNlIGZyb20gJy4vY29tcG9uZW50L1Nob3djYXNlJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUGFnZUxvYWRlciB9IGZyb20gJy4uL1B1YmxpYy9QYWdlTG9hZGVyJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBkYXlCYWNrZ3JvdW5kOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyNGRkZGRkYnLFxyXG4gICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgfSxcclxuICAgIG5pZ2h0QmFja2dyb3VuZDp7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidibGFjaycsXHJcbiAgICAgICAgY29sb3I6JyNGRkZGRkYnXHJcbiAgICB9LFxyXG4gICAgYm9keTp7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzglJywgXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Oic4JSdcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBXcml0aW5ncyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW2RyYXdlciwgc2V0RHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXREcmF3ZXIoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1vZGUpXHJcbiAgICBjb25zdCBsYW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sYW5nKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZHJhd2VyID09IGZhbHNlICYmXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmRheUJhY2tncm91bmQ6Y2xhc3Nlcy5uaWdodEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VMb2FkZXIgbW9kZT17bW9kZX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonOHJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93Y2FzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzJyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge2RyYXdlciA9PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6JyMxZjFmMWYnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZT17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NzAwLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgbWFyZ2luVG9wOicxcmVtJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJ1xyXG4gICAgfSxcclxuICAgIGltZzp7XHJcbiAgICAgICAgd2lkdGg6JzgwJScsXHJcbiAgICAgICAgcGFkZGluZ1RvcDonMTAlJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQXJ0aWNsZUJsb2NrID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIHVybEVuLFxyXG4gICAgICAgIHVybFpoSGFudCxcclxuICAgICAgICBtb2RlLFxyXG4gICAgICAgIGJveCxcclxuICAgICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2xhbmc9PT0nZW4nP3VybEVuOnVybFpoSGFudH1cclxuICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0gc3R5bGU9e3twYWRkaW5nOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym94PT10cnVlJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHN0eWxlPXt7Y29sb3I6KG1vZGU9PSdkYXknPydibGFjayc6J3doaXRlJyl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259IHN0eWxlPXt7Y29sb3I6KG1vZGU9PSdkYXknPydibGFjayc6J3doaXRlJyl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JveD09ZmFsc2UmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gc3R5bGU9e3tjb2xvcjoobW9kZT09J2RheSc/J3doaXRlJzonYmxhY2snKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0gc3R5bGU9e3tjb2xvcjoobW9kZT09J2RheSc/J3doaXRlJzonYmxhY2snKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkFydGljbGVCbG9jay5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2FydGljbGUnKShBcnRpY2xlQmxvY2spIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBBcnRpY2xlQmxvY2sgZnJvbSAnLi9BcnRpY2xlQmxvY2snXHJcbmltcG9ydCBpbWcwMSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2Uvd3JpdGluZ3MvZHluYW1pYy1pbXBvcnQucG5nJ1xyXG5pbXBvcnQgaW1nMDIgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL3dyaXRpbmdzL2dsb2JlLnBuZydcclxuaW1wb3J0IGltZzAzIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS93cml0aW5ncy9ucG0ucG5nJ1xyXG5pbXBvcnQgaW1nMDQgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL3dyaXRpbmdzL2xhcHRvcC5wbmcnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHNob3djYXNlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOicxcmVtJ1xyXG4gICAgfSwgXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y1RjVGNScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIG1hcmdpblRvcDonMXJlbSdcclxuICAgIH0sXHJcbiAgICBsaW5rT25Ib3Zlcjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonIzFGMUYxRicsXHJcbiAgICAgICAgb3BhY2l0eTonMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICcuNHMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAgIG1hcmdpblRvcDonMXJlbSdcclxuICAgIH0sXHJcbiAgICBuaWdodExpbms6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1YzVjNWMnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgbmlnaHRMaW5rT25Ib3Zlcjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonI0ZGRkZGRicsXHJcbiAgICAgICAgb3BhY2l0eTonMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICcuNHMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAgIG1hcmdpblRvcDonMXJlbSdcclxuICAgIH0sXHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9LFxyXG4gICAgdGl0bGVPbkhvdmVyOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb25PbkhvdmVyOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IFNob3djYXNlID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgWyBib3gxLCBzZXRCb3gxXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFsgYm94Miwgc2V0Qm94Ml0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbIGJveDMsIHNldEJveDNdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgWyBib3g0LCBzZXRCb3g0XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDFPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3gxKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3gyT24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94M09uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDMoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDRPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3g0KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDEodHJ1ZSk7XHJcbiAgICAgICAgc2V0Qm94Mih0cnVlKTtcclxuICAgICAgICBzZXRCb3gzKHRydWUpO1xyXG4gICAgICAgIHNldEJveDQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGUsXHJcbiAgICAgICAgbGFuZ1xyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAge21vZGU9PSdkYXknJiZcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDE9PT10cnVlP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDFPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVCbG9jayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCd0aXRsZTEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdkZXNjcmlwdGlvbjEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWcwMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybEVuPXsnLi8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsWmhIYW50PXsnLi8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveD17Ym94MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3gyPT09dHJ1ZT9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5saW5rT25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gyT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQmxvY2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGUyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZGVzY3JpcHRpb24yJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1nMDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxFbj17Jy4vJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFpoSGFudD17Jy4vJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3g9e2JveDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Mz09PXRydWU/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua09uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94M09ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUJsb2NrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ3RpdGxlMycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2Rlc2NyaXB0aW9uMycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltZzAzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsRW49eydodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tL2hvdy10by1wdWJsaXNoLXlvdXItcmVhY3QtY29tcG9uZW50LXBhY2thZ2UtdG8tbnBtLTIwZWU0ZjgxYTUwNid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxaaEhhbnQ9eydodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tLyVFNSVBNiU4MiVFNCVCRCU5NSVFNyU5OSVCQyVFNSVCOCU4MyVFOCU4NyVBQSVFNSVCNyVCMSVFNyU5QSU4NC1yZWFjdC1jb21wb25lbnQtJUU1JUE1JTk3JUU0JUJCJUI2JUU1JTg4JUIwLW5wbS0lRTQlQjglOEEtYWNiMDQyMTE4ZWY1J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3g9e2JveDN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94ND09PXRydWU/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua09uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94NE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUJsb2NrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ3RpdGxlNCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2Rlc2NyaXB0aW9uNCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltZzA0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsRW49eydodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tL2hvdy1pLXRyYW5zaXRpb25lZC10by1mcm9udC1lbmQtZGV2ZWxvcGVyLWluLTYtbW9udGhzLWVhZTdhMWQ3MzQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsWmhIYW50PXsnaHR0cHM6Ly93ZWlhbm9mc3RlZWwubWVkaXVtLmNvbS9ob3ctaS10cmFuc2l0aW9uZWQtdG8tZnJvbnQtZW5kLWRldmVsb3Blci1pbi02LW1vbnRocy1lYWU3YTFkNzM0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3g9e2JveDR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge21vZGU9PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94MT09PXRydWU/Y2xhc3Nlcy5uaWdodExpbms6Y2xhc3Nlcy5uaWdodExpbmtPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDFPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUJsb2NrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGUxJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdkZXNjcmlwdGlvbjEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltZzAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxFbj17Jy4vJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsWmhIYW50PXsnLi8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3g9e2JveDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDI9PT10cnVlP2NsYXNzZXMubmlnaHRMaW5rOmNsYXNzZXMubmlnaHRMaW5rT25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gyT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQmxvY2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGUyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZGVzY3JpcHRpb24yJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1nMDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxFbj17Jy4vJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybFpoSGFudD17Jy4vJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3g9e2JveDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Mz09PXRydWU/Y2xhc3Nlcy5uaWdodExpbms6Y2xhc3Nlcy5uaWdodExpbmtPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDNPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVCbG9jayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCd0aXRsZTMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdkZXNjcmlwdGlvbjMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWcwM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybEVuPXsnaHR0cHM6Ly93ZWlhbm9mc3RlZWwubWVkaXVtLmNvbS9ob3ctdG8tcHVibGlzaC15b3VyLXJlYWN0LWNvbXBvbmVudC1wYWNrYWdlLXRvLW5wbS0yMGVlNGY4MWE1MDYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsWmhIYW50PXsnaHR0cHM6Ly93ZWlhbm9mc3RlZWwubWVkaXVtLmNvbS8lRTUlQTYlODIlRTQlQkQlOTUlRTclOTklQkMlRTUlQjglODMlRTglODclQUElRTUlQjclQjElRTclOUElODQtcmVhY3QtY29tcG9uZW50LSVFNSVBNSU5NyVFNCVCQiVCNiVFNSU4OCVCMC1ucG0tJUU0JUI4JThBLWFjYjA0MjExOGVmNSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94PXtib3gzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDQ9PT10cnVlP2NsYXNzZXMubmlnaHRMaW5rOmNsYXNzZXMubmlnaHRMaW5rT25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3g0T259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQmxvY2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGU0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZGVzY3JpcHRpb240Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1nMDR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxFbj17J2h0dHBzOi8vd2VpYW5vZnN0ZWVsLm1lZGl1bS5jb20vaG93LWktdHJhbnNpdGlvbmVkLXRvLWZyb250LWVuZC1kZXZlbG9wZXItaW4tNi1tb250aHMtZWFlN2ExZDczNCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxaaEhhbnQ9eydodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tL2hvdy1pLXRyYW5zaXRpb25lZC10by1mcm9udC1lbmQtZGV2ZWxvcGVyLWluLTYtbW9udGhzLWVhZTdhMWQ3MzQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveD17Ym94NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5TaG93Y2FzZS5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2FydGljbGUnKShTaG93Y2FzZSkiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b24yXCI6IFwiSGVhZGVyX2J1dHRvbjJfX3dGN1hHXCIsXG5cdFwiYm91bmNlXCI6IFwiSGVhZGVyX2JvdW5jZV9fMjR0VTlcIixcblx0XCJiYWxsXCI6IFwiSGVhZGVyX2JhbGxfXzNwUmk3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJCbG9ja1wiOiBcInB1YmxpY19mb290ZXJCbG9ja19fWHVDci1cIixcblx0XCJmb290ZXJCbG9ja05pZ2h0XCI6IFwicHVibGljX2Zvb3RlckJsb2NrTmlnaHRfXzNtaTdiXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25cIjogXCJwdWJsaWNfaW1nRGVzY3JpcHRpb25fXzJHQkRKXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25OaWdodFwiOiBcInB1YmxpY19pbWdEZXNjcmlwdGlvbk5pZ2h0X18zQ1hKRVwiLFxuXHRcImJhclwiOiBcInB1YmxpY19iYXJfXzM0N1FYXCJcbn07XG4iLCJcclxuY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcbmNvbnN0IGxvY2FsZVN1YnBhdGhzID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0KCkucHVibGljUnVudGltZUNvbmZpZ1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdExhbmd1YWdlOidlbicsXHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnemhIYW50JywgJ2ZyJywgJ2VzJ10sXHJcbiAgbG9jYWxlU3VicGF0aHM6e1xyXG4gICAgemhIYW50OidjbicsXHJcbiAgICBmcjogJ2ZyJyxcclxuICAgIGVzOiAnZXMnXHJcbiAgfSxcclxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcclxufSlcclxuLy8gZXhwb3J0IGNvbnN0IHVzZVRyYW5zbGF0aW9uID0gbmV4dEkxOE5leHQudXNlVHJhbnNsYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXcml0aW5ncyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9Xcml0aW5ncy9Xcml0aW5ncydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuY29uc3QgV3JpdGluZ3NQYWdlID0gKHt0fSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxXcml0aW5ncy8+XHJcbiAgICApXHJcbn1cclxuXHJcbldyaXRpbmdzUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2hlYWRlcicsICdiYW5uZXInLCAnYXJ0aWNsZScsICdmb290ZXInXSxcclxufSlcclxuXHJcbldyaXRpbmdzUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoV3JpdGluZ3NQYWdlKSIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9keW5hbWljLWltcG9ydC0zMjE0MGU2ZmRlMDMxNmI0YWZkYTdmYjRmMzVkODcyMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2xvYmUtZGY4MDc5NmNlNTVjMjI5ZmM0NzQyOGU3NzIyZjUyM2YucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xhcHRvcC1jNGU0MTdmNGFiYmJhYWYwYmYyOWU5ZmM0YzZjMmI3OC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUF5QUFBQUpZQ0FNQUFBQ3RxSEpDQUFBQVMxQk1WRVZIY0V5UkJRV1JCUVhNQUFDUkJRV1JCUVdSQlFXUkJRV1JCUVdSQlFXUkJRWC8vLytrQXdPYUJBVERBQUMzQVFHdkFnTGljSEQ5OHZMWE5qYmRVVkhSR1JuNTN0N3p2Ny9ybTV0RUd3U1lBQUFBQ25SU1RsTUFscmYvRTNKUTdDM1dwaFYrb0FBQUdSSkpSRUZVZU5ydDNldDYyellhUmVHeFZOc1JkYlJzV2I3L0t4MlAyMmtTUndlUUJFRWMzdjJqdjVyMmlhWGwvUzBBQlAvekg4a2hmejA5UFQ0OFBDdys4L0R3K1BqMHc0OUU1RzgyZm55eXNYcnVmczN6YXZIdytPTXZQeHhwdmprZUZyK3o4U3NsRDQ4WWtaYnhlTHhLeHo5WlBScTJwRlU4SGxiZC9Ud3ZJQ0pOdGtjSUhsK0lQRUJFV3N0VEtCNWZnOVlERjVHVzh1UGh1ZXVWeFJORUJCNDNFZkdERS9KQlJhUngrVmgwUTdPeUxTS21LeW9pelU1WDQvRDRRc1NjSmVTRGlnajVvQ0lpa2VTRGlnajU2REZuVVJFaEg3ZFBuMEJFS3BtdUZ0MFVXWm16aEh4UUVhbDd1Z3JIWS92L2hDTml6cEtpOFFnNzFMN2RiZzc3L2U1L1dYNzljNzgvYk1JNGVmYkVvZFF0SDl2TmZyZThsTjErczZVaTByUjhiQTlYNlBnL0k0ZHRpSXI0WVV0NThyRUt3T01XSGY4d0VvQ0kweWRTbkh6Y242NDIrL3Q0aENMaW1Wd3BhN3FLMGg3L0loSWdJMVJFYXBLUEhuajhqUWdWa1ZxbXExWEFkTFhzbXowVmtVYmtZOXNmajY4VnJZQTV5MEY0YVVrK2hzeFpFSkdHNUtNM0lzOVVSSnFTRHlvaVZXUXkrZmlXQXhXUktxZXI3YWpwcXQrdUNCV1IwdVJqRXdjUEtpSTF5a2VVNllxS0NQbWdJa0krMHN4WlZFVG1ucTRlazhySEFCVXhaMGxMOHRINzlJbG5jaVZyK2RndHA4eU9pZ2o1Y0JCZXlNZndKVjhxSXRuSngySlcrUmd5WjBGRWtrMVhBWGdjbGdsRFJhUXMrVWcwWFRsOUl1UWpGSkdBRzdTY1BwR1c1SU9LU0lIeXNWdk9sZDNCVGFXU3Qzek1pRWZna3E5ZEVabElQZ0xPbGN5TGg0UHdRajRjaEpjY3A2c3U5K21xMyttVGxUbExrc3JISmhjODdJcEk2dWxxVmNwMFJVV0VmRGg5SWtYSlIzZllMWE9NWjNJbEEvbklGWS9nZy9CVVJDYVVqODErbVhNOGt5dVRKWU1uYXFtSW1LNDhreXNGNHJISzgxQzdaM0tsRFBuWTdwZmxKT1JWMHVZc2lTZ2ZoMlZSb1NLU1VENjJ4VXhYVkVRaVQxZVBGY2xIZnhWeCtrUnV5OGVpTHZtZ0lwSllQdmE3WmJtaElrSStxSWlRRHlvaTVNT2NKWmxNVjR2czd5dEpqNGl2aGZ5RHgyTUQ4dUVndkpBUHorUUsrWEE5a0NTVWo2NGwrZml1SXE0SGt0dnkwZVIwMVV0RnVnZUlrSTgyOFFoV0VYTldtL0x4WFBlNUVyc2lZdWVEaWdqNThFeXVaQ2NmKzJWTG9TTHliNTVhWHRxbEluSm51bm9nSHc3Q0MvbHdFRjc2TCsydVdqMVhFazlGekZrVnk0ZWREeW9pdytXak83U05CeFd4dEVzK3FJZ01XOXJkWXlQOElEd1ZhVTArVEZkVWhIeVlycUtxaURtTGZGQVJLbEwzemdmNW9DSkNQcWlJREppdXlBY1ZFZkpCUldTU25ZK0Q3Nzg1cTlHbFhmS1JHQkduVDB4WDVxeWIxd09aczJyQ3c5SXVGU0VmNUlPS3lEZjU4RVR0ZElpNEhxaDRQTWlIT1V1dWhueE1qb2lYSnBRc0g2WXJLaUxrSTNzVmVhWWlsbmFwaURtTGZNZ0lGVEZua1E4cVFrVnFrQS9YK1V5QWlPdUJ5SWRRa2RLbkszZUpVaEVoSHdXcnlPSUpJak5OVitTakVCVXhaNUVQS2tKRnlJZGNqT3VCOGx2YUpSL0Y3WXBRa2F6a3c2RjJLa0kreUVjK2hGQ1JiSloyeVFjVmtXdDRPTlJ1VjBTdVQxZmtnNG9JK1NoWVJUeVRPeGNlUDhoSE5VdStWQ1QremdmNW9DSkNQcXFJbTBySmg0eEZoSXJFTzFmaUxsRXFJdVNqTmtUdWw0aG5jcE5NVi9ESWRNNnk1RXMrQkNMa1F5WlZFVXUrNUlPS3VCN0lkQ1dXZkhPYXJ1QlJrWXE0N3JwWDdqOXhicnFxVEVVOEt0SWo5dytXd0tNMFJPN1BXYTZZaTNid2lueFVPV2N0RUJLVUIvTFJLQ0lJaWRFZitLaDN6a0pJZ0g4NFdGSXpJbmRLNUFFQTk5YXY3dlVIUHFvbTVCRUN0L2MvN3Ezdm1xL3FKdVRaZnNoTkFibTNQK2pvVmUyRXJPeXBqMW5BTW1CVnNKaEYxS2NTa0c3ajYxVkJOalJrb2dHTGdkUXhaSFdHckVsV2VMdk9oTlZDaFJpeUJxNWdVWkJLY3VjUkVTdFpRd3NFSUUxb3Vnb1pXQ0JHckRZa2hLY1BXdUlsNmMwMFNMZFNJWU1LeERKdkk0Q3drQ0VHUWtJYVdjWDZuNFVBb3ZjZWlLTW16U2pJWjRYWUMvbStpZDZGaFlWVXY4cnIzUHRRUlRkazFWRWcyNERQbWFaL203QldYU2doT3FSd1BqWkJuek5ONzNkTUVTSHRHTHF0a0lGcldPNzhhYVkvN0taL3k2SVBJRXFrYnYrd2pqVnNsOUROV09XdlgyM0RQMkl6MW9CRlhsZVBscHo5cHM4bmJLRjNxSUpBcEc3N3NKaytmQmZFbkZVc0huMm1LenNoNHh3ZEl1Vk5WOXZlbnkxQWZzbHFJQ0RtckFybHd6SldSRUFnVXA5OEFDUXFJT2FzMnVRRElKRUJjYUYxWGZJQmtPaUFtTE5xa2crQXhBZkVDOU1ya2crQTlBQmt1OWtjRG9mTmRrdEZtcEVQZ0FRRDhuTnkyb1hNc2xTa0N2a0FTQ2dndjMvaEErWlpLbEtEZkFBa0VKRE5nRjlLRHNMbk1WMEZpaU5BUmdCeTRlbnprTEdXaWhRaEg5dk5ZYi9mN1hiN3EvOHlRTzRBc2h1NE1MS2xJdG5MeDIrejhKVS9BSkRiZ0d5R1Q3ZFVKTytsM2UrZnorVS9BNURiZ096Ry9JcWlJak1seE0zL2JQaUxEK0lDNUNZZzI1RkRMaFhKVkQ0dWZqQ1hmdWNCNUNZZ2g5RkZiczVLelVlUWZGeitzd2VBOUFUa1hnRlFrUXJrNHlaY0FMa0ZTTUFObzN0elZtblQxYTZQdkFCa0pDQlVwQUw1K1BuckRpRDlBSWxXNithczZYYytOc1BsNC9xTUJaRHhnRkNSNHVYajN3Q2tGeURCNzFyYjJSV1plYnFLOU1UbkJpQlRORWpZQUx5bElsTk5WOUVlMURrQVpKSUdNV2RsUDEyRi9iY0FNbFdEUUtScytRREk1QTN5OWZPMTVGdll6Z2RBRWphSVhaSFVPY1MrSlFBZzB6WklXT1diczNLY3JnQ1Nva0ZDbDN4ZEQ1UUVqOTRidEFDWnZFSE1XV253MkU5eUJ4TkFwbStRMEkwcnorUm1zZk1Ca1BRTllzbTNQUGtBU05JR0Nmd2xSMFdHNGJHZDdKY1BRRkkxQ0JVcFpta1hJUE0wU0NnaTVxelk4akhpV0NoQUVqWUlGU2xJUGdBeVI0T0Vxb2c1SzVwOGpIdzBEU0NKRzhTY2xmdk9CMEJtYnBEQXdRQWk4OG9IUUdackVDcFNnbndBWk1ZR29TSUpwdFE0SFF5UWVScUVpa3c5WFVYYVVBTElYQTFDUmZLV0Q0RE0zU0JVWkxLbDNZZy9NNERNMkNCZkh3QVZ5Vk0rQUpKRGcxQ1JiT1VESUhrMHlOSk5wVEVIMHVoMUM1QzVHeVIweWJkNVJGTHRmQUFrdHdheEs1S2pmQUFrb3daWkJ0NVUybTZKcEpjUGdHVFZJSUVUZHFOelZzeTdSQUZTWm9QWUZjbGw1d01nbVRaSTRLNUljOC9remlRZkFNbXZRYWhJUnZJQmtCd2JoSXBrSXg4QXliSkJncGQ4VzBBa1pHbDNhaWtEU0c0TkVxb2kxUk95bTN1NkFraW1EYkowVTJrRzhnR1FqQnZFa3U4ODUwb0FVa3FEQkt0SXUvS1JhS1VDSUprMlNNc3FjcGgrdWpxOXZBS2s4QVlKR3pUcTJ4Vko4VVR0Mi9uNEJwRGlHMlRaNEVINEZQTHgrbkZjcndGU1FZTTBweUlwNU9QMDhyNWVBNlNTQmxrMjlVeHVpcVhkdC9ONkRaQ0tHbVRaelBWQUtaNm8vWnF1QUZKVmd3VFBXV1Vqa2tJKy9wbXVBRkpaZ3l3RFh5VmRzSW9rMmZsNE9hL1hBS215UVdwWGtSVHk4WE82QWtoOURWTDFyc2d1d2M3SDZlTjl2UVpJeFExUzdaSnZpaWRxVDIvbjlSb2dsVGRJbFlna3VjN245WHhjQTZTQkJnbjhmVnZRbkpYaVhNbXZhMWNBcWJ4QmxsWGRWSnJrTHRHTGVBQ2sxZ2FwYUZja3lSTzEzOWF1QUZKL2czeDliQlZjRDVSQ1BrN1g4QUJJelEwUytOczM2emtyeGM3SGhiVXJnTFRSSUorRUZLMGlTYTd6ZWIyQng5cnpJSFUzU05GTHZrbms0NCtkUVEzU1ZJTUVmOUh5UXlUSlhhSXZ0L0VBU0FNTkVyWXJrdHZwa3lSTHUyL240eDArakZnTk5Famc5eTJuWjNKM0tmQzRzWGFsUWRwcWtNQ0pKWmM1SzQxODNKMnVBTkpRZ3l3TE9naS9UeUVmTjlldWpGZ05Oc2l5a05NblNlVGpOV1M2MGlCdE5jZ1hJdHZwOXhYeTMva0luSzQwU0dzTnNzejltZHcwTHpLNHYzYWxRVnB0a0x4VkpJMThmUFRBUTRPMDFpQ2hZOHdNaUNTUmp4N1RsUVpwczBFQ2YxV25uclBTdk1qZzdkd1BEdzNTWW9Oa3VDdVNSajc2VFZjYXBOMEdXV2IyVEc2UzEwVDFucTQwU01NTkVqYlVwRGw5a2tZK2VrOVhHcVRwQnNsR1JVTGVzeGhqdWhxRWh3WnB1RUd5UUNUTlc5VHVQZlNoUVRSSW5rdSthZDVSK3pZWUR3M1NlSVBNcXlKSjVPUGlkWEFhUklOa1AyZWxrWTlCYTFjYVJJUDBQbjJ5VC8vLzdPYkdRNE5va0hBVmlUcG5wYmhMZFBqYWxRYlJJTE1pa2tZK1RoL0g5ZWdBUklPa1ZwRTA1MHBPYisvajhkQWdHaVMxaWlSNWtjSFl0U3NOb2tGbW1yTkNwcXROaE9ucVBRb2VHa1NESk4wVjJhV1JqNWRJZUdnUURmTEhWM2cvM1p5VlptazM5TUlTRGFKQjhsS1JSUEx4Y1Z4SERFQTBTSm81SzVGOFJKeXVOSWdHR2ZGdDduZjVUcExyZk9KT1Z4cEVnNlNhczFMSlI5enBTb05va0Y2ZitWQkVFdTE4eEo2dU5JZ0dHVDhXYmU2OUJYUVhoRWVFTGZxMzh3UjRhQkFOTXZMMFNiZTl4VWdRSFRId21HQzZBb2dHaWJNMCs4bklZYi9iZlcrTy9XR3pEZm5URWVSam11a0tJQm9rUkNDNnNHeTNtODNoY05qdjk0ZkQ1aE9OYmVDZmkvQkE3OXRVZUhBUURSSkhSUVpuays5MHBVRTBTRVFWR1pRSU94K25sd254QUlnR2lhZ2l2ZkdJTUYyOW5OZHJnR2lRR3Vlc0NIaE1PbDF4RUEweUl5SXhsblpmM3FmR1E0Tm9rRmxVSk1aNzN0Nm14d01nR2lUMkFhMHV6YzdIOG0zNjZRb2dHbVNXT1N2QzB1N0VhMWNjUklNTW5yTTI4OHZIOHVVOUVSNGFSSU9rVlpFWTEveStudGRyZ0dpUUdsVWt5dEx1K3hvZ0dxUkdGWWt3WFozZVV1SUJFQTB5ZEd0OW52cDRPNi9YQU5FZ1ZacEloSE5YSDhjMVFEUkluWVNNNXVQMDhyNWVBMFNERkNNaXZRaUo4S0tvOVJvZ0dxUlNRc2IyeDJ2NjZlcnZ2QUpFZzB3L1pSMEtuSzcrYmhDQWFKRHBDUm5KUi9TMXEvZXpCdEVnK2F6MmpsdmZqVDVkSFQ5ZVh6U0lCa21Ta0IzRDdTNnI2ZXI4NmQwdkdrU0RaQ1BxKzZ5bXE1ZlRzZ2NnR2tTRGpOU1FLUVZrZ3VucTlQVWYxaUFhSkpjaGEvaUFGWDI2T3A3L3Y2dWhRVFJJTGtQVzRBRXIrckhFOTdmVHNpOGdHa1NEVER0a2JmS1pybjc1cm1zUURaSXUyL2dEMWluNlF4OGZ2MzNUTllnR3lhTkNCdjJxT0VWZnV6cS9uSmFEQU5FZ0dtUlNUeDlTSU5HUEpSNi80YUZCTkVnbUZUSmdpVGYrMnRYSG4xOXlEYUpCc2xqSTZsOGdFNnhkWGZpL2FCQU5rc09SckUzLzZTcnkydFg3SDlPVkJ0RWcyVlJJenoyUStJL1VmbHo1Zm1zUURaS0JwdmRiNHoxRmY1WEIrZTIwSEFtSUJ0RWcwMm42b2Q5MHRVNHlYUUZFZytReVkvV1lzS2JkT0FlSUJzbHdOejE4d29wL0hkejU5bVVMSEVTRHpMK09GZnhyNGkzUjJwVUcwU0E1U1VqZ1QrRTAxVU1mQU5FZ1dVdElrSUpNOE5CSHdIY2FJQnBrOW9YZUlBV0ovMGh0MEUxdkhFU0R6QS9JREd0WGQrVkRnMmlRWEN4OWszeTZ1cmQyQlJBTlVoQWdwL2lYN1lieUFSQU5rajhncjlGdjJ6MENSSU9Vczg2YkhoQU5va0VBb2tFMENFQTBpQVlCaUFiUklBRFJJS0pCTkFoQU5JZ0dBWWdHMFNBQTBTQWFCQ0FhUklNQVJJTUFSSU5vRUlCb0VBMENFQTJpUVFDaVFRQ2lRVFFJUURTSUJnR0lCdEVnQU5FZ0FBR0lCakZpQVVTRGFCQ0FhQkNBQUVTREFNU0lwVUVBb2tFMENFQUFBaEFOQWhDQWFKQ29nSndBb2tFQW9rRkVnMmdRZ0dnUURRSVFEYUpCQUtKQk1tbVFkNEJvRUlBQVJEVElvQkVMSUJvRUlCcEVOSWdHQVlnRzBTQUEwU0FhQkNBYVJJTUFSSU5vRUlCb0VBMENFQTJpUVFDaVFRQUNFQTBDRUlBQVJJTUFCQ0FhQkNBQTBTQUFBWWdHQVFoQU5BaEFBS0pCQUFJUURRSVFnR2dRZ0FCRWd3QUVJQm9FSUFBQmlBWUJDRUEwQ0VBQW9rRUFBaEFOQWhDQWFCQ0FBRVNEQUFRZ0dnUWdBTkVnQUFHSUJnRUlRQUNpUVFBQ0VBMENFSUJvRUlBQVJJTlVBc2dMUURRSVFEU0lCZ0VJUURRSVFJeFlHZ1FnR2dRZ0dnUWdBTkVnUml5QWFCQU5BaEFOb2tFQW9rRTBDRUEwQ0VBMGlBWUJpQWJSSUFEUklCb0VJQm9FSUJvazZJZWdRVFFJUURTSWFKQjZHK1FkSUJxRXBHc1FEZEpFZ3hpeE5JZ0cwU0FhcEExQXpoeEVnd0FrSlNCR0xBMENFQ09XQmdFSVFEUUlRRGlJQmdHSUJoR0FhQkNBQUVTREFBUWdBUGt0NXhOQXBnQmtCNUFhQURsK0JQS3gzQUFFSUswQmNqd0hiendDcEI4ZzNSNGc5OWU2TXdmay9lVVUvdGZmQXFRWElBZUFGTjRneHo1NExIY0E2UWZJQmlCRkEzSTh2NDc4MndQa0ppRHRTVWhWZ1BTUWp5c0tBcERiZ0hRQUtkZEIzajlPUGYveWYwNVlBTGtEeUFFZ2hUYkk4ZU8xOTE5KzF3R2tKeUFiZ0pUWklMMm5xNHZiaEFDNUIwaHpFbEpIZy9SYTJyMmxJTjBLSUQrejZNeFlOVFRJa09ucWlvSjBxNzl3OFc4ZU9oVlNRWU1NeE9OaWdYUUxnUHpNNDRVZlVHdWI2Y1UzeU1EcDZrcUJkQXRZL016VEpVQTJBQ2tJa09GNFhGVDBybnVBeGMvOFdKbXhpZ2FrNzhiNTc3bFVJTjBqTE81SVNHTVZVcktEREZyYXZWMGdWbm52UzBoYkZsSnVnNHlacnE0WkNFZi9KaUhQelZkSXFZQWNQMDdqL3VJWEM4U0U5WHYrV2pWZklZVUNNbTY2dWxvZ3owK2d1QzhoVFhsNmtZQzh2NTNHOHJHNStNbmJKZ3lhc1ZyYVRpOFFrUGVQMXduKzJoWjVMODVZaTY3eElhczRRTVl0N2Q0Y3NLeGhCZTRWdGpSa2xRYkkrZVVVZ1krTkFobW42ZDFtQjVBY0FZbUJ4N1VWcks2ajZLR2EzczVhYjFtQXhNazFQbXlDOUtpUVZrUzlRVUN1Q0xwTmtENjc2YzBRMGg0Zys2MENpVkloYlJEU0hDQlgrYkJKMkc4dnBPdTJCNEJVQjhoVlBoVEkxUXE1NXVsTmRFaGpnRnoxRHcralg4K1BxME5XQTZ1OVRRR3lPMXo5cEJuNkVFLy9ITFAyQUtrR2tHdjdnd2Fzb1pzaERaUklPNERzRHR2T2dCVjdKZXZMMVhjQUtSK1EvUTA4ckdDTjBKQ3ZPV3NIa0xJQjJXOXVmY0RQQkdUd1dtL3RjMVlUZ055U2M0Y1VveEJTTFNJTkFISlRQcjc0SU9naFMxbDNDS2xVUmVvSFpIOEhEd3RZa1FpcGM4bTNka0J1eTRmK2lEbGxWVGxuRFFEa294eEE3c2tIUHZxdFpTMjY1aENwdVVIdXlrZlhyUjd4MFllUWg3c2xVcHVLVk53Z2QrWGprdy83SDMzSHJQc2xVcGVLVk5zZzkrV2plMVlmUTg3MlBqYzFaMVhhSUFIVDFmUEM4WktwNXF5S0VLbXlRUUx3NkJaUDZtUFNPV3VuUVhJRkpHQzZJdWZqNXF5blZTc3FVbCtEN0VMa3czUkZSZHBza0NENXNIWkZSUXBxa05Gdk12Z2xRZkxoeXgxcHptcEJSV1p2a09Qb054bVFEeXBTTHlEajMyVFFTejRleUljNWEySkFUaEVCZVk4M1haR1B1UkRwcWo1OU1tZURIQ084NktPSGZLenNmRkNSa2dBaEg3VWc4aGd3WiswQjBuTzZlaUVmTGFuSXRsQVZtUW1ROTNqVEZmbklBcEZGcFNveUR5RG5lUEt4Sng4RnFRaEFndkNJTjEwRnlZZnBLcEdLMUxncmtoNlFJL21nSWdCSnNMUkxQcWhJZFlERVhOb2xIMVNrTWtEZWs4cUhRKzM1N29yc0FETHBxZDJBNjN3NlQ5Um1yQ0pkTVhOV01rQ09IMi94OFBCRWJmRXFVc3JyMjFJQjhoN3ZvYWdRK1hDdWhJcVVCQWo1b0NLRnFrZ0tRSTd4TnM1RGRqN0loMTJSb2dBNWs0OUdVOE9jTlRrZzc0blBsY0FqcXptcitOTW5Fd01TOGRSdUNCN09sV1NIU09uUDVFNExTTXpwaW56WUZha01rSE8wQ3huSVI5RXFVdktjTlIwZ0VTOWtzUE5SK3E1SXVZaE1CY2d4cVh3NDFGN0JuSlduaWt3RVNGTDVjRmxpRVloMFJhcklKSUJFWE5vbEgvWE1XVVh1aWt3QXlESHgwaTQ4S3RvVnllNTZvUGlBZkNROVYwSStMUGtXQlVpOEN4azhVUXVSNmdCSkt4K2VxTFhrV3hRZ3FaZDI0VkdvaXBSMFUybEVRQ0l1N2Q3SG95TWZWYzlaMmR4OUVnMlE5eGZuU2lRWWtVVXB1eUtSQURtbVBWY0NqeGFXZkxOUWtTaUFSSHlObW5NbEVNbEtSV0lBa2xRKzRFRkZ5Z0lrdFh6NFlqV2xJbk1qTWhhUW1FdTc1TU9jbGQyY05SSVE4aUVKZGtWMmhRSVNjYnB5blE4VnlYTEpkd1FnOFM1a3NQUFJkb2tFcVVocGdFUzhEYzRUdGVhc2JIZEZCZ0R5RXZkQ0J2SWhHYXZJc0FZNWtnK0puS2M4ZDBXR0FISWtIeklGSWptcXlBQkEzdDRTeXNjeithQWljKzZLREFERXpvZE1oa2gyMXdQTkJvaTNxTW5BWFpHa0tqSVRJT1JEcnFwSVZrdSs4d0JDUHFRUUZaa0RFSWZhcFJnVlNROEkrWkNDZGtWU0EwSStKS3hFTWxHUnhJRHNBbzVkdWM1SDhsR1JwSUNRRDRtODVEdjVRZmlFZ0hpaVZucXJ5R0p1RlVrR1NCQWVsbmJsVytZK0NKOEtFSGVKU3BFcWtnWVE4aUdGcWtnS1FDenR5cmdTbWZGNm9BU0FlSkdCbER0blRRNklRKzFTTWlJVEEwSStKS0dLVERCblRRcklMbWk2OHRGTFdJbk04VXp1bElBY1hPY2pwYzlaMHdGQ1BtUUtSQksvdjIwcVFFTGVvdVpRdXd4UWtiU25UNllCWkdkcFZ5WkxVaFdaQkJCUDFFb3RLaklCSU9SRHNsQ1JYWmFBa0E5SlFVZ3FGWWtNaUVQdGtreEZraHlFandzSStaREtWQ1FtSU9SREVpLzVUbjg5VUR4QXlJZk1zZVE3c1lyRUFtVG5YSW5VcUNLUkFDRWZVcWVLUkFHRWZFaXRLaElCa0tDN1JCMXFseUpWWkRRZzVFTnFWcEd4Z0lUSWgrdDhKTUdjTlkyS2pBUEVFN1ZTdVlxTUFZUjhTUFVxTWh3UThpSDVKZnBOcFlNQklSL1Nnb29NQk1UT2gyU0x5Q0xtVGFXREFIR2RqK1N0SXZGdUt2MFRrTzNkUDBrK0pPLzhGVTlGTGl4RTdVeFgwb0NLYklOVTVBSWdoN0dIMnVFaFJhaEl5SngxNGZ1K0pSL1NqSW9NQVdSUFBxUVZGYmt6WjExOExmT0dmRWd0S2pMeTlNbmx3eUw3Z2NldVBGRXIrYzFabzFUazhyZit6NVZlNTBxa1JSWFpoYTBSdzBQYVZKSE45VjJVbnlXeUl4OVN1SW9NUEFoL3VOazYrOTFuOW9mTi9mWnduWS9VcUNMM0R1UnVQOU1GeEhRbCtjOVpJYy9rL283SUllamI3em9mYVVkRlBoSFpoWXRGRUI3a1EycFNrVzY3T1h4bUU2YzlQRkVydGFsSXpKQVBLVTVGRnNud0lCOVM1SnkxU29PSHBWMnBXRVhJaDdROFp6MlRENUViaUV3NVo3bk9SOHFmc3g2Zko4UERkQ1ZWcUFqNUVMbXBJdVJENUFZaWo2dkkwNVdsWGFsc3pscEYzUGt3WFVsOWlNUmE4bldkajFBUjhpRlVoSHlJZkZPUlovSWhja3RGUnNpSDZVcW9DUGtRS2tJK1JPS3BDUG1RdHRKcnpqSmRDUldCaDBoL0ZWbVJEMm0zUmU2NHlQUGlFUjdTdEs0L0xsYlAxK2g0c1BFaDh0ZlQ0OFB2bER5dkZnK1BUei9RSWZJdkpVK1BqdzlmZWNSR1B2a3Y1TjRYeUp4QlFYNEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJ1xyXG5cclxubGV0IHN0b3JlXHJcblxyXG5jb25zdCBleGFtcGxlSW5pdGlhbFN0YXRlID0ge1xyXG4gIG1vZGU6J2RheScsXHJcbiAgbGFuZzonZW4nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBEQVk6ICdEQVknLFxyXG4gIE5JR0hUOiAnTklHSFQnLFxyXG4gIEVOOiAnRU4nLFxyXG4gIFpISEFOVDogJ1pISEFOVCcsXHJcbiAgUkVTRVQ6ICdSRVNFVCdcclxufVxyXG5cclxuLy8gUkVEVUNFUlNcclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkRBWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnZGF5J1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLk5JR0hUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vZGU6ICduaWdodCdcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsYW5nOiAnZW4nXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuWkhIQU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxhbmc6ICd6aEhhbnQnXHJcbiAgICAgIH0gXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFU0VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vZGU6ICdkYXknLFxyXG4gICAgICAgIGxhbmc6ICdlbidcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG4vLyBBQ1RJT05TXHJcbmV4cG9ydCBjb25zdCB0b0RheSA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5EQVkgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9OaWdodCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5OSUdIVCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b0VuID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkVOIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvWmhIYW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlpISEFOVCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXNldENvdW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlJFU0VUIH1cclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICBrZXk6ICdwcmltYXJ5JyxcclxuICBzdG9yYWdlLFxyXG4gIHdoaXRlbGlzdDogWydtb2RlJywgJ2xhbmcnXSwgLy8gcGxhY2UgdG8gc2VsZWN0IHdoaWNoIHN0YXRlIHlvdSB3YW50IHRvIHBlcnNpc3RcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpXHJcblxyXG5mdW5jdGlvbiBtYWtlU3RvcmUoaW5pdGlhbFN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSkge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgIHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBtYWtlU3RvcmUocHJlbG9hZGVkU3RhdGUpXHJcblxyXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxyXG4gIC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XHJcbiAgICBfc3RvcmUgPSBtYWtlU3RvcmUoe1xyXG4gICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxyXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcclxuICAgIH0pXHJcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxyXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXHJcbiAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcclxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxyXG5cclxuICByZXR1cm4gX3N0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4gIHJldHVybiBzdG9yZVxyXG59XHJcblxyXG5cclxuLy8gaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbi8vIGltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcblxyXG4vLyBsZXQgc3RvcmVcclxuXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gICAgIG1vZGU6J2RheSdcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbi8vICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyAgICAgY2FzZSAnREFZJzpcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICBtb2RlOiAnZGF5JyxcclxuLy8gICAgICAgfVxyXG4vLyAgICAgY2FzZSAnTklHSFQnOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgIG1vZGU6ICduaWdodCcsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGNhc2UgJ1JFU0VUJzpcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgfVxyXG4vLyAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgcmV0dXJuIHN0YXRlXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUgPSBpbml0aWFsU3RhdGUpIHtcclxuLy8gICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbi8vICAgICByZWR1Y2VyLFxyXG4vLyAgICAgcHJlbG9hZGVkU3RhdGUsXHJcbi8vICAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG4vLyAgIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpXHJcblxyXG4vLyAgIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxyXG4vLyAgIC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbi8vICAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XHJcbi8vICAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xyXG4vLyAgICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxyXG4vLyAgICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcclxuLy8gICAgIH0pXHJcbi8vICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxyXG4vLyAgICAgc3RvcmUgPSB1bmRlZmluZWRcclxuLy8gICB9XHJcblxyXG4vLyAgIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbi8vICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXHJcbi8vICAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcclxuLy8gICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxyXG5cclxuLy8gICByZXR1cm4gX3N0b3JlXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuLy8gICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4vLyAgIHJldHVybiBzdG9yZVxyXG4vLyB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9