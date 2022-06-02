import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typewriter from 'react-typewriting-animation'
import PropTypes from 'prop-types'
import { withTranslation } from '../../i18n'

const useStyles = makeStyles({
    content:{
        fontFamily:'Roboto',
        fontSize:'2rem'
    }
})

const Banner = ({t,...props}) => {
    
    const classes = useStyles();

    const {
        mode
    } = props;

    return(
        <React.Fragment>
            
            <div>

                <p className={classes.content}>
                    <Typewriter
                        rotateSpeed={800}
                        typeSpeed={80}
                        fontSize={'2rem'}
                        fontFamily={'Roboto'}
                        color={mode=='day'?'black':'white'}
                        heading={'Typewriter'}
                        dataText={[t('context1')]}
                    />
                    <br/>
                    <span>{t('context2')}</span>
                </p>

            </div>

        </React.Fragment>
    )
}

Banner.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('banner')(Banner)       