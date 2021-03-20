import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'
import styles from '../../../css/Home.module.css'
import reactIcon from '../../../public/image/home/react.png'
import jestIcon from '../../../public/image/home/jest.png'
import gitIcon from '../../../public/image/home/git.png'
import nextIcon from '../../../public/image/home/next.png'
import htmlIcon from '../../../public/image/home/html.png'
import javascriptIcon from '../../../public/image/home/javascript.png'
import cssIcon from '../../../public/image/home/css.png'
import npmIcon from '../../../public/image/home/npm.png'
import mysqlIcon from '../../../public/image/home/mysql.png'
import figmaIcon from '../../../public/image/home/figma.png'
import webpackIcon from '../../../public/image/home/webpack.png'
import symfonyIcon from '../../../public/image/home/symfony.png'
import phpIcon from '../../../public/image/home/php.png'
import jqueryIcon from '../../../public/image/home/jquery.png'

const useStyles = makeStyles({
    title:{
        fontFamily:'Roboto Slab',
        fontSize:'2rem'
    }
})

const Skill = ({t,...props}) => {
    
    const classes = useStyles();

    const {
        mode
    } = props;
    
    return(
        <React.Fragment>
            <p className={classes.title}>{t('title')}</p>
            <div className={styles.skillBlock}>
            <Grid container style={{height:'5rem'}} spacing={4}>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={reactIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={jestIcon} style={{width:'70%', paddingLeft:'15%'}}/>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={gitIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={nextIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={javascriptIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={cssIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
            </Grid>

            <Grid container style={{height:'5rem', marginTop:'1rem'}} spacing={4}>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={phpIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={npmIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={mysqlIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={figmaIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={webpackIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
                <Grid item xs={4} md={2}>
                    <div className={styles.ball}>
                        <img src={symfonyIcon} style={{width:'80%', paddingLeft:'10%'}}/>
                    </div>
                </Grid>
            </Grid>
            </div>
        </React.Fragment>
    )
}

Skill.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('skill')(Skill)