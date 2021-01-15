import react from 'react'
import Test from '../component/Test'
import { i18n, Link, withTranslation } from '../i18n'
import PropTypes from 'prop-types'

const Homepage = ({ t }) =>{
    return (
        <div>
            <Test/>
            <div>Welcome to Next.js! Weian!</div>
            <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zhHant' : 'en')}
        >
          {t('change-locale')}
        </button>
        <p>{t('title')}</p>
        </div>
    )
    
}

Homepage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
  
  Homepage.propTypes = {
    t: PropTypes.func.isRequired,
  }
  
  export default withTranslation('common')(Homepage) 