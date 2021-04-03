webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, toDay, toNight, toEn, toZhHant, resetCount, initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDay", function() { return toDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNight", function() { return toNight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEn", function() { return toEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toZhHant", function() { return toZhHant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCount", function() { return resetCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__);


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var store;
var exampleInitialState = {
  mode: 'day',
  lang: 'en'
};
var actionTypes = {
  DAY: 'DAY',
  NIGHT: 'NIGHT',
  EN: 'EN',
  ZHHANT: 'ZHHANT',
  RESET: 'RESET'
}; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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

var toDay = function toDay() {
  return {
    type: actionTypes.DAY
  };
};
var toNight = function toNight() {
  return {
    type: actionTypes.NIGHT
  };
};
var toEn = function toEn() {
  return {
    type: actionTypes.EN
  };
};
var toZhHant = function toZhHant() {
  return {
    type: actionTypes.ZHHANT
  };
};
var resetCount = function resetCount() {
  return {
    type: actionTypes.RESET
  };
};
var persistConfig = {
  key: 'primary',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default.a,
  whitelist: ['mode', 'lang'] // place to select which state you want to persist

};
var persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_4__["persistReducer"])(persistConfig, reducer);

function makeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(persistedReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])()));
}

var initializeStore = function initializeStore(preloadedState) {
  var _store2;

  var _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : makeStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = makeStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (false) {} // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  _s();

  var store = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return initializeStore(initialState);
  }, [initialState]);
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

_s(useStore, "K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsic3RvcmUiLCJleGFtcGxlSW5pdGlhbFN0YXRlIiwibW9kZSIsImxhbmciLCJhY3Rpb25UeXBlcyIsIkRBWSIsIk5JR0hUIiwiRU4iLCJaSEhBTlQiLCJSRVNFVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0b0RheSIsInRvTmlnaHQiLCJ0b0VuIiwidG9aaEhhbnQiLCJyZXNldENvdW50IiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJtYWtlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRztBQUMxQkMsTUFBSSxFQUFDLEtBRHFCO0FBRTFCQyxNQUFJLEVBQUM7QUFGcUIsQ0FBNUI7QUFLTyxJQUFNQyxXQUFXLEdBQUc7QUFDekJDLEtBQUcsRUFBRSxLQURvQjtBQUV6QkMsT0FBSyxFQUFFLE9BRmtCO0FBR3pCQyxJQUFFLEVBQUUsSUFIcUI7QUFJekJDLFFBQU0sRUFBRSxRQUppQjtBQUt6QkMsT0FBSyxFQUFFO0FBTGtCLENBQXBCLEMsQ0FRUDs7QUFDTyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUF5QztBQUFBLE1BQXhDQyxLQUF3Qyx1RUFBaENWLG1CQUFnQztBQUFBLE1BQVhXLE1BQVc7O0FBQzlELFVB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MUIsS0FBUDtBQUNELEMsQ0FHRDtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztHQXRFZ0JtQyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWVkNzI1MmIzZTQ1MjEyNWU4NDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5pbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnXHJcblxyXG5sZXQgc3RvcmVcclxuXHJcbmNvbnN0IGV4YW1wbGVJbml0aWFsU3RhdGUgPSB7XHJcbiAgbW9kZTonZGF5JyxcclxuICBsYW5nOidlbidcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gIERBWTogJ0RBWScsXHJcbiAgTklHSFQ6ICdOSUdIVCcsXHJcbiAgRU46ICdFTicsXHJcbiAgWkhIQU5UOiAnWkhIQU5UJyxcclxuICBSRVNFVDogJ1JFU0VUJ1xyXG59XHJcblxyXG4vLyBSRURVQ0VSU1xyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuREFZOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1vZGU6ICdkYXknXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuTklHSFQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ25pZ2h0J1xyXG4gICAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLkVOOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxhbmc6ICdlbidcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5aSEhBTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbGFuZzogJ3poSGFudCdcclxuICAgICAgfSBcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVTRVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheScsXHJcbiAgICAgICAgbGFuZzogJ2VuJ1xyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbi8vIEFDVElPTlNcclxuZXhwb3J0IGNvbnN0IHRvRGF5ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkRBWSB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0b05pZ2h0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLk5JR0hUIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvRW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuRU4gfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9aaEhhbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuWkhIQU5UIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0Q291bnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuUkVTRVQgfVxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gIGtleTogJ3ByaW1hcnknLFxyXG4gIHN0b3JhZ2UsXHJcbiAgd2hpdGVsaXN0OiBbJ21vZGUnLCAnbGFuZyddLCAvLyBwbGFjZSB0byBzZWxlY3Qgd2hpY2ggc3RhdGUgeW91IHdhbnQgdG8gcGVyc2lzdFxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcilcclxuXHJcbmZ1bmN0aW9uIG1ha2VTdG9yZShpbml0aWFsU3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcGVyc2lzdGVkUmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IG1ha2VTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuICAgIF9zdG9yZSA9IG1ha2VTdG9yZSh7XHJcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4gICAgfSlcclxuICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcblxyXG4gIHJldHVybiBfc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuXHJcblxyXG4vLyBpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcclxuLy8gaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuXHJcbi8vIGxldCBzdG9yZVxyXG5cclxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4vLyAgICAgbW9kZTonZGF5J1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vICAgICBjYXNlICdEQVknOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgIG1vZGU6ICdkYXknLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBjYXNlICdOSUdIVCc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgbW9kZTogJ25pZ2h0JyxcclxuLy8gICAgICAgfVxyXG4vLyAgICAgY2FzZSAnUkVTRVQnOlxyXG4vLyAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICByZXR1cm4gc3RhdGVcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZSkge1xyXG4vLyAgIHJldHVybiBjcmVhdGVTdG9yZShcclxuLy8gICAgIHJlZHVjZXIsXHJcbi8vICAgICBwcmVsb2FkZWRTdGF0ZSxcclxuLy8gICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XHJcbi8vICAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuXHJcbi8vICAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXHJcbi8vICAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuLy8gICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcclxuLy8gICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XHJcbi8vICAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbi8vICAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4vLyAgICAgfSlcclxuLy8gICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXHJcbi8vICAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4vLyAgIH1cclxuXHJcbi8vICAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuLy8gICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcclxuLy8gICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxyXG4vLyAgIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcblxyXG4vLyAgIHJldHVybiBfc3RvcmVcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4vLyAgIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbi8vICAgcmV0dXJuIHN0b3JlXHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9