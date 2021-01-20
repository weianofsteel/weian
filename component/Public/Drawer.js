import React from 'react'
import { i18n, withTranslation } from '../../i18n'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    main: {
        height:'100vh'
    },
    title: {
        fontFamily:'Roboto',
        fontWeight:400,
        paddingTop:'1rem'
    },
    drawerLink: {
        fontFamily:'Roboto',
        textAlign:'left',
        fontWeight:400,
        letterSpacing:'1px',
        color:'#8F8F8F',
        fontSize:'22px',
        "&:hover":{
            color:'black'
        }
    }
})

const Drawer = (props) => {

    const classes = useStyles();

    const {
        handleDrawerClose
    } = props;
    
    return(
        <React.Fragment>

            <div className={classes.main}>
                
                <Grid container>
                    <Grid item xs={2} style={{marginTop:'0.5rem'}}>
                        <span className={classes.title}>{i18n.t('title')}</span>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={1}>
                        <IconButton
                            onClick={handleDrawerClose}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid container className={classes.drawerHeader} style={{marginTop:'4rem'}}>
                    <Grid item xs={4}>
                        {/* <span className={styles.link}> */}
                            <Link href="/Work" underline='none' className={classes.drawerLink}>
                                {i18n.t('work')}
                            </Link>
                        {/* </span> */}
                    </Grid>
                </Grid>    

                <Grid container className={classes.drawerHeader}>
                    <Grid item xs={4}>
                        {/* <span className={styles.link}> */}
                            <Link href="/Writings" underline='none' className={classes.drawerLink}>
                                {i18n.t('writings')}
                            </Link>
                        {/* </span> */}
                    </Grid>
                </Grid>

                <Grid container className={classes.drawerHeader}>
                    <Grid item xs={4}>
                        {/* <span className={styles.link}> */}
                            <Link href="/About" underline='none' className={classes.drawerLink}>
                                {i18n.t('about')}
                            </Link>
                        {/* </span> */}
                    </Grid>
                </Grid>

                <Grid container className={classes.drawerHeader}>
                    <Grid item xs={4}>
                        {/* <span className={styles.link}> */}
                            <Link href='./SalieChien_Resume.pdf' target='_blank' rel='noopener' underline='none' className={classes.drawerLink}>
                                {i18n.t('resume')}
                            </Link>
                        {/* </span> */}
                    </Grid>
                </Grid>    

            </div>

        </React.Fragment>
    )
}

Drawer.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('header')(Drawer)