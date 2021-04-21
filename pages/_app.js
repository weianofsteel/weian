  
import App from 'next/app'
import React from 'react';
import Head from 'next/head'
import { appWithTranslation } from '../i18n'
import '../css/main.css'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const MyApp = ({ Component, pageProps }) => {
    
    const store = useStore(pageProps.initialReduxState)
    const persistor = persistStore(store, {}, function () {
        persistor.persist()
    })

    return(
        <React.Fragment>

            <Head>
                <title>Weian Wang | Frontend Developer</title>
            </Head>
    
            <Provider store={store}>
                <PersistGate 
                    // loading={<div>loading</div>} 
                    persistor={persistor}
                >
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        
        </React.Fragment>
    )
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)