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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0Fib3V0L2NvbXBvbmVudC9CaW8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSG9tZS9jb21wb25lbnQvTGVhcm5CeURvaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL2NvbXBvbmVudC9TaGFyaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL2NvbXBvbmVudC9Ta2lsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvUGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1B1YmxpY0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1Njcm9sbHVwLmpzIiwid2VicGFjazovLy8uL2Nzcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3MvcHVibGljLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvYWJvdXQvYXZhcnRhci5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWYxMC5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWY0LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjUuZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmNi5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWY3LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjguZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL05leHQtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvY3NzLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9maWdtYS1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2dpdC1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvZ2l0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qYXZhc2NyaXB0LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qYXZhc2NyaXB0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qZXN0LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qZXN0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvbXlzcWwucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL25leHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL25wbS1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvbnBtLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9waHAtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3BocC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvcmVhY3QtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9zeW1mb255LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9zeW1mb255LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS92aWV3MS5qcGVnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3ZpZXcyLmpwZWciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMk91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JhZGlvQnV0dG9uVW5jaGVja2VkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1zZW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aXRsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInN1YnRpdGxlIiwiZm9udFdlaWdodCIsImltZyIsImJvcmRlclJhZGl1cyIsImNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwiQmlvIiwidCIsInByb3BzIiwiY2xhc3NlcyIsIm1vZGUiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiYXZhcnRhciIsIndpZHRoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iLCJkYXlCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJuaWdodEJhY2tncm91bmQiLCJib2R5IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJIb21lIiwiZHJhd2VyIiwic2V0RHJhd2VyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJsYW5nIiwiaGVpZ2h0IiwiaW1nQmxvY2siLCJpbWdIb3ZlciIsInpJbmRleCIsIkxlYXJuQnlEb2luZyIsIm9uSG92ZXIiLCJzZXRPbkhvdmVyIiwiaGFuZGxlT25Ib3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJnaWY0IiwiZ2lmNSIsImdpZjYiLCJnaWY3IiwiZ2lmOCIsImdpZjEwIiwic3VidGl0bGVOaWdodCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25OaWdodCIsInBhY2thZ2VCbG9jayIsImJvcmRlckJvdHRvbSIsIm92ZXJmbG93IiwicGFja2FnZUJsb2NrTmlnaHQiLCJsaW5rIiwibmlnaHRMaW5rIiwiU2hhcmluZyIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJwaG90bzEiLCJwaG90bzIiLCJTa2lsbCIsInN0eWxlcyIsImJhbGwiLCJqYXZhc2NyaXB0SWNvbiIsImphdmFzY3JpcHROaWdodEljb24iLCJqZXN0TG9nb0xnIiwiamVzdEljb24iLCJqZXN0TmlnaHRJY29uIiwiamVzdExvZ28iLCJnaXRJY29uIiwiZ2l0TmlnaHRJY29uIiwibmV4dExvZ28iLCJuZXh0SWNvbiIsIm5leHROaWdodEljb24iLCJyZWFjdEljb24iLCJyZWFjdE5pZ2h0SWNvbiIsImNzc0ljb24iLCJjc3NOaWdodEljb24iLCJwaHBJY29uIiwicGhwTmlnaHRJY29uIiwibnBtSWNvbiIsIm5wbU5pZ2h0SWNvbiIsIm15c3FsSWNvbiIsIm15c3FsTmlnaHRJY29uIiwiZmlnbWFJY29uIiwiZmlnbWFOaWdodEljb24iLCJ3ZWJwYWNrSWNvbiIsIndlYnBhY2tOaWdodEljb24iLCJzeW1mb255SWNvbiIsInN5bWZvbnlOaWdodEljb24iLCJCYW5uZXIiLCJDdXN0b21pemVDYXJvdXNlbCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY291bnQiLCJoYW5kbGVUaW1lciIsImJpbmQiLCJ0aW1lciIsImhhbmRsZU5leHQiLCJoYW5kbGVCYWNrIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwicm90YXRlQnkiLCJyZW5kZXIiLCJpbWdzcmMiLCJjb250cm9sQnV0dG9uIiwibmF2aWdhdGVCdXR0b24iLCJsaXN0IiwiaSIsImxlbmd0aCIsInB1c2giLCJwYXJzZUludCIsIm1hcmdpbiIsIlJhZGlvTmF2aWdhdGlvbiIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwibWFpbiIsIm92ZXJmbG93WSIsImxldHRlclNwYWNpbmciLCJkcmF3ZXJMaW5rIiwiZHJhd2VySGVhZGVyIiwiaWNvbiIsIkRyYXdlciIsImxpbmtOaWdodCIsIkZvb3RlciIsImZvb3RlckJsb2NrIiwiZm9vdGVyQmxvY2tOaWdodCIsImxpbmtBbmNob3IiLCJuaWdodExpbmtBbmNob3IiLCJuaWdodEljb24iLCJmb3JtQ29udHJvbCIsImlucHV0TGFiZWwiLCJmbGV4RGlyZWN0aW9uIiwiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImhhbmRsZUxhbmdUb1JlZHV4IiwidGFyZ2V0IiwidmFsdWUiLCJpMThuIiwiY2hhbmdlTGFuZ3VhZ2UiLCJkaXNwYXRjaCIsInRvRW4iLCJ0b1poSGFudCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsInVzZURpc3BhdGNoIiwibGFiZWwiLCJ0b05pZ2h0IiwidG9EYXkiLCJwYXRobmFtZSIsIlBhZ2VMb2FkZXIiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwidXNlRWZmZWN0IiwiU2VsZWN0Iiwib25PcGVuIiwib25DbG9zZSIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyb290IiwiaW5wdXQiLCJTZWxlY3QyIiwibmFtZSIsImZvcm1Db250cm9sUHJvcHMiLCJzZWxlY3RQcm9wcyIsInJlcXVpcmVkIiwiZGlzYWJsZWQiLCJ0YWJJbmRleCIsIm5ld1Byb3BzIiwic2VsZWN0UmVxdWlyZWQiLCJzZWxlY3QiLCJzZWxlY3RlZCIsImNoZWNrRXF1YWwiLCJhIiwiYiIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiZmlsdGVycyIsImZpbHRlciIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImFycmF5Iiwib2JqZWN0IiwiaW5wdXRMYWJlbFByb3BzIiwiaWNvbk5pZ2h0IiwiU2Nyb2xsdXAiLCJzY3JvbGxDIiwic2V0U2Nyb2xsQyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblNjcm9sbCIsInNjcm9sbFkiLCJoYW5kbGVTY3JvbGx0b1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJhbGlnbiIsIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJsb2NhbGVTdWJwYXRocyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJwYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHRMYW5ndWFnZSIsIm90aGVyTGFuZ3VhZ2VzIiwiemhIYW50IiwiZnIiLCJlcyIsImxvY2FsZVBhdGgiLCJyZXNvbHZlIiwiSG9tZVBhZ2UiLCJ1cmwiLCJpbWFnZXMiLCJhbHQiLCJzaXRlX25hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJzdG9yZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJhY3Rpb25UeXBlcyIsIkRBWSIsIk5JR0hUIiwiRU4iLCJaSEhBTlQiLCJSRVNFVCIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwicmVzZXRDb3VudCIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwid2hpdGVsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwibWFrZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDeExBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAncmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBhdmFydGFyIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9hYm91dC9hdmFydGFyLmpwZydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nXHJcbiAgICB9LFxyXG4gICAgc3VidGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMFxyXG4gICAgfSxcclxuICAgIGltZzp7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOic1MCUnXHJcbiAgICB9LFxyXG4gICAgY29udGVudDp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OicxLjhyZW0nXHJcbiAgICB9LFxyXG59KVxyXG5cclxuY29uc3QgQmlvID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17ZmFsc2V9IG1kPXszfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdncmVldGluZycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzbT17M30gbWQ9ezR9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9IHNtPXs2fSBtZD17NH0gc3R5bGU9e3ttYXJnaW5Ub3A6Jy0xcmVtJyxwYWRkaW5nOicxcmVtJywgdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXJ0YXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc209ezN9IG1kPXs0fT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZW50MScpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZW50MicpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZW50MycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkJpby5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Fib3V0JykoQmlvKSAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vUHVibGljL0hlYWRlcidcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9QdWJsaWMvQmFubmVyJ1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4uL1B1YmxpYy9EcmF3ZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vUHVibGljL0Zvb3RlcidcclxuaW1wb3J0IFNraWxsIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L1NraWxsJ1xyXG5pbXBvcnQgU2hhcmluZyBmcm9tICcuL2NvbXBvbmVudC9TaGFyaW5nJ1xyXG5pbXBvcnQgTGVhcm5CeURvaW5nIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L0xlYXJuQnlEb2luZydcclxuaW1wb3J0IEJpbyBmcm9tICcuLi9BYm91dC9jb21wb25lbnQvQmlvJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBQYWdlTG9hZGVyIH0gZnJvbSAnLi4vUHVibGljL1BhZ2VMb2FkZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGRheUJhY2tncm91bmQ6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonI0ZGRkZGRicsXHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICB9LFxyXG4gICAgbmlnaHRCYWNrZ3JvdW5kOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJyxcclxuICAgICAgICBjb2xvcjonI0ZGRkZGRidcclxuICAgIH0sXHJcbiAgICBib2R5OntcclxuICAgICAgICBwYWRkaW5nTGVmdDonOCUnLCBcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6JzglJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbZHJhd2VyLCBzZXREcmF3ZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbW9kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubW9kZSlcclxuICAgIGNvbnN0IGxhbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxhbmcpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gZmFsc2UgJiZcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGF5QmFja2dyb3VuZDpjbGFzc2VzLm5pZ2h0QmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUxvYWRlciBtb2RlPXttb2RlfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJPcGVuPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzhyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzEwMHZoJywgYmFja2dyb3VuZENvbG9yOicjMWYxZjFmJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGdpZjQgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY0LmdpZidcclxuaW1wb3J0IGdpZjUgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY1LmdpZidcclxuaW1wb3J0IGdpZjYgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY2LmdpZidcclxuaW1wb3J0IGdpZjcgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY3LmdpZidcclxuaW1wb3J0IGdpZjggZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY4LmdpZidcclxuaW1wb3J0IGdpZjEwIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9naWYvZ2lmMTAuZ2lmJ1xyXG5pbXBvcnQgbXlzcWxJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL215c3FsLnBuZydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH0sXHJcbiAgICBpbWdCbG9jazp7XHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIC8vIHBhZGRpbmc6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgaW1nSG92ZXI6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonYmxhY2snLFxyXG4gICAgICAgIHpJbmRleDo5OTlcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IExlYXJuQnlEb2luZyA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbb25Ib3Zlciwgc2V0T25Ib3Zlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25Ib3ZlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRPbkhvdmVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T25Ib3ZlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0KCd0aXRsZScpfTwvcD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd2VpYW5vZnN0ZWVsLmdpdGh1Yi5pby9MZWFybi1CeS1Eb2luZy8wNC1zbGlkZS1zaG93LydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY0fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93ZWlhbm9mc3RlZWwuZ2l0aHViLmlvL0xlYXJuLUJ5LURvaW5nLzA1LXNob3BwaW5nLWNhcnQvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdCbG9ja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3dlaWFub2ZzdGVlbC5naXRodWIuaW8vTGVhcm4tQnktRG9pbmcvMDYtY2FudmFzLWRyYXdpbmcvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdCbG9ja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3dlaWFub2ZzdGVlbC5naXRodWIuaW8vTGVhcm4tQnktRG9pbmcvMDctbW92aWUtdHJhaWxlci8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY3fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93ZWlhbm9mc3RlZWwuZ2l0aHViLmlvL3JlYWN0LXdlYXRoZXItYXBwLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY4fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9yZWFjdC10ZXh0LWVkaXRvci1pdGNsNzh4eTktd2VpYW5vZnN0ZWVsLnZlcmNlbC5hcHAvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjEwfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5MZWFybkJ5RG9pbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdsZWFybkJ5RG9pbmcnKShMZWFybkJ5RG9pbmcpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBDdXN0b21pemVDYXJvdXNlbCBmcm9tICcuLi8uLi9QdWJsaWMvQ2Fyb3VzZWwnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IHsgU2Nyb2xsdXAgfSBmcm9tICcuLi8uLi9QdWJsaWMvU2Nyb2xsdXAnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbidcclxuaW1wb3J0IHBob3RvMSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS92aWV3MS5qcGVnJztcclxuaW1wb3J0IHBob3RvMiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS92aWV3Mi5qcGVnJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH0sXHJcbiAgICBpbWdCbG9jazp7XHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGltZ0hvdmVyOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJyxcclxuICAgICAgICB6SW5kZXg6OTk5XHJcbiAgICB9LFxyXG4gICAgc3VidGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuOHJlbScsXHJcbiAgICAgICAgZm9udFdlaWdodDo5MDBcclxuICAgIH0sXHJcbiAgICBzdWJ0aXRsZU5pZ2h0OntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicxLjhyZW0nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgZm9udFdlaWdodDo5MDBcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb25OaWdodDp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICB9LFxyXG4gICAgcGFja2FnZUJsb2NrOntcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nLFxyXG4gICAgICAgIHBhZGRpbmc6JzFyZW0nLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUY1RjUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiAnLjRzIGVhc2UtaW4tb3V0J1xyXG4gICAgfSxcclxuICAgIHBhY2thZ2VCbG9ja05pZ2h0OntcclxuICAgICAgICBib3JkZXJCb3R0b206JzFweCBzb2xpZCB3aGl0ZScsXHJcbiAgICAgICAgcGFkZGluZzonMXJlbScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzVjNWM1YycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIG1hcmdpblRvcDonM3JlbSdcclxuICAgIH0sXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICBjb2xvcjonIzVjNWM1YydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmlnaHRMaW5rOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicxLjJyZW0nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonI2M0YzRjNCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBTaGFyaW5nID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57dCgndGl0bGUnKX08L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5wYWNrYWdlQmxvY2s6Y2xhc3Nlcy5wYWNrYWdlQmxvY2tOaWdodH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuc3VidGl0bGU6Y2xhc3Nlcy5zdWJ0aXRsZU5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGVzY3JpcHRpb246Y2xhc3Nlcy5kZXNjcmlwdGlvbk5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Rlc2NyaXB0aW9uMicpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gc3R5bGU9e3ttYXJnaW5Cb3R0b206Jy0wLjRyZW0nfX0vPnt0KCdsaW5rJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiZuYnNwOzwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6JzMwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVNwZWVkPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU3BlZWQ9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9eycyNHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9eydSb2JvdG8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e21vZGU9PSdkYXknPydibGFjayc6J3doaXRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9eydUeXBld3JpdGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUZXh0PXtbXCJIZWxsbyBXb3JsZFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVNwZWVkPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU3BlZWQ9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9eycyNHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9eydSb2JvdG8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e21vZGU9PSdkYXknPydibGFjayc6J3doaXRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9eydUeXBld3JpdGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUZXh0PXtbXCJIZWxsbyBXb3JsZFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMucGFja2FnZUJsb2NrOmNsYXNzZXMucGFja2FnZUJsb2NrTmlnaHR9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30gc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5zdWJ0aXRsZTpjbGFzc2VzLnN1YnRpdGxlTmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdC1jdXN0b21pemUtY2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmRlc2NyaXB0aW9uOmNsYXNzZXMuZGVzY3JpcHRpb25OaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdkZXNjcmlwdGlvbjEnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC1jdXN0b21pemUtY2Fyb3VzZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7bWFyZ2luQm90dG9tOictMC40cmVtJ319Lz57dCgnbGluaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9IHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0JyxwYWRkaW5nVG9wOicxcmVtJyxwYWRkaW5nTGVmdDonMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9taXplQ2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nc3JjPXtbcGhvdG8xLCBwaG90bzIsIHBob3RvMSwgcGhvdG8yLCBwaG90bzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVCeT17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLnBhY2thZ2VCbG9jazpjbGFzc2VzLnBhY2thZ2VCbG9ja05pZ2h0fT4gICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuc3VidGl0bGU6Y2xhc3Nlcy5zdWJ0aXRsZU5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3Qtc2Nyb2xsLXVwLWJ0blxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGVzY3JpcHRpb246Y2xhc3Nlcy5kZXNjcmlwdGlvbk5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Rlc2NyaXB0aW9uMycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXNjcm9sbC11cC1idG4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7bWFyZ2luQm90dG9tOictMC40cmVtJ319Lz57dCgnbGluaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzonMjAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbHVwIG1vZGU9e21vZGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsdXAgbW9kZT17bW9kZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNoYXJpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdzaGFyaW5nJykoU2hhcmluZykiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgcmVhY3RJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LnBuZydcclxuaW1wb3J0IHJlYWN0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LW5pZ2h0LnBuZydcclxuaW1wb3J0IGplc3RJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2plc3QucG5nJ1xyXG5pbXBvcnQgamVzdE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9qZXN0LW5pZ2h0LnBuZydcclxuaW1wb3J0IGdpdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZ2l0LnBuZydcclxuaW1wb3J0IGdpdE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9naXQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgbmV4dEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbmV4dC5wbmcnXHJcbmltcG9ydCBuZXh0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL05leHQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgamF2YXNjcmlwdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC5wbmcnXHJcbmltcG9ydCBqYXZhc2NyaXB0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2phdmFzY3JpcHQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgY3NzSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9jc3MucG5nJ1xyXG5pbXBvcnQgY3NzTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy1uaWdodC5wbmcnXHJcbmltcG9ydCBucG1JY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL25wbS5wbmcnXHJcbmltcG9ydCBucG1OaWdodEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbnBtLW5pZ2h0LnBuZydcclxuaW1wb3J0IG15c3FsSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC5wbmcnXHJcbmltcG9ydCBteXNxbE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC1uaWdodC5wbmcnXHJcbmltcG9ydCBmaWdtYUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEucG5nJ1xyXG5pbXBvcnQgZmlnbWFOaWdodEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEtbmlnaHQucG5nJ1xyXG5pbXBvcnQgd2VicGFja0ljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay5wbmcnXHJcbmltcG9ydCB3ZWJwYWNrTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3dlYnBhY2stbmlnaHQucG5nJ1xyXG5pbXBvcnQgc3ltZm9ueUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS5wbmcnXHJcbmltcG9ydCBzeW1mb255TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3N5bWZvbnktbmlnaHQucG5nJ1xyXG5pbXBvcnQgcGhwSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9waHAucG5nJ1xyXG5pbXBvcnQgcGhwTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3BocC1uaWdodC5wbmcnXHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvIFNsYWInLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2tpbGwgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0KCd0aXRsZScpfTwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9IHN0eWxlPXt7bWFyZ2luVG9wOic0JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amF2YXNjcmlwdEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2phdmFzY3JpcHROaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuamVzdExvZ29MZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3ROaWdodEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24gbGdVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3ROaWdodEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmplc3RMb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amVzdEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amVzdE5pZ2h0SWNvbn0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaXRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaXROaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV4dExvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV4dEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV4dE5pZ2h0SWNvbn0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVhY3RJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWFjdE5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc0ljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc05pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BocEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BocE5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbU5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e215c3FsSWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bXlzcWxOaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmaWdtYUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZpZ21hTmlnaHRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2VicGFja0ljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dlYnBhY2tOaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzeW1mb255SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3ltZm9ueU5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNraWxsLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignc2tpbGwnKShTa2lsbCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBjb250ZW50OntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQmFubmVyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRleHQxJyl9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29udGV4dDInKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5CYW5uZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdiYW5uZXInKShCYW5uZXIpICAgICAgICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQXJyb3dCYWNrSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zJztcclxuaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFBsYXlDaXJjbGVGaWxsZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkJztcclxuaW1wb3J0IFJhZGlvQnV0dG9uVW5jaGVja2VkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmFkaW9CdXR0b25VbmNoZWNrZWQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuXHJcbmNsYXNzIEN1c3RvbWl6ZUNhcm91c2VsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvdW50OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVRpbWVyID0gdGhpcy5oYW5kbGVUaW1lci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnRpbWVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVOZXh0ID0gdGhpcy5oYW5kbGVOZXh0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCYWNrID0gdGhpcy5oYW5kbGVCYWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oYW5kbGVUaW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVGltZXIoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLnRpbWVyKCk7fSwxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpPT4oe1xyXG4gICAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50ICsgMVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnJvdGF0ZUJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pih7XHJcbiAgICAgICAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50ICsgM1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKT0+KHtcclxuICAgICAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgKyBwcm9wcy5yb3RhdGVCeVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJhY2soKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMucm90YXRlQnkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHByZXZTdGF0ZS5jb3VudCAtIDNcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgLSBwcm9wcy5yb3RhdGVCeVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudDogMH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpbWdzcmMsXHJcbiAgICAgICAgICAgIHJvdGF0ZUJ5LFxyXG4gICAgICAgICAgICBtb2RlLFxyXG4gICAgICAgICAgICBjb250cm9sQnV0dG9uLFxyXG4gICAgICAgICAgICBuYXZpZ2F0ZUJ1dHRvblxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gW107XHJcblxyXG4gICAgICAgIGlmKCFpbWdzcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxpc3RcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKCFyb3RhdGVCeSkge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBpbWdzcmMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQoIHRoaXMuc3RhdGUuY291bnQgLyAzKSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3NyY1tpXX0gc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8nLCB3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGltZ3NyYy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIHJvdGF0ZUJ5KSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3NyY1tpXX0gc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8nLCB3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgUmFkaW9OYXZpZ2F0aW9uID0gW107XHJcblxyXG4gICAgICAgIGlmKCFpbWdzcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJhZGlvTmF2aWdhdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIXJvdGF0ZUJ5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGltZ3NyYy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBSYWRpb05hdmlnYXRpb24ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7ZGlzcGxheTonaW5saW5lJywgdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQoIHRoaXMuc3RhdGUuY291bnQgLyAzKSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDMgKiBpfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlDaXJjbGVGaWxsZWRJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe2NvdW50OiAzICogaX0pfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblVuY2hlY2tlZEljb24gc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPydibGFjayc6J3doaXRlJyl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFJhZGlvTmF2aWdhdGlvbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIHJvdGF0ZUJ5KSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7Y291bnQ6IHJvdGF0ZUJ5ICogaX0pfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlRmlsbGVkSWNvbiBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHtjb3VudDogcm90YXRlQnkgKiBpfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uVW5jaGVja2VkSWNvbiBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luTGVmdDonLTFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezF9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6MH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbEJ1dHRvbiA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0ZUJ1dHRvbj09PXRydWU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17MTB9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UmFkaW9OYXZpZ2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo8R3JpZCBpdGVtIHhzPXsxMH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xCdXR0b24gPT09IHRydWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6ZUNhcm91c2VsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVpZ2h0OicxMDB2aCcsXHJcbiAgICAgICAgb3ZlcmZsb3dZOidoaWRkZW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonIzFmMWYxZicsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzglJywgXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Oic4JSdcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J0JlYmFzIE5ldWUgJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOicjQ0FDQUNBJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonI0NBQ0FDQScsXHJcbiAgICAgICAgZm9udFNpemU6JzIycHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9LFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBEcmF3ZXIgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZSxcclxuICAgICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV0VJQU4gV0FOR1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfSBzdHlsZT17e21hcmdpblRvcDonNHJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xb3JrXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV3JpdGluZ3NcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCd3cml0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xhbmc9PSdlbic/Jy4vcmVzdW1lLnBkZic6Jy4v5bGl5q23LnBkZid9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXInIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgncmVzdW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkRyYXdlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKERyYXdlcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvcHVibGljLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGluazoge1xyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonIzkxOTE5MSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGlua05pZ2h0OntcclxuICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyNCREJEQkQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgRm9vdGVyID0gKHt0LCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSAgPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PSdkYXknP3N0eWxlcy5mb290ZXJCbG9jazpzdHlsZXMuZm9vdGVyQmxvY2tOaWdodH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezd9IG1kPXs0fSBzdHlsZT17e21hcmdpbkJvdHRvbTonMnJlbScsIGZvbnRTaXplOicxLjJyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319Pnt0KCdjb250YWN0VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPis4ODY5IDEyIDU5NyAxMDk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPndlaWFub2ZzdGVlbEBnbWFpbC5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezV9IG1kPXs0fSBzdHlsZT17e21hcmdpbkJvdHRvbTonMnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+e3QoJ2ZvbGxvd1RpdGxlJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3dlaWFub2ZzdGVlbC5tZWRpdW0uY29tLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5saW5rTmlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZWRpdW1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS93ZWlhbm9mc3RlZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09J2RheSc/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua05pZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2l0aHViXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vd2VpYW4td2FuZy8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09J2RheSc/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua05pZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGlua2VkaW5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb3B5cmlnaHQnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnY29weXJpZ2h0RGVzY3JpcHRpb24nKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuRm9vdGVyLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuICBcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdmb290ZXInKShGb290ZXIpXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9QdWJsaWMvSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQge1NlbGVjdCwgU2VsZWN0Mn0gZnJvbSAnLi9QdWJsaWNDb21wb25lbnQnO1xyXG5pbXBvcnQgQnJpZ2h0bmVzczJPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWQnO1xyXG5pbXBvcnQgV2JTdW5ueU91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdG9EYXksIHRvTmlnaHQsIHRvRW4sIHRvWmhIYW50IH0gZnJvbSAnLi4vLi4vc3RvcmUnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICB0aXRsZToge1xyXG4gICAgZm9udEZhbWlseTonQmViYXMgTmV1ZSAnLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgZm9udFNpemU6JzEuN3JlbScsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgZm9udFNpemU6JzEuMXJlbScsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmlnaHRMaW5rOiB7XHJcbiAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgY29sb3I6JyNGRkZGRkYnLFxyXG4gICAgZm9udFNpemU6JzEuMXJlbScsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6JyNCREJEQkQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBsaW5rQW5jaG9yOiB7XHJcbiAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgY29sb3I6J2JsYWNrJyxcclxuICAgIGZvbnRTaXplOicxLjFyZW0nXHJcbiAgfSxcclxuICBuaWdodExpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonI0JEQkRCRCcsXHJcbiAgICBmb250U2l6ZTonMS4xcmVtJ1xyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICB9XHJcbiAgfSxcclxuICBuaWdodEljb246e1xyXG4gICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICBjb2xvcjonI0ZGRkZGRicsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6JyNCREJEQkQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBmb3JtQ29udHJvbDoge1xyXG4gICAgbWFyZ2luOiAnMC41cmVtJyxcclxuICAgIHdpZHRoOic2cmVtJyxcclxuICB9LFxyXG4gIGlucHV0TGFiZWw6IHtcclxuICAgIGZvbnRTaXplOlwiMTdweFwiLFxyXG4gICAgZm9udEZhbWlseTpcIuW+rui7n+ato+m7kemrlFwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1SZXZlcnNlXCJcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIC8vIGNvbnN0IFsgbGFuZ3VhZ2UsIHNldExhbmd1YWdlIF0gPSBSZWFjdC51c2VTdGF0ZSgnZW4nKTtcclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vIHNldExhbmd1YWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIGhhbmRsZUxhbmdUb1JlZHV4KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTGFuZ1RvUmVkdXggPSAodmFsdWUpID0+IHtcclxuICAgICAgaWYodmFsdWUgPT0gJ2VuJykge1xyXG4gICAgICAgIGRpc3BhdGNoKHRvRW4oKSlcclxuICAgICAgfSBcclxuICAgICAgZWxzZSBpZiAodmFsdWUgPT0gJ3poSGFudCcpIHtcclxuICAgICAgICBkaXNwYXRjaCh0b1poSGFudCgpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgaGFuZGxlRHJhd2VyT3BlbixcclxuICAgICAgbW9kZSxcclxuICAgICAgbGFuZ1xyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFdFSUFOIFdBTkdcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9IGxnPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC4zcmVtJywgcGFkZGluZ0xlZnQ6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0MlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6J2VuJyxsYWJlbDpcIkVuZ2xpc2hcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOid6aEhhbnQnLGxhYmVsOlwi5Lit5paHXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMC4zcmVtJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGUgPT09ICdkYXknP1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9OaWdodCgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9EYXkoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFdiU3VubnlPdXRsaW5lZEljb24gZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJywgbWFyZ2luTGVmdDoobGFuZz09J2VuJz8nLTFyZW0nOicnKX19PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSdkYXknJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dvcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xb3JrJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OihsYW5nPT0nZW4nPydub3JtYWwnOidib2xkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3b3JrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J25pZ2h0JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xb3JrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV29yayc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6KGxhbmc9PSdlbic/J25vcm1hbCc6J2JvbGQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nLCBtYXJnaW5MZWZ0OihsYW5nPT0nZW4nPyctMXJlbSc6JycpfX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J2RheScmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV3JpdGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xcml0aW5ncyc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDoobGFuZz09J2VuJz8nbm9ybWFsJzonYm9sZCcpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nbmlnaHQnJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dyaXRpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV3JpdGluZ3MnP2NsYXNzZXMubmlnaHRMaW5rQW5jaG9yOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OihsYW5nPT0nZW4nPydub3JtYWwnOidib2xkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3cml0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJywgbWFyZ2luTGVmdDoobGFuZz09J2VuJz8nMC44cmVtJzonJyl9fT5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU9PT0nZGF5JyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xhbmc9PSdlbic/Jy4vcmVzdW1lLnBkZic6Jy4v5bGl5q23LnBkZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvUmVzdW1lJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6KGxhbmc9PSdlbic/J25vcm1hbCc6J2JvbGQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdyZXN1bWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZT09PSduaWdodCcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsYW5nPT0nZW4nPycuL3Jlc3VtZS5wZGYnOicuL+Wxpeatty5wZGYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1Jlc3VtZSc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDoobGFuZz09J2VuJz8nbm9ybWFsJzonYm9sZCcpfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3Jlc3VtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbGdVcD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAge21vZGUgPT09ICdkYXknP1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9OaWdodCgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh0b0RheSgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8V2JTdW5ueU91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOidlbicsbGFiZWw6XCJFbmdsaXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonemhIYW50JyxsYWJlbDpcIuS4reaWh1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0J319PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9jbGFzc2VzLmljb246Y2xhc3Nlcy5uaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgey8qIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPiAqL31cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoSGVhZGVyKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJ3JlYWN0LXRvcC1sb2FkaW5nLWJhcidcclxuIFxyXG5leHBvcnQgY29uc3QgUGFnZUxvYWRlciA9IChwcm9wcykgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0UHJvZ3Jlc3MoMTAwKTtcclxuICB9LFtdKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBtb2RlXHJcbiAgfSA9IHByb3BzO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMb2FkaW5nQmFyXHJcbiAgICAgICAgY29sb3I9e21vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZSd9XHJcbiAgICAgICAgaGVpZ2h0PXszfVxyXG4gICAgICAgIHdhaXRpbmdUaW1lPXs1MDB9XHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU9ezEwMDB9XHJcbiAgICAgICAgbG9hZGVyU3BlZWQ9ezYwMH1cclxuICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgb25Mb2FkZXJGaW5pc2hlZD17KCkgPT4gc2V0UHJvZ3Jlc3MoMCl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgU2VsZWN0IGFzIE1hdGVyaWFsU2VsZWN0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbCwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHJhbnNsYXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaW5wdXRMYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOlwiMS4xcmVtXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTpcIuW+rui7n+ato+m7kemrlFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG9uT3BlbixcclxuICAgICAgICBvbkNsb3NlLFxyXG4gICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIG9wZW4sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8TWF0ZXJpYWxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvbk9wZW49e29uT3Blbn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmVcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJWYWx1ZT17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRyYW5zbGF0ZUljb24gc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX0vPlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+ICAgICAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0Mihwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgZm9ybUNvbnRyb2xQcm9wcyxcclxuICAgICAgICBzZWxlY3RQcm9wcyxcclxuICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICBkaXNhYmxlZCA9ZmFsc2UsXHJcbiAgICAgICAgdGFiSW5kZXg9MCxcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgbGV0IG5ld1Byb3BzID0ge1xyXG4gICAgICAgIC4uLnByb3BzXHJcbiAgICB9O1xyXG4gICAgZGVsZXRlIG5ld1Byb3BzW1wiaGVscGVyVGV4dFwiXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlSWNvbi8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICB7Li4uZm9ybUNvbnRyb2xQcm9wc31cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWxcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDpjbGFzc2VzLmlucHV0TGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOmNsYXNzZXMuc2VsZWN0UmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnNlbGVjdFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7c2VsZWN0OiBjbGFzc2VzLmlucHV0fSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdERpc3BsYXlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDp0YWJJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPT09bnVsbD9cIlwiOnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9e3NlbGVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tFcXVhbChhLGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBiLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcnM9IGl0ZW1zLmZpbHRlcihpdGVtPT4gY2hlY2tFcXVhbChpdGVtLnZhbHVlLHNlbGVjdGVkKSAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnNbMF0/ZmlsdGVyc1swXVtcImxhYmVsXCJdOlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWU/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWw/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufVxyXG5cclxuU2VsZWN0LnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5TZWxlY3QyLnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBFeHBhbmRMZXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgZm9udFNpemU6JzRyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpY29uTmlnaHQ6IHtcclxuICAgICAgICBmb250U2l6ZTonNHJlbScsXHJcbiAgICAgICAgY29sb3I6JyNGRkZGRkYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyNjOWM5YzknXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsdXAgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtzY3JvbGxDLCBzZXRTY3JvbGxDXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsQyh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsdG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYod2luZG93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2FsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3Njcm9sbEMgPiA0MDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbHRvVG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZExlc3NJY29uIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuaWNvbjpjbGFzc2VzLmljb25OaWdodH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PjwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFsbFwiOiBcIkhvbWVfYmFsbF9fMk1kVWNcIixcblx0XCJuZXh0TG9nb1wiOiBcIkhvbWVfbmV4dExvZ29fXzI3TzhGXCIsXG5cdFwiamVzdExvZ29MZ1wiOiBcIkhvbWVfamVzdExvZ29MZ19fMnJ0Vk5cIixcblx0XCJqZXN0TG9nb1wiOiBcIkhvbWVfamVzdExvZ29fXzJGUU9OXCIsXG5cdFwiYm91bmNlXCI6IFwiSG9tZV9ib3VuY2VfXzFhNWlfXCIsXG5cdFwic2tpbGxCbG9ja1wiOiBcIkhvbWVfc2tpbGxCbG9ja19fMVRtbmhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvbjJcIjogXCJIZWFkZXJfYnV0dG9uMl9fd0Y3WEdcIixcblx0XCJib3VuY2VcIjogXCJIZWFkZXJfYm91bmNlX18yNHRVOVwiLFxuXHRcImJhbGxcIjogXCJIZWFkZXJfYmFsbF9fM3BSaTdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlckJsb2NrXCI6IFwicHVibGljX2Zvb3RlckJsb2NrX19YdUNyLVwiLFxuXHRcImZvb3RlckJsb2NrTmlnaHRcIjogXCJwdWJsaWNfZm9vdGVyQmxvY2tOaWdodF9fM21pN2JcIixcblx0XCJpbWdEZXNjcmlwdGlvblwiOiBcInB1YmxpY19pbWdEZXNjcmlwdGlvbl9fMkdCREpcIixcblx0XCJpbWdEZXNjcmlwdGlvbk5pZ2h0XCI6IFwicHVibGljX2ltZ0Rlc2NyaXB0aW9uTmlnaHRfXzNDWEpFXCIsXG5cdFwiYmFyXCI6IFwicHVibGljX2Jhcl9fMzQ3UVhcIlxufTtcbiIsIlxyXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcclxuY29uc3QgbG9jYWxlU3VicGF0aHMgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHQoKS5wdWJsaWNSdW50aW1lQ29uZmlnXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcclxuICBkZWZhdWx0TGFuZ3VhZ2U6J2VuJyxcclxuICBvdGhlckxhbmd1YWdlczogWyd6aEhhbnQnLCAnZnInLCAnZXMnXSxcclxuICBsb2NhbGVTdWJwYXRoczp7XHJcbiAgICB6aEhhbnQ6J2NuJyxcclxuICAgIGZyOiAnZnInLFxyXG4gICAgZXM6ICdlcydcclxuICB9LFxyXG4gIGxvY2FsZVBhdGg6IHBhdGgucmVzb2x2ZSgnLi9wdWJsaWMvc3RhdGljL2xvY2FsZXMnKVxyXG59KVxyXG4vLyBleHBvcnQgY29uc3QgdXNlVHJhbnNsYXRpb24gPSBuZXh0STE4TmV4dC51c2VUcmFuc2xhdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHtIb21lfSBmcm9tICcuLi9jb21wb25lbnQvSG9tZS9Ib21lJ1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICh7IHQgfSkgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxOZXh0U2VvXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIldlaWFuIFdhbmcgfCBGcm9udC1lbmQgZGV2ZWxvcGVyXCJcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSSBhbSBhIGZyb250LWVuZCBkZXZlbG9wZXIsIG9wZW4gdG8gb3Bwb3J0dW5pdGllcy5cIlxyXG4gICAgICAgICAgICAgICAgb3BlbkdyYXBoPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWlhbm9mc3RlZWwuY29tJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1dlaWFuIFdhbmcgfCBGcm9udC1lbmQgZGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0kgYW0gYSBmcm9udC1lbmQgZGV2ZWxvcGVyLCBvcGVuIHRvIG9wcG9ydHVuaXRpZXMuJyxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dlaWFub2ZzdGVlbC9zYWxpZWp1bmcvbWFzdGVyL3B1YmxpYy9vcGVuR3JhcGguanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ1dlaWFuIFdhbmcgfCBGcm9udC1lbmQgZGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpdGVfbmFtZTogJ1dlaWFuIFdhbmcgfCBGcm9udC1lbmQgZGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8SG9tZS8+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5Ib21lUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gICAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2hlYWRlcicsICdiYW5uZXInLCAnZm9vdGVyJywgJ3NraWxsJywgJ2xlYXJuQnlEb2luZycsICdzaGFyaW5nJ10sXHJcbiAgfSlcclxuICBcclxuSG9tZVBhZ2UucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShIb21lUGFnZSkgIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2F2YXJ0YXItMzYzODMyZWMzMDhhODQ1NmEzZjY2OTg5ZDIxZWU5NmQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjEwLWMzZjZlODdiZTVhYzNmNGIyMTBhZTk5NDE4NDY1YmVlLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9naWY0LWVjMjdkMTNlNDUyZjU4Y2VkNjY1NTExZDhiZWM2NTBiLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9naWY1LWE4YWQxOWQ3Njk5ZTVhYjcwOTBkZGE0YThkODI1MmY4LmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9naWY2LWU0OWJhZWU2NzI3YWZmODdhZTgwYTEyZTY4YWYzODQwLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9naWY3LWQ0MWY5NWRiZmJiMDM0MjE5MzBmMGYwNmQ0ZWYxMmNmLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9naWY4LTFhMzhjYjk4N2Y4N2E5ODM4NGRkODM4ZWVlMWExZGNlLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWdBQUFBRXpDQVlBQUFCSGZydGtBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCdC9TVVJCVkhnQjdkMk5kUnRIa2dEZzFyNE53QmtjTmdOZEJBZEhjSFFFQzBjZ09RTEJFVWlPUU5vSTZJdEF2QWprRElpTFFNNmdiNXBvcmlFS21DbjhESDU2dnU4OXJOWmlreFFKRExxbnFybzZKUUFBQUFBQUppVG4vRG9CQU5QUlRmNno3dkZEWWhMK2xnQ1l2RHJ4ejErOWV2Vm5BZ0Ntb1ZzQUxCTUFNQjNkNVArMmhQOFRreUlGQURCaDNjUS9MMzkyb2Y5VkFnRGFWNHYrbGdrQW1JNXU4djhzOUE4QUU5Sk4vTys3eHlJQkFOUFFUZnh2dXNmSEJBQk1RODM3UHdyOUE4QkViRXorOHdRQVRFTTM4WDlSOVE4QUU5Sk4vTy9LM1g4Q0FLYWhWUHZudFZrQ0FOcFg4LzVmaGY0QllDSTJpdjZFL2dGZ0tycUovNzdlL2M4U0FOQytXdlJYdkUwQVFQdTZTZit1VHY2Ni9RSEFGR3ptL1lYK0FXQUN1Z24vaHpyeFp3ZjlBTUJFMUJQK2hQNEJZQ28yaXY2RS9nRmdDcm9KLzNYK3l6d0JBRzNiS1ByTHV2MEJ3RVRVRS82eWJuOEFNQkViUlg4TytnR0FLZWdtL0RjYmsvOHlBUUJ0cTNuL0xQUVBBQlB4b3VqUFFUOEFNQVhkaFA5NTQrN2ZRVDhBMExxTlpqKzYvUUhBRkpUZS9wdDVmNkYvQUdoY3pmdC8zVmdBTEJJQTBLNzg3UWwvUXY4QU1BVmx3bjhSK3Y4aEFRRHRlbEgwVjh3VEFOQ3VNdG0vbVB5WENRQm8xNHRtUDdyOUFjQVV2Smo4c3kxL0FOQzQvTzBKZjBML0FOQzZMVVYvWHhJQTBLNXVzbi85WXZKMzBBOEF0R3hMMFYvaG9COEFhRmtKOWIrWS9IWDdBNENXYmNuN1B3cjlBMEREdW9uK1RmN2VJZ0VBYmNyZm4vQW45QThBTGR0UjlGZisyMEUvQU5DcWJxSy8zeEw2bnljQW9FMWJpdjZLWlFJQTJ0Uk45SGRiSm44SC9RQkFxM1lVL1dWYi9nQ2dVYVc0YjB2Um45QS9BTFNzYk8vYk12azc2QWNBV3JXajZNOUJQd0RRcXJLMUwyL25vQjhBYUZIZTN1eW4wTzBQQUZxMVkvSi9GUG9IZ0VaMWsvejdIYUgvUlFJQTJwTzNuL0FuOUE4QXJhcDUvN3dqOU8rZ0h3Qm9UVS9SWC9FNkFRRHQ2U2I1enpzbS8yVUNBTnFUdHpmN2VRcjlKd0NnUGFXeVArODJTd0JBVy9MdUUvNkUvZ0dnUlFORmY1OFRBTkNlYnBLLzN6SDVPK2dIQUZyVVUvUlhMQklBMEpadWdyL3JtZngxK3dPQTFnemsvUitGL2dHZ01kM2sva1BQNUMvMER3QXR5cnRQK0NzK0pBQ2dMYm0vNk84eE8rZ0hBTnJTVGU2dmN6OEgvUUJBUzNKLzBWK3hUSENqWHVWMTFlb3NPUDdQVjY5ZS9aRzRLZDF6UEU5YzBxcTdibFo5QStwZFpDU01QUGkxT0ozdWVmblMvYkhyRHI4OEYvOFkrUHdmZWo2ZjZ6V0o2K3p2M1dQUlBkNEZ4Ly9admFELzB4dlF6ZEdXOUxKKzdoNmZCc2JNdThmN05PeVA3aHI4c2JzRy8weU1xdVQ5VS8vay9XTWFWajdmOVhkN2Z1MGV5OVM0djZYOWxOV3NSaGR3WXQyRVhxckkveFVZV2lhVTZJS2RBM1dULzEzcW53QitkU1BFcmR0M0FWRE11NHZqYlFKT3JWeFhxOGc0YVozeDFMUm9YelRtb1p2OGx3bHUzQ0VMZ09KZDF2RUtUcXFHOVg4T0RyOTNEWTZtUkRsbk96NjJ6M01FViszUUJZQlVBSXlnV3dROHBIWCtjWWhyY0FRMTd6L3ZHZktMMEQrdE9IUUJVRWdGd0FocWVQa2hNTlExZUVKMUo4YXlaOGluN3JuNWxLQVJ4eXdBQ3FrQUdFY0pNMGNxL2Q5clJITzgrajUyM3pOa2xXS1JHYmdaZjAvSGVRNURScmJEY0wzS1JQTkxZaXdQYVU4bHpOeE5TbVVSY0I4WWZsKzM1OW9hZUxnUytwLzFmUHpRcXYvU042V1Ztb0ZTR05uWHE2S2w5NUZwOUxzcG5henk4WVFocjFqZytYdE1YS1h1dWZtUVl5STlCTmdpOS9mNUx4ejBrNTUrVDQvWiswaGI4bWtXQUYrelZNRFZDangvTHR3cmxZZVBvTjMwejhSZThyclZiKysxa1IzMDh5UmJBRFFuV2dNd0ZGcFVrUXdqcUdIOW40TERTN1JnbGdpcEUvdFFsejVkRjJsV2RBRlE4aUcvRFl4UmtRd2pxT2R2UkhLckZ1TDdLV21UV2MvSGRmdWpiVG1XQXZpY1k2RklxWUFybEljSjNkMkFlaDFHYUJVOG9Qc2R2WEZON0NkTEFUUW52QTB3MktYTUhRaU1KN28xc0N6cTU0bXQ4dm9tWlRrd3pNNG1tcmRYSDREYXBVd3FBQzZnaHFPajlRQWZzK0sxWFVyZXYrOTNJL1RQSkJ6U0NHaVpodmRJdnN0U0FYQnl3VVY0TVV1eDQ0VW5KYSszUzg1Nmhqam9oOG5ZZXdHd1J5b2cwc0FFMk44eXhScVZMRVRqL3RMOUxoWnBmZUxpTHF2a29COG01S0JXd01HcTVOZmRCYmRNd0VsdGJBMk0xQU9JeHFWLzUvMkhpaU9GL3BtVWc4OEM2QzZVMGgzcllXQlllZlBScHh4T3JFNVUwVk1EUmVQV2VmOVp6OGNkOU1Qa0hIc1lVS1FxMmE0QUdFRmRoUDhlR1BvNlQ3aFZjTjBXT2VzWnNrb08rbUdDamxvQUJPOUNwQUpnUEdVUnZncU1lenZGcllIZHozeVhocmY4Q2YwelRUbllDR2pnYTN3T2ZBMnBnQXNKUERjYWVOeXdNckhubU1jOG9hMkJlZDNuLzNIZ2QrS2duNkNzRVZCemprMEJQSk1LZ0F2WmMydmdsT29CeW52T3JPZmpxelFjSFlCbW5XUUJVTU5uUTl0bnBBSmdKTjAxV0xhM1BRU0dUcUpSVjE3bi9lY0R3eHowdzdUbEU2UUFOcjdXZmVCclNRV2NXZUE1RWJwclFGNkh2TDhHbnUrdkxWK0g1V2NML0E2V2liMWtLWURtbkNvRjhDeFNrRlFXQ1ZxVXdvblZTRnowMU1BbXI4TzgzdTgvbE9aWTZmWUhKMTRBQkxzRXp0SndRdzdnQUhVdmU3UWVvTVhyY0dqTFgrR2dIeWh5TEFXd1Z3RmZOLzVENEd2T0UyY1JlQzZFN2hxU1kwZDNQN3RMamVoK2xuZUJuM2VaT0VpV0FtaFBIbWNCRUhrREtoK1hDamlEUE15RjI1Z2N5NE1YcFI1Z2xtNWNYdGMvREFuVk1yRmR0Z0JvenFsckFKNUlCY0JsQmMvcktNb2kvS2EzNk9iMWpjVFE1TDVLRHZxQmI0eXlBQ2lDZTVNbjJaME16aUY0WGtkeDYxc0RoNDc0TFhUN2c1ZnlDQ21BRjEvL3kxRFlLRXNGakdyNDZSVzZhMVdPYncwc2JtNXJZUGR2ZmhQNHVUUWhPNEVzQmRDYzBTSUFHNGE2Qk02U1ZBQ01JdGlrNjlsTmJRM002OXFGNWNDd1ZYTFFEMncxK2dLZzVpS0hMa0NwQUJoSmR3MldFd05iM0JwWTh2NURDeGFoZjlqaEhCR0FhQzd5NHkzZGZjQ05XYWI0cVlIL1RGY3VyNDgzbmcwTSs2MzJSUUMyT01zQ29KSUtnQXVwTzNOK1NzT0hkaFVmOGhWdkRleitiWXZ1ajZHaXhWVnkwQS8wT3RzQ29JYmhwQUxnUW9McHVPSnF0d2JXaFVua1JzRkJQekRnbkJFQXFRQzRzRDIzQnI1UDE2ZjArWjhOakpIM2g0Q3pMZ0FxcVFDNHJKSUtXQVhHWFZWRUxxK1ArQjNhcXVpZ0h3ZzYrd0lndUMxSktnQkdFdXpVK2V3cUluTDEvV0FaR09xZ0h3aTZSQVFndWkxSktnQkdFdXpVV2N6U2hlc0JhdDQvOG04UStvZDk1SkU3QWZaODM4aUJRZGVZZzd3NWVaZ09YaE9WaHp0MVBydFlxK0R1ZTM4Ty9Qc2M5RE95ckJOZ2N5NFNBU2lDWVVpcEFCaFhkR3ZndTN5QnJZRjVuZmVmRHd4YkpRZjl3TjR1dGdBb2dtSElqMWtxQUVZUjNKNWJsR3Z3UHAxUmpyWDZMWVQrNFFBWFhRQlV5OVJma1R4TGRnWEFhT3JXd0g4RmhyN09aMHJMMWNrL0V0Yi9wTnNmSE9iaUN3Q3BBTGdLSmNlL2lvdzcwN1ZZRnYyemdUR3I1S0FmT05nMVJBQ2VVd0ZERjdKVUFJemttcllHZGwvN1RmZkhJakJVNkIrT2NCVUxnS0kyNy9palo4Z3NTUVhBYU9wQy9KZkEwRmthcVI2Z2h2NC9CSVk2NkFlT2REVUxnR3FvSWxrcUFFYTBaNnZnazI0TnJGR0ZTTjUvbFJ6MEEwZTdxZ1ZBc0NKWktnREdOZFN1KzFuWkdqalVtbmNma2J4LzRhQWZPSUZyaXdCRTdrQm0zVU9ESUJoSnNGMTM4YlExOEJRTDhodzc0cmVROTRjVHVib0ZRRFYwQjdMbzNqRHVFakNLWUx2dVlwYU9yTTJwZWYvSW90NUJQM0JDVjdrQWtBcUFxN0JNOGEyQnh5eklTOTQvY2kwNzZBZE82Rm9qQU0rcGdOOTdocFEzaklzZVVnSXRxM24ybjRMRFB4N1NLcmkyK3AwRmhncjl3NGxkN1FLZ0drb0YzRWtGd0hpNlNiZHN6WTFzRGR4N1FWN3ovc3ZBMEFlaGZ6aTlxMTRBQkp1VFNBWEFpTWJZR2xpakJaSGFnVlZ5MEErTTR0b2pBSkZpSktrQUdGOTBhK0Q3NE5iQTBraG9GaGduOUE4anVmb0ZRTFZNL2NWSVVnRXdvam9KUitzQmVyY0cxcngvWkpIZ29COFkwVTBzQUtRQzRQS0N4M2NYczdRanZGODdlUzdUc0ZWeTBBK002bFlpQUpFM243T2ZWdzRUdEV6OVozWThLMXNELzduNUZ6WHZIMDNYQ2YzRHlHNW1BVkF0VTM4cTRPVDl5WUcvYkd3TmpOUURmSGl4TmJBMCs1a0ZQczlCUDNBR043VUFDTzVMZm5mSWZtUWdKdGlvcS9oM2dXN04rMGZxZEZiSlFUOXdGcmNXQVhqZWw5ejM1bU5YQUl3czBLanJXWW5LbGV0eG1XSWM5QU5uY25NTGdLSTJCWG5vR1NJVkFPTXJoYm1yd0xoRmlwSDNoelA2ZTdwZDVjM25TOXJkUTd5a0FuNzNoaEpUcTdNNTNoOVR1WU10UDJmM3Vpblg0ZWQwUEFmOXdKbmQ3QUtnVE96ZG0wOUpCZXc2UmV3NUZlQUFrV0d6ZEpvM2NkYXZ0NGMwRVdWM1RuY2RsdDA1YjlKeFhLZHdaamVaQW5nV2FGRXFGUUFqNjY3RGNvMDlwTVA5SWxJSDUzZlRDNEJxcUVXcFhRRXd2bWlyNEpjZTZrSWVPTFBvQXVELzBwVUtiRW15S3dCR1ZxL0R5S21CbTFiSlFUOXdNUzFFQUNKYmtxUUNZSHpsR3R3bkN2QWc5QStYMDhRQ29CcmFraVFWQU9NcXpYNzJPWTlqOGJKZE1IQSt6U3dBQWdjR1NRWEFTTHFKZk5IOWNVaVU3WU9GT1Z6R0xmY0IrRTVnUzlKVEtrRFIwWGZLNG1uZi9DM2JyZExFMUFuOGZUcU03YnB3S2QzRnU4ekRsdWxHbENPQnU4ZGp6OC95ZFdwM0hNTlBiMzVNY0tDQjZ5M3EwQVVFWnhKNG5yMlAzSmlXYWdDZVNBWEErZVQxSVQremRMeHlmUEE4QVdmVDNBS2dLS21BN28vZmVvYllGUUJINnE2aGNycmZNcDNPeCs1cjdsTkVDQnloeVFWQXRVeDJCY0FvOG41NS8zS0U5eW93YnBaRTUrQnNtbDBBMUZUQVR6MURwQUxnY09YYW1RWEdsUlArU24rQWFNT2ZPOUU1T0krV0l3QmxFZkJINnE5dWx3cUFQZFc4L3p3dzlOOG4vTlcwWEhTblNZbk92VTdBcUpwZUFCU0JBNE9rQWlDb1hpdkx3TkJWZXJHMUwzQXRQaXZSdVh2MUFEQ3U1aGNBVmQ5QkpWSUJFRkFuLytpeDBiL3VhUE1iUFRSb2x0YWRCWUdSVEdJQkVEZ3dTQ29BaGtXMy9QM1dYWE9mdG4yZ1hvdlJlb0MzZGFjQk1JYmNXQ09nUHQzUDhibm5aMnkyUVZEZytkWEFnMTdkYStSTmpubk1nZEI5TitaRDhPdE5ybkhYdGNvYUFUVm5LaW1BWjFJQnNLY2N6L3NYUDlZZE9FT1czZU9Qd0RqWEpZeGtVZ3VBd0pubFVnSHd2WkwzanhUay9SSTkzbmRqbTI1a3NlQzZoQkZNTFFLUWFtN3k5NTRoNzdNdFNQQWtyM3YwendKRFArMTd5RmFnTm1kVHVTN25DVGlaeVMwQXFwSUtXUFY4WE1pUnljdnhJMzVYS1Q2UmY2TXVHbjRQRHYrWWJRMkVrNW5rQWlCd1lORHIzRWpoSXh5aTV2MmoyL0Iram9iK2QzMSswaW9Zem02cUVZRElnVUh2cEFLWXNQc1ViL1g3a0k0UVdKQnYwaW9ZVG1TeUM0QnFtYVFDNEJ0NTNlbzNzdmo5NDduVjc3RUNDL0pONzJ3TmhPTk5lZ0VnRlFEZnFvVjJ5OERRVmVvL2JHdHYzZlZZN3V3ZkFrTzFDb1lUbUhvRVFDb0FxbnBYSFkxNi9YcGszbitYYUt2Z2NrMXFGUXhIbVB3Q29LaDNIbjFOU2FRQ21JS2pXLzBlNjRCV3dmTUVITVFDNEM5OWR4NnY2MzVvYUZMTit5OENRMWQxd1R5YTd1dVhiWUhSZW9CNzlRQndHQXVBcW52VEtSR0F2cjNNN2pabzByNnRmdE41TEZOc2E2Qld3WEFnQzRBTmdmUEtOU0toS2ZYMUhEM2k5NWVSOHY3ZjBTb1l4bWNCOEwyK1ZNQXNLVHlpTGRHOC85NnRmbzhWaU1wdDBpb1k5bVFCOEVLZ1A3bFVBRTA0UjZ2Zll3V2ljcHRFNkdBUEZnQmJTQVhRdXByM2p4YTIvblN1MFArdTc1L2lyWUlWNjBLUUJjQnVVZ0cwTEhyRTc2ODFGSDh4ZTdZS1hxZ0hnQmdMZ0IwQys1R2xBcmhKZGN2ZkxERDBaSzErajZWVk1KeWVCVUNQd0g1a3FRQnVTdmQ2dlVzWGF2VjdyRUREcm1kUHJZSVRYSm15TUMwM2ppOGVzN1NuTXUrVVNGZjNLSDB3SHJ2SDEveVg4dCtmUysrYXdadlUwdXMrRDF1bWlhcS82TWVlMzgzVjV4eUhuOTc4bUdoZWZmTjV6REdMZElYcXovQTErRE9vQnppaHdHdkgrOGlBdkgyK1hlengrZVgxL3pudjV6R3ZGLzdmRVFFWUVNZy9TZ1Z3SzByRG5GbGczR2l0Zm85VlUzTy9CSWU3Tm1sRzkxcCswLzFSRmxuenRKOVpXbmZNL0s1dXpRSWdJSkIvL0ppbEFyaGk5ZUtmQjRhTzN1cjNXSFZ4RXEwSEtOZm1MTUVOcTlmdnNYMDRTdlRobTY2WkZnQnh5N1I3SzlJczJSWEFsY3J4VnI4bDJuV3VWci9IV3FiNDFrQ3RncmxaQTlmdlExcEh4RXE5em8vMVVmNzc5eDNqdjkwbGs5VUFoT1Yxd1VhZmVicENnZWRYN3E1UmViKzgvMDF0bit2K3ZhOXpuSzJCUjhwcUFJNldENmdCeU50ei9vOTVZTDdKNjJ2L3k1YlBMVFUwVHhGckVZQTlTQVZ3ZzY2MjFlK3hhbitDYUQxQXFZaCtuZUNHNVBYZC8vekZYejlGNnVwOHRGT3BsK2tlLzVtKzN6bFQ1cWluQmJFRndKNEd0aUxOa2xRQVZ5S3ZpNFlXZ2FHcmRLRld2OGZhczFYd3ZRVTZOMmErNWU5KzM3TXo1N1pGOG4rVi80a3VBQ0luY2sxSjN5bGxLbys1dUx6ZkViK1hidlY3ckxKTFp4VVlOMHNXNk55VzJaYS8rOSswaHhvcEtJL1Z4dU9KQmNBQkFnY0dTUVZ3YVRmVDZ2ZFlnYTZkbThvQy9aOEpKcVM3UmtySzRCOGJqNmRpWHltQUF3MkVIbWZKblFZWGt0Y05jR2FCb1EvWDB1cjNXSHUyQ3Y2UWJRM2tObXk3K1Q3WkF0WUM0RGg5QndaSkJYQjJlYjhqZnFOM3pUZEJxMkFhdE8zMVhIYWp2VDlGbE5rQzRBaFNBVnlUZWxjYmpUejlldU41LzEzNjZuTTJ2YzVhQlhQbGFtUnIyK3U1TEhiTEZyOTN4MFN6TEFDT0pCWEFGU2wzdGJQQXVLdHQ5WHVzd0tKOGt5Z2R0MkRYNjNtVzFvVytqN1V2UUxuaFhPeTEzVFhIR2dFdEVqdmw5WUZCZlFlVXpOTUZCWjVmRFR4dVhMMFRpSmpFYzkzOW5KK2l2NDhzU2hlU05RSTZXajd3TUtBOVhzK2JyK3VQZWIwZzJQbjZGZ0U0Z2NDQlFSK3pOeGxHa3RjTHpHVmc2QzIxK2oxV0NaR3VBdU5tU1QwQVY2NmJZeFpwdjE0ZHM3VHVBVkxhWUQ4dkJtWXZCMWtBbkVqM0JQMmVkbGNoejVKVUFDT29GM1cwMTMycmVmL3ZCQmJsbTBwUmxWYkJYTFc2WStjZjNlTmZhVC9sNW5PUjFndUJiK1loQzREVFdxYmRkeDN5all3aHV1WHY1bHI5SHFzV1VFVmJCYi9MV2dWejVXcDczMFZhTHdUS0FyZmNlSzdpWCtIcFJNQy9GZ0ZaRGNCSjVmNERneDR2a1FvSVBMOXlkemNvNzVIM3p4UGU5NTYzSDZaeU5kZm5yY2hxQUk2V0Q2d0JDSHpkc3F1bDVQdnZjK3p3cjd2eWVTSUFKemJRa0dTV0hFM0tDZVQ5V3YzK09KWFEvdzU5L1RvMnpaSlVIVGVvZFBNc08zdTZSMm5yWGFJRDVSQ2d2bFJCT1NmRUFtQWt5N1E3TEhQM3ZQcUNROVM3MU0vQjRaUEorKzlTZi82ZmdzUGZ1ajY1ZFhWQnNFanJWTUZxeTVBU3FmNFBDNEFSMUFLa3ZqZWNqMEtOSEdGeXJYNlB0V2VyNEk5WnEyQWFVQmUvSlJxd0xRTDJvd1hBU09vQks3dTJiWlRKWHlxQXZkVjg0U0l3ZEpVYWEvVjdBc3NVYnhYcytxUUo5WVowYXpyZzc0blJsTHV2N2czN3Y3di91NjI2K0NrVlVMY1B3cUI2VnhwdFh6djUwUDlMNVkydyt4Mld5TnlYTkh4UzRsTy85ZTV6b3JzSW1KQ2FKdnJtTlhSRWQ4M1ZqdTh4VDk4Zi9QTS9CODRaMjJ0Z3NsMEFveXB2Mm5sM2w4Q3Y1MGdGQko1ZjFiczNJTWVxZTR0bFlxZnU5L00yeDgwVFQ3SmRBUCtXdDNmbSs0L0E1OTFIWDJONVhkbi9VclQyNStYWCtyanQrMG9Cakd5Z043bFFJeUY1dlhkM0ZoaTZrdmZ2Vi9zaFJPK2l5aHVuZXAySnlIOXRwNXNQRE4xMlIvM3p3TmVlZFg5c0t6RGRsWlphYmZrKzg3em5vclIrMzBYYTluMnpDTUJaNVA2OXlLTldIUWVlWHhHQUsxWmVIem1tUkpSbWlVRjVmWDdIWS9EM3FsVndhajhDa0wvdnExRk8yL3RoeDlqNWp1dnZkYy9YMzNiMzMzdEgzMzM4dzQ3dnMwaXhuMm0yNDNuNytEekFBdUFNOG5BcVlKWkdFbmgrTFFDdVZNOEZ2STEydG52SS9VMjcvRzVmeUEwdkFIcGVDOHVlejNuYzhUa2Y2OWViMVVkSk9YM1pNWFl4OE8vcW16Yys1eDJIL2RUdi83N25jMmZQQXkwQXppVDM1eDRQeXUwRXYrOFFDNEFybGVOZDdLU1NEcEJqNzMvRjVLTXJ1ZTBGd0s3WHdlZWV6NGxHNW83NmZlVll6VXA1ZlQ3bTJNM0NNdktEYjFva1RpSnZEd005RytVdUkvRDhXZ0Jjb2J4ZnExOTU2Z05scllKRGN0c0xnRjJUN0ZDSVBycUEzUFphbXFXZ0k3N1BTOHREdnZBaWNSSjVuWHM4YXlvZzhQeGFBRnladkwwQ2VKZFo0bUM1UDh6NlVuUWJabk55Mnd1QVhlL0xpOERuN2pzNVArWURydG04WHpwdzIvZWNIL3FQWHlST0p2Zm5IaytlQ2dnOHZ4WUFWeVR2ZDZFdkUwZkwrNFZ6SjlrcU9EZThBQ2p5ZXRIOW5Lc3ZpNEZ3UkxaZXM1OXkvMEx5YzE3UHQwZEZrZXByOVQ0UEwxcS8xdTk1MS9mRkxBQXVJRyt2N254MjBsUkE0UG0xQUxnaWVmdWUzVzFHcXh1Wm9vRnJjdE1rNndHeVBnQWhlYjJRS0pQMG9qN3V4bnE5MU84MTMvaGUrMzIvYkFGd0VibC9HOUpKMzJBQ3o2OEw5MHAwejhXYkhQT1loZjVQS3UrM05YQnlpNjlzQWRBY3JZQXZwTFlsTFkwanRyMlJQRGNJK2pHZHh3OVRmRU03czkrR1dualdDZjFEaXZsRnE5L1QybWdWWEs2RlNLdmd0N1dwRU55bUxBSndVZmtNcVlETU5WZ0VucWZINE5kYUprYVR0UXJlS29zQU5FY3I0TXRicGgySFFYVGVaV0hlU2NqcjZ2SlpZS2hXdnlQVEtwaXBzQUM0c0hwVTQwODdQdXlzZ0FtbzBZRkl0S2U4VnM2VkZwcTZrcDViQmNiTmttdVVHMlVCY0FXNlJVQTVER0xYc2FOUHVjWkVrMnFFNTExd3VDTit6NlF1ekg4T0RyOXpqWEtMTEFDdVJBMDdQdXo0c0ZSQXU4cEJNN1BBdUU4S3pzNnIrMzAvZEgvOEZoenVHdVhtV0FCY2wzTEhzZTJZU2FtQUJ1WDFFYit2QTBOWGFYZUVpQkYxaTRCeVovOFFHRnF1MFh2MUFOeVNzZzJ3VERpcmdYRi9Ka1pYd3J2ZEc4aXYzZi9kMW03MG1HMUhxOFNsZlhNTjVmV3hvWXNVZTI1K3JDRnBMcU1zekV1a1ptaHlMeDlmcFBoV3psdXpPdkxqd0pDOCs4QWc1NzBEUUt0eWYwY3lEWHNBb0ZXNS96UTRGY2NBMEtxOHV5T1pWQUFBdEt5bkhrQXFBQUJhTlZBUElCVUFBSzJxOVFCZnBRSUFZR0o2NmdHa0FnQ2daZDFrLzBrcUFBQW1wcWNlUUNvQUFGcldVdzhnRlFBQUxldXBCMWdtQUtCZFBmVUFrZFBsQUlCYjFGTVA4Q1VCQU8zcXFRZFlKZ0NnWFQzMUFGSUJBTkN5YnJML0lCVUFBQlBUVXcrd1RBQkF1N3JKZnJhakhrQXFBQUJhdHFNZTRFdUpFQ1FBb0YwNzZnSGVKd0NnWFQzMUFQTUVBTFJyUnozQW8xUUFBRFJ1UnoyQVZBQUF0RzVIUGNBOEFRRHRxdlVBWDZRQ0FHQmlkdFFEU0FVQVFPdTZDWDhoRlFBQUU3U2xIdUJSS2dBQUdyZWpIa0FxQUFCYXQ2TWVZSjRBZ0xadHFRZDRsQW9BZ0FuWVVnOGdGUUFBcmR0UkR6QlBBRURidHRRRFNBVUF3QlIwRS82ZFZBQUFUTkNXZW9CNUFnRGE5NkllUUNvQUFLWmdTejJBVkFBQVRNR1dlb0I1QWdEYTk2SWVRQ29BQUtiaVJUMkFWQUFBVE1HV2VvQjVBZ0RhOTZJZVFDb0FBS2JpUlQyQVZBQUFURVUzOFgvZVdBVGNKUUNnZlMvcUFiNUtCUURBUkpRaXdJMG93SDBDQUtiaFJUMkFWQUFBVE1WR1BZQlVBQUJNeFl0NkFLa0FBSmlLRi9VQVVnRUFNQlViOVFCU0FRQXdKUnYxQUZJQkFEQVZ0Ujdnc1M0QzNpWUFZQm8yNmdGS0ttQ1dBSUJwNkNiK1pWMEVmRTRBd0hSczFBTklCUURBVkd6VUEwZ0ZBTUNVYk5RRFNBVUF3SlJzMUFOSUJRREFsTlI2QUtrQUFKaVNqWG9BcVFBQW1KS05lZ0NwQUFDWWtqTDVTd1VBd0FUVmVnQ3BBQUNZa25KU1lLMEhrQW9BZ0NtcDlRQlNBUUF3TmJVZVFDb0FBS2FtMWdOSUJRREFsTlI2Z0M5U0FRQXdNYlVlUUNvQUFLYW0xZ05JQlFEQTFIUUxnSTlTQVFBd01iVWU0R01DQUthbFd3QzhsZ29BdUt5L0pUaXpWNjllL2RIOThhZFVBQUJNa0NnQUFFeFFyUWU0U3dEQXRKUTBnRlFBQUV4UWFSS1VBSURwS1RzREVnQXdMYlVlNEljRXdGbjhQeGVlZEQ4VTl5emVBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ1dVbEVRVlJvZ2UyWXZXN1VRQlNGdnd0cFVDQ1FJQ0ZxNkdnb0tHa29LS0RLQ3dTS0NMb2dYZ1lwcndCMWhBQXBVaWpnRFJBVVNMUkFmb3NrUk5sZGNTZ3lFY1phajYvdDJjMHVtaythWWpYWGQ4N3huYjgxWkRLWnpEUmhkUUdTRG9EWk1XaUpjV0JtbDJJQjV4eEpmaVlTMDRWYURSNGptd21FZEtWV1E2N0ltTWtWS1pJcmtwQmFEVE9PSkxHMzhjWE1idm4xVkNOcEY1aHZvUUhvWHBHcmp1ZHJrV1RBWEVzTlFQYzFzaEJFZEdVT09OOVNBK0F6c2d2MEsvcG1nTXVPSEhWY2lmVDFnYjI2QkxWR3pFekFWaVJrVDgzNTJzREladERRelVnZzljNjFVL29kTStJYTIyc2s5Vm5TeElocjdQK21JcDV6QkpwVjVKbVp2V2dRRHhOYWtlZ2ZvQXBpTzkrWnJaSFVScWFxSWhPNWE2MDR6cEdsMGpNVHVVWThsRS9xc2E2UjN4VjluNndBY051UnIyeWtxaUlDdGowQ1hVYk1iREJrOEZQS3Q5WmZqcFJlSXp0bVZuWFArd2R2UmFCNnJwYU5iQUd2Z2Q2UTJGN28rMTZUbzVnckxaSTJLaGJ1WU5oVlh0SzhwR1ZKNzBKYmxqVDBqNU9rWGtYdWpWRVllUlhaaFM1MnlEc2J5ZnZTbTZmSjFJcnRIa3VTWWx2b1VNSXpqeUloN20wL3hSb0JXQVcySlgyUTlGelN0YXJBTU9VZVMxcmo1T1dzUnZLbS8vQWg2V2xrQ3BRWkZFeGRsN1J3S2w3U2NZTThUMFpoWkxHQmdDTDkwTnF3Nk5YbnZjWkQrekkzR2FQTUQyOWdxalV5S2theTJNL2lpNlBiaUx2c1puWW82U1p3UDdRSHRMdXl4emdDUGdMcndKcVpIYnIxdFIxUjBnWGdMbitOM1dtWjZoc253dGVCdDJhMjN5WkppcStFQUVpNmdhOWE1YmYrT2NYNHlZd1VDZFc2Qnp3TURlQk5hTy9ON0dnVTQyWXltY3owOEFmeStXZXR1K3RBK1FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDTlVsRVFWUm9nZTJZdlVvY1VSVEhmeHRzWk9OWGhHQW5hR2VUVjBpUlFpdXJkQ2FGUkN0RFNndDlBRi9CTnpCcFF3aVNnQmJhcFF5a0NLbWpiaFpCMUpCMWNTeG14UFV5OTl3ek0yZVdsZHdmM0dMM3pqM24vT2ZjajNNSElwRkk1Q0hSVUR4ekRqVHJEa1FSdzRqMHdDT0ZrV09iV0NvUmpFRWo1TVFna0tvRVk0Z1o2VE14STczRWpCaFNlMFora0o1RkZ1MjBaQXhBOVl4TUtzWnJhQUNqSldOUU13a2tubmFGcmpvSU1TYjRTSUFuQmo1b0FCM0J5YmlCajJuQmZnZkZ5OUpNclFSb0NmMm5RaEMrOXRPeEliMk1rMnlNaUVZSTJPOWNiZWUzSkVUbFd5dkUraXdwSWtUbE8yWkU0QzNoTStPMU0yWWdNeUplZ0R5TVZmVmRSMGFzaFR5b2pBemtHbGtqZkk0c09XTUdjbzFvY0F2RXZxNlJhMC9mZCs3dlNNOFU5bHdodm93a3dCOU5nRm9oM1J6bnQ3aFY2NlhDbmxaSW03UXdEYUlWQXY2NTZncHBBWjlJaXoyWFR0YjNPMkNqMTVZNWUrUXYzQzc1MWVrRXNBenNabTA1K3k4UFgzVzlaeGYrSGU4OXpoTGdjUVc3VGNIdWp0WklrYWtsN1I1TGxMdVhqQU92aFA1YVBueHNJcDhOWGVBQWVBYzhGZXhNa05aYUg0Ri9BWnNiTmVoZ0plRFVKMnFLOUtxcURiNjN2YWxEeUdLQkFOeDcvVlhKc1l2YTRJWUtDQ2w3dWhmeDRYS2tmZERpSEtrVHRVK3JYYXN1MUVLS3BQMENtQVZlWkcyZWNpVzd4Ri9nRVBoS3VqRmNHTnZQWlpoVTBCYndqWEtMT1FGK0FkdkFTK3hmVENsbWdGWGdBM0NHUC9CTDRBdXdEc3haT2JmNDNKbkhNUEFjV01nYXdPZXM3Wk5Pb1Vna0V2bVB1UUZTQkFmVkVqaDhad0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUVGa2xFUVZSb2dlMlpUWWhXVlJqSGY4ZVpHaXV6QmttMHRCSUdvNXdXdVFndDZJTUtRM0FXSWRtaW9pS3BoUkFrRkVHTEZrRVVsRUZHa0VSRVJEV1EwRUtJQ3FZUG0wWW9STnRZYnZ3WWE4S1FVa25IeWZtMXVPOHc1NzFPTStlOGMrOG80VzkxNXN4NVB2NzN2dmZjNXp3WC9pZUVLcHlveTRCbHdFSmdkcWI1SDhDdlFIOEk0YThxOHNsQ2JWZlhxM3V0aG1IMUUvV0dtUlF4VCsyclNFQ1pFZlhaM0p5eWYxcnFaVUEvRUYrNVVXQVhjQkFZem5UWkNYUURDMHJ6RzBNSXIrWG1sNHo2Y2VrS3ZxY3VtcWJQV2VvYWRWL2s5eC8xbHFyeUxnZGNvWTVHd1Y2bzJQOThtNSs1NzZyMEh3ZDZPd3F5WGExazF5dkZXRm02V05kWEhZUFNyVjlYZVlEeE9EdWlPRStsMk16S2NONEd4TS9DanR3RU14aUl4dGVrR0NRTEFkcEw2M04zcHh4T1J1T2tGMnl5a0JEQ01IQTRtcm91MWJZRjR1ZmlVSXBCemgyQjVsditVS1p0RXVwQzRPNW9xcitPSUErVTl2azdLL1lmMUsxUmpFTnFlNVV4eGdLMXFUdWpRRWZWdFJYNTdsUS9zcG4xcWZhdGxDakxnYStBUzZQcEg0QnRGRlZzTGgzQWpjQmFpbkpsakUrQiswSUlveTM0VEVOOXpIclpwczZwVFVCRHhPUHEzelVKT0tJK2JmSE95aUxycDZWdUFONG9UUjhEOWdBVEhZcVdBbGMzeGdlQVgwci9udzljQ2Z3TWJBRzJoaENPNWVTVWpYcXp4Vmxoak4vVUI5VUxKN0haRkszZkZNMnZVZ2RzcnFtT3ErK29WOVV0NU5zbzZINTFjWUxOR1VMVTUwc0N5Z3lwTjlVbG9yc1U3UFpFdXlZaDZycEpCTVFjVkMvUHlUSDF6WDVYTlA0eGhQQjFUcEFHYmNBcmlXc1hBUnR6bktjSzZZckdyUjUyVmpMKzRLZHdmNDd6VkNIeHVoTTVBU0p5aTh3dTlZTFV4YWxDRHNRQjh2S1pHVktGN0lyR3E5UjVMY1RhazdsK2J3aGhKSFZ4cXBBdkdEOFh6QUZhYWRNTUFQc3oxdmZtT0U4U0VrSTRUZk9PODdENmxucHhScXpUd0RPSmF3ZUJWek44azFQcmJ3WjZHTitLbndSNjFBK0FuMmcrbm82eE5QNGpoTkNyZGdFdjh0L2wwUkN3cHRZK3NEcFgvVEx4cFZZbUxsSHVVYi8zekJKbGk4VUpzWDdVbnVrS2lYeGRZZEgwNjFaenUvaE5aQjBqTFhwWjc1ZW1SNEI5d05FSlRCWlRWTGdURWtJNFRITkRvMzdVTHZWWWRJV1BxQnZVdVpQWVRGajkxa0hPSFhtZFl1c0YrQjI0TFlSUVBsK2NOWksyWDR1Uy9kNW82cEZ6U1FTa3Z4QlhVMVN2QUx0RENKL1ZsRS9McEFxNU5ocC9VMGNpMHlWVlNOeW1PWjdodnlNYW44cXd5eVpWeUZBMFhwTGhQNjZVVytsNVZZdkZaN0V4L3B4c3k0MXNGcWduSTd0Ylp5TFhxWks2cUNGZ2pEY1RiRDZNMWcrcXVRM3plbENmSzVVY0x6bkJDVTZkYlZFWnh6eFJkMzdKRGJwR0xkUUhySWltOXdMdlVsUy9BVmdPUEVyelY2YlBnZFdObzhDNVFlTjN2OU4wdHF1ZFUzcytDNmlYcUp2VlU1TUlPS0crckhaTTdiRWFXdjY4ckM2aGFObmNRZEdIa3VJbzJ3ZjBoaEFHSzhud1BPYzV1L3dMdWV4OWxuVit0S0VBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUR2VWxFUVZSb2dlMlpXNGhPVVJTQXZ6R0R3YmhNTWcxbVhHb2FZVHp3SUpkeVNSb0pENUx4SUVuRWcxSVVLY1dERXVWU1NKazhTTUlVTlE5VFJMbmZpalM4dUx4Z0JpTVNRKzYzaC9VZi85cG41aDk3bmYrY01XbSsyclhQbWIzM1dtdlAzdXVzdFg3NFQ4aUphWjNScVRZUXlEZk9mUTA4QjY0QjcyTFN4MFFlc0FKNEJQeUtvWDBCVGdLajJ0T0kvc0Q1bUF3SXQyL0FCcXRDVVk1V1grUVk2SjM3Q2RRRERjak9XaWdFS29EaTBQdDF3SzRJK25sekFuY0hEd01sV2E3WkJaZ0xQRmJyZmdjbVpibHVSaVlndXg4STJ4THora1c0ZCs1cXpPdi80YUFTY29YNHZKNW1JdTVtalV4QWh2T3ZyMHBDUUlxYlNzNGFud2xkREl2bjR0NkZtNGE1Vm02by9sQ2ZDUlpEOGtManJkN0p3bWZWOS9yQVdnejVBcnhTenlNTWM2M29lL0VzQ1FHMXBNL3VvU1FFSUdIT1J5Vm5laEpDRnVINitiaUY1QUNubEl4bnlKR09uVnpnamhMVURDeUlhZTFDNERqdXgzYUY3K1FvMzRGeHdBV2d0M3AzQzZoRG9sZ3IzWUV4eUlZVXF2ZTF3SHprbTVJWXkwZ21ZQXhhSFZDUXBBRUF5M0V2WTV6dERiQVdPY0ltckVkck5iQTM5TzQ5Y0ovV2s2SnlZRWlxL3hSNEdQcDdFVEFJZUFCVUl4Zjl2VkVuTStPUlhDSFl2UmZBWXFCYkczTjJxL0c3MWZ0SzVPdXRZNm9QaUVzZkhMZmlZUzRyb1UrQVVvODVyUm15Q2RlQWNHc0N4c2FwdUtZaUpHeXE1N3l3SVZYNDNaVUdvSjlGUWQ4UVpZYnEzd1l1V29Ta3lBVjJlSTR0UVRKRWIzd05LVlA5cU1uT1JOSVgzNGVGbHNWOURkSGpQbGtFS0t4QlpoblExWGV3cnlGUFF3STZITDZHMUt0K0pWSU9zbkxmT1A0UjR1Njk4RFhrTE9tOG9JQm9aWm9iaU52MnBjYXl1SzhoUDNBOXpoTGdBTkRUSU9zSHNONXpiQ093MDdDMktkYmZCOHdqN1lwWHBaNlBBdmR3MDlPQTh0QnpEWExIdHBJNVBHcENhbHlKMW9IN0FPZUlGaERxRUdVbWNKMldJVW8xa2lHMkMvTThGVy9Ma0lBQlNOR3ZBbnNWMzhHYVJsWUJSMEx2dmlIMXJ1Wld4cGNpRVc0bVh1RVdOTnFGTWlURTFybkRhdVM0WlNKVDlCczdsdi9JSHRKWjIwdGdDaTN6aTMrR3Ivc3RCV2FwNTZWMElDUEEzNURacE5QUHU4RHBaTlNKanE4aHcxVC9VaEtLWkl1dklicE04OEd3Zm5mVi8ycVlaOGJYa0NiVkgyNVlYMGZLVVdwZXNUT1h0QnQ5UzlzdU42QVlDVnVDZVpNVDA4NUFEOFNBUUtuOUhuT09xZkdOMkNyL2liSVJOK1RZUnVzWlhENFNHZXV4Szl0SlJ5L3lrVUJQSy9nUU1YQU9jdncyNC80ODl3czRRNFRLWWRJVTQxYmovOWF1NEhxOERrVXZKRGY1U21ZRFBnSGJjZDF2b21UejgvSndwR1F6RGFsREJSWEk4MGdDMVppMWRwMTA4dS81RFVleWJXYVlWbWtBQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNiRWxFUVZSb2dlMmEwV29VTVJTR1Q3eTFXdHE2cTMwRDdWWjhnV0pSWDhDTHVyUlVmUkt2OVhGRUw3elUxN0JTUVJRS0xZSTQyMTUvWGt4aW81dk5KRE9aU2F6OVlXQ1liUDdrNCtUTVNZWVZ1ZFIvSW1BQ3ZBVm1RQVc4QVRaeXp5dEt3TFlHK0ZzellEdjMvSUlFYkMyQU1Eb0RIdWFlcDFjQkVPWERBUGVCMHdBSW85T1V5K3hLS2lNUk9SR1JLdUwzVjBYa1hUR1IwWkhZMVBlYndIRkVWSkpIcGkyRXlZa1Q0SzUrZGhzNGlvVEpselBNSi9hL0IwTmRKMXlKZmN6NU1wc0ErOEFOWUFSTWdTOE5NTU10TXcvRUhJeWo3Mm9STUFFUVJzODhIcnNCL2Z1RGlZQUFHSGw4eG9FZTZXRWlJUURXUEY2M0luelN3YlNBQUpoNi9KNUhlbldIYVFrQmRVS3ZMdkFjdG1oMmdERDZET3hhZm52QVpGQVl3bmV4amJJOFljaWltUkxDQVFKRHdOQjlPYzNKQVFKOTdnQzBZYkpJR0MwQUFmOE9ZQVU0YUxDZVlYMERzTThqcjBSa3lSdXl0QnFMeUQxWGcxTHFoNGk4YU9pL0pDSXZmL2N4TjhCTWVnQlJTaW50ajZONXBKVDY3dW9Ickl2SVVZTjlwWlJhRnZreklxNkIrbGF5TVcyUUQ2bE1JL1RJMDdZVjBQLzkzQk5nZzJHVEhlcTMwNHBqTGlISlhnRjNuSGdNOS9xMWRRRHNBT3Y2ZWdKOGFyQnRydkxVQmJGS0FRRkJJTEU2QXg0RUxMdTBNSWxCd2lFU0xyTkRZTi95ZTBxOWtXeXJMRHZnUTJEczhMdXAyNGFENkFqak8xaUZuTm5UUWxpRHgrWk1pak03dE1tSkFKaVl5Rnp6K0N3SGVoVHhKZVd4eDJPYUZTSVM1aVB1aXIwR2ZNc09FUW56bGJwS1g5Zlh0Q2dJQ3licERvQStFanNEVEQ2SWhERDVJWXc2d0pRRFlkUUNwandJb3dpWWNpR01BbURLaHpEaUl2eUZ3NGo2RzhCckhaMmYrdDU5eHI3VUJkUXZXSHpGMmJkMm5DY0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ0xFbEVRVlJvZ2UyYVcwN2NNQlNHUC9GT0VaY1cyQUhNd0E1R29NSUdlS0Nqb3RKdUVjb0NZQnRRVVFsUkNRbmVZT0RaZlhDT21FYUpmWnh4SElmeVMwZUtrdkVmZnpvKzhVVUQ3L3AvTkFUT2dBbndCUHdFQnAzMnFJRjJzUUNtRkpQaVdTODBvaHBDNGdYWTY2eDNTdmtnZWdHekF6empoNUI0SnROaHRnSGNvUWZKTGpNN3dGWnh2UVhjRXdhVFJXYWtKaDZBN2VKZTd6SlRMdXhld3V4U1hkajN2QTZ6SWZBTldBRStBbVBncHFKTlo4T3NEcUlLcHF3bE1vSHhRVWg4ZDNoOFZiUnZGVVlMWWJCRHFVNmZsQjZ0d0lSQUdHRFo0YlVXNEJNVkpoVENZQXU3VGo4Q3ZhTEFOSUV3MklKZXF2Rk1QbWsyaFpENGpTMXMwUkgyazV3VVJydUsxWVRJa0hqU2pBbFJCa2tHTSt0dzBvQVlXbDRCREltYkNSZElHYWFzUmVESzR6dWg1Z3pnckFVSUY0akJacUpPWHhUZXAxVU4yOGlHRDJURkFiS3U4SDZVSDgrVlhwUmEwZDQ1RFhJUnl6UkErNDVuSTBYNzg2cWJBOUlXdThGK25SWXIrcUlwOWlkZ3M0NHcxZWQzT3E2QVEyeE5yR09ML0pmSFV6WExqd3JhVkNDaDhRSjg5a0cwQVJNVEpBaENOT3N3dStiZmVlSVl1NUJzNnRmSkN2Z2F1eE1zYTdWNGxoUmlGaGpYeGtxelo0OE9JUXF0bVJoNzlzWTE0Vk5JWnVZZFBndEtqeXhPVWc0Y0htTkYrMnpPdGk2cG5yR1hnVCtldGxtZE5ocmdGanRMZnloaW5CdUVLUFlLb0pYQzFpb1dUS2NRb2xsaHNvQVFOWVhKQ2tJVUNwTWxoRWdMa3pXRXlBZlRDd2pSbS9nTGgyZ0FuR0N6ODFoYzErNngzL1hXOUJmMVZxZjdpWWtGdWdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDMEVsRVFWUm9nZTJhdldzVVFSaUhuemZxV2ZpUklubzJpcEIweGtLd1Z6RWFERVFMcmEwdExkT0puZitGLzRCWUtXaE1GRUphQ1ZhQ0dKc1VpU2JnQnlUQ2tjalBZamZobUp1WjdHNTJMM3U1UERBY096Y3o5LzdtZmVmekZnNnBPWkllU0dxcHZyUWszWGZ0SHZCb0dRVWExWGRaWVJyQVpUZlRKK1JIOWJic21lOXVScThLV1hVemZFSTZDdFdRanM3dVZZLzBrUkF6V3djMnVtSk9NVGJNck1NK24wZWczdVBFR3pFaElZWEN5eHgyK3o0R2NHcmZoSlJNTTVEdmpaWTZoMVpJeUlIeGlOZTJvM2tLbDQwa0ZhaldjeDRKY1dDRTVCcnNkUmFTeXlOMW1MVkM1Qkx5RzJoVlowdGhXc0FmM3hkZUlXWW1ZSzFLaXdxeW10cldRV2o2aGNTRjU2dXhaNGVmd0dKYitwcCtmZ09XUGZZRlEzNDNJWlZpWmtPK2ZFbG44TnZXY2NUZEpqUkdZSDlucmx6N0xPZzlJVUdiWWtLNk5nVkx1dWhrblEwVXJjY1lrZFFrdVpOcVQ2TWtIZHArL3NqdGtXNFA5bENiUzg1enFhRVZxalFDUEFKZUVGaWNDdkRMZWM0dEpJaWtwdS9pMVNuVGtIUkQwak5KQzU0MnNyQWs2WWxUNzJXZ2JFaGdWTWlBcE0yWWtBeHQrUGdyYVViU2xLU3JranJPOXBMbVBmVzJKTVVpS0dySVNzbEN4aVFkejFEdmk2ZHVjREdFK0JnQlQwejZlakFyWnZiZXpMSnNSbjBoRkIwZnNWa0wvUFAyaXFSM3dEUXdZMmFsckRlU2hvQXhZQndZOUJUWmt4QmY1WFBBd3pRaDZUUHdDcGdGNWpQMk9KS09BRmVBVzJtNkRoekxhY3NPUllTNFhFclRGTEF1NlFPSnQ2YmRncEpHU0hwOEhMZ0puTTdRL2paUno1Y2hwSjJUd0wwMCtWak0yVjQ3NVE3MmZTUnFTOThJcWRNbFJOU1d2dkhJR3ZYNDAyZURYUzVEb2tMTWJCT1lBSjZUWEFaMG0rWDB0eWRTVzRMazJtNUlHZ2J1QXBQQU5jcC9zZUFmOEFsNFRiTElMb1N1ZjF3Szc1c2tuU0JaMUNaSnZIYWhZRk9yd0J5cDhXYm1uazI2aTZSaFNZL1RMWHJzWFpZdFNSOGxQUTF0NDR0UVNpTXVrZ2FCMjhDZE5BRzhBZDRDczJaVzFzbnlrTnJ5SDUzd2kyNWtZU1lQQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNua2xFUVZSb2dlMmF2MDhVUVJUSFAveklHWU5JREhBMEppYlFDWjMvZ0ZGREp3VmEyMUpTbWVzTUhmNExSanM2RFg4QW10allHcU9GaFJGRFFnZ0lKQklTRG5KS1BJcTVDNXU1OTJaMmx0MWo3bzV2TXJuczdMeTMzKys4TjdQdjVnNnVFRCtlQURXZ0htbXJBZk0yNlg1QnlEUlF5andOeGFNRXpOaWRrcERkNHJsY0dML3RqazRWc21kM1NFSmFCa1dJbHNudTFJajBscEFqb0ZvOGw4eW9JdkNUaEVEYzYwVE1HRTFJMXZUcXM1cnZ2cXNOaDNETFcwaWVLQ3Y5WXJiRW5GcWFrSzZKaU1odE1HUndBYWhuc09tNGlHam9HaUZCaXoxbUlVRVJpV0hYMGlBS2tWNWF6ZjRUNEZyZ1EyeC85bUwyM2ZlaEJseVg3TFNJMUlIOXdJZTBBM3NvNHJYdEYwd0lieGRDNXh4L2dQVkUrOW40L0FWc0MvelVsUGNKS1JxalN2OFlNcmVXcjdoTmFLa0ZsN3R6QmRWWjBIbENWRTR1SWUzY2d1OVkxK1BLdUdqV1NCbHpKcFZzMDVnSkhiYkdCWEZxdHhETjU2WjFuV3RxYVVaVHdBTHdEamgwMklmZ3dMb09GdUpDR2Zuc05Za1NjQjlZQnI0SVB0S2M1VzRDTHl5N1ZXV3NKdENKZnVDZlI0Z1BFcGxqNEFOUUFlNGhsMG1mQkx0VDNCbmt4STdnTUFTMjdVUFMxVzgvQkZ2MVpaZ0dYd1dIV3FFcEllc2tIQWkyMzF3R3JsMEw1SDE3QjNnUHJHRlNKSy8zelNnbVlyUEFpSEQvUXJ2b0N2N0YraDE0Q1R5aU5XMWNFUm5BckpFS1prTCtlcDZ6NGlMcWkwaWFXYmpiYUJYTWNldEhUTFRXaExGVG1CbWZCUjRBTjFQNGI4SVorVHlFSkhFRG1HczBDZXVCL3BKd0xuYmZkaGJUZDNjbmw1NFJFdE1oaEpOTHowUmtuemgrOUtuaU9Rd1o4RGo0ejNuZE00SCttMFZSMk1aVTJjK0JqVHdkVHdLTG1CZFlFZitPT0FVK0Ewdm9CV1h1R0FJZUE2OHdwWGhXOHJ2QVcrQVpjS3NkeEgxSUc2MUxtZldzR0FHZUFtK0FyVVo3amZuRGpsUVFYcUhyY0FhNEt5ZSsxeDV6T3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9qZXN0LW5pZ2h0LTllYTc0MDJhM2Y0NjJlYmI2YWRjNjEyY2VmMmY4NWNmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9qZXN0LTU0NmZkYjIyMjhiNGMwYWFkODRlN2MwNDg2Y2YwYWViLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFFdzBsRVFWUm9nZTJaVzZoVlJSakhmNThkRlRTMVVzdElMS1NMUXBHbVptVlpsb2toYUVFRWFWQlpHaWdLMVVQUVN4SWtpWGpwb1lzV2tiZWdGKzJDUkNxWmxXV3AzY2dzRFFUREY3UEF2T1Q5MThPYW5jdnQyWHNmenpuN2FMUitjRmd6YS83enpUZHJ6WHp6N1hXZ29LQ2dvS0Nnb09EL2l0cFhuYUQycjRmOWR2VXcya0xlQnE0RzNsZmZWYTg0Mnc3VkZmVlR0YXZhb0Q2aDdsSTNxY3ZVQjlTR3MrMWpxNktPVWhlVjNldWxqbFpYcE1rUE9GdisxUVYxdmpvdWxidXFJM0p0dzlYdDZ0U3o1MkVybzNaVzErZnFyNWExWDZDdVZ1ZTN2WGQxUW4xVHZUV1ZUd3V1YWtkMXBUcWo3YjJyQTJvLzllMGFtaTdxbHRMeS84K2pMbEdIMXRCY2x5SjV6N2J5cTI2azZMeStDYnE1NnF5MjhLbXVwQ1c3c2dtNnk5VGQ2dm0xdE9kaXBwVm5DUEJSTFZGRTdBSldBNVBxN2xFOVVhZXJJNXVvdlY3OVRlMVFUWGV1ditIMndIRUFkWlo2VVNWaFJId1AvQWc4M0VhK3RUNHBkNTZvZGxlUHFjL1cwQTlUZDZvOTJzckhWa1c5VkgwbjVkSHIxTFZxMXhwOW5sSjNwTWpkcTYxOGJUWFVsOVExNmp4MXBEcXpDWDBhMUxHcDM1aTI4TFBWVU51cjQwdkxWSDFNSGRqRXZoM1U1OVVYMVBQcTYya2RVUWVxM1dwb09xb2oxTW5xcWxKaUVxbnhRcUEzOEV0RUhLbGhxQWR3TWJBOUlvNDIwK0VBTGdlNlY1QnNqWWlEU1hzNTBGZ1FDdUM3aURoV3Bqc1lFVnZWbjRFOXdCSmdLL0JOUk93di9Tb3BzVVB0WGNYUmllcVJwTjJyM3RXTXlUNmovbTUxQnFrOTFmVTFkSCtxNDVQZEJlbmVwbFFmYVhZdWp5bDM0RmdTSGszWEJSVWM3YWIrVlRiZ3kyYzQyZUc1dm8rWXZlbEsydWVTN3FCNmMxbGJGM1Y1YWo5azlwSGdsQWtuM1dEMVcvVjFVMExTRGlodDVoWHArcENOSC9DVGdDN0FibUJMdW5lbTM1ZXV5WlVYUjRSVnRIM1M5Y2VJK0RMZkVCSDdnRG1wMnBGc2U1eEdSR3dDYmdBK0JHYW83ZktaMWhxeVRLVVQ4SGkrbzltSHMybXArakp3S05mV0p6M2RCV29meXNpMTNRYWN5RFZWUFU5ekhLOXcvMWl1WEhHbFJJUVJzUnlZQlZ4Yi9vYm1BMjhBVTlRNUVWRWE3SDZ5Si80MzhBb3dOdGVuSnpBNWxSY0NPOHRzbHRvMkEydUJBMEJuWUtHNkpxYzdEUHdFYkk2SUU5U20ydW80allqWUMveFFQdUZsd0V5eUpUSU9XSjd1UDVtdWl5SmlqNTdSV1BsQnQ2dERnQ2xrUzYzME1CcUFmbVRMOHd2MWppYVlhNVlUcC94NGlJaER3R3VwT2gyeS9CUzRrV3c1em12T0lHVmpiSTJJYVJFeExDSUdwNzhCd0lOSmNndlo1R3ZSOGdrblNudjBkdlY2NE9sMC83MkkyTmFjUVpwSWZpdFUvWW5YRWs2YmNFVHNCdDVKMWRtYzNLOXpLOWc0bkN0M2JvRXZsK1RLKzREOXFkeFg3UXlnM3FOdVZEY0NFM0w2UThEZVZPNXBsVFN5MHJFeU94bThPOVhYUmNUbkZiUS9BUjhEZHdKdnFXczVOWUwrUzRyVUR6WFMxQjRZbmNwTEkyS2J1aGg0bEN5ciswTDlpbXdaOXdDdUFBWW4vUWJnVjdML1NVMGxDNjVmcTkvU1NJUnZJSXVza0tWZkFFVEVGck12RGZjQmYzQnlYNWRZUVJaMVA0dUlFK3FvNVBCUVRuMVQrUlZVYmM4ZEFSWUFheUppZmZKaHM5b1BlQUM0TWowVWdGWEo3bml5SS9TREZOVy9VNjhDN2dYNlUyRmJWRHkvbW9yYUtRM1FtTzI3Z0JkVGZVUkVmTkxTOFhMajNrUjJqRFlBOHlOaWFXdlpyalh3b0VxSnJucEEzYUJPcUcycG9LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tCNS9BT3pZNU9lK091dVJ3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRVdVbEVRVlJvZ2UzWlc2aVZSUlRBOFo5MlZOQzBtNVpScUVoWEtpcTFySTVhNW9VdTBBVkNTSVBLYnBBbFJBOUJMMFZRSkpMYWc1VVdrcmVnRisxQ0JIWG9ydDIwdEV3cmd5RHB4VW93ODM3TUh0WnM5dWQyZjN1ZjR6bjdlSkx2RHgvZnpEZHJadGJNbnJWbXpXd0tDZ29LQ2dvS0NycUk0NDYyQWxVWWpodlFpajg3dS9HZW5kMWdKL0FhenNGYmVBUERqcTQ2amVjVERFQVRIc0R2V0lQbG1KSytIMU5NeHVLS2I0TnhIVmFLd1YvUzFVbzFtbm00T2FVSFlIeW1iQncyWTBaWEs5VkkrbUZWSnY5aVJmbUplRjlNekRIRElveEo2V3JPdFEvZXdaTmRwbEdET1U5NDdGcjB4dy9LeS85L3oxS01yaU56a2ZEa2d4cXZUdU1aN0ZCYnptTU9aalZZbHk2aHY3RFRlcHlCclRpK25tQjNEQzJ6ak1FT2ZGbEhib2ZZbTAvSEY0MVdxcEhNeE1RMnlsNk1MZWhkUzZnN3h0SlpldUZBU3MvQ3lUVmsxMk1EN215MFVvMWtDcWJqRkhGNmVyeU9mRE4rdzhBOGdlNXV3OXZ3a0hCSVE4WFJjU1gyNXNodlFRKzhrdVRYNDUvR3E5bTVQSThXekJYMi9Fd2I2alRocGxUdnhzYXAxaGg2WWFyeU1yMEhsN2F4Ym04OGhhZWwxZHpkbHpUOGkrK3hLK1cvRmR2UGJ2bExtNGkxbThXRVRjSUZhT21SQ2svQ21mZ0orK29vTUJDbmlpUGEvdmJyajdDem9jSVpWV09UOGdDSHF1NkVlbUNkY0daWnVWMnAvby9paW1ocHluOGoyZk1pSEV6UHIyTGdlVXdYRTNJUTJ6R2gzc2lxOEJqK3lQUlo3UmtwWXVOVmRlUzJpZVVPQzlLM05Tay9VVGl4dzJ5NE5RbnVUKzhGT1lxZWdMOHJPcHpmenNHT3k5UzlTL3hLZVR5UjVIYmh5b3F5L2xpUnl2ZUlTNExLQWNNb1lRSXZTd0ZKVDJVN1hwbmVkNmkrd2QrWE90b3FqbVMwLzM3cDNFeDZTVkl3anlIcHZRR2ZWNVR0d0hNcDNVY3M1MnFzd1FpOEs4N05QYk9SVmt0cXZDL3VyYWpZaElkVGVyNlkxYXhpQzlJenhPR1V5c1lLQjFSaVFJNlNsUnpJK2Q2YVNkZGFLUWZGYXBpRkN5dC9vWGxpMDM1UXpHQ3BzOXZFWUhiakJiSEhsUmlFKzFONm9ZaDBzcFRLMXVKRDdCUlhPQXZGSkpmWWk0MUpManN4dFFiU0hyYmp1OG9CTHhjYisxQnhpN0FpZlg4a3ZSZnIyT1g0Wmx3bUpuU0U4bVEwaVJ1T1BsaU5hOXJRVm5zSGpNTVBEM3Z3VWtyUFRPOW1YQzVtZmU2UmRGTEJKbUVlemNLcGpCSkh1OXRUK1ZWaThQWG9sQUZUdHRHcnhaSHIwZlQ5VGZ4OEpKMjBrYXdwMUR6aWRZUnFBOTZLMTFONnRySzl6c2xwSXh2dDlPdUFMcWRsMGp1VWcvN2htWGF2eDlmcG1aYVIzeU5zbFBBcHVSRmszcll5T3pVNEtlVS94bWM1c2h2eEFhN0ZxOEl4dGViSWpoWGJYaVc5eEQ4THNFeXNwQ1c0VzBSMXE4V3R4MEVSVFEwVHBrRGNjUHdpYmpobkNPZjZsZGgvRC9Qd1RjSmJFclpWNGdjUnFkeUt2NVR0dXNSSzRVMC9GYlk5T1NrODJxRy9WSFlGMWJLNWZXTHJhbEcrdEZzcmJIa0t6aEtUQXUrbGRxZUtMZlR0cE1NNm5JMWJjTDRjczZpMWY3V1Z2cW1EYW0xUHdMTXBQeDRmZFVKL0phNFEyMmhUZWkvcnhMWnJNbEorckx0VExMbHB1YlVMQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDanJJZno1aDkwOGkyZGE0QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL25leHQtYTcyNWY1Y2I1MTk5OGMzMGMwM2E1NWE5OGFhMDAzZGYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUJiRWxFUVZSNG5PM1lNVW9EVVJBRzRQOXBVSlFJVVF5bTBFdkVKcFVld0Y2eDhRNDVRSTZncFkyVnJaVVdIc0JPTElTMHR1SU43SCtiSU9PUVhUZVBUYVo0L3dlQkRHL3p6MlBnSmRrRlJFUkVSRVJFUkVSRXBDU0pKS00zRVdrdGVnUFJpaDlBeDlYdkFGNHljZ1lBTGszOURPQWpJMmNJNE5UVWR3QytNM0xxbkFBNC9xMzQxMDFPSXNtUnl6blB6Qm03bktPY25IOTZYTnNHeFI4QkRhRHBoU1RQU0g2YTF6Q25JY21KemNuSm1PVThtcHdudDNacjF0N3FjdnlYWUoxdEFJZW0zbHpnczlhdXk4bDFZSEsrM05xK1dVdDFJVG9DMFJ1SXBnRkVieUNhQmhDOWdXaUwvQXkyNVI3QWEwRGZ1VlkrZ0pUU0ZNQjAxWDJyNkFpNHVrdXk2bC9hbnF2NzV0cCswNFlrZXdCMktwWjdyaDdVUExIYXNPL2R2cmZNKzNXMzFyVWh5M29rZHBGU2VwaTNNTHZsSGkraFo1YmlqMER4QStpa2xHcnZscHB5UittSzVLamlVdnZJQzIzMXo5VmE4OXp2a3VnQkZIOEVpaCtBaUlpSWlJaUlpSWlVNWdjVzc3c2tIc3RHeWdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFCVUVsRVFWUjRuTzNZTVVwRFFSREc4UzhhbEVnRUZVTlM2Q1ZpWTJVT1lDL1llQWNQNEJGTWFXUGxEYlR3QUhaaUlkamFpamV3ZnhaYURFT3k4b1lYUnRqL0R4YmVacE52bG9GTjhwNEVBQUFBQUFBQW9DWTlTVTMySmpLdFpXOGdXL1VONkx2NXE2U25RTTVFMHJtWlAwcDZEK1JNSmMzTS9GYlNWeUNuNUVUU2tYMmhNV01lREQxMk9XZkJuRXVYY3hqTUtibTJOYW8vQWpTZ3hYdFBKWDJZTVEzV3ZISTVVZmNtNDhHdDNaaTFsMUtJL3hJczJaSjBZT2FiTFQ1cjdicWNxTEhKK1hScisyYXRWd3JoQ0dSdklCc055TjVBTmhxUXZZRnNiWDRHdTNJbjZUbWg3a0laRFhqN0hmOENSOEROaDFyK0wyM1B6VWZtdmFNV05YY2tiUmZXckltV1A3SGFjTmQyM3dOenZlN1doajZvV2NFbzNRN1BWMVF6TktvL0F0VTNvSzgvN3BaYXNHZjFRajlQaVJhWnVYbFg5VU82TEI1OXZKN2FnT3FQUVBVTkFBQUFBQUFBUUcyK0FhWGJaRTc5L2ExckFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFFc1VsRVFWUm9nZTJaUzJ3VlZSakhmeDhCRkJFaDFGcWdQQXhkYUt5MWFDMmFJSWtHSlRFaVJsMmdtR3JpeWxjMEVPTWp1dEJFVjRwMVlXSTBhb0lyU1VRaG9pNFUwcml4S0JRaFlJbWlNUkZLSzYxV1c5QmVIMzhYWjI1N09uZnU3ZHpldWFrbTU1ZmMzUFA4SG1kbXp2ZWRHUWdFQW9GQUlCQUlCQUtCUUNGV0xjR1Nhb0Rsd0dLZ0RxZ0ZaZ05uQWVkRXc4NEFJOEF3MEEvMEFjZUI3OHpzNTJyWWxZbkRraFlBMXdHdHdCVkFNekN2UXJHL0FBZUJBOEFYUUllWjlWWW9jM0lPU3pLY2M3Y0Q2NEJMS2pVa0pVZUFYY0M3WnJhdjZ0b2sxVXA2VE5LM21ucStrZlNvcFBPcjRlaENTZTJTemt5cGk4bWNsdlNTM0dOVnNhTXpKVDBoYVRnRHd3WWx0WGkvd1F4aytnekozWDB6Sit2c3haSU9aR2pRSjU3c3BSbktqWE5ZMHFYRi9KcFd4TmxiZ0gzQWlrbXRWakpmZXVVck01UWJweEg0WE5LNnBNNENoeVcxQWR0eE1UTkxmSWRiTTVZZDUxemdmVWtiUzQ2U2RJT2tYSlZ1dGNXZW50MVYwaEVuSjJsTk1XZHJKZldsRkZSZll0SHFKRzJROUxVM3ZxZkUrTm1TR2lTdGw5VHB6VmxmWXM1Y3VZdnphUXBiZStXeXZnSWhiNlIwOWxReFEyTHk1a2c2Rk0zWlVjYWNVOUdjWlNuR1Q1TzBMWVhOcitYbldEU3hIdmdlU0xPbDd6YXo2Nk41dGNCelVYc09PQWE4YVdiRFVmK3R3SHZBMDJiMmZOUjJEZEFXemZrRDJHTm1PejBuZGdHcmdQbG1wcWl0SFpkLy80UEx0YmVhMmZHb2J5bndBNld6eGhGZ3VabjE1SlU4bVBMcVN0SVd6N2diRS9xM2V2MUxvcmExWHR2THNmRy8rWmJKUGQ4ZFhyMDJRY2VSMkp6ZUZIYmZEMk83OU9vU3F4UG5vRmRPQ2xzTHZmTFpnSEFoTHMvSzJQaUJXTDJwVEIxNVBST3hHc1ljamdzb3hVVEdmT2FWVndMSDhrYzlTVE1TNW95R0swa051R05rYWgyU0xnTG1wckM3SG1CNmlvRStPYUM3aURGL0F4OEI3VjdiM1l5UHYwM0FySmpNVHE5OFZmUi95R3U3UERaK1A3RFpxOTlUMnVSUkJHTU9GdzBiTWJyTkxPZlY3OERkSlNOQWozOW9sM1Fic0JiWTVJMlAzODRBZTczeTFjQmZ3R0d2N1ZsZ0MyNUIrOHpzcEtlakVYZzRwZTBuUmt1U0hrangwSS9ia0lvaGQrQjRTTkx2MFp4Vlh0OWJNWGs1U2JPOC9yM3hEYW1JRHBPTDJ5ZFQyaTFKOThIWUZkNkJ1eFVuQ2t1ano1YWtac1p1d1pyb3R3eTRGdkRQcUszUmxRRDNWc1JuQUdpVGxLK3Z3S1cxZVIyTGNDOFlBTTZMNUM3Q2JVQVhUbUNyendpd2MxeUxwTmRUck5JYWIvd3JaYXh1T1R6dTZiZzNJNW12NW1YNmg0Y25jUy9SU3VIdm5wZVZzY0xsOEpWWGJzcEFYaS93Vkw0eTZyQ1pEUUIzNFhiaUpFNllXYjlYTDNybXJCQi9oNjVVUnc3WTZHK21CZW1ZcER1QnR5a01XYWVCbzFGNUdvWGhJZ3NFZEhuMVJ0SWxGVW44Q2JTWjJUYS9NVEgvbEhRVDhBN3VYUGwvWkFqWVlHWWZ4enNTMzNpWTJZZTRaN1F6cWY4L3puNmdKY25aQ1pFMFhkSWprbjdOYUxlc0pzT1NudEZrWCtMRkhGOGc2VVZsOC9ZeWE0WWt2U0Nwcm1KSEV4eXZrYlJaMHRFcGRkSFJMV21UcFBubCtERHBiMHVTV25DZldtN0c3YVpWK3pDWFY0bkxzVDhBdHB0WjF3VGpFOG5xWTFvZExxVnN4WVdyWmx5cVdRa0R1RVNuQzNmaTZqQ3pueXFVV2RYUHBmT0FCbUFKN294N0FUQUhtTUZZdUJ2R3hjc2hYSmJYRC95SSsxdzZXQzNiQW9GQUlCQUlCQUtCUUNBUTUxL3lCamxWR2VuclpnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRUgwbEVRVlJvZ2UzWlc0aFZWUmpBOForaFZ0cEZtaWJ2V1VrWXBLaVo5bUJDWVJlaUtPb2xDaXJvcVJ0MElhcUhIbnJJTG5ReElvaWlBaDhpZWlnTW9oY3p4SmVzSmt2VGpHNEVTVnBlTXAwdU01WFR3N2ZQekpvOVo4N1paODdaNXNQK3cyS3Z2ZmRhMy9xK3ZkYjYxcmZXcHFLaW9xS2lvcUtpb3FLaW9tSWs0MHFVM1lXek1BdFQwWTNKT0JhVHNqSi9vQSs5Mkl1ZnNSUGZZWDhaU25YSzRHbTRHRXR4SGhaaVNwc3lmOFVXZklhUHNRRzcyNVE1WnNaaEdaN0VkZ3djb2JRTlQrRDg4azBNdXZFQXZpbkpvRmJTMTdnZnA1Wmg2SFNzRm5QdS96WTBuMzdIczJKYXRjMUVQQ1NjU3J1S0hjQ1NKQjNvc09HSHhPaWJPRlpqenhFT28xTUtyVXRrbjk1aFk5TzBEZk5iTmZZYW5lblZORDJXeUwrdVJJTnJ2WDFWVVdOdndqOGxLSEZ0MHNiakpSczhnTDl4WXpOakwwVi9TUXJNU3RwWmZ3UU1Ic2hzV1RtYXNkMGkwaWtpYUdhRGp6WVYxK1BMcFB4UERjcFB4bHhjalUxSm5hc2IxRGxaZE03N0JYVGRMYUsrRWJ4UzBOZzlEUlJKT1JGYnN6cHJXNml6SjZzenAwRDVZL0JtQVoxZnFsV29oWll6OGIxaUxuMDlMc255M1hnMHkvZmpXN3dxSEI0eGI5L0d3MWlWUGJ0UStBbjRDeC9nblVUK3UxaU9VekpsaVJoZ0VnNkxXSHROZGlVOC9nOGFoOGw5SXE0ZkhHbDNLajR2bmtrRVhWSG4vWnJrL2V6czJXWEpzK2R5NVEvbWxGc3Y0dVlhM1hYYTJKNnJzN3VBM3JjVFF3Slc1RDlKQTdZaytVVjEzazlQOHNkbGpmVWt6NWJseXUvTDNTOW9zWTFhTzgxWXdaREJlUUdOYUtiTXhpUy9UQXp6MmxadlFwMDZueVQ1dWFKSFcybGpubkJpelpnSjR3c1VUT25IamxHVStSZnZpZmxXNDJiRERWcUE0M015TnlYNUM3THIxdVRaNGx6NVQzRmZjbjlMWTVVSEdVaHYzbEJzL242ZUU3Sll4TVh6aFpOSnFVVlQ5eVRQYnFzamMzbnkvbmtSTUtSRGRGN1d4aUlqUitLNWlrZUVyNmNWN3loWUtYVklvekVSZCtIUE9nYTlscFBYYjNpUGYyU2tRNnJIT0xGTzd5cW85NEQ0MklORGVxMFlpczJXcFhSdUxUUTBCTHV5TkFjWEdiNUhYU3A2Z2pnVlNkbG5hSWtpZXZHdDVINkdvWmo0cEV6dURPR0F6bWlpYTBxZjRVc2ZlRm56cjVTR2FTOFVLRCtXOUdEU3hxMGRrdmxpdmEvUXBmbDZsdmJjeHBJTXZqeHBZM1VINU8weTByOE1zbEowZjcyS08zTmw5NWRrY09xWTFyVXBxOC9JYVRTQ0c0U256RmZ1RlFGRUR6YVhaT3pocEkwZVE0NXZMS2xmYkdJS2NhWFlSSmRoMUpGSUIwWFkyeEpuNHNPalFQbFdVdy9PYnRYWUd1TnhOMzQ3Q2d4cGxucnhpRFlPOFZLbTRXbWRQK2ZxUkRxRXA4VEJROGZwRW5Ic1YwZUJvVHR3cndaTFRxZFpJazRpdnhEZXRXd0RENHROeFNyeC8ycE1kT3BuMmxRUlVpNFZHNHFGUmpsSGFvRjlJcFRkTEhaY0cvQkxtekpML1YwNlJleHZaNHM5N21uaXpHb0NUc2pLOUlvMS81QTRRTnlMSDhYdjBnTWw2bFpSVVZGUlVWRlJVVkZSVVZFeGpQOEE1WXJjVTJwc1lOWUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRjFVbEVRVlJvZ2UyYTI0OFVSUlRHdndiWlJSRGxJdDRDeUVWRDFDaXJpQkpYUlJBVEVRMm9pZkhKSjNnUVhoUnZEMkxrRnY4QWpROUdYeVJlc2h0Z3dTdkd6WXJKR2k2QkdLTUxpMkxDZ2dFUnhJWEZoUlYyZmo1MHRhbXBxZTZaNlpsaGZPZ3ZxYVNtNnp1bnp1bXFxVDUxcXFRTUdUSmt5SkFoUTcwUVZFc1JNRkxTazVKdWtUUmEwbEZKM1pLMkJrSFFXNktPMFpJV1NKb3U2VnBKdlpLNkpHME1ndUR2YXRsYUVZQUFXQTZjd284QllBdHdkNEtPMmNBbmh1dERMN0RzWXZvVkMrQ05HQ045K0JTWVlzbE9CVDRyUTM1dFBYMFY4SkRIcUg3Z01IQSt4dWcrd2hteDNOUjlPRzkwOUh2YTV0WFQ0VDJXSVRuZ1JhRFJ0QTBISGdVMm03Wml5QUZ0d0VKTFJ5UHdzaU8vcTE3T3puQU1maitCMndSOGwrQnNKekFqUVg2OXc3K3RObDRsd0l5bWpWaUREZjlHL0ZPNEQ3aWhpR3lUSTdPaXV0NlVBT0JqeTREalJiaFRnSjZFRWU0QkpoZlJjY0xpZjVqVzdpRnBCU1ZOc3VvL3hwR0FxeVMxTy95ZkplMTNkTFVENHhQNnMvdVlGTXNxZ2tvY0htUFZUL29Jd0hCSmJaS21Xby8zU1hyQWxMM1c4Mm1TMmpBTGxnZDJINlBMdHRiZ2tyU0Nrb1phOVZ4VUFSb1VSbHUzU25wYTBqMk8zRFJKUjB6OUg2ZXRXZEltb0VYaGlIWUZRUkJ4Qm1QNkxndVZPTnh2MVNjQXIwdWFKMm0ycElZRXVZYVllb1JIVEpHa0FXQ25wQTVKRXl6TzJmTE5yUkJBZThJaVZHdDhuZGJ1c2pjUHdCMlNWa3BhcE5MWGdGMlNqa2s2YlJWSkdtV1Y2eVRkVmFLK25LVE5rdFlGUWZCOWlUTGxBUmdIdkFjTUpyejVYeWo4L0hRQVJWOE1NQVQ0eHBFOUNCeEk2RzhRZUJjWVYyMW43d2QrS3pMTmxnRFhreDljOUFJVHkraG5rcEdKMEdkMExpM1M5MkhnM21vNSt3Und6dFBKbDhBRjYvZWJRS3ZEZVRaRmY4c2RIYTFHZDRRTGhLR29pM1BBNGtxZHZZL0NQZXArWUlGcDMyNDlQMDUra0wrVEVxYXlwODhoUmpaQ3p1aU9zTVB3bnFMdzd6TUFOS2QxZGlUaFZMR3hCYmpNNHF6MnZPa0lCZHM0WUNLd0FUaHRTaHN3M2NPYmw2QjN0Y1ViUjdoRzJEZ0VqRWpqOEF1T29vM0FVSWN6TThhb2JUSE8vdW5obnNUelB3ZTJ4ZWllNmZDR0FWc2R6dk5wSExhbjFSRmdUQXh2bjhlb09SN2VoaGdIQUZvOS9Ea2UzcjRZRzhZRGYxaTg3V2tjdG5OVWJ5WHdYbldNNm9qaG5VNXcrRlNNakR0ZFZ5Ylk4WFl4ZlZMcGdVTlNnRktOekNkVjBGR1pQdktuOURGaXRtNUF0MmZFZkZPNkxXR0VXeng4MzVUdWpyRmhMUEM3eFVzMXBWYzRuVzBGaGptY1dURU8rQmF0NllRTGxJc1R3QVFQUDI3UnV0UGhEYVh3WlQ2WHh1RVJoRXU4alE2c01BNVlFMk1Vd0Z5UHpvbUVnY1FwVTFwaW5KMmJvTmYrTEkyaU1NM2JBMXhhdHNOR1lUT0ZnVWNQNFVjL0FIWll6OTNBWXdmcEF3OWJiNDc4OUU0VWVDd2tqTjF0REFEdS9ydHNBeGJqRHkwN0tRd3RXeHhPbXRCeW1hUERGMXE2MzEyQXM4Q2lpcHkxakdpbWNIcTdXRXJ0Tmc5TGl2VGRRNlVqNnpGbUxQQU95ZHZEQTRSYk9odVZiQTk3S0p5Mk5nYU5UZDZneUljMENZQVprbDZUOUxqS1N3QWNrZFJuRlVtNjNDcFhxN3dFUUp1a3RVRVEvRkNpVEdXZ3ZpbWU5clIyVjVLbXRiTU0yeVd0a3ZTdHBJRUtkTG9ZTURwWG1UNGlqSzFpSDZXQmNGOGNvZFY2M2tCNE5QSU04TGxuZEFaaTZoRytNTEpOaENuZlNLK2RYUEJ1SW1ydDhGN0xnQTB4bkVZS3N4TmR3RFdtZERsdG5jUWs0Z20zcHhGK3FxMTNmZ1BzMDBEdkRzbnd4Z08vT281MVV4aURIeURocUlYOEZieXpObDRsZ1BJTzB5WlQzY08wajlMYVhjbWl0ZHVxWDBuQ2NXa1FCQWNselpkMHh0TjhSdEtEaHVNRmNMdnlGOGs5WmRwYU9TZzhFRitmd0MzbFFMd3BRZjREaDMveEQ4U05JYnN0STNMQVMrUmZlWGlNTVBGWDZwV0h6WVRYSklZYkhZM0FLdzV2WjEyY05RYk45eGplVHhoM1gvQzBRUmdmTDZQNHBaWkQrQysxRkd3N0w3YlQ2eEpHemNVV3JNV0o4R2JBcDJYSXI2bW5yLy9CakZadmpKSG5DRE1Tc3hMa1p4bU9ieHNLWWJLZ0toZlRhbkgxOEdhRnR3T09LanpoL3lvSWd0Z3NvcVBqQ2trUFM3cEo0ZFhEdnhSZVBkejB2N2w2bUNGRGhnd1pNbVJJalg4QkZNb28wczkrQnJnQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFGZ1VsRVFWUm9nZTJhMzI4VlJSVEhQeTNhVmhDdEpmVlhxRkRRRURWS0ZhdkVxZ2pSUkVVRGFtSjg4Z2tlYkY4VVVCL0VDRWo4QXpRK0dIMlIrQ01sTGFYK3hFZ1FZMDBwMFJpanBXM0V4SUlwSW9ndHhOcEtlNjhQTTZ0bloyZjI3cTlMZmRodk1zbmUzZTg1Yzg3ZDJabHp6Z3preUpFalI0NGNPV1lLRlJucW1nTThDbHdQMUFMSGdFRmdEekFhVVVjdGNEK3dCTGhDeS9VRG5jQ2ZHZHFhQ2hWQUd6QUdGQzF0RXVnR2JndlJzUng0WDNOdE9rYUIxdktZSHg4dll6ZlMxajRBR29Yc0l1RERHUEl2bGQyYkVyaVhvRkhqd0ZIZ3JPVlpFVGlER2hGdCt0ckdPYXQxakZ1ZXJUb25uam53alRDa0FHd0Nxdld6R3VCQllMZCtWdXJ0RllBdVlMWFFVUTA4YThnZkxMTlBUaXpGYi9CYklkd200Q3ZjenZab2ZTN3NNUGczcHJROUVUWVpSb1FaREhBTjlpRjhCcmk2aEd5VEliTWhzZFVwOEo0dzRFUUpiaU13alBzTkR3TUxTK2c0S2ZqdkpMWTZCZVFRM1JmQ3V4VDRDYitEUTZnMVd0NDdETlNINlBsY2NMOU1hblJsVWtIZ0VuRjl5c0dwUVUxRWk4UzlBZUJ1M1E2Sis0czF0eG83WkIrMXNTd1ZPQytwSURCTFhCZkVkUlVxMnJvQmVCeTQzWkJiREl6bzY3K05aeTNBTHFBZCtCNFZaWG1jYVVmZnNaREc0WEZ4UFI5NEViVkdMa2M1N1VLVjQ5ckRBN3FCaXJ6NlVKL01mTUg1SzY2eFdXQXYwU09rck50blNZMU9ranpjREd3RzFoQjlEamdJSEFkT2l3WXdWN1FyZ1ZzajZpdWdBcHJ0d0xjUlpXSmpIdkFtNmx0eS9mTS9FbHgrOWhIdGo2bkVQeE1YZ1o5UnM3ZXJ2Mm5nRFcxYnByZ0wrQ1drNHlLd0RsaUFQN2dZQlJwaTlIT1ZscEZCeVFKZ2ZZbStqd0ozcFBEUGgwZUFDVXNubndCVDR2Y3J3RTZEODJTQy90b01IVHUxYnUvM0ZDb1VOZTJaQU5ZbTZNK0hPd25tcUVPb0pCMmdWOXcvZ1QvSTd5UFpPbCtwWlQwOUJhM2IrMzFBOHg0aitQbE1vcGEyUkppREdpcFNZVGR3b2VCc0pmaFBlODJXeGpVQUhmdzNjWFdocWhzbVZvWG8zU3A0ODFCemhIeCtCSmdkMDFjQU5ocUtPZ2t1K01zY1J1MjM2R3NBZnJkd1QySC96dmM3ZEM4emVPZWp5a2lTODNSa0x3WGtzQnJCSDBwS0RGaU1XbUhoZFRnYzhMNVRFeXNzdkFHSERmWEFiNExYRytxWkE3Skc5V29JNzNuREtGY2ljUnEzdzJNT0dYTzRiZzZ4NDdVSStpSlBLbUVCU2hhVnoySUdPbExyazBQNk9PN1V6VXp6WEVPNnk4THpXcnVGYnh2U2d3NGI2b0JmQlMvUmtONWdkTFlITlVGSU5Ec2NzRTFhUzFBVGxNazlpVDh4OE9DYXRHNHhlTE1JL3BsUFJmWlNZRFpxaWplL1R4bkdiWE1ZVlFSV1duUTJvQ2FvTWQzYXNUdTdNa1N2WEpibUVpenpEZ01YeFBUMVg3UVFERHlHVVl0K0JTb0k4TzZiZ2NjQmtnY2VVbThCZjNuSEN6eFdvMkozYWRza3dmdzdOdFppRHkxN0NJYVc3UVluU1dqWmF1aXdoWmJtdWx0RTVjaHJFdlJuUlF2QjRXMjI5WlF2ZVZoWG91OWhNbml6SnVxQTF3bFBEdytqVWpyenUwK2FIZzRUSExheVRXdWJYRUZSQUVuVzBLWEFDOEREeENzQWpLRGVtTmNBTGhMdE11SVZBTHBRZTAzZlJaUkpqWmtzOGV4TmFuU2FNcTFjbm5xQkxjQVhxSmt5SzB4cW5WdndCeE4xR2ZZUkdVUDRaMUlQVmFpdGtTZUFqd2krblVuSHRkYysxckpOK0t1YXNyamdTaUxLaWtQQ2dBNEhwNXBnZGFJZnVGeTNmdU5aRCs1Q2ZLZmcvWkNKQnpFUmRhdWxudUJXeXlEcHRscDZVdHFlQ0hFMjB4YVM3V2JhdTRtdFRnR3pJbExPN2RLYkRKbU5pYTFPQVhORGZFY0lOOHFHZUZPSS9Oc0dmMFkyeEFHK0ZrWVVnR2Z3SDNsNENGWDRpM3JrWVRmcW1FU04xbEVOUEdmdytzcnNVeWp1SVdqNE9DcnVuckk4ODRad0s2VVB0UnpCZnFqRmxuYWVVMnduZW9UVWpYOXlha1FkWllvcXY2M3Mza1JFRy80c1I3WUpWTnpiSENMZnJEbTJOTFNJS2haa2NqQ3RIRWNQcjBObEw4ZFF3Y21uaEZRUkRWd00zQWRjaXpwNitBY3FPTm5GLytqb1lZNGNPWExreUpFakdmNEJhcFpOUGcxM2xrSUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBR2FVbEVRVlI0bk8yYmE2Z1dSUnpHbi9GNFBhU1ptVktRbWg0MTByeW1aa3BhNUMySklqQlRLSkdnVDJwUVVKYWxKQVZlMFV3Q0s3TG83aVdMTHBJS1hvNGlhbWFTWVpyM0RNcEw0SzN5Y3M2dkR6dkhzODY3Kzc2NzcrNGVQL2crWDg3dTdNenpQRE96WjNibVAvTktKWlJRUWdrbFhMc3dkU0VDZEpZMFdGSVBTWjBrdFpYVVF0SjFOc3RaU1g5TE9peHBqNlNka3RZYVkvYldoYjlNQUhRRDVnSy9VenlPQUhPQWJsZTdQcEVBR0dBa3NDbEJwY093RVhnUXFKTzNOamFBM3NDV0RDcnVZalBRS3kzZmlWc1RhQ3hwaHFRSmtzcENzcDJWVkNscGc2UmRrbjZUZE15bVM5NVkwRnBTUjBsZEpBMlNORkMxWTRTTEtrbHZTcHBzakRtZnRBNUZBNmdBZmd6cHFXcGdKVERLTmxKYzdzYkFhTXRSSGFLeEhlaVFSZDJpR093UG5Bd3h0aHpvbnFKV0QyQkZpTllKb0Y5YVdsRU5EUVhPQnBqWkJ3ekpVSGM0c0Q5QTkyeVd1cTZKdmlHVlh3NDByd1A5cHNDbkFmcm5nSHV5RnE4SWVlMWZ5VlE0Mk11MEFCL0hnZlpaQ1RZbWVNQ2JrSWxnTkU4VEEveHNBeHBsSVRZL1FPemwxSVhpK3dwNkUrYWtMZElidU9TSWZKNnFTQUlBSHp2ZUxnRTkweUkzNU03dzlnSE5VaEZJQWNEMXdBSEg0OGEweUVjR3ZHSkRVeUVQMTZ3UGpBTytCVllENjRBcFFKTThaVVlFK0J5V2hobDNZYk04TVdsK3ZZN0FEcUFTYUdmVFByTGFTd3FVL2RMeHVpR3BtZTRPWVRVcHp2QUM5RHJoZmNyK0FHNndhUVk0WmZWUEZ5amZrOXhwYzlja2h1WTZaTjhWVFZaWXF4bTFzN3hubldmcmJmckNDRHpmTzU1bkpUSGxCak5HRlUxV1dPc05uMDRiNTFrWjBDb2l6K09PNTBQRkd1cnNFSjJoK0ZYZFJHQXA4QTN3R2xEaDVMbVQycy9zejBVWnJ1VnFnamN0OXFNaUxIKzlQRnozT2ZlVnhwai9ZcHFwa0xSYjBnSjVzWUxGOG1KL1M0RVpRQU9iZFpKcVl3bXJmT1g3QXN1QTRWRTFqVEgvU25JL2dmZkg4VjBqL3BiVGlpL0VMTjhBK05XVzNRK1UrWjZWQVZPQk5VQWJwOGZHK3ZLOVo5UFd4TlIrMGZFZU9uYmtld002Ty9lL3hERWhMNnBUdzNIYUdGTlY4OEFZVTJXTW1TN3BYVW5iSkpYN3l2M2t1MTVwLzI2S3FlMTZkZXRTR01CQnB4VTd4U3ovaEZOK2ZFaStOYjQ4VmNDandFUEE4OEJlWUFGUVA2YjI3WTcyL3JDOCtZaWJPdmNuNDVpUUYvdnpZeEZ3MUJpejJtZTBpYVFCdmp3SDVjVUY2OG5iSTdqWEdQTm5URjFKT3VIY3g1KzJBK2VkVm14WUJNZGFoK01rY0l2ditVRG4rZHV4alFick5uSjRRd2Z2ZkdOQU1jTDFnU2VCUGpacG5DUi9EN2FRNUY5QzMrVlE3RXpUVHlMZ0JSdjl1REZDbVFrMjczbnNaQVp2ZW5yYXg3UGJsLzlEUjJOZ1N0NWJPcnpIdy9MbWV3UGNlWGZMQ05xdDdkK0drcHBJa2pGbWg2VHBJYnk5ZmRjWEpHMlBvQkVGTnpuM3A4SXk1bXVBZzg1OWxLL0FGNUtxSlcweHh1enhwVmY1cmhkTFhuQlRWMzZldHRsSlRCcHd2YnAxdVl4OERiREh1ZTlTU05YMjlsT1MyZ0pQNDYzdVJrdDZ5V1paS0dtUnZlN2w2Q2RidXViMzZ0YmxNdkkxZ0RzZ0RZcWliSXg1WDk0MmVMbWtxWkxHUy9wRTBnQmp6RVJqRERaclg2ZG9taXZOd2M1OS9NSFY5cDRmUlMyRzh2QXY5WEVmSktWZFg2Q2NHSXVoUW1SSEhLTFJLWmtzYzc0eXo2WEJhN25IT0o2TFd3NWJzamtPMmNyQ3BTTHgzdTNqUEFxRTdRSVh3NzNLOFR3ekNWazNoNndhNkJHamZBdmdFZUJtSjMyZWovT3hvZzNtNnZVbXpaQ1lKZDNvRUs2SVdLNlY3VjJBd3pXOWJCdmxqRTEvSjVHNVhNMnZIYS9Kdnl4NHgxSmNGQXczYzJWb3FocTQxYVovWU5PV1VCc1FTY05uTnVGN3ZLanNab2Q0UDNCOWdYSjNBQmR0L3NsNEFaTFplS0d2ZWZnQ0pDbDRiRTd1OHIweUxYNEJ2U2hpYXd4NEdQZ0JiMTIvQzFoTWl1ZDdmRHJMSEc4WFNUdDh6NVVEVncybXBTcFNuSzlYQTN6TnprS29rZTFORnhOVEY0dnVhVktBbjYwVUVidUlLdGlCM0dYeVZYa1RRbnIrR0hCYjFzSjlxUDJNK2JFQ3U1MlZzWDR6NExNQS9YTkEvNnoxYTB3TUlmaWMwQUZnUklhNkk4a2Q3YkVkOGtCV3VtRm0rdUZ0WkFiaEs5STZvS0RMTXp4M2t1Ti83ZDJWWmQwQWFJOTNKaWNJMVhnYmxXUElzNitmaDdzY0dFdnUzTjZQclNUOG4wL2pxR3dqU2E5TGVrYmhZZlovNUcxWHJaZTNhYkZYMGwvS1BTcmJTVjR3WTdDOGNIbDVEcE9IUzVMbVM1cGlqTG1RdEE2cEFPODBwN3R1eUFLVlpIaEdJVEdBWWNDR0RDcStnWXlQNXFRS29Dc3dDemlVb05LSGdKa2tYZExtUVYzOVpLWkMzblo3elU5bTJpbjNKek1uNVcySDdaVzBROUk2WTh5K3V2QlhRZ2tsbEZEQ3RZci9BVnpka3JpbUw1OVdBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRjdrbEVRVlI0bk8yYmE0aFZWUlRIZitOcnhpRmZreGtGbGVrMFkyVytKcldIcEVWcVpXRUVaZ1lsRXZSSi9WQlFaZzhwK2xDcGFDSkJEN0xvblpwRnBXU0M1aVJoVmlZWnBxZ3ptVUdrRS9nWXl0U3hEMnZmdWZ1czg3am5zYytONlA3aGNPOCtaKy8xLys5enp0MTdyYlgzaFFvcXFLQ0NDdjYvcUNvVFR5TXdBUmdCTkFBWEFYWEFXZWI2Y2VBUDRHZGdON0FEMkFqc0taTytYREFNV0F6OEFweEplUndBRmhsYi93bFVBVk9BTGFUdmROanhKWEFMNVh0ckU2TUoySXI3anV2aksyQlVtZm9VQ3pYQVV1QVU0YUtQQVd1QmVjQ3R5SmpRRCtodWpuN0FFT0EyVTJlZGFSTm03eFN3QktndVEvOGlVUTk4UjdESURxUWowNUNibEJRMXdIUmpveU9FNDF0Z2NLWWVaTURWUUZ1SXNOWEFjSWRjSTRBMUlWeUhnYkVPdVdKaEVqSjFhVEY3Z1lrNTh0NEU3QXZnUFo0enJ3ZGpDTzc4YXFCdkdmaDdBZThFOExjRDErUk5Yay93YS85NDNzUUJXQkNnNHhBd0tDL0NHb0lIdk5sNUVjYkFuQUE5MjhocGRsZ2FRUFpZSGtRSkVmUW1MSEpOMG9SL25uL1BOVWtHdklYZlR4anB5bmdWZmc5dkw5RGJGWUVEOUFIMjQzZWRuV0FLL2xkc2tpdmpJZWdHekFRK0JUNEhOZ0dQQWowajJ0eU1YK2RrRjJKMFlMUGFoZEVJWEFKc0I1cUJnZWJjbTRiNy9SSnRQOFNyZFhOV01jT1Z3UTdjZW5nYURjaFU5aXNTSDREOEJJOFkvcU1sMm8vRTd6WVB6U0pvc1RLMk5vdXhFdWhOMGN0N1FGMzd3cHhmSHNQT1ozZzFQNWRGbEU1bVRNdGlyQVNldDNndVZOZTZBZ05pMnJrTHIrYld0SUlhbGFGanBJL3E1Z0FyZ1UrQXB4R1Awc1lWRktmWkgxTHFMYUFuNGhiYjJqVmZKN3BFR0xwZWxadUJ2eEtLcVFkMkFjdVFwN2dDeWYydEJKNUJjZ0VBYzgxMWdQVlcrekhBS2lRSWlvcy84VStCTnlSU2JmQUMzcnY0Y01MMjNZR2ZUTnQ5RkR1SStmNEVzQUY1M2UwbmRyZFY3MVZ6YmtOQzdrZVU5dEN4SStvTmFGVGxIeE9LR0cvWk9BcWN0cTZkQnA0Q1hrRjg5MXJyMnZmVzkzWG1jMHRDYnExVjl5VVdXdkRleFlhRTdlOVI3V2VGMU50ZzFUa04zSUdreGg1QzB1TExFTWNvQ1lZbzduMWhGYU1NOTFMbHRvUWlkcXJ5aThCQnhMTXJvQ2R3clZWdVFSeWhMc2dhd1hYQWJ3bDVRYkpFTmxLNTdTZnczc1VlS1d4c1ZEYmFnUE90NitQVTlaZlNDQTFBdGJJYk9uaEhqUUZwMEEyNEZ4aHR5alB4UHNFNnZDSDBsYXI5RHNkNk11RXczcnQ0ZG93MnMwM2RFeFNkbVpISUlGaXdzOHVxLzRiaUdPZENPTkJmMlQwVVZqSHFEZEIrZC84WXhPZWF6eDRVSTdmdHlJZ2ZaTGZKK3Y0M2t1WjJnWE5VK1VoWXhhZ2IwS0xLY1dhQkQ1QmdaQ3V5eUZtQVBRV3VNSis5OEU1UDJ4QW54Z1cwVnQyWFRrVGRnTjJxZkhrTTR1M0FmY2pxNy8xR3lIUmd2cm0rSEprTlFKYTNiUDdNb2FzRnJWWDNwUk5STjBBUFNPTmprcitHTEdUVUl0N2VMT0J0WkxvckpERkIzRndiTGlQTkNhcWNhbkJ0d0Uwd0ZJYVZsdTBXM0szNjFwSWdHQ3FGQThyUWRBY0NRV0lCZTVaNTBKRmRnQmw0TmFjT2gwSFN5N2F4ZGRIVlkrTXF5K1pCaWp0RlhHQTlYczNQWmpFMlRCbnJRSDdmY1ZFSDNBNmNwODR2c1d6ZW1VV2dRaE9PVTJJZ3NiVnRjRTNNZGdPUXAzc0c4ZXNMVDdtTzR0ci95MW5GS1h5TTQ2UW95TGFVTk9sbU96WFZBVnhnenI5T01jUGJQYmhwS3VTV3ZxOUN0cVhvOExKUGlYYVhBU2ROL1hsSVp4ZFMzTjNSTmJ4cFl2VEZINzQzTzdUUEtOSXRqVTBGdmtIaStwMklGNWpIL3A1VlN0dEpja2pmMndOWDRWamdtaVFGbnNTdmEyRWVSTlhJMDlSa2MvSWdpNG01QVhxK0psM3VJaFlHNHcrVC82MDNJZWpKL3c1Y25EZnhhSUszc0syaHVKeVZKM29EN3did3R5TWJ0OHFDaVFUdkU5cVByTkxtaFNuNFIvdENuSEpqanJ5QkdJdGtXclNZTThCSE9OeWdnSGg0MnNteFgzc2RXWllOZzVCRVJwQ3dEbVNoY2diUjYvcGhxRVVXU2JSdnJ3ZTgzSC96cFZDTkJFMEZweWZvYUVkdXhuekVON2dVY1lsN21LUE9uSnRxNnF6SEg5THFlWDRoT1k3MmFUQUNmOXlReDlGTXZuc1VNbU15RW9TNDd2aG04dCthNHhSRGtjMEpyYVR2ZENzU3oyY09hY05Rcmo4ZjFDUEw3WVcvekF6RS81ZVpOaVJzM29Na1Z6Y2h1OUVxcUtDQ0NpcW9JQ2Y4QTJiOHNPYjdNaWs2QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3ZpZXcxLWE3YmMwZjE1ZDMzODljMmM2YTdjMWZkYzc2ZGM3Nzg4LmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdmlldzItZGVjNDI1ZTFlOGQ0Y2Q3Y2Q5NDczNTJkNzdjMDk3NmUuanBlZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFGZkVsRVFWUm9nZTJhWFloVlZSVEgvMXVkUHRTeFVkUXNMYjgxUlUzUXZuQ0VyS0RBTVNHeXFJY2VLaW9vU0hvd2pVQ2hoeVJvUUpTZ1hnS0ZzdWtoVUVHb1hrcHJkUHFReWcvSU5DM0dyTW1SVWljYlorYlh3MW5IcytmT3VmZWVmZWJlbVlJV1hPYWN2ZGRlYS8zMzNtdnRkZFllNlgvS1JzQXlZTmxnMjVHYmdNWEF4eVQwMlg4S0VEQUQyQTcwQU9lQXMwQzcvUVhZRFN3ZWJEdUxFakFXMkFoY0JEcUJONEVKUUxQOWFvRVhnVDhNMEVmQXdzRzIreklCSXp3RGU0QW1ZSWJYM3d3MGUrOHg0QTZnMi9obkRZNzFrVUUxd0ZQQUw5NE1MMHJoNndYRWE1OEViTElWakFGTkd4anJJd01jc0FvNGFnQytBeHBLOEtjQzhmb24yemE4QlB4dHo5ZFZ4L3BFNlQzQVZ3YmdoSzNJa0RKalNnTHgrRzRDdHRycVhMRFZHbDg1NjlVbmxMYVpUMXlaY1d3bUlCNy9QTnRtY2RUYkNOVGx0MTY5bHIwYk9HOUNSd1hLQ0FMaWpic04yR21UZHdiWUFOU0dDcmtXMkdKaHRCUFlITHJNd0JEZ01hSXpwTjJlUzI3REluTHVBajQzUUtlQTU0QXJzZ3g4MlphMEIzZ1htSjVEK1FyZ1cxUCt2ZjJ3dGhXaDhreG1BL0MxNTU4UGxtSWVUMEtmQXBNQ2xkVURlMjE4Sy9BTVVaaXVzZWRXNjlzTDFBZktkalpCWjB6R3NWTE1FNHpwQjZDTDZOQjZGYmltakpMNTNuNCtDNndGaHFmd0RiZStPRjNaQ2N6UEFLSUIrTUxHL0FxY0JIN01BbVF0VVRoc3N2Y3pSSkhxcWdMK0c0aUNRUmZKR1ZEV2w0RFI5RDNkKzJ4aG9uQy8zMnhvSTNMNFVjQUhtWUY0YlhkNDIrVWswZGt4M2d6NXl6TmtTamtBS2ZvbWtoeUdmbjZXQ3NBYkZ3N0UyaDN3c0cwNWJBVjZnUGVCMmFFQVV2VE9ObGs5QmdyZ05QQkNrUzNhQjBpbWNPaWN3em4zbnFTNWt0NlJORlNTazFRbktTeTJwMU90eVhLU2hrbHFralROT2Rmb25PdklJaUFvcmp2bk9pVWR0ZGRHU2JkTGFpRm5CZ3ZNQXBva3RaaXNSdXM2a2hWQVRNRUhsS1NmSlAwdWFaMms2WksyU0ZvcDZaRHQ4WW5sQk1TK0llbVFqZDFpc2w3SllVK3FnbFFmU2VHcktYaWZDbXdqU2ZnMkFxTlR4c1hSNm9MeGJnT21ldjExcG45REdmMzVuTDJBcHhhNHRVamZBbUNYeVdqSHpoT1M4NlBkK25ZQkMxTEdEeWlRTlJaWitrUVRqMmNwdlU5NC8wUmZXbUpjYmlCNWZHUzRvc2hTTkhGenp1MXh6dFVyMnY4MTlsdnBuS3QzenUzSm9iTXNEYXVHMEppY2N6dXduTWc1dDZPYXV2S3NTSWVrTGttZEZiYWxYNVFIeUJ1U2xvVEcrV3BUTUJEbjNIbEpCNnBnUzc4b3p4ZmI0NUpPa2VVcmJRQXB6OWE2VWRKWVJkSHJYME5CUUd3Vlp0cHIyUStpQUxtRmRzd3BkVTZsVVNZZ1dCb3Y2YkNrUnlWMVMvcWtVbW04cEJQQVM1TE9TZG9yNlNGSng0dWw4V2xVRmdod3A2VDlrcllyU3JNZmtUUlIwbVpKOTBzNkNMeVZKVm4wWkRxaTczdG5UVWNVSmFGMXpybWxraG9VSmFldmh3S0tGZmlmdXZPOHZLa05XRjNvNE1BVWt1cGdCL0FhTUthQXAwOWRDMWhrY3ArMDl3WEFBZUQ2QXI3bFFJdnhYdjdRQ3NtMStsdDhXQmZQSU1tMXdseGd0YlVOQlE0Q3h6UE1ieHFnc3NVSHZ4ejBJWlVwQjMxcFFKNjE5dnVNOXhaZ1RhRDg1U1RWLytMbElHTmVieXZSQ1RTU28rNUs3d0lkQm1Ta3plYjJVSGttY3lGSi9ia1ZXSlZsMEdTU1V0QnZ3TlBBMEVERmZzbTAyZHJtRUhnSFFuU1A4alpKL1hrOU1DSkVSbHhJM21lQURnUDNCZ2xRdjRyWThVM1lud1ppSy8yNU4vRm05clFCMmhreXE2RkFQSDMrVGRqTitheFBWekNTcUZCMmthaXF1SWtNVnd3aFFJZ0tjOTk0TzZEb1RWaS9DWmpwK2M4cHl0eGFaUUZDRkpyak02dlZaQWI1Wkc0QzdpYTZQNFFveEM0cHdsY1VDRW5KdEl1aytsS0pnbDhZQWNOczl0cElycVluRi9Da25leVZkZVJLRVRER2ZPYVN6ZXdHNEdycnV3eWs2bzVjS1NLNml0aHRSdjVzUnU4ek1BUG55SlVpNEFIZ21CbmRiVDRRTy9JVEErYklsU0NpNjdibmlmNjFZL0FjdVZJRWpBUEdWVnZQUC9hbW5adDRIK2RzQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUU5MGxFUVZSb2dlM2FXYWhXVlJRSDhOODFyNVZwbWRYTjB0SkdTNXJBeXNLRUJxSEFSSWdtZXVpaG9vS0Nvb2NtQW4xTGVoQ3NDT29sVUNpemgwQ0ZhSGdwcld5bUFZTkdKYTRONG8wbXkrdjFmajJzZlRoZm45OXd6cm5mdlNiMGg4TjNocldILzk1cnJiMzIyaC8vb3pBdVM5Y0JpL1B4T21ycGVzc0JSdWhVck1Fd2ZzY3ZHRWkvTmJ3c1NQNW5jVFNXNDI4TTRtbE13enZwbW93SDhLc2c5QnJPMnk4OWJZSEQ1QjBjeGxveEt4a3lJaGt5d3J1d044bWZQaVk5YllGZTNJNGY1Q004dDRsY0k1RU1NN0JTekdCRzZPUlI2V2tMOU9BNmZDVUlmSWFyMjhpM0lwSmhwbEREUGRpZDdvL3JTay9iWUNFK0ZBUzJpaGtaMTZGTUp5SVp6c0FxTVR0L2l0bnFxOXpURnFoM3BUdUVUUnhjc0d4Uklobk9FbXFXZWIzbG1GS2lmRk5rMDc0WGY2UktEeTlaUjFraUdlWmh2Umk4blZnbVBGOHBISXNuaFJzZHhCUEtUL000M0N6V2tJRjAzMGtObStGeXZDMEliY2ZkbUZDazRDTmlTb2Z4UEU2cDBQaGlmSm9hL3pKZHRmUnVjWVg2Q0lmeWtkdytyMjBuM0NjUEtkNFVMcklNTHNHbVZMNGZkd28zM1p2dSs5TzNUVW0yREhyRUlPeE1kWHpUVG5oYUV2b2FRMkxSZWhSSGRHamtiTGsrLzRJSE1iR0ozTVQwTFF0WDFxZXluWEExM2s5bGZzSTJmRmVFeUlQQ0hhNlZHOXNET0tSQi9nVGhESWJrYTBBUld6clN2cXQ3TXhWZWlIZmwzbktaY0RZdmxTR1M0V0s1dW13VGEwZGY2c2hmZFIyWlZZQkFJNmJMRjhQNitLd1ZnUXlWaUJENmVZTlF1WnFZZ1dHOGlOa1ZDRFJpZHFwcldKQ3E0VWZjcDdtSzdrT2txRHVzNFFYTXdYTTRTSkNib29KdmI0TEpxYTRlakpmSFhTdUUrblZFV2I4K0tHSXNxWkdMOEo3cUVlenBxZXg3cWE0VjZmMFhDaEpvaFZhcVZZOWJoTjVPRUxieXVERDBQVUxIcHhkb3A5NDJkcWM2K3NTczFJUk50RU5sRzJsRWI4UHpTVmd0RC9pV0M4L1VpTXhiL1psa1Y2ZXlHY2FVeUdSYzJPTGJPZGlRNmhpUXJ5ZlorakdRdm0xSXNvMFlVeUwzQzVWbzVrMHlMUER2RmI1K1JWL1FwbHhsSWxXQ3VJbkNzN1FMM0RhS0VHU0pQRVJaa3Q1dHJOQm1SNHdmalVycnNFNGVFNjBiellhcXpNZ3VzU0FPZHJrdkkwSVZJazlodmhINitXNmpDcEUvOEhHM096SlNWQ0Z5aTlpcEZkcWxqUldxRURsUkpObmF1ZDh4UjFraUUzQmF1aSt5SWFyYWp6T1ZIS2lpUkxJd2ZndHVFdUhGRzdvWHhtL0Z3eUpYc0FuWDQxdXR3L2lPYUxheVh5cWkwMnlmZktQSXNxeVVCNHZQYUIwc05rc0g5WWpGc1NjOXY1SklISldlRjlXMTJXeGZVaXBFT1VzZU4rM0F2ZlkxOEZueTdPQXVQSWFwQllqTVRmWGVscDdQRVo3dytBYTVWb1FLRXhscDh1RWgrUWhtUk9hSXdTQTJacDhMOVNtQ1JrSWRrdy8xNmFCWGRTY2Q5SUVnY2xkNmYxV1N2VUFFb0dXd1NKNzliNXNPZ3FWaUpnYkZqcTFLM3JVK1FWY1RSQ2FKMFZ4VG9UN2lVQ2pMUC9lTEU0R09tQ2xQQmYyTU80UTZsRUY5eWpTemtUT1ZQd09aZ1dmbCtlZWw0bkNwRk9aaHN5QzBCVmVXclVEMUpIWjJFdmFiSUxIS0NNOU5zcEg5VVo0ZExET3FaWWxrN2RXZmhKMWJvbnhIVEJJN3Q3L0YrckZTc1NPR01rUVc0aE81QnJRN0NSc3hUcFBiejNhZFQ2MktFSmtqWDdQNlU1MWxiYkl5cmhEbmh6WGhZdWUza0d0SEpFc0xEY216TDkxSStKWEdlREY2TytSSDB6TWJaSm9SNmJvaGR3dFRoYzNzRVNPN0RJZW1iL1ZFUnQyUXU0VXp4RjgwYXZoZWRIcXpJREttaHR3dFhDTkNpSnBRblNHNUlkOXFEQTI1RytqRlBlS3ZIZnZWa0x1Rlk5STFxdmdITEVPV0FSSTBRV3dBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdcclxuXHJcbmxldCBzdG9yZVxyXG5cclxuY29uc3QgZXhhbXBsZUluaXRpYWxTdGF0ZSA9IHtcclxuICBtb2RlOidkYXknLFxyXG4gIGxhbmc6J2VuJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgREFZOiAnREFZJyxcclxuICBOSUdIVDogJ05JR0hUJyxcclxuICBFTjogJ0VOJyxcclxuICBaSEhBTlQ6ICdaSEhBTlQnLFxyXG4gIFJFU0VUOiAnUkVTRVQnXHJcbn1cclxuXHJcbi8vIFJFRFVDRVJTXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5EQVk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheSdcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5OSUdIVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnbmlnaHQnXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU46XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGFuZzogJ2VuJ1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlpISEFOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsYW5nOiAnemhIYW50J1xyXG4gICAgICB9IFxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRVNFVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnZGF5JyxcclxuICAgICAgICBsYW5nOiAnZW4nXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuLy8gQUNUSU9OU1xyXG5leHBvcnQgY29uc3QgdG9EYXkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuREFZIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvTmlnaHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTklHSFQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9FbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5FTiB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b1poSGFudCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5aSEhBTlQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRDb3VudCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRVNFVCB9XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAga2V5OiAncHJpbWFyeScsXHJcbiAgc3RvcmFnZSxcclxuICB3aGl0ZWxpc3Q6IFsnbW9kZScsICdsYW5nJ10sIC8vIHBsYWNlIHRvIHNlbGVjdCB3aGljaCBzdGF0ZSB5b3Ugd2FudCB0byBwZXJzaXN0XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VyKVxyXG5cclxuZnVuY3Rpb24gbWFrZVN0b3JlKGluaXRpYWxTdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gbWFrZVN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gbWFrZVN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbiAgcmV0dXJuIF9zdG9yZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG5cclxuXHJcbi8vIGltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG4vLyBpbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5cclxuLy8gbGV0IHN0b3JlXHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vICAgICBtb2RlOidkYXknXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gICAgIGNhc2UgJ0RBWSc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgbW9kZTogJ2RheScsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGNhc2UgJ05JR0hUJzpcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICBtb2RlOiAnbmlnaHQnLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBjYXNlICdSRVNFVCc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJldHVybiBzdGF0ZVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSB7XHJcbi8vICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4vLyAgICAgcmVkdWNlcixcclxuLy8gICAgIHByZWxvYWRlZFN0YXRlLFxyXG4vLyAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuLy8gICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuLy8gICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuLy8gICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4vLyAgIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4vLyAgICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcclxuLy8gICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuLy8gICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbi8vICAgICB9KVxyXG4vLyAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuLy8gICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4vLyAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4vLyAgIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbi8vICAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbi8vICAgcmV0dXJuIF9zdG9yZVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbi8vICAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuLy8gICByZXR1cm4gc3RvcmVcclxuLy8gfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVGaWxsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JhZGlvQnV0dG9uVW5jaGVja2VkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9