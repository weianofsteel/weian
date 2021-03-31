import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'
import CustomizeCarousel from '../../Public/Carousel'
import Typewriter from 'react-typewriting-animation'
import ScrollUpButton from 'react-scroll-up-btn'
import { Scrollup } from '../../Public/Scrollup'
import photo1 from '../../../public/image/home/carousel1.jpg'
import photo2 from '../../../public/image/home/carousel2.jpg'
import photo3 from '../../../public/image/home/carousel3.jpg'
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles({
    title:{
        fontFamily:'Roboto Slab',
        fontSize:'2rem'
    },
    imgBlock:{
        width:'100%',
    },
    imgHover:{
        backgroundColor:'black',
        zIndex:999
    },
    subtitle:{
        fontFamily:'Roboto',
        fontSize:'1.5rem',
        fontWeight:700
    },
    subtitleNight:{
        fontFamily:'Roboto',
        fontSize:'1.5rem',
        color:'white'
    },
    description:{
        fontFamily:'Roboto',
        fontSize:'1.2rem',
        color:'black'
    },
    descriptionNight:{
        fontFamily:'Roboto',
        fontSize:'1.2rem',
        color:'white'
    },
    packageBlock:{
        marginTop:'3rem',
        padding:'1rem',
        borderBottom:'1px solid black',
        color:'black',
        backgroundColor: '#F5F5F5',
        height: '100%',
        width:'100%',
        overflow:'hidden',
        transition: '.4s ease-in-out'
    },
    packageBlockNight:{
        borderBottom:'1px solid white',
        padding:'1rem',
        backgroundColor: '#5c5c5c',
        height: '100%',
        width:'100%',
        overflow:'hidden',
        marginTop:'3rem'
    },
    link: {
        fontFamily:'Roboto',
        fontSize:'1.2rem',
        color:'black',
        "&:hover":{
           color:'#5c5c5c'
        }
    },
    nightLink:{
        fontFamily:'Roboto',
        fontSize:'1.2rem',
        color:'white',
        "&:hover":{
            color:'#c4c4c4'
        }
    }
})

const Sharing = ({t,...props}) => {
    const classes = useStyles();

    const {
        mode
    } = props;

    return(
        <React.Fragment>
            <p className={classes.title}>{t('title')}</p>
            
            <Grid container className={mode==='day'?classes.packageBlock:classes.packageBlockNight}>
                <Grid item xs={12} md={7}>
                    <p className={mode==='day'?classes.subtitle:classes.subtitleNight}>
                            react-typewriting-animation
                    </p>
                    <br/>
                    <p className={mode==='day'?classes.description:classes.descriptionNight}>
                        {t('description2')}
                    </p>
                    <br/>
                    <Link
                        href='https://www.npmjs.com/package/react-typewriting-animation'
                        underline='none'
                        target='_blank'
                        className={mode==='day'?classes.link:classes.nightLink}
                    >
                        <SearchIcon style={{marginBottom:'-0.4rem'}}/>{t('link')}
                    </Link>
                    <p>&nbsp;</p>
                </Grid>
                <Grid item xs={12} md={5} style={{textAlign:'center'}}>
                    <Hidden smDown>
                        <div style={{paddingTop:'30%'}}>
                        <Typewriter
                            rotateSpeed={800}
                            typeSpeed={80}
                            fontSize={'24px'}
                            fontFamily={'Roboto'}
                            color={mode=='day'?'black':'white'}
                            heading={'Typewriter'}
                            dataText={["Hello World"]}
                        />
                        </div>
                    </Hidden> 
                    <Hidden mdUp>
                        <Typewriter
                            rotateSpeed={800}
                            typeSpeed={80}
                            fontSize={'24px'}
                            fontFamily={'Roboto'}
                            color={mode=='day'?'black':'white'}
                            heading={'Typewriter'}
                            dataText={["Hello World"]}
                        />
                    </Hidden>
                </Grid>
            </Grid>
            
            <Grid container className={mode==='day'?classes.packageBlock:classes.packageBlockNight}>
            
                <Grid item xs={12} md={7} style={{textAlign:'left'}}>
                    <p className={mode==='day'?classes.subtitle:classes.subtitleNight}>
                        react-customize-carousel
                    </p>
                    <br/>
                    <p className={mode==='day'?classes.description:classes.descriptionNight}>
                        {t('description1')}
                    </p>
                    <br/>
                    <Link
                        href='https://www.npmjs.com/package/react-customize-carousel'
                        underline='none'
                        target='_blank'
                        className={mode==='day'?classes.link:classes.nightLink}
                    >
                        <SearchIcon style={{marginBottom:'-0.4rem'}}/>{t('link')}
                    </Link>
                    <p>&nbsp;</p>
                </Grid>
                <Grid item xs={12} md={5} style={{textAlign:'left',paddingTop:'1rem'}}>
                    <CustomizeCarousel
                        imgsrc={[photo1, photo2, photo3, photo2, photo1]}
                        rotateBy={3}
                        navigateButton={true}
                        controlButton={true}
                        mode={mode}
                    />
                </Grid>
            </Grid>    

            <Grid container className={mode==='day'?classes.packageBlock:classes.packageBlockNight}>    
                <Grid item xs={12} md={7}>
                    <p className={mode==='day'?classes.subtitle:classes.subtitleNight}>
                        react-scroll-up-btn
                    </p>
                    <br/>
                    <p className={mode==='day'?classes.description:classes.descriptionNight}>
                        {t('description3')}
                    </p>
                    <br/>
                    <Link
                        href='https://www.npmjs.com/package/react-scroll-up-btn'
                        underline='none'
                        target='_blank'
                        className={mode==='day'?classes.link:classes.nightLink}
                    >
                        <SearchIcon style={{marginBottom:'-0.4rem'}}/>{t('link')}
                    </Link>
                    <p>&nbsp;</p>
                </Grid>

                <Grid item xs={12} md={5} style={{textAlign:'center'}}>
                    <Hidden smDown>
                        <div style={{padding:'20%'}}>
                            <Scrollup mode={mode}/>
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <Scrollup mode={mode}/>
                    </Hidden>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

Sharing.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('sharing')(Sharing)