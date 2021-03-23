import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'
import styles from '../../../css/Home.module.css'
import reactIcon from '../../../public/image/home/react.png'
import reactNightIcon from '../../../public/image/home/react-night.png'
import jestIcon from '../../../public/image/home/jest.png'
import jestNightIcon from '../../../public/image/home/jest-night.png'
import gitIcon from '../../../public/image/home/git.png'
import gitNightIcon from '../../../public/image/home/git-night.png'
import nextIcon from '../../../public/image/home/next.png'
import nextNightIcon from '../../../public/image/home/next-night.png'
import javascriptIcon from '../../../public/image/home/javascript.png'
import javascriptNightIcon from '../../../public/image/home/javascript-night.png'
import cssIcon from '../../../public/image/home/css.png'
import cssNightIcon from '../../../public/image/home/css-night.png'
import npmIcon from '../../../public/image/home/npm.png'
import npmNightIcon from '../../../public/image/home/npm-night.png'
import mysqlIcon from '../../../public/image/home/mysql.png'
import mysqlNightIcon from '../../../public/image/home/mysql-night.png'
import figmaIcon from '../../../public/image/home/figma.png'
import figmaNightIcon from '../../../public/image/home/figma-night.png'
import webpackIcon from '../../../public/image/home/webpack.png'
import webpackNightIcon from '../../../public/image/home/webpack-night.png'
import symfonyIcon from '../../../public/image/home/symfony.png'
import symfonyNightIcon from '../../../public/image/home/symfony-night.png'
import phpIcon from '../../../public/image/home/php.png'
import phpNightIcon from '../../../public/image/home/php-night.png'
import Hidden from '@material-ui/core/Hidden'

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
            <div>
            <Grid container spacing={4}>
                <Grid item xs={3} md={2}>
                    <div className={styles.ball}>
                        {mode=="day"&&
                            <img src={javascriptIcon}/>
                        }    
                        {mode=="night"&&    
                            <img src={javascriptNightIcon}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={3} md={2}>
                    
                        <Hidden smDown>
                            <div className={styles.ball}>
                            {mode=="day"&&
                                <img src={jestIcon} style={{width:'100%'}}/>
                            }    
                            {mode=="night"&&    
                                <img src={jestNightIcon} style={{width:'100%'}}/>
                            }
                            </div>
                        </Hidden>
                        <Hidden mdUp>
                            <div className={styles.jestLogo}>
                            {mode=="day"&&
                                <img src={jestIcon} style={{width:'100%'}}/>
                            }    
                            {mode=="night"&&    
                                <img src={jestNightIcon} style={{width:'100%'}}/>
                            } 
                            </div>
                        </Hidden>
                </Grid>
                <Grid item xs={3} md={2}>
                    <div className={styles.ball}>
                        {mode=="day"&&
                            <img src={gitIcon}/>
                        }    
                        {mode=="night"&&    
                            <img src={gitNightIcon}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={3} md={2}>
                    <div className={styles.nextLogo}>
                        {mode=="day"&&
                            <img src={nextIcon} style={{width:'100%'}}/>
                        }    
                        {mode=="night"&&    
                            <img src={nextNightIcon} style={{width:'100%'}}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={3} md={2}>
                    <div className={styles.ball}>
                        {mode=="day"&&
                            <img src={reactIcon}/>
                        }    
                        {mode=="night"&&    
                            <img src={reactNightIcon}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={3} md={2}>
                    <div className={styles.ball}>
                        {mode=="day"&&
                            <img src={cssIcon}/>
                        }    
                        {mode=="night"&&    
                            <img src={cssNightIcon}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={3} md={2}>
                    <div className={styles.ball}>
                        {mode=="day"&&
                            <img src={phpIcon}/>
                        }    
                        {mode=="night"&&    
                            <img src={phpNightIcon}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={3} md={2}>
                    <div className={styles.ball}>
                        {mode=="day"&&
                            <img src={npmIcon}/>
                        }    
                        {mode=="night"&&    
                            <img src={npmNightIcon}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={3} md={2}>
                    <div className={styles.ball}>
                        {mode=="day"&&
                            <img src={mysqlIcon}/>
                        }    
                        {mode=="night"&&    
                            <img src={mysqlNightIcon}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={3} md={2}>
                    <div className={styles.ball}>
                        {mode=="day"&&
                            <img src={figmaIcon}/>
                        }    
                        {mode=="night"&&    
                            <img src={figmaNightIcon}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={3} md={2}>
                    <div className={styles.ball}>
                        {mode=="day"&&
                            <img src={webpackIcon}/>
                        }    
                        {mode=="night"&&    
                            <img src={webpackNightIcon}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={3} md={2}>
                    <div className={styles.ball}>
                        {mode=="day"&&
                            <img src={symfonyIcon}/>
                        }    
                        {mode=="night"&&    
                            <img src={symfonyNightIcon}/>
                        }
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