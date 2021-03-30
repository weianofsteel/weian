import logger from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers'

const makeConfiguredStore = (reducer, initialState) =>
    createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
    );

export const makeStore = (initialState) => {

        // we need it only on client side
        const {persistStore, persistReducer} = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;

        // const persistConfig = {
        //     key: 'nextjs',
        //     whitelist: ['mode'], // make sure it does not clash with server keys
        //     storage
        // };

        // const persistedReducer = persistReducer(persistConfig, reducer);
        const store = makeConfiguredStore(reducer, initialState);

        // store.__persistor = persistStore(store); // Nasty hack
        // window.store = store;
        return store;
};
