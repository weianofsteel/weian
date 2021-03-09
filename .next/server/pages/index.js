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

/***/ "./component/Home/Home.js":
/*!********************************!*\
  !*** ./component/Home/Home.js ***!
  \********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Public_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Public/Header */ "./component/Public/Header.js");
/* harmony import */ var _Public_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Public/Banner */ "./component/Public/Banner.js");
/* harmony import */ var _Public_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Public/Drawer */ "./component/Public/Drawer.js");
/* harmony import */ var _Public_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Public/Footer */ "./component/Public/Footer.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Home\\Home.js";






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  dayBackground: {
    backgroundColor: '#FFFFFF',
    color: '#1F1F1F'
  },
  nightBackground: {
    backgroundColor: '#9E9E9E',
    color: '#FFFFFF'
  },
  body: {
    paddingLeft: '8%',
    paddingRight: '8%'
  }
});
const Home = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [mode, setMode] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('day');

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const handleMode = () => {
    if (mode === 'day') {
      setMode('night');
    } else {
      setMode('day');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [drawer == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: mode === 'day' ? classes.dayBackground : classes.nightBackground,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
            handleDrawerOpen: handleDrawerOpen,
            handleMode: handleMode,
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
          lineNumber: 77,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, undefined);
};

/***/ }),

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





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({});

const Banner = ({
  t
}) => {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_3___default.a, {
        rotateSpeed: 800,
        typeSpeed: 80,
        fontSize: '24px',
        fontFamily: 'Roboto',
        color: '#6f6f6f',
        heading: 'Typewriter',
        dataText: [t('context1'), t('context2')]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
    // overflowY:'hidden',
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
            children: t('title')
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






const Footer = ({
  t
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      container: true,
      className: _css_public_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footerBlock,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('contactTitle')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('followTitle')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 4,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('copyright')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: t('copyrightDescription')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
      color: 'black'
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
    color: 'black',
    fontSize: '1rem'
  },
  icon: {
    fontSize: '1.5rem',
    color: '#8F8F8F',
    "&:hover": {
      color: '#1F1F1F'
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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('en');
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const handleChange = event => {
    setLanguage(event.target.value);
    _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].changeLanguage(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const {
    handleDrawerOpen,
    handleMode,
    mode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
          children: t('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 1,
        md: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 1,
        md: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
        mdDown: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '0.3rem',
            textAlign: 'center'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
            style: {
              backgroundColor: 'transparent',
              color: mode === 'day' ? '#1F1F1F' : '#FFFFFF'
            },
            disableRipple: true,
            onClick: handleMode,
            children: mode === 'day' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_13___default.a, {
              fontSize: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 23
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, {
              fontSize: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 24
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '0.3rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PublicComponent__WEBPACK_IMPORTED_MODULE_12__["Select2"], {
            name: "language",
            value: language,
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
            lineNumber: 140,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
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
            lineNumber: 153,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Work",
            underline: "none",
            className: router.pathname == '/Work' ? classes.nightLinkAnchor : classes.nightLink,
            children: t('work')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '1.5rem'
          },
          children: [mode === 'day' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Writings",
            underline: "none",
            className: router.pathname == '/Writings' ? classes.linkAnchor : classes.link,
            children: t('writings')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Writings",
            underline: "none",
            className: router.pathname == '/Writings' ? classes.nightLinkAnchor : classes.nightLink,
            children: t('writings')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '1.5rem'
          },
          children: [mode === 'day' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./About",
            underline: "none",
            className: router.pathname == '/About' ? classes.linkAnchor : classes.link,
            children: t('about')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./About",
            underline: "none",
            className: router.pathname == '/About' ? classes.nightLinkAnchor : classes.nightLink,
            children: t('about')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '1.5rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Sample",
            underline: "none",
            className: router.pathname == '/Sample' ? classes.linkAnchor : classes.link,
            children: "Sample"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
        lgUp: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          sm: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
            style: {
              backgroundColor: 'transparent',
              color: mode === 'day' ? '#1F1F1F' : '#FFFFFF',
              fontSize: '1.6rem'
            },
            disableRipple: true,
            onClick: handleMode,
            children: mode === 'day' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Brightness2Outlined__WEBPACK_IMPORTED_MODULE_13___default.a, {
              fontSize: "inherit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 23
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, {
              fontSize: "inherit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 24
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
          smUp: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          style: {
            marginTop: '0.5rem',
            textAlign: 'center'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PublicComponent__WEBPACK_IMPORTED_MODULE_12__["Select"], {
            name: "language",
            value: language,
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
            mode: mode // style={{color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
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
              className: classes.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
      container: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _css_Public_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.ball
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 9
  }, undefined);
};

Header.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('header')(Header));

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
  selectRequired: {// marginLeft:"-7px"
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Translate__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
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
	"footerBlock": "public_footerBlock__XuCr-"
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_Home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Home/Home */ "./component/Home/Home.js");

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\pages\\index.js";





const HomePage = ({
  t
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Home_Home__WEBPACK_IMPORTED_MODULE_4__["Home"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['header', 'banner', 'footer']
});

HomePage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('header')(HomePage));

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1B1YmxpY0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvUHVibGljL0hlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2Nzcy9wdWJsaWMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9pMThuLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiZGF5QmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibmlnaHRCYWNrZ3JvdW5kIiwiYm9keSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiSG9tZSIsImNsYXNzZXMiLCJkcmF3ZXIiLCJzZXREcmF3ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwibW9kZSIsInNldE1vZGUiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJoYW5kbGVNb2RlIiwiaGVpZ2h0IiwiQmFubmVyIiwidCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwibWFpbiIsInRpdGxlIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJkcmF3ZXJMaW5rIiwidGV4dEFsaWduIiwiZHJhd2VySGVhZGVyIiwibWFyZ2luVG9wIiwiaWNvbiIsIkRyYXdlciIsInByb3BzIiwiRm9vdGVyIiwic3R5bGVzIiwiZm9vdGVyQmxvY2siLCJsaW5rIiwibWFyZ2luTGVmdCIsIm5pZ2h0TGluayIsImxpbmtBbmNob3IiLCJuaWdodExpbmtBbmNob3IiLCJmb3JtQ29udHJvbCIsIm1hcmdpbiIsIndpZHRoIiwiaW5wdXRMYWJlbCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsImxhYmVsIiwicGF0aG5hbWUiLCJiYWxsIiwic2VsZWN0UmVxdWlyZWQiLCJTZWxlY3QiLCJvbk9wZW4iLCJvbkNsb3NlIiwib25DaGFuZ2UiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJvb3QiLCJpbnB1dCIsIlNlbGVjdDIiLCJuYW1lIiwiZm9ybUNvbnRyb2xQcm9wcyIsInNlbGVjdFByb3BzIiwicmVxdWlyZWQiLCJkaXNhYmxlZCIsInRhYkluZGV4IiwibmV3UHJvcHMiLCJzZWxlY3QiLCJzZWxlY3RlZCIsImNoZWNrRXF1YWwiLCJhIiwiYiIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiZmlsdGVycyIsImZpbHRlciIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImFycmF5Iiwib2JqZWN0IiwiaW5wdXRMYWJlbFByb3BzIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJ6aEhhbnQiLCJmciIsImVzIiwibG9jYWxlUGF0aCIsInJlc29sdmUi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Q0kscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBSUgsQ0FMRDs7QUFPQW9HLFFBQVEsQ0FBQ0MsZUFBVCxHQUEyQixhQUFhO0FBQ3BDQyxvQkFBa0IsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFFBQXJCO0FBRGdCLENBQWIsQ0FBM0I7O0FBSUFGLFFBQVEsQ0FBQ25HLFNBQVQsR0FBcUI7QUFDbkJELEdBQUMsRUFBRUUsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURDLENBQXJCO0FBSWVDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCK0YsUUFBMUIsQ0FBZixFOzs7Ozs7Ozs7OztBQ3BCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vUHVibGljL0hlYWRlcidcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9QdWJsaWMvQmFubmVyJ1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4uL1B1YmxpYy9EcmF3ZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vUHVibGljL0Zvb3RlcidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgZGF5QmFja2dyb3VuZDp7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOicjRkZGRkZGJyxcclxuICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgIH0sXHJcbiAgICBuaWdodEJhY2tncm91bmQ6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonIzlFOUU5RScsXHJcbiAgICAgICAgY29sb3I6JyNGRkZGRkYnXHJcbiAgICB9LFxyXG4gICAgYm9keTp7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzglJywgXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Oic4JSdcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgY29uc3QgW2RyYXdlciwgc2V0RHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbIG1vZGUsIHNldE1vZGUgXSA9IFJlYWN0LnVzZVN0YXRlKCdkYXknKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXREcmF3ZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb2RlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKG1vZGUgPT09ICdkYXknKSB7XHJcbiAgICAgICAgICBzZXRNb2RlKCduaWdodCcpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBzZXRNb2RlKCdkYXknKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2RyYXdlciA9PSBmYWxzZSAmJlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5kYXlCYWNrZ3JvdW5kOmNsYXNzZXMubmlnaHRCYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb2RlPXtoYW5kbGVNb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge2RyYXdlciA9PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6JyMxZjFmMWYnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZT17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAncmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHJcbn0pXHJcblxyXG5jb25zdCBCYW5uZXIgPSAoe3R9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZVNwZWVkPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17JzI0cHgnfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9eydSb2JvdG8nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnIzZmNmY2Zid9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17J1R5cGV3cml0ZXInfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUZXh0PXtbIHQoJ2NvbnRleHQxJyksIHQoJ2NvbnRleHQyJyldfVxyXG4gICAgICAgICAgICAgICAgLz4gIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkJhbm5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Jhbm5lcicpKEJhbm5lcikgICAgICAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIG1haW46IHtcclxuICAgICAgICBoZWlnaHQ6JzEwMHZoJyxcclxuICAgICAgICAvLyBvdmVyZmxvd1k6J2hpZGRlbicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOicjMWYxZjFmJyxcclxuICAgICAgICBwYWRkaW5nTGVmdDonOCUnLCBcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6JzglJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonQmViYXMgTmV1ZSAnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyNDQUNBQ0EnLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VyTGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgdGV4dEFsaWduOidsZWZ0JyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOicjQ0FDQUNBJyxcclxuICAgICAgICBmb250U2l6ZTonMjJweCcsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckhlYWRlcjoge1xyXG4gICAgICAgIG1hcmdpblRvcDonM3JlbSdcclxuICAgIH0sXHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IERyYXdlciA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGhhbmRsZURyYXdlckNsb3NlXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9IHN0eWxlPXt7bWFyZ2luVG9wOic0cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dvcmtcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCd3b3JrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xcml0aW5nc1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3dyaXRpbmdzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQWJvdXRcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdhYm91dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLi9TYWxpZUNoaWVuX1Jlc3VtZS5wZGYnIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyJyB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdyZXN1bWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuRHJhd2VyLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoRHJhd2VyKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9wdWJsaWMubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7dH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb250YWN0VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnZm9sbG93VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnY29weXJpZ2h0Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2NvcHlyaWdodERlc2NyaXB0aW9uJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH1cclxuICBcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Zvb3RlcicpKEZvb3RlcilcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCB7U2VsZWN0LCBTZWxlY3QyfSBmcm9tICcuL1B1YmxpY0NvbXBvbmVudCc7XHJcbmltcG9ydCBCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZCc7XHJcbmltcG9ydCBXYlN1bm55T3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRGYW1pbHk6J0JlYmFzIE5ldWUgJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIGZvbnRTaXplOicycmVtJyxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICBmb250U2l6ZTonMXJlbScsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmlnaHRMaW5rOiB7XHJcbiAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgY29sb3I6JyNGRkZGRkYnLFxyXG4gICAgZm9udFNpemU6JzFyZW0nLFxyXG4gICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgIGNvbG9yOidibGFjaydcclxuICAgIH1cclxuICB9LFxyXG4gIGxpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgZm9udFNpemU6JzFyZW0nXHJcbiAgfSxcclxuICBuaWdodExpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgZm9udFNpemU6JzFyZW0nXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgIH1cclxuICB9LFxyXG4gIGZvcm1Db250cm9sOiB7XHJcbiAgICBtYXJnaW46ICcwLjVyZW0nLFxyXG4gICAgd2lkdGg6JzZyZW0nLFxyXG4gIH0sXHJcbiAgaW5wdXRMYWJlbDoge1xyXG4gICAgZm9udFNpemU6XCIxN3B4XCIsXHJcbiAgICBmb250RmFtaWx5Olwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgWyBsYW5ndWFnZSwgc2V0TGFuZ3VhZ2UgXSA9IFJlYWN0LnVzZVN0YXRlKCdlbicpO1xyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBoYW5kbGVEcmF3ZXJPcGVuLFxyXG4gICAgICBoYW5kbGVNb2RlLFxyXG4gICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCd0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjNyZW0nLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vZGV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bW9kZSA9PT0gJ2RheSc/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnJpZ2h0bmVzczJPdXRsaW5lZEljb24gZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6PFdiU3VubnlPdXRsaW5lZEljb24gZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMC4zcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0MlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYW5ndWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonZW4nLGxhYmVsOlwiRW5nbGlzaFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6J3poSGFudCcsbGFiZWw6XCLkuK3mlodcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J2RheScmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV29ya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dvcmsnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nbmlnaHQnJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dvcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xb3JrJz9jbGFzc2VzLm5pZ2h0TGlua0FuY2hvcjpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nZGF5JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xcml0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dyaXRpbmdzJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3cml0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV3JpdGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xcml0aW5ncyc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dyaXRpbmdzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSdkYXknJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL0Fib3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvQWJvdXQnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2Fib3V0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J25pZ2h0JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9BYm91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL0Fib3V0Jz9jbGFzc2VzLm5pZ2h0TGlua0FuY2hvcjpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnYWJvdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9SZXN1bWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1Jlc3VtZSc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdyZXN1bWUnKX1cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vU2FtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9TYW1wbGUnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYW1wbGVcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICA8SGlkZGVuIGxnVXA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzbT17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKSxmb250U2l6ZTonMS42cmVtJ319XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge21vZGUgPT09ICdkYXknP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEJyaWdodG5lc3MyT3V0bGluZWRJY29uIGZvbnRTaXplPSdpbmhlcml0Jy8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6PFdiU3VubnlPdXRsaW5lZEljb24gZm9udFNpemU9J2luaGVyaXQnLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhbmd1YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOidlbicsbGFiZWw6XCJFbmdsaXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonemhIYW50JyxsYWJlbDpcIuS4reaWh1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShIZWFkZXIpIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFNlbGVjdCBhcyBNYXRlcmlhbFNlbGVjdCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2wsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFRyYW5zbGF0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGlucHV0TGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTpcIjFyZW1cIixcclxuICAgICAgICBmb250RmFtaWx5Olwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3ctUmV2ZXJzZVwiXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0UmVxdWlyZWQ6e1xyXG4gICAgICAgIC8vIG1hcmdpbkxlZnQ6XCItN3B4XCJcclxuICAgIH0sXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG9uT3BlbixcclxuICAgICAgICBvbkNsb3NlLFxyXG4gICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIG9wZW4sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8TWF0ZXJpYWxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvbk9wZW49e29uT3Blbn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmVcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJWYWx1ZT17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRyYW5zbGF0ZUljb24vPlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+ICAgICAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0Mihwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgZm9ybUNvbnRyb2xQcm9wcyxcclxuICAgICAgICBzZWxlY3RQcm9wcyxcclxuICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICBkaXNhYmxlZCA9ZmFsc2UsXHJcbiAgICAgICAgdGFiSW5kZXg9MCxcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgbGV0IG5ld1Byb3BzID0ge1xyXG4gICAgICAgIC4uLnByb3BzXHJcbiAgICB9O1xyXG4gICAgZGVsZXRlIG5ld1Byb3BzW1wiaGVscGVyVGV4dFwiXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlSWNvbi8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICB7Li4uZm9ybUNvbnRyb2xQcm9wc31cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWxcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDpjbGFzc2VzLmlucHV0TGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOmNsYXNzZXMuc2VsZWN0UmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnNlbGVjdFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7c2VsZWN0OiBjbGFzc2VzLmlucHV0fSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdERpc3BsYXlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDp0YWJJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPT09bnVsbD9cIlwiOnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9e3NlbGVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tFcXVhbChhLGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBiLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcnM9IGl0ZW1zLmZpbHRlcihpdGVtPT4gY2hlY2tFcXVhbChpdGVtLnZhbHVlLHNlbGVjdGVkKSAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnNbMF0/ZmlsdGVyc1swXVtcImxhYmVsXCJdOlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWU/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWw/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufVxyXG5cclxuU2VsZWN0LnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5TZWxlY3QyLnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvbjJcIjogXCJIZWFkZXJfYnV0dG9uMl9fd0Y3WEdcIixcblx0XCJib3VuY2VcIjogXCJIZWFkZXJfYm91bmNlX18yNHRVOVwiLFxuXHRcImJhbGxcIjogXCJIZWFkZXJfYmFsbF9fM3BSaTdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlckJsb2NrXCI6IFwicHVibGljX2Zvb3RlckJsb2NrX19YdUNyLVwiXG59O1xuIiwiXHJcbmNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdFxyXG5jb25zdCBsb2NhbGVTdWJwYXRocyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdCgpLnB1YmxpY1J1bnRpbWVDb25maWdcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gIGRlZmF1bHRMYW5ndWFnZTonZW4nLFxyXG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ3poSGFudCcsICdmcicsICdlcyddLFxyXG4gIGxvY2FsZVN1YnBhdGhzOntcclxuICAgIHpoSGFudDonY24nLFxyXG4gICAgZnI6ICdmcicsXHJcbiAgICBlczogJ2VzJ1xyXG4gIH0sXHJcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXHJcbn0pXHJcbi8vIGV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9IG5leHRJMThOZXh0LnVzZVRyYW5zbGF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQge0hvbWV9IGZyb20gJy4uL2NvbXBvbmVudC9Ib21lL0hvbWUnXHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICh7IHQgfSkgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIb21lLz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnaGVhZGVyJywgJ2Jhbm5lcicsICdmb290ZXInXSxcclxuICB9KVxyXG4gIFxyXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKEhvbWVQYWdlKSAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMk91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=