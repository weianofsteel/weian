import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typewriter from 'react-typewriting-animation'
import PropTypes from 'prop-types'
import { withTranslation } from '../../i18n'

const useStyles = makeStyles({

})

const Banner = ({t}) => {
    
    const classes = useStyles();

    return(
        <React.Fragment>
            
            <div>

                <Typewriter
                    rotateSpeed={800}
                    typeSpeed={80}
                    fontSize={'24px'}
                    fontFamily={'Roboto'}
                    color={'#6f6f6f'}
                    heading={'Typewriter'}
                    dataText={[ t('context1'), t('context2')]}
                />  

            </div>

        </React.Fragment>
    )
}

Banner.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('banner')(Banner)       