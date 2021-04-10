import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { withTranslation } from '../../../i18n'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    title:{
        fontFamily:'Roboto',
        fontSize:'2rem'
    },
    subtitle:{
        fontFamily:'Roboto',
        fontSize:'2rem',
        fontWeight: 700
    },
    img:{
        borderRadius:'50%'
    },
    content:{
        fontFamily:'Roboto',
        fontSize:'1.2rem'
    },
})

const Working = ({t,...props}) => {
    
    const classes = useStyles();

    const {
        mode
    } = props;

    return(
        <React.Fragment>
            
            <div>

                <p className={classes.subtitle}>
                    {t('title')}
                </p>

            </div>

        </React.Fragment>
    )
}

Working.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('about')(Working) 