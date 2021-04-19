import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { withTranslation } from '../../../i18n'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';

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
                <Hidden xsDown>
                    <Grid item xs={12}>
                        <p className={classes.subtitle}>
                            ●&nbsp;{t('subtitle1')}
                        </p>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid item xs={1}>
                        <p className={classes.subtitle}>
                            ●
                        </p>
                    </Grid>
                    <Grid item xs={11}>
                        <p className={classes.subtitle}>
                            {t('subtitle1')}
                        </p>
                    </Grid>
                </Hidden>
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <p className={classes.content}>
                        {t('content1-1')}
                    </p>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <p className={classes.content}>
                        {t('content1-2')}
                    </p>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <p className={classes.content}>
                        {t('content1-3')}
                    </p>
                </Grid>
            </Grid>

            <Grid container>
                <Hidden xsDown>
                    <Grid item xs={12}>
                        <p className={classes.subtitle}>
                            ●&nbsp;{t('subtitle2')}
                        </p>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid item xs={1}>
                        <p className={classes.subtitle}>
                            ●
                        </p>
                    </Grid>
                    <Grid item xs={11}>
                        <p className={classes.subtitle}>
                            {t('subtitle2')}
                        </p>
                    </Grid>
                </Hidden>
            </Grid>

            <Grid container>
                <Hidden xsDown>
                    <Grid item xs={12}>
                        <p className={classes.subtitle}>
                            ●&nbsp;{t('subtitle3')}
                        </p>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid item xs={1}>
                        <p className={classes.subtitle}>
                            ●
                        </p>
                    </Grid>
                    <Grid item xs={11}>
                        <p className={classes.subtitle}>
                            {t('subtitle3')}
                        </p>
                    </Grid>
                </Hidden>
            </Grid>

        </React.Fragment>
    )
}

Working.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('working')(Working) 