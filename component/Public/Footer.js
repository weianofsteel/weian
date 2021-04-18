import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'
import styles from '../../css/public.module.css'
import Link from '@material-ui/core/Link';

const Footer = ({t, ...props}) => {

    const {
        mode
    }  = props;

    return(
        <React.Fragment>
            
            <Grid container className={mode=='day'?styles.footerBlock:styles.footerBlockNight}>
                <Grid item xs={6} md={4} style={{marginBottom:'2rem'}}>
                    <span>{t('contactTitle')}</span>
                    <br/>
                    <p>+8869 12 597 109</p>
                    {/* <br/> */}
                    <p>weianofsteel@gmail.com</p>
                </Grid>
                <Grid item xs={6} md={4}>
                    <span>{t('followTitle')}</span>
                    <br/>
                    <Link
                        href='https://weianofsteel.medium.com/'
                        target='_blank'
                        rel='noopener'
                        underline='none'
                    >
                        Medium
                    </Link>
                    <br/>
                    <Link
                        href='https://github.com/weianofsteel'
                        target='_blank'
                        rel='noopener'
                        underline='none'
                    >
                        Github
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

