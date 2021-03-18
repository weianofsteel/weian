import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'
import Carousel from '../../Public/Carousel'
import styles from '../../../css/Home.module.css'
import gif1 from '../../../public/image/gif/gif1.gif'
import gif2 from '../../../public/image/gif/gif2.gif'

const useStyles = makeStyles({
    title:{
        fontFamily:'Roboto Slab',
        fontSize:'2rem'
    }
})

const LearnByDoing = ({t,...props}) => {
    const classes = useStyles();

    const {
        mode
    } = props;

    return(
        <React.Fragment>
            <p className={classes.title}>{t('title')}</p>
            <Grid container>
                <Grid item xs={4}>
                    <Carousel
                        imgsrc={[gif1, gif2]}
                    />
                </Grid>
                <Grid item xs={8}></Grid>
            </Grid>
        </React.Fragment>
    )
}

LearnByDoing.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('learnByDoing')(LearnByDoing)