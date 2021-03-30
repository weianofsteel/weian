  
import App from 'next/app'
import React from 'react';
import Head from 'next/head'
import { appWithTranslation } from '../i18n'
import '../css/main.css'

import { Provider } from 'react-redux'
import { useStore } from '../store'

const MyApp = ({ Component, pageProps }) => {
    
    const store = useStore(pageProps.initialReduxState)

    return(
        <React.Fragment>

            <Head>
                <title>Weian Wang | Frontend Developer</title>
            </Head>
    
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        
        </React.Fragment>
    )
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)