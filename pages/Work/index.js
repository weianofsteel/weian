import React from 'react'
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'
import { Work } from '../../component/Work/Work'

const WorkPage = ({ t }) => {
    return(
      <Work/>   
    )
}

WorkPage.getInitialProps = async () => ({
    namespacesRequired: ['article', 'common'],
  })
  
WorkPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('article')(WorkPage)