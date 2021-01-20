import React from 'react'
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'

const Resume = ({ t }) => {
    return(
        <React.Fragment>
            <span>Resume</span>
        </React.Fragment>    
    )
}

Resume.getInitialProps = async () => ({
    namespacesRequired: ['article', 'common'],
  })
  
Resume.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('article')(Resume)