import React from 'react'
import { i18n, withTranslation } from '../../i18n'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import styles from '../../css/Public/Header.module.css'
import Link from '@material-ui/core/Link'
import { useRouter } from 'next/router'
import TranslateIcon from '@material-ui/icons/Translate'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  title: {
    fontFamily:'Roboto',
    fontWeight:400,
    paddingTop:'1rem'
  },
  link: {
    fontFamily:'Roboto',
    fontWeight:400,
    letterSpacing:'1px',
    marginLeft: '32px',
    color:'#8F8F8F',
    fontSize:'1rem',
    "&:hover":{
        color:'black'
    }
  },
  linkAnchor: {
    fontFamily:'Roboto',
    fontWeight:400,
    letterSpacing:'1px',
    marginLeft: '32px',
    color:'black',
    fontSize:'1rem'
  }
})

const Header = ({t,...props}) => {

    const classes = useStyles();

    const router = useRouter();

    const {
      handleDrawerOpen
    } = props;

    return(
        <React.Fragment>
             
            <Grid container>

              <Grid item xs={2} style={{marginTop:'0.5rem'}}>
                <span className={classes.title}>{t('title')}</span>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}></Grid>
              <Hidden mdDown>
                <Grid item xs={2}>
                  <Button
                    type='button'
                    className={classes.link}
                    style={{backgroundColor: 'transparent'}}
                    disableRipple={true}
                    onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zhHant' : 'en')}
                  >
                    <TranslateIcon/>language/語言
                  </Button>
                </Grid>
                <Grid item xs={1} style={{marginTop:'0.5rem'}}>
                  <Link 
                    href="./Work"
                    underline='none'
                    className={router.pathname == '/Work'?classes.linkAnchor:classes.link}
                  >
                    {t('work')}
                  </Link>
                </Grid>
                <Grid item xs={1} style={{marginTop:'0.5rem'}}>
                  <Link 
                    href="./Writings"
                    underline='none'
                    className={router.pathname == '/Writings'?classes.linkAnchor:classes.link}
                  >
                    {t('writings')}
                  </Link>
                </Grid>
                <Grid item xs={1} style={{marginTop:'0.5rem'}}>
                  <Link 
                    href="./About"
                    underline='none'
                    className={router.pathname == '/About'?classes.linkAnchor:classes.link}
                  >
                    {t('about')}
                  </Link>
                </Grid>
                <Grid item xs={1} style={{marginTop:'0.5rem'}}>
                  <Link 
                    href="./Resume"
                    underline='none'
                    className={router.pathname == '/Resume'?classes.linkAnchor:classes.link}
                  >
                    {t('resume')}
                  </Link>
                </Grid>
              </Hidden>

              <Hidden lgUp>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                  <IconButton
                    onClick={handleDrawerOpen}
                    // onClick={()=>{console.log(444, props, drawer2)}}
                  >
                    <MenuIcon/>
                  </IconButton>
                </Grid>
              </Hidden>

            </Grid>

            <p className={styles.ball}></p>
             
        </React.Fragment>
    )
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
}


export default withTranslation('header')(Header)