import React from 'react'
import { Work } from '../../component/Work/Work'
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'

const WorkPage = () => {
    return(
      <Work/>   
    )
}

WorkPage.getInitialProps = async () => ({
  namespacesRequired: ['header', 'banner'],
})

// HomePage.propTypes = {
// t: PropTypes.func.isRequired,
// }

export default WorkPage