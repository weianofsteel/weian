
import React from 'react'
import { i18n, withTranslation } from '../i18n'
import PropTypes from 'prop-types'


const Test = ({ t }) => {

    return(
        <React.Fragment>
             
             <p>{t('title2')}</p>
             <button onClick={()=>{console.log(888, t('content'), i18n.language)}}>try</button>
             
        </React.Fragment>
    )
}

Test.propTypes = {
    t: PropTypes.func.isRequired,
  }

export default withTranslation('common')(Test)