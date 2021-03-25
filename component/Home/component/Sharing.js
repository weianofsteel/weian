import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'
import CustomizeCarousel from 'react-customize-carousel'
// import CustomizeCarousel from '../../Public/Carousel2'
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
            
                <Grid item xs={12} md={4} style={{textAlign:'left'}}>
                    <Link
                        href='https://www.npmjs.com/package/react-customize-carousel'
                        underline='none'
                    >
                        <CustomizeCarousel
                            imgsrc={[photo1, photo2, photo3]}
                            rotateBy={3}
                            navigateButton={true}
                            controlButton={true}
                        />
                        <p>React customize carousel</p>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link
                        href='https://www.npmjs.com/package/react-typewriting-animation'
                        underline='none'
                    >
                        <p>React typewriter</p>
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Link
                        href='https://www.npmjs.com/package/react-scroll-up-btn'
                        underline='none'
                    >
                        <p>React scroll up button</p>
                    </Link>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

Sharing.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('sharing')(Sharing)