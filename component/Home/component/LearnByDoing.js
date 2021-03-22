import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'
import gif4 from '../../../public/image/gif/gif4.gif'
import gif5 from '../../../public/image/gif/gif5.gif'
import gif6 from '../../../public/image/gif/gif6.gif'
import gif7 from '../../../public/image/gif/gif7.gif'
import gif8 from '../../../public/image/gif/gif8.gif'
import gif10 from '../../../public/image/gif/gif10.gif'

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

const LearnByDoing = ({t,...props}) => {
    const classes = useStyles();

    const [onHover, setOnHover] = React.useState(false);

    const handleOnHover = () => {
        setOnHover(true);
    }

    const handleMouseLeave = () => {
        setOnHover(false);
    }

    const {
        mode
    } = props;

    return(
        <React.Fragment>
            <p className={classes.title}>{t('title')}</p>
            <Grid container spacing={3}>
                <Grid item xs={6} md={4}>
                    <div 
                        onMouseEnter={handleOnHover}
                        onMouseLeave={handleMouseLeave}
                    >
                        {onHover === false &&
                            <img src={gif4} className={classes.imgBlock}/>
                        }
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <img src={gif5} className={classes.imgBlock}/>
                </Grid>
                <Grid item xs={6} md={4}>
                    <img src={gif6} className={classes.imgBlock}/>
                </Grid>
                <Grid item xs={6} md={4}>
                    <img src={gif7} className={classes.imgBlock}/>
                </Grid>
                <Grid item xs={6} md={4}>
                    <img src={gif8} className={classes.imgBlock}/>
                </Grid>
                <Grid item xs={6} md={4}>
                    <img src={gif10} className={classes.imgBlock}/>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

LearnByDoing.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('learnByDoing')(LearnByDoing)