import React from 'react'
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'
import { About } from '../../component/About/About'

const AboutPage = ({ t }) => {
    return(
        <About/> 
    )
}

AboutPage.getInitialProps = async () => ({
    namespacesRequired: ['article', 'common'],
  })
  
AboutPage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('article')(AboutPage)