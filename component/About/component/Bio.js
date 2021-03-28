import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typewriter from 'react-typewriting-animation'
import PropTypes from 'prop-types'
import { withTranslation } from '../../../i18n'
import Grid from '@material-ui/core/Grid'
import avartar from '../../../public/image/about/avartar2.jpg'

const useStyles = makeStyles({
    content:{
        fontFamily:'Roboto',
        fontSize:'2rem'
    }
})

const Bio = ({t,...props}) => {
    
    const classes = useStyles();

    const {
        mode
    } = props;

    return(
        <React.Fragment>
            
            <div>

                <p className={classes.content}>
                    {t('title')}
                </p>

            </div>

            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <p className={classes.content}>
                        {t('greeting')}
                    </p>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <img src={avartar} style={{width:'100%'}}/>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>

        </React.Fragment>
    )
}

Bio.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('about')(Bio) 