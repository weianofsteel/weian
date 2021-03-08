import React from 'react';
import { i18n, withTranslation } from '../../i18n';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from '../../css/Public/Header.module.css';
import Link from '@material-ui/core/Link';
import { useRouter } from 'next/router';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import {Select, Select2} from './PublicComponent';
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
  nightLink: {
    fontFamily:'Roboto',
    fontWeight:400,
    letterSpacing:'1px',
    marginLeft: '32px',
    color:'#FFFFFF',
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
  nightLinkAnchor: {
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
    width:'6rem',
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

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
      setLanguage(event.target.value);
      i18n.changeLanguage(event.target.value);
    };

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
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
              <Grid item xs={1} md={2}></Grid>
              <Hidden mdDown>
                <Grid item xs={1} style={{marginTop:'0.3rem', textAlign:'center'}}>
                  <IconButton
                    style={{backgroundColor: 'transparent',color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                    disableRipple={true}
                    onClick={handleMode}
                  >
                    {mode === 'day'?
                      <Brightness2OutlinedIcon fontSize='large'/>
                      :<WbSunnyOutlinedIcon fontSize='large'/>
                    }
                  </IconButton>
                </Grid>
                <Grid item xs={1} style={{marginTop:'0.3rem'}}>
                  <Select2
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
                  {mode==='day'&&
                    <Link 
                      href="./Work"
                      underline='none'
                      className={router.pathname == '/Work'?classes.linkAnchor:classes.link}
                    >
                      {t('work')}
                    </Link>
                  }
                  {mode==='night'&&
                    <Link 
                      href="./Work"
                      underline='none'
                      className={router.pathname == '/Work'?classes.nightLinkAnchor:classes.nightLink}
                    >
                      {t('work')}
                    </Link>
                  }
                </Grid>
                <Grid item xs={1} style={{marginTop:'1.5rem'}}>
                  {mode==='day'&&
                    <Link 
                      href="./Writings"
                      underline='none'
                      className={router.pathname == '/Writings'?classes.linkAnchor:classes.link}
                    >
                      {t('writings')}
                    </Link>
                  }
                  {mode==='night'&&
                    <Link 
                      href="./Writings"
                      underline='none'
                      className={router.pathname == '/Writings'?classes.nightLinkAnchor:classes.nightLink}
                    >
                      {t('writings')}
                    </Link>
                  }
                </Grid>
                <Grid item xs={1} style={{marginTop:'1.5rem'}}>
                  {mode==='day'&&
                    <Link 
                      href="./About"
                      underline='none'
                      className={router.pathname == '/About'?classes.linkAnchor:classes.link}
                    >
                      {t('about')}
                    </Link>
                  }
                  {mode==='night'&&
                    <Link 
                      href="./About"
                      underline='none'
                      className={router.pathname == '/About'?classes.nightLinkAnchor:classes.nightLink}
                    >
                      {t('about')}
                    </Link>
                  }
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
                <Grid item xs={1} sm={2}></Grid>
                <Grid item xs={1}>
                  <IconButton
                    style={{backgroundColor: 'transparent',color:(mode==='day'?'#1F1F1F':'#FFFFFF'),fontSize:'1.6rem'}}
                    disableRipple={true}
                    onClick={handleMode}
                  >
                    {mode === 'day'?
                      <Brightness2OutlinedIcon fontSize='inherit'/>
                      :<WbSunnyOutlinedIcon fontSize='inherit'/>
                    }
                  </IconButton>
                </Grid>
                <Hidden smUp>
                  <Grid item xs={1}></Grid>
                </Hidden>
                <Grid item xs={1} style={{marginTop:'0.5rem',textAlign:'center'}}>
                    <Select
                      name="language"
                      value={language}
                      onChange={handleChange}
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      items={[
                          {value:'en',label:"English"},
                          {value:'zhHant',label:"中文"},
                      ]}
                      mode={mode}
                      // style={{color:(mode==='day'?'#1F1F1F':'#FFFFFF')}}
                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1} style={{textAlign:'right'}}>
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

            <Grid container>
                <p className={styles.ball}></p>
            </Grid>
             
        </React.Fragment>
    )
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
}


export default withTranslation('header')(Header)