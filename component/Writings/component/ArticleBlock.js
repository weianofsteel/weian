import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    title:{
        color:'black',
        fontWeight:700,
        fontSize:'2rem'
    },
    description:{
        color:'black',
        marginTop:'1rem'
    },
    img:{
        width:'80%',
        paddingTop:'10%'
    }
})

const ArticleBlock = ({t,...props}) => {
    
    const classes = useStyles();

    const {
        title,
        description,
        image,
        url
    } = props;

    return(
        <React.Fragment>
            <Link
                href={url}
                underline='none'
                target='_blank' 
                rel='noopener'
            >
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <img 
                            src={image}
                            className={classes.img}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <p className={classes.title}>
                            {title}
                        </p>
                        <p className={classes.description}>
                            {description}
                        </p>
                    </Grid>
                </Grid>
            </Link>
        </React.Fragment>
    )
}

ArticleBlock.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('article')(ArticleBlock)