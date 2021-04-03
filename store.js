import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let store

const exampleInitialState = {
  mode:'day',
  lang:'en'
}

export const actionTypes = {
  DAY: 'DAY',
  NIGHT: 'NIGHT',
  EN: 'EN',
  ZHHANT: 'ZHHANT',
  RESET: 'RESET'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.DAY:
      return {
        ...state,
        mode: 'day'
      }
    case actionTypes.NIGHT:
      return {
        ...state,
        mode: 'night'
      }
    case actionTypes.EN:
      return {
        ...state,
        lang: 'en'
      }
    case actionTypes.ZHHANT:
      return {
        ...state,
        lang: 'zhHant'
      } 
    case actionTypes.RESET:
      return {
        ...state,
        mode: 'day',
        lang: 'en'
      }
    default:
      return state
  }
}

// ACTIONS
export const toDay = () => {
  return { type: actionTypes.DAY }
}

export const toNight = () => {
  return { type: actionTypes.NIGHT }
}

export const toEn = () => {
  return { type: actionTypes.EN }
}

export const toZhHant = () => {
  return { type: actionTypes.ZHHANT }
}

export const resetCount = () => {
  return { type: actionTypes.RESET }
}

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['mode', 'lang'], // place to select which state you want to persist
}

const persistedReducer = persistReducer(persistConfig, reducer)

function makeStore(initialState = exampleInitialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}


// import { useMemo } from 'react'
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