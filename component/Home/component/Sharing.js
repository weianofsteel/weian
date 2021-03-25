import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'
// import CustomizeCarousel from 'react-customize-carousel'
import CustomizeCarousel from '../../Public/Carousel2'
import Typewriter from 'react-typewriting-animation'
import ScrollUpButton from 'react-scroll-up-btn'
import photo1 from '../../../public/image/home/carousel1.jpg'
import photo2 from '../../../public/image/home/carousel2.jpg'
import photo3 from '../../../public/image/home/carousel3.jpg'

const useStyles = makeStyles({
    title:{
        fontFamily:'Roboto Slab',
        fontSize:'2rem'
    },
    imgBlock:{
        width:'100%',
        // padding:'1rem'
    },
    imgHover:{
        backgroundColor:'black',
        zIndex:999
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
            
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Link
                        href='https://www.npmjs.com/package/react-typewriting-animation'
                        underline='none'
                        target='_blank'
                    >
                        <p>react-typewriting-animation</p>
                        <br/>
                        <p>
                            {t('description2')}
                        </p>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Typewriter
                        rotateSpeed={800}
                        typeSpeed={80}
                        fontSize={'24px'}
                        fontFamily={'Roboto'}
                        color={mode=='day'?'black':'white'}
                        heading={'Typewriter'}
                        dataText={["Hello World"]}
                    />  
                </Grid>
            </Grid>
            
            <Grid container spacing={3}>
            
                <Grid item xs={12} sm={6} md={7} style={{textAlign:'left'}}>
                    <Link
                        href='https://www.npmjs.com/package/react-customize-carousel'
                        underline='none'
                        target='_blank'
                    >
                        <p>react-customize-carousel</p>
                        <br/>
                        <p>
                            {t('description1')}
                        </p>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={5} style={{textAlign:'left'}}>
                    <CustomizeCarousel
                        imgsrc={[photo1, photo2, photo3, photo2, photo1]}
                        rotateBy={3}
                        navigateButton={true}
                        controlButton={true}
                    />
                </Grid>
            </Grid>    

            <Grid container spacing={3}>    
                <Grid item xs={12} sm={7}>
                    <Link
                        href='https://www.npmjs.com/package/react-scroll-up-btn'
                        underline='none'
                        target='_blank'
                    >
                        <p>react-scroll-up-btn</p>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={5} style={{textAlign:'center'}}>
                    <ScrollUpButton 
                        behavior={'smooth'}
                        IconSize={'5rem'}
                        appearCoordinate={600}
                    /> 
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

Sharing.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('sharing')(Sharing)