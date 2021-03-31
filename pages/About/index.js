import React from 'react'
import { About } from '../../component/About/About'
import PropTypes from 'prop-types'
import { withTranslation } from '../../i18n'

const AboutPage = ({ t }) => {

    return(
            <About/>
    )
}

AboutPage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner', 'about'],
})

AboutPage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('header')(AboutPage)