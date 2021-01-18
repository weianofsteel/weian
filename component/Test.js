
import React from 'react'
import { i18n, withTranslation } from '../i18n'


const Test = ({ t }) => {

    return(
        <React.Fragment>
             
             <p>{t('title2')}</p>
             <button onClick={()=>{console.log(888, t('content'), i18n.language)}}>try</button>
             
        </React.Fragment>
    )
}


export default withTranslation('common')(Test)