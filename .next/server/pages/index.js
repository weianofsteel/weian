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

/***/ "./component/About/component/Bio.js":
/*!******************************************!*\
  !*** ./component/About/component/Bio.js ***!
  \******************************************/
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
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_image_about_avartar_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/image/about/avartar.jpg */ "./public/image/about/avartar.jpg");
/* harmony import */ var _public_image_about_avartar_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_image_about_avartar_jpg__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\About\\component\\Bio.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  title: {
    fontFamily: 'Roboto',
    fontSize: '2rem'
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: '2rem',
    fontWeight: 700
  },
  img: {
    borderRadius: '50%'
  },
  content: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    lineHeight: '1.8rem'
  }
});

const Bio = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const {
    mode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: false,
        md: 3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 12,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.title,
          children: t('greeting')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: false,
        md: 3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 2,
        sm: 3,
        md: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 8,
        sm: 6,
        md: 4,
        style: {
          marginTop: '-1rem',
          padding: '1rem',
          textAlign: 'center'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _public_image_about_avartar_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
          className: classes.img,
          style: {
            width: '100%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 2,
        sm: 3,
        md: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: false,
        md: 3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: 12,
        md: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.content,
          children: t('content1')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.content,
          children: t('content2')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.content,
          children: t('content3')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        item: true,
        xs: false,
        md: 3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
};

Bio.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('about')(Bio));

/***/ }),

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
/* harmony import */ var _Home_component_Skill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Home/component/Skill */ "./component/Home/component/Skill.js");
/* harmony import */ var _component_Sharing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/Sharing */ "./component/Home/component/Sharing.js");
/* harmony import */ var _Home_component_LearnByDoing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Home/component/LearnByDoing */ "./component/Home/component/LearnByDoing.js");
/* harmony import */ var _About_component_Bio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../About/component/Bio */ "./component/About/component/Bio.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Public_PageLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Public/PageLoader */ "./component/Public/PageLoader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Home\\Home.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
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
const Home = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const mode = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(state => state.mode);
  const lang = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(state => state.lang);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [drawer == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: mode === 'day' ? classes.dayBackground : classes.nightBackground,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_PageLoader__WEBPACK_IMPORTED_MODULE_11__["PageLoader"], {
          mode: mode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
            handleDrawerOpen: handleDrawerOpen,
            mode: mode,
            lang: lang
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
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
            lineNumber: 64,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '1rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_About_component_Bio__WEBPACK_IMPORTED_MODULE_9__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '1rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
          lineNumber: 88,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./component/Home/component/LearnByDoing.js":
/*!**************************************************!*\
  !*** ./component/Home/component/LearnByDoing.js ***!
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
/* harmony import */ var _public_image_gif_gif4_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/image/gif/gif4.gif */ "./public/image/gif/gif4.gif");
/* harmony import */ var _public_image_gif_gif4_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_image_gif_gif4_gif__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_image_gif_gif5_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/image/gif/gif5.gif */ "./public/image/gif/gif5.gif");
/* harmony import */ var _public_image_gif_gif5_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_image_gif_gif5_gif__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_image_gif_gif6_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/image/gif/gif6.gif */ "./public/image/gif/gif6.gif");
/* harmony import */ var _public_image_gif_gif6_gif__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_image_gif_gif6_gif__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_image_gif_gif7_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/image/gif/gif7.gif */ "./public/image/gif/gif7.gif");
/* harmony import */ var _public_image_gif_gif7_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_image_gif_gif7_gif__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_image_gif_gif8_gif__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/image/gif/gif8.gif */ "./public/image/gif/gif8.gif");
/* harmony import */ var _public_image_gif_gif8_gif__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_image_gif_gif8_gif__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_image_gif_gif10_gif__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/image/gif/gif10.gif */ "./public/image/gif/gif10.gif");
/* harmony import */ var _public_image_gif_gif10_gif__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_image_gif_gif10_gif__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_image_home_mysql_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../public/image/home/mysql.png */ "./public/image/home/mysql.png");
/* harmony import */ var _public_image_home_mysql_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_mysql_png__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Home\\component\\LearnByDoing.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  title: {
    fontFamily: 'Roboto Slab',
    fontSize: '2rem'
  },
  imgBlock: {
    width: '100%' // padding:'1rem'

  },
  imgHover: {
    backgroundColor: 'black',
    zIndex: 999
  }
});

const LearnByDoing = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const [onHover, setOnHover] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const handleOnHover = () => {
    setOnHover(true);
  };

  const handleMouseLeave = () => {
    setOnHover(false);
  };

  const {
    mode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: classes.title,
      children: t('title')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 6,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://weianofsteel.github.io/Learn-By-Doing/04-slide-show/",
          underline: "none",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_image_gif_gif4_gif__WEBPACK_IMPORTED_MODULE_7___default.a,
            className: classes.imgBlock
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 6,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://weianofsteel.github.io/Learn-By-Doing/05-shopping-cart/",
          underline: "none",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_image_gif_gif5_gif__WEBPACK_IMPORTED_MODULE_8___default.a,
            className: classes.imgBlock
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 6,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://weianofsteel.github.io/Learn-By-Doing/06-canvas-drawing/",
          underline: "none",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_image_gif_gif6_gif__WEBPACK_IMPORTED_MODULE_9___default.a,
            className: classes.imgBlock
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 6,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://weianofsteel.github.io/Learn-By-Doing/07-movie-trailer/",
          underline: "none",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_image_gif_gif7_gif__WEBPACK_IMPORTED_MODULE_10___default.a,
            className: classes.imgBlock
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 6,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://weianofsteel.github.io/react-weather-app/",
          underline: "none",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_image_gif_gif8_gif__WEBPACK_IMPORTED_MODULE_11___default.a,
            className: classes.imgBlock
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 6,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://react-text-editor-itcl78xy9-weianofsteel.vercel.app/",
          underline: "none",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_image_gif_gif10_gif__WEBPACK_IMPORTED_MODULE_12___default.a,
            className: classes.imgBlock
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

LearnByDoing.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('learnByDoing')(LearnByDoing));

/***/ }),

/***/ "./component/Home/component/Sharing.js":
/*!*********************************************!*\
  !*** ./component/Home/component/Sharing.js ***!
  \*********************************************/
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
/* harmony import */ var _Public_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Public/Carousel */ "./component/Public/Carousel.js");
/* harmony import */ var react_typewriting_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-typewriting-animation */ "react-typewriting-animation");
/* harmony import */ var react_typewriting_animation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Public_Scrollup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Public/Scrollup */ "./component/Public/Scrollup.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_image_home_view1_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/image/home/view1.jpeg */ "./public/image/home/view1.jpeg");
/* harmony import */ var _public_image_home_view1_jpeg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_view1_jpeg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_image_home_view2_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../public/image/home/view2.jpeg */ "./public/image/home/view2.jpeg");
/* harmony import */ var _public_image_home_view2_jpeg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_view2_jpeg__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Home\\component\\Sharing.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  title: {
    fontFamily: 'Roboto Slab',
    fontSize: '2rem'
  },
  imgBlock: {
    width: '100%'
  },
  imgHover: {
    backgroundColor: 'black',
    zIndex: 999
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: '1.8rem',
    fontWeight: 900
  },
  subtitleNight: {
    fontFamily: 'Roboto',
    fontSize: '1.8rem',
    color: 'white',
    fontWeight: 900
  },
  description: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    color: 'black'
  },
  descriptionNight: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    color: 'white'
  },
  packageBlock: {
    marginTop: '3rem',
    padding: '1rem',
    borderBottom: '1px solid black',
    color: 'black',
    backgroundColor: '#F5F5F5',
    height: '100%',
    width: '100%',
    overflow: 'hidden' // transition: '.4s ease-in-out'

  },
  packageBlockNight: {
    borderBottom: '1px solid white',
    padding: '1rem',
    backgroundColor: '#5c5c5c',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    marginTop: '3rem'
  },
  link: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    color: 'black',
    "&:hover": {
      color: '#5c5c5c'
    }
  },
  nightLink: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    color: 'white',
    "&:hover": {
      color: '#c4c4c4'
    }
  }
});

const Sharing = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const {
    mode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: classes.title,
      children: t('title')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      className: mode === 'day' ? classes.packageBlock : classes.packageBlockNight,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 7,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: mode === 'day' ? classes.subtitle : classes.subtitleNight,
          children: "react-typewriting-animation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: mode === 'day' ? classes.description : classes.descriptionNight,
          children: t('description2')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://www.npmjs.com/package/react-typewriting-animation",
          underline: "none",
          target: "_blank",
          className: mode === 'day' ? classes.link : classes.nightLink,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10___default.a, {
            style: {
              marginBottom: '-0.4rem'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, undefined), t('link')]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 5,
        style: {
          textAlign: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default.a, {
          smDown: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              paddingTop: '30%'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_8___default.a, {
              rotateSpeed: 800,
              typeSpeed: 80,
              fontSize: '24px',
              fontFamily: 'Roboto',
              color: mode == 'day' ? 'black' : 'white',
              heading: 'Typewriter',
              dataText: ["Hello World"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default.a, {
          mdUp: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_typewriting_animation__WEBPACK_IMPORTED_MODULE_8___default.a, {
            rotateSpeed: 800,
            typeSpeed: 80,
            fontSize: '24px',
            fontFamily: 'Roboto',
            color: mode == 'day' ? 'black' : 'white',
            heading: 'Typewriter',
            dataText: ["Hello World"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      className: mode === 'day' ? classes.packageBlock : classes.packageBlockNight,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 7,
        style: {
          textAlign: 'left'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: mode === 'day' ? classes.subtitle : classes.subtitleNight,
          children: "react-customize-carousel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: mode === 'day' ? classes.description : classes.descriptionNight,
          children: t('description1')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://www.npmjs.com/package/react-customize-carousel",
          underline: "none",
          target: "_blank",
          className: mode === 'day' ? classes.link : classes.nightLink,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10___default.a, {
            style: {
              marginBottom: '-0.4rem'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, undefined), t('link')]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 5,
        style: {
          textAlign: 'left',
          paddingTop: '1rem',
          paddingLeft: '1rem'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Carousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
          imgsrc: [_public_image_home_view1_jpeg__WEBPACK_IMPORTED_MODULE_12___default.a, _public_image_home_view2_jpeg__WEBPACK_IMPORTED_MODULE_13___default.a, _public_image_home_view1_jpeg__WEBPACK_IMPORTED_MODULE_12___default.a, _public_image_home_view2_jpeg__WEBPACK_IMPORTED_MODULE_13___default.a, _public_image_home_view1_jpeg__WEBPACK_IMPORTED_MODULE_12___default.a],
          rotateBy: 3,
          navigateButton: true,
          controlButton: true,
          mode: mode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      className: mode === 'day' ? classes.packageBlock : classes.packageBlockNight,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 7,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: mode === 'day' ? classes.subtitle : classes.subtitleNight,
          children: "react-scroll-up-btn"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: mode === 'day' ? classes.description : classes.descriptionNight,
          children: t('description3')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://www.npmjs.com/package/react-scroll-up-btn",
          underline: "none",
          target: "_blank",
          className: mode === 'day' ? classes.link : classes.nightLink,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10___default.a, {
            style: {
              marginBottom: '-0.4rem'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, undefined), t('link')]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 5,
        style: {
          textAlign: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default.a, {
          smDown: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              padding: '20%'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Scrollup__WEBPACK_IMPORTED_MODULE_9__["Scrollup"], {
              mode: mode
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_11___default.a, {
          mdUp: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Scrollup__WEBPACK_IMPORTED_MODULE_9__["Scrollup"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 9
  }, undefined);
};

Sharing.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('sharing')(Sharing));

/***/ }),

/***/ "./component/Home/component/Skill.js":
/*!*******************************************!*\
  !*** ./component/Home/component/Skill.js ***!
  \*******************************************/
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
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../css/Home.module.css */ "./css/Home.module.css");
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_image_home_react_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/image/home/react.png */ "./public/image/home/react.png");
/* harmony import */ var _public_image_home_react_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_react_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_image_home_react_night_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/image/home/react-night.png */ "./public/image/home/react-night.png");
/* harmony import */ var _public_image_home_react_night_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_react_night_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_image_home_jest_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/image/home/jest.png */ "./public/image/home/jest.png");
/* harmony import */ var _public_image_home_jest_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_jest_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_image_home_jest_night_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/image/home/jest-night.png */ "./public/image/home/jest-night.png");
/* harmony import */ var _public_image_home_jest_night_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_jest_night_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_image_home_git_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/image/home/git.png */ "./public/image/home/git.png");
/* harmony import */ var _public_image_home_git_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_git_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_image_home_git_night_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../public/image/home/git-night.png */ "./public/image/home/git-night.png");
/* harmony import */ var _public_image_home_git_night_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_git_night_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_image_home_next_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../public/image/home/next.png */ "./public/image/home/next.png");
/* harmony import */ var _public_image_home_next_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_next_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_image_home_Next_night_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../public/image/home/Next-night.png */ "./public/image/home/Next-night.png");
/* harmony import */ var _public_image_home_Next_night_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_Next_night_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_image_home_javascript_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../public/image/home/javascript.png */ "./public/image/home/javascript.png");
/* harmony import */ var _public_image_home_javascript_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_javascript_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _public_image_home_javascript_night_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../public/image/home/javascript-night.png */ "./public/image/home/javascript-night.png");
/* harmony import */ var _public_image_home_javascript_night_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_javascript_night_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_image_home_css_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../public/image/home/css.png */ "./public/image/home/css.png");
/* harmony import */ var _public_image_home_css_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_css_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _public_image_home_css_night_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../public/image/home/css-night.png */ "./public/image/home/css-night.png");
/* harmony import */ var _public_image_home_css_night_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_css_night_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _public_image_home_npm_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../public/image/home/npm.png */ "./public/image/home/npm.png");
/* harmony import */ var _public_image_home_npm_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_npm_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _public_image_home_npm_night_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../public/image/home/npm-night.png */ "./public/image/home/npm-night.png");
/* harmony import */ var _public_image_home_npm_night_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_npm_night_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _public_image_home_mysql_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../public/image/home/mysql.png */ "./public/image/home/mysql.png");
/* harmony import */ var _public_image_home_mysql_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_mysql_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _public_image_home_mysql_night_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../public/image/home/mysql-night.png */ "./public/image/home/mysql-night.png");
/* harmony import */ var _public_image_home_mysql_night_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_mysql_night_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _public_image_home_figma_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../public/image/home/figma.png */ "./public/image/home/figma.png");
/* harmony import */ var _public_image_home_figma_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_figma_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _public_image_home_figma_night_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../public/image/home/figma-night.png */ "./public/image/home/figma-night.png");
/* harmony import */ var _public_image_home_figma_night_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_figma_night_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _public_image_home_webpack_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../public/image/home/webpack.png */ "./public/image/home/webpack.png");
/* harmony import */ var _public_image_home_webpack_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_webpack_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _public_image_home_webpack_night_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../public/image/home/webpack-night.png */ "./public/image/home/webpack-night.png");
/* harmony import */ var _public_image_home_webpack_night_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_webpack_night_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _public_image_home_symfony_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../public/image/home/symfony.png */ "./public/image/home/symfony.png");
/* harmony import */ var _public_image_home_symfony_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_symfony_png__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _public_image_home_symfony_night_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../public/image/home/symfony-night.png */ "./public/image/home/symfony-night.png");
/* harmony import */ var _public_image_home_symfony_night_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_symfony_night_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _public_image_home_php_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../public/image/home/php.png */ "./public/image/home/php.png");
/* harmony import */ var _public_image_home_php_png__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_php_png__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _public_image_home_php_night_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../public/image/home/php-night.png */ "./public/image/home/php-night.png");
/* harmony import */ var _public_image_home_php_night_png__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_php_night_png__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_32__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Home\\component\\Skill.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

































const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  title: {
    fontFamily: 'Roboto Slab',
    fontSize: '2rem'
  }
});

const Skill = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const {
    mode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: classes.title,
      children: t('title')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        spacing: 4,
        style: {
          marginTop: '4%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_javascript_png__WEBPACK_IMPORTED_MODULE_16___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_javascript_night_png__WEBPACK_IMPORTED_MODULE_17___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_32___default.a, {
            mdDown: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.jestLogoLg,
              children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _public_image_home_jest_png__WEBPACK_IMPORTED_MODULE_10___default.a,
                style: {
                  width: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _public_image_home_jest_night_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                style: {
                  width: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_32___default.a, {
            smDown: true,
            lgUp: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
              children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _public_image_home_jest_png__WEBPACK_IMPORTED_MODULE_10___default.a,
                style: {
                  width: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _public_image_home_jest_night_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                style: {
                  width: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_32___default.a, {
            mdUp: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.jestLogo,
              children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _public_image_home_jest_png__WEBPACK_IMPORTED_MODULE_10___default.a,
                style: {
                  width: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 33
              }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: _public_image_home_jest_night_png__WEBPACK_IMPORTED_MODULE_11___default.a,
                style: {
                  width: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_git_png__WEBPACK_IMPORTED_MODULE_12___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_git_night_png__WEBPACK_IMPORTED_MODULE_13___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.nextLogo,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_next_png__WEBPACK_IMPORTED_MODULE_14___default.a,
              style: {
                width: '100%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_Next_night_png__WEBPACK_IMPORTED_MODULE_15___default.a,
              style: {
                width: '100%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_react_png__WEBPACK_IMPORTED_MODULE_8___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_react_night_png__WEBPACK_IMPORTED_MODULE_9___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_css_png__WEBPACK_IMPORTED_MODULE_18___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_css_night_png__WEBPACK_IMPORTED_MODULE_19___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_php_png__WEBPACK_IMPORTED_MODULE_30___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_php_night_png__WEBPACK_IMPORTED_MODULE_31___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_npm_png__WEBPACK_IMPORTED_MODULE_20___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_npm_night_png__WEBPACK_IMPORTED_MODULE_21___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_mysql_png__WEBPACK_IMPORTED_MODULE_22___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_mysql_night_png__WEBPACK_IMPORTED_MODULE_23___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_figma_png__WEBPACK_IMPORTED_MODULE_24___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_figma_night_png__WEBPACK_IMPORTED_MODULE_25___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_webpack_png__WEBPACK_IMPORTED_MODULE_26___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_webpack_night_png__WEBPACK_IMPORTED_MODULE_27___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 3,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: [mode == "day" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_symfony_png__WEBPACK_IMPORTED_MODULE_28___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 29
            }, undefined), mode == "night" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_symfony_night_png__WEBPACK_IMPORTED_MODULE_29___default.a
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, undefined);
};

Skill.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('skill')(Skill));

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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            textDecoration: 'line-through'
          },
          children: t('context2')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined)]
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

/***/ "./component/Public/Carousel.js":
/*!**************************************!*\
  !*** ./component/Public/Carousel.js ***!
  \**************************************/
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
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowBackIos */ "@material-ui/icons/ArrowBackIos");
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIos */ "@material-ui/icons/ArrowForwardIos");
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/PlayCircleFilled */ "@material-ui/icons/PlayCircleFilled");
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/RadioButtonUnchecked */ "@material-ui/icons/RadioButtonUnchecked");
/* harmony import */ var _material_ui_icons_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\Carousel.js";









class CustomizeCarousel extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleTimer = this.handleTimer.bind(this);
    this.timer = this.timer.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    this.handleTimer();
  }

  componentWillUnmount() {
    clearInterval(this.handleTimer);
  }

  handleTimer() {
    setInterval(() => {
      this.timer();
    }, 1000);
  }

  timer() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  handleNext() {
    if (!this.props.rotateBy) {
      this.setState(prevState => ({
        count: prevState.count + 3
      }));
    } else {
      this.setState((prevState, props) => ({
        count: prevState.count + props.rotateBy
      }));
    }
  }

  handleBack() {
    if (!this.props.rotateBy) {
      if (this.state.count > 3) {
        this.setState(prevState => ({
          count: prevState.count - 3
        }));
      } else {
        this.setState({
          count: 0
        });
      }
    } else {
      if (this.state.count > 3) {
        this.setState((prevState, props) => ({
          count: prevState.count - props.rotateBy
        }));
      } else {
        this.setState({
          count: 0
        });
      }
    }
  }

  render() {
    const {
      imgsrc,
      rotateBy,
      mode,
      controlButton,
      navigateButton
    } = this.props;
    const list = [];

    if (!imgsrc) {
      return list;
    } else {
      if (!rotateBy) {
        for (let i = 0; i <= imgsrc.length - 1; i++) {
          list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: parseInt(this.state.count / 3) % imgsrc.length === i ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                width: '100%'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: imgsrc[i],
                style: {
                  margin: '0 auto',
                  width: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 33
            }, this) : ''
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this));
        }
      } else {
        for (let i = 0; i <= imgsrc.length - 1; i++) {
          list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: parseInt(this.state.count / rotateBy) % imgsrc.length === i ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                width: '100%'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: imgsrc[i],
                style: {
                  margin: '0 auto',
                  width: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 33
            }, this) : ''
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, this));
        }
      }
    }

    const RadioNavigation = [];

    if (!imgsrc) {
      return RadioNavigation;
    } else {
      if (!rotateBy) {
        for (let i = 0; i <= imgsrc.length - 1; i++) {
          RadioNavigation.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: 'inline',
              textAlign: 'center'
            },
            children: parseInt(this.state.count / 3) % imgsrc.length === i ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
              size: "small",
              onClick: () => {
                this.setState({
                  count: 3 * i
                });
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_6___default.a, {
                style: {
                  color: mode === 'day' ? 'black' : 'white'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
              size: "small",
              onClick: () => {
                this.setState({
                  count: 3 * i
                });
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_7___default.a, {
                style: {
                  color: mode === 'day' ? 'black' : 'white'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 33
            }, this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, this));
        }
      } else {
        for (let i = 0; i <= imgsrc.length - 1; i++) {
          RadioNavigation.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              display: 'inline',
              textAlign: 'center'
            },
            children: parseInt(this.state.count / rotateBy) % imgsrc.length === i ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
              size: "small",
              onClick: () => {
                this.setState({
                  count: rotateBy * i
                });
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_6___default.a, {
                style: {
                  color: mode === 'day' ? 'black' : 'white'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 33
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
              size: "small",
              onClick: () => {
                this.setState({
                  count: rotateBy * i
                });
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_7___default.a, {
                style: {
                  color: mode === 'day' ? 'black' : 'white'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 33
            }, this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this));
        }
      }
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
          item: true,
          xs: 12,
          children: list
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        style: {
          marginLeft: '-1rem'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
          item: true,
          xs: 1,
          md: 1,
          style: {
            paddingLeft: 0
          },
          children: controlButton === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
            style: {
              color: mode === 'day' ? 'black' : 'white'
            },
            onClick: this.handleBack,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, this), navigateButton === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
          item: true,
          xs: 10,
          md: 10,
          style: {
            textAlign: 'center'
          },
          children: RadioNavigation
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
          item: true,
          xs: 10,
          style: {
            textAlign: 'center'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 26
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
          item: true,
          xs: 1,
          md: 1,
          children: controlButton === true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
            onClick: this.handleNext,
            style: {
              color: mode === 'day' ? 'black' : 'white'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomizeCarousel);

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
          xs: 6,
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
          xs: false,
          md: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: false,
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
            href: lang == 'en' ? './WeianWang_Resume.pdf' : './王偉安_履歷.pdf',
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
        xs: 12,
        sm: 7,
        md: 4,
        style: {
          marginBottom: '2rem',
          fontSize: '1.2rem'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            fontWeight: 'bold'
          },
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
        xs: 12,
        sm: 5,
        md: 4,
        style: {
          marginBottom: '2rem'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            fontWeight: 'bold'
          },
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
    fontSize: '1.7rem'
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
        xs: 6,
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
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: false,
        md: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: false,
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
            href: lang == 'en' ? './WeianWang_Resume.pdf' : './王偉安_履歷.pdf',
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
            href: lang == 'en' ? './WeianWang_Resume.pdf' : './王偉安_履歷.pdf',
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

/***/ "./component/Public/Scrollup.js":
/*!**************************************!*\
  !*** ./component/Public/Scrollup.js ***!
  \**************************************/
/*! exports provided: Scrollup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrollup", function() { return Scrollup; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\Scrollup.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  icon: {
    fontSize: '4rem',
    color: '#8F8F8F',
    "&:hover": {
      color: '#1F1F1F'
    }
  },
  iconNight: {
    fontSize: '4rem',
    color: '#FFFFFF',
    "&:hover": {
      color: '#c9c9c9'
    }
  }
});
const Scrollup = props => {
  const classes = useStyles();
  const [scrollC, setScrollC] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener("scroll", onScroll);

    function onScroll() {
      setScrollC(window.scrollY);
    }
  }, []);
  const {
    mode
  } = props;

  const handleScrolltoTop = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      container: true,
      style: {
        align: 'right'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 2,
        children: scrollC > 400 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          onClick: handleScrolltoTop,
          style: {
            backgroundColor: 'transparent'
          },
          disableRipple: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default.a, {
            className: mode === 'day' ? classes.icon : classes.iconNight
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./css/Home.module.css":
/*!*****************************!*\
  !*** ./css/Home.module.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ball": "Home_ball__2MdUc",
	"nextLogo": "Home_nextLogo__27O8F",
	"jestLogoLg": "Home_jestLogoLg__2rtVN",
	"jestLogo": "Home_jestLogo__2FQON",
	"bounce": "Home_bounce__1a5i_",
	"skillBlock": "Home_skillBlock__1Tmnh"
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
  otherLanguages: ['zhHant'],
  localeSubpaths: {
    zhHant: 'cn'
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
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\pages\\index.js";






const HomePage = ({
  t
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_5__["NextSeo"], {
      title: "Weian Wang | Front-end developer",
      description: "I am a front-end developer, open to opportunities.",
      openGraph: {
        url: 'https://weianofsteel.com',
        title: 'Weian Wang | Front-end developer',
        description: 'I am a front-end developer, open to opportunities.',
        images: [{
          url: 'https://raw.githubusercontent.com/weianofsteel/saliejung/master/public/openGraph.jpg',
          width: 800,
          height: 600,
          alt: 'Weian Wang | Front-end developer'
        }],
        site_name: 'Weian Wang | Front-end developer'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Home_Home__WEBPACK_IMPORTED_MODULE_4__["Home"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['header', 'banner', 'footer', 'skill', 'learnByDoing', 'sharing']
});

HomePage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('header')(HomePage));

/***/ }),

/***/ "./public/image/about/avartar.jpg":
/*!****************************************!*\
  !*** ./public/image/about/avartar.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/avartar-363832ec308a8456a3f66989d21ee96d.jpg";

/***/ }),

/***/ "./public/image/gif/gif10.gif":
/*!************************************!*\
  !*** ./public/image/gif/gif10.gif ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gif10-c3f6e87be5ac3f4b210ae99418465bee.gif";

/***/ }),

/***/ "./public/image/gif/gif4.gif":
/*!***********************************!*\
  !*** ./public/image/gif/gif4.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gif4-ec27d13e452f58ced665511d8bec650b.gif";

/***/ }),

/***/ "./public/image/gif/gif5.gif":
/*!***********************************!*\
  !*** ./public/image/gif/gif5.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gif5-a8ad19d7699e5ab7090dda4a8d8252f8.gif";

/***/ }),

/***/ "./public/image/gif/gif6.gif":
/*!***********************************!*\
  !*** ./public/image/gif/gif6.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gif6-e49baee6727aff87ae80a12e68af3840.gif";

/***/ }),

/***/ "./public/image/gif/gif7.gif":
/*!***********************************!*\
  !*** ./public/image/gif/gif7.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gif7-d41f95dbfbb03421930f0f06d4ef12cf.gif";

/***/ }),

/***/ "./public/image/gif/gif8.gif":
/*!***********************************!*\
  !*** ./public/image/gif/gif8.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gif8-1a38cb987f87a98384dd838eee1a1dce.gif";

/***/ }),

/***/ "./public/image/home/Next-night.png":
/*!******************************************!*\
  !*** ./public/image/home/Next-night.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/image/home/css-night.png":
/*!*****************************************!*\
  !*** ./public/image/home/css-night.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACWUlEQVRoge2YvW7UQBSFvwtpUCCQICFq6GgoKGkoKKDKCwSKCLogXgYprwB1hAApUijgDRAUSLRAfoskRNldcSgyEcZaj6/t2c0umk+aYjXXd87xnb81ZDKZzDRhdQGSDoDZMWiJcWBml2IB5xxJfiYS04VaDR4jmwmEdKVWQ67ImMkVKZIrkpBaDTOOJLG38cXMbvn1VCNpF5hvoQHoXpGrjudrkWTAXEsNQPc1shBEdGUOON9SA+Azsgv0K/pmgMuOHHVcifT1gb26BLVGzEzAViRkT8352sDIZtDQzUgg9c61U/odM+Ia22sk9VnSxIhr7P+mIp5zBJpV5JmZvWgQDxNakegfoApiO9+ZrZHURqaqIhO5a604zpGl0jMTuUY8lE/qsa6R3xV9n6wAcNuRr2ykqiICtj0CXUbMbDBk8FPKt9ZfjpReIztmVnXP+wdvRaB6rpaNbAGvgd6Q2F7o+16To5grLZI2KhbuYNhVXtK8pGVJ70JbljT0j5OkXkXujVEYeRXZhS52yDsbyfvSm6fJ1IrtHkuSYlvoUMIzjyIh7m0/xRoBWAW2JX2Q9FzStarAMOUeS1rj5OWsRvKm//Ah6WlkCpQZFExdl7RwKl7ScYM8T0ZhZLGBgCL90Nqw6NXnvcZD+zI3GaPMD29gqjUyKkay2M/ii6PbiLvsZnYo6SZwP7QHtLuyxzgCPgLrwJqZHbr1tR1R0gXgLn+N3WmZ6hsnwteBt2a23yZJiq+EAEi6ga9a5bf+OcX4yYwUCdW6BzwMDeBNaO/N7GgU42Yymcz08Afy+Wetu+tA+QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/image/home/css.png":
/*!***********************************!*\
  !*** ./public/image/home/css.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACNUlEQVRoge2YvUocURTHfxtsZONXhGAnaGeTV0iRQiurdCaFRCtDSgt9AF/BNzBpQwiSgBbapQykCKmjbhZB1JB1cSxmxPUy99wzM2eWldwf3GL3zj3n/Ofcj3MHIpFI5CHRUDxzDjTrDkQRw4j0wCOFkWObWCoRjEEj5MQgkKoEY4gZ6TMxI73EjBhSe0Z+kJ5FFu20ZAxA9YxMKsZraACjJWNQMwkknnaFrjoIMSb4SIAnBj5oAB3BybiBj2nBfgfFy9JMrQRoCf2nQhC+9tOxIb2Mk2yMiEYI2O9cbee3JETlWyvE+iwpIkTlO2ZE4C3hM+O1M2YgMyJegDyMVfVdR0ashTyojAzkGlkjfI4sOWMGco1ocAvEvq6Ra0/fd+7vSM8U9lwhvowkwB9NgFoh3Rznt7hV66XCnlZIm7QwDaIVAv656gppAZ9Iiz2XTtb3O2Cj15Y5e+Qv3C751ekEsAzsZm05+y8PX3W9Zxf+He89zhLgcQW7TcHujtZIkakl7R5LlLuXjAOvhP5aPnxsIp8NXeAAeAc8FexMkNZaH4F/AZsbNehgJeDUJ2qK9KqqDb63valDyGKBANx7/VXJsYva4IYKCCl7uhfx4XKkfdDiHKkTtU+rXasu1EKKpP0CmAVeZG2eciW7xF/gEPhKujFcGNvPZZhU0BbwjXKLOQF+AdvAS+xfTClmgFXgA3CGP/BL4AuwDsxZObf43JnHMPAcWMgawOes7ZNOoUgkEvmPuQFSBAfVEjh8ZwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/image/home/figma-night.png":
/*!*******************************************!*\
  !*** ./public/image/home/figma-night.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEFklEQVRoge2ZTYhWVRjHf8eZGiuzBkm0tBIGo5wWuQgt6IMKQ3AWIdmioiKphRAkFEGLFkEUlEFGkERERDWQ0EKICqYPm0YoRNtYbvwYa8KQUknHyfm1uO8w571OM+e8c+8o4W915sx5Pv73vvfc5zwX/ieEKpyoy4BlwEJgdqb5H8CvQH8I4a8q8slCbVfXq3uthmH1E/WGmRQxT+2rSECZEfXZ3Jyyf1rqZUA/EF+5UWAXcBAYznTZCXQDC0rzG0MIr+Xml4z6cekKvqcumqbPWeoadV/k9x/1lqryLgdcoY5GwV6o2P98m5+576r0Hwd6OwqyXa1k1yvFWFm6WNdXHYPSrV9XeYDxODuiOE+l2MzKcN4GxM/CjtwEMxiIxtekGCQLAdpL63N3pxxORuOkF2yykBDCMHA4mrou1bYF4ufiUIpBzh2B5lv+UKZtEupC4O5oqr+OIA+U9vk7K/Yf1K1RjENqe5UxxgK1qTujQEfVtRX57lQ/spn1qfatlCjLga+AS6PpH4BtFFVsLh3AjcBainJljE+B+0IIoy34TEN9zHrZps6pTUBDxOPq3zUJOKI+bfHOyiLrp6VuAN4oTR8D9gATHYqWAlc3xgeAX0r/nw9cCfwMbAG2hhCO5eSUjXqzxVlhjN/UB9ULJ7HZFK3fFM2vUgdsrqmOq++oV9Ut5Nso6H51cYLNGULU50sCygypN9UlorsU7PZEuyYh6rpJBMQcVC/PyTH1zX5XNP4xhPB1TpAGbcAriWsXARtznKcK6YrGrR52VjL+4Kdwf47zVCHxuhM5ASJyi8wu9YLUxalCDsQB8vKZGVKF7IrGq9R5LcTak7l+bwhhJHVxqpAvGD8XzAFaadMMAPsz1vfmOE8SEkI4TfOO87D6lnpxRqzTwDOJaweBVzN8k1PrbwZ6GN+KnwR61A+An2g+no6xNP4jhNCrdgEv8t/l0RCwptY+sDpX/TLxpVYmLlHuUb/3zBJli8UJsX7UnukKiXxdYdH061Zzu/hNZB0jLXpZ75emR4B9wNEJTBZTVLgTEkI4THNDo37ULvVYdIWPqBvUuZPYTFj91kHOHXmdYusF+B24LYRQPl+cNZK2X4uS/d5o6pFzSQSkvxBXU1SvALtDCJ/VlE/LpAq5Nhp/U0ci0yVVSNymOZ7hvyMan8qwyyZVyFA0XpLhP66UW+l5VYvFZ7Ex/pxsy41sFqgnI7tbZyLXqZK6qCFgjDcTbD6M1g+quQ3zelCfK5UcLznBCU6dbVEZxzxRd37JDbpGLdQHrIim9wLvUlS/AVgOPErzV6bPgdWNo8C5QeN3v9N0tqudU3s+C6iXqJvVU5MIOKG+rHZM7bEaWv68rC6haNncQdGHkuIo2wf0hhAGK8nwPOc5u/wLuex9lnV+tKEAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/image/home/figma.png":
/*!*************************************!*\
  !*** ./public/image/home/figma.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADvUlEQVRoge2ZW4hOURSAvzGDwbhMMg1mXGoaYTzwIJdySRoJD5LxIEnEg1IUKcWDEuVSSJk8SMIUNQ9TRLnfijS8uLxgBiMSQ+63h/Uf/9pn5h97nf+cMWm+2rXPmb33WmvP3uustX74T8iJaZ3RqTYQyDfOfQ08B64B72LSx0QesAJ4BPyKoX0BTgKj2tOI/sD5mAwIt2/ABqtCUY5WX+QY6J37CdQDDcjOWigEKoDi0Pt1wK4I+nlzAncHDwMlWa7ZBZgLPFbrfgcmZbluRiYgux8I2xLz+kW4d+5qzOv/4aAScoX4vJ5mIu5mjUxAhvOvr0pCQIqbSs4anwldDIvn4t6Fm4a5Vm6o/lCfCRZD8kLjrd7JwmfV9/rAWgz5ArxSzyMMc63oe/EsCQG1pM/uoSQEIGHORyVnehJCFuH6+biF5ACnlIxnyJGOnVzgjhLUDCyIae1C4Djux3aF7+Qo34FxwAWgt3p3C6hDolgr3YExyIYUqve1wHzkm5IYy0gmYAxaHVCQpAEAy3EvY5ztDbAWOcImrEdrNbA39O49cJ/Wk6JyYEiq/xR4GPp7ETAIeABUIxf9vVEnM+ORXCHYvRfAYqBbG3N2q/G71ftK5OutY6oPiEsfHLfiYS4roU+AUo85rRmyCdeAcGsCxsapuKYiJGyq57ywIVX43ZUGoJ9FQd8QZYbq3wYuWoSkyAV2eI4tQTJEb3wNKVP9qMnORNIX34eFlsV9DdHjPlkEKKxBZhnQ1XewryFPQwI6HL6G1Kt+JVIOsnLfOP4R4u698DXkLOm8oIBoZZobiNv2pcayuK8hP3A9zhLgANDTIOsHsN5zbCOw07C2KdbfB8wj7YpXpZ6PAvdw09OA8tBzDXLHtpI5PGpCalyJ1oH7AOeIFhDqEGUmcJ2WIUo1kiG2C/M8FW/LkIABSNGvAnsV38GaRlYBR0LvviH1ruZWxpciEW4mXuEWNNqFMiTE1rnDauS4ZSJT9Bs7lv/IHtJZ20tgCi3zi3+Gr/stBWap56V0ICPA35DZpNPPu8DpZNSJjq8hw1T/UhKKZIuvIbpM88GwfnfV/2qYZ8bXkCbVH25YX0fKUWpesTOXtBt9S9suN6AYCVuCeZMT085AD8SAQKn9HnOOqfGN2Cr/ibIRN+TYRusZXD4SGeuxK9tJRy/ykUBPK/gQMXAOcvw24/489ws4Q4TKYdIU41bj/9au4Hq8DkUvJDf5SmYDPgHbcd1vomTz8/JwpGQzDalDBRXI80gC1Zi1dp108u/5DUeybWaYVmkAAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./public/image/home/git-night.png":
/*!*****************************************!*\
  !*** ./public/image/home/git-night.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACbElEQVRoge2a0WoUMRSGT7y1Wtq6q30D7VZ8gWJRX8CLurRUfRKv9XFEL7zU17BSQRQKLYI4215/Xkxio5vNJDOZSaz9YWCYbP7k4+TMSYYVudR/ImACvAVmQAW8ATZyzytKwLYG+FszYDv3/IIEbC2AMDoDHuaep1cBEOXDAPeB0wAIo9OUy+xKKiMRORGRKuL3V0XkXTGR0ZHY1PebwHFEVJJHpi2EyYkT4K5+dhs4ioTJlzPMJ/a/B0NdJ1yJfcz5MpsA+8ANYARMgS8NMMMtMw/EHIyj72oRMAEQRs88HrsB/fuDiYAAGHl8xoEe6WEiIQDWPF63InzSwbSAAJh6/J5HenWHaQkBdUKvLvActmh2gDD6DOxafnvAZFAYwnexjbI8YciimRLCAQJDwNB9Oc3JAQJ97gC0YbJIGC0AAf8OYAU4aLCeYX0DsM8jr0RkyRuytBqLyD1Xg1Lqh4i8aOi/JCIvf/cxN8BMegBRSintj6N5pJT67uoHrIvIUYN9pZRaFvkzIq6B+layMW2QD6lMI/TI07YV0P/93BNgg2GTHeq304pjLiHJXgF3nHgM9/q1dQDsAOv6egJ8arBtrvLUBbFKAQFBILE6Ax4ELLu0MIlBwiESLrNDYN/ye0q9kWyrLDvgQ2Ds8Lup24aD6AjjO1iFnNnTQliDx+ZMijM7tMmJAJiYyFzz+CwHehTxJeWxx2OaFSIS5iPuir0GfMsOEQnzlbpKX9fXtCgICybpDoA+EjsDTD6IhDD5IYw6wJQDYdQCpjwIowiYciGMAmDKhzDiIvyFw4j6G8BrHZ2f+t59xr7UBdQvWHzF2bd2nCcAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/image/home/git.png":
/*!***********************************!*\
  !*** ./public/image/home/git.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACLElEQVRoge2aW07cMBSGP/FOEZcW2AHMwA5GoMIGeKCjotJuEcoCYBtQUQlRCQneYODZfXCOmEaJfZxxHIfyS0eKkvEffzo+8UUD7/p/NATOgAnwBPwEBp32qIF2sQCmFJPiWS80ohpC4gXY66x3SvkgegGzAzzjh5B4JtNhtgHcoQfJLjM7wFZxvQXcEwaTRWakJh6A7eJe7zJTLuxewuxSXdj3vA6zIfANWAE+AmPgpqJNZ8OsDqIKpqwlMoHxQUh8d3h8VbRvFUYLYbBDqU6flB6twIRAGGDZ4bUW4BMVJhTCYAu7Tj8CvaLANIEw2IJeqvFMPmk2hZD4jS1s0RH2k5wURruK1YTIkHjSjAlRBkkGM+tw0oAYWl4BDImbCRdIGaasReDK4zuh5gzgrAUIF4jBZqJOXxTep1UN28iGD2TFAbKu8H6UH8+VXpRa0d45DXIRyzRA+45nI0X786qbA9IWu8F+nRYr+qIp9idgs44w1ed3Oq6AQ2xNrGOL/JfHUzXLjwraVCCh8QJ89kG0ARMTJAhCNOswu+bfeeIYu5Bs6tfJCvgauxMsa7V4lhRiFhjXxkqzZ48OIQqtmRh79sY14VNIZuYdPgtKjyxOUg4cHmNF+2zOti6pnrGXgT+etlmdNhrgFjtLfyhinBuEKPYKoJXC1ioWTKcQollhsoAQNYXJCkIUCpMlhEgLkzWEyAfTCwjRm/gLh2gAnGCz81hc1+6x3/XW9Bf1Vqf7iYkFugAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/image/home/javascript-night.png":
/*!************************************************!*\
  !*** ./public/image/home/javascript-night.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC0ElEQVRoge2avWsUQRiHnzfqWfiRIno2ipB0xkKwVzEaDEQLra0tLdOJnf+F/4BYKWhMFEJaCVaCGJsUiSbgByTCkcjPYjfhmJuZ7G52L3u5PDAcOzcz9/7mfefzFg6pOZIeSGqpvrQk3XftHvBoGQUa1XdZYRrAZTfTJ+RH9bbsme9uRq8KWXUzfEI6CtWQjs7uVY/0kRAzWwc2umJOMTbMrMM+n0eg3uPEGzEhIYXCyxx2+z4GcGrfhJRMM5DvjZY6h1ZIyIHxiNe2o3kKl40kFajWcx4JcWCE5BrsdRaSyyN1mLVC5BLyG2hVZ0thWsAf3xdeIWYmYK1KiwqymtrWQWj6hcSF56uxZ4efwGJb+pp+fgOWPfYFQ343IZViZkO+fEln8NvWccTdJjRGYH9nrlz7LOg9IUGbYkK6NgVLuuhknQ0UrccYkdQkuZNqT6MkHdp+/sjtkW4P9lCbS85zqaEVqjQCPAJeEFicCvDLec4tJIikpu/i1SnTkHRD0jNJC542srAk6YlT72WgbEhgVMiApM2YkAxt+PgraUbSlKSrkjrO9pLmPfW2JMUiKGrISslCxiQdz1Dvi6ducDGE+BgBT0z6ejArZvbezLJsRn0hFB0fsVkL/PP2iqR3wDQwY2alrDeShoAxYBwY9BTZkxBf5XPAwzQh6TPwCpgF5jP2OJKOAFeAW2m6DhzLacsORYS4XErTFLAu6QOJt6bdgpJGSHp8HLgJnM7Q/jZRz5chpJ2TwL00+VjM2V475Q72fSRqS98IqdMlRNSWvvHIGvX402eDXS5DokLMbBOYAJ6TXAZ0m+X0tydSW4Lk2m5IGgbuApPANcp/seAf8Al4TbLILoSuf1wK75sknSBZ1CZJvHahYFOrwByp8Wbmnk26i6RhSY/TLXrsXZYtSR8lPQ1t44tQSiMukgaB28CdNAG8Ad4Cs2ZW1snykNryH53wi25kYSYPAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./public/image/home/javascript.png":
/*!******************************************!*\
  !*** ./public/image/home/javascript.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACnklEQVRoge2av08UQRTHP/zIGYNIDHA0JibQCZ3/gFFDJwVa21JSmesMHf4LRjs6DX8AmtjYGqOFhRFDQggIJBISDnJKPIq5C5u592Z2lt1j7o5vMrns7Ly33++8N7Pv5g6uED+eADWgHmmrAfM26X5ByDRQyjwNxaMEzNidkpDd4rlcGL/tjk4Vsmd3SEJaBkWIlsnu1Ij0lpAjoFo8l8yoIvCThEDc60TMGE1I1vTqs5rvvqsNh3DLW0ieKCv9YrbEnFqakK6JiMhtMGRwAahnsOm4iGjoGiFBiz1mIUERiWHX0iAKkV5azf4T4FrgQ2x/9mL23fehBlyX7LSI1IH9wIe0A3so4rXtF0wIbxdC5xx/gPVE+9n4/AVsC/zUlPcJKRqjSv8YMreWr7hNaKkFl7tzBdVZ0HlCVE4uIe3cgu9Y1+PKuGjWSBlzJpVs05gJHbbGBXFqtxDN56Z1nWtqaUZTwALwDjh02IfgwLoOFuJCGfnsNYkScB9YBr4IPtKc5W4CLyy7VWWsJtCJfuCfR4gPEplj4ANQAe4hl0mfBLtT3BnkxI7gMAS27UPS1W8/BFv1ZZgGXwWHWqEpIeskHAi231wGrl0L5H17B3gPrGFSJK/3zSgmYrPAiHD/QrvoCv7F+h14CTyiNW1cERnArJEKZkL+ep6z4iLqi0iaWbjbaBXMcetHTLTWhLFTmBmfBR4AN1P4b8IZ+TyEJHEDmGs0CeuB/pJwLnbfdhbTd3cnl54REtMhhJNLz0Rknzh+9KniOQwZ8Dj4z3ndM4H+m0VR2MZU2c+BjTwdTwKLmBdYEf+OOAU+A0voBWXuGAIeA68wpXhW8rvAW+AZcKsdxH1IG61LmfWsGAGeAm+ArUZ7jfnDjlQQXqHrcAa4Kye+1x5zOwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/image/home/jest-night.png":
/*!******************************************!*\
  !*** ./public/image/home/jest-night.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/jest-night-9ea7402a3f462ebb6adc612cef2f85cf.png";

/***/ }),

/***/ "./public/image/home/jest.png":
/*!************************************!*\
  !*** ./public/image/home/jest.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/jest-546fdb2228b4c0aad84e7c0486cf0aeb.png";

/***/ }),

/***/ "./public/image/home/mysql-night.png":
/*!*******************************************!*\
  !*** ./public/image/home/mysql-night.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEw0lEQVRoge2ZW6hVRRjHf58dFTS1UstILKSLQpGmZmVZlokhaEEEaVBZGigK1UPQSxIkiXjpoYsWkbegF+2CRCqZlWWp3cgsDQTDF7PAvOT918Oancvt2Xsfzzn7aLR+cFgza/7zzTdrzXzz7XWgoKCgoKCgoOD/itpXnaD2r4f9dvUw2kLeBq4G3lffVa842w7VFfVTtavaoD6h7lI3qcvUB9SGs+1jq6KOUheV3euljlZXpMkPOFv+1QV1vjoulbuqI3Jtw9Xt6tSz52Ero3ZW1+fqr5a1X6CuVue3vXd1Qn1TvTWVTwuuakd1pTqj7b2rA2o/9e0ami7qltLy/8+jLlGH1tBclyJ5z7byq26k6Ly+Cbq56qy28KmupCW7sgm6y9Td6vm1tOdippVnCPBRLVFE7AJWA5Pq7lE9UaerI5uovV79Te1QTXeuv+H2wHEAdZZ6USVhRHwP/Ag83Ea+tT4pd56odlePqc/W0A9Td6o92srHVkW9VH0n5dHr1LVq1xp9nlJ3pMjdq618bTXUl9Q16jx1pDqzCX0a1LGp35i28LPVUNur40vLVH1MHdjEvh3U59UX1PPq62kdUQeq3WpoOqoj1MnqqlJiEqnxQqA38EtEHKlhqAdwMbA9Io420+EALge6V5BsjYiDSXs50FgQCuC7iDhWpjsYEVvVn4E9wBJgK/BNROwv/SopsUPtXcXRieqRpN2r3tWMyT6j/m51Bqk91fU1dH+q45PdBeneplQfaXYujyl34FgSHk3XBRUc7ab+VTbgy2c42eG5vo+YvelK2ueS7qB6c1lbF3V5aj9k9pHglAkn3WD1W/V1U0LSDiht5hXp+pCNH/CTgC7AbmBLunem35euyZUXR4RVtH3S9ceI+DLfEBH7gDmp2pFse5xGRGwCbgA+BGao7fKZ1hqyTKUT8Hi+o9mHs2mp+jJwKNfWJz3dBWofysi13QacyDVVPU9zHK9w/1iuXHGlRIQRsRyYBVxb/obmA28AU9Q5EVEa7H6yJ/438AowNtenJzA5lRcCO8tslto2A2uBA0BnYKG6Jqc7DPwEbI6IE9Sm2uo4jYjYC/xQPuFlwEyyJTIOWJ7uP5muiyJij57RWPlBt6tDgClkS630MBqAfmTL8wv1jiaYa5YTp/x4iIhDwGupOh2y/BS4kWw5zmvOIGVjbI2IaRExLCIGp78BwINJcgvZ5GvR8gknSnv0dvV64Ol0/72I2NacQZpIfitU/YnXEk6bcETsBt5J1dmc3K9zK9g4nCt3boEvl+TK+4D9qdxX7Qyg3qNuVDcCE3L6Q8DeVO5plTSy0rEyOxm8O9XXRcTnFbQ/AR8DdwJvqWs5NYL+S4rUDzXS1B4YncpLI2Kbuhh4lCyr+0L9imwZ9wCuAAYn/QbgV7L/SU0lC65fq9/SSIRvIIuskKVfAETEFrMvDfcBf3ByX5dYQRZ1P4uIE+qo5PBQTn1T+RVUbc8dARYAayJiffJhs9oPeAC4Mj0UgFXJ7niyI/SDFNW/U68C7gX6U2FbVDy/moraKQ3QmO27gBdTfUREfNLS8XLj3kR2jDYA8yNiaWvZrjXwoEqJrnpA3aBOqG2poKCgoKCgoKCgoKCgoKCgoKB5/AOzY5Oe+OuuRwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/image/home/mysql.png":
/*!*************************************!*\
  !*** ./public/image/home/mysql.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEWUlEQVRoge3ZW6iVRRTA8Z92VNC0m5ZRqEhXKiq1rI5a5oUu0AVCSIPKbpAlRA9BL0VQJJLag5UWkregF+1CBHXort20tEwrgyDpxUow837MHtZs9ud2f3uf4zn7eJLvDx/fzDdrZtbMnrVmzWwKCgoKCgoKCrqI4462AlUYjhvQij87u/Gend1gJ/AazsFbeAPDjq46jecTDEATHsDvWIPlmJK+H1NMxuKKb4NxHVaKwV/S1Uo1mnm4OaUHYHymbBw2Y0ZXK9VI+mFVJv9iRfmJeF9MzDHDIoxJ6WrOtQ/ewZNdplGDOU947Fr0xw/Ky/9/z1KMriNzkfDkgxqvTuMZ7FBbzmMOZjVYly6hv7DTepyBrTi+nmB3DC2zjMEOfFlHbofYm0/HF41WqpHMxMQ2yl6MLehdS6g7xtJZeuFASs/CyTVk12MD7my0Uo1kCqbjFHF6eryOfDN+w8A8ge5uw9vwkHBIQ8XRcSX25shvQQ+8kuTX45/Gq9m5PI8WzBX2/Ewb6jThplTvxsap1hh6YaryMr0Hl7axbm88hael1dzdlzT8i++xK+W/FdvPbvlLm4i1m8WETcIFaOmRCk/CmfgJ++ooMBCniiPa/vbrj7CzocIZVWOT8gCHqu6EemCdcGZZuV2p/o/iimhpyn8j2fMiHEzPr2LgeUwXE3IQ2zGh3siq8Bj+yPRZ7RkpYuNVdeS2ieUOC9K3NSk/UTixw2y4NQnuT+8FOYqegL8rOpzfzsGOy9S9S/xKeTyR5Hbhyoqy/liRyveIS4LKAcMoYQIvSwFJT2U7Xpned6i+wd+XOtoqjmS0/37p3Ex6SVIwjyHpvQGfV5TtwHMp3Ucs52qswQi8K87NPbORVktqvC/urajYhIdTer6Y1axiC9IzxOGUysYKB1RiQI6SlRzI+d6aSddaKQfFapiFCyt/oXli035QzGCps9vEYHbjBbHHlRiE+1N6oYh0spTK1uJD7BRXOAvFJJfYi41JLjsxtQbSHrbju8oBLxcb+1Bxi7AifX8kvRfr2OX4ZlwmJnSE8mQ0iRuOPliNa9rQVnsHjMMPD3vwUkrPTO9mXC5mfe6RdFLBJmEezcKpjBJHu9tT+VVi8PXolAFTttGrxZHr0fT9Tfx8JJ20kawp1DzidYRqA96K11N6trK9zslpIxvt9OuALqdl0juUg/7hmXavx9fpmZaR3yNslPApuRFk3rYyOzU4KeU/xmc5shvxAa7Fq8IxtebIjhXbXiW9xD8LsEyspCW4W0R1q8Wtx0ERTQ0TpkDccPwibjhnCOf6ldh/D/PwTcJbErZV4gcRqdyKv5TtusRK4U0/FbY9OSk82qG/VHYF1bK5fWLralG+tFsrbHkKzhKTAu+ldqeKLfTtpMM6nI1bcL4cs6i1f7WVvqmDam1PwLMpPx4fdUJ/Ja4Q22hTei/rxLZrMlJ+rLtTLLlpubULCgoKCgoKCgoKCgoKCgoKCjrIfz5h908i2da4AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./public/image/home/next.png":
/*!************************************!*\
  !*** ./public/image/home/next.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/next-a725f5cb51998c30c03a55a98aa003df.png";

/***/ }),

/***/ "./public/image/home/npm-night.png":
/*!*****************************************!*\
  !*** ./public/image/home/npm-night.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABbElEQVR4nO3YMUoDURAG4P9pUJQIUQym0EvEJpUewF6x8Q45QI6gpY2VrZUWHsBOLIS0tuIN7H+bIOOQXTePTaZ4/weBDG/zz2PgJdkFREREREREREREpCSJJKM3EWktegPRih9Ax9XvAF4ycgYALk39DOAjI2cI4NTUdwC+M3LqnAA4/q34101OIsmRyznPzBm7nKOcnH96XNsGxR8BDaDphSTPSH6a1zCnIcmJzcnJmOU8mpwnt3Zr1t7qcvyXYJ1tAIem3lzgs9auy8l1YHK+3Nq+WUt1IToC0RuIpgFEbyCaBhC9gWiL/Ay25R7Aa0DfuVY+gJTSFMB01X2r6Ai4ukuy6l/anqv75tp+04YkewB2KpZ7rh7UPLHasO/dvrfM+3W31rUhy3okdpFSepi3MLvlHi+hZ5bij0DxA+iklGrvlppyR+mK5KjiUvvIC231z9Va89zvkugBFH8Eih+AiIiIiIiIiIiU5gcW77skHstGygAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/image/home/npm.png":
/*!***********************************!*\
  !*** ./public/image/home/npm.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABUElEQVR4nO3YMUpDQRDG8S8alEgEFUNS6CViY2UOYC/YeAcP4BFMaWPlDbTwAHZiIdjaijewfxZaDEOy8oYXRtj/DxbeZpNvloFN8p4EAAAAAAAAoCY9SU32JjKtZW8gW/UN6Lv5q6SnQM5E0rmZP0p6D+RMJc3M/FbSVyCn5ETSkX2hMWMeDD12OWfBnEuXcxjMKbm2Nao/AjSgxXtPJX2YMQ3WvHI5Ufcm48Gt3Zi1l1KI/xIs2ZJ0YOabLT5r7bqcqLHJ+XRr+2atVwrhCGRvIBsNyN5ANhqQvYFsbX4Gu3In6Tmh7kIZDXj7Hf8CR8DNh1r+L23PzUfmvaMWNXckbRfWrImWP7HacNd23wNzve7Whj6oWcEo3Q7PV1QzNKo/AtU3oK8/7pZasGf1Qj9PiRaZuXlX9UO6LB59vJ7agOqPQPUNAAAAAAAAQG2+AaXbZE79/a1rAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./public/image/home/php-night.png":
/*!*****************************************!*\
  !*** ./public/image/home/php-night.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEsUlEQVRoge2ZS2wVVRjHfx8BFBEh1FqgPAxdaKy1aC2aIIkGJTEiRl2gmGriylc0EOMjutBEV4p1YWI0aoIrSUQhoi4U0rixKBQhYImiMRFKK61WW9BeH38XZ257Onfu7dzeuakm55fc3PP8HmdmzvedGQgEAoFAIBAIBAKBQCFWLcGSaoDlwGKgDqgFZgNnAedEw84AI8Aw0A/0AceB78zs52rYlYnDkhYA1wGtwBVAMzCvQrG/AAeBA8AXQIeZ9VYoc3IOSzKcc7cD64BLKjUkJUeAXcC7Zrav6tok1Up6TNK3mnq+kfSopPOr4ehCSe2Szkypi8mclvSS3GNVsaMzJT0haTgDwwYltXi/wQxk+gzJ3X0zJ+vsxZIOZGjQJ57spRnKjXNY0qXF/JpWxNlbgH3AikmtVjJfeuUrM5QbpxH4XNK6pM4ChyW1AdtxMTNLfIdbM5Yd51zgfUkbS46SdIOkXJVutcWent1V0hEnJ2lNMWdrJfWlFFRfYtHqJG2Q9LU3vqfE+NmSGiStl9TpzVlfYs5cuYvzaQpbe+WyvgIhb6R09lQxQ2Ly5kg6FM3ZUcacU9GcZSnGT5O0LYXNr+XnWDSxHvgeSLOl7zaz66N5tcBzUXsOOAa8aWbDUf+twHvA02b2fNR2DdAWzfkD2GNmOz0ndgGrgPlmpqitHZd//4PLtbea2fGobynwA6WzxhFguZn15JU8mPLqStIWz7gbE/q3ev1Lora1XtvLsfG/+ZbJPd8dXr02QceR2JzeFHbfD2O79OoSqxPnoFdOClsLvfLZgHAhLs/K2PiBWL2pTB15PROxGsYcjgsoxUTGfOaVVwLH8kc9STMS5oyGK0kNuGNkah2SLgLmprC7HmB6ioE+OaC7iDF/Ax8B7V7b3YyPv03ArJjMTq98VfR/yGu7PDZ+P7DZq99T2uRRBGMOFw0bMbrNLOfV78DdJSNAj39ol3QbsBbY5I2P384Ae73y1cBfwGGv7VlgC25B+8zspKejEXg4pe0nRkuSHkjx0I/bkIohd+B4SNLv0ZxVXt9bMXk5SbO8/r3xDamIDpOL2ydT2i1J98HYFd6BuxUnCkujz5akZsZuwZrotwy4FvDPqK3RlQD3VsRnAGiTlK+vwKW1eR2LcC8YAM6L5C7CbUAXTmCrzwiwc1yLpNdTrNIab/wrZaxuOTzu6bg3I5mv5mX6h4cncS/RSuHvnpeVscLl8JVXbspAXi/wVL4y6rCZDQB34XbiJE6YWb9XL3rmrBB/h65URw7Y6G+mBemYpDuBtykMWaeBo1F5GoXhIgsEdHn1RtIlFUn8CbSZ2Ta/MTH/lHQT8A7uXPl/ZAjYYGYfxzsS33iY2Ye4Z7Qzqf8/zn6gJcnZCZE0XdIjkn7NaLesJsOSntFkX+LFHF8g6UVl8/Yya4YkvSCprmJHExyvkbRZ0tEpddHRLWmTpPnl+DDpb0uSWnCfWm7G7aZV+zCXV4nLsT8AtptZ1wTjE8nqY1odLqVsxYWrZlyqWQkDuESnC3fi6jCznyqUWdXPpfOABmAJ7ox7ATAHmMFYuBvGxcshXJbXD/yI+1w6WC3bAoFAIBAIBAKBQCAQ51/yBjlVGenrZgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/image/home/php.png":
/*!***********************************!*\
  !*** ./public/image/home/php.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEH0lEQVRoge3ZW4hVVRjA8Z+hVtpFmibvWUkYpKiZ9mBCYReiKOolCiroqRt0IaqHHnrILnQxIoiiAh8ieigMohczxJesJkvTjG4ESVpeMp0uM5XTw7fPzJo9Z87ZZ87Z5sP+w2Kvvfda3/q+vdb61rfWpqKioqKioqKioqKiomIk40qU3YWzMAtT0Y3JOBaTsjJ/oA+92IufsRPfYX8ZSnXK4Gm4GEtxHhZiSpsyf8UWfIaPsQG725Q5ZsZhGZ7EdgwcobQNT+D88k0MuvEAvinJoFbS17gfp5Zh6HSsFnPu/zY0n37Hs2Jatc1EPCScSruKHcCSJB3osOGHxOibOFZjzxEOo1MKrUtkn95hY9O0DfNbNfYanenVND2WyL+uRINrvX1VUWNvwj8lKHFt0sbjJRs8gL9xYzNjL0V/SQrMStpZfwQMHshsWTmasd0i0ikiaGaDjzYV1+PLpPxPDcpPxlxcjU1Jnasb1DlZdM77BXTdLaK+EbxS0Ng9DRRJORFbszprW6izJ6szp0D5Y/BmAZ1fqlWohZYz8b1iLn09Lsny3Xg0y/fjW7wqHB4xb9/Gw1iVPbtQ+An4Cx/gnUT+u1iOUzJliRhgEg6LWHtNdiU8/g8ah8l9Iq4fHGl3Kj4vnkkEXVHn/Zrk/ezs2WXJs+dy5Q/mlFsv4uYa3XXa2J6rs7uA3rcTQwJW5D9JA7Yk+UV13k9P8sdljfUkz5blyu/L3S9osY1aO81YwZDBeQGNaKbMxiS/TAzz2lZvQp06nyT5uaJHW2ljnnBizZgJ4wsUTOnHjlGU+RfviflW42bDDVqA43MyNyX5C7Lr1uTZ4lz5T3Ffcn9LY5UHGUhv3lBs/n6eE7JYxMXzhZNJqUVT9yTPbqsjc3ny/nkRMKRDdF7WxiIjR+K5ikeEr6cV7yhYKXVIozERd+HPOga9lpPXb3iPf2SkQ6rHOLFO7yqo94D42INDeq0Yis2WpXRuLTQ0BLuyNAcXGb5HXSp6gjgVSdlnaIkievGt5H6GoZj4pEzuDOGAzmiia0qf4UsfeFnzr5SGaS8UKD+W9GDSxq0dkvliva/Qpfl6lvbcxpIMvjxpY3UH5O0y0r8MslJ0f72KO3Nl95dkcOqY1rUpq8/IaTSCG4SnzFfuFQFEDzaXZOzhpI0eQ45vLKlfbGIKcaXYRJdh1JFIB0XY2xJn4sOjQPlWUw/ObtXYGuNxN347CgxplnrxiDYO8VKm4WmdP+fqRDqEp8TBQ8fpEnHsV0eBoTtwrwZLTqdZIk4ivxDetWwDD4tNxSrx/2pMdOpn2lQRUi4VG4qFRjlHaoF9IpTdLHZcG/BLmzJL/V06RexvZ4s97mnizGoCTsjK9Io1/5A4QNyLH8Xv0gMl6lZRUVFRUVFRUVFRUVExjP8A5YrcU2psYNYAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/image/home/react-night.png":
/*!*******************************************!*\
  !*** ./public/image/home/react-night.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/image/home/react.png":
/*!*************************************!*\
  !*** ./public/image/home/react.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAFgUlEQVRoge2a328VRRTHPy3aVhCtJfVXqFDQEDVKFavEqgjRREUDamJ88gkebF8UUB/ECEj8AzQ+GH2R+CMlLaX+xEgQY00p0RijpW3ExIIpIogtxNpKe68PM6tnZ2f27q9LfdhvMsne3e85c87d2ZlzzgzkyJEjR44cOWYKFRnqmgM8ClwP1ALHgEFgDzAaUUctcD+wBLhCy/UDncCfGdqaChVAGzAGFC1tEugGbgvRsRx4X3NtOkaB1vKYHx8vYzfS1j4AGoXsIuDDGPIvld2bEriXoFHjwFHgrOVZETiDGhFt+trGOat1jFuerTonnjnwjTCkAGwCqvWzGuBBYLd+VurtFYAuYLXQUQ08a8gfLLNPTizFb/BbIdwm4CvczvZofS7sMPg3prQ9ETYZRoQZDHAN9iF8Bri6hGyTIbMhsdUp8J4w4EQJbiMwjPsNDwMLS+g4KfjvJLY6BeQQ3RfCuxT4Cb+DQ6g1Wt47DNSH6PlccL9ManRlUkHgEnF9ysGpQU1Ei8S9AeBu3Q6J+4s1txo7ZB+1sSwVOC+pIDBLXBfEdRUq2roBeBy43ZBbDIzo67+NZy3ALqAd+B4VZXmcaUffsZDG4XFxPR94EbVGLkc57UKV49rDA7qBirz6UJ/MfMH5K66xWWAv0SOkrNtnSY1OkjzcDGwG1hB9DjgIHAdOiwYwV7QrgVsj6iugAprtwLcRZWJjHvAm6lty/fM/Elx+9hHtj6nEPxMXgZ9Rs7erv2ngDW1bprgL+CWk4yKwDliAP7gYBRpi9HOVlpFByQJgfYm+jwJ3pPDPh0eACUsnnwBT4vcrwE6D82SC/toMHTu1bu/3FCoUNe2ZANYm6M+HOwnmqEOoJB2gV9w/gT/I7yPZOl+pZT09Ba3b+31A8x4j+PlMopa2RJiDGipSYTdwoeBsJfhPe82WxjUAHfw3cXWhqhsmVoXo3Sp481BzhHx+BJgd01cANhqKOgku+MscRu236GsAfrdwT2H/zvc7dC8zeOejykiS83RkLwXksBrBH0pKDFiMWmHhdTgc8L5TEyssvAGHDfXAb4LXG+qZA7JG9WoI73nDKFcicRq3w2MOGXO4bg6x47UI+iJPKmEBShaVz2IGOlLrk0P6OO7UzUzzXEO6y8LzWruFbxvSgw4b6oBfBS/RkN5gdLYHNUFINDscsE1aS1ATlMk9iT8x8OCatG4xeLMI/plPRfZSYDZqije/TxnGbXMYVQRWWnQ2oCaoMd3asTu7MkSvXJbmEizzDgMXxPT1X7QQDDyGUYt+BSoI8O6bgccBkgceUm8Bf3nHCzxWo2J3adskwfw7NtZiDy17CIaW7QYnSWjZauiwhZbmultE5chrEvRnRQvB4W229ZQveVhXou9hMnizJuqA1wlPDw+jUjrzu0+aHg4THLayTWubXEFRAEnW0KXAC8DDxCsAjKDemNcALhLtMuIVALpQe03fRZRJjZks8exNanSaMq1cnnqBLcAXqJkyK0xqnVvwBxN1GfYRGUP4Z1IPVaitkSeAjwi+nUnHtdc+1rJN+KuasrjgSiLKikPCgA4Hp5pgdaIfuFy3fuNZD+5CfKfg/ZCJBzERdaulnuBWyyDptlp6UtqeCHE20xaS7Wbau4mtTgGzIlLO7dKbDJmNia1OAXNDfEcIN8qGeFOI/NsGf0Y2xAG+FkYUgGfwH3l4CFX4i3rkYTfqmESN1lENPGfw+srsUyjuIWj4OCrunrI884ZwK6UPtRzBfqjFlnaeU2wneoTUjX9yakQdZYoqv63s3kREG/4sR7YJVNzbHCLfrDm2NLSIKhZkcjCtHEcPr0NlL8dQwcmnhFQRDVwM3Adcizp6+AcqONnF/+joYY4cOXLkyJEjGf4BapZNPg13lkIAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/image/home/symfony-night.png":
/*!*********************************************!*\
  !*** ./public/image/home/symfony-night.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/image/home/symfony.png":
/*!***************************************!*\
  !*** ./public/image/home/symfony.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./public/image/home/view1.jpeg":
/*!**************************************!*\
  !*** ./public/image/home/view1.jpeg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/view1-a7bc0f15d3389c2c6a7c1fdc76dc7788.jpeg";

/***/ }),

/***/ "./public/image/home/view2.jpeg":
/*!**************************************!*\
  !*** ./public/image/home/view2.jpeg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/view2-dec425e1e8d4cd7cd947352d77c0976e.jpeg";

/***/ }),

/***/ "./public/image/home/webpack-night.png":
/*!*********************************************!*\
  !*** ./public/image/home/webpack-night.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFfElEQVRoge2aXYhVVRTH/1udPtSxUdQsLb81RU3QvnCErKDAMSGyqIceKiooSHowjUChhyRoQJSgXgKFsukhUEGoXkprdPqQyg/INC3GrMmRUicbZ+bXw1nHs+fOufeefebemYIWXOacvddea/333mvtddYe6X/KRsAyYNlg25GbgMXAxyT02X8KEDAD2A70AOeAs0C7/QXYDSwebDuLEjAW2AhcBDqBN4EJQLP9aoEXgT8M0EfAwsG2+zIBIzwDe4AmYIbX3ww0e+8x4A6g2/hnDY71kUE1wFPAL94ML0rh6wXEa58EbLIVjAFNGxjrIwMcsAo4agC+AxpK8KcC8fon2za8BPxtz9dVx/pE6T3AVwbghK3IkDJjSgLx+G4CttrqXLDVGl8569UnlLaZT1yZcWwmIB7/PNtmcdTbCNTlt169lr0bOG9CRwXKCALijbsN2GmTdwbYANSGCrkW2GJhtBPYHLrMwBDgMaIzpN2eS27DInLuAj43QKeA54Arsgx82Za0B3gXmJ5D+QrgW1P+vf2wthWh8kxmA/C1558PlmIeT0KfApMCldUDe218K/AMUZiusedW69sL1AfKdjZBZ0zGsVLME4zpB6CL6NB6FbimjJL53n4+C6wFhqfwDbe+OF3ZCczPAKIB+MLG/AqcBH7MAmQtUThssvczRJHqqgL+G4iCQRfJGVDWl4DR9D3d+2xhonC/32xoI3L4UcAHmYF4bXd42+Uk0dkx3gz5yzNkSjkAKfomkhyGfn6WCsAbFw7E2h3wsG05bAV6gPeB2aEAUvTONlk9BgrgNPBCkS3aB0imcOicwzn3nqS5kt6RNFSSk1QnKSy2p1OtyXKShklqkjTNOdfonOvIIiAorjvnOiUdtddGSbdLaiFnBgvMApoktZisRus6khVATMEHlKSfJP0uaZ2k6ZK2SFop6ZDt8YnlBMS+IemQjd1isl7JYU+qglQfSeGrKXifCmwjSfg2AqNTxsXR6oLxbgOmev11pn9DGf35nL2Apxa4tUjfAmCXyWjHzhOS86Pd+nYBC1LGDyiQNRZZ+kQTj2cpvU94/0RfWmJcbiB5fGS4oshSNHFzzu1xztUr2v819lvpnKt3zu3JobMsDauG0JicczuwnMg5t6OauvKsSIekLkmdFbalX5QHyBuSloTG+WpTMBDn3HlJB6pgS78ozxfb45JOkeUrbQApz9a6UdJYRdHrX0NBQGwVZtpr2Q+iALmFdswpdU6lUSYgWBov6bCkRyV1S/qkUmm8pBPAS5LOSdor6SFJx4ul8WlUFghwp6T9krYrSrMfkTRR0mZJ90s6CLyVJVn0ZDqi73tnTUcUJaF1zrmlkhoUJaevhwKKFfifuvO8vKkNWF3o4MAUkupgB/AaMKaAp09dC1hkcp+09wXAAeD6Ar7lQIvxXv7QCsm1+lt8WBfPIMm1wlxgtbUNBQ4CxzPMbxqgssUHvxz0IZUpB31pQJ619vuM9xZgTaD85STV/+LlIGNebyvRCTSSo+5K7wIdBmSkzeb2UHkmcyFJ/bkVWJVl0GSSUtBvwNPA0EDFfsm02drmEHgHQnSP8jZJ/Xk9MCJERlxI3meADgP3BglQv4rY8U3YnwZiK/25N/Fm9rQB2hkyq6FAPH3+TdjN+axPVzCSqFB2kaiquIkMVwwhQIgKc994O6DoTVi/CZjp+c8pytxaZQFCFJrjM6vVZAb5ZG4C7ia6P4QoxC4pwlcUCEnJtIuk+lKJgl8YAcNs9tpIrqYnF/CkneyVdeRKETDGfOaSzewG4Grruwyk6o5cKSK6ithtRv5sRu8zMAPnyJUi4AHgmBndbT4QO/ITA+bIlSCi67bnif61Y/AcuVIEjAPGVVvPP/amnZt4H+dsAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./public/image/home/webpack.png":
/*!***************************************!*\
  !*** ./public/image/home/webpack.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAE90lEQVRoge3aWahWVRQH8N81r5VpmdXN0tJGS5rAysKEBqHARIgmeuihooKCoocmAn1LehCsCOolUCizh0CFaHgprWymAYNGJa4N4o0my+v1fj2sfThfn99wzrnfvSb0h8N3hrWH/95rrb322h//ozAuS9cBi/PxOmrpessBRuhUrMEwfscvGEi/NbwsSP5ncTSW428M4mlMwzvpmowH8Ksg9BrO2y89bYHD5B0cxloxKxkyIhkywruwN8mfPiY9bYFe3I4f5CM8t4lcI5EMM7BSzGBG6ORR6WkL9OA6fCUIfIar28i3IpJhplDDPdid7o/rSk/bYCE+FAS2ihkZ16FMJyIZzsAqMTt/itnqq9zTFqh3pTuETRxcsGxRIhnOEmqWeb3lmFKifFNk074Xf6RKDy9ZR1kiGeZhvRi8nVgmPF8pHIsnhRsdxBPKT/M43CzWkIF030kNm+FyvC0IbcfdmFCk4CNiSofxPE6p0PhifJoa/zJdtfRucYX6CIfykdw+r20n3CcPKd4ULrIMLsGmVL4fdwo33Zvu+9O3TUm2DHrEIOxMdXzTTnhaEvoaQ2LRehRHdGjkbLk+/4IHMbGJ3MT0LQtX1qeynXA13k9lfsI2fFeEyIPCHa6VG9sDOKRB/gThDIbka0ARWzrSvqt7MxVeiHfl3nKZcDYvlSGS4WK5umwTa0df6shfdR2ZVYBAI6bLF8P6+KwVgQyViBD6eYNQuZqYgWG8iNkVCDRidqprWJCq4Ufcp7mK7kOkqDus4QXMwXM4SJCbooJvb4LJqa4ejJfHXSuE+nVEWb8+KGIsqZGL8J7qEezpqex7qa4V6f0XChJohVaqVY9bhN5OELbyuDD0PULHpxdop942dqc6+sSs1IRNtENlG2lEb8PzSVgtD/iWC8/UiMxb/ZlkV6eyGcaUyGRc2OLbOdiQ6hiQryfZ+jGQvm1Iso0YUyL3C5Vo5k0yLPDvFb5+RV/QplxlIlWCuInCs7QL3DaKEGSJPERZkt5trNBmR4wfjUrrsE4eE60bzYaqzMgusSAOdrkvI0IVIk9hvhH6+W6jCpE/8HG3OzJSVCFyi9ipFdqljRWqEDlRJNnaud8xR1kiE3Baui+yIarajzOVHKiiRLIwfgtuEuHFG7oXxm/FwyJXsAnX41utw/iOaLayXyqi02yffKPIsqyUB4vPaB0sNksH9YjFsSc9v5JIHJWeF9W12WxfUipEOUseN+3AvfY18Fny7OAuPIapBYjMTfXelp7PEZ7w+Aa5VoQKExlp8uEh+QhmROaIwSA2Zp8L9SmCRkIdkw/16aBXdScd9IEgcld6f1WSvUAEoGWwSJ79b5sOgqViJgbFjq1K3rU+QVcTRCaJ0VxToT7iUCjLP/eLE4GOmClPBf2MO4Q6lEF9yjSzkTOVPwOZgWfl+eel4nCpFOZhsyC0BVeWrUD1JHZ2EvabILHKCM9NspH9UZ4dLDOqZYlk7dWfhJ1bonxHTBI7t7/F+rFSsSOGMkQW4hO5BrQ7CRsxTpPbz3adT62KEJkjX7P6U51lbbIyrhDnhzXhYue3kGtHJEsLDcmzL91I+JXGeDF6O+RH0zMbZJoR6bohdwtThc3sESO7DIemb/VERt2Qu4UzxF80avhedHqzIDKmhtwtXCNCiJpQnSG5Id9qDA25G+jFPeKvHfvVkLuFY9I1qvgHLEOWARI0QWwAAAAASUVORK5CYII="

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

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

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

/***/ "@material-ui/icons/ArrowBackIos":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowBackIos" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBackIos");

/***/ }),

/***/ "@material-ui/icons/ArrowForwardIos":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/ArrowForwardIos" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForwardIos");

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

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/PlayCircleFilled":
/*!******************************************************!*\
  !*** external "@material-ui/icons/PlayCircleFilled" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayCircleFilled");

/***/ }),

/***/ "@material-ui/icons/RadioButtonUnchecked":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/RadioButtonUnchecked" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RadioButtonUnchecked");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

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

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0Fib3V0L2NvbXBvbmVudC9CaW8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSG9tZS9jb21wb25lbnQvTGVhcm5CeURvaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL2NvbXBvbmVudC9TaGFyaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL2NvbXBvbmVudC9Ta2lsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvUGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1B1YmxpY0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1Njcm9sbHVwLmpzIiwid2VicGFjazovLy8uL2Nzcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3MvcHVibGljLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvYWJvdXQvYXZhcnRhci5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWYxMC5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWY0LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjUuZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmNi5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWY3LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjguZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL05leHQtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvY3NzLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9maWdtYS1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2dpdC1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvZ2l0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qYXZhc2NyaXB0LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qYXZhc2NyaXB0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qZXN0LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qZXN0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvbXlzcWwucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL25leHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL25wbS1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvbnBtLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9waHAtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3BocC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvcmVhY3QtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9zeW1mb255LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9zeW1mb255LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS92aWV3MS5qcGVnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3ZpZXcyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMk91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JhZGlvQnV0dG9uVW5jaGVja2VkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInN1YnRpdGxlIiwiZm9udFdlaWdodCIsImltZyIsImJvcmRlclJhZGl1cyIsImNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwiQmlvIiwidCIsInByb3BzIiwiY2xhc3NlcyIsIm1vZGUiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiYXZhcnRhciIsIndpZHRoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iLCJkYXlCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJuaWdodEJhY2tncm91bmQiLCJib2R5IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJIb21lIiwiZHJhd2VyIiwic2V0RHJhd2VyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsYW5nIiwiaGVpZ2h0IiwiaW1nQmxvY2siLCJpbWdIb3ZlciIsInpJbmRleCIsIkxlYXJuQnlEb2luZyIsIm9uSG92ZXIiLCJzZXRPbkhvdmVyIiwiaGFuZGxlT25Ib3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJnaWY0IiwiZ2lmNSIsImdpZjYiLCJnaWY3IiwiZ2lmOCIsImdpZjEwIiwic3VidGl0bGVOaWdodCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25OaWdodCIsInBhY2thZ2VCbG9jayIsImJvcmRlckJvdHRvbSIsIm92ZXJmbG93IiwicGFja2FnZUJsb2NrTmlnaHQiLCJsaW5rIiwibmlnaHRMaW5rIiwiU2hhcmluZyIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJwaG90bzEiLCJwaG90bzIiLCJTa2lsbCIsInN0eWxlcyIsImJhbGwiLCJqYXZhc2NyaXB0SWNvbiIsImphdmFzY3JpcHROaWdodEljb24iLCJqZXN0TG9nb0xnIiwiamVzdEljb24iLCJqZXN0TmlnaHRJY29uIiwiamVzdExvZ28iLCJnaXRJY29uIiwiZ2l0TmlnaHRJY29uIiwibmV4dExvZ28iLCJuZXh0SWNvbiIsIm5leHROaWdodEljb24iLCJyZWFjdEljb24iLCJyZWFjdE5pZ2h0SWNvbiIsImNzc0ljb24iLCJjc3NOaWdodEljb24iLCJwaHBJY29uIiwicGhwTmlnaHRJY29uIiwibnBtSWNvbiIsIm5wbU5pZ2h0SWNvbiIsIm15c3FsSWNvbiIsIm15c3FsTmlnaHRJY29uIiwiZmlnbWFJY29uIiwiZmlnbWFOaWdodEljb24iLCJ3ZWJwYWNrSWNvbiIsIndlYnBhY2tOaWdodEljb24iLCJzeW1mb255SWNvbiIsInN5bWZvbnlOaWdodEljb24iLCJCYW5uZXIiLCJ0ZXh0RGVjb3JhdGlvbiIsIkN1c3RvbWl6ZUNhcm91c2VsIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJjb3VudCIsImhhbmRsZVRpbWVyIiwiYmluZCIsInRpbWVyIiwiaGFuZGxlTmV4dCIsImhhbmRsZUJhY2siLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJyb3RhdGVCeSIsInJlbmRlciIsImltZ3NyYyIsImNvbnRyb2xCdXR0b24iLCJuYXZpZ2F0ZUJ1dHRvbiIsImxpc3QiLCJpIiwibGVuZ3RoIiwicHVzaCIsInBhcnNlSW50IiwibWFyZ2luIiwiUmFkaW9OYXZpZ2F0aW9uIiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJtYWluIiwib3ZlcmZsb3dZIiwibGV0dGVyU3BhY2luZyIsImRyYXdlckxpbmsiLCJkcmF3ZXJIZWFkZXIiLCJpY29uIiwiRHJhd2VyIiwibGlua05pZ2h0IiwiRm9vdGVyIiwiZm9vdGVyQmxvY2siLCJmb290ZXJCbG9ja05pZ2h0IiwibGlua0FuY2hvciIsIm5pZ2h0TGlua0FuY2hvciIsIm5pZ2h0SWNvbiIsImZvcm1Db250cm9sIiwiaW5wdXRMYWJlbCIsImZsZXhEaXJlY3Rpb24iLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaGFuZGxlTGFuZ1RvUmVkdXgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImRpc3BhdGNoIiwidG9FbiIsInRvWmhIYW50IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwidXNlRGlzcGF0Y2giLCJsYWJlbCIsInRvTmlnaHQiLCJ0b0RheSIsInBhdGhuYW1lIiwiUGFnZUxvYWRlciIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJ1c2VFZmZlY3QiLCJTZWxlY3QiLCJvbk9wZW4iLCJvbkNsb3NlIiwib25DaGFuZ2UiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJvb3QiLCJpbnB1dCIsIlNlbGVjdDIiLCJuYW1lIiwiZm9ybUNvbnRyb2xQcm9wcyIsInNlbGVjdFByb3BzIiwicmVxdWlyZWQiLCJkaXNhYmxlZCIsInRhYkluZGV4IiwibmV3UHJvcHMiLCJzZWxlY3RSZXF1aXJlZCIsInNlbGVjdCIsInNlbGVjdGVkIiwiY2hlY2tFcXVhbCIsImEiLCJiIiwidW5kZWZpbmVkIiwidG9TdHJpbmciLCJmaWx0ZXJzIiwiZmlsdGVyIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXkiLCJvYmplY3QiLCJpbnB1dExhYmVsUHJvcHMiLCJpY29uTmlnaHQiLCJTY3JvbGx1cCIsInNjcm9sbEMiLCJzZXRTY3JvbGxDIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsImhhbmRsZVNjcm9sbHRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImFsaWduIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJ6aEhhbnQiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSIsIkhvbWVQYWdlIiwidXJsIiwiaW1hZ2VzIiwiYWx0Iiwic2l0ZV9uYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwic3RvcmUiLCJleGFtcGxlSW5pdGlhbFN0YXRlIiwiYWN0aW9uVHlwZXMiLCJEQVkiLCJOSUdIVCIsIkVOIiwiWkhIQU5UIiwiUkVTRVQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsInJlc2V0Q291bnQiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmFnZSIsIndoaXRlbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJwZXJzaXN0UmVkdWNlciIsIm1ha2VTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDeExBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAncmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBhdmFydGFyIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9hYm91dC9hdmFydGFyLmpwZydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nXHJcbiAgICB9LFxyXG4gICAgc3VidGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMFxyXG4gICAgfSxcclxuICAgIGltZzp7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOic1MCUnXHJcbiAgICB9LFxyXG4gICAgY29udGVudDp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OicxLjhyZW0nXHJcbiAgICB9LFxyXG59KVxyXG5cclxuY29uc3QgQmlvID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdncmVldGluZycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17M30gbWQ9ezR9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IHNtPXs2fSBtZD17NH0gc3R5bGU9e3ttYXJnaW5Ub3A6Jy0xcmVtJyxwYWRkaW5nOicxcmVtJywgdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXJ0YXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezN9IG1kPXs0fT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZW50MScpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZW50MicpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZW50MycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkJpby5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Fib3V0JykoQmlvKSAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vUHVibGljL0hlYWRlcidcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9QdWJsaWMvQmFubmVyJ1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4uL1B1YmxpYy9EcmF3ZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vUHVibGljL0Zvb3RlcidcclxuaW1wb3J0IFNraWxsIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L1NraWxsJ1xyXG5pbXBvcnQgU2hhcmluZyBmcm9tICcuL2NvbXBvbmVudC9TaGFyaW5nJ1xyXG5pbXBvcnQgTGVhcm5CeURvaW5nIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L0xlYXJuQnlEb2luZydcclxuaW1wb3J0IEJpbyBmcm9tICcuLi9BYm91dC9jb21wb25lbnQvQmlvJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBQYWdlTG9hZGVyIH0gZnJvbSAnLi4vUHVibGljL1BhZ2VMb2FkZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGRheUJhY2tncm91bmQ6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonI0ZGRkZGRicsXHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICB9LFxyXG4gICAgbmlnaHRCYWNrZ3JvdW5kOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJyxcclxuICAgICAgICBjb2xvcjonI0ZGRkZGRidcclxuICAgIH0sXHJcbiAgICBib2R5OntcclxuICAgICAgICBwYWRkaW5nTGVmdDonOCUnLCBcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6JzglJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbZHJhd2VyLCBzZXREcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubW9kZSlcclxuICAgIGNvbnN0IGxhbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxhbmcpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gZmFsc2UgJiZcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGF5QmFja2dyb3VuZDpjbGFzc2VzLm5pZ2h0QmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUxvYWRlciBtb2RlPXttb2RlfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzhyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzEwMHZoJywgYmFja2dyb3VuZENvbG9yOicjMWYxZjFmJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGdpZjQgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY0LmdpZidcclxuaW1wb3J0IGdpZjUgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY1LmdpZidcclxuaW1wb3J0IGdpZjYgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY2LmdpZidcclxuaW1wb3J0IGdpZjcgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY3LmdpZidcclxuaW1wb3J0IGdpZjggZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY4LmdpZidcclxuaW1wb3J0IGdpZjEwIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9naWYvZ2lmMTAuZ2lmJ1xyXG5pbXBvcnQgbXlzcWxJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL215c3FsLnBuZydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH0sXHJcbiAgICBpbWdCbG9jazp7XHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIC8vIHBhZGRpbmc6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgaW1nSG92ZXI6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonYmxhY2snLFxyXG4gICAgICAgIHpJbmRleDo5OTlcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IExlYXJuQnlEb2luZyA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbb25Ib3Zlciwgc2V0T25Ib3Zlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25Ib3ZlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRPbkhvdmVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T25Ib3ZlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0KCd0aXRsZScpfTwvcD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd2VpYW5vZnN0ZWVsLmdpdGh1Yi5pby9MZWFybi1CeS1Eb2luZy8wNC1zbGlkZS1zaG93LydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY0fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93ZWlhbm9mc3RlZWwuZ2l0aHViLmlvL0xlYXJuLUJ5LURvaW5nLzA1LXNob3BwaW5nLWNhcnQvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdCbG9ja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3dlaWFub2ZzdGVlbC5naXRodWIuaW8vTGVhcm4tQnktRG9pbmcvMDYtY2FudmFzLWRyYXdpbmcvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdCbG9ja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3dlaWFub2ZzdGVlbC5naXRodWIuaW8vTGVhcm4tQnktRG9pbmcvMDctbW92aWUtdHJhaWxlci8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY3fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93ZWlhbm9mc3RlZWwuZ2l0aHViLmlvL3JlYWN0LXdlYXRoZXItYXBwLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY4fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9yZWFjdC10ZXh0LWVkaXRvci1pdGNsNzh4eTktd2VpYW5vZnN0ZWVsLnZlcmNlbC5hcHAvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjEwfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5MZWFybkJ5RG9pbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdsZWFybkJ5RG9pbmcnKShMZWFybkJ5RG9pbmcpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBDdXN0b21pemVDYXJvdXNlbCBmcm9tICcuLi8uLi9QdWJsaWMvQ2Fyb3VzZWwnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IHsgU2Nyb2xsdXAgfSBmcm9tICcuLi8uLi9QdWJsaWMvU2Nyb2xsdXAnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbidcclxuaW1wb3J0IHBob3RvMSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS92aWV3MS5qcGVnJztcclxuaW1wb3J0IHBob3RvMiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS92aWV3Mi5qcGVnJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH0sXHJcbiAgICBpbWdCbG9jazp7XHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGltZ0hvdmVyOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJyxcclxuICAgICAgICB6SW5kZXg6OTk5XHJcbiAgICB9LFxyXG4gICAgc3VidGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuOHJlbScsXHJcbiAgICAgICAgZm9udFdlaWdodDo5MDBcclxuICAgIH0sXHJcbiAgICBzdWJ0aXRsZU5pZ2h0OntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicxLjhyZW0nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgZm9udFdlaWdodDo5MDBcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb25OaWdodDp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICB9LFxyXG4gICAgcGFja2FnZUJsb2NrOntcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nLFxyXG4gICAgICAgIHBhZGRpbmc6JzFyZW0nLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUY1RjUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiAnLjRzIGVhc2UtaW4tb3V0J1xyXG4gICAgfSxcclxuICAgIHBhY2thZ2VCbG9ja05pZ2h0OntcclxuICAgICAgICBib3JkZXJCb3R0b206JzFweCBzb2xpZCB3aGl0ZScsXHJcbiAgICAgICAgcGFkZGluZzonMXJlbScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzVjNWM1YycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIG1hcmdpblRvcDonM3JlbSdcclxuICAgIH0sXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICBjb2xvcjonIzVjNWM1YydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmlnaHRMaW5rOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicxLjJyZW0nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonI2M0YzRjNCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBTaGFyaW5nID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57dCgndGl0bGUnKX08L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5wYWNrYWdlQmxvY2s6Y2xhc3Nlcy5wYWNrYWdlQmxvY2tOaWdodH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuc3VidGl0bGU6Y2xhc3Nlcy5zdWJ0aXRsZU5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGVzY3JpcHRpb246Y2xhc3Nlcy5kZXNjcmlwdGlvbk5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Rlc2NyaXB0aW9uMicpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gc3R5bGU9e3ttYXJnaW5Cb3R0b206Jy0wLjRyZW0nfX0vPnt0KCdsaW5rJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiZuYnNwOzwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6JzMwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVNwZWVkPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU3BlZWQ9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9eycyNHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9eydSb2JvdG8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e21vZGU9PSdkYXknPydibGFjayc6J3doaXRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9eydUeXBld3JpdGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUZXh0PXtbXCJIZWxsbyBXb3JsZFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVNwZWVkPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU3BlZWQ9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9eycyNHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9eydSb2JvdG8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e21vZGU9PSdkYXknPydibGFjayc6J3doaXRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9eydUeXBld3JpdGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUZXh0PXtbXCJIZWxsbyBXb3JsZFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMucGFja2FnZUJsb2NrOmNsYXNzZXMucGFja2FnZUJsb2NrTmlnaHR9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30gc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5zdWJ0aXRsZTpjbGFzc2VzLnN1YnRpdGxlTmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdC1jdXN0b21pemUtY2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmRlc2NyaXB0aW9uOmNsYXNzZXMuZGVzY3JpcHRpb25OaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdkZXNjcmlwdGlvbjEnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC1jdXN0b21pemUtY2Fyb3VzZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7bWFyZ2luQm90dG9tOictMC40cmVtJ319Lz57dCgnbGluaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9IHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0JyxwYWRkaW5nVG9wOicxcmVtJyxwYWRkaW5nTGVmdDonMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9taXplQ2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nc3JjPXtbcGhvdG8xLCBwaG90bzIsIHBob3RvMSwgcGhvdG8yLCBwaG90bzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVCeT17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLnBhY2thZ2VCbG9jazpjbGFzc2VzLnBhY2thZ2VCbG9ja05pZ2h0fT4gICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuc3VidGl0bGU6Y2xhc3Nlcy5zdWJ0aXRsZU5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3Qtc2Nyb2xsLXVwLWJ0blxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGVzY3JpcHRpb246Y2xhc3Nlcy5kZXNjcmlwdGlvbk5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Rlc2NyaXB0aW9uMycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXNjcm9sbC11cC1idG4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7bWFyZ2luQm90dG9tOictMC40cmVtJ319Lz57dCgnbGluaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzonMjAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbHVwIG1vZGU9e21vZGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsdXAgbW9kZT17bW9kZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNoYXJpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdzaGFyaW5nJykoU2hhcmluZykiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgcmVhY3RJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LnBuZydcclxuaW1wb3J0IHJlYWN0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LW5pZ2h0LnBuZydcclxuaW1wb3J0IGplc3RJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2plc3QucG5nJ1xyXG5pbXBvcnQgamVzdE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9qZXN0LW5pZ2h0LnBuZydcclxuaW1wb3J0IGdpdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZ2l0LnBuZydcclxuaW1wb3J0IGdpdE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9naXQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgbmV4dEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbmV4dC5wbmcnXHJcbmltcG9ydCBuZXh0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL05leHQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgamF2YXNjcmlwdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC5wbmcnXHJcbmltcG9ydCBqYXZhc2NyaXB0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2phdmFzY3JpcHQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgY3NzSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9jc3MucG5nJ1xyXG5pbXBvcnQgY3NzTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy1uaWdodC5wbmcnXHJcbmltcG9ydCBucG1JY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL25wbS5wbmcnXHJcbmltcG9ydCBucG1OaWdodEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbnBtLW5pZ2h0LnBuZydcclxuaW1wb3J0IG15c3FsSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC5wbmcnXHJcbmltcG9ydCBteXNxbE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC1uaWdodC5wbmcnXHJcbmltcG9ydCBmaWdtYUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEucG5nJ1xyXG5pbXBvcnQgZmlnbWFOaWdodEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEtbmlnaHQucG5nJ1xyXG5pbXBvcnQgd2VicGFja0ljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay5wbmcnXHJcbmltcG9ydCB3ZWJwYWNrTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3dlYnBhY2stbmlnaHQucG5nJ1xyXG5pbXBvcnQgc3ltZm9ueUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS5wbmcnXHJcbmltcG9ydCBzeW1mb255TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3N5bWZvbnktbmlnaHQucG5nJ1xyXG5pbXBvcnQgcGhwSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9waHAucG5nJ1xyXG5pbXBvcnQgcGhwTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3BocC1uaWdodC5wbmcnXHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvIFNsYWInLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2tpbGwgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0KCd0aXRsZScpfTwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9IHN0eWxlPXt7bWFyZ2luVG9wOic0JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amF2YXNjcmlwdEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2phdmFzY3JpcHROaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuamVzdExvZ29MZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3ROaWdodEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24gbGdVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3ROaWdodEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmplc3RMb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amVzdEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amVzdE5pZ2h0SWNvbn0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaXRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaXROaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV4dExvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV4dEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV4dE5pZ2h0SWNvbn0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVhY3RJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWFjdE5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc0ljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc05pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BocEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BocE5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbU5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e215c3FsSWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bXlzcWxOaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmaWdtYUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZpZ21hTmlnaHRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2VicGFja0ljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dlYnBhY2tOaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzeW1mb255SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3ltZm9ueU5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNraWxsLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignc2tpbGwnKShTa2lsbCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBjb250ZW50OntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQmFubmVyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRleHQxJyl9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3RleHREZWNvcmF0aW9uOidsaW5lLXRocm91Z2gnfX0+e3QoJ2NvbnRleHQyJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkJhbm5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Jhbm5lcicpKEJhbm5lcikgICAgICAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3MnO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkSW9zJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgUGxheUNpcmNsZUZpbGxlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVGaWxsZWQnO1xyXG5pbXBvcnQgUmFkaW9CdXR0b25VbmNoZWNrZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SYWRpb0J1dHRvblVuY2hlY2tlZCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5cclxuY2xhc3MgQ3VzdG9taXplQ2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY291bnQ6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlVGltZXIgPSB0aGlzLmhhbmRsZVRpbWVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHRoaXMudGltZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU5leHQgPSB0aGlzLmhhbmRsZU5leHQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUJhY2sgPSB0aGlzLmhhbmRsZUJhY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhhbmRsZVRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUaW1lcigpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKT0+e3RoaXMudGltZXIoKTt9LDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pih7XHJcbiAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgKyAxXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5leHQoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMucm90YXRlQnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKT0+KHtcclxuICAgICAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgKyAzXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpPT4oe1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IHByZXZTdGF0ZS5jb3VudCArIHByb3BzLnJvdGF0ZUJ5XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQmFjaygpIHtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5yb3RhdGVCeSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmNvdW50ID4gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50IC0gM1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudDogMH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmNvdW50ID4gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcyk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHByZXZTdGF0ZS5jb3VudCAtIHByb3BzLnJvdGF0ZUJ5XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50OiAwfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGltZ3NyYyxcclxuICAgICAgICAgICAgcm90YXRlQnksXHJcbiAgICAgICAgICAgIG1vZGUsXHJcbiAgICAgICAgICAgIGNvbnRyb2xCdXR0b24sXHJcbiAgICAgICAgICAgIG5hdmlnYXRlQnV0dG9uXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgaWYoIWltZ3NyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gbGlzdFxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYoIXJvdGF0ZUJ5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGltZ3NyYy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIDMpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nc3JjW2ldfSBzdHlsZT17e21hcmdpbjogJzAgYXV0bycsIHdpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ30gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KCB0aGlzLnN0YXRlLmNvdW50IC8gcm90YXRlQnkpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nc3JjW2ldfSBzdHlsZT17e21hcmdpbjogJzAgYXV0bycsIHdpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ30gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBSYWRpb05hdmlnYXRpb24gPSBbXTtcclxuXHJcbiAgICAgICAgaWYoIWltZ3NyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gUmFkaW9OYXZpZ2F0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZighcm90YXRlQnkpIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFJhZGlvTmF2aWdhdGlvbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIDMpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHtjb3VudDogMyAqIGl9KX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxheUNpcmNsZUZpbGxlZEljb24gc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPydibGFjayc6J3doaXRlJyl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDMgKiBpfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uVW5jaGVja2VkSWNvbiBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBpbWdzcmMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmFkaW9OYXZpZ2F0aW9uLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17e2Rpc3BsYXk6J2lubGluZScsIHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KCB0aGlzLnN0YXRlLmNvdW50IC8gcm90YXRlQnkpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHtjb3VudDogcm90YXRlQnkgKiBpfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlDaXJjbGVGaWxsZWRJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe2NvdW50OiByb3RhdGVCeSAqIGl9KX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25VbmNoZWNrZWRJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5MZWZ0OictMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17MX0gc3R5bGU9e3twYWRkaW5nTGVmdDowfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cm9sQnV0dG9uID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93QmFja0lvc0ljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge25hdmlnYXRlQnV0dG9uPT09dHJ1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXsxMH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSYWRpb05hdmlnYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOjxHcmlkIGl0ZW0geHM9ezEwfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbEJ1dHRvbiA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPydibGFjayc6J3doaXRlJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplQ2Fyb3VzZWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIG1haW46IHtcclxuICAgICAgICBoZWlnaHQ6JzEwMHZoJyxcclxuICAgICAgICBvdmVyZmxvd1k6J2hpZGRlbicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOicjMWYxZjFmJyxcclxuICAgICAgICBwYWRkaW5nTGVmdDonOCUnLCBcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6JzglJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonQmViYXMgTmV1ZSAnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyNDQUNBQ0EnLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VyTGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgdGV4dEFsaWduOidsZWZ0JyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOicjQ0FDQUNBJyxcclxuICAgICAgICBmb250U2l6ZTonMjJweCcsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckhlYWRlcjoge1xyXG4gICAgICAgIG1hcmdpblRvcDonM3JlbSdcclxuICAgIH0sXHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IERyYXdlciA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGhhbmRsZURyYXdlckNsb3NlLFxyXG4gICAgICAgIGxhbmdcclxuICAgIH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXRUlBTiBXQU5HXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV29ya1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdzXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsYW5nPT0nZW4nPycuL1dlaWFuV2FuZ19SZXN1bWUucGRmJzonLi/njovlgYnlrolf5bGl5q23LnBkZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lcicgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdyZXN1bWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuRHJhd2VyLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoRHJhd2VyKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9wdWJsaWMubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjOTE5MTkxJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsaW5rTmlnaHQ6e1xyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBGb290ZXIgPSAoe3QsIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtb2RlXHJcbiAgICB9ICA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17bW9kZT09J2RheSc/c3R5bGVzLmZvb3RlckJsb2NrOnN0eWxlcy5mb290ZXJCbG9ja05pZ2h0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17N30gbWQ9ezR9IHN0eWxlPXt7bWFyZ2luQm90dG9tOicycmVtJywgZm9udFNpemU6JzEuMnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+e3QoJ2NvbnRhY3RUaXRsZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Kzg4NjkgMTIgNTk3IDEwOTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+d2VpYW5vZnN0ZWVsQGdtYWlsLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NX0gbWQ9ezR9IHN0eWxlPXt7bWFyZ2luQm90dG9tOicycmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT57dCgnZm9sbG93VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd2VpYW5vZnN0ZWVsLm1lZGl1bS5jb20vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGU9PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtOaWdodH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lZGl1bVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3dlaWFub2ZzdGVlbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5saW5rTmlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHaXRodWJcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93ZWlhbi13YW5nLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5saW5rTmlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2NvcHlyaWdodCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb3B5cmlnaHREZXNjcmlwdGlvbicpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5Gb290ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG4gIFxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Zvb3RlcicpKEZvb3RlcilcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCB7U2VsZWN0LCBTZWxlY3QyfSBmcm9tICcuL1B1YmxpY0NvbXBvbmVudCc7XHJcbmltcG9ydCBCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZCc7XHJcbmltcG9ydCBXYlN1bm55T3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB0b0RheSwgdG9OaWdodCwgdG9FbiwgdG9aaEhhbnQgfSBmcm9tICcuLi8uLi9zdG9yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250RmFtaWx5OidCZWJhcyBOZXVlICcsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBmb250U2l6ZTonMS43cmVtJyxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICBmb250U2l6ZTonMS4xcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9XHJcbiAgfSxcclxuICBuaWdodExpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonI0ZGRkZGRicsXHJcbiAgICBmb250U2l6ZTonMS4xcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgZm9udFNpemU6JzEuMXJlbSdcclxuICB9LFxyXG4gIG5pZ2h0TGlua0FuY2hvcjoge1xyXG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgIGNvbG9yOicjQkRCREJEJyxcclxuICAgIGZvbnRTaXplOicxLjFyZW0nXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgIH1cclxuICB9LFxyXG4gIG5pZ2h0SWNvbjp7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGZvcm1Db250cm9sOiB7XHJcbiAgICBtYXJnaW46ICcwLjVyZW0nLFxyXG4gICAgd2lkdGg6JzZyZW0nLFxyXG4gIH0sXHJcbiAgaW5wdXRMYWJlbDoge1xyXG4gICAgZm9udFNpemU6XCIxN3B4XCIsXHJcbiAgICBmb250RmFtaWx5Olwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gY29uc3QgWyBsYW5ndWFnZSwgc2V0TGFuZ3VhZ2UgXSA9IFJlYWN0LnVzZVN0YXRlKCdlbicpO1xyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgLy8gc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaGFuZGxlTGFuZ1RvUmVkdXgoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMYW5nVG9SZWR1eCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZih2YWx1ZSA9PSAnZW4nKSB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9FbigpKVxyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIGlmICh2YWx1ZSA9PSAnemhIYW50Jykge1xyXG4gICAgICAgIGRpc3BhdGNoKHRvWmhIYW50KCkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBoYW5kbGVEcmF3ZXJPcGVuLFxyXG4gICAgICBtb2RlLFxyXG4gICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgV0VJQU4gV0FOR1xyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0gbGc9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjNyZW0nLCBwYWRkaW5nTGVmdDonNiUnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QyXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonZW4nLGxhYmVsOlwiRW5nbGlzaFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6J3poSGFudCcsbGFiZWw6XCLkuK3mlodcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjNyZW0nLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZSA9PT0gJ2RheSc/XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh0b05pZ2h0KCkpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyaWdodG5lc3MyT3V0bGluZWRJY29uIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh0b0RheSgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8V2JTdW5ueU91dGxpbmVkSWNvbiBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nLCBtYXJnaW5MZWZ0OihsYW5nPT0nZW4nPyctMXJlbSc6JycpfX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J2RheScmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV29ya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dvcmsnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6KGxhbmc9PSdlbic/J25vcm1hbCc6J2JvbGQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nbmlnaHQnJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dvcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xb3JrJz9jbGFzc2VzLm5pZ2h0TGlua0FuY2hvcjpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDoobGFuZz09J2VuJz8nbm9ybWFsJzonYm9sZCcpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbScsIG1hcmdpbkxlZnQ6KGxhbmc9PSdlbic/Jy0xcmVtJzonJyl9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nZGF5JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xcml0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dyaXRpbmdzJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OihsYW5nPT0nZW4nPydub3JtYWwnOidib2xkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3cml0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV3JpdGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xcml0aW5ncyc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6KGxhbmc9PSdlbic/J25vcm1hbCc6J2JvbGQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dyaXRpbmdzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nLCBtYXJnaW5MZWZ0OihsYW5nPT0nZW4nPycwLjhyZW0nOicnKX19PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZT09PSdkYXknICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGFuZz09J2VuJz8nLi9XZWlhbldhbmdfUmVzdW1lLnBkZic6Jy4v546L5YGJ5a6JX+Wxpeatty5wZGYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1Jlc3VtZSc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OihsYW5nPT0nZW4nPydub3JtYWwnOidib2xkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgncmVzdW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU9PT0nbmlnaHQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGFuZz09J2VuJz8nLi9XZWlhbldhbmdfUmVzdW1lLnBkZic6Jy4v546L5YGJ5a6JX+Wxpeatty5wZGYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1Jlc3VtZSc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDoobGFuZz09J2VuJz8nbm9ybWFsJzonYm9sZCcpfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3Jlc3VtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbGdVcD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAge21vZGUgPT09ICdkYXknP1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9OaWdodCgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh0b0RheSgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8V2JTdW5ueU91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOidlbicsbGFiZWw6XCJFbmdsaXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonemhIYW50JyxsYWJlbDpcIuS4reaWh1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0J319PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9jbGFzc2VzLmljb246Y2xhc3Nlcy5uaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgey8qIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPiAqL31cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoSGVhZGVyKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJ3JlYWN0LXRvcC1sb2FkaW5nLWJhcidcclxuIFxyXG5leHBvcnQgY29uc3QgUGFnZUxvYWRlciA9IChwcm9wcykgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0UHJvZ3Jlc3MoMTAwKTtcclxuICB9LFtdKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBtb2RlXHJcbiAgfSA9IHByb3BzO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMb2FkaW5nQmFyXHJcbiAgICAgICAgY29sb3I9e21vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZSd9XHJcbiAgICAgICAgaGVpZ2h0PXszfVxyXG4gICAgICAgIHdhaXRpbmdUaW1lPXs1MDB9XHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU9ezEwMDB9XHJcbiAgICAgICAgbG9hZGVyU3BlZWQ9ezYwMH1cclxuICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgb25Mb2FkZXJGaW5pc2hlZD17KCkgPT4gc2V0UHJvZ3Jlc3MoMCl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgU2VsZWN0IGFzIE1hdGVyaWFsU2VsZWN0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbCwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHJhbnNsYXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaW5wdXRMYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOlwiMS4xcmVtXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTpcIuW+rui7n+ato+m7kemrlFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG9uT3BlbixcclxuICAgICAgICBvbkNsb3NlLFxyXG4gICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIG9wZW4sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8TWF0ZXJpYWxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvbk9wZW49e29uT3Blbn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmVcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJWYWx1ZT17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRyYW5zbGF0ZUljb24gc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX0vPlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+ICAgICAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0Mihwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgZm9ybUNvbnRyb2xQcm9wcyxcclxuICAgICAgICBzZWxlY3RQcm9wcyxcclxuICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICBkaXNhYmxlZCA9ZmFsc2UsXHJcbiAgICAgICAgdGFiSW5kZXg9MCxcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgbGV0IG5ld1Byb3BzID0ge1xyXG4gICAgICAgIC4uLnByb3BzXHJcbiAgICB9O1xyXG4gICAgZGVsZXRlIG5ld1Byb3BzW1wiaGVscGVyVGV4dFwiXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlSWNvbi8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICB7Li4uZm9ybUNvbnRyb2xQcm9wc31cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWxcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDpjbGFzc2VzLmlucHV0TGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOmNsYXNzZXMuc2VsZWN0UmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnNlbGVjdFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7c2VsZWN0OiBjbGFzc2VzLmlucHV0fSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdERpc3BsYXlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDp0YWJJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPT09bnVsbD9cIlwiOnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9e3NlbGVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tFcXVhbChhLGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBiLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcnM9IGl0ZW1zLmZpbHRlcihpdGVtPT4gY2hlY2tFcXVhbChpdGVtLnZhbHVlLHNlbGVjdGVkKSAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnNbMF0/ZmlsdGVyc1swXVtcImxhYmVsXCJdOlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWU/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWw/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufVxyXG5cclxuU2VsZWN0LnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5TZWxlY3QyLnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBFeHBhbmRMZXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgZm9udFNpemU6JzRyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpY29uTmlnaHQ6IHtcclxuICAgICAgICBmb250U2l6ZTonNHJlbScsXHJcbiAgICAgICAgY29sb3I6JyNGRkZGRkYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyNjOWM5YzknXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsdXAgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtzY3JvbGxDLCBzZXRTY3JvbGxDXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsQyh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsdG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYod2luZG93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2FsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3Njcm9sbEMgPiA0MDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbHRvVG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZExlc3NJY29uIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuaWNvbjpjbGFzc2VzLmljb25OaWdodH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PjwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFsbFwiOiBcIkhvbWVfYmFsbF9fMk1kVWNcIixcblx0XCJuZXh0TG9nb1wiOiBcIkhvbWVfbmV4dExvZ29fXzI3TzhGXCIsXG5cdFwiamVzdExvZ29MZ1wiOiBcIkhvbWVfamVzdExvZ29MZ19fMnJ0Vk5cIixcblx0XCJqZXN0TG9nb1wiOiBcIkhvbWVfamVzdExvZ29fXzJGUU9OXCIsXG5cdFwiYm91bmNlXCI6IFwiSG9tZV9ib3VuY2VfXzFhNWlfXCIsXG5cdFwic2tpbGxCbG9ja1wiOiBcIkhvbWVfc2tpbGxCbG9ja19fMVRtbmhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvbjJcIjogXCJIZWFkZXJfYnV0dG9uMl9fd0Y3WEdcIixcblx0XCJib3VuY2VcIjogXCJIZWFkZXJfYm91bmNlX18yNHRVOVwiLFxuXHRcImJhbGxcIjogXCJIZWFkZXJfYmFsbF9fM3BSaTdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlckJsb2NrXCI6IFwicHVibGljX2Zvb3RlckJsb2NrX19YdUNyLVwiLFxuXHRcImZvb3RlckJsb2NrTmlnaHRcIjogXCJwdWJsaWNfZm9vdGVyQmxvY2tOaWdodF9fM21pN2JcIixcblx0XCJpbWdEZXNjcmlwdGlvblwiOiBcInB1YmxpY19pbWdEZXNjcmlwdGlvbl9fMkdCREpcIixcblx0XCJpbWdEZXNjcmlwdGlvbk5pZ2h0XCI6IFwicHVibGljX2ltZ0Rlc2NyaXB0aW9uTmlnaHRfXzNDWEpFXCIsXG5cdFwiYmFyXCI6IFwicHVibGljX2Jhcl9fMzQ3UVhcIlxufTtcbiIsIlxyXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcclxuY29uc3QgbG9jYWxlU3VicGF0aHMgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHQoKS5wdWJsaWNSdW50aW1lQ29uZmlnXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcclxuICBkZWZhdWx0TGFuZ3VhZ2U6J2VuJyxcclxuICBvdGhlckxhbmd1YWdlczogWyd6aEhhbnQnXSxcclxuICBsb2NhbGVTdWJwYXRoczp7XHJcbiAgICB6aEhhbnQ6J2NuJ1xyXG4gIH0sXHJcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXHJcbn0pXHJcbi8vIGV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9IG5leHRJMThOZXh0LnVzZVRyYW5zbGF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQge0hvbWV9IGZyb20gJy4uL2NvbXBvbmVudC9Ib21lL0hvbWUnXHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbydcclxuXHJcbmNvbnN0IEhvbWVQYWdlID0gKHsgdCB9KSA9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPE5leHRTZW9cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiV2VpYW4gV2FuZyB8IEZyb250LWVuZCBkZXZlbG9wZXJcIlxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJIGFtIGEgZnJvbnQtZW5kIGRldmVsb3Blciwgb3BlbiB0byBvcHBvcnR1bml0aWVzLlwiXHJcbiAgICAgICAgICAgICAgICBvcGVuR3JhcGg9e3tcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3dlaWFub2ZzdGVlbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnV2VpYW4gV2FuZyB8IEZyb250LWVuZCBkZXZlbG9wZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSSBhbSBhIGZyb250LWVuZCBkZXZlbG9wZXIsIG9wZW4gdG8gb3Bwb3J0dW5pdGllcy4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vd2VpYW5vZnN0ZWVsL3NhbGllanVuZy9tYXN0ZXIvcHVibGljL29wZW5HcmFwaC5qcGcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiAnV2VpYW4gV2FuZyB8IEZyb250LWVuZCBkZXZlbG9wZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2l0ZV9uYW1lOiAnV2VpYW4gV2FuZyB8IEZyb250LWVuZCBkZXZlbG9wZXInLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxIb21lLz5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnaGVhZGVyJywgJ2Jhbm5lcicsICdmb290ZXInLCAnc2tpbGwnLCAnbGVhcm5CeURvaW5nJywgJ3NoYXJpbmcnXSxcclxuICB9KVxyXG4gIFxyXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKEhvbWVQYWdlKSAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYXZhcnRhci0zNjM4MzJlYzMwOGE4NDU2YTNmNjY5ODlkMjFlZTk2ZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmMTAtYzNmNmU4N2JlNWFjM2Y0YjIxMGFlOTk0MTg0NjViZWUuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjQtZWMyN2QxM2U0NTJmNThjZWQ2NjU1MTFkOGJlYzY1MGIuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjUtYThhZDE5ZDc2OTllNWFiNzA5MGRkYTRhOGQ4MjUyZjguZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjYtZTQ5YmFlZTY3MjdhZmY4N2FlODBhMTJlNjhhZjM4NDAuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjctZDQxZjk1ZGJmYmIwMzQyMTkzMGYwZjA2ZDRlZjEyY2YuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjgtMWEzOGNiOTg3Zjg3YTk4Mzg0ZGQ4MzhlZWUxYTFkY2UuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZ0FBQUFFekNBWUFBQUJIZnJ0a0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJ0L1NVUkJWSGdCN2QyTmRSdEhrZ0RnMXI0TndCa2NOZ05kQkFkSGNIUUVDMGNnT1FMQkVVaU9RTm9JNkl0QXZBamtESWlMUU02Z2I1cG9yaUVLbUNuOERINTZ2dTg5ck5aaWt4UUpETHFucXJvNkpRQUFBQUFBSmlUbi9Eb0JBTlBSVGY2ejd2RkRZaEwrbGdDWXZEcnh6MSs5ZXZWbkFnQ21vVnNBTEJNQU1CM2Q1UCsyaFA4VGt5SUZBREJoM2NRL0wzOTJvZjlWQWdEYVY0ditsZ2tBbUk1dTh2OHM5QThBRTlKTi9PKzd4eUlCQU5QUVRmeHZ1c2ZIQkFCTVE4MzdQd3I5QThCRWJFeis4d1FBVEVNMzhYOVI5UThBRTlKTi9PL0szWDhDQUthaFZQdm50VmtDQU5wWDgvNWZoZjRCWUNJMml2NkUvZ0ZnS3JxSi83N2UvYzhTQU5DK1d2Ulh2RTBBUVB1NlNmK3VUdjY2L1FIQUZHem0vWVgrQVdBQ3Vnbi9oenJ4WndmOUFNQkUxQlAraFA0QllDbzJpdjZFL2dGZ0Nyb0ovM1greXp3QkFHM2JLUHJMdXYwQndFVFVFLzZ5Ym44QU1CRWJSWDhPK2dHQUtlZ20vRGNiay84eUFRQnRxM24vTFBRUEFCUHhvdWpQUVQ4QU1BWGRoUDk1NCs3ZlFUOEEwTHFOWmorNi9RSEFGSlRlL3B0NWY2Ri9BR2hjemZ0LzNWZ0FMQklBMEs3ODdRbC9RdjhBTUFWbHduOFIrdjhoQVFEdGVsSDBWOHdUQU5DdU10bS9tUHlYQ1FCbzE0dG1QN3I5QWNBVXZKajhzeTEvQU5DNC9PMEpmMEwvQU5DNkxVVi9YeElBMEs1dXNuLzlZdkozMEE4QXRHeEwwVi9ob0I4QWFGa0o5YitZL0hYN0E0Q1diY243UHdyOUEwRER1b24rVGY3ZUlnRUFiY3Jmbi9BbjlBOEFMZHRSOUZmKzIwRS9BTkNxYnFLLzN4TDZueWNBb0UxYml2NktaUUlBMnRSTjlIZGJKbjhIL1FCQXEzWVUvV1ZiL2dDZ1VhVzRiMHZSbjlBL0FMU3NiTy9iTXZrNzZBY0FXcldqNk05QlB3RFFxcksxTDIvbm9COEFhRkhlM3V5bjBPMFBBRnExWS9KL0ZQb0hnRVoxay96N0hhSC9SUUlBMnBPM24vQW45QThBcmFwNS83d2o5TytnSHdCb1RVL1JYL0U2QVFEdDZTYjV6enNtLzJVQ0FOcVR0emY3ZVFyOUp3Q2dQYVd5UCs4MlN3QkFXL0x1RS82RS9nR2dSUU5GZjU4VEFOQ2VicEsvM3pINU8rZ0hBRnJVVS9SWExCSUEwSlp1Z3Ivcm1meDErd09BMWd6ay9SK0YvZ0dnTWQzay9rUFA1Qy8wRHdBdHlydFArQ3MrSkFDZ0xibS82Tzh4TytnSEFOclNUZTZ2Y3o4SC9RQkFTM0ovMFYreFRIQ2pYdVYxMWVvc09QN1BWNjllL1pHNEtkMXpQRTljMHFxN2JsWjlBK3BkWkNTTVBQaTFPSjN1ZWZuUy9iSHJEcjg4Ri84WStQd2ZlajZmNnpXSjYrenYzV1BSUGQ0RngvL1p2YUQvMHh2UXpkR1c5TEorN2g2ZkJzYk11OGY3Tk95UDdocjhzYnNHLzB5TXF1VDlVLy9rL1dNYVZqN2Y5WGQ3ZnUwZXk5UzR2Nlg5bE5Xc1JoZHdZdDJFWHFySS94VVlXaWFVNklLZEEzV1QvMTNxbndCK2RTUEVyZHQzQVZETXU0dmpiUUpPclZ4WHE4ZzRhWjN4MUxSb1h6VG1vWnY4bHdsdTNDRUxnT0pkMXZFS1RxcUc5WDhPRHI5M0RZNm1SRGxuT3o2MnozTUVWKzNRQllCVUFJeWdXd1E4cEhYK2NZaHJjQVExN3ovdkdmS0wwRCt0T0hRQlVFZ0Z3QWhxZVBraE1OUTFlRUoxSjhheVo4aW43cm41bEtBUnh5d0FDcWtBR0VjSk0wY3EvZDlyUkhPOCtqNTIzek5rbFdLUkdiZ1pmMC9IZVE1RFJyYkRjTDNLUlBOTFlpd1BhVThsek54TlNtVVJjQjhZZmwrMzU5b2FlTGdTK3AvMWZQelFxdi9TTjZXVm1vRlNHTm5YcTZLbDk1RnA5THNwbmF6eThZUWhyMWpnK1h0TVhLWHV1Zm1RWXlJOUJOZ2k5L2Y1THh6MGs1NStUNC9aKzBoYjhta1dBRit6Vk1EVkNqeC9MdHdybFllUG9OMzB6OFJlOHJyVmIrKzFrUjMwOHlSYkFEUW5XZ013RkZwVWtRd2pxR0g5bjRMRFM3UmdsZ2lwRS90UWx6NWRGMmxXZEFGUThpRy9EWXhSa1F3anFPZHZSSEtyRnVMN0tXbVRXYy9IZGZ1amJUbVdBdmljWTZGSXFZQXJsSWNKM2QyQWVoMUdhQlU4b1BzZHZYRk43Q2RMQVRRbnZBMHcyS1hNSFFpTUo3bzFzQ3pxNTRtdDh2b21aVGt3ek00bW1yZFhINERhcFV3cUFDNmdocU9qOVFBZnMrSzFYVXJldis5M0kvVFBKQnpTQ0dpWmh2ZEl2c3RTQVhCeXdVVjRNVXV4NDRVbkphKzNTODU2aGpqb2g4bllld0d3UnlvZzBzQUUyTjh5eFJxVkxFVGovdEw5TGhacGZlTGlMcXZrb0I4bTVLQld3TUdxNU5mZEJiZE13RWx0YkEyTTFBT0l4cVYvNS8ySGlpT0YvcG1VZzg4QzZDNlUwaDNyWVdCWWVmUFJweHhPckU1VTBWTURSZVBXZWY5Wno4Y2Q5TVBrSEhzWVVLUXEyYTRBR0VGZGhQOGVHUG82VDdoVmNOMFdPZXNac2tvTyttR0NqbG9BQk85Q3BBSmdQR1VSdmdxTWV6dkZyWUhkejN5WGhyZjhDZjB6VFRuWUNHamdhM3dPZkEycGdBc0pQRGNhZU55d01ySG5tTWM4b2EyQmVkM24vM0hnZCtLZ242Q3NFVkJ6amswQlBKTUtnQXZaYzJ2Z2xPb0J5bnZPck9manF6UWNIWUJtbldRQlVNTm5ROXRucEFKZ0pOMDFXTGEzUFFTR1RxSlJWMTduL2VjRHd4ejB3N1RsRTZRQU5yN1dmZUJyU1FXY1dlQTVFYnByUUY2SHZMOEdudSt2TFYrSDVXY0wvQTZXaWIxa0tZRG1uQ29GOEN4U2tGUVdDVnFVd29uVlNGejAxTUFtcjhPODN1OC9sT1pZNmZZSEoxNEFCTHNFenRKd1F3N2dBSFV2ZTdRZW9NWHJjR2pMWCtHZ0h5aHlMQVd3VndGZk4vNUQ0R3ZPRTJjUmVDNkU3aHFTWTBkM1A3dExqZWgrbG5lQm4zZVpPRWlXQW1oUEhtY0JFSGtES2grWENqaURQTXlGMjVnY3k0TVhwUjVnbG01Y1h0Yy9EQW5WTXJGZHRnQm96cWxyQUo1SUJjQmxCYy9yS01vaS9LYTM2T2IxamNUUTVMNUtEdnFCYjR5eUFDaUNlNU1uMlowTXppRjRYa2R4NjFzRGg0NzRMWFQ3ZzVmeUNDbUFGMS8veTFEWUtFc0ZqR3I0NlJXNmExV09idzBzYm01cllQZHZmaFA0dVRRaE80RXNCZENjMFNJQUc0YTZCTTZTVkFDTUl0aWs2OWxOYlEzTTY5cUY1Y0N3VlhMUUQydzErZ0tnNWlLSExrQ3BBQmhKZHcyV0V3TmIzQnBZOHY1REN4YWhmOWpoSEJHQWFDN3k0eTNkZmNDTldhYjRxWUgvVEZjdXI0ODNuZzBNKzYzMlJRQzJPTXNDb0pJS2dBdXBPM04rU3NPSGRoVWY4aFZ2RGV6K2JZdnVqNkdpeFZWeTBBLzBPdHNDb0liaHBBTGdRb0xwdU9KcXR3YldoVW5rUnNGQlB6RGduQkVBcVFDNHNEMjNCcjVQMTZmMCtaOE5qSkgzaDRDekxnQXFxUUM0ckpJS1dBWEdYVlZFTHErUCtCM2FxdWlnSHdnNit3SWd1QzFKS2dCR0V1elUrZXdxSW5MMS9XQVpHT3FnSHdpNlJBUWd1aTFKS2dCR0V1elVXY3pTaGVzQmF0NC84bThRK29kOTVKRTdBZlo4MzhpQlFkZVlnN3c1ZVpnT1hoT1ZoenQxUHJ0WXErRHVlMzhPL1BzYzlET3lyQk5nY3k0U0FTaUNZVWlwQUJoWGRHdmd1M3lCcllGNW5mZWZEd3hiSlFmOXdONHV0Z0FvZ21ISWoxa3FBRVlSM0o1YmxHdndQcDFSanJYNkxZVCs0UUFYWFFCVXk5UmZrVHhMZGdYQWFPcld3SDhGaHI3T1owckwxY2svRXRiL3BOc2ZIT2JpQ3dDcEFMZ0tKY2UvaW93NzA3VllGdjJ6Z1RHcjVLQWZPTmcxUkFDZVV3RkRGN0pVQUl6a21yWUdkbC83VGZmSElqQlU2QitPY0JVTGdLSTI3L2lqWjhnc1NRWEFhT3BDL0pmQTBGa2FxUjZnaHY0L0JJWTY2QWVPZERVTGdHcW9JbGtxQUVhMFo2dmdrMjROckZHRlNONS9sUnowQTBlN3FnVkFzQ0paS2dER05kU3UrMW5aR2pqVW1uY2ZrYngvNGFBZk9JRnJpd0JFN2tCbTNVT0RJQmhKc0YxMzhiUTE4QlFMOGh3NzRyZVE5NGNUdWJvRlFEVjBCN0xvM2pEdUVqQ0tZTHZ1WXBhT3JNMnBlZi9Jb3Q1QlAzQkNWN2tBa0FxQXE3Qk04YTJCeHl6SVM5NC9jaTA3NkFkTzZGb2pBTStwZ045N2hwUTNqSXNlVWdJdHEzbjJuNExEUHg3U0tyaTIrcDBGaGdyOXc0bGQ3UUtnR2tvRjNFa0Z3SGk2U2Jkc3pZMXNEZHg3UVY3ei9zdkEwQWVoZnppOXExNEFCSnVUU0FYQWlNYllHbGlqQlpIYWdWVnkwQStNNHRvakFKRmlKS2tBR0Y5MGErRDc0TmJBMGtob0ZoZ245QThqdWZvRlFMVk0vY1ZJVWdFd29qb0pSK3NCZXJjRzFyeC9aSkhnb0I4WTBVMHNBS1FDNFBLQ3gzY1hzN1FqdkY4N2VTN1RzRlZ5MEErTTZsWWlBSkUzbjdPZlZ3NFR0RXo5WjNZOEsxc0QvN241RnpYdkgwM1hDZjNEeUc1bUFWQXRVMzhxNE9UOXlZRy9iR3dOak5RRGZIaXhOYkEwKzVrRlBzOUJQM0FHTjdVQUNPNUxmbmZJZm1RZ0p0aW9xL2gzZ1c3TiswZnFkRmJKUVQ5d0ZyY1dBWGplbDl6MzVtTlhBSXdzMEtqcldZbktsZXR4bVdJYzlBTm5jbk1MZ0tJMkJYbm9HU0lWQU9NcmhibXJ3TGhGaXBIM2h6UDZlN3BkNWMzblM5cmRRN3lrQW43M2hoSlRxN001M2g5VHVZTXRQMmYzdWluWDRlZDBQQWY5d0puZDdBS2dUT3pkbTA5SkJldzZSZXc1RmVBQWtXR3pkSm8zY2RhdnQ0YzBFV1YzVG5jZGx0MDViOUp4WEtkd1pqZVpBbmdXYUZFcUZRQWo2NjdEY28wOXBNUDlJbElINTNmVEM0QnFxRVdwWFFFd3ZtaXI0SmNlNmtJZU9MUG9BdUQvMHBVS2JFbXlLd0JHVnEvRHlLbUJtMWJKUVQ5d01TMUVBQ0pia3FRQ1lIemxHdHduQ3ZBZzlBK1gwOFFDb0JyYWtpUVZBT01xelg3Mk9ZOWo4YkpkTUhBK3pTd0FBZ2NHU1FYQVNMcUpmTkg5Y1VpVTdZT0ZPVnpHTGZjQitFNWdTOUpUS2tEUjBYZks0bW5mL0MzYnJkTEUxQW44ZlRxTTdicHdLZDNGdTh6RGx1bEdsQ09CdThkano4L3lkV3AzSE1OUGIzNU1jS0NCNnkzcTBBVUVaeEo0bnIyUDNKaVdhZ0NlU0FYQStlVDFJVCt6ZEx4eWZQQThBV2ZUM0FLZ0tLbUE3by9mZW9iWUZRQkg2cTZoY3JyZk1wM094KzVyN2xORUNCeWh5UVZBdFV4MkJjQW84bjU1LzNLRTl5b3dicFpFNStCc21sMEExRlRBVHoxRHBBTGdjT1hhbVFYR2xSUCtTbitBYU1PZk85RTVPSStXSXdCbEVmQkg2cTl1bHdxQVBkVzgvend3OU44bi9OVzBYSFNuU1luT3ZVN0FxSnBlQUJTQkE0T2tBaUNvWGl2THdOQlZlckcxTDNBdFBpdlJ1WHYxQURDdTVoY0FWZDlCSlZJQkVGQW4vK2l4MGIvdWFQTWJQVFJvbHRhZEJZR1JUR0lCRURnd1NDb0Foa1czL1AzV1hYT2Z0bjJnWG92UmVvQzNkYWNCTUliY1dDT2dQdDNQOGJubloyeTJRVkRnK2RYQWcxN2RhK1JOam5uTWdkQjlOK1pEOE90TnJuSFh0Y29hQVRWbktpbUFaMUlCc0tjY3ovc1hQOVlkT0VPVzNlT1B3RGpYSll4a1VndUF3Sm5sVWdId3ZaTDNqeFRrL1JJOTNuZGptMjVrc2VDNmhCRk1MUUtRYW03eTk1NGg3N010U1BBa3IzdjB6d0pEUCsxN3lGYWdObWRUdVM3bkNUaVp5UzBBcXBJS1dQVjhYTWlSeWN2eEkzNVhLVDZSZjZNdUduNFBEditZYlEyRWs1bmtBaUJ3WU5EcjNFamhJeHlpNXYyajIvQitqb2IrZDMxKzBpb1l6bTZxRVlESWdVSHZwQUtZc1BzVWIvWDdrSTRRV0pCdjBpb1lUbVN5QzRCcW1hUUM0QnQ1M2VvM3N2ajk0N25WNzdFQ0MvSk43MndOaE9OTmVnRWdGUURmcW9WMnk4RFFWZW8vYkd0djNmVlk3dXdmQWtPMUNvWVRtSG9FUUNvQXFucFhIWTE2L1hwazNuK1hhS3ZnY2sxcUZReEhtUHdDb0toM0huMU5TYVFDbUlLalcvMGU2NEJXd2ZNRUhNUUM0Qzk5ZHg2djYzNW9hRkxOK3k4Q1ExZDF3VHlhN3V1WGJZSFJlb0I3OVFCd0dBdUFxbnZUS1JHQXZyM003alpvMHI2dGZ0TjVMRk5zYTZCV3dYQWdDNEFOZ2ZQS05TS2hLZlgxSEQzaTk1ZVI4djdmMFNvWXhtY0I4TDIrVk1Bc0tUeWlMZEc4Lzk2dGZvOFZpTXB0MGlvWTltUUI4RUtnUDdsVUFFMDRSNnZmWXdXaWNwdEU2R0FQRmdCYlNBWFF1cHIzanhhMi9uU3UwUCt1NzUvaXJZSVY2MEtRQmNCdVVnRzBMSHJFNzY4MUZIOHhlN1lLWHFnSGdCZ0xnQjBDKzVHbEFyaEpkY3ZmTEREMFpLMStqNlZWTUp5ZUJVQ1B3SDVrcVFCdVN2ZDZ2VXNYYXZWN3JFRERybWRQcllJVFhKbXlNQzAzamk4ZXM3U25NdStVU0ZmM0tIMHdIcnZIMS95WDh0K2ZTKythd1p2VTB1cytEMXVtaWFxLzZNZWUzODNWNXh5SG45NzhtR2hlZmZONXpER0xkSVhxei9BMStET29Cemlod0d2SCs4aUF2SDIrWGV6eCtlWDEvem52NXpHdkYvN2ZFUUVZRU1nL1NnVndLMHJEbkZsZzNHaXRmbzlWVTNPL0JJZTdObWxHOTFwKzAvMVJGbG56dEo5WlduZk0vSzV1elFJZ0lKQi8vSmlsQXJoaTllS2ZCNGFPM3VyM1dIVnhFcTBIS05mbUxNRU5xOWZ2c1gwNFN2VGhtNjZaRmdCeHk3UjdLOUlzMlJYQWxjcnhWcjhsMm5XdVZyL0hXcWI0MWtDdGdybFpBOWZ2UTFwSHhFcTl6by8xVWY3Nzl4M2p2OTBsazlVQWhPVjF3VWFmZWJwQ2dlZFg3cTVSZWIrOC8wMXRuK3YrdmE5em5LMkJSOHBxQUk2V0Q2Z0J5TnR6L285NVlMN0o2MnYveTViUExUVTBUeEZyRVlBOVNBVndnNjYyMWUreGFuK0NhRDFBcVloK25lQ0c1UFhkLy96Rlh6OUY2dXA4dEZPcGwra2UvNW0rM3psVDVxaW5CYkVGd0o0R3RpTE5rbFFBVnlLdmk0WVdnYUdyZEtGV3Y4ZmFzMVh3dlFVNk4yYSs1ZTkrMzdNejU3WkY4bitWLzRrdUFDSW5jazFKM3lsbEtvKzV1THpmRWIrWGJ2VjdyTEpMWnhVWU4wc1c2TnlXMlphLys5KzBoeG9wS0kvVnh1T0pCY0FCQWdjR1NRVndhVGZUNnZkWWdhNmRtOG9DL1o4SkpxUzdSa3JLNEI4Ymo2ZGlYeW1BQXcyRUhtZkpuUVlYa3RjTmNHYUJvUS9YMHVyM1dIdTJDdjZRYlEza05teTcrVDdaQXRZQzREaDlCd1pKQlhCMmViOGpmcU4zelRkQnEyQWF0TzMxWEhhanZUOUZsTmtDNEFoU0FWeVRlbGNialR6OWV1TjUvMTM2Nm5NMnZjNWFCWFBsYW1ScjIrdTVMSGJMRnI5M3gwU3pMQUNPSkJYQUZTbDN0YlBBdUt0dDlYdXN3S0o4a3lnZHQyRFg2M21XMW9XK2o3VXZRTG5oWE95MTNUWEhHZ0V0RWp2bDlZRkJmUWVVek5NRkJaNWZEVHh1WEwwVGlKakVjOTM5bkoraXY0OHNTaGVTTlFJNldqN3dNS0E5WHMrYnIrdVBlYjBnMlBuNkZnRTRnY0NCUVIrek54bEdrdGNMekdWZzZDMjErajFXQ1pHdUF1Tm1TVDBBVjY2Yll4WnB2MTRkczdUdUFWTGFZRDh2Qm1ZdkIxa0FuRWozQlAyZWRsY2h6NUpVQUNPb0YzVzAxMzJyZWYvdkJCYmxtMHBSbFZiQlhMVzZZK2NmM2VOZmFUL2w1bk9SMWd1QmIrWWhDNERUV3FiZGR4M3lqWXdodXVYdjVscjlIcXNXVUVWYkJiL0xXZ1Z6NVdwNzMwVmFMd1RLQXJmY2VLN2lYK0hwUk1DL0ZnRlpEY0JKNWY0RGd4NHZrUW9JUEw5eWR6Y283NUgzenhQZTk1NjNINlp5TmRmbnJjaHFBSTZXRDZ3QkNIemRzcXVsNVB2dmMrendyN3Z5ZVNJQUp6YlFrR1NXSEUzS0NlVDlXdjMrT0pYUS93NTkvVG8yelpKVUhUZW9kUE1zTzN1NlIybnJYYUlENVJDZ3ZsUkJPU2ZFQW1Ba3k3UTdMSFAzdlBxQ1E5UzcxTS9CNFpQSisrOVNmLzZmZ3NQZnVqNjVkWFZCc0VqclZNRnF5NUFTcWY0UEM0QVIxQUtrdmplY2owS05IR0Z5clg2UHRXZXI0STlacTJBYVVCZS9KUnF3TFFMMm93WEFTT29CSzd1MmJaVEpYeXFBdmRWODRTSXdkSlVhYS9WN0Fzc1VieFhzK3FRSjlZWjBhenJnNzRuUmxMdXY3ZzM3djd2L3U2MjYrQ2tWVUxjUHdxQjZWeHB0WHp2NTBQOUw1WTJ3K3gyV3lOeVhOSHhTNGxPLzllNXpvcnNJbUpDYUp2cm1OWFJFZDgzVmp1OHhUOThmL1BNL0I4NFoyMnRnc2wwQW95cHYybmwzbDhDdjUwZ0ZCSjVmMWJzM0lNZXFlNHRsWXFmdTkvTTJ4ODBUVDdKZEFQK1d0M2ZtKzQvQTU5MUhYMk41WGRuL1VyVDI1K1hYK3JqdCswb0JqR3lnTjdsUUl5RjV2WGQzRmhpNmt2ZnZWL3NoUk8raXlodW5lcDJKeUg5dHA1c1BETjEyUi8zendOZWVkWDlzS3pEZGxaWmFiZmsrODd6bm9yUiszMFhhOW4yekNNQlo1UDY5eUtOV0hRZWVYeEdBSzFaZUh6bW1SSlJtaVVGNWZYN0hZL0QzcWxWd2FqOENrTC92cTFGTzIvdGh4OWo1anV2dmRjL1gzM2IzMzN0SDMzMzh3NDd2czBpeG4ybTI0M243K0R6QUF1QU04bkFxWUpaR0VuaCtMUUN1Vk04RnZJMTJ0bnZJL1UyNy9HNWZ5QTB2QUhwZUM4dWV6M25jOFRrZjY5ZWIxVWRKT1gzWk1YWXg4Ty9xbXpjKzV4MkgvZFR2Lzc3bmMyZlBBeTBBemlUMzV4NFB5dTBFdis4UUM0QXJsZU5kN0tTU0RwQmo3My9GNUtNcnVlMEZ3SzdYd2VlZXo0bEc1bzc2ZmVWWXpVcDVmVDdtMk0zQ012S0RiMW9rVGlKdkR3TTlHK1V1SS9EOFdnQmNvYnhmcTE5NTZnTmxyWUpEY3RzTGdGMlQ3RkNJUHJxQTNQWmFtcVdnSTc3UFM4dER2dkFpY1JKNW5YczhheW9nOFB4YUFGeVp2TDBDZUpkWjRtQzVQOHo2VW5RYlpuTnkyd3VBWGUvTGk4RG43anM1UCtZRHJ0bThYenB3Mi9lY0gvcVBYeVJPSnZmbkhrK2VDZ2c4dnhZQVZ5VHZkNkV2RTBmTCs0VnpKOWtxT0RlOEFDanlldEg5bktzdmk0RndSTFplczU5eS8wTHljMTdQdDBkRmtlcHI5VDRQTDFxLzF1OTUxL2ZGTEFBdUlHK3Y3bngyMGxSQTRQbTFBTGdpZWZ1ZTNXMUdxeHVab29GcmN0TWs2d0d5UGdBaGViMlFLSlAwb2o3dXhucTkxTzgxMy9oZSszMi9iQUZ3RWJsL0c5SkozMkFDejY4TDkwcDB6OFdiSFBPWWhmNVBLdSszTlhCeWk2OXNBZEFjcllBdnBMWWxMWTBqdHIyUlBEY0krakdkeHc5VGZFTTdzOStHV25qV0NmMURpdmxGcTkvVDJtZ1ZYSzZGU0t2Z3Q3V3BFTnltTEFKd1Vma01xWURNTlZnRW5xZkg0TmRhSmthVHRRcmVLb3NBTkVjcjRNdGJwaDJIUVhUZVpXSGVTY2pyNnZKWllLaFd2eVBUS3BpcHNBQzRzSHBVNDA4N1B1eXNnQW1vMFlGSXRLZThWczZWRnBxNmtwNWJCY2JOa211VUcyVUJjQVc2UlVBNURHTFhzYU5QdWNaRWsycUU1MTF3dUNOK3o2UXV6SDhPRHI5empYS0xMQUN1UkEwN1B1ejRzRlJBdThwQk03UEF1RThLenM2ciszMC9kSC84Rmh6dUd1WG1XQUJjbDNMSHNlMllTYW1BQnVYMUViK3ZBME5YYVhlRWlCRjFpNEJ5Wi84UUdGcXUwWHYxQU55U3NnMndURGlyZ1hGL0prWlh3cnZkRzhpdjNmL2QxbTcwbUcxSHE4U2xmWE1ONWZXeG9Zc1VlMjUrckNGcExxTXN6RXVrWm1oeUx4OWZwUGhXemx1ek92TGp3SkM4KzhBZzU3MERRS3R5ZjBjeURYc0FvRlc1L3pRNEZjY0EwS3E4dXlPWlZBQUF0S3luSGtBcUFBQmFOVkFQSUJVQUFLMnE5UUJmcFFJQVlHSjY2Z0drQWdDZ1pkMWsvMGtxQUFBbXBxY2VRQ29BQUZyV1V3OGdGUUFBTGV1cEIxZ21BS0JkUGZVQWtkUGxBSUJiMUZNUDhDVUJBTzNxcVFkWUpnQ2dYVDMxQUZJQkFOQ3lickwvSUJVQUFCUFRVdyt3VEFCQXU3ckpmcmFqSGtBcUFBQmF0cU1lNEV1SkVDUUFvRjA3NmdIZUp3Q2dYVDMxQVBNRUFMUnJSejNBbzFRQUFEUnVSejJBVkFBQXRHNUhQY0E4QVFEdHF2VUFYNlFDQUdCaWR0UURTQVVBUU91NkNYOGhGUUFBRTdTbEh1QlJLZ0FBR3JlakhrQXFBQUJhdDZNZVlKNEFnTFp0cVFkNGxBb0FnQW5ZVWc4Z0ZRQUFyZHRSRHpCUEFFRGJ0dFFEU0FVQXdCUjBFLzZkVkFBQVROQ1dlb0I1QWdEYTk2SWVRQ29BQUtaZ1N6MkFWQUFBVE1HV2VvQjVBZ0RhOTZJZVFDb0FBS2JpUlQyQVZBQUFUTUdXZW9CNUFnRGE5NkllUUNvQUFLYmlSVDJBVkFBQVRFVTM4WC9lV0FUY0pRQ2dmUy9xQWI1S0JRREFSSlFpd0kwb3dIMENBS2JoUlQyQVZBQUFUTVZHUFlCVUFBQk14WXQ2QUtrQUFKaUtGL1VBVWdFQU1CVWI5UUJTQVFBd0pSdjFBRklCQURBVnRSN2dzUzRDM2lZQVlCbzI2Z0ZLS21DV0FJQnA2Q2IrWlYwRWZFNEF3SFJzMUFOSUJRREFWR3pVQTBnRkFNQ1ViTlFEU0FVQXdKUnMxQU5JQlFEQWxOUjZBS2tBQUppU2pYb0FxUUFBbUpLTmVnQ3BBQUNZa2pMNVN3VUF3QVRWZWdDcEFBQ1lrbkpTWUswSGtBb0FnQ21wOVFCU0FRQXdOYlVlUUNvQUFLYW0xZ05JQlFEQWxOUjZnQzlTQVFBd01iVWVRQ29BQUthbTFnTklCUURBMUhRTGdJOVNBUUF3TWJVZTRHTUNBS2FsV3dDOGxnb0F1S3kvSlRpelY2OWUvZEg5OGFkVUFBQk1rQ2dBQUV4UXJRZTRTd0RBdEpRMGdGUUFBRXhRYVJLVUFJRHBLVHNERWdBd0xiVWU0SWNFd0ZuOFB4ZWVkRDhVOXl6ZUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDV1VsRVFWUm9nZTJZdlc3VVFCU0Z2d3RwVUNDUUlDRnE2R2dvS0drb0tLREtDd1NLQ0xvZ1hnWXByd0IxaEFBcFVpamdEUkFVU0xSQWZvc2tSTmxkY1NneUVjWmFqNi90MmMwdW1rK2FZalhYZDg3eG5iODFaREtaekRSaGRRR1NEb0RaTVdpSmNXQm1sMklCNXh4SmZpWVMwNFZhRFI0am13bUVkS1ZXUTY3SW1Na1ZLWklya3BCYURUT09KTEczOGNYTWJ2bjFWQ05wRjVodm9RSG9YcEdyanVkcmtXVEFYRXNOUVBjMXNoQkVkR1VPT045U0ErQXpzZ3YwSy9wbWdNdU9ISFZjaWZUMWdiMjZCTFZHekV6QVZpUmtUODM1MnNESVp0RFF6VWdnOWM2MVUvb2RNK0lhMjJzazlWblN4SWhyN1ArbUlwNXpCSnBWNUptWnZXZ1FEeE5ha2VnZm9BcGlPOStaclpIVVJxYXFJaE81YTYwNHpwR2wwak1UdVVZOGxFL3FzYTZSM3hWOW42d0FjTnVScjJ5a3FpSUN0ajBDWFViTWJEQms4RlBLdDlaZmpwUmVJenRtVm5YUCt3ZHZSYUI2cnBhTmJBR3ZnZDZRMkY3bysxNlRvNWdyTFpJMktoYnVZTmhWWHRLOHBHVko3MEpibGpUMGo1T2tYa1h1alZFWWVSWFpoUzUyeURzYnlmdlNtNmZKMUlydEhrdVNZbHZvVU1Jemp5SWg3bTAveFJvQldBVzJKWDJROUZ6U3RhckFNT1VlUzFyajVPV3NSdkttLy9BaDZXbGtDcFFaRkV4ZGw3UndLbDdTY1lNOFQwWmhaTEdCZ0NMOTBOcXc2TlhudmNaRCt6STNHYVBNRDI5Z3FqVXlLa2F5Mk0vaWk2UGJpTHZzWm5ZbzZTWndQN1FIdEx1eXh6Z0NQZ0xyd0pxWkhicjF0UjFSMGdYZ0xuK04zV21aNmhzbnd0ZUJ0MmEyM3laSmlxK0VBRWk2Z2E5YTViZitPY1g0eVl3VUNkVzZCendNRGVCTmFPL043R2dVNDJZeW1jejA4QWZ5K1dldHUrdEErUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNOVWxFUVZSb2dlMll2VW9jVVJUSGZ4dHNaT05YaEdBbmFHZVRWMGlSUWl1cmRDYUZSQ3REU2d0OUFGL0JOekJwUXdpU2dCYmFwUXlrQ0ttamJoWkIxSkIxY1N4bXhQVXk5OXd6TTJlV2xkd2YzR0wzemozbi9PZmNqM01ISXBGSTVDSFJVRHh6RGpUckRrUVJ3NGowd0NPRmtXT2JXQ29SakVFajVNUWdrS29FWTRnWjZUTXhJNzNFakJoU2UwWitrSjVGRnUyMFpBeEE5WXhNS3NacmFBQ2pKV05RTXdra25uYUZyam9JTVNiNFNJQW5CajVvQUIzQnliaUJqMm5CZmdmRnk5Sk1yUVJvQ2YyblFoQys5dE94SWIyTWsyeU1pRVlJMk85Y2JlZTNKRVRsV3l2RStpd3BJa1RsTzJaRTRDM2hNK08xTTJZZ015SmVnRHlNVmZWZFIwYXNoVHlvakF6a0dsa2pmSTRzT1dNR2NvMW9jQXZFdnE2UmEwL2ZkKzd2U004VTlsd2h2b3drd0I5TmdGb2gzUnpudDdoVjY2WENubFpJbTdRd0RhSVZBdjY1NmdwcEFaOUlpejJYVHRiM08yQ2oxNVk1ZStRdjNDNzUxZWtFc0F6c1ptMDUreThQWDNXOVp4ZitIZTg5emhMZ2NRVzdUY0h1anRaSWtha2w3UjVMbEx1WGpBT3ZoUDVhUG54c0lwOE5YZUFBZUFjOEZleE1rTlphSDRGL0Fac2JOZWhnSmVEVUoycUs5S3FxRGI2M3ZhbER5R0tCQU54Ny9WWEpzWXZhNElZS0NDbDd1aGZ4NFhLa2ZkRGlIS2tUdFUrclhhc3UxRUtLcFAwQ21BVmVaRzJlY2lXN3hGL2dFUGhLdWpGY0dOdlBaWmhVMEJid2pYS0xPUUYrQWR2QVMreGZUQ2xtZ0ZYZ0EzQ0dQL0JMNEF1d0RzeFpPYmY0M0puSE1QQWNXTWdhd09lczdaTk9vVWdrRXZtUHVRRlNCQWZWRWpoOFp3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRUZrbEVRVlJvZ2UyWlRZaFdWUmpIZjhlWkdpdXpCa20wdEJJR281d1d1UWd0NklNS1EzQVdJZG1pb2lLcGhSQWtGRUdMRmtFVWxFRkdrRVJFUkRXUTBFS0lDcVlQbTBZb1JOdFlidndZYThLUVVrbkh5Zm0xdU84dzU3MU9NK2U4Yys4bzRXOTE1c3g1UHY3M3Z2ZmM1endYL2llRUtweW95NEJsd0VKZ2RxYjVIOEN2UUg4STRhOHE4c2xDYlZmWHEzdXRobUgxRS9XR21SUXhUKzJyU0VDWkVmWFozSnl5ZjFycVpVQS9FRis1VVdBWGNCQVl6blRaQ1hRREMwcnpHME1JcitYbWw0ejZjZWtLdnFjdW1xYlBXZW9hZFYvazl4LzFscXJ5TGdkY29ZNUd3VjZvMlA5OG01KzU3NnIwSHdkNk93cXlYYTFrMXl2RldGbTZXTmRYSFlQU3JWOVhlWUR4T0R1aU9FK2wyTXpLY040R3hNL0NqdHdFTXhpSXh0ZWtHQ1FMQWRwTDYzTjNweHhPUnVPa0YyeXlrQkRDTUhBNG1yb3UxYllGNHVmaVVJcEJ6aDJCNWx2K1VLWnRFdXBDNE81b3FyK09JQStVOXZrN0svWWYxSzFSakVOcWU1VXh4Z0sxcVR1alFFZlZ0Ulg1N2xRL3NwbjFxZmF0bENqTGdhK0FTNlBwSDRCdEZGVnNMaDNBamNCYWluSmxqRStCKzBJSW95MzRURU45ekhyWnBzNnBUVUJEeE9QcTN6VUpPS0krYmZIT3lpTHJwNlZ1QU40b1RSOEQ5Z0FUSFlxV0FsYzN4Z2VBWDByL253OWNDZndNYkFHMmhoQ081ZVNValhxenhWbGhqTi9VQjlVTEo3SFpGSzNmRk0ydlVnZHNycW1PcSsrb1Y5VXQ1TnNvNkg1MWNZTE5HVUxVNTBzQ3lneXBOOVVsb3JzVTdQWkV1eVloNnJwSkJNUWNWQy9QeVRIMXpYNVhOUDR4aFBCMVRwQUdiY0FyaVdzWEFSdHpuS2NLNllyR3JSNTJWakwrNEtkd2Y0N3pWQ0h4dWhNNUFTSnlpOHd1OVlMVXhhbENEc1FCOHZLWkdWS0Y3SXJHcTlSNUxjVGFrN2wrYndoaEpIVnhxcEF2R0Q4WHpBRmFhZE1NQVBzejF2Zm1PRThTRWtJNFRmT084N0Q2bG5weFJxelR3RE9KYXdlQlZ6TjhrMVByYndaNkdOK0tud1I2MUErQW4yZytubzZ4TlA0amhOQ3JkZ0V2OHQvbDBSQ3dwdFkrc0RwWC9UTHhwVlltTGxIdVViLzN6QkpsaThVSnNYN1VudWtLaVh4ZFlkSDA2MVp6dS9oTlpCMGpMWHBaNzVlbVI0Qjl3TkVKVEJaVFZMZ1RFa0k0VEhORG8zN1VMdlZZZElXUHFCdlV1WlBZVEZqOTFrSE9IWG1kWXVzRitCMjRMWVJRUGwrY05aSzJYNHVTL2Q1bzZwRnpTUVNrdnhCWFUxU3ZBTHREQ0ovVmxFL0xwQXE1TmhwL1UwY2kweVZWU055bU9aN2h2eU1hbjhxd3l5WlZ5RkEwWHBMaFA2NlVXK2w1Vll2Rlo3RXgvcHhzeTQxc0ZxZ25JN3RiWnlMWHFaSzZxQ0ZnakRjVGJENk0xZytxdVEzemVsQ2ZLNVVjTHpuQkNVNmRiVkVaeHp4UmQzN0pEYnBHTGRRSHJJaW05d0x2VWxTL0FWZ09QRXJ6VjZiUGdkV05vOEM1UWVOM3Y5TjB0cXVkVTNzK0M2aVhxSnZWVTVNSU9LRytySFpNN2JFYVd2NjhyQzZoYU5uY1FkR0hrdUlvMndmMGhoQUdLOG53UE9jNXUvd0x1ZXg5bG5WK3RLRUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRHZVbEVRVlJvZ2UyWlc0aE9VUlNBdnpHRHdiaE1NZzFtWEdvYVlUendJSmR5U1JvSkQ1THhJRW5FZzFJVUtjV0RFdVZTU0prOFNNSVVOUTlUUkxuZmlqUzh1THhnQmlNU1ErNjNoL1VmLzlwbjVoOTduZitjTVdtKzJyWFBtYjMzV212UDN1dXN0WDc0VDhpSmFaM1JxVFlReURmT2ZRMDhCNjRCNzJMU3gwUWVzQUo0QlB5S29YMEJUZ0tqMnRPSS9zRDVtQXdJdDIvQUJxdENVWTVXWCtRWTZKMzdDZFFERGNqT1dpZ0VLb0RpMFB0MXdLNEkrbmx6QW5jSER3TWxXYTdaQlpnTFBGYnJmZ2NtWmJsdVJpWWd1eDhJMnhMeitrVzRkKzVxek92LzRhQVNjb1g0dko1bUl1NW1qVXhBaHZPdnIwcENRSXFiU3M0YW53bGRESXZuNHQ2Rm00YTVWbTZvL2xDZkNSWkQ4a0xqcmQ3SndtZlY5L3JBV2d6NUFyeFN6eU1NYzYzb2UvRXNDUUcxcE0vdW9TUUVJR0hPUnlWbmVoSkNGdUg2K2JpRjVBQ25sSXhueUpHT25WemdqaExVREN5SWFlMUM0RGp1eDNhRjcrUW8zNEZ4d0FXZ3QzcDNDNmhEb2xncjNZRXh5SVlVcXZlMXdIemttNUlZeTBnbVlBeGFIVkNRcEFFQXkzRXZZNXp0RGJBV09jSW1yRWRyTmJBMzlPNDljSi9XazZKeVlFaXEveFI0R1BwN0VUQUllQUJVSXhmOXZWRW5NK09SWENIWXZSZkFZcUJiRzNOMnEvRzcxZnRLNU91dFk2b1BpRXNmSExmaVlTNHJvVStBVW84NXJSbXlDZGVBY0dzQ3hzYXB1S1lpSkd5cTU3eXdJVlg0M1pVR29KOUZRZDhRWllicTN3WXVXb1NreUFWMmVJNHRRVEpFYjN3TktWUDlxTW5PUk5JWDM0ZUZsc1Y5RGRIalBsa0VLS3hCWmhuUTFYZXdyeUZQUXdJNkhMNkcxS3QrSlZJT3NuTGZPUDRSNHU2OThEWGtMT204b0lCb1pab2JpTnYycGNheXVLOGhQM0E5emhMZ0FORFRJT3NIc041emJDT3cwN0MyS2RiZkI4d2o3WXBYcFo2UEF2ZHcwOU9BOHRCekRYTEh0cEk1UEdwQ2FseUoxb0g3QU9lSUZoRHFFR1VtY0oyV0lVbzFraUcyQy9NOEZXL0xrSUFCU05HdkFuc1YzOEdhUmxZQlIwTHZ2aUgxcnVaV3hwY2lFVzRtWHVFV05OcUZNaVRFMXJuRGF1UzRaU0pUOUJzN2x2L0lIdEpaMjB0Z0NpM3ppMytHci9zdEJXYXA1NlYwSUNQQTM1RFpwTlBQdThEcFpOU0pqcThodzFUL1VoS0taSXV2SWJwTTg4R3dmbmZWLzJxWVo4YlhrQ2JWSDI1WVgwZktVV3Blc1RPWHRCdDlTOXN1TjZBWUNWdUNlWk1UMDg1QUQ4U0FRS245SG5PT3FmR04yQ3IvaWJJUk4rVFlSdXNaWEQ0U0dldXhLOXRKUnkveWtVQlBLL2dRTVhBT2N2dzI0LzQ4OXdzNFE0VEtZZElVNDFiai85YXU0SHE4RGtVdkpEZjVTbVlEUGdIYmNkMXZvbVR6OC9Kd3BHUXpEYWxEQlJYSTgwZ0MxWmkxZHAxMDh1LzVEVWV5YldhWVZta0FBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ2JFbEVRVlJvZ2UyYTBXb1VNUlNHVDd5MVd0cTZxMzBEN1ZaOGdXSlJYOENMdXJSVWZSS3Y5WEZFTDd6VTE3QlNRUlFLTFlJNDIxNS9Ya3hpbzV2TkpET1pTYXo5WVdDWWJQN2s0K1RNU1lZVnVkUi9JbUFDdkFWbVFBVzhBVFp5enl0S3dMWUcrRnN6WUR2My9JSUViQzJBTURvREh1YWVwMWNCRU9YREFQZUIwd0FJbzlPVXkreEtLaU1ST1JHUkt1TDNWMFhrWFRHUjBaSFkxUGVid0hGRVZKSkhwaTJFeVlrVDRLNStkaHM0aW9USmx6UE1KL2EvQjBOZEoxeUpmY3o1TXBzQSs4QU5ZQVJNZ1M4Tk1NTXRNdy9FSEl5ajcyb1JNQUVRUnM4OEhyc0IvZnVEaVlBQUdIbDh4b0VlNldFaUlRRFdQRjYzSW56U3diU0FBSmg2L0o1SGVuV0hhUWtCZFVLdkx2QWN0bWgyZ0RENkRPeGFmbnZBWkZBWXduZXhqYkk4WWNpaW1STENBUUpEd05COU9jM0pBUUo5N2dDMFliSklHQzBBQWY4T1lBVTRhTENlWVgwRHNNOGpyMFJreVJ1eXRCcUx5RDFYZzFMcWg0aThhT2kvSkNJdmYvY3hOOEJNZWdCUlNpbnRqNk41cEpUNjd1b0hySXZJVVlOOXBaUmFGdmt6SXE2QitsYXlNVzJRRDZsTUkvVEkwN1lWMFAvOTNCTmdnMkdUSGVxMzA0cGpMaUhKWGdGM25IZ005L3ExZFFEc0FPdjZlZ0o4YXJCdHJ2TFVCYkZLQVFGQklMRTZBeDRFTEx1ME1JbEJ3aUVTTHJORFlOL3llMHE5a1d5ckxEdmdRMkRzOEx1cDI0YUQ2QWpqTzFpRm5OblRRbGlEeCtaTWlqTTd0TW1KQUppWXlGenorQ3dIZWhUeEplV3h4Mk9hRlNJUzVpUHVpcjBHZk1zT0VRbnpsYnBLWDlmWHRDZ0lDeWJwRG9BK0Vqc0RURDZJaERENUlZdzZ3SlFEWWRRQ3Bqd0lvd2lZY2lHTUFtREtoekRpSXZ5Rnc0ajZHOEJySFoyZit0NTl4cjdVQmRRdldIekYyYmQybkNjQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDTEVsRVFWUm9nZTJhVzA3Y01CU0dQL0ZPRVpjVzJBSE13QTVHb01JR2VLQ2pvdEp1RWNvQ1lCdFFVUWxSQ1FuZVlPRFpmWENPbUVhSmZaeHhISWZ5UzBlS2t2RWZmem8rOFVVRDcvcC9OQVRPZ0Fud0JQd0VCcDMycUlGMnNRQ21GSlBpV1M4MG9ocEM0Z1hZNjZ4M1N2a2dlZ0d6QXp6amg1QjRKdE5odGdIY29RZkpMak03d0ZaeHZRWGNFd2FUUldha0poNkE3ZUplN3pKVEx1eGV3dXhTWGRqM3ZBNnpJZkFOV0FFK0FtUGdwcUpOWjhPc0RxSUtwcXdsTW9IeFFVaDhkM2g4VmJSdkZVWUxZYkJEcVU2ZmxCNnR3SVJBR0dEWjRiVVc0Qk1WSmhUQ1lBdTdUajhDdmFMQU5JRXcySUplcXZGTVBtazJoWkQ0alMxczBSSDJrNXdVUnJ1SzFZVElrSGpTakFsUkJra0dNK3R3MG9BWVdsNEJESW1iQ1JkSUdhYXNSZURLNHp1aDVnemdyQVVJRjRqQlpxSk9YeFRlcDFVTjI4aUdEMlRGQWJLdThINlVIOCtWWHBSYTBkNDVEWElSeXpSQSs0NW5JMFg3ODZxYkE5SVd1OEYrblJZcitxSXA5aWRnczQ0dzFlZDNPcTZBUTJ4TnJHT0wvSmZIVXpYTGp3cmFWQ0NoOFFKODlrRzBBUk1USkFoQ05Pc3d1K2JmZWVJWXU1QnM2dGZKQ3ZnYXV4TXNhN1Y0bGhSaUZoalh4a3F6WjQ4T0lRcXRtUmg3OXNZMTRWTkladVlkUGd0S2p5eE9VZzRjSG1ORisyek90aTZwbnJHWGdUK2V0bG1kTmhyZ0ZqdExmeWhpbkJ1RUtQWUtvSlhDMWlvV1RLY1FvbGxoc29BUU5ZWEpDa0lVQ3BNbGhFZ0xreldFeUFmVEN3alJtL2dMaDJnQW5HQ3o4MWhjMSs2eDMvWFc5QmYxVnFmN2lZa0Z1Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUMwRWxFUVZSb2dlMmF2V3NVUVJpSG56ZnFXZmlSSW5vMmlwQjB4a0t3VnpFYURFUUxyYTB0TGRPSm5mK0YvNEJZS1doTUZFSmFDVmFDR0pzVWlTYmdCeVRDa2NqUFlqZmhtSnVaN0c1MkwzdTVQREFjT3pjejkvN21mZWZ6Rmc2cE9aSWVTR3FwdnJRazNYZnRIdkJvR1FVYTFYZFpZUnJBWlRmVEorUkg5YmJzbWU5dVJxOEtXWFV6ZkVJNkN0V1Fqczd1VlkvMGtSQXpXd2MydW1KT01UYk1yTU0rbjBlZzN1UEVHekVoSVlYQ3l4eDIrejRHY0dyZmhKUk1NNUR2alpZNmgxWkl5SUh4aU5lMm8za0tsNDBrRmFqV2N4NEpjV0NFNUJyc2RSYVN5eU4xbUxWQzVCTHlHMmhWWjB0aFdzQWYzeGRlSVdZbVlLMUtpd3F5bXRyV1FXajZoY1NGNTZ1eFo0ZWZ3R0piK3BwK2ZnT1dQZllGUTM0M0laVmlaa08rZkVsbjhOdldjY1RkSmpSR1lIOW5ybHo3TE9nOUlVR2JZa0s2TmdWTHV1aGtuUTBVcmNjWWtkUWt1Wk5xVDZNa0hkcCsvc2p0a1c0UDlsQ2JTODV6cWFFVnFqUUNQQUplRUZpY0N2RExlYzR0Sklpa3B1L2kxU25Ua0hSRDBqTkpDNTQyc3JBazZZbFQ3MldnYkVoZ1ZNaUFwTTJZa0F4dCtQZ3JhVWJTbEtTcmtqck85cExtUGZXMkpNVWlLR3JJU3NsQ3hpUWR6MUR2aTZkdWNER0UrQmdCVDB6NmVqQXJadmJlekxKc1JuMGhGQjBmc1ZrTC9QUDJpcVIzd0RRd1kyYWxyRGVTaG9BeFlCd1k5QlRaa3hCZjVYUEF3elFoNlRQd0NwZ0Y1alAyT0pLT0FGZUFXMm02RGh6TGFjc09SWVM0WEVyVEZMQXU2UU9KdDZiZGdwSkdTSHA4SExnSm5NN1EvalpSejVjaHBKMlR3TDAwK1ZqTTJWNDc1UTcyZlNScVM5OElxZE1sUk5TV3Z2SElHdlg0MDJlRFhTNURva0xNYkJPWUFKNlRYQVowbStYMHR5ZFNXNExrMm01SUdnYnVBcFBBTmNwL3NlQWY4QWw0VGJMSUxvU3VmMXdLNzVza25TQloxQ1pKdkhhaFlGT3J3QnlwOFdibW5rMjZpNlJoU1kvVExYcnNYWll0U1I4bFBRMXQ0NHRRU2lNdWtnYUIyOENkTkFHOEFkNENzMlpXMXNueWtOcnlINTN3aTI1a1lTWVBBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ25rbEVRVlJvZ2UyYXYwOFVRUlRIUC96SUdZTklESEEwSmliUUNaMy9nRkZESndWYTIxSlNtZXNNSGY0TFJqczZEWDhBbXRqWUdxT0ZoUkZEUWdnSUpCSVNEbkpLUElxNUM1dTU5MloybHQxajdvNXZNcm5zN0x5MzMrKzhON1B2NWc2dUVEK2VBRFdnSG1tckFmTTI2WDVCeURSUXlqd054YU1Fek5pZGtwRGQ0cmxjR0wvdGprNFZzbWQzU0VKYUJrV0lsc251MUlqMGxwQWpvRm84bDh5b0l2Q1RoRURjNjBUTUdFMUkxdlRxczVydnZxc05oM0RMVzBpZUtDdjlZcmJFbkZxYWtLNkppTWh0TUdSd0FhaG5zT200aUdqb0dpRkJpejFtSVVFUmlXSFgwaUFLa1Y1YXpmNFQ0RnJnUTJ4LzltTDIzZmVoQmx5WDdMU0kxSUg5d0llMEEzc280clh0RjB3SWJ4ZEM1eHgvZ1BWRSs5bjQvQVZzQy96VWxQY0pLUnFqU3Y4WU1yZVdyN2hOYUtrRmw3dHpCZFZaMEhsQ1ZFNHVJZTNjZ3U5WTErUEt1R2pXU0JsekpwVnMwNWdKSGJiR0JYRnF0eERONTZaMW5XdHFhVVpUd0FMd0RqaDAySWZnd0xvT0Z1SkNHZm5zTllrU2NCOVlCcjRJUHRLYzVXNENMeXk3VldXc0p0Q0pmdUNmUjRnUEVwbGo0QU5RQWU0aGwwbWZCTHRUM0Jua3hJN2dNQVMyN1VQUzFXOC9CRnYxWlpnR1h3V0hXcUVwSWVza0hBaTIzMXdHcmwwTDVIMTdCM2dQckdGU0pLLzN6U2dtWXJQQWlIRC9RcnZvQ3Y3RitoMTRDVHlpTlcxY0VSbkFySkVLWmtMK2VwNno0aUxxaTBpYVdiamJhQlhNY2V0SFRMVFdoTEZUbUJtZkJSNEFOMVA0YjhJWitUeUVKSEVEbUdzMENldUIvcEp3TG5iZmRoYlRkM2NubDU0UkV0TWhoSk5MejBSa256aCs5S25pT1F3WjhEajR6M25kTTRIK20wVlIyTVpVMmMrQmpUd2RUd0tMbUJkWUVmK09PQVUrQTB2b0JXWHVHQUllQTY4d3BYaFc4cnZBVytBWmNLc2R4SDFJRzYxTG1mV3NHQUdlQW0rQXJVWjdqZm5EamxRUVhxSHJjQWE0S3llKzF4NXpPd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2plc3QtbmlnaHQtOWVhNzQwMmEzZjQ2MmViYjZhZGM2MTJjZWYyZjg1Y2YucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2plc3QtNTQ2ZmRiMjIyOGI0YzBhYWQ4NGU3YzA0ODZjZjBhZWIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUV3MGxFUVZSb2dlMlpXNmhWUlJqSGY1OGRGVFMxVXN0SUxLU0xRcEdtWm1WWmxva2hhRUVFYVZCWkdpZ0sxVVBRU3hJa2lYanBvWXNXa2JlZ0YrMkNSQ3FabFdXcDNjZ3NEUVRERjdQQXZPVDkxOE9hbmN2dDJYc2Z6em43YUxSK2NGZ3phLzd6elRkcnpYeno3WFdnb0tDZ29LQ2dvT0QvaXRwWG5hRDJyNGY5ZHZVdzJrTGVCcTRHM2xmZlZhODQydzdWRmZWVHRhdmFvRDZoN2xJM3FjdlVCOVNHcysxanE2S09VaGVWM2V1bGpsWlhwTWtQT0Z2KzFRVjF2am91bGJ1cUkzSnR3OVh0NnRTejUyRXJvM1pXMStmcXI1YTFYNkN1VnVlM3ZYZDFRbjFUdlRXVlR3dXVha2QxcFRxajdiMnJBMm8vOWUwYW1pN3FsdEx5LzgrakxsR0gxdEJjbHlKNXo3YnlxMjZrNkx5K0NicTU2cXkyOEttdXBDVzdzZ202eTlUZDZ2bTF0T2RpcHBWbkNQQlJMVkZFN0FKV0E1UHE3bEU5VWFlckk1dW92Vjc5VGUxUVRYZXV2K0gyd0hFQWRaWjZVU1ZoUkh3UC9BZzgzRWErdFQ0cGQ1Nm9kbGVQcWMvVzBBOVRkNm85MnNySFZrVzlWSDBuNWRIcjFMVnExeHA5bmxKM3BNamRxNjE4YlRYVWw5UTE2angxcERxekNYMGExTEdwMzVpMjhMUFZVTnVyNDB2TFZIMU1IZGpFdmgzVTU5VVgxUFBxNjJrZFVRZXEzV3BvT3FvajFNbnFxbEppRXFueFFxQTM4RXRFSEtsaHFBZHdNYkE5SW80MjArRUFMZ2U2VjVCc2pZaURTWHM1MEZnUUN1QzdpRGhXcGpzWUVWdlZuNEU5d0JKZ0svQk5ST3d2L1NvcHNVUHRYY1hSaWVxUnBOMnIzdFdNeVQ2ai9tNTFCcWs5MWZVMWRIK3E0NVBkQmVuZXBsUWZhWFl1anlsMzRGZ1NIazNYQlJVYzdhYitWVGJneTJjNDJlRzV2bytZdmVsSzJ1ZVM3cUI2YzFsYkYzVjVhajlrOXBIZ2xBa24zV0QxVy9WMVUwTFNEaWh0NWhYcCtwQ05IL0NUZ0M3QWJtQkx1bmVtMzVldXlaVVhSNFJWdEgzUzljZUkrRExmRUJIN2dEbXAycEZzZTV4R1JHd0NiZ0ErQkdhbzdmS1oxaHF5VEtVVDhIaStvOW1IczJtcCtqSndLTmZXSnozZEJXb2Z5c2kxM1FhY3lEVlZQVTl6SEs5dy8xaXVYSEdsUklRUnNSeVlCVnhiL29ibUEyOEFVOVE1RVZFYTdINnlKLzQzOEFvd050ZW5KekE1bFJjQ084dHNsdG8yQTJ1QkEwQm5ZS0c2SnFjN0RQd0ViSTZJRTlTbTJ1bzRqWWpZQy94UVB1Rmx3RXl5SlRJT1dKN3VQNW11aXlKaWo1N1JXUGxCdDZ0RGdDbGtTNjMwTUJxQWZtVEw4d3YxamlhWWE1WVRwL3g0aUloRHdHdXBPaDJ5L0JTNGtXdzV6bXZPSUdWamJJMklhUkV4TENJR3A3OEJ3SU5KY2d2WjVHdlI4Z2tuU252MGR2VjY0T2wwLzcySTJOYWNRWnBJZml0VS9ZblhFazZiY0VUc0J0NUoxZG1jM0s5eks5ZzRuQ3QzYm9FdmwrVEsrNEQ5cWR4WDdReWczcU51VkRjQ0UzTDZROERlVk81cGxUU3kwckV5T3htOE85WFhSY1RuRmJRL0FSOERkd0p2cVdzNU5ZTCtTNHJVRHpYUzFCNFluY3BMSTJLYnVoaDRsQ3lyKzBMOWltd1o5d0N1QUFZbi9RYmdWN0wvU1UwbEM2NWZxOS9TU0lSdklJdXNrS1ZmQUVURUZyTXZEZmNCZjNCeVg1ZFlRUloxUDR1SUUrcW81UEJRVG4xVCtSVlViYzhkQVJZQWF5SmlmZkpoczlvUGVBQzRNajBVZ0ZYSjduaXlJL1NERk5XL1U2OEM3Z1g2VTJGYlZEeS9tb3JhS1EzUW1PMjdnQmRUZlVSRWZOTFM4WExqM2tSMmpEWUE4eU5pYVd2WnJqWHdvRXFKcm5wQTNhQk9xRzJwb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0I1L0FPelk1T2UrT3V1UndBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFFV1VsRVFWUm9nZTNaVzZpVlJSVEE4WjkyVk5DMG01WlJxRWhYS2lxMXJJNWE1b1V1MEFWQ1NJUEticEFsUkE5QkwwVlFKSkxhZzVVV2tyZWdGKzFDQkhYb3J0MjB0RXdyZ3lEcHhVb3c4MzdNSHRaczl1ZDJmM3VmNHpuN2VKTHZEeC9mekRkclp0Yk1uclZteld3S0Nnb0tDZ29LQ3JxSTQ0NjJBbFVZamh2UWlqODd1L0dlbmQxZ0ovQWF6c0ZiZUFQRGpxNDZqZWNUREVBVEhzRHZXSVBsbUpLK0gxTk14dUtLYjROeEhWYUt3Vi9TMVVvMW1ubTRPYVVIWUh5bWJCdzJZMFpYSzlWSSttRlZKdjlpUmZtSmVGOU16REhESW94SjZXck90US9ld1pOZHBsR0RPVTk0N0ZyMHh3L0t5LzkvejFLTXJpTnprZkRrZ3hxdlR1TVo3RkJiem1NT1pqVllseTZodjdEVGVweUJyVGkrbm1CM0RDMnpqTUVPZkZsSGJvZlltMC9IRjQxV3FwSE14TVEyeWw2TUxlaGRTNmc3eHRKWmV1RkFTcy9DeVRWazEyTUQ3bXkwVW8xa0NxYmpGSEY2ZXJ5T2ZETit3OEE4Z2U1dXc5dndrSEJJUThYUmNTWDI1c2h2UVErOGt1VFg0NS9HcTltNVBJOFd6QlgyL0V3YjZqVGhwbFR2eHNhcDFoaDZZYXJ5TXIwSGw3YXhibTg4aGFlbDFkemRselQ4aSsreEsrVy9GZHZQYnZsTG00aTFtOFdFVGNJRmFPbVJDay9DbWZnSisrb29NQkNuaWlQYS92YnJqN0N6b2NJWlZXT1Q4Z0NIcXU2RWVtQ2RjR1padVYycC9vL2lpbWhweW44ajJmTWlIRXpQcjJMZ2VVd1hFM0lRMnpHaDNzaXE4QmoreVBSWjdSa3BZdU5WZGVTMmllVU9DOUszTlNrL1VUaXh3Mnk0TlFudVQrOEZPWXFlZ0w4ck9wemZ6c0dPeTlTOVMveEtlVHlSNUhiaHlvcXkvbGlSeXZlSVM0TEtBY01vWVFJdlN3RkpUMlU3WHBuZWQ2aSt3ZCtYT3RvcWptUzAvMzdwM0V4NlNWSXdqeUhwdlFHZlY1VHR3SE1wM1VjczUycXN3UWk4Szg3TlBiT1JWa3RxdkMvdXJhalloSWRUZXI2WTFheGlDOUl6eE9HVXlzWUtCMVJpUUk2U2xSekkrZDZhU2RkYUtRZkZhcGlGQ3l0L29YbGkwMzVRekdDcHM5dkVZSGJqQmJISGxSaUUrMU42b1loMHNwVEsxdUpEN0JSWE9BdkZKSmZZaTQxSkxqc3h0UWJTSHJianU4b0JMeGNiKzFCeGk3QWlmWDhrdlJmcjJPWDRabHdtSm5TRThtUTBpUnVPUGxpTmE5clFWbnNIak1NUEQzdndVa3JQVE85bVhDNW1mZTZSZEZMQkptRWV6Y0twakJKSHU5dFQrVlZpOFBYb2xBRlR0dEdyeFpIcjBmVDlUZng4SkoyMGthd3AxRHppZFlScUE5NksxMU42dHJLOXpzbHBJeHZ0OU91QUxxZGwwanVVZy83aG1YYXZ4OWZwbVphUjN5TnNsUEFwdVJGazNyWXlPelU0S2VVL3htYzVzaHZ4QWE3RnE4SXh0ZWJJamhYYlhpVzl4RDhMc0V5c3BDVzRXMFIxcThXdHgwRVJUUTBUcGtEY2NQd2liamhuQ09mNmxkaC9EL1B3VGNKYkVyWlY0Z2NScWR5S3Y1VHR1c1JLNFUwL0ZiWTlPU2s4MnFHL1ZIWUYxYks1ZldMcmFsRyt0RnNyYkhrS3poS1RBdStsZHFlS0xmVHRwTU02bkkxYmNMNGNzNmkxZjdXVnZxbURhbTFQd0xNcFB4NGZkVUovSmE0UTIyaFRlaS9yeExack1sSityTHRUTExscHViVUxDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0NqcklmejVoOTA4aTJkYTRBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbmV4dC1hNzI1ZjVjYjUxOTk4YzMwYzAzYTU1YTk4YWEwMDNkZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQmJFbEVRVlI0bk8zWU1Vb0RVUkFHNFA5cFVKUUlVUXltMEV2RUpwVWV3RjZ4OFE0NVFJNmdwWTJWclpVV0hzQk9MSVMwdHVJTjdIK2JJT09RWFRlUFRhWjQvd2VCREcvenoyUGdKZGtGUkVSRVJFUkVSRVJFcENTSkpLTTNFV2t0ZWdQUmloOUF4OVh2QUY0eWNnWUFMazM5RE9BakkyY0k0TlRVZHdDK00zTHFuQUE0L3EzNDEwMU9Jc21SeXpuUHpCbTduS09jbkg5NlhOc0d4UjhCRGFEcGhTVFBTSDZhMXpDbkljbUp6Y25KbU9VOG1wd250M1pyMXQ3cWN2eVhZSjF0QUllbTNsemdzOWF1eThsMVlISyszTnErV1V0MUlUb0MwUnVJcGdGRWJ5Q2FCaEM5Z1dpTC9BeTI1UjdBYTBEZnVWWStnSlRTRk1CMDFYMnI2QWk0dWt1eTZsL2FucXY3NXRwKzA0WWtld0IyS3BaN3JoN1VQTEhhc08vZHZyZk0rM1czMXJVaHkzb2tkcEZTZXBpM01MdmxIaStoWjViaWowRHhBK2lrbEdydmxwcHlSK21LNUtqaVV2dklDMjMxejlWYTg5enZrdWdCRkg4RWloK0FpSWlJaUlpSWlJaVU1Z2NXNzdza0hzdEd5Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUJVRWxFUVZSNG5PM1lNVXBEUVJERzhTOGFsRWdFRlVOUzZDVmlZMlVPWUMvWWVBY1A0QkZNYVdQbERiVHdBSFppSWRqYWlqZXdmeFphREVPeThvWVhSdGovRHhiZVpwTnZsb0ZOOHA0RUFBQUFBQUFBb0NZOVNVMzJKakt0Wlc4Z1cvVU42THY1cTZTblFNNUUwcm1aUDBwNkQrUk1KYzNNL0ZiU1Z5Q241RVRTa1gyaE1XTWVERDEyT1dmQm5FdVhjeGpNS2JtMk5hby9BalNneFh0UEpYMllNUTNXdkhJNVVmY200OEd0M1ppMWwxS0kveElzMlpKMFlPYWJMVDVyN2JxY3FMSEorWFJyKzJhdFZ3cmhDR1J2SUJzTnlONUFOaHFRdllGc2JYNEd1M0luNlRtaDdrSVpEWGo3SGY4Q1I4RE5oMXIrTDIzUHpVZm12YU1XTlhja2JSZldySW1XUDdIYWNOZDIzd056dmU3V2hqNm9XY0VvM1E3UFYxUXpOS28vQXRVM29LOC83cFphc0dmMVFqOVBpUmFadVhsWDlVTzZMQjU5dko3YWdPcVBRUFVOQUFBQUFBQUFRRzIrQWFYYlpFNzkvYTFyQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUVzVWxFUVZSb2dlMlpTMndWVlJqSGZ4OEJGQkVoMUZxZ1BBeGRhS3kxYUMyYUlJa0dKVEVpUmwyZ21Hcml5bGMwRU9NanV0QkVWNHAxWVdJMGFvSXJTVVFob2k0VTByaXhLQlFoWUltaU1SRktLNjFXVzlCZUgzOFhaMjU3T25mdTdkemV1YWttNTVmYzNQUDhIbWRtenZlZEdRZ0VBb0ZBSUJBSUJBS0JRQ0ZXTGNHU2FvRGx3R0tnRHFnRlpnTm5BZWRFdzg0QUk4QXcwQS8wQWNlQjc4enM1MnJZbFluRGtoWUExd0d0d0JWQU16Q3ZRckcvQUFlQkE4QVhRSWVaOVZZb2MzSU9TektjYzdjRDY0QkxLalVrSlVlQVhjQzdacmF2NnRvazFVcDZUTkszbW5xK2tmU29wUE9yNGVoQ1NlMlN6a3lwaThtY2x2U1MzR05Wc2FNekpUMGhhVGdEd3dZbHRYaS93UXhrK2d6SjNYMHpKK3ZzeFpJT1pHalFKNTdzcFJuS2pYTlkwcVhGL0pwV3hObGJnSDNBaWttdFZqSmZldVVyTTVRYnB4SDRYTks2cE00Q2h5VzFBZHR4TVROTGZJZGJNNVlkNTF6Z2ZVa2JTNDZTZElPa1hKVnV0Y1dlbnQxVjBoRW5KMmxOTVdkckpmV2xGRlJmWXRIcUpHMlE5TFUzdnFmRStObVNHaVN0bDlUcHpWbGZZczVjdVl2emFRcGJlK1d5dmdJaGI2UjA5bFF4UTJMeTVrZzZGTTNaVWNhY1U5R2NaU25HVDVPMExZWE5yK1huV0RTeEh2Z2VTTE9sN3phejY2TjV0Y0J6VVhzT09BYThhV2JEVWYrdHdIdkEwMmIyZk5SMkRkQVd6ZmtEMkdObU96MG5kZ0dyZ1BsbXBxaXRIWmQvLzRQTHRiZWEyZkdvYnlud0E2V3p4aEZndVpuMTVKVThtUExxU3RJV3o3Z2JFL3EzZXYxTG9yYTFYdHZMc2ZHLytaYkpQZDhkWHIwMlFjZVIySnplRkhiZkQyTzc5T29TcXhQbm9GZE9DbHNMdmZMWmdIQWhMcy9LMlBpQldMMnBUQjE1UFJPeEdzWWNqZ3NveFVUR2ZPYVZWd0xIOGtjOVNUTVM1b3lHSzBrTnVHTmthaDJTTGdMbXByQzdIbUI2aW9FK09hQzdpREYvQXg4QjdWN2IzWXlQdjAzQXJKak1UcTk4VmZSL3lHdTdQRForUDdEWnE5OVQydVJSQkdNT0Z3MGJNYnJOTE9mVjc4RGRKU05BajM5b2wzUWJzQmJZNUkyUDM4NEFlNzN5MWNCZndHR3Y3VmxnQzI1Qis4enNwS2VqRVhnNHBlMG5Sa3VTSGtqeDBJL2JrSW9oZCtCNFNOTHYwWnhWWHQ5Yk1YazVTYk84L3IzeERhbUlEcE9MMnlkVDJpMUo5OEhZRmQ2QnV4VW5Da3VqejVha1pzWnV3WnJvdHd5NEZ2RFBxSzNSbFFEM1ZzUm5BR2lUbEsrdndLVzFlUjJMY0M4WUFNNkw1QzdDYlVBWFRtQ3J6d2l3YzF5THBOZFRyTklhYi93clpheHVPVHp1NmJnM0k1bXY1bVg2aDRjbmNTL1JTdUh2bnBlVnNjTGw4SlZYYnNwQVhpL3dWTDR5NnJDWkRRQjM0WGJpSkU2WVdiOVhMM3JtckJCL2g2NVVSdzdZNkcrbUJlbVlwRHVCdHlrTVdhZUJvMUY1R29YaElnc0VkSG4xUnRJbEZVbjhDYlNaMlRhL01USC9sSFFUOEE3dVhQbC9aQWpZWUdZZnh6c1MzM2lZMlllNFo3UXpxZjgvem42Z0pjblpDWkUwWGRJamtuN05hTGVzSnNPU250RmtYK0xGSEY4ZzZVVmw4L1l5YTRZa3ZTQ3BybUpIRXh5dmtiUlowdEVwZGRIUkxXbVRwUG5sK0REcGIwdVNXbkNmV203RzdhWlYrekNYVjRuTHNUOEF0cHRaMXdUakU4bnFZMW9kTHFWc3hZV3JabHlxV1FrRHVFU25DM2ZpNmpDem55cVVXZFhQcGZPQUJtQUo3b3g3QVRBSG1NRll1QnZHeGNzaFhKYlhEL3lJKzF3NldDM2JBb0ZBSUJBSUJBS0JRQ0FRNTEveUJqbFZHZW5yWmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFFSDBsRVFWUm9nZTNaVzRoVlZSakE4WitoVnRwRm1pYnZXVWtZcEtpWjltQkNZUmVpS09vbENpcm9xUnQwSWFxSEhucklMblF4SW9paUFoOGllaWdNb2hjenhKZXNKa3ZUakc0RVNWcGVNcDB1TTVYVHc3ZlB6Sm85Wjg3Wlo4N1o1c1ArdzJLdnZmZGEzL3ErdmRiNjFyZldwcUtpb3FLaW9xS2lvcUtpb21JazQwcVUzWVd6TUF0VDBZM0pPQmFUc2pKL29BKzkySXVmc1JQZllYOFpTblhLNEdtNEdFdHhIaFppU3BzeWY4VVdmSWFQc1FHNzI1UTVac1poR1o3RWRnd2NvYlFOVCtEODhrME11dkVBdmluSm9GYlMxN2dmcDVaaDZIU3NGblB1L3pZMG4zN0hzMkphdGMxRVBDU2NTcnVLSGNDU0pCM29zT0dIeE9pYk9GWmp6eEVPbzFNS3JVdGtuOTVoWTlPMERmTmJOZllhbmVuVk5EMld5TCt1UklOcnZYMVZVV052d2o4bEtIRnQwc2JqSlJzOGdMOXhZek5qTDBWL1NRck1TdHBaZndRTUhzaHNXVG1hc2QwaTBpa2lhR2FEanpZVjErUExwUHhQRGNwUHhseGNqVTFKbmFzYjFEbFpkTTc3QlhUZExhSytFYnhTME5nOURSUkpPUkZic3pwclc2aXpKNnN6cDBENVkvQm1BWjFmcWxXb2haWXo4YjFpTG4wOUxzbnkzWGcweS9malc3d3FIQjR4YjkvR3cxaVZQYnRRK0FuNEN4L2duVVQrdTFpT1V6SmxpUmhnRWc2TFdIdE5kaVU4L2c4YWg4bDlJcTRmSEdsM0tqNHZua2tFWFZIbi9acmsvZXpzMldYSnMrZHk1US9tbEZzdjR1WWEzWFhhMko2cnM3dUEzcmNUUXdKVzVEOUpBN1lrK1VWMTNrOVA4c2RsamZVa3o1Ymx5dS9MM1M5b3NZMWFPODFZd1pEQmVRR05hS2JNeGlTL1RBenoybFp2UXAwNm55VDV1YUpIVzJsam5uQml6WmdKNHdzVVRPbkhqbEdVK1JmdmlmbFc0MmJERFZxQTQzTXlOeVg1QzdMcjF1VFo0bHo1VDNGZmNuOUxZNVVIR1VodjNsQnMvbjZlRTdKWXhNWHpoWk5KcVVWVDl5VFBicXNqYzNueS9ua1JNS1JEZEY3V3hpSWpSK0s1aWtlRXI2Y1Y3eWhZS1hWSW96RVJkK0hQT2dhOWxwUFhiM2lQZjJTa1E2ckhPTEZPN3lxbzk0RDQySU5EZXEwWWlzMldwWFJ1TFRRMEJMdXlOQWNYR2I1SFhTcDZnamdWU2RsbmFJa2lldkd0NUg2R29aajRwRXp1RE9HQXptaWlhMHFmNFVzZmVGbnpyNVNHYVM4VUtEK1c5R0RTeHEwZGt2bGl2YS9RcGZsNmx2YmN4cElNdmp4cFkzVUg1TzB5MHI4TXNsSjBmNzJLTzNObDk1ZGtjT3FZMXJVcHE4L0lhVFNDRzRTbnpGZnVGUUZFRHphWFpPemhwSTBlUTQ1dkxLbGZiR0lLY2FYWVJKZGgxSkZJQjBYWTJ4Sm40c09qUVBsV1V3L09idFhZR3VOeE4zNDdDZ3hwbG5yeGlEWU84VkttNFdtZFArZnFSRHFFcDhUQlE4ZnBFbkhzVjBlQm9UdHdyd1pMVHFkWklrNGl2eERldFd3REQ0dE54U3J4LzJwTWRPcG4ybFFSVWk0Vkc0cUZSamxIYW9GOUlwVGRMSFpjRy9CTG16SkwvVjA2UmV4dlo0czk3bW5pekdvQ1Rzaks5SW8xLzVBNFFOeUxIOFh2MGdNbDZsWlJVVkZSVVZGUlVWRlJVVkV4alA4QTVZcmNVMnBzWU5ZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFGMVVsRVFWUm9nZTJhMjQ4VVJSVEd2d2JaUlJEbEl0NEN5RVZEMUNpcmlCSlhSUkFURVEyb2lmSEpKM2dRWGhSdkQyTGtGdjhBalE5R1h5UmVzaHRnd1N2R3pZckpHaTZCR0tNTGkyTENnZ0VSeElYRmhSVjJmajUwdGFtcHFlNlo2WmxoZk9ndnFhU202enVuenVtcXFUNTFxcVFNR1RKa3lKQWhRNzBRVkVzUk1GTFNrNUp1a1RSYTBsRkozWksyQmtIUVc2S08wWklXU0pvdTZWcEp2Wks2SkcwTWd1RHZhdGxhRVlBQVdBNmN3bzhCWUF0d2Q0S08yY0FuaHV0REw3RHNZdm9WQytDTkdDTjkrQlNZWXNsT0JUNHJRMzV0UFgwVjhKREhxSDdnTUhBK3h1Zyt3aG14M05SOU9HOTA5SHZhNXRYVDRUMldJVG5nUmFEUnRBMEhIZ1UybTdaaXlBRnR3RUpMUnlQd3NpTy9xMTdPem5BTWZqK0Iyd1I4bCtCc0p6QWpRWDY5dzcrdE5sNGx3SXltalZpRERmOUcvRk80RDdpaGlHeVRJN09pdXQ2VUFPQmp5NERqUmJoVGdKNkVFZTRCSmhmUmNjTGlmNWpXN2lGcEJTVk5zdW8veHBHQXF5UzFPL3lmSmUxM2RMVUQ0eFA2cy91WUZNc3Fna29jSG1QVlQvb0l3SEJKYlpLbVdvLzNTWHJBbEwzVzgybVMyakFMbGdkMkg2UEx0dGJna3JTQ2tvWmE5VnhVQVJvVVJsdTNTbnBhMGoyTzNEUkpSMHo5SDZldFdkSW1vRVhoaUhZRlFSQnhCbVA2TGd1Vk9OeHYxU2NBcjB1YUoybTJwSVlFdVlhWWVvUkhUSkdrQVdDbnBBNUpFeXpPMmZMTnJSQkFlOElpVkd0OG5kYnVzamNQd0IyU1ZrcGFwTkxYZ0YyU2prazZiUlZKR21XVjZ5VGRWYUsrbktUTmt0WUZRZkI5aVRMbEFSZ0h2QWNNSnJ6NVh5ajgvSFFBUlY4TU1BVDR4cEU5Q0J4STZHOFFlQmNZVjIxbjd3ZCtLekxObGdEWGt4OWM5QUlUeStobmtwR0owR2QwTGkzUzkySGczbW81K3dSd3p0UEpsOEFGNi9lYlFLdkRlVFpGZjhzZEhhMUdkNFFMaEtHb2kzUEE0a3FkdlkvQ1BlcCtZSUZwMzI0OVAwNStrTCtURXFheXA4OGhSalpDenVpT3NNUHducUx3N3pNQU5LZDFkaVRoVkxHeEJiak00cXoydk9rSUJkczRZQ0t3QVRodFNoc3czY09ibDZCM3RjVWJSN2hHMkRnRWpFamo4QXVPb28zQVVJY3pNOGFvYlRITy91bmhuc1R6UHdlMnhlaWU2ZkNHQVZzZHp2TnBITGFuMVJGZ1RBeHZuOGVvT1I3ZWhoZ0hBRm85L0RrZTNyNFlHOFlEZjFpODdXa2N0bk5VYnlYd1huV002b2poblU1dytGU01qRHRkVnliWThYWXhmVkxwZ1VOU2dGS056Q2RWMEZHWlB2S245REZpdG01QXQyZkVmRk82TFdHRVd6eDgzNVR1anJGaExQQzd4VXMxcFZjNG5XMEZoam1jV1RFTytCYXQ2WVFMbElzVHdBUVBQMjdSdXRQaERhWHdaVDZYeHVFUmhFdThqUTZzTUE1WUUyTVV3RnlQem9tRWdjUXBVMXBpbkoyYm9OZitMSTJpTU0zYkExeGF0c05HWVRPRmdVY1A0VWMvQUhaWXo5M0FZd2ZwQXc5YmI0Nzg5RTRVZUN3a2pOMXREQUR1L3J0c0F4YmpEeTA3S1F3dFd4eE9tdEJ5bWFQREYxcTYzMTJBczhDaWlweTFqR2ltY0hxN1dFcnROZzlMaXZUZFE2VWo2ekZtTFBBT3lkdkRBNFJiT2h1VmJBOTdLSnkyTmdhTlRkNmd5SWMwQ1lBWmtsNlQ5TGpLU3dBY2tkUm5GVW02M0NwWHE3d0VRSnVrdFVFUS9GQ2lUR1dndmltZTlyUjJWNUttdGJNTTJ5V3RrdlN0cElFS2RMb1lNRHBYbVQ0aWpLMWlINldCY0Y4Y29kVjYza0I0TlBJTThMbG5kQVppNmhHK01MSk5oQ25mU0srZFhQQnVJbXJ0OEY3TGdBMHhuRVlLc3hOZHdEV21kRGx0bmNRazRnbTNweEYrcXExM2ZnUHMwMER2RHNud3hnTy9PbzUxVXhpREh5RGhxSVg4RmJ5ek5sNGxnUElPMHlaVDNjTzBqOUxhWGNtaXRkdXFYMG5DY1drUUJBY2x6WmQweHROOFJ0S0RodU1GY0x2eUY4azlaZHBhT1NnOEVGK2Z3QzNsUUx3cFFmNERoMy94RDhTTklic3RJM0xBUytSZmVYaU1NUEZYNnBXSHpZVFhKSVliSFkzQUt3NXZaMTJjTlFiTjl4amVUeGgzWC9DMFFSZ2ZMNlA0cFpaRCtDKzFGR3c3TDdiVDZ4Skd6Y1VXck1XSjhHYkFwMlhJcjZtbnIvL0JqRlp2akpIbkNETVNzeExrWnhtT2J4c0tZYktnS2hmVGFuSDE4R2FGdHdPT0tqemgveW9JZ3Rnc29xUGpDa2tQUzdwSjRkWER2eFJlUGR6MHY3bDZtQ0ZEaGd3Wk1tUklqWDhCRk1vbzBzOStCcmdBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUZnVWxFUVZSb2dlMmEzMjhWUlJUSFB5M2FWaEN0SmZWWHFGRFFFRFZLRmF2RXFnalJSRVVEYW1KODhna2ViRjhVVUIvRUNFajhBelErR0gyUitDTWxMYVgreEVnUVkwMHAwUmlqcFczRXhJSXBJb2d0eE5wS2U2OFBNNnRuWjJmMjdxOUxmZGh2TXNuZTNlODVjODdkMlpsenpnemt5SkVqUjQ0Y09XWUtGUm5xbWdNOENsd1AxQUxIZ0VGZ0R6QWFVVWN0Y0Qrd0JMaEN5L1VEbmNDZkdkcWFDaFZBR3pBR0ZDMXRFdWdHYmd2UnNSeDRYM050T2thQjF2S1lIeDh2WXpmUzFqNEFHb1hzSXVEREdQSXZsZDJiRXJpWG9GSGp3Rkhnck9WWkVUaURHaEZ0K3RyR09hdDFqRnVlclRvbm5qbndqVENrQUd3Q3F2V3pHdUJCWUxkK1Z1cnRGWUF1WUxYUVVRMDhhOGdmTExOUFRpekZiL0JiSWR3bTRDdmN6dlpvZlM3c01QZzNwclE5RVRZWlJvUVpESEFOOWlGOEJyaTZoR3lUSWJNaHNkVXA4SjR3NEVRSmJpTXdqUHNORHdNTFMrZzRLZmp2SkxZNkJlUVEzUmZDdXhUNENiK0RRNmcxV3Q0N0ROU0g2UGxjY0w5TWFuUmxVa0hnRW5GOXlzR3BRVTFFaThTOUFlQnUzUTZKKzRzMXR4bzdaQisxc1N3Vk9DK3BJREJMWEJmRWRSVXEycm9CZUJ5NDNaQmJESXpvNjcrTlp5M0FMcUFkK0I0VlpYbWNhVWZmc1pERzRYRnhQUjk0RWJWR0xrYzU3VUtWNDlyREE3cUJpcno2VUovTWZNSDVLNjZ4V1dBdjBTT2tyTnRuU1kxT2tqemNER3dHMWhCOURqZ0lIQWRPaXdZd1Y3UXJnVnNqNml1Z0FwcnR3TGNSWldKakh2QW02bHR5L2ZNL0VseCs5aEh0ajZuRVB4TVhnWjlSczdlcnYybmdEVzFicHJnTCtDV2s0eUt3RGxpQVA3Z1lCUnBpOUhPVmxwRkJ5UUpnZlltK2p3SjNwUERQaDBlQUNVc25ud0JUNHZjcndFNkQ4MlNDL3RvTUhUdTFidS8zRkNvVU5lMlpBTlltNk0rSE93bm1xRU9vSkIyZ1Y5dy9nVC9JN3lQWk9sK3BaVDA5QmEzYiszMUE4eDRqK1BsTW9wYTJSSmlER2lwU1lUZHdvZUJzSmZoUGU4Mld4alVBSGZ3M2NYV2hxaHNtVm9YbzNTcDQ4MUJ6aEh4K0JKZ2QwMWNBTmhxS09na3UrTXNjUnUyMzZHc0FmcmR3VDJIL3p2YzdkQzh6ZU9lanlraVM4M1JrTHdYa3NCckJIMHBLREZpTVdtSGhkVGdjOEw1VEV5c3N2QUdIRGZYQWI0TFhHK3FaQTdKRzlXb0k3M25ES0ZjaWNScTN3Mk1PR1hPNGJnNng0N1VJK2lKUEttRUJTaGFWejJJR09sTHJrMFA2T083VXpVenpYRU82eThMeldydUZieHZTZ3c0YjZvQmZCUy9Sa041Z2RMWUhOVUZJTkRzY3NFMWFTMUFUbE1rOWlUOHg4T0NhdEc0eGVMTUkvcGxQUmZaU1lEWnFpamUvVHhuR2JYTVlWUVJXV25RMm9DYW9NZDNhc1R1N01rU3ZYSmJtRWl6ekRnTVh4UFQxWDdRUUREeUdVWXQrQlNvSThPNmJnY2NCa2djZVVtOEJmM25IQ3p4V28ySjNhZHNrd2Z3N050WmlEeTE3Q0lhVzdRWW5TV2paYXVpd2haYm11bHRFNWNockV2Um5SUXZCNFcyMjlaUXZlVmhYb3U5aE1uaXpKdXFBMXdsUER3K2pVanJ6dTArYUhnNFRITGF5VFd1YlhFRlJBRW5XMEtYQUM4RER4Q3NBaktEZW1OY0FMaEx0TXVJVkFMcFFlMDNmUlpSSmpaa3M4ZXhOYW5TYU1xMWNubnFCTGNBWHFKa3lLMHhxblZ2d0J4TjFHZllSR1VQNFoxSVBWYWl0a1NlQWp3aStuVW5IdGRjKzFySk4rS3Vhc3JqZ1NpTEtpa1BDZ0E0SHA1cGdkYUlmdUZ5M2Z1TlpEKzVDZktmZy9aQ0pCekVSZGF1bG51Qld5eURwdGxwNlV0cWVDSEUyMHhhUzdXYmF1NG10VGdHeklsTE83ZEtiREptTmlhMU9BWE5EZkVjSU44cUdlRk9JL05zR2YwWTJ4QUcrRmtZVWdHZndIM2w0Q0ZYNGkzcmtZVGZxbUVTTjFsRU5QR2Z3K3Nyc1V5anVJV2o0T0NydW5ySTg4NFp3SzZVUHRSekJmcWpGbG5hZVUyd25lb1RValg5eWFrUWRaWW9xdjYzczNrUkVHLzRzUjdZSlZOemJIQ0xmckRtMk5MU0lLaFprY2pDdEhFY1ByME5sTDhkUXdjbW5oRlFSRFZ3TTNBZGNpenA2K0FjcU9ObkYvK2pvWVk0Y09YTGt5SkVqR2Y0QmFwWk5QZzEzbGtJQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFHYVVsRVFWUjRuTzJiYTZnV1JSekduL0Y0UGFTWm1WS1FtaDQxMHJ5bVprcGE1QzJKSWpCVEtKR2dUMnBRVUphbEpBVmUwVXdDSzdMbzdpV0xMcElLWG80aWFtYVNZWnIzRE1wTDRLM3ljczZ2RHp2SHM4NjcrNzY3Nys0ZVAvZytYODd1N016elBET3paM2JtUC9OS0paUlFRZ2tsWExzd2RTRUNkSlkwV0ZJUFNaMGt0WlhVUXRKMU5zdFpTWDlMT2l4cGo2U2RrdFlhWS9iV2hiOU1BSFFENWdLL1V6eU9BSE9BYmxlN1BwRUFHR0Frc0NsQnBjT3dFWGdRcUpPM05qYUEzc0NXRENydVlqUFFLeTNmaVZzVGFDeHBocVFKa3NwQ3NwMlZWQ2xwZzZSZGtuNlRkTXltUzk1WTBGcFNSMGxkSkEyU05GQzFZNFNMS2tsdlNwcHNqRG1mdEE1RkE2Z0FmZ3pwcVdwZ0pUREtObEpjN3NiQWFNdFJIYUt4SGVpUVJkMmlHT3dQbkF3eHRoem9ucUpXRDJCRmlOWUpvRjlhV2xFTkRRWE9CcGpaQnd6SlVIYzRzRDlBOTJ5V3VxNkp2aUdWWHc0MHJ3UDlwc0NuQWZybmdIdXlGcThJZWUxZnlWUTQyTXUwQUIvSGdmWlpDVFltZU1DYmtJbGdORThUQS94c0F4cGxJVFkvUU96bDFJWGkrd3A2RStha0xkSWJ1T1NJZko2cVNBSUFIenZlTGdFOTB5STM1TTd3OWdITlVoRklBY0Qxd0FISDQ4YTB5RWNHdkdKRFV5RVAxNndQakFPK0JWWUQ2NEFwUUpNOFpVWUUrQnlXaGhsM1liTThNV2wrdlk3QURxQVNhR2ZUUHJMYVN3cVUvZEx4dWlHcG1lNE9ZVFVwenZBQzlEcmhmY3IrQUc2d2FRWTRaZlZQRnlqZms5eHBjOWNraHVZNlpOOFZUVlpZcXhtMXM3eG5uV2ZyYmZyQ0NEemZPNTVuSlRIbEJqTkdGVTFXV09zTm4wNGI1MWtaMENvaXorT081MFBGR3Vyc0VKMmgrRlhkUkdBcDhBM3dHbERoNUxtVDJzL3N6MFVacnVWcWdqY3Q5cU1pTEgrOVBGejNPZmVWeHBqL1lwcXBrTFJiMGdKNXNZTEY4bUovUzRFWlFBT2JkWkpxWXdtcmZPWDdBc3VBNFZFMWpUSC9TbkkvZ2ZmSDhWMGovcGJUaWkvRUxOOEErTldXM1ErVStaNlZBVk9CTlVBYnA4Zkcrdks5WjlQV3hOUiswZkVlT25ia2V3TTZPL2UveERFaEw2cFR3M0hhR0ZOVjg4QVlVMldNbVM3cFhVbmJKSlg3eXYza3UxNXAvMjZLcWUxNmRldFNHTUJCcHhVN3hTei9oRk4rZkVpK05iNDhWY0Nqd0VQQTg4QmVZQUZRUDZiMjdZNzIvckM4K1lpYk92Y240NWlRRi92ell4RncxQml6Mm1lMGlhUUJ2andINWNVRjY4bmJJN2pYR1BOblRGMUpPdUhjeDUrMkErZWRWbXhZQk1kYWgrTWtjSXZ2K1VEbitkdXhqUWJyTm5KNFF3ZnZmR05BTWNMMWdTZUJQalpwbkNSL0Q3YVE1RjlDMytWUTdFelRUeUxnQlJ2OXVERkNtUWsyNzNuc1pBWnZlbnJheDdQYmwvOURSMk5nU3Q1Yk9yekh3L0xtZXdQY2VYZkxDTnF0N2QrR2twcElrakZtaDZUcElieTlmZGNYSkcyUG9CRUZOem4zcDhJeTVtdUFnODU5bEsvQUY1S3FKVzB4eHV6eHBWZjVyaGRMWG5CVFYzNmV0dGxKVEJwd3ZicDF1WXg4RGJESHVlOVNTTlgyOWxPUzJnSlA0NjN1Umt0NnlXWlpLR21SdmU3bDZDZGJ1dWIzNnRibE12STFnRHNnRFlxaWJJeDVYOTQyZUxta3FaTEdTL3BFMGdCanpFUmpERFpyWDZkb21pdk53YzU5L01IVjlwNGZSUzJHOHZBdjlYRWZKS1ZkWDZDY0dJdWhRbVJISEtMUktaa3NjNzR5ejZYQmE3bkhPSjZMV3c1YnNqa08yY3JDcFNMeDN1M2pQQXFFN1FJWHc3M0s4VHd6Q1ZrM2g2d2E2QkdqZkF2Z0VlQm1KMzJlai9PeG9nM202dlVtelpDWUpkM29FSzZJV0s2VjdWMkF3elc5YkJ2bGpFMS9KNUc1WE0ydkhhL0p2eXg0eDFKY0ZBdzNjMlZvcWhxNDFhWi9ZTk9XVUJzUVNjTm5OdUY3dktqc1pvZDRQM0I5Z1hKM0FCZHQvc2w0QVpMWmVLR3ZlZmdDSkNsNGJFN3U4cjB5TFg0QnZTaGlhd3g0R1BnQmIxMi9DMWhNaXVkN2ZEckxIRzhYU1R0OHo1VURWdzJtcFNwU25LOVhBM3pOemtLb2tlMU5GeE5URjR2dWFWS0FuNjBVRWJ1SUt0aUIzR1h5VlhrVFFucitHSEJiMXNKOXFQMk0rYkVDdTUyVnNYNHo0TE1BL1hOQS82ejFhMHdNSWZpYzBBRmdSSWE2SThrZDdiRWQ4a0JXdW1GbSt1RnRaQWJoSzlJNm9LRExNengza3VOLzdkMlZaZDBBYUk5M0ppY0kxWGdibFdQSXM2K2ZoN3NjR0V2dTNONlByU1Q4bjAvanFHd2pTYTlMZWtiaFlmWi81RzFYclplM2FiRlgwbC9LUFNyYlNWNHdZN0M4Y0hsNURwT0hTNUxtUzVwaWpMbVF0QTZwQU84MHA3dHV5QUtWWkhoR0lUR0FZY0NHRENxK2dZeVA1cVFLb0Nzd0N6aVVvTktIZ0pra1hkTG1RVjM5WktaQzNuWjd6VTltMmluM0p6TW41VzJIN1pXMFE5STZZOHkrdXZCWFFna2xsRkRDdFlyL0FWemRrcmltTDU5V0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFGN2tsRVFWUjRuTzJiYTRoVlZSVEhmK05yeGlGZmt4a0ZsZWswWTJXK0pyV0hwRVZxWldFRVpnWWxFdlJKL1ZCUVpnOHArbENwYUNKQkQ3TG9uWnBGcFdTQzVpUmhWaVlacHFnem1VR2tFL2dZeXRTeEQydmZ1ZnVzODdqbnNjK042UDdoY084K1orLzEvKzl6enQxN3JiWDNoUW9xcUtDQ0N2Ni9xQ29UVHlNd0FSZ0JOQUFYQVhYQVdlYjZjZUFQNEdkZ043QUQyQWpzS1pPK1hEQU1XQXo4QXB4SmVSd0FGaGxiL3dsVUFWT0FMYVR2ZE5qeEpYQUw1WHRyRTZNSjJJcjdqdXZqSzJCVW1mb1VDelhBVXVBVTRhS1BBV3VCZWNDdHlKalFEK2h1am43QUVPQTJVMmVkYVJObTd4U3dCS2d1US84aVVROThSN0RJRHFRajA1Q2JsQlExd0hSam95T0U0MXRnY0tZZVpNRFZRRnVJc05YQWNJZGNJNEExSVZ5SGdiRU91V0poRWpKMWFURjdnWWs1OHQ0RTdBdmdQWjR6cndkakNPNzhhcUJ2R2ZoN0FlOEU4TGNEMStSTlhrL3dhLzk0M3NRQldCQ2c0eEF3S0MvQ0dvSUh2Tmw1RWNiQW5BQTkyOGhwZGxnYVFQWllIa1FKRWZRbUxISk4wb1Ivbm4vUE5Va0d2SVhmVHhqcHluZ1ZmZzl2TDlEYkZZRUQ5QUgyNDNlZG5XQUsvbGRza2l2akllZ0d6QVErQlQ0SE5nR1BBajBqMnR5TVgrZGtGMkowWUxQYWhkRUlYQUpzQjVxQmdlYmNtNGI3L1JKdFA4U3JkWE5XTWNPVndRN2NlbmdhRGNoVTlpc1NINEQ4Qkk4WS9xTWwyby9FN3pZUHpTSm9zVEsyTm91eEV1aE4wY3Q3UUYzN3dweGZIc1BPWjNnMVA1ZEZsRTVtVE10aXJBU2V0M2d1Vk5lNkFnTmkycmtMcitiV3RJSWFsYUZqcEkvcTVnQXJnVStBcHhHUDBzWVZGS2ZaSDFMcUxhQW40aGJiMmpWZko3cEVHTHBlbFp1QnZ4S0txUWQyQWN1UXA3Z0N5ZjJ0Qko1QmNnRUFjODExZ1BWVyt6SEFLaVFJaW9zLzhVK0JOeVJTYmZBQzNydjRjTUwyM1lHZlROdDlGRHVJK2Y0RXNBRjUzZTBuZHJkVjcxVnpia05DN2tlVTl0Q3hJK29OYUZUbEh4T0tHRy9aT0FxY3RxNmRCcDRDWGtGODkxcnIydmZXOTNYbWMwdENicTFWOXlVV1d2RGV4WWFFN2U5UjdXZUYxTnRnMVRrTjNJR2t4aDVDMHVMTEVNY29DWVlvN24xaEZhTU05MUxsdG9RaWRxcnlpOEJCeExNcm9DZHdyVlZ1UVJ5aExzZ2F3WFhBYndsNVFiSkVObEs1N1NmdzNzVWVLV3hzVkRiYWdQT3Q2K1BVOVpmU0NBMUF0YkliT25oSGpRRnAwQTI0RnhodHlqUHhQc0U2dkNIMGxhcjlEc2Q2TXVFdzNydDRkb3cyczAzZEV4U2RtWkhJSUZpd3M4dXEvNGJpR09kQ09OQmYyVDBVVmpIcURkQitkLzhZeE9lYXp4NFVJN2Z0eUlnZlpMZkordjQza3VaMmdYTlUrVWhZeGFnYjBLTEtjV2FCRDVCZ1pDdXl5Rm1BUFFXdU1KKzk4RTVQMnhBbnhnVzBWdDJYVGtUZGdOMnFmSGtNNHUzQWZjanE3LzFHeUhSZ3ZybStISmtOUUphM2JQN01vYXNGclZYM3BSTlJOMEFQU09OamtyK0dMR1RVSXQ3ZUxPQnRaTG9ySkRGQjNGd2JMaVBOQ2FxY2FuQnR3RTB3RklhVmx1MFczSzM2MXBJZ0dDcUZBOHJRZEFjQ1FXSUJlNVo1MEpGZGdCbDROYWNPaDBIU3k3YXhkZEhWWStNcXkrWkJpanRGWEdBOVhzM1BaakUyVEJuclFIN2ZjVkVIM0E2Y3A4NHZzV3plbVVXZ1FoT09VMklnc2JWdGNFM01kZ09RcDNzRzhlc0xUN21PNHRyL3kxbkZLWHlNNDZRb3lMYVVOT2xtT3pYVkFWeGd6cjlPTWNQYlBiaHBLdVNXdnE5Q3RxWG84TEpQaVhhWEFTZE4vWGxJWnhkUzNOM1JOYnhwWXZURkg3NDNPN1RQS05JdGpVMEZ2a0hpK3AySUY1akgvcDVWU3R0SmNramYyd05YNFZqZ21pUUZuc1N2YTJFZVJOWEkwOVJrYy9JZ2k0bTVBWHErSmwzdUloWUc0dytULzYwM0llakovdzVjbkRmeGFJSzNzSzJodUp5Vkozb0Q3d2J3dHlNYnQ4cUNpUVR2RTlxUHJOTG1oU240Ui90Q25ISmpqcnlCR0l0a1dyU1lNOEJIT055Z2dIaDQyc214WDNzZFdaWU5nNUJFUnBDd0RtU2hjZ2JSNi9waHFFVVdTYlJ2cndlODNIL3pwVkNOQkUwRnB5Zm9hRWR1eG56RU43Z1VjWWw3bUtQT25KdHE2cXpISDlMcWVYNGhPWTcyYVRBQ2Y5eVF4OUZNdm5zVU1tTXlFb1M0N3ZobTh0K2E0eFJEa2MwSnJhVHZkQ3NTejJjT2FjTlFyajhmMUNQTDdZVy96QXpFLzVlWk5pUnMzb01rVnpjaHU5RXFxS0NDQ2lxb0lDZjhBMmI4c09iN01pazZBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdmlldzEtYTdiYzBmMTVkMzM4OWMyYzZhN2MxZmRjNzZkYzc3ODguanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy92aWV3Mi1kZWM0MjVlMWU4ZDRjZDdjZDk0NzM1MmQ3N2MwOTc2ZS5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUZmRWxFUVZSb2dlMmFYWWhWVlJUSC8xdWRQdFN4VWRRc0xiODFSVTNRdm5DRXJLREFNU0d5cUljZUtpb29TSG93alVDaGh5Um9RSlNnWGdLRnN1a2hVRUdvWGtwcmRQcVF5Zy9JTkMzR3JNbVJVaWNiWitiWHcxbkhzK2ZPdWZlZWZlYmVtWUlXWE9hY3ZkZGVhLzMzM212dGRkWWU2WC9LUnNBeVlObGcyNUdiZ01YQXh5VDAyWDhLRURBRDJBNzBBT2VBczBDNy9RWFlEU3dlYkR1TEVqQVcyQWhjQkRxQk40RUpRTFA5YW9FWGdUOE0wRWZBd3NHMit6SUJJendEZTRBbVlJYlgzd3cwZSs4eDRBNmcyL2huRFk3MWtVRTF3RlBBTDk0TUwwcmg2d1hFYTU4RWJMSVZqQUZOR3hqckl3TWNzQW80YWdDK0F4cEs4S2NDOGZvbjJ6YThCUHh0ejlkVngvcEU2VDNBVndiZ2hLM0lrREpqU2dMeCtHNEN0dHJxWExEVkdsODU2OVVubExhWlQxeVpjV3dtSUI3L1BOdG1jZFRiQ05UbHQxNjlscjBiT0c5Q1J3WEtDQUxpamJzTjJHbVRkd2JZQU5TR0Nya1cyR0podEJQWUhMck13QkRnTWFJenBOMmVTMjdESW5MdUFqNDNRS2VBNTRBcnNneDgyWmEwQjNnWG1KNUQrUXJnVzFQK3ZmMnd0aFdoOGt4bUEvQzE1NThQbG1JZVQwS2ZBcE1DbGRVRGUyMThLL0FNVVppdXNlZFc2OXNMMUFmS2RqWkJaMHpHc1ZMTUU0enBCNkNMNk5CNkZiaW1qSkw1M240K0M2d0ZocWZ3RGJlK09GM1pDY3pQQUtJQitNTEcvQXFjQkg3TUFtUXRVVGhzc3ZjelJKSHFxZ0wrRzRpQ1FSZkpHVkRXbDREUjlEM2QrMnhob25DLzMyeG9JM0w0VWNBSG1ZRjRiWGQ0MitVazBka3gzZ3o1eXpOa1Nqa0FLZm9ta2h5R2ZuNldDc0FiRnc3RTJoM3dzRzA1YkFWNmdQZUIyYUVBVXZUT05sazlCZ3JnTlBCQ2tTM2FCMGltY09pY3d6bjNucVM1a3Q2Uk5GU1NrMVFuS1N5MnAxT3R5WEtTaGtscWtqVE5PZGZvbk92SUlpQW9yanZuT2lVZHRkZEdTYmRMYWlGbkJndk1BcG9rdFppc1J1czZraFZBVE1FSGxLU2ZKUDB1YVoyazZaSzJTRm9wNlpEdDhZbmxCTVMrSWVtUWpkMWlzbDdKWVUrcWdsUWZTZUdyS1hpZkNtd2pTZmcyQXFOVHhzWFI2b0x4YmdPbWV2MTFwbjlER2YzNW5MMkFweGE0dFVqZkFtQ1h5V2pIemhPUzg2UGQrbllCQzFMR0R5aVFOUlpaK2tRVGoyY3B2VTk0LzBSZldtSmNiaUI1ZkdTNG9zaFNOSEZ6enUxeHp0VXIydjgxOWx2cG5LdDN6dTNKb2JNc0RhdUcwSmljY3p1d25NZzV0Nk9hdXZLc1NJZWtMa21kRmJhbFg1UUh5QnVTbG9URytXcFRNQkRuM0hsSkI2cGdTNzhvenhmYjQ1Sk9rZVVyYlFBcHo5YTZVZEpZUmRIclgwTkJRR3dWWnRwcjJRK2lBTG1GZHN3cGRVNmxVU1lnV0JvdjZiQ2tSeVYxUy9xa1VtbThwQlBBUzVMT1Nkb3I2U0ZKeDR1bDhXbFVGZ2h3cDZUOWtyWXJTck1ma1RSUjBtWko5MHM2Q0x5VkpWbjBaRHFpNzN0blRVY1VKYUYxenJtbGtob1VKYWV2aHdLS0ZmaWZ1dk84dktrTldGM280TUFVa3VwZ0IvQWFNS2FBcDA5ZEMxaGtjcCswOXdYQUFlRDZBcjdsUUl2eFh2N1FDc20xK2x0OFdCZlBJTW0xd2x4Z3RiVU5CUTRDeHpQTWJ4cWdzc1VIdnh6MElaVXBCMzFwUUo2MTl2dU05eFpnVGFEODVTVFYvK0xsSUdOZWJ5dlJDVFNTbys1Szd3SWRCbVNremViMlVIa21jeUZKL2JrVldKVmwwR1NTVXRCdndOUEEwRURGZnNtMDJkcm1FSGdIUW5TUDhqWkovWGs5TUNKRVJseEkzbWVBRGdQM0JnbFF2NHJZOFUzWW53WmlLLzI1Ti9GbTlyUUIyaGt5cTZGQVBIMytUZGpOK2F4UFZ6Q1NxRkIya2FpcXVJa01Wd3doUUlnS2M5OTRPNkRvVFZpL0NaanArYzhweXR4YVpRRkNGSnJqTTZ2VlpBYjVaRzRDN2lhNlA0UW94QzRwd2xjVUNFbkp0SXVrK2xLSmdsOFlBY05zOXRwSXJxWW5GL0NrbmV5VmRlUktFVERHZk9hU3pld0c0R3JydXd5azZvNWNLU0s2aXRodFJ2NXNSdTh6TUFQbnlKVWk0QUhnbUJuZGJUNFFPL0lUQStiSWxTQ2k2N2JuaWY2MVkvQWN1VklFakFQR1ZWdlBQL2Ftblp0NEgrZHNBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRTkwbEVRVlJvZ2UzYVdhaFdWUlFIOE44MXI1VnBtZFhOMHRKR1M1ckF5c0tFQnFIQVJJZ21ldWlob29LQ29vY21BbjFMZWhDc0NPb2xVQ2l6aDBDRmFIZ3ByV3ltQVlOR0phNE40bzBteSt2MWZqMnNmVGhmbjk5d3pybmZ2U2IwaDhOM2hyV0gvOTVycmIzMjJoLy9vekF1UzljQmkvUHhPbXJwZXNzQlJ1aFVyTUV3ZnNjdkdFaS9OYndzU1A1bmNUU1c0MjhNNG1sTXd6dnBtb3dIOEtzZzlCck8yeTg5YllIRDVCMGN4bG94S3hreUloa3l3cnV3TjhtZlBpWTliWUZlM0k0ZjVDTTh0NGxjSTVFTU03QlN6R0JHNk9SUjZXa0w5T0E2ZkNVSWZJYXIyOGkzSXBKaHBsRERQZGlkN28vclNrL2JZQ0UrRkFTMmloa1oxNkZNSnlJWnpzQXFNVHQvaXRucXE5elRGcWgzcFR1RVRSeGNzR3hSSWhuT0VtcVdlYjNsbUZLaWZGTmswNzRYZjZSS0R5OVpSMWtpR2VaaHZSaThuVmdtUEY4cEhJc25oUnNkeEJQS1QvTTQzQ3pXa0lGMDMwa05tK0Z5dkMwSWJjZmRtRkNrNENOaVNvZnhQRTZwMFBoaWZKb2EvekpkdGZSdWNZWDZDSWZ5a2R3K3IyMG4zQ2NQS2Q0VUxySU1Mc0dtVkw0ZmR3bzMzWnZ1KzlPM1RVbTJESHJFSU94TWRYelRUbmhhRXZvYVEyTFJlaFJIZEdqa2JMaysvNElITWJHSjNNVDBMUXRYMXFleW5YQTEzazlsZnNJMmZGZUV5SVBDSGE2Vkc5c0RPS1JCL2dUaERJYmthMEFSV3pyU3ZxdDdNeFZlaUhmbDNuS1pjRFl2bFNHUzRXSzV1bXdUYTBkZjZzaGZkUjJaVllCQUk2YkxGOFA2K0t3VmdReVZpQkQ2ZVlOUXVacVlnV0c4aU5rVkNEUmlkcXByV0pDcTRVZmNwN21LN2tPa3FEdXM0UVhNd1hNNFNKQ2Jvb0p2YjRMSnFhNGVqSmZIWFN1RStuVkVXYjgrS0dJc3FaR0w4SjdxRWV6cHFleDdxYTRWNmYwWENoSm9oVmFxVlk5YmhONU9FTGJ5dUREMFBVTEhweGRvcDk0MmRxYzYrc1NzMUlSTnRFTmxHMmxFYjhQelNWZ3REL2lXQzgvVWlNeGIvWmxrVjZleUdjYVV5R1JjMk9MYk9kaVE2aGlRcnlmWitqR1F2bTFJc28wWVV5TDNDNVZvNWsweUxQRHZGYjUrUlYvUXBseGxJbFdDdUluQ3M3UUwzRGFLRUdTSlBFUlprdDV0ck5CbVI0d2ZqVXJyc0U0ZUU2MGJ6WWFxek1ndXNTQU9kcmt2STBJVklrOWh2aEg2K1c2akNwRS84SEczT3pKU1ZDRnlpOWlwRmRxbGpSV3FFRGxSSk5uYXVkOHhSMWtpRTNCYXVpK3lJYXJhanpPVkhLaWlSTEl3Zmd0dUV1SEZHN29YeG0vRnd5SlhzQW5YNDF1dHcvaU9hTGF5WHlxaTAyeWZmS1BJc3F5VUI0dlBhQjBzTmtzSDlZakZzU2M5djVKSUhKV2VGOVcxMld4ZlVpcEVPVXNlTiszQXZmWTE4Rm55N09BdVBJYXBCWWpNVGZYZWxwN1BFWjd3K0FhNVZvUUtFeGxwOHVFaCtRaG1ST2FJd1NBMlpwOEw5U21DUmtJZGt3LzE2YUJYZFNjZDlJRWdjbGQ2ZjFXU3ZVQUVvR1d3U0o3OWI1c09ncVZpSmdiRmpxMUszclUrUVZjVFJDYUowVnhUb1Q3aVVDakxQL2VMRTRHT21DbFBCZjJNTzRRNmxFRjl5alN6a1RPVlB3T1pnV2ZsK2VlbDRuQ3BGT1poc3lDMEJWZVdyVUQxSkhaMkV2YWJJTEhLQ005TnNwSDlVWjRkTERPcVpZbGs3ZFdmaEoxYm9ueEhUQkk3dDcvRityRlNzU09HTWtRVzRoTzVCclE3Q1JzeFRwUGJ6M2FkVDYyS0VKa2pYN1A2VTUxbGJiSXlyaERuaHpYaFl1ZTNrR3RISkVzTERjbXpMOTFJK0pYR2VERjZPK1JIMHpNYlpKb1I2Ym9oZHd0VGhjM3NFU083REllbWIvVkVSdDJRdTRVenhGODBhdmhlZEhxeklES21odHd0WENOQ2lKcFFuU0c1SWQ5cURBMjVHK2pGUGVLdkhmdlZrTHVGWTlJMXF2Z0hMRU9XQVJJMFFXd0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJ1xyXG5cclxubGV0IHN0b3JlXHJcblxyXG5jb25zdCBleGFtcGxlSW5pdGlhbFN0YXRlID0ge1xyXG4gIG1vZGU6J2RheScsXHJcbiAgbGFuZzonZW4nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBEQVk6ICdEQVknLFxyXG4gIE5JR0hUOiAnTklHSFQnLFxyXG4gIEVOOiAnRU4nLFxyXG4gIFpISEFOVDogJ1pISEFOVCcsXHJcbiAgUkVTRVQ6ICdSRVNFVCdcclxufVxyXG5cclxuLy8gUkVEVUNFUlNcclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkRBWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnZGF5J1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLk5JR0hUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vZGU6ICduaWdodCdcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5FTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsYW5nOiAnZW4nXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuWkhIQU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxhbmc6ICd6aEhhbnQnXHJcbiAgICAgIH0gXHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlJFU0VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vZGU6ICdkYXknLFxyXG4gICAgICAgIGxhbmc6ICdlbidcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG4vLyBBQ1RJT05TXHJcbmV4cG9ydCBjb25zdCB0b0RheSA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5EQVkgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9OaWdodCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5OSUdIVCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b0VuID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkVOIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvWmhIYW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlpISEFOVCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXNldENvdW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlJFU0VUIH1cclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICBrZXk6ICdwcmltYXJ5JyxcclxuICBzdG9yYWdlLFxyXG4gIHdoaXRlbGlzdDogWydtb2RlJywgJ2xhbmcnXSwgLy8gcGxhY2UgdG8gc2VsZWN0IHdoaWNoIHN0YXRlIHlvdSB3YW50IHRvIHBlcnNpc3RcclxufVxyXG5cclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXIpXHJcblxyXG5mdW5jdGlvbiBtYWtlU3RvcmUoaW5pdGlhbFN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSkge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShcclxuICAgIHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBtYWtlU3RvcmUocHJlbG9hZGVkU3RhdGUpXHJcblxyXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxyXG4gIC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XHJcbiAgICBfc3RvcmUgPSBtYWtlU3RvcmUoe1xyXG4gICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxyXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcclxuICAgIH0pXHJcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxyXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXHJcbiAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcclxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxyXG5cclxuICByZXR1cm4gX3N0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4gIHJldHVybiBzdG9yZVxyXG59XHJcblxyXG5cclxuLy8gaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbi8vIGltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcblxyXG4vLyBsZXQgc3RvcmVcclxuXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gICAgIG1vZGU6J2RheSdcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbi8vICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyAgICAgY2FzZSAnREFZJzpcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICBtb2RlOiAnZGF5JyxcclxuLy8gICAgICAgfVxyXG4vLyAgICAgY2FzZSAnTklHSFQnOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgIG1vZGU6ICduaWdodCcsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGNhc2UgJ1JFU0VUJzpcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgfVxyXG4vLyAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgcmV0dXJuIHN0YXRlXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUgPSBpbml0aWFsU3RhdGUpIHtcclxuLy8gICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbi8vICAgICByZWR1Y2VyLFxyXG4vLyAgICAgcHJlbG9hZGVkU3RhdGUsXHJcbi8vICAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG4vLyAgIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpXHJcblxyXG4vLyAgIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxyXG4vLyAgIC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbi8vICAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XHJcbi8vICAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xyXG4vLyAgICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxyXG4vLyAgICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcclxuLy8gICAgIH0pXHJcbi8vICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxyXG4vLyAgICAgc3RvcmUgPSB1bmRlZmluZWRcclxuLy8gICB9XHJcblxyXG4vLyAgIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXHJcbi8vICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXHJcbi8vICAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcclxuLy8gICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxyXG5cclxuLy8gICByZXR1cm4gX3N0b3JlXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuLy8gICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxyXG4vLyAgIHJldHVybiBzdG9yZVxyXG4vLyB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkSW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMk91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZUZpbGxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmFkaW9CdXR0b25VbmNoZWNrZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=