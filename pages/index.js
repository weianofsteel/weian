import React from 'react'
import Test from '../component/Test'
import Header from '../component/Header'
import { i18n, withTranslation } from '../i18n'
import PropTypes from 'prop-types'
import photo from '../public/image/design-header.png'

const Homepage = ({ t }) =>{
    return (
        <React.Fragment>
            <Test/>
            <div>Welcome to Next.js! Weian!</div>
            <Header/>
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

Homepage.getInitialProps = async () => ({
    namespacesRequired: ['article'],
  })
  
  Homepage.propTypes = {
    t: PropTypes.func.isRequired,
  }
  
  export default withTranslation('article')(Homepage) 