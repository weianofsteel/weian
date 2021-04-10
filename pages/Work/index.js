import React from 'react'
import { Work } from '../../component/Work/Work'
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'

const WorkPage = ({ t }) => {
    return(
      <Work/>   
    )
}

WorkPage.getInitialProps = async () => ({
  namespacesRequired: ['header', 'banner', 'working'],
})

WorkPage.propTypes = {
t: PropTypes.func.isRequired,
}

export default withTranslation('header')(WorkPage)