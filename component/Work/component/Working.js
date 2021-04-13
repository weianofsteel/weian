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
        fontSize:'1.6rem',
        fontWeight: 500
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

                <p className={classes.title}>
                    {t('title')}
                </p>

            </div>

            <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <p className={classes.subtitle}>
                        {t('subtitle1')}
                    </p>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <p className={classes.content}>
                        {t('content1-1')}
                    </p>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>

        </React.Fragment>
    )
}

Working.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('working')(Working) 