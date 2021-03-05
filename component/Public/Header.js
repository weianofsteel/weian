import React from 'react';
import { i18n, withTranslation } from '../../i18n';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from '../../css/Public/Header.module.css';
import Link from '@material-ui/core/Link';
import { useRouter } from 'next/router';
import TranslateIcon from '@material-ui/icons/Translate';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import {Select} from './PublicComponent';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

const useStyles = makeStyles({
  title: {
    fontFamily:'Bebas Neue ',
    fontWeight:400,
    letterSpacing:'1px',
    fontSize:'2rem',
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
  },
  formControl: {
    margin: '0.5rem',
    width:'10rem',
  },
  inputLabel: {
    fontSize:"17px",
    fontFamily:"微軟正黑體",
    display: "flex",
    flexDirection: "row-Reverse"
  }
})

const Header = ({t,...props}) => {

    const classes = useStyles();

    const router = useRouter();

    const [ language, setLanguage ] = React.useState('en');

    const handleChange = (event) => {
      setLanguage(event.target.value);
      i18n.changeLanguage(event.target.value);
    };

    const {
      handleDrawerOpen,
      handleMode,
      mode
    } = props;

    return(
        <React.Fragment>
             
            <Grid container>

              <Grid item xs={4} md={2} style={{marginTop:'0.5rem'}}>
                <Link 
                    href="."
                    underline='none'
                    className={classes.title}
                    style={{color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                  >
                    {t('title')}
                  </Link>
              </Grid>
              <Grid item xs={1} md={2}></Grid>
              <Grid item xs={1}></Grid>
              <Hidden mdDown>
                <Grid item xs={1} style={{marginTop:'0.5rem', textAlign:'center'}}>
                  <IconButton
                    style={{backgroundColor: 'transparent'}}
                    disableRipple={true}
                    onClick={handleMode}
                    style={{color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                  >
                    {mode === 'day'?
                      <Brightness2OutlinedIcon fontSize='large'/>
                      :<WbSunnyOutlinedIcon fontSize='large'/>
                    }
                  </IconButton>
                </Grid>
                <Grid item xs={2} style={{marginTop:'1rem'}}>
                  <Select
                      label={<TranslateIcon/>}
                      name="language"
                      value={language}
                      onChange={handleChange}
                      items={[
                          {value:'en',label:"English"},
                          {value:'zhHant',label:"中文"},
                      ]}
                      mode={mode}
                      // style={{color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                  />
                </Grid>
                <Grid item xs={1} style={{marginTop:'1.5rem'}}>
                  <Link 
                    href="./Work"
                    underline='none'
                    className={router.pathname == '/Work'?classes.linkAnchor:classes.link}
                  >
                    {t('work')}
                  </Link>
                </Grid>
                <Grid item xs={1} style={{marginTop:'1.5rem'}}>
                  <Link 
                    href="./Writings"
                    underline='none'
                    className={router.pathname == '/Writings'?classes.linkAnchor:classes.link}
                  >
                    {t('writings')}
                  </Link>
                </Grid>
                <Grid item xs={1} style={{marginTop:'1.5rem'}}>
                  <Link 
                    href="./About"
                    underline='none'
                    className={router.pathname == '/About'?classes.linkAnchor:classes.link}
                  >
                    {t('about')}
                  </Link>
                </Grid>
                <Grid item xs={1} style={{marginTop:'1.5rem'}}>
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
                <Grid item xs={1}></Grid>
                {/* <Grid item xs={1}></Grid> */}
                <Grid item xs={3} style={{marginTop:'0.5rem'}}>
                  <Select
                      label={<TranslateIcon/>}
                      name="language"
                      value={language}
                      onChange={handleChange}
                      items={[
                          {value:'en',label:"English"},
                          {value:'zhHant',label:"中文"},
                      ]}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
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