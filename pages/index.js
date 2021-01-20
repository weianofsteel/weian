import React from 'react'
import Test from '../component/Test'
import Header from '../component/Public/Header'
import { i18n, withTranslation } from '../i18n'
import PropTypes from 'prop-types'
import photo from '../public/image/design-header.png'

const HomePage = ({ t }) =>{
    return (
        <React.Fragment>
            <Header/>
            <Test/>
            <div>Welcome to Next.js! Weian!</div>
            {/* <button
              type='button'
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zhHant' : 'en')}
            >
              {t('change-locale')}
            </button> */}
            <p>{t('title')}</p>
            {/* <img src={photo}/> */}
        </React.Fragment>
    )
    
}

HomePage.getInitialProps = async () => ({
    namespacesRequired: ['article', 'common'],
  })
  
HomePage.propTypes = {
  t: PropTypes.func.isRequired,
}
  
  export default withTranslation('article')(HomePage) 