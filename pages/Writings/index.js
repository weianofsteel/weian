import React from 'react'
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'
import { Writings } from '../../component/Writings/Writings'

const WritingsPage = ({ t }) => {
    return(
        <Writings/>
    )
}

WritingsPage.getInitialProps = async () => ({
    namespacesRequired: ['article', 'common'],
  })
  
WritingsPage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('article')(WritingsPage)