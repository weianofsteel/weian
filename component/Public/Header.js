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
    fontFamily:'Bebas Neue ',
    fontWeight:400,
    letterSpacing:'1px',
    color:'black',
    fontSize:'2rem'
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
  },
  icon: {
    fontSize:'1.5rem',
    color:'#8F8F8F',
    "&:hover":{
        color:'#1F1F1F'
    }
  }
})

const Header = ({t,...props}) => {

    const classes = useStyles();

    const router = useRouter();

    const handleLanguage = () => {
      i18n.changeLanguage(i18n.language === 'en' ? 'zhHant' : 'en')
    }

    const {
      handleDrawerOpen
    } = props;

    return(
        <React.Fragment>
             
            <Grid container>

              <Grid item xs={4} md={2} style={{marginTop:'0.5rem'}}>
                <Link 
                    href="."
                    underline='none'
                    className={classes.title}
                  >
                    {t('title')}
                  </Link>
              </Grid>
              <Grid item xs={1} md={2}></Grid>
              <Grid item xs={1} md={2}></Grid>
              <Hidden mdDown>
                <Grid item xs={2}>
                  <Button
                    type='button'
                    className={classes.link}
                    style={{backgroundColor: 'transparent'}}
                    disableRipple={true}
                    onClick={handleLanguage}
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
                  {/* <Link 
                    href="./Resume"
                    underline='none'
                    className={router.pathname == '/Resume'?classes.linkAnchor:classes.link}
                  >
                    {t('resume')}
                  </Link> */}
                  <Link 
                    href="./Sample"
                    underline='none'
                    className={router.pathname == '/Sample'?classes.linkAnchor:classes.link}
                  >
                    Sample
                  </Link>
                </Grid>
              </Hidden>

              <Hidden lgUp>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                  <IconButton
                    type='button'
                    style={{backgroundColor: 'transparent'}}
                    disableRipple={true}
                    onClick={handleLanguage}
                  >
                    <TranslateIcon className={classes.icon}/>
                  </IconButton>
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    style={{backgroundColor: 'transparent'}}
                    disableRipple={true}
                    onClick={handleDrawerOpen}
                  >
                    <MenuIcon className={classes.icon}/>
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