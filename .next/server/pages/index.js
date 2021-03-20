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
/* harmony import */ var _Home_component_Skill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Home/component/Skill */ "./component/Home/component/Skill.js");
/* harmony import */ var _Home_component_LearnByDoing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Home/component/LearnByDoing */ "./component/Home/component/LearnByDoing.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Home\\Home.js";








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
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
            lineNumber: 57,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '12%'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '5%'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home_component_Skill__WEBPACK_IMPORTED_MODULE_6__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home_component_LearnByDoing__WEBPACK_IMPORTED_MODULE_7__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
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
            lineNumber: 83,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
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
          lineNumber: 95,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
/* harmony import */ var _Public_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Public/Carousel */ "./component/Public/Carousel.js");
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../css/Home.module.css */ "./css/Home.module.css");
/* harmony import */ var _css_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_image_gif_gif1_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/image/gif/gif1.gif */ "./public/image/gif/gif1.gif");
/* harmony import */ var _public_image_gif_gif1_gif__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_image_gif_gif1_gif__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_image_gif_gif2_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/image/gif/gif2.gif */ "./public/image/gif/gif2.gif");
/* harmony import */ var _public_image_gif_gif2_gif__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_image_gif_gif2_gif__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Home\\component\\LearnByDoing.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  title: {
    fontFamily: 'Roboto Slab',
    fontSize: '2rem'
  }
});

const LearnByDoing = (_ref) => {
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
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Carousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
          imgsrc: [_public_image_gif_gif1_gif__WEBPACK_IMPORTED_MODULE_9___default.a, _public_image_gif_gif2_gif__WEBPACK_IMPORTED_MODULE_10___default.a],
          mode: mode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Carousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
          imgsrc: [_public_image_gif_gif1_gif__WEBPACK_IMPORTED_MODULE_9___default.a, _public_image_gif_gif2_gif__WEBPACK_IMPORTED_MODULE_10___default.a],
          mode: mode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 3
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, undefined);
};

LearnByDoing.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])('learnByDoing')(LearnByDoing));

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
/* harmony import */ var _public_image_home_jest_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/image/home/jest.png */ "./public/image/home/jest.png");
/* harmony import */ var _public_image_home_jest_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_jest_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_image_home_git_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../public/image/home/git.png */ "./public/image/home/git.png");
/* harmony import */ var _public_image_home_git_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_git_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_image_home_next_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/image/home/next.png */ "./public/image/home/next.png");
/* harmony import */ var _public_image_home_next_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_next_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_image_home_html_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/image/home/html.png */ "./public/image/home/html.png");
/* harmony import */ var _public_image_home_html_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_html_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_image_home_javascript_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../public/image/home/javascript.png */ "./public/image/home/javascript.png");
/* harmony import */ var _public_image_home_javascript_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_javascript_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_image_home_css_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../public/image/home/css.png */ "./public/image/home/css.png");
/* harmony import */ var _public_image_home_css_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_css_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_image_home_npm_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../public/image/home/npm.png */ "./public/image/home/npm.png");
/* harmony import */ var _public_image_home_npm_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_npm_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_image_home_mysql_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../public/image/home/mysql.png */ "./public/image/home/mysql.png");
/* harmony import */ var _public_image_home_mysql_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_mysql_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _public_image_home_figma_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../public/image/home/figma.png */ "./public/image/home/figma.png");
/* harmony import */ var _public_image_home_figma_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_figma_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_image_home_webpack_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../public/image/home/webpack.png */ "./public/image/home/webpack.png");
/* harmony import */ var _public_image_home_webpack_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_webpack_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _public_image_home_symfony_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../public/image/home/symfony.png */ "./public/image/home/symfony.png");
/* harmony import */ var _public_image_home_symfony_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_symfony_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _public_image_home_php_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../public/image/home/php.png */ "./public/image/home/php.png");
/* harmony import */ var _public_image_home_php_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_php_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _public_image_home_jquery_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../public/image/home/jquery.png */ "./public/image/home/jquery.png");
/* harmony import */ var _public_image_home_jquery_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_jquery_png__WEBPACK_IMPORTED_MODULE_21__);

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
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.skillBlock,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        style: {
          height: '5rem'
        },
        spacing: 4,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 4,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_react_png__WEBPACK_IMPORTED_MODULE_8___default.a,
              style: {
                width: '80%',
                paddingLeft: '10%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 4,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_jest_png__WEBPACK_IMPORTED_MODULE_9___default.a,
              style: {
                width: '70%',
                paddingLeft: '15%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 4,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_git_png__WEBPACK_IMPORTED_MODULE_10___default.a,
              style: {
                width: '80%',
                paddingLeft: '10%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 4,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_next_png__WEBPACK_IMPORTED_MODULE_11___default.a,
              style: {
                width: '80%',
                paddingLeft: '10%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 4,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_javascript_png__WEBPACK_IMPORTED_MODULE_13___default.a,
              style: {
                width: '80%',
                paddingLeft: '10%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
          item: true,
          xs: 4,
          md: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.ball,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _public_image_home_css_png__WEBPACK_IMPORTED_MODULE_14___default.a,
              style: {
                width: '80%',
                paddingLeft: '10%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
/* harmony import */ var _css_public_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/public.module.css */ "./css/public.module.css");
/* harmony import */ var _css_public_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_public_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Public\\Carousel.js";




class Carousel extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isBoxHover: false
    };
    this.handleTimer = this.handleTimer.bind(this);
    this.timer = this.timer.bind(this);
    this.handleBoxHover = this.handleBoxHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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

  handleBoxHover() {
    this.setState({
      isBoxHover: true
    });
    console.log(this.props.mode, 999);
  }

  handleMouseLeave() {
    this.setState({
      isBoxHover: false
    });
  }

  render() {
    const {
      imgsrc,
      rotateBy,
      width,
      height,
      mode
    } = this.props;
    const list = [];

    if (!imgsrc) {
      return list;
    } else {
      if (!rotateBy) {
        for (let i = 0; i <= imgsrc.length - 1; i++) {
          list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: mode == 'day' ? _css_public_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgBox : _css_public_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgBoxNight,
            onMouseEnter: this.handleBoxHover,
            onMouseLeave: this.handleMouseLeave // style={{width:'100%', height:'100%'}}
            ,
            children: parseInt(this.state.count / 3) % imgsrc.length === i ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [this.state.isBoxHover == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: imgsrc[i],
                style: {
                  margin: '0 auto',
                  width: '100%',
                  height: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 41
              }, this), this.state.isBoxHover == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: mode == 'day' ? _css_public_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgDescription : _css_public_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgDescriptionNight,
                children: "hello"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 33
            }, this) : ''
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this));
        }
      } else {
        for (let i = 0; i <= imgsrc.length - 1; i++) {
          list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _css_public_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgBox,
            onMouseEnter: this.handleBoxHover,
            onMouseLeave: this.handleMouseLeave,
            children: parseInt(this.state.count / rotateBy) % imgsrc.length === i ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                width: width ? width : '600px',
                height: height ? height : '500px'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: imgsrc[i],
                style: {
                  margin: '0 auto',
                  width: '100%',
                  height: '100%'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 33
            }, this) : ''
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this));
        }
      }
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        justify: "center",
        alignItems: "center",
        children: list
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, undefined)
  }, void 0, false, {
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
          lineNumber: 122,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 1,
        md: 2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
        item: true,
        xs: 1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
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
            lineNumber: 136,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
              lineNumber: 154,
              columnNumber: 23
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, {
              fontSize: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 24
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
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
            lineNumber: 161,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Work",
            underline: "none",
            className: router.pathname == '/Work' ? classes.nightLinkAnchor : classes.nightLink,
            children: t('work')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
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
            lineNumber: 181,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Writings",
            underline: "none",
            className: router.pathname == '/Writings' ? classes.nightLinkAnchor : classes.nightLink,
            children: t('writings')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
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
            lineNumber: 201,
            columnNumber: 21
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./About",
            underline: "none",
            className: router.pathname == '/About' ? classes.nightLinkAnchor : classes.nightLink,
            children: t('about')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
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
            lineNumber: 227,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
        lgUp: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1,
          sm: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
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
              lineNumber: 246,
              columnNumber: 23
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WbSunnyOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, {
              fontSize: "inherit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 24
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
          smUp: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
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
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
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
              lineNumber: 276,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
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

/***/ "./css/Home.module.css":
/*!*****************************!*\
  !*** ./css/Home.module.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ball": "Home_ball__2MdUc",
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
	"imgBox": "public_imgBox__k10gH",
	"imgBoxNight": "public_imgBoxNight__3pzrH",
	"imgDescription": "public_imgDescription__2GBDJ",
	"imgDescriptionNight": "public_imgDescriptionNight__3CXJE"
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
  namespacesRequired: ['header', 'banner', 'footer', 'skill', 'learnByDoing']
});

HomePage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('header')(HomePage));

/***/ }),

/***/ "./public/image/gif/gif1.gif":
/*!***********************************!*\
  !*** ./public/image/gif/gif1.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gif1-ff260e2e51f9892a4ae7210abd8b4c00.gif";

/***/ }),

/***/ "./public/image/gif/gif2.gif":
/*!***********************************!*\
  !*** ./public/image/gif/gif2.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gif2-231505dd711046828ca2d63cb21188f2.gif";

/***/ }),

/***/ "./public/image/home/css.png":
/*!***********************************!*\
  !*** ./public/image/home/css.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsSAAALEgHS3X78AAAc/ElEQVR42u1dCdhe07Ve+ZPQmGKeU6l5uIhqVFG0Yr7mIVRdGkSLGmq4GuUGNVRSLqo0WlrCNVPjgyhCr1k0NV6zmBNjjBl+3eues55//9s53z/knO9ba+93Pc/7/DU0zn/O3u9e693vXptozmO6w1cO7flPAACah5bHc/mDzMbHAID0COBv+YPMQhYAAOkRwGX5g8wEAQBAegRwRv4gM/AxACA9AjjSIwBkAACQGAHsAw0AANIlgG28XQAQAAAkRgBDPR8ACAAAEiOAwfkOAMxAAJAgASzs8B7MQACQJgHM4/A8CAAA0iSAPg4PYicAANIkAI5bPTcgPgoAJEYA42EHBoB0CeAsEAAApEsAx4IAACBdAhgBERAA0iWAbUEAAJAuAQwlnAcAgGQJYGXYgQEgXQJY2mEa3IAAkCYBzO/wEggAANIkAI5JnhCIDwMAiRBAW/7zHhAAAKRHAH3zn1cRzgMAQLIEcC4IAADSJYDjYQcGgHQJYCQyAABIlwB2RAYAAOnuAmwMOzAApEsAazl8CTswANSOdu9ny6NP/nOQw/twAwJAU0lATczn8DoIAACaNvlnkbJ4Bm5AAGgaAUzTMvGlDJgIAgCA2iEZ9vPaCOAabAUCQO2rvyywj2ghANkJ+D0IAABqh5jt7tBCAGIGGp0/2Ax8JACoLQMQArhCCwH0y38e7BEAMgAAqJcAztaWAQz3REAQAADUSwCjtGkAw7yHBAEAQL0EsL82AhjiKZQgAACodxdgO23bgMs6fAoCAIBaCUB8AN/T5gRkO/C7sAMDQO0uQD54t7o2Aujv8DQIAABqdwFOyzNudXEfdgIAoHYCeJmy+zjUhOgA1yt3A7YHtRQACNoN7GKJADhZ28ovXoALDbgBkZkAVseGEMC92ghA3ICnKXcD+iz/DmU9DN7If6YG+b3fdJiaOFi8/tBABiAegKu0ZgBHGCoBZBvlG7mAmSrmzndwUsXAfBz8iHT3tfRNQOdqJYC9lIuAvpFiWKBfINKO/QyMXSGA47W9PHEDbqGcRf00as+gfEGkGf3zn8cpL199bW2kVgJYW3kd5bPoYUH2gkgzZAE4U7mA7Y/dnbW9REmjlyPd7cH9l3gqCADhLV6XGNCv5Lk21UoAizq8TbrdgEIAfwwGACLNkLF7qxEBmzOUtbS+xAHU0R1YOwHcBAJAePEQ6W5qK/PpI1JqA5Z4QLmaKh/4gYC8EGnrAC8pX7jkuTjDnkdzLXVrsNJqJYCnHObC2Ef6T5kX4D0jBPCs1pfZ14iYIi9yisMiyAJAAC6Wd/iEdNuBZeGaqJ0AxhgRUz52GAwCSDoka/0O6e5m5e9eXat1zAoBHEV2tlPWhBCYdMiY1W5g8wngguDZ1b3MvQ0QgLD9JiAAEICLPQyMWTEonewJlypf5pZk5zzA7lrZFNGUKLrTQrsL8FCtBCCr6FAD6ZQQwCEgAGQALk40lLXuqXXMCgGs4vC5EUHlJBAAREDSf6+lr1ttrrVsFVVySdLdHdgngD9oTacQTSUA/2ZrzZ2K+OcQ7boV24FfJBt24GuRASQdsmhNJN02YCGALxyWCZ5dZTyh+IX69dTdmAMIF0+SjXMA3MZuQc0EIGnJBCMEwEQ1lwVGRdQW8zq8ojxjlfHK927MbaGmukx5TSUf+jVS1l8d0fT0f2nKLtrQrFkJAdyv/aVKLX0W2bAD812G38yfee48G0gZ/SmdA1IyVlcj3btW/kL6V+0CoLzUXxpRVRnPUXbRAteB/0wc/6DsWOww7QNtDld+X/Rdj/T7VsSgdHH+zP20E4B0WNXcYFFz//dWI8Z2aW3B77MQZQ7AZ8nOOYDfWCGAHUi/Hdi/ImwW8P+Qfo4xdUvqGwi8K+QT6e0CTUi7DfgX2olZBsz3scqauxLLv3uey6IBhndH+hRMEr4I5lKv3pcSdbbyseqLgD+2QgBrUGZawF18Nia+rIL+YZi1DGYB4cTnZ9/J4a4CUS28EFTzNxKS2lz7N5HVYimHDwykV6lPelldfLGW//oGh0GGMoCwvmezzCG5sBmm0hZuAS4jgCFWSJm31N4AAaie+DODb/OWw1iH1QsI3VJ9f3pQ388KtChrZak8K5cuy1sqyyaTbntlaldey0oSbs0+7vCzXBX3V1Stg6wn9b3liR8KlEzQi1sigLtAAGrTfP7f1ztsVbCithmZ+FLfT2hQ38cgQvvdgAdY2W/luIJ0uwFTTPM5Nf5tkOYXpdKx1PcxjDtZQB+ytO/KcS7pbrOUUpr/mMNPC9L8vsrHkU9KK+b7928Fk8OisNcbG/DtVgRAcSmdQPrdgDGn+fzer6OsR6PVNF/q+/GR1vc9IYBLtHsAQgI4CCVAy9R8vpthNUNpflF9v3OD+j62NL87LsAxVghAHnA30u2xRpqvs75nf/6TEezfV00AR1shAEkvN03wg7Uizee2ZpsbSvMb1fcx7d9XXQLsbY0A1iAbVkutk75Rmv+mwxmUdWC2muZ3Z/++PfEFxD8HsLUVAvC7A38GAujVxC9L8x91OJA6+sJZSPNR31eTAa5vZRdACGABgh24qjT/GoNpfsz+/FZ0rlrVCgFIcGsp2IF7r+a/kdfFltL8oudbAfX9HLsA380zaiJjx7PvId2NQVpd3xel+Y84jHQYaDjNR31fLQG8TMq7AZcJgdeR7t6AWtJ87sRzNXX04rOS5vf0/D3q+97ZgJ8gYyFmoHGUthko1jS/qL8e6vv6COAOa+m/DI5fJ0gA3Unz+WDH/sbS/LL9+9jO32s0AY23JgDKQD40IQ0grGuL0vyrHDYzttoX1ffro75vKgGcGcwrMwQwPAEC6E6af5rDysYnPq8+Ozrc2Y36HhO4GshJ2mOD0tqMCPiDiAmgK2/+ww4HUOaHsJTml/nzJ6O+b1kGsJ9VAlgzsgHSlZrPnZCvzInP0mpf9Iwr5JnLW6jvW94MdAdrJYAMpMEO08m+HbirNH8KZbfprGR04vekvsfEb/6Y28iaCCiDflGH18muHbirNP+hPD2b31iaX5Sx7dSgvsehrtaNPRaPV7NGABLsXnqKbNmBY07zw2Di4sYt2L/XSwCcQS8WLKymsoAHjBBAV2n+aw6n5Hvf1ie+rCQboL5XbwPmXaRvkMGQQXYL6bYDd2XaedBhREGab/niTCGshR3eCQYcJr0+G7DJsSZ18EXKCeCrgoHPAtgVkaT5XcU91NmtmRK0Ep7fCOQuqwNLCOA00m0H9geDqPkrJjDxZU/5d0YIum7S1+oBuNKqACgEcLgBAuCfH+d737Gk+d39Pnt7avPMhKB9Z0NcgOcFhG1ugO1pQAOQ5xscPHsKMS9lt87ydeBrR451KPNq7KNc6PQzgNHWCWAL0m0H9gfBelbTLUSPYjMDY1I0gIOsLkoyiYYqr7l8y+U2iRJAWyKYK/999zWQlcqY3NUqAYhoxinXJ6TXDeiz7b4JlgAphXzXowwJ0xtbXZR8O/A7yglAVoJjQABJEMAYI8I0w6wNmDzx4mXlBCCK6xirgguiR2XpX4wI05w5LxMsqCbjcdJtBxYCuBgZQBIEcJtyApCFku3nC1omgD7BC59FukuAG2NgW0SX4/Fh5eNRnmuyJ1yaZtxLFNdc/gv/O+ZI9MET6hnlGak8172xiC5jlYsuknI9a51xEV2u/ouQ7ivr/Iz0BuslqYhpxwS1tlYCmEodPfxQBsRJAN8i3V2qfAIYFwsBjCAb2y58CnAQCCBqAXAtsmMDPtk6AciDb++ttJoJgJ9vnWDAIOIigE1Ivw1YCODn1gmgqPOMdufVMBBAlCGTaDeycw5gd+sEIGk03333pXICkJe+h/WXjmhIAAcbIoBNrS9GvvL6EdlwAx4c6BeIuAjgRLJjAx4SSzbKTQ1fVUwA/g7FaGQAUYYQ+vlkY0uaF8xvBQupaQHmMbLhBjwPGkDUGcDVZMMG/HqeOUdBABx3KK69fAK4CgQQddylXAOQBfKZWMpQmUiXK2deefH3xMS6iK+VAY8bIYAHYxmHwmLneLW25hf/lEdcQGtQ9aCXP4/vdtB8NN0fhzfFkokKARxvRHyZgoUyuhACWJw6dqO0dgOWDPmPsRCAiC8Hkv79V7EDs1DEJxjHA00FN+q4jjr64LVVTAArku4bkHwt6tRg/pgngJ1Itx0Y12LpwaiKB78QyfdI/72Hsh19WCwEIC9/Q+UvP7wYFGg+xC26V8WD39KZFMkA9oyNAFbGSgtQ91phb1VxCSCTaD8DZai8gy1jIQCpv5Y2IMAAOgb/uhUTgAjR/6lciPZPpQ6NRQQUAhjo8IryLRig9YN/FnVczlo1AYwlG41puBvwCrH4APyPMEl5Cga0fvBPc1iq4sEvRPJnI1vR3JlqoZgIQH6Ju0l3M0ag9YP/JcoMO1UOfvlzbjZCAC9RZIfR5Je5VvkHAFrvgJtUY937oPIFSJ7rIYoshADOBwEA1NgBV9dZDC5BX1SsQflbgDfHVv8LAYwGAQBdEMB1NW1/Dcz1BQsEcHEsOwAhARwEAgC6IIALKiYAvx34J8q3oWV34oxYPAAhAexCuo8EA61f/U6qePDLKrquV2Nr9QAIARwdbF+aD/kIG2MbEKDmtsKWP2cL0m8DFoLaN7YMwL+UQfNpLKD1JcDwmghgD+Xlp++E3DY2ApA6bLDDh4qFGKD1q99mFQ9+SaMPId0uQP+Q3HdjEwGFANjdNAUEAFD5MezvVDz4rbUD5+dbPrZtQL8UeFq5GaM9YOS6gDKo2AO/UsWDv82IB0XeAWfIC8dIAPLL/K9yAmjWxMTk//rgf5uytl11EMC1yneg5B2wWWmeGAlAPsQNRjKA2VRf44t20t+ZplWDf66aFp77FI87XwN5hCLtSC0EMM5IKvaaw/oO/0bZFU1rVwD+c1YPsiAQQMfgf6LG8feUcgKQzOT2WOt/EWNONkIAU71UrOq4THk62ioCuLOmwb8A6b+aTsbC5bFtAYYEYGE7Rgbl8t5WUhX97iW9PVc5CbZ68FfdDXiQw3uKCcDPAM4Jti+jIwALhoz2mrekjgMBFA7+syte/eS7cRmn/Xp6eQfHxZ4BbE76LZmySmxdEwEcAA2g8BDMr2oigA0NjDkpgw6IlQD8QxnaL2eQj/EfNQ3I7UEAhYdgDqw4/ZXvtp2BrFPG3PYVLzrqfAD+sUzt9diRFQ9I+ajfVb4itWrw71ox4YbtwC2cA1g/dgIYmCvsmglAVqTTayKAlUn30dRWaS4/rKnk+qUBApD5sEqsBOBPAs2tmXxVuuoLGoUEuevtNOXvoBUe+CE1EcBZRraeeadimZq2QlWF5uaMfgnw14o/hn9N9QsggE4EwGXhNyt+30IAlxshAO4GvEDMBCC/1E3KP4gQ099rfBePKibBVhmv5qtJeL6DdBuvmtERWdVOwMVGGPn/atiOkXcwQfmgbMW7rsv88rBysg07IkdLAvKBzyAbVzS9Sx2XVFQVRWkpbMDZ+Yg6sk22cz9nRHO6uuJdELUEcLRHAJozgOkOy9VUl54FAuikt9xUk96ymMM7Rgjgd7ETgPxi+5JuI4yvTH+7JmVa+021zR78f65px4Xb0FmxAZ+QCgFsS/qtmfJcwyr+KCEJpp4BSBk4NsgSq9Ja1ib9vRdkDBwYOwHIR1mPdHfG8Vl595oIYBtkAJ3e87E1EcAwA4uNvIMdYycA3w48UzEB+ALlQRV/FBmY6xtYmZppA96/JqL9kYFyU7SJjWPfBRACWMThA8XCjM/KJ9ZEAKs6fKqcBJs5+HeoiQAOV55ptXsLzlqxEwB5WzMvGCGA82sSp5Z0eCtIT9sjzwjCXoizvfe8YcXvWUqJU5QTgIz/96l6J6TqTOBh5amZDMxra2Jl7g70rvcOpGHobIqndXh7waSX3zU05axaEwGMM7LlzPdlzE8JhLDbbcqZWQbofTWy8n9Tx0Up4aCYkT/DbGNkEE56v7ty+O9OzcfBoVR9N+CiduCax9kzlEhIbaa9MaZ8mKeaUA5xfwD2BdxCHUelw2eZGWRLWkih6LKTWV42E2ZVj1NmguKt4MWbMN7uUZ5pNmOhURX9vNXPQm32qpea9alplfKDBdItHU6lzB47vaQ8KSsX2ql1aX0Rmb/ucCVle9yrFrzDthq3vfo7TCYb5wCuSYUA5GOPMiTOLFvjx+njTYKiP5+FIfYiXODwz4KB3F5ACFWTQaO0Pvxv8LHe+/Pdkx9Q8Qm/vg1+3yrLTP5vv5mo2KyeAPYj/fuzIh6t0cSP08ebIEX/jC8W+YnDeIfna9QPupvWM551+BNlV3svV5Lp1DnhywhgCdK/1Sp+k9EVb4OqDZlE25Edg8YGLWTnRoQwgLImq9y78EbqOPTSSD9oL9ERQjQS77ib0a2UHepat0DAk2dua/EYW4N0G858K/TBQYkcPQGsR/obY8rg2U4RO7c1IIQFKbO+npSLSh82IIQi70HZKs+D9IlcvON3sWgL0vrejLGNm6iNzKkTcnhqGcAqpLsxpl+f7af044h+0K9k4vGNODs7nEdZt5mZJYRQlNZPyYWpA/Oyo+i/3U9pzSrfaWfli0zRobPoNQAZqEuT7saYPgGMMsLOfbpYiZl0+RQiH719Lvh9uVaeSNndjbxyLqB8lW8UkkaPVC40+9fQDUmNAHiAvWiEAM42QgA90Q/myut3PiyzE3XYUIvKDWuDUghgFOl2AfoNUQcF84NSIIJJZKM78BWR1GeN9AN/8rQZH4hWui75refmo4RCVpS7yYZJ485I07M2Q2l9b8bXeLLhNXmGElD/ixj6KsUM7Su0j6SUmkVUZt6ufIEJbcDJEcC5RlK0570UDURgJx43UmJen9rYEgL4lZEUjQ/oLAECMCcEvkK6uwGLCejCSDSmHhPASOUZgN8deEUQgKn0fwnq6Leg/RLa0zzSSooAdiD9+7QyeOQ8QH+yuTUWe4ig2T//a95Ws3IN/RGpZQChVXO2AQLg3nJzl5BZbCq6lZW+bEuTSWAE2bEB75UqAXATRM2XNoTPxWfbr6PMHrtGyaDUao+NZdyU2Z651wBbttmz8SrpbjsfLi5bBPMimTqN07T3ladp4cfyPQLcbOLsvJRZAtlBU1d5bpzCdyvwhSKPOXxRIOBqbqXmZyZDUiMACd5am6KcALrb347bnPM11Gw/5RZfA0AIvdaHit4Rl198TdtRlLVOe4+67pSkvQSQnYBkugEXxdOk26xR1v+uUYdbBrc9v9Rhb+rYQShKZ1MvFxr1DuDmInxM9iLKmo40an5irZOyLHjv5NlMcgQgv+xEQwTQ2zZZnzk8RFmfP673BiacHfgt0Ioywk0p647DbcU+pq7bn1m9S0EI4NmSbDEZAriG7N+R19OOOm9T5v76ucOaBZOh1R116hDvin4f/j1XyUXVK6m4RfpMKu5o1G58vMiC90DKii7H7yMggDlplc3/7EnKmn7uQh0NSIsmUB9D5F5GYCyWclehcyg7DTqrYGWUCR/zjUmyMNyWqgAoq95o6myLjPVKrO6KidzGi09JHuewEWX3BhS9O01Hdv3ORGFw3wFu/8b9A/lwzjTj4l3VJqBLg/mQTMhgOZh0N21o5XVZDPaz87HWEQ3ExFaUC21diHc/zsW7os7FRY1KU7op2SeAsakSgPzCw0l3d+Bm6wezvQkSvg82TfGdimMouzxkkSaKiY325Afm4t2vc/Hu05IBH3ta3xsCOCZVApCVY7PE2L/KcoEPu/CeOHvJeY+8f0mm1dtyocx51ycXL39GmTPyDeq6+zC+cbEIuE/qBDCEdHcH1loulF3QcWGeVQ3qRbnQaJVn8W7HXLyb3IV4145J320C2CpVApBVhVXvz0AAPbYmd5Ud8J2CE3ORlQ9dzd+gXCi7dITFu2Mpczh+0A3xrh3fscfnAIamugsgweaPqaS7cYOVrcbZDcTE1/K99gMoOzhTFMvn4t1fKHMydveWYqzyvSNyXvhWSZ0A+lOHzRME0JxyYWa+B89dc3dzOIUyp+Jn3RDvkNZXawNeKsiIk4z7E98JaHW5gLS+NQTwQonPIzkd4AaKzw2olQxCZ+LMkrQek77+bsCTKPEQ8elPFL8bUHu5gAnffAKYkHr9L27A0yktNyCQNqQMuyx1ApAM4BcoAYCEsi8hgDNT9QCEBLA3REAgQQI4NnUCkNRnS9LdHRgA6rgP4CcggCzWwf4ykBABiAi4feoEINuAgz1WBAEAqezAbJS6CCgEsBhlrii4AYFUPBmfO6yeOgFIsBsKdmAgJRcg34exZLAQJh0PYicASIgA+JapuTHtO9Kf2wKTBADE7AKcjKnfWQG9FGYgICECmICp35kAxoIAgIRMQP8DAbAzARwDAgASgGx3n5O6ByAkgH0gAgIJZABCAMfn474fCCCLrUAAQEIlwE9BAJ1roPUI5wGAdJqB7oISoDMBcKNKdAcGUrEBbwIRMAtxQXFzxHcJbkAgfhswj2/YgINgO/CLIAAgAQLgq9OWCBZAhIsnArMEAMRqA54fBPB1HWACCACIePWXcf0PKr7HMXkCuAxmICABArgbU76YAM6kzt2B0a4aiKHmbw9MQFdAAOwcshd6QlAvld02i8EFaN/mC69n8w1u4/Lx3g9TvzMTshnoTuroDuQjvLIKPQQBjZO+0RVs0xzuctgMGUC5H4BjUYetHX7r8KjDlwVqapgdIEMAWpHWd3UJK+9sne2wnbf1B/W/AQkUsSJfobx/Xju9RsVnrMvKBRACUPWkb3QNO2/xXUOZ13/1gonehpW/e0TQl4p90vM6bOzwXw4THT5GuQA0Ma0PxxCbevh265MdfuiwQInG1Rer/pwTQhFzDnLYPRdWnikxXxTdfgtCAL4qGQ+heBf++885XOSwp8NyJZpWX6z09YqGRYzK5gq+ZITvGrzZYWo3sgNkCEjruyPecc/KoxzWpa838+yDCa+zXFjEYZtcTHysm2IiyCC9LbpQvOP9+kkOZzn8O2X3ViCtN5Qd9Cv5MKvmYuKVDq82EBOhHcRdyxel9SwuX+0w0mG1koWmH1b5eLKD+Si7monFxLsbiImzgnIB+oGNWl4m/KyStH66w70OJzp8nzoO52CVT0A7KCKEZXMx8Q/UcUsRthptO++KxLsLHfbIvzfEu8SzAykXwuC/922Hwx1uITgTrTrvuMHMrQ5H5OJd2bduwyqPaFQusAjEzkQ+rPQodRzqCJs9lpULmLj1pPXtBeLdo7l4t02JeNeGtB7Rk3KhKB1cKRcTL+9CTJwF7WCOJ3xXaf1r+XfYP/8uSOsRtZULRdkBtzJjZ+IJuaj0UUl2gHKhGufdR/l7Pj4X7+YpEe+Q1iNqLxfKnIm75WLT01TsTJxRkh2kbMSZlb+Xon6Q/B7H5e91ENJ6hNZyociZOMThSOqZMzE2UmgvqeXLxDt+TzdR5ugcQl9vnwXnHcKkmLhwLiaOocyZ+AV175izRTIoen6f7Px/93OHRxx+Q9kNUQuVpPVY5REms4MyZyIfcx5B2THnV6hrZ6L2ngc9OTb7ci7e7euwcgmRwnmHSCY7CJ2J06lrZ2IrxcT2EvGuzHnHTsu/5WLpBpQd68Yqj4B2ULLKsVNtOHU4E9up9VuNPdmim52Ld+fn4t3SDSY8VnkEsgMq32rkv8fHnA/LxcTuOBOrKhd6kta/5XCjwyEOaxdMbF+8wyqPQPSyXOCeiSyWjXV4mIqdiTNKyoWeTnpJ62cU/P9ZxHyQMvFuc8pETqT1CESTywUW0Ro5E2d2US70xHnH4t2llIl3K/TwOREIRM3lgvRM7I4zsb3g74UT/gPKxLtRlIl3A0pWeaT1CESLy4UyMXFXysTEpxqk+754N9nhPIcdKbu2vWyVx4RHIBSXC2XORD4ee3O+uovz7nrKxLs1qbF4h4gk/gUm5LPDN2oSwQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/image/home/figma.png":
/*!*************************************!*\
  !*** ./public/image/home/figma.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/figma-b752710b99a03918d1d4ffd05e6834dc.png";

/***/ }),

/***/ "./public/image/home/git.png":
/*!***********************************!*\
  !*** ./public/image/home/git.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/git-d38cf56e2b8d9ce351929331846964a2.png";

/***/ }),

/***/ "./public/image/home/html.png":
/*!************************************!*\
  !*** ./public/image/home/html.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/html-ddd7dc29309efefeb59a4927008c5ac1.png";

/***/ }),

/***/ "./public/image/home/javascript.png":
/*!******************************************!*\
  !*** ./public/image/home/javascript.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/javascript-fd3b01d53b3fc7d7d35b02c0191dc3db.png";

/***/ }),

/***/ "./public/image/home/jest.png":
/*!************************************!*\
  !*** ./public/image/home/jest.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/jest-546fdb2228b4c0aad84e7c0486cf0aeb.png";

/***/ }),

/***/ "./public/image/home/jquery.png":
/*!**************************************!*\
  !*** ./public/image/home/jquery.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/jquery-037eb1f85e862145ba1dab88e28859a1.png";

/***/ }),

/***/ "./public/image/home/mysql.png":
/*!*************************************!*\
  !*** ./public/image/home/mysql.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mysql-c49e99a89a0ca2e456f4ce71f33659da.png";

/***/ }),

/***/ "./public/image/home/next.png":
/*!************************************!*\
  !*** ./public/image/home/next.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/next-a725f5cb51998c30c03a55a98aa003df.png";

/***/ }),

/***/ "./public/image/home/npm.png":
/*!***********************************!*\
  !*** ./public/image/home/npm.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAADuUlEQVR42u3cvUpbYRzH8dxVBVNQ6AsWzKBL0yGT6ahToU16E75sunsPgbRTRGhLmlKRQnRoEVwaBEu7FI55LiBD/uBp85zPB37jweOTx6+T1moAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFTAh6UHhZlVcwJgJgBmJgBmJgBmJgBmJgBmJgBmJgBmJgBmJgBmJgBmJgBmJgBmlnsAvu/tFpP377LeqLEeOpuLt93sz+a8vRU6m/Rc7mezSHc1HIBJv1/k7mvzeehsro6Osj+bcacTi2O3U/D/3FUBEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEACHKgACIAAOVQAEQAAcqgAIgADci98X4+Jnrzf3bgaDSgQgfZ+R88k9AH9/3YbOJS09G7qr4+BdPRkIwCzphyrynulgqhCA6LvmHoA/l5fhv5VPz4bu6uFh7K6+aAqAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAjAvw/A+M3r4qzVmnsCIAACkEEASg+OAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAACxAAD4/Wyu+bG6UtuHjR6H3/FhfDn/N9OyiBODbznapn8en1ZXQ2aTnynzPUWM9HID0bKl39WG99LsaDoDl8Q9BrNoTAAEwATABMAEwATABMAEwATABMAEwATABMAEwATABMAEwATABMAEwATABMAEwAbDFC8Arm7nryKGev2wXPw72S93w6ZPoJfA5V3g1Zpse0Fn2vwEAAQAEABAAQABAAAQABEAAQAAEAARAAEAABAAEQABAAAQABEAAIJMAHE93mvN8ygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkLs7KQ0b9X8vgbgAAAAASUVORK5CYII="

/***/ }),

/***/ "./public/image/home/php.png":
/*!***********************************!*\
  !*** ./public/image/home/php.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/php-979ab77fcbdc136e3f99d083ca3ae296.png";

/***/ }),

/***/ "./public/image/home/react.png":
/*!*************************************!*\
  !*** ./public/image/home/react.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/react-ed78a572ed82617b2da7a3bca1e86fea.png";

/***/ }),

/***/ "./public/image/home/symfony.png":
/*!***************************************!*\
  !*** ./public/image/home/symfony.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/symfony-54f53900604a9a3bf31bfcdaf4a0a3de.png";

/***/ }),

/***/ "./public/image/home/webpack.png":
/*!***************************************!*\
  !*** ./public/image/home/webpack.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/webpack-6a390d31a324ca1d54f0151323837edb.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSG9tZS9jb21wb25lbnQvTGVhcm5CeURvaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Ib21lL2NvbXBvbmVudC9Ta2lsbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9QdWJsaWMvUHVibGljQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2Nzcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3MvcHVibGljLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjEuZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmMi5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvY3NzLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9maWdtYS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvZ2l0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9odG1sLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qYXZhc2NyaXB0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qZXN0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9qcXVlcnkucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL215c3FsLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9ucG0ucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3BocC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvcmVhY3QucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3N5bWZvbnkucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3dlYnBhY2sucG5nIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiZGF5QmFja2dyb3VuZCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibmlnaHRCYWNrZ3JvdW5kIiwiYm9keSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiSG9tZSIsImNsYXNzZXMiLCJkcmF3ZXIiLCJzZXREcmF3ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwibW9kZSIsInNldE1vZGUiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJoYW5kbGVNb2RlIiwibWFyZ2luVG9wIiwiaGVpZ2h0IiwidGl0bGUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJMZWFybkJ5RG9pbmciLCJ0IiwicHJvcHMiLCJnaWYxIiwiZ2lmMiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwiU2tpbGwiLCJzdHlsZXMiLCJza2lsbEJsb2NrIiwiYmFsbCIsInJlYWN0SWNvbiIsIndpZHRoIiwiamVzdEljb24iLCJnaXRJY29uIiwibmV4dEljb24iLCJqYXZhc2NyaXB0SWNvbiIsImNzc0ljb24iLCJjb250ZW50IiwiQmFubmVyIiwiQ2Fyb3VzZWwiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiY291bnQiLCJpc0JveEhvdmVyIiwiaGFuZGxlVGltZXIiLCJiaW5kIiwidGltZXIiLCJoYW5kbGVCb3hIb3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiaW1nc3JjIiwicm90YXRlQnkiLCJsaXN0IiwiaSIsImxlbmd0aCIsInB1c2giLCJpbWdCb3giLCJpbWdCb3hOaWdodCIsInBhcnNlSW50IiwibWFyZ2luIiwiaW1nRGVzY3JpcHRpb24iLCJpbWdEZXNjcmlwdGlvbk5pZ2h0IiwibWFpbiIsIm92ZXJmbG93WSIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZHJhd2VyTGluayIsInRleHRBbGlnbiIsImRyYXdlckhlYWRlciIsImljb24iLCJEcmF3ZXIiLCJGb290ZXIiLCJmb290ZXJCbG9jayIsImZvb3RlckJsb2NrTmlnaHQiLCJsaW5rIiwibWFyZ2luTGVmdCIsIm5pZ2h0TGluayIsImxpbmtBbmNob3IiLCJuaWdodExpbmtBbmNob3IiLCJuaWdodEljb24iLCJmb3JtQ29udHJvbCIsImlucHV0TGFiZWwiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJpMThuIiwiY2hhbmdlTGFuZ3VhZ2UiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9wZW4iLCJsYWJlbCIsInBhdGhuYW1lIiwic2VsZWN0UmVxdWlyZWQiLCJTZWxlY3QiLCJvbk9wZW4iLCJvbkNsb3NlIiwib25DaGFuZ2UiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJvb3QiLCJpbnB1dCIsIlNlbGVjdDIiLCJuYW1lIiwiZm9ybUNvbnRyb2xQcm9wcyIsInNlbGVjdFByb3BzIiwicmVxdWlyZWQiLCJkaXNhYmxlZCIsInRhYkluZGV4IiwibmV3UHJvcHMiLCJzZWxlY3QiLCJzZWxlY3RlZCIsImNoZWNrRXF1YWwiLCJhIiwiYiIsInVuZGVmaW5lZCIsInRvU3RyaW5nIiwiZmlsdGVycyIsImZpbHRlciIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImFycmF5Iiwib2JqZWN0IiwiaW5wdXRMYWJlbFByb3BzIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJ6aEhhbnQiLCJmciIsImVzIiwibG9jYWxlUGF0aCIsInJlc29sdmUiLCJIb21lUGFnZSIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vUHVibGljL0hlYWRlcidcclxuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9QdWJsaWMvQmFubmVyJ1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4uL1B1YmxpYy9EcmF3ZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vUHVibGljL0Zvb3RlcidcclxuaW1wb3J0IFNraWxsIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L1NraWxsJ1xyXG5pbXBvcnQgTGVhcm5CeURvaW5nIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L0xlYXJuQnlEb2luZydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgZGF5QmFja2dyb3VuZDp7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOicjRkZGRkZGJyxcclxuICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgIH0sXHJcbiAgICBuaWdodEJhY2tncm91bmQ6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonYmxhY2snLFxyXG4gICAgICAgIGNvbG9yOicjRkZGRkZGJ1xyXG4gICAgfSxcclxuICAgIGJvZHk6e1xyXG4gICAgICAgIHBhZGRpbmdMZWZ0Oic4JScsIFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDonOCUnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtkcmF3ZXIsIHNldERyYXdlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgWyBtb2RlLCBzZXRNb2RlIF0gPSBSZWFjdC51c2VTdGF0ZSgnZGF5Jyk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW9kZSA9ICgpID0+IHtcclxuICAgICAgICBpZihtb2RlID09PSAnZGF5Jykge1xyXG4gICAgICAgICAgc2V0TW9kZSgnbmlnaHQnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgc2V0TW9kZSgnZGF5JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gZmFsc2UgJiZcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGF5QmFja2dyb3VuZDpjbGFzc2VzLm5pZ2h0QmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlck9wZW49e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW9kZT17aGFuZGxlTW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonMTIlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9IHN0eWxlPXt7bWFyZ2luVG9wOic1JSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExlYXJuQnlEb2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9IHN0eWxlPXt7bWFyZ2luVG9wOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7ZHJhd2VyID09IHRydWUgJiZcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OicxMDB2aCcsIGJhY2tncm91bmRDb2xvcjonIzFmMWYxZid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlckNsb3NlPXtoYW5kbGVEcmF3ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi8uLi9QdWJsaWMvQ2Fyb3VzZWwnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vY3NzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IGdpZjEgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWYxLmdpZidcclxuaW1wb3J0IGdpZjIgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWYyLmdpZidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IExlYXJuQnlEb2luZyA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3QoJ3RpdGxlJyl9PC9wPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nc3JjPXtbZ2lmMSwgZ2lmMl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzcmM9e1tnaWYxLCBnaWYyXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+PC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuTGVhcm5CeURvaW5nLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignbGVhcm5CeURvaW5nJykoTGVhcm5CeURvaW5nKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL2Nzcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCByZWFjdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvcmVhY3QucG5nJ1xyXG5pbXBvcnQgamVzdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvamVzdC5wbmcnXHJcbmltcG9ydCBnaXRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2dpdC5wbmcnXHJcbmltcG9ydCBuZXh0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9uZXh0LnBuZydcclxuaW1wb3J0IGh0bWxJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2h0bWwucG5nJ1xyXG5pbXBvcnQgamF2YXNjcmlwdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC5wbmcnXHJcbmltcG9ydCBjc3NJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy5wbmcnXHJcbmltcG9ydCBucG1JY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL25wbS5wbmcnXHJcbmltcG9ydCBteXNxbEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbXlzcWwucG5nJ1xyXG5pbXBvcnQgZmlnbWFJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2ZpZ21hLnBuZydcclxuaW1wb3J0IHdlYnBhY2tJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3dlYnBhY2sucG5nJ1xyXG5pbXBvcnQgc3ltZm9ueUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS5wbmcnXHJcbmltcG9ydCBwaHBJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3BocC5wbmcnXHJcbmltcG9ydCBqcXVlcnlJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2pxdWVyeS5wbmcnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8gU2xhYicsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBTa2lsbCA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3QoJ3RpdGxlJyl9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsQmxvY2t9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3toZWlnaHQ6JzVyZW0nfX0gc3BhY2luZz17NH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlYWN0SWNvbn0gc3R5bGU9e3t3aWR0aDonODAlJywgcGFkZGluZ0xlZnQ6JzEwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOic3MCUnLCBwYWRkaW5nTGVmdDonMTUlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2l0SWNvbn0gc3R5bGU9e3t3aWR0aDonODAlJywgcGFkZGluZ0xlZnQ6JzEwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25leHRJY29ufSBzdHlsZT17e3dpZHRoOic4MCUnLCBwYWRkaW5nTGVmdDonMTAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amF2YXNjcmlwdEljb259IHN0eWxlPXt7d2lkdGg6JzgwJScsIHBhZGRpbmdMZWZ0OicxMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjc3NJY29ufSBzdHlsZT17e3dpZHRoOic4MCUnLCBwYWRkaW5nTGVmdDonMTAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgey8qIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2hlaWdodDonNXJlbScsIG1hcmdpblRvcDonMXJlbSd9fSBzcGFjaW5nPXs0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGhwSWNvbn0gc3R5bGU9e3t3aWR0aDonODAlJywgcGFkZGluZ0xlZnQ6JzEwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbUljb259IHN0eWxlPXt7d2lkdGg6JzgwJScsIHBhZGRpbmdMZWZ0OicxMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtteXNxbEljb259IHN0eWxlPXt7d2lkdGg6JzgwJScsIHBhZGRpbmdMZWZ0OicxMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmaWdtYUljb259IHN0eWxlPXt7d2lkdGg6JzgwJScsIHBhZGRpbmdMZWZ0OicxMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt3ZWJwYWNrSWNvbn0gc3R5bGU9e3t3aWR0aDonODAlJywgcGFkZGluZ0xlZnQ6JzEwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3N5bWZvbnlJY29ufSBzdHlsZT17e3dpZHRoOic4MCUnLCBwYWRkaW5nTGVmdDonMTAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuU2tpbGwucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdza2lsbCcpKFNraWxsKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAncmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGNvbnRlbnQ6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBCYW5uZXIgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29udGV4dDEnKX08YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZXh0MicpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGVTcGVlZD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVTcGVlZD17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9eycyNHB4J31cclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PXsnUm9ib3RvJ31cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17bW9kZT09J2RheSc/J2JsYWNrJzond2hpdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9eydUeXBld3JpdGVyJ31cclxuICAgICAgICAgICAgICAgICAgICBkYXRhVGV4dD17WyB0KCdjb250ZXh0MScpLCB0KCdjb250ZXh0MicpXX1cclxuICAgICAgICAgICAgICAgIC8+ICAgKi99XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuQmFubmVyLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignYmFubmVyJykoQmFubmVyKSAgICAgICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvcHVibGljLm1vZHVsZS5jc3MnO1xyXG5cclxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgIGlzQm94SG92ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVRpbWVyID0gdGhpcy5oYW5kbGVUaW1lci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnRpbWVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCb3hIb3ZlciA9IHRoaXMuaGFuZGxlQm94SG92ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhhbmRsZVRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUaW1lcigpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKT0+e3RoaXMudGltZXIoKTt9LDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pih7XHJcbiAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgKyAxXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJveEhvdmVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQm94SG92ZXI6dHJ1ZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMubW9kZSwgOTk5KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQm94SG92ZXI6ZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGltZ3NyYyxcclxuICAgICAgICAgICAgcm90YXRlQnksXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgIG1vZGVcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgbGlzdCA9IFtdO1xyXG5cclxuICAgICAgICBpZighaW1nc3JjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpZighcm90YXRlQnkpIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGU9PSdkYXknP3N0eWxlcy5pbWdCb3g6c3R5bGVzLmltZ0JveE5pZ2h0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVCb3hIb3Zlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KCB0aGlzLnN0YXRlLmNvdW50IC8gMykgJSBpbWdzcmMubGVuZ3RoID09PSBpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQm94SG92ZXI9PWZhbHNlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nc3JjW2ldfSBzdHlsZT17e21hcmdpbjogJzAgYXV0bycsIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzQm94SG92ZXI9PXRydWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09J2RheSc/c3R5bGVzLmltZ0Rlc2NyaXB0aW9uOnN0eWxlcy5pbWdEZXNjcmlwdGlvbk5pZ2h0fT5oZWxsbzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOicnfSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBpbWdzcmMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nQm94fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVCb3hIb3Zlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KCB0aGlzLnN0YXRlLmNvdW50IC8gcm90YXRlQnkpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOndpZHRoP3dpZHRoOic2MDBweCcsIGhlaWdodDpoZWlnaHQ/aGVpZ2h0Oic1MDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3NyY1tpXX0gc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8nLCB3aWR0aDonMTAwJScsIGhlaWdodDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbWFpbjoge1xyXG4gICAgICAgIGhlaWdodDonMTAwdmgnLFxyXG4gICAgICAgIG92ZXJmbG93WTonaGlkZGVuJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6JyMxZjFmMWYnLFxyXG4gICAgICAgIHBhZGRpbmdMZWZ0Oic4JScsIFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDonOCUnXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250RmFtaWx5OidCZWJhcyBOZXVlICcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonI0NBQ0FDQScsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJMaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICB0ZXh0QWxpZ246J2xlZnQnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyNDQUNBQ0EnLFxyXG4gICAgICAgIGZvbnRTaXplOicyMnB4JyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VySGVhZGVyOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiczcmVtJ1xyXG4gICAgfSxcclxuICAgIGljb246IHtcclxuICAgICAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgRHJhd2VyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2VcclxuICAgIH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV29ya1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdzXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BYm91dFwiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Fib3V0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScuL1NhbGllQ2hpZW5fUmVzdW1lLnBkZicgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXInIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3Jlc3VtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5EcmF3ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShEcmF3ZXIpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL3B1YmxpYy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHt0LCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSAgPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17bW9kZT09J2RheSc/c3R5bGVzLmZvb3RlckJsb2NrOnN0eWxlcy5mb290ZXJCbG9ja05pZ2h0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb250YWN0VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnZm9sbG93VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnY29weXJpZ2h0Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2NvcHlyaWdodERlc2NyaXB0aW9uJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH1cclxuICBcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Zvb3RlcicpKEZvb3RlcilcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCB7U2VsZWN0LCBTZWxlY3QyfSBmcm9tICcuL1B1YmxpY0NvbXBvbmVudCc7XHJcbmltcG9ydCBCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZCc7XHJcbmltcG9ydCBXYlN1bm55T3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWQnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRGYW1pbHk6J0JlYmFzIE5ldWUgJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIGZvbnRTaXplOicycmVtJyxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICBmb250U2l6ZTonMXJlbScsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmlnaHRMaW5rOiB7XHJcbiAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgY29sb3I6JyNGRkZGRkYnLFxyXG4gICAgZm9udFNpemU6JzFyZW0nLFxyXG4gICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgIGNvbG9yOicjQkRCREJEJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGlua0FuY2hvcjoge1xyXG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgIGNvbG9yOidibGFjaycsXHJcbiAgICBmb250U2l6ZTonMXJlbSdcclxuICB9LFxyXG4gIG5pZ2h0TGlua0FuY2hvcjoge1xyXG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgIGNvbG9yOicjQkRCREJEJyxcclxuICAgIGZvbnRTaXplOicxcmVtJ1xyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6JyMxRjFGMUYnXHJcbiAgICB9XHJcbiAgfSxcclxuICBuaWdodEljb246e1xyXG4gICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICBjb2xvcjonI0ZGRkZGRicsXHJcbiAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgY29sb3I6JyNCREJEQkQnXHJcbiAgICB9XHJcbiAgfSxcclxuICBmb3JtQ29udHJvbDoge1xyXG4gICAgbWFyZ2luOiAnMC41cmVtJyxcclxuICAgIHdpZHRoOic2cmVtJyxcclxuICB9LFxyXG4gIGlucHV0TGFiZWw6IHtcclxuICAgIGZvbnRTaXplOlwiMTdweFwiLFxyXG4gICAgZm9udEZhbWlseTpcIuW+rui7n+ato+m7kemrlFwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1SZXZlcnNlXCJcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFsgbGFuZ3VhZ2UsIHNldExhbmd1YWdlIF0gPSBSZWFjdC51c2VTdGF0ZSgnZW4nKTtcclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHNldExhbmd1YWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgaGFuZGxlRHJhd2VyT3BlbixcclxuICAgICAgaGFuZGxlTW9kZSxcclxuICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBtZD17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBXRUlBTiBXQU5HXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHt0KCd0aXRsZScpfSAqL31cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjNyZW0nLCBwYWRkaW5nTGVmdDonNiUnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QyXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhbmd1YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOidlbicsbGFiZWw6XCJFbmdsaXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonemhIYW50JyxsYWJlbDpcIuS4reaWh1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuM3JlbScsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2RlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge21vZGUgPT09ICdkYXknP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEJyaWdodG5lc3MyT3V0bGluZWRJY29uIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgOjxXYlN1bm55T3V0bGluZWRJY29uIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nZGF5JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xb3JrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV29yayc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV29ya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dvcmsnP2NsYXNzZXMubmlnaHRMaW5rQW5jaG9yOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3b3JrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJywgbWFyZ2luTGVmdDonLTFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J2RheScmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV3JpdGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xcml0aW5ncyc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nbmlnaHQnJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dyaXRpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV3JpdGluZ3MnP2NsYXNzZXMubmlnaHRMaW5rQW5jaG9yOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3cml0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbScsIG1hcmdpbkxlZnQ6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nZGF5JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9BYm91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL0Fib3V0Jz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdhYm91dCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vQWJvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9BYm91dCc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2Fib3V0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJywgcGFkZGluZ0xlZnQ6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1Jlc3VtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvUmVzdW1lJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ3Jlc3VtZScpfVxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9TYW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1NhbXBsZSc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNhbXBsZVxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbGdVcD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpLGZvbnRTaXplOicxLjZyZW0nfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vZGV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bW9kZSA9PT0gJ2RheSc/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnJpZ2h0bmVzczJPdXRsaW5lZEljb24gZm9udFNpemU9J2luaGVyaXQnLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDo8V2JTdW5ueU91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25PcGVuPXtoYW5kbGVPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6J2VuJyxsYWJlbDpcIkVuZ2xpc2hcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOid6aEhhbnQnLGxhYmVsOlwi5Lit5paHXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9e21vZGU9PSdkYXknP2NsYXNzZXMuaWNvbjpjbGFzc2VzLm5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICB7LyogPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShIZWFkZXIpIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFNlbGVjdCBhcyBNYXRlcmlhbFNlbGVjdCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2wsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFRyYW5zbGF0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGlucHV0TGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTpcIjFyZW1cIixcclxuICAgICAgICBmb250RmFtaWx5Olwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3ctUmV2ZXJzZVwiXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0UmVxdWlyZWQ6e1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0KHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgb25PcGVuLFxyXG4gICAgICAgIG9uQ2xvc2UsXHJcbiAgICAgICAgb25DaGFuZ2UsXHJcbiAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgb3BlbixcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxNYXRlcmlhbFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tY29udHJvbGxlZC1vcGVuLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRlbW8tY29udHJvbGxlZC1vcGVuLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICAgICAgICAgIG9uT3Blbj17b25PcGVufVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZVxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIHJlbmRlclZhbHVlPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VHJhbnNsYXRlSWNvbiBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fS8+XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0saW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtLnByb3BzID8/IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWU/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7cm9vdDpjbGFzc2VzLmlucHV0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWw/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvTWF0ZXJpYWxTZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD4gICAgICAgICAgICBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3QyKHByb3BzKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBmb3JtQ29udHJvbFByb3BzLFxyXG4gICAgICAgIHNlbGVjdFByb3BzLFxyXG4gICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICAgIGRpc2FibGVkID1mYWxzZSxcclxuICAgICAgICB0YWJJbmRleD0wLFxyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBsZXQgbmV3UHJvcHMgPSB7XHJcbiAgICAgICAgLi4ucHJvcHNcclxuICAgIH07XHJcbiAgICBkZWxldGUgbmV3UHJvcHNbXCJoZWxwZXJUZXh0XCJdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzdHlsZT17e21hcmdpblRvcDonMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVJY29uLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHsuLi5mb3JtQ29udHJvbFByb3BzfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290OmNsYXNzZXMuaW5wdXRMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6Y2xhc3Nlcy5zZWxlY3RSZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8TWF0ZXJpYWxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB7Li4uc2VsZWN0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmVcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IHtzZWxlY3Q6IGNsYXNzZXMuaW5wdXR9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0RGlzcGxheVByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4OnRhYkluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWU9PT1udWxsP1wiXCI6dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFbXB0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJWYWx1ZT17c2VsZWN0ZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja0VxdWFsKGEsYil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYSA9PT0gbnVsbCB8fCBhPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYiA9PT0gbnVsbCB8fCBiID09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gYS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYiA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9IGIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSA9PSBiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVycz0gaXRlbXMuZmlsdGVyKGl0ZW09PiBjaGVja0VxdWFsKGl0ZW0udmFsdWUsc2VsZWN0ZWQpICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyc1swXT9maWx0ZXJzWzBdW1wibGFiZWxcIl06XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5uZXdQcm9wc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0saW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pdGVtLnByb3BzID8/IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZT8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7cm9vdDpjbGFzc2VzLmlucHV0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbD8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvTWF0ZXJpYWxTZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5TZWxlY3QucHJvcFR5cGVzID0ge1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICBdKS5pc1JlcXVpcmVkLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRMYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcblNlbGVjdDIucHJvcFR5cGVzID0ge1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBQcm9wVHlwZXMubnVtYmVyXHJcbiAgICBdKS5pc1JlcXVpcmVkLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBmb3JtQ29udHJvbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRMYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgc2VsZWN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFsbFwiOiBcIkhvbWVfYmFsbF9fMk1kVWNcIixcblx0XCJib3VuY2VcIjogXCJIb21lX2JvdW5jZV9fMWE1aV9cIixcblx0XCJza2lsbEJsb2NrXCI6IFwiSG9tZV9za2lsbEJsb2NrX18xVG1uaFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uMlwiOiBcIkhlYWRlcl9idXR0b24yX193RjdYR1wiLFxuXHRcImJvdW5jZVwiOiBcIkhlYWRlcl9ib3VuY2VfXzI0dFU5XCIsXG5cdFwiYmFsbFwiOiBcIkhlYWRlcl9iYWxsX18zcFJpN1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyQmxvY2tcIjogXCJwdWJsaWNfZm9vdGVyQmxvY2tfX1h1Q3ItXCIsXG5cdFwiZm9vdGVyQmxvY2tOaWdodFwiOiBcInB1YmxpY19mb290ZXJCbG9ja05pZ2h0X18zbWk3YlwiLFxuXHRcImltZ0JveFwiOiBcInB1YmxpY19pbWdCb3hfX2sxMGdIXCIsXG5cdFwiaW1nQm94TmlnaHRcIjogXCJwdWJsaWNfaW1nQm94TmlnaHRfXzNwenJIXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25cIjogXCJwdWJsaWNfaW1nRGVzY3JpcHRpb25fXzJHQkRKXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25OaWdodFwiOiBcInB1YmxpY19pbWdEZXNjcmlwdGlvbk5pZ2h0X18zQ1hKRVwiXG59O1xuIiwiXHJcbmNvbnN0IE5leHRJMThOZXh0ID0gcmVxdWlyZSgnbmV4dC1pMThuZXh0JykuZGVmYXVsdFxyXG5jb25zdCBsb2NhbGVTdWJwYXRocyA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdCgpLnB1YmxpY1J1bnRpbWVDb25maWdcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gIGRlZmF1bHRMYW5ndWFnZTonZW4nLFxyXG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ3poSGFudCcsICdmcicsICdlcyddLFxyXG4gIGxvY2FsZVN1YnBhdGhzOntcclxuICAgIHpoSGFudDonY24nLFxyXG4gICAgZnI6ICdmcicsXHJcbiAgICBlczogJ2VzJ1xyXG4gIH0sXHJcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXHJcbn0pXHJcbi8vIGV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9IG5leHRJMThOZXh0LnVzZVRyYW5zbGF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQge0hvbWV9IGZyb20gJy4uL2NvbXBvbmVudC9Ib21lL0hvbWUnXHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICh7IHQgfSkgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIb21lLz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnaGVhZGVyJywgJ2Jhbm5lcicsICdmb290ZXInLCAnc2tpbGwnLCAnbGVhcm5CeURvaW5nJ10sXHJcbiAgfSlcclxuICBcclxuSG9tZVBhZ2UucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShIb21lUGFnZSkgIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjEtZmYyNjBlMmU1MWY5ODkyYTRhZTcyMTBhYmQ4YjRjMDAuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjItMjMxNTA1ZGQ3MTEwNDY4MjhjYTJkNjNjYjIxMTg4ZjIuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUUFBQUFFQUNBWUFBQUJjY3FobUFBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFjL0VsRVFWUjQydTFkQ2RoZTA3VmUrWlBRbUdLZVU2bDV1SWhxVkZHMFlyN21JVlJkR2tTTEdtcTRHdVVHTlZSU0xxbzBXbHJDTlZQamd5aENyMWswTlY2em1CTmpqQmwrM2V1ZXM1NS8vOXM1M3ova25POWJhKzkzUGMvNy9EVTB6bi9PM3U5ZTY5M3ZYcHRvem1PNncxY083ZmxQQUFDYWg1YkhjL21Eek1iSEFJRDBDT0J2K1lQTVFoWUFBT2tSd0dYNWc4d0VBUUJBZWdSd1J2NGdNL0F4QUNBOUFqalNJd0JrQUFDUUdBSHNBdzBBQU5JbGdHMjhYUUFRQUFBa1JnQkRQUjhBQ0FBQUVpT0F3ZmtPQU14QUFKQWdBU3pzOEI3TVFBQ1FKZ0hNNC9BOENBQUEwaVNBUGc0UFlpY0FBTklrQUk1YlBUY2dQZ29BSkVZQTQyRUhCb0IwQ2VBc0VBQUFwRXNBeDRJQUFDQmRBaGdCRVJBQTBpV0FiVUVBQUpBdUFRd2xuQWNBZ0dRSllHWFlnUUVnWFFKWTJtRWEzSUFBa0NZQnpPL3dFZ2dBQU5Ja0FJNUpuaENJRHdNQWlSQkFXLzd6SGhBQUFLUkhBSDN6bjFjUnpnTUFRTElFY0M0SUFBRFNKWURqWVFjR2dIUUpZQ1F5QUFCSWx3QjJSQVlBQU9udUFtd01PekFBcEVzQWF6bDhDVHN3QU5TT2R1OW55Nk5QL25PUXcvdHdBd0pBVTBsQVRjem44RG9JQUFDYU52bG5rYko0Qm01QUFHZ2FBVXpUTXZHbERKZ0lBZ0NBMmlFWjl2UGFDT0FhYkFVQ1FPMnJ2eXl3ajJnaEFOa0orRDBJQUFCcWg1anQ3dEJDQUdJR0dwMC8yQXg4SkFDb0xRTVFBcmhDQ3dIMHkzOGU3QkVBTWdBQXFKY0F6dGFXQVF6M1JFQVFBQURVU3dDanRHa0F3N3lIQkFFQVFMMEVzTDgyQWhqaUtaUWdBQUNvZHhkZ08yM2JnTXM2ZkFvQ0FJQmFDVUI4QU4vVDVnUmtPL0M3c0FNRFFPMHVRRDU0dDdvMkF1anY4RFFJQUFCcWR3Rk95ek51ZFhFZmRnSUFvSFlDZUpteSt6alVoT2dBMXl0M0E3WUh0UlFBQ05vTjdHS0pBRGhaMjhvdlhvQUxEYmdCa1prQVZzZUdFTUM5MmdoQTNJQ25LWGNEK2l6L0RtVTlETjdJZjZZRytiM2ZkSmlhT0ZpOC90QkFCaUFlZ0t1MFpnQkhHQ29CWkJ2bEc3bUFtU3Jtem5kd1VzWEFmQno4aUhUM3RmUk5RT2RxSllDOWxJdUF2cEZpV0tCZklOS08vUXlNWFNHQTQ3VzlQSEVEYnFHY1JmMDBhcytnZkVHa0dmM3puOGNwTDE5OWJXMmtWZ0pZVzNrZDViUG9ZVUgyZ2tnelpBRTRVN21BN1kvZG5iVzlSRW1qbHlQZDdjSDlsM2dxQ0FEaExWNlhHTkN2NUxrMjFVb0FpenE4VGJyZGdFSUFmd3dHQUNMTmtMRjdxeEVCbXpPVXRiUyt4QUhVMFIxWU93SGNCQUpBZVBFUTZXNXFLL1BwSTFKcUE1WjRRTG1hS2gvNGdZQzhFR25yQUM4cFg3amt1VGpEbmtkekxYVnJzTkpxSllDbkhPYkMyRWY2VDVrWDREMGpCUENzMXBmWjE0aVlJaTl5aXNNaXlBSkFBQzZXZC9pRWROdUJaZUdhcUowQXhoZ1JVejUyR0F3Q1NEb2thLzBPNmU1bTVlOWVYYXQxekFvQkhFVjJ0bFBXaEJDWWRNaVkxVzVnOHduZ2d1RFoxYjNNdlEwUWdMRDlKaUFBRUlDTFBReU1XVEVvbmV3Smx5cGY1cFprNXp6QTdsclpGTkdVS0xyVFFyc0w4RkN0QkNDcjZGQUQ2WlFRd0NFZ0FHUUFMazQwbExYdXFYWE1DZ0dzNHZDNUVVSGxKQkFBUkVEU2Y2K2xyMXR0cnJWc0ZWVnlTZExkSGRnbmdEOW9UYWNRVFNVQS8yWnJ6WjJLK09jUTdib1YyNEZmSkJ0MjRHdVJBU1Fkc21oTkpOMDJZQ0dBTHh5V0NaNWRaVHloK0lYNjlkVGRtQU1JRjArU2pYTUEzTVp1UWMwRUlHbkpCQ01Fd0VRMWx3VkdSZFFXOHpxOG9qeGpsZkhLOTI3TWJhR211a3g1VFNVZitqVlMxbDhkMGZUMGYybktMdHJRckZrSkFkeXYvYVZLTFgwVzJiQUQ4MTJHMzh5ZmVlNDhHMGdaL1NtZEExSXlWbGNqM2J0Vy9rTDZWKzBDb0x6VVh4cFJWUm5QVVhiUkF0ZUIvMHdjLzZEc1dPd3c3UU50RGxkK1gvUmRqL1Q3VnNTZ2RISCt6UDIwRTRCMFdOWGNZRkZ6Ly9kV0k4WjJhVzNCNzdNUVpRN0FaOG5PT1lEZldDR0FIVWkvSGRpL0ltd1c4UCtRZm80eGRVdnFHd2k4SytRVDZlMENUVWk3RGZnWDJvbFpCc3ozc2NxYXV4TEx2M3VleTZJQmhuZEgraFJNRXI0STVsS3YzcGNTZGJieXNlcUxnRCsyUWdCclVHWmF3RjE4TmlhK3JJTCtZWmkxREdZQjRjVG5aOS9KNGE0Q1VTMjhFRlR6TnhLUzJsejdONUhWWWltSER3eWtWNmxQZWxsZGZMR1cvL29HaDBHR01vQ3d2bWV6ekNHNXNCbW0waFp1QVM0amdDRldTSm0zMU40QUFhaWUrRE9EYi9PV3cxaUgxUXNJM1ZKOWYzcFEzODhLdENoclphazhLNWN1eTFzcXl5YVRibnRsYWxkZXkwb1NiczArN3ZDelhCWDNWMVN0ZzZ3bjliM2xpUjhLbEV6UWkxc2lnTHRBQUdyVGZQN2YxenRzVmJDaXRobVorRkxmVDJoUTM4Y2dRdnZkZ0FkWTJXL2x1SUowdXdGVFRQTTVOZjV0a09ZWHBkS3gxUGN4akR0WlFCK3l0Ty9LY1M3cGJyT1VVcHIvbU1OUEM5TDh2c3JIa1U5S0srYjc5MjhGazhPaXNOY2JHL0R0VmdSQWNTbWRRUHJkZ0RHbitmemVyNk9zUjZQVk5GL3ErL0dSMXZjOUlZQkx0SHNBUWdJNENDVkF5OVI4dnB0aE5VTnBmbEY5djNPRCtqNjJOTDg3THNBeFZnaEFIbkEzMHUyeFJwcXZzNzVuZi82VEVlemZWMDBBUjFzaEFFa3ZOMDN3ZzdVaXplZTJacHNiU3ZNYjFmY3g3ZDlYWFFMc2JZMEExaUFiVmt1dGs3NVJtdittd3htVWRXQzJtdVozWi8rK1BmRUZ4RDhIc0xVVkF2QzdBMzhHQXVqVnhDOUw4eDkxT0pBNitzSlpTUE5SMzFlVEFhNXZaUmRBQ0dBQmdoMjRxalQvR29OcGZzeisvRlowcmxyVkNnRkljR3NwMklGN3IrYS9rZGZGbHRMOG91ZGJBZlg5SExzQTM4MHphaUpqeDdQdklkMk5RVnBkM3hlbCtZODRqSFFZYURqTlIzMWZMUUc4VE1xN0FaY0pnZGVSN3Q2QVd0Sjg3c1J6TlhYMDRyT1M1dmYwL0QzcSs5N1pnSjhnWXlGbW9IR1V0aGtvMWpTL3FMOGU2dnY2Q09BT2ErbS9ESTVmSjBnQTNVbnorV0RIL3NiUy9MTDkrOWpPMzJzMEFZMjNKZ0RLUUQ0MElRMGdyR3VMMHZ5ckhEWXp0dG9YMWZmcm83NXZLZ0djR2N3ck13UXdQQUVDNkU2YWY1ckR5c1luUHE4K096cmMyWTM2SGhPNEdzaEoybU9EMHRxTUNQaURpQW1nSzIvK3d3NEhVT2FIc0pUbWwvbnpKNk8rYjFrR3NKOVZBbGd6c2dIU2xaclBuWkN2ekluUDBtcGY5SXdyNUpuTFc2anZXOTRNZEFkckpZQU1wTUVPMDhtK0hiaXJOSDhLWmJmcHJHUjA0dmVrdnNmRWIvNlkyOGlhQ0NpRGZsR0gxOG11SGJpck5QK2hQRDJiMzFpYVg1U3g3ZFNndnNlaHJ0YU5QUmFQVjdOR0FCTHNYbnFLYk5tQlkwN3p3MkRpNHNZdDJML1hTd0NjUVM4V0xLeW1zb0FIakJCQVYybithdzZuNUh2ZjFpZStyQ1Fib0w1WGJ3UG1YYVJ2a01HUVFYWUw2YllEZDJYYWVkQmhSRUdhYi9uaVRDR3NoUjNlQ1FZY0pyMCtHN0RKc1NaMThFWEtDZUNyZ29IUEF0Z1ZrYVQ1WGNVOTFObXRtUkswRXA3ZkNPUXVxd05MQ09BMDBtMEg5Z2VEcVBrckpqRHhaVS81ZDBZSXVtN1MxK29CdU5LcUFDZ0VjTGdCQXVDZkgrZDczN0drK2QzOVBudDdhdlBNaEtCOVowTmNnT2NGaEcxdWdPMXBRQU9RNXhzY1BIc0tNUzlsdDg3eWRlQnJSNDUxS1BOcTdLTmM2UFF6Z05IV0NXQUwwbTBIOWdmQmVsYlRMVVNQWWpNRFkxSTBnSU9zTGtveWlZWXFyN2w4eStVMmlSSkFXeUtZSy85OTl6V1FsY3FZM05VcUFZaG94aW5YSjZUWERlaXo3YjRKbGdBcGhYelhvd3dKMHh0YlhaUjhPL0E3eWdsQVZvSmpRQUJKRU1BWUk4STB3NndObUR6eDRtWGxCQ0NLNnhpcmdndWlSMlhwWDR3STA1dzVMeE1zcUNiamNkSnRCeFlDdUJnWlFCSUVjSnR5QXBDRmt1M25DMW9tZ0Q3QkM1OUZ1a3VBRzJOZ1cwU1g0L0ZoNWVOUm5tdXlKMXlhWnR4TEZOZGMvZ3YvTytaSTlNRVQ2aG5sR2FrODE3MnhpQzVqbFlzdWtuSTlhNTF4RVYydS9vdVE3aXZyL0l6MEJ1c2xxWWhweHdTMXRsWUNtRW9kUGZ4UUJzUkpBTjhpM1YycWZBSVlGd3NCakNBYjJ5NThDbkFRQ0NCcUFYQXRzbU1EUHRrNkFjaURiKyt0dEpvSmdKOXZuV0RBSU9JaWdFMUl2dzFZQ09EbjFnbWdxUE9NZHVmVk1CQkFsQ0dUYURleWN3NWdkK3NFSUdrMDMzMzNwWElDa0plK2gvV1hqbWhJQUFjYklvQk5yUzlHdnZMNkVkbHdBeDRjNkJlSXVBamdSTEpqQXg0U1N6YktUUTFmVlV3QS9nN0ZhR1FBVVlZUSt2bGtZMHVhRjh4dkJRdXBhUUhtTWJMaEJqd1BHa0RVR2NEVlpNTUcvSHFlT1VkQkFCeDNLSzY5ZkFLNENnUVFkZHlsWEFPUUJmS1pXTXBRbVVpWEsyZGVlZkgzeE1TNmlLK1ZBWThiSVlBSFl4bUh3bUxuZUxXMjVoZi9sRWRjUUd0UTlhQ1hQNC92ZHRCOE5OMGZoemZGa29rS0FSeHZSSHlaZ29VeXVoQUNXSnc2ZHFPMGRnT1dEUG1Qc1JDQWlDOEhrdjc5VjdFRHMxREVKeGpIQTAwRk4rcTRqanI2NExWVlRBQXJrdTRia0h3dDZ0UmcvcGduZ0oxSXR4MFkxMkxwd2FpS0I3OFF5ZmRJLzcySHNoMTlXQ3dFSUM5L1ErVXZQN3dZRkdnK3hDMjZWOFdEMzlLWkZNa0E5b3lOQUZiR1NndFE5MXBoYjFWeENTQ1RhRDhEWmFpOGd5MWpJUUNwdjVZMklNQUFPZ2IvdWhVVGdBalIvNmxjaVBaUHBRNk5SUVFVQWhqbzhJcnlMUmlnOVlOL0ZuVmN6bG8xQVl3bEc0MXB1QnZ3Q3JINEFQeVBNRWw1Q2dhMGZ2QlBjMWlxNHNFdlJQSm5JMXZSM0pscW9aZ0lRSDZKdTBsM00wYWc5WVAvSmNvTU8xVU9mdmx6YmpaQ0FDOVJaSWZSNUplNVZ2a0hBRnJ2Z0p0VVk5MzdvUElGU0o3cklZb3NoQURPQndFQTFOZ0JWOWRaREM1QlgxU3NRZmxiZ0RmSFZ2OExBWXdHQVFCZEVNQjFOVzEvRGN6MUJRc0VjSEVzT3dBaEFSd0VBZ0M2SUlBTEtpWUF2eDM0SjhxM29XVjM0b3hZUEFBaEFleEN1bzhFQTYxZi9VNnFlUERMS3JxdVYyTnI5UUFJQVJ3ZGJGK2FEL2tJRzJNYkVLRG10c0tXUDJjTDBtOERGb0xhTjdZTXdMK1VRZk5wTEtEMUpjRHdtZ2hnRCtYbHArK0UzRFkyQXBBNmJMRERoNHFGR0tEMXE5OW1GUTkrU2FNUElkMHVRUCtRM0hkakV3R0ZBTmpkTkFVRUFGRDVNZXp2VkR6NHJiVUQ1K2RiUHJadFFMOFVlRnE1R2FNOVlPUzZnREtvMkFPL1VzV0R2ODJJQjBYZUFXZklDOGRJQVBMTC9LOXlBbWpXeE1Uay8vcmdmNXV5dGwxMUVNQzF5bmVnNUIyd1dXbWVHQWxBUHNRTlJqS0EyVlJmNDR0MjB0K1pwbFdEZjY2YUZwNzdGSTg3WHdONWhDTHRTQzBFTU01SUt2YWF3L29PLzBiWkZVMXJWd0QrYzFZUHNpQVFRTWZnZjZMRzhmZVVjZ0tRek9UMldPdC9FV05PTmtJQVU3MVVyT3E0VEhrNjJpb0N1TE9td2I4QTZiK2FUc2JDNWJGdEFZWUVZR0U3UmdibDh0NVdVaFg5N2lXOVBWYzVDYlo2OEZmZERYaVF3M3VLQ2NEUEFNNEp0aStqSXdBTGhvejJtcmVramdNQkZBNytzeXRlL2VTN2NSbW4vWHA2ZVFmSHhaNEJiRTc2TFpteVNteGRFd0VjQUEyZzhCRE1yMm9pZ0EwTmpEa3BndzZJbFFEOFF4bmFMMmVRai9FZk5RM0k3VUVBaFlkZ0RxdzQvWlh2dHAyQnJGUEczUFlWTHpycWZBRCtzVXp0OWRpUkZROUkrYWpmVmI0aXRXcnc3MW94NFlidHdDMmNBMWcvZGdJWW1DdnNtZ2xBVnFUVGF5S0FsVW4zMGRSV2FTNC9yS25rK3FVQkFwRDVzRXFzQk9CUEFzMnRtWHhWdXVvTEdvVUV1ZXZ0Tk9Ydm9CVWUrQ0UxRWNCWlJyYWVlYWRpbVpxMlFsV0Y1dWFNZmdudzE0by9objlOOVFzZ2dFNEV3R1hoTnl0KzMwSUFseHNoQU80R3ZFRE1CQ0MvMUUzS1A0Z1EwOTlyZkJlUEtpYkJWaG12NXF0SmVMNkRkQnV2bXRFUldkVk93TVZHR1BuL2F0aU9rWGN3UWZtZ2JNVzdyc3Y4OHJCeXNnMDdJa2RMQXZLQnp5QWJWelM5U3gyWFZGUVZSV2twYk1EWitZZzZzazIyY3o5blJITzZ1dUpkRUxVRWNMUkhBSm96Z09rT3k5VlVsNTRGQXVpa3Q5eFVrOTZ5bU1NN1JnamdkN0VUZ1B4aSs1SnVJNHl2VEgrN0ptVmErMDIxelI3OGY2NXB4NFhiMEZteEFaK1FDZ0ZzUy9xdG1mSmN3eXIrS0NFSnBwNEJTQms0TnNnU3E5SmExaWI5dlJka0RCd1lPd0hJUjFtUGRIZkc4Vmw1OTVvSVlCdGtBSjNlODdFMUVjQXdBNHVOdklNZFl5Y0EzdzQ4VXpFQitBTGxRUlYvRkJtWTZ4dFltWnBwQTk2L0pxTDlrWUZ5VTdTSmpXUGZCUkFDV01UaEE4WENqTS9LSjlaRUFLczZmS3FjQkpzNStIZW9pUUFPVjU1cHRYc0x6bHF4RXdCNVd6TXZHQ0dBODJzU3A1WjBlQ3RJVDlzanp3akNYb2l6dmZlOFljWHZXVXFKVTVRVGdJei85Nmw2SjZUcVRPQmg1YW1aRE14cmEySmw3ZzcwcnZjT3BHSG9iSXFuZFhoN3dhU1gzelUwNWF4YUV3R01NN0xselBkbHpFOEpoTERiYmNxWldRYm9mVFd5OG45VHgwVXA0YUNZa1QvRGJHTmtFRTU2djd0eStPOU96Y2ZCb1ZSOU4rQ2lkdUNheDlremxFaEliYWE5TWFaOG1LZWFVQTV4ZndEMkJkeENIVWVsdzJlWkdXUkxXa2loNkxLVFdWNDJFMlpWajFObWd1S3Q0TVdiTU43dVVaNXBObU9oVVJYOXZOWFBRbTMycXBlYTlhbHBsZktEQmRJdEhVNmx6QjQ3dmFROEtTc1gycWwxYVgwUm1iL3VjQ1ZsZTl5ckZyekR0aHEzdmZvN1RDWWI1d0N1U1lVQTVHT1BNaVRPTEZ2angrbmpUWUtpUDUrRklmWWlYT0R3ejRLQjNGNUFDRldUUWFPMFB2eHY4TEhlKy9QZGt4OVE4UW0vdmcxKzN5ckxUUDV2djVtbzJLeWVBUFlqL2Z1ekloNnQwY1NQMDhlYklFWC9qQzhXK1luRGVJZm5hOVFQdXB2V001NTErQk5sVjNzdlY1THAxRG5oeXdoZ0NkSy8xU3ArazlFVmI0T3FEWmxFMjVFZGc4WUdMV1RuUm9Rd2dMSW1xOXk3OEVicU9QVFNTRDlvTDlFUlFqUVM3N2liMGEyVUhlcGF0MERBazJkdWEvRVlXNE4wRzg1OEsvVEJRWWtjUFFHc1Ivb2JZOHJnMlU0Uk83YzFJSVFGS2JPK25wU0xTaDgySUlRaTcwSFpLcytEOUlsY3ZPTjNzV2dMMHZyZWpMR05tNmlOektrVGNuaHFHY0FxcExzeHBsK2Y3YWYwNDRoKzBLOWs0dkdOT0RzN25FZFp0NW1aSllSUWxOWlB5WVdwQS9PeW8raS8zVTlwelNyZmFXZmxpMHpSb2JQb05RQVpxRXVUN3NhWVBnR01Nc0xPZmJwWWlabDArUlFpSDcxOUx2aDl1VmFlU05uZGpieHlMcUI4bFc4VWtrYVBWQzQwKzlmUURVbU5BSGlBdldpRUFNNDJRZ0E5MFEvbXl1dDNQaXl6RTNYWVVJdktEV3VEVWdoZ0ZPbDJBZm9OVVFjRjg0TlNJSUpKWktNNzhCV1IxR2VOOUFOLzhyUVpINGhXdWk3NXJlZm1vNFJDVnBTN3lZWko0ODVJMDdNMlEybDliOGJYZUxMaE5YbUdFbEQvaXhqNktzVU03U3UwajZTVW1rVlVadDZ1ZklFSmJjREpFY0M1UmxLMDU3MFVEVVJnSng0M1VtSmVuOXJZRWdMNGxaRVVqUS9vTEFFQ01DY0V2a0s2dXdHTENlakNTRFNtSGhQQVNPVVpnTjhkZUVVUWdLbjBmd25xNkxlZy9STGEwenpTU29vQWRpRDkrN1F5ZU9ROFFIK3l1VFVXZTRpZzJULy9hOTVXczNJTi9SR3BaUUNoVlhPMkFRTGczbkp6bDVCWmJDcTZsWlcrYkV1VFNXQUUyYkVCNzVVcUFYQVRSTTJYTm9UUHhXZmJyNlBNSHJ0R3lhRFVhbytOWmR5VTJaNjUxd0JidHRtejhTcnBianNmTGk1YkJQTWltVHFOMDdUM2xhZHA0Y2Z5UFFMY2JPTHN2SlJaQXRsQlUxZDVicHpDZHl2d2hTS1BPWHhSSU9CcWJxWG1aeVpEVWlNQUNkNWFtNktjQUxyYjM0N2JuUE0xMUd3LzVSWmZBMEFJdmRhSGl0NFJsMTk4VGR0UmxMVk9lNCs2N3BTa3ZRU1FuWUJrdWdFWHhkT2syNnhSMXYrdVVZZGJCcmM5djlSaGIrcllRU2hLWjFNdkZ4cjFEdURtSW54TTlpTEttbzQwYW41aXJaT3lMSGp2NU5sTWNnUWd2K3hFUXdUUTJ6Wlpuems4UkZtZlA2NzNCaWFjSGZndDBJb3l3azBwNjQ3RGJjVStwcTdibjFtOVMwRUk0Tm1TYkRFWkFyaUc3TitSMTlPT09tOVQ1djc2dWNPYUJaT2gxUjExNmhEdmluNGYvajFYeVVYVks2bTRSZnBNS3U1bzFHNTh2TWlDOTBES2lpN0g3eU1nZ0RscGxjMy83RW5LbW43dVFoME5TSXNtVUI5RDVGNUdZQ3lXY2xlaGN5ZzdEVHFyWUdXVUNSL3pqVW15TU55V3FnQW9xOTVvNm15TGpQVktyTzZLaWR6R2kwOUpIdWV3RVdYM0JoUzlPMDFIZHYzT1JHRnczd0Z1LzhiOUEvbHd6alRqNGwzVkpxQkxnL21RVE1oZ09aaDBOMjFvNVhWWkRQYXo4N0hXRVEzRXhGYVVDMjFkaUhjL3pzVzdvczdGUlkxS1U3b3AyU2VBc2FrU2dQekN3MGwzZCtCbTZ3ZXp2UWtTdmc4MlRmR2RpbU1vdXp4a2tTYUtpWTMyNUFmbTR0MnZjL0h1MDVJQkgzdGEzeHNDT0NaVkFwQ1ZZN1BFMkwvS2NvRVB1L0NlT0h2SmVZKzhmMG1tMWR0eW9jeDUxeWNYTDM5R21UUHlEZXE2K3pDK2NiRUl1RS9xQkRDRWRIY0gxbG91bEYzUWNXR2VWUTNxUmJuUWFKVm44VzdIWEx5YjNJVjQxNDVKMzIwQzJDcFZBcEJWaFZYdnowQUFQYlltZDVVZDhKMkNFM09SbFE5ZHpkK2dYQ2k3ZElURnUyTXBjemgrMEEzeHJoM2ZzY2ZuQUlhbXVnc2d3ZWFQcWFTN2NZT1ZyY2JaRGNURTEvSzk5Z01vT3poVEZNdm40dDFmS0hNeWR2ZVdZcXp5dlNOeVh2aFdTWjBBK2xPSHpSTUUwSnh5WVdhK0I4OWRjM2R6T0lVeXArSm4zUkR2a05aWGF3TmVLc2lJazR6N0U5OEphSFc1Z0xTK05RVHdRb25QSXprZDRBYUt6dzJvbFF4Q1orTE1rclFlazc3K2JzQ1RLUEVROGVsUEZMOGJVSHU1Z0FuZmZBS1lrSHI5TDI3QTB5a3ROeUNRTnFRTXV5eDFBcEFNNEJjb0FZQ0VzaThoZ0ROVDlRQ0VCTEEzUkVBZ1FRSTROblVDa05SblM5TGRIUmdBNnJnUDRDY2dnQ3pXd2Y0eWtCQUJpQWk0ZmVvRUlOdUFnejFXQkFFQXFlekFiSlM2Q0NnRXNCaGxyaWk0QVlGVVBCbWZPNnllT2dGSXNCc0tkbUFnSlJjZzM0ZXhaTEFRSmgwUFlpY0FTSWdBK0phcHVUSHRPOUtmMndLVEJBREU3QUtjaktuZldRRzlGR1lnSUNFQ21JQ3AzNWtBeG9JQWdJUk1RUDhEQWJBekFSd0RBZ0FTZ0d4M241TzZCeUFrZ0gwZ0FnSUpaQUJDQU1mbjQ3NGZDQ0NMclVBQVFFSWx3RTlCQUoxcm9QVUk1d0dBZEpxQjdvSVNvRE1CY0tOS2RBY0dVckVCYndJUk1BdHhRWEZ6eEhjSmJrQWdmaHN3ajIvWWdJTmdPL0NMSUFBZ0FRTGdxOU9XQ0JaQWhJc25Bck1FQU1ScUE1NGZCUEIxSFdBQ0NBQ0llUFdYY2YwUEtyN0hNWGtDdUF4bUlDQUJBcmdiVTc2WUFNNmt6dDJCMGE0YWlLSG1idzlNUUZkQUFPd2NzaGQ2UWxBdmxkMDJpOEVGYU4vbUM2OW44dzF1NC9MeDNnOVR2ek1Uc2hub1R1cm9EdVFqdkxJS1BRUUJqWk8rMFJWczB4enVjdGdNR1VDNUg0QmpVWWV0SFg3cjhLakRsd1ZxYXBnZElFTUFXcEhXZDNVSksrOXNuZTJ3bmJmMUIvVy9BUWtVc1NKZm9ieC9YanU5UnNWbnJNdktCUkFDVVBXa2IzUU5PMi94WFVPWjEzLzFnb25laHBXL2UwVFFsNHA5MHZNNmJPendYdzRUSFQ1R3VRQTBNYTBQeHhDYmV2aDI2NU1kZnVpd1FJbkcxUmVyL3B3VFFoRnpEbkxZUFJkV25pa3hYeFRkZmd0Q0FMNHFHUStoZUJmKys4ODVYT1N3cDhOeUpacFdYNnowOVlxR1JZeks1Z3ErWklUdkdyelpZV28zc2dOa0NFanJ1eVBlY2MvS294eldwYTgzOCt5RENhK3pYRmpFWVp0Y1RIeXNtMklpeUNDOUxicFF2T1A5K2trT1p6bjhPMlgzVmlDdE41UWQ5Q3Y1TUt2bVl1S1ZEcTgyRUJPaEhjUmR5eGVsOVN3dVgrMHcwbUcxa29XbUgxYjVlTEtEK1NpN21vbkZ4THNiaUltemduSUIrb0dOV2w0bS9LeVN0SDY2dzcwT0p6cDhuem9PNTJDVlQwQTdLQ0tFWlhNeDhRL1VjVXNSdGhwdE8rK0t4THNMSGZiSXZ6ZkV1OFN6QXlrWHd1Qy85MjJId3gxdUlUZ1RyVHJ2dU1ITXJRNUg1T0pkMmJkdXd5cVBhRlF1c0FqRXprUStyUFFvZFJ6cUNKczlscFVMbUxqMXBQWHRCZUxkbzdsNHQwMkplTmVHdEI3UmszS2hLQjFjS1JjVEwrOUNUSndGN1dDT0ozeFhhZjFyK1hmWVAvOHVTT3NSdFpVTFJka0J0ekpqWitJSnVhajBVVWwyZ0hLaEd1ZmRSL2w3UGo0WDcrWXBFZStRMWlOcUx4ZktuSW03NVdMVDAxVHNUSnhSa2gya2JNU1psYitYb242US9CN0g1ZTkxRU5KNmhOWnlvY2laT01UaFNPcVpNekUyVW1ndnFlWEx4RHQrVHpkUjV1Z2NRbDl2bndYbkhjS2ttTGh3TGlhT29jeVorQVYxNzVpelJUSW9lbjZmN1B4LzkzT0hSeHgrUTlrTlVRdVZwUFZZNVJFbXM0TXlaeUlmY3g1QjJUSG5WNmhyWjZMMm5nYzlPVGI3Y2k3ZTdldXdjZ21Sd25tSFNDWTdDSjJKMDZscloySXJ4Y1QyRXZHdXpIbkhUc3UvNVdMcEJwUWQ2OFlxajRCMlVMTEtzVk50T0hVNEU5dXA5VnVOUGRtaW01MkxkK2ZuNHQzU0RTWThWbmtFc2dNcTMycmt2OGZIbkEvTHhjVHVPQk9yS2hkNmt0YS81WENqd3lFT2F4ZE1iRis4d3lxUFFQU3lYT0NlaVN5V2pYVjRtSXFkaVROS3lvV2VUbnBKNjJjVS9QOVp4SHlRTXZGdWM4cEVUcVQxQ0VTVHl3VVcwUm81RTJkMlVTNzB4SG5INHQybGxJbDNLL1R3T1JFSVJNM2xndlJNN0k0enNiM2c3NFVUL2dQS3hMdFJsSWwzQTBwV2VhVDFDRVNMeTRVeU1YRlh5c1RFcHhxays3NTROOW5oUEljZEtidTJ2V3lWeDRSSElCU1hDMlhPUkQ0ZWUzTyt1b3Z6N25yS3hMczFxYkY0aDRnay9nVW01TFBETjJvU3dRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmlnbWEtYjc1MjcxMGI5OWEwMzkxOGQxZDRmZmQwNWU2ODM0ZGMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpdC1kMzhjZjU2ZTJiOGQ5Y2UzNTE5MjkzMzE4NDY5NjRhMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaHRtbC1kZGQ3ZGMyOTMwOWVmZWZlYjU5YTQ5MjcwMDhjNWFjMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvamF2YXNjcmlwdC1mZDNiMDFkNTNiM2ZjN2Q3ZDM1YjAyYzAxOTFkYzNkYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvamVzdC01NDZmZGIyMjI4YjRjMGFhZDg0ZTdjMDQ4NmNmMGFlYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvanF1ZXJ5LTAzN2ViMWY4NWU4NjIxNDViYTFkYWI4OGUyODg1OWExLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9teXNxbC1jNDllOTlhODlhMGNhMmU0NTZmNGNlNzFmMzM2NTlkYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbmV4dC1hNzI1ZjVjYjUxOTk4YzMwYzAzYTU1YTk4YWEwMDNkZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRQUFBQUVBQ0FZQUFBQmNjcWhtQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUR1VWxFUVZSNDJ1M2N2VXBiWVJ6SDhkeFZCVk5RNkFzV3pLQkwweUdUNmFoVG9VMTZFNzVzdW5zUGdiUlRSR2hMbWxLUlFuUm9FVndhQkV1N0ZJNTVMaUJEL3VCcDg1elBCMzdqd2VPVHg2K1QxbW9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGVEFoNlVIaFpsVmN3SmdKZ0JtSmdCbUpnQm1KZ0JtSmdCbUpnQm1KZ0JtSmdCbUpnQm1KZ0JtSmdCbUpnQm1sbnNBdnUvdEZwUDM3N0xlcUxFZU9wdUx0OTNzeithOHZSVTZtL1JjN21lelNIYzFISUJKdjEvazdtdnplZWhzcm82T3NqK2JjYWNUaTJPM1UvRC8zRlVCRUFBQkVBQUJFQUFCRUFBQkVBQUJFQUFCRUFBQkVBQUJFQUFCRUFBQkVBQUJFQUFCRUFBQkVBQUJFQUFCRUFBQkVBQUJFQUNIS2dBQ0lBQU9WUUFFUUFBY3FnQUlnQURjaTk4WDQrSm5yemYzYmdhRFNnUWdmWitSODhrOUFIOS8zWWJPSlMwOUc3cXI0K0JkUFJrSXdDenBoeXJ5bnVsZ3FoQ0E2THZtSG9BL2w1Zmh2NVZQejRidTZ1Rmg3SzYrYUFxQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBakF2dy9BK00zcjRxelZtbnNDSUFBQ2tFRUFTZytPQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQWlBQUFpQUFBaUFBQ3hBQUQ0L1d5dStiRzZVdHVIalI2SDMvRmhmRG4vTjlPeWlCT0Riem5hcG44ZW4xWlhRMmFUbnluelBVV005SElEMGJLbDM5V0c5OUxzYURvRGw4UTlCck5vVEFBRXdBVEFCTUFFd0FUQUJNQUV3QVRBQk1BRXdBVEFCTUFFd0FUQUJNQUV3QVRBQk1BRXdBVEFCTUFFd0FiREZDOEFybTducnlLR2V2MndYUHc3MlM5M3c2WlBvSmZBNVYzZzFacHNlMEZuMnZ3RUFBUUFFQUJBQVFBQkFBQVFBQkVBQVFBQUVBQVJBQUVBQUJBQUVRQUJBQUFRQUJFQUFJSk1BSEU5M212Tjh5Z0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWtMczdLUTBiOVg4dmdiZ0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcGhwLTk3OWFiNzdmY2JkYzEzNmUzZjk5ZDA4M2NhM2FlMjk2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9yZWFjdC1lZDc4YTU3MmVkODI2MTdiMmRhN2EzYmNhMWU4NmZlYS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc3ltZm9ueS01NGY1MzkwMDYwNGE5YTNiZjMxYmZjZGFmNGEwYTNkZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd2VicGFjay02YTM5MGQzMWEzMjRjYTFkNTRmMDE1MTMyMzgzN2VkYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMk91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=