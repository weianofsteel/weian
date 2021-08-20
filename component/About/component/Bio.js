import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { withTranslation } from '../../../i18n'
import Grid from '@material-ui/core/Grid'
import avartar from '../../../public/image/about/avartar.jpg'

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
        fontSize:'1.2rem',
        lineHeight:'1.8rem'
    },
})

const Bio = ({t,...props}) => {
    
    const classes = useStyles();

    const {
        mode
    } = props;

    return(
        <React.Fragment>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={classes.title}>
                        {t('greeting')}
                    </p>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={2} sm={3} md={4}></Grid>
                <Grid item xs={8} sm={6} md={4} style={{marginTop:'-1rem',padding:'1rem', textAlign:'center'}}>
                    <img src={avartar} className={classes.img} style={{width:'100%'}}/>
                </Grid>
                <Grid item xs={2} sm={3} md={4}></Grid>
            </Grid>

            <Grid container>
                <Grid item xs={false} md={3}></Grid>
                <Grid item xs={12} md={6}>
                    <p className={classes.content}>
                        {t('content1')}
                    </p>
                    <p className={classes.content}>
                        {t('content2')}
                    </p>
                    <p className={classes.content}>
                        {t('content3')}
                    </p>
                </Grid>
                <Grid item xs={false} md={3}></Grid>
            </Grid>

        </React.Fragment>
    )
}

Bio.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('about')(Bio) 