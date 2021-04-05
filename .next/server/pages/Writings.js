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
            mode: mode
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
            lineNumber: 74,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
          lineNumber: 85,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
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
    color: 'black',
    fontWeight: 700,
    fontSize: '2rem'
  },
  description: {
    color: 'black',
    marginTop: '1rem'
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
    url,
    mode,
    box
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: url,
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
            lineNumber: 47,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
          item: true,
          xs: 12,
          md: 8,
          children: [box == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.title,
              style: {
                color: mode == 'day' ? 'black' : 'white'
              },
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              style: {
                color: mode == 'day' ? 'black' : 'white'
              },
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
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
              lineNumber: 65,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              style: {
                color: mode == 'day' ? 'white' : 'black'
              },
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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

  const handleBox1On = () => {
    setBox1(false);
  };

  const handleBox2On = () => {
    setBox2(false);
  };

  const handleBox3On = () => {
    setBox3(false);
  };

  const handleMouseLeave = () => {
    setBox1(true);
    setBox2(true);
    setBox3(true);
  };

  const {
    mode
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
          url: './',
          mode: mode,
          box: box1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box2 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox2On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title2'),
          description: t('description2'),
          image: _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_9___default.a,
          url: './',
          mode: mode,
          box: box2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box3 === true ? classes.link : classes.linkOnHover,
        onMouseEnter: handleBox3On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title2'),
          description: t('description2'),
          image: _public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_10___default.a,
          url: './',
          mode: mode,
          box: box3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
          url: './',
          mode: mode,
          box: box1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box2 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox2On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title2'),
          description: t('description2'),
          image: _public_image_writings_globe_png__WEBPACK_IMPORTED_MODULE_9___default.a,
          url: './',
          mode: mode,
          box: box2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: box3 === true ? classes.nightLink : classes.nightLinkOnHover,
        onMouseEnter: handleBox3On,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ArticleBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: t('title2'),
          description: t('description2'),
          image: _public_image_writings_npm_png__WEBPACK_IMPORTED_MODULE_10___default.a,
          url: './',
          mode: mode,
          box: box3
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
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

module.exports = "/_next/static/images/globe-d4ac24261591bd4c2bc7b04ad1c0a4cd.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9EcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9QYWdlTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvUHVibGljQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Xcml0aW5ncy9Xcml0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV3JpdGluZ3MvY29tcG9uZW50L0FydGljbGVCbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV3JpdGluZ3MvY29tcG9uZW50L1Nob3djYXNlLmpzIiwid2VicGFjazovLy8uL2Nzcy9QdWJsaWMvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL3B1YmxpYy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvV3JpdGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL3dyaXRpbmdzL2R5bmFtaWMtaW1wb3J0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2Uvd3JpdGluZ3MvZ2xvYmUucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS93cml0aW5ncy9ucG0ucG5nIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiY29udGVudCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIkJhbm5lciIsInQiLCJwcm9wcyIsImNsYXNzZXMiLCJtb2RlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iLCJtYWluIiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJkcmF3ZXJMaW5rIiwidGV4dEFsaWduIiwiZHJhd2VySGVhZGVyIiwibWFyZ2luVG9wIiwiaWNvbiIsIkRyYXdlciIsImhhbmRsZURyYXdlckNsb3NlIiwiRm9vdGVyIiwic3R5bGVzIiwiZm9vdGVyQmxvY2siLCJmb290ZXJCbG9ja05pZ2h0IiwibGluayIsIm1hcmdpbkxlZnQiLCJuaWdodExpbmsiLCJsaW5rQW5jaG9yIiwibmlnaHRMaW5rQW5jaG9yIiwibmlnaHRJY29uIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW4iLCJ3aWR0aCIsImlucHV0TGFiZWwiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsIm9wZW4iLCJzZXRPcGVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaGFuZGxlTGFuZ1RvUmVkdXgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImRpc3BhdGNoIiwidG9FbiIsInRvWmhIYW50IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVEcmF3ZXJPcGVuIiwibGFuZyIsImxhYmVsIiwidG9OaWdodCIsInRvRGF5IiwicGF0aG5hbWUiLCJQYWdlTG9hZGVyIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZUVmZmVjdCIsInNlbGVjdFJlcXVpcmVkIiwiU2VsZWN0Iiwib25PcGVuIiwib25DbG9zZSIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyb290IiwiaW5wdXQiLCJTZWxlY3QyIiwibmFtZSIsImZvcm1Db250cm9sUHJvcHMiLCJzZWxlY3RQcm9wcyIsInJlcXVpcmVkIiwiZGlzYWJsZWQiLCJ0YWJJbmRleCIsIm5ld1Byb3BzIiwic2VsZWN0Iiwic2VsZWN0ZWQiLCJjaGVja0VxdWFsIiwiYSIsImIiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsImZpbHRlcnMiLCJmaWx0ZXIiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJhcnJheSIsIm9iamVjdCIsImlucHV0TGFiZWxQcm9wcyIsImRheUJhY2tncm91bmQiLCJuaWdodEJhY2tncm91bmQiLCJib2R5IiwiV3JpdGluZ3MiLCJkcmF3ZXIiLCJzZXREcmF3ZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJpbWciLCJwYWRkaW5nVG9wIiwiQXJ0aWNsZUJsb2NrIiwiaW1hZ2UiLCJ1cmwiLCJib3giLCJzaG93Y2FzZSIsIm92ZXJmbG93IiwibGlua09uSG92ZXIiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsIm5pZ2h0TGlua09uSG92ZXIiLCJ0aXRsZU9uSG92ZXIiLCJkZXNjcmlwdGlvbk9uSG92ZXIiLCJTaG93Y2FzZSIsImJveDEiLCJzZXRCb3gxIiwiYm94MiIsInNldEJveDIiLCJib3gzIiwic2V0Qm94MyIsImhhbmRsZUJveDFPbiIsImhhbmRsZUJveDJPbiIsImhhbmRsZUJveDNPbiIsImhhbmRsZU1vdXNlTGVhdmUiLCJpbWcwMSIsImltZzAyIiwiaW1nMDMiLCJOZXh0STE4TmV4dCIsInJlcXVpcmUiLCJkZWZhdWx0IiwibG9jYWxlU3VicGF0aHMiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwicGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsInpoSGFudCIsImZyIiwiZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSIsIldyaXRpbmdzUGFnZSIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInN0b3JlIiwiZXhhbXBsZUluaXRpYWxTdGF0ZSIsImFjdGlvblR5cGVzIiwiREFZIiwiTklHSFQiLCJFTiIsIlpISEFOVCIsIlJFU0VUIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJyZXNldENvdW50IiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJtYWtlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsU0FBTyxFQUFDO0FBQ0pDLGNBQVUsRUFBQyxRQURQO0FBRUpDLFlBQVEsRUFBQztBQUZMO0FBRGlCLENBQUQsQ0FBNUI7O0FBT0EsTUFBTUMsTUFBTSxHQUFHLFVBQWtCO0FBQUEsTUFBakI7QUFBQ0M7QUFBRCxHQUFpQjtBQUFBLE1BQVhDLEtBQVc7O0FBRTdCLFFBQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUVBLFFBQU07QUFDRlM7QUFERSxNQUVGRixLQUZKO0FBSUEsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBRUk7QUFBQSw2QkFFSTtBQUFHLGlCQUFTLEVBQUVDLE9BQU8sQ0FBQ04sT0FBdEI7QUFBQSxtQkFDS0ksQ0FBQyxDQUFDLFVBQUQsQ0FETixlQUNtQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURuQixFQUVLQSxDQUFDLENBQUMsVUFBRCxDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFjSCxDQXRCRDs7QUF3QkFELE1BQU0sQ0FBQ0ssU0FBUCxHQUFtQjtBQUNmSixHQUFDLEVBQUVLLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFESCxDQUFuQjtBQUllQyw0SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQlQsTUFBMUIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUwsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCYyxNQUFJLEVBQUU7QUFDRkMsVUFBTSxFQUFDLE9BREw7QUFFRkMsYUFBUyxFQUFDLFFBRlI7QUFHRkMsbUJBQWUsRUFBQyxTQUhkO0FBSUZDLGVBQVcsRUFBQyxJQUpWO0FBS0ZDLGdCQUFZLEVBQUM7QUFMWCxHQURtQjtBQVF6QkMsT0FBSyxFQUFFO0FBQ0hsQixjQUFVLEVBQUMsYUFEUjtBQUVIbUIsY0FBVSxFQUFDLEdBRlI7QUFHSEMsaUJBQWEsRUFBQyxLQUhYO0FBSUhDLFNBQUssRUFBQyxTQUpIO0FBS0hwQixZQUFRLEVBQUMsTUFMTjtBQU1ILGVBQVU7QUFDTm9CLFdBQUssRUFBQztBQURBO0FBTlAsR0FSa0I7QUFrQnpCQyxZQUFVLEVBQUU7QUFDUnRCLGNBQVUsRUFBQyxRQURIO0FBRVJ1QixhQUFTLEVBQUMsTUFGRjtBQUdSSixjQUFVLEVBQUMsR0FISDtBQUlSQyxpQkFBYSxFQUFDLEtBSk47QUFLUkMsU0FBSyxFQUFDLFNBTEU7QUFNUnBCLFlBQVEsRUFBQyxNQU5EO0FBT1IsZUFBVTtBQUNOb0IsV0FBSyxFQUFDO0FBREE7QUFQRixHQWxCYTtBQTZCekJHLGNBQVksRUFBRTtBQUNWQyxhQUFTLEVBQUM7QUFEQSxHQTdCVztBQWdDekJDLE1BQUksRUFBRTtBQUNGekIsWUFBUSxFQUFDLFFBRFA7QUFFRm9CLFNBQUssRUFBQyxTQUZKO0FBR0YsZUFBVTtBQUNOQSxXQUFLLEVBQUM7QUFEQTtBQUhSO0FBaENtQixDQUFELENBQTVCOztBQXlDQSxNQUFNTSxNQUFNLEdBQUcsVUFBa0I7QUFBQSxNQUFqQjtBQUFDeEI7QUFBRCxHQUFpQjtBQUFBLE1BQVhDLEtBQVc7O0FBRTdCLFFBQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUVBLFFBQU07QUFDRitCO0FBREUsTUFFRnhCLEtBRko7QUFJQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwyQkFFSTtBQUFLLGVBQVMsRUFBRUMsT0FBTyxDQUFDTyxJQUF4QjtBQUFBLDhCQUVJLHFFQUFDLDZEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFBLGdDQUNJLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBa0IsWUFBRSxFQUFFLENBQXRCO0FBQXlCLGVBQUssRUFBRTtBQUFDYSxxQkFBUyxFQUFDO0FBQVgsV0FBaEM7QUFBQSxpQ0FDQSxxRUFBQyw2REFBRDtBQUNJLGdCQUFJLEVBQUMsR0FEVDtBQUVJLHFCQUFTLEVBQUMsTUFGZDtBQUdJLHFCQUFTLEVBQUVwQixPQUFPLENBQUNhLEtBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQVVJLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBa0IsWUFBRSxFQUFFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkosZUFXSSxxRUFBQyw2REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQWtCLFlBQUUsRUFBRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhKLGVBWUkscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpKLGVBYUkscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJKLGVBY0kscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRKLGVBZUkscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFrQixlQUFLLEVBQUU7QUFBQ0sscUJBQVMsRUFBQztBQUFYLFdBQXpCO0FBQUEsaUNBQ0kscUVBQUMsbUVBQUQ7QUFDSSxpQkFBSyxFQUFFO0FBQUNSLDZCQUFlLEVBQUU7QUFBbEIsYUFEWDtBQUVJLHlCQUFhLEVBQUUsSUFGbkI7QUFHSSxtQkFBTyxFQUFFYSxpQkFIYjtBQUFBLG1DQUtJLHFFQUFDLCtEQUFEO0FBQVcsdUJBQVMsRUFBRXZCLE9BQU8sQ0FBQ3FCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUE0QkkscUVBQUMsNkRBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGlCQUFTLEVBQUVyQixPQUFPLENBQUNtQixZQUFuQztBQUFpRCxhQUFLLEVBQUU7QUFBQ0MsbUJBQVMsRUFBQztBQUFYLFNBQXhEO0FBQUEsK0JBQ0kscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNJLHFFQUFDLDZEQUFEO0FBQU0sZ0JBQUksRUFBQyxPQUFYO0FBQW1CLHFCQUFTLEVBQUMsTUFBN0I7QUFBb0MscUJBQVMsRUFBRXBCLE9BQU8sQ0FBQ2lCLFVBQXZEO0FBQUEsc0JBQ0tuQixDQUFDLENBQUMsTUFBRDtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1QkosZUFvQ0kscUVBQUMsNkRBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGlCQUFTLEVBQUVFLE9BQU8sQ0FBQ21CLFlBQW5DO0FBQUEsK0JBQ0kscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNJLHFFQUFDLDZEQUFEO0FBQU0sZ0JBQUksRUFBQyxXQUFYO0FBQXVCLHFCQUFTLEVBQUMsTUFBakM7QUFBd0MscUJBQVMsRUFBRW5CLE9BQU8sQ0FBQ2lCLFVBQTNEO0FBQUEsc0JBQ0tuQixDQUFDLENBQUMsVUFBRDtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQ0osZUE2Q0kscUVBQUMsNkRBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGlCQUFTLEVBQUVFLE9BQU8sQ0FBQ21CLFlBQW5DO0FBQUEsK0JBQ0kscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNJLHFFQUFDLDZEQUFEO0FBQU0sZ0JBQUksRUFBQyxRQUFYO0FBQW9CLHFCQUFTLEVBQUMsTUFBOUI7QUFBcUMscUJBQVMsRUFBRW5CLE9BQU8sQ0FBQ2lCLFVBQXhEO0FBQUEsc0JBQ0tuQixDQUFDLENBQUMsT0FBRDtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3Q0osZUFxREkscUVBQUMsNkRBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGlCQUFTLEVBQUVFLE9BQU8sQ0FBQ21CLFlBQW5DO0FBQUEsK0JBQ0kscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFBLGlDQUNJLHFFQUFDLDZEQUFEO0FBQU0sZ0JBQUksRUFBQyx5QkFBWDtBQUFxQyxrQkFBTSxFQUFDLFFBQTVDO0FBQXFELGVBQUcsRUFBQyxVQUF6RDtBQUFvRSxxQkFBUyxFQUFDLE1BQTlFO0FBQXFGLHFCQUFTLEVBQUVuQixPQUFPLENBQUNpQixVQUF4RztBQUFBLHNCQUNLbkIsQ0FBQyxDQUFDLFFBQUQ7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW9FSCxDQTVFRDs7QUE4RUF3QixNQUFNLENBQUNwQixTQUFQLEdBQW1CO0FBQ2ZKLEdBQUMsRUFBRUssaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURILENBQW5CO0FBSWVDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCZ0IsTUFBMUIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1FLE1BQU0sR0FBRyxVQUFtQjtBQUFBLE1BQWxCO0FBQUMxQjtBQUFELEdBQWtCO0FBQUEsTUFBWEMsS0FBVzs7QUFFOUIsUUFBTTtBQUNGRTtBQURFLE1BRURGLEtBRkw7QUFJQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFFSSxxRUFBQyw2REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixlQUFTLEVBQUVFLElBQUksSUFBRSxLQUFOLEdBQVl3Qiw2REFBTSxDQUFDQyxXQUFuQixHQUErQkQsNkRBQU0sQ0FBQ0UsZ0JBQWpFO0FBQUEsOEJBQ0kscUVBQUMsNkRBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsQ0FBZjtBQUFBLCtCQUNJO0FBQUEsb0JBQU83QixDQUFDLENBQUMsY0FBRDtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUkscUVBQUMsNkRBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsQ0FBZjtBQUFBLCtCQUNJO0FBQUEsb0JBQU9BLENBQUMsQ0FBQyxhQUFEO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFPSSxxRUFBQyw2REFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxDQUFmO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBT0EsQ0FBQyxDQUFDLFdBQUQ7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQUEsb0JBQU9BLENBQUMsQ0FBQyxzQkFBRDtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQWVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkosZUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBdUJILENBN0JEOztBQStCQTBCLE1BQU0sQ0FBQ3RCLFNBQVAsR0FBbUI7QUFDZkosR0FBQyxFQUFFSyxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREgsQ0FBbkI7QUFLaUJDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCa0IsTUFBMUIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTWhDLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUMzQm9CLE9BQUssRUFBRTtBQUNMbEIsY0FBVSxFQUFDLGFBRE47QUFFTG1CLGNBQVUsRUFBQyxHQUZOO0FBR0xDLGlCQUFhLEVBQUMsS0FIVDtBQUlMbkIsWUFBUSxFQUFDO0FBSkosR0FEb0I7QUFPM0JnQyxNQUFJLEVBQUU7QUFDSmpDLGNBQVUsRUFBQyxRQURQO0FBRUptQixjQUFVLEVBQUMsR0FGUDtBQUdKQyxpQkFBYSxFQUFDLEtBSFY7QUFJSmMsY0FBVSxFQUFFLE1BSlI7QUFLSmIsU0FBSyxFQUFDLFNBTEY7QUFNSnBCLFlBQVEsRUFBQyxNQU5MO0FBT0osZUFBVTtBQUNOb0IsV0FBSyxFQUFDO0FBREE7QUFQTixHQVBxQjtBQWtCM0JjLFdBQVMsRUFBRTtBQUNUbkMsY0FBVSxFQUFDLFFBREY7QUFFVG1CLGNBQVUsRUFBQyxHQUZGO0FBR1RDLGlCQUFhLEVBQUMsS0FITDtBQUlUYyxjQUFVLEVBQUUsTUFKSDtBQUtUYixTQUFLLEVBQUMsU0FMRztBQU1UcEIsWUFBUSxFQUFDLE1BTkE7QUFPVCxlQUFVO0FBQ05vQixXQUFLLEVBQUM7QUFEQTtBQVBELEdBbEJnQjtBQTZCM0JlLFlBQVUsRUFBRTtBQUNWcEMsY0FBVSxFQUFDLFFBREQ7QUFFVm1CLGNBQVUsRUFBQyxHQUZEO0FBR1ZDLGlCQUFhLEVBQUMsS0FISjtBQUlWYyxjQUFVLEVBQUUsTUFKRjtBQUtWYixTQUFLLEVBQUMsT0FMSTtBQU1WcEIsWUFBUSxFQUFDO0FBTkMsR0E3QmU7QUFxQzNCb0MsaUJBQWUsRUFBRTtBQUNmckMsY0FBVSxFQUFDLFFBREk7QUFFZm1CLGNBQVUsRUFBQyxHQUZJO0FBR2ZDLGlCQUFhLEVBQUMsS0FIQztBQUlmYyxjQUFVLEVBQUUsTUFKRztBQUtmYixTQUFLLEVBQUMsU0FMUztBQU1mcEIsWUFBUSxFQUFDO0FBTk0sR0FyQ1U7QUE2QzNCeUIsTUFBSSxFQUFFO0FBQ0p6QixZQUFRLEVBQUMsUUFETDtBQUVKb0IsU0FBSyxFQUFDLFNBRkY7QUFHSixlQUFVO0FBQ05BLFdBQUssRUFBQztBQURBO0FBSE4sR0E3Q3FCO0FBb0QzQmlCLFdBQVMsRUFBQztBQUNSckMsWUFBUSxFQUFDLFFBREQ7QUFFUm9CLFNBQUssRUFBQyxTQUZFO0FBR1IsZUFBVTtBQUNOQSxXQUFLLEVBQUM7QUFEQTtBQUhGLEdBcERpQjtBQTJEM0JrQixhQUFXLEVBQUU7QUFDWEMsVUFBTSxFQUFFLFFBREc7QUFFWEMsU0FBSyxFQUFDO0FBRkssR0EzRGM7QUErRDNCQyxZQUFVLEVBQUU7QUFDVnpDLFlBQVEsRUFBQyxNQURDO0FBRVZELGNBQVUsRUFBQyxPQUZEO0FBR1YyQyxXQUFPLEVBQUUsTUFIQztBQUlWQyxpQkFBYSxFQUFFO0FBSkw7QUEvRGUsQ0FBRCxDQUE1Qjs7QUF1RUEsTUFBTUMsTUFBTSxHQUFHLFVBQWtCO0FBQUEsTUFBakI7QUFBQzFDO0FBQUQsR0FBaUI7QUFBQSxNQUFYQyxLQUFXOztBQUU3QixRQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7QUFFQSxRQUFNaUQsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUo2QixDQU03Qjs7QUFFQSxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBeEI7O0FBRUEsUUFBTUMsWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDOUI7QUFDQUMscUJBQWlCLENBQUNELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFkLENBQWpCO0FBQ0FDLDhDQUFJLENBQUNDLGNBQUwsQ0FBb0JMLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFqQztBQUNELEdBSkQ7O0FBTUEsUUFBTUYsaUJBQWlCLEdBQUlFLEtBQUQsSUFBVztBQUNuQyxRQUFHQSxLQUFLLElBQUksSUFBWixFQUFrQjtBQUNoQkcsY0FBUSxDQUFDQyxvREFBSSxFQUFMLENBQVI7QUFDRCxLQUZELE1BR0ssSUFBSUosS0FBSyxJQUFJLFFBQWIsRUFBdUI7QUFDMUJHLGNBQVEsQ0FBQ0Usd0RBQVEsRUFBVCxDQUFSO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFFBQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3hCYixXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNYyxVQUFVLEdBQUcsTUFBTTtBQUN2QmQsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTVUsUUFBUSxHQUFHSyxnRUFBVyxFQUE1QjtBQUVBLFFBQU07QUFDSkMsb0JBREk7QUFFSjNELFFBRkk7QUFHSjREO0FBSEksTUFJRjlELEtBSko7QUFNQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwyQkFFSSxxRUFBQyw2REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDhCQUVFLHFFQUFDLDZEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLENBQWY7QUFBa0IsVUFBRSxFQUFFLENBQXRCO0FBQXlCLGFBQUssRUFBRTtBQUFDcUIsbUJBQVMsRUFBQztBQUFYLFNBQWhDO0FBQUEsK0JBQ0UscUVBQUMsNkRBQUQ7QUFDSSxjQUFJLEVBQUMsR0FEVDtBQUVJLG1CQUFTLEVBQUMsTUFGZDtBQUdJLG1CQUFTLEVBQUVwQixPQUFPLENBQUNhLEtBSHZCO0FBSUksZUFBSyxFQUFFO0FBQUNHLGlCQUFLLEVBQUVmLElBQUksS0FBRyxLQUFQLEdBQWEsU0FBYixHQUF1QjtBQUEvQixXQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVlFLHFFQUFDLDZEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLENBQWY7QUFBa0IsVUFBRSxFQUFFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkYsZUFhRSxxRUFBQyw2REFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxDQUFmO0FBQWtCLFVBQUUsRUFBRSxDQUF0QjtBQUF5QixVQUFFLEVBQUU7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRixlQWNFLHFFQUFDLGdFQUFEO0FBQVEsY0FBTSxNQUFkO0FBQUEsZ0NBQ0UscUVBQUMsNkRBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFrQixlQUFLLEVBQUU7QUFBQ21CLHFCQUFTLEVBQUMsUUFBWDtBQUFxQlQsdUJBQVcsRUFBQztBQUFqQyxXQUF6QjtBQUFBLGlDQUNFLHFFQUFDLHlEQUFEO0FBQ0ksZ0JBQUksRUFBQyxNQURUO0FBRUksaUJBQUssRUFBRWtELElBRlg7QUFHSSxvQkFBUSxFQUFFZCxZQUhkO0FBSUksaUJBQUssRUFBRSxDQUNIO0FBQUNJLG1CQUFLLEVBQUMsSUFBUDtBQUFZVyxtQkFBSyxFQUFDO0FBQWxCLGFBREcsRUFFSDtBQUFDWCxtQkFBSyxFQUFDLFFBQVA7QUFBZ0JXLG1CQUFLLEVBQUM7QUFBdEIsYUFGRyxDQUpYO0FBUUksZ0JBQUksRUFBRTdEO0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFhRSxxRUFBQyw2REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQWtCLGVBQUssRUFBRTtBQUFDbUIscUJBQVMsRUFBQyxRQUFYO0FBQW9CRixxQkFBUyxFQUFDO0FBQTlCLFdBQXpCO0FBQUEsb0JBQ0dqQixJQUFJLEtBQUssS0FBVCxnQkFDQyxxRUFBQyxvRUFBRDtBQUNFLGlCQUFLLEVBQUU7QUFBQ1MsNkJBQWUsRUFBRSxhQUFsQjtBQUFnQ00sbUJBQUssRUFBRWYsSUFBSSxLQUFHLEtBQVAsR0FBYSxTQUFiLEdBQXVCO0FBQTlELGFBRFQ7QUFFRSx5QkFBYSxFQUFFLElBRmpCO0FBR0UsbUJBQU8sRUFBRSxNQUFJcUQsUUFBUSxDQUFDUyx1REFBTyxFQUFSLENBSHZCO0FBQUEsbUNBS0kscUVBQUMsOEVBQUQ7QUFBeUIsc0JBQVEsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxnQkFRQyxxRUFBQyxvRUFBRDtBQUNFLGlCQUFLLEVBQUU7QUFBQ3JELDZCQUFlLEVBQUUsYUFBbEI7QUFBZ0NNLG1CQUFLLEVBQUVmLElBQUksS0FBRyxLQUFQLEdBQWEsU0FBYixHQUF1QjtBQUE5RCxhQURUO0FBRUUseUJBQWEsRUFBRSxJQUZqQjtBQUdFLG1CQUFPLEVBQUUsTUFBSXFELFFBQVEsQ0FBQ1UscURBQUssRUFBTixDQUh2QjtBQUFBLG1DQUtFLHFFQUFDLDBFQUFEO0FBQXFCLHNCQUFRLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGLGVBK0JFLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBa0IsZUFBSyxFQUFFO0FBQUM1QyxxQkFBUyxFQUFDO0FBQVgsV0FBekI7QUFBQSxxQkFDR25CLElBQUksS0FBRyxLQUFQLGlCQUNDLHFFQUFDLDZEQUFEO0FBQ0UsZ0JBQUksRUFBQyxRQURQO0FBRUUscUJBQVMsRUFBQyxNQUZaO0FBR0UscUJBQVMsRUFBRXdDLE1BQU0sQ0FBQ3dCLFFBQVAsSUFBbUIsT0FBbkIsR0FBMkJqRSxPQUFPLENBQUMrQixVQUFuQyxHQUE4Qy9CLE9BQU8sQ0FBQzRCLElBSG5FO0FBQUEsc0JBS0c5QixDQUFDLENBQUMsTUFBRDtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosRUFVR0csSUFBSSxLQUFHLE9BQVAsaUJBQ0MscUVBQUMsNkRBQUQ7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSxxQkFBUyxFQUFDLE1BRlo7QUFHRSxxQkFBUyxFQUFFd0MsTUFBTSxDQUFDd0IsUUFBUCxJQUFtQixPQUFuQixHQUEyQmpFLE9BQU8sQ0FBQ2dDLGVBQW5DLEdBQW1EaEMsT0FBTyxDQUFDOEIsU0FIeEU7QUFBQSxzQkFLR2hDLENBQUMsQ0FBQyxNQUFEO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBL0JGLGVBbURFLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBa0IsZUFBSyxFQUFFO0FBQUNzQixxQkFBUyxFQUFDLFFBQVg7QUFBcUJTLHNCQUFVLEVBQUM7QUFBaEMsV0FBekI7QUFBQSxxQkFDRzVCLElBQUksS0FBRyxLQUFQLGlCQUNDLHFFQUFDLDZEQUFEO0FBQ0UsZ0JBQUksRUFBQyxZQURQO0FBRUUscUJBQVMsRUFBQyxNQUZaO0FBR0UscUJBQVMsRUFBRXdDLE1BQU0sQ0FBQ3dCLFFBQVAsSUFBbUIsV0FBbkIsR0FBK0JqRSxPQUFPLENBQUMrQixVQUF2QyxHQUFrRC9CLE9BQU8sQ0FBQzRCLElBSHZFO0FBQUEsc0JBS0c5QixDQUFDLENBQUMsVUFBRDtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosRUFVR0csSUFBSSxLQUFHLE9BQVAsaUJBQ0MscUVBQUMsNkRBQUQ7QUFDRSxnQkFBSSxFQUFDLFlBRFA7QUFFRSxxQkFBUyxFQUFDLE1BRlo7QUFHRSxxQkFBUyxFQUFFd0MsTUFBTSxDQUFDd0IsUUFBUCxJQUFtQixXQUFuQixHQUErQmpFLE9BQU8sQ0FBQ2dDLGVBQXZDLEdBQXVEaEMsT0FBTyxDQUFDOEIsU0FINUU7QUFBQSxzQkFLR2hDLENBQUMsQ0FBQyxVQUFEO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkRGLGVBdUVFLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBa0IsZUFBSyxFQUFFO0FBQUNzQixxQkFBUyxFQUFDLFFBQVg7QUFBcUJTLHNCQUFVLEVBQUM7QUFBaEMsV0FBekI7QUFBQSxxQkFDRzVCLElBQUksS0FBRyxLQUFQLGlCQUNDLHFFQUFDLDZEQUFEO0FBQ0UsZ0JBQUksRUFBQyxTQURQO0FBRUUscUJBQVMsRUFBQyxNQUZaO0FBR0UscUJBQVMsRUFBRXdDLE1BQU0sQ0FBQ3dCLFFBQVAsSUFBbUIsUUFBbkIsR0FBNEJqRSxPQUFPLENBQUMrQixVQUFwQyxHQUErQy9CLE9BQU8sQ0FBQzRCLElBSHBFO0FBQUEsc0JBS0c5QixDQUFDLENBQUMsT0FBRDtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosRUFVR0csSUFBSSxLQUFHLE9BQVAsaUJBQ0MscUVBQUMsNkRBQUQ7QUFDRSxnQkFBSSxFQUFDLFNBRFA7QUFFRSxxQkFBUyxFQUFDLE1BRlo7QUFHRSxxQkFBUyxFQUFFd0MsTUFBTSxDQUFDd0IsUUFBUCxJQUFtQixRQUFuQixHQUE0QmpFLE9BQU8sQ0FBQ2dDLGVBQXBDLEdBQW9EaEMsT0FBTyxDQUFDOEIsU0FIekU7QUFBQSxzQkFLR2hDLENBQUMsQ0FBQyxPQUFEO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdkVGLGVBMkZFLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBa0IsZUFBSyxFQUFFO0FBQUNzQixxQkFBUyxFQUFDLFFBQVg7QUFBcUJULHVCQUFXLEVBQUM7QUFBakMsV0FBekI7QUFBQSxpQ0FRRSxxRUFBQyw2REFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLHFCQUFTLEVBQUMsTUFGWjtBQUdFLHFCQUFTLEVBQUU4QixNQUFNLENBQUN3QixRQUFQLElBQW1CLFNBQW5CLEdBQTZCakUsT0FBTyxDQUFDK0IsVUFBckMsR0FBZ0QvQixPQUFPLENBQUM0QixJQUhyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBM0ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRixlQTJIRSxxRUFBQyxnRUFBRDtBQUFRLFlBQUksTUFBWjtBQUFBLGdDQUNFLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBa0IsWUFBRSxFQUFFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyw2REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQUEsb0JBQ0czQixJQUFJLEtBQUssS0FBVCxnQkFDQyxxRUFBQyxvRUFBRDtBQUNFLGlCQUFLLEVBQUU7QUFBQ1MsNkJBQWUsRUFBRSxhQUFsQjtBQUFnQ00sbUJBQUssRUFBRWYsSUFBSSxLQUFHLEtBQVAsR0FBYSxTQUFiLEdBQXVCO0FBQTlELGFBRFQ7QUFFRSx5QkFBYSxFQUFFLElBRmpCO0FBR0UsbUJBQU8sRUFBRSxNQUFJcUQsUUFBUSxDQUFDUyx1REFBTyxFQUFSLENBSHZCO0FBQUEsbUNBS0kscUVBQUMsOEVBQUQ7QUFBeUIsc0JBQVEsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERCxnQkFRQyxxRUFBQyxvRUFBRDtBQUNFLGlCQUFLLEVBQUU7QUFBQ3JELDZCQUFlLEVBQUUsYUFBbEI7QUFBZ0NNLG1CQUFLLEVBQUVmLElBQUksS0FBRyxLQUFQLEdBQWEsU0FBYixHQUF1QjtBQUE5RCxhQURUO0FBRUUseUJBQWEsRUFBRSxJQUZqQjtBQUdFLG1CQUFPLEVBQUUsTUFBSXFELFFBQVEsQ0FBQ1UscURBQUssRUFBTixDQUh2QjtBQUFBLG1DQUtFLHFFQUFDLDBFQUFEO0FBQXFCLHNCQUFRLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBb0JFLHFFQUFDLGdFQUFEO0FBQVEsY0FBSSxNQUFaO0FBQUEsaUNBQ0UscUVBQUMsNkRBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQVcsY0FBRSxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEJGLGVBdUJFLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBa0IsZUFBSyxFQUFFO0FBQUM1QyxxQkFBUyxFQUFDLFFBQVg7QUFBb0JGLHFCQUFTLEVBQUM7QUFBOUIsV0FBekI7QUFBQSxpQ0FDSSxxRUFBQyx3REFBRDtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUVFLGlCQUFLLEVBQUUyQyxJQUZUO0FBR0Usb0JBQVEsRUFBRWQsWUFIWjtBQUlFLGdCQUFJLEVBQUVKLElBSlI7QUFLRSxtQkFBTyxFQUFFYyxXQUxYO0FBTUUsa0JBQU0sRUFBRUMsVUFOVjtBQU9FLGlCQUFLLEVBQUUsQ0FDSDtBQUFDUCxtQkFBSyxFQUFDLElBQVA7QUFBWVcsbUJBQUssRUFBQztBQUFsQixhQURHLEVBRUg7QUFBQ1gsbUJBQUssRUFBQyxRQUFQO0FBQWdCVyxtQkFBSyxFQUFDO0FBQXRCLGFBRkcsQ0FQVDtBQVdFLGdCQUFJLEVBQUU3RDtBQVhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZCRixlQXNDRSxxRUFBQyw2REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdENGLGVBdUNFLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBa0IsZUFBSyxFQUFFO0FBQUNpQixxQkFBUyxFQUFDO0FBQVgsV0FBekI7QUFBQSxpQ0FDRSxxRUFBQyxvRUFBRDtBQUNFLGlCQUFLLEVBQUU7QUFBQ1IsNkJBQWUsRUFBRTtBQUFsQixhQURUO0FBRUUseUJBQWEsRUFBRSxJQUZqQjtBQUdFLG1CQUFPLEVBQUVrRCxnQkFIWDtBQUFBLG1DQUtFLHFFQUFDLDhEQUFEO0FBQVUsdUJBQVMsRUFBRTNELElBQUksSUFBRSxLQUFOLEdBQVlELE9BQU8sQ0FBQ3FCLElBQXBCLEdBQXlCckIsT0FBTyxDQUFDaUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0hGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXdMSCxDQWpPRDs7QUFtT0FPLE1BQU0sQ0FBQ3RDLFNBQVAsR0FBbUI7QUFDakJKLEdBQUMsRUFBRUssaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURELENBQW5CO0FBS2VDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCa0MsTUFBMUIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFVBO0FBQ0E7QUFFTyxNQUFNMEIsVUFBVSxHQUFJbkUsS0FBRCxJQUFXO0FBRW5DLFFBQU0sQ0FBQ29FLFFBQUQsRUFBV0MsV0FBWCxJQUEwQnZCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQWhDO0FBRUF1Qix5REFBUyxDQUFDLE1BQUk7QUFDWkQsZUFBVyxDQUFDLEdBQUQsQ0FBWDtBQUNELEdBRlEsRUFFUCxFQUZPLENBQVQ7QUFJQSxRQUFNO0FBQ0puRTtBQURJLE1BRUZGLEtBRko7QUFJQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLDREQUFEO0FBQ0UsV0FBSyxFQUFFRSxJQUFJLEtBQUcsS0FBUCxHQUFhLE9BQWIsR0FBcUIsT0FEOUI7QUFFRSxZQUFNLEVBQUUsQ0FGVjtBQUdFLGlCQUFXLEVBQUUsR0FIZjtBQUlFLG9CQUFjLEVBQUUsSUFKbEI7QUFLRSxpQkFBVyxFQUFFLEdBTGY7QUFNRSxjQUFRLEVBQUVrRSxRQU5aO0FBT0Usc0JBQWdCLEVBQUUsTUFBTUMsV0FBVyxDQUFDLENBQUQ7QUFQckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBekJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNNUUsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCNEMsWUFBVSxFQUFFO0FBQ1J6QyxZQUFRLEVBQUMsTUFERDtBQUVSRCxjQUFVLEVBQUMsT0FGSDtBQUdSMkMsV0FBTyxFQUFFLE1BSEQ7QUFJUkMsaUJBQWEsRUFBRTtBQUpQLEdBRGE7QUFPekIrQixnQkFBYyxFQUFDO0FBUFUsQ0FBRCxDQUE1QjtBQWFPLFNBQVNDLE1BQVQsQ0FBZ0J4RSxLQUFoQixFQUF1QjtBQUMxQixRQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7QUFDQSxRQUFNO0FBQ0ZnRixVQURFO0FBRUZDLFdBRkU7QUFHRkMsWUFIRTtBQUlGQyxTQUpFO0FBS0ZoQyxRQUxFO0FBTUZRLFNBTkU7QUFPRmxEO0FBUEUsTUFRRkYsS0FSSjtBQVVBLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsMkJBQ0kscUVBQUMsd0RBQUQ7QUFDSSxhQUFPLEVBQUMsbUNBRFo7QUFFSSxRQUFFLEVBQUMsNkJBRlA7QUFHSSxVQUFJLEVBQUU0QyxJQUhWO0FBSUksYUFBTyxFQUFFOEIsT0FKYjtBQUtJLFlBQU0sRUFBRUQsTUFMWjtBQU1JLFdBQUssRUFBRXJCLEtBTlg7QUFPSSxjQUFRLEVBQUV1QixRQVBkO0FBUUksc0JBQWdCLE1BUnBCO0FBU0ksZUFBUyxFQUFFLEtBVGY7QUFVSSxpQkFBVyxFQUFFLE1BQUk7QUFDYiw0QkFBTyxxRUFBQyxtRUFBRDtBQUFlLGVBQUssRUFBRTtBQUFDMUQsaUJBQUssRUFBRWYsSUFBSSxLQUFHLEtBQVAsR0FBYSxTQUFiLEdBQXVCO0FBQS9CO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDSCxPQVpMO0FBYUksV0FBSyxFQUFFO0FBQUNTLHVCQUFlLEVBQUU7QUFBbEIsT0FiWDtBQUFBLGdCQWVLaUUsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQzVCLDRCQUNJLDREQUFDLDBEQUFELGlEQUNRRCxJQUFJLENBQUM5RSxLQURiLHFEQUNzQixJQUR0QjtBQUVJLGFBQUcsRUFBRStFLEtBRlQ7QUFHSSxlQUFLLGlCQUFFRCxJQUFJLENBQUMxQixLQUFQLHFEQUFjLEVBSHZCO0FBSUksaUJBQU8sRUFBRTtBQUFDNEIsZ0JBQUksRUFBQy9FLE9BQU8sQ0FBQ2dGO0FBQWQsV0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU1LSCxJQUFJLENBQUNmLEtBTlYscURBTWlCLEVBTmpCLENBREo7QUFVSCxPQVhBO0FBZkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdDSDtBQUVNLFNBQVNtQixPQUFULENBQWlCbEYsS0FBakIsRUFBd0I7QUFDM0IsUUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCO0FBQ0EsUUFBTTtBQUNGc0UsU0FERTtBQUVGWCxTQUZFO0FBR0YrQixRQUhFO0FBSUZQLFNBSkU7QUFLRlEsb0JBTEU7QUFNRkMsZUFORTtBQU9GQyxZQVBFO0FBUUZDLFlBQVEsR0FBRSxLQVJSO0FBU0ZDLFlBQVEsR0FBQyxDQVRQO0FBVUZ0RjtBQVZFLE1BV0ZGLEtBWEo7O0FBYUEsTUFBSXlGLFFBQVEscUJBQ0x6RixLQURLLENBQVo7O0FBR0EsU0FBT3lGLFFBQVEsQ0FBQyxZQUFELENBQWY7QUFFQSxzQkFDSSxxRUFBQyw2REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFBLDRCQUNJLHFFQUFDLDZEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLENBQWY7QUFBa0IsV0FBSyxFQUFFO0FBQUNwRSxpQkFBUyxFQUFDO0FBQVgsT0FBekI7QUFBQSw2QkFDSSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUkscUVBQUMsNkRBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSSxxRUFBQyw2REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxDQUFmO0FBQUEsNkJBQ0EscUVBQUMsNkRBQUQsa0NBQ1ErRCxnQkFEUjtBQUVJLFlBQUksRUFBQyxPQUZUO0FBR0ksaUJBQVMsTUFIYjtBQUlJLGdCQUFRLEVBQUVHLFFBSmQ7QUFBQSxnQ0FNSSxxRUFBQyw0REFBRDtBQUNJLGtCQUFRLEVBQUVELFFBRGQ7QUFFSSxZQUFFLEVBQUMsMEJBRlA7QUFHSSxpQkFBTyxFQUFFO0FBQ0xOLGdCQUFJLEVBQUMvRSxPQUFPLENBQUNxQyxVQURSO0FBRUxnRCxvQkFBUSxFQUFDckYsT0FBTyxDQUFDc0U7QUFGWixXQUhiO0FBT0ksZUFBSyxFQUFFO0FBQUN0RCxpQkFBSyxFQUFFZixJQUFJLEtBQUcsS0FBUCxHQUFhLFNBQWIsR0FBdUI7QUFBL0IsV0FQWDtBQUFBLG9CQVNLNkQ7QUFUTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBaUJJLHFFQUFDLHdEQUFELGdEQUNRc0IsV0FEUjtBQUVJLGlCQUFPLEVBQUMsMEJBRlo7QUFHSSxZQUFFLEVBQUMsb0JBSFA7QUFJSSxlQUFLLEVBQUU7QUFBQzFFLDJCQUFlLEVBQUUsYUFBbEI7QUFBZ0NNLGlCQUFLLEVBQUVmLElBQUksS0FBRyxLQUFQLEdBQWEsU0FBYixHQUF1QjtBQUE5RCxXQUpYO0FBS0ksMEJBQWdCLE1BTHBCO0FBTUksb0JBQVUsRUFBRTtBQUNSaUYsZ0JBQUksRUFBRUEsSUFERTtBQUVSbEYsbUJBQU8sRUFBRTtBQUFDeUYsb0JBQU0sRUFBRXpGLE9BQU8sQ0FBQ2dGO0FBQWpCO0FBRkQsV0FOaEI7QUFVSSw0QkFBa0IsRUFBRTtBQUNoQk8sb0JBQVEsRUFBQ0E7QUFETyxXQVZ4QjtBQWFJLGVBQUssRUFBRXBDLEtBQUssS0FBRyxJQUFSLEdBQWEsRUFBYixHQUFnQkEsS0FiM0I7QUFjSSxlQUFLLEVBQUVXLEtBZFg7QUFlSSxzQkFBWSxFQUFFLElBZmxCO0FBZ0JJLHFCQUFXLEVBQUU0QixRQUFRLElBQUk7QUFDckIscUJBQVNDLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXNCQyxDQUF0QixFQUF3QjtBQUNwQixrQkFBSUQsQ0FBQyxLQUFLLElBQU4sSUFBY0EsQ0FBQyxLQUFHRSxTQUF0QixFQUFnQztBQUM1QkYsaUJBQUMsR0FBRyxFQUFKO0FBQ0g7O0FBRUQsa0JBQUlDLENBQUMsS0FBSyxJQUFOLElBQWNBLENBQUMsS0FBSUMsU0FBdkIsRUFBaUM7QUFDN0JELGlCQUFDLEdBQUcsRUFBSjtBQUNIOztBQUVELGtCQUFJLE9BQU9ELENBQVAsS0FBYSxRQUFqQixFQUEwQjtBQUN0QkEsaUJBQUMsR0FBR0EsQ0FBQyxDQUFDRyxRQUFGLEVBQUo7QUFDSDs7QUFFRCxrQkFBSSxPQUFPRixDQUFQLEtBQWEsUUFBakIsRUFBMEI7QUFDdEJBLGlCQUFDLEdBQUdBLENBQUMsQ0FBQ0UsUUFBRixFQUFKO0FBQ0g7O0FBRUQscUJBQU9ILENBQUMsSUFBSUMsQ0FBWjtBQUNIOztBQUVELGdCQUFJRyxPQUFPLEdBQUVyQixLQUFLLENBQUNzQixNQUFOLENBQWFwQixJQUFJLElBQUdjLFVBQVUsQ0FBQ2QsSUFBSSxDQUFDMUIsS0FBTixFQUFZdUMsUUFBWixDQUE5QixDQUFiO0FBRUEsbUJBQU9NLE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBV0EsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXLE9BQVgsQ0FBWCxHQUErQixFQUF0QztBQUNIO0FBeENMLFdBeUNRUixRQXpDUjtBQUFBLG9CQTJDS2IsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQzVCLGdDQUNJLDREQUFDLDBEQUFELGtEQUNRRCxJQUFJLENBQUM5RSxLQURiLHVEQUNzQixJQUR0QjtBQUVJLGlCQUFHLEVBQUUrRSxLQUZUO0FBR0ksbUJBQUssa0JBQUVELElBQUksQ0FBQzFCLEtBQVAsdURBQWMsRUFIdkI7QUFJSSxxQkFBTyxFQUFFO0FBQUM0QixvQkFBSSxFQUFDL0UsT0FBTyxDQUFDZ0Y7QUFBZCxlQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBTUtILElBQUksQ0FBQ2YsS0FOVix1REFNaUIsRUFOakIsQ0FESjtBQVVILFdBWEE7QUEzQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0ZIO0FBRURTLE1BQU0sQ0FBQ3JFLFNBQVAsR0FBbUI7QUFDZjRELE9BQUssRUFBRTNELGlEQUFTLENBQUMrRixNQURGO0FBRWYvQyxPQUFLLEVBQUVoRCxpREFBUyxDQUFDZ0csU0FBVixDQUFvQixDQUN2QmhHLGlEQUFTLENBQUMrRixNQURhLEVBRXZCL0YsaURBQVMsQ0FBQ2lHLE1BRmEsQ0FBcEIsRUFHSi9GLFVBTFk7QUFNZnFFLFVBQVEsRUFBRXZFLGlEQUFTLENBQUNDLElBQVYsQ0FBZUMsVUFOVjtBQU9mNkUsTUFBSSxFQUFFL0UsaURBQVMsQ0FBQytGLE1BQVYsQ0FBaUI3RixVQVBSO0FBUWZzRSxPQUFLLEVBQUV4RSxpREFBUyxDQUFDa0csS0FBVixDQUFnQmhHLFVBUlI7QUFTZjhFLGtCQUFnQixFQUFFaEYsaURBQVMsQ0FBQ21HLE1BVGI7QUFVZkMsaUJBQWUsRUFBRXBHLGlEQUFTLENBQUNtRyxNQVZaO0FBV2ZsQixhQUFXLEVBQUVqRixpREFBUyxDQUFDbUc7QUFYUixDQUFuQjtBQWNBckIsT0FBTyxDQUFDL0UsU0FBUixHQUFvQjtBQUNoQjRELE9BQUssRUFBRTNELGlEQUFTLENBQUMrRixNQUREO0FBRWhCL0MsT0FBSyxFQUFFaEQsaURBQVMsQ0FBQ2dHLFNBQVYsQ0FBb0IsQ0FDdkJoRyxpREFBUyxDQUFDK0YsTUFEYSxFQUV2Qi9GLGlEQUFTLENBQUNpRyxNQUZhLENBQXBCLEVBR0ovRixVQUxhO0FBTWhCcUUsVUFBUSxFQUFFdkUsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQyxVQU5UO0FBT2hCNkUsTUFBSSxFQUFFL0UsaURBQVMsQ0FBQytGLE1BQVYsQ0FBaUI3RixVQVBQO0FBUWhCc0UsT0FBSyxFQUFFeEUsaURBQVMsQ0FBQ2tHLEtBQVYsQ0FBZ0JoRyxVQVJQO0FBU2hCOEUsa0JBQWdCLEVBQUVoRixpREFBUyxDQUFDbUcsTUFUWjtBQVVoQkMsaUJBQWUsRUFBRXBHLGlEQUFTLENBQUNtRyxNQVZYO0FBV2hCbEIsYUFBVyxFQUFFakYsaURBQVMsQ0FBQ21HO0FBWFAsQ0FBcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU05RyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekIrRyxlQUFhLEVBQUM7QUFDVjlGLG1CQUFlLEVBQUMsU0FETjtBQUVWTSxTQUFLLEVBQUM7QUFGSSxHQURXO0FBS3pCeUYsaUJBQWUsRUFBQztBQUNaL0YsbUJBQWUsRUFBQyxPQURKO0FBRVpNLFNBQUssRUFBQztBQUZNLEdBTFM7QUFTekIwRixNQUFJLEVBQUM7QUFDRC9GLGVBQVcsRUFBQyxJQURYO0FBRURDLGdCQUFZLEVBQUM7QUFGWjtBQVRvQixDQUFELENBQTVCO0FBZU8sTUFBTStGLFFBQVEsR0FBRyxNQUFNO0FBRTFCLFFBQU0zRyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7QUFFQSxRQUFNLENBQUNvSCxNQUFELEVBQVNDLFNBQVQsSUFBc0JoRSw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUE1Qjs7QUFFQSxRQUFNYyxnQkFBZ0IsR0FBRyxNQUFNO0FBQzNCaUQsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsUUFBTXRGLGlCQUFpQixHQUFHLE1BQU07QUFDNUJzRixhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0gsR0FGRDs7QUFJQSxRQUFNNUcsSUFBSSxHQUFHNkcsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUM5RyxJQUFsQixDQUF4QjtBQUNBLFFBQU00RCxJQUFJLEdBQUdpRCwrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ2xELElBQWxCLENBQXhCO0FBRUEsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZUFFSytDLE1BQU0sSUFBSSxLQUFWLGlCQUNHLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRTNHLElBQUksS0FBRyxLQUFQLEdBQWFELE9BQU8sQ0FBQ3dHLGFBQXJCLEdBQW1DeEcsT0FBTyxDQUFDeUcsZUFBM0Q7QUFBQSxnQ0FFSSxxRUFBQyw2REFBRDtBQUFZLGNBQUksRUFBRXhHO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFJSTtBQUFLLG1CQUFTLEVBQUVELE9BQU8sQ0FBQzBHLElBQXhCO0FBQUEsaUNBQ0kscUVBQUMsc0RBQUQ7QUFDSSw0QkFBZ0IsRUFBRTlDLGdCQUR0QjtBQUVJLGdCQUFJLEVBQUUzRCxJQUZWO0FBR0ksZ0JBQUksRUFBRTREO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosZUFhSTtBQUFLLG1CQUFTLEVBQUU3RCxPQUFPLENBQUMwRyxJQUF4QjtBQUE4QixlQUFLLEVBQUU7QUFBQ3RGLHFCQUFTLEVBQUM7QUFBWCxXQUFyQztBQUFBLGlDQUNJLHFFQUFDLHNEQUFEO0FBQ0ksZ0JBQUksRUFBRW5CO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkosZUFtQkk7QUFBSyxtQkFBUyxFQUFFRCxPQUFPLENBQUMwRyxJQUF4QjtBQUFBLGlDQUNJLHFFQUFDLDJEQUFEO0FBQ0ksZ0JBQUksRUFBRXpHO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkJKLGVBeUJJO0FBQUssbUJBQVMsRUFBRUQsT0FBTyxDQUFDMEcsSUFBeEI7QUFBOEIsZUFBSyxFQUFFO0FBQUN0RixxQkFBUyxFQUFDO0FBQVgsV0FBckM7QUFBQSxpQ0FDSSxxRUFBQyxzREFBRDtBQUNJLGdCQUFJLEVBQUVuQjtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhSLEVBc0NLMkcsTUFBTSxJQUFJLElBQVYsaUJBQ0cscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNkJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBQ3BHLGdCQUFNLEVBQUMsT0FBUjtBQUFpQkUseUJBQWUsRUFBQztBQUFqQyxTQUFaO0FBQUEsK0JBQ0EscUVBQUMsc0RBQUQ7QUFDSSwyQkFBaUIsRUFBRWE7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW1ESCxDQXBFTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU0vQixTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJvQixPQUFLLEVBQUM7QUFDRkcsU0FBSyxFQUFDLE9BREo7QUFFRkYsY0FBVSxFQUFDLEdBRlQ7QUFHRmxCLFlBQVEsRUFBQztBQUhQLEdBRG1CO0FBTXpCb0gsYUFBVyxFQUFDO0FBQ1JoRyxTQUFLLEVBQUMsT0FERTtBQUVSSSxhQUFTLEVBQUM7QUFGRixHQU5hO0FBVXpCNkYsS0FBRyxFQUFDO0FBQ0E3RSxTQUFLLEVBQUMsS0FETjtBQUVBOEUsY0FBVSxFQUFDO0FBRlg7QUFWcUIsQ0FBRCxDQUE1Qjs7QUFnQkEsTUFBTUMsWUFBWSxHQUFHLFVBQWtCO0FBQUEsTUFBakI7QUFBQ3JIO0FBQUQsR0FBaUI7QUFBQSxNQUFYQyxLQUFXOztBQUVuQyxRQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7QUFFQSxRQUFNO0FBQ0ZxQixTQURFO0FBRUZtRyxlQUZFO0FBR0ZJLFNBSEU7QUFJRkMsT0FKRTtBQUtGcEgsUUFMRTtBQU1GcUg7QUFORSxNQU9GdkgsS0FQSjtBQVNBLHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDJCQUNJLHFFQUFDLDZEQUFEO0FBQ0ksVUFBSSxFQUFFc0gsR0FEVjtBQUVJLGVBQVMsRUFBQyxNQUZkO0FBR0ksWUFBTSxFQUFDLFFBSFg7QUFJSSxTQUFHLEVBQUMsVUFKUjtBQUFBLDZCQU1JLHFFQUFDLDZEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFBLGdDQUNJLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBbUIsWUFBRSxFQUFFLENBQXZCO0FBQUEsaUNBQ0k7QUFDSSxlQUFHLEVBQUVELEtBRFQ7QUFFSSxxQkFBUyxFQUFFcEgsT0FBTyxDQUFDaUg7QUFGdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFPSSxxRUFBQyw2REFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLFlBQUUsRUFBRSxDQUF2QjtBQUFBLHFCQUNLSyxHQUFHLElBQUUsSUFBTCxpQkFDRyxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxvQ0FDSTtBQUFHLHVCQUFTLEVBQUV0SCxPQUFPLENBQUNhLEtBQXRCO0FBQTZCLG1CQUFLLEVBQUU7QUFBQ0cscUJBQUssRUFBRWYsSUFBSSxJQUFFLEtBQU4sR0FBWSxPQUFaLEdBQW9CO0FBQTVCLGVBQXBDO0FBQUEsd0JBQ0tZO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJO0FBQUcsdUJBQVMsRUFBRWIsT0FBTyxDQUFDZ0gsV0FBdEI7QUFBbUMsbUJBQUssRUFBRTtBQUFDaEcscUJBQUssRUFBRWYsSUFBSSxJQUFFLEtBQU4sR0FBWSxPQUFaLEdBQW9CO0FBQTVCLGVBQTFDO0FBQUEsd0JBQ0srRztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZSLEVBV0tNLEdBQUcsSUFBRSxLQUFMLGlCQUNHLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLG9DQUNJO0FBQUcsdUJBQVMsRUFBRXRILE9BQU8sQ0FBQ2EsS0FBdEI7QUFBNkIsbUJBQUssRUFBRTtBQUFDRyxxQkFBSyxFQUFFZixJQUFJLElBQUUsS0FBTixHQUFZLE9BQVosR0FBb0I7QUFBNUIsZUFBcEM7QUFBQSx3QkFDS1k7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBSUk7QUFBRyx1QkFBUyxFQUFFYixPQUFPLENBQUNnSCxXQUF0QjtBQUFtQyxtQkFBSyxFQUFFO0FBQUNoRyxxQkFBSyxFQUFFZixJQUFJLElBQUUsS0FBTixHQUFZLE9BQVosR0FBb0I7QUFBNUIsZUFBMUM7QUFBQSx3QkFDSytHO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF5Q0gsQ0F0REQ7O0FBd0RBRyxZQUFZLENBQUNqSCxTQUFiLEdBQXlCO0FBQ3JCSixHQUFDLEVBQUVLLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFERyxDQUF6QjtBQUllQyw0SEFBZSxDQUFDLFNBQUQsQ0FBZixDQUEyQjZHLFlBQTNCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNM0gsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCOEgsVUFBUSxFQUFFO0FBQ05uRyxhQUFTLEVBQUM7QUFESixHQURlO0FBSXpCUSxNQUFJLEVBQUU7QUFDRmxCLG1CQUFlLEVBQUUsU0FEZjtBQUVGRixVQUFNLEVBQUUsTUFGTjtBQUdGNEIsU0FBSyxFQUFDLE1BSEo7QUFJRm9GLFlBQVEsRUFBQyxRQUpQO0FBS0ZwRyxhQUFTLEVBQUM7QUFMUixHQUptQjtBQVd6QnFHLGFBQVcsRUFBRTtBQUNUL0csbUJBQWUsRUFBQyxTQURQO0FBRVRnSCxXQUFPLEVBQUMsTUFGQztBQUdUbEgsVUFBTSxFQUFFLE1BSEM7QUFJVDRCLFNBQUssRUFBQyxNQUpHO0FBS1RvRixZQUFRLEVBQUMsUUFMQTtBQU1URyxjQUFVLEVBQUUsaUJBTkg7QUFPVHZHLGFBQVMsRUFBQztBQVBELEdBWFk7QUFvQnpCVSxXQUFTLEVBQUM7QUFDTnBCLG1CQUFlLEVBQUUsU0FEWDtBQUVORixVQUFNLEVBQUUsTUFGRjtBQUdONEIsU0FBSyxFQUFDLE1BSEE7QUFJTm9GLFlBQVEsRUFBQyxRQUpIO0FBS05wRyxhQUFTLEVBQUM7QUFMSixHQXBCZTtBQTJCekJ3RyxrQkFBZ0IsRUFBRTtBQUNkbEgsbUJBQWUsRUFBQyxTQURGO0FBRWRnSCxXQUFPLEVBQUMsTUFGTTtBQUdkbEgsVUFBTSxFQUFFLE1BSE07QUFJZDRCLFNBQUssRUFBQyxNQUpRO0FBS2RvRixZQUFRLEVBQUMsUUFMSztBQU1kRyxjQUFVLEVBQUUsaUJBTkU7QUFPZHZHLGFBQVMsRUFBQztBQVBJLEdBM0JPO0FBb0N6QlAsT0FBSyxFQUFDO0FBQ0ZsQixjQUFVLEVBQUMsUUFEVDtBQUVGcUIsU0FBSyxFQUFDO0FBRkosR0FwQ21CO0FBd0N6QjZHLGNBQVksRUFBQztBQUNUbEksY0FBVSxFQUFDLFFBREY7QUFFVHFCLFNBQUssRUFBQztBQUZHLEdBeENZO0FBNEN6QmdHLGFBQVcsRUFBQztBQUNSckgsY0FBVSxFQUFDLFFBREg7QUFFUnFCLFNBQUssRUFBQztBQUZFLEdBNUNhO0FBZ0R6QjhHLG9CQUFrQixFQUFDO0FBQ2ZuSSxjQUFVLEVBQUMsUUFESTtBQUVmcUIsU0FBSyxFQUFDO0FBRlM7QUFoRE0sQ0FBRCxDQUE1Qjs7QUFzREEsTUFBTStHLFFBQVEsR0FBRyxVQUFrQjtBQUFBLE1BQWpCO0FBQUNqSTtBQUFELEdBQWlCO0FBQUEsTUFBWEMsS0FBVzs7QUFFL0IsUUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCO0FBRUEsUUFBTSxDQUFFd0ksSUFBRixFQUFRQyxPQUFSLElBQW1CcEYsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FBekI7QUFFQSxRQUFNLENBQUVvRixJQUFGLEVBQVFDLE9BQVIsSUFBbUJ0Riw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUF6QjtBQUVBLFFBQU0sQ0FBRXNGLElBQUYsRUFBUUMsT0FBUixJQUFtQnhGLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBQXpCOztBQUVBLFFBQU13RixZQUFZLEdBQUcsTUFBTTtBQUN2QkwsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsUUFBTU0sWUFBWSxHQUFHLE1BQU07QUFDdkJKLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1LLFlBQVksR0FBRyxNQUFNO0FBQ3ZCSCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxRQUFNSSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzNCUixXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FFLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUUsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNILEdBSkQ7O0FBTUEsUUFBTTtBQUNGcEk7QUFERSxNQUVGRixLQUZKO0FBSUEsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZUFFS0UsSUFBSSxJQUFFLEtBQU4saUJBQ0cscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsOEJBQ0k7QUFDSSxpQkFBUyxFQUFFK0gsSUFBSSxLQUFHLElBQVAsR0FBWWhJLE9BQU8sQ0FBQzRCLElBQXBCLEdBQXlCNUIsT0FBTyxDQUFDeUgsV0FEaEQ7QUFFSSxvQkFBWSxFQUFFYSxZQUZsQjtBQUdJLG9CQUFZLEVBQUVHLGdCQUhsQjtBQUFBLCtCQUtJLHFFQUFDLHFEQUFEO0FBQ0ksZUFBSyxFQUFFM0ksQ0FBQyxDQUFDLFFBQUQsQ0FEWjtBQUVJLHFCQUFXLEVBQUVBLENBQUMsQ0FBQyxjQUFELENBRmxCO0FBR0ksZUFBSyxFQUFFNEksZ0ZBSFg7QUFJSSxhQUFHLEVBQUUsSUFKVDtBQUtJLGNBQUksRUFBRXpJLElBTFY7QUFNSSxhQUFHLEVBQUUrSDtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBZUk7QUFDSSxpQkFBUyxFQUFFRSxJQUFJLEtBQUcsSUFBUCxHQUFZbEksT0FBTyxDQUFDNEIsSUFBcEIsR0FBeUI1QixPQUFPLENBQUN5SCxXQURoRDtBQUVJLG9CQUFZLEVBQUVjLFlBRmxCO0FBR0ksb0JBQVksRUFBRUUsZ0JBSGxCO0FBQUEsK0JBS0kscUVBQUMscURBQUQ7QUFDSSxlQUFLLEVBQUUzSSxDQUFDLENBQUMsUUFBRCxDQURaO0FBRUkscUJBQVcsRUFBRUEsQ0FBQyxDQUFDLGNBQUQsQ0FGbEI7QUFHSSxlQUFLLEVBQUU2SSx1RUFIWDtBQUlJLGFBQUcsRUFBRSxJQUpUO0FBS0ksY0FBSSxFQUFFMUksSUFMVjtBQU1JLGFBQUcsRUFBRWlJO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkosZUE2Qkk7QUFDSSxpQkFBUyxFQUFFRSxJQUFJLEtBQUcsSUFBUCxHQUFZcEksT0FBTyxDQUFDNEIsSUFBcEIsR0FBeUI1QixPQUFPLENBQUN5SCxXQURoRDtBQUVJLG9CQUFZLEVBQUVlLFlBRmxCO0FBR0ksb0JBQVksRUFBRUMsZ0JBSGxCO0FBQUEsK0JBS0kscUVBQUMscURBQUQ7QUFDSSxlQUFLLEVBQUUzSSxDQUFDLENBQUMsUUFBRCxDQURaO0FBRUkscUJBQVcsRUFBRUEsQ0FBQyxDQUFDLGNBQUQsQ0FGbEI7QUFHSSxlQUFLLEVBQUU4SSxzRUFIWDtBQUlJLGFBQUcsRUFBRSxJQUpUO0FBS0ksY0FBSSxFQUFFM0ksSUFMVjtBQU1JLGFBQUcsRUFBRW1JO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIUixFQWlES25JLElBQUksSUFBRSxPQUFOLGlCQUNHLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDhCQUNJO0FBQ0ksaUJBQVMsRUFBRStILElBQUksS0FBRyxJQUFQLEdBQVloSSxPQUFPLENBQUM4QixTQUFwQixHQUE4QjlCLE9BQU8sQ0FBQzRILGdCQURyRDtBQUVJLG9CQUFZLEVBQUVVLFlBRmxCO0FBR0ksb0JBQVksRUFBRUcsZ0JBSGxCO0FBQUEsK0JBS0EscUVBQUMscURBQUQ7QUFDSSxlQUFLLEVBQUUzSSxDQUFDLENBQUMsUUFBRCxDQURaO0FBRUkscUJBQVcsRUFBRUEsQ0FBQyxDQUFDLGNBQUQsQ0FGbEI7QUFHSSxlQUFLLEVBQUU0SSxnRkFIWDtBQUlJLGFBQUcsRUFBRSxJQUpUO0FBS0ksY0FBSSxFQUFFekksSUFMVjtBQU1JLGFBQUcsRUFBRStIO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFlSTtBQUNJLGlCQUFTLEVBQUVFLElBQUksS0FBRyxJQUFQLEdBQVlsSSxPQUFPLENBQUM4QixTQUFwQixHQUE4QjlCLE9BQU8sQ0FBQzRILGdCQURyRDtBQUVJLG9CQUFZLEVBQUVXLFlBRmxCO0FBR0ksb0JBQVksRUFBRUUsZ0JBSGxCO0FBQUEsK0JBS0kscUVBQUMscURBQUQ7QUFDSSxlQUFLLEVBQUUzSSxDQUFDLENBQUMsUUFBRCxDQURaO0FBRUkscUJBQVcsRUFBRUEsQ0FBQyxDQUFDLGNBQUQsQ0FGbEI7QUFHSSxlQUFLLEVBQUU2SSx1RUFIWDtBQUlJLGFBQUcsRUFBRSxJQUpUO0FBS0ksY0FBSSxFQUFFMUksSUFMVjtBQU1JLGFBQUcsRUFBRWlJO0FBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkosZUE2Qkk7QUFDSSxpQkFBUyxFQUFFRSxJQUFJLEtBQUcsSUFBUCxHQUFZcEksT0FBTyxDQUFDOEIsU0FBcEIsR0FBOEI5QixPQUFPLENBQUM0SCxnQkFEckQ7QUFFSSxvQkFBWSxFQUFFWSxZQUZsQjtBQUdJLG9CQUFZLEVBQUVDLGdCQUhsQjtBQUFBLCtCQUtJLHFFQUFDLHFEQUFEO0FBQ0ksZUFBSyxFQUFFM0ksQ0FBQyxDQUFDLFFBQUQsQ0FEWjtBQUVJLHFCQUFXLEVBQUVBLENBQUMsQ0FBQyxjQUFELENBRmxCO0FBR0ksZUFBSyxFQUFFOEksc0VBSFg7QUFJSSxhQUFHLEVBQUUsSUFKVDtBQUtJLGNBQUksRUFBRTNJLElBTFY7QUFNSSxhQUFHLEVBQUVtSTtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbERSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBb0dILENBcElEOztBQXNJQUwsUUFBUSxDQUFDN0gsU0FBVCxHQUFxQjtBQUNqQkosR0FBQyxFQUFFSyxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREQsQ0FBckI7QUFJZUMsNEhBQWUsQ0FBQyxTQUFELENBQWYsQ0FBMkJ5SCxRQUEzQixDQUFmLEU7Ozs7Ozs7Ozs7O0FDM01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEsTUFBTWMsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUNBLE1BQU1DLGNBQWMsR0FBR0YsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQLENBQXVCQyxPQUF2QixHQUFpQ0UsbUJBQXhEOztBQUNBLE1BQU1DLElBQUksR0FBR0osbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlQLFdBQUosQ0FBZ0I7QUFDL0JRLGlCQUFlLEVBQUMsSUFEZTtBQUUvQkMsZ0JBQWMsRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLElBQWpCLENBRmU7QUFHL0JOLGdCQUFjLEVBQUM7QUFDYk8sVUFBTSxFQUFDLElBRE07QUFFYkMsTUFBRSxFQUFFLElBRlM7QUFHYkMsTUFBRSxFQUFFO0FBSFMsR0FIZ0I7QUFRL0JDLFlBQVUsRUFBRVIsSUFBSSxDQUFDUyxPQUFMLENBQWEseUJBQWI7QUFSbUIsQ0FBaEIsQ0FBakIsQyxDQVVBLDREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFDOUo7QUFBRCxDQUFELEtBQVM7QUFDMUIsc0JBQ0kscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0gsQ0FKRDs7QUFNQThKLFlBQVksQ0FBQ0MsZUFBYixHQUErQixhQUFhO0FBQ3hDQyxvQkFBa0IsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFNBQXJCLEVBQWdDLFFBQWhDO0FBRG9CLENBQWIsQ0FBL0I7O0FBSUFGLFlBQVksQ0FBQzFKLFNBQWIsR0FBeUI7QUFDckJKLEdBQUMsRUFBRUssaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURHLENBQXpCO0FBSWVDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCc0osWUFBMUIsQ0FBZixFOzs7Ozs7Ozs7OztBQ25CQSw0Rjs7Ozs7Ozs7Ozs7QUNBQSxtRjs7Ozs7Ozs7Ozs7QUNBQSxpQ0FBaUMsb2xSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUcsS0FBSjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHO0FBQzFCL0osTUFBSSxFQUFDLEtBRHFCO0FBRTFCNEQsTUFBSSxFQUFDO0FBRnFCLENBQTVCO0FBS08sTUFBTW9HLFdBQVcsR0FBRztBQUN6QkMsS0FBRyxFQUFFLEtBRG9CO0FBRXpCQyxPQUFLLEVBQUUsT0FGa0I7QUFHekJDLElBQUUsRUFBRSxJQUhxQjtBQUl6QkMsUUFBTSxFQUFFLFFBSmlCO0FBS3pCQyxPQUFLLEVBQUU7QUFMa0IsQ0FBcEIsQyxDQVFQOztBQUNPLE1BQU1DLE9BQU8sR0FBRyxDQUFDeEQsS0FBSyxHQUFHaUQsbUJBQVQsRUFBOEJRLE1BQTlCLEtBQXlDO0FBQzlELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtSLFdBQVcsQ0FBQ0MsR0FBakI7QUFDRSw2Q0FDS25ELEtBREw7QUFFRTlHLFlBQUksRUFBRTtBQUZSOztBQUlGLFNBQUtnSyxXQUFXLENBQUNFLEtBQWpCO0FBQ0UsNkNBQ0twRCxLQURMO0FBRUU5RyxZQUFJLEVBQUU7QUFGUjs7QUFJRixTQUFLZ0ssV0FBVyxDQUFDRyxFQUFqQjtBQUNFLDZDQUNLckQsS0FETDtBQUVFbEQsWUFBSSxFQUFFO0FBRlI7O0FBSUYsU0FBS29HLFdBQVcsQ0FBQ0ksTUFBakI7QUFDRSw2Q0FDS3RELEtBREw7QUFFRWxELFlBQUksRUFBRTtBQUZSOztBQUlGLFNBQUtvRyxXQUFXLENBQUNLLEtBQWpCO0FBQ0UsNkNBQ0t2RCxLQURMO0FBRUU5RyxZQUFJLEVBQUUsS0FGUjtBQUdFNEQsWUFBSSxFQUFFO0FBSFI7O0FBS0Y7QUFDRSxhQUFPa0QsS0FBUDtBQTVCSjtBQThCRCxDQS9CTSxDLENBaUNQOztBQUNPLE1BQU0vQyxLQUFLLEdBQUcsTUFBTTtBQUN6QixTQUFPO0FBQUV5RyxRQUFJLEVBQUVSLFdBQVcsQ0FBQ0M7QUFBcEIsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNbkcsT0FBTyxHQUFHLE1BQU07QUFDM0IsU0FBTztBQUFFMEcsUUFBSSxFQUFFUixXQUFXLENBQUNFO0FBQXBCLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTTVHLElBQUksR0FBRyxNQUFNO0FBQ3hCLFNBQU87QUFBRWtILFFBQUksRUFBRVIsV0FBVyxDQUFDRztBQUFwQixHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU01RyxRQUFRLEdBQUcsTUFBTTtBQUM1QixTQUFPO0FBQUVpSCxRQUFJLEVBQUVSLFdBQVcsQ0FBQ0k7QUFBcEIsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNSyxVQUFVLEdBQUcsTUFBTTtBQUM5QixTQUFPO0FBQUVELFFBQUksRUFBRVIsV0FBVyxDQUFDSztBQUFwQixHQUFQO0FBQ0QsQ0FGTTtBQUlQLE1BQU1LLGFBQWEsR0FBRztBQUNwQkMsS0FBRyxFQUFFLFNBRGU7QUFFcEJDLDZFQUZvQjtBQUdwQkMsV0FBUyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FIUyxDQUdTOztBQUhULENBQXRCO0FBTUEsTUFBTUMsZ0JBQWdCLEdBQUdDLG9FQUFjLENBQUNMLGFBQUQsRUFBZ0JKLE9BQWhCLENBQXZDOztBQUVBLFNBQVNVLFNBQVQsQ0FBbUJDLFlBQVksR0FBR2xCLG1CQUFsQyxFQUF1RDtBQUNyRCxTQUFPbUIseURBQVcsQ0FDaEJKLGdCQURnQixFQUVoQkcsWUFGZ0IsRUFHaEJFLG9GQUFtQixDQUFDQyw2REFBZSxFQUFoQixDQUhILENBQWxCO0FBS0Q7O0FBRU0sTUFBTUMsZUFBZSxHQUFJQyxjQUFELElBQW9CO0FBQUE7O0FBQ2pELE1BQUlDLE1BQU0sY0FBR3pCLEtBQUgsNkNBQVlrQixTQUFTLENBQUNNLGNBQUQsQ0FBL0IsQ0FEaUQsQ0FHakQ7QUFDQTs7O0FBQ0EsTUFBSUEsY0FBYyxJQUFJeEIsS0FBdEIsRUFBNkI7QUFDM0J5QixVQUFNLEdBQUdQLFNBQVMsaUNBQ2JsQixLQUFLLENBQUMwQixRQUFOLEVBRGEsR0FFYkYsY0FGYSxFQUFsQixDQUQyQixDQUszQjs7QUFDQXhCLFNBQUssR0FBR2pFLFNBQVI7QUFDRCxHQVpnRCxDQWNqRDs7O0FBQ0EsWUFBbUMsT0FBTzBGLE1BQVAsQ0FmYyxDQWdCakQ7O0FBQ0EsTUFBSSxDQUFDekIsS0FBTCxFQUFZQSxLQUFLLEdBQUd5QixNQUFSO0FBRVosU0FBT0EsTUFBUDtBQUNELENBcEJNO0FBc0JBLFNBQVNFLFFBQVQsQ0FBa0JSLFlBQWxCLEVBQWdDO0FBQ3JDLFFBQU1uQixLQUFLLEdBQUc0QixxREFBTyxDQUFDLE1BQU1MLGVBQWUsQ0FBQ0osWUFBRCxDQUF0QixFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBT25CLEtBQVA7QUFDRCxDLENBR0Q7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ3hMQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzRCIsImZpbGUiOiJwYWdlcy9Xcml0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvV3JpdGluZ3MvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBjb250ZW50OntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQmFubmVyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRleHQxJyl9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29udGV4dDInKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5CYW5uZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdiYW5uZXInKShCYW5uZXIpICAgICAgICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVpZ2h0OicxMDB2aCcsXHJcbiAgICAgICAgb3ZlcmZsb3dZOidoaWRkZW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonIzFmMWYxZicsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzglJywgXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Oic4JSdcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J0JlYmFzIE5ldWUgJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOicjQ0FDQUNBJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonI0NBQ0FDQScsXHJcbiAgICAgICAgZm9udFNpemU6JzIycHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9LFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBEcmF3ZXIgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZVxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBtZD17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdFSUFOIFdBTkdcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV29ya1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdzXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BYm91dFwiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Fib3V0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScuL1NhbGllQ2hpZW5fUmVzdW1lLnBkZicgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXInIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3Jlc3VtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5EcmF3ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShEcmF3ZXIpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL3B1YmxpYy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHt0LCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSAgPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17bW9kZT09J2RheSc/c3R5bGVzLmZvb3RlckJsb2NrOnN0eWxlcy5mb290ZXJCbG9ja05pZ2h0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb250YWN0VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnZm9sbG93VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnY29weXJpZ2h0Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2NvcHlyaWdodERlc2NyaXB0aW9uJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH1cclxuICBcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Zvb3RlcicpKEZvb3RlcilcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCB7U2VsZWN0LCBTZWxlY3QyfSBmcm9tICcuL1B1YmxpY0NvbXBvbmVudCc7XHJcbmltcG9ydCBCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZCc7XHJcbmltcG9ydCBXYlN1bm55T3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB0b0RheSwgdG9OaWdodCwgdG9FbiwgdG9aaEhhbnQgfSBmcm9tICcuLi8uLi9zdG9yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250RmFtaWx5OidCZWJhcyBOZXVlICcsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBmb250U2l6ZTonMnJlbScsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgZm9udFNpemU6JzFyZW0nLFxyXG4gICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgIGNvbG9yOidibGFjaydcclxuICAgIH1cclxuICB9LFxyXG4gIG5pZ2h0TGluazoge1xyXG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgIGZvbnRTaXplOicxcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgZm9udFNpemU6JzFyZW0nXHJcbiAgfSxcclxuICBuaWdodExpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonI0JEQkRCRCcsXHJcbiAgICBmb250U2l6ZTonMXJlbSdcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmlnaHRJY29uOntcclxuICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgY29sb3I6JyNGRkZGRkYnLFxyXG4gICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgIGNvbG9yOicjQkRCREJEJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZm9ybUNvbnRyb2w6IHtcclxuICAgIG1hcmdpbjogJzAuNXJlbScsXHJcbiAgICB3aWR0aDonNnJlbScsXHJcbiAgfSxcclxuICBpbnB1dExhYmVsOiB7XHJcbiAgICBmb250U2l6ZTpcIjE3cHhcIixcclxuICAgIGZvbnRGYW1pbHk6XCLlvq7ou5/mraPpu5Hpq5RcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3ctUmV2ZXJzZVwiXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgSGVhZGVyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBjb25zdCBbIGxhbmd1YWdlLCBzZXRMYW5ndWFnZSBdID0gUmVhY3QudXNlU3RhdGUoJ2VuJyk7XHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAvLyBzZXRMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBoYW5kbGVMYW5nVG9SZWR1eChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxhbmdUb1JlZHV4ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmKHZhbHVlID09ICdlbicpIHtcclxuICAgICAgICBkaXNwYXRjaCh0b0VuKCkpXHJcbiAgICAgIH0gXHJcbiAgICAgIGVsc2UgaWYgKHZhbHVlID09ICd6aEhhbnQnKSB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9aaEhhbnQoKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGhhbmRsZURyYXdlck9wZW4sXHJcbiAgICAgIG1vZGUsXHJcbiAgICAgIGxhbmdcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgV0VJQU4gV0FOR1xyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9IGxnPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC4zcmVtJywgcGFkZGluZ0xlZnQ6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0MlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6J2VuJyxsYWJlbDpcIkVuZ2xpc2hcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOid6aEhhbnQnLGxhYmVsOlwi5Lit5paHXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMC4zcmVtJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGUgPT09ICdkYXknP1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9OaWdodCgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9EYXkoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFdiU3VubnlPdXRsaW5lZEljb24gZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSdkYXknJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dvcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xb3JrJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3b3JrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J25pZ2h0JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xb3JrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV29yayc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nLCBtYXJnaW5MZWZ0OictMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nZGF5JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xcml0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dyaXRpbmdzJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3cml0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV3JpdGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xcml0aW5ncyc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dyaXRpbmdzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJywgbWFyZ2luTGVmdDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSdkYXknJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL0Fib3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvQWJvdXQnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2Fib3V0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J25pZ2h0JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9BYm91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL0Fib3V0Jz9jbGFzc2VzLm5pZ2h0TGlua0FuY2hvcjpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnYWJvdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nLCBwYWRkaW5nTGVmdDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vUmVzdW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9SZXN1bWUnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dCgncmVzdW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1NhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvU2FtcGxlJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FtcGxlXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgICAgPEhpZGRlbiBsZ1VwPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc209ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZSA9PT0gJ2RheSc/XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh0b05pZ2h0KCkpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyaWdodG5lc3MyT3V0bGluZWRJY29uIGZvbnRTaXplPSdpbmhlcml0Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmRpc3BhdGNoKHRvRGF5KCkpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxXYlN1bm55T3V0bGluZWRJY29uIGZvbnRTaXplPSdpbmhlcml0Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbScsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25PcGVuPXtoYW5kbGVPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6J2VuJyxsYWJlbDpcIkVuZ2xpc2hcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOid6aEhhbnQnLGxhYmVsOlwi5Lit5paHXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9e21vZGU9PSdkYXknP2NsYXNzZXMuaWNvbjpjbGFzc2VzLm5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICB7LyogPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShIZWFkZXIpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvYWRpbmdCYXIgZnJvbSAncmVhY3QtdG9wLWxvYWRpbmctYmFyJ1xyXG4gXHJcbmV4cG9ydCBjb25zdCBQYWdlTG9hZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRQcm9ncmVzcygxMDApO1xyXG4gIH0sW10pXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIG1vZGVcclxuICB9ID0gcHJvcHM7XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExvYWRpbmdCYXJcclxuICAgICAgICBjb2xvcj17bW9kZT09PSdkYXknPydibGFjayc6J3doaXRlJ31cclxuICAgICAgICBoZWlnaHQ9ezN9XHJcbiAgICAgICAgd2FpdGluZ1RpbWU9ezUwMH1cclxuICAgICAgICB0cmFuc2l0aW9uVGltZT17MTAwMH1cclxuICAgICAgICBsb2FkZXJTcGVlZD17NjAwfVxyXG4gICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc31cclxuICAgICAgICBvbkxvYWRlckZpbmlzaGVkPXsoKSA9PiBzZXRQcm9ncmVzcygwKX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWxlY3QgYXMgTWF0ZXJpYWxTZWxlY3QsIElucHV0TGFiZWwsIEZvcm1Db250cm9sLCBNZW51SXRlbSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUcmFuc2xhdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBpbnB1dExhYmVsOiB7XHJcbiAgICAgICAgZm9udFNpemU6XCIxcmVtXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTpcIuW+rui7n+ato+m7kemrlFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gICAgfSxcclxuICAgIHNlbGVjdFJlcXVpcmVkOntcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG9uT3BlbixcclxuICAgICAgICBvbkNsb3NlLFxyXG4gICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIG9wZW4sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8TWF0ZXJpYWxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvbk9wZW49e29uT3Blbn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmVcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJWYWx1ZT17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRyYW5zbGF0ZUljb24gc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX0vPlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+ICAgICAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0Mihwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgZm9ybUNvbnRyb2xQcm9wcyxcclxuICAgICAgICBzZWxlY3RQcm9wcyxcclxuICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICBkaXNhYmxlZCA9ZmFsc2UsXHJcbiAgICAgICAgdGFiSW5kZXg9MCxcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgbGV0IG5ld1Byb3BzID0ge1xyXG4gICAgICAgIC4uLnByb3BzXHJcbiAgICB9O1xyXG4gICAgZGVsZXRlIG5ld1Byb3BzW1wiaGVscGVyVGV4dFwiXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlSWNvbi8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICB7Li4uZm9ybUNvbnRyb2xQcm9wc31cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWxcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDpjbGFzc2VzLmlucHV0TGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOmNsYXNzZXMuc2VsZWN0UmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnNlbGVjdFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7c2VsZWN0OiBjbGFzc2VzLmlucHV0fSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdERpc3BsYXlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDp0YWJJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPT09bnVsbD9cIlwiOnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9e3NlbGVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tFcXVhbChhLGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBiLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcnM9IGl0ZW1zLmZpbHRlcihpdGVtPT4gY2hlY2tFcXVhbChpdGVtLnZhbHVlLHNlbGVjdGVkKSAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnNbMF0/ZmlsdGVyc1swXVtcImxhYmVsXCJdOlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWU/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWw/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufVxyXG5cclxuU2VsZWN0LnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5TZWxlY3QyLnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9QdWJsaWMvSGVhZGVyJ1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL1B1YmxpYy9CYW5uZXInXHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vUHVibGljL0RyYXdlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9QdWJsaWMvRm9vdGVyJ1xyXG5pbXBvcnQgU2hvd2Nhc2UgZnJvbSAnLi9jb21wb25lbnQvU2hvd2Nhc2UnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBQYWdlTG9hZGVyIH0gZnJvbSAnLi4vUHVibGljL1BhZ2VMb2FkZXInXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGRheUJhY2tncm91bmQ6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonI0ZGRkZGRicsXHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICB9LFxyXG4gICAgbmlnaHRCYWNrZ3JvdW5kOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJyxcclxuICAgICAgICBjb2xvcjonI0ZGRkZGRidcclxuICAgIH0sXHJcbiAgICBib2R5OntcclxuICAgICAgICBwYWRkaW5nTGVmdDonOCUnLCBcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6JzglJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IFdyaXRpbmdzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbZHJhd2VyLCBzZXREcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubW9kZSlcclxuICAgIGNvbnN0IGxhbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxhbmcpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gZmFsc2UgJiZcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGF5QmFja2dyb3VuZDpjbGFzc2VzLm5pZ2h0QmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUxvYWRlciBtb2RlPXttb2RlfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9IHN0eWxlPXt7bWFyZ2luVG9wOic4cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3djYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzJyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge2RyYXdlciA9PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6JyMxZjFmMWYnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZT17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBmb250V2VpZ2h0OjcwMCxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjp7XHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgaW1nOntcclxuICAgICAgICB3aWR0aDonODAlJyxcclxuICAgICAgICBwYWRkaW5nVG9wOicxMCUnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBBcnRpY2xlQmxvY2sgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIG1vZGUsXHJcbiAgICAgICAgYm94XHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e3VybH1cclxuICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJyBcclxuICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtib3g9PXRydWUmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gc3R5bGU9e3tjb2xvcjoobW9kZT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0gc3R5bGU9e3tjb2xvcjoobW9kZT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Ym94PT1mYWxzZSYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBzdHlsZT17e2NvbG9yOihtb2RlPT0nZGF5Jz8nd2hpdGUnOidibGFjaycpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufSBzdHlsZT17e2NvbG9yOihtb2RlPT0nZGF5Jz8nd2hpdGUnOidibGFjaycpfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuQXJ0aWNsZUJsb2NrLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignYXJ0aWNsZScpKEFydGljbGVCbG9jaykiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IEFydGljbGVCbG9jayBmcm9tICcuL0FydGljbGVCbG9jaydcclxuaW1wb3J0IGltZzAxIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS93cml0aW5ncy9keW5hbWljLWltcG9ydC5wbmcnXHJcbmltcG9ydCBpbWcwMiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2Uvd3JpdGluZ3MvZ2xvYmUucG5nJ1xyXG5pbXBvcnQgaW1nMDMgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL3dyaXRpbmdzL25wbS5wbmcnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHNob3djYXNlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOicxcmVtJ1xyXG4gICAgfSwgXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y1RjVGNScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIG1hcmdpblRvcDonMXJlbSdcclxuICAgIH0sXHJcbiAgICBsaW5rT25Ib3Zlcjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonIzFGMUYxRicsXHJcbiAgICAgICAgb3BhY2l0eTonMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICcuNHMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAgIG1hcmdpblRvcDonMXJlbSdcclxuICAgIH0sXHJcbiAgICBuaWdodExpbms6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1YzVjNWMnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgbmlnaHRMaW5rT25Ib3Zlcjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonI0ZGRkZGRicsXHJcbiAgICAgICAgb3BhY2l0eTonMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICcuNHMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAgIG1hcmdpblRvcDonMXJlbSdcclxuICAgIH0sXHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9LFxyXG4gICAgdGl0bGVPbkhvdmVyOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb25PbkhvdmVyOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IFNob3djYXNlID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgWyBib3gxLCBzZXRCb3gxXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFsgYm94Miwgc2V0Qm94Ml0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbIGJveDMsIHNldEJveDNdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQm94MU9uID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJveDEoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJveDJPbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3gyKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCb3gzT24gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Qm94MyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRCb3gxKHRydWUpO1xyXG4gICAgICAgIHNldEJveDIodHJ1ZSk7XHJcbiAgICAgICAgc2V0Qm94Myh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAge21vZGU9PSdkYXknJiZcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDE9PT10cnVlP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDFPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVCbG9jayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCd0aXRsZTEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdkZXNjcmlwdGlvbjEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWcwMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17Jy4vJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3g9e2JveDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtib3gyPT09dHJ1ZT9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5saW5rT25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gyT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQmxvY2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGUyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZGVzY3JpcHRpb24yJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1nMDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9eycuLyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94PXtib3gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Mz09PXRydWU/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua09uSG92ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlQm94M09ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZUJsb2NrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ3RpdGxlMicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2Rlc2NyaXB0aW9uMicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltZzAzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXsnLi8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveD17Ym94M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHttb2RlPT0nbmlnaHQnJiZcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDE9PT10cnVlP2NsYXNzZXMubmlnaHRMaW5rOmNsYXNzZXMubmlnaHRMaW5rT25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gxT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVCbG9jayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoJ3RpdGxlMScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZGVzY3JpcHRpb24xJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWcwMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXsnLi8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3g9e2JveDF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2JveDI9PT10cnVlP2NsYXNzZXMubmlnaHRMaW5rOmNsYXNzZXMubmlnaHRMaW5rT25Ib3Zlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVCb3gyT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQmxvY2sgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dCgndGl0bGUyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZGVzY3JpcHRpb24yJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aW1nMDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9eycuLyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94PXtib3gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Ym94Mz09PXRydWU/Y2xhc3Nlcy5uaWdodExpbms6Y2xhc3Nlcy5uaWdodExpbmtPbkhvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJveDNPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVCbG9jayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KCd0aXRsZTInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KCdkZXNjcmlwdGlvbjInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWcwM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17Jy4vJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3g9e2JveDN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5TaG93Y2FzZS5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2FydGljbGUnKShTaG93Y2FzZSkiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b24yXCI6IFwiSGVhZGVyX2J1dHRvbjJfX3dGN1hHXCIsXG5cdFwiYm91bmNlXCI6IFwiSGVhZGVyX2JvdW5jZV9fMjR0VTlcIixcblx0XCJiYWxsXCI6IFwiSGVhZGVyX2JhbGxfXzNwUmk3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJCbG9ja1wiOiBcInB1YmxpY19mb290ZXJCbG9ja19fWHVDci1cIixcblx0XCJmb290ZXJCbG9ja05pZ2h0XCI6IFwicHVibGljX2Zvb3RlckJsb2NrTmlnaHRfXzNtaTdiXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25cIjogXCJwdWJsaWNfaW1nRGVzY3JpcHRpb25fXzJHQkRKXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25OaWdodFwiOiBcInB1YmxpY19pbWdEZXNjcmlwdGlvbk5pZ2h0X18zQ1hKRVwiLFxuXHRcImJhclwiOiBcInB1YmxpY19iYXJfXzM0N1FYXCJcbn07XG4iLCJcclxuY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcbmNvbnN0IGxvY2FsZVN1YnBhdGhzID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0KCkucHVibGljUnVudGltZUNvbmZpZ1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdExhbmd1YWdlOidlbicsXHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnemhIYW50JywgJ2ZyJywgJ2VzJ10sXHJcbiAgbG9jYWxlU3VicGF0aHM6e1xyXG4gICAgemhIYW50OidjbicsXHJcbiAgICBmcjogJ2ZyJyxcclxuICAgIGVzOiAnZXMnXHJcbiAgfSxcclxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcclxufSlcclxuLy8gZXhwb3J0IGNvbnN0IHVzZVRyYW5zbGF0aW9uID0gbmV4dEkxOE5leHQudXNlVHJhbnNsYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXcml0aW5ncyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9Xcml0aW5ncy9Xcml0aW5ncydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuY29uc3QgV3JpdGluZ3NQYWdlID0gKHt0fSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxXcml0aW5ncy8+XHJcbiAgICApXHJcbn1cclxuXHJcbldyaXRpbmdzUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2hlYWRlcicsICdiYW5uZXInLCAnYXJ0aWNsZScsICdmb290ZXInXSxcclxufSlcclxuXHJcbldyaXRpbmdzUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoV3JpdGluZ3NQYWdlKSIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9keW5hbWljLWltcG9ydC0zMjE0MGU2ZmRlMDMxNmI0YWZkYTdmYjRmMzVkODcyMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2xvYmUtZDRhYzI0MjYxNTkxYmQ0YzJiYzdiMDRhZDFjMGE0Y2QucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBeUFBQUFKWUNBTUFBQUN0cUhKQ0FBQUFTMUJNVkVWSGNFeVJCUVdSQlFYTUFBQ1JCUVdSQlFXUkJRV1JCUVdSQlFXUkJRV1JCUVgvLy8ra0F3T2FCQVREQUFDM0FRR3ZBZ0xpY0hEOTh2TFhOamJkVVZIUkdSbjUzdDd6djcvcm01dEVHd1NZQUFBQUNuUlNUbE1BbHJmL0UzSlE3QzNXcGhWK29BQUFHUkpKUkVGVWVOcnQzZXQ2MnpZYVJlR3hWTnNSZGJSc1diNy9LeDJQMjJrU1J3ZVFCRUVjM3YyanY1cjJpYVhsL1MwQUJQL3pIOGtoZnowOVBUNDhQQ3crOC9EdytQajB3NDlFNUc4MmZueXlzWHJ1ZnMzemF2SHcrT012UHh4cHZqa2VGcit6OFNzbEQ0OFlrWmJ4ZUx4S3h6OVpQUnEycEZVOEhsYmQvVHd2SUNKTnRrY0lIbCtJUEVCRVdzdFRLQjVmZzlZREY1R1c4dVBodWV1VnhSTkVCQjQzRWZHREUvSkJSYVJ4K1ZoMFE3T3lMU0ttS3lvaXpVNVg0L0Q0UXNTY0plU0RpZ2o1b0NJaWtlU0RpZ2o1NkRGblVSRWhIN2RQbjBCRUtwbXVGdDBVV1ptemhIeFFFYWw3dWdySFkvdi9oQ05penBLaThRZzcxTDdkYmc3Ny9lNS9XWDc5Yzc4L2JNSTRlZmJFb2RRdEg5dk5mcmU4bE4xK3M2VWkwclI4YkE5WDZQZy9JNGR0aUlyNFlVdDU4ckVLd09NV0hmOHdFb0NJMHlkU25IemNuNjQyKy90NGhDTGltVndwYTdxSzBoNy9JaElnSTFSRWFwS1BIbmo4alFnVmtWcW1xMVhBZExYc216MFZrVWJrWTlzZmo2OFZyWUE1eTBGNGFVaytoc3haRUpHRzVLTTNJczlVUkpxU0R5b2lWV1F5K2ZpV0F4V1JLcWVyN2FqcHF0K3VDQldSMHVSakV3Y1BLaUkxeWtlVTZZcUtDUG1nSWtJKzBzeFpWRVRtbnE0ZWs4ckhBQlV4WjBsTDh0SDc5SWxuY2lWcitkZ3RwOHlPaWdqNWNCQmV5TWZ3SlY4cUl0bkp4MkpXK1JneVowRkVrazFYQVhnY2xnbERSYVFzK1VnMFhUbDlJdVFqRkpHQUc3U2NQcEdXNUlPS1NJSHlzVnZPbGQzQlRhV1N0M3pNaUVmZ2txOWRFWmxJUGdMT2xjeUxoNFB3UWo0Y2hKY2NwNnN1OSttcTMrbVRsVGxMa3NySEpoYzg3SXBJNnVscVZjcDBSVVdFZkRoOUlrWEpSM2ZZTFhPTVozSWxBL25JRlkvZ2cvQlVSQ2FVajgxK21YTThreXVUSllNbmFxbUltSzQ4a3lzRjRySEs4MUM3WjNLbERQblk3cGZsSk9SVjB1WXNpU2dmaDJWUm9TS1NVRDYyeFV4WFZFUWlUMWVQRmNsSGZ4Vngra1J1eThlaUx2bWdJcEpZUHZhN1pibWhJa0krcUlpUUR5b2k1TU9jSlpsTVY0dnM3eXRKajRpdmhmeUR4Mk1EOHVFZ3ZKQVB6K1FLK1hBOWtDU1VqNjRsK2ZpdUlxNEhrdHZ5MGVSMDFVdEZ1Z2VJa0k4MjhRaFdFWE5XbS9MeFhQZTVFcnNpWXVlRGlnajU4RXl1WkNjZisyVkxvU0x5YjU1YVh0cWxJbkpudW5vZ0h3N0NDL2x3RUY3NkwrMnVXajFYRWs5RnpGa1Z5NGVkRHlvaXcrV2pPN1NOQnhXeHRFcytxSWdNVzlyZFl5UDhJRHdWYVUwK1RGZFVoSHlZcnFLcWlEbUxmRkFSS2xMM3pnZjVvQ0pDUHFpSURKaXV5QWNWRWZKQlJXU1NuWStENzc4NXE5R2xYZktSR0JHblQweFg1cXliMXdPWnMyckN3OUl1RlNFZjVJT0t5RGY1OEVUdGRJaTRIcWg0UE1pSE9VdXVobnhNam9pWEpwUXNINllyS2lMa0kzc1ZlYVlpbG5hcGlEbUxmTWdJRlRGbmtROHFRa1Zxa0EvWCtVeUFpT3VCeUlkUWtkS25LM2VKVWhFaEh3V3J5T0lKSWpOTlYrU2pFQlV4WjVFUEtrSkZ5SWRjak91QjhsdmFKUi9GN1lwUWthemt3NkYyS2tJK3lFYytoRkNSYkpaMnlRY1ZrV3Q0T05SdVYwU3VUMWZrZzRvSStTaFlSVHlUT3hjZVA4aEhOVXUrVkNUK3pnZjVvQ0pDUHFxSW0wckpoNHhGaElyRU8xZmlMbEVxSXVTak5rVHVsNGhuY3BOTVYvRElkTTZ5NUVzK0JDTGtReVpWRVV1KzVJT0t1QjdJZENXV2ZIT2FydUJSa1lxNDdycFg3ajl4YnJxcVRFVThLdElqOXcrV3dLTTBSTzdQV2E2WWkzYndpbnhVT1djdEVCS1VCL0xSS0NJSWlkRWYrS2gzemtKSWdIODRXRkl6SW5kSzVBRUE5OWF2N3ZVSFBxb201QkVDdC9jLzdxM3ZtcS9xSnVUWmZzaE5BYm0zUCtqb1ZlMkVyT3lwajFuQU1tQlZzSmhGMUtjU2tHN2o2MVZCTmpSa29nR0xnZFF4WkhXR3JFbFdlTHZPaE5WQ2hSaXlCcTVnVVpCS2N1Y1JFU3RaUXdzRUlFMW91Z29aV0NCR3JEWWtoS2NQV3VJbDZjMDBTTGRTSVlNS3hESnZJNEN3a0NFR1FrSWFXY1g2bjRVQW92Y2VpS01telNqSVo0WFlDL20raWQ2RmhZVlV2OHJyM1B0UVJUZGsxVkVnMjREUG1hWi9tN0JXWFNnaE9xUndQalpCbnpOTjczZE1FU0h0R0xxdGtJRnJXTzc4YWFZLzdLWi95NklQSUVxa2J2K3dqalZzbDlETldPV3ZYMjNEUDJJejFvQkZYbGVQbHB6OXBzOG5iS0YzcUlKQXBHNzdzSmsrZkJmRW5GVXNIbjJtS3pzaDR4d2RJdVZOVjl2ZW55MUFmc2xxSUNEbXJBcmx3ekpXUkVBZ1VwOThBQ1FxSU9hczJ1UURJSkVCY2FGMVhmSUJrT2lBbUxOcWtnK0F4QWZFQzlNcmtnK0E5QUJrdTlrY0RvZk5ka3RGbXBFUGdBUUQ4bk55Mm9YTXNsU2tDdmtBU0NnZ3YzL2hBK1paS2xLRGZBQWtFSkROZ0Y5S0RzTG5NVjBGaWlOQVJnQnk0ZW56a0xHV2loUWhIOXZOWWIvZjdYYjdxLzh5UU80QXNodTRNTEtsSXRuTHgyK3o4SlUvQUpEYmdHeUdUN2RVSk8rbDNlK2Z6K1UvQTVEYmdPekcvSXFpSWpNbHhNMy9iUGlMRCtJQzVDWWcyNUZETGhYSlZENHVmakNYZnVjQjVDWWdoOUZGYnM1S3pVZVFmRnorc3dlQTlBVGtYZ0ZRa1FyazR5WmNBTGtGU01BTm8zdHpWbW5UMWE2UHZBQmtKQ0JVcEFMNStQbnJEaUQ5QUlsVzYrYXM2WGMrTnNQbDQvcU1CWkR4Z0ZDUjR1WGozd0NrRnlEQjcxcmIyUldaZWJxSzlNVG5CaUJUTkVqWUFMeWxJbE5OVjlFZTFEa0FaSklHTVdkbFAxMkYvYmNBTWxXRFFLUnMrUURJNUEzeTlmTzE1RnZZemdkQUVqYUlYWkhVT2NTK0pRQWcwelpJV09XYnMzS2NyZ0NTb2tGQ2wzeGRENVFFajk0YnRBQ1p2RUhNV1dudzJFOXlCeE5BcG0rUTBJMHJ6K1Jtc2ZNQmtQUU5Zc20zUFBrQVNOSUdDZndsUjBXRzRiR2Q3SmNQUUZJMUNCVXBabWtYSVBNMFNDZ2k1cXpZOGpIaVdDaEFFallJRlNsSVBnQXlSNE9FcW9nNUs1cDhqSHcwRFNDSkc4U2NsZnZPQjBCbWJwREF3UUFpODhvSFFHWnJFQ3BTZ253QVpNWUdvU0lKcHRRNEhReVFlUnFFaWt3OVhVWGFVQUxJWEExQ1JmS1dENERNM1NCVVpMS2wzWWcvTTRETTJDQmZId0FWeVZNK0FKSkRnMUNSYk9VRElIazB5TkpOcFRFSDB1aDFDNUM1R3lSMHliZDVSRkx0ZkFBa3R3YXhLNUtqZkFBa293WlpCdDVVMm02SnBKY1BnR1RWSUlFVGRxTnpWc3k3UkFGU1pvUFlGY2xsNXdNZ21UWkk0SzVJYzgva3ppUWZBTW12UWFoSVJ2SUJrQndiaElwa0l4OEF5YkpCZ3BkOFcwQWtaR2wzYWlrRFNHNE5FcW9pMVJPeW0zdTZBa2ltRGJKMFUya0c4Z0dRakJ2RWt1ODg1MG9BVWtxREJLdEl1L0tSYUtVQ0lKazJTTXNxY3BoK3VqcTl2QUtrOEFZSkd6VHEyeFZKOFVUdDIvbjRCcERpRzJUWjRFSDRGUEx4K25GY3J3RlNRWU0wcHlJcDVPUDA4cjVlQTZTU0JsazI5VXh1aXFYZHQvTjZEWkNLR21UWnpQVkFLWjZvL1pxdUFGSlZnd1RQV1dVamtrSSsvcG11QUZKWmd5d0RYeVZkc0lvazJmbDRPYS9YQUtteVFXcFhrUlR5OFhPNkFraDlEVkwxcnNndXdjN0g2ZU45dlFaSXhRMVM3Wkp2aWlkcVQyL245Um9nbFRkSWxZZ2t1YzduOVh4Y0E2U0JCZ244ZlZ2UW5KWGlYTW12YTFjQXFieEJsbFhkVkpya0x0R0xlQUNrMWdhcGFGY2t5Uk8xMzlhdUFGSi9nM3g5YkJWY0Q1UkNQazdYOEFCSXpRMFMrTnMzNnprcnhjN0hoYlVyZ0xUUklKK0VGSzBpU2E3emViMkJ4OXJ6SUhVM1NORkx2a25rNDQrZFFRM1NWSU1FZjlIeVF5VEpYYUl2dC9FQVNBTU5Fcllya3R2cGt5Ukx1Mi9uNHgwK2pGZ05ORWpnOXkyblozSjNLZkM0c1hhbFFkcHFrTUNKSlpjNUs0MTgzSjJ1QU5KUWd5d0xPZ2kvVHlFZk45ZXVqRmdOTnNpeWtOTW5TZVRqTldTNjBpQnROY2dYSXR2cDl4WHkzL2tJbks0MFNHc05zc3o5bWR3MEx6SzR2M2FsUVZwdGtMeFZKSTE4ZlBUQVE0TzAxaUNoWTh3TWlDU1JqeDdUbFFacHMwRUNmMVdubnJQU3ZNamc3ZHdQRHczU1lvTmt1Q3VTUmo3NlRWY2FwTjBHV1diMlRHNlMxMFQxbnE0MFNNTU5FamJVcERsOWtrWStlazlYR3FUcEJzbEdSVUxlc3hoanVocUVod1pwdUVHeVFDVE5XOVR1UGZTaFFUUklua3UrYWQ1Uit6WVlEdzNTZUlQTXF5Sko1T1BpZFhBYVJJTmtQMmVsa1k5QmExY2FSSVAwUG4yeVQvLy83T2JHUTROb2tIQVZpVHBucGJoTGRQamFsUWJSSUxNaWtrWStUaC9IOWVnQVJJT2tWcEUwNTBwT2IrL2o4ZEFnR2lTMWlpUjVrY0hZdFNzTm9rRm1tck5DcHF0TmhPbnFQUW9lR2tTREpOMFYyYVdSajVkSWVHZ1FEZkxIVjNnLzNaeVZabWszOU1JU0RhSkI4bEtSUlBMeGNWeEhERUEwU0pvNUs1RjhSSnl1TklnR0dmRnQ3bmY1VHBMcmZPSk9WeHBFZzZTYXMxTEpSOXpwU29Ob2tGNmYrVkJFRXUxOHhKNnVOSWdHR1Q4V2JlNjlCWFFYaEVlRUxmcTM4d1I0YUJBTk12TDBTYmU5eFVnUUhUSHdtR0M2QW9nR2liTTArOG5JWWIvYmZXK08vV0d6RGZuVEVlUmptdWtLSUJva1JDQzZzR3kzbTgzaGNOanY5NGZENWhPTmJlQ2ZpL0JBNzl0VWVIQVFEUkpIUlFabmsrOTBwVUUwU0VRVkdaUUlPeCtubHdueEFJZ0dpYWdpdmZHSU1GMjluTmRyZ0dpUUd1ZXNDSGhNT2wxeEVBMHlJeUl4bG5aZjNxZkdRNE5va0ZsVUpNWjczdDZteHdNZ0dpVDJBYTB1emM3SDhtMzY2UW9nR21TV09TdkMwdTdFYTFjY1JJTU1uck0yODh2SDh1VTlFUjRhUklPa1ZaRVkxL3krbnRkcmdHaVFHbFVreXRMdSt4b2dHcVJHRllrd1haM2VVdUlCRUEweWRHdDludnA0TzYvWEFORWdWWnBJaEhOWEg4YzFRRFJJbllTTTV1UDA4cjVlQTBTREZDTWl2UWlKOEtLbzlSb2dHcVJTUXNiMngydjY2ZXJ2dkFKRWcwdy9aUjBLbks3K2JoQ0FhSkRwQ1JuSlIvUzFxL2V6QnRFZythejJqbHZmalQ1ZEhUOWVYelNJQmttU2tCM0Q3UzZyNmVyODZkMHZHa1NEWkNQcSs2eW1xNWZUc2djZ0drU0RqTlNRS1FWa2d1bnE5UFVmMWlBYUpKY2hhL2lBRlgyNk9wNy92NnVoUVRSSUxrUFc0QUVyK3JIRTk3ZlRzaThnR2tTRFREdGtiZktacm43NXJtc1FEWkl1Mi9nRDFpbjZReDhmdjMzVE5ZZ0d5YU5DQnYycU9FVmZ1enEvbkphREFORWdHbVJTVHg5U0lOR1BKUjYvNGFGQk5FZ21GVEpnaVRmKzJ0WEhuMTl5RGFKQnNsakk2bDhnRTZ4ZFhmaS9hQkFOa3NPUnJFMy82U3J5MnRYN0g5T1ZCdEVnMlZSSXp6MlErSS9VZmx6NWZtc1FEWktCcHZkYjR6MUZmNVhCK2UyMEhBbUlCdEVnMDJuNm9kOTB0VTR5WFFGRWcrUXlZL1dZc0tiZE9BZUlCc2x3TnoxOHdvcC9IZHo1OW1VTEhFU0R6TCtPRmZ4cjRpM1IycFVHMFNBNVNVamdUK0UwMVVNZkFORWdXVXRJa0lKTThOQkh3SGNhSUJwazlvWGVJQVdKLzBodDBFMXZIRVNEekEvSURHdFhkK1ZEZzJpUVhDeDlrM3k2dXJkMkJSQU5VaEFncC9pWDdZYnlBUkFOa2o4Z3I5RnYyejBDUklPVXM4NmJIaEFOb2tFQW9rRTBDRUEwaUFZQmlBYlJJQURSSUtKQk5BaEFOSWdHQVlnRzBTQUEwU0FhQkNBYVJJTUFSSU1BUklOb0VJQm9FQTBDRUEyaVFRQ2lRUUNpUVRRSVFEU0lCZ0dJQnRFZ0FORWdBQUdJQmpGaUFVU0RhQkNBYUJDQUFFU0RBTVNJcFVFQW9rRTBDRUFBQWhBTkFoQ0FhSkNvZ0p3QW9rRUFva0ZFZzJnUWdHZ1FEUUlRRGFKQkFLSkJNbW1RZDRCb0VJQUFSRFRJb0JFTElCb0VJQnBFTklnR0FZZ0cwU0FBMFNBYUJDQWFSSU1BUklOb0VJQm9FQTBDRUEyaVFRQ2lRUUFDRUEwQ0VJQUFSSU1BQkNBYUJDQUEwU0FBQVlnR0FRaEFOQWhBQUtKQkFBSVFEUUlRZ0dnUWdBQkVnd0FFSUJvRUlBQUJpQVlCQ0VBMENFQUFva0VBQWhBTkFoQ0FhQkNBQUVTREFBUWdHZ1FnQU5FZ0FBR0lCZ0VJUUFDaVFRQUNFQTBDRUlCb0VJQUFSSU5VQXNnTFFEUUlRRFNJQmdFSVFEUUlRSXhZR2dRZ0dnUWdHZ1FnQU5FZ1JpeUFhQkFOQWhBTm9rRUFva0UwQ0VBMENFQTBpQVlCaUFiUklBRFJJQm9FSUJvRUlCb2s2SWVnUVRRSVFEU0lhSkI2RytRZElCcUVwR3NRRGRKRWd4aXhOSWdHMFNBYXBBMUF6aHhFZ3dBa0pTQkdMQTBDRUNPV0JnRUlRRFFJUURpSUJnR0lCaEdBYUJDQUFFU0RBQVFnQVBrdDV4TkFwZ0JrQjVBYUFEbCtCUEt4M0FBRUlLMEJjandIYnp3Q3BCOGczUjRnOTllNk13ZmsvZVVVL3RmZkFxUVhJQWVBRk40Z3h6NTRMSGNBNlFmSUJpQkZBM0k4djQ3ODJ3UGtKaUR0U1VoVmdQU1FqeXNLQXBEYmdIUUFLZGRCM2o5T1BmL3lmMDVZQUxrRHlBRWdoVGJJOGVPMTkxOSsxd0drSnlBYmdKVFpJTDJucTR2YmhBQzVCMGh6RWxKSGcvUmEycjJsSU4wS0lEK3o2TXhZTlRUSWtPbnFpb0owcTc5dzhXOGVPaFZTUVlNTXhPTmlnWFFMZ1B6TTQ0VWZVR3ViNmNVM3lNRHA2a3FCZEF0WS9NelRKVUEyQUNrSWtPRjRYRlQwcm51QXhjLzhXSm14aWdhazc4YjU3N2xVSU4wakxPNUlTR01WVXJLRERGcmF2VjBnVm5udlMwaGJGbEp1ZzR5WnJxNFpDRWYvSmlIUHpWZElxWUFjUDA3ai91SVhDOFNFOVh2K1dqVmZJWVVDTW02NnVsb2d6MCtndUM4aFRYbDZrWUM4djUzRzhyRzUrTW5iSmd5YXNWcmFUaThRa1BlUDF3bisyaFo1TDg1WWk2N3hJYXM0UU1ZdDdkNGNzS3hoQmU0VnRqUmtsUWJJK2VVVWdZK05BaG1uNmQxbUI1QWNBWW1CeDdVVnJLNmo2S0dhM3M1YWIxbUF4TWsxUG15QzlLaVFWa1M5UVVDdUNMcE5rRDY3NmMwUTBoNGcrNjBDaVZJaGJSRFNIQ0JYK2JCSjJHOHZwT3UyQjRCVUI4aFZQaFRJMVFxNTV1bE5kRWhqZ0Z6MUR3K2pYOCtQcTBOV0E2dTlUUUd5TzF6OXBCbjZFRS8vSExQMkFLa0drR3Y3Z3dhc29ac2hEWlJJTzREc0R0dk9nQlY3SmV2TDFYY0FLUitRL1EwOHJHQ04wSkN2T1dzSGtMSUIyVzl1ZmNEUEJHVHdXbS90YzFZVGdOeVNjNGNVb3hCU0xTSU5BSEpUUHI3NElPZ2hTMWwzQ0tsVVJlb0haSDhIRHd0WWtRaXBjOG0zZGtCdXk0ZitpRGxsVlRsbkRRRGtveHhBN3NrSFB2cXRaUzI2NWhDcHVVSHV5a2ZYclI3eDBZZVFoN3NsVXB1S1ZOd2dkK1hqa3cvN0gzM0hyUHNsVXBlS1ZOc2c5K1dqZTFZZlE4NzJQamMxWjFYYUlBSFQxZlBDOFpLcDVxeUtFS215UVFMdzZCWlA2bVBTT1d1blFYSUZKR0M2SXVmajVxeW5WU3NxVWwrRDdFTGt3M1JGUmRwc2tDRDVzSFpGUlFwcWtORnZNdmdsUWZMaHl4MXB6bXBCUldadmtPUG9OeG1RRHlwU0x5RGozMlRRU3o0ZXlJYzVhMkpBVGhFQmVZODNYWkdQdVJEcHFqNTlNbWVESENPODZLT0hmS3pzZkZDUmtnQWhIN1VnOGhnd1orMEIwbk82ZWlFZkxhbkl0bEFWbVFtUTkzalRGZm5JQXBGRnBTb3lEeURuZVBLeEp4OEZxUWhBZ3ZDSU4xMEZ5WWZwS3BHSzFMZ3JraDZRSS9tZ0lnQkpzTFJMUHFoSWRZREVYTm9sSDFTa01rRGVrOHFIUSszNTdvcnNBRExwcWQyQTYzdzZUOVJtckNKZE1YTldNa0NPSDIveDhQQkViZkVxVXNycjIxSUI4aDd2b2FnUStYQ3VoSXFVQkFqNW9DS0Zxa2dLUUk3eE5zNURkajdJaDEyUm9nQTVrNDlHVThPY05Ua2c3NG5QbGNBanF6bXIrTk1uRXdNUzhkUnVDQjdPbFdTSFNPblA1RTRMU016cGluellGYWtNa0hPMEN4bklSOUVxVXZLY05SMGdFUzlrc1BOUitxNUl1WWhNQmNneHFYdzQxRjdCbkpXbmlrd0VTRkw1Y0ZsaUVZaDBSYXJJSklCRVhOb2xIL1hNV1VYdWlrd0F5REh4MGk0OEt0b1Z5ZTU2b1BpQWZDUTlWMEkrTFBrV0JVaThDeGs4VVF1UjZnQkpLeCtlcUxYa1d4UWdxWmQyNFZHb2lwUjBVMmxFUUNJdTdkN0hveU1mVmM5WjJkeDlFZzJROXhmblNpUVlrVVVwdXlLUkFEbW1QVmNDanhhV2ZMTlFrU2lBUkh5Tm1uTWxFTWxLUldJQWtsUSs0RUZGeWdJa3RYejRZaldsSW5Nak1oYVFtRXU3NU1PY2xkMmNOUklROGlFSmRrVjJoUUlTY2JweW5ROFZ5WExKZHdRZzhTNWtzUFBSZG9rRXFVaHBnRVM4RGM0VHRlYXNiSGRGQmdEeUV2ZENCdkloR2F2SXNBWTVrZytKbktjOGQwV0dBSElrSHpJRklqbXF5QUJBM3Q0U3lzY3orYUFpYys2S0RBREV6b2RNaGtoMjF3UE5Cb2kzcU1uQVhaR2tLaklUSU9SRHJxcElWa3UrOHdCQ1BxUVFGWmtERUlmYXBSZ1ZTUThJK1pDQ2RrVlNBMEkrSkt4RU1sR1J4SURzQW81ZHVjNUg4bEdScElDUUQ0bTg1RHY1UWZpRWdIaWlWbnFyeUdKdUZVa0dTQkFlbG5ibFcrWStDSjhLRUhlSlNwRXFrZ1lROGlHRnFrZ0tRQ3p0eXJnU21mRjZvQVNBZUpHQmxEdG5UUTZJUSsxU01pSVRBMEkrSktHS1REQm5UUXJJTG1pNjh0RkxXSW5NOFV6dWxJQWNYT2NqcGM5WjB3RkNQbVFLUkJLL3YyMHFRRUxlb3VaUXV3eFFrYlNuVDZZQlpHZHBWeVpMVWhXWkJCQlAxRW90S2pJQklPUkRzbENSWFphQWtBOUpRVWdxRllrTWlFUHRra3hGa2h5RWp3c0krWkRLVkNRbUlPUkRFaS81VG44OVVEeEF5SWZNc2VRN3NZckVBbVRuWEluVXFDS1JBQ0VmVXFlS1JBR0VmRWl0S2hJQmtLQzdSQjFxbHlKVlpEUWc1RU5xVnBHeGdJVEloK3Q4Sk1HY05ZMktqQVBFRTdWU3VZcU1BWVI4U1BVcU1od1E4aUg1SmZwTnBZTUJJUi9TZ29vTUJNVE9oMlNMeUNMbVRhV0RBSEdkaitTdEl2RnVLdjBUa08zZFAwaytKTy84RlU5RkxpeEU3VXhYMG9DS2JJTlU1QUlnaDdHSDJ1RWhSYWhJeUp4MTRmdStKUi9TaklvTUFXUlBQcVFWRmJreloxMThMZk9HZkVndEtqTHk5TW5sd3lMN2djZXVQRkVyK2MxWm8xVGs4cmYrejVWZTUwcWtSUlhaaGEwUncwUGFWSkhOOVYyVW55V3lJeDlTdUlvTVBBaC91Tms2KzkxbjlvZk4vZlp3blkvVXFDTDNEdVJ1UDlNRnhIUWwrYzlaSWMvay9vN0lJZWpiN3pvZmFVZEZQaEhaaFl0RkVCN2tRMnBTa1c2N09YeG1FNmM5UEZFcnRhbEl6SkFQS1U1RkZzbndJQjlTNUp5MVNvT0hwVjJwV0VYSWg3UThaejJURDVFYmlFdzVaN25PUjhxZnN4NmZKOFBEZENWVnFBajVFTG1wSXVSRDVBWWlqNnZJMDVXbFhhbHN6bHBGM1Brd1hVbDlpTVJhOG5XZGoxQVI4aUZVaEh5SWZGT1JaL0loY2t0RlJzaUg2VXFvQ1BrUUtrSStST0twQ1BtUXR0SnJ6akpkQ1JXQmgwaC9GVm1SRDJtM1JlNjR5UFBpRVI3U3RLNC9MbGJQMStoNHNQRWg4dGZUNDhQdmxEeXZGZytQVHovUUlmSXZKVStQanc5ZmVjUkdQdmt2NU40WHlKeEJRWDRBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdcclxuXHJcbmxldCBzdG9yZVxyXG5cclxuY29uc3QgZXhhbXBsZUluaXRpYWxTdGF0ZSA9IHtcclxuICBtb2RlOidkYXknLFxyXG4gIGxhbmc6J2VuJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgREFZOiAnREFZJyxcclxuICBOSUdIVDogJ05JR0hUJyxcclxuICBFTjogJ0VOJyxcclxuICBaSEhBTlQ6ICdaSEhBTlQnLFxyXG4gIFJFU0VUOiAnUkVTRVQnXHJcbn1cclxuXHJcbi8vIFJFRFVDRVJTXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5EQVk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheSdcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5OSUdIVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnbmlnaHQnXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU46XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGFuZzogJ2VuJ1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlpISEFOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsYW5nOiAnemhIYW50J1xyXG4gICAgICB9IFxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRVNFVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnZGF5JyxcclxuICAgICAgICBsYW5nOiAnZW4nXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuLy8gQUNUSU9OU1xyXG5leHBvcnQgY29uc3QgdG9EYXkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuREFZIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvTmlnaHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTklHSFQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9FbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5FTiB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b1poSGFudCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5aSEhBTlQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRDb3VudCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRVNFVCB9XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAga2V5OiAncHJpbWFyeScsXHJcbiAgc3RvcmFnZSxcclxuICB3aGl0ZWxpc3Q6IFsnbW9kZScsICdsYW5nJ10sIC8vIHBsYWNlIHRvIHNlbGVjdCB3aGljaCBzdGF0ZSB5b3Ugd2FudCB0byBwZXJzaXN0XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VyKVxyXG5cclxuZnVuY3Rpb24gbWFrZVN0b3JlKGluaXRpYWxTdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gbWFrZVN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gbWFrZVN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbiAgcmV0dXJuIF9zdG9yZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG5cclxuXHJcbi8vIGltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG4vLyBpbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5cclxuLy8gbGV0IHN0b3JlXHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vICAgICBtb2RlOidkYXknXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gICAgIGNhc2UgJ0RBWSc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgbW9kZTogJ2RheScsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGNhc2UgJ05JR0hUJzpcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICBtb2RlOiAnbmlnaHQnLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBjYXNlICdSRVNFVCc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJldHVybiBzdGF0ZVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSB7XHJcbi8vICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4vLyAgICAgcmVkdWNlcixcclxuLy8gICAgIHByZWxvYWRlZFN0YXRlLFxyXG4vLyAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuLy8gICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuLy8gICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuLy8gICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4vLyAgIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4vLyAgICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcclxuLy8gICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuLy8gICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbi8vICAgICB9KVxyXG4vLyAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuLy8gICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4vLyAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4vLyAgIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbi8vICAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbi8vICAgcmV0dXJuIF9zdG9yZVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbi8vICAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuLy8gICByZXR1cm4gc3RvcmVcclxuLy8gfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1diU3VubnlPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==