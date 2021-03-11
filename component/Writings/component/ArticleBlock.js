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
        url,
        mode,
        box
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
                        {box==true&&
                            <React.Fragment>
                                <p className={classes.title} style={{color:(mode=='day'?'black':'white')}}>
                                    {title}
                                </p>
                                <p className={classes.description} style={{color:(mode=='day'?'black':'white')}}>
                                    {description}
                                </p>
                            </React.Fragment>
                        }
                        {box==false&&
                            <React.Fragment>
                                <p className={classes.title} style={{color:(mode=='day'?'white':'black')}}>
                                    {title}
                                </p>
                                <p className={classes.description} style={{color:(mode=='day'?'white':'black')}}>
                                    {description}
                                </p>
                            </React.Fragment>
                        }
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