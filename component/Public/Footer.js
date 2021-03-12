import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types'
import styles from '../../css/public.module.css'

const Footer = ({t, ...props}) => {

    const {
        mode
    }  = props;

    return(
        <React.Fragment>
            
            <Grid container className={mode=='day'?styles.footerBlock:styles.footerBlockNight}>
                <Grid item xs={4}>
                    <span>{t('contactTitle')}</span>
                </Grid>
                <Grid item xs={4}>
                    <span>{t('followTitle')}</span>
                </Grid>
                <Grid item xs={4}>
                    <span>{t('copyright')}</span>
                    <br/>
                    <span>{t('copyrightDescription')}</span>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

Footer.propTypes = {
    t: PropTypes.func.isRequired,
  }
  
  
  export default withTranslation('footer')(Footer)

