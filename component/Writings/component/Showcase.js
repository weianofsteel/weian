import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    showcase: {
        marginTop:'1rem'
    }, 
    link: {
        backgroundColor: '#F5F5F5',
        height: '100%',
        width:'100%',
        overflow:'hidden',
    },
    linkOnHover: {
        backgroundColor:'#1F1F1F',
        opacity:'100%',
        height: '100%',
        width:'100%',
        overflow:'hidden',
        transition: '.4s ease-in-out'
    },
    title:{
        fontFamily:'Roboto',
        color:'black'
    },
    titleOnHover:{
        fontFamily:'Roboto',
        color:'white'
    }
})

const Showcase = ({t}) => {
    
    const classes = useStyles();

    const [ box1, setBox1] = React.useState(true);

    const handleBox1On = () => {
        setBox1(false);
    }

    const handleMouseLeave = () => {
        setBox1(true);
    }
    
    return(
        <React.Fragment>

            <Link 
                href='./'
                underline='none'
                target='_blank' 
                rel='noopener'
                className={classes.showcase}
            >
                <div 
                    className={box1===true?classes.link:classes.linkOnHover}
                    onMouseEnter={handleBox1On}
                    onMouseLeave={handleMouseLeave}
                >
                <Grid container>
                    <Grid item xs={5}>

                    </Grid>
                    <Grid item xs={7}>
                        <p className={box1===true?classes.title:classes.titleOnHover}>Exploring Next.js : multi-lingual support with next-i18next</p>
                    </Grid>
                </Grid>
                </div>
            </Link>

            <Link 
                href='./'
                underline='none'
                target='_blank' 
                rel='noopener'
                className={classes.showcase}
            >
                <div 
                    className={box1===true?classes.link:classes.linkOnHover}
                    onMouseEnter={handleBox1On}
                    onMouseLeave={handleMouseLeave}
                >
                <Grid container>
                    <Grid item xs={5}>

                    </Grid>
                    <Grid item xs={7}>
                        <p className={box1===true?classes.title:classes.titleOnHover}>Exploring Next.js : multi-lingual support with next-i18next</p>
                    </Grid>
                </Grid>
                </div>
            </Link>

            <Link 
                href='./'
                underline='none'
                target='_blank' 
                rel='noopener'
                className={classes.showcase}
            >
                <div 
                    className={box1===true?classes.link:classes.linkOnHover}
                    onMouseEnter={handleBox1On}
                    onMouseLeave={handleMouseLeave}
                >
                <Grid container>
                    <Grid item xs={5}>

                    </Grid>
                    <Grid item xs={7}>
                        <p className={box1===true?classes.title:classes.titleOnHover}>Exploring Next.js : multi-lingual support with next-i18next</p>
                    </Grid>
                </Grid>
                </div>
            </Link>

            {/* <Grid container>
                <Grid item xs={5}>

                </Grid>
                <Grid item xs={7}>
                    
                </Grid>
            </Grid> */}
            
        </React.Fragment>
    )
}

Showcase.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('article')(Showcase)