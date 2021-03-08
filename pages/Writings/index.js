import React from 'react'
import { Writings } from '../../component/Writings/Writings'
import PropTypes from 'prop-types'
import { withTranslation } from '../../i18n'

const WritingsPage = ({t}) => {
    return(
        <Writings/>
    )
}

WritingsPage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner', 'article', 'footer'],
})

WritingsPage.propTypes = {
    t: PropTypes.func.isRequired,
  }

export default withTranslation('header')(WritingsPage)