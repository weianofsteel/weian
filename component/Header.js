import React from 'react'
import { i18n, withTranslation } from '../i18n'


const Header = () => {

    return(
        <React.Fragment>
             
             <button
              type='button'
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zhHant' : 'en')}
            >
              language
            </button>
             
        </React.Fragment>
    )
}


export default withTranslation('common')(Header)