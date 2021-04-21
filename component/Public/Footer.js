import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'
import styles from '../../css/public.module.css'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link: {
        color:'black',
        "&:hover":{
            color:'#919191'
        }
    },
    linkNight:{
        color:'white',
        "&:hover":{
            color:'#BDBDBD'
        }
    }
})

const Footer = ({t, ...props}) => {

    const {
        mode
    }  = props;

    const classes = useStyles();

    return(
        <React.Fragment>
            
            <Grid container className={mode=='day'?styles.footerBlock:styles.footerBlockNight}>
                <Grid item xs={12} sm={7} md={4} style={{marginBottom:'2rem', fontSize:'1.2rem'}}>
                    <span style={{fontWeight:'bold'}}>{t('contactTitle')}</span>
                    <br/>
                    <br/>
                    <span>+8869 12 597 109</span>
                    <br/>
                    <br/>
                    <span>weianofsteel@gmail.com</span>
                </Grid>
                <Grid item xs={12} sm={5} md={4} style={{marginBottom:'2rem'}}>
                    <span style={{fontWeight:'bold'}}>{t('followTitle')}</span>
                    <br/>
                    <br/>
                    <Link
                        href='https://weianofsteel.medium.com/'
                        target='_blank'
                        rel='noopener'
                        underline='none'
                        className={mode=='day'?classes.link:classes.linkNight}
                    >
                        Medium
                    </Link>
                    <br/>
                    <br/>
                    <Link
                        href='https://github.com/weianofsteel'
                        target='_blank'
                        rel='noopener'
                        underline='none'
                        className={mode=='day'?classes.link:classes.linkNight}
                    >
                        Github
                    </Link>
                    <br/>
                    <br/>
                    <Link
                        href='https://www.linkedin.com/in/weian-wang/'
                        target='_blank'
                        rel='noopener'
                        underline='none'
                        className={mode=='day'?classes.link:classes.linkNight}
                    >
                        Linkedin
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <span>{t('copyright')}</span>
                    <br/>
                    <span>{t('copyrightDescription')}</span>
                </Grid>
            </Grid>
            <br/>
            <div>
                &nbsp;
            </div>

        </React.Fragment>
    )
}

Footer.propTypes = {
    t: PropTypes.func.isRequired,
}
  
  
export default withTranslation('footer')(Footer)

