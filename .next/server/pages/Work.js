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
          href: "",
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
          href: "",
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
          href: "",
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
          href: "",
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
          href: "",
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
          href: "",
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
            marginLeft: '-0.8rem'
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
            marginLeft: '1rem'
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
            marginLeft: '-0.6rem'
          },
          children: [mode === 'day' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Resume",
            underline: "none",
            className: router.pathname == '/Resume' ? classes.linkAnchor : classes.link,
            children: t('resume')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 23
          }, undefined), mode === 'night' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "./Resume",
            underline: "none",
            className: router.pathname == '/Resume' ? classes.nightLinkAnchor : classes.nightLink,
            children: t('resume')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 23
          }, undefined)]
        }, void 0, true, {
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
          lineNumber: 270,
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
              lineNumber: 278,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
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
              lineNumber: 285,
              columnNumber: 23
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10___default.a, {
          smUp: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
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
            lineNumber: 293,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          item: true,
          xs: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
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
              lineNumber: 314,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 269,
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
          lineNumber: 52,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
            handleDrawerOpen: handleDrawerOpen,
            mode: mode,
            lang: lang
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
          style: {
            marginTop: '8rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {
            mode: mode
          }, void 0, false, {
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
          style: {
            marginTop: '6rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Home_component_Skill__WEBPACK_IMPORTED_MODULE_10__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
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
            lineNumber: 75,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
            lineNumber: 81,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.body,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            mode: mode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }, undefined), drawer == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Public_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handleDrawerClose: handleDrawerClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEzCAYAAABHfrtkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABt/SURBVHgB7d2NdRtHkgDg1r4NwBkcNgNdBAdHcHQEC0cgOQLBEUiOQNoI6ItAvAjkDIiLQM6gb5poriEKmCn8DH56vu89rNZikxQJDLqnqro6JQAAAAAAJiTn/DoBANPRTf6z7vFDYhL+lgCYvDrxz1+9evVnAgCmoVsALBMAMB3d5P+2hP8TkyIFADBh3cQ/L392of9VAgDaV4v+lgkAmI5u8v8s9A8AE9JN/O+7xyIBANPQTfxvusfHBABMQ837Pwr9A8BEbEz+8wQATEM38X9R9Q8AE9JN/O/K3X8CAKahVPvntVkCANpX8/5fhf4BYCI2iv6E/gFgKrqJ/77e/c8SANC+WvRXvE0AQPu6Sf+uTv66/QHAFGzm/YX+AWACugn/hzrxZwf9AMBE1BP+hP4BYCo2iv6E/gFgCroJ/3X+yzwBAG3bKPrLuv0BwETUE/6ybn8AMBEbRX8O+gGAKegm/Dcbk/8yAQBtq3n/LPQPABPxoujPQT8AMAXdhP954+7fQT8A0LqNZj+6/QHAFJTe/pt5f6F/AGhczft/3VgALBIA0K787Ql/Qv8AMAVlwn8R+v8hAQDtelH0V8wTANCuMtm/mPyXCQBo14tmP7r9AcAUvJj8sy1/ANC4/O0Jf0L/ANC6LUV/XxIA0K5usn/9YvJ30A8AtGxL0V/hoB8AaFkJ9b+Y/HX7A4CWbcn7Pwr9A0DDuon+Tf7eIgEAbcrfn/An9A8ALdtR9Ff+20E/ANCqbqK/3xL6nycAoE1biv6KZQIA2tRN9HdbJn8H/QBAq3YU/WVb/gCgUaW4b0vRn9A/ALSsbO/bMvk76AcAWrWj6M9BPwDQqrK1L2/noB8AaFHe3uyn0O0PAFq1Y/J/FPoHgEZ1k/z7HaH/RQIA2pO3n/An9A8Arap5/7wj9O+gHwBoTU/RX/E6AQDt6Sb5zzsm/2UCANqTtzf7eQr9JwCgPaWyP+82SwBAW/LuE/6E/gGgRQNFf58TANCebpK/3zH5O+gHAFrUU/RXLBIA0JZugr/rmfx1+wOA1gzk/R+F/gGgMd3k/kPP5C/0DwAtyrtP+Cs+JACgLbm/6O8xO+gHANrSTe6vcz8H/QBAS3J/0V+xTHCjXuV11eosOP7PV69e/ZG4Kd1zPE9c0qq7blZ9A+pdZCSMPPi1OJ3uefnS/bHrDr88F/8Y+Pwfej6f6zWJ6+zv3WPRPd4Fx//ZvaD/0xvQzdGW9LJ+7h6fBsbMu8f7NOyP7hr8sbsG/0yMquT9U//k/WMaVj7f9Xd7fu0ey9S4v6X9lNWsRhdwYt2EXqrI/xUYWiaU6IKdA3WT/13qnwB+dSPErdt3AVDMu4vjbQJOrVxXq8g4aZ3x1LRoXzTmoZv8lwlu3CELgOJd1vEKTqqG9X8ODr93DY6mRDlnOz62z3MEV+3QBYBUAIygWwQ8pHX+cYhrcAQ17z/vGfKL0D+tOHQBUEgFwAhqePkhMNQ1eEJ1J8ayZ8in7rn5lKARxywACqkAGEcJM0cq/d9rRHO8+j523zNklWKRGbgZf0/HeQ5DRrbDcL3KRPNLYiwPaU8lzNxNSmURcB8Yfl+359oaeLgS+p/1fPzQqv/SN6WVmoFSGNnXq6Kl95Fp9Lspnazy8YQhr1jg+XtMXKXuufmQYyI9BNgi9/f5Lxz0k55+T4/Z+0hb8mkWAF+zVMDVCjx/LtwrlYePoN30z8Re8rrVb++1kR308yRbADQnWgMwFFpUkQwjqGH9n4LDS7RglgipE/tQlz5dF2lWdAFQ8iG/DYxRkQwjqOdvRHKrFuL7KWmTWc/HdfujbTmWAvicY6FIqYArlIcJ3d2Aeh1GaBU8oPsdvXFN7CdLATQnvA0w2KXMHQiMJ7o1sCzq54mt8vomZTkwzM4mmrdXH4DapUwqAC6ghqOj9QAfs+K1XUrev+93I/TPJBzSCGiZhvdIvstSAXBywUV4MUux44UnJa+3S856hjjoh8nYewGwRyog0sAE2N8yxRqVLETj/tL9LhZpfeLiLqvkoB8m5KBWwMGq5NfdBbdMwEltbA2M1AOIxqV/5/2HiiOF/pmUg88C6C6U0h3rYWBYefPRpxxOrE5U0VMDRePWef9Zz8cd9MPkHHsYUKQq2a4AGEFdhP8eGPo6T7hVcN0WOesZskoO+mGCjloABO9CpAJgPGURvgqMezvFrYHdz3yXhrf8Cf0zTTnYCGjga3wOfA2pgAsJPDcaeNywMrHnmMc8oa2Bed3n/3Hgd+Kgn6CsEVBzjk0BPJMKgAvZc2vglOoBynvOrOfjqzQcHYBmnWQBUMNnQ9tnpAJgJN01WLa3PQSGTqJRV17n/ecDwxz0w7TlE6QANr7WfeBrSQWcWeA5EbprQF6HvL8Gnu+vLV+H5WcL/A6Wib1kKYDmnCoF8CxSkFQWCVqUwonVSFz01MAmr8O83u8/lOZY6fYHJ14ABLsEztJwQw7gAHUve7QeoMXrcGjLX+GgHyhyLAWwVwFfN/5D4GvOE2cReC6E7hqSY0d3P7tLjeh+lneBn3eZOEiWAmhPHmcBEHkDKh+XCjiDPMyF25gcy4MXpR5glm5cXtc/DAnVMrFdtgBozqlrAJ5IBcBlBc/rKMoi/Ka36Ob1jcTQ5L5KDvqBb4yyACiCe5Mn2Z0MziF4Xkdx61sDh474LXT7g5fyCCmAF1//y1DYKEsFjGr46RW6a1WObw0sbm5rYPdvfhP4uTQhO4EsBdCc0SIAG4a6BM6SVACMItik69lNbQ3M69qF5cCwVXLQD2w1+gKg5iKHLkCpABhJdw2WEwNb3BpY8v5DCxahf9jhHBGAaC7y4y3dfcCNWab4qYH/TFcur483ng0M+632RQC2OMsCoJIKgAupO3N+SsOHdhUf8hVvDez+bYvuj6GixVVy0A/0OtsCoIbhpALgQoLpuOJqtwbWhUnkRsFBPzDgnBEAqQC4sD23Br5P16f0+Z8NjJH3h4CzLgAqqQC4rJIKWAXGXVVELq+P+B3aquigHwg6+wIguC1JKgBGEuzU+ewqInL1/WAZGOqgHwi6RAQgui1JKgBGEuzUWczShesBat4/8m8Q+od95JE7AfZ838iBQdeYg7w5eZgOXhOVhzt1PrtYq+Due38O/Psc9DOyrBNgcy4SASiCYUipABhXdGvgu3yBrYF5nfefDwxbJQf9wN4utgAogmHIj1kqAEYR3J5blGvwPp1RjrX6LYT+4QAXXQBUy9RfkTxLdgXAaOrWwH8Fhr7OZ0rL1ck/Etb/pNsfHObiCwCpALgKJce/iow707VYFv2zgTGr5KAfONg1RACeUwFDF7JUAIzkmrYGdl/7TffHIjBU6B+OcBULgKI27/ijZ8gsSQXAaOpC/JfA0FkaqR6ghv4/BIY66AeOdDULgGqoIlkqAEa0Z6vgk24NrFGFSN5/lRz0A0e7qgVAsCJZKgDGNdSu+1nZGjjUmncfkbx/4aAfOIFriwBE7kBm3UODIBhJsF138bQ18BQL8hw74reQ94cTuboFQDV0B7Lo3jDuEjCKYLvuYpaOrM2pef/Iot5BP3BCV7kAkAqAq7BM8a2BxyzIS94/ci076AdO6FojAM+pgN97hpQ3jIseUgItq3n2n4LDPx7SKri2+p0Fhgr9w4ld7QKgGkoF3EkFwHi6SbdszY1sDdx7QV7z/svA0Aehfzi9q14ABJuTSAXAiMbYGlijBZHagVVy0A+M4tojAJFiJKkAGF90a+D74NbA0khoFhgn9A8jufoFQLVM/cVIUgEwojoJR+sBercG1rx/ZJHgoB8Y0U0sAKQC4PKCx3cXs7QjvF87eS7TsFVy0A+M6lYiAJE3n7OfVw4TtEz9Z3Y8K1sD/7n5FzXvH03XCf3DyG5mAVAtU38q4OT9yYG/bGwNjNQDfHixNbA0+5kFPs9BP3AGN7UACO5LfnfIfmQgJtioq/h3gW7N+0fqdFbJQT9wFrcWAXjel9z35mNXAIws0KjrWYnKletxmWIc9ANncnMLgKI2BXnoGSIVAOMrhbmrwLhFipH3hzP6e7pd5c3nS9rdQ7ykAn73hhJTq7M53h9TuYMtP2f3uinX4ed0PAf9wJnd7AKgTOzdm09JBew6Rew5FeAAkWGzdJo3cdavt4c0EWV3Tncdlt05b9JxXKdwZjeZAngWaFEqFQAj667Dco09pMP9IlIH53fTC4BqqEWpXQEwvmir4Jce6kIeOLPoAuD/0pUKbEmyKwBGVq/DyKmBm1bJQT9wMS1EACJbkqQCYHzlGtwnCvAg9A+X08QCoBrakiQVAOMqzX72OY9j8bJdMHA+zSwAAgcGSQXASLqJfNH9cUiU7YOFOVzGLfcB+E5gS9JTKkDR0XfK4mnf/C3brdLE1An8fTqM7bpwKd3Fu8zDlulGlCOBu8djz8/ydWp3HMNPb35McKCB6y3q0AUEZxJ4nr2P3JiWagCeSAXA+eT1IT+zdLxyfPA8AWfT3AKgKKmA7o/feobYFQBH6q6hcrrfMp3Ox+5r7lNECByhyQVAtUx2BcAo8n55/3KE9yowbpZE5+Bsml0A1FTATz1DpALgcOXamQXGlRP+Sn+AaMOfO9E5OI+WIwBlEfBH6q9ulwqAPdW8/zww9N8n/NW0XHSnSYnOvU7AqJpeABSBA4OkAiCoXivLwNBVerG1L3AtPivRuXv1ADCu5hcAVd9BJVIBEFAn/+ix0b/uaPMbPTRoltadBYGRTGIBEDgwSCoAhkW3/P3WXXOftn2gXovReoC3dacBMIbcWCOgPt3P8bnnZ2y2QVDg+dXAg17da+RNjnnMgdB9N+ZD8OtNrnHXtcoaATVnKimAZ1IBsKccz/sXP9YdOEOW3eOPwDjXJYxkUguAwJnlUgHwvZL3jxTk/RI93ndjm25kseC6hBFMLQKQam7y954h77MtSPAkr3v0zwJDP+17yFagNmdTuS7nCTiZyS0AqpIKWPV8XMiRycvxI35XKT6Rf6MuGn4PDv+YbQ2Ek5nkAiBwYNDr3EjhIxyi5v2j2/B+job+d31+0ioYzm6qEYDIgUHvpAKYsPsUb/X7kI4QWJBv0ioYTmSyC4BqmaQC4Bt53eo3svj947nV77ECC/JN72wNhONNegEgFQDfqoV2y8DQVeo/bGtv3fVY7uwfAkO1CoYTmHoEQCoAqnpXHY16/Xpk3n+XaKvgck1qFQxHmPwCoKh3Hn1NSaQCmIKjW/0e64BWwfMEHMQC4C99dx6v635oaFLN+y8CQ1d1wTya7uuXbYHReoB79QBwGAuAqnvTKRGAvr3M7jZo0r6tftN5LFNsa6BWwXAgC4ANgfPKNSKhKfX1HD3i95eR8v7f0SoYxmcB8L2+VMAsKTyiLdG8/96tfo8ViMpt0ioY9mQB8EKgP7lUAE04R6vfYwWicptE6GAPFgBbSAXQupr3jxa2/nSu0P+u75/irYIV60KQBcBuUgG0LHrE7681FH8xe7YKXqgHgBgLgB0C+5GlArhJdcvfLDD0ZK1+j6VVMJyeBUCPwH5kqQBuSvd6vUsXavV7rEDDrmdPrYITXJmyMC03ji8es7SnMu+USFf3KH0wHrvH1/yX8t+fS++awZvU0us+D1umiaq/6Mee383V5xyHn978mGheffN5zDGLdIXqz/A1+DOoBzihwGvH+8iAvH2+Xezx+eX1/znv5zGvF/7fEQEYEMg/SgVwK0rDnFlg3Gitfo9VU3O/BIe7NmlG91p+0/1RFlnztJ9ZWnfM/K5uzQIgIJB//JilArhi9eKfB4aO3ur3WHVxEq0HKNfmLMENq9fvsX04SvThm66ZFgBxy7R7K9Is2RXAlcrxVr8l2nWuVr/HWqb41kCtgrlZA9fvQ1pHxEq9zo/1Uf779x3jv90lk9UAhOV1wUafebpCgedX7q5Reb+8/01tn+v+va9znK2BR8pqAI6WD6gByNtz/o95YL7J62v/y5bPLTU0TxFrEYA9SAVwg6621e+xan+CaD1AqYh+neCG5PXd//zFXz9F6up8tFOpl+ke/5m+3zlT5qinBbEFwJ4GtiLNklQAVyKvi4YWgaGrdKFWv8fas1XwvQU6N2a+5e9+37Mz57ZF8n+V/4kuACInck1J3yllKo+5uLzfEb+XbvV7rLJLZxUYN0sW6NyW2Za/+9+0hxopKI/VxuOJBcABAgcGSQVwaTfT6vdYga6dm8oC/Z8JJqS7RkrK4B8bj6diXymAAw2EHmfJnQYXktcNcGaBoQ/X0ur3WHu2Cv6QbQ3kNmy7+T7ZAtYC4Dh9BwZJBXB2eb8jfqN3zTdBq2AatO31XHajvT9FlNkC4AhSAVyTelcbjTz9euN5/1366nM2vc5aBXPlamRr2+u5LHbLFr93x0SzLACOJBXAFSl3tbPAuKtt9XuswKJ8kygdt2DX63mW1oW+j7UvQLnhXOy13TXHGgEtEjvl9YFBfQeUzNMFBZ5fDTxuXL0TiJjEc939nJ+iv48sSheSNQI6Wj7wMKA9Xs+br+uPeb0g2Pn6FgE4gcCBQR+zNxlGktcLzGVg6C21+j1WCZGuAuNmST0AV66bYxZpv14ds7TuAVLaYD8vBmYvB1kAnEj3BP2edlchz5JUACOoF3W0132ref/vBBblm0pRlVbBXLW6Y+cf3eNfaT/l5nOR1guBb+YhC4DTWqbddx3yjYwhuuXv5lr9HqsWUEVbBb/LWgVz5Wp730VaLwTKArfceK7iX+HpRMC/FgFZDcBJ5f4Dgx4vkQoIPL9ydzco75H3zxPe9563H6ZyNdfnrchqAI6WD6wBCHzdsqul5Pvvc+zwr7vyeSIAJzbQkGSWHE3KCeT9Wv3+OJXQ/w59/To2zZJUHTeodPMsO3u6R2nrXaID5RCgvlRBOSfEAmAky7Q7LHP3vPqCQ9S71M/B4ZPJ++9Sf/6fgsPfuj65dXVBsEjrVMFqy5ASqf4PC4AR1AKkvjecj0KNHGFyrX6PtWer4I9Zq2AaUBe/JRqwLQL2owXASOoBK7u2bZTJXyqAvdV84SIwdJUaa/V7AssUbxXs+qQJ9YZ0azrg74nRlLuv7g37v7v/u626+CkVULcPwqB6VxptXzv50P9L5Y2w+x2WyNyXNHxS4lO/9e5zorsImJCaJvrmNXREd83Vju8xT98f/PM/B84Z22tgsl0Aoypv2nl3l8Cv50gFBJ5f1bs3IMeqe4tlYqfu9/M2x80TT7JdAP+Wt3fm+4/A591HX2N5Xdn/UrT25+XX+rjt+0oBjGygN7lQIyF5vXd3Fhi6kvfvV/shRO+iyhunep2JyH9tp5sPDN12R/3zwNeedX9sKzDdlZZabfk+87znorR+30Xa9n2zCMBZ5P69yKNWHQeeXxGAK1ZeHzmmRJRmiUF5fX7HY/D3qlVwaj8CkL/vq1FO2/thx9j5juvvdc/X33b333tH3338w47vs0ixn2m243n7+DzAAuAM8nAqYJZGEnh+LQCuVM8FvI12tnvI/U27/G5fyA0vAHpeC8uez3nc8Tkf69eb1UdJOX3ZMXYx8O/qmzc+5x2H/dTv/77nc2fPAy0AziT35x4Pyu0Ev+8QC4ArleNd7KSSDpBj73/F5KMrue0FwK7Xweeez4lG5o76feVYzUp5fT7m2M3CMvKDb1okTiJvDwM9G+UuI/D8WgBcobxfq1956gNlrYJDctsLgF2T7FCIPrqA3PZamqWgI77PS8tDvvAicRJ5nXs8ayog8PxaAFyZvL0CeJdZ4mC5P8z6UnQbZnNy2wuAXe/Li8Dn7js5P+YDrtm8Xzpw2/ecH/qPXyROJvfnHk+eCgg8vxYAVyTvd6EvE0fL+4VzJ9kqODe8ACjyetH9nKsvi4FwRLZes59y/0Lyc17Pt0dFkepr9T4PL1q/1u951/fFLAAuIG+v7nx20lRA4Pm1ALgiefue3W1GqxuZooFrctMk6wGyPgAheb2QKJP0oj7uxnq91O813/he+32/bAFwEbl/G9JJ32ACz68L90p0z8WbHPOYhf5PKu+3NXByi69sAdAcrYAvpLYlLY0jtr2RPDcI+jGdxw9TfEM7s9+GWnjWCf1DivlFq9/T2mgVXK6FSKvgt7WpENymLAJwUfkMqYDMNVgEnqfH4NdaJkaTtQreKosANEcr4Mtbph2HQXTeZWHeScjr6vJZYKhWvyPTKpipsAC4sHpU4087PuysgAmo0YFItKe8Vs6VFpq6kp5bBcbNkmuUG2UBcAW6RUA5DGLXsaNPucZEk2qE511wuCN+z6QuzH8ODr9zjXKLLACuRA07Puz4sFRAu8pBM7PAuE8Kzs6r+30/dH/8FhzuGuXmWABcl3LHse2YSamABuX1Eb+vA0NXaXeEiBF1i4ByZ/8QGFqu0Xv1ANySsg2wTDirgXF/JkZXwrvdG8iv3f/d1m70mG1Hq8SlfXMN5fWxoYsUe25+rCFpLqMszEukZmhyLx9fpPhWzluzOvLjwJC8+8Ag570DQKtyf0cyDXsAoFW5/zQ4FccA0Kq8uyOZVAAAtKynHkAqAABaNVAPIBUAAK2q9QBfpQIAYGJ66gGkAgCgZd1k/0kqAAAmpqceQCoAAFrWUw8gFQAALeupB1gmAKBdPfUAkdPlAIBb1FMP8CUBAO3qqQdYJgCgXT31AFIBANCybrL/IBUAABPTUw+wTABAu7rJfrajHkAqAABatqMe4EuJECQAoF076gHeJwCgXT31APMEALRrRz3Ao1QAADRuRz2AVAAAtG5HPcA8AQDtqvUAX6QCAGBidtQDSAUAQOu6CX8hFQAAE7SlHuBRKgAAGrejHkAqAABat6MeYJ4AgLZtqQd4lAoAgAnYUg8gFQAArdtRDzBPAEDbttQDSAUAwBR0E/6dVAAATNCWeoB5AgDa96IeQCoAAKZgSz2AVAAATMGWeoB5AgDa96IeQCoAAKbiRT2AVAAATMGWeoB5AgDa96IeQCoAAKbiRT2AVAAATEU38X/eWATcJQCgfS/qAb5KBQDARJQiwI0owH0CAKbhRT2AVAAATMVGPYBUAABMxYt6AKkAAJiKF/UAUgEAMBUb9QBSAQAwJRv1AFIBADAVtR7gsS4C3iYAYBo26gFKKmCWAIBp6Cb+ZV0EfE4AwHRs1ANIBQDAVGzUA0gFAMCUbNQDSAUAwJRs1ANIBQDAlNR6AKkAAJiSjXoAqQAAmJKNegCpAACYkjL5SwUAwATVegCpAACYknJSYK0HkAoAgCmp9QBSAQAwNbUeQCoAAKam1gNIBQDAlNR6gC9SAQAwMbUeQCoAAKam1gNIBQDA1HQLgI9SAQAwMbUe4GMCAKalWwC8lgoAuKy/JTizV69e/dH98adUAABMkCgAAExQrQe4SwDAtJQ0gFQAAExQaRKUAIDpKTsDEgAwLbUe4IcEwFn8PxeedD8U9yzeAAAAAElFTkSuQmCC"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0hvbWUvY29tcG9uZW50L0xlYXJuQnlEb2luZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSG9tZS9jb21wb25lbnQvU2hhcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSG9tZS9jb21wb25lbnQvU2tpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1BhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9QdWJsaWNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9TY3JvbGx1cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9Xb3JrLmpzIiwid2VicGFjazovLy8uL2Nzcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3MvcHVibGljLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Xb3JrL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmMTAuZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmNC5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWY1LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjYuZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmNy5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWY4LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9jYXJvdXNlbDEuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2Nhcm91c2VsMi5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvY2Fyb3VzZWwzLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9jc3MtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2ZpZ21hLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9naXQtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2dpdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamVzdC1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamVzdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvbXlzcWwtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL215c3FsLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9uZXh0LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9ucG0tbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL25wbS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvcGhwLW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9waHAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9yZWFjdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzMk91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JhZGlvQnV0dG9uVW5jaGVja2VkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV2JTdW5ueU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbC11cC1idG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRpdGxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiaW1nQmxvY2siLCJ3aWR0aCIsImltZ0hvdmVyIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiTGVhcm5CeURvaW5nIiwidCIsInByb3BzIiwiY2xhc3NlcyIsIm9uSG92ZXIiLCJzZXRPbkhvdmVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZU9uSG92ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwibW9kZSIsImdpZjQiLCJnaWY1IiwiZ2lmNiIsImdpZjciLCJnaWY4IiwiZ2lmMTAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiIsInN1YnRpdGxlIiwiZm9udFdlaWdodCIsInN1YnRpdGxlTmlnaHQiLCJjb2xvciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25OaWdodCIsInBhY2thZ2VCbG9jayIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJoZWlnaHQiLCJvdmVyZmxvdyIsInBhY2thZ2VCbG9ja05pZ2h0IiwibGluayIsIm5pZ2h0TGluayIsIlNoYXJpbmciLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwicGhvdG8xIiwicGhvdG8yIiwicGhvdG8zIiwiU2tpbGwiLCJzdHlsZXMiLCJiYWxsIiwiamF2YXNjcmlwdEljb24iLCJqYXZhc2NyaXB0TmlnaHRJY29uIiwiamVzdExvZ29MZyIsImplc3RJY29uIiwiamVzdE5pZ2h0SWNvbiIsImplc3RMb2dvIiwiZ2l0SWNvbiIsImdpdE5pZ2h0SWNvbiIsIm5leHRMb2dvIiwibmV4dEljb24iLCJuZXh0TmlnaHRJY29uIiwicmVhY3RJY29uIiwicmVhY3ROaWdodEljb24iLCJjc3NJY29uIiwiY3NzTmlnaHRJY29uIiwicGhwSWNvbiIsInBocE5pZ2h0SWNvbiIsIm5wbUljb24iLCJucG1OaWdodEljb24iLCJteXNxbEljb24iLCJteXNxbE5pZ2h0SWNvbiIsImZpZ21hSWNvbiIsImZpZ21hTmlnaHRJY29uIiwid2VicGFja0ljb24iLCJ3ZWJwYWNrTmlnaHRJY29uIiwic3ltZm9ueUljb24iLCJzeW1mb255TmlnaHRJY29uIiwiY29udGVudCIsIkJhbm5lciIsIkN1c3RvbWl6ZUNhcm91c2VsIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNvdW50IiwiaGFuZGxlVGltZXIiLCJiaW5kIiwidGltZXIiLCJoYW5kbGVOZXh0IiwiaGFuZGxlQmFjayIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInJvdGF0ZUJ5IiwicmVuZGVyIiwiaW1nc3JjIiwiY29udHJvbEJ1dHRvbiIsIm5hdmlnYXRlQnV0dG9uIiwibGlzdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwicGFyc2VJbnQiLCJtYXJnaW4iLCJSYWRpb05hdmlnYXRpb24iLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0IiwibWFpbiIsIm92ZXJmbG93WSIsInBhZGRpbmdSaWdodCIsImxldHRlclNwYWNpbmciLCJkcmF3ZXJMaW5rIiwiZHJhd2VySGVhZGVyIiwiaWNvbiIsIkRyYXdlciIsImhhbmRsZURyYXdlckNsb3NlIiwiRm9vdGVyIiwiZm9vdGVyQmxvY2siLCJmb290ZXJCbG9ja05pZ2h0IiwibGlua0FuY2hvciIsIm5pZ2h0TGlua0FuY2hvciIsIm5pZ2h0SWNvbiIsImZvcm1Db250cm9sIiwiaW5wdXRMYWJlbCIsImZsZXhEaXJlY3Rpb24iLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaGFuZGxlTGFuZ1RvUmVkdXgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImkxOG4iLCJjaGFuZ2VMYW5ndWFnZSIsImRpc3BhdGNoIiwidG9FbiIsInRvWmhIYW50IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVPcGVuIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVEcmF3ZXJPcGVuIiwibGFuZyIsImxhYmVsIiwidG9OaWdodCIsInRvRGF5IiwicGF0aG5hbWUiLCJQYWdlTG9hZGVyIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZUVmZmVjdCIsInNlbGVjdFJlcXVpcmVkIiwiU2VsZWN0Iiwib25PcGVuIiwib25DbG9zZSIsIm9uQ2hhbmdlIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyb290IiwiaW5wdXQiLCJTZWxlY3QyIiwibmFtZSIsImZvcm1Db250cm9sUHJvcHMiLCJzZWxlY3RQcm9wcyIsInJlcXVpcmVkIiwiZGlzYWJsZWQiLCJ0YWJJbmRleCIsIm5ld1Byb3BzIiwic2VsZWN0Iiwic2VsZWN0ZWQiLCJjaGVja0VxdWFsIiwiYSIsImIiLCJ1bmRlZmluZWQiLCJ0b1N0cmluZyIsImZpbHRlcnMiLCJmaWx0ZXIiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJhcnJheSIsIm9iamVjdCIsImlucHV0TGFiZWxQcm9wcyIsImljb25OaWdodCIsIlNjcm9sbHVwIiwic2Nyb2xsQyIsInNldFNjcm9sbEMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25TY3JvbGwiLCJzY3JvbGxZIiwiaGFuZGxlU2Nyb2xsdG9Ub3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiYWxpZ24iLCJkYXlCYWNrZ3JvdW5kIiwibmlnaHRCYWNrZ3JvdW5kIiwiYm9keSIsIldvcmsiLCJkcmF3ZXIiLCJzZXREcmF3ZXIiLCJ1c2VTZWxlY3RvciIsIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJsb2NhbGVTdWJwYXRocyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJwYXRoIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHRMYW5ndWFnZSIsIm90aGVyTGFuZ3VhZ2VzIiwiemhIYW50IiwiZnIiLCJlcyIsImxvY2FsZVBhdGgiLCJyZXNvbHZlIiwiV29ya1BhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJzdG9yZSIsImV4YW1wbGVJbml0aWFsU3RhdGUiLCJhY3Rpb25UeXBlcyIsIkRBWSIsIk5JR0hUIiwiRU4iLCJaSEhBTlQiLCJSRVNFVCIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwicmVzZXRDb3VudCIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwid2hpdGVsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwibWFrZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFH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bUY7Ozs7Ozs7Ozs7O0FDQUEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLGc1Qjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGcyQjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGcrQzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHcyQzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHc2Qjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG8xQjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDRpQzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDQrQjs7Ozs7Ozs7Ozs7QUNBakMsd0Y7Ozs7Ozs7Ozs7O0FDQUEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLHdzRDs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHdqRDs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGcwUzs7Ozs7Ozs7Ozs7QUNBakMsa0Y7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLG9sQjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDRpQjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGdyRDs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDQrQzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG9qRTs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG84RDs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHd2RTs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG9sRTs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDQ3RDs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDR3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlHLEtBQUo7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRztBQUMxQnhOLE1BQUksRUFBQyxLQURxQjtBQUUxQnNJ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Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoicGFnZXMvV29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvV29yay9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgZ2lmNCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjQuZ2lmJ1xyXG5pbXBvcnQgZ2lmNSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjUuZ2lmJ1xyXG5pbXBvcnQgZ2lmNiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjYuZ2lmJ1xyXG5pbXBvcnQgZ2lmNyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjcuZ2lmJ1xyXG5pbXBvcnQgZ2lmOCBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjguZ2lmJ1xyXG5pbXBvcnQgZ2lmMTAgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWYxMC5naWYnXHJcbmltcG9ydCBteXNxbEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbXlzcWwucG5nJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvIFNsYWInLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfSxcclxuICAgIGltZ0Jsb2NrOntcclxuICAgICAgICB3aWR0aDonMTAwJScsXHJcbiAgICAgICAgLy8gcGFkZGluZzonMXJlbSdcclxuICAgIH0sXHJcbiAgICBpbWdIb3Zlcjp7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidibGFjaycsXHJcbiAgICAgICAgekluZGV4Ojk5OVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgTGVhcm5CeURvaW5nID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtvbkhvdmVyLCBzZXRPbkhvdmVyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPbkhvdmVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9uSG92ZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRPbkhvdmVyKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3QoJ3RpdGxlJyl9PC9wPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdCbG9ja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2lmNX0gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ0Jsb2NrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY2fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2lmN30gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ0Jsb2NrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY4fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjEwfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5MZWFybkJ5RG9pbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdsZWFybkJ5RG9pbmcnKShMZWFybkJ5RG9pbmcpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBDdXN0b21pemVDYXJvdXNlbCBmcm9tICcuLi8uLi9QdWJsaWMvQ2Fyb3VzZWwnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IFNjcm9sbFVwQnV0dG9uIGZyb20gJ3JlYWN0LXNjcm9sbC11cC1idG4nXHJcbmltcG9ydCB7IFNjcm9sbHVwIH0gZnJvbSAnLi4vLi4vUHVibGljL1Njcm9sbHVwJ1xyXG5pbXBvcnQgcGhvdG8xIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2Nhcm91c2VsMS5qcGcnXHJcbmltcG9ydCBwaG90bzIgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvY2Fyb3VzZWwyLmpwZydcclxuaW1wb3J0IHBob3RvMyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9jYXJvdXNlbDMuanBnJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8gU2xhYicsXHJcbiAgICAgICAgZm9udFNpemU6JzJyZW0nXHJcbiAgICB9LFxyXG4gICAgaW1nQmxvY2s6e1xyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgIH0sXHJcbiAgICBpbWdIb3Zlcjp7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidibGFjaycsXHJcbiAgICAgICAgekluZGV4Ojk5OVxyXG4gICAgfSxcclxuICAgIHN1YnRpdGxlOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicxLjhyZW0nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6OTAwXHJcbiAgICB9LFxyXG4gICAgc3VidGl0bGVOaWdodDp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS44cmVtJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6OTAwXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuMnJlbScsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uTmlnaHQ6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuMnJlbScsXHJcbiAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgfSxcclxuICAgIHBhY2thZ2VCbG9jazp7XHJcbiAgICAgICAgbWFyZ2luVG9wOiczcmVtJyxcclxuICAgICAgICBwYWRkaW5nOiczcmVtJyxcclxuICAgICAgICBib3JkZXJCb3R0b206JzFweCBzb2xpZCBibGFjaycsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjVGNUY1JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDonMTAwJScsXHJcbiAgICAgICAgb3ZlcmZsb3c6J2hpZGRlbicsXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogJy40cyBlYXNlLWluLW91dCdcclxuICAgIH0sXHJcbiAgICBwYWNrYWdlQmxvY2tOaWdodDp7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOicxcHggc29saWQgd2hpdGUnLFxyXG4gICAgICAgIHBhZGRpbmc6JzNyZW0nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1YzVjNWMnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9LFxyXG4gICAgbGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuMnJlbScsXHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgY29sb3I6JyM1YzVjNWMnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5pZ2h0TGluazp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyNjNGM0YzQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2hhcmluZyA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3QoJ3RpdGxlJyl9PC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMucGFja2FnZUJsb2NrOmNsYXNzZXMucGFja2FnZUJsb2NrTmlnaHR9IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLnN1YnRpdGxlOmNsYXNzZXMuc3VidGl0bGVOaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmRlc2NyaXB0aW9uOmNsYXNzZXMuZGVzY3JpcHRpb25OaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdkZXNjcmlwdGlvbjInKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC10eXBld3JpdGluZy1hbmltYXRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7bWFyZ2luQm90dG9tOictMC40cmVtJ319Lz57dCgnbGluaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nVG9wOiczMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVTcGVlZD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnMjRweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PXsnUm9ib3RvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXttb2RlPT0nZGF5Jz8nYmxhY2snOid3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXsnVHlwZXdyaXRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGV4dD17W1wiSGVsbG8gV29ybGRcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPiBcclxuICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVTcGVlZD17ODAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXs4MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnMjRweCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5PXsnUm9ib3RvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXttb2RlPT0nZGF5Jz8nYmxhY2snOid3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPXsnVHlwZXdyaXRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVGV4dD17W1wiSGVsbG8gV29ybGRcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLnBhY2thZ2VCbG9jazpjbGFzc2VzLnBhY2thZ2VCbG9ja05pZ2h0fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9IHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuc3VidGl0bGU6Y2xhc3Nlcy5zdWJ0aXRsZU5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3QtY3VzdG9taXplLWNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5kZXNjcmlwdGlvbjpjbGFzc2VzLmRlc2NyaXB0aW9uTmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnZGVzY3JpcHRpb24xJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVhY3QtY3VzdG9taXplLWNhcm91c2VsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBzdHlsZT17e21hcmdpbkJvdHRvbTonLTAuNHJlbSd9fS8+e3QoJ2xpbmsnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fSBzdHlsZT17e3RleHRBbGlnbjonbGVmdCcscGFkZGluZ1RvcDonMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9taXplQ2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nc3JjPXtbcGhvdG8xLCBwaG90bzIsIHBob3RvMywgcGhvdG8yLCBwaG90bzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVCeT17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLnBhY2thZ2VCbG9jazpjbGFzc2VzLnBhY2thZ2VCbG9ja05pZ2h0fT4gICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuc3VidGl0bGU6Y2xhc3Nlcy5zdWJ0aXRsZU5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3Qtc2Nyb2xsLXVwLWJ0blxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGVzY3JpcHRpb246Y2xhc3Nlcy5kZXNjcmlwdGlvbk5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Rlc2NyaXB0aW9uMycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXNjcm9sbC11cC1idG4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7bWFyZ2luQm90dG9tOictMC40cmVtJ319Lz57dCgnbGluaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzonMjAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbHVwIG1vZGU9e21vZGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsdXAgbW9kZT17bW9kZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNoYXJpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdzaGFyaW5nJykoU2hhcmluZykiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgcmVhY3RJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LnBuZydcclxuaW1wb3J0IHJlYWN0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LW5pZ2h0LnBuZydcclxuaW1wb3J0IGplc3RJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2plc3QucG5nJ1xyXG5pbXBvcnQgamVzdE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9qZXN0LW5pZ2h0LnBuZydcclxuaW1wb3J0IGdpdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZ2l0LnBuZydcclxuaW1wb3J0IGdpdE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9naXQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgbmV4dEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbmV4dC5wbmcnXHJcbmltcG9ydCBuZXh0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL25leHQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgamF2YXNjcmlwdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC5wbmcnXHJcbmltcG9ydCBqYXZhc2NyaXB0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2phdmFzY3JpcHQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgY3NzSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9jc3MucG5nJ1xyXG5pbXBvcnQgY3NzTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy1uaWdodC5wbmcnXHJcbmltcG9ydCBucG1JY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL25wbS5wbmcnXHJcbmltcG9ydCBucG1OaWdodEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbnBtLW5pZ2h0LnBuZydcclxuaW1wb3J0IG15c3FsSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC5wbmcnXHJcbmltcG9ydCBteXNxbE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC1uaWdodC5wbmcnXHJcbmltcG9ydCBmaWdtYUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEucG5nJ1xyXG5pbXBvcnQgZmlnbWFOaWdodEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEtbmlnaHQucG5nJ1xyXG5pbXBvcnQgd2VicGFja0ljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay5wbmcnXHJcbmltcG9ydCB3ZWJwYWNrTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3dlYnBhY2stbmlnaHQucG5nJ1xyXG5pbXBvcnQgc3ltZm9ueUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS5wbmcnXHJcbmltcG9ydCBzeW1mb255TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3N5bWZvbnktbmlnaHQucG5nJ1xyXG5pbXBvcnQgcGhwSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9waHAucG5nJ1xyXG5pbXBvcnQgcGhwTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3BocC1uaWdodC5wbmcnXHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvIFNsYWInLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2tpbGwgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0KCd0aXRsZScpfTwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9IHN0eWxlPXt7bWFyZ2luVG9wOic0JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amF2YXNjcmlwdEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2phdmFzY3JpcHROaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuamVzdExvZ29MZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3ROaWdodEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24gbGdVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3ROaWdodEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmplc3RMb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amVzdEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amVzdE5pZ2h0SWNvbn0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaXRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaXROaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV4dExvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV4dEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV4dE5pZ2h0SWNvbn0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVhY3RJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWFjdE5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc0ljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc05pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BocEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BocE5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbU5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e215c3FsSWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bXlzcWxOaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmaWdtYUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZpZ21hTmlnaHRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2VicGFja0ljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dlYnBhY2tOaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzeW1mb255SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3ltZm9ueU5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNraWxsLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignc2tpbGwnKShTa2lsbCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBjb250ZW50OntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQmFubmVyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRleHQxJyl9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICB7dCgnY29udGV4dDInKX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5CYW5uZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdiYW5uZXInKShCYW5uZXIpICAgICAgICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQXJyb3dCYWNrSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zJztcclxuaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFBsYXlDaXJjbGVGaWxsZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkJztcclxuaW1wb3J0IFJhZGlvQnV0dG9uVW5jaGVja2VkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmFkaW9CdXR0b25VbmNoZWNrZWQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuXHJcbmNsYXNzIEN1c3RvbWl6ZUNhcm91c2VsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvdW50OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVRpbWVyID0gdGhpcy5oYW5kbGVUaW1lci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSB0aGlzLnRpbWVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVOZXh0ID0gdGhpcy5oYW5kbGVOZXh0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVCYWNrID0gdGhpcy5oYW5kbGVCYWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oYW5kbGVUaW1lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVGltZXIoKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9Pnt0aGlzLnRpbWVyKCk7fSwxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aW1lcigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpPT4oe1xyXG4gICAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50ICsgMVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnJvdGF0ZUJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pih7XHJcbiAgICAgICAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50ICsgM1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUsIHByb3BzKT0+KHtcclxuICAgICAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgKyBwcm9wcy5yb3RhdGVCeVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUJhY2soKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMucm90YXRlQnkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHByZXZTdGF0ZS5jb3VudCAtIDNcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgLSBwcm9wcy5yb3RhdGVCeVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudDogMH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpbWdzcmMsXHJcbiAgICAgICAgICAgIHJvdGF0ZUJ5LFxyXG4gICAgICAgICAgICBtb2RlLFxyXG4gICAgICAgICAgICBjb250cm9sQnV0dG9uLFxyXG4gICAgICAgICAgICBuYXZpZ2F0ZUJ1dHRvblxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gW107XHJcblxyXG4gICAgICAgIGlmKCFpbWdzcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxpc3RcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKCFyb3RhdGVCeSkge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBpbWdzcmMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQoIHRoaXMuc3RhdGUuY291bnQgLyAzKSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3NyY1tpXX0gc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8nLCB3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGltZ3NyYy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIHJvdGF0ZUJ5KSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ3NyY1tpXX0gc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8nLCB3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Jyd9ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgUmFkaW9OYXZpZ2F0aW9uID0gW107XHJcblxyXG4gICAgICAgIGlmKCFpbWdzcmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJhZGlvTmF2aWdhdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIXJvdGF0ZUJ5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGltZ3NyYy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBSYWRpb05hdmlnYXRpb24ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7ZGlzcGxheTonaW5saW5lJywgdGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VJbnQoIHRoaXMuc3RhdGUuY291bnQgLyAzKSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDMgKiBpfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlDaXJjbGVGaWxsZWRJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe2NvdW50OiAzICogaX0pfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblVuY2hlY2tlZEljb24gc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPydibGFjayc6J3doaXRlJyl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFJhZGlvTmF2aWdhdGlvbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIHJvdGF0ZUJ5KSAlIGltZ3NyYy5sZW5ndGggPT09IGkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7Y291bnQ6IHJvdGF0ZUJ5ICogaX0pfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlRmlsbGVkSWNvbiBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHtjb3VudDogcm90YXRlQnkgKiBpfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uVW5jaGVja2VkSWNvbiBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7bWFyZ2luTGVmdDonLTFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezF9IHN0eWxlPXt7cGFkZGluZ0xlZnQ6MH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbEJ1dHRvbiA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0ZUJ1dHRvbj09PXRydWU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBtZD17MTB9IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UmFkaW9OYXZpZ2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDo8R3JpZCBpdGVtIHhzPXsxMH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRyb2xCdXR0b24gPT09IHRydWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVOZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWl6ZUNhcm91c2VsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBtYWluOiB7XHJcbiAgICAgICAgaGVpZ2h0OicxMDB2aCcsXHJcbiAgICAgICAgb3ZlcmZsb3dZOidoaWRkZW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonIzFmMWYxZicsXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzglJywgXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Oic4JSdcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J0JlYmFzIE5ldWUgJyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOicjQ0FDQUNBJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckxpbms6IHtcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIHRleHRBbGlnbjonbGVmdCcsXHJcbiAgICAgICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICAgICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgICAgICBjb2xvcjonI0NBQ0FDQScsXHJcbiAgICAgICAgZm9udFNpemU6JzIycHgnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkcmF3ZXJIZWFkZXI6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nXHJcbiAgICB9LFxyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBEcmF3ZXIgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZVxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fSBtZD17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzAuNXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdFSUFOIFdBTkdcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV29ya1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdzXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9BYm91dFwiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Fib3V0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScuL1NhbGllQ2hpZW5fUmVzdW1lLnBkZicgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXInIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3Jlc3VtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5EcmF3ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShEcmF3ZXIpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL3B1YmxpYy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHt0LCAuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSAgPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17bW9kZT09J2RheSc/c3R5bGVzLmZvb3RlckJsb2NrOnN0eWxlcy5mb290ZXJCbG9ja05pZ2h0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb250YWN0VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnZm9sbG93VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dCgnY29weXJpZ2h0Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2NvcHlyaWdodERlc2NyaXB0aW9uJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIH1cclxuICBcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Zvb3RlcicpKEZvb3RlcilcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCB7U2VsZWN0LCBTZWxlY3QyfSBmcm9tICcuL1B1YmxpY0NvbXBvbmVudCc7XHJcbmltcG9ydCBCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZCc7XHJcbmltcG9ydCBXYlN1bm55T3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB0b0RheSwgdG9OaWdodCwgdG9FbiwgdG9aaEhhbnQgfSBmcm9tICcuLi8uLi9zdG9yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250RmFtaWx5OidCZWJhcyBOZXVlICcsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBmb250U2l6ZTonMnJlbScsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzMycHgnLFxyXG4gICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgZm9udFNpemU6JzFyZW0nLFxyXG4gICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgIGNvbG9yOidibGFjaydcclxuICAgIH1cclxuICB9LFxyXG4gIG5pZ2h0TGluazoge1xyXG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgIGZvbnRTaXplOicxcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgZm9udFNpemU6JzFyZW0nXHJcbiAgfSxcclxuICBuaWdodExpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonI0JEQkRCRCcsXHJcbiAgICBmb250U2l6ZTonMXJlbSdcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmlnaHRJY29uOntcclxuICAgIGZvbnRTaXplOicxLjVyZW0nLFxyXG4gICAgY29sb3I6JyNGRkZGRkYnLFxyXG4gICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgIGNvbG9yOicjQkRCREJEJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZm9ybUNvbnRyb2w6IHtcclxuICAgIG1hcmdpbjogJzAuNXJlbScsXHJcbiAgICB3aWR0aDonNnJlbScsXHJcbiAgfSxcclxuICBpbnB1dExhYmVsOiB7XHJcbiAgICBmb250U2l6ZTpcIjE3cHhcIixcclxuICAgIGZvbnRGYW1pbHk6XCLlvq7ou5/mraPpu5Hpq5RcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3ctUmV2ZXJzZVwiXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgSGVhZGVyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICAvLyBjb25zdCBbIGxhbmd1YWdlLCBzZXRMYW5ndWFnZSBdID0gUmVhY3QudXNlU3RhdGUoJ2VuJyk7XHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAvLyBzZXRMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBoYW5kbGVMYW5nVG9SZWR1eChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxhbmdUb1JlZHV4ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmKHZhbHVlID09ICdlbicpIHtcclxuICAgICAgICBkaXNwYXRjaCh0b0VuKCkpXHJcbiAgICAgIH0gXHJcbiAgICAgIGVsc2UgaWYgKHZhbHVlID09ICd6aEhhbnQnKSB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9aaEhhbnQoKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGhhbmRsZURyYXdlck9wZW4sXHJcbiAgICAgIG1vZGUsXHJcbiAgICAgIGxhbmdcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgV0VJQU4gV0FOR1xyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IG1kPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezJ9IGxnPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC4zcmVtJywgcGFkZGluZ0xlZnQ6JzYlJ319PlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0MlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6J2VuJyxsYWJlbDpcIkVuZ2xpc2hcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOid6aEhhbnQnLGxhYmVsOlwi5Lit5paHXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMC4zcmVtJyx0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGUgPT09ICdkYXknP1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9OaWdodCgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9EYXkoKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFdiU3VubnlPdXRsaW5lZEljb24gZm9udFNpemU9J2xhcmdlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e21hcmdpblRvcDonMS41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSdkYXknJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dvcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xb3JrJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3b3JrJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J25pZ2h0JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xb3JrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV29yayc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nLCBtYXJnaW5MZWZ0OictMC44cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSdkYXknJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dyaXRpbmdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvV3JpdGluZ3MnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dyaXRpbmdzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J25pZ2h0JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xcml0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dyaXRpbmdzJz9jbGFzc2VzLm5pZ2h0TGlua0FuY2hvcjpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nLCBtYXJnaW5MZWZ0OicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSdkYXknJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL0Fib3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvQWJvdXQnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ2Fib3V0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J25pZ2h0JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9BYm91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL0Fib3V0Jz9jbGFzc2VzLm5pZ2h0TGlua0FuY2hvcjpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnYWJvdXQnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nLCBtYXJnaW5MZWZ0OictMC42cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZT09PSdkYXknICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vUmVzdW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1Jlc3VtZSc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3Jlc3VtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlPT09J25pZ2h0JyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1Jlc3VtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9SZXN1bWUnP2NsYXNzZXMubmlnaHRMaW5rQW5jaG9yOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgncmVzdW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1NhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cm91dGVyLnBhdGhuYW1lID09ICcvU2FtcGxlJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FtcGxlXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbGdVcD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAge21vZGUgPT09ICdkYXknP1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9OaWdodCgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh0b0RheSgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8V2JTdW5ueU91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOidlbicsbGFiZWw6XCJFbmdsaXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonemhIYW50JyxsYWJlbDpcIuS4reaWh1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0J319PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9jbGFzc2VzLmljb246Y2xhc3Nlcy5uaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgey8qIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPiAqL31cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoSGVhZGVyKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJ3JlYWN0LXRvcC1sb2FkaW5nLWJhcidcclxuIFxyXG5leHBvcnQgY29uc3QgUGFnZUxvYWRlciA9IChwcm9wcykgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0UHJvZ3Jlc3MoMTAwKTtcclxuICB9LFtdKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBtb2RlXHJcbiAgfSA9IHByb3BzO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMb2FkaW5nQmFyXHJcbiAgICAgICAgY29sb3I9e21vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZSd9XHJcbiAgICAgICAgaGVpZ2h0PXszfVxyXG4gICAgICAgIHdhaXRpbmdUaW1lPXs1MDB9XHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU9ezEwMDB9XHJcbiAgICAgICAgbG9hZGVyU3BlZWQ9ezYwMH1cclxuICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgb25Mb2FkZXJGaW5pc2hlZD17KCkgPT4gc2V0UHJvZ3Jlc3MoMCl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgU2VsZWN0IGFzIE1hdGVyaWFsU2VsZWN0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbCwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHJhbnNsYXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaW5wdXRMYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOlwiMXJlbVwiLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6XCLlvq7ou5/mraPpu5Hpq5RcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1SZXZlcnNlXCJcclxuICAgIH0sXHJcbiAgICBzZWxlY3RSZXF1aXJlZDp7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBvbk9wZW4sXHJcbiAgICAgICAgb25DbG9zZSxcclxuICAgICAgICBvbkNoYW5nZSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBvcGVuLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jb250cm9sbGVkLW9wZW4tc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgb25PcGVuPXtvbk9wZW59XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUcmFuc2xhdGVJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19Lz5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZT8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbD8/XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPiAgICAgICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdDIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIGZvcm1Db250cm9sUHJvcHMsXHJcbiAgICAgICAgc2VsZWN0UHJvcHMsXHJcbiAgICAgICAgcmVxdWlyZWQsXHJcbiAgICAgICAgZGlzYWJsZWQgPWZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4PTAsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGxldCBuZXdQcm9wcyA9IHtcclxuICAgICAgICAuLi5wcm9wc1xyXG4gICAgfTtcclxuICAgIGRlbGV0ZSBuZXdQcm9wc1tcImhlbHBlclRleHRcIl07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPFRyYW5zbGF0ZUljb24vPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgey4uLmZvcm1Db250cm9sUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3Q6Y2xhc3Nlcy5pbnB1dExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDpjbGFzc2VzLnNlbGVjdFJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxNYXRlcmlhbFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5zZWxlY3RQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsY29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVVuZGVybGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge3NlbGVjdDogY2xhc3Nlcy5pbnB1dH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBTZWxlY3REaXNwbGF5UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg6dGFiSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZT09PW51bGw/XCJcIjp2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclZhbHVlPXtzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrRXF1YWwoYSxiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBudWxsIHx8IGE9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiID09PSBudWxsIHx8IGIgPT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGEgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID0gYi50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhID09IGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJzPSBpdGVtcy5maWx0ZXIoaXRlbT0+IGNoZWNrRXF1YWwoaXRlbS52YWx1ZSxzZWxlY3RlZCkgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzWzBdP2ZpbHRlcnNbMF1bXCJsYWJlbFwiXTpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLml0ZW0ucHJvcHMgPz8gbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tyb290OmNsYXNzZXMuaW5wdXR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9NYXRlcmlhbFNlbGVjdD5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn1cclxuXHJcblNlbGVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuU2VsZWN0Mi5wcm9wVHlwZXMgPSB7XHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXJcclxuICAgIF0pLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIGZvcm1Db250cm9sUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBpbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBzZWxlY3RQcm9wczogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgRXhwYW5kTGVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3MnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaWNvbjoge1xyXG4gICAgICAgIGZvbnRTaXplOic0cmVtJyxcclxuICAgICAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaWNvbk5pZ2h0OiB7XHJcbiAgICAgICAgZm9udFNpemU6JzRyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjYzljOWM5J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNjcm9sbHVwID0gKHByb3BzKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbc2Nyb2xsQywgc2V0U2Nyb2xsQ10gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbEMod2luZG93LnNjcm9sbFkpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbHRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3thbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtzY3JvbGxDID4gNDAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTY3JvbGx0b1RvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHBhbmRMZXNzSWNvbiBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmljb246Y2xhc3Nlcy5pY29uTmlnaHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fT48L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9QdWJsaWMvSGVhZGVyJ1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL1B1YmxpYy9CYW5uZXInXHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi4vUHVibGljL0RyYXdlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9QdWJsaWMvRm9vdGVyJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUGFnZUxvYWRlciB9IGZyb20gJy4uL1B1YmxpYy9QYWdlTG9hZGVyJ1xyXG5pbXBvcnQgTGVhcm5CeURvaW5nIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L0xlYXJuQnlEb2luZydcclxuaW1wb3J0IFNraWxsIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L1NraWxsJ1xyXG5pbXBvcnQgU2hhcmluZyBmcm9tICcuLi9Ib21lL2NvbXBvbmVudC9TaGFyaW5nJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBkYXlCYWNrZ3JvdW5kOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJyxcclxuICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgIH0sXHJcbiAgICBuaWdodEJhY2tncm91bmQ6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonYmxhY2snLFxyXG4gICAgICAgIGNvbG9yOicjRkZGRkZGJ1xyXG4gICAgfSxcclxuICAgIGJvZHk6e1xyXG4gICAgICAgIHBhZGRpbmdMZWZ0Oic4JScsIFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDonOCUnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgV29yayA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtkcmF3ZXIsIHNldERyYXdlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXREcmF3ZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RHJhd2VyKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tb2RlKVxyXG4gICAgY29uc3QgbGFuZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubGFuZylcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2RyYXdlciA9PSBmYWxzZSAmJlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5kYXlCYWNrZ3JvdW5kOmNsYXNzZXMubmlnaHRCYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlTG9hZGVyIG1vZGU9e21vZGV9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURyYXdlck9wZW49e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonOHJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonNnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9IHN0eWxlPXt7bWFyZ2luVG9wOic2cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNoYXJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonNnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWFybkJ5RG9pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge2RyYXdlciA9PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZT17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhbGxcIjogXCJIb21lX2JhbGxfXzJNZFVjXCIsXG5cdFwibmV4dExvZ29cIjogXCJIb21lX25leHRMb2dvX18yN084RlwiLFxuXHRcImplc3RMb2dvTGdcIjogXCJIb21lX2plc3RMb2dvTGdfXzJydFZOXCIsXG5cdFwiamVzdExvZ29cIjogXCJIb21lX2plc3RMb2dvX18yRlFPTlwiLFxuXHRcImJvdW5jZVwiOiBcIkhvbWVfYm91bmNlX18xYTVpX1wiLFxuXHRcInNraWxsQmxvY2tcIjogXCJIb21lX3NraWxsQmxvY2tfXzFUbW5oXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b24yXCI6IFwiSGVhZGVyX2J1dHRvbjJfX3dGN1hHXCIsXG5cdFwiYm91bmNlXCI6IFwiSGVhZGVyX2JvdW5jZV9fMjR0VTlcIixcblx0XCJiYWxsXCI6IFwiSGVhZGVyX2JhbGxfXzNwUmk3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJCbG9ja1wiOiBcInB1YmxpY19mb290ZXJCbG9ja19fWHVDci1cIixcblx0XCJmb290ZXJCbG9ja05pZ2h0XCI6IFwicHVibGljX2Zvb3RlckJsb2NrTmlnaHRfXzNtaTdiXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25cIjogXCJwdWJsaWNfaW1nRGVzY3JpcHRpb25fXzJHQkRKXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25OaWdodFwiOiBcInB1YmxpY19pbWdEZXNjcmlwdGlvbk5pZ2h0X18zQ1hKRVwiLFxuXHRcImJhclwiOiBcInB1YmxpY19iYXJfXzM0N1FYXCJcbn07XG4iLCJcclxuY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcbmNvbnN0IGxvY2FsZVN1YnBhdGhzID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0KCkucHVibGljUnVudGltZUNvbmZpZ1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdExhbmd1YWdlOidlbicsXHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnemhIYW50JywgJ2ZyJywgJ2VzJ10sXHJcbiAgbG9jYWxlU3VicGF0aHM6e1xyXG4gICAgemhIYW50OidjbicsXHJcbiAgICBmcjogJ2ZyJyxcclxuICAgIGVzOiAnZXMnXHJcbiAgfSxcclxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcclxufSlcclxuLy8gZXhwb3J0IGNvbnN0IHVzZVRyYW5zbGF0aW9uID0gbmV4dEkxOE5leHQudXNlVHJhbnNsYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXb3JrIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50L1dvcmsvV29yaydcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgV29ya1BhZ2UgPSAoeyB0IH0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgPFdvcmsvPiAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5Xb3JrUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gIG5hbWVzcGFjZXNSZXF1aXJlZDogWydoZWFkZXInLCAnYmFubmVyJywgJ3dvcmtpbmcnXSxcclxufSlcclxuXHJcbldvcmtQYWdlLnByb3BUeXBlcyA9IHtcclxudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdoZWFkZXInKShXb3JrUGFnZSkiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmMTAtYzNmNmU4N2JlNWFjM2Y0YjIxMGFlOTk0MTg0NjViZWUuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjQtZWMyN2QxM2U0NTJmNThjZWQ2NjU1MTFkOGJlYzY1MGIuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjUtYThhZDE5ZDc2OTllNWFiNzA5MGRkYTRhOGQ4MjUyZjguZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjYtZTQ5YmFlZTY3MjdhZmY4N2FlODBhMTJlNjhhZjM4NDAuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjctZDQxZjk1ZGJmYmIwMzQyMTkzMGYwZjA2ZDRlZjEyY2YuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2dpZjgtMWEzOGNiOTg3Zjg3YTk4Mzg0ZGQ4MzhlZWUxYTFkY2UuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Nhcm91c2VsMS1hNTcwOWRhZWRhNDEyMzFmODFmOTJkOGIzZmU3MzAzNy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2Fyb3VzZWwyLTUyOWMwMTI1OWRkNzMyMDc2NDc1OWIxNDljMTE0ZDViLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jYXJvdXNlbDMtODExOWMxYjMzOGQ3NWU5NTAwODNiYzlkM2MwN2M3OWMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNXVWxFUVZSb2dlMll2VzdVUUJTRnZ3dHBVQ0NRSUNGcTZHZ29LR2tvS0tES0N3U0tDTG9nWGdZcHJ3QjFoQUFwVWlqZ0RSQVVTTFJBZm9za1JObGRjU2d5RWNaYWo2L3QyYzB1bWsrYVlqWFhkODd4bmI4MVpES1p6RFJoZFFHU0RvRFpNV2lKY1dCbWwySUI1eHhKZmlZUzA0VmFEUjRqbXdtRWRLVldRNjdJbU1rVktaSXJrcEJhRFRPT0pMRzM4Y1hNYnZuMVZDTnBGNWh2b1FIb1hwR3JqdWRya1dUQVhFc05RUGMxc2hCRWRHVU9PTjlTQStBenNndjBLL3BtZ011T0hIVmNpZlQxZ2IyNkJMVkd6RXpBVmlSa1Q4MzUyc0RJWnREUXpVZ2c5YzYxVS9vZE0rSWEyMnNrOVZuU3hJaHI3UCttSXA1ekJKcFY1Sm1adldnUUR4TmFrZWdmb0FwaU85K1pyWkhVUnFhcUloTzVhNjA0enBHbDBqTVR1VVk4bEUvcXNhNlIzeFY5bjZ3QWNOdVJyMnlrcWlJQ3RqMENYVWJNYkRCazhGUEt0OVpmanBSZUl6dG1WblhQK3dkdlJhQjZycGFOYkFHdmdkNlEyRjdvKzE2VG81Z3JMWkkyS2hidVlOaFZYdEs4cEdWSjcwSmJsalQwajVPa1hrWHVqVkVZZVJYWmhTNTJ5RHNieWZ2U202ZkoxSXJ0SGt1U1lsdm9VTUl6anlJaDdtMC94Um9CV0FXMkpYMlE5RnpTdGFyQU1PVWVTMXJqNU9Xc1J2S20vL0FoNldsa0NwUVpGRXhkbDdSd0tsN1NjWU04VDBaaFpMR0JnQ0w5ME5xdzZOWG52Y1pEK3pJM0dhUE1EMjlncWpVeUtrYXkyTS9paTZQYmlMdnNabllvNlNad1A3UUh0THV5eHpnQ1BnTHJ3SnFaSGJyMXRSMVIwZ1hnTG4rTjNXbVo2aHNud3RlQnQyYTIzeVpKaXErRUFFaTZnYTlhNWJmK09jWDR5WXdVQ2RXNkJ6d01EZUJOYU8vTjdHZ1U0Mll5bWN6MDhBZnkrV2V0dSt0QStRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ05VbEVRVlJvZ2UyWXZVb2NVUlRIZnh0c1pPTlhoR0FuYUdlVFYwaVJRaXVyZENhRlJDdERTZ3Q5QUYvQk56QnBRd2lTZ0JiYXBReWtDS21qYmhaQjFKQjFjU3hteFBVeTk5d3pNMmVXbGR3ZjNHTDN6ajNuL09mY2ozTUhJcEZJNUNIUlVEeHpEalRyRGtRUnc0ajB3Q09Ga1dPYldDb1JqRUVqNU1RZ2tLb0VZNGdaNlRNeEk3M0VqQmhTZTBaK2tKNUZGdTIwWkF4QTlZeE1Lc1pyYUFDakpXTlFNd2trbm5hRnJqb0lNU2I0U0lBbkJqNW9BQjNCeWJpQmoybkJmZ2ZGeTlKTXJRUm9DZjJuUWhDKzl0T3hJYjJNazJ5TWlFWUkyTzljYmVlM0pFVGxXeXZFK2l3cElrVGxPMlpFNEMzaE0rTzFNMllnTXlKZWdEeU1WZlZkUjBhc2hUeW9qQXprR2xramZJNHNPV01HY28xb2NBdkV2cTZSYTAvZmQrN3ZTTThVOWx3aHZvd2t3QjlOZ0ZvaDNSem50N2hWNjZYQ25sWkltN1F3RGFJVkF2NjU2Z3BwQVo5SWl6MlhUdGIzTzJDajE1WTVlK1F2M0M3NTFla0VzQXpzWm0wNSt5OFBYM1c5WnhmK0hlODl6aExnY1FXN1RjSHVqdFpJa2FrbDdSNUxsTHVYakFPdmhQNWFQbnhzSXA4TlhlQUFlQWM4RmV4TWtOWmFINEYvQVpzYk5laGdKZURVSjJxSzlLcXFEYjYzdmFsRHlHS0JBTng3L1ZYSnNZdmE0SVlLQ0NsN3VoZng0WEtrZmREaUhLa1R0VStyWGFzdTFFS0twUDBDbUFWZVpHMmVjaVc3eEYvZ0VQaEt1akZjR052UFpaaFUwQmJ3alhLTE9RRitBZHZBUyt4ZlRDbG1nRlhnQTNDR1AvQkw0QXV3RHN4Wk9iZjQzSm5ITVBBY1dNZ2F3T2VzN1pOT29VZ2tFdm1QdVFGU0JBZlZFamg4WndBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFFRmtsRVFWUm9nZTJaVFloV1ZSakhmOGVaR2l1ekJrbTB0QklHbzV3V3VRZ3Q2SU1LUTNBV0lkbWlvaUtwaFJBa0ZFR0xGa0VVbEVGR2tFUkVSRFdRMEVLSUNxWVBtMFlvUk50WWJ2d1lhOEtRVWtuSHlmbTF1Tzh3NTcxT00rZThjKzhvNFc5MTVzeDVQdjczdnZmYzV6d1gvaWVFS3B5b3k0Qmx3RUpnZHFiNUg4Q3ZRSDhJNGE4cThzbENiVmZYcTN1dGhtSDFFL1dHbVJReFQrMnJTRUNaRWZYWjNKeXlmMXJxWlVBL0VGKzVVV0FYY0JBWXpuVFpDWFFEQzByekcwTUlyK1htbDR6NmNla0t2cWN1bXFiUFdlb2FkVi9rOXgvMWxxcnlMZ2Rjb1k1R3dWNm8yUDk4bTUrNTc2cjBId2Q2T3dxeVhhMWsxeXZGV0ZtNldOZFhIWVBTclY5WGVZRHhPRHVpT0UrbDJNektjTjRHeE0vQ2p0d0VNeGlJeHRla0dDUUxBZHBMNjNOM3B4eE9SdU9rRjJ5eWtCRENNSEE0bXJvdTFiWUY0dWZpVUlwQnpoMkI1bHYrVUtadEV1cEM0TzVvcXIrT0lBK1U5dms3Sy9ZZjFLMVJqRU5xZTVVeHhnSzFxVHVqUUVmVnRSWDU3bFEvc3BuMXFmYXRsQ2pMZ2ErQVM2UHBINEJ0RkZWc0xoM0FqY0JhaW5KbGpFK0IrMElJb3kzNFRFTjl6SHJacHM2cFRVQkR4T1BxM3pVSk9LSStiZkhPeWlMcnA2VnVBTjRvVFI4RDlnQVRIWXFXQWxjM3hnZUFYMHIvbnc5Y0Nmd01iQUcyaGhDTzVlU1VqWHF6eFZsaGpOL1VCOVVMSjdIWkZLM2ZGTTJ2VWdkc3JxbU9xKytvVjlVdDVOc282SDUxY1lMTkdVTFU1MHNDeWd5cE45VWxvcnNVN1BaRXV5WWg2cnBKQk1RY1ZDL1B5VEgxelg1WE5QNHhoUEIxVHBBR2JjQXJpV3NYQVJ0em5LY0s2WXJHclI1MlZqTCs0S2R3ZjQ3elZDSHh1aE01QVNKeWk4d3U5WUxVeGFsQ0RzUUI4dktaR1ZLRjdJckdxOVI1TGNUYWs3bCtid2hoSkhWeHFwQXZHRDhYekFGYWFkTU1BUHN6MXZmbU9FOFNFa0k0VGZPTzg3RDZsbnB4UnF6VHdET0phd2VCVnpOOGsxUHJid1o2R04rS253UjYxQStBbjJnK25vNnhOUDRqaE5DcmRnRXY4dC9sMFJDd3B0WStzRHBYL1RMeHBWWW1MbEh1VWIvM3pCSmxpOFVKc1g3VW51a0tpWHhkWWRIMDYxWnp1L2hOWkIwakxYcFo3NWVtUjRCOXdORUpUQlpUVkxnVEVrSTRUSE5EbzM3VUx2VllkSVdQcUJ2VXVaUFlURmo5MWtIT0hYbWRZdXNGK0IyNExZUlFQbCtjTlpLMlg0dVMvZDVvNnBGelNRU2t2eEJYVTFTdkFMdERDSi9WbEUvTHBBcTVOaHAvVTBjaTB5VlZTTnltT1o3aHZ5TWFuOHF3eXlaVnlGQTBYcExoUDY2VVcrbDVWWXZGWjdFeC9weHN5NDFzRnFnbkk3dGJaeUxYcVpLNnFDRmdqRGNUYkQ2TTFnK3F1UTN6ZWxDZks1VWNMem5CQ1U2ZGJWRVp4enhSZDM3SkRicEdMZFFIcklpbTl3THZVbFMvQVZnT1BFcnpWNmJQZ2RXTm84QzVRZU4zdjlOMHRxdWRVM3MrQzZpWHFKdlZVNU1JT0tHK3JIWk03YkVhV3Y2OHJDNmhhTm5jUWRHSGt1SW8yd2YwaGhBR0s4bndQT2M1dS93THVleDlsblYrdEtFQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFEdlVsRVFWUm9nZTJaVzRoT1VSU0F2ekdEd2JoTU1nMW1YR29hWVR6d0lKZHlTUm9KRDVMeElFbkVnMUlVS2NXREV1VlNTSms4U01JVU5ROVRSTG5maWpTOHVMeGdCaU1TUSs2M2gvVWYvOXBuNWg5N25mK2NNV20rMnJYUG1iMzNXbXZQM3V1c3RYNzRUOGlKYVozUnFUWVF5RGZPZlEwOEI2NEI3MkxTeDBRZXNBSjRCUHlLb1gwQlRnS2oydE9JL3NENW1Bd0l0Mi9BQnF0Q1VZNVdYK1FZNkozN0NkUUREY2pPV2lnRUtvRGkwUHQxd0s0SStubHpBbmNIRHdNbFdhN1pCWmdMUEZicmZnY21aYmx1UmlZZ3V4OEkyeEx6K2tXNGQrNXF6T3YvNGFBU2NvWDR2SjVtSXU1bWpVeEFodk92cjBwQ1FJcWJTczRhbndsZERJdm40dDZGbTRhNVZtNm8vbENmQ1JaRDhrTGpyZDdKd21mVjkvckFXZ3o1QXJ4U3p5TU1jNjNvZS9Fc0NRRzFwTS91b1NRRUlHSE9SeVZuZWhKQ0Z1SDYrYmlGNUFDbmxJeG55SkdPblZ6Z2poTFVEQ3lJYWUxQzREanV4M2FGNytRbzM0Rnh3QVdndDNwM0M2aERvbGdyM1lFeHlJWVVxdmUxd0h6a201SVl5MGdtWUF4YUhWQ1FwQUVBeTNFdlk1enREYkFXT2NJbXJFZHJOYkEzOU80OWNKL1drNkp5WUVpcS94UjRHUHA3RVRBSWVBQlVJeGY5dlZFbk0rT1JYQ0hZdlJmQVlxQmJHM04ycS9HNzFmdEs1T3V0WTZvUGlFc2ZITGZpWVM0cm9VK0FVbzg1clJteUNkZUFjR3NDeHNhcHVLWWlKR3lxNTd5d0lWWDQzWlVHb0o5RlFkOFFaWWJxM3dZdVdvU2t5QVYyZUk0dFFUSkViM3dOS1ZQOXFNbk9STklYMzRlRmxzVjlEZEhqUGxrRUtLeEJaaG5RMVhld3J5RlBRd0k2SEw2RzFLdCtKVklPc25MZk9QNFI0dTY5OERYa0xPbThvSUJvWlpvYmlOdjJwY2F5dUs4aFAzQTl6aExnQU5EVElPc0hzTjV6YkNPdzA3QzJLZGJmQjh3ajdZcFhwWjZQQXZkdzA5T0E4dEJ6RFhMSHRwSTVQR3BDYWx5SjFvSDdBT2VJRmhEcUVHVW1jSjJXSVVvMWtpRzJDL004RlcvTGtJQUJTTkd2QW5zVjM4R2FSbFlCUjBMdnZpSDFydVpXeHBjaUVXNG1YdUVXTk5xRk1pVEUxcm5EYXVTNFpTSlQ5QnM3bHYvSUh0SloyMHRnQ2kzemkzK0dyL3N0QldhcDU2VjBJQ1BBMzVEWnBOUFB1OERwWk5TSmpxOGh3MVQvVWhLS1pJdXZJYnBNODhHd2ZuZlYvMnFZWjhiWGtDYlZIMjVZWDBmS1VXcGVzVE9YdEJ0OVM5c3VONkFZQ1Z1Q2VaTVQwODVBRDhTQVFLbjlIbk9PcWZHTjJDci9pYklSTitUWVJ1c1pYRDRTR2V1eEs5dEpSeS95a1VCUEsvZ1FNWEFPY3Z3MjQvNDg5d3M0UTRUS1lkSVU0MWJqLzlhdTRIcThEa1V2SkRmNVNtWURQZ0hiY2Qxdm9tVHo4L0p3cEdRekRhbERCUlhJODBnQzFaaTFkcDEwOHUvNURVZXliV2FZVm1rQUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDYkVsRVFWUm9nZTJhMFdvVU1SU0dUN3kxV3RxNnEzMEQ3Vlo4Z1dKUlg4Q0x1clJVZlJLdjlYRkVMN3pVMTdCU1FSUUtMWUk0MjE1L1hreGlvNXZOSkRPWlNhejlZV0NZYlA3azQrVE1TWVlWdWRSL0ltQUN2QVZtUUFXOEFUWnl6eXRLd0xZRytGc3pZRHYzL0lJRWJDMkFNRG9ESHVhZXAxY0JFT1hEQVBlQjB3QUlvOU9VeSt4S0tpTVJPUkdSS3VMM1YwWGtYVEdSMFpIWTFQZWJ3SEZFVkpKSHBpMkV5WWtUNEs1K2RoczRpb1RKbHpQTUovYS9CME5kSjF5SmZjejVNcHNBKzhBTllBUk1nUzhOTU1NdE13L0VISXlqNzJvUk1BRVFSczg4SHJzQi9mdURpWUFBR0hsOHhvRWU2V0VpSVFEV1BGNjNJbnpTd2JTQUFKaDYvSjVIZW5XSGFRa0JkVUt2THZBY3RtaDJnREQ2RE94YWZudkFaRkFZd25leGpiSThZY2lpbVJMQ0FRSkR3TkI5T2MzSkFRSjk3Z0MwWWJKSUdDMEFBZjhPWUFVNGFMQ2VZWDBEc004anIwUmt5UnV5dEJxTHlEMVhnMUxxaDRpOGFPaS9KQ0l2Zi9jeE44Qk1lZ0JSU2ludGo2TjVwSlQ2N3VvSHJJdklVWU45cFpSYUZ2a3pJcTZCK2xheU1XMlFENmxNSS9USTA3WVYwUC85M0JOZ2cyR1RIZXEzMDRwakxpSEpYZ0YzbkhnTTkvcTFkUURzQU92NmVnSjhhckJ0cnZMVUJiRktBUUZCSUxFNkF4NEVMTHUwTUlsQndpRVNMck5EWU4veWUwcTlrV3lyTER2Z1EyRHM4THVwMjRhRDZBampPMWlGbk5uVFFsaUR4K1pNaWpNN3RNbUpBSmlZeUZ6eitDd0hlaFR4SmVXeHgyT2FGU0lTNWlQdWlyMEdmTXNPRVFuemxicEtYOWZYdENnSUN5YnBEb0ErRWpzRFRENkloREQ1SVl3NndKUURZZFFDcGp3SW93aVljaUdNQW1ES2h6RGlJdnlGdzRqNkc4QnJIWjJmK3Q1OXhyN1VCZFF2V0h6RjJiZDJuQ2NBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNMRWxFUVZSb2dlMmFXMDdjTUJTR1AvRk9FWmNXMkFITXdBNUdvTUlHZUtDam90SnVFY29DWUJ0UVVRbFJDUW5lWU9EWmZYQ09tRWFKZlp4eEhJZnlTMGVLa3ZFZmZ6bys4VVVENy9wL05BVE9nQW53QlB3RUJwMzJxSUYyc1FDbUZKUGlXUzgwb2hwQzRnWFk2NngzU3ZrZ2VnR3pBenpqaDVCNEp0Tmh0Z0hjb1FmSkxqTTd3Rlp4dlFYY0V3YVRSV2FrSmg2QTdlSmU3ekpUTHV4ZXd1eFNYZGozdkE2eklmQU5XQUUrQW1QZ3BxSk5aOE9zRHFJS3Bxd2xNb0h4UVVoOGQzaDhWYlJ2RlVZTFliQkRxVTZmbEI2dHdJUkFHR0RaNGJVVzRCTVZKaFRDWUF1N1RqOEN2YUxBTklFdzJJSmVxdkZNUG1rMmhaRDRqUzFzMFJIMms1d1VScnVLMVlUSWtIalNqQWxSQmtrR00rdHcwb0FZV2w0QkRJbWJDUmRJR2Fhc1JlREs0enVoNWd6Z3JBVUlGNGpCWnFKT1h4VGVwMVVOMjhpR0QyVEZBYkt1OEg2VUg4K1ZYcFJhMGQ0NURYSVJ5elJBKzQ1bkkwWDc4NnFiQTlJV3U4RituUllyK3FJcDlpZGdzNDR3MWVkM09xNkFRMnhOckdPTC9KZkhVelhMandyYVZDQ2g4UUo4OWtHMEFSTVRKQWhDTk9zd3UrYmZlZUlZdTVCczZ0ZkpDdmdhdXhNc2E3VjRsaFJpRmhqWHhrcXpaNDhPSVFxdG1SaDc5c1kxNFZOSVp1WWRQZ3RLanl4T1VnNGNIbU5GKzJ6T3RpNnBuckdYZ1QrZXRsbWROaHJnRmp0TGZ5aGluQnVFS1BZS29KWEMxaW9XVEtjUW9sbGhzb0FRTllYSkNrSVVDcE1saEVnTGt6V0V5QWZUQ3dqUm0vZ0xoMmdBbkdDejgxaGMxKzZ4My9YVzlCZjFWcWY3aVlrRnVnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQzBFbEVRVlJvZ2UyYXZXc1VRUmlIbnpmcVdmaVJJbm8yaXBCMHhrS3dWekVhREVRTHJhMHRMZE9KbmYrRi80QllLV2hNRkVKYUNWYUNHSnNVaVNiZ0J5VENrY2pQWWpmaG1KdVo3RzUyTDN1NVBEQWNPemN6OS83bWZlZnpGZzZwT1pJZVNHcXB2clFrM1hmdEh2Qm9HUVVhMVhkWllSckFaVGZUSitSSDliYnNtZTl1UnE4S1dYVXpmRUk2Q3RXUWpzN3VWWS8wa1JBeld3YzJ1bUpPTVRiTXJNTStuMGVnM3VQRUd6RWhJWVhDeXh4Mit6NEdjR3JmaEpSTU01RHZqWlk2aDFaSXlJSHhpTmUybzNrS2w0MGtGYWpXY3g0SmNXQ0U1QnJzZFJhU3l5TjFtTFZDNUJMeUcyaFZaMHRoV3NBZjN4ZGVJV1ltWUsxS2l3cXltdHJXUVdqNmhjU0Y1NnV4WjRlZndHSmIrcHArZmdPV1BmWUZRMzQzSVpWaVprTytmRWxuOE52V2NjVGRKalJHWUg5bnJsejdMT2c5SVVHYllrSzZOZ1ZMdXVoa25RMFVyY2NZa2RRa3VaTnFUNk1rSGRwKy9zanRrVzRQOWxDYlM4NXpxYUVWcWpRQ1BBSmVFRmljQ3ZETGVjNHRKSWlrcHUvaTFTblRrSFJEMGpOSkM1NDJzckFrNllsVDcyV2diRWhnVk1pQXBNMllrQXh0K1BncmFVYlNsS1Nya2pyTzlwTG1QZlcySk1VaUtHcklTc2xDeGlRZHoxRHZpNmR1Y0RHRStCZ0JUMHo2ZWpBclp2YmV6TEpzUm4waEZCMGZzVmtML1BQMmlxUjN3RFF3WTJhbHJEZVNob0F4WUJ3WTlCVFpreEJmNVhQQXd6UWg2VFB3Q3BnRjVqUDJPSktPQUZlQVcybTZEaHpMYWNzT1JZUzRYRXJURkxBdTZRT0p0NmJkZ3BKR1NIcDhITGdKbk03US9qWlJ6NWNocEoyVHdMMDArVmpNMlY0NzVRNzJmU1JxUzk4SXFkTWxSTlNXdnZISUd2WDQwMmVEWFM1RG9rTE1iQk9ZQUo2VFhBWjBtK1gwdHlkU1c0TGsybTVJR2didUFwUEFOY3Avc2VBZjhBbDRUYkxJTG9TdWYxd0s3NXNrblNCWjFDWkp2SGFoWUZPcndCeXA4V2JtbmsyNmk2UmhTWS9UTFhyc1haWXRTUjhsUFExdDQ0dFFTaU11a2dhQjI4Q2ROQUc4QWQ0Q3MyWlcxc255a05yeUg1M3dpMjVrWVNZUEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDbmtsRVFWUm9nZTJhdjA4VVFSVEhQL3pJR1lOSURIQTBKaWJRQ1ozL2dGRkRKd1ZhMjFKU21lc01IZjRMUmpzNkRYOEFtdGpZR3FPRmhSRkRRZ2dJSkJJU0RuSktQSXE1QzV1NTkyWjJsdDFqN281dk1ybnM3THkzMysrOE43UHY1ZzZ1RUQrZUFEV2dIbW1yQWZNMjZYNUJ5RFJReWp3TnhhTUV6Tmlka3BEZDRybGNHTC90ams0VnNtZDNTRUphQmtXSWxzbnUxSWowbHBBam9GbzhsOHlvSXZDVGhFRGM2MFRNR0UxSTF2VHFzNXJ2dnFzTmgzRExXMGllS0N2OVlyYkVuRnFha0s2SmlNaHRNR1J3QWFobnNPbTRpR2pvR2lGQml6MW1JVUVSaVdIWDBpQUtrVjVhemY0VDRGcmdRMngvOW1MMjNmZWhCbHlYN0xTSTFJSDl3SWUwQTNzbzRyWHRGMHdJYnhkQzV4eC9nUFZFKzluNC9BVnNDL3pVbFBjSktScWpTdjhZTXJlV3I3aE5hS2tGbDd0ekJkVlowSGxDVkU0dUllM2NndTlZMStQS3VHaldTQmx6SnBWczA1Z0pIYmJHQlhGcXR4RE41Nloxbld0cWFVWlR3QUx3RGpoMDJJZmd3TG9PRnVKQ0dmbnNOWWtTY0I5WUJyNElQdEtjNVc0Q0x5eTdWV1dzSnRDSmZ1Q2ZSNGdQRXBsajRBTlFBZTRobDBtZkJMdFQzQm5reEk3Z01BUzI3VVBTMVc4L0JGdjFaWmdHWHdXSFdxRXBJZXNrSEFpMjMxd0dybDBMNUgxN0IzZ1ByR0ZTSksvM3pTZ21ZclBBaUhEL1Fydm9DdjdGK2gxNENUeWlOVzFjRVJuQXJKRUtaa0wrZXA2ejRpTHFpMGlhV2JqYmFCWE1jZXRIVExUV2hMRlRtQm1mQlI0QU4xUDRiOElaK1R5RUpIRURtR3MwQ2V1Qi9wSndMbmJmZGhiVGQzY25sNTRSRXRNaGhKTkx6MFJrbnpoKzlLbmlPUXdaOERqNHozbmRNNEgrbTBWUjJNWlUyYytCalR3ZFR3S0xtQmRZRWYrT09BVStBMHZvQldYdUdBSWVBNjh3cFhoVzhydkFXK0FaY0tzZHhIMUlHNjFMbWZXc0dBR2VBbStBclVaN2pmbkRqbFFRWHFIcmNBYTRLeWUrMXg1ek93QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvamVzdC1uaWdodC05ZWE3NDAyYTNmNDYyZWJiNmFkYzYxMmNlZjJmODVjZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvamVzdC01NDZmZGIyMjI4YjRjMGFhZDg0ZTdjMDQ4NmNmMGFlYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRXcwbEVRVlJvZ2UyWlc2aFZSUmpIZjU4ZEZUUzFVc3RJTEtTTFFwR21abVZabG9raGFFRUVhVkJaR2lnSzFVUFFTeElraVhqcG9Zc1drYmVnRisyQ1JDcVpsV1dwM2Nnc0RRVERGN1BBdk9UOTE4T2FuY3Z0MlhzZnp6bjdhTFIrY0ZnemEvN3p6VGRyelh6ejdYV2dvS0Nnb0tDZ29PRC9pdHBYbmFEMnI0ZjlkdlV3MmtMZUJxNEczbGZmVmE4NDJ3N1ZGZlZUdGF2YW9ENmg3bEkzcWN2VUI5U0dzKzFqcTZLT1VoZVYzZXVsamxaWHBNa1BPRnYrMVFWMXZqb3VsYnVxSTNKdHc5WHQ2dFN6NTJFcm8zWlcxK2ZxcjVhMVg2Q3VWdWUzdlhkMVFuMVR2VFdWVHd1dWFrZDFwVHFqN2IyckEyby85ZTBhbWk3cWx0THkvOCtqTGxHSDF0QmNseUo1ejdieXEyNms2THkrQ2JxNTZxeTI4S211cENXN3NnbTZ5OVRkNnZtMXRPZGlwcFZuQ1BCUkxWRkU3QUpXQTVQcTdsRTlVYWVySTV1b3ZWNzlUZTFRVFhldXYrSDJ3SEVBZFpaNlVTVmhSSHdQL0FnODNFYSt0VDRwZDU2b2RsZVBxYy9XMEE5VGQ2bzkyc3JIVmtXOVZIMG41ZEhyMUxWcTF4cDlubEozcE1qZHE2MThiVFhVbDlRMTZqeDFwRHF6Q1gwYTFMR3AzNWkyOExQVlVOdXI0MHZMVkgxTUhkakV2aDNVNTlVWDFQUHE2MmtkVVFlcTNXcG9PcW9qMU1ucXFsSmlFcW54UXFBMzhFdEVIS2xocUFkd01iQTlJbzQyMCtFQUxnZTZWNUJzallpRFNYczUwRmdRQ3VDN2lEaFdwanNZRVZ2Vm40RTl3QkpnSy9CTlJPd3YvU29wc1VQdFhjWFJpZXFScE4ycjN0V015VDZqL201MUJxazkxZlUxZEgrcTQ1UGRCZW5lcGxRZmFYWXVqeWwzNEZnU0hrM1hCUlVjN2FiK1ZUYmd5MmM0MmVHNXZvK1l2ZWxLMnVlUzdxQjZjMWxiRjNWNWFqOWs5cEhnbEFrbjNXRDFXL1YxVTBMU0RpaHQ1aFhwK3BDTkgvQ1RnQzdBYm1CTHVuZW0zNWV1eVpVWFI0UlZ0SDNTOWNlSStETGZFQkg3Z0RtcDJwRnNlNXhHUkd3Q2JnQStCR2FvN2ZLWjFocXlUS1VUOEhpK285bUhzMm1wK2pKd0tOZldKejNkQldvZnlzaTEzUWFjeURWVlBVOXpISzl3LzFpdVhIR2xSSVFSc1J5WUJWeGIvb2JtQTI4QVU5UTVFVkVhN0g2eUovNDM4QW93TnRlbkp6QTVsUmNDTzh0c2x0bzJBMnVCQTBCbllLRzZKcWM3RFB3RWJJNklFOVNtMnVvNGpZallDL3hRUHVGbHdFeXlKVElPV0o3dVA1bXVpeUppajU3UldQbEJ0NnREZ0Nsa1M2MzBNQnFBZm1UTDh3djFqaWFZYTVZVHAveDRpSWhEd0d1cE9oMnkvQlM0a1d3NXptdk9JR1ZqYkkySWFSRXhMQ0lHcDc4QndJTkpjZ3ZaNUd2Ujhna25TbnYwZHZWNjRPbDAvNzJJMk5hY1FacElmaXRVL1luWEVrNmJjRVRzQnQ1SjFkbWMzSzl6SzlnNG5DdDNib0V2bCtUSys0RDlxZHhYN1F5ZzNxTnVWRGNDRTNMNlE4RGVWTzVwbFRTeTByRXlPeG04TzlYWFJjVG5GYlEvQVI4RGR3SnZxV3M1TllMK1M0clVEelhTMUI0WW5jcExJMktidWhoNGxDeXIrMEw5aW13Wjl3Q3VBQVluL1FiZ1Y3TC9TVTBsQzY1ZnE5L1NTSVJ2SUl1c2tLVmZBRVRFRnJNdkRmY0JmM0J5WDVkWVFSWjFQNHVJRStxbzVQQlFUbjFUK1JWVWJjOGRBUllBYXlKaWZmSmhzOW9QZUFDNE1qMFVnRlhKN25peUkvU0RGTlcvVTY4QzdnWDZVMkZiVkR5L21vcmFLUTNRbU8yN2dCZFRmVVJFZk5MUzhYTGoza1IyakRZQTh5TmlhV3ZacmpYd29FcUpybnBBM2FCT3FHMnBvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQjUvQU96WTVPZStPdXVSd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUVXVWxFUVZSb2dlM1pXNmlWUlJUQThaOTJWTkMwbTVaUnFFaFhLaXExckk1YTVvVXUwQVZDU0lQS2JwQWxSQTlCTDBWUUpKTGFnNVVXa3JlZ0YrMUNCSFhvcnQyMHRFd3JneURweFVvdzgzN01IdFpzOXVkMmYzdWY0em43ZUpMdkR4L2Z6RGRyWnRiTW5yVm16V3dLQ2dvS0Nnb0tDcnFJNDQ2MkFsVVlqaHZRaWo4N3UvR2VuZDFnSi9BYXpzRmJlQVBEanE0NmplY1RERUFUSHNEdldJUGxtSksrSDFOTXh1S0tiNE54SFZhS3dWL1MxVW8xbW5tNE9hVUhZSHltYkJ3MlkwWlhLOVZJK21GVkp2OWlSZm1KZUY5TXpESERJb3hKNldyT3RRL2V3Wk5kcGxHRE9VOTQ3RnIweHcvS3kvOS96MUtNcmlOemtmRGtneHF2VHVNWjdGQmJ6bU1PWmpWWWx5Nmh2N0RUZXB5QnJUaStubUIzREMyempNRU9mRmxIYm9mWW0wL0hGNDFXcXBITXhNUTJ5bDZNTGVoZFM2Zzd4dEpaZXVGQVNzL0N5VFZrMTJNRDdteTBVbzFrQ3FiakZIRjZlcnlPZkROK3c4QThnZTV1dzl2d2tIQklROFhSY1NYMjVzaHZRUSs4a3VUWDQ1L0dxOW01UEk4V3pCWDIvRXdiNmpUaHBsVHZ4c2FwMWhoNllhcnlNcjBIbDdheGJtODhoYWVsMWR6ZGx6VDhpKyt4SytXL0ZkdlBidmxMbTRpMW04V0VUY0lGYU9tUkNrL0NtZmdKKytvb01CQ25paVBhL3Zicmo3Q3pvY0laVldPVDhnQ0hxdTZFZW1DZGNHWlp1VjJwL28vaWltaHB5bjhqMmZNaUhFelByMkxnZVV3WEUzSVEyekdoM3NpcThCait5UFJaN1JrcFl1TlZkZVMyaWVVT0M5SzNOU2svVVRpeHcyeTROUW51VCs4Rk9ZcWVnTDhyT3B6ZnpzR095OVM5Uy94S2VUeVI1SGJoeW9xeS9saVJ5dmVJUzRMS0FjTW9ZUUl2U3dGSlQyVTdYcG5lZDZpK3dkK1hPdG9xam1TMC8zN3AzRXg2U1ZJd2p5SHB2UUdmVjVUdHdITXAzVWNzNTJxc3dRaThLODdOUGJPUlZrdHF2Qy91cmFqWWhJZFRlcjZZMWF4aUM5SXp4T0dVeXNZS0IxUmlRSTZTbFJ6SStkNmFTZGRhS1FmRmFwaUZDeXQvb1hsaTAzNVF6R0Nwczl2RVlIYmpCYkhIbFJpRSsxTjZvWWgwc3BUSzF1SkQ3QlJYT0F2RkpKZllpNDFKTGpzeHRRYlNIcmJqdThvQkx4Y2IrMUJ4aTdBaWZYOGt2UmZyMk9YNFpsd21KblNFOG1RMGlSdU9QbGlOYTlyUVZuc0hqTU1QRDN2d1VrclBUTzltWEM1bWZlNlJkRkxCSm1FZXpjS3BqQkpIdTl0VCtWVmk4UFhvbEFGVHR0R3J4WkhyMGZUOVRmeDhKSjIwa2F3cDFEemlkWVJxQTk2SzExTjZ0cks5enNscEl4dnQ5T3VBTHFkbDBqdVVnLzdobVhhdng5ZnBtWmFSM3lOc2xQQXB1UkZrM3JZeU96VTRLZVUveG1jNXNodnhBYTdGcThJeHRlYklqaFhiWGlXOXhEOExzRXlzcENXNFcwUjFxOFd0eDBFUlRRMFRwa0RjY1B3aWJqaG5DT2Y2bGRoL0QvUHdUY0piRXJaVjRnY1JxZHlLdjVUdHVzUks0VTAvRmJZOU9TazgycUcvVkhZRjFiSzVmV0xyYWxHK3RGc3JiSGtLemhLVEF1K2xkcWVLTGZUdHBNTTZuSTFiY0w0Y3M2aTFmN1dWdnFtRGFtMVB3TE1wUHg0ZmRVSi9KYTRRMjJoVGVpL3J4TFpyTWxKK3JMdFRMTGxwdWJVTENnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2pySWZ6NWg5MDhpMmRhNEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWdBQUFBRXpDQVlBQUFCSGZydGtBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFCdC9TVVJCVkhnQjdkMk5kUnRIa2dEZzFyNE53QmtjTmdOZEJBZEhjSFFFQzBjZ09RTEJFVWlPUU5vSTZJdEF2QWprRElpTFFNNmdiNXBvcmlFS21DbjhESDU2dnU4OXJOWmlreFFKRExxbnFybzZKUUFBQUFBQUppVG4vRG9CQU5QUlRmNno3dkZEWWhMK2xnQ1l2RHJ4ejErOWV2Vm5BZ0Ntb1ZzQUxCTUFNQjNkNVArMmhQOFRreUlGQURCaDNjUS9MMzkyb2Y5VkFnRGFWNHYrbGdrQW1JNXU4djhzOUE4QUU5Sk4vTys3eHlJQkFOUFFUZnh2dXNmSEJBQk1RODM3UHdyOUE4QkViRXorOHdRQVRFTTM4WDlSOVE4QUU5Sk4vTy9LM1g4Q0FLYWhWUHZudFZrQ0FOcFg4LzVmaGY0QllDSTJpdjZFL2dGZ0tycUovNzdlL2M4U0FOQytXdlJYdkUwQVFQdTZTZit1VHY2Ni9RSEFGR3ptL1lYK0FXQUN1Z24vaHpyeFp3ZjlBTUJFMUJQK2hQNEJZQ28yaXY2RS9nRmdDcm9KLzNYK3l6d0JBRzNiS1ByTHV2MEJ3RVRVRS82eWJuOEFNQkViUlg4TytnR0FLZWdtL0RjYmsvOHlBUUJ0cTNuL0xQUVBBQlB4b3VqUFFUOEFNQVhkaFA5NTQrN2ZRVDhBMExxTlpqKzYvUUhBRkpUZS9wdDVmNkYvQUdoY3pmdC8zVmdBTEJJQTBLNzg3UWwvUXY4QU1BVmx3bjhSK3Y4aEFRRHRlbEgwVjh3VEFOQ3VNdG0vbVB5WENRQm8xNHRtUDdyOUFjQVV2Smo4c3kxL0FOQzQvTzBKZjBML0FOQzZMVVYvWHhJQTBLNXVzbi85WXZKMzBBOEF0R3hMMFYvaG9COEFhRmtKOWIrWS9IWDdBNENXYmNuN1B3cjlBMEREdW9uK1RmN2VJZ0VBYmNyZm4vQW45QThBTGR0UjlGZisyMEUvQU5DcWJxSy8zeEw2bnljQW9FMWJpdjZLWlFJQTJ0Uk45SGRiSm44SC9RQkFxM1lVL1dWYi9nQ2dVYVc0YjB2Um45QS9BTFNzYk8vYk12azc2QWNBV3JXajZNOUJQd0RRcXJLMUwyL25vQjhBYUZIZTN1eW4wTzBQQUZxMVkvSi9GUG9IZ0VaMWsvejdIYUgvUlFJQTJwTzNuL0FuOUE4QXJhcDUvN3dqOU8rZ0h3Qm9UVS9SWC9FNkFRRHQ2U2I1enpzbS8yVUNBTnFUdHpmN2VRcjlKd0NnUGFXeVArODJTd0JBVy9MdUUvNkUvZ0dnUlFORmY1OFRBTkNlYnBLLzN6SDVPK2dIQUZyVVUvUlhMQklBMEpadWdyL3JtZngxK3dPQTFnemsvUitGL2dHZ01kM2sva1BQNUMvMER3QXR5cnRQK0NzK0pBQ2dMYm0vNk84eE8rZ0hBTnJTVGU2dmN6OEgvUUJBUzNKLzBWK3hUSENqWHVWMTFlb3NPUDdQVjY5ZS9aRzRLZDF6UEU5YzBxcTdibFo5QStwZFpDU01QUGkxT0ozdWVmblMvYkhyRHI4OEYvOFkrUHdmZWo2ZjZ6V0o2K3p2M1dQUlBkNEZ4Ly9admFELzB4dlF6ZEdXOUxKKzdoNmZCc2JNdThmN05PeVA3aHI4c2JzRy8weU1xdVQ5VS8vay9XTWFWajdmOVhkN2Z1MGV5OVM0djZYOWxOV3NSaGR3WXQyRVhxckkveFVZV2lhVTZJS2RBM1dULzEzcW53QitkU1BFcmR0M0FWRE11NHZqYlFKT3JWeFhxOGc0YVozeDFMUm9YelRtb1p2OGx3bHUzQ0VMZ09KZDF2RUtUcXFHOVg4T0RyOTNEWTZtUkRsbk96NjJ6M01FViszUUJZQlVBSXlnV3dROHBIWCtjWWhyY0FRMTd6L3ZHZktMMEQrdE9IUUJVRWdGd0FocWVQa2hNTlExZUVKMUo4YXlaOGluN3JuNWxLQVJ4eXdBQ3FrQUdFY0pNMGNxL2Q5clJITzgrajUyM3pOa2xXS1JHYmdaZjAvSGVRNURScmJEY0wzS1JQTkxZaXdQYVU4bHpOeE5TbVVSY0I4WWZsKzM1OW9hZUxnUytwLzFmUHpRcXYvU042V1Ztb0ZTR05uWHE2S2w5NUZwOUxzcG5henk4WVFocjFqZytYdE1YS1h1dWZtUVl5STlCTmdpOS9mNUx4ejBrNTUrVDQvWiswaGI4bWtXQUYrelZNRFZDangvTHR3cmxZZVBvTjMwejhSZThyclZiKysxa1IzMDh5UmJBRFFuV2dNd0ZGcFVrUXdqcUdIOW40TERTN1JnbGdpcEUvdFFsejVkRjJsV2RBRlE4aUcvRFl4UmtRd2pxT2R2UkhLckZ1TDdLV21UV2MvSGRmdWpiVG1XQXZpY1k2RklxWUFybEljSjNkMkFlaDFHYUJVOG9Qc2R2WEZON0NkTEFUUW52QTB3MktYTUhRaU1KN28xc0N6cTU0bXQ4dm9tWlRrd3pNNG1tcmRYSDREYXBVd3FBQzZnaHFPajlRQWZzK0sxWFVyZXYrOTNJL1RQSkJ6U0NHaVpodmRJdnN0U0FYQnl3VVY0TVV1eDQ0VW5KYSszUzg1Nmhqam9oOG5ZZXdHd1J5b2cwc0FFMk44eXhScVZMRVRqL3RMOUxoWnBmZUxpTHF2a29COG01S0JXd01HcTVOZmRCYmRNd0VsdGJBMk0xQU9JeHFWLzUvMkhpaU9GL3BtVWc4OEM2QzZVMGgzcllXQlllZlBScHh4T3JFNVUwVk1EUmVQV2VmOVp6OGNkOU1Qa0hIc1lVS1FxMmE0QUdFRmRoUDhlR1BvNlQ3aFZjTjBXT2VzWnNrb08rbUdDamxvQUJPOUNwQUpnUEdVUnZncU1lenZGcllIZHozeVhocmY4Q2YwelRUbllDR2pnYTN3T2ZBMnBnQXNKUERjYWVOeXdNckhubU1jOG9hMkJlZDNuLzNIZ2QrS2duNkNzRVZCemprMEJQSk1LZ0F2WmMydmdsT29CeW52T3JPZmpxelFjSFlCbW5XUUJVTU5uUTl0bnBBSmdKTjAxV0xhM1BRU0dUcUpSVjE3bi9lY0R3eHowdzdUbEU2UUFOcjdXZmVCclNRV2NXZUE1RWJwclFGNkh2TDhHbnUrdkxWK0g1V2NML0E2V2liMWtLWURtbkNvRjhDeFNrRlFXQ1ZxVXdvblZTRnowMU1BbXI4TzgzdTgvbE9aWTZmWUhKMTRBQkxzRXp0SndRdzdnQUhVdmU3UWVvTVhyY0dqTFgrR2dIeWh5TEFXd1Z3RmZOLzVENEd2T0UyY1JlQzZFN2hxU1kwZDNQN3RMamVoK2xuZUJuM2VaT0VpV0FtaFBIbWNCRUhrREtoK1hDamlEUE15RjI1Z2N5NE1YcFI1Z2xtNWNYdGMvREFuVk1yRmR0Z0JvenFsckFKNUlCY0JsQmMvcktNb2kvS2EzNk9iMWpjVFE1TDVLRHZxQmI0eXlBQ2lDZTVNbjJaME16aUY0WGtkeDYxc0RoNDc0TFhUN2c1ZnlDQ21BRjEvL3kxRFlLRXNGakdyNDZSVzZhMVdPYncwc2JtNXJZUGR2ZmhQNHVUUWhPNEVzQmRDYzBTSUFHNGE2Qk02U1ZBQ01JdGlrNjlsTmJRM002OXFGNWNDd1ZYTFFEMncxK2dLZzVpS0hMa0NwQUJoSmR3MldFd05iM0JwWTh2NURDeGFoZjlqaEhCR0FhQzd5NHkzZGZjQ05XYWI0cVlIL1RGY3VyNDgzbmcwTSs2MzJSUUMyT01zQ29KSUtnQXVwTzNOK1NzT0hkaFVmOGhWdkRleitiWXZ1ajZHaXhWVnkwQS8wT3RzQ29JYmhwQUxnUW9McHVPSnF0d2JXaFVua1JzRkJQekRnbkJFQXFRQzRzRDIzQnI1UDE2ZjArWjhOakpIM2g0Q3pMZ0FxcVFDNHJKSUtXQVhHWFZWRUxxK1ArQjNhcXVpZ0h3ZzYrd0lndUMxSktnQkdFdXpVK2V3cUluTDEvV0FaR09xZ0h3aTZSQVFndWkxSktnQkdFdXpVV2N6U2hlc0JhdDQvOG04UStvZDk1SkU3QWZaODM4aUJRZGVZZzd3NWVaZ09YaE9WaHp0MVBydFlxK0R1ZTM4Ty9Qc2M5RE95ckJOZ2N5NFNBU2lDWVVpcEFCaFhkR3ZndTN5QnJZRjVuZmVmRHd4YkpRZjl3TjR1dGdBb2dtSElqMWtxQUVZUjNKNWJsR3Z3UHAxUmpyWDZMWVQrNFFBWFhRQlV5OVJma1R4TGRnWEFhT3JXd0g4RmhyN09aMHJMMWNrL0V0Yi9wTnNmSE9iaUN3Q3BBTGdLSmNlL2lvdzcwN1ZZRnYyemdUR3I1S0FmT05nMVJBQ2VVd0ZERjdKVUFJemttcllHZGwvN1RmZkhJakJVNkIrT2NCVUxnS0kyNy9palo4Z3NTUVhBYU9wQy9KZkEwRmthcVI2Z2h2NC9CSVk2NkFlT2REVUxnR3FvSWxrcUFFYTBaNnZnazI0TnJGR0ZTTjUvbFJ6MEEwZTdxZ1ZBc0NKWktnREdOZFN1KzFuWkdqalVtbmNma2J4LzRhQWZPSUZyaXdCRTdrQm0zVU9ESUJoSnNGMTM4YlExOEJRTDhodzc0cmVROTRjVHVib0ZRRFYwQjdMbzNqRHVFakNLWUx2dVlwYU9yTTJwZWYvSW90NUJQM0JDVjdrQWtBcUFxN0JNOGEyQnh5eklTOTQvY2kwNzZBZE82Rm9qQU0rcGdOOTdocFEzaklzZVVnSXRxM24ybjRMRFB4N1NLcmkyK3AwRmhncjl3NGxkN1FLZ0drb0YzRWtGd0hpNlNiZHN6WTFzRGR4N1FWN3ovc3ZBMEFlaGZ6aTlxMTRBQkp1VFNBWEFpTWJZR2xpakJaSGFnVlZ5MEErTTR0b2pBSkZpSktrQUdGOTBhK0Q3NE5iQTBraG9GaGduOUE4anVmb0ZRTFZNL2NWSVVnRXdvam9KUitzQmVyY0cxcngvWkpIZ29COFkwVTBzQUtRQzRQS0N4M2NYczdRanZGODdlUzdUc0ZWeTBBK002bFlpQUpFM243T2ZWdzRUdEV6OVozWThLMXNELzduNUZ6WHZIMDNYQ2YzRHlHNW1BVkF0VTM4cTRPVDl5WUcvYkd3TmpOUURmSGl4TmJBMCs1a0ZQczlCUDNBR043VUFDTzVMZm5mSWZtUWdKdGlvcS9oM2dXN04rMGZxZEZiSlFUOXdGcmNXQVhqZWw5ejM1bU5YQUl3czBLanJXWW5LbGV0eG1XSWM5QU5uY25NTGdLSTJCWG5vR1NJVkFPTXJoYm1yd0xoRmlwSDNoelA2ZTdwZDVjM25TOXJkUTd5a0FuNzNoaEpUcTdNNTNoOVR1WU10UDJmM3Vpblg0ZWQwUEFmOXdKbmQ3QUtnVE96ZG0wOUpCZXc2UmV3NUZlQUFrV0d6ZEpvM2NkYXZ0NGMwRVdWM1RuY2RsdDA1YjlKeFhLZHdaamVaQW5nV2FGRXFGUUFqNjY3RGNvMDlwTVA5SWxJSDUzZlRDNEJxcUVXcFhRRXd2bWlyNEpjZTZrSWVPTFBvQXVELzBwVUtiRW15S3dCR1ZxL0R5S21CbTFiSlFUOXdNUzFFQUNKYmtxUUNZSHpsR3R3bkN2QWc5QStYMDhRQ29CcmFraVFWQU9NcXpYNzJPWTlqOGJKZE1IQSt6U3dBQWdjR1NRWEFTTHFKZk5IOWNVaVU3WU9GT1Z6R0xmY0IrRTVnUzlKVEtrRFIwWGZLNG1uZi9DM2JyZExFMUFuOGZUcU03YnB3S2QzRnU4ekRsdWxHbENPQnU4ZGp6OC95ZFdwM0hNTlBiMzVNY0tDQjZ5M3EwQVVFWnhKNG5yMlAzSmlXYWdDZVNBWEErZVQxSVQremRMeHlmUEE4QVdmVDNBS2dLS21BN28vZmVvYllGUUJINnE2aGNycmZNcDNPeCs1cjdsTkVDQnloeVFWQXRVeDJCY0FvOG41NS8zS0U5eW93YnBaRTUrQnNtbDBBMUZUQVR6MURwQUxnY09YYW1RWEdsUlArU24rQWFNT2ZPOUU1T0krV0l3QmxFZkJINnE5dWx3cUFQZFc4L3p3dzlOOG4vTlcwWEhTblNZbk92VTdBcUpwZUFCU0JBNE9rQWlDb1hpdkx3TkJWZXJHMUwzQXRQaXZSdVh2MUFEQ3U1aGNBVmQ5QkpWSUJFRkFuLytpeDBiL3VhUE1iUFRSb2x0YWRCWUdSVEdJQkVEZ3dTQ29BaGtXMy9QM1dYWE9mdG4yZ1hvdlJlb0MzZGFjQk1JYmNXQ09nUHQzUDhibm5aMnkyUVZEZytkWEFnMTdkYStSTmpubk1nZEI5TitaRDhPdE5ybkhYdGNvYUFUVm5LaW1BWjFJQnNLY2N6L3NYUDlZZE9FT1czZU9Qd0RqWEpZeGtVZ3VBd0pubFVnSHd2WkwzanhUay9SSTkzbmRqbTI1a3NlQzZoQkZNTFFLUWFtN3k5NTRoNzdNdFNQQWtyM3YwendKRFArMTd5RmFnTm1kVHVTN25DVGlaeVMwQXFwSUtXUFY4WE1pUnljdnhJMzVYS1Q2UmY2TXVHbjRQRHYrWWJRMkVrNW5rQWlCd1lORHIzRWpoSXh5aTV2MmoyL0Iram9iK2QzMSswaW9Zem02cUVZRElnVUh2cEFLWXNQc1ViL1g3a0k0UVdKQnYwaW9ZVG1TeUM0QnFtYVFDNEJ0NTNlbzNzdmo5NDduVjc3RUNDL0pONzJ3TmhPTk5lZ0VnRlFEZnFvVjJ5OERRVmVvL2JHdHYzZlZZN3V3ZkFrTzFDb1lUbUhvRVFDb0FxbnBYSFkxNi9YcGszbitYYUt2Z2NrMXFGUXhIbVB3Q29LaDNIbjFOU2FRQ21JS2pXLzBlNjRCV3dmTUVITVFDNEM5OWR4NnY2MzVvYUZMTit5OENRMWQxd1R5YTd1dVhiWUhSZW9CNzlRQndHQXVBcW52VEtSR0F2cjNNN2pabzByNnRmdE41TEZOc2E2Qld3WEFnQzRBTmdmUEtOU0toS2ZYMUhEM2k5NWVSOHY3ZjBTb1l4bWNCOEwyK1ZNQXNLVHlpTGRHOC85NnRmbzhWaU1wdDBpb1k5bVFCOEVLZ1A3bFVBRTA0UjZ2Zll3V2ljcHRFNkdBUEZnQmJTQVhRdXByM2p4YTIvblN1MFArdTc1L2lyWUlWNjBLUUJjQnVVZ0cwTEhyRTc2ODFGSDh4ZTdZS1hxZ0hnQmdMZ0IwQys1R2xBcmhKZGN2ZkxERDBaSzErajZWVk1KeWVCVUNQd0g1a3FRQnVTdmQ2dlVzWGF2VjdyRUREcm1kUHJZSVRYSm15TUMwM2ppOGVzN1NuTXUrVVNGZjNLSDB3SHJ2SDEveVg4dCtmUysrYXdadlUwdXMrRDF1bWlhcS82TWVlMzgzVjV4eUhuOTc4bUdoZWZmTjV6REdMZElYcXovQTErRE9vQnppaHdHdkgrOGlBdkgyK1hlengrZVgxL3pudjV6R3ZGLzdmRVFFWUVNZy9TZ1Z3SzByRG5GbGczR2l0Zm85VlUzTy9CSWU3Tm1sRzkxcCswLzFSRmxuenRKOVpXbmZNL0s1dXpRSWdJSkIvL0ppbEFyaGk5ZUtmQjRhTzN1cjNXSFZ4RXEwSEtOZm1MTUVOcTlmdnNYMDRTdlRobTY2WkZnQnh5N1I3SzlJczJSWEFsY3J4VnI4bDJuV3VWci9IV3FiNDFrQ3RncmxaQTlmdlExcEh4RXE5em8vMVVmNzc5eDNqdjkwbGs5VUFoT1Yxd1VhZmVicENnZWRYN3E1UmViKzgvMDF0bit2K3ZhOXpuSzJCUjhwcUFJNldENmdCeU50ei9vOTVZTDdKNjJ2L3k1YlBMVFUwVHhGckVZQTlTQVZ3ZzY2MjFlK3hhbitDYUQxQXFZaCtuZUNHNVBYZC8vekZYejlGNnVwOHRGT3BsK2tlLzVtKzN6bFQ1cWluQmJFRndKNEd0aUxOa2xRQVZ5S3ZpNFlXZ2FHcmRLRld2OGZhczFYd3ZRVTZOMmErNWU5KzM3TXo1N1pGOG4rVi80a3VBQ0luY2sxSjN5bGxLbys1dUx6ZkViK1hidlY3ckxKTFp4VVlOMHNXNk55VzJaYS8rOSswaHhvcEtJL1Z4dU9KQmNBQkFnY0dTUVZ3YVRmVDZ2ZFlnYTZkbThvQy9aOEpKcVM3UmtySzRCOGJqNmRpWHltQUF3MkVIbWZKblFZWGt0Y05jR2FCb1EvWDB1cjNXSHUyQ3Y2UWJRM2tObXk3K1Q3WkF0WUM0RGg5QndaSkJYQjJlYjhqZnFOM3pUZEJxMkFhdE8zMVhIYWp2VDlGbE5rQzRBaFNBVnlUZWxjYmpUejlldU41LzEzNjZuTTJ2YzVhQlhQbGFtUnIyK3U1TEhiTEZyOTN4MFN6TEFDT0pCWEFGU2wzdGJQQXVLdHQ5WHVzd0tKOGt5Z2R0MkRYNjNtVzFvVytqN1V2UUxuaFhPeTEzVFhIR2dFdEVqdmw5WUZCZlFlVXpOTUZCWjVmRFR4dVhMMFRpSmpFYzkzOW5KK2l2NDhzU2hlU05RSTZXajd3TUtBOVhzK2JyK3VQZWIwZzJQbjZGZ0U0Z2NDQlFSK3pOeGxHa3RjTHpHVmc2QzIxK2oxV0NaR3VBdU5tU1QwQVY2NmJZeFpwdjE0ZHM3VHVBVkxhWUQ4dkJtWXZCMWtBbkVqM0JQMmVkbGNoejVKVUFDT29GM1cwMTMycmVmL3ZCQmJsbTBwUmxWYkJYTFc2WStjZjNlTmZhVC9sNW5PUjFndUJiK1loQzREVFdxYmRkeDN5all3aHV1WHY1bHI5SHFzV1VFVmJCYi9MV2dWejVXcDczMFZhTHdUS0FyZmNlSzdpWCtIcFJNQy9GZ0ZaRGNCSjVmNERneDR2a1FvSVBMOXlkemNvNzVIM3p4UGU5NTYzSDZaeU5kZm5yY2hxQUk2V0Q2d0JDSHpkc3F1bDVQdnZjK3p3cjd2eWVTSUFKemJRa0dTV0hFM0tDZVQ5V3YzK09KWFEvdzU5L1RvMnpaSlVIVGVvZFBNc08zdTZSMm5yWGFJRDVSQ2d2bFJCT1NmRUFtQWt5N1E3TEhQM3ZQcUNROVM3MU0vQjRaUEorKzlTZi82ZmdzUGZ1ajY1ZFhWQnNFanJWTUZxeTVBU3FmNFBDNEFSMUFLa3ZqZWNqMEtOSEdGeXJYNlB0V2VyNEk5WnEyQWFVQmUvSlJxd0xRTDJvd1hBU09vQks3dTJiWlRKWHlxQXZkVjg0U0l3ZEpVYWEvVjdBc3NVYnhYcytxUUo5WVowYXpyZzc0blJsTHV2N2czN3Y3di91NjI2K0NrVlVMY1B3cUI2VnhwdFh6djUwUDlMNVkydyt4Mld5TnlYTkh4UzRsTy85ZTV6b3JzSW1KQ2FKdnJtTlhSRWQ4M1ZqdTh4VDk4Zi9QTS9CODRaMjJ0Z3NsMEFveXB2Mm5sM2w4Q3Y1MGdGQko1ZjFiczNJTWVxZTR0bFlxZnU5L00yeDgwVFQ3SmRBUCtXdDNmbSs0L0E1OTFIWDJONVhkbi9VclQyNStYWCtyanQrMG9Cakd5Z043bFFJeUY1dlhkM0ZoaTZrdmZ2Vi9zaFJPK2l5aHVuZXAySnlIOXRwNXNQRE4xMlIvM3p3TmVlZFg5c0t6RGRsWlphYmZrKzg3em5vclIrMzBYYTluMnpDTUJaNVA2OXlLTldIUWVlWHhHQUsxWmVIem1tUkpSbWlVRjVmWDdIWS9EM3FsVndhajhDa0wvdnExRk8yL3RoeDlqNWp1dnZkYy9YMzNiMzMzdEgzMzM4dzQ3dnMwaXhuMm0yNDNuNytEekFBdUFNOG5BcVlKWkdFbmgrTFFDdVZNOEZ2STEydG52SS9VMjcvRzVmeUEwdkFIcGVDOHVlejNuYzhUa2Y2OWViMVVkSk9YM1pNWFl4OE8vcW16Yys1eDJIL2RUdi83N25jMmZQQXkwQXppVDM1eDRQeXUwRXYrOFFDNEFybGVOZDdLU1NEcEJqNzMvRjVLTXJ1ZTBGd0s3WHdlZWV6NGxHNW83NmZlVll6VXA1ZlQ3bTJNM0NNdktEYjFva1RpSnZEd005RytVdUkvRDhXZ0Jjb2J4ZnExOTU2Z05scllKRGN0c0xnRjJUN0ZDSVBycUEzUFphbXFXZ0k3N1BTOHREdnZBaWNSSjVuWHM4YXlvZzhQeGFBRnladkwwQ2VKZFo0bUM1UDh6NlVuUWJabk55Mnd1QVhlL0xpOERuN2pzNVArWURydG04WHpwdzIvZWNIL3FQWHlST0p2Zm5IaytlQ2dnOHZ4WUFWeVR2ZDZFdkUwZkwrNFZ6SjlrcU9EZThBQ2p5ZXRIOW5Lc3ZpNEZ3UkxaZXM1OXkvMEx5YzE3UHQwZEZrZXByOVQ0UEwxcS8xdTk1MS9mRkxBQXVJRyt2N254MjBsUkE0UG0xQUxnaWVmdWUzVzFHcXh1Wm9vRnJjdE1rNndHeVBnQWhlYjJRS0pQMG9qN3V4bnE5MU84MTMvaGUrMzIvYkFGd0VibC9HOUpKMzJBQ3o2OEw5MHAwejhXYkhQT1loZjVQS3UrM05YQnlpNjlzQWRBY3JZQXZwTFlsTFkwanRyMlJQRGNJK2pHZHh3OVRmRU03czkrR1dualdDZjFEaXZsRnE5L1QybWdWWEs2RlNLdmd0N1dwRU55bUxBSndVZmtNcVlETU5WZ0VucWZINE5kYUprYVR0UXJlS29zQU5FY3I0TXRicGgySFFYVGVaV0hlU2NqcjZ2SlpZS2hXdnlQVEtwaXBzQUM0c0hwVTQwODdQdXlzZ0FtbzBZRkl0S2U4VnM2VkZwcTZrcDViQmNiTmttdVVHMlVCY0FXNlJVQTVER0xYc2FOUHVjWkVrMnFFNTExd3VDTit6NlF1ekg4T0RyOXpqWEtMTEFDdVJBMDdQdXo0c0ZSQXU4cEJNN1BBdUU4S3pzNnIrMzAvZEgvOEZoenVHdVhtV0FCY2wzTEhzZTJZU2FtQUJ1WDFFYit2QTBOWGFYZUVpQkYxaTRCeVovOFFHRnF1MFh2MUFOeVNzZzJ3VERpcmdYRi9Ka1pYd3J2ZEc4aXYzZi9kMW03MG1HMUhxOFNsZlhNTjVmV3hvWXNVZTI1K3JDRnBMcU1zekV1a1ptaHlMeDlmcFBoV3psdXpPdkxqd0pDOCs4QWc1NzBEUUt0eWYwY3lEWHNBb0ZXNS96UTRGY2NBMEtxOHV5T1pWQUFBdEt5bkhrQXFBQUJhTlZBUElCVUFBSzJxOVFCZnBRSUFZR0o2NmdHa0FnQ2daZDFrLzBrcUFBQW1wcWNlUUNvQUFGcldVdzhnRlFBQUxldXBCMWdtQUtCZFBmVUFrZFBsQUlCYjFGTVA4Q1VCQU8zcXFRZFlKZ0NnWFQzMUFGSUJBTkN5YnJML0lCVUFBQlBUVXcrd1RBQkF1N3JKZnJhakhrQXFBQUJhdHFNZTRFdUpFQ1FBb0YwNzZnSGVKd0NnWFQzMUFQTUVBTFJyUnozQW8xUUFBRFJ1UnoyQVZBQUF0RzVIUGNBOEFRRHRxdlVBWDZRQ0FHQmlkdFFEU0FVQVFPdTZDWDhoRlFBQUU3U2xIdUJSS2dBQUdyZWpIa0FxQUFCYXQ2TWVZSjRBZ0xadHFRZDRsQW9BZ0FuWVVnOGdGUUFBcmR0UkR6QlBBRURidHRRRFNBVUF3QlIwRS82ZFZBQUFUTkNXZW9CNUFnRGE5NkllUUNvQUFLWmdTejJBVkFBQVRNR1dlb0I1QWdEYTk2SWVRQ29BQUtiaVJUMkFWQUFBVE1HV2VvQjVBZ0RhOTZJZVFDb0FBS2JpUlQyQVZBQUFURVUzOFgvZVdBVGNKUUNnZlMvcUFiNUtCUURBUkpRaXdJMG93SDBDQUtiaFJUMkFWQUFBVE1WR1BZQlVBQUJNeFl0NkFLa0FBSmlLRi9VQVVnRUFNQlViOVFCU0FRQXdKUnYxQUZJQkFEQVZ0Ujdnc1M0QzNpWUFZQm8yNmdGS0ttQ1dBSUJwNkNiK1pWMEVmRTRBd0hSczFBTklCUURBVkd6VUEwZ0ZBTUNVYk5RRFNBVUF3SlJzMUFOSUJRREFsTlI2QUtrQUFKaVNqWG9BcVFBQW1KS05lZ0NwQUFDWWtqTDVTd1VBd0FUVmVnQ3BBQUNZa25KU1lLMEhrQW9BZ0NtcDlRQlNBUUF3TmJVZVFDb0FBS2FtMWdOSUJRREFsTlI2Z0M5U0FRQXdNYlVlUUNvQUFLYW0xZ05JQlFEQTFIUUxnSTlTQVFBd01iVWU0R01DQUthbFd3QzhsZ29BdUt5L0pUaXpWNjllL2RIOThhZFVBQUJNa0NnQUFFeFFyUWU0U3dEQXRKUTBnRlFBQUV4UWFSS1VBSURwS1RzREVnQXdMYlVlNEljRXdGbjhQeGVlZEQ4VTl5emVBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbmV4dC1hNzI1ZjVjYjUxOTk4YzMwYzAzYTU1YTk4YWEwMDNkZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQmJFbEVRVlI0bk8zWU1Vb0RVUkFHNFA5cFVKUUlVUXltMEV2RUpwVWV3RjZ4OFE0NVFJNmdwWTJWclpVV0hzQk9MSVMwdHVJTjdIK2JJT09RWFRlUFRhWjQvd2VCREcvenoyUGdKZGtGUkVSRVJFUkVSRVJFcENTSkpLTTNFV2t0ZWdQUmloOUF4OVh2QUY0eWNnWUFMazM5RE9BakkyY0k0TlRVZHdDK00zTHFuQUE0L3EzNDEwMU9Jc21SeXpuUHpCbTduS09jbkg5NlhOc0d4UjhCRGFEcGhTVFBTSDZhMXpDbkljbUp6Y25KbU9VOG1wd250M1pyMXQ3cWN2eVhZSjF0QUllbTNsemdzOWF1eThsMVlISyszTnErV1V0MUlUb0MwUnVJcGdGRWJ5Q2FCaEM5Z1dpTC9BeTI1UjdBYTBEZnVWWStnSlRTRk1CMDFYMnI2QWk0dWt1eTZsL2FucXY3NXRwKzA0WWtld0IyS3BaN3JoN1VQTEhhc08vZHZyZk0rM1czMXJVaHkzb2tkcEZTZXBpM01MdmxIaStoWjViaWowRHhBK2lrbEdydmxwcHlSK21LNUtqaVV2dklDMjMxejlWYTg5enZrdWdCRkg4RWloK0FpSWlJaUlpSWlJaVU1Z2NXNzdza0hzdEd5Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUJVRWxFUVZSNG5PM1lNVXBEUVJERzhTOGFsRWdFRlVOUzZDVmlZMlVPWUMvWWVBY1A0QkZNYVdQbERiVHdBSFppSWRqYWlqZXdmeFphREVPeThvWVhSdGovRHhiZVpwTnZsb0ZOOHA0RUFBQUFBQUFBb0NZOVNVMzJKakt0Wlc4Z1cvVU42THY1cTZTblFNNUUwcm1aUDBwNkQrUk1KYzNNL0ZiU1Z5Q241RVRTa1gyaE1XTWVERDEyT1dmQm5FdVhjeGpNS2JtMk5hby9BalNneFh0UEpYMllNUTNXdkhJNVVmY200OEd0M1ppMWwxS0kveElzMlpKMFlPYWJMVDVyN2JxY3FMSEorWFJyKzJhdFZ3cmhDR1J2SUJzTnlONUFOaHFRdllGc2JYNEd1M0luNlRtaDdrSVpEWGo3SGY4Q1I4RE5oMXIrTDIzUHpVZm12YU1XTlhja2JSZldySW1XUDdIYWNOZDIzd056dmU3V2hqNm9XY0VvM1E3UFYxUXpOS28vQXRVM29LOC83cFphc0dmMVFqOVBpUmFadVhsWDlVTzZMQjU5dko3YWdPcVBRUFVOQUFBQUFBQUFRRzIrQWFYYlpFNzkvYTFyQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUVzVWxFUVZSb2dlMlpTMndWVlJqSGZ4OEJGQkVoMUZxZ1BBeGRhS3kxYUMyYUlJa0dKVEVpUmwyZ21Hcml5bGMwRU9NanV0QkVWNHAxWVdJMGFvSXJTVVFob2k0VTByaXhLQlFoWUltaU1SRktLNjFXVzlCZUgzOFhaMjU3T25mdTdkemV1YWttNTVmYzNQUDhIbWRtenZlZEdRZ0VBb0ZBSUJBSUJBS0JRQ0ZXTGNHU2FvRGx3R0tnRHFnRlpnTm5BZWRFdzg0QUk4QXcwQS8wQWNlQjc4enM1MnJZbFluRGtoWUExd0d0d0JWQU16Q3ZRckcvQUFlQkE4QVhRSWVaOVZZb2MzSU9TektjYzdjRDY0QkxLalVrSlVlQVhjQzdacmF2NnRvazFVcDZUTkszbW5xK2tmU29wUE9yNGVoQ1NlMlN6a3lwaThtY2x2U1MzR05Wc2FNekpUMGhhVGdEd3dZbHRYaS93UXhrK2d6SjNYMHpKK3ZzeFpJT1pHalFKNTdzcFJuS2pYTlkwcVhGL0pwV3hObGJnSDNBaWttdFZqSmZldVVyTTVRYnB4SDRYTks2cE00Q2h5VzFBZHR4TVROTGZJZGJNNVlkNTF6Z2ZVa2JTNDZTZElPa1hKVnV0Y1dlbnQxVjBoRW5KMmxOTVdkckpmV2xGRlJmWXRIcUpHMlE5TFUzdnFmRStObVNHaVN0bDlUcHpWbGZZczVjdVl2emFRcGJlK1d5dmdJaGI2UjA5bFF4UTJMeTVrZzZGTTNaVWNhY1U5R2NaU25HVDVPMExZWE5yK1huV0RTeEh2Z2VTTE9sN3phejY2TjV0Y0J6VVhzT09BYThhV2JEVWYrdHdIdkEwMmIyZk5SMkRkQVd6ZmtEMkdObU96MG5kZ0dyZ1BsbXBxaXRIWmQvLzRQTHRiZWEyZkdvYnlud0E2V3p4aEZndVpuMTVKVThtUExxU3RJV3o3Z2JFL3EzZXYxTG9yYTFYdHZMc2ZHLytaYkpQZDhkWHIwMlFjZVIySnplRkhiZkQyTzc5T29TcXhQbm9GZE9DbHNMdmZMWmdIQWhMcy9LMlBpQldMMnBUQjE1UFJPeEdzWWNqZ3NveFVUR2ZPYVZWd0xIOGtjOVNUTVM1b3lHSzBrTnVHTmthaDJTTGdMbXByQzdIbUI2aW9FK09hQzdpREYvQXg4QjdWN2IzWXlQdjAzQXJKak1UcTk4VmZSL3lHdTdQRForUDdEWnE5OVQydVJSQkdNT0Z3MGJNYnJOTE9mVjc4RGRKU05BajM5b2wzUWJzQmJZNUkyUDM4NEFlNzN5MWNCZndHR3Y3VmxnQzI1Qis4enNwS2VqRVhnNHBlMG5Sa3VTSGtqeDBJL2JrSW9oZCtCNFNOTHYwWnhWWHQ5Yk1YazVTYk84L3IzeERhbUlEcE9MMnlkVDJpMUo5OEhZRmQ2QnV4VW5Da3VqejVha1pzWnV3WnJvdHd5NEZ2RFBxSzNSbFFEM1ZzUm5BR2lUbEsrdndLVzFlUjJMY0M4WUFNNkw1QzdDYlVBWFRtQ3J6d2l3YzF5THBOZFRyTklhYi93clpheHVPVHp1NmJnM0k1bXY1bVg2aDRjbmNTL1JTdUh2bnBlVnNjTGw4SlZYYnNwQVhpL3dWTDR5NnJDWkRRQjM0WGJpSkU2WVdiOVhMM3JtckJCL2g2NVVSdzdZNkcrbUJlbVlwRHVCdHlrTVdhZUJvMUY1R29YaElnc0VkSG4xUnRJbEZVbjhDYlNaMlRhL01USC9sSFFUOEE3dVhQbC9aQWpZWUdZZnh6c1MzM2lZMlllNFo3UXpxZjgvem42Z0pjblpDWkUwWGRJamtuN05hTGVzSnNPU250RmtYK0xGSEY4ZzZVVmw4L1l5YTRZa3ZTQ3BybUpIRXh5dmtiUlowdEVwZGRIUkxXbVRwUG5sK0REcGIwdVNXbkNmV203RzdhWlYrekNYVjRuTHNUOEF0cHRaMXdUakU4bnFZMW9kTHFWc3hZV3JabHlxV1FrRHVFU25DM2ZpNmpDem55cVVXZFhQcGZPQUJtQUo3b3g3QVRBSG1NRll1QnZHeGNzaFhKYlhEL3lJKzF3NldDM2JBb0ZBSUJBSUJBS0JRQ0FRNTEveUJqbFZHZW5yWmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFFSDBsRVFWUm9nZTNaVzRoVlZSakE4WitoVnRwRm1pYnZXVWtZcEtpWjltQkNZUmVpS09vbENpcm9xUnQwSWFxSEhucklMblF4SW9paUFoOGllaWdNb2hjenhKZXNKa3ZUakc0RVNWcGVNcDB1TTVYVHc3ZlB6Sm85Wjg3Wlo4N1o1c1ArdzJLdnZmZGEzL3ErdmRiNjFyZldwcUtpb3FLaW9xS2lvcUtpb21JazQwcVUzWVd6TUF0VDBZM0pPQmFUc2pKL29BKzkySXVmc1JQZllYOFpTblhLNEdtNEdFdHhIaFppU3BzeWY4VVdmSWFQc1FHNzI1UTVac1poR1o3RWRnd2NvYlFOVCtEODhrME11dkVBdmluSm9GYlMxN2dmcDVaaDZIU3NGblB1L3pZMG4zN0hzMkphdGMxRVBDU2NTcnVLSGNDU0pCM29zT0dIeE9pYk9GWmp6eEVPbzFNS3JVdGtuOTVoWTlPMERmTmJOZllhbmVuVk5EMld5TCt1UklOcnZYMVZVV052d2o4bEtIRnQwc2JqSlJzOGdMOXhZek5qTDBWL1NRck1TdHBaZndRTUhzaHNXVG1hc2QwaTBpa2lhR2FEanpZVjErUExwUHhQRGNwUHhseGNqVTFKbmFzYjFEbFpkTTc3QlhUZExhSytFYnhTME5nOURSUkpPUkZic3pwclc2aXpKNnN6cDBENVkvQm1BWjFmcWxXb2haWXo4YjFpTG4wOUxzbnkzWGcweS9malc3d3FIQjR4YjkvR3cxaVZQYnRRK0FuNEN4L2duVVQrdTFpT1V6SmxpUmhnRWc2TFdIdE5kaVU4L2c4YWg4bDlJcTRmSEdsM0tqNHZua2tFWFZIbi9acmsvZXpzMldYSnMrZHk1US9tbEZzdjR1WWEzWFhhMko2cnM3dUEzcmNUUXdKVzVEOUpBN1lrK1VWMTNrOVA4c2RsamZVa3o1Ymx5dS9MM1M5b3NZMWFPODFZd1pEQmVRR05hS2JNeGlTL1RBenoybFp2UXAwNm55VDV1YUpIVzJsam5uQml6WmdKNHdzVVRPbkhqbEdVK1JmdmlmbFc0MmJERFZxQTQzTXlOeVg1QzdMcjF1VFo0bHo1VDNGZmNuOUxZNVVIR1VodjNsQnMvbjZlRTdKWXhNWHpoWk5KcVVWVDl5VFBicXNqYzNueS9ua1JNS1JEZEY3V3hpSWpSK0s1aWtlRXI2Y1Y3eWhZS1hWSW96RVJkK0hQT2dhOWxwUFhiM2lQZjJTa1E2ckhPTEZPN3lxbzk0RDQySU5EZXEwWWlzMldwWFJ1TFRRMEJMdXlOQWNYR2I1SFhTcDZnamdWU2RsbmFJa2lldkd0NUg2R29aajRwRXp1RE9HQXptaWlhMHFmNFVzZmVGbnpyNVNHYVM4VUtEK1c5R0RTeHEwZGt2bGl2YS9RcGZsNmx2YmN4cElNdmp4cFkzVUg1TzB5MHI4TXNsSjBmNzJLTzNObDk1ZGtjT3FZMXJVcHE4L0lhVFNDRzRTbnpGZnVGUUZFRHphWFpPemhwSTBlUTQ1dkxLbGZiR0lLY2FYWVJKZGgxSkZJQjBYWTJ4Sm40c09qUVBsV1V3L09idFhZR3VOeE4zNDdDZ3hwbG5yeGlEWU84VkttNFdtZFArZnFSRHFFcDhUQlE4ZnBFbkhzVjBlQm9UdHdyd1pMVHFkWklrNGl2eERldFd3REQ0dE54U3J4LzJwTWRPcG4ybFFSVWk0Vkc0cUZSamxIYW9GOUlwVGRMSFpjRy9CTG16SkwvVjA2UmV4dlo0czk3bW5pekdvQ1Rzaks5SW8xLzVBNFFOeUxIOFh2MGdNbDZsWlJVVkZSVVZGUlVWRlJVVkV4alA4QTVZcmNVMnBzWU5ZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFGMVVsRVFWUm9nZTJhMjQ4VVJSVEd2d2JaUlJEbEl0NEN5RVZEMUNpcmlCSlhSUkFURVEyb2lmSEpKM2dRWGhSdkQyTGtGdjhBalE5R1h5UmVzaHRnd1N2R3pZckpHaTZCR0tNTGkyTENnZ0VSeElYRmhSVjJmajUwdGFtcHFlNlo2WmxoZk9ndnFhU202enVuenVtcXFUNTFxcVFNR1RKa3lKQWhRNzBRVkVzUk1GTFNrNUp1a1RSYTBsRkozWksyQmtIUVc2S08wWklXU0pvdTZWcEp2Wks2SkcwTWd1RHZhdGxhRVlBQVdBNmN3bzhCWUF0d2Q0S08yY0FuaHV0REw3RHNZdm9WQytDTkdDTjkrQlNZWXNsT0JUNHJRMzV0UFgwVjhKREhxSDdnTUhBK3h1Zyt3aG14M05SOU9HOTA5SHZhNXRYVDRUMldJVG5nUmFEUnRBMEhIZ1UybTdaaXlBRnR3RUpMUnlQd3NpTy9xMTdPem5BTWZqK0Iyd1I4bCtCc0p6QWpRWDY5dzcrdE5sNGx3SXltalZpRERmOUcvRk80RDdpaGlHeVRJN09pdXQ2VUFPQmp5NERqUmJoVGdKNkVFZTRCSmhmUmNjTGlmNWpXN2lGcEJTVk5zdW8veHBHQXF5UzFPL3lmSmUxM2RMVUQ0eFA2cy91WUZNc3Fna29jSG1QVlQvb0l3SEJKYlpLbVdvLzNTWHJBbEwzVzgybVMyakFMbGdkMkg2UEx0dGJna3JTQ2tvWmE5VnhVQVJvVVJsdTNTbnBhMGoyTzNEUkpSMHo5SDZldFdkSW1vRVhoaUhZRlFSQnhCbVA2TGd1Vk9OeHYxU2NBcjB1YUoybTJwSVlFdVlhWWVvUkhUSkdrQVdDbnBBNUpFeXpPMmZMTnJSQkFlOElpVkd0OG5kYnVzamNQd0IyU1ZrcGFwTkxYZ0YyU2prazZiUlZKR21XVjZ5VGRWYUsrbktUTmt0WUZRZkI5aVRMbEFSZ0h2QWNNSnJ6NVh5ajgvSFFBUlY4TU1BVDR4cEU5Q0J4STZHOFFlQmNZVjIxbjd3ZCtLekxObGdEWGt4OWM5QUlUeStobmtwR0owR2QwTGkzUzkySGczbW81K3dSd3p0UEpsOEFGNi9lYlFLdkRlVFpGZjhzZEhhMUdkNFFMaEtHb2kzUEE0a3FkdlkvQ1BlcCtZSUZwMzI0OVAwNStrTCtURXFheXA4OGhSalpDenVpT3NNUHducUx3N3pNQU5LZDFkaVRoVkxHeEJiak00cXoydk9rSUJkczRZQ0t3QVRodFNoc3czY09ibDZCM3RjVWJSN2hHMkRnRWpFamo4QXVPb28zQVVJY3pNOGFvYlRITy91bmhuc1R6UHdlMnhlaWU2ZkNHQVZzZHp2TnBITGFuMVJGZ1RBeHZuOGVvT1I3ZWhoZ0hBRm85L0RrZTNyNFlHOFlEZjFpODdXa2N0bk5VYnlYd1huV002b2poblU1dytGU01qRHRkVnliWThYWXhmVkxwZ1VOU2dGS056Q2RWMEZHWlB2S245REZpdG01QXQyZkVmRk82TFdHRVd6eDgzNVR1anJGaExQQzd4VXMxcFZjNG5XMEZoam1jV1RFTytCYXQ2WVFMbElzVHdBUVBQMjdSdXRQaERhWHdaVDZYeHVFUmhFdThqUTZzTUE1WUUyTVV3RnlQem9tRWdjUXBVMXBpbkoyYm9OZitMSTJpTU0zYkExeGF0c05HWVRPRmdVY1A0VWMvQUhaWXo5M0FZd2ZwQXc5YmI0Nzg5RTRVZUN3a2pOMXREQUR1L3J0c0F4YmpEeTA3S1F3dFd4eE9tdEJ5bWFQREYxcTYzMTJBczhDaWlweTFqR2ltY0hxN1dFcnROZzlMaXZUZFE2VWo2ekZtTFBBT3lkdkRBNFJiT2h1VmJBOTdLSnkyTmdhTlRkNmd5SWMwQ1lBWmtsNlQ5TGpLU3dBY2tkUm5GVW02M0NwWHE3d0VRSnVrdFVFUS9GQ2lUR1dndmltZTlyUjJWNUttdGJNTTJ5V3RrdlN0cElFS2RMb1lNRHBYbVQ0aWpLMWlINldCY0Y4Y29kVjYza0I0TlBJTThMbG5kQVppNmhHK01MSk5oQ25mU0srZFhQQnVJbXJ0OEY3TGdBMHhuRVlLc3hOZHdEV21kRGx0bmNRazRnbTNweEYrcXExM2ZnUHMwMER2RHNud3hnTy9PbzUxVXhpREh5RGhxSVg4RmJ5ek5sNGxnUElPMHlaVDNjTzBqOUxhWGNtaXRkdXFYMG5DY1drUUJBY2x6WmQweHROOFJ0S0RodU1GY0x2eUY4azlaZHBhT1NnOEVGK2Z3QzNsUUx3cFFmNERoMy94RDhTTklic3RJM0xBUytSZmVYaU1NUEZYNnBXSHpZVFhKSVliSFkzQUt3NXZaMTJjTlFiTjl4amVUeGgzWC9DMFFSZ2ZMNlA0cFpaRCtDKzFGR3c3TDdiVDZ4Skd6Y1VXck1XSjhHYkFwMlhJcjZtbnIvL0JqRlp2akpIbkNETVNzeExrWnhtT2J4c0tZYktnS2hmVGFuSDE4R2FGdHdPT0tqemgveW9JZ3Rnc29xUGpDa2tQUzdwSjRkWER2eFJlUGR6MHY3bDZtQ0ZEaGd3Wk1tUklqWDhCRk1vbzBzOStCcmdBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUZnVWxFUVZSb2dlMmEzMjhWUlJUSFB5M2FWaEN0SmZWWHFGRFFFRFZLRmF2RXFnalJSRVVEYW1KODhna2ViRjhVVUIvRUNFajhBelErR0gyUitDTWxMYVgreEVnUVkwMHAwUmlqcFczRXhJSXBJb2d0eE5wS2U2OFBNNnRuWjJmMjdxOUxmZGh2TXNuZTNlODVjODdkMlpsenpnemt5SkVqUjQ0Y09XWUtGUm5xbWdNOENsd1AxQUxIZ0VGZ0R6QWFVVWN0Y0Qrd0JMaEN5L1VEbmNDZkdkcWFDaFZBR3pBR0ZDMXRFdWdHYmd2UnNSeDRYM050T2thQjF2S1lIeDh2WXpmUzFqNEFHb1hzSXVEREdQSXZsZDJiRXJpWG9GSGp3Rkhnck9WWkVUaURHaEZ0K3RyR09hdDFqRnVlclRvbm5qbndqVENrQUd3Q3F2V3pHdUJCWUxkK1Z1cnRGWUF1WUxYUVVRMDhhOGdmTExOUFRpekZiL0JiSWR3bTRDdmN6dlpvZlM3c01QZzNwclE5RVRZWlJvUVpESEFOOWlGOEJyaTZoR3lUSWJNaHNkVXA4SjR3NEVRSmJpTXdqUHNORHdNTFMrZzRLZmp2SkxZNkJlUVEzUmZDdXhUNENiK0RRNmcxV3Q0N0ROU0g2UGxjY0w5TWFuUmxVa0hnRW5GOXlzR3BRVTFFaThTOUFlQnUzUTZKKzRzMXR4bzdaQisxc1N3Vk9DK3BJREJMWEJmRWRSVXEycm9CZUJ5NDNaQmJESXpvNjcrTlp5M0FMcUFkK0I0VlpYbWNhVWZmc1pERzRYRnhQUjk0RWJWR0xrYzU3VUtWNDlyREE3cUJpcno2VUovTWZNSDVLNjZ4V1dBdjBTT2tyTnRuU1kxT2tqemNER3dHMWhCOURqZ0lIQWRPaXdZd1Y3UXJnVnNqNml1Z0FwcnR3TGNSWldKakh2QW02bHR5L2ZNL0VseCs5aEh0ajZuRVB4TVhnWjlSczdlcnYybmdEVzFicHJnTCtDV2s0eUt3RGxpQVA3Z1lCUnBpOUhPVmxwRkJ5UUpnZlltK2p3SjNwUERQaDBlQUNVc25ud0JUNHZjcndFNkQ4MlNDL3RvTUhUdTFidS8zRkNvVU5lMlpBTlltNk0rSE93bm1xRU9vSkIyZ1Y5dy9nVC9JN3lQWk9sK3BaVDA5QmEzYiszMUE4eDRqK1BsTW9wYTJSSmlER2lwU1lUZHdvZUJzSmZoUGU4Mld4alVBSGZ3M2NYV2hxaHNtVm9YbzNTcDQ4MUJ6aEh4K0JKZ2QwMWNBTmhxS09na3UrTXNjUnUyMzZHc0FmcmR3VDJIL3p2YzdkQzh6ZU9lanlraVM4M1JrTHdYa3NCckJIMHBLREZpTVdtSGhkVGdjOEw1VEV5c3N2QUdIRGZYQWI0TFhHK3FaQTdKRzlXb0k3M25ES0ZjaWNScTN3Mk1PR1hPNGJnNng0N1VJK2lKUEttRUJTaGFWejJJR09sTHJrMFA2T083VXpVenpYRU82eThMeldydUZieHZTZ3c0YjZvQmZCUy9Sa041Z2RMWUhOVUZJTkRzY3NFMWFTMUFUbE1rOWlUOHg4T0NhdEc0eGVMTUkvcGxQUmZaU1lEWnFpamUvVHhuR2JYTVlWUVJXV25RMm9DYW9NZDNhc1R1N01rU3ZYSmJtRWl6ekRnTVh4UFQxWDdRUUREeUdVWXQrQlNvSThPNmJnY2NCa2djZVVtOEJmM25IQ3p4V28ySjNhZHNrd2Z3N050WmlEeTE3Q0lhVzdRWW5TV2paYXVpd2haYm11bHRFNWNockV2Um5SUXZCNFcyMjlaUXZlVmhYb3U5aE1uaXpKdXFBMXdsUER3K2pVanJ6dTArYUhnNFRITGF5VFd1YlhFRlJBRW5XMEtYQUM4RER4Q3NBaktEZW1OY0FMaEx0TXVJVkFMcFFlMDNmUlpSSmpaa3M4ZXhOYW5TYU1xMWNubnFCTGNBWHFKa3lLMHhxblZ2d0J4TjFHZllSR1VQNFoxSVBWYWl0a1NlQWp3aStuVW5IdGRjKzFySk4rS3Vhc3JqZ1NpTEtpa1BDZ0E0SHA1cGdkYUlmdUZ5M2Z1TlpEKzVDZktmZy9aQ0pCekVSZGF1bG51Qld5eURwdGxwNlV0cWVDSEUyMHhhUzdXYmF1NG10VGdHeklsTE83ZEtiREptTmlhMU9BWE5EZkVjSU44cUdlRk9JL05zR2YwWTJ4QUcrRmtZVWdHZndIM2w0Q0ZYNGkzcmtZVGZxbUVTTjFsRU5QR2Z3K3Nyc1V5anVJV2o0T0NydW5ySTg4NFp3SzZVUHRSekJmcWpGbG5hZVUyd25lb1RValg5eWFrUWRaWW9xdjYzczNrUkVHLzRzUjdZSlZOemJIQ0xmckRtMk5MU0lLaFprY2pDdEhFY1ByME5sTDhkUXdjbW5oRlFSRFZ3TTNBZGNpenA2K0FjcU9ObkYvK2pvWVk0Y09YTGt5SkVqR2Y0QmFwWk5QZzEzbGtJQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFHYVVsRVFWUjRuTzJiYTZnV1JSekduL0Y0UGFTWm1WS1FtaDQxMHJ5bVprcGE1QzJKSWpCVEtKR2dUMnBRVUphbEpBVmUwVXdDSzdMbzdpV0xMcElLWG80aWFtYVNZWnIzRE1wTDRLM3ljczZ2RHp2SHM4NjcrNzY3Nys0ZVAvZytYODd1N016elBET3paM2JtUC9OS0paUlFRZ2tsWExzd2RTRUNkSlkwV0ZJUFNaMGt0WlhVUXRKMU5zdFpTWDlMT2l4cGo2U2RrdFlhWS9iV2hiOU1BSFFENWdLL1V6eU9BSE9BYmxlN1BwRUFHR0Frc0NsQnBjT3dFWGdRcUpPM05qYUEzc0NXRENydVlqUFFLeTNmaVZzVGFDeHBocVFKa3NwQ3NwMlZWQ2xwZzZSZGtuNlRkTXltUzk1WTBGcFNSMGxkSkEyU05GQzFZNFNMS2tsdlNwcHNqRG1mdEE1RkE2Z0FmZ3pwcVdwZ0pUREtObEpjN3NiQWFNdFJIYUt4SGVpUVJkMmlHT3dQbkF3eHRoem9ucUpXRDJCRmlOWUpvRjlhV2xFTkRRWE9CcGpaQnd6SlVIYzRzRDlBOTJ5V3VxNkp2aUdWWHc0MHJ3UDlwc0NuQWZybmdIdXlGcThJZWUxZnlWUTQyTXUwQUIvSGdmWlpDVFltZU1DYmtJbGdORThUQS94c0F4cGxJVFkvUU96bDFJWGkrd3A2RStha0xkSWJ1T1NJZko2cVNBSUFIenZlTGdFOTB5STM1TTd3OWdITlVoRklBY0Qxd0FISDQ4YTB5RWNHdkdKRFV5RVAxNndQakFPK0JWWUQ2NEFwUUpNOFpVWUUrQnlXaGhsM1liTThNV2wrdlk3QURxQVNhR2ZUUHJMYVN3cVUvZEx4dWlHcG1lNE9ZVFVwenZBQzlEcmhmY3IrQUc2d2FRWTRaZlZQRnlqZms5eHBjOWNraHVZNlpOOFZUVlpZcXhtMXM3eG5uV2ZyYmZyQ0NEemZPNTVuSlRIbEJqTkdGVTFXV09zTm4wNGI1MWtaMENvaXorT081MFBGR3Vyc0VKMmgrRlhkUkdBcDhBM3dHbERoNUxtVDJzL3N6MFVacnVWcWdqY3Q5cU1pTEgrOVBGejNPZmVWeHBqL1lwcXBrTFJiMGdKNXNZTEY4bUovUzRFWlFBT2JkWkpxWXdtcmZPWDdBc3VBNFZFMWpUSC9TbkkvZ2ZmSDhWMGovcGJUaWkvRUxOOEErTldXM1ErVStaNlZBVk9CTlVBYnA4Zkcrdks5WjlQV3hOUiswZkVlT25ia2V3TTZPL2UveERFaEw2cFR3M0hhR0ZOVjg4QVlVMldNbVM3cFhVbmJKSlg3eXYza3UxNXAvMjZLcWUxNmRldFNHTUJCcHhVN3hTei9oRk4rZkVpK05iNDhWY0Nqd0VQQTg4QmVZQUZRUDZiMjdZNzIvckM4K1lpYk92Y240NWlRRi92ell4RncxQml6Mm1lMGlhUUJ2andINWNVRjY4bmJJN2pYR1BOblRGMUpPdUhjeDUrMkErZWRWbXhZQk1kYWgrTWtjSXZ2K1VEbitkdXhqUWJyTm5KNFF3ZnZmR05BTWNMMWdTZUJQalpwbkNSL0Q3YVE1RjlDMytWUTdFelRUeUxnQlJ2OXVERkNtUWsyNzNuc1pBWnZlbnJheDdQYmwvOURSMk5nU3Q1Yk9yekh3L0xtZXdQY2VYZkxDTnF0N2QrR2twcElrakZtaDZUcElieTlmZGNYSkcyUG9CRUZOem4zcDhJeTVtdUFnODU5bEsvQUY1S3FKVzB4eHV6eHBWZjVyaGRMWG5CVFYzNmV0dGxKVEJwd3ZicDF1WXg4RGJESHVlOVNTTlgyOWxPUzJnSlA0NjN1Umt0NnlXWlpLR21SdmU3bDZDZGJ1dWIzNnRibE12STFnRHNnRFlxaWJJeDVYOTQyZUxta3FaTEdTL3BFMGdCanpFUmpERFpyWDZkb21pdk53YzU5L01IVjlwNGZSUzJHOHZBdjlYRWZKS1ZkWDZDY0dJdWhRbVJISEtMUktaa3NjNzR5ejZYQmE3bkhPSjZMV3c1YnNqa08yY3JDcFNMeDN1M2pQQXFFN1FJWHc3M0s4VHd6Q1ZrM2g2d2E2QkdqZkF2Z0VlQm1KMzJlai9PeG9nM202dlVtelpDWUpkM29FSzZJV0s2VjdWMkF3elc5YkJ2bGpFMS9KNUc1WE0ydkhhL0p2eXg0eDFKY0ZBdzNjMlZvcWhxNDFhWi9ZTk9XVUJzUVNjTm5OdUY3dktqc1pvZDRQM0I5Z1hKM0FCZHQvc2w0QVpMWmVLR3ZlZmdDSkNsNGJFN3U4cjB5TFg0QnZTaGlhd3g0R1BnQmIxMi9DMWhNaXVkN2ZEckxIRzhYU1R0OHo1VURWdzJtcFNwU25LOVhBM3pOemtLb2tlMU5GeE5URjR2dWFWS0FuNjBVRWJ1SUt0aUIzR1h5VlhrVFFucitHSEJiMXNKOXFQMk0rYkVDdTUyVnNYNHo0TE1BL1hOQS82ejFhMHdNSWZpYzBBRmdSSWE2SThrZDdiRWQ4a0JXdW1GbSt1RnRaQWJoSzlJNm9LRExNengza3VOLzdkMlZaZDBBYUk5M0ppY0kxWGdibFdQSXM2K2ZoN3NjR0V2dTNONlByU1Q4bjAvanFHd2pTYTlMZWtiaFlmWi81RzFYclplM2FiRlgwbC9LUFNyYlNWNHdZN0M4Y0hsNURwT0hTNUxtUzVwaWpMbVF0QTZwQU84MHA3dHV5QUtWWkhoR0lUR0FZY0NHRENxK2dZeVA1cVFLb0Nzd0N6aVVvTktIZ0pra1hkTG1RVjM5WktaQzNuWjd6VTltMmluM0p6TW41VzJIN1pXMFE5STZZOHkrdXZCWFFna2xsRkRDdFlyL0FWemRrcmltTDU5V0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFGN2tsRVFWUjRuTzJiYTRoVlZSVEhmK05yeGlGZmt4a0ZsZWswWTJXK0pyV0hwRVZxWldFRVpnWWxFdlJKL1ZCUVpnOHArbENwYUNKQkQ3TG9uWnBGcFdTQzVpUmhWaVlacHFnem1VR2tFL2dZeXRTeEQydmZ1ZnVzODdqbnNjK042UDdoY084K1orLzEvKzl6enQxN3JiWDNoUW9xcUtDQ0N2Ni9xQ29UVHlNd0FSZ0JOQUFYQVhYQVdlYjZjZUFQNEdkZ043QUQyQWpzS1pPK1hEQU1XQXo4QXB4SmVSd0FGaGxiL3dsVUFWT0FMYVR2ZE5qeEpYQUw1WHRyRTZNSjJJcjdqdXZqSzJCVW1mb1VDelhBVXVBVTRhS1BBV3VCZWNDdHlKalFEK2h1am43QUVPQTJVMmVkYVJObTd4U3dCS2d1US84aVVROThSN0RJRHFRajA1Q2JsQlExd0hSam95T0U0MXRnY0tZZVpNRFZRRnVJc05YQWNJZGNJNEExSVZ5SGdiRU91V0poRWpKMWFURjdnWWs1OHQ0RTdBdmdQWjR6cndkakNPNzhhcUJ2R2ZoN0FlOEU4TGNEMStSTlhrL3dhLzk0M3NRQldCQ2c0eEF3S0MvQ0dvSUh2Tmw1RWNiQW5BQTkyOGhwZGxnYVFQWllIa1FKRWZRbUxISk4wb1Ivbm4vUE5Va0d2SVhmVHhqcHluZ1ZmZzl2TDlEYkZZRUQ5QUgyNDNlZG5XQUsvbGRza2l2akllZ0d6QVErQlQ0SE5nR1BBajBqMnR5TVgrZGtGMkowWUxQYWhkRUlYQUpzQjVxQmdlYmNtNGI3L1JKdFA4U3JkWE5XTWNPVndRN2NlbmdhRGNoVTlpc1NINEQ4Qkk4WS9xTWwyby9FN3pZUHpTSm9zVEsyTm91eEV1aE4wY3Q3UUYzN3dweGZIc1BPWjNnMVA1ZEZsRTVtVE10aXJBU2V0M2d1Vk5lNkFnTmkycmtMcitiV3RJSWFsYUZqcEkvcTVnQXJnVStBcHhHUDBzWVZGS2ZaSDFMcUxhQW40aGJiMmpWZko3cEVHTHBlbFp1QnZ4S0txUWQyQWN1UXA3Z0N5ZjJ0Qko1QmNnRUFjODExZ1BWVyt6SEFLaVFJaW9zLzhVK0JOeVJTYmZBQzNydjRjTUwyM1lHZlROdDlGRHVJK2Y0RXNBRjUzZTBuZHJkVjcxVnpia05DN2tlVTl0Q3hJK29OYUZUbEh4T0tHRy9aT0FxY3RxNmRCcDRDWGtGODkxcnIydmZXOTNYbWMwdENicTFWOXlVV1d2RGV4WWFFN2U5UjdXZUYxTnRnMVRrTjNJR2t4aDVDMHVMTEVNY29DWVlvN24xaEZhTU05MUxsdG9RaWRxcnlpOEJCeExNcm9DZHdyVlZ1UVJ5aExzZ2F3WFhBYndsNVFiSkVObEs1N1NmdzNzVWVLV3hzVkRiYWdQT3Q2K1BVOVpmU0NBMUF0YkliT25oSGpRRnAwQTI0RnhodHlqUHhQc0U2dkNIMGxhcjlEc2Q2TXVFdzNydDRkb3cyczAzZEV4U2RtWkhJSUZpd3M4dXEvNGJpR09kQ09OQmYyVDBVVmpIcURkQitkLzhZeE9lYXp4NFVJN2Z0eUlnZlpMZkordjQza3VaMmdYTlUrVWhZeGFnYjBLTEtjV2FCRDVCZ1pDdXl5Rm1BUFFXdU1KKzk4RTVQMnhBbnhnVzBWdDJYVGtUZGdOMnFmSGtNNHUzQWZjanE3LzFHeUhSZ3ZybStISmtOUUphM2JQN01vYXNGclZYM3BSTlJOMEFQU09OamtyK0dMR1RVSXQ3ZUxPQnRaTG9ySkRGQjNGd2JMaVBOQ2FxY2FuQnR3RTB3RklhVmx1MFczSzM2MXBJZ0dDcUZBOHJRZEFjQ1FXSUJlNVo1MEpGZGdCbDROYWNPaDBIU3k3YXhkZEhWWStNcXkrWkJpanRGWEdBOVhzM1BaakUyVEJuclFIN2ZjVkVIM0E2Y3A4NHZzV3plbVVXZ1FoT09VMklnc2JWdGNFM01kZ09RcDNzRzhlc0xUN21PNHRyL3kxbkZLWHlNNDZRb3lMYVVOT2xtT3pYVkFWeGd6cjlPTWNQYlBiaHBLdVNXdnE5Q3RxWG84TEpQaVhhWEFTZE4vWGxJWnhkUzNOM1JOYnhwWXZURkg3NDNPN1RQS05JdGpVMEZ2a0hpK3AySUY1akgvcDVWU3R0SmNramYyd05YNFZqZ21pUUZuc1N2YTJFZVJOWEkwOVJrYy9JZ2k0bTVBWHErSmwzdUloWUc0dytULzYwM0llakovdzVjbkRmeGFJSzNzSzJodUp5Vkozb0Q3d2J3dHlNYnQ4cUNpUVR2RTlxUHJOTG1oU240Ui90Q25ISmpqcnlCR0l0a1dyU1lNOEJIT055Z2dIaDQyc214WDNzZFdaWU5nNUJFUnBDd0RtU2hjZ2JSNi9waHFFVVdTYlJ2cndlODNIL3pwVkNOQkUwRnB5Zm9hRWR1eG56RU43Z1VjWWw3bUtQT25KdHE2cXpISDlMcWVYNGhPWTcyYVRBQ2Y5eVF4OUZNdm5zVU1tTXlFb1M0N3ZobTh0K2E0eFJEa2MwSnJhVHZkQ3NTejJjT2FjTlFyajhmMUNQTDdZVy96QXpFLzVlWk5pUnMzb01rVnpjaHU5RXFxS0NDQ2lxb0lDZjhBMmI4c09iN01pazZBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRmZFbEVRVlJvZ2UyYVhZaFZWUlRILzF1ZFB0U3hVZFFzTGI4MVJVM1F2bkNFcktEQU1TR3lxSWNlS2lvb1NIb3dqVUNoaHlSb1FKU2dYZ0tGc3VraFVFR29Ya3ByZFBxUXlnL0lOQzNHck1tUlVpY2JaK2JYdzFuSHMrZk91ZmVlZmViZW1ZSVdYT2FjdmRkZWEvMzMzbXZ0ZGRZZTZYL0tSc0F5WU5sZzI1R2JnTVhBeHlUMDJYOEtFREFEMkE3MEFPZUFzMEM3L1FYWURTd2ViRHVMRWpBVzJBaGNCRHFCTjRFSlFMUDlhb0VYZ1Q4TTBFZkF3c0cyK3pJQkl6d0RlNEFtWUliWDN3dzBlKzh4NEE2ZzIvaG5EWTcxa1VFMXdGUEFMOTRNTDByaDZ3WEVhNThFYkxJVmpBRk5HeGpySXdNY3NBbzRhZ0MrQXhwSzhLY0M4Zm9uMnphOEJQeHR6OWRWeC9wRTZUM0FWd2JnaEszSWtESmpTZ0x4K0c0Q3R0cnFYTERWR2w4NTY5VW5sTGFaVDF5WmNXd21JQjcvUE50bWNkVGJDTlRsdDE2OWxyMGJPRzlDUndYS0NBTGlqYnNOMkdtVGR3YllBTlNHQ3JrVzJHSmh0QlBZSExyTXdCRGdNYUl6cE4yZVMyN0RJbkx1QWo0M1FLZUE1NEFyc2d4ODJaYTBCM2dYbUo1RCtRcmdXMVArdmYyd3RoV2g4a3htQS9DMTU1OFBsbUllVDBLZkFwTUNsZFVEZTIxOEsvQU1VWml1c2VkVzY5c0wxQWZLZGpaQlowekdzVkxNRTR6cEI2Q0w2TkI2RmJpbWpKTDUzbjQrQzZ3RmhxZndEYmUrT0YzWkNjelBBS0lCK01MRy9BcWNCSDdNQW1RdFVUaHNzdmN6UkpIcXFnTCtHNGlDUVJmSkdWRFdsNERSOUQzZCsyeGhvbkMvMzJ4b0kzTDRVY0FIbVlGNGJYZDQyK1VrMGRreDNnejV5ek5rU2prQUtmb21raHlHZm42V0NzQWJGdzdFMmgzd3NHMDViQVY2Z1BlQjJhRUFVdlRPTmxrOUJncmdOUEJDa1MzYUIwaW1jT2ljd3puM25xUzVrdDZSTkZTU2sxUW5LU3kycDFPdHlYS1Noa2xxa2pUTk9kZm9uT3ZJSWlBb3Jqdm5PaVVkdGRkR1NiZExhaUZuQmd2TUFwb2t0WmlzUnVzNmtoVkFUTUVIbEtTZkpQMHVhWjJrNlpLMlNGb3A2WkR0OFlubEJNUytJZW1RamQxaXNsN0pZVStxZ2xRZlNlR3JLWGlmQ213alNmZzJBcU5UeHNYUjZvTHhiZ09tZXYxMXBuOURHZjM1bkwyQXB4YTR0VWpmQW1DWHlXakh6aE9TODZQZCtuWUJDMUxHRHlpUU5SWlora1FUajJjcHZVOTQvMFJmV21KY2JpQjVmR1M0b3NoU05IRnp6dTF4enRVcjJ2ODE5bHZwbkt0M3p1M0pvYk1zRGF1RzBKaWNjenV3bk1nNXQ2T2F1dktzU0lla0xrbWRGYmFsWDVRSHlCdVNsb1RHK1dwVE1CRG4zSGxKQjZwZ1M3OG96eGZiNDVKT2tlVXJiUUFwejlhNlVkSllSZEhyWDBOQlFHd1ZadHByMlEraUFMbUZkc3dwZFU2bFVTWWdXQm92NmJDa1J5VjFTL3FrVW1tOHBCUEFTNUxPU2RvcjZTRkp4NHVsOFdsVUZnaHdwNlQ5a3JZclNyTWZrVFJSMG1aSjkwczZDTHlWSlZuMFpEcWk3M3RuVFVjVUphRjF6cm1sa2hvVUphZXZod0tLRmZpZnV2Tzh2S2tOV0YzbzRNQVVrdXBnQi9BYU1LYUFwMDlkQzFoa2NwKzA5d1hBQWVENkFyN2xRSXZ4WHY3UUNzbTErbHQ4V0JmUElNbTF3bHhndGJVTkJRNEN4elBNYnhxZ3NzVUh2eHowSVpVcEIzMXBRSjYxOXZ1TTl4WmdUYUQ4NVNUVi8rTGxJR05lYnl2UkNUU1NvKzVLN3dJZEJtU2t6ZWIyVUhrbWN5RkovYmtWV0pWbDBHU1NVdEJ2d05QQTBFREZmc20wMmRybUVIZ0hRblNQOGpaSi9YazlNQ0pFUmx4STNtZUFEZ1AzQmdsUXY0clk4VTNZbndaaUsvMjVOL0ZtOXJRQjJoa3lxNkZBUEgzK1Rkak4rYXhQVnpDU3FGQjJrYWlxdUlrTVZ3d2hRSWdLYzk5NE82RG9UVmkvQ1pqcCtjOHB5dHhhWlFGQ0ZKcmpNNnZWWkFiNVpHNEM3aWE2UDRRb3hDNHB3bGNVQ0VuSnRJdWsrbEtKZ2w4WUFjTnM5dHBJcnFZbkYvQ2tuZXlWZGVSS0VUREdmT2FTemV3RzRHcnJ1d3lrNm81Y0tTSzZpdGh0UnY1c1J1OHpNQVBueUpVaTRBSGdtQm5kYlQ0UU8vSVRBK2JJbFNDaTY3Ym5pZjYxWS9BY3VWSUVqQVBHVlZ2UFAvYW1uWnQ0SCtkc0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFFOTBsRVFWUm9nZTNhV2FoV1ZSUUg4TjgxcjVWcG1kWE4wdEpHUzVyQXlzS0VCcUhBUklnbWV1aWhvb0tDb29jbUFuMUxlaENzQ09vbFVDaXpoMENGYUhncHJXeW1BWU5HSmE0TjRvMG15K3YxZmoyc2ZUaGZuOTl3enJuZnZTYjBoOE4zaHJXSC85NXJyYjMyMmgvL296QXVTOWNCaS9QeE9tcnBlc3NCUnVoVXJNRXdmc2N2R0VpL05id3NTUDVuY1RTVzQyOE00bWxNd3p2cG1vd0g4S3NnOUJyTzJ5ODliWUhENUIwY3hsb3hLeGt5SWhreXdydXdOOG1mUGlZOWJZRmUzSTRmNUNNOHQ0bGNJNUVNTTdCU3pHQkc2T1JSNldrTDlPQTZmQ1VJZklhcjI4aTNJcEpocGxERFBkaWQ3by9yU2svYllDRStGQVMyaWhrWjE2Rk1KeUlaenNBcU1UdC9pdG5xcTl6VEZxaDNwVHVFVFJ4Y3NHeFJJaG5PRW1xV2ViM2xtRktpZkZOazA3NFhmNlJLRHk5WlIxa2lHZVpodlJpOG5WZ21QRjhwSElzbmhSc2R4QlBLVC9NNDNDeldrSUYwMzBrTm0rRnl2QzBJYmNmZG1GQ2s0Q05pU29meFBFNnAwUGhpZkpvYS96SmR0ZlJ1Y1lYNkNJZnlrZHcrcjIwbjNDY1BLZDRVTHJJTUxzR21WTDRmZHdvMzNadnUrOU8zVFVtMkRIckVJT3hNZFh6VFRuaGFFdm9hUTJMUmVoUkhkR2prYkxrKy80SUhNYkdKM01UMExRdFgxcWV5blhBMTNrOWxmc0kyZkZlRXlJUENIYTZWRzlzRE9LUkIvZ1RoRElia2EwQVJXenJTdnF0N014VmVpSGZsM25LWmNEWXZsU0dTNFdLNXVtd1RhMGRmNnNoZmRSMlpWWUJBSTZiTEY4UDYrS3dWZ1F5VmlCRDZlWU5RdVpxWWdXRzhpTmtWQ0RSaWRxcHJXSkNxNFVmY3A3bUs3a09rcUR1czRRWE13WE00U0pDYm9vSnZiNExKcWE0ZWpKZkhYU3VFK25WRVdiOCtLR0lzcVpHTDhKN3FFZXpwcWV4N3FhNFY2ZjBYQ2hKb2hWYXFWWTliaE41T0VMYnl1REQwUFVMSHB4ZG9wOTQyZHFjNitzU3MxSVJOdEVObEcybEViOFB6U1ZndEQvaVdDOC9VaU14Yi9abGtWNmV5R2NhVXlHUmMyT0xiT2RpUTZoaVFyeWZaK2pHUXZtMUlzbzBZVXlMM0M1Vm81azB5TFBEdkZiNStSVi9RcGx4bElsV0N1SW5DczdRTDNEYUtFR1NKUEVSWmt0NXRyTkJtUjR3ZmpVcnJzRTRlRTYwYnpZYXF6TWd1c1NBT2Rya3ZJMElWSWs5aHZoSDYrVzZqQ3BFLzhIRzNPekpTVkNGeWk5aXBGZHFsalJXcUVEbFJKTm5hdWQ4eFIxa2lFM0JhdWkreUlhcmFqek9WSEtpaVJMSXdmZ3R1RXVIRkc3b1h4bS9Gd3lKWHNBblg0MXV0dy9pT2FMYXlYeXFpMDJ5ZmZLUElzcXlVQjR2UGFCMHNOa3NIOVlqRnNTYzl2NUpJSEpXZUY5VzEyV3hmVWlwRU9Vc2VOKzNBdmZZMThGbnk3T0F1UElhcEJZak1UZlhlbHA3UEVaN3crQWE1Vm9RS0V4bHA4dUVoK1FobVJPYUl3U0EyWnA4TDlTbUNSa0lka3cvMTZhQlhkU2NkOUlFZ2NsZDZmMVdTdlVBRW9HV3dTSjc5YjVzT2dxVmlKZ2JGanExSzNyVStRVmNUUkNhSjBWeFRvVDdpVUNqTFAvZUxFNEdPbUNsUEJmMk1PNFE2bEVGOXlqU3prVE9WUHdPWmdXZmwrZWVsNG5DcEZPWmhzeUMwQlZlV3JVRDFKSFoyRXZhYklMSEtDTTlOc3BIOVVaNGRMRE9xWllsazdkV2ZoSjFib254SFRCSTd0Ny9GK3JGU3NTT0dNa1FXNGhPNUJyUTdDUnN4VHBQYnozYWRUNjJLRUpralg3UDZVNTFsYmJJeXJoRG5oelhoWXVlM2tHdEhKRXNMRGNtekw5MUkrSlhHZURGNk8rUkgwek1iWkpvUjZib2hkd3RUaGMzc0VTTzdESWVtYi9WRVJ0MlF1NFV6eEY4MGF2aGVkSHF6SURLbWh0d3RYQ05DaUpwUW5TRzVJZDlxREEyNUcrakZQZUt2SGZ2VmtMdUZZOUkxcXZnSExFT1dBUkkwUVd3QUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnXHJcblxyXG5sZXQgc3RvcmVcclxuXHJcbmNvbnN0IGV4YW1wbGVJbml0aWFsU3RhdGUgPSB7XHJcbiAgbW9kZTonZGF5JyxcclxuICBsYW5nOidlbidcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gIERBWTogJ0RBWScsXHJcbiAgTklHSFQ6ICdOSUdIVCcsXHJcbiAgRU46ICdFTicsXHJcbiAgWkhIQU5UOiAnWkhIQU5UJyxcclxuICBSRVNFVDogJ1JFU0VUJ1xyXG59XHJcblxyXG4vLyBSRURVQ0VSU1xyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuREFZOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vZGU6ICdkYXknXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTklHSFQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ25pZ2h0J1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVOOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxhbmc6ICdlbidcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5aSEhBTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGFuZzogJ3poSGFudCdcclxuICAgICAgfSBcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVTRVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheScsXHJcbiAgICAgICAgbGFuZzogJ2VuJ1xyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbi8vIEFDVElPTlNcclxuZXhwb3J0IGNvbnN0IHRvRGF5ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkRBWSB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b05pZ2h0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLk5JR0hUIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvRW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuRU4gfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9aaEhhbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuWkhIQU5UIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0Q291bnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUkVTRVQgfVxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gIGtleTogJ3ByaW1hcnknLFxyXG4gIHN0b3JhZ2UsXHJcbiAgd2hpdGVsaXN0OiBbJ21vZGUnLCAnbGFuZyddLCAvLyBwbGFjZSB0byBzZWxlY3Qgd2hpY2ggc3RhdGUgeW91IHdhbnQgdG8gcGVyc2lzdFxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcilcclxuXHJcbmZ1bmN0aW9uIG1ha2VTdG9yZShpbml0aWFsU3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcGVyc2lzdGVkUmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IG1ha2VTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgIF9zdG9yZSA9IG1ha2VTdG9yZSh7XHJcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4gICAgfSlcclxuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcblxyXG4gIHJldHVybiBfc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuXHJcblxyXG4vLyBpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuLy8gaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuXHJcbi8vIGxldCBzdG9yZVxyXG5cclxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4vLyAgICAgbW9kZTonZGF5J1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vICAgICBjYXNlICdEQVknOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgIG1vZGU6ICdkYXknLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBjYXNlICdOSUdIVCc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgbW9kZTogJ25pZ2h0JyxcclxuLy8gICAgICAgfVxyXG4vLyAgICAgY2FzZSAnUkVTRVQnOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICByZXR1cm4gc3RhdGVcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xyXG4vLyAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuLy8gICAgIHJlZHVjZXIsXHJcbi8vICAgICBwcmVsb2FkZWRTdGF0ZSxcclxuLy8gICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcbi8vICAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcbi8vICAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbi8vICAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuLy8gICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuLy8gICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XHJcbi8vICAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbi8vICAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4vLyAgICAgfSlcclxuLy8gICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcbi8vICAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4vLyAgIH1cclxuXHJcbi8vICAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuLy8gICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuLy8gICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxyXG4vLyAgIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcblxyXG4vLyAgIHJldHVybiBfc3RvcmVcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4vLyAgIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbi8vICAgcmV0dXJuIHN0b3JlXHJcbi8vIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRJb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SYWRpb0J1dHRvblVuY2hlY2tlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1diU3VubnlPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbC11cC1idG5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9wLWxvYWRpbmctYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9