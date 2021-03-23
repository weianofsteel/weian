import React from 'react'
import { withTranslation } from '../i18n'
import PropTypes from 'prop-types'
import {Home} from '../component/Home/Home'

const HomePage = ({ t }) =>{
    return (
        <Home/>
    )

}

HomePage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner', 'footer', 'skill', 'learnByDoing', 'sharing'],
  })
  
HomePage.propTypes = {
  t: PropTypes.func.isRequired,
}
  
export default withTranslation('header')(HomePage) 