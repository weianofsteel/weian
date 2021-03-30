webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, toDay, toNight, resetCount, initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDay", function() { return toDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNight", function() { return toNight; });
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
  mode: 'day'
};
var actionTypes = {
  DAY: 'DAY',
  NIGHT: 'NIGHT',
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

    case actionTypes.RESET:
      return _objectSpread(_objectSpread({}, state), {}, {
        mode: 'day'
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
var resetCount = function resetCount() {
  return {
    type: actionTypes.RESET
  };
};
var persistConfig = {
  key: 'primary',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default.a,
  whitelist: ['mode'] // place to select which state you want to persist

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanMiXSwibmFtZXMiOlsic3RvcmUiLCJleGFtcGxlSW5pdGlhbFN0YXRlIiwibW9kZSIsImFjdGlvblR5cGVzIiwiREFZIiwiTklHSFQiLCJSRVNFVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0b0RheSIsInRvTmlnaHQiLCJyZXNldENvdW50IiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJ3aGl0ZWxpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJtYWtlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxLQUFKO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUc7QUFDMUJDLE1BQUksRUFBQztBQURxQixDQUE1QjtBQUlPLElBQU1DLFdBQVcsR0FBRztBQUN6QkMsS0FBRyxFQUFFLEtBRG9CO0FBRXpCQyxPQUFLLEVBQUUsT0FGa0I7QUFHekJDLE9BQUssRUFBRTtBQUhrQixDQUFwQixDLENBTVA7O0FBQ08sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBeUM7QUFBQSxNQUF4Q0MsS0FBd0MsdUVBQWhDUCxtQkFBZ0M7QUFBQSxNQUFYUSxNQUFXOztBQUM5RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLUCxXQUFXLENBQUNDLEdBQWpCO0FBQ0UsNkNBQ0tJLEtBREw7QUFFRU4sWUFBSSxFQUFFO0FBRlI7O0FBSUYsU0FBS0MsV0FBVyxDQUFDRSxLQUFqQjtBQUNFLDZDQUNLRyxLQURMO0FBRUVOLFlBQUksRUFBRTtBQUZSOztBQUlGLFNBQUtDLFdBQVcsQ0FBQ0csS0FBakI7QUFDRSw2Q0FDS0UsS0FETDtBQUVFTixZQUFJLEVBQUU7QUFGUjs7QUFJRjtBQUNFLGFBQU9NLEtBQVA7QUFqQko7QUFtQkQsQ0FwQk0sQyxDQXNCUDs7QUFDTyxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ3pCLFNBQU87QUFBRUQsUUFBSSxFQUFFUCxXQUFXLENBQUNDO0FBQXBCLEdBQVA7QUFDRCxDQUZNO0FBSUEsSUFBTVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUMzQixTQUFPO0FBQUVGLFFBQUksRUFBRVAsV0FBVyxDQUFDRTtBQUFwQixHQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1RLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDOUIsU0FBTztBQUFFSCxRQUFJLEVBQUVQLFdBQVcsQ0FBQ0c7QUFBcEIsR0FBUDtBQUNELENBRk07QUFJUCxJQUFNUSxhQUFhLEdBQUc7QUFDcEJDLEtBQUcsRUFBRSxTQURlO0FBRXBCQyxTQUFPLEVBQVBBLGdFQUZvQjtBQUdwQkMsV0FBUyxFQUFFLENBQUMsTUFBRCxDQUhTLENBR0M7O0FBSEQsQ0FBdEI7QUFNQSxJQUFNQyxnQkFBZ0IsR0FBR0Msb0VBQWMsQ0FBQ0wsYUFBRCxFQUFnQlAsT0FBaEIsQ0FBdkM7O0FBRUEsU0FBU2EsU0FBVCxHQUF1RDtBQUFBLE1BQXBDQyxZQUFvQyx1RUFBckJwQixtQkFBcUI7QUFDckQsU0FBT3FCLHlEQUFXLENBQ2hCSixnQkFEZ0IsRUFFaEJHLFlBRmdCLEVBR2hCRSxvRkFBbUIsQ0FBQ0MsNkRBQWUsRUFBaEIsQ0FISCxDQUFsQjtBQUtEOztBQUVNLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsY0FBRCxFQUFvQjtBQUFBOztBQUNqRCxNQUFJQyxNQUFNLGNBQUczQixLQUFILDZDQUFZb0IsU0FBUyxDQUFDTSxjQUFELENBQS9CLENBRGlELENBR2pEO0FBQ0E7OztBQUNBLE1BQUlBLGNBQWMsSUFBSTFCLEtBQXRCLEVBQTZCO0FBQzNCMkIsVUFBTSxHQUFHUCxTQUFTLGlDQUNicEIsS0FBSyxDQUFDNEIsUUFBTixFQURhLEdBRWJGLGNBRmEsRUFBbEIsQ0FEMkIsQ0FLM0I7O0FBQ0ExQixTQUFLLEdBQUc2QixTQUFSO0FBQ0QsR0FaZ0QsQ0FjakQ7OztBQUNBLGFBQW1DLEVBZmMsQ0FnQmpEOztBQUNBLE1BQUksQ0FBQzdCLEtBQUwsRUFBWUEsS0FBSyxHQUFHMkIsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDRCxDQXBCTTtBQXNCQSxTQUFTRyxRQUFULENBQWtCVCxZQUFsQixFQUFnQztBQUFBOztBQUNyQyxNQUFNckIsS0FBSyxHQUFHK0IscURBQU8sQ0FBQztBQUFBLFdBQU1OLGVBQWUsQ0FBQ0osWUFBRCxDQUFyQjtBQUFBLEdBQUQsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9yQixLQUFQO0FBQ0QsQyxDQUdEO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0dBdEVnQjhCLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zOGJjMjhmNmZlNTIzYjI1ZDcyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdcclxuXHJcbmxldCBzdG9yZVxyXG5cclxuY29uc3QgZXhhbXBsZUluaXRpYWxTdGF0ZSA9IHtcclxuICBtb2RlOidkYXknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICBEQVk6ICdEQVknLFxyXG4gIE5JR0hUOiAnTklHSFQnLFxyXG4gIFJFU0VUOiAnUkVTRVQnXHJcbn1cclxuXHJcbi8vIFJFRFVDRVJTXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5EQVk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheSdcclxuICAgICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlcy5OSUdIVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtb2RlOiAnbmlnaHQnXHJcbiAgICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuUkVTRVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbW9kZTogJ2RheSdcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG4vLyBBQ1RJT05TXHJcbmV4cG9ydCBjb25zdCB0b0RheSA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5EQVkgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdG9OaWdodCA9ICgpID0+IHtcclxuICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5OSUdIVCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXNldENvdW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlJFU0VUIH1cclxufVxyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICBrZXk6ICdwcmltYXJ5JyxcclxuICBzdG9yYWdlLFxyXG4gIHdoaXRlbGlzdDogWydtb2RlJ10sIC8vIHBsYWNlIHRvIHNlbGVjdCB3aGljaCBzdGF0ZSB5b3Ugd2FudCB0byBwZXJzaXN0XHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VyKVxyXG5cclxuZnVuY3Rpb24gbWFrZVN0b3JlKGluaXRpYWxTdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUpIHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gbWFrZVN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgX3N0b3JlID0gbWFrZVN0b3JlKHtcclxuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbiAgICB9KVxyXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbiAgcmV0dXJuIF9zdG9yZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG5cclxuXHJcbi8vIGltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xyXG4vLyBpbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xyXG5cclxuLy8gbGV0IHN0b3JlXHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vICAgICBtb2RlOidkYXknXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gICAgIGNhc2UgJ0RBWSc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgbW9kZTogJ2RheScsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGNhc2UgJ05JR0hUJzpcclxuLy8gICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICBtb2RlOiAnbmlnaHQnLFxyXG4vLyAgICAgICB9XHJcbi8vICAgICBjYXNlICdSRVNFVCc6XHJcbi8vICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgIH1cclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJldHVybiBzdGF0ZVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSB7XHJcbi8vICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4vLyAgICAgcmVkdWNlcixcclxuLy8gICAgIHByZWxvYWRlZFN0YXRlLFxyXG4vLyAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcclxuLy8gICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxyXG5cclxuLy8gICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcclxuLy8gICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4vLyAgIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4vLyAgICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcclxuLy8gICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcclxuLy8gICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXHJcbi8vICAgICB9KVxyXG4vLyAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuLy8gICAgIHN0b3JlID0gdW5kZWZpbmVkXHJcbi8vICAgfVxyXG5cclxuLy8gICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxyXG4vLyAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4vLyAgIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XHJcbi8vICAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcclxuXHJcbi8vICAgcmV0dXJuIF9zdG9yZVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbi8vICAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcclxuLy8gICByZXR1cm4gc3RvcmVcclxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=