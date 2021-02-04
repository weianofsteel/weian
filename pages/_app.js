  
import App from 'next/app'
import React from 'react';
import Head from 'next/head'
import { appWithTranslation } from '../i18n'
import '../css/main.css'

const MyApp = ({ Component, pageProps }) => {
    return(
        <React.Fragment>

            <Head>
                <title>Weian Wang | Frontend Developer</title>
            </Head>
    
            <Component {...pageProps} />
        
        </React.Fragment>
    )
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)