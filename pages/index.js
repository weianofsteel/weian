import React from 'react'
import Header from '../component/Public/Header'
import { withTranslation } from '../i18n'
import PropTypes from 'prop-types'
import Banner from '../component/Public/Banner'

const HomePage = ({ t }) =>{
    return (
        <React.Fragment>
            
            <div>
              <Header/>
            </div>
            
            <div>
              <Banner/>
            </div>
            
        </React.Fragment>
    )
    
}

HomePage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner', 'common'],
  })
  
HomePage.propTypes = {
  t: PropTypes.func.isRequired,
}
  
export default withTranslation('header')(HomePage) 