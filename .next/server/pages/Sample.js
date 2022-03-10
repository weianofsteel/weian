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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JMhr");


/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JMhr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "@material-ui/icons/Translate"
var Translate_ = __webpack_require__("KJeo");
var Translate_default = /*#__PURE__*/__webpack_require__.n(Translate_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__("OdWO");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: ./component/Sample.js











const useStyles = Object(styles_["makeStyles"])({
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
  formControl: {// width:'20rem',
    // fontSize:'1.6rem'
  }
});

const Sample = ({
  t
}) => {
  const classes = useStyles();
  const [language, setLanguage] = external_react_default.a.useState('en');
  const [open, setOpen] = external_react_default.a.useState(false); // const handleLanguage = () => {
  //     i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  // }

  const handleChange = event => {
    setLanguage(event.target.value);
    i18n["i18n"].changeLanguage(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
      container: true,
      style: {
        marginTop: '5rem',
        fontSize: '2rem'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
        item: true,
        xs: 3
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
        item: true,
        xs: 3,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FormControl_default.a, {
          className: classes.formControl,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Translate_default.a, {}), "\xA0language/\u8A9E\u8A00"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Select_default.a, {
            labelId: "demo-controlled-open-select-label",
            id: "demo-controlled-open-select",
            open: open,
            onClose: handleClose,
            onOpen: handleOpen,
            value: language,
            onChange: handleChange,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem_default.a, {
              value: 'en',
              children: "English"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem_default.a, {
              value: 'zhHant',
              children: "\u4E2D\u6587"
            })]
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
        item: true,
        xs: 4,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          style: {
            fontSize: '1.5rem'
          },
          children: t('title')
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          style: {
            fontSize: '1.5rem'
          },
          children: t('greeting')
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
      container: true,
      style: {
        marginTop: '1rem'
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
        item: true,
        xs: 5
      })
    })]
  });
};

/* harmony default export */ var component_Sample = (Object(i18n["withTranslation"])('sample')(Sample));
// CONCATENATED MODULE: ./pages/Sample/index.js





const SamplePage = ({
  t
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(component_Sample, {});
};

SamplePage.getInitialProps = async () => ({
  namespacesRequired: ['sample']
});

/* harmony default export */ var pages_Sample = __webpack_exports__["default"] = (Object(i18n["withTranslation"])('sample')(SamplePage));

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "KJeo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Translate");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "k7Sn":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default;

const localeSubpaths = __webpack_require__("KNus").default().publicRuntimeConfig;

const path = __webpack_require__("oyvS");

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zhHant'],
  localeSubpaths: {
    zhHant: 'cn'
  },
  localePath: path.resolve('./public/static/locales')
}); // export const useTranslation = nextI18Next.useTranslation;

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });