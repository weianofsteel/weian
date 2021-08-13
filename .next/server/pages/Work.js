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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.content,
          children: t('content2-1')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      container: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.content,
          children: t('content2-2')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
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
            lineNumber: 133,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
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
            lineNumber: 140,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 11,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: t('subtitle3')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
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
            children: ["\u25CF\xA0", t('subtitle4')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
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
            lineNumber: 162,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 11,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: t('subtitle4')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
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
            children: ["\u25CF\xA0", t('subtitle5')]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
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
            lineNumber: 184,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 11,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.subtitle,
            children: t('subtitle5')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
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
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\weian\\pages\\Work\\index.js";






const WorkPage = ({
  t
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_seo__WEBPACK_IMPORTED_MODULE_5__["NextSeo"], {
      title: "Weian Wang | Front-end developer",
      description: "I am a front-end developer, open to opportunities.",
      openGraph: {
        url: 'https://weianofsteel.com/Work',
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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Work_Work__WEBPACK_IMPORTED_MODULE_2__["Work"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0hvbWUvY29tcG9uZW50L0xlYXJuQnlEb2luZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSG9tZS9jb21wb25lbnQvU2hhcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSG9tZS9jb21wb25lbnQvU2tpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9DYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvUHVibGljL1BhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9QdWJsaWNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1B1YmxpYy9TY3JvbGx1cC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvV29yay9Xb3JrLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC9Xb3JrL2NvbXBvbmVudC9Xb3JraW5nLmpzIiwid2VicGFjazovLy8uL2Nzcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3MvcHVibGljLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Xb3JrL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmMTAuZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmNC5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWY1LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvZ2lmL2dpZjYuZ2lmIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9naWYvZ2lmNy5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2dpZi9naWY4LmdpZiIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9OZXh0LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9jc3MtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2ZpZ21hLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9naXQtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL2dpdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamVzdC1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvamVzdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvbXlzcWwtbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL215c3FsLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9uZXh0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9ucG0tbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL25wbS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvcGhwLW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9waHAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LW5pZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS9yZWFjdC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS1uaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlL2hvbWUvdmlldzEuanBlZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2UvaG9tZS92aWV3Mi5qcGVnIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3dlYnBhY2stbmlnaHQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZS9ob21lL3dlYnBhY2sucG5nIiwid2VicGFjazovLy8uL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRJb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZUZpbGxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SYWRpb0J1dHRvblVuY2hlY2tlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1diU3VubnlPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGl0bGUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJpbWdCbG9jayIsIndpZHRoIiwiaW1nSG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJMZWFybkJ5RG9pbmciLCJ0IiwicHJvcHMiLCJjbGFzc2VzIiwib25Ib3ZlciIsInNldE9uSG92ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlT25Ib3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJtb2RlIiwiZ2lmNCIsImdpZjUiLCJnaWY2IiwiZ2lmNyIsImdpZjgiLCJnaWYxMCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwic3VidGl0bGUiLCJmb250V2VpZ2h0Iiwic3VidGl0bGVOaWdodCIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbk5pZ2h0IiwicGFja2FnZUJsb2NrIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsImhlaWdodCIsIm92ZXJmbG93IiwicGFja2FnZUJsb2NrTmlnaHQiLCJsaW5rIiwibmlnaHRMaW5rIiwiU2hhcmluZyIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsInBob3RvMSIsInBob3RvMiIsIlNraWxsIiwic3R5bGVzIiwiYmFsbCIsImphdmFzY3JpcHRJY29uIiwiamF2YXNjcmlwdE5pZ2h0SWNvbiIsImplc3RMb2dvTGciLCJqZXN0SWNvbiIsImplc3ROaWdodEljb24iLCJqZXN0TG9nbyIsImdpdEljb24iLCJnaXROaWdodEljb24iLCJuZXh0TG9nbyIsIm5leHRJY29uIiwibmV4dE5pZ2h0SWNvbiIsInJlYWN0SWNvbiIsInJlYWN0TmlnaHRJY29uIiwiY3NzSWNvbiIsImNzc05pZ2h0SWNvbiIsInBocEljb24iLCJwaHBOaWdodEljb24iLCJucG1JY29uIiwibnBtTmlnaHRJY29uIiwibXlzcWxJY29uIiwibXlzcWxOaWdodEljb24iLCJmaWdtYUljb24iLCJmaWdtYU5pZ2h0SWNvbiIsIndlYnBhY2tJY29uIiwid2VicGFja05pZ2h0SWNvbiIsInN5bWZvbnlJY29uIiwic3ltZm9ueU5pZ2h0SWNvbiIsImNvbnRlbnQiLCJCYW5uZXIiLCJ0ZXh0RGVjb3JhdGlvbiIsIkN1c3RvbWl6ZUNhcm91c2VsIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNvdW50IiwiaGFuZGxlVGltZXIiLCJiaW5kIiwidGltZXIiLCJoYW5kbGVOZXh0IiwiaGFuZGxlQmFjayIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInJvdGF0ZUJ5IiwicmVuZGVyIiwiaW1nc3JjIiwiY29udHJvbEJ1dHRvbiIsIm5hdmlnYXRlQnV0dG9uIiwibGlzdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwicGFyc2VJbnQiLCJtYXJnaW4iLCJSYWRpb05hdmlnYXRpb24iLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm1haW4iLCJvdmVyZmxvd1kiLCJwYWRkaW5nUmlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZHJhd2VyTGluayIsImRyYXdlckhlYWRlciIsImljb24iLCJEcmF3ZXIiLCJoYW5kbGVEcmF3ZXJDbG9zZSIsImxhbmciLCJsaW5rTmlnaHQiLCJGb290ZXIiLCJmb290ZXJCbG9jayIsImZvb3RlckJsb2NrTmlnaHQiLCJsaW5rQW5jaG9yIiwibmlnaHRMaW5rQW5jaG9yIiwibmlnaHRJY29uIiwiZm9ybUNvbnRyb2wiLCJpbnB1dExhYmVsIiwiZmxleERpcmVjdGlvbiIsIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJoYW5kbGVMYW5nVG9SZWR1eCIsInRhcmdldCIsInZhbHVlIiwiaTE4biIsImNoYW5nZUxhbmd1YWdlIiwiZGlzcGF0Y2giLCJ0b0VuIiwidG9aaEhhbnQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZU9wZW4iLCJ1c2VEaXNwYXRjaCIsImhhbmRsZURyYXdlck9wZW4iLCJsYWJlbCIsInRvTmlnaHQiLCJ0b0RheSIsInBhdGhuYW1lIiwiUGFnZUxvYWRlciIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJ1c2VFZmZlY3QiLCJTZWxlY3QiLCJvbk9wZW4iLCJvbkNsb3NlIiwib25DaGFuZ2UiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJvb3QiLCJpbnB1dCIsIlNlbGVjdDIiLCJuYW1lIiwiZm9ybUNvbnRyb2xQcm9wcyIsInNlbGVjdFByb3BzIiwicmVxdWlyZWQiLCJkaXNhYmxlZCIsInRhYkluZGV4IiwibmV3UHJvcHMiLCJzZWxlY3RSZXF1aXJlZCIsInNlbGVjdCIsInNlbGVjdGVkIiwiY2hlY2tFcXVhbCIsImEiLCJiIiwidW5kZWZpbmVkIiwidG9TdHJpbmciLCJmaWx0ZXJzIiwiZmlsdGVyIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXkiLCJvYmplY3QiLCJpbnB1dExhYmVsUHJvcHMiLCJpY29uTmlnaHQiLCJTY3JvbGx1cCIsInNjcm9sbEMiLCJzZXRTY3JvbGxDIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsImhhbmRsZVNjcm9sbHRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImFsaWduIiwiZGF5QmFja2dyb3VuZCIsIm5pZ2h0QmFja2dyb3VuZCIsImJvZHkiLCJXb3JrIiwiZHJhd2VyIiwic2V0RHJhd2VyIiwidXNlU2VsZWN0b3IiLCJpbWciLCJib3JkZXJSYWRpdXMiLCJXb3JraW5nIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImxvY2FsZVN1YnBhdGhzIiwicHVibGljUnVudGltZUNvbmZpZyIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJ6aEhhbnQiLCJmciIsImVzIiwibG9jYWxlUGF0aCIsInJlc29sdmUiLCJXb3JrUGFnZSIsInVybCIsImltYWdlcyIsImFsdCIsInNpdGVfbmFtZSIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInN0b3JlIiwiZXhhbXBsZUluaXRpYWxTdGF0ZSIsImFjdGlvblR5cGVzIiwiREFZIiwiTklHSFQiLCJFTiIsIlpISEFOVCIsIlJFU0VUIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJyZXNldENvdW50IiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJtYWtlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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LFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPbkIsS0FBUDtBQUNELEMsQ0FHRDtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDeExBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InBhZ2VzL1dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1dvcmsvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGdpZjQgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY0LmdpZidcclxuaW1wb3J0IGdpZjUgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY1LmdpZidcclxuaW1wb3J0IGdpZjYgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY2LmdpZidcclxuaW1wb3J0IGdpZjcgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY3LmdpZidcclxuaW1wb3J0IGdpZjggZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2dpZi9naWY4LmdpZidcclxuaW1wb3J0IGdpZjEwIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9naWYvZ2lmMTAuZ2lmJ1xyXG5pbXBvcnQgbXlzcWxJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL215c3FsLnBuZydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH0sXHJcbiAgICBpbWdCbG9jazp7XHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIC8vIHBhZGRpbmc6JzFyZW0nXHJcbiAgICB9LFxyXG4gICAgaW1nSG92ZXI6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonYmxhY2snLFxyXG4gICAgICAgIHpJbmRleDo5OTlcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IExlYXJuQnlEb2luZyA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbb25Ib3Zlciwgc2V0T25Ib3Zlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25Ib3ZlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRPbkhvdmVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T25Ib3ZlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0KCd0aXRsZScpfTwvcD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd2VpYW5vZnN0ZWVsLmdpdGh1Yi5pby9MZWFybi1CeS1Eb2luZy8wNC1zbGlkZS1zaG93LydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY0fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93ZWlhbm9mc3RlZWwuZ2l0aHViLmlvL0xlYXJuLUJ5LURvaW5nLzA1LXNob3BwaW5nLWNhcnQvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdCbG9ja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3dlaWFub2ZzdGVlbC5naXRodWIuaW8vTGVhcm4tQnktRG9pbmcvMDYtY2FudmFzLWRyYXdpbmcvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdCbG9ja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3dlaWFub2ZzdGVlbC5naXRodWIuaW8vTGVhcm4tQnktRG9pbmcvMDctbW92aWUtdHJhaWxlci8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY3fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly93ZWlhbm9mc3RlZWwuZ2l0aHViLmlvL3JlYWN0LXdlYXRoZXItYXBwLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaWY4fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9yZWFjdC10ZXh0LWVkaXRvci1pdGNsNzh4eTktd2VpYW5vZnN0ZWVsLnZlcmNlbC5hcHAvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dpZjEwfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nQmxvY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5MZWFybkJ5RG9pbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdsZWFybkJ5RG9pbmcnKShMZWFybkJ5RG9pbmcpIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBDdXN0b21pemVDYXJvdXNlbCBmcm9tICcuLi8uLi9QdWJsaWMvQ2Fyb3VzZWwnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IHsgU2Nyb2xsdXAgfSBmcm9tICcuLi8uLi9QdWJsaWMvU2Nyb2xsdXAnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbidcclxuaW1wb3J0IHBob3RvMSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS92aWV3MS5qcGVnJztcclxuaW1wb3J0IHBob3RvMiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS92aWV3Mi5qcGVnJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90byBTbGFiJyxcclxuICAgICAgICBmb250U2l6ZTonMnJlbSdcclxuICAgIH0sXHJcbiAgICBpbWdCbG9jazp7XHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgfSxcclxuICAgIGltZ0hvdmVyOntcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJyxcclxuICAgICAgICB6SW5kZXg6OTk5XHJcbiAgICB9LFxyXG4gICAgc3VidGl0bGU6e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgZm9udFNpemU6JzEuOHJlbScsXHJcbiAgICAgICAgZm9udFdlaWdodDo5MDBcclxuICAgIH0sXHJcbiAgICBzdWJ0aXRsZU5pZ2h0OntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicxLjhyZW0nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgZm9udFdlaWdodDo5MDBcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb25OaWdodDp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICB9LFxyXG4gICAgcGFja2FnZUJsb2NrOntcclxuICAgICAgICBtYXJnaW5Ub3A6JzNyZW0nLFxyXG4gICAgICAgIHBhZGRpbmc6JzFyZW0nLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTonMXB4IHNvbGlkIGJsYWNrJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUY1RjUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICBvdmVyZmxvdzonaGlkZGVuJyxcclxuICAgICAgICAvLyB0cmFuc2l0aW9uOiAnLjRzIGVhc2UtaW4tb3V0J1xyXG4gICAgfSxcclxuICAgIHBhY2thZ2VCbG9ja05pZ2h0OntcclxuICAgICAgICBib3JkZXJCb3R0b206JzFweCBzb2xpZCB3aGl0ZScsXHJcbiAgICAgICAgcGFkZGluZzonMXJlbScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzVjNWM1YycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgIG1hcmdpblRvcDonM3JlbSdcclxuICAgIH0sXHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJyxcclxuICAgICAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICBjb2xvcjonIzVjNWM1YydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmlnaHRMaW5rOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicxLjJyZW0nLFxyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonI2M0YzRjNCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBTaGFyaW5nID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57dCgndGl0bGUnKX08L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5wYWNrYWdlQmxvY2s6Y2xhc3Nlcy5wYWNrYWdlQmxvY2tOaWdodH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuc3VidGl0bGU6Y2xhc3Nlcy5zdWJ0aXRsZU5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGVzY3JpcHRpb246Y2xhc3Nlcy5kZXNjcmlwdGlvbk5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Rlc2NyaXB0aW9uMicpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5saW5rOmNsYXNzZXMubmlnaHRMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gc3R5bGU9e3ttYXJnaW5Cb3R0b206Jy0wLjRyZW0nfX0vPnt0KCdsaW5rJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiZuYnNwOzwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6JzMwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVNwZWVkPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU3BlZWQ9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9eycyNHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9eydSb2JvdG8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e21vZGU9PSdkYXknPydibGFjayc6J3doaXRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9eydUeXBld3JpdGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUZXh0PXtbXCJIZWxsbyBXb3JsZFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gbWRVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVNwZWVkPXs4MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlU3BlZWQ9ezgwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9eycyNHB4J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9eydSb2JvdG8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e21vZGU9PSdkYXknPydibGFjayc6J3doaXRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9eydUeXBld3JpdGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUZXh0PXtbXCJIZWxsbyBXb3JsZFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMucGFja2FnZUJsb2NrOmNsYXNzZXMucGFja2FnZUJsb2NrTmlnaHR9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30gc3R5bGU9e3t0ZXh0QWxpZ246J2xlZnQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXttb2RlPT09J2RheSc/Y2xhc3Nlcy5zdWJ0aXRsZTpjbGFzc2VzLnN1YnRpdGxlTmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdC1jdXN0b21pemUtY2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmRlc2NyaXB0aW9uOmNsYXNzZXMuZGVzY3JpcHRpb25OaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdkZXNjcmlwdGlvbjEnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC1jdXN0b21pemUtY2Fyb3VzZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7bWFyZ2luQm90dG9tOictMC40cmVtJ319Lz57dCgnbGluaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezV9IHN0eWxlPXt7dGV4dEFsaWduOidsZWZ0JyxwYWRkaW5nVG9wOicxcmVtJyxwYWRkaW5nTGVmdDonMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9taXplQ2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nc3JjPXtbcGhvdG8xLCBwaG90bzIsIHBob3RvMSwgcGhvdG8yLCBwaG90bzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVCeT17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPiAgICBcclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLnBhY2thZ2VCbG9jazpjbGFzc2VzLnBhY2thZ2VCbG9ja05pZ2h0fT4gICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuc3VidGl0bGU6Y2xhc3Nlcy5zdWJ0aXRsZU5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3Qtc2Nyb2xsLXVwLWJ0blxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuZGVzY3JpcHRpb246Y2xhc3Nlcy5kZXNjcmlwdGlvbk5pZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2Rlc2NyaXB0aW9uMycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXNjcm9sbC11cC1idG4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIHN0eWxlPXt7bWFyZ2luQm90dG9tOictMC40cmVtJ319Lz57dCgnbGluaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8cD4mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gc21Eb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzonMjAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbHVwIG1vZGU9e21vZGV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZFVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsdXAgbW9kZT17bW9kZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNoYXJpbmcucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdzaGFyaW5nJykoU2hhcmluZykiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2kxOG4nXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9jc3MvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgcmVhY3RJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LnBuZydcclxuaW1wb3J0IHJlYWN0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3JlYWN0LW5pZ2h0LnBuZydcclxuaW1wb3J0IGplc3RJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2plc3QucG5nJ1xyXG5pbXBvcnQgamVzdE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9qZXN0LW5pZ2h0LnBuZydcclxuaW1wb3J0IGdpdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZ2l0LnBuZydcclxuaW1wb3J0IGdpdE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9naXQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgbmV4dEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbmV4dC5wbmcnXHJcbmltcG9ydCBuZXh0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL05leHQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgamF2YXNjcmlwdEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvamF2YXNjcmlwdC5wbmcnXHJcbmltcG9ydCBqYXZhc2NyaXB0TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2phdmFzY3JpcHQtbmlnaHQucG5nJ1xyXG5pbXBvcnQgY3NzSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9jc3MucG5nJ1xyXG5pbXBvcnQgY3NzTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL2Nzcy1uaWdodC5wbmcnXHJcbmltcG9ydCBucG1JY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL25wbS5wbmcnXHJcbmltcG9ydCBucG1OaWdodEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvbnBtLW5pZ2h0LnBuZydcclxuaW1wb3J0IG15c3FsSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC5wbmcnXHJcbmltcG9ydCBteXNxbE5pZ2h0SWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9teXNxbC1uaWdodC5wbmcnXHJcbmltcG9ydCBmaWdtYUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEucG5nJ1xyXG5pbXBvcnQgZmlnbWFOaWdodEljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvZmlnbWEtbmlnaHQucG5nJ1xyXG5pbXBvcnQgd2VicGFja0ljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvd2VicGFjay5wbmcnXHJcbmltcG9ydCB3ZWJwYWNrTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3dlYnBhY2stbmlnaHQucG5nJ1xyXG5pbXBvcnQgc3ltZm9ueUljb24gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlL2hvbWUvc3ltZm9ueS5wbmcnXHJcbmltcG9ydCBzeW1mb255TmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3N5bWZvbnktbmlnaHQucG5nJ1xyXG5pbXBvcnQgcGhwSWNvbiBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2UvaG9tZS9waHAucG5nJ1xyXG5pbXBvcnQgcGhwTmlnaHRJY29uIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pbWFnZS9ob21lL3BocC1uaWdodC5wbmcnXHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvIFNsYWInLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgU2tpbGwgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pnt0KCd0aXRsZScpfTwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9IHN0eWxlPXt7bWFyZ2luVG9wOic0JSd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amF2YXNjcmlwdEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2phdmFzY3JpcHROaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuamVzdExvZ29MZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3ROaWdodEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24gbGdVcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3RJY29ufSBzdHlsZT17e3dpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2plc3ROaWdodEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmplc3RMb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amVzdEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17amVzdE5pZ2h0SWNvbn0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaXRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnaXROaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV4dExvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV4dEljb259IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmV4dE5pZ2h0SWNvbn0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVhY3RJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cIm5pZ2h0XCImJiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWFjdE5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc0ljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nzc05pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BocEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BocE5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25wbU5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwiZGF5XCImJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e215c3FsSWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bXlzcWxOaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmaWdtYUljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZpZ21hTmlnaHRJY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IG1kPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJkYXlcIiYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d2VicGFja0ljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGU9PVwibmlnaHRcIiYmICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dlYnBhY2tOaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gbWQ9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttb2RlPT1cImRheVwiJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzeW1mb255SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZT09XCJuaWdodFwiJiYgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3ltZm9ueU5pZ2h0SWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcblNraWxsLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignc2tpbGwnKShTa2lsbCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBUeXBld3JpdGVyIGZyb20gJ3JlYWN0LXR5cGV3cml0aW5nLWFuaW1hdGlvbidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBjb250ZW50OntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3QgQmFubmVyID0gKHt0LC4uLnByb3BzfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1vZGVcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRleHQxJyl9PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3RleHREZWNvcmF0aW9uOidsaW5lLXRocm91Z2gnfX0+e3QoJ2NvbnRleHQyJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkJhbm5lci5wcm9wVHlwZXMgPSB7XHJcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Jhbm5lcicpKEJhbm5lcikgICAgICAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3MnO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkSW9zJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgUGxheUNpcmNsZUZpbGxlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVGaWxsZWQnO1xyXG5pbXBvcnQgUmFkaW9CdXR0b25VbmNoZWNrZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SYWRpb0J1dHRvblVuY2hlY2tlZCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5cclxuY2xhc3MgQ3VzdG9taXplQ2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY291bnQ6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlVGltZXIgPSB0aGlzLmhhbmRsZVRpbWVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHRoaXMudGltZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZU5leHQgPSB0aGlzLmhhbmRsZU5leHQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUJhY2sgPSB0aGlzLmhhbmRsZUJhY2suYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhhbmRsZVRpbWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUaW1lcigpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKT0+e3RoaXMudGltZXIoKTt9LDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSk9Pih7XHJcbiAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgKyAxXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5leHQoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMucm90YXRlQnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKT0+KHtcclxuICAgICAgICAgICAgICAgIGNvdW50OiBwcmV2U3RhdGUuY291bnQgKyAzXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpPT4oe1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IHByZXZTdGF0ZS5jb3VudCArIHByb3BzLnJvdGF0ZUJ5XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQmFjaygpIHtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5yb3RhdGVCeSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmNvdW50ID4gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogcHJldlN0YXRlLmNvdW50IC0gM1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudDogMH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmNvdW50ID4gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlLCBwcm9wcyk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHByZXZTdGF0ZS5jb3VudCAtIHByb3BzLnJvdGF0ZUJ5XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50OiAwfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGltZ3NyYyxcclxuICAgICAgICAgICAgcm90YXRlQnksXHJcbiAgICAgICAgICAgIG1vZGUsXHJcbiAgICAgICAgICAgIGNvbnRyb2xCdXR0b24sXHJcbiAgICAgICAgICAgIG5hdmlnYXRlQnV0dG9uXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgaWYoIWltZ3NyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gbGlzdFxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYoIXJvdGF0ZUJ5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGltZ3NyYy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIDMpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nc3JjW2ldfSBzdHlsZT17e21hcmdpbjogJzAgYXV0bycsIHdpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ30gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KCB0aGlzLnN0YXRlLmNvdW50IC8gcm90YXRlQnkpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nc3JjW2ldfSBzdHlsZT17e21hcmdpbjogJzAgYXV0bycsIHdpZHRoOicxMDAlJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDonJ30gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBSYWRpb05hdmlnYXRpb24gPSBbXTtcclxuXHJcbiAgICAgICAgaWYoIWltZ3NyYykge1xyXG4gICAgICAgICAgICByZXR1cm4gUmFkaW9OYXZpZ2F0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZighcm90YXRlQnkpIHtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gaW1nc3JjLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFJhZGlvTmF2aWdhdGlvbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUludCggdGhpcy5zdGF0ZS5jb3VudCAvIDMpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHtjb3VudDogMyAqIGl9KX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxheUNpcmNsZUZpbGxlZEljb24gc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPydibGFjayc6J3doaXRlJyl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9eygpPT57dGhpcy5zZXRTdGF0ZSh7Y291bnQ6IDMgKiBpfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uVW5jaGVja2VkSWNvbiBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/J2JsYWNrJzond2hpdGUnKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBpbWdzcmMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmFkaW9OYXZpZ2F0aW9uLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17e2Rpc3BsYXk6J2lubGluZScsIHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlSW50KCB0aGlzLnN0YXRlLmNvdW50IC8gcm90YXRlQnkpICUgaW1nc3JjLmxlbmd0aCA9PT0gaSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHtjb3VudDogcm90YXRlQnkgKiBpfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlDaXJjbGVGaWxsZWRJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXsoKT0+e3RoaXMuc2V0U3RhdGUoe2NvdW50OiByb3RhdGVCeSAqIGl9KX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25VbmNoZWNrZWRJY29uIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3ttYXJnaW5MZWZ0OictMXJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBtZD17MX0gc3R5bGU9e3twYWRkaW5nTGVmdDowfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250cm9sQnV0dG9uID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZScpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93QmFja0lvc0ljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge25hdmlnYXRlQnV0dG9uPT09dHJ1ZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IG1kPXsxMH0gc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtSYWRpb05hdmlnYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOjxHcmlkIGl0ZW0geHM9ezEwfSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udHJvbEJ1dHRvbiA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU5leHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPydibGFjayc6J3doaXRlJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9taXplQ2Fyb3VzZWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIG1haW46IHtcclxuICAgICAgICBoZWlnaHQ6JzEwMHZoJyxcclxuICAgICAgICBvdmVyZmxvd1k6J2hpZGRlbicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOicjMWYxZjFmJyxcclxuICAgICAgICBwYWRkaW5nTGVmdDonOCUnLCBcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6JzglJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTonQmViYXMgTmV1ZSAnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICAgICAgY29sb3I6JyNDQUNBQ0EnLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOid3aGl0ZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZHJhd2VyTGluazoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICAgICAgdGV4dEFsaWduOidsZWZ0JyxcclxuICAgICAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOicxcHgnLFxyXG4gICAgICAgIGNvbG9yOicjQ0FDQUNBJyxcclxuICAgICAgICBmb250U2l6ZTonMjJweCcsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjond2hpdGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXdlckhlYWRlcjoge1xyXG4gICAgICAgIG1hcmdpblRvcDonM3JlbSdcclxuICAgIH0sXHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgZm9udFNpemU6JzEuNXJlbScsXHJcbiAgICAgICAgY29sb3I6JyM4RjhGOEYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6J3doaXRlJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmNvbnN0IERyYXdlciA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGhhbmRsZURyYXdlckNsb3NlLFxyXG4gICAgICAgIGxhbmdcclxuICAgIH0gPSBwcm9wcztcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXRUlBTiBXQU5HXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gbWQ9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfSBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckhlYWRlcn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzRyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvV29ya1wiIHVuZGVybGluZT0nbm9uZScgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1dyaXRpbmdzXCIgdW5kZXJsaW5lPSdub25lJyBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnd3JpdGluZ3MnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsYW5nPT0nZW4nPycuL1dlaWFuV2FuZ19SZXN1bWUucGRmJzonLi/njovlgYnlrolf5bGl5q23LnBkZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lcicgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdyZXN1bWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD4gICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuRHJhd2VyLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoRHJhd2VyKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Nzcy9wdWJsaWMubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBsaW5rOiB7XHJcbiAgICAgICAgY29sb3I6J2JsYWNrJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjOTE5MTkxJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsaW5rTmlnaHQ6e1xyXG4gICAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICAgICAgXCImOmhvdmVyXCI6e1xyXG4gICAgICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBGb290ZXIgPSAoe3QsIC4uLnByb3BzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtb2RlXHJcbiAgICB9ICA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17bW9kZT09J2RheSc/c3R5bGVzLmZvb3RlckJsb2NrOnN0eWxlcy5mb290ZXJCbG9ja05pZ2h0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17N30gbWQ9ezR9IHN0eWxlPXt7bWFyZ2luQm90dG9tOicycmVtJywgZm9udFNpemU6JzEuMnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnfX0+e3QoJ2NvbnRhY3RUaXRsZScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Kzg4NjkgMTIgNTk3IDEwOTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+d2VpYW5vZnN0ZWVsQGdtYWlsLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NX0gbWQ9ezR9IHN0eWxlPXt7bWFyZ2luQm90dG9tOicycmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT57dCgnZm9sbG93VGl0bGUnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd2VpYW5vZnN0ZWVsLm1lZGl1bS5jb20vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGU9PSdkYXknP2NsYXNzZXMubGluazpjbGFzc2VzLmxpbmtOaWdodH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lZGl1bVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3dlaWFub2ZzdGVlbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5saW5rTmlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHaXRodWJcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93ZWlhbi13YW5nLydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD0nbm9vcGVuZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVybGluZT0nbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9jbGFzc2VzLmxpbms6Y2xhc3Nlcy5saW5rTmlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rZWRpblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QoJ2NvcHlyaWdodCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0KCdjb3B5cmlnaHREZXNjcmlwdGlvbicpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5Gb290ZXIucHJvcFR5cGVzID0ge1xyXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG4gIFxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Zvb3RlcicpKEZvb3RlcilcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGkxOG4sIHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL1B1YmxpYy9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCB7U2VsZWN0LCBTZWxlY3QyfSBmcm9tICcuL1B1YmxpY0NvbXBvbmVudCc7XHJcbmltcG9ydCBCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnJpZ2h0bmVzczJPdXRsaW5lZCc7XHJcbmltcG9ydCBXYlN1bm55T3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYlN1bm55T3V0bGluZWQnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB0b0RheSwgdG9OaWdodCwgdG9FbiwgdG9aaEhhbnQgfSBmcm9tICcuLi8uLi9zdG9yZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250RmFtaWx5OidCZWJhcyBOZXVlICcsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBmb250U2l6ZTonMS43cmVtJyxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonIzhGOEY4RicsXHJcbiAgICBmb250U2l6ZTonMS4xcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonYmxhY2snXHJcbiAgICB9XHJcbiAgfSxcclxuICBuaWdodExpbms6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonI0ZGRkZGRicsXHJcbiAgICBmb250U2l6ZTonMS4xcmVtJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGxpbmtBbmNob3I6IHtcclxuICAgIGZvbnRGYW1pbHk6J1JvYm90bycsXHJcbiAgICBmb250V2VpZ2h0OjQwMCxcclxuICAgIGxldHRlclNwYWNpbmc6JzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnMzJweCcsXHJcbiAgICBjb2xvcjonYmxhY2snLFxyXG4gICAgZm9udFNpemU6JzEuMXJlbSdcclxuICB9LFxyXG4gIG5pZ2h0TGlua0FuY2hvcjoge1xyXG4gICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzonMXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICczMnB4JyxcclxuICAgIGNvbG9yOicjQkRCREJEJyxcclxuICAgIGZvbnRTaXplOicxLjFyZW0nXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonIzFGMUYxRidcclxuICAgIH1cclxuICB9LFxyXG4gIG5pZ2h0SWNvbjp7XHJcbiAgICBmb250U2l6ZTonMS41cmVtJyxcclxuICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICBjb2xvcjonI0JEQkRCRCdcclxuICAgIH1cclxuICB9LFxyXG4gIGZvcm1Db250cm9sOiB7XHJcbiAgICBtYXJnaW46ICcwLjVyZW0nLFxyXG4gICAgd2lkdGg6JzZyZW0nLFxyXG4gIH0sXHJcbiAgaW5wdXRMYWJlbDoge1xyXG4gICAgZm9udFNpemU6XCIxN3B4XCIsXHJcbiAgICBmb250RmFtaWx5Olwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7dCwuLi5wcm9wc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gY29uc3QgWyBsYW5ndWFnZSwgc2V0TGFuZ3VhZ2UgXSA9IFJlYWN0LnVzZVN0YXRlKCdlbicpO1xyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgLy8gc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaGFuZGxlTGFuZ1RvUmVkdXgoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMYW5nVG9SZWR1eCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZih2YWx1ZSA9PSAnZW4nKSB7XHJcbiAgICAgICAgZGlzcGF0Y2godG9FbigpKVxyXG4gICAgICB9IFxyXG4gICAgICBlbHNlIGlmICh2YWx1ZSA9PSAnemhIYW50Jykge1xyXG4gICAgICAgIGRpc3BhdGNoKHRvWmhIYW50KCkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICBoYW5kbGVEcmF3ZXJPcGVuLFxyXG4gICAgICBtb2RlLFxyXG4gICAgICBsYW5nXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXsyfSBzdHlsZT17e21hcmdpblRvcDonMC41cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgV0VJQU4gV0FOR1xyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBtZD17Mn0gbGc9ezJ9PjwvR3JpZD5cclxuICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93bj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjNyZW0nLCBwYWRkaW5nTGVmdDonNiUnfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QyXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonZW4nLGxhYmVsOlwiRW5nbGlzaFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6J3poSGFudCcsbGFiZWw6XCLkuK3mlodcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjNyZW0nLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZSA9PT0gJ2RheSc/XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh0b05pZ2h0KCkpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJyaWdodG5lc3MyT3V0bGluZWRJY29uIGZvbnRTaXplPSdsYXJnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh0b0RheSgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8V2JTdW5ueU91dGxpbmVkSWNvbiBmb250U2l6ZT0nbGFyZ2UnLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nLCBtYXJnaW5MZWZ0OihsYW5nPT0nZW4nPyctMXJlbSc6JycpfX0+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlPT09J2RheScmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV29ya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dvcmsnP2NsYXNzZXMubGlua0FuY2hvcjpjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6KGxhbmc9PSdlbic/J25vcm1hbCc6J2JvbGQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dvcmsnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nbmlnaHQnJiZcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIuL1dvcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xb3JrJz9jbGFzc2VzLm5pZ2h0TGlua0FuY2hvcjpjbGFzc2VzLm5pZ2h0TGlua31cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDoobGFuZz09J2VuJz8nbm9ybWFsJzonYm9sZCcpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dCgnd29yaycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3ttYXJnaW5Ub3A6JzEuNXJlbScsIG1hcmdpbkxlZnQ6KGxhbmc9PSdlbic/Jy0xcmVtJzonJyl9fT5cclxuICAgICAgICAgICAgICAgICAge21vZGU9PT0nZGF5JyYmXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLi9Xcml0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmU9J25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1dyaXRpbmdzJz9jbGFzc2VzLmxpbmtBbmNob3I6Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OihsYW5nPT0nZW4nPydub3JtYWwnOidib2xkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0KCd3cml0aW5ncycpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7bW9kZT09PSduaWdodCcmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi4vV3JpdGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gJy9Xcml0aW5ncyc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6KGxhbmc9PSdlbic/J25vcm1hbCc6J2JvbGQnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3QoJ3dyaXRpbmdzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicxLjVyZW0nLCBtYXJnaW5MZWZ0OihsYW5nPT0nZW4nPycwLjhyZW0nOicnKX19PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZT09PSdkYXknICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGFuZz09J2VuJz8nLi9XZWlhbldhbmdfUmVzdW1lLnBkZic6Jy4v546L5YGJ5a6JX+Wxpeatty5wZGYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1Jlc3VtZSc/Y2xhc3Nlcy5saW5rQW5jaG9yOmNsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OihsYW5nPT0nZW4nPydub3JtYWwnOidib2xkJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgncmVzdW1lJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU9PT0nbmlnaHQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGFuZz09J2VuJz8nLi9XZWlhbldhbmdfUmVzdW1lLnBkZic6Jy4v546L5YGJ5a6JX+Wxpeatty5wZGYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lPSdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSAnL1Jlc3VtZSc/Y2xhc3Nlcy5uaWdodExpbmtBbmNob3I6Y2xhc3Nlcy5uaWdodExpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDoobGFuZz09J2VuJz8nbm9ybWFsJzonYm9sZCcpfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3Jlc3VtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcblxyXG4gICAgICAgICAgICAgIDxIaWRkZW4gbGdVcD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHNtPXsyfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAge21vZGUgPT09ICdkYXknP1xyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+ZGlzcGF0Y2godG9OaWdodCgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCcmlnaHRuZXNzMk91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj46XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLGNvbG9yOihtb2RlPT09J2RheSc/JyMxRjFGMUYnOicjRkZGRkZGJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5kaXNwYXRjaCh0b0RheSgpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8V2JTdW5ueU91dGxpbmVkSWNvbiBmb250U2l6ZT0naW5oZXJpdCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT48L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IHN0eWxlPXt7bWFyZ2luVG9wOicwLjVyZW0nLHRleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbj17aGFuZGxlT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOidlbicsbGFiZWw6XCJFbmdsaXNoXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZTonemhIYW50JyxsYWJlbDpcIuS4reaWh1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gc3R5bGU9e3t0ZXh0QWxpZ246J3JpZ2h0J319PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPXttb2RlPT0nZGF5Jz9jbGFzc2VzLmljb246Y2xhc3Nlcy5uaWdodEljb259Lz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgey8qIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPiAqL31cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignaGVhZGVyJykoSGVhZGVyKSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJ3JlYWN0LXRvcC1sb2FkaW5nLWJhcidcclxuIFxyXG5leHBvcnQgY29uc3QgUGFnZUxvYWRlciA9IChwcm9wcykgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0UHJvZ3Jlc3MoMTAwKTtcclxuICB9LFtdKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBtb2RlXHJcbiAgfSA9IHByb3BzO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMb2FkaW5nQmFyXHJcbiAgICAgICAgY29sb3I9e21vZGU9PT0nZGF5Jz8nYmxhY2snOid3aGl0ZSd9XHJcbiAgICAgICAgaGVpZ2h0PXszfVxyXG4gICAgICAgIHdhaXRpbmdUaW1lPXs1MDB9XHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU9ezEwMDB9XHJcbiAgICAgICAgbG9hZGVyU3BlZWQ9ezYwMH1cclxuICAgICAgICBwcm9ncmVzcz17cHJvZ3Jlc3N9XHJcbiAgICAgICAgb25Mb2FkZXJGaW5pc2hlZD17KCkgPT4gc2V0UHJvZ3Jlc3MoMCl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgU2VsZWN0IGFzIE1hdGVyaWFsU2VsZWN0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbCwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgVHJhbnNsYXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHJhbnNsYXRlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgaW5wdXRMYWJlbDoge1xyXG4gICAgICAgIGZvbnRTaXplOlwiMS4xcmVtXCIsXHJcbiAgICAgICAgZm9udEZhbWlseTpcIuW+rui7n+ato+m7kemrlFwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93LVJldmVyc2VcIlxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG9uT3BlbixcclxuICAgICAgICBvbkNsb3NlLFxyXG4gICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgIGl0ZW1zLFxyXG4gICAgICAgIG9wZW4sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8TWF0ZXJpYWxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkZW1vLWNvbnRyb2xsZWQtb3Blbi1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvbk9wZW49e29uT3Blbn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmVcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJWYWx1ZT17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFRyYW5zbGF0ZUljb24gc3R5bGU9e3tjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX0vPlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsPz9cIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+ICAgICAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0Mihwcm9wcykge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgZm9ybUNvbnRyb2xQcm9wcyxcclxuICAgICAgICBzZWxlY3RQcm9wcyxcclxuICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICBkaXNhYmxlZCA9ZmFsc2UsXHJcbiAgICAgICAgdGFiSW5kZXg9MCxcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgbGV0IG5ld1Byb3BzID0ge1xyXG4gICAgICAgIC4uLnByb3BzXHJcbiAgICB9O1xyXG4gICAgZGVsZXRlIG5ld1Byb3BzW1wiaGVscGVyVGV4dFwiXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzFyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICA8VHJhbnNsYXRlSWNvbi8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+PC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICB7Li4uZm9ybUNvbnRyb2xQcm9wc31cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TGFiZWxcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdDpjbGFzc2VzLmlucHV0TGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOmNsYXNzZXMuc2VsZWN0UmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6KG1vZGU9PT0nZGF5Jz8nIzFGMUYxRic6JyNGRkZGRkYnKX19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPE1hdGVyaWFsU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnNlbGVjdFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50Jyxjb2xvcjoobW9kZT09PSdkYXknPycjMUYxRjFGJzonI0ZGRkZGRicpfX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiB7c2VsZWN0OiBjbGFzc2VzLmlucHV0fSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIFNlbGVjdERpc3BsYXlQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleDp0YWJJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlPT09bnVsbD9cIlwiOnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmFsdWU9e3NlbGVjdGVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tFcXVhbChhLGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYT09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPT09IG51bGwgfHwgYiA9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGIgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBiLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT0gYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcnM9IGl0ZW1zLmZpbHRlcihpdGVtPT4gY2hlY2tFcXVhbChpdGVtLnZhbHVlLHNlbGVjdGVkKSAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnNbMF0/ZmlsdGVyc1swXVtcImxhYmVsXCJdOlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uaXRlbS5wcm9wcyA/PyBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWU/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e3Jvb3Q6Y2xhc3Nlcy5pbnB1dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWw/P1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L01hdGVyaWFsU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufVxyXG5cclxuU2VsZWN0LnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5TZWxlY3QyLnByb3BUeXBlcyA9IHtcclxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlclxyXG4gICAgXSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBFeHBhbmRMZXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICBpY29uOiB7XHJcbiAgICAgICAgZm9udFNpemU6JzRyZW0nLFxyXG4gICAgICAgIGNvbG9yOicjOEY4RjhGJyxcclxuICAgICAgICBcIiY6aG92ZXJcIjp7XHJcbiAgICAgICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpY29uTmlnaHQ6IHtcclxuICAgICAgICBmb250U2l6ZTonNHJlbScsXHJcbiAgICAgICAgY29sb3I6JyNGRkZGRkYnLFxyXG4gICAgICAgIFwiJjpob3ZlclwiOntcclxuICAgICAgICAgICAgY29sb3I6JyNjOWM5YzknXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsdXAgPSAocHJvcHMpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFtzY3JvbGxDLCBzZXRTY3JvbGxDXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsQyh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBtb2RlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsdG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYod2luZG93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHt0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJ30pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e2FsaWduOidyaWdodCd9fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PjwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAge3Njcm9sbEMgPiA0MDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNjcm9sbHRvVG9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZExlc3NJY29uIGNsYXNzTmFtZT17bW9kZT09PSdkYXknP2NsYXNzZXMuaWNvbjpjbGFzc2VzLmljb25OaWdodH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PjwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL1B1YmxpYy9IZWFkZXInXHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vUHVibGljL0Jhbm5lcidcclxuaW1wb3J0IERyYXdlciBmcm9tICcuLi9QdWJsaWMvRHJhd2VyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL1B1YmxpYy9Gb290ZXInXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBQYWdlTG9hZGVyIH0gZnJvbSAnLi4vUHVibGljL1BhZ2VMb2FkZXInXHJcbmltcG9ydCBMZWFybkJ5RG9pbmcgZnJvbSAnLi4vSG9tZS9jb21wb25lbnQvTGVhcm5CeURvaW5nJ1xyXG5pbXBvcnQgU2tpbGwgZnJvbSAnLi4vSG9tZS9jb21wb25lbnQvU2tpbGwnXHJcbmltcG9ydCBTaGFyaW5nIGZyb20gJy4uL0hvbWUvY29tcG9uZW50L1NoYXJpbmcnXHJcbmltcG9ydCBXb3JraW5nIGZyb20gJy4vY29tcG9uZW50L1dvcmtpbmcnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIGRheUJhY2tncm91bmQ6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjond2hpdGUnLFxyXG4gICAgICAgIGNvbG9yOicjMUYxRjFGJ1xyXG4gICAgfSxcclxuICAgIG5pZ2h0QmFja2dyb3VuZDp7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOidibGFjaycsXHJcbiAgICAgICAgY29sb3I6JyNGRkZGRkYnXHJcbiAgICB9LFxyXG4gICAgYm9keTp7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6JzglJywgXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Oic4JSdcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBXb3JrID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgY29uc3QgW2RyYXdlciwgc2V0RHJhd2VyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldERyYXdlcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXREcmF3ZXIoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vZGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1vZGUpXHJcbiAgICBjb25zdCBsYW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sYW5nKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7ZHJhd2VyID09IGZhbHNlICYmXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21vZGU9PT0nZGF5Jz9jbGFzc2VzLmRheUJhY2tncm91bmQ6Y2xhc3Nlcy5uaWdodEJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VMb2FkZXIgbW9kZT17bW9kZX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRHJhd2VyT3Blbj17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9IHN0eWxlPXt7bWFyZ2luVG9wOic4cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9IHN0eWxlPXt7bWFyZ2luVG9wOic2cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonNnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJvZHl9IHN0eWxlPXt7bWFyZ2luVG9wOic2cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNoYXJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonNnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWFybkJ5RG9pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2R5fSBzdHlsZT17e21hcmdpblRvcDonMnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPXttb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge2RyYXdlciA9PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEcmF3ZXJDbG9zZT17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHRpdGxlOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicycmVtJ1xyXG4gICAgfSxcclxuICAgIHN1YnRpdGxlOntcclxuICAgICAgICBmb250RmFtaWx5OidSb2JvdG8nLFxyXG4gICAgICAgIGZvbnRTaXplOicxLjZyZW0nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMFxyXG4gICAgfSxcclxuICAgIGltZzp7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOic1MCUnXHJcbiAgICB9LFxyXG4gICAgY29udGVudDp7XHJcbiAgICAgICAgZm9udEZhbWlseTonUm9ib3RvJyxcclxuICAgICAgICBmb250U2l6ZTonMS4ycmVtJ1xyXG4gICAgfSxcclxufSlcclxuXHJcbmNvbnN0IFdvcmtpbmcgPSAoe3QsLi4ucHJvcHN9KSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgbW9kZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3QoJ3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4geHNEb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKXjyZuYnNwO3t0KCdzdWJ0aXRsZTEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4pePXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3N1YnRpdGxlMScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZW50MS0xJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29udGVudDEtMicpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoJ2NvbnRlbnQxLTMnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxIaWRkZW4geHNEb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKXjyZuYnNwO3t0KCdzdWJ0aXRsZTInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbVVwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4pePXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ3N1YnRpdGxlMicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjb250ZW50Mi0xJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29udGVudDItMicpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4pePJm5ic3A7e3QoJ3N1YnRpdGxlMycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDil49cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc3VidGl0bGUzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4pePJm5ic3A7e3QoJ3N1YnRpdGxlNCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDil49cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc3VidGl0bGU0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEhpZGRlbiB4c0Rvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg4pePJm5ic3A7e3QoJ3N1YnRpdGxlNScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgICAgICAgICA8SGlkZGVuIHNtVXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDil49cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnc3VidGl0bGU1Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5Xb3JraW5nLnByb3BUeXBlcyA9IHtcclxuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignd29ya2luZycpKFdvcmtpbmcpICIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhbGxcIjogXCJIb21lX2JhbGxfXzJNZFVjXCIsXG5cdFwibmV4dExvZ29cIjogXCJIb21lX25leHRMb2dvX18yN084RlwiLFxuXHRcImplc3RMb2dvTGdcIjogXCJIb21lX2plc3RMb2dvTGdfXzJydFZOXCIsXG5cdFwiamVzdExvZ29cIjogXCJIb21lX2plc3RMb2dvX18yRlFPTlwiLFxuXHRcImJvdW5jZVwiOiBcIkhvbWVfYm91bmNlX18xYTVpX1wiLFxuXHRcInNraWxsQmxvY2tcIjogXCJIb21lX3NraWxsQmxvY2tfXzFUbW5oXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b24yXCI6IFwiSGVhZGVyX2J1dHRvbjJfX3dGN1hHXCIsXG5cdFwiYm91bmNlXCI6IFwiSGVhZGVyX2JvdW5jZV9fMjR0VTlcIixcblx0XCJiYWxsXCI6IFwiSGVhZGVyX2JhbGxfXzNwUmk3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJCbG9ja1wiOiBcInB1YmxpY19mb290ZXJCbG9ja19fWHVDci1cIixcblx0XCJmb290ZXJCbG9ja05pZ2h0XCI6IFwicHVibGljX2Zvb3RlckJsb2NrTmlnaHRfXzNtaTdiXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25cIjogXCJwdWJsaWNfaW1nRGVzY3JpcHRpb25fXzJHQkRKXCIsXG5cdFwiaW1nRGVzY3JpcHRpb25OaWdodFwiOiBcInB1YmxpY19pbWdEZXNjcmlwdGlvbk5pZ2h0X18zQ1hKRVwiLFxuXHRcImJhclwiOiBcInB1YmxpY19iYXJfXzM0N1FYXCJcbn07XG4iLCJcclxuY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XHJcbmNvbnN0IGxvY2FsZVN1YnBhdGhzID0gcmVxdWlyZSgnbmV4dC9jb25maWcnKS5kZWZhdWx0KCkucHVibGljUnVudGltZUNvbmZpZ1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgZGVmYXVsdExhbmd1YWdlOidlbicsXHJcbiAgb3RoZXJMYW5ndWFnZXM6IFsnemhIYW50JywgJ2ZyJywgJ2VzJ10sXHJcbiAgbG9jYWxlU3VicGF0aHM6e1xyXG4gICAgemhIYW50OidjbicsXHJcbiAgICBmcjogJ2ZyJyxcclxuICAgIGVzOiAnZXMnXHJcbiAgfSxcclxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcclxufSlcclxuLy8gZXhwb3J0IGNvbnN0IHVzZVRyYW5zbGF0aW9uID0gbmV4dEkxOE5leHQudXNlVHJhbnNsYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXb3JrIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50L1dvcmsvV29yaydcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaTE4bidcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXHJcblxyXG5jb25zdCBXb3JrUGFnZSA9ICh7IHQgfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICA8TmV4dFNlb1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJXZWlhbiBXYW5nIHwgRnJvbnQtZW5kIGRldmVsb3BlclwiXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkkgYW0gYSBmcm9udC1lbmQgZGV2ZWxvcGVyLCBvcGVuIHRvIG9wcG9ydHVuaXRpZXMuXCJcclxuICAgICAgICAgICAgICAgIG9wZW5HcmFwaD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd2VpYW5vZnN0ZWVsLmNvbS9Xb3JrJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1dlaWFuIFdhbmcgfCBGcm9udC1lbmQgZGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0kgYW0gYSBmcm9udC1lbmQgZGV2ZWxvcGVyLCBvcGVuIHRvIG9wcG9ydHVuaXRpZXMuJyxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dlaWFub2ZzdGVlbC9zYWxpZWp1bmcvbWFzdGVyL3B1YmxpYy9vcGVuR3JhcGguanBnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogJ1dlaWFuIFdhbmcgfCBGcm9udC1lbmQgZGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpdGVfbmFtZTogJ1dlaWFuIFdhbmcgfCBGcm9udC1lbmQgZGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz4gICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8V29yay8+XHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICAgXHJcbiAgICApXHJcbn1cclxuXHJcbldvcmtQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XHJcbiAgbmFtZXNwYWNlc1JlcXVpcmVkOiBbJ2hlYWRlcicsICdiYW5uZXInLCAnd29ya2luZyddLFxyXG59KVxyXG5cclxuV29ya1BhZ2UucHJvcFR5cGVzID0ge1xyXG50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2hlYWRlcicpKFdvcmtQYWdlKSIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9naWYxMC1jM2Y2ZTg3YmU1YWMzZjRiMjEwYWU5OTQxODQ2NWJlZS5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmNC1lYzI3ZDEzZTQ1MmY1OGNlZDY2NTUxMWQ4YmVjNjUwYi5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmNS1hOGFkMTlkNzY5OWU1YWI3MDkwZGRhNGE4ZDgyNTJmOC5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmNi1lNDliYWVlNjcyN2FmZjg3YWU4MGExMmU2OGFmMzg0MC5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmNy1kNDFmOTVkYmZiYjAzNDIxOTMwZjBmMDZkNGVmMTJjZi5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZ2lmOC0xYTM4Y2I5ODdmODdhOTgzODRkZDgzOGVlZTFhMWRjZS5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFnQUFBQUV6Q0FZQUFBQkhmcnRrQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQnQvU1VSQlZIZ0I3ZDJOZFJ0SGtnRGcxcjROd0JrY05nTmRCQWRIY0hRRUMwY2dPUUxCRVVpT1FOb0k2SXRBdkFqa0RJaUxRTTZnYjVwb3JpRUttQ244REg1NnZ1ODlyTlppa3hRSkRMcW5xcm82SlFBQUFBQUFKaVRuL0RvQkFOUFJUZjZ6N3ZGRFloTCtsZ0NZdkRyeHoxKzlldlZuQWdDbW9Wc0FMQk1BTUIzZDVQKzJoUDhUa3lJRkFEQmgzY1EvTDM5Mm9mOVZBZ0RhVjR2K2xna0FtSTV1OHY4czlBOEFFOUpOL08rN3h5SUJBTlBRVGZ4dnVzZkhCQUJNUTgzN1B3cjlBOEJFYkV6Kzh3UUFURU0zOFg5UjlROEFFOUpOL08vSzNYOENBS2FoVlB2bnRWa0NBTnBYOC81ZmhmNEJZQ0kyaXY2RS9nRmdLcnFKLzc3ZS9jOFNBTkMrV3ZSWHZFMEFRUHU2U2YrdVR2NjYvUUhBRkd6bS9ZWCtBV0FDdWduL2h6cnhad2Y5QU1CRTFCUCtoUDRCWUNvMml2NkUvZ0ZnQ3JvSi8zWCt5endCQUczYktQckx1djBCd0VUVUUvNnlibjhBTUJFYlJYOE8rZ0dBS2VnbS9EY2JrLzh5QVFCdHEzbi9MUFFQQUJQeG91alBRVDhBTUFYZGhQOTU0KzdmUVQ4QTBMcU5aais2L1FIQUZKVGUvcHQ1ZjZGL0FHaGN6ZnQvM1ZnQUxCSUEwSzc4N1FsL1F2OEFNQVZsd244Uit2OGhBUUR0ZWxIMFY4d1RBTkN1TXRtL21QeVhDUUJvMTR0bVA3cjlBY0FVdkpqOHN5MS9BTkM0L08wSmYwTC9BTkM2TFVWL1h4SUEwSzV1c24vOVl2SjMwQThBdEd4TDBWL2hvQjhBYUZrSjliK1kvSFg3QTRDV2JjbjdQd3I5QTBERHVvbitUZjdlSWdFQWJjcmZuL0FuOUE4QUxkdFI5RmYrMjBFL0FOQ3FicUsvM3hMNm55Y0FvRTFiaXY2S1pRSUEydFJOOUhkYkpuOEgvUUJBcTNZVS9XVmIvZ0NnVWFXNGIwdlJuOUEvQUxTc2JPL2JNdms3NkFjQVdyV2o2TTlCUHdEUXFySzFMMi9ub0I4QWFGSGUzdXluME8wUEFGcTFZL0ovRlBvSGdFWjFrL3o3SGFIL1JRSUEycE8zbi9BbjlBOEFyYXA1Lzd3ajlPK2dId0JvVFUvUlgvRTZBUUR0NlNiNXp6c20vMlVDQU5xVHR6ZjdlUXI5SndDZ1BhV3lQKzgyU3dCQVcvTHVFLzZFL2dHZ1JRTkZmNThUQU5DZWJwSy8zekg1TytnSEFGclVVL1JYTEJJQTBKWnVnci9ybWZ4MSt3T0ExZ3prL1IrRi9nR2dNZDNrL2tQUDVDLzBEd0F0eXJ0UCtDcytKQUNnTGJtLzZPOHhPK2dIQU5yU1RlNnZjejhIL1FCQVMzSi8wVit4VEhDalh1VjExZW9zT1A3UFY2OWUvWkc0S2QxelBFOWMwcXE3YmxaOUErcGRaQ1NNUFBpMU9KM3VlZm5TL2JIckRyODhGLzhZK1B3ZmVqNmY2eldKNit6djNXUFJQZDRGeC8vWnZhRC8weHZRemRHVzlMSis3aDZmQnNiTXU4ZjdOT3lQN2hyOHNic0cvMHlNcXVUOVUvL2svV01hVmo3ZjlYZDdmdTBleTlTNHY2WDlsTldzUmhkd1l0MkVYcXJJL3hVWVdpYVU2SUtkQTNXVC8xM3Fud0IrZFNQRXJkdDNBVkRNdTR2amJRSk9yVnhYcThnNGFaM3gxTFJvWHpUbW9adjhsd2x1M0NFTGdPSmQxdkVLVHFxRzlYOE9EcjkzRFk2bVJEbG5PejYyejNNRVYrM1FCWUJVQUl5Z1d3UThwSFgrY1locmNBUTE3ei92R2ZLTDBEK3RPSFFCVUVnRndBaHFlUGtoTU5RMWVFSjFKOGF5WjhpbjdybjVsS0FSeHl3QUNxa0FHRWNKTTBjcS9kOXJSSE84K2o1MjN6TmtsV0tSR2JnWmYwL0hlUTVEUnJiRGNMM0tSUE5MWWl3UGFVOGx6TnhOU21VUmNCOFlmbCszNTlvYWVMZ1MrcC8xZlB6UXF2L1NONldWbW9GU0dOblhxNktsOTVGcDlMc3BuYXp5OFlRaHIxamcrWHRNWEtYdXVmbVFZeUk5Qk5naTkvZjVMeHowazU1K1Q0L1orMGhiOG1rV0FGK3pWTURWQ2p4L0x0d3JsWWVQb04zMHo4UmU4cnJWYisrMWtSMzA4eVJiQURRbldnTXdGRnBVa1F3anFHSDluNExEUzdSZ2xnaXBFL3RRbHo1ZEYybFdkQUZROGlHL0RZeFJrUXdqcU9kdlJIS3JGdUw3S1dtVFdjL0hkZnVqYlRtV0F2aWNZNkZJcVlBcmxJY0ozZDJBZWgxR2FCVThvUHNkdlhGTjdDZExBVFFudkEwdzJLWE1IUWlNSjdvMXNDenE1NG10OHZvbVpUa3d6TTRtbXJkWEg0RGFwVXdxQUM2Z2hxT2o5UUFmcytLMVhVcmV2KzkzSS9UUEpCelNDR2laaHZkSXZzdFNBWEJ5d1VWNE1VdXg0NFVuSmErM1M4NTZoampvaDhuWWV3R3dSeW9nMHNBRTJOOHl4UnFWTEVUai90TDlMaFpwZmVMaUxxdmtvQjhtNUtCV3dNR3E1TmZkQmJkTXdFbHRiQTJNMUFPSXhxVi81LzJIaWlPRi9wbVVnODhDNkM2VTBoM3JZV0JZZWZQUnB4eE9yRTVVMFZNRFJlUFdlZjlaejhjZDlNUGtISHNZVUtRcTJhNEFHRUZkaFA4ZUdQbzZUN2hWY04wV09lc1pza29PK21HQ2psb0FCTzlDcEFKZ1BHVVJ2Z3FNZXp2RnJZSGR6M3lYaHJmOENmMHpUVG5ZQ0dqZ2Ezd09mQTJwZ0FzSlBEY2FlTnl3TXJIbm1NYzhvYTJCZWQzbi8zSGdkK0tnbjZDc0VWQnpqazBCUEpNS2dBdlpjMnZnbE9vQnludk9yT2ZqcXpRY0hZQm1uV1FCVU1OblE5dG5wQUpnSk4wMVdMYTNQUVNHVHFKUlYxN24vZWNEd3h6MHc3VGxFNlFBTnI3V2ZlQnJTUVdjV2VBNUVicHJRRjZIdkw4R251K3ZMVitINVdjTC9BNldpYjFrS1lEbW5Db0Y4Q3hTa0ZRV0NWcVV3b25WU0Z6MDFNQW1yOE84M3U4L2xPWlk2ZllISjE0QUJMc0V6dEp3UXc3Z0FIVXZlN1Flb01YcmNHakxYK0dnSHloeUxBV3dWd0ZmTi81RDRHdk9FMmNSZUM2RTdocVNZMGQzUDd0TGplaCtsbmVCbjNlWk9FaVdBbWhQSG1jQkVIa0RLaCtYQ2ppRFBNeUYyNWdjeTRNWHBSNWdsbTVjWHRjL0RBblZNckZkdGdCb3pxbHJBSjVJQmNCbEJjL3JLTW9pL0thMzZPYjFqY1RRNUw1S0R2cUJiNHl5QUNpQ2U1TW4yWjBNemlGNFhrZHg2MXNEaDQ3NExYVDdnNWZ5Q0NtQUYxLy95MURZS0VzRmpHcjQ2Ulc2YTFXT2J3MHNibTVyWVBkdmZoUDR1VFFoTzRFc0JkQ2MwU0lBRzRhNkJNNlNWQUNNSXRpazY5bE5iUTNNNjlxRjVjQ3dWWExRRDJ3MStnS2c1aUtITGtDcEFCaEpkdzJXRXdOYjNCcFk4djVEQ3hhaGY5amhIQkdBYUM3eTR5M2RmY0NOV2FiNHFZSC9URmN1cjQ4M25nME0rNjMyUlFDMk9Nc0NvSklLZ0F1cE8zTitTc09IZGhVZjhoVnZEZXorYll2dWo2R2l4VlZ5MEEvME90c0NvSWJocEFMZ1FvTHB1T0pxdHdiV2hVbmtSc0ZCUHpEZ25CRUFxUUM0c0QyM0JyNVAxNmYwK1o4TmpKSDNoNEN6TGdBcXFRQzRySklLV0FYR1hWVkVMcStQK0IzYXF1aWdId2c2K3dJZ3VDMUpLZ0JHRXV6VStld3FJbkwxL1dBWkdPcWdId2k2UkFRZ3VpMUpLZ0JHRXV6VVdjelNoZXNCYXQ0LzhtOFErb2Q5NUpFN0FmWjgzOGlCUWRlWWc3dzVlWmdPWGhPVmh6dDFQcnRZcStEdWUzOE8vUHNjOURPeXJCTmdjeTRTQVNpQ1lVaXBBQmhYZEd2Z3UzeUJyWUY1bmZlZkR3eGJKUWY5d040dXRnQW9nbUhJajFrcUFFWVIzSjVibEd2d1BwMVJqclg2TFlUKzRRQVhYUUJVeTlSZmtUeExkZ1hBYU9yV3dIOEZocjdPWjByTDFjay9FdGIvcE5zZkhPYmlDd0NwQUxnS0pjZS9pb3c3MDdWWUZ2MnpnVEdyNUtBZk9OZzFSQUNlVXdGREY3SlVBSXprbXJZR2RsLzdUZmZISWpCVTZCK09jQlVMZ0tJMjcvaWpaOGdzU1FYQWFPcEMvSmZBMEZrYXFSNmdodjQvQklZNjZBZU9kRFVMZ0dxb0lsa3FBRWEwWjZ2Z2syNE5yRkdGU041L2xSejBBMGU3cWdWQXNDSlpLZ0RHTmRTdSsxblpHampVbW5jZmtieC80YUFmT0lGcml3QkU3a0JtM1VPRElCaEpzRjEzOGJRMThCUUw4aHc3NHJlUTk0Y1R1Ym9GUURWMEI3TG8zakR1RWpDS1lMdnVZcGFPck0ycGVmL0lvdDVCUDNCQ1Y3a0FrQXFBcTdCTThhMkJ4eXpJUzk0L2NpMDc2QWRPNkZvakFNK3BnTjk3aHBRM2pJc2VVZ0l0cTNuMm40TERQeDdTS3JpMitwMEZoZ3I5dzRsZDdRS2dHa29GM0VrRndIaTZTYmRzelkxc0RkeDdRVjd6L3N2QTBBZWhmemk5cTE0QUJKdVRTQVhBaU1iWUdsaWpCWkhhZ1ZWeTBBK000dG9qQUpGaUpLa0FHRjkwYStENzROYkEwa2hvRmhnbjlBOGp1Zm9GUUxWTS9jVklVZ0V3b2pvSlIrc0JlcmNHMXJ4L1pKSGdvQjhZMFUwc0FLUUM0UEtDeDNjWHM3UWp2Rjg3ZVM3VHNGVnkwQStNNmxZaUFKRTNuN09mVnc0VHRFejlaM1k4SzFzRC83bjVGelh2SDAzWENmM0R5RzVtQVZBdFUzOHE0T1Q5eVlHL2JHd05qTlFEZkhpeE5iQTArNWtGUHM5QlAzQUdON1VBQ081TGZuZklmbVFnSnRpb3EvaDNnVzdOKzBmcWRGYkpRVDl3RnJjV0FYamVsOXozNW1OWEFJd3MwS2pyV1luS2xldHhtV0ljOUFObmNuTUxnS0kyQlhub0dTSVZBT01yaGJtcndMaEZpcEgzaHpQNmU3cGQ1YzNuUzlyZFE3eWtBbjczaGhKVHE3TTUzaDlUdVlNdFAyZjN1aW5YNGVkMFBBZjl3Sm5kN0FLZ1RPemRtMDlKQmV3NlJldzVGZUFBa1dHemRKbzNjZGF2dDRjMEVXVjNUbmNkbHQwNWI5SnhYS2R3WmplWkFuZ1dhRkVxRlFBajY2N0RjbzA5cE1QOUlsSUg1M2ZUQzRCcXFFV3BYUUV3dm1pcjRKY2U2a0llT0xQb0F1RC8wcFVLYkVteUt3QkdWcS9EeUttQm0xYkpRVDl3TVMxRUFDSmJrcVFDWUh6bEd0d25DdkFnOUErWDA4UUNvQnJha2lRVkFPTXF6WDcyT1k5ajhiSmRNSEErelN3QUFnY0dTUVhBU0xxSmZOSDljVWlVN1lPRk9WekdMZmNCK0U1Z1M5SlRLa0RSMFhmSzRtbmYvQzNicmRMRTFBbjhmVHFNN2Jwd0tkM0Z1OHpEbHVsR2xDT0J1OGRqejgveWRXcDNITU5QYjM1TWNLQ0I2eTNxMEFVRVp4SjRucjJQM0ppV2FnQ2VTQVhBK2VUMUlUK3pkTHh5ZlBBOEFXZlQzQUtnS0ttQTdvL2Zlb2JZRlFCSDZxNmhjcnJmTXAzT3grNXI3bE5FQ0J5aHlRVkF0VXgyQmNBbzhuNTUvM0tFOXlvd2JwWkU1K0JzbWwwQTFGVEFUejFEcEFMZ2NPWGFtUVhHbFJQK1NuK0FhTU9mTzlFNU9JK1dJd0JsRWZCSDZxOXVsd3FBUGRXOC96d3c5TjhuL05XMFhIU25TWW5PdlU3QXFKcGVBQlNCQTRPa0FpQ29YaXZMd05CVmVyRzFMM0F0UGl2UnVYdjFBREN1NWhjQVZkOUJKVklCRUZBbi8raXgwYi91YVBNYlBUUm9sdGFkQllHUlRHSUJFRGd3U0NvQWhrVzMvUDNXWFhPZnRuMmdYb3ZSZW9DM2RhY0JNSWJjV0NPZ1B0M1A4Ym5uWjJ5MlFWRGcrZFhBZzE3ZGErUk5qbm5NZ2RCOU4rWkQ4T3ROcm5IWHRjb2FBVFZuS2ltQVoxSUJzS2Njei9zWFA5WWRPRU9XM2VPUHdEalhKWXhrVWd1QXdKbmxVZ0h3dlpMM2p4VGsvUkk5M25kam0yNWtzZUM2aEJGTUxRS1FhbTd5OTU0aDc3TXRTUEFrcjN2MHp3SkRQKzE3eUZhZ05tZFR1UzduQ1RpWnlTMEFxcElLV1BWOFhNaVJ5Y3Z4STM1WEtUNlJmNk11R240UER2K1liUTJFazVua0FpQndZTkRyM0VqaEl4eWk1djJqMi9CK2pvYitkMzErMGlvWXptNnFFWURJZ1VIdnBBS1lzUHNVYi9YN2tJNFFXSkJ2MGlvWVRtU3lDNEJxbWFRQzRCdDUzZW8zc3ZqOTQ3blY3N0VDQy9KTjcyd05oT05OZWdFZ0ZRRGZxb1YyeThEUVZlby9iR3R2M2ZWWTd1d2ZBa08xQ29ZVG1Ib0VRQ29BcW5wWEhZMTYvWHBrM24rWGFLdmdjazFxRlF4SG1Qd0NvS2gzSG4xTlNhUUNtSUtqVy8wZTY0Qld3Zk1FSE1RQzRDOTlkeDZ2NjM1b2FGTE4reThDUTFkMXdUeWE3dXVYYllIUmVvQjc5UUJ3R0F1QXFudlRLUkdBdnIzTTdqWm8wcjZ0ZnRONUxGTnNhNkJXd1hBZ0M0QU5nZlBLTlNLaEtmWDFIRDNpOTVlUjh2N2YwU29ZeG1jQjhMMitWTUFzS1R5aUxkRzgvOTZ0Zm84VmlNcHQwaW9ZOW1RQjhFS2dQN2xVQUUwNFI2dmZZd1dpY3B0RTZHQVBGZ0JiU0FYUXVwcjNqeGEyL25TdTBQK3U3NS9pcllJVjYwS1FCY0J1VWdHMExIckU3NjgxRkg4eGU3WUtYcWdIZ0JnTGdCMEMrNUdsQXJoSmRjdmZMREQwWksxK2o2VlZNSnllQlVDUHdINWtxUUJ1U3ZkNnZVc1hhdlY3ckVERHJtZFByWUlUWEpteU1DMDNqaThlczdTbk11K1VTRmYzS0gwd0hydkgxL3lYOHQrZlMrK2F3WnZVMHVzK0QxdW1pYXEvNk1lZTM4M1Y1eHlIbjk3OG1HaGVmZk41ekRHTGRJWHF6L0ExK0RPb0J6aWh3R3ZIKzhpQXZIMitYZXp4K2VYMS96bnY1ekd2Ri83ZkVRRVlFTWcvU2dWd0swckRuRmxnM0dpdGZvOVZVM08vQkllN05tbEc5MXArMC8xUkZsbnp0SjlaV25mTS9LNXV6UUlnSUpCLy9KaWxBcmhpOWVLZkI0YU8zdXIzV0hWeEVxMEhLTmZtTE1FTnE5ZnZzWDA0U3ZUaG02NlpGZ0J4eTdSN0s5SXMyUlhBbGNyeFZyOGwybld1VnIvSFdxYjQxa0N0Z3JsWkE5ZnZRMXBIeEVxOXpvLzFVZjc3OXgzanY5MGxrOVVBaE9WMXdVYWZlYnBDZ2VkWDdxNVJlYis4LzAxdG4rdit2YTl6bksyQlI4cHFBSTZXRDZnQnlOdHovbzk1WUw3SjYydi95NWJQTFRVMFR4RnJFWUE5U0FWd2c2NjIxZSt4YW4rQ2FEMUFxWWgrbmVDRzVQWGQvL3pGWHo5RjZ1cDh0Rk9wbCtrZS81bSszemxUNXFpbkJiRUZ3SjRHdGlMTmtsUUFWeUt2aTRZV2dhR3JkS0ZXdjhmYXMxWHd2UVU2TjJhKzVlOSszN016NTdaRjhuK1YvNGt1QUNJbmNrMUozeWxsS28rNXVMemZFYitYYnZWN3JMSkxaeFVZTjBzVzZOeVcyWmEvKzkrMGh4b3BLSS9WeHVPSkJjQUJBZ2NHU1FWd2FUZlQ2dmRZZ2E2ZG04b0MvWjhKSnFTN1Jrcks0QjhiajZkaVh5bUFBdzJFSG1mSm5RWVhrdGNOY0dhQm9RL1gwdXIzV0h1MkN2NlFiUTNrTm15NytUN1pBdFlDNERoOUJ3WkpCWEIyZWI4amZxTjN6VGRCcTJBYXRPMzFYSGFqdlQ5RmxOa0M0QWhTQVZ5VGVsY2JqVHo5ZXVONS8xMzY2bk0ydmM1YUJYUGxhbVJyMit1NUxIYkxGcjkzeDBTekxBQ09KQlhBRlNsM3RiUEF1S3R0OVh1c3dLSjhreWdkdDJEWDYzbVcxb1crajdVdlFMbmhYT3kxM1RYSEdnRXRFanZsOVlGQmZRZVV6Tk1GQlo1ZkRUeHVYTDBUaUpqRWM5MzluSitpdjQ4c1NoZVNOUUk2V2o3d01LQTlYcyticit1UGViMGcyUG42RmdFNGdjQ0JRUit6TnhsR2t0Y0x6R1ZnNkMyMStqMVdDWkd1QXVObVNUMEFWNjZiWXhacHYxNGRzN1R1QVZMYVlEOHZCbVl2QjFrQW5FajNCUDJlZGxjaHo1SlVBQ09vRjNXMDEzMnJlZi92QkJibG0wcFJsVmJCWExXNlkrY2YzZU5mYVQvbDVuT1IxZ3VCYitZaEM0RFRXcWJkZHgzeWpZd2h1dVh2NWxyOUhxc1dVRVZiQmIvTFdnVno1V3A3MzBWYUx3VEtBcmZjZUs3aVgrSHBSTUMvRmdGWkRjQko1ZjREZ3g0dmtRb0lQTDl5ZHpjbzc1SDN6eFBlOTU2M0g2WnlOZGZucmNocUFJNldENndCQ0h6ZHNxdWw1UHZ2Yyt6d3I3dnllU0lBSnpiUWtHU1dIRTNLQ2VUOVd2MytPSlhRL3c1OS9UbzJ6WkpVSFRlb2RQTXNPM3U2UjJuclhhSUQ1UkNndmxSQk9TZkVBbUFreTdRN0xIUDN2UHFDUTlTNzFNL0I0WlBKKys5U2YvNmZnc1BmdWo2NWRYVkJzRWpyVk1GcXk1QVNxZjRQQzRBUjFBS2t2amVjajBLTkhHRnlyWDZQdFdlcjRJOVpxMkFhVUJlL0pScXdMUUwyb3dYQVNPb0JLN3UyYlpUSlh5cUF2ZFY4NFNJd2RKVWFhL1Y3QXNzVWJ4WHMrcVFKOVlaMGF6cmc3NG5SbEx1djdnMzd2N3YvdTYyNitDa1ZVTGNQd3FCNlZ4cHRYenY1MFA5TDVZMncreDJXeU55WE5IeFM0bE8vOWU1em9yc0ltSkNhSnZybU5YUkVkODNWanU4eFQ5OGYvUE0vQjg0WjIydGdzbDBBb3lwdjJubDNsOEN2NTBnRkJKNWYxYnMzSU1lcWU0dGxZcWZ1OS9NMng4MFRUN0pkQVArV3QzZm0rNC9BNTkxSFgyTjVYZG4vVXJUMjUrWFgrcmp0KzBvQmpHeWdON2xRSXlGNXZYZDNGaGk2a3ZmdlYvc2hSTytpeWh1bmVwMkp5SDl0cDVzUEROMTJSLzN6d05lZWRYOXNLekRkbFpaYWJmays4N3pub3JSKzMwWGE5bjJ6Q01CWjVQNjl5S05XSFFlZVh4R0FLMVplSHptbVJKUm1pVUY1Zlg3SFkvRDNxbFZ3YWo4Q2tML3ZxMUZPMi90aHg5ajVqdXZ2ZGMvWDMzYjMzM3RIMzMzOHc0N3ZzMGl4bjJtMjQzbjcrRHpBQXVBTThuQXFZSlpHRW5oK0xRQ3VWTThGdkkxMnRudkkvVTI3L0c1ZnlBMHZBSHBlQzh1ZXozbmM4VGtmNjllYjFVZEpPWDNaTVhZeDhPL3FtemMrNXgySC9kVHYvNzduYzJmUEF5MEF6aVQzNXg0UHl1MEV2KzhRQzRBcmxlTmQ3S1NTRHBCajczL0Y1S01ydWUwRndLN1h3ZWVlejRsRzVvNzZmZVZZelVwNWZUN20yTTNDTXZLRGIxb2tUaUp2RHdNOUcrVXVJL0Q4V2dCY29ieGZxMTk1NmdObHJZSkRjdHNMZ0YyVDdGQ0lQcnFBM1BaYW1xV2dJNzdQUzh0RHZ2QWljUko1blhzOGF5b2c4UHhhQUZ5WnZMMENlSmRaNG1DNVA4ejZVblFiWm5OeTJ3dUFYZS9MaThEbjdqczVQK1lEcnRtOFh6cHcyL2VjSC9xUFh5Uk9KdmZuSGsrZUNnZzh2eFlBVnlUdmQ2RXZFMGZMKzRWeko5a3FPRGU4QUNqeWV0SDluS3N2aTRGd1JMWmVzNTl5LzBMeWMxN1B0MGRGa2VwcjlUNFBMMXEvMXU5NTEvZkZMQUF1SUcrdjdueDIwbFJBNFBtMUFMZ2llZnVlM1cxR3F4dVpvb0ZyY3RNazZ3R3lQZ0FoZWIyUUtKUDBvajd1eG5xOTFPODEzL2hlKzMyL2JBRndFYmwvRzlKSjMyQUN6NjhMOTBwMHo4V2JIUE9ZaGY1UEt1KzNOWEJ5aTY5c0FkQWNyWUF2cExZbExZMGp0cjJSUERjSStqR2R4dzlUZkVNN3M5K0dXbmpXQ2YxRGl2bEZxOS9UMm1nVlhLNkZTS3ZndDdXcEVOeW1MQUp3VWZrTXFZRE1OVmdFbnFmSDROZGFKa2FUdFFyZUtvc0FORWNyNE10YnBoMkhRWFRlWldIZVNjanI2dkpaWUtoV3Z5UFRLcGlwc0FDNHNIcFU0MDg3UHV5c2dBbW8wWUZJdEtlOFZzNlZGcHE2a3A1YkJjYk5rbXVVRzJVQmNBVzZSVUE1REdMWHNhTlB1Y1pFazJxRTUxMXd1Q04rejZRdXpIOE9Ecjl6alhLTExBQ3VSQTA3UHV6NHNGUkF1OHBCTTdQQXVFOEt6czZyKzMwL2RILzhGaHp1R3VYbVdBQmNsM0xIc2UyWVNhbUFCdVgxRWIrdkEwTlhhWGVFaUJGMWk0QnlaLzhRR0ZxdTBYdjFBTnlTc2cyd1REaXJnWEYvSmtaWHdydmRHOGl2M2YvZDFtNzBtRzFIcThTbGZYTU41Zld4b1lzVWUyNStyQ0ZwTHFNc3pFdWtabWh5THg5ZnBQaFd6bHV6T3ZMandKQzgrOEFnNTcwRFFLdHlmMGN5RFhzQW9GVzUvelE0RmNjQTBLcTh1eU9aVkFBQXRLeW5Ia0FxQUFCYU5WQVBJQlVBQUsycTlRQmZwUUlBWUdKNjZnR2tBZ0NnWmQxay8wa3FBQUFtcHFjZVFDb0FBRnJXVXc4Z0ZRQUFMZXVwQjFnbUFLQmRQZlVBa2RQbEFJQmIxRk1QOENVQkFPM3FxUWRZSmdDZ1hUMzFBRklCQU5DeWJyTC9JQlVBQUJQVFV3K3dUQUJBdTdySmZyYWpIa0FxQUFCYXRxTWU0RXVKRUNRQW9GMDc2Z0hlSndDZ1hUMzFBUE1FQUxSclJ6M0FvMVFBQURSdVJ6MkFWQUFBdEc1SFBjQThBUUR0cXZVQVg2UUNBR0JpZHRRRFNBVUFRT3U2Q1g4aEZRQUFFN1NsSHVCUktnQUFHcmVqSGtBcUFBQmF0Nk1lWUo0QWdMWnRxUWQ0bEFvQWdBbllVZzhnRlFBQXJkdFJEekJQQUVEYnR0UURTQVVBd0JSMEUvNmRWQUFBVE5DV2VvQjVBZ0RhOTZJZVFDb0FBS1pnU3oyQVZBQUFUTUdXZW9CNUFnRGE5NkllUUNvQUFLYmlSVDJBVkFBQVRNR1dlb0I1QWdEYTk2SWVRQ29BQUtiaVJUMkFWQUFBVEVVMzhYL2VXQVRjSlFDZ2ZTL3FBYjVLQlFEQVJKUWl3STBvd0gwQ0FLYmhSVDJBVkFBQVRNVkdQWUJVQUFCTXhZdDZBS2tBQUppS0YvVUFVZ0VBTUJVYjlRQlNBUUF3SlJ2MUFGSUJBREFWdFI3Z3NTNEMzaVlBWUJvMjZnRktLbUNXQUlCcDZDYitaVjBFZkU0QXdIUnMxQU5JQlFEQVZHelVBMGdGQU1DVWJOUURTQVVBd0pSczFBTklCUURBbE5SNkFLa0FBSmlTalhvQXFRQUFtSktOZWdDcEFBQ1lrakw1U3dVQXdBVFZlZ0NwQUFDWWtuSlNZSzBIa0FvQWdDbXA5UUJTQVFBd05iVWVRQ29BQUthbTFnTklCUURBbE5SNmdDOVNBUUF3TWJVZVFDb0FBS2FtMWdOSUJRREExSFFMZ0k5U0FRQXdNYlVlNEdNQ0FLYWxXd0M4bGdvQXVLeS9KVGl6VjY5ZS9kSDk4YWRVQUFCTWtDZ0FBRXhRclFlNFN3REF0SlEwZ0ZRQUFFeFFhUktVQUlEcEtUc0RFZ0F3TGJVZTRJY0V3Rm44UHhlZWREOFU5eXplQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNXVWxFUVZSb2dlMll2VzdVUUJTRnZ3dHBVQ0NRSUNGcTZHZ29LR2tvS0tES0N3U0tDTG9nWGdZcHJ3QjFoQUFwVWlqZ0RSQVVTTFJBZm9za1JObGRjU2d5RWNaYWo2L3QyYzB1bWsrYVlqWFhkODd4bmI4MVpES1p6RFJoZFFHU0RvRFpNV2lKY1dCbWwySUI1eHhKZmlZUzA0VmFEUjRqbXdtRWRLVldRNjdJbU1rVktaSXJrcEJhRFRPT0pMRzM4Y1hNYnZuMVZDTnBGNWh2b1FIb1hwR3JqdWRya1dUQVhFc05RUGMxc2hCRWRHVU9PTjlTQStBenNndjBLL3BtZ011T0hIVmNpZlQxZ2IyNkJMVkd6RXpBVmlSa1Q4MzUyc0RJWnREUXpVZ2c5YzYxVS9vZE0rSWEyMnNrOVZuU3hJaHI3UCttSXA1ekJKcFY1Sm1adldnUUR4TmFrZWdmb0FwaU85K1pyWkhVUnFhcUloTzVhNjA0enBHbDBqTVR1VVk4bEUvcXNhNlIzeFY5bjZ3QWNOdVJyMnlrcWlJQ3RqMENYVWJNYkRCazhGUEt0OVpmanBSZUl6dG1WblhQK3dkdlJhQjZycGFOYkFHdmdkNlEyRjdvKzE2VG81Z3JMWkkyS2hidVlOaFZYdEs4cEdWSjcwSmJsalQwajVPa1hrWHVqVkVZZVJYWmhTNTJ5RHNieWZ2U202ZkoxSXJ0SGt1U1lsdm9VTUl6anlJaDdtMC94Um9CV0FXMkpYMlE5RnpTdGFyQU1PVWVTMXJqNU9Xc1J2S20vL0FoNldsa0NwUVpGRXhkbDdSd0tsN1NjWU04VDBaaFpMR0JnQ0w5ME5xdzZOWG52Y1pEK3pJM0dhUE1EMjlncWpVeUtrYXkyTS9paTZQYmlMdnNabllvNlNad1A3UUh0THV5eHpnQ1BnTHJ3SnFaSGJyMXRSMVIwZ1hnTG4rTjNXbVo2aHNud3RlQnQyYTIzeVpKaXErRUFFaTZnYTlhNWJmK09jWDR5WXdVQ2RXNkJ6d01EZUJOYU8vTjdHZ1U0Mll5bWN6MDhBZnkrV2V0dSt0QStRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQ05VbEVRVlJvZ2UyWXZVb2NVUlRIZnh0c1pPTlhoR0FuYUdlVFYwaVJRaXVyZENhRlJDdERTZ3Q5QUYvQk56QnBRd2lTZ0JiYXBReWtDS21qYmhaQjFKQjFjU3hteFBVeTk5d3pNMmVXbGR3ZjNHTDN6ajNuL09mY2ozTUhJcEZJNUNIUlVEeHpEalRyRGtRUnc0ajB3Q09Ga1dPYldDb1JqRUVqNU1RZ2tLb0VZNGdaNlRNeEk3M0VqQmhTZTBaK2tKNUZGdTIwWkF4QTlZeE1Lc1pyYUFDakpXTlFNd2trbm5hRnJqb0lNU2I0U0lBbkJqNW9BQjNCeWJpQmoybkJmZ2ZGeTlKTXJRUm9DZjJuUWhDKzl0T3hJYjJNazJ5TWlFWUkyTzljYmVlM0pFVGxXeXZFK2l3cElrVGxPMlpFNEMzaE0rTzFNMllnTXlKZWdEeU1WZlZkUjBhc2hUeW9qQXprR2xramZJNHNPV01HY28xb2NBdkV2cTZSYTAvZmQrN3ZTTThVOWx3aHZvd2t3QjlOZ0ZvaDNSem50N2hWNjZYQ25sWkltN1F3RGFJVkF2NjU2Z3BwQVo5SWl6MlhUdGIzTzJDajE1WTVlK1F2M0M3NTFla0VzQXpzWm0wNSt5OFBYM1c5WnhmK0hlODl6aExnY1FXN1RjSHVqdFpJa2FrbDdSNUxsTHVYakFPdmhQNWFQbnhzSXA4TlhlQUFlQWM4RmV4TWtOWmFINEYvQVpzYk5laGdKZURVSjJxSzlLcXFEYjYzdmFsRHlHS0JBTng3L1ZYSnNZdmE0SVlLQ0NsN3VoZng0WEtrZmREaUhLa1R0VStyWGFzdTFFS0twUDBDbUFWZVpHMmVjaVc3eEYvZ0VQaEt1akZjR052UFpaaFUwQmJ3alhLTE9RRitBZHZBUyt4ZlRDbG1nRlhnQTNDR1AvQkw0QXV3RHN4Wk9iZjQzSm5ITVBBY1dNZ2F3T2VzN1pOT29VZ2tFdm1QdVFGU0JBZlZFamg4WndBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFFRmtsRVFWUm9nZTJaVFloV1ZSakhmOGVaR2l1ekJrbTB0QklHbzV3V3VRZ3Q2SU1LUTNBV0lkbWlvaUtwaFJBa0ZFR0xGa0VVbEVGR2tFUkVSRFdRMEVLSUNxWVBtMFlvUk50WWJ2d1lhOEtRVWtuSHlmbTF1Tzh3NTcxT00rZThjKzhvNFc5MTVzeDVQdjczdnZmYzV6d1gvaWVFS3B5b3k0Qmx3RUpnZHFiNUg4Q3ZRSDhJNGE4cThzbENiVmZYcTN1dGhtSDFFL1dHbVJReFQrMnJTRUNaRWZYWjNKeXlmMXJxWlVBL0VGKzVVV0FYY0JBWXpuVFpDWFFEQzByekcwTUlyK1htbDR6NmNla0t2cWN1bXFiUFdlb2FkVi9rOXgvMWxxcnlMZ2Rjb1k1R3dWNm8yUDk4bTUrNTc2cjBId2Q2T3dxeVhhMWsxeXZGV0ZtNldOZFhIWVBTclY5WGVZRHhPRHVpT0UrbDJNektjTjRHeE0vQ2p0d0VNeGlJeHRla0dDUUxBZHBMNjNOM3B4eE9SdU9rRjJ5eWtCRENNSEE0bXJvdTFiWUY0dWZpVUlwQnpoMkI1bHYrVUtadEV1cEM0TzVvcXIrT0lBK1U5dms3Sy9ZZjFLMVJqRU5xZTVVeHhnSzFxVHVqUUVmVnRSWDU3bFEvc3BuMXFmYXRsQ2pMZ2ErQVM2UHBINEJ0RkZWc0xoM0FqY0JhaW5KbGpFK0IrMElJb3kzNFRFTjl6SHJacHM2cFRVQkR4T1BxM3pVSk9LSStiZkhPeWlMcnA2VnVBTjRvVFI4RDlnQVRIWXFXQWxjM3hnZUFYMHIvbnc5Y0Nmd01iQUcyaGhDTzVlU1VqWHF6eFZsaGpOL1VCOVVMSjdIWkZLM2ZGTTJ2VWdkc3JxbU9xKytvVjlVdDVOc282SDUxY1lMTkdVTFU1MHNDeWd5cE45VWxvcnNVN1BaRXV5WWg2cnBKQk1RY1ZDL1B5VEgxelg1WE5QNHhoUEIxVHBBR2JjQXJpV3NYQVJ0em5LY0s2WXJHclI1MlZqTCs0S2R3ZjQ3elZDSHh1aE01QVNKeWk4d3U5WUxVeGFsQ0RzUUI4dktaR1ZLRjdJckdxOVI1TGNUYWs3bCtid2hoSkhWeHFwQXZHRDhYekFGYWFkTU1BUHN6MXZmbU9FOFNFa0k0VGZPTzg3RDZsbnB4UnF6VHdET0phd2VCVnpOOGsxUHJid1o2R04rS253UjYxQStBbjJnK25vNnhOUDRqaE5DcmRnRXY4dC9sMFJDd3B0WStzRHBYL1RMeHBWWW1MbEh1VWIvM3pCSmxpOFVKc1g3VW51a0tpWHhkWWRIMDYxWnp1L2hOWkIwakxYcFo3NWVtUjRCOXdORUpUQlpUVkxnVEVrSTRUSE5EbzM3VUx2VllkSVdQcUJ2VXVaUFlURmo5MWtIT0hYbWRZdXNGK0IyNExZUlFQbCtjTlpLMlg0dVMvZDVvNnBGelNRU2t2eEJYVTFTdkFMdERDSi9WbEUvTHBBcTVOaHAvVTBjaTB5VlZTTnltT1o3aHZ5TWFuOHF3eXlaVnlGQTBYcExoUDY2VVcrbDVWWXZGWjdFeC9weHN5NDFzRnFnbkk3dGJaeUxYcVpLNnFDRmdqRGNUYkQ2TTFnK3F1UTN6ZWxDZks1VWNMem5CQ1U2ZGJWRVp4enhSZDM3SkRicEdMZFFIcklpbTl3THZVbFMvQVZnT1BFcnpWNmJQZ2RXTm84QzVRZU4zdjlOMHRxdWRVM3MrQzZpWHFKdlZVNU1JT0tHK3JIWk03YkVhV3Y2OHJDNmhhTm5jUWRHSGt1SW8yd2YwaGhBR0s4bndQT2M1dS93THVleDlsblYrdEtFQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFEdlVsRVFWUm9nZTJaVzRoT1VSU0F2ekdEd2JoTU1nMW1YR29hWVR6d0lKZHlTUm9KRDVMeElFbkVnMUlVS2NXREV1VlNTSms4U01JVU5ROVRSTG5maWpTOHVMeGdCaU1TUSs2M2gvVWYvOXBuNWg5N25mK2NNV20rMnJYUG1iMzNXbXZQM3V1c3RYNzRUOGlKYVozUnFUWVF5RGZPZlEwOEI2NEI3MkxTeDBRZXNBSjRCUHlLb1gwQlRnS2oydE9JL3NENW1Bd0l0Mi9BQnF0Q1VZNVdYK1FZNkozN0NkUUREY2pPV2lnRUtvRGkwUHQxd0s0SStubHpBbmNIRHdNbFdhN1pCWmdMUEZicmZnY21aYmx1UmlZZ3V4OEkyeEx6K2tXNGQrNXF6T3YvNGFBU2NvWDR2SjVtSXU1bWpVeEFodk92cjBwQ1FJcWJTczRhbndsZERJdm40dDZGbTRhNVZtNm8vbENmQ1JaRDhrTGpyZDdKd21mVjkvckFXZ3o1QXJ4U3p5TU1jNjNvZS9Fc0NRRzFwTS91b1NRRUlHSE9SeVZuZWhKQ0Z1SDYrYmlGNUFDbmxJeG55SkdPblZ6Z2poTFVEQ3lJYWUxQzREanV4M2FGNytRbzM0Rnh3QVdndDNwM0M2aERvbGdyM1lFeHlJWVVxdmUxd0h6a201SVl5MGdtWUF4YUhWQ1FwQUVBeTNFdlk1enREYkFXT2NJbXJFZHJOYkEzOU80OWNKL1drNkp5WUVpcS94UjRHUHA3RVRBSWVBQlVJeGY5dlZFbk0rT1JYQ0hZdlJmQVlxQmJHM04ycS9HNzFmdEs1T3V0WTZvUGlFc2ZITGZpWVM0cm9VK0FVbzg1clJteUNkZUFjR3NDeHNhcHVLWWlKR3lxNTd5d0lWWDQzWlVHb0o5RlFkOFFaWWJxM3dZdVdvU2t5QVYyZUk0dFFUSkViM3dOS1ZQOXFNbk9STklYMzRlRmxzVjlEZEhqUGxrRUtLeEJaaG5RMVhld3J5RlBRd0k2SEw2RzFLdCtKVklPc25MZk9QNFI0dTY5OERYa0xPbThvSUJvWlpvYmlOdjJwY2F5dUs4aFAzQTl6aExnQU5EVElPc0hzTjV6YkNPdzA3QzJLZGJmQjh3ajdZcFhwWjZQQXZkdzA5T0E4dEJ6RFhMSHRwSTVQR3BDYWx5SjFvSDdBT2VJRmhEcUVHVW1jSjJXSVVvMWtpRzJDL004RlcvTGtJQUJTTkd2QW5zVjM4R2FSbFlCUjBMdnZpSDFydVpXeHBjaUVXNG1YdUVXTk5xRk1pVEUxcm5EYXVTNFpTSlQ5QnM3bHYvSUh0SloyMHRnQ2kzemkzK0dyL3N0QldhcDU2VjBJQ1BBMzVEWnBOUFB1OERwWk5TSmpxOGh3MVQvVWhLS1pJdXZJYnBNODhHd2ZuZlYvMnFZWjhiWGtDYlZIMjVZWDBmS1VXcGVzVE9YdEJ0OVM5c3VONkFZQ1Z1Q2VaTVQwODVBRDhTQVFLbjlIbk9PcWZHTjJDci9pYklSTitUWVJ1c1pYRDRTR2V1eEs5dEpSeS95a1VCUEsvZ1FNWEFPY3Z3MjQvNDg5d3M0UTRUS1lkSVU0MWJqLzlhdTRIcThEa1V2SkRmNVNtWURQZ0hiY2Qxdm9tVHo4L0p3cEdRekRhbERCUlhJODBnQzFaaTFkcDEwOHUvNURVZXliV2FZVm1rQUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDYkVsRVFWUm9nZTJhMFdvVU1SU0dUN3kxV3RxNnEzMEQ3Vlo4Z1dKUlg4Q0x1clJVZlJLdjlYRkVMN3pVMTdCU1FSUUtMWUk0MjE1L1hreGlvNXZOSkRPWlNhejlZV0NZYlA3azQrVE1TWVlWdWRSL0ltQUN2QVZtUUFXOEFUWnl6eXRLd0xZRytGc3pZRHYzL0lJRWJDMkFNRG9ESHVhZXAxY0JFT1hEQVBlQjB3QUlvOU9VeSt4S0tpTVJPUkdSS3VMM1YwWGtYVEdSMFpIWTFQZWJ3SEZFVkpKSHBpMkV5WWtUNEs1K2RoczRpb1RKbHpQTUovYS9CME5kSjF5SmZjejVNcHNBKzhBTllBUk1nUzhOTU1NdE13L0VISXlqNzJvUk1BRVFSczg4SHJzQi9mdURpWUFBR0hsOHhvRWU2V0VpSVFEV1BGNjNJbnpTd2JTQUFKaDYvSjVIZW5XSGFRa0JkVUt2THZBY3RtaDJnREQ2RE94YWZudkFaRkFZd25leGpiSThZY2lpbVJMQ0FRSkR3TkI5T2MzSkFRSjk3Z0MwWWJKSUdDMEFBZjhPWUFVNGFMQ2VZWDBEc004anIwUmt5UnV5dEJxTHlEMVhnMUxxaDRpOGFPaS9KQ0l2Zi9jeE44Qk1lZ0JSU2ludGo2TjVwSlQ2N3VvSHJJdklVWU45cFpSYUZ2a3pJcTZCK2xheU1XMlFENmxNSS9USTA3WVYwUC85M0JOZ2cyR1RIZXEzMDRwakxpSEpYZ0YzbkhnTTkvcTFkUURzQU92NmVnSjhhckJ0cnZMVUJiRktBUUZCSUxFNkF4NEVMTHUwTUlsQndpRVNMck5EWU4veWUwcTlrV3lyTER2Z1EyRHM4THVwMjRhRDZBampPMWlGbk5uVFFsaUR4K1pNaWpNN3RNbUpBSmlZeUZ6eitDd0hlaFR4SmVXeHgyT2FGU0lTNWlQdWlyMEdmTXNPRVFuemxicEtYOWZYdENnSUN5YnBEb0ErRWpzRFRENkloREQ1SVl3NndKUURZZFFDcGp3SW93aVljaUdNQW1ES2h6RGlJdnlGdzRqNkc4QnJIWjJmK3Q1OXhyN1VCZFF2V0h6RjJiZDJuQ2NBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRElBQUFBeUNBWUFBQUFlUDRpeEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNMRWxFUVZSb2dlMmFXMDdjTUJTR1AvRk9FWmNXMkFITXdBNUdvTUlHZUtDam90SnVFY29DWUJ0UVVRbFJDUW5lWU9EWmZYQ09tRWFKZlp4eEhJZnlTMGVLa3ZFZmZ6bys4VVVENy9wL05BVE9nQW53QlB3RUJwMzJxSUYyc1FDbUZKUGlXUzgwb2hwQzRnWFk2NngzU3ZrZ2VnR3pBenpqaDVCNEp0Tmh0Z0hjb1FmSkxqTTd3Rlp4dlFYY0V3YVRSV2FrSmg2QTdlSmU3ekpUTHV4ZXd1eFNYZGozdkE2eklmQU5XQUUrQW1QZ3BxSk5aOE9zRHFJS3Bxd2xNb0h4UVVoOGQzaDhWYlJ2RlVZTFliQkRxVTZmbEI2dHdJUkFHR0RaNGJVVzRCTVZKaFRDWUF1N1RqOEN2YUxBTklFdzJJSmVxdkZNUG1rMmhaRDRqUzFzMFJIMms1d1VScnVLMVlUSWtIalNqQWxSQmtrR00rdHcwb0FZV2w0QkRJbWJDUmRJR2Fhc1JlREs0enVoNWd6Z3JBVUlGNGpCWnFKT1h4VGVwMVVOMjhpR0QyVEZBYkt1OEg2VUg4K1ZYcFJhMGQ0NURYSVJ5elJBKzQ1bkkwWDc4NnFiQTlJV3U4RituUllyK3FJcDlpZGdzNDR3MWVkM09xNkFRMnhOckdPTC9KZkhVelhMandyYVZDQ2g4UUo4OWtHMEFSTVRKQWhDTk9zd3UrYmZlZUlZdTVCczZ0ZkpDdmdhdXhNc2E3VjRsaFJpRmhqWHhrcXpaNDhPSVFxdG1SaDc5c1kxNFZOSVp1WWRQZ3RLanl4T1VnNGNIbU5GKzJ6T3RpNnBuckdYZ1QrZXRsbWROaHJnRmp0TGZ5aGluQnVFS1BZS29KWEMxaW9XVEtjUW9sbGhzb0FRTllYSkNrSVVDcE1saEVnTGt6V0V5QWZUQ3dqUm0vZ0xoMmdBbkdDejgxaGMxKzZ4My9YVzlCZjFWcWY3aVlrRnVnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQzBFbEVRVlJvZ2UyYXZXc1VRUmlIbnpmcVdmaVJJbm8yaXBCMHhrS3dWekVhREVRTHJhMHRMZE9KbmYrRi80QllLV2hNRkVKYUNWYUNHSnNVaVNiZ0J5VENrY2pQWWpmaG1KdVo3RzUyTDN1NVBEQWNPemN6OS83bWZlZnpGZzZwT1pJZVNHcXB2clFrM1hmdEh2Qm9HUVVhMVhkWllSckFaVGZUSitSSDliYnNtZTl1UnE4S1dYVXpmRUk2Q3RXUWpzN3VWWS8wa1JBeld3YzJ1bUpPTVRiTXJNTStuMGVnM3VQRUd6RWhJWVhDeXh4Mit6NEdjR3JmaEpSTU01RHZqWlk2aDFaSXlJSHhpTmUybzNrS2w0MGtGYWpXY3g0SmNXQ0U1QnJzZFJhU3l5TjFtTFZDNUJMeUcyaFZaMHRoV3NBZjN4ZGVJV1ltWUsxS2l3cXltdHJXUVdqNmhjU0Y1NnV4WjRlZndHSmIrcHArZmdPV1BmWUZRMzQzSVpWaVprTytmRWxuOE52V2NjVGRKalJHWUg5bnJsejdMT2c5SVVHYllrSzZOZ1ZMdXVoa25RMFVyY2NZa2RRa3VaTnFUNk1rSGRwKy9zanRrVzRQOWxDYlM4NXpxYUVWcWpRQ1BBSmVFRmljQ3ZETGVjNHRKSWlrcHUvaTFTblRrSFJEMGpOSkM1NDJzckFrNllsVDcyV2diRWhnVk1pQXBNMllrQXh0K1BncmFVYlNsS1Nya2pyTzlwTG1QZlcySk1VaUtHcklTc2xDeGlRZHoxRHZpNmR1Y0RHRStCZ0JUMHo2ZWpBclp2YmV6TEpzUm4waEZCMGZzVmtML1BQMmlxUjN3RFF3WTJhbHJEZVNob0F4WUJ3WTlCVFpreEJmNVhQQXd6UWg2VFB3Q3BnRjVqUDJPSktPQUZlQVcybTZEaHpMYWNzT1JZUzRYRXJURkxBdTZRT0p0NmJkZ3BKR1NIcDhITGdKbk03US9qWlJ6NWNocEoyVHdMMDArVmpNMlY0NzVRNzJmU1JxUzk4SXFkTWxSTlNXdnZISUd2WDQwMmVEWFM1RG9rTE1iQk9ZQUo2VFhBWjBtK1gwdHlkU1c0TGsybTVJR2didUFwUEFOY3Avc2VBZjhBbDRUYkxJTG9TdWYxd0s3NXNrblNCWjFDWkp2SGFoWUZPcndCeXA4V2JtbmsyNmk2UmhTWS9UTFhyc1haWXRTUjhsUFExdDQ0dFFTaU11a2dhQjI4Q2ROQUc4QWQ0Q3MyWlcxc255a05yeUg1M3dpMjVrWVNZUEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFDbmtsRVFWUm9nZTJhdjA4VVFSVEhQL3pJR1lOSURIQTBKaWJRQ1ozL2dGRkRKd1ZhMjFKU21lc01IZjRMUmpzNkRYOEFtdGpZR3FPRmhSRkRRZ2dJSkJJU0RuSktQSXE1QzV1NTkyWjJsdDFqN281dk1ybnM3THkzMysrOE43UHY1ZzZ1RUQrZUFEV2dIbW1yQWZNMjZYNUJ5RFJReWp3TnhhTUV6Tmlka3BEZDRybGNHTC90ams0VnNtZDNTRUphQmtXSWxzbnUxSWowbHBBam9GbzhsOHlvSXZDVGhFRGM2MFRNR0UxSTF2VHFzNXJ2dnFzTmgzRExXMGllS0N2OVlyYkVuRnFha0s2SmlNaHRNR1J3QWFobnNPbTRpR2pvR2lGQml6MW1JVUVSaVdIWDBpQUtrVjVhemY0VDRGcmdRMngvOW1MMjNmZWhCbHlYN0xTSTFJSDl3SWUwQTNzbzRyWHRGMHdJYnhkQzV4eC9nUFZFKzluNC9BVnNDL3pVbFBjSktScWpTdjhZTXJlV3I3aE5hS2tGbDd0ekJkVlowSGxDVkU0dUllM2NndTlZMStQS3VHaldTQmx6SnBWczA1Z0pIYmJHQlhGcXR4RE41Nloxbld0cWFVWlR3QUx3RGpoMDJJZmd3TG9PRnVKQ0dmbnNOWWtTY0I5WUJyNElQdEtjNVc0Q0x5eTdWV1dzSnRDSmZ1Q2ZSNGdQRXBsajRBTlFBZTRobDBtZkJMdFQzQm5reEk3Z01BUzI3VVBTMVc4L0JGdjFaWmdHWHdXSFdxRXBJZXNrSEFpMjMxd0dybDBMNUgxN0IzZ1ByR0ZTSksvM3pTZ21ZclBBaUhEL1Fydm9DdjdGK2gxNENUeWlOVzFjRVJuQXJKRUtaa0wrZXA2ejRpTHFpMGlhV2JqYmFCWE1jZXRIVExUV2hMRlRtQm1mQlI0QU4xUDRiOElaK1R5RUpIRURtR3MwQ2V1Qi9wSndMbmJmZGhiVGQzY25sNTRSRXRNaGhKTkx6MFJrbnpoKzlLbmlPUXdaOERqNHozbmRNNEgrbTBWUjJNWlUyYytCalR3ZFR3S0xtQmRZRWYrT09BVStBMHZvQldYdUdBSWVBNjh3cFhoVzhydkFXK0FaY0tzZHhIMUlHNjFMbWZXc0dBR2VBbStBclVaN2pmbkRqbFFRWHFIcmNBYTRLeWUrMXg1ek93QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvamVzdC1uaWdodC05ZWE3NDAyYTNmNDYyZWJiNmFkYzYxMmNlZjJmODVjZi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvamVzdC01NDZmZGIyMjI4YjRjMGFhZDg0ZTdjMDQ4NmNmMGFlYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRXcwbEVRVlJvZ2UyWlc2aFZSUmpIZjU4ZEZUUzFVc3RJTEtTTFFwR21abVZabG9raGFFRUVhVkJaR2lnSzFVUFFTeElraVhqcG9Zc1drYmVnRisyQ1JDcVpsV1dwM2Nnc0RRVERGN1BBdk9UOTE4T2FuY3Z0MlhzZnp6bjdhTFIrY0ZnemEvN3p6VGRyelh6ejdYV2dvS0Nnb0tDZ29PRC9pdHBYbmFEMnI0ZjlkdlV3MmtMZUJxNEczbGZmVmE4NDJ3N1ZGZlZUdGF2YW9ENmg3bEkzcWN2VUI5U0dzKzFqcTZLT1VoZVYzZXVsamxaWHBNa1BPRnYrMVFWMXZqb3VsYnVxSTNKdHc5WHQ2dFN6NTJFcm8zWlcxK2ZxcjVhMVg2Q3VWdWUzdlhkMVFuMVR2VFdWVHd1dWFrZDFwVHFqN2IyckEyby85ZTBhbWk3cWx0THkvOCtqTGxHSDF0QmNseUo1ejdieXEyNms2THkrQ2JxNTZxeTI4S211cENXN3NnbTZ5OVRkNnZtMXRPZGlwcFZuQ1BCUkxWRkU3QUpXQTVQcTdsRTlVYWVySTV1b3ZWNzlUZTFRVFhldXYrSDJ3SEVBZFpaNlVTVmhSSHdQL0FnODNFYSt0VDRwZDU2b2RsZVBxYy9XMEE5VGQ2bzkyc3JIVmtXOVZIMG41ZEhyMUxWcTF4cDlubEozcE1qZHE2MThiVFhVbDlRMTZqeDFwRHF6Q1gwYTFMR3AzNWkyOExQVlVOdXI0MHZMVkgxTUhkakV2aDNVNTlVWDFQUHE2MmtkVVFlcTNXcG9PcW9qMU1ucXFsSmlFcW54UXFBMzhFdEVIS2xocUFkd01iQTlJbzQyMCtFQUxnZTZWNUJzallpRFNYczUwRmdRQ3VDN2lEaFdwanNZRVZ2Vm40RTl3QkpnSy9CTlJPd3YvU29wc1VQdFhjWFJpZXFScE4ycjN0V015VDZqL201MUJxazkxZlUxZEgrcTQ1UGRCZW5lcGxRZmFYWXVqeWwzNEZnU0hrM1hCUlVjN2FiK1ZUYmd5MmM0MmVHNXZvK1l2ZWxLMnVlUzdxQjZjMWxiRjNWNWFqOWs5cEhnbEFrbjNXRDFXL1YxVTBMU0RpaHQ1aFhwK3BDTkgvQ1RnQzdBYm1CTHVuZW0zNWV1eVpVWFI0UlZ0SDNTOWNlSStETGZFQkg3Z0RtcDJwRnNlNXhHUkd3Q2JnQStCR2FvN2ZLWjFocXlUS1VUOEhpK285bUhzMm1wK2pKd0tOZldKejNkQldvZnlzaTEzUWFjeURWVlBVOXpISzl3LzFpdVhIR2xSSVFSc1J5WUJWeGIvb2JtQTI4QVU5UTVFVkVhN0g2eUovNDM4QW93TnRlbkp6QTVsUmNDTzh0c2x0bzJBMnVCQTBCbllLRzZKcWM3RFB3RWJJNklFOVNtMnVvNGpZallDL3hRUHVGbHdFeXlKVElPV0o3dVA1bXVpeUppajU3UldQbEJ0NnREZ0Nsa1M2MzBNQnFBZm1UTDh3djFqaWFZYTVZVHAveDRpSWhEd0d1cE9oMnkvQlM0a1d3NXptdk9JR1ZqYkkySWFSRXhMQ0lHcDc4QndJTkpjZ3ZaNUd2Ujhna25TbnYwZHZWNjRPbDAvNzJJMk5hY1FacElmaXRVL1luWEVrNmJjRVRzQnQ1SjFkbWMzSzl6SzlnNG5DdDNib0V2bCtUSys0RDlxZHhYN1F5ZzNxTnVWRGNDRTNMNlE4RGVWTzVwbFRTeTByRXlPeG04TzlYWFJjVG5GYlEvQVI4RGR3SnZxV3M1TllMK1M0clVEelhTMUI0WW5jcExJMktidWhoNGxDeXIrMEw5aW13Wjl3Q3VBQVluL1FiZ1Y3TC9TVTBsQzY1ZnE5L1NTSVJ2SUl1c2tLVmZBRVRFRnJNdkRmY0JmM0J5WDVkWVFSWjFQNHVJRStxbzVQQlFUbjFUK1JWVWJjOGRBUllBYXlKaWZmSmhzOW9QZUFDNE1qMFVnRlhKN25peUkvU0RGTlcvVTY4QzdnWDZVMkZiVkR5L21vcmFLUTNRbU8yN2dCZFRmVVJFZk5MUzhYTGoza1IyakRZQTh5TmlhV3ZacmpYd29FcUpybnBBM2FCT3FHMnBvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQjUvQU96WTVPZStPdXVSd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUVXVWxFUVZSb2dlM1pXNmlWUlJUQThaOTJWTkMwbTVaUnFFaFhLaXExckk1YTVvVXUwQVZDU0lQS2JwQWxSQTlCTDBWUUpKTGFnNVVXa3JlZ0YrMUNCSFhvcnQyMHRFd3JneURweFVvdzgzN01IdFpzOXVkMmYzdWY0em43ZUpMdkR4L2Z6RGRyWnRiTW5yVm16V3dLQ2dvS0Nnb0tDcnFJNDQ2MkFsVVlqaHZRaWo4N3UvR2VuZDFnSi9BYXpzRmJlQVBEanE0NmplY1RERUFUSHNEdldJUGxtSksrSDFOTXh1S0tiNE54SFZhS3dWL1MxVW8xbW5tNE9hVUhZSHltYkJ3MlkwWlhLOVZJK21GVkp2OWlSZm1KZUY5TXpESERJb3hKNldyT3RRL2V3Wk5kcGxHRE9VOTQ3RnIweHcvS3kvOS96MUtNcmlOemtmRGtneHF2VHVNWjdGQmJ6bU1PWmpWWWx5Nmh2N0RUZXB5QnJUaStubUIzREMyempNRU9mRmxIYm9mWW0wL0hGNDFXcXBITXhNUTJ5bDZNTGVoZFM2Zzd4dEpaZXVGQVNzL0N5VFZrMTJNRDdteTBVbzFrQ3FiakZIRjZlcnlPZkROK3c4QThnZTV1dzl2d2tIQklROFhSY1NYMjVzaHZRUSs4a3VUWDQ1L0dxOW01UEk4V3pCWDIvRXdiNmpUaHBsVHZ4c2FwMWhoNllhcnlNcjBIbDdheGJtODhoYWVsMWR6ZGx6VDhpKyt4SytXL0ZkdlBidmxMbTRpMW04V0VUY0lGYU9tUkNrL0NtZmdKKytvb01CQ25paVBhL3Zicmo3Q3pvY0laVldPVDhnQ0hxdTZFZW1DZGNHWlp1VjJwL28vaWltaHB5bjhqMmZNaUhFelByMkxnZVV3WEUzSVEyekdoM3NpcThCait5UFJaN1JrcFl1TlZkZVMyaWVVT0M5SzNOU2svVVRpeHcyeTROUW51VCs4Rk9ZcWVnTDhyT3B6ZnpzR095OVM5Uy94S2VUeVI1SGJoeW9xeS9saVJ5dmVJUzRMS0FjTW9ZUUl2U3dGSlQyVTdYcG5lZDZpK3dkK1hPdG9xam1TMC8zN3AzRXg2U1ZJd2p5SHB2UUdmVjVUdHdITXAzVWNzNTJxc3dRaThLODdOUGJPUlZrdHF2Qy91cmFqWWhJZFRlcjZZMWF4aUM5SXp4T0dVeXNZS0IxUmlRSTZTbFJ6SStkNmFTZGRhS1FmRmFwaUZDeXQvb1hsaTAzNVF6R0Nwczl2RVlIYmpCYkhIbFJpRSsxTjZvWWgwc3BUSzF1SkQ3QlJYT0F2RkpKZllpNDFKTGpzeHRRYlNIcmJqdThvQkx4Y2IrMUJ4aTdBaWZYOGt2UmZyMk9YNFpsd21KblNFOG1RMGlSdU9QbGlOYTlyUVZuc0hqTU1QRDN2d1VrclBUTzltWEM1bWZlNlJkRkxCSm1FZXpjS3BqQkpIdTl0VCtWVmk4UFhvbEFGVHR0R3J4WkhyMGZUOVRmeDhKSjIwa2F3cDFEemlkWVJxQTk2SzExTjZ0cks5enNscEl4dnQ5T3VBTHFkbDBqdVVnLzdobVhhdng5ZnBtWmFSM3lOc2xQQXB1UkZrM3JZeU96VTRLZVUveG1jNXNodnhBYTdGcThJeHRlYklqaFhiWGlXOXhEOExzRXlzcENXNFcwUjFxOFd0eDBFUlRRMFRwa0RjY1B3aWJqaG5DT2Y2bGRoL0QvUHdUY0piRXJaVjRnY1JxZHlLdjVUdHVzUks0VTAvRmJZOU9TazgycUcvVkhZRjFiSzVmV0xyYWxHK3RGc3JiSGtLemhLVEF1K2xkcWVLTGZUdHBNTTZuSTFiY0w0Y3M2aTFmN1dWdnFtRGFtMVB3TE1wUHg0ZmRVSi9KYTRRMjJoVGVpL3J4TFpyTWxKK3JMdFRMTGxwdWJVTENnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2pySWZ6NWg5MDhpMmRhNEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9uZXh0LWE3MjVmNWNiNTE5OThjMzBjMDNhNTVhOThhYTAwM2RmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFCYkVsRVFWUjRuTzNZTVVvRFVSQUc0UDlwVUpRSVVReW0wRXZFSnBVZXdGNng4UTQ1UUk2Z3BZMlZyWlVXSHNCT0xJUzB0dUlON0grYklPT1FYVGVQVGFaNC93ZUJERy96ejJQZ0pka0ZSRVJFUkVSRVJFUkVwQ1NKSktNM0VXa3RlZ1BSaWg5QXg5WHZBRjR5Y2dZQUxrMzlET0FqSTJjSTROVFVkd0MrTTNMcW5BQTQvcTM0MTAxT0lzbVJ5em5QekJtN25LT2NuSDk2WE5zR3hSOEJEYURwaFNUUFNINmExekNuSWNtSnpjbkptT1U4bXB3bnQzWnIxdDdxY3Z5WFlKMXRBSWVtM2x6Z3M5YXV5OGwxWUhLKzNOcStXVXQxSVRvQzBSdUlwZ0ZFYnlDYUJoQzlnV2lML0F5MjVSN0FhMERmdVZZK2dKVFNGTUIwMVgycjZBaTR1a3V5NmwvYW5xdjc1dHArMDRZa2V3QjJLcFo3cmg3VVBMSGFzTy9kdnJmTSszVzMxclVoeTNva2RwRlNlcGkzTUx2bEhpK2haNWJpajBEeEEraWtsR3J2bHBweVIrbUs1S2ppVXZ2SUMyMzF6OVZhODl6dmt1Z0JGSDhFaWgrQWlJaUlpSWlJaUlpVTVnY1c3N3NrSHN0R3lnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQlVFbEVRVlI0bk8zWU1VcERRUkRHOFM4YWxFZ0VGVU5TNkNWaVkyVU9ZQy9ZZUFjUDRCRk1hV1BsRGJUd0FIWmlJZGphaWpld2Z4WmFERU95OG9ZWFJ0ai9EeGJlWnBOdmxvRk44cDRFQUFBQUFBQUFvQ1k5U1UzMkpqS3RaVzhnVy9VTjZMdjVxNlNuUU01RTBybVpQMHA2RCtSTUpjM00vRmJTVnlDbjVFVFNrWDJoTVdNZUREMTJPV2ZCbkV1WGN4ak1LYm0yTmFvL0FqU2d4WHRQSlgyWU1RM1d2SEk1VWZjbTQ4R3QzWmkxbDFLSS94SXMyWkowWU9hYkxUNXI3YnFjcUxISitYUnIrMmF0VndyaENHUnZJQnNOeU41QU5ocVF2WUZzYlg0R3UzSW42VG1oN2tJWkRYajdIZjhDUjhETmgxcitMMjNQelVmbXZhTVdOWGNrYlJmV3JJbVdQN0hhY05kMjN3Tnp2ZTdXaGo2b1djRW8zUTdQVjFRek5Lby9BdFUzb0s4LzdwWmFzR2YxUWo5UGlSYVp1WGxYOVVPNkxCNTl2SjdhZ09xUFFQVU5BQUFBQUFBQVFHMitBYVhiWkU3OS9hMXJBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRXNVbEVRVlJvZ2UyWlMyd1ZWUmpIZng4QkZCRWgxRnFnUEF4ZGFLeTFhQzJhSUlrR0pURWlSbDJnbUdyaXlsYzBFT01qdXRCRVY0cDFZV0kwYW9JclNVUWhvaTRVMHJpeEtCUWhZSW1pTVJGS0s2MVdXOUJlSDM4WFoyNTdPbmZ1N2R6ZXVha201NWZjM1BQOEhtZG16dmVkR1FnRUFvRkFJQkFJQkFLQlFDRldMY0dTYW9EbHdHS2dEcWdGWmdObkFlZEV3ODRBSThBdzBBLzBBY2VCNzh6czUycllsWW5Ea2hZQTF3R3R3QlZBTXpDdlFyRy9BQWVCQThBWFFJZVo5VllvYzNJT1N6S2NjN2NENjRCTEtqVWtKVWVBWGNDN1pyYXY2dG9rMVVwNlROSzNtbnEra2ZTb3BQT3I0ZWhDU2UyU3preXBpOG1jbHZTUzNHTlZzYU16SlQwaGFUZ0R3d1lsdFhpL3dReGsrZ3pKM1gwekordnN4WklPWkdqUUo1N3NwUm5LalhOWTBxWEYvSnBXeE5sYmdIM0Fpa210VmpKZmV1VXJNNVFicHhINFhOSzZwTTRDaHlXMUFkdHhNVE5MZklkYk01WWQ1MXpnZlVrYlM0NlNkSU9rWEpWdXRjV2VudDFWMGhFbkoybE5NV2RySmZXbEZGUmZZdEhxSkcyUTlMVTN2cWZFK05tU0dpU3RsOVRwelZsZllzNWN1WXZ6YVFwYmUrV3l2Z0loYjZSMDlsUXhRMkx5NWtnNkZNM1pVY2FjVTlHY1pTbkdUNU8wTFlYTnIrWG5XRFN4SHZnZVNMT2w3emF6NjZONXRjQnpVWHNPT0FhOGFXYkRVZit0d0h2QTAyYjJmTlIyRGRBV3pma0QyR05tT3owbmRnR3JnUGxtcHFpdEhaZC8vNFBMdGJlYTJmR29ieW53QTZXenhoRmd1Wm4xNUpVOG1QTHFTdElXejdnYkUvcTNldjFMb3JhMVh0dkxzZkcvK1piSlBkOGRYcjAyUWNlUjJKemVGSGJmRDJPNzlPb1NxeFBub0ZkT0Nsc0x2ZkxaZ0hBaExzL0syUGlCV0wycFRCMTVQUk94R3NZY2pnc294VVRHZk9hVlZ3TEg4a2M5U1RNUzVveUdLMGtOdUdOa2FoMlNMZ0xtcHJDN0htQjZpb0UrT2FDN2lERi9BeDhCN1Y3YjNZeVB2MDNBckpqTVRxOThWZlIveUd1N1BEWitQN0RacTk5VDJ1UlJCR01PRncwYk1ick5MT2ZWNzhEZEpTTkFqMzlvbDNRYnNCYlk1STJQMzg0QWU3M3kxY0Jmd0dHdjdWbGdDMjVCKzh6c3BLZWpFWGc0cGUwblJrdVNIa2p4MEkvYmtJb2hkK0I0U05MdjBaeFZYdDliTVhrNVNiTzgvcjN4RGFtSURwT0wyeWRUMmkxSjk4SFlGZDZCdXhVbkNrdWp6NWFrWnNadXdacm90d3k0RnZEUHFLM1JsUUQzVnNSbkFHaVRsSyt2d0tXMWVSMkxjQzhZQU02TDVDN0NiVUFYVG1Dcnp3aXdjMXlMcE5kVHJOSWFiL3dyWmF4dU9UenU2YmczSTVtdjVtWDZoNGNuY1MvUlN1SHZucGVWc2NMbDhKVlhic3BBWGkvd1ZMNHk2ckNaRFFCMzRYYmlKRTZZV2I5WEwzcm1yQkIvaDY1VVJ3N1k2RyttQmVtWXBEdUJ0eWtNV2FlQm8xRjVHb1hoSWdzRWRIbjFSdElsRlVuOENiU1oyVGEvTVRIL2xIUVQ4QTd1WFBsL1pBallZR1lmeHpzUzMzaVkyWWU0WjdRenFmOC96bjZnSmNuWkNaRTBYZElqa243TmFMZXNKc09TbnRGa1grTEZIRjhnNlVWbDgvWXlhNFlrdlNDcHJtSkhFeHl2a2JSWjB0RXBkZEhSTFdtVHBQbmwrRERwYjB1U1duQ2ZXbTdHN2FaVit6Q1hWNG5Mc1Q4QXRwdFoxd1RqRThucVkxb2RMcVZzeFlXclpseXFXUWtEdUVTbkMzZmk2akN6bnlxVVdkWFBwZk9BQm1BSjdveDdBVEFIbU1GWXVCdkd4Y3NoWEpiWEQveUkrMXc2V0MzYkFvRkFJQkFJQkFLQlFDQVE1MS95QmpsVkdlbnJaZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUVIMGxFUVZSb2dlM1pXNGhWVlJqQThaK2hWdHBGbWlidldVa1lwS2laOW1CQ1lSZWlLT29sQ2lyb3FSdDBJYXFISG5ySUxuUXhJb2lpQWg4aWVpZ01vaGN6eEplc0prdlRqRzRFU1ZwZU1wMHVNNVhUdzdmUHpKbzlaODdaWjg3WjVzUCt3Mkt2dmZkYTMvcSt2ZGI2MXJmV3BxS2lvcUtpb3FLaW9xS2lvbUlrNDBxVTNZV3pNQXRUMFkzSk9CYVRzakovb0ErOTJJdWZzUlBmWVg4WlNuWEs0R200R0V0eEhoWmlTcHN5ZjhVV2ZJYVBzUUc3MjVRNVpzWmhHWjdFZGd3Y29iUU5UK0Q4OGswTXV2RUF2aW5Kb0ZiUzE3Z2ZwNVpoNkhTc0ZuUHUvelkwbjM3SHMySmF0YzFFUENTY1NydUtIY0NTSkIzb3NPR0h4T2liT0Zaanp4RU9vMU1LclV0a245NWhZOU8wRGZOYk5mWWFuZW5WTkQyV3lMK3VSSU5ydlgxVlVXTnZ3ajhsS0hGdDBzYmpKUnM4Z0w5eFl6TmpMMFYvU1FyTVN0cFpmd1FNSHNoc1dUbWFzZDBpMGlraWFHYURqellWMStQTHBQeFBEY3BQeGx4Y2pVMUpuYXNiMURsWmRNNzdCWFRkTGFLK0VieFMwTmc5RFJSSk9SRmJzenByVzZpeko2c3pwMEQ1WS9CbUFaMWZxbFdvaFpZejhiMWlMbjA5THNueTNYZzB5L2ZqVzd3cUhCNHhiOS9HdzFpVlBidFErQW40Q3gvZ25VVCt1MWlPVXpKbGlSaGdFZzZMV0h0TmRpVTgvZzhhaDhsOUlxNGZIR2wzS2o0dm5ra0VYVkhuL1pyay9lenMyV1hKcytkeTVRL21sRnN2NHVZYTNYWGEySjZyczd1QTNyY1RRd0pXNUQ5SkE3WWsrVVYxM2s5UDhzZGxqZlVrejVibHl1L0wzUzlvc1kxYU84MVl3WkRCZVFHTmFLYk14aVMvVEF6ejJsWnZRcDA2bnlUNXVhSkhXMmxqbm5CaXpaZ0o0d3NVVE9uSGpsR1UrUmZ2aWZsVzQyYkREVnFBNDNNeU55WDVDN0xyMXVUWjRsejVUM0ZmY245TFk1VUhHVWh2M2xCcy9uNmVFN0pZeE1YemhaTkpxVVZUOXlUUGJxc2pjM255L25rUk1LUkRkRjdXeGlJalIrSzVpa2VFcjZjVjd5aFlLWFZJb3pFUmQrSFBPZ2E5bHBQWGIzaVBmMlNrUTZySE9MRk83eXFvOTRENDJJTkRlcTBZaXMyV3BYUnVMVFEwQkx1eU5BY1hHYjVIWFNwNmdqZ1ZTZGxuYUlraWV2R3Q1SDZHb1pqNHBFenVET0dBem1paWEwcWY0VXNmZUZuenI1U0dhUzhVS0QrVzlHRFN4cTBka3ZsaXZhL1FwZmw2bHZiY3hwSU12anhwWTNVSDVPMHkwcjhNc2xKMGY3MktPM05sOTVka2NPcVkxclVwcTgvSWFUU0NHNFNuekZmdUZRRkVEemFYWk96aHBJMGVRNDV2TEtsZmJHSUtjYVhZUkpkaDFKRklCMFhZMnhKbjRzT2pRUGxXVXcvT2J0WFlHdU54TjM0N0NneHBsbnJ4aURZTzhWS200V21kUCtmcVJEcUVwOFRCUThmcEVuSHNWMGVCb1R0d3J3WkxUcWRaSWs0aXZ4RGV0V3dERDR0TnhTcngvMnBNZE9wbjJsUVJVaTRWRzRxRlJqbEhhb0Y5SXBUZExIWmNHL0JMbXpKTC9WMDZSZXh2WjRzOTdtbml6R29DVHNqSzlJbzEvNUE0UU55TEg4WHYwZ01sNmxaUlVWRlJVVkZSVVZGUlVWRXhqUDhBNVlyY1UycHNZTllBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUYxVWxFUVZSb2dlMmEyNDhVUlJUR3Z3YlpSUkRsSXQ0Q3lFVkQxQ2lyaUJKWFJSQVRFUTJvaWZISkozZ1FYaFJ2RDJMa0Z2OEFqUTlHWHlSZXNodGd3U3ZHellySkdpNkJHS01MaTJMQ2dnRVJ4SVhGaFJWMmZqNTB0YW1wcWU2WjZabGhmT2d2cWFTbTZ6dW56dW1xcVQ1MXFxUU1HVEpreUpBaFE3MFFWRXNSTUZMU2s1SnVrVFJhMGxGSjNaSzJCa0hRVzZLTzBaSVdTSm91NlZwSnZaSzZKRzBNZ3VEdmF0bGFFWUFBV0E2Y3dvOEJZQXR3ZDRLTzJjQW5odXRETDdEc1l2b1ZDK0NOR0NOOStCU1lZc2xPQlQ0clEzNXRQWDBWOEpESHFIN2dNSEEreHVnK3dobXgzTlI5T0c5MDlIdmE1dFhUNFQyV0lUbmdSYURSdEEwSEhnVTJtN1ppeUFGdHdFSkxSeVB3c2lPL3ExN096bkFNZmorQjJ3UjhsK0JzSnpBalFYNjl3Nyt0Tmw0bHdJeW1qVmlERGY5Ry9GTzREN2loaUd5VEk3T2l1dDZVQU9Cank0RGpSYmhUZ0o2RUVlNEJKaGZSY2NMaWY1alc3aUZwQlNWTnN1by94cEdBcXlTMU8veWZKZTEzZExVRDR4UDZzL3VZRk1zcWdrb2NIbVBWVC9vSXdIQkpiWkttV28vM1NYckFsTDNXODJtUzJqQUxsZ2QySDZQTHR0YmdrclNDa29aYTlWeFVBUm9VUmx1M1NucGEwajJPM0RSSlIwejlINmV0V2RJbW9FWGhpSFlGUVJCeEJtUDZMZ3VWT054djFTY0FyMHVhSjJtMnBJWUV1WWFZZW9SSFRKR2tBV0NucEE1SkV5ek8yZkxOclJCQWU4SWlWR3Q4bmRidXNqY1B3QjJTVmtwYXBOTFhnRjJTamtrNmJSVkpHbVdWNnlUZFZhSytuS1ROa3RZRlFmQjlpVExsQVJnSHZBY01Kcno1WHlqOC9IUUFSVjhNTUFUNHhwRTlDQnhJNkc4UWVCY1lWMjFuN3dkK0t6TE5sZ0RYa3g5YzlBSVR5K2hua3BHSjBHZDBMaTNTOTJIZzNtbzUrd1J3enRQSmw4QUY2L2ViUUt2RGVUWkZmOHNkSGExR2Q0UUxoS0dvaTNQQTRrcWR2WS9DUGVwK1lJRnAzMjQ5UDA1K2tMK1RFcWF5cDg4aFJqWkN6dWlPc01Qd25xTHc3ek1BTktkMWRpVGhWTEd4QmJqTTRxejJ2T2tJQmRzNFlDS3dBVGh0U2hzdzNjT2JsNkIzdGNVYlI3aEcyRGdFakVqajhBdU9vbzNBVUljek04YW9iVEhPL3VuaG5zVHpQd2UyeGVpZTZmQ0dBVnNkenZOcEhMYW4xUkZnVEF4dm44ZW9PUjdlaGhnSEFGbzkvRGtlM3I0WUc4WURmMWk4N1drY3RuTlVieVh3WG5XTTZvamhuVTV3K0ZTTWpEdGRWeWJZOFhZeGZWTHBnVU5TZ0ZLTnpDZFYwRkdaUHZLbjlERml0bTVBdDJmRWZGTzZMV0dFV3p4ODM1VHVqckZoTFBDN3hVczFwVmM0blcwRmhqbWNXVEVPK0JhdDZZUUxsSXNUd0FRUFAyN1J1dFBoRGFYd1pUNlh4dUVSaEV1OGpRNnNNQTVZRTJNVXdGeVB6b21FZ2NRcFUxcGluSjJib05mK0xJMmlNTTNiQTF4YXRzTkdZVE9GZ1VjUDRVYy9BSFpZejkzQVl3ZnBBdzliYjQ3ODlFNFVlQ3drak4xdERBRHUvcnRzQXhiakR5MDdLUXd0V3h4T210QnltYVBERjFxNjMxMkFzOENpaXB5MWpHaW1jSHE3V0VydE5nOUxpdlRkUTZVajZ6Rm1MUEFPeWR2REE0UmJPaHVWYkE5N0tKeTJOZ2FOVGQ2Z3lJYzBDWUFaa2w2VDlMaktTd0Fja2RSbkZVbTYzQ3BYcTd3RVFKdWt0VUVRL0ZDaVRHV2d2aW1lOXJSMlY1S210Yk1NMnlXdGt2U3RwSUVLZExvWU1EcFhtVDRpaksxaUg2V0JjRjhjb2RWNjNrQjROUElNOExsbmRBWmk2aEcrTUxKTmhDbmZTSytkWFBCdUltcnQ4RjdMZ0EweG5FWUtzeE5kd0RXbWREbHRuY1FrNGdtM3B4RitxcTEzZmdQczAwRHZEc253eGdPL09vNTFVeGlESHlEaHFJWDhGYnl6Tmw0bGdQSU8weVpUM2NPMGo5TGFYY21pdGR1cVgwbkNjV2tRQkFjbHpaZDB4dE44UnRLRGh1TUZjTHZ5RjhrOVpkcGFPU2c4RUYrZndDM2xRTHdwUWY0RGgzL3hEOFNOSWJzdEkzTEFTK1JmZVhpTU1QRlg2cFdIellUWEpJWWJIWTNBS3c1dloxMmNOUWJOOXhqZVR4aDNYL0MwUVJnZkw2UDRwWlpEK0MrMUZHdzdMN2JUNnhKR3pjVVdyTVdKOEdiQXAyWElyNm1uci8vQmpGWnZqSkhuQ0RNU3N4TGtaeG1PYnhzS1liS2dLaGZUYW5IMThHYUZ0d09PS2p6aC95b0lndGdzb3FQakNra1BTN3BKNGRYRHZ4UmVQZHowdjdsNm1DRkRoZ3daTW1SSWpYOEJGTW9vMHM5K0JyZ0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRmdVbEVRVlJvZ2UyYTMyOFZSUlRIUHkzYVZoQ3RKZlZYcUZEUUVEVktGYXZFcWdqUlJFVURhbUo4OGdrZWJGOFVVQi9FQ0VqOEF6UStHSDJSK0NNbExhWCt4RWdRWTAwcDBSaWpwVzNFeElJcElvZ3R4TnBLZTY4UE02dG5aMmYyN3E5TGZkaHZNc25lM2U4NWM4N2QyWmx6emd6a3lKRWpSNDRjT1dZS0ZSbnFtZ004Q2x3UDFBTEhnRUZnRHpBYVVVY3RjRCt3QkxoQ3kvVURuY0NmR2RxYUNoVkFHekFHRkMxdEV1Z0diZ3ZSc1J4NFgzTnRPa2FCMXZLWUh4OHZZemZTMWo0QUdvWHNJdURER1BJdmxkMmJFcmlYb0ZIandGSGdyT1ZaRVRpREdoRnQrdHJHT2F0MWpGdWVyVG9ubmpud2pUQ2tBR3dDcXZXekd1QkJZTGQrVnVydEZZQXVZTFhRVVEwOGE4Z2ZMTE5QVGl6RmIvQmJJZHdtNEN2Y3p2Wm9mUzdzTVBnM3ByUTlFVFlaUm9RWkRIQU45aUY4QnJpNmhHeVRJYk1oc2RVcDhKNHc0RVFKYmlNd2pQc05Ed01MUytnNEtmanZKTFk2QmVRUTNSZkN1eFQ0Q2IrRFE2ZzFXdDQ3RE5TSDZQbGNjTDlNYW5SbFVrSGdFbkY5eXNHcFFVMUVpOFM5QWVCdTNRNkorNHMxdHhvN1pCKzFzU3dWT0MrcElEQkxYQmZFZFJVcTJyb0JlQnk0M1pCYkRJem82NytOWnkzQUxxQWQrQjRWWlhtY2FVZmZzWkRHNFhGeFBSOTRFYlZHTGtjNTdVS1Y0OXJEQTdxQmlyejZVSi9NZk1INUs2NnhXV0F2MFNPa3JOdG5TWTFPa2p6Y0RHd0cxaEI5RGpnSUhBZE9pd1l3VjdRcmdWc2o2aXVnQXBydHdMY1JaV0pqSHZBbTZsdHkvZk0vRWx4KzloSHRqNm5FUHhNWGdaOVJzN2VydjJuZ0RXMWJwcmdMK0NXazR5S3dEbGlBUDdnWUJScGk5SE9WbHBGQnlRSmdmWW0randKM3BQRFBoMGVBQ1Vzbm53QlQ0dmNyd0U2RDgyU0MvdG9NSFR1MWJ1LzNGQ29VTmUyWkFOWW02TStIT3dubXFFT29KQjJnVjl3L2dUL0k3eVBaT2wrcFpUMDlCYTNiKzMxQTh4NGorUGxNb3BhMlJKaURHaXBTWVRkd29lQnNKZmhQZTgyV3hqVUFIZnczY1hXaHFoc21Wb1hvM1NwNDgxQnpoSHgrQkpnZDAxY0FOaHFLT2drdStNc2NSdTIzNkdzQWZyZHdUMkgvenZjN2RDOHplT2VqeWtpUzgzUmtMd1hrc0JyQkgwcEtERmlNV21IaGRUZ2M4TDVURXlzc3ZBR0hEZlhBYjRMWEcrcVpBN0pHOVdvSTczbkRLRmNpY1JxM3cyTU9HWE80Ymc2eDQ3VUkraUpQS21FQlNoYVZ6MklHT2xMcmswUDZPTzdVelV6elhFTzZ5OEx6V3J1RmJ4dlNndzRiNm9CZkJTL1JrTjVnZExZSE5VRklORHNjc0UxYVMxQVRsTWs5aVQ4eDhPQ2F0RzR4ZUxNSS9wbFBSZlpTWURacWlqZS9UeG5HYlhNWVZRUldXblEyb0Nhb01kM2FzVHU3TWtTdlhKYm1FaXp6RGdNWHhQVDFYN1FRRER5R1VZdCtCU29JOE82YmdjY0JrZ2NlVW04QmYzbkhDenhXbzJKM2Fkc2t3Znc3TnRaaUR5MTdDSWFXN1FZblNXalphdWl3aFpibXVsdEU1Y2hyRXZSblJRdkI0VzIyOVpRdmVWaFhvdTloTW5pekp1cUExd2xQRHcralVqcnp1MCthSGc0VEhMYXlUV3ViWEVGUkFFblcwS1hBQzhERHhDc0FqS0RlbU5jQUxoTHRNdUlWQUxwUWUwM2ZSWlJKalprczhleE5hblNhTXExY25ucUJMY0FYcUpreUsweHFuVnZ3QnhOMUdmWVJHVVA0WjFJUFZhaXRrU2VBandpK25Vbkh0ZGMrMXJKTitLdWFzcmpnU2lMS2lrUENnQTRIcDVwZ2RhSWZ1RnkzZnVOWkQrNUNmS2ZnL1pDSkJ6RVJkYXVsbnVCV3l5RHB0bHA2VXRxZUNIRTIweGFTN1diYXU0bXRUZ0d6SWxMTzdkS2JESm1OaWExT0FYTkRmRWNJTjhxR2VGT0kvTnNHZjBZMnhBRytGa1lVZ0dmd0gzbDRDRlg0aTNya1lUZnFtRVNOMWxFTlBHZncrc3JzVXlqdUlXajRPQ3J1bnJJODg0WndLNlVQdFJ6QmZxakZsbmFlVTJ3bmVvVFVqWDl5YWtRZFpZb3F2NjNzM2tSRUcvNHNSN1lKVk56YkhDTGZyRG0yTkxTSUtoWmtjakN0SEVjUHIwTmxMOGRRd2NtbmhGUVJEVndNM0FkY2l6cDYrQWNxT05uRi8ram9ZWTRjT1hMa3lKRWpHZjRCYXBaTlBnMTNsa0lBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUdhVWxFUVZSNG5PMmJhNmdXUlJ6R24vRjRQYVNabVZLUW1oNDEwcnltWmtwYTVDMkpJakJUS0pHZ1QycFFVSmFsSkFWZTBVd0NLN0xvN2lXTExwSUtYbzRpYW1hU1lacjNETXBMNEszeWNzNnZEenZIczg2Nys3Njc3KzRlUC9nK1g4N3U3TXp6UERPelozYm1QL05LSlpSUVFna2xYTHN3ZFNFQ2RKWTBXRklQU1owa3RaWFVRdEoxTnN0WlNYOUxPaXhwajZTZGt0WWFZL2JXaGI5TUFIUUQ1Z0svVXp5T0FIT0FibGU3UHBFQUdHQWtzQ2xCcGNPd0VYZ1FxSk8zTmphQTNzQ1dEQ3J1WWpQUUt5M2ZpVnNUYUN4cGhxUUprc3BDc3AyVlZDbHBnNlJka242VGRNeW1TOTVZMEZwU1IwbGRKQTJTTkZDMVk0U0xLa2x2U3Bwc2pEbWZ0QTVGQTZnQWZnenBxV3BnSlRES05sSmM3c2JBYU10UkhhS3hIZWlRUmQyaUdPd1BuQXd4dGh6b25xSldEMkJGaU5ZSm9GOWFXbEVORFFYT0JwalpCd3pKVUhjNHNEOUE5MnlXdXE2SnZpR1ZYdzQwcndQOXBzQ25BZnJuZ0h1eUZxOEllZTFmeVZRNDJNdTBBQi9IZ2ZaWkNUWW1lTUNia0lsZ05FOFRBL3hzQXhwbElUWS9RT3psMUlYaSt3cDZFK2FrTGRJYnVPU0lmSjZxU0FJQUh6dmVMZ0U5MHlJMzVNN3c5Z0hOVWhGSUFjRDF3QUhINDhhMHlFY0d2R0pEVXlFUDE2d1BqQU8rQlZZRDY0QXBRSk04WlVZRStCeVdoaGwzWWJNOE1XbCt2WTdBRHFBU2FHZlRQckxhU3dxVS9kTHh1aUdwbWU0T1lUVXB6dkFDOURyaGZjcitBRzZ3YVFZNFpmVlBGeWpmazl4cGM5Y2todVk2Wk44VlRWWllxeG0xczd4bm5XZnJiZnJDQ0R6Zk81NW5KVEhsQmpOR0ZVMVdXT3NObjA0YjUxa1owQ29peitPTzUwUEZHdXJzRUoyaCtGWGRSR0FwOEEzd0dsRGg1TG1UMnMvc3owVVpydVZxZ2pjdDlxTWlMSCs5UEZ6M09mZVZ4cGovWXBxcGtMUmIwZ0o1c1lMRjhtSi9TNEVaUUFPYmRaSnFZd21yZk9YN0FzdUE0VkUxalRIL1NuSS9nZmZIOFYwai9wYlRpaS9FTE44QStOV1czUStVK1o2VkFWT0JOVUFicDhmRyt2SzlaOVBXeE5SKzBmRWVPbmJrZXdNNk8vZS94REVoTDZwVHczSGFHRk5WODhBWVUyV01tUzdwWFVuYkpKWDd5djNrdTE1cC8yNktxZTE2ZGV0U0dNQkJweFU3eFN6L2hGTitmRWkrTmI0OFZjQ2p3RVBBODhCZVlBRlFQNmIyN1k3Mi9yQzgrWWliT3ZjbjQ1aVFGL3Z6WXhGdzFCaXoybWUwaWFRQnZqd0g1Y1VGNjhuYkk3alhHUE5uVEYxSk91SGN4NSsyQStlZFZteFlCTWRhaCtNa2NJdnYrVURuK2R1eGpRYnJObko0UXdmdmZHTkFNY0wxZ1NlQlBqWnBuQ1IvRDdhUTVGOUMzK1ZRN0V6VFR5TGdCUnY5dURGQ21RazI3M25zWkFadmVucmF4N1BibC85RFIyTmdTdDViT3J6SHcvTG1ld1BjZVhmTENOcXQ3ZCtHa3BwSWtqRm1oNlRwSWJ5OWZkY1hKRzJQb0JFRk56bjNwOEl5NW11QWc4NTlsSy9BRjVLcUpXMHh4dXp4cFZmNXJoZExYbkJUVjM2ZXR0bEpUQnB3dmJwMXVZeDhEYkRIdWU5U1NOWDI5bE9TMmdKUDQ2M3VSa3Q2eVdaWktHbVJ2ZTdsNkNkYnV1YjM2dGJsTXZJMWdEc2dEWXFpYkl4NVg5NDJlTG1rcVpMR1MvcEUwZ0JqekVSakREWnJYNmRvbWl2TndjNTkvTUhWOXA0ZlJTMkc4dkF2OVhFZkpLVmRYNkNjR0l1aFFtUkhIS0xSS1prc2M3NHl6NlhCYTduSE9KNkxXdzVic2prTzJjckNwU0x4M3UzalBBcUU3UUlYdzczSzhUd3pDVmszaDZ3YTZCR2pmQXZnRWVCbUozMmVqL094b2czbTZ2VW16WkNZSmQzb0VLNklXSzZWN1YyQXd6VzliQnZsakUxL0o1RzVYTTJ2SGEvSnZ5eDR4MUpjRkF3M2MyVm9xaHE0MWFaL1lOT1dVQnNRU2NObk51Rjd2S2pzWm9kNFAzQjlnWEozQUJkdC9zbDRBWkxaZUtHdmVmZ0NKQ2w0YkU3dThyMHlMWDRCdlNoaWF3eDRHUGdCYjEyL0MxaE1pdWQ3ZkRyTEhHOFhTVHQ4ejVVRFZ3Mm1wU3BTbks5WEEzek56a0tva2UxTkZ4TlRGNHZ1YVZLQW42MFVFYnVJS3RpQjNHWHlWWGtUUW5yK0dIQmIxc0o5cVAyTStiRUN1NTJWc1g0ejRMTUEvWE5BLzZ6MWEwd01JZmljMEFGZ1JJYTZJOGtkN2JFZDhrQld1bUZtK3VGdFpBYmhLOUk2b0tETE16eDNrdU4vN2QyVlpkMEFhSTkzSmljSTFYZ2JsV1BJczYrZmg3c2NHRXZ1M042UHJTVDhuMC9qcUd3alNhOUxla2JoWWZaLzVHMVhyWmUzYWJGWDBsL0tQU3JiU1Y0d1k3QzhjSGw1RHBPSFM1TG1TNXBpakxtUXRBNnBBTzgwcDd0dXlBS1ZaSGhHSVRHQVljQ0dEQ3ErZ1l5UDVxUUtvQ3N3Q3ppVW9OS0hnSmtrWGRMbVFWMzlaS1pDM25aN3pVOW0yaW4zSnpNbjVXMkg3WlcwUTlJNlk4eSt1dkJYUWdrbGxGREN0WXIvQVZ6ZGtyaW1MNTlXQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUY3a2xFUVZSNG5PMmJhNGhWVlJUSGYrTnJ4aUZma3hrRmxlazBZMlcrSnJXSHBFVnFaV0VFWmdZbEV2UkovVkJRWmc4cCtsQ3BhQ0pCRDdMb25acEZwV1NDNWlSaFZpWVpwcWd6bVVHa0UvZ1l5dFN4RDJ2ZnVmdXM4N2puc2MrTjZQN2hjTzgrWisvMS8rOXp6dDE3cmJYM2hRb3FxS0NDQ3Y2L3FDb1RUeU13QVJnQk5BQVhBWFhBV2ViNmNlQVA0R2RnTjdBRDJBanNLWk8rWERBTVdBejhBcHhKZVJ3QUZobGIvd2xVQVZPQUxhVHZkTmp4SlhBTDVYdHJFNk1KMklyN2p1dmpLMkJVbWZvVUN6WEFVdUFVNGFLUEFXdUJlY0N0eUpqUUQraHVqbjdBRU9BMlUyZWRhUk5tN3hTd0JLZ3VRLzhpVVE5OFI3RElEcVFqMDVDYmxCUTF3SFJqb3lPRTQxdGdjS1llWk1EVlFGdUlzTlhBY0lkY0k0QTFJVnlIZ2JFT3VXSmhFakoxYVRGN2dZazU4dDRFN0F2Z1BaNHpyd2RqQ083OGFxQnZHZmg3QWU4RThMY0QxK1JOWGsvd2EvOTQzc1FCV0JDZzR4QXdLQy9DR29JSHZObDVFY2JBbkFBOTI4aHBkbGdhUVBaWUhrUUpFZlFtTEhKTjBvUi9ubi9QTlVrR3ZJWGZUeGpweW5nVmZnOXZMOURiRllFRDlBSDI0M2VkbldBSy9sZHNraXZqSWVnR3pBUStCVDRITmdHUEFqMGoydHlNWCtka0YySjBZTFBhaGRFSVhBSnNCNXFCZ2ViY200YjcvUkp0UDhTcmRYTldNY09Wd1E3Y2VuZ2FEY2hVOWlzU0g0RDhCSThZL3FNbDJvL0U3ellQelNKb3NUSzJOb3V4RXVoTjBjdDdRRjM3d3B4ZkhzUE9aM2cxUDVkRmxFNW1UTXRpckFTZXQzZ3VWTmU2QWdOaTJya0xyK2JXdElJYWxhRmpwSS9xNWdBcmdVK0FweEdQMHNZVkZLZlpIMUxxTGFBbjRoYmIyalZmSjdwRUdMcGVsWnVCdnhLS3FRZDJBY3VRcDdnQ3lmMnRCSjVCY2dFQWM4MTFnUFZXK3pIQUtpUUlpb3MvOFUrQk55UlNiZkFDM3J2NGNNTDIzWUdmVE50OUZEdUkrZjRFc0FGNTNlMG5kcmRWNzFWemJrTkM3a2VVOXRDeEkrb05hRlRsSHhPS0dHL1pPQXFjdHE2ZEJwNENYa0Y4OTFycjJ2Zlc5M1htYzB0Q2JxMVY5eVVXV3ZEZXhZYUU3ZTlSN1dlRjFOdGcxVGtOM0lHa3hoNUMwdUxMRU1jb0NZWW83bjFoRmFNTTkxTGx0b1FpZHFyeWk4QkJ4TE1yb0Nkd3JWVnVRUnloTHNnYXdYWEFid2w1UWJKRU5sSzU3U2Z3M3NVZUtXeHNWRGJhZ1BPdDYrUFU5WmZTQ0ExQXRiSWJPbmhIalFGcDBBMjRGeGh0eWpQeFBzRTZ2Q0gwbGFyOURzZDZNdUV3M3J0NGRvdzJzMDNkRXhTZG1aSElJRml3czh1cS80YmlHT2RDT05CZjJUMFVWakhxRGRCK2QvOFl4T2Vheng0VUk3ZnR5SWdmWkxmSit2NDNrdVoyZ1hOVStVaFl4YWdiMEtMS2NXYUJENUJnWkN1eXlGbUFQUVd1TUorOThFNVAyeEFueGdXMFZ0MlhUa1RkZ04ycWZIa000dTNBZmNqcTcvMUd5SFJndnJtK0hKa05RSmEzYlA3TW9hc0ZyVlgzcFJOUk4wQVBTT05qa3IrR0xHVFVJdDdlTE9CdFpMb3JKREZCM0Z3YkxpUE5DYXFjYW5CdHdFMHdGSWFWbHUwVzNLMzYxcElnR0NxRkE4clFkQWNDUVdJQmU1WjUwSkZkZ0JsNE5hY09oMEhTeTdheGRkSFZZK01xeStaQmlqdEZYR0E5WHMzUFpqRTJUQm5yUUg3ZmNWRUgzQTZjcDg0dnNXemVtVVdnUWhPT1UySWdzYlZ0Y0UzTWRnT1FwM3NHOGVzTFQ3bU80dHIveTFuRktYeU00NlFveUxhVU5PbG1PelhWQVZ4Z3pyOU9NY1BiUGJocEt1U1d2cTlDdHFYbzhMSlBpWGFYQVNkTi9YbElaeGRTM04zUk5ieHBZdlRGSDc0M083VFBLTkl0alUwRnZrSGkrcDJJRjVqSC9wNVZTdHRKY2tqZjJ3Tlg0VmpnbWlRRm5zU3ZhMkVlUk5YSTA5UmtjL0lnaTRtNUFYcStKbDN1SWhZRzR3K1QvNjAzSWVqSi93NWNuRGZ4YUlLM3NLMmh1SnlWSjNvRDd3Ynd0eU1idDhxQ2lRVHZFOXFQck5MbWhTbjRSL3RDbkhKampyeUJHSXRrV3JTWU04QkhPTnlnZ0hoNDJzbXhYM3NkV1pZTmc1QkVScEN3RG1TaGNnYlI2L3BocUVVV1NiUnZyd2U4M0gvenBWQ05CRTBGcHlmb2FFZHV4bnpFTjdnVWNZbDdtS1BPbkp0cTZxekhIOUxxZVg0aE9ZNzJhVEFDZjl5UXg5Rk12bnNVTW1NeUVvUzQ3dmhtOHQrYTR4UkRrYzBKcmFUdmRDc1N6MmNPYWNOUXJqOGYxQ1BMN1lXL3pBekUvNWVaTmlSczNvTWtWemNodTlFcXFLQ0NDaXFvSUNmOEEyYjhzT2I3TWlrNkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy92aWV3MS1hN2JjMGYxNWQzMzg5YzJjNmE3YzFmZGM3NmRjNzc4OC5qcGVnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3ZpZXcyLWRlYzQyNWUxZThkNGNkN2NkOTQ3MzUyZDc3YzA5NzZlLmpwZWdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFESUFBQUF5Q0FZQUFBQWVQNGl4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRmZFbEVRVlJvZ2UyYVhZaFZWUlRILzF1ZFB0U3hVZFFzTGI4MVJVM1F2bkNFcktEQU1TR3lxSWNlS2lvb1NIb3dqVUNoaHlSb1FKU2dYZ0tGc3VraFVFR29Ya3ByZFBxUXlnL0lOQzNHck1tUlVpY2JaK2JYdzFuSHMrZk91ZmVlZmViZW1ZSVdYT2FjdmRkZWEvMzMzbXZ0ZGRZZTZYL0tSc0F5WU5sZzI1R2JnTVhBeHlUMDJYOEtFREFEMkE3MEFPZUFzMEM3L1FYWURTd2ViRHVMRWpBVzJBaGNCRHFCTjRFSlFMUDlhb0VYZ1Q4TTBFZkF3c0cyK3pJQkl6d0RlNEFtWUliWDN3dzBlKzh4NEE2ZzIvaG5EWTcxa1VFMXdGUEFMOTRNTDByaDZ3WEVhNThFYkxJVmpBRk5HeGpySXdNY3NBbzRhZ0MrQXhwSzhLY0M4Zm9uMnphOEJQeHR6OWRWeC9wRTZUM0FWd2JnaEszSWtESmpTZ0x4K0c0Q3R0cnFYTERWR2w4NTY5VW5sTGFaVDF5WmNXd21JQjcvUE50bWNkVGJDTlRsdDE2OWxyMGJPRzlDUndYS0NBTGlqYnNOMkdtVGR3YllBTlNHQ3JrVzJHSmh0QlBZSExyTXdCRGdNYUl6cE4yZVMyN0RJbkx1QWo0M1FLZUE1NEFyc2d4ODJaYTBCM2dYbUo1RCtRcmdXMVArdmYyd3RoV2g4a3htQS9DMTU1OFBsbUllVDBLZkFwTUNsZFVEZTIxOEsvQU1VWml1c2VkVzY5c0wxQWZLZGpaQlowekdzVkxNRTR6cEI2Q0w2TkI2RmJpbWpKTDUzbjQrQzZ3RmhxZndEYmUrT0YzWkNjelBBS0lCK01MRy9BcWNCSDdNQW1RdFVUaHNzdmN6UkpIcXFnTCtHNGlDUVJmSkdWRFdsNERSOUQzZCsyeGhvbkMvMzJ4b0kzTDRVY0FIbVlGNGJYZDQyK1VrMGRreDNnejV5ek5rU2prQUtmb21raHlHZm42V0NzQWJGdzdFMmgzd3NHMDViQVY2Z1BlQjJhRUFVdlRPTmxrOUJncmdOUEJDa1MzYUIwaW1jT2ljd3puM25xUzVrdDZSTkZTU2sxUW5LU3kycDFPdHlYS1Noa2xxa2pUTk9kZm9uT3ZJSWlBb3Jqdm5PaVVkdGRkR1NiZExhaUZuQmd2TUFwb2t0WmlzUnVzNmtoVkFUTUVIbEtTZkpQMHVhWjJrNlpLMlNGb3A2WkR0OFlubEJNUytJZW1RamQxaXNsN0pZVStxZ2xRZlNlR3JLWGlmQ213alNmZzJBcU5UeHNYUjZvTHhiZ09tZXYxMXBuOURHZjM1bkwyQXB4YTR0VWpmQW1DWHlXakh6aE9TODZQZCtuWUJDMUxHRHlpUU5SWlora1FUajJjcHZVOTQvMFJmV21KY2JpQjVmR1M0b3NoU05IRnp6dTF4enRVcjJ2ODE5bHZwbkt0M3p1M0pvYk1zRGF1RzBKaWNjenV3bk1nNXQ2T2F1dktzU0lla0xrbWRGYmFsWDVRSHlCdVNsb1RHK1dwVE1CRG4zSGxKQjZwZ1M3OG96eGZiNDVKT2tlVXJiUUFwejlhNlVkSllSZEhyWDBOQlFHd1ZadHByMlEraUFMbUZkc3dwZFU2bFVTWWdXQm92NmJDa1J5VjFTL3FrVW1tOHBCUEFTNUxPU2RvcjZTRkp4NHVsOFdsVUZnaHdwNlQ5a3JZclNyTWZrVFJSMG1aSjkwczZDTHlWSlZuMFpEcWk3M3RuVFVjVUphRjF6cm1sa2hvVUphZXZod0tLRmZpZnV2Tzh2S2tOV0YzbzRNQVVrdXBnQi9BYU1LYUFwMDlkQzFoa2NwKzA5d1hBQWVENkFyN2xRSXZ4WHY3UUNzbTErbHQ4V0JmUElNbTF3bHhndGJVTkJRNEN4elBNYnhxZ3NzVUh2eHowSVpVcEIzMXBRSjYxOXZ1TTl4WmdUYUQ4NVNUVi8rTGxJR05lYnl2UkNUU1NvKzVLN3dJZEJtU2t6ZWIyVUhrbWN5RkovYmtWV0pWbDBHU1NVdEJ2d05QQTBFREZmc20wMmRybUVIZ0hRblNQOGpaSi9YazlNQ0pFUmx4STNtZUFEZ1AzQmdsUXY0clk4VTNZbndaaUsvMjVOL0ZtOXJRQjJoa3lxNkZBUEgzK1Rkak4rYXhQVnpDU3FGQjJrYWlxdUlrTVZ3d2hRSWdLYzk5NE82RG9UVmkvQ1pqcCtjOHB5dHhhWlFGQ0ZKcmpNNnZWWkFiNVpHNEM3aWE2UDRRb3hDNHB3bGNVQ0VuSnRJdWsrbEtKZ2w4WUFjTnM5dHBJcnFZbkYvQ2tuZXlWZGVSS0VUREdmT2FTemV3RzRHcnJ1d3lrNm81Y0tTSzZpdGh0UnY1c1J1OHpNQVBueUpVaTRBSGdtQm5kYlQ0UU8vSVRBK2JJbFNDaTY3Ym5pZjYxWS9BY3VWSUVqQVBHVlZ2UFAvYW1uWnQ0SCtkc0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURJQUFBQXlDQVlBQUFBZVA0aXhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFFOTBsRVFWUm9nZTNhV2FoV1ZSUUg4TjgxcjVWcG1kWE4wdEpHUzVyQXlzS0VCcUhBUklnbWV1aWhvb0tDb29jbUFuMUxlaENzQ09vbFVDaXpoMENGYUhncHJXeW1BWU5HSmE0TjRvMG15K3YxZmoyc2ZUaGZuOTl3enJuZnZTYjBoOE4zaHJXSC85NXJyYjMyMmgvL296QXVTOWNCaS9QeE9tcnBlc3NCUnVoVXJNRXdmc2N2R0VpL05id3NTUDVuY1RTVzQyOE00bWxNd3p2cG1vd0g4S3NnOUJyTzJ5ODliWUhENUIwY3hsb3hLeGt5SWhreXdydXdOOG1mUGlZOWJZRmUzSTRmNUNNOHQ0bGNJNUVNTTdCU3pHQkc2T1JSNldrTDlPQTZmQ1VJZklhcjI4aTNJcEpocGxERFBkaWQ3by9yU2svYllDRStGQVMyaWhrWjE2Rk1KeUlaenNBcU1UdC9pdG5xcTl6VEZxaDNwVHVFVFJ4Y3NHeFJJaG5PRW1xV2ViM2xtRktpZkZOazA3NFhmNlJLRHk5WlIxa2lHZVpodlJpOG5WZ21QRjhwSElzbmhSc2R4QlBLVC9NNDNDeldrSUYwMzBrTm0rRnl2QzBJYmNmZG1GQ2s0Q05pU29meFBFNnAwUGhpZkpvYS96SmR0ZlJ1Y1lYNkNJZnlrZHcrcjIwbjNDY1BLZDRVTHJJTUxzR21WTDRmZHdvMzNadnUrOU8zVFVtMkRIckVJT3hNZFh6VFRuaGFFdm9hUTJMUmVoUkhkR2prYkxrKy80SUhNYkdKM01UMExRdFgxcWV5blhBMTNrOWxmc0kyZkZlRXlJUENIYTZWRzlzRE9LUkIvZ1RoRElia2EwQVJXenJTdnF0N014VmVpSGZsM25LWmNEWXZsU0dTNFdLNXVtd1RhMGRmNnNoZmRSMlpWWUJBSTZiTEY4UDYrS3dWZ1F5VmlCRDZlWU5RdVpxWWdXRzhpTmtWQ0RSaWRxcHJXSkNxNFVmY3A3bUs3a09rcUR1czRRWE13WE00U0pDYm9vSnZiNExKcWE0ZWpKZkhYU3VFK25WRVdiOCtLR0lzcVpHTDhKN3FFZXpwcWV4N3FhNFY2ZjBYQ2hKb2hWYXFWWTliaE41T0VMYnl1REQwUFVMSHB4ZG9wOTQyZHFjNitzU3MxSVJOdEVObEcybEViOFB6U1ZndEQvaVdDOC9VaU14Yi9abGtWNmV5R2NhVXlHUmMyT0xiT2RpUTZoaVFyeWZaK2pHUXZtMUlzbzBZVXlMM0M1Vm81azB5TFBEdkZiNStSVi9RcGx4bElsV0N1SW5DczdRTDNEYUtFR1NKUEVSWmt0NXRyTkJtUjR3ZmpVcnJzRTRlRTYwYnpZYXF6TWd1c1NBT2Rya3ZJMElWSWs5aHZoSDYrVzZqQ3BFLzhIRzNPekpTVkNGeWk5aXBGZHFsalJXcUVEbFJKTm5hdWQ4eFIxa2lFM0JhdWkreUlhcmFqek9WSEtpaVJMSXdmZ3R1RXVIRkc3b1h4bS9Gd3lKWHNBblg0MXV0dy9pT2FMYXlYeXFpMDJ5ZmZLUElzcXlVQjR2UGFCMHNOa3NIOVlqRnNTYzl2NUpJSEpXZUY5VzEyV3hmVWlwRU9Vc2VOKzNBdmZZMThGbnk3T0F1UElhcEJZak1UZlhlbHA3UEVaN3crQWE1Vm9RS0V4bHA4dUVoK1FobVJPYUl3U0EyWnA4TDlTbUNSa0lka3cvMTZhQlhkU2NkOUlFZ2NsZDZmMVdTdlVBRW9HV3dTSjc5YjVzT2dxVmlKZ2JGanExSzNyVStRVmNUUkNhSjBWeFRvVDdpVUNqTFAvZUxFNEdPbUNsUEJmMk1PNFE2bEVGOXlqU3prVE9WUHdPWmdXZmwrZWVsNG5DcEZPWmhzeUMwQlZlV3JVRDFKSFoyRXZhYklMSEtDTTlOc3BIOVVaNGRMRE9xWllsazdkV2ZoSjFib254SFRCSTd0Ny9GK3JGU3NTT0dNa1FXNGhPNUJyUTdDUnN4VHBQYnozYWRUNjJLRUpralg3UDZVNTFsYmJJeXJoRG5oelhoWXVlM2tHdEhKRXNMRGNtekw5MUkrSlhHZURGNk8rUkgwek1iWkpvUjZib2hkd3RUaGMzc0VTTzdESWVtYi9WRVJ0MlF1NFV6eEY4MGF2aGVkSHF6SURLbWh0d3RYQ05DaUpwUW5TRzVJZDlxREEyNUcrakZQZUt2SGZ2VmtMdUZZOUkxcXZnSExFT1dBUkkwUVd3QUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnXHJcblxyXG5sZXQgc3RvcmVcclxuXHJcbmNvbnN0IGV4YW1wbGVJbml0aWFsU3RhdGUgPSB7XHJcbiAgbW9kZTonZGF5JyxcclxuICBsYW5nOidlbidcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gIERBWTogJ0RBWScsXHJcbiAgTklHSFQ6ICdOSUdIVCcsXHJcbiAgRU46ICdFTicsXHJcbiAgWkhIQU5UOiAnWkhIQU5UJyxcclxuICBSRVNFVDogJ1JFU0VUJ1xyXG59XHJcblxyXG4vLyBSRURVQ0VSU1xyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuREFZOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vZGU6ICdkYXknXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTklHSFQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ25pZ2h0J1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVOOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxhbmc6ICdlbidcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5aSEhBTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGFuZzogJ3poSGFudCdcclxuICAgICAgfSBcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVTRVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheScsXHJcbiAgICAgICAgbGFuZzogJ2VuJ1xyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbi8vIEFDVElPTlNcclxuZXhwb3J0IGNvbnN0IHRvRGF5ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkRBWSB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b05pZ2h0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLk5JR0hUIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvRW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuRU4gfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9aaEhhbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuWkhIQU5UIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0Q291bnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUkVTRVQgfVxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gIGtleTogJ3ByaW1hcnknLFxyXG4gIHN0b3JhZ2UsXHJcbiAgd2hpdGVsaXN0OiBbJ21vZGUnLCAnbGFuZyddLCAvLyBwbGFjZSB0byBzZWxlY3Qgd2hpY2ggc3RhdGUgeW91IHdhbnQgdG8gcGVyc2lzdFxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcilcclxuXHJcbmZ1bmN0aW9uIG1ha2VTdG9yZShpbml0aWFsU3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcGVyc2lzdGVkUmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IG1ha2VTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgIF9zdG9yZSA9IG1ha2VTdG9yZSh7XHJcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4gICAgfSlcclxuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcblxyXG4gIHJldHVybiBfc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuXHJcblxyXG4vLyBpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuLy8gaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuXHJcbi8vIGxldCBzdG9yZVxyXG5cclxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4vLyAgICAgbW9kZTonZGF5J1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vICAgICBjYXNlICdEQVknOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgIG1vZGU6ICdkYXknLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBjYXNlICdOSUdIVCc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgbW9kZTogJ25pZ2h0JyxcclxuLy8gICAgICAgfVxyXG4vLyAgICAgY2FzZSAnUkVTRVQnOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICByZXR1cm4gc3RhdGVcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xyXG4vLyAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuLy8gICAgIHJlZHVjZXIsXHJcbi8vICAgICBwcmVsb2FkZWRTdGF0ZSxcclxuLy8gICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcbi8vICAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcbi8vICAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbi8vICAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuLy8gICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuLy8gICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XHJcbi8vICAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbi8vICAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4vLyAgICAgfSlcclxuLy8gICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcbi8vICAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4vLyAgIH1cclxuXHJcbi8vICAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuLy8gICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuLy8gICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxyXG4vLyAgIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcblxyXG4vLyAgIHJldHVybiBfc3RvcmVcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4vLyAgIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbi8vICAgcmV0dXJuIHN0b3JlXHJcbi8vIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRJb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0JyaWdodG5lc3MyT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SYWRpb0J1dHRvblVuY2hlY2tlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9UcmFuc2xhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1diU3VubnlPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10eXBld3JpdGluZy1hbmltYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==