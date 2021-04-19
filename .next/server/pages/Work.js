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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Work/index.js");
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react_scroll_up_btn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll-up-btn */ "react-scroll-up-btn");
/* harmony import */ var react_scroll_up_btn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll_up_btn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Public_Scrollup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Public/Scrollup */ "./component/Public/Scrollup.js");
/* harmony import */ var _public_image_home_carousel1_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../public/image/home/carousel1.jpg */ "./public/image/home/carousel1.jpg");
/* harmony import */ var _public_image_home_carousel1_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_carousel1_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_image_home_carousel2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../public/image/home/carousel2.jpg */ "./public/image/home/carousel2.jpg");
/* harmony import */ var _public_image_home_carousel2_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_carousel2_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_image_home_carousel3_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../public/image/home/carousel3.jpg */ "./public/image/home/carousel3.jpg");
/* harmony import */ var _public_image_home_carousel3_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_carousel3_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_15__);

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
    padding: '3rem',
    borderBottom: '1px solid black',
    color: 'black',
    backgroundColor: '#F5F5F5',
    height: '100%',
    width: '100%',
    overflow: 'hidden' // transition: '.4s ease-in-out'

  },
  packageBlockNight: {
    borderBottom: '1px solid white',
    padding: '3rem',
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
      lineNumber: 97,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
      container: true,
      className: mode === 'day' ? classes.packageBlock : classes.packageBlockNight,
      spacing: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 7,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: mode === 'day' ? classes.subtitle : classes.subtitleNight,
          children: "react-typewriting-animation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: mode === 'day' ? classes.description : classes.descriptionNight,
          children: t('description2')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://www.npmjs.com/package/react-typewriting-animation",
          underline: "none",
          target: "_blank",
          className: mode === 'day' ? classes.link : classes.nightLink,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14___default.a, {
            style: {
              marginBottom: '-0.4rem'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, undefined), t('link')]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 5,
        style: {
          textAlign: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_15___default.a, {
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
              lineNumber: 122,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_15___default.a, {
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
            lineNumber: 134,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
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
          lineNumber: 150,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: mode === 'day' ? classes.description : classes.descriptionNight,
          children: t('description1')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://www.npmjs.com/package/react-customize-carousel",
          underline: "none",
          target: "_blank",
          className: mode === 'day' ? classes.link : classes.nightLink,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14___default.a, {
            style: {
              marginBottom: '-0.4rem'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }, undefined), t('link')]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 5,
        style: {
          textAlign: 'left',
          paddingTop: '1rem'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Carousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
          imgsrc: [_public_image_home_carousel1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a, _public_image_home_carousel2_jpg__WEBPACK_IMPORTED_MODULE_12___default.a, _public_image_home_carousel3_jpg__WEBPACK_IMPORTED_MODULE_13___default.a, _public_image_home_carousel2_jpg__WEBPACK_IMPORTED_MODULE_12___default.a, _public_image_home_carousel1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a],
          rotateBy: 3,
          navigateButton: true,
          controlButton: true,
          mode: mode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
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
          lineNumber: 181,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: mode === 'day' ? classes.description : classes.descriptionNight,
          children: t('description3')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "https://www.npmjs.com/package/react-scroll-up-btn",
          underline: "none",
          target: "_blank",
          className: mode === 'day' ? classes.link : classes.nightLink,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14___default.a, {
            style: {
              marginBottom: '-0.4rem'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, undefined), t('link')]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        md: 5,
        style: {
          textAlign: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_15___default.a, {
          smDown: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              padding: '20%'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Scrollup__WEBPACK_IMPORTED_MODULE_10__["Scrollup"], {
              mode: mode
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_15___default.a, {
          mdUp: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Scrollup__WEBPACK_IMPORTED_MODULE_10__["Scrollup"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
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
/* harmony import */ var _public_image_home_next_night_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../public/image/home/next-night.png */ "./public/image/home/next-night.png");
/* harmony import */ var _public_image_home_next_night_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_image_home_next_night_png__WEBPACK_IMPORTED_MODULE_15__);
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
              src: _public_image_home_next_night_png__WEBPACK_IMPORTED_MODULE_15___default.a,
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

/***/ "./component/Work/Work.js":
/*!********************************!*\
  !*** ./component/Work/Work.js ***!
  \********************************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Public_PageLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Public/PageLoader */ "./component/Public/PageLoader.js");
/* harmony import */ var _Home_component_LearnByDoing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Home/component/LearnByDoing */ "./component/Home/component/LearnByDoing.js");
/* harmony import */ var _Home_component_Skill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Home/component/Skill */ "./component/Home/component/Skill.js");
/* harmony import */ var _Home_component_Sharing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Home/component/Sharing */ "./component/Home/component/Sharing.js");
/* harmony import */ var _component_Working__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/Working */ "./component/Work/component/Working.js");

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Work\\Work.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  dayBackground: {
    backgroundColor: 'white',
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
const Work = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };

  const handleDrawerClose = () => {
    setDrawer(false);
  };

  const mode = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.mode);
  const lang = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.lang);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [drawer == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: mode === 'day' ? classes.dayBackground : classes.nightBackground,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_PageLoader__WEBPACK_IMPORTED_MODULE_8__["PageLoader"], {
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
            marginTop: '6rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Working__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
            marginTop: '6rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home_component_Skill__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '6rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home_component_Sharing__WEBPACK_IMPORTED_MODULE_11__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          style: {
            marginTop: '6rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home_component_LearnByDoing__WEBPACK_IMPORTED_MODULE_9__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
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
            lineNumber: 94,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handleDrawerClose: handleDrawerClose,
        lang: lang
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./component/Work/component/Working.js":
/*!*********************************************!*\
  !*** ./component/Work/component/Working.js ***!
  \*********************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\component\\Work\\component\\Working.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  title: {
    fontFamily: 'Roboto',
    fontSize: '2rem'
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: '1.6rem',
    fontWeight: 500
  },
  img: {
    borderRadius: '50%'
  },
  content: {
    fontFamily: 'Roboto',
    fontSize: '1.2rem'
  }
});

const Working = (_ref) => {
  let {
    t
  } = _ref,
      props = _objectWithoutProperties(_ref, ["t"]);

  const classes = useStyles();
  const {
    mode
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: classes.title,
        children: t('title')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
        xsDown: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: ["\u25CF\xA0", t('subtitle1')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
        smUp: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 1,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: "\u25CF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 11,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: t('subtitle1')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      container: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.content,
          children: t('content1-1')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      container: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.content,
          children: t('content1-2')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      container: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.content,
          children: t('content1-3')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
        xsDown: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: ["\u25CF\xA0", t('subtitle2')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
        smUp: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 1,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: "\u25CF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 11,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: t('subtitle2')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
        xsDown: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: ["\u25CF\xA0", t('subtitle3')]
          }, void 0, true, {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
        smUp: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 1,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: "\u25CF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 11,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: t('subtitle3')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, undefined);
};

Working.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])('working')(Working));

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

/***/ "./pages/Work/index.js":
/*!*****************************!*\
  !*** ./pages/Work/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Work_Work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Work/Work */ "./component/Work/Work.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\pages\\Work\\index.js";





const WorkPage = ({
  t
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Work_Work__WEBPACK_IMPORTED_MODULE_2__["Work"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, undefined);
};

WorkPage.getInitialProps = async () => ({
  namespacesRequired: ['header', 'banner', 'working']
});

WorkPage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('header')(WorkPage));

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

/***/ "./public/image/home/carousel1.jpg":
/*!*****************************************!*\
  !*** ./public/image/home/carousel1.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/carousel1-a5709daeda41231f81f92d8b3fe73037.jpg";

/***/ }),

/***/ "./public/image/home/carousel2.jpg":
/*!*****************************************!*\
  !*** ./public/image/home/carousel2.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/carousel2-529c01259dd7320764759b149c114d5b.jpg";

/***/ }),

/***/ "./public/image/home/carousel3.jpg":
/*!*****************************************!*\
  !*** ./public/image/home/carousel3.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/carousel3-8119c1b338d75e950083bc9d3c07c79c.jpg";

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

/***/ "./public/image/home/next-night.png":
/*!******************************************!*\
  !*** ./public/image/home/next-night.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "react-scroll-up-btn":
/*!**************************************!*\
  !*** external "react-scroll-up-btn" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-up-btn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0hvbWUvY29tcG9uZW50L0xlYXJuQnlEb2luZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSG9tZS9jb21wb25lbnQvU2hhcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSG9tZS9jb21wb25lbnQvU2tpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1BhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9QdWJsaWNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9TY3JvbGx1cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9Xb3JrLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Xb3JrL2NvbXBvbmVudC9Xb3JraW5nLmpzIiwid2VicGFjazovLy8uL2Nzcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3MvcHVibGljLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Xb3JrL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmMTAuZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmNC5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWY1LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjYuZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmNy5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWY4LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9jYXJvdXNlbDEuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2Nhcm91c2VsMi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvY2Fyb3VzZWwzLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9jc3MtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2ZpZ21hLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9naXQtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2dpdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamVzdC1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamVzdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvbXlzcWwtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL215c3FsLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9uZXh0LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9ucG0tbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL25wbS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvcGhwLW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9waHAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9yZWFjdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMk91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JhZGlvQnV0dG9uVW5jaGVja2VkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbC11cC1idG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRpdGxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiaW1nQmxvY2siLCJ3aWR0aCIsImltZ0hvdmVyIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiTGVhcm5CeURvaW5nIiwidCIsInByb3BzIiwiY2xhc3NlcyIsIm9uSG92ZXIiLCJzZXRPbkhvdmVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZU9uSG92ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwibW9kZSIsImdpZjQiLCJnaWY1IiwiZ2lmNiIsImdpZjciLCJnaWY4IiwiZ2lmMTAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiIsInN1YnRpdGxlIiwiZm9udFdlaWdodCIsInN1YnRpdGxlTmlnaHQiLCJjb2xvciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25OaWdodCIsInBhY2thZ2VCbG9jayIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJoZWlnaHQiLCJvdmVyZmxvdyIsInBhY2thZ2VCbG9ja05pZ2h0IiwibGluayIsIm5pZ2h0TGluayIsIlNoYXJpbmciLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwicGhvdG8xIiwicGhvdG8yIiwicGhvdG8zIiwiU2tpbGwiLCJzdHlsZXMiLCJiYWxsIiwiamF2YXNjcmlwdEljb24iLCJqYXZhc2NyaXB0TmlnaHRJY29uIiwiamVzdExvZ29MZyIsImplc3RJY29uIiwiamVzdE5pZ2h0SWNvbiIsImplc3RMb2dvIiwiZ2l0SWNvbiIsImdpdE5pZ2h0SWNvbiIsIm5leHRMb2dvIiwibmV4dEljb24iLCJuZXh0TmlnaHRJY29uIiwicmVhY3RJY29uIiwicmVhY3ROaWdodEljb24iLCJjc3NJY29uIiwiY3NzTmlnaHRJY29uIiwicGhwSWNvbiIsInBocE5pZ2h0SWNvbiIsIm5wbUljb24iLCJucG1OaWdodEljb24iLCJteXNxbEljb24iLCJteXNxbE5pZ2h0SWNvbiIsImZpZ21hSWNvbiIsImZpZ21hTmlnaHRJY29uIiwid2VicGFja0ljb24iLCJ3ZWJwYWNrTmlnaHRJY29uIiwic3ltZm9ueUljb24iLCJzeW1mb255TmlnaHRJY29uIiwiY29udGVudCIsIkJhbm5lciIsIkN1c3RvbWl6ZUNhcm91c2VsIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNvdW50IiwiaGFuZGxlVGltZXIiLCJiaW5kIiwidGltZXIiLCJoYW5kbGVOZXh0IiwiaGFuZGxlQmFjayIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInJvdGF0ZUJ5IiwicmVuZGVyIiwiaW1nc3JjIiwiY29udHJvbEJ1dHRvbiIsIm5hdmlnYXRlQnV0dG9uIiwibGlzdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwicGFyc2VJbnQiLCJtYXJnaW4iLCJSYWRpb05hdmlnYXRpb24iLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0IiwibWFpbiIsIm92ZXJmbG93WSIsInBhZGRpbmdSaWdodCIsImxldHRlclNwYWNpbmciLCJkcmF3ZXJMaW5rIiwiZHJhd2VySGVhZGVyIiwiaWNvbiIsIkRyYXdlciIsImhhbmRsZURyYXdlckNsb3NlIiwibGFuZyIsImxpbmtOaWdodCIsIkZvb3RlciIsImZvb3RlckJsb2NrIiwiZm9vdGVyQmxvY2tOaWdodCIsImxpbmtBbmNob3IiLCJuaWdodExpbmtBbmNob3IiLCJuaWdodEljb24iLCJmb3JtQ29udHJvbCIsImlucHV0TGFiZWwiLCJmbGV4RGlyZWN0aW9uIiwiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImhhbmRsZUxhbmdUb1JlZHV4IiwidGFyZ2V0IiwidmFsdWUiLCJpMThuIiwiY2hhbmdlTGFuZ3VhZ2UiLCJkaXNwYXRjaCIsInRvRW4iLCJ0b1poSGFudCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlT3BlbiIsInVzZURpc3BhdGNoIiwiaGFuZGxlRHJhd2VyT3BlbiIsImxhYmVsIiwidG9OaWdodCIsInRvRGF5IiwicGF0aG5hbWUiLCJQYWdlTG9hZGVyIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZUVmZmVjdCIsIlNlbGVjdCIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJvbkNoYW5nZSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4Iiwicm9vdCIsImlucHV0IiwiU2VsZWN0MiIsIm5hbWUiLCJmb3JtQ29udHJvbFByb3BzIiwic2VsZWN0UHJvcHMiLCJyZXF1aXJlZCIsImRpc2FibGVkIiwidGFiSW5kZXgiLCJuZXdQcm9wcyIsInNlbGVjdFJlcXVpcmVkIiwic2VsZWN0Iiwic2VsZWN0ZWQiLCJjaGVja0VxdWFsIiwiYSIsImIiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsImZpbHRlcnMiLCJmaWx0ZXIiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJhcnJheSIsIm9iamVjdCIsImlucHV0TGFiZWxQcm9wcyIsImljb25OaWdodCIsIlNjcm9sbHVwIiwic2Nyb2xsQyIsInNldFNjcm9sbEMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25TY3JvbGwiLCJzY3JvbGxZIiwiaGFuZGxlU2Nyb2xsdG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYWxpZ24iLCJkYXlCYWNrZ3JvdW5kIiwibmlnaHRCYWNrZ3JvdW5kIiwiYm9keSIsIldvcmsiLCJkcmF3ZXIiLCJzZXREcmF3ZXIiLCJ1c2VTZWxlY3RvciIsImltZyIsImJvcmRlclJhZGl1cyIsIldvcmtpbmciLCJOZXh0STE4TmV4dCIsInJlcXVpcmUiLCJkZWZhdWx0IiwibG9jYWxlU3VicGF0aHMiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwicGF0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsInpoSGFudCIsImZyIiwiZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSIsIldvcmtQYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwic3RvcmUiLCJleGFtcGxlSW5pdGlhbFN0YXRlIiwiYWN0aW9uVHlwZXMiLCJEQVkiLCJOSUdIVCIsIkVOIiwiWkhIQU5UIiwiUkVTRVQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsInJlc2V0Q291bnQiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmFnZSIsIndoaXRlbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJwZXJzaXN0UmVkdWNlciIsIm1ha2VTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Q0FBQyxRQUFELENBQWYsQ0FBMEI2TSxRQUExQixDQUFmLEU7Ozs7Ozs7Ozs7O0FDbkJBLG1GOzs7Ozs7Ozs7OztBQ0FBLGtGOzs7Ozs7Ozs7OztBQ0FBLGtGOzs7Ozs7Ozs7OztBQ0FBLGtGOzs7Ozs7Ozs7OztBQ0FBLGtGOzs7Ozs7Ozs7OztBQ0FBLGtGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLGlDQUFpQyxnNUI7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxnMkI7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxnK0M7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyx3MkM7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyx3NkI7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxvMUI7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0aUM7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0K0I7Ozs7Ozs7Ozs7O0FDQWpDLHdGOzs7Ozs7Ozs7OztBQ0FBLGtGOzs7Ozs7Ozs7OztBQ0FBLGlDQUFpQyx3c0Q7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyx3akQ7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxnMFM7Ozs7Ozs7Ozs7O0FDQWpDLGtGOzs7Ozs7Ozs7OztBQ0FBLGlDQUFpQyxvbEI7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0aUI7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxnckQ7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0K0M7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxvakU7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxvOEQ7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyx3dkU7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxvbEU7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0N0Q7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0d0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJRyxLQUFKO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUc7QUFDMUI1TixNQUFJLEVBQUMsS0FEcUI7QUFFMUIwRyxNQUFJLEVBQUM7QUFGcUIsQ0FBNUI7QUFLTyxNQUFNbUgsV0FBVyxHQUFHO0FBQ3pCQyxLQUFHLEVBQUUsS0FEb0I7QUFFekJDLE9BQUssRUFBRSxPQUZrQjtBQUd6QkMsSUFBRSxFQUFFLElBSHFCO0FBSXpCQyxRQUFNLEVBQUUsUUFKaUI7QUFLekJDLE9BQUssRUFBRTtBQUxrQixDQUFwQixDLENBUVA7O0FBQ08sTUFBTUMsT0FBTyxHQUFHLENBQUM5SixLQUFLLEdBQUd1SixtQkFBVCxFQUE4QlEsTUFBOUIsS0FBeUM7QUFDOUQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS1IsV0FBVyxDQUFDQyxHQUFqQjtBQUNFLDZDQUNLekosS0FETDtBQUVFckUsWUFBSSxFQUFFO0FBRlI7O0FBSUYsU0FBSzZOLFdBQVcsQ0FBQ0UsS0FBakI7QUFDRSw2Q0FDSzFKLEtBREw7QUFFRXJFLFlBQUksRUFBRTtBQUZSOztBQUlGLFNBQUs2TixXQUFXLENBQUNHLEVBQWpCO0FBQ0UsNkNBQ0szSixLQURMO0FBRUVxQyxZQUFJLEVBQUU7QUFGUjs7QUFJRixTQUFLbUgsV0FBVyxDQUFDSSxNQUFqQjtBQUNFLDZDQUNLNUosS0FETDtBQUVFcUMsWUFBSSxFQUFFO0FBRlI7O0FBSUYsU0FBS21ILFdBQVcsQ0FBQ0ssS0FBakI7QUFDRSw2Q0FDSzdKLEtBREw7QUFFRXJFLFlBQUksRUFBRSxLQUZSO0FBR0UwRyxZQUFJLEVBQUU7QUFIUjs7QUFLRjtBQUNFLGFBQU9yQyxLQUFQO0FBNUJKO0FBOEJELENBL0JNLEMsQ0FpQ1A7O0FBQ08sTUFBTXFFLEtBQUssR0FBRyxNQUFNO0FBQ3pCLFNBQU87QUFBRTJGLFFBQUksRUFBRVIsV0FBVyxDQUFDQztBQUFwQixHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1yRixPQUFPLEdBQUcsTUFBTTtBQUMzQixTQUFPO0FBQUU0RixRQUFJLEVBQUVSLFdBQVcsQ0FBQ0U7QUFBcEIsR0FBUDtBQUNELENBRk07QUFJQSxNQUFNN0YsSUFBSSxHQUFHLE1BQU07QUFDeEIsU0FBTztBQUFFbUcsUUFBSSxFQUFFUixXQUFXLENBQUNHO0FBQXBCLEdBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTTdGLFFBQVEsR0FBRyxNQUFNO0FBQzVCLFNBQU87QUFBRWtHLFFBQUksRUFBRVIsV0FBVyxDQUFDSTtBQUFwQixHQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1LLFVBQVUsR0FBRyxNQUFNO0FBQzlCLFNBQU87QUFBRUQsUUFBSSxFQUFFUixXQUFXLENBQUNLO0FBQXBCLEdBQVA7QUFDRCxDQUZNO0FBSVAsTUFBTUssYUFBYSxHQUFHO0FBQ3BCQyxLQUFHLEVBQUUsU0FEZTtBQUVwQkMsNkVBRm9CO0FBR3BCQyxXQUFTLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUhTLENBR1M7O0FBSFQsQ0FBdEI7QUFNQSxNQUFNQyxnQkFBZ0IsR0FBR0Msb0VBQWMsQ0FBQ0wsYUFBRCxFQUFnQkosT0FBaEIsQ0FBdkM7O0FBRUEsU0FBU1UsU0FBVCxDQUFtQkMsWUFBWSxHQUFHbEIsbUJBQWxDLEVBQXVEO0FBQ3JELFNBQU9tQix5REFBVyxDQUNoQkosZ0JBRGdCLEVBRWhCRyxZQUZnQixFQUdoQkUsb0ZBQW1CLENBQUNDLDZEQUFlLEVBQWhCLENBSEgsQ0FBbEI7QUFLRDs7QUFFTSxNQUFNQyxlQUFlLEdBQUlDLGNBQUQsSUFBb0I7QUFBQTs7QUFDakQsTUFBSUMsTUFBTSxjQUFHekIsS0FBSCw2Q0FBWWtCLFNBQVMsQ0FBQ00sY0FBRCxDQUEvQixDQURpRCxDQUdqRDtBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUl4QixLQUF0QixFQUE2QjtBQUMzQnlCLFVBQU0sR0FBR1AsU0FBUyxpQ0FDYmxCLEtBQUssQ0FBQzBCLFFBQU4sRUFEYSxHQUViRixjQUZhLEVBQWxCLENBRDJCLENBSzNCOztBQUNBeEIsU0FBSyxHQUFHbkQsU0FBUjtBQUNELEdBWmdELENBY2pEOzs7QUFDQSxZQUFtQyxPQUFPNEUsTUFBUCxDQWZjLENBZ0JqRDs7QUFDQSxNQUFJLENBQUN6QixLQUFMLEVBQVlBLEtBQUssR0FBR3lCLE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0QsQ0FwQk07QUFzQkEsU0FBU0UsUUFBVCxDQUFrQlIsWUFBbEIsRUFBZ0M7QUFDckMsUUFBTW5CLEtBQUssR0FBRzRCLHFEQUFPLENBQUMsTUFBTUwsZUFBZSxDQUFDSixZQUFELENBQXRCLEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPbkIsS0FBUDtBQUNELEMsQ0FHRDtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDeExBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InBhZ2VzL1dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1dvcmsvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGdpZjQgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY0LmdpZidcclxuaW1wb3J0IGdpZjUgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY1LmdpZidcclxuaW1wb3J0IGdpZjYgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY2LmdpZidcclxuaW1wb3J0IGdpZjcgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY3LmdpZidcclxuaW1wb3J0IGdpZjggZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY4LmdpZidcclxuaW1wb3J0IGdpZjEwIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9naWYvZ2lmMTAuZ2lmJ1xyXG5pbXBvcnQgbXlzcWxJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL215c3FsLnBuZydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH0sXHJcbiAgICBpbWdCbG9jazp7XHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIC8vIHBhZGRpbmc6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgaW1nSG92ZXI6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonYmxhY2snLFxyXG4gICAgICAgIHpJbmRleDo5OTlcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IExlYXJuQnlEb2luZyA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbb25Ib3Zlciwgc2V0T25Ib3Zlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25Ib3ZlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRPbkhvdmVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T25Ib3ZlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0KCd0aXRsZScpfTwvcD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd2VpYW5vZnN0ZWVsLmdpdGh1Yi5pby9MZWFybi1CeS1Eb2luZy8wNC1zbGlkZS1zaG93LydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY0fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93ZWlhbm9mc3RlZWwuZ2l0aHViLmlvL0xlYXJuLUJ5LURvaW5nLzA1LXNob3BwaW5nLWNhcnQvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdCbG9ja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3dlaWFub2ZzdGVlbC5naXRodWIuaW8vTGVhcm4tQnktRG9pbmcvMDYtY2FudmFzLWRyYXdpbmcvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdCbG9ja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3dlaWFub2ZzdGVlbC5naXRodWIuaW8vTGVhcm4tQnktRG9pbmcvMDctbW92aWUtdHJhaWxlci8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY3fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93ZWlhbm9mc3RlZWwuZ2l0aHViLmlvL3JlYWN0LXdlYXRoZXItYXBwLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY4fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9yZWFjdC10ZXh0LWVkaXRvci1pdGNsNzh4eTktd2VpYW5vZnN0ZWVsLnZlcmNlbC5hcHAvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjEwfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5MZWFybkJ5RG9pbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdsZWFybkJ5RG9pbmcnKShMZWFybkJ5RG9pbmcpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBDdXN0b21pemVDYXJvdXNlbCBmcm9tICcuLi8uLi9QdWJsaWMvQ2Fyb3VzZWwnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IFNjcm9sbFVwQnV0dG9uIGZyb20gJ3JlYWN0LXNjcm9sbC11cC1idG4nXHJcbmltcG9ydCB7IFNjcm9sbHVwIH0gZnJvbSAnLi4vLi4vUHVibGljL1Njcm9sbHVwJ1xyXG5pbXBvcnQgcGhvdG8xIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2Nhcm91c2VsMS5qcGcnXHJcbmltcG9ydCBwaG90bzIgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvY2Fyb3VzZWwyLmpwZydcclxuaW1wb3J0IHBob3RvMyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9jYXJvdXNlbDMuanBnJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8gU2xhYicsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nXHJcbiAgICB9LFxyXG4gICAgaW1nQmxvY2s6e1xyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgIH0sXHJcbiAgICBpbWdIb3Zlcjp7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidibGFjaycsXHJcbiAgICAgICAgekluZGV4Ojk5OVxyXG4gICAgfSxcclxuICAgIHN1YnRpdGxlOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicxLjhyZW0nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6OTAwXHJcbiAgICB9LFxyXG4gICAgc3VidGl0bGVOaWdodDp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS44cmVtJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6OTAwXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuMnJlbScsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uTmlnaHQ6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuMnJlbScsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgfSxcclxuICAgIHBhY2thZ2VCbG9jazp7XHJcbiAgICAgICAgbWFyZ2luVG9wOiczcmVtJyxcclxuICAgICAgICBwYWRkaW5nOiczcmVtJyxcclxuICAgICAgICBib3JkZXJCb3R0b206JzFweCBzb2xpZCBibGFjaycsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjVGNUY1JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDonMTAwJScsXHJcbiAgICAgICAgb3ZlcmZsb3c6J2hpZGRlbicsXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogJy40cyBlYXNlLWluLW91dCdcclxuICAgIH0sXHJcbiAgICBwYWNrYWdlQmxvY2tOaWdodDp7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOicxcHggc29saWQgd2hpdGUnLFxyXG4gICAgICAgIHBhZGRpbmc6JzNyZW0nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1YzVjNWMnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9LFxyXG4gICAgbGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuMnJlbScsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgY29sb3I6JyM1YzVjNWMnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5pZ2h0TGluazp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyNjNGM0YzQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2hhcmluZyA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3QoJ3RpdGxlJyl9PC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMucGFja2FnZUJsb2NrOmNsYXNzZXMucGFja2FnZUJsb2NrTmlnaHR9IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLnN1YnRpdGxlOmNsYXNzZXMuc3VidGl0bGVOaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmRlc2NyaXB0aW9uOmNsYXNzZXMuZGVzY3JpcHRpb25OaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdkZXNjcmlwdGlvbjInKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC10eXBld3JpdGluZy1hbmltYXRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7bWFyZ2luQm90dG9tOictMC40cmVtJ319Lz57dCgnbGluaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiczMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVTcGVlZD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnMjRweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PXsnUm9ib3RvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXttb2RlPT0nZGF5Jz8nYmxhY2snOid3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXsnVHlwZXdyaXRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGV4dD17W1wiSGVsbG8gV29ybGRcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPiBcclxuICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVTcGVlZD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnMjRweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PXsnUm9ib3RvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXttb2RlPT0nZGF5Jz8nYmxhY2snOid3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXsnVHlwZXdyaXRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGV4dD17W1wiSGVsbG8gV29ybGRcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLnBhY2thZ2VCbG9jazpjbGFzc2VzLnBhY2thZ2VCbG9ja05pZ2h0fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9IHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuc3VidGl0bGU6Y2xhc3Nlcy5zdWJ0aXRsZU5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QtY3VzdG9taXplLWNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5kZXNjcmlwdGlvbjpjbGFzc2VzLmRlc2NyaXB0aW9uTmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnZGVzY3JpcHRpb24xJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVhY3QtY3VzdG9taXplLWNhcm91c2VsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBzdHlsZT17e21hcmdpbkJvdHRvbTonLTAuNHJlbSd9fS8+e3QoJ2xpbmsnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fSBzdHlsZT17e3RleHRBbGlnbjonbGVmdCcscGFkZGluZ1RvcDonMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9taXplQ2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nc3JjPXtbcGhvdG8xLCBwaG90bzIsIHBob3RvMywgcGhvdG8yLCBwaG90bzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVCeT17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLnBhY2thZ2VCbG9jazpjbGFzc2VzLnBhY2thZ2VCbG9ja05pZ2h0fT4gICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuc3VidGl0bGU6Y2xhc3Nlcy5zdWJ0aXRsZU5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3Qtc2Nyb2xsLXVwLWJ0blxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGVzY3JpcHRpb246Y2xhc3Nlcy5kZXNjcmlwdGlvbk5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Rlc2NyaXB0aW9uMycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXNjcm9sbC11cC1idG4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7bWFyZ2luQm90dG9tOictMC40cmVtJ319Lz57dCgnbGluaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzonMjAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbHVwIG1vZGU9e21vZGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsdXAgbW9kZT17bW9kZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNoYXJpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdzaGFyaW5nJykoU2hhcmluZykiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgcmVhY3RJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LnBuZydcclxuaW1wb3J0IHJlYWN0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LW5pZ2h0LnBuZydcclxuaW1wb3J0IGplc3RJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2plc3QucG5nJ1xyXG5pbXBvcnQgamVzdE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9qZXN0LW5pZ2h0LnBuZydcclxuaW1wb3J0IGdpdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZ2l0LnBuZydcclxuaW1wb3J0IGdpdE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9naXQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgbmV4dEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbmV4dC5wbmcnXHJcbmltcG9ydCBuZXh0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL25leHQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgamF2YXNjcmlwdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC5wbmcnXHJcbmltcG9ydCBqYXZhc2NyaXB0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2phdmFzY3JpcHQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgY3NzSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9jc3MucG5nJ1xyXG5pbXBvcnQgY3NzTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy1uaWdodC5wbmcnXHJcbmltcG9ydCBucG1JY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL25wbS5wbmcnXHJcbmltcG9ydCBucG1OaWdodEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbnBtLW5pZ2h0LnBuZydcclxuaW1wb3J0IG15c3FsSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC5wbmcnXHJcbmltcG9ydCBteXNxbE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC1uaWdodC5wbmcnXHJcbmltcG9ydCBmaWdtYUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEucG5nJ1xyXG5pbXBvcnQgZmlnbWFOaWdodEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEtbmlnaHQucG5nJ1xyXG5pbXBvcnQgd2VicGFja0ljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay5wbmcnXHJcbmltcG9ydCB3ZWJwYWNrTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3dlYnBhY2stbmlnaHQucG5nJ1xyXG5pbXBvcnQgc3ltZm9ueUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS5wbmcnXHJcbmltcG9ydCBzeW1mb255TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3N5bWZvbnktbmlnaHQucG5nJ1xyXG5pbXBvcnQgcGhwSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9waHAucG5nJ1xyXG5pbXBvcnQgcGhwTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3BocC1uaWdodC5wbmcnXHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvIFNsYWInLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2tpbGwgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0KCd0aXRsZScpfTwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9IHN0eWxlPXt7bWFyZ2luVG9wOic0JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amF2YXNjcmlwdEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2phdmFzY3JpcHROaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuamVzdExvZ29MZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3ROaWdodEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24gbGdVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3ROaWdodEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmplc3RMb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amVzdEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amVzdE5pZ2h0SWNvbn0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaXRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaXROaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV4dExvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV4dEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV4dE5pZ2h0SWNvbn0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVhY3RJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWFjdE5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc0ljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc05pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BocEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BocE5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbU5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e215c3FsSWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bXlzcWxOaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmaWdtYUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZpZ21hTmlnaHRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2VicGFja0ljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dlYnBhY2tOaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzeW1mb255SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3ltZm9ueU5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNraWxsLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignc2tpbGwnKShTa2lsbCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBjb250ZW50OntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQmFubmVyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRleHQxJyl9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29udGV4dDInKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5CYW5uZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdiYW5uZXInKShCYW5uZXIpICAgICAgICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQXJyb3dCYWNrSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zJztcclxuaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFBsYXlDaXJjbGVGaWxsZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkJztcclxuaW1wb3J0IFJhZGlvQnV0dG9uVW5jaGVja2VkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmFkaW9CdXR0b25VbmNoZWNrZWQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuXHJcbmNsYXNzIEN1c3RvbWl6ZUNhcm91c2VsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvdW50OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVRpbWVyID0gdGhpcy5oYW5kbGVUaW1lci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnRpbWVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVOZXh0ID0gdGhpcy5oYW5kbGVOZXh0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCYWNrID0gdGhpcy5oYW5kbGVCYWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oYW5kbGVUaW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVGltZXIoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLnRpbWVyKCk7fSwxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpPT4oe1xyXG4gICAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50ICsgMVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnJvdGF0ZUJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pih7XHJcbiAgICAgICAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50ICsgM1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKT0+KHtcclxuICAgICAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgKyBwcm9wcy5yb3RhdGVCeVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJhY2soKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMucm90YXRlQnkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHByZXZTdGF0ZS5jb3VudCAtIDNcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgLSBwcm9wcy5yb3RhdGVCeVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudDogMH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpbWdzcmMsXHJcbiAgICAgICAgICAgIHJvdGF0ZUJ5LFxyXG4gICAgICAgICAgICBtb2RlLFxyXG4gICAgICAgICAgICBjb250cm9sQnV0dG9uLFxyXG4gICAgICAgICAgICBuYXZpZ2F0ZUJ1dHRvblxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gW107XHJcblxyXG4gICAgICAgIGlmKCFpbWdzcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxpc3RcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKCFyb3RhdGVCeSkge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBpbWdzcmMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQoIHRoaXMuc3RhdGUuY291bnQgLyAzKSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3NyY1tpXX0gc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8nLCB3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGltZ3NyYy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIHJvdGF0ZUJ5KSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3NyY1tpXX0gc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8nLCB3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgUmFkaW9OYXZpZ2F0aW9uID0gW107XHJcblxyXG4gICAgICAgIGlmKCFpbWdzcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJhZGlvTmF2aWdhdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIXJvdGF0ZUJ5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGltZ3NyYy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBSYWRpb05hdmlnYXRpb24ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7ZGlzcGxheTonaW5saW5lJywgdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQoIHRoaXMuc3RhdGUuY291bnQgLyAzKSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDMgKiBpfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlDaXJjbGVGaWxsZWRJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe2NvdW50OiAzICogaX0pfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblVuY2hlY2tlZEljb24gc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPydibGFjayc6J3doaXRlJyl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFJhZGlvTmF2aWdhdGlvbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIHJvdGF0ZUJ5KSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7Y291bnQ6IHJvdGF0ZUJ5ICogaX0pfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlRmlsbGVkSWNvbiBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHtjb3VudDogcm90YXRlQnkgKiBpfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uVW5jaGVja2VkSWNvbiBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luTGVmdDonLTFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezF9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6MH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbEJ1dHRvbiA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0ZUJ1dHRvbj09PXRydWU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17MTB9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UmFkaW9OYXZpZ2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo8R3JpZCBpdGVtIHhzPXsxMH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xCdXR0b24gPT09IHRydWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6ZUNhcm91c2VsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVpZ2h0OicxMDB2aCcsXHJcbiAgICAgICAgb3ZlcmZsb3dZOidoaWRkZW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonIzFmMWYxZicsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzglJywgXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Oic4JSdcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J0JlYmFzIE5ldWUgJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOicjQ0FDQUNBJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonI0NBQ0FDQScsXHJcbiAgICAgICAgZm9udFNpemU6JzIycHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9LFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBEcmF3ZXIgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZSxcclxuICAgICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV0VJQU4gV0FOR1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfSBzdHlsZT17e21hcmdpblRvcDonNHJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Xb3JrXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV3JpdGluZ3NcIiB1bmRlcmxpbmU9J25vbmUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCd3cml0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xhbmc9PSdlbic/Jy4vcmVzdW1lLnBkZic6Jy4v5bGl5q23LnBkZid9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXInIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgncmVzdW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkRyYXdlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKERyYXdlcikiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvcHVibGljLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgbGluazoge1xyXG4gICAgICAgIGNvbG9yOidibGFjaycsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonIzkxOTE5MSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGlua05pZ2h0OntcclxuICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyNCREJEQkQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgRm9vdGVyID0gKHt0LCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSAgPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PSdkYXknP3N0eWxlcy5mb290ZXJCbG9jazpzdHlsZXMuZm9vdGVyQmxvY2tOaWdodH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBzbT17N30gbWQ9ezR9IHN0eWxlPXt7bWFyZ2luQm90dG9tOicycmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb250YWN0VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPis4ODY5IDEyIDU5NyAxMDk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPndlaWFub2ZzdGVlbEBnbWFpbC5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBzbT17NX0gbWQ9ezR9IHN0eWxlPXt7bWFyZ2luQm90dG9tOicycmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdmb2xsb3dUaXRsZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93ZWlhbm9mc3RlZWwubWVkaXVtLmNvbS8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09J2RheSc/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubGlua05pZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVkaXVtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vd2VpYW5vZnN0ZWVsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGU9PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtOaWdodH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdpdGh1YlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dlaWFuLXdhbmcvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGU9PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtOaWdodH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmtlZGluXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnY29weXJpZ2h0Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2NvcHlyaWdodERlc2NyaXB0aW9uJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcbiAgXHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignZm9vdGVyJykoRm9vdGVyKVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9jc3MvUHVibGljL0hlYWRlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IHtTZWxlY3QsIFNlbGVjdDJ9IGZyb20gJy4vUHVibGljQ29tcG9uZW50JztcclxuaW1wb3J0IEJyaWdodG5lc3MyT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMk91dGxpbmVkJztcclxuaW1wb3J0IFdiU3VubnlPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1diU3VubnlPdXRsaW5lZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHRvRGF5LCB0b05pZ2h0LCB0b0VuLCB0b1poSGFudCB9IGZyb20gJy4uLy4uL3N0b3JlJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRGYW1pbHk6J0JlYmFzIE5ldWUgJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIGZvbnRTaXplOicycmVtJyxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICBmb250U2l6ZTonMS4xcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9XHJcbiAgfSxcclxuICBuaWdodExpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonI0ZGRkZGRicsXHJcbiAgICBmb250U2l6ZTonMS4xcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgZm9udFNpemU6JzEuMXJlbSdcclxuICB9LFxyXG4gIG5pZ2h0TGlua0FuY2hvcjoge1xyXG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgIGNvbG9yOicjQkRCREJEJyxcclxuICAgIGZvbnRTaXplOicxLjFyZW0nXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgIH1cclxuICB9LFxyXG4gIG5pZ2h0SWNvbjp7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGZvcm1Db250cm9sOiB7XHJcbiAgICBtYXJnaW46ICcwLjVyZW0nLFxyXG4gICAgd2lkdGg6JzZyZW0nLFxyXG4gIH0sXHJcbiAgaW5wdXRMYWJlbDoge1xyXG4gICAgZm9udFNpemU6XCIxN3B4XCIsXHJcbiAgICBmb250RmFtaWx5Olwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gY29uc3QgWyBsYW5ndWFnZSwgc2V0TGFuZ3VhZ2UgXSA9IFJlYWN0LnVzZVN0YXRlKCdlbicpO1xyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgLy8gc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaGFuZGxlTGFuZ1RvUmVkdXgoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMYW5nVG9SZWR1eCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZih2YWx1ZSA9PSAnZW4nKSB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9FbigpKVxyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIGlmICh2YWx1ZSA9PSAnemhIYW50Jykge1xyXG4gICAgICAgIGRpc3BhdGNoKHRvWmhIYW50KCkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBoYW5kbGVEcmF3ZXJPcGVuLFxyXG4gICAgICBtb2RlLFxyXG4gICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFdFSUFOIFdBTkdcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfSBsZz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbWREb3duPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuM3JlbScsIHBhZGRpbmdMZWZ0Oic2JSd9fT5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdDJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOidlbicsbGFiZWw6XCJFbmdsaXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonemhIYW50JyxsYWJlbDpcIuS4reaWh1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuM3JlbScsdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlID09PSAnZGF5Jz9cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmRpc3BhdGNoKHRvTmlnaHQoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJpZ2h0bmVzczJPdXRsaW5lZEljb24gZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmRpc3BhdGNoKHRvRGF5KCkpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxXYlN1bm55T3V0bGluZWRJY29uIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbScsIG1hcmdpbkxlZnQ6KGxhbmc9PSdlbic/Jy0xcmVtJzonJyl9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nZGF5JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xb3JrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV29yayc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDoobGFuZz09J2VuJz8nbm9ybWFsJzonYm9sZCcpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV29ya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dvcmsnP2NsYXNzZXMubmlnaHRMaW5rQW5jaG9yOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OihsYW5nPT0nZW4nPydub3JtYWwnOidib2xkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3b3JrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJywgbWFyZ2luTGVmdDoobGFuZz09J2VuJz8nLTFyZW0nOicnKX19PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSdkYXknJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dyaXRpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV3JpdGluZ3MnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6KGxhbmc9PSdlbic/J25vcm1hbCc6J2JvbGQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dyaXRpbmdzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J25pZ2h0JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xcml0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dyaXRpbmdzJz9jbGFzc2VzLm5pZ2h0TGlua0FuY2hvcjpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDoobGFuZz09J2VuJz8nbm9ybWFsJzonYm9sZCcpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbScsIG1hcmdpbkxlZnQ6KGxhbmc9PSdlbic/JzAuOHJlbSc6JycpfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlPT09J2RheScgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsYW5nPT0nZW4nPycuL3Jlc3VtZS5wZGYnOicuL+Wxpeatty5wZGYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1Jlc3VtZSc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OihsYW5nPT0nZW4nPydub3JtYWwnOidib2xkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgncmVzdW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU9PT0nbmlnaHQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGFuZz09J2VuJz8nLi9yZXN1bWUucGRmJzonLi/lsaXmrbcucGRmJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9SZXN1bWUnP2NsYXNzZXMubmlnaHRMaW5rQW5jaG9yOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6KGxhbmc9PSdlbic/J25vcm1hbCc6J2JvbGQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdyZXN1bWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICA8SGlkZGVuIGxnVXA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzbT17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlID09PSAnZGF5Jz9cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmRpc3BhdGNoKHRvTmlnaHQoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnJpZ2h0bmVzczJPdXRsaW5lZEljb24gZm9udFNpemU9J2luaGVyaXQnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9EYXkoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFdiU3VubnlPdXRsaW5lZEljb24gZm9udFNpemU9J2luaGVyaXQnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbk9wZW49e2hhbmRsZU9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonZW4nLGxhYmVsOlwiRW5nbGlzaFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6J3poSGFudCcsbGFiZWw6XCLkuK3mlodcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT17bW9kZT09J2RheSc/Y2xhc3Nlcy5pY29uOmNsYXNzZXMubmlnaHRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT48L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKEhlYWRlcikiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInXHJcbiBcclxuZXhwb3J0IGNvbnN0IFBhZ2VMb2FkZXIgPSAocHJvcHMpID0+IHtcclxuICBcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldFByb2dyZXNzKDEwMCk7XHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgbW9kZVxyXG4gIH0gPSBwcm9wcztcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TG9hZGluZ0JhclxyXG4gICAgICAgIGNvbG9yPXttb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnfVxyXG4gICAgICAgIGhlaWdodD17M31cclxuICAgICAgICB3YWl0aW5nVGltZT17NTAwfVxyXG4gICAgICAgIHRyYW5zaXRpb25UaW1lPXsxMDAwfVxyXG4gICAgICAgIGxvYWRlclNwZWVkPXs2MDB9XHJcbiAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxyXG4gICAgICAgIG9uTG9hZGVyRmluaXNoZWQ9eygpID0+IHNldFByb2dyZXNzKDApfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFNlbGVjdCBhcyBNYXRlcmlhbFNlbGVjdCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2wsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFRyYW5zbGF0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGlucHV0TGFiZWw6IHtcclxuICAgICAgICBmb250U2l6ZTpcIjEuMXJlbVwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6XCLlvq7ou5/mraPpu5Hpq5RcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1SZXZlcnNlXCJcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBvbk9wZW4sXHJcbiAgICAgICAgb25DbG9zZSxcclxuICAgICAgICBvbkNoYW5nZSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBvcGVuLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgb25PcGVuPXtvbk9wZW59XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUcmFuc2xhdGVJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19Lz5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZT8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbD8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPiAgICAgICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIGZvcm1Db250cm9sUHJvcHMsXHJcbiAgICAgICAgc2VsZWN0UHJvcHMsXHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgZGlzYWJsZWQgPWZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4PTAsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBuZXdQcm9wcyA9IHtcclxuICAgICAgICAuLi5wcm9wc1xyXG4gICAgfTtcclxuICAgIGRlbGV0ZSBuZXdQcm9wc1tcImhlbHBlclRleHRcIl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZUljb24vPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1Db250cm9sUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6Y2xhc3Nlcy5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDpjbGFzc2VzLnNlbGVjdFJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxNYXRlcmlhbFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5zZWxlY3RQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge3NlbGVjdDogY2xhc3Nlcy5pbnB1dH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBTZWxlY3REaXNwbGF5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6dGFiSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZT09PW51bGw/XCJcIjp2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclZhbHVlPXtzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRXF1YWwoYSxiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBudWxsIHx8IGE9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiID09PSBudWxsIHx8IGIgPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gYi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhID09IGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzPSBpdGVtcy5maWx0ZXIoaXRlbT0+IGNoZWNrRXF1YWwoaXRlbS52YWx1ZSxzZWxlY3RlZCkgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzWzBdP2ZpbHRlcnNbMF1bXCJsYWJlbFwiXTpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn1cclxuXHJcblNlbGVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuU2VsZWN0Mi5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgRXhwYW5kTGVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3MnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOic0cmVtJyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaWNvbk5pZ2h0OiB7XHJcbiAgICAgICAgZm9udFNpemU6JzRyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjYzljOWM5J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNjcm9sbHVwID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbc2Nyb2xsQywgc2V0U2Nyb2xsQ10gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbEMod2luZG93LnNjcm9sbFkpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbHRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3thbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtzY3JvbGxDID4gNDAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTY3JvbGx0b1RvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbmRMZXNzSWNvbiBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmljb246Y2xhc3Nlcy5pY29uTmlnaHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fT48L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9QdWJsaWMvSGVhZGVyJ1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL1B1YmxpYy9CYW5uZXInXHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vUHVibGljL0RyYXdlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9QdWJsaWMvRm9vdGVyJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUGFnZUxvYWRlciB9IGZyb20gJy4uL1B1YmxpYy9QYWdlTG9hZGVyJ1xyXG5pbXBvcnQgTGVhcm5CeURvaW5nIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L0xlYXJuQnlEb2luZydcclxuaW1wb3J0IFNraWxsIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L1NraWxsJ1xyXG5pbXBvcnQgU2hhcmluZyBmcm9tICcuLi9Ib21lL2NvbXBvbmVudC9TaGFyaW5nJ1xyXG5pbXBvcnQgV29ya2luZyBmcm9tICcuL2NvbXBvbmVudC9Xb3JraW5nJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBkYXlCYWNrZ3JvdW5kOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyxcclxuICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgIH0sXHJcbiAgICBuaWdodEJhY2tncm91bmQ6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonYmxhY2snLFxyXG4gICAgICAgIGNvbG9yOicjRkZGRkZGJ1xyXG4gICAgfSxcclxuICAgIGJvZHk6e1xyXG4gICAgICAgIHBhZGRpbmdMZWZ0Oic4JScsIFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDonOCUnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgV29yayA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtkcmF3ZXIsIHNldERyYXdlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXREcmF3ZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tb2RlKVxyXG4gICAgY29uc3QgbGFuZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubGFuZylcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2RyYXdlciA9PSBmYWxzZSAmJlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5kYXlCYWNrZ3JvdW5kOmNsYXNzZXMubmlnaHRCYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlTG9hZGVyIG1vZGU9e21vZGV9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlck9wZW49e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonOHJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonNnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3JraW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzZyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonNnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGFyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzZyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVhcm5CeURvaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzJyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtkcmF3ZXIgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaTE4bidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH0sXHJcbiAgICBzdWJ0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS42cmVtJyxcclxuICAgICAgICBmb250V2VpZ2h0OiA1MDBcclxuICAgIH0sXHJcbiAgICBpbWc6e1xyXG4gICAgICAgIGJvcmRlclJhZGl1czonNTAlJ1xyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuMnJlbSdcclxuICAgIH0sXHJcbn0pXHJcblxyXG5jb25zdCBXb3JraW5nID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0KCd0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDil48mbmJzcDt7dCgnc3VidGl0bGUxJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKXj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdzdWJ0aXRsZTEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29udGVudDEtMScpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRlbnQxLTInKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZW50MS0zJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDil48mbmJzcDt7dCgnc3VidGl0bGUyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKXj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdzdWJ0aXRsZTInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHhzRG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDil48mbmJzcDt7dCgnc3VidGl0bGUzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4gc21VcD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKXj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdzdWJ0aXRsZTMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbldvcmtpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCd3b3JraW5nJykoV29ya2luZykgIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFsbFwiOiBcIkhvbWVfYmFsbF9fMk1kVWNcIixcblx0XCJuZXh0TG9nb1wiOiBcIkhvbWVfbmV4dExvZ29fXzI3TzhGXCIsXG5cdFwiamVzdExvZ29MZ1wiOiBcIkhvbWVfamVzdExvZ29MZ19fMnJ0Vk5cIixcblx0XCJqZXN0TG9nb1wiOiBcIkhvbWVfamVzdExvZ29fXzJGUU9OXCIsXG5cdFwiYm91bmNlXCI6IFwiSG9tZV9ib3VuY2VfXzFhNWlfXCIsXG5cdFwic2tpbGxCbG9ja1wiOiBcIkhvbWVfc2tpbGxCbG9ja19fMVRtbmhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvbjJcIjogXCJIZWFkZXJfYnV0dG9uMl9fd0Y3WEdcIixcblx0XCJib3VuY2VcIjogXCJIZWFkZXJfYm91bmNlX18yNHRVOVwiLFxuXHRcImJhbGxcIjogXCJIZWFkZXJfYmFsbF9fM3BSaTdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlckJsb2NrXCI6IFwicHVibGljX2Zvb3RlckJsb2NrX19YdUNyLVwiLFxuXHRcImZvb3RlckJsb2NrTmlnaHRcIjogXCJwdWJsaWNfZm9vdGVyQmxvY2tOaWdodF9fM21pN2JcIixcblx0XCJpbWdEZXNjcmlwdGlvblwiOiBcInB1YmxpY19pbWdEZXNjcmlwdGlvbl9fMkdCREpcIixcblx0XCJpbWdEZXNjcmlwdGlvbk5pZ2h0XCI6IFwicHVibGljX2ltZ0Rlc2NyaXB0aW9uTmlnaHRfXzNDWEpFXCIsXG5cdFwiYmFyXCI6IFwicHVibGljX2Jhcl9fMzQ3UVhcIlxufTtcbiIsIlxyXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcclxuY29uc3QgbG9jYWxlU3VicGF0aHMgPSByZXF1aXJlKCduZXh0L2NvbmZpZycpLmRlZmF1bHQoKS5wdWJsaWNSdW50aW1lQ29uZmlnXHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcclxuICBkZWZhdWx0TGFuZ3VhZ2U6J2VuJyxcclxuICBvdGhlckxhbmd1YWdlczogWyd6aEhhbnQnLCAnZnInLCAnZXMnXSxcclxuICBsb2NhbGVTdWJwYXRoczp7XHJcbiAgICB6aEhhbnQ6J2NuJyxcclxuICAgIGZyOiAnZnInLFxyXG4gICAgZXM6ICdlcydcclxuICB9LFxyXG4gIGxvY2FsZVBhdGg6IHBhdGgucmVzb2x2ZSgnLi9wdWJsaWMvc3RhdGljL2xvY2FsZXMnKVxyXG59KVxyXG4vLyBleHBvcnQgY29uc3QgdXNlVHJhbnNsYXRpb24gPSBuZXh0STE4TmV4dC51c2VUcmFuc2xhdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFdvcmsgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvV29yay9Xb3JrJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5jb25zdCBXb3JrUGFnZSA9ICh7IHQgfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8V29yay8+ICAgXHJcbiAgICApXHJcbn1cclxuXHJcbldvcmtQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2hlYWRlcicsICdiYW5uZXInLCAnd29ya2luZyddLFxyXG59KVxyXG5cclxuV29ya1BhZ2UucHJvcFR5cGVzID0ge1xyXG50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKFdvcmtQYWdlKSIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9naWYxMC1jM2Y2ZTg3YmU1YWMzZjRiMjEwYWU5OTQxODQ2NWJlZS5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmNC1lYzI3ZDEzZTQ1MmY1OGNlZDY2NTUxMWQ4YmVjNjUwYi5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmNS1hOGFkMTlkNzY5OWU1YWI3MDkwZGRhNGE4ZDgyNTJmOC5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmNi1lNDliYWVlNjcyN2FmZjg3YWU4MGExMmU2OGFmMzg0MC5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmNy1kNDFmOTVkYmZiYjAzNDIxOTMwZjBmMDZkNGVmMTJjZi5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmOC0xYTM4Y2I5ODdmODdhOTgzODRkZDgzOGVlZTFhMWRjZS5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2Fyb3VzZWwxLWE1NzA5ZGFlZGE0MTIzMWY4MWY5MmQ4YjNmZTczMDM3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jYXJvdXNlbDItNTI5YzAxMjU5ZGQ3MzIwNzY0NzU5YjE0OWMxMTRkNWIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Nhcm91c2VsMy04MTE5YzFiMzM4ZDc1ZTk1MDA4M2JjOWQzYzA3Yzc5Yy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ1dVbEVRVlJvZ2UyWXZXN1VRQlNGdnd0cFVDQ1FJQ0ZxNkdnb0tHa29LS0RLQ3dTS0NMb2dYZ1lwcndCMWhBQXBVaWpnRFJBVVNMUkFmb3NrUk5sZGNTZ3lFY1phajYvdDJjMHVtaythWWpYWGQ4N3huYjgxWkRLWnpEUmhkUUdTRG9EWk1XaUpjV0JtbDJJQjV4eEpmaVlTMDRWYURSNGptd21FZEtWV1E2N0ltTWtWS1pJcmtwQmFEVE9PSkxHMzhjWE1idm4xVkNOcEY1aHZvUUhvWHBHcmp1ZHJrV1RBWEVzTlFQYzFzaEJFZEdVT09OOVNBK0F6c2d2MEsvcG1nTXVPSEhWY2lmVDFnYjI2QkxWR3pFekFWaVJrVDgzNTJzREladERRelVnZzljNjFVL29kTStJYTIyc2s5Vm5TeElocjdQK21JcDV6QkpwVjVKbVp2V2dRRHhOYWtlZ2ZvQXBpTzkrWnJaSFVScWFxSWhPNWE2MDR6cEdsMGpNVHVVWThsRS9xc2E2UjN4VjluNndBY051UnIyeWtxaUlDdGowQ1hVYk1iREJrOEZQS3Q5WmZqcFJlSXp0bVZuWFArd2R2UmFCNnJwYU5iQUd2Z2Q2UTJGN28rMTZUbzVnckxaSTJLaGJ1WU5oVlh0SzhwR1ZKNzBKYmxqVDBqNU9rWGtYdWpWRVllUlhaaFM1MnlEc2J5ZnZTbTZmSjFJcnRIa3VTWWx2b1VNSXpqeUloN20wL3hSb0JXQVcySlgyUTlGelN0YXJBTU9VZVMxcmo1T1dzUnZLbS8vQWg2V2xrQ3BRWkZFeGRsN1J3S2w3U2NZTThUMFpoWkxHQmdDTDkwTnF3Nk5YbnZjWkQrekkzR2FQTUQyOWdxalV5S2theTJNL2lpNlBiaUx2c1puWW82U1p3UDdRSHRMdXl4emdDUGdMcndKcVpIYnIxdFIxUjBnWGdMbitOM1dtWjZoc253dGVCdDJhMjN5WkppcStFQUVpNmdhOWE1YmYrT2NYNHlZd1VDZFc2Qnp3TURlQk5hTy9ON0dnVTQyWXltY3owOEFmeStXZXR1K3RBK1FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDTlVsRVFWUm9nZTJZdlVvY1VSVEhmeHRzWk9OWGhHQW5hR2VUVjBpUlFpdXJkQ2FGUkN0RFNndDlBRi9CTnpCcFF3aVNnQmJhcFF5a0NLbWpiaFpCMUpCMWNTeG14UFV5OTl3ek0yZVdsZHdmM0dMM3pqM24vT2ZjajNNSElwRkk1Q0hSVUR4ekRqVHJEa1FSdzRqMHdDT0ZrV09iV0NvUmpFRWo1TVFna0tvRVk0Z1o2VE14STczRWpCaFNlMFora0o1RkZ1MjBaQXhBOVl4TUtzWnJhQUNqSldOUU13a2tubmFGcmpvSU1TYjRTSUFuQmo1b0FCM0J5YmlCajJuQmZnZkZ5OUpNclFSb0NmMm5RaEMrOXRPeEliMk1rMnlNaUVZSTJPOWNiZWUzSkVUbFd5dkUraXdwSWtUbE8yWkU0QzNoTStPMU0yWWdNeUplZ0R5TVZmVmRSMGFzaFR5b2pBemtHbGtqZkk0c09XTUdjbzFvY0F2RXZxNlJhMC9mZCs3dlNNOFU5bHdodm93a3dCOU5nRm9oM1J6bnQ3aFY2NlhDbmxaSW03UXdEYUlWQXY2NTZncHBBWjlJaXoyWFR0YjNPMkNqMTVZNWUrUXYzQzc1MWVrRXNBenNabTA1K3k4UFgzVzlaeGYrSGU4OXpoTGdjUVc3VGNIdWp0WklrYWtsN1I1TGxMdVhqQU92aFA1YVBueHNJcDhOWGVBQWVBYzhGZXhNa05aYUg0Ri9BWnNiTmVoZ0plRFVKMnFLOUtxcURiNjN2YWxEeUdLQkFOeDcvVlhKc1l2YTRJWUtDQ2w3dWhmeDRYS2tmZERpSEtrVHRVK3JYYXN1MUVLS3BQMENtQVZlWkcyZWNpVzd4Ri9nRVBoS3VqRmNHTnZQWlpoVTBCYndqWEtMT1FGK0FkdkFTK3hmVENsbWdGWGdBM0NHUC9CTDRBdXdEc3haT2JmNDNKbkhNUEFjV01nYXdPZXM3Wk5Pb1Vna0V2bVB1UUZTQkFmVkVqaDhad0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUVGa2xFUVZSb2dlMlpUWWhXVlJqSGY4ZVpHaXV6QmttMHRCSUdvNXdXdVFndDZJTUtRM0FXSWRtaW9pS3BoUkFrRkVHTEZrRVVsRUZHa0VSRVJEV1EwRUtJQ3FZUG0wWW9STnRZYnZ3WWE4S1FVa25IeWZtMXVPOHc1NzFPTStlOGMrOG80VzkxNXN4NVB2NzN2dmZjNXp3WC9pZUVLcHlveTRCbHdFSmdkcWI1SDhDdlFIOEk0YThxOHNsQ2JWZlhxM3V0aG1IMUUvV0dtUlF4VCsyclNFQ1pFZlhaM0p5eWYxcnFaVUEvRUYrNVVXQVhjQkFZem5UWkNYUURDMHJ6RzBNSXIrWG1sNHo2Y2VrS3ZxY3VtcWJQV2VvYWRWL2s5eC8xbHFyeUxnZGNvWTVHd1Y2bzJQOThtNSs1NzZyMEh3ZDZPd3F5WGExazF5dkZXRm02V05kWEhZUFNyVjlYZVlEeE9EdWlPRStsMk16S2NONEd4TS9DanR3RU14aUl4dGVrR0NRTEFkcEw2M04zcHh4T1J1T2tGMnl5a0JEQ01IQTRtcm91MWJZRjR1ZmlVSXBCemgyQjVsditVS1p0RXVwQzRPNW9xcitPSUErVTl2azdLL1lmMUsxUmpFTnFlNVV4eGdLMXFUdWpRRWZWdFJYNTdsUS9zcG4xcWZhdGxDakxnYStBUzZQcEg0QnRGRlZzTGgzQWpjQmFpbkpsakUrQiswSUlveTM0VEVOOXpIclpwczZwVFVCRHhPUHEzelVKT0tJK2JmSE95aUxycDZWdUFONG9UUjhEOWdBVEhZcVdBbGMzeGdlQVgwci9udzljQ2Z3TWJBRzJoaENPNWVTVWpYcXp4Vmxoak4vVUI5VUxKN0haRkszZkZNMnZVZ2RzcnFtT3ErK29WOVV0NU5zbzZINTFjWUxOR1VMVTUwc0N5Z3lwTjlVbG9yc1U3UFpFdXlZaDZycEpCTVFjVkMvUHlUSDF6WDVYTlA0eGhQQjFUcEFHYmNBcmlXc1hBUnR6bktjSzZZckdyUjUyVmpMKzRLZHdmNDd6VkNIeHVoTTVBU0p5aTh3dTlZTFV4YWxDRHNRQjh2S1pHVktGN0lyR3E5UjVMY1RhazdsK2J3aGhKSFZ4cXBBdkdEOFh6QUZhYWRNTUFQc3oxdmZtT0U4U0VrSTRUZk9PODdENmxucHhScXpUd0RPSmF3ZUJWek44azFQcmJ3WjZHTitLbndSNjFBK0FuMmcrbm82eE5QNGpoTkNyZGdFdjh0L2wwUkN3cHRZK3NEcFgvVEx4cFZZbUxsSHVVYi8zekJKbGk4VUpzWDdVbnVrS2lYeGRZZEgwNjFaenUvaE5aQjBqTFhwWjc1ZW1SNEI5d05FSlRCWlRWTGdURWtJNFRITkRvMzdVTHZWWWRJV1BxQnZVdVpQWVRGajkxa0hPSFhtZFl1c0YrQjI0TFlSUVBsK2NOWksyWDR1Uy9kNW82cEZ6U1FTa3Z4QlhVMVN2QUx0RENKL1ZsRS9McEFxNU5ocC9VMGNpMHlWVlNOeW1PWjdodnlNYW44cXd5eVpWeUZBMFhwTGhQNjZVVytsNVZZdkZaN0V4L3B4c3k0MXNGcWduSTd0Ylp5TFhxWks2cUNGZ2pEY1RiRDZNMWcrcXVRM3plbENmSzVVY0x6bkJDVTZkYlZFWnh6eFJkMzdKRGJwR0xkUUhySWltOXdMdlVsUy9BVmdPUEVyelY2YlBnZFdObzhDNVFlTjN2OU4wdHF1ZFUzcytDNmlYcUp2VlU1TUlPS0crckhaTTdiRWFXdjY4ckM2aGFObmNRZEdIa3VJbzJ3ZjBoaEFHSzhud1BPYzV1L3dMdWV4OWxuVit0S0VBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUR2VWxFUVZSb2dlMlpXNGhPVVJTQXZ6R0R3YmhNTWcxbVhHb2FZVHp3SUpkeVNSb0pENUx4SUVuRWcxSVVLY1dERXVWU1NKazhTTUlVTlE5VFJMbmZpalM4dUx4Z0JpTVNRKzYzaC9VZi85cG41aDk3bmYrY01XbSsyclhQbWIzM1dtdlAzdXVzdFg3NFQ4aUphWjNScVRZUXlEZk9mUTA4QjY0QjcyTFN4MFFlc0FKNEJQeUtvWDBCVGdLajJ0T0kvc0Q1bUF3SXQyL0FCcXRDVVk1V1grUVk2SjM3Q2RRRERjak9XaWdFS29EaTBQdDF3SzRJK25sekFuY0hEd01sV2E3WkJaZ0xQRmJyZmdjbVpibHVSaVlndXg4STJ4THora1c0ZCs1cXpPdi80YUFTY29YNHZKNW1JdTVtalV4QWh2T3ZyMHBDUUlxYlNzNGFud2xkREl2bjR0NkZtNGE1Vm02by9sQ2ZDUlpEOGtManJkN0p3bWZWOS9yQVdnejVBcnhTenlNTWM2M29lL0VzQ1FHMXBNL3VvU1FFSUdIT1J5Vm5laEpDRnVINitiaUY1QUNubEl4bnlKR09uVnpnamhMVURDeUlhZTFDNERqdXgzYUY3K1FvMzRGeHdBV2d0M3AzQzZoRG9sZ3IzWUV4eUlZVXF2ZTF3SHprbTVJWXkwZ21ZQXhhSFZDUXBBRUF5M0V2WTV6dERiQVdPY0ltckVkck5iQTM5TzQ5Y0ovV2s2SnlZRWlxL3hSNEdQcDdFVEFJZUFCVUl4Zjl2VkVuTStPUlhDSFl2UmZBWXFCYkczTjJxL0c3MWZ0SzVPdXRZNm9QaUVzZkhMZmlZUzRyb1UrQVVvODVyUm15Q2RlQWNHc0N4c2FwdUtZaUpHeXE1N3l3SVZYNDNaVUdvSjlGUWQ4UVpZYnEzd1l1V29Ta3lBVjJlSTR0UVRKRWIzd05LVlA5cU1uT1JOSVgzNGVGbHNWOURkSGpQbGtFS0t4QlpoblExWGV3cnlGUFF3STZITDZHMUt0K0pWSU9zbkxmT1A0UjR1Njk4RFhrTE9tOG9JQm9aWm9iaU52MnBjYXl1SzhoUDNBOXpoTGdBTkRUSU9zSHNONXpiQ093MDdDMktkYmZCOHdqN1lwWHBaNlBBdmR3MDlPQTh0QnpEWExIdHBJNVBHcENhbHlKMW9IN0FPZUlGaERxRUdVbWNKMldJVW8xa2lHMkMvTThGVy9Ma0lBQlNOR3ZBbnNWMzhHYVJsWUJSMEx2dmlIMXJ1Wld4cGNpRVc0bVh1RVdOTnFGTWlURTFybkRhdVM0WlNKVDlCczdsdi9JSHRKWjIwdGdDaTN6aTMrR3Ivc3RCV2FwNTZWMElDUEEzNURacE5QUHU4RHBaTlNKanE4aHcxVC9VaEtLWkl1dklicE04OEd3Zm5mVi8ycVlaOGJYa0NiVkgyNVlYMGZLVVdwZXNUT1h0QnQ5UzlzdU42QVlDVnVDZVpNVDA4NUFEOFNBUUtuOUhuT09xZkdOMkNyL2liSVJOK1RZUnVzWlhENFNHZXV4Szl0SlJ5L3lrVUJQSy9nUU1YQU9jdncyNC80ODl3czRRNFRLWWRJVTQxYmovOWF1NEhxOERrVXZKRGY1U21ZRFBnSGJjZDF2b21UejgvSndwR1F6RGFsREJSWEk4MGdDMVppMWRwMTA4dS81RFVleWJXYVlWbWtBQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNiRWxFUVZSb2dlMmEwV29VTVJTR1Q3eTFXdHE2cTMwRDdWWjhnV0pSWDhDTHVyUlVmUkt2OVhGRUw3elUxN0JTUVJRS0xZSTQyMTUvWGt4aW81dk5KRE9aU2F6OVlXQ1liUDdrNCtUTVNZWVZ1ZFIvSW1BQ3ZBVm1RQVc4QVRaeXp5dEt3TFlHK0ZzellEdjMvSUlFYkMyQU1Eb0RIdWFlcDFjQkVPWERBUGVCMHdBSW85T1V5K3hLS2lNUk9SR1JLdUwzVjBYa1hUR1IwWkhZMVBlYndIRkVWSkpIcGkyRXlZa1Q0SzUrZGhzNGlvVEpselBNSi9hL0IwTmRKMXlKZmN6NU1wc0ErOEFOWUFSTWdTOE5NTU10TXcvRUhJeWo3Mm9STUFFUVJzODhIcnNCL2Z1RGlZQUFHSGw4eG9FZTZXRWlJUURXUEY2M0luelN3YlNBQUpoNi9KNUhlbldIYVFrQmRVS3ZMdkFjdG1oMmdERDZET3hhZm52QVpGQVl3bmV4amJJOFljaWltUkxDQVFKRHdOQjlPYzNKQVFKOTdnQzBZYkpJR0MwQUFmOE9ZQVU0YUxDZVlYMERzTThqcjBSa3lSdXl0QnFMeUQxWGcxTHFoNGk4YU9pL0pDSXZmL2N4TjhCTWVnQlJTaW50ajZONXBKVDY3dW9Ickl2SVVZTjlwWlJhRnZreklxNkIrbGF5TVcyUUQ2bE1JL1RJMDdZVjBQLzkzQk5nZzJHVEhlcTMwNHBqTGlISlhnRjNuSGdNOS9xMWRRRHNBT3Y2ZWdKOGFyQnRydkxVQmJGS0FRRkJJTEU2QXg0RUxMdTBNSWxCd2lFU0xyTkRZTi95ZTBxOWtXeXJMRHZnUTJEczhMdXAyNGFENkFqak8xaUZuTm5UUWxpRHgrWk1pak03dE1tSkFKaVl5Rnp6K0N3SGVoVHhKZVd4eDJPYUZTSVM1aVB1aXIwR2ZNc09FUW56bGJwS1g5Zlh0Q2dJQ3licERvQStFanNEVEQ2SWhERDVJWXc2d0pRRFlkUUNwandJb3dpWWNpR01BbURLaHpEaUl2eUZ3NGo2RzhCckhaMmYrdDU5eHI3VUJkUXZXSHpGMmJkMm5DY0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ0xFbEVRVlJvZ2UyYVcwN2NNQlNHUC9GT0VaY1cyQUhNd0E1R29NSUdlS0Nqb3RKdUVjb0NZQnRRVVFsUkNRbmVZT0RaZlhDT21FYUpmWnh4SElmeVMwZUtrdkVmZnpvKzhVVUQ3L3AvTkFUT2dBbndCUHdFQnAzMnFJRjJzUUNtRkpQaVdTODBvaHBDNGdYWTY2eDNTdmtnZWdHekF6empoNUI0SnROaHRnSGNvUWZKTGpNN3dGWnh2UVhjRXdhVFJXYWtKaDZBN2VKZTd6SlRMdXhld3V4U1hkajN2QTZ6SWZBTldBRStBbVBncHFKTlo4T3NEcUlLcHF3bE1vSHhRVWg4ZDNoOFZiUnZGVVlMWWJCRHFVNmZsQjZ0d0lSQUdHRFo0YlVXNEJNVkpoVENZQXU3VGo4Q3ZhTEFOSUV3MklKZXF2Rk1QbWsyaFpENGpTMXMwUkgyazV3VVJydUsxWVRJa0hqU2pBbFJCa2tHTSt0dzBvQVlXbDRCREltYkNSZElHYWFzUmVESzR6dWg1Z3pnckFVSUY0akJacUpPWHhUZXAxVU4yOGlHRDJURkFiS3U4SDZVSDgrVlhwUmEwZDQ1RFhJUnl6UkErNDVuSTBYNzg2cWJBOUlXdThGK25SWXIrcUlwOWlkZ3M0NHcxZWQzT3E2QVEyeE5yR09ML0pmSFV6WExqd3JhVkNDaDhRSjg5a0cwQVJNVEpBaENOT3N3dStiZmVlSVl1NUJzNnRmSkN2Z2F1eE1zYTdWNGxoUmlGaGpYeGtxelo0OE9JUXF0bVJoNzlzWTE0Vk5JWnVZZFBndEtqeXhPVWc0Y0htTkYrMnpPdGk2cG5yR1hnVCtldGxtZE5ocmdGanRMZnloaW5CdUVLUFlLb0pYQzFpb1dUS2NRb2xsaHNvQVFOWVhKQ2tJVUNwTWxoRWdMa3pXRXlBZlRDd2pSbS9nTGgyZ0FuR0N6ODFoYzErNngzL1hXOUJmMVZxZjdpWWtGdWdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDMEVsRVFWUm9nZTJhdldzVVFSaUhuemZxV2ZpUklubzJpcEIweGtLd1Z6RWFERVFMcmEwdExkT0puZitGLzRCWUtXaE1GRUphQ1ZhQ0dKc1VpU2JnQnlUQ2tjalBZamZobUp1WjdHNTJMM3U1UERBY096Y3o5LzdtZmVmekZnNnBPWkllU0dxcHZyUWszWGZ0SHZCb0dRVWExWGRaWVJyQVpUZlRKK1JIOWJic21lOXVScThLV1hVemZFSTZDdFdRanM3dVZZLzBrUkF6V3djMnVtSk9NVGJNck1NK24wZWczdVBFR3pFaElZWEN5eHgyK3o0R2NHcmZoSlJNTTVEdmpaWTZoMVpJeUlIeGlOZTJvM2tLbDQwa0ZhaldjeDRKY1dDRTVCcnNkUmFTeXlOMW1MVkM1Qkx5RzJoVlowdGhXc0FmM3hkZUlXWW1ZSzFLaXdxeW10cldRV2o2aGNTRjU2dXhaNGVmd0dKYitwcCtmZ09XUGZZRlEzNDNJWlZpWmtPK2ZFbG44TnZXY2NUZEpqUkdZSDlucmx6N0xPZzlJVUdiWWtLNk5nVkx1dWhrblEwVXJjY1lrZFFrdVpOcVQ2TWtIZHArL3NqdGtXNFA5bENiUzg1enFhRVZxalFDUEFKZUVGaWNDdkRMZWM0dEpJaWtwdS9pMVNuVGtIUkQwak5KQzU0MnNyQWs2WWxUNzJXZ2JFaGdWTWlBcE0yWWtBeHQrUGdyYVViU2xLU3JranJPOXBMbVBmVzJKTVVpS0dySVNzbEN4aVFkejFEdmk2ZHVjREdFK0JnQlQwejZlakFyWnZiZXpMSnNSbjBoRkIwZnNWa0wvUFAyaXFSM3dEUXdZMmFsckRlU2hvQXhZQndZOUJUWmt4QmY1WFBBd3pRaDZUUHdDcGdGNWpQMk9KS09BRmVBVzJtNkRoekxhY3NPUllTNFhFclRGTEF1NlFPSnQ2YmRncEpHU0hwOEhMZ0puTTdRL2paUno1Y2hwSjJUd0wwMCtWak0yVjQ3NVE3MmZTUnFTOThJcWRNbFJOU1d2dkhJR3ZYNDAyZURYUzVEb2tMTWJCT1lBSjZUWEFaMG0rWDB0eWRTVzRMazJtNUlHZ2J1QXBQQU5jcC9zZUFmOEFsNFRiTElMb1N1ZjF3Szc1c2tuU0JaMUNaSnZIYWhZRk9yd0J5cDhXYm1uazI2aTZSaFNZL1RMWHJzWFpZdFNSOGxQUTF0NDR0UVNpTXVrZ2FCMjhDZE5BRzhBZDRDczJaVzFzbnlrTnJ5SDUzd2kyNWtZU1lQQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNua2xFUVZSb2dlMmF2MDhVUVJUSFAveklHWU5JREhBMEppYlFDWjMvZ0ZGREp3VmEyMUpTbWVzTUhmNExSanM2RFg4QW10allHcU9GaFJGRFFnZ0lKQklTRG5KS1BJcTVDNXU1OTJaMmx0MWo3bzV2TXJuczdMeTMzKys4TjdQdjVnNnVFRCtlQURXZ0htbXJBZk0yNlg1QnlEUlF5andOeGFNRXpOaWRrcERkNHJsY0dML3RqazRWc21kM1NFSmFCa1dJbHNudTFJajBscEFqb0ZvOGw4eW9JdkNUaEVEYzYwVE1HRTFJMXZUcXM1cnZ2cXNOaDNETFcwaWVLQ3Y5WXJiRW5GcWFrSzZKaU1odE1HUndBYWhuc09tNGlHam9HaUZCaXoxbUlVRVJpV0hYMGlBS2tWNWF6ZjRUNEZyZ1EyeC85bUwyM2ZlaEJseVg3TFNJMUlIOXdJZTBBM3NvNHJYdEYwd0lieGRDNXh4L2dQVkUrOW40L0FWc0MvelVsUGNKS1JxalN2OFlNcmVXcjdoTmFLa0ZsN3R6QmRWWjBIbENWRTR1SWUzY2d1OVkxK1BLdUdqV1NCbHpKcFZzMDVnSkhiYkdCWEZxdHhETjU2WjFuV3RxYVVaVHdBTHdEamgwMklmZ3dMb09GdUpDR2Zuc05Za1NjQjlZQnI0SVB0S2M1VzRDTHl5N1ZXV3NKdENKZnVDZlI0Z1BFcGxqNEFOUUFlNGhsMG1mQkx0VDNCbmt4STdnTUFTMjdVUFMxVzgvQkZ2MVpaZ0dYd1dIV3FFcEllc2tIQWkyMzF3R3JsMEw1SDE3QjNnUHJHRlNKSy8zelNnbVlyUEFpSEQvUXJ2b0N2N0YraDE0Q1R5aU5XMWNFUm5BckpFS1prTCtlcDZ6NGlMcWkwaWFXYmpiYUJYTWNldEhUTFRXaExGVG1CbWZCUjRBTjFQNGI4SVorVHlFSkhFRG1HczBDZXVCL3BKd0xuYmZkaGJUZDNjbmw1NFJFdE1oaEpOTHowUmtuemgrOUtuaU9Rd1o4RGo0ejNuZE00SCttMFZSMk1aVTJjK0JqVHdkVHdLTG1CZFlFZitPT0FVK0Ewdm9CV1h1R0FJZUE2OHdwWGhXOHJ2QVcrQVpjS3NkeEgxSUc2MUxtZldzR0FHZUFtK0FyVVo3amZuRGpsUVFYcUhyY0FhNEt5ZSsxeDV6T3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9qZXN0LW5pZ2h0LTllYTc0MDJhM2Y0NjJlYmI2YWRjNjEyY2VmMmY4NWNmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9qZXN0LTU0NmZkYjIyMjhiNGMwYWFkODRlN2MwNDg2Y2YwYWViLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFFdzBsRVFWUm9nZTJaVzZoVlJSakhmNThkRlRTMVVzdElMS1NMUXBHbVptVlpsb2toYUVFRWFWQlpHaWdLMVVQUVN4SWtpWGpwb1lzV2tiZWdGKzJDUkNxWmxXV3AzY2dzRFFUREY3UEF2T1Q5MThPYW5jdnQyWHNmenpuN2FMUitjRmd6YS83enpUZHJ6WHp6N1hXZ29LQ2dvS0Nnb09EL2l0cFhuYUQycjRmOWR2VXcya0xlQnE0RzNsZmZWYTg0Mnc3VkZmVlR0YXZhb0Q2aDdsSTNxY3ZVQjlTR3MrMWpxNktPVWhlVjNldWxqbFpYcE1rUE9GdisxUVYxdmpvdWxidXFJM0p0dzlYdDZ0U3o1MkVybzNaVzErZnFyNWExWDZDdVZ1ZTN2WGQxUW4xVHZUV1ZUd3V1YWtkMXBUcWo3YjJyQTJvLzllMGFtaTdxbHRMeS84K2pMbEdIMXRCY2x5SjV6N2J5cTI2azZMeStDYnE1NnF5MjhLbXVwQ1c3c2dtNnk5VGQ2dm0xdE9kaXBwVm5DUEJSTFZGRTdBSldBNVBxN2xFOVVhZXJJNXVvdlY3OVRlMVFUWGV1ditIMndIRUFkWlo2VVNWaFJId1AvQWc4M0VhK3RUNHBkNTZvZGxlUHFjL1cwQTlUZDZvOTJzckhWa1c5VkgwbjVkSHIxTFZxMXhwOW5sSjNwTWpkcTYxOGJUWFVsOVExNmp4MXBEcXpDWDBhMUxHcDM1aTI4TFBWVU51cjQwdkxWSDFNSGRqRXZoM1U1OVVYMVBQcTYya2RVUWVxM1dwb09xb2oxTW5xcWxKaUVxbnhRcUEzOEV0RUhLbGhxQWR3TWJBOUlvNDIwK0VBTGdlNlY1QnNqWWlEU1hzNTBGZ1FDdUM3aURoV3Bqc1lFVnZWbjRFOXdCSmdLL0JOUk93di9Tb3BzVVB0WGNYUmllcVJwTjJyM3RXTXlUNmovbTUxQnFrOTFmVTFkSCtxNDVQZEJlbmVwbFFmYVhZdWp5bDM0RmdTSGszWEJSVWM3YWIrVlRiZ3kyYzQyZUc1dm8rWXZlbEsydWVTN3FCNmMxbGJGM1Y1YWo5azlwSGdsQWtuM1dEMVcvVjFVMExTRGlodDVoWHArcENOSC9DVGdDN0FibUJMdW5lbTM1ZXV5WlVYUjRSVnRIM1M5Y2VJK0RMZkVCSDdnRG1wMnBGc2U1eEdSR3dDYmdBK0JHYW83ZktaMWhxeVRLVVQ4SGkrbzltSHMybXArakp3S05mV0p6M2RCV29meXNpMTNRYWN5RFZWUFU5ekhLOXcvMWl1WEhHbFJJUVJzUnlZQlZ4Yi9vYm1BMjhBVTlRNUVWRWE3SDZ5Si80MzhBb3dOdGVuSnpBNWxSY0NPOHRzbHRvMkEydUJBMEJuWUtHNkpxYzdEUHdFYkk2SUU5U20ydW80allqWUMveFFQdUZsd0V5eUpUSU9XSjd1UDVtdWl5SmlqNTdSV1BsQnQ2dERnQ2xrUzYzME1CcUFmbVRMOHd2MWppYVlhNVlUcC94NGlJaER3R3VwT2gyeS9CUzRrV3c1em12T0lHVmpiSTJJYVJFeExDSUdwNzhCd0lOSmNndlo1R3ZSOGdrblNudjBkdlY2NE9sMC83MkkyTmFjUVpwSWZpdFUvWW5YRWs2YmNFVHNCdDVKMWRtYzNLOXpLOWc0bkN0M2JvRXZsK1RLKzREOXFkeFg3UXlnM3FOdVZEY0NFM0w2UThEZVZPNXBsVFN5MHJFeU94bThPOVhYUmNUbkZiUS9BUjhEZHdKdnFXczVOWUwrUzRyVUR6WFMxQjRZbmNwTEkyS2J1aGg0bEN5ciswTDlpbXdaOXdDdUFBWW4vUWJnVjdML1NVMGxDNjVmcTkvU1NJUnZJSXVza0tWZkFFVEVGck12RGZjQmYzQnlYNWRZUVJaMVA0dUlFK3FvNVBCUVRuMVQrUlZVYmM4ZEFSWUFheUppZmZKaHM5b1BlQUM0TWowVWdGWEo3bml5SS9TREZOVy9VNjhDN2dYNlUyRmJWRHkvbW9yYUtRM1FtTzI3Z0JkVGZVUkVmTkxTOFhMajNrUjJqRFlBOHlOaWFXdlpyalh3b0VxSnJucEEzYUJPcUcycG9LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tCNS9BT3pZNU9lK091dVJ3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRVdVbEVRVlJvZ2UzWlc2aVZSUlRBOFo5MlZOQzBtNVpScUVoWEtpcTFySTVhNW9VdTBBVkNTSVBLYnBBbFJBOUJMMFZRSkpMYWc1VVdrcmVnRisxQ0JIWG9ydDIwdEV3cmd5RHB4VW93ODM3TUh0WnM5dWQyZjN1ZjR6bjdlSkx2RHgvZnpEZHJadGJNbnJWbXpXd0tDZ29LQ2dvS0NycUk0NDYyQWxVWWpodlFpajg3dS9HZW5kMWdKL0FhenNGYmVBUERqcTQ2amVjVERFQVRIc0R2V0lQbG1KSytIMU5NeHVLS2I0TnhIVmFLd1YvUzFVbzFtbm00T2FVSFlIeW1iQncyWTBaWEs5VkkrbUZWSnY5aVJmbUplRjlNekRIRElveEo2V3JPdFEvZXdaTmRwbEdET1U5NDdGcjB4dy9LeS85L3oxS01yaU56a2ZEa2d4cXZUdU1aN0ZCYnptTU9aalZZbHk2aHY3RFRlcHlCclRpK25tQjNEQzJ6ak1FT2ZGbEhib2ZZbTAvSEY0MVdxcEhNeE1RMnlsNk1MZWhkUzZnN3h0SlpldUZBU3MvQ3lUVmsxMk1EN215MFVvMWtDcWJqRkhGNmVyeU9mRE4rdzhBOGdlNXV3OXZ3a0hCSVE4WFJjU1gyNXNodlFRKzhrdVRYNDUvR3E5bTVQSThXekJYMi9Fd2I2alRocGxUdnhzYXAxaGg2WWFyeU1yMEhsN2F4Ym04OGhhZWwxZHpkbHpUOGkrK3hLK1cvRmR2UGJ2bExtNGkxbThXRVRjSUZhT21SQ2svQ21mZ0orK29vTUJDbmlpUGEvdmJyajdDem9jSVpWV09UOGdDSHF1NkVlbUNkY0daWnVWMnAvby9paW1ocHluOGoyZk1pSEV6UHIyTGdlVXdYRTNJUTJ6R2gzc2lxOEJqK3lQUlo3UmtwWXVOVmRlUzJpZVVPQzlLM05Tay9VVGl4dzJ5NE5RbnVUKzhGT1lxZWdMOHJPcHpmenNHT3k5UzlTL3hLZVR5UjVIYmh5b3F5L2xpUnl2ZUlTNExLQWNNb1lRSXZTd0ZKVDJVN1hwbmVkNmkrd2QrWE90b3FqbVMwLzM3cDNFeDZTVkl3anlIcHZRR2ZWNVR0d0hNcDNVY3M1MnFzd1FpOEs4N05QYk9SVmt0cXZDL3VyYWpZaElkVGVyNlkxYXhpQzlJenhPR1V5c1lLQjFSaVFJNlNsUnpJK2Q2YVNkZGFLUWZGYXBpRkN5dC9vWGxpMDM1UXpHQ3BzOXZFWUhiakJiSEhsUmlFKzFONm9ZaDBzcFRLMXVKRDdCUlhPQXZGSkpmWWk0MUpManN4dFFiU0hyYmp1OG9CTHhjYisxQnhpN0FpZlg4a3ZSZnIyT1g0Wmx3bUpuU0U4bVEwaVJ1T1BsaU5hOXJRVm5zSGpNTVBEM3Z3VWtyUFRPOW1YQzVtZmU2UmRGTEJKbUVlemNLcGpCSkh1OXRUK1ZWaThQWG9sQUZUdHRHcnhaSHIwZlQ5VGZ4OEpKMjBrYXdwMUR6aWRZUnFBOTZLMTFONnRySzl6c2xwSXh2dDlPdUFMcWRsMGp1VWcvN2htWGF2eDlmcG1aYVIzeU5zbFBBcHVSRmszcll5T3pVNEtlVS94bWM1c2h2eEFhN0ZxOEl4dGViSWpoWGJYaVc5eEQ4THNFeXNwQ1c0VzBSMXE4V3R4MEVSVFEwVHBrRGNjUHdpYmpobkNPZjZsZGgvRC9Qd1RjSmJFclpWNGdjUnFkeUt2NVR0dXNSSzRVMC9GYlk5T1NrODJxRy9WSFlGMWJLNWZXTHJhbEcrdEZzcmJIa0t6aEtUQXUrbGRxZUtMZlR0cE1NNm5JMWJjTDRjczZpMWY3V1Z2cW1EYW0xUHdMTXBQeDRmZFVKL0phNFEyMmhUZWkvcnhMWnJNbEorckx0VExMbHB1YlVMQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDanJJZno1aDkwOGkyZGE0QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZ0FBQUFFekNBWUFBQUJIZnJ0a0FBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUJ0L1NVUkJWSGdCN2QyTmRSdEhrZ0RnMXI0TndCa2NOZ05kQkFkSGNIUUVDMGNnT1FMQkVVaU9RTm9JNkl0QXZBamtESWlMUU02Z2I1cG9yaUVLbUNuOERINTZ2dTg5ck5aaWt4UUpETHFucXJvNkpRQUFBQUFBSmlUbi9Eb0JBTlBSVGY2ejd2RkRZaEwrbGdDWXZEcnh6MSs5ZXZWbkFnQ21vVnNBTEJNQU1CM2Q1UCsyaFA4VGt5SUZBREJoM2NRL0wzOTJvZjlWQWdEYVY0ditsZ2tBbUk1dTh2OHM5QThBRTlKTi9PKzd4eUlCQU5QUVRmeHZ1c2ZIQkFCTVE4MzdQd3I5QThCRWJFeis4d1FBVEVNMzhYOVI5UThBRTlKTi9PL0szWDhDQUthaFZQdm50VmtDQU5wWDgvNWZoZjRCWUNJMml2NkUvZ0ZnS3JxSi83N2UvYzhTQU5DK1d2Ulh2RTBBUVB1NlNmK3VUdjY2L1FIQUZHem0vWVgrQVdBQ3Vnbi9oenJ4WndmOUFNQkUxQlAraFA0QllDbzJpdjZFL2dGZ0Nyb0ovM1greXp3QkFHM2JLUHJMdXYwQndFVFVFLzZ5Ym44QU1CRWJSWDhPK2dHQUtlZ20vRGNiay84eUFRQnRxM24vTFBRUEFCUHhvdWpQUVQ4QU1BWGRoUDk1NCs3ZlFUOEEwTHFOWmorNi9RSEFGSlRlL3B0NWY2Ri9BR2hjemZ0LzNWZ0FMQklBMEs3ODdRbC9RdjhBTUFWbHduOFIrdjhoQVFEdGVsSDBWOHdUQU5DdU10bS9tUHlYQ1FCbzE0dG1QN3I5QWNBVXZKajhzeTEvQU5DNC9PMEpmMEwvQU5DNkxVVi9YeElBMEs1dXNuLzlZdkozMEE4QXRHeEwwVi9ob0I4QWFGa0o5YitZL0hYN0E0Q1diY243UHdyOUEwRER1b24rVGY3ZUlnRUFiY3Jmbi9BbjlBOEFMZHRSOUZmKzIwRS9BTkNxYnFLLzN4TDZueWNBb0UxYml2NktaUUlBMnRSTjlIZGJKbjhIL1FCQXEzWVUvV1ZiL2dDZ1VhVzRiMHZSbjlBL0FMU3NiTy9iTXZrNzZBY0FXcldqNk05QlB3RFFxcksxTDIvbm9COEFhRkhlM3V5bjBPMFBBRnExWS9KL0ZQb0hnRVoxay96N0hhSC9SUUlBMnBPM24vQW45QThBcmFwNS83d2o5TytnSHdCb1RVL1JYL0U2QVFEdDZTYjV6enNtLzJVQ0FOcVR0emY3ZVFyOUp3Q2dQYVd5UCs4MlN3QkFXL0x1RS82RS9nR2dSUU5GZjU4VEFOQ2VicEsvM3pINU8rZ0hBRnJVVS9SWExCSUEwSlp1Z3Ivcm1meDErd09BMWd6ay9SK0YvZ0dnTWQzay9rUFA1Qy8wRHdBdHlydFArQ3MrSkFDZ0xibS82Tzh4TytnSEFOclNUZTZ2Y3o4SC9RQkFTM0ovMFYreFRIQ2pYdVYxMWVvc09QN1BWNjllL1pHNEtkMXpQRTljMHFxN2JsWjlBK3BkWkNTTVBQaTFPSjN1ZWZuUy9iSHJEcjg4Ri84WStQd2ZlajZmNnpXSjYrenYzV1BSUGQ0RngvL1p2YUQvMHh2UXpkR1c5TEorN2g2ZkJzYk11OGY3Tk95UDdocjhzYnNHLzB5TXF1VDlVLy9rL1dNYVZqN2Y5WGQ3ZnUwZXk5UzR2Nlg5bE5Xc1JoZHdZdDJFWHFySS94VVlXaWFVNklLZEEzV1QvMTNxbndCK2RTUEVyZHQzQVZETXU0dmpiUUpPclZ4WHE4ZzRhWjN4MUxSb1h6VG1vWnY4bHdsdTNDRUxnT0pkMXZFS1RxcUc5WDhPRHI5M0RZNm1SRGxuT3o2MnozTUVWKzNRQllCVUFJeWdXd1E4cEhYK2NZaHJjQVExN3ovdkdmS0wwRCt0T0hRQlVFZ0Z3QWhxZVBraE1OUTFlRUoxSjhheVo4aW43cm41bEtBUnh5d0FDcWtBR0VjSk0wY3EvZDlyUkhPOCtqNTIzek5rbFdLUkdiZ1pmMC9IZVE1RFJyYkRjTDNLUlBOTFlpd1BhVThsek54TlNtVVJjQjhZZmwrMzU5b2FlTGdTK3AvMWZQelFxdi9TTjZXVm1vRlNHTm5YcTZLbDk1RnA5THNwbmF6eThZUWhyMWpnK1h0TVhLWHV1Zm1RWXlJOUJOZ2k5L2Y1THh6MGs1NStUNC9aKzBoYjhta1dBRit6Vk1EVkNqeC9MdHdybFllUG9OMzB6OFJlOHJyVmIrKzFrUjMwOHlSYkFEUW5XZ013RkZwVWtRd2pxR0g5bjRMRFM3UmdsZ2lwRS90UWx6NWRGMmxXZEFGUThpRy9EWXhSa1F3anFPZHZSSEtyRnVMN0tXbVRXYy9IZGZ1amJUbVdBdmljWTZGSXFZQXJsSWNKM2QyQWVoMUdhQlU4b1BzZHZYRk43Q2RMQVRRbnZBMHcyS1hNSFFpTUo3bzFzQ3pxNTRtdDh2b21aVGt3ek00bW1yZFhINERhcFV3cUFDNmdocU9qOVFBZnMrSzFYVXJldis5M0kvVFBKQnpTQ0dpWmh2ZEl2c3RTQVhCeXdVVjRNVXV4NDRVbkphKzNTODU2aGpqb2g4bllld0d3UnlvZzBzQUUyTjh5eFJxVkxFVGovdEw5TGhacGZlTGlMcXZrb0I4bTVLQld3TUdxNU5mZEJiZE13RWx0YkEyTTFBT0l4cVYvNS8ySGlpT0YvcG1VZzg4QzZDNlUwaDNyWVdCWWVmUFJweHhPckU1VTBWTURSZVBXZWY5Wno4Y2Q5TVBrSEhzWVVLUXEyYTRBR0VGZGhQOGVHUG82VDdoVmNOMFdPZXNac2tvTyttR0NqbG9BQk85Q3BBSmdQR1VSdmdxTWV6dkZyWUhkejN5WGhyZjhDZjB6VFRuWUNHamdhM3dPZkEycGdBc0pQRGNhZU55d01ySG5tTWM4b2EyQmVkM24vM0hnZCtLZ242Q3NFVkJ6amswQlBKTUtnQXZaYzJ2Z2xPb0J5bnZPck9manF6UWNIWUJtbldRQlVNTm5ROXRucEFKZ0pOMDFXTGEzUFFTR1RxSlJWMTduL2VjRHd4ejB3N1RsRTZRQU5yN1dmZUJyU1FXY1dlQTVFYnByUUY2SHZMOEdudSt2TFYrSDVXY0wvQTZXaWIxa0tZRG1uQ29GOEN4U2tGUVdDVnFVd29uVlNGejAxTUFtcjhPODN1OC9sT1pZNmZZSEoxNEFCTHNFenRKd1F3N2dBSFV2ZTdRZW9NWHJjR2pMWCtHZ0h5aHlMQVd3VndGZk4vNUQ0R3ZPRTJjUmVDNkU3aHFTWTBkM1A3dExqZWgrbG5lQm4zZVpPRWlXQW1oUEhtY0JFSGtES2grWENqaURQTXlGMjVnY3k0TVhwUjVnbG01Y1h0Yy9EQW5WTXJGZHRnQm96cWxyQUo1SUJjQmxCYy9yS01vaS9LYTM2T2IxamNUUTVMNUtEdnFCYjR5eUFDaUNlNU1uMlowTXppRjRYa2R4NjFzRGg0NzRMWFQ3ZzVmeUNDbUFGMS8veTFEWUtFc0ZqR3I0NlJXNmExV09idzBzYm01cllQZHZmaFA0dVRRaE80RXNCZENjMFNJQUc0YTZCTTZTVkFDTUl0aWs2OWxOYlEzTTY5cUY1Y0N3VlhMUUQydzErZ0tnNWlLSExrQ3BBQmhKZHcyV0V3TmIzQnBZOHY1REN4YWhmOWpoSEJHQWFDN3k0eTNkZmNDTldhYjRxWUgvVEZjdXI0ODNuZzBNKzYzMlJRQzJPTXNDb0pJS2dBdXBPM04rU3NPSGRoVWY4aFZ2RGV6K2JZdnVqNkdpeFZWeTBBLzBPdHNDb0liaHBBTGdRb0xwdU9KcXR3YldoVW5rUnNGQlB6RGduQkVBcVFDNHNEMjNCcjVQMTZmMCtaOE5qSkgzaDRDekxnQXFxUUM0ckpJS1dBWEdYVlZFTHErUCtCM2FxdWlnSHdnNit3SWd1QzFKS2dCR0V1elUrZXdxSW5MMS9XQVpHT3FnSHdpNlJBUWd1aTFKS2dCR0V1elVXY3pTaGVzQmF0NC84bThRK29kOTVKRTdBZlo4MzhpQlFkZVlnN3c1ZVpnT1hoT1ZoenQxUHJ0WXErRHVlMzhPL1BzYzlET3lyQk5nY3k0U0FTaUNZVWlwQUJoWGRHdmd1M3lCcllGNW5mZWZEd3hiSlFmOXdONHV0Z0FvZ21ISWoxa3FBRVlSM0o1YmxHdndQcDFSanJYNkxZVCs0UUFYWFFCVXk5UmZrVHhMZGdYQWFPcld3SDhGaHI3T1owckwxY2svRXRiL3BOc2ZIT2JpQ3dDcEFMZ0tKY2UvaW93NzA3VllGdjJ6Z1RHcjVLQWZPTmcxUkFDZVV3RkRGN0pVQUl6a21yWUdkbC83VGZmSElqQlU2QitPY0JVTGdLSTI3L2lqWjhnc1NRWEFhT3BDL0pmQTBGa2FxUjZnaHY0L0JJWTY2QWVPZERVTGdHcW9JbGtxQUVhMFo2dmdrMjROckZHRlNONS9sUnowQTBlN3FnVkFzQ0paS2dER05kU3UrMW5aR2pqVW1uY2ZrYngvNGFBZk9JRnJpd0JFN2tCbTNVT0RJQmhKc0YxMzhiUTE4QlFMOGh3NzRyZVE5NGNUdWJvRlFEVjBCN0xvM2pEdUVqQ0tZTHZ1WXBhT3JNMnBlZi9Jb3Q1QlAzQkNWN2tBa0FxQXE3Qk04YTJCeHl6SVM5NC9jaTA3NkFkTzZGb2pBTStwZ045N2hwUTNqSXNlVWdJdHEzbjJuNExEUHg3U0tyaTIrcDBGaGdyOXc0bGQ3UUtnR2tvRjNFa0Z3SGk2U2Jkc3pZMXNEZHg3UVY3ei9zdkEwQWVoZnppOXExNEFCSnVUU0FYQWlNYllHbGlqQlpIYWdWVnkwQStNNHRvakFKRmlKS2tBR0Y5MGErRDc0TmJBMGtob0ZoZ245QThqdWZvRlFMVk0vY1ZJVWdFd29qb0pSK3NCZXJjRzFyeC9aSkhnb0I4WTBVMHNBS1FDNFBLQ3gzY1hzN1FqdkY4N2VTN1RzRlZ5MEErTTZsWWlBSkUzbjdPZlZ3NFR0RXo5WjNZOEsxc0QvN241RnpYdkgwM1hDZjNEeUc1bUFWQXRVMzhxNE9UOXlZRy9iR3dOak5RRGZIaXhOYkEwKzVrRlBzOUJQM0FHTjdVQUNPNUxmbmZJZm1RZ0p0aW9xL2gzZ1c3TiswZnFkRmJKUVQ5d0ZyY1dBWGplbDl6MzVtTlhBSXdzMEtqcldZbktsZXR4bVdJYzlBTm5jbk1MZ0tJMkJYbm9HU0lWQU9NcmhibXJ3TGhGaXBIM2h6UDZlN3BkNWMzblM5cmRRN3lrQW43M2hoSlRxN001M2g5VHVZTXRQMmYzdWluWDRlZDBQQWY5d0puZDdBS2dUT3pkbTA5SkJldzZSZXc1RmVBQWtXR3pkSm8zY2RhdnQ0YzBFV1YzVG5jZGx0MDViOUp4WEtkd1pqZVpBbmdXYUZFcUZRQWo2NjdEY28wOXBNUDlJbElINTNmVEM0QnFxRVdwWFFFd3ZtaXI0SmNlNmtJZU9MUG9BdUQvMHBVS2JFbXlLd0JHVnEvRHlLbUJtMWJKUVQ5d01TMUVBQ0pia3FRQ1lIemxHdHduQ3ZBZzlBK1gwOFFDb0JyYWtpUVZBT01xelg3Mk9ZOWo4YkpkTUhBK3pTd0FBZ2NHU1FYQVNMcUpmTkg5Y1VpVTdZT0ZPVnpHTGZjQitFNWdTOUpUS2tEUjBYZks0bW5mL0MzYnJkTEUxQW44ZlRxTTdicHdLZDNGdTh6RGx1bEdsQ09CdThkano4L3lkV3AzSE1OUGIzNU1jS0NCNnkzcTBBVUVaeEo0bnIyUDNKaVdhZ0NlU0FYQStlVDFJVCt6ZEx4eWZQQThBV2ZUM0FLZ0tLbUE3by9mZW9iWUZRQkg2cTZoY3JyZk1wM094KzVyN2xORUNCeWh5UVZBdFV4MkJjQW84bjU1LzNLRTl5b3dicFpFNStCc21sMEExRlRBVHoxRHBBTGdjT1hhbVFYR2xSUCtTbitBYU1PZk85RTVPSStXSXdCbEVmQkg2cTl1bHdxQVBkVzgvend3OU44bi9OVzBYSFNuU1luT3ZVN0FxSnBlQUJTQkE0T2tBaUNvWGl2THdOQlZlckcxTDNBdFBpdlJ1WHYxQURDdTVoY0FWZDlCSlZJQkVGQW4vK2l4MGIvdWFQTWJQVFJvbHRhZEJZR1JUR0lCRURnd1NDb0Foa1czL1AzV1hYT2Z0bjJnWG92UmVvQzNkYWNCTUliY1dDT2dQdDNQOGJubloyeTJRVkRnK2RYQWcxN2RhK1JOam5uTWdkQjlOK1pEOE90TnJuSFh0Y29hQVRWbktpbUFaMUlCc0tjY3ovc1hQOVlkT0VPVzNlT1B3RGpYSll4a1VndUF3Sm5sVWdId3ZaTDNqeFRrL1JJOTNuZGptMjVrc2VDNmhCRk1MUUtRYW03eTk1NGg3N010U1BBa3IzdjB6d0pEUCsxN3lGYWdObWRUdVM3bkNUaVp5UzBBcXBJS1dQVjhYTWlSeWN2eEkzNVhLVDZSZjZNdUduNFBEditZYlEyRWs1bmtBaUJ3WU5EcjNFamhJeHlpNXYyajIvQitqb2IrZDMxKzBpb1l6bTZxRVlESWdVSHZwQUtZc1BzVWIvWDdrSTRRV0pCdjBpb1lUbVN5QzRCcW1hUUM0QnQ1M2VvM3N2ajk0N25WNzdFQ0MvSk43MndOaE9OTmVnRWdGUURmcW9WMnk4RFFWZW8vYkd0djNmVlk3dXdmQWtPMUNvWVRtSG9FUUNvQXFucFhIWTE2L1hwazNuK1hhS3ZnY2sxcUZReEhtUHdDb0toM0huMU5TYVFDbUlLalcvMGU2NEJXd2ZNRUhNUUM0Qzk5ZHg2djYzNW9hRkxOK3k4Q1ExZDF3VHlhN3V1WGJZSFJlb0I3OVFCd0dBdUFxbnZUS1JHQXZyM003alpvMHI2dGZ0TjVMRk5zYTZCV3dYQWdDNEFOZ2ZQS05TS2hLZlgxSEQzaTk1ZVI4djdmMFNvWXhtY0I4TDIrVk1Bc0tUeWlMZEc4Lzk2dGZvOFZpTXB0MGlvWTltUUI4RUtnUDdsVUFFMDRSNnZmWXdXaWNwdEU2R0FQRmdCYlNBWFF1cHIzanhhMi9uU3UwUCt1NzUvaXJZSVY2MEtRQmNCdVVnRzBMSHJFNzY4MUZIOHhlN1lLWHFnSGdCZ0xnQjBDKzVHbEFyaEpkY3ZmTEREMFpLMStqNlZWTUp5ZUJVQ1B3SDVrcVFCdVN2ZDZ2VXNYYXZWN3JFRERybWRQcllJVFhKbXlNQzAzamk4ZXM3U25NdStVU0ZmM0tIMHdIcnZIMS95WDh0K2ZTKythd1p2VTB1cytEMXVtaWFxLzZNZWUzODNWNXh5SG45NzhtR2hlZmZONXpER0xkSVhxei9BMStET29Cemlod0d2SCs4aUF2SDIrWGV6eCtlWDEvem52NXpHdkYvN2ZFUUVZRU1nL1NnVndLMHJEbkZsZzNHaXRmbzlWVTNPL0JJZTdObWxHOTFwKzAvMVJGbG56dEo5WlduZk0vSzV1elFJZ0lKQi8vSmlsQXJoaTllS2ZCNGFPM3VyM1dIVnhFcTBIS05mbUxNRU5xOWZ2c1gwNFN2VGhtNjZaRmdCeHk3UjdLOUlzMlJYQWxjcnhWcjhsMm5XdVZyL0hXcWI0MWtDdGdybFpBOWZ2UTFwSHhFcTl6by8xVWY3Nzl4M2p2OTBsazlVQWhPVjF3VWFmZWJwQ2dlZFg3cTVSZWIrOC8wMXRuK3YrdmE5em5LMkJSOHBxQUk2V0Q2Z0J5TnR6L285NVlMN0o2MnYveTViUExUVTBUeEZyRVlBOVNBVndnNjYyMWUreGFuK0NhRDFBcVloK25lQ0c1UFhkLy96Rlh6OUY2dXA4dEZPcGwra2UvNW0rM3psVDVxaW5CYkVGd0o0R3RpTE5rbFFBVnlLdmk0WVdnYUdyZEtGV3Y4ZmFzMVh3dlFVNk4yYSs1ZTkrMzdNejU3WkY4bitWLzRrdUFDSW5jazFKM3lsbEtvKzV1THpmRWIrWGJ2VjdyTEpMWnhVWU4wc1c2TnlXMlphLys5KzBoeG9wS0kvVnh1T0pCY0FCQWdjR1NRVndhVGZUNnZkWWdhNmRtOG9DL1o4SkpxUzdSa3JLNEI4Ymo2ZGlYeW1BQXcyRUhtZkpuUVlYa3RjTmNHYUJvUS9YMHVyM1dIdTJDdjZRYlEza05teTcrVDdaQXRZQzREaDlCd1pKQlhCMmViOGpmcU4zelRkQnEyQWF0TzMxWEhhanZUOUZsTmtDNEFoU0FWeVRlbGNialR6OWV1TjUvMTM2Nm5NMnZjNWFCWFBsYW1ScjIrdTVMSGJMRnI5M3gwU3pMQUNPSkJYQUZTbDN0YlBBdUt0dDlYdXN3S0o4a3lnZHQyRFg2M21XMW9XK2o3VXZRTG5oWE95MTNUWEhHZ0V0RWp2bDlZRkJmUWVVek5NRkJaNWZEVHh1WEwwVGlKakVjOTM5bkoraXY0OHNTaGVTTlFJNldqN3dNS0E5WHMrYnIrdVBlYjBnMlBuNkZnRTRnY0NCUVIrek54bEdrdGNMekdWZzZDMjErajFXQ1pHdUF1Tm1TVDBBVjY2Yll4WnB2MTRkczdUdUFWTGFZRDh2Qm1ZdkIxa0FuRWozQlAyZWRsY2h6NUpVQUNPb0YzVzAxMzJyZWYvdkJCYmxtMHBSbFZiQlhMVzZZK2NmM2VOZmFUL2w1bk9SMWd1QmIrWWhDNERUV3FiZGR4M3lqWXdodXVYdjVscjlIcXNXVUVWYkJiL0xXZ1Z6NVdwNzMwVmFMd1RLQXJmY2VLN2lYK0hwUk1DL0ZnRlpEY0JKNWY0RGd4NHZrUW9JUEw5eWR6Y283NUgzenhQZTk1NjNINlp5TmRmbnJjaHFBSTZXRDZ3QkNIemRzcXVsNVB2dmMrendyN3Z5ZVNJQUp6YlFrR1NXSEUzS0NlVDlXdjMrT0pYUS93NTkvVG8yelpKVUhUZW9kUE1zTzN1NlIybnJYYUlENVJDZ3ZsUkJPU2ZFQW1Ba3k3UTdMSFAzdlBxQ1E5UzcxTS9CNFpQSisrOVNmLzZmZ3NQZnVqNjVkWFZCc0VqclZNRnF5NUFTcWY0UEM0QVIxQUtrdmplY2owS05IR0Z5clg2UHRXZXI0STlacTJBYVVCZS9KUnF3TFFMMm93WEFTT29CSzd1MmJaVEpYeXFBdmRWODRTSXdkSlVhYS9WN0Fzc1VieFhzK3FRSjlZWjBhenJnNzRuUmxMdXY3ZzM3djd2L3U2MjYrQ2tWVUxjUHdxQjZWeHB0WHp2NTBQOUw1WTJ3K3gyV3lOeVhOSHhTNGxPLzllNXpvcnNJbUpDYUp2cm1OWFJFZDgzVmp1OHhUOThmL1BNL0I4NFoyMnRnc2wwQW95cHYybmwzbDhDdjUwZ0ZCSjVmMWJzM0lNZXFlNHRsWXFmdTkvTTJ4ODBUVDdKZEFQK1d0M2ZtKzQvQTU5MUhYMk41WGRuL1VyVDI1K1hYK3JqdCswb0JqR3lnTjdsUUl5RjV2WGQzRmhpNmt2ZnZWL3NoUk8raXlodW5lcDJKeUg5dHA1c1BETjEyUi8zendOZWVkWDlzS3pEZGxaWmFiZmsrODd6bm9yUiszMFhhOW4yekNNQlo1UDY5eUtOV0hRZWVYeEdBSzFaZUh6bW1SSlJtaVVGNWZYN0hZL0QzcWxWd2FqOENrTC92cTFGTzIvdGh4OWo1anV2dmRjL1gzM2IzMzN0SDMzMzh3NDd2czBpeG4ybTI0M243K0R6QUF1QU04bkFxWUpaR0VuaCtMUUN1Vk04RnZJMTJ0bnZJL1UyNy9HNWZ5QTB2QUhwZUM4dWV6M25jOFRrZjY5ZWIxVWRKT1gzWk1YWXg4Ty9xbXpjKzV4MkgvZFR2Lzc3bmMyZlBBeTBBemlUMzV4NFB5dTBFdis4UUM0QXJsZU5kN0tTU0RwQmo3My9GNUtNcnVlMEZ3SzdYd2VlZXo0bEc1bzc2ZmVWWXpVcDVmVDdtMk0zQ012S0RiMW9rVGlKdkR3TTlHK1V1SS9EOFdnQmNvYnhmcTE5NTZnTmxyWUpEY3RzTGdGMlQ3RkNJUHJxQTNQWmFtcVdnSTc3UFM4dER2dkFpY1JKNW5YczhheW9nOFB4YUFGeVp2TDBDZUpkWjRtQzVQOHo2VW5RYlpuTnkyd3VBWGUvTGk4RG43anM1UCtZRHJ0bThYenB3Mi9lY0gvcVBYeVJPSnZmbkhrK2VDZ2c4dnhZQVZ5VHZkNkV2RTBmTCs0VnpKOWtxT0RlOEFDanlldEg5bktzdmk0RndSTFplczU5eS8wTHljMTdQdDBkRmtlcHI5VDRQTDFxLzF1OTUxL2ZGTEFBdUlHK3Y3bngyMGxSQTRQbTFBTGdpZWZ1ZTNXMUdxeHVab29GcmN0TWs2d0d5UGdBaGViMlFLSlAwb2o3dXhucTkxTzgxMy9oZSszMi9iQUZ3RWJsL0c5SkozMkFDejY4TDkwcDB6OFdiSFBPWWhmNVBLdSszTlhCeWk2OXNBZEFjcllBdnBMWWxMWTBqdHIyUlBEY0krakdkeHc5VGZFTTdzOStHV25qV0NmMURpdmxGcTkvVDJtZ1ZYSzZGU0t2Z3Q3V3BFTnltTEFKd1Vma01xWURNTlZnRW5xZkg0TmRhSmthVHRRcmVLb3NBTkVjcjRNdGJwaDJIUVhUZVpXSGVTY2pyNnZKWllLaFd2eVBUS3BpcHNBQzRzSHBVNDA4N1B1eXNnQW1vMFlGSXRLZThWczZWRnBxNmtwNWJCY2JOa211VUcyVUJjQVc2UlVBNURHTFhzYU5QdWNaRWsycUU1MTF3dUNOK3o2UXV6SDhPRHI5empYS0xMQUN1UkEwN1B1ejRzRlJBdThwQk03UEF1RThLenM2ciszMC9kSC84Rmh6dUd1WG1XQUJjbDNMSHNlMllTYW1BQnVYMUViK3ZBME5YYVhlRWlCRjFpNEJ5Wi84UUdGcXUwWHYxQU55U3NnMndURGlyZ1hGL0prWlh3cnZkRzhpdjNmL2QxbTcwbUcxSHE4U2xmWE1ONWZXeG9Zc1VlMjUrckNGcExxTXN6RXVrWm1oeUx4OWZwUGhXemx1ek92TGp3SkM4KzhBZzU3MERRS3R5ZjBjeURYc0FvRlc1L3pRNEZjY0EwS3E4dXlPWlZBQUF0S3luSGtBcUFBQmFOVkFQSUJVQUFLMnE5UUJmcFFJQVlHSjY2Z0drQWdDZ1pkMWsvMGtxQUFBbXBxY2VRQ29BQUZyV1V3OGdGUUFBTGV1cEIxZ21BS0JkUGZVQWtkUGxBSUJiMUZNUDhDVUJBTzNxcVFkWUpnQ2dYVDMxQUZJQkFOQ3lickwvSUJVQUFCUFRVdyt3VEFCQXU3ckpmcmFqSGtBcUFBQmF0cU1lNEV1SkVDUUFvRjA3NmdIZUp3Q2dYVDMxQVBNRUFMUnJSejNBbzFRQUFEUnVSejJBVkFBQXRHNUhQY0E4QVFEdHF2VUFYNlFDQUdCaWR0UURTQVVBUU91NkNYOGhGUUFBRTdTbEh1QlJLZ0FBR3JlakhrQXFBQUJhdDZNZVlKNEFnTFp0cVFkNGxBb0FnQW5ZVWc4Z0ZRQUFyZHRSRHpCUEFFRGJ0dFFEU0FVQXdCUjBFLzZkVkFBQVROQ1dlb0I1QWdEYTk2SWVRQ29BQUtaZ1N6MkFWQUFBVE1HV2VvQjVBZ0RhOTZJZVFDb0FBS2JpUlQyQVZBQUFUTUdXZW9CNUFnRGE5NkllUUNvQUFLYmlSVDJBVkFBQVRFVTM4WC9lV0FUY0pRQ2dmUy9xQWI1S0JRREFSSlFpd0kwb3dIMENBS2JoUlQyQVZBQUFUTVZHUFlCVUFBQk14WXQ2QUtrQUFKaUtGL1VBVWdFQU1CVWI5UUJTQVFBd0pSdjFBRklCQURBVnRSN2dzUzRDM2lZQVlCbzI2Z0ZLS21DV0FJQnA2Q2IrWlYwRWZFNEF3SFJzMUFOSUJRREFWR3pVQTBnRkFNQ1ViTlFEU0FVQXdKUnMxQU5JQlFEQWxOUjZBS2tBQUppU2pYb0FxUUFBbUpLTmVnQ3BBQUNZa2pMNVN3VUF3QVRWZWdDcEFBQ1lrbkpTWUswSGtBb0FnQ21wOVFCU0FRQXdOYlVlUUNvQUFLYW0xZ05JQlFEQWxOUjZnQzlTQVFBd01iVWVRQ29BQUthbTFnTklCUURBMUhRTGdJOVNBUUF3TWJVZTRHTUNBS2FsV3dDOGxnb0F1S3kvSlRpelY2OWUvZEg5OGFkVUFBQk1rQ2dBQUV4UXJRZTRTd0RBdEpRMGdGUUFBRXhRYVJLVUFJRHBLVHNERWdBd0xiVWU0SWNFd0ZuOFB4ZWVkRDhVOXl6ZUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9uZXh0LWE3MjVmNWNiNTE5OThjMzBjMDNhNTVhOThhYTAwM2RmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFCYkVsRVFWUjRuTzNZTVVvRFVSQUc0UDlwVUpRSVVReW0wRXZFSnBVZXdGNng4UTQ1UUk2Z3BZMlZyWlVXSHNCT0xJUzB0dUlON0grYklPT1FYVGVQVGFaNC93ZUJERy96ejJQZ0pka0ZSRVJFUkVSRVJFUkVwQ1NKSktNM0VXa3RlZ1BSaWg5QXg5WHZBRjR5Y2dZQUxrMzlET0FqSTJjSTROVFVkd0MrTTNMcW5BQTQvcTM0MTAxT0lzbVJ5em5QekJtN25LT2NuSDk2WE5zR3hSOEJEYURwaFNUUFNINmExekNuSWNtSnpjbkptT1U4bXB3bnQzWnIxdDdxY3Z5WFlKMXRBSWVtM2x6Z3M5YXV5OGwxWUhLKzNOcStXVXQxSVRvQzBSdUlwZ0ZFYnlDYUJoQzlnV2lML0F5MjVSN0FhMERmdVZZK2dKVFNGTUIwMVgycjZBaTR1a3V5NmwvYW5xdjc1dHArMDRZa2V3QjJLcFo3cmg3VVBMSGFzTy9kdnJmTSszVzMxclVoeTNva2RwRlNlcGkzTUx2bEhpK2haNWJpajBEeEEraWtsR3J2bHBweVIrbUs1S2ppVXZ2SUMyMzF6OVZhODl6dmt1Z0JGSDhFaWgrQWlJaUlpSWlJaUlpVTVnY1c3N3NrSHN0R3lnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQlVFbEVRVlI0bk8zWU1VcERRUkRHOFM4YWxFZ0VGVU5TNkNWaVkyVU9ZQy9ZZUFjUDRCRk1hV1BsRGJUd0FIWmlJZGphaWpld2Z4WmFERU95OG9ZWFJ0ai9EeGJlWnBOdmxvRk44cDRFQUFBQUFBQUFvQ1k5U1UzMkpqS3RaVzhnVy9VTjZMdjVxNlNuUU01RTBybVpQMHA2RCtSTUpjM00vRmJTVnlDbjVFVFNrWDJoTVdNZUREMTJPV2ZCbkV1WGN4ak1LYm0yTmFvL0FqU2d4WHRQSlgyWU1RM1d2SEk1VWZjbTQ4R3QzWmkxbDFLSS94SXMyWkowWU9hYkxUNXI3YnFjcUxISitYUnIrMmF0VndyaENHUnZJQnNOeU41QU5ocVF2WUZzYlg0R3UzSW42VG1oN2tJWkRYajdIZjhDUjhETmgxcitMMjNQelVmbXZhTVdOWGNrYlJmV3JJbVdQN0hhY05kMjN3Tnp2ZTdXaGo2b1djRW8zUTdQVjFRek5Lby9BdFUzb0s4LzdwWmFzR2YxUWo5UGlSYVp1WGxYOVVPNkxCNTl2SjdhZ09xUFFQVU5BQUFBQUFBQVFHMitBYVhiWkU3OS9hMXJBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRXNVbEVRVlJvZ2UyWlMyd1ZWUmpIZng4QkZCRWgxRnFnUEF4ZGFLeTFhQzJhSUlrR0pURWlSbDJnbUdyaXlsYzBFT01qdXRCRVY0cDFZV0kwYW9JclNVUWhvaTRVMHJpeEtCUWhZSW1pTVJGS0s2MVdXOUJlSDM4WFoyNTdPbmZ1N2R6ZXVha201NWZjM1BQOEhtZG16dmVkR1FnRUFvRkFJQkFJQkFLQlFDRldMY0dTYW9EbHdHS2dEcWdGWmdObkFlZEV3ODRBSThBdzBBLzBBY2VCNzh6czUycllsWW5Ea2hZQTF3R3R3QlZBTXpDdlFyRy9BQWVCQThBWFFJZVo5VllvYzNJT1N6S2NjN2NENjRCTEtqVWtKVWVBWGNDN1pyYXY2dG9rMVVwNlROSzNtbnEra2ZTb3BQT3I0ZWhDU2UyU3preXBpOG1jbHZTUzNHTlZzYU16SlQwaGFUZ0R3d1lsdFhpL3dReGsrZ3pKM1gwekordnN4WklPWkdqUUo1N3NwUm5LalhOWTBxWEYvSnBXeE5sYmdIM0Fpa210VmpKZmV1VXJNNVFicHhINFhOSzZwTTRDaHlXMUFkdHhNVE5MZklkYk01WWQ1MXpnZlVrYlM0NlNkSU9rWEpWdXRjV2VudDFWMGhFbkoybE5NV2RySmZXbEZGUmZZdEhxSkcyUTlMVTN2cWZFK05tU0dpU3RsOVRwelZsZllzNWN1WXZ6YVFwYmUrV3l2Z0loYjZSMDlsUXhRMkx5NWtnNkZNM1pVY2FjVTlHY1pTbkdUNU8wTFlYTnIrWG5XRFN4SHZnZVNMT2w3emF6NjZONXRjQnpVWHNPT0FhOGFXYkRVZit0d0h2QTAyYjJmTlIyRGRBV3pma0QyR05tT3owbmRnR3JnUGxtcHFpdEhaZC8vNFBMdGJlYTJmR29ieW53QTZXenhoRmd1Wm4xNUpVOG1QTHFTdElXejdnYkUvcTNldjFMb3JhMVh0dkxzZkcvK1piSlBkOGRYcjAyUWNlUjJKemVGSGJmRDJPNzlPb1NxeFBub0ZkT0Nsc0x2ZkxaZ0hBaExzL0syUGlCV0wycFRCMTVQUk94R3NZY2pnc294VVRHZk9hVlZ3TEg4a2M5U1RNUzVveUdLMGtOdUdOa2FoMlNMZ0xtcHJDN0htQjZpb0UrT2FDN2lERi9BeDhCN1Y3YjNZeVB2MDNBckpqTVRxOThWZlIveUd1N1BEWitQN0RacTk5VDJ1UlJCR01PRncwYk1ick5MT2ZWNzhEZEpTTkFqMzlvbDNRYnNCYlk1STJQMzg0QWU3M3kxY0Jmd0dHdjdWbGdDMjVCKzh6c3BLZWpFWGc0cGUwblJrdVNIa2p4MEkvYmtJb2hkK0I0U05MdjBaeFZYdDliTVhrNVNiTzgvcjN4RGFtSURwT0wyeWRUMmkxSjk4SFlGZDZCdXhVbkNrdWp6NWFrWnNadXdacm90d3k0RnZEUHFLM1JsUUQzVnNSbkFHaVRsSyt2d0tXMWVSMkxjQzhZQU02TDVDN0NiVUFYVG1Dcnp3aXdjMXlMcE5kVHJOSWFiL3dyWmF4dU9UenU2YmczSTVtdjVtWDZoNGNuY1MvUlN1SHZucGVWc2NMbDhKVlhic3BBWGkvd1ZMNHk2ckNaRFFCMzRYYmlKRTZZV2I5WEwzcm1yQkIvaDY1VVJ3N1k2RyttQmVtWXBEdUJ0eWtNV2FlQm8xRjVHb1hoSWdzRWRIbjFSdElsRlVuOENiU1oyVGEvTVRIL2xIUVQ4QTd1WFBsL1pBallZR1lmeHpzUzMzaVkyWWU0WjdRenFmOC96bjZnSmNuWkNaRTBYZElqa243TmFMZXNKc09TbnRGa1grTEZIRjhnNlVWbDgvWXlhNFlrdlNDcHJtSkhFeHl2a2JSWjB0RXBkZEhSTFdtVHBQbmwrRERwYjB1U1duQ2ZXbTdHN2FaVit6Q1hWNG5Mc1Q4QXRwdFoxd1RqRThucVkxb2RMcVZzeFlXclpseXFXUWtEdUVTbkMzZmk2akN6bnlxVVdkWFBwZk9BQm1BSjdveDdBVEFIbU1GWXVCdkd4Y3NoWEpiWEQveUkrMXc2V0MzYkFvRkFJQkFJQkFLQlFDQVE1MS95QmpsVkdlbnJaZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUVIMGxFUVZSb2dlM1pXNGhWVlJqQThaK2hWdHBGbWlidldVa1lwS2laOW1CQ1lSZWlLT29sQ2lyb3FSdDBJYXFISG5ySUxuUXhJb2lpQWg4aWVpZ01vaGN6eEplc0prdlRqRzRFU1ZwZU1wMHVNNVhUdzdmUHpKbzlaODdaWjg3WjVzUCt3Mkt2dmZkYTMvcSt2ZGI2MXJmV3BxS2lvcUtpb3FLaW9xS2lvbUlrNDBxVTNZV3pNQXRUMFkzSk9CYVRzakovb0ErOTJJdWZzUlBmWVg4WlNuWEs0R200R0V0eEhoWmlTcHN5ZjhVV2ZJYVBzUUc3MjVRNVpzWmhHWjdFZGd3Y29iUU5UK0Q4OGswTXV2RUF2aW5Kb0ZiUzE3Z2ZwNVpoNkhTc0ZuUHUvelkwbjM3SHMySmF0YzFFUENTY1NydUtIY0NTSkIzb3NPR0h4T2liT0Zaanp4RU9vMU1LclV0a245NWhZOU8wRGZOYk5mWWFuZW5WTkQyV3lMK3VSSU5ydlgxVlVXTnZ3ajhsS0hGdDBzYmpKUnM4Z0w5eFl6TmpMMFYvU1FyTVN0cFpmd1FNSHNoc1dUbWFzZDBpMGlraWFHYURqellWMStQTHBQeFBEY3BQeGx4Y2pVMUpuYXNiMURsWmRNNzdCWFRkTGFLK0VieFMwTmc5RFJSSk9SRmJzenByVzZpeko2c3pwMEQ1WS9CbUFaMWZxbFdvaFpZejhiMWlMbjA5THNueTNYZzB5L2ZqVzd3cUhCNHhiOS9HdzFpVlBidFErQW40Q3gvZ25VVCt1MWlPVXpKbGlSaGdFZzZMV0h0TmRpVTgvZzhhaDhsOUlxNGZIR2wzS2o0dm5ra0VYVkhuL1pyay9lenMyV1hKcytkeTVRL21sRnN2NHVZYTNYWGEySjZyczd1QTNyY1RRd0pXNUQ5SkE3WWsrVVYxM2s5UDhzZGxqZlVrejVibHl1L0wzUzlvc1kxYU84MVl3WkRCZVFHTmFLYk14aVMvVEF6ejJsWnZRcDA2bnlUNXVhSkhXMmxqbm5CaXpaZ0o0d3NVVE9uSGpsR1UrUmZ2aWZsVzQyYkREVnFBNDNNeU55WDVDN0xyMXVUWjRsejVUM0ZmY245TFk1VUhHVWh2M2xCcy9uNmVFN0pZeE1YemhaTkpxVVZUOXlUUGJxc2pjM255L25rUk1LUkRkRjdXeGlJalIrSzVpa2VFcjZjVjd5aFlLWFZJb3pFUmQrSFBPZ2E5bHBQWGIzaVBmMlNrUTZySE9MRk83eXFvOTRENDJJTkRlcTBZaXMyV3BYUnVMVFEwQkx1eU5BY1hHYjVIWFNwNmdqZ1ZTZGxuYUlraWV2R3Q1SDZHb1pqNHBFenVET0dBem1paWEwcWY0VXNmZUZuenI1U0dhUzhVS0QrVzlHRFN4cTBka3ZsaXZhL1FwZmw2bHZiY3hwSU12anhwWTNVSDVPMHkwcjhNc2xKMGY3MktPM05sOTVka2NPcVkxclVwcTgvSWFUU0NHNFNuekZmdUZRRkVEemFYWk96aHBJMGVRNDV2TEtsZmJHSUtjYVhZUkpkaDFKRklCMFhZMnhKbjRzT2pRUGxXVXcvT2J0WFlHdU54TjM0N0NneHBsbnJ4aURZTzhWS200V21kUCtmcVJEcUVwOFRCUThmcEVuSHNWMGVCb1R0d3J3WkxUcWRaSWs0aXZ4RGV0V3dERDR0TnhTcngvMnBNZE9wbjJsUVJVaTRWRzRxRlJqbEhhb0Y5SXBUZExIWmNHL0JMbXpKTC9WMDZSZXh2WjRzOTdtbml6R29DVHNqSzlJbzEvNUE0UU55TEg4WHYwZ01sNmxaUlVWRlJVVkZSVVZGUlVWRXhqUDhBNVlyY1UycHNZTllBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUYxVWxFUVZSb2dlMmEyNDhVUlJUR3Z3YlpSUkRsSXQ0Q3lFVkQxQ2lyaUJKWFJSQVRFUTJvaWZISkozZ1FYaFJ2RDJMa0Z2OEFqUTlHWHlSZXNodGd3U3ZHellySkdpNkJHS01MaTJMQ2dnRVJ4SVhGaFJWMmZqNTB0YW1wcWU2WjZabGhmT2d2cWFTbTZ6dW56dW1xcVQ1MXFxUU1HVEpreUpBaFE3MFFWRXNSTUZMU2s1SnVrVFJhMGxGSjNaSzJCa0hRVzZLTzBaSVdTSm91NlZwSnZaSzZKRzBNZ3VEdmF0bGFFWUFBV0E2Y3dvOEJZQXR3ZDRLTzJjQW5odXRETDdEc1l2b1ZDK0NOR0NOOStCU1lZc2xPQlQ0clEzNXRQWDBWOEpESHFIN2dNSEEreHVnK3dobXgzTlI5T0c5MDlIdmE1dFhUNFQyV0lUbmdSYURSdEEwSEhnVTJtN1ppeUFGdHdFSkxSeVB3c2lPL3ExN096bkFNZmorQjJ3UjhsK0JzSnpBalFYNjl3Nyt0Tmw0bHdJeW1qVmlERGY5Ry9GTzREN2loaUd5VEk3T2l1dDZVQU9Cank0RGpSYmhUZ0o2RUVlNEJKaGZSY2NMaWY1alc3aUZwQlNWTnN1by94cEdBcXlTMU8veWZKZTEzZExVRDR4UDZzL3VZRk1zcWdrb2NIbVBWVC9vSXdIQkpiWkttV28vM1NYckFsTDNXODJtUzJqQUxsZ2QySDZQTHR0YmdrclNDa29aYTlWeFVBUm9VUmx1M1NucGEwajJPM0RSSlIwejlINmV0V2RJbW9FWGhpSFlGUVJCeEJtUDZMZ3VWT054djFTY0FyMHVhSjJtMnBJWUV1WWFZZW9SSFRKR2tBV0NucEE1SkV5ek8yZkxOclJCQWU4SWlWR3Q4bmRidXNqY1B3QjJTVmtwYXBOTFhnRjJTamtrNmJSVkpHbVdWNnlUZFZhSytuS1ROa3RZRlFmQjlpVExsQVJnSHZBY01Kcno1WHlqOC9IUUFSVjhNTUFUNHhwRTlDQnhJNkc4UWVCY1lWMjFuN3dkK0t6TE5sZ0RYa3g5YzlBSVR5K2hua3BHSjBHZDBMaTNTOTJIZzNtbzUrd1J3enRQSmw4QUY2L2ViUUt2RGVUWkZmOHNkSGExR2Q0UUxoS0dvaTNQQTRrcWR2WS9DUGVwK1lJRnAzMjQ5UDA1K2tMK1RFcWF5cDg4aFJqWkN6dWlPc01Qd25xTHc3ek1BTktkMWRpVGhWTEd4QmJqTTRxejJ2T2tJQmRzNFlDS3dBVGh0U2hzdzNjT2JsNkIzdGNVYlI3aEcyRGdFakVqajhBdU9vbzNBVUljek04YW9iVEhPL3VuaG5zVHpQd2UyeGVpZTZmQ0dBVnNkenZOcEhMYW4xUkZnVEF4dm44ZW9PUjdlaGhnSEFGbzkvRGtlM3I0WUc4WURmMWk4N1drY3RuTlVieVh3WG5XTTZvamhuVTV3K0ZTTWpEdGRWeWJZOFhZeGZWTHBnVU5TZ0ZLTnpDZFYwRkdaUHZLbjlERml0bTVBdDJmRWZGTzZMV0dFV3p4ODM1VHVqckZoTFBDN3hVczFwVmM0blcwRmhqbWNXVEVPK0JhdDZZUUxsSXNUd0FRUFAyN1J1dFBoRGFYd1pUNlh4dUVSaEV1OGpRNnNNQTVZRTJNVXdGeVB6b21FZ2NRcFUxcGluSjJib05mK0xJMmlNTTNiQTF4YXRzTkdZVE9GZ1VjUDRVYy9BSFpZejkzQVl3ZnBBdzliYjQ3ODlFNFVlQ3drak4xdERBRHUvcnRzQXhiakR5MDdLUXd0V3h4T210QnltYVBERjFxNjMxMkFzOENpaXB5MWpHaW1jSHE3V0VydE5nOUxpdlRkUTZVajZ6Rm1MUEFPeWR2REE0UmJPaHVWYkE5N0tKeTJOZ2FOVGQ2Z3lJYzBDWUFaa2w2VDlMaktTd0Fja2RSbkZVbTYzQ3BYcTd3RVFKdWt0VUVRL0ZDaVRHV2d2aW1lOXJSMlY1S210Yk1NMnlXdGt2U3RwSUVLZExvWU1EcFhtVDRpaksxaUg2V0JjRjhjb2RWNjNrQjROUElNOExsbmRBWmk2aEcrTUxKTmhDbmZTSytkWFBCdUltcnQ4RjdMZ0EweG5FWUtzeE5kd0RXbWREbHRuY1FrNGdtM3B4RitxcTEzZmdQczAwRHZEc253eGdPL09vNTFVeGlESHlEaHFJWDhGYnl6Tmw0bGdQSU8weVpUM2NPMGo5TGFYY21pdGR1cVgwbkNjV2tRQkFjbHpaZDB4dE44UnRLRGh1TUZjTHZ5RjhrOVpkcGFPU2c4RUYrZndDM2xRTHdwUWY0RGgzL3hEOFNOSWJzdEkzTEFTK1JmZVhpTU1QRlg2cFdIellUWEpJWWJIWTNBS3c1dloxMmNOUWJOOXhqZVR4aDNYL0MwUVJnZkw2UDRwWlpEK0MrMUZHdzdMN2JUNnhKR3pjVVdyTVdKOEdiQXAyWElyNm1uci8vQmpGWnZqSkhuQ0RNU3N4TGtaeG1PYnhzS1liS2dLaGZUYW5IMThHYUZ0d09PS2p6aC95b0lndGdzb3FQakNra1BTN3BKNGRYRHZ4UmVQZHowdjdsNm1DRkRoZ3daTW1SSWpYOEJGTW9vMHM5K0JyZ0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRmdVbEVRVlJvZ2UyYTMyOFZSUlRIUHkzYVZoQ3RKZlZYcUZEUUVEVktGYXZFcWdqUlJFVURhbUo4OGdrZWJGOFVVQi9FQ0VqOEF6UStHSDJSK0NNbExhWCt4RWdRWTAwcDBSaWpwVzNFeElJcElvZ3R4TnBLZTY4UE02dG5aMmYyN3E5TGZkaHZNc25lM2U4NWM4N2QyWmx6emd6a3lKRWpSNDRjT1dZS0ZSbnFtZ004Q2x3UDFBTEhnRUZnRHpBYVVVY3RjRCt3QkxoQ3kvVURuY0NmR2RxYUNoVkFHekFHRkMxdEV1Z0diZ3ZSc1J4NFgzTnRPa2FCMXZLWUh4OHZZemZTMWo0QUdvWHNJdURER1BJdmxkMmJFcmlYb0ZIandGSGdyT1ZaRVRpREdoRnQrdHJHT2F0MWpGdWVyVG9ubmpud2pUQ2tBR3dDcXZXekd1QkJZTGQrVnVydEZZQXVZTFhRVVEwOGE4Z2ZMTE5QVGl6RmIvQmJJZHdtNEN2Y3p2Wm9mUzdzTVBnM3ByUTlFVFlaUm9RWkRIQU45aUY4QnJpNmhHeVRJYk1oc2RVcDhKNHc0RVFKYmlNd2pQc05Ed01MUytnNEtmanZKTFk2QmVRUTNSZkN1eFQ0Q2IrRFE2ZzFXdDQ3RE5TSDZQbGNjTDlNYW5SbFVrSGdFbkY5eXNHcFFVMUVpOFM5QWVCdTNRNkorNHMxdHhvN1pCKzFzU3dWT0MrcElEQkxYQmZFZFJVcTJyb0JlQnk0M1pCYkRJem82NytOWnkzQUxxQWQrQjRWWlhtY2FVZmZzWkRHNFhGeFBSOTRFYlZHTGtjNTdVS1Y0OXJEQTdxQmlyejZVSi9NZk1INUs2NnhXV0F2MFNPa3JOdG5TWTFPa2p6Y0RHd0cxaEI5RGpnSUhBZE9pd1l3VjdRcmdWc2o2aXVnQXBydHdMY1JaV0pqSHZBbTZsdHkvZk0vRWx4KzloSHRqNm5FUHhNWGdaOVJzN2VydjJuZ0RXMWJwcmdMK0NXazR5S3dEbGlBUDdnWUJScGk5SE9WbHBGQnlRSmdmWW0randKM3BQRFBoMGVBQ1Vzbm53QlQ0dmNyd0U2RDgyU0MvdG9NSFR1MWJ1LzNGQ29VTmUyWkFOWW02TStIT3dubXFFT29KQjJnVjl3L2dUL0k3eVBaT2wrcFpUMDlCYTNiKzMxQTh4NGorUGxNb3BhMlJKaURHaXBTWVRkd29lQnNKZmhQZTgyV3hqVUFIZnczY1hXaHFoc21Wb1hvM1NwNDgxQnpoSHgrQkpnZDAxY0FOaHFLT2drdStNc2NSdTIzNkdzQWZyZHdUMkgvenZjN2RDOHplT2VqeWtpUzgzUmtMd1hrc0JyQkgwcEtERmlNV21IaGRUZ2M4TDVURXlzc3ZBR0hEZlhBYjRMWEcrcVpBN0pHOVdvSTczbkRLRmNpY1JxM3cyTU9HWE80Ymc2eDQ3VUkraUpQS21FQlNoYVZ6MklHT2xMcmswUDZPTzdVelV6elhFTzZ5OEx6V3J1RmJ4dlNndzRiNm9CZkJTL1JrTjVnZExZSE5VRklORHNjc0UxYVMxQVRsTWs5aVQ4eDhPQ2F0RzR4ZUxNSS9wbFBSZlpTWURacWlqZS9UeG5HYlhNWVZRUldXblEyb0Nhb01kM2FzVHU3TWtTdlhKYm1FaXp6RGdNWHhQVDFYN1FRRER5R1VZdCtCU29JOE82YmdjY0JrZ2NlVW04QmYzbkhDenhXbzJKM2Fkc2t3Znc3TnRaaUR5MTdDSWFXN1FZblNXalphdWl3aFpibXVsdEU1Y2hyRXZSblJRdkI0VzIyOVpRdmVWaFhvdTloTW5pekp1cUExd2xQRHcralVqcnp1MCthSGc0VEhMYXlUV3ViWEVGUkFFblcwS1hBQzhERHhDc0FqS0RlbU5jQUxoTHRNdUlWQUxwUWUwM2ZSWlJKalprczhleE5hblNhTXExY25ucUJMY0FYcUpreUsweHFuVnZ3QnhOMUdmWVJHVVA0WjFJUFZhaXRrU2VBandpK25Vbkh0ZGMrMXJKTitLdWFzcmpnU2lMS2lrUENnQTRIcDVwZ2RhSWZ1RnkzZnVOWkQrNUNmS2ZnL1pDSkJ6RVJkYXVsbnVCV3l5RHB0bHA2VXRxZUNIRTIweGFTN1diYXU0bXRUZ0d6SWxMTzdkS2JESm1OaWExT0FYTkRmRWNJTjhxR2VGT0kvTnNHZjBZMnhBRytGa1lVZ0dmd0gzbDRDRlg0aTNya1lUZnFtRVNOMWxFTlBHZncrc3JzVXlqdUlXajRPQ3J1bnJJODg0WndLNlVQdFJ6QmZxakZsbmFlVTJ3bmVvVFVqWDl5YWtRZFpZb3F2NjNzM2tSRUcvNHNSN1lKVk56YkhDTGZyRG0yTkxTSUtoWmtjakN0SEVjUHIwTmxMOGRRd2NtbmhGUVJEVndNM0FkY2l6cDYrQWNxT05uRi8ram9ZWTRjT1hMa3lKRWpHZjRCYXBaTlBnMTNsa0lBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUdhVWxFUVZSNG5PMmJhNmdXUlJ6R24vRjRQYVNabVZLUW1oNDEwcnltWmtwYTVDMkpJakJUS0pHZ1QycFFVSmFsSkFWZTBVd0NLN0xvN2lXTExwSUtYbzRpYW1hU1lacjNETXBMNEszeWNzNnZEenZIczg2Nys3Njc3KzRlUC9nK1g4N3U3TXp6UERPelozYm1QL05LSlpSUVFna2xYTHN3ZFNFQ2RKWTBXRklQU1owa3RaWFVRdEoxTnN0WlNYOUxPaXhwajZTZGt0WWFZL2JXaGI5TUFIUUQ1Z0svVXp5T0FIT0FibGU3UHBFQUdHQWtzQ2xCcGNPd0VYZ1FxSk8zTmphQTNzQ1dEQ3J1WWpQUUt5M2ZpVnNUYUN4cGhxUUprc3BDc3AyVlZDbHBnNlJka242VGRNeW1TOTVZMEZwU1IwbGRKQTJTTkZDMVk0U0xLa2x2U3Bwc2pEbWZ0QTVGQTZnQWZnenBxV3BnSlRES05sSmM3c2JBYU10UkhhS3hIZWlRUmQyaUdPd1BuQXd4dGh6b25xSldEMkJGaU5ZSm9GOWFXbEVORFFYT0JwalpCd3pKVUhjNHNEOUE5MnlXdXE2SnZpR1ZYdzQwcndQOXBzQ25BZnJuZ0h1eUZxOEllZTFmeVZRNDJNdTBBQi9IZ2ZaWkNUWW1lTUNia0lsZ05FOFRBL3hzQXhwbElUWS9RT3psMUlYaSt3cDZFK2FrTGRJYnVPU0lmSjZxU0FJQUh6dmVMZ0U5MHlJMzVNN3c5Z0hOVWhGSUFjRDF3QUhINDhhMHlFY0d2R0pEVXlFUDE2d1BqQU8rQlZZRDY0QXBRSk04WlVZRStCeVdoaGwzWWJNOE1XbCt2WTdBRHFBU2FHZlRQckxhU3dxVS9kTHh1aUdwbWU0T1lUVXB6dkFDOURyaGZjcitBRzZ3YVFZNFpmVlBGeWpmazl4cGM5Y2todVk2Wk44VlRWWllxeG0xczd4bm5XZnJiZnJDQ0R6Zk81NW5KVEhsQmpOR0ZVMVdXT3NObjA0YjUxa1owQ29peitPTzUwUEZHdXJzRUoyaCtGWGRSR0FwOEEzd0dsRGg1TG1UMnMvc3owVVpydVZxZ2pjdDlxTWlMSCs5UEZ6M09mZVZ4cGovWXBxcGtMUmIwZ0o1c1lMRjhtSi9TNEVaUUFPYmRaSnFZd21yZk9YN0FzdUE0VkUxalRIL1NuSS9nZmZIOFYwai9wYlRpaS9FTE44QStOV1czUStVK1o2VkFWT0JOVUFicDhmRyt2SzlaOVBXeE5SKzBmRWVPbmJrZXdNNk8vZS94REVoTDZwVHczSGFHRk5WODhBWVUyV01tUzdwWFVuYkpKWDd5djNrdTE1cC8yNktxZTE2ZGV0U0dNQkJweFU3eFN6L2hGTitmRWkrTmI0OFZjQ2p3RVBBODhCZVlBRlFQNmIyN1k3Mi9yQzgrWWliT3ZjbjQ1aVFGL3Z6WXhGdzFCaXoybWUwaWFRQnZqd0g1Y1VGNjhuYkk3alhHUE5uVEYxSk91SGN4NSsyQStlZFZteFlCTWRhaCtNa2NJdnYrVURuK2R1eGpRYnJObko0UXdmdmZHTkFNY0wxZ1NlQlBqWnBuQ1IvRDdhUTVGOUMzK1ZRN0V6VFR5TGdCUnY5dURGQ21RazI3M25zWkFadmVucmF4N1BibC85RFIyTmdTdDViT3J6SHcvTG1ld1BjZVhmTENOcXQ3ZCtHa3BwSWtqRm1oNlRwSWJ5OWZkY1hKRzJQb0JFRk56bjNwOEl5NW11QWc4NTlsSy9BRjVLcUpXMHh4dXp4cFZmNXJoZExYbkJUVjM2ZXR0bEpUQnB3dmJwMXVZeDhEYkRIdWU5U1NOWDI5bE9TMmdKUDQ2M3VSa3Q2eVdaWktHbVJ2ZTdsNkNkYnV1YjM2dGJsTXZJMWdEc2dEWXFpYkl4NVg5NDJlTG1rcVpMR1MvcEUwZ0JqekVSakREWnJYNmRvbWl2TndjNTkvTUhWOXA0ZlJTMkc4dkF2OVhFZkpLVmRYNkNjR0l1aFFtUkhIS0xSS1prc2M3NHl6NlhCYTduSE9KNkxXdzVic2prTzJjckNwU0x4M3UzalBBcUU3UUlYdzczSzhUd3pDVmszaDZ3YTZCR2pmQXZnRWVCbUozMmVqL094b2czbTZ2VW16WkNZSmQzb0VLNklXSzZWN1YyQXd6VzliQnZsakUxL0o1RzVYTTJ2SGEvSnZ5eDR4MUpjRkF3M2MyVm9xaHE0MWFaL1lOT1dVQnNRU2NObk51Rjd2S2pzWm9kNFAzQjlnWEozQUJkdC9zbDRBWkxaZUtHdmVmZ0NKQ2w0YkU3dThyMHlMWDRCdlNoaWF3eDRHUGdCYjEyL0MxaE1pdWQ3ZkRyTEhHOFhTVHQ4ejVVRFZ3Mm1wU3BTbks5WEEzek56a0tva2UxTkZ4TlRGNHZ1YVZLQW42MFVFYnVJS3RpQjNHWHlWWGtUUW5yK0dIQmIxc0o5cVAyTStiRUN1NTJWc1g0ejRMTUEvWE5BLzZ6MWEwd01JZmljMEFGZ1JJYTZJOGtkN2JFZDhrQld1bUZtK3VGdFpBYmhLOUk2b0tETE16eDNrdU4vN2QyVlpkMEFhSTkzSmljSTFYZ2JsV1BJczYrZmg3c2NHRXZ1M042UHJTVDhuMC9qcUd3alNhOUxla2JoWWZaLzVHMVhyWmUzYWJGWDBsL0tQU3JiU1Y0d1k3QzhjSGw1RHBPSFM1TG1TNXBpakxtUXRBNnBBTzgwcDd0dXlBS1ZaSGhHSVRHQVljQ0dEQ3ErZ1l5UDVxUUtvQ3N3Q3ppVW9OS0hnSmtrWGRMbVFWMzlaS1pDM25aN3pVOW0yaW4zSnpNbjVXMkg3WlcwUTlJNlk4eSt1dkJYUWdrbGxGREN0WXIvQVZ6ZGtyaW1MNTlXQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUY3a2xFUVZSNG5PMmJhNGhWVlJUSGYrTnJ4aUZma3hrRmxlazBZMlcrSnJXSHBFVnFaV0VFWmdZbEV2UkovVkJRWmc4cCtsQ3BhQ0pCRDdMb25acEZwV1NDNWlSaFZpWVpwcWd6bVVHa0UvZ1l5dFN4RDJ2ZnVmdXM4N2puc2MrTjZQN2hjTzgrWisvMS8rOXp6dDE3cmJYM2hRb3FxS0NDQ3Y2L3FDb1RUeU13QVJnQk5BQVhBWFhBV2ViNmNlQVA0R2RnTjdBRDJBanNLWk8rWERBTVdBejhBcHhKZVJ3QUZobGIvd2xVQVZPQUxhVHZkTmp4SlhBTDVYdHJFNk1KMklyN2p1dmpLMkJVbWZvVUN6WEFVdUFVNGFLUEFXdUJlY0N0eUpqUUQraHVqbjdBRU9BMlUyZWRhUk5tN3hTd0JLZ3VRLzhpVVE5OFI3RElEcVFqMDVDYmxCUTF3SFJqb3lPRTQxdGdjS1llWk1EVlFGdUlzTlhBY0lkY0k0QTFJVnlIZ2JFT3VXSmhFakoxYVRGN2dZazU4dDRFN0F2Z1BaNHpyd2RqQ083OGFxQnZHZmg3QWU4RThMY0QxK1JOWGsvd2EvOTQzc1FCV0JDZzR4QXdLQy9DR29JSHZObDVFY2JBbkFBOTI4aHBkbGdhUVBaWUhrUUpFZlFtTEhKTjBvUi9ubi9QTlVrR3ZJWGZUeGpweW5nVmZnOXZMOURiRllFRDlBSDI0M2VkbldBSy9sZHNraXZqSWVnR3pBUStCVDRITmdHUEFqMGoydHlNWCtka0YySjBZTFBhaGRFSVhBSnNCNXFCZ2ViY200YjcvUkp0UDhTcmRYTldNY09Wd1E3Y2VuZ2FEY2hVOWlzU0g0RDhCSThZL3FNbDJvL0U3ellQelNKb3NUSzJOb3V4RXVoTjBjdDdRRjM3d3B4ZkhzUE9aM2cxUDVkRmxFNW1UTXRpckFTZXQzZ3VWTmU2QWdOaTJya0xyK2JXdElJYWxhRmpwSS9xNWdBcmdVK0FweEdQMHNZVkZLZlpIMUxxTGFBbjRoYmIyalZmSjdwRUdMcGVsWnVCdnhLS3FRZDJBY3VRcDdnQ3lmMnRCSjVCY2dFQWM4MTFnUFZXK3pIQUtpUUlpb3MvOFUrQk55UlNiZkFDM3J2NGNNTDIzWUdmVE50OUZEdUkrZjRFc0FGNTNlMG5kcmRWNzFWemJrTkM3a2VVOXRDeEkrb05hRlRsSHhPS0dHL1pPQXFjdHE2ZEJwNENYa0Y4OTFycjJ2Zlc5M1htYzB0Q2JxMVY5eVVXV3ZEZXhZYUU3ZTlSN1dlRjFOdGcxVGtOM0lHa3hoNUMwdUxMRU1jb0NZWW83bjFoRmFNTTkxTGx0b1FpZHFyeWk4QkJ4TE1yb0Nkd3JWVnVRUnloTHNnYXdYWEFid2w1UWJKRU5sSzU3U2Z3M3NVZUtXeHNWRGJhZ1BPdDYrUFU5WmZTQ0ExQXRiSWJPbmhIalFGcDBBMjRGeGh0eWpQeFBzRTZ2Q0gwbGFyOURzZDZNdUV3M3J0NGRvdzJzMDNkRXhTZG1aSElJRml3czh1cS80YmlHT2RDT05CZjJUMFVWakhxRGRCK2QvOFl4T2Vheng0VUk3ZnR5SWdmWkxmSit2NDNrdVoyZ1hOVStVaFl4YWdiMEtMS2NXYUJENUJnWkN1eXlGbUFQUVd1TUorOThFNVAyeEFueGdXMFZ0MlhUa1RkZ04ycWZIa000dTNBZmNqcTcvMUd5SFJndnJtK0hKa05RSmEzYlA3TW9hc0ZyVlgzcFJOUk4wQVBTT05qa3IrR0xHVFVJdDdlTE9CdFpMb3JKREZCM0Z3YkxpUE5DYXFjYW5CdHdFMHdGSWFWbHUwVzNLMzYxcElnR0NxRkE4clFkQWNDUVdJQmU1WjUwSkZkZ0JsNE5hY09oMEhTeTdheGRkSFZZK01xeStaQmlqdEZYR0E5WHMzUFpqRTJUQm5yUUg3ZmNWRUgzQTZjcDg0dnNXemVtVVdnUWhPT1UySWdzYlZ0Y0UzTWRnT1FwM3NHOGVzTFQ3bU80dHIveTFuRktYeU00NlFveUxhVU5PbG1PelhWQVZ4Z3pyOU9NY1BiUGJocEt1U1d2cTlDdHFYbzhMSlBpWGFYQVNkTi9YbElaeGRTM04zUk5ieHBZdlRGSDc0M083VFBLTkl0alUwRnZrSGkrcDJJRjVqSC9wNVZTdHRKY2tqZjJ3Tlg0VmpnbWlRRm5zU3ZhMkVlUk5YSTA5UmtjL0lnaTRtNUFYcStKbDN1SWhZRzR3K1QvNjAzSWVqSi93NWNuRGZ4YUlLM3NLMmh1SnlWSjNvRDd3Ynd0eU1idDhxQ2lRVHZFOXFQck5MbWhTbjRSL3RDbkhKampyeUJHSXRrV3JTWU04QkhPTnlnZ0hoNDJzbXhYM3NkV1pZTmc1QkVScEN3RG1TaGNnYlI2L3BocUVVV1NiUnZyd2U4M0gvenBWQ05CRTBGcHlmb2FFZHV4bnpFTjdnVWNZbDdtS1BPbkp0cTZxekhIOUxxZVg0aE9ZNzJhVEFDZjl5UXg5Rk12bnNVTW1NeUVvUzQ3dmhtOHQrYTR4UkRrYzBKcmFUdmRDc1N6MmNPYWNOUXJqOGYxQ1BMN1lXL3pBekUvNWVaTmlSczNvTWtWemNodTlFcXFLQ0NDaXFvSUNmOEEyYjhzT2I3TWlrNkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFGZkVsRVFWUm9nZTJhWFloVlZSVEgvMXVkUHRTeFVkUXNMYjgxUlUzUXZuQ0VyS0RBTVNHeXFJY2VLaW9vU0hvd2pVQ2hoeVJvUUpTZ1hnS0ZzdWtoVUVHb1hrcHJkUHFReWcvSU5DM0dyTW1SVWljYlorYlh3MW5IcytmT3VmZWVmZWJlbVlJV1hPYWN2ZGRlYS8zMzNtdnRkZFllNlgvS1JzQXlZTmxnMjVHYmdNWEF4eVQwMlg4S0VEQUQyQTcwQU9lQXMwQzcvUVhZRFN3ZWJEdUxFakFXMkFoY0JEcUJONEVKUUxQOWFvRVhnVDhNMEVmQXdzRzIreklCSXp3RGU0QW1ZSWJYM3d3MGUrOHg0QTZnMi9obkRZNzFrVUUxd0ZQQUw5NE1MMHJoNndYRWE1OEViTElWakFGTkd4anJJd01jc0FvNGFnQytBeHBLOEtjQzhmb24yemE4QlB4dHo5ZFZ4L3BFNlQzQVZ3YmdoSzNJa0RKalNnTHgrRzRDdHRycVhMRFZHbDg1NjlVbmxMYVpUMXlaY1d3bUlCNy9QTnRtY2RUYkNOVGx0MTY5bHIwYk9HOUNSd1hLQ0FMaWpic04yR21UZHdiWUFOU0dDcmtXMkdKaHRCUFlITHJNd0JEZ01hSXpwTjJlUzI3REluTHVBajQzUUtlQTU0QXJzZ3g4MlphMEIzZ1htSjVEK1FyZ1cxUCt2ZjJ3dGhXaDhreG1BL0MxNTU4UGxtSWVUMEtmQXBNQ2xkVURlMjE4Sy9BTVVaaXVzZWRXNjlzTDFBZktkalpCWjB6R3NWTE1FNHpwQjZDTDZOQjZGYmltakpMNTNuNCtDNndGaHFmd0RiZStPRjNaQ2N6UEFLSUIrTUxHL0FxY0JIN01BbVF0VVRoc3N2Y3pSSkhxcWdMK0c0aUNRUmZKR1ZEV2w0RFI5RDNkKzJ4aG9uQy8zMnhvSTNMNFVjQUhtWUY0YlhkNDIrVWswZGt4M2d6NXl6TmtTamtBS2ZvbWtoeUdmbjZXQ3NBYkZ3N0UyaDN3c0cwNWJBVjZnUGVCMmFFQVV2VE9ObGs5QmdyZ05QQkNrUzNhQjBpbWNPaWN3em4zbnFTNWt0NlJORlNTazFRbktTeTJwMU90eVhLU2hrbHFralROT2Rmb25PdklJaUFvcmp2bk9pVWR0ZGRHU2JkTGFpRm5CZ3ZNQXBva3RaaXNSdXM2a2hWQVRNRUhsS1NmSlAwdWFaMms2WksyU0ZvcDZaRHQ4WW5sQk1TK0llbVFqZDFpc2w3SllVK3FnbFFmU2VHcktYaWZDbXdqU2ZnMkFxTlR4c1hSNm9MeGJnT21ldjExcG45REdmMzVuTDJBcHhhNHRVamZBbUNYeVdqSHpoT1M4NlBkK25ZQkMxTEdEeWlRTlJaWitrUVRqMmNwdlU5NC8wUmZXbUpjYmlCNWZHUzRvc2hTTkhGenp1MXh6dFVyMnY4MTlsdnBuS3QzenUzSm9iTXNEYXVHMEppY2N6dXduTWc1dDZPYXV2S3NTSWVrTGttZEZiYWxYNVFIeUJ1U2xvVEcrV3BUTUJEbjNIbEpCNnBnUzc4b3p4ZmI0NUpPa2VVcmJRQXB6OWE2VWRKWVJkSHJYME5CUUd3Vlp0cHIyUStpQUxtRmRzd3BkVTZsVVNZZ1dCb3Y2YkNrUnlWMVMvcWtVbW04cEJQQVM1TE9TZG9yNlNGSng0dWw4V2xVRmdod3A2VDlrcllyU3JNZmtUUlIwbVpKOTBzNkNMeVZKVm4wWkRxaTczdG5UVWNVSmFGMXpybWxraG9VSmFldmh3S0tGZmlmdXZPOHZLa05XRjNvNE1BVWt1cGdCL0FhTUthQXAwOWRDMWhrY3ArMDl3WEFBZUQ2QXI3bFFJdnhYdjdRQ3NtMStsdDhXQmZQSU1tMXdseGd0YlVOQlE0Q3h6UE1ieHFnc3NVSHZ4ejBJWlVwQjMxcFFKNjE5dnVNOXhaZ1RhRDg1U1RWLytMbElHTmVieXZSQ1RTU28rNUs3d0lkQm1Ta3plYjJVSGttY3lGSi9ia1ZXSlZsMEdTU1V0QnZ3TlBBMEVERmZzbTAyZHJtRUhnSFFuU1A4alpKL1hrOU1DSkVSbHhJM21lQURnUDNCZ2xRdjRyWThVM1lud1ppSy8yNU4vRm05clFCMmhreXE2RkFQSDMrVGRqTitheFBWekNTcUZCMmthaXF1SWtNVnd3aFFJZ0tjOTk0TzZEb1RWaS9DWmpwK2M4cHl0eGFaUUZDRkpyak02dlZaQWI1Wkc0QzdpYTZQNFFveEM0cHdsY1VDRW5KdEl1aytsS0pnbDhZQWNOczl0cElycVluRi9Da25leVZkZVJLRVRER2ZPYVN6ZXdHNEdycnV3eWs2bzVjS1NLNml0aHRSdjVzUnU4ek1BUG55SlVpNEFIZ21CbmRiVDRRTy9JVEErYklsU0NpNjdibmlmNjFZL0FjdVZJRWpBUEdWVnZQUC9hbW5adDRIK2RzQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUU5MGxFUVZSb2dlM2FXYWhXVlJRSDhOODFyNVZwbWRYTjB0SkdTNXJBeXNLRUJxSEFSSWdtZXVpaG9vS0Nvb2NtQW4xTGVoQ3NDT29sVUNpemgwQ0ZhSGdwcld5bUFZTkdKYTRONG8wbXkrdjFmajJzZlRoZm45OXd6cm5mdlNiMGg4TjNocldILzk1cnJiMzIyaC8vb3pBdVM5Y0JpL1B4T21ycGVzc0JSdWhVck1Fd2ZzY3ZHRWkvTmJ3c1NQNW5jVFNXNDI4TTRtbE13enZwbW93SDhLc2c5QnJPMnk4OWJZSEQ1QjBjeGxveEt4a3lJaGt5d3J1d044bWZQaVk5YllGZTNJNGY1Q004dDRsY0k1RU1NN0JTekdCRzZPUlI2V2tMOU9BNmZDVUlmSWFyMjhpM0lwSmhwbEREUGRpZDdvL3JTay9iWUNFK0ZBUzJpaGtaMTZGTUp5SVp6c0FxTVR0L2l0bnFxOXpURnFoM3BUdUVUUnhjc0d4Uklobk9FbXFXZWIzbG1GS2lmRk5rMDc0WGY2UktEeTlaUjFraUdlWmh2Umk4blZnbVBGOHBISXNuaFJzZHhCUEtUL000M0N6V2tJRjAzMGtObStGeXZDMEliY2ZkbUZDazRDTmlTb2Z4UEU2cDBQaGlmSm9hL3pKZHRmUnVjWVg2Q0lmeWtkdytyMjBuM0NjUEtkNFVMcklNTHNHbVZMNGZkd28zM1p2dSs5TzNUVW0yREhyRUlPeE1kWHpUVG5oYUV2b2FRMkxSZWhSSGRHamtiTGsrLzRJSE1iR0ozTVQwTFF0WDFxZXluWEExM2s5bGZzSTJmRmVFeUlQQ0hhNlZHOXNET0tSQi9nVGhESWJrYTBBUld6clN2cXQ3TXhWZWlIZmwzbktaY0RZdmxTR1M0V0s1dW13VGEwZGY2c2hmZFIyWlZZQkFJNmJMRjhQNitLd1ZnUXlWaUJENmVZTlF1WnFZZ1dHOGlOa1ZDRFJpZHFwcldKQ3E0VWZjcDdtSzdrT2txRHVzNFFYTXdYTTRTSkNib29KdmI0TEpxYTRlakpmSFhTdUUrblZFV2I4K0tHSXNxWkdMOEo3cUVlenBxZXg3cWE0VjZmMFhDaEpvaFZhcVZZOWJoTjVPRUxieXVERDBQVUxIcHhkb3A5NDJkcWM2K3NTczFJUk50RU5sRzJsRWI4UHpTVmd0RC9pV0M4L1VpTXhiL1psa1Y2ZXlHY2FVeUdSYzJPTGJPZGlRNmhpUXJ5ZlorakdRdm0xSXNvMFlVeUwzQzVWbzVrMHlMUER2RmI1K1JWL1FwbHhsSWxXQ3VJbkNzN1FMM0RhS0VHU0pQRVJaa3Q1dHJOQm1SNHdmalVycnNFNGVFNjBiellhcXpNZ3VzU0FPZHJrdkkwSVZJazlodmhINitXNmpDcEUvOEhHM096SlNWQ0Z5aTlpcEZkcWxqUldxRURsUkpObmF1ZDh4UjFraUUzQmF1aSt5SWFyYWp6T1ZIS2lpUkxJd2ZndHVFdUhGRzdvWHhtL0Z3eUpYc0FuWDQxdXR3L2lPYUxheVh5cWkwMnlmZktQSXNxeVVCNHZQYUIwc05rc0g5WWpGc1NjOXY1SklISldlRjlXMTJXeGZVaXBFT1VzZU4rM0F2ZlkxOEZueTdPQXVQSWFwQllqTVRmWGVscDdQRVo3dytBYTVWb1FLRXhscDh1RWgrUWhtUk9hSXdTQTJacDhMOVNtQ1JrSWRrdy8xNmFCWGRTY2Q5SUVnY2xkNmYxV1N2VUFFb0dXd1NKNzliNXNPZ3FWaUpnYkZqcTFLM3JVK1FWY1RSQ2FKMFZ4VG9UN2lVQ2pMUC9lTEU0R09tQ2xQQmYyTU80UTZsRUY5eWpTemtUT1ZQd09aZ1dmbCtlZWw0bkNwRk9aaHN5QzBCVmVXclVEMUpIWjJFdmFiSUxIS0NNOU5zcEg5VVo0ZExET3FaWWxrN2RXZmhKMWJvbnhIVEJJN3Q3L0YrckZTc1NPR01rUVc0aE81QnJRN0NSc3hUcFBiejNhZFQ2MktFSmtqWDdQNlU1MWxiYkl5cmhEbmh6WGhZdWUza0d0SEpFc0xEY216TDkxSStKWEdlREY2TytSSDB6TWJaSm9SNmJvaGR3dFRoYzNzRVNPN0RJZW1iL1ZFUnQyUXU0VXp4RjgwYXZoZWRIcXpJREttaHR3dFhDTkNpSnBRblNHNUlkOXFEQTI1RytqRlBlS3ZIZnZWa0x1Rlk5STFxdmdITEVPV0FSSTBRV3dBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdcclxuXHJcbmxldCBzdG9yZVxyXG5cclxuY29uc3QgZXhhbXBsZUluaXRpYWxTdGF0ZSA9IHtcclxuICBtb2RlOidkYXknLFxyXG4gIGxhbmc6J2VuJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgREFZOiAnREFZJyxcclxuICBOSUdIVDogJ05JR0hUJyxcclxuICBFTjogJ0VOJyxcclxuICBaSEhBTlQ6ICdaSEhBTlQnLFxyXG4gIFJFU0VUOiAnUkVTRVQnXHJcbn1cclxuXHJcbi8vIFJFRFVDRVJTXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5EQVk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheSdcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5OSUdIVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnbmlnaHQnXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuRU46XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGFuZzogJ2VuJ1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlpISEFOVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsYW5nOiAnemhIYW50J1xyXG4gICAgICB9IFxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5SRVNFVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnZGF5JyxcclxuICAgICAgICBsYW5nOiAnZW4nXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuLy8gQUNUSU9OU1xyXG5leHBvcnQgY29uc3QgdG9EYXkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuREFZIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvTmlnaHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTklHSFQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9FbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5FTiB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b1poSGFudCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5aSEhBTlQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRDb3VudCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRVNFVCB9XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAga2V5OiAncHJpbWFyeScsXHJcbiAgc3RvcmFnZSxcclxuICB3aGl0ZWxpc3Q6IFsnbW9kZScsICdsYW5nJ10sIC8vIHBsYWNlIHRvIHNlbGVjdCB3aGljaCBzdGF0ZSB5b3Ugd2FudCB0byBwZXJzaXN0XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VyKVxyXG5cclxuZnVuY3Rpb24gbWFrZVN0b3JlKGluaXRpYWxTdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gbWFrZVN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gbWFrZVN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbiAgcmV0dXJuIF9zdG9yZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG5cclxuXHJcbi8vIGltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG4vLyBpbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5cclxuLy8gbGV0IHN0b3JlXHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vICAgICBtb2RlOidkYXknXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gICAgIGNhc2UgJ0RBWSc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgbW9kZTogJ2RheScsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGNhc2UgJ05JR0hUJzpcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICBtb2RlOiAnbmlnaHQnLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBjYXNlICdSRVNFVCc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJldHVybiBzdGF0ZVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSB7XHJcbi8vICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4vLyAgICAgcmVkdWNlcixcclxuLy8gICAgIHByZWxvYWRlZFN0YXRlLFxyXG4vLyAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuLy8gICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuLy8gICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuLy8gICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4vLyAgIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4vLyAgICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcclxuLy8gICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuLy8gICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbi8vICAgICB9KVxyXG4vLyAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuLy8gICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4vLyAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4vLyAgIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbi8vICAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbi8vICAgcmV0dXJuIF9zdG9yZVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbi8vICAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuLy8gICByZXR1cm4gc3RvcmVcclxuLy8gfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVGaWxsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JhZGlvQnV0dG9uVW5jaGVja2VkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1RyYW5zbGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsLXVwLWJ0blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHlwZXdyaXRpbmctYW5pbWF0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=