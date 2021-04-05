import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'
import ArticleBlock from './ArticleBlock'
import img01 from '../../../public/image/writings/dynamic-import.png'
import img02 from '../../../public/image/writings/globe.png'
import img03 from '../../../public/image/writings/npm.png'

const useStyles = makeStyles({
    showcase: {
        marginTop:'1rem'
    }, 
    link: {
        backgroundColor: '#F5F5F5',
        height: '100%',
        width:'100%',
        overflow:'hidden',
        marginTop:'1rem'
    },
    linkOnHover: {
        backgroundColor:'#1F1F1F',
        opacity:'100%',
        height: '100%',
        width:'100%',
        overflow:'hidden',
        transition: '.4s ease-in-out',
        marginTop:'1rem'
    },
    nightLink:{
        backgroundColor: '#5c5c5c',
        height: '100%',
        width:'100%',
        overflow:'hidden',
        marginTop:'1rem'
    },
    nightLinkOnHover: {
        backgroundColor:'#FFFFFF',
        opacity:'100%',
        height: '100%',
        width:'100%',
        overflow:'hidden',
        transition: '.4s ease-in-out',
        marginTop:'1rem'
    },
    title:{
        fontFamily:'Roboto',
        color:'black'
    },
    titleOnHover:{
        fontFamily:'Roboto',
        color:'white'
    },
    description:{
        fontFamily:'Roboto',
        color:'black'
    },
    descriptionOnHover:{
        fontFamily:'Roboto',
        color:'white'
    }
})

const Showcase = ({t,...props}) => {
    
    const classes = useStyles();

    const [ box1, setBox1] = React.useState(true);

    const [ box2, setBox2] = React.useState(true);

    const [ box3, setBox3] = React.useState(true);

    const handleBox1On = () => {
        setBox1(false);
    }

    const handleBox2On = () => {
        setBox2(false);
    }

    const handleBox3On = () => {
        setBox3(false);
    }

    const handleMouseLeave = () => {
        setBox1(true);
        setBox2(true);
        setBox3(true);
    }

    const {
        mode,
        lang
    } = props;
    
    return(
        <React.Fragment>

            {mode=='day'&&
                <React.Fragment>
                    <div 
                        className={box1===true?classes.link:classes.linkOnHover}
                        onMouseEnter={handleBox1On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock 
                            title={t('title1')}
                            description={t('description1')}
                            image={img01}
                            urlEn={'./'}
                            urlZhHant={'./'}
                            mode={mode}
                            box={box1}
                            lang={lang}
                        />
                    </div>
                    <div 
                        className={box2===true?classes.link:classes.linkOnHover}
                        onMouseEnter={handleBox2On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock 
                            title={t('title2')}
                            description={t('description2')}
                            image={img02}
                            urlEn={'./'}
                            urlZhHant={'./'}
                            mode={mode}
                            box={box2}
                            lang={lang}
                        />
                    </div>
                    <div 
                        className={box3===true?classes.link:classes.linkOnHover}
                        onMouseEnter={handleBox3On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock 
                            title={t('title3')}
                            description={t('description3')}
                            image={img03}
                            urlEn={'https://weianofsteel.medium.com/how-to-publish-your-react-component-package-to-npm-20ee4f81a506'}
                            urlZhHant={'https://weianofsteel.medium.com/%E5%A6%82%E4%BD%95%E7%99%BC%E5%B8%83%E8%87%AA%E5%B7%B1%E7%9A%84-react-component-%E5%A5%97%E4%BB%B6%E5%88%B0-npm-%E4%B8%8A-acb042118ef5'}
                            mode={mode}
                            box={box3}
                            lang={lang}
                        />
                    </div>
                </React.Fragment>
            }

            {mode=='night'&&
                <React.Fragment>
                    <div 
                        className={box1===true?classes.nightLink:classes.nightLinkOnHover}
                        onMouseEnter={handleBox1On}
                        onMouseLeave={handleMouseLeave}
                    >
                    <ArticleBlock 
                        title={t('title1')}
                        description={t('description1')}
                        image={img01}
                        urlEn={'./'}
                        urlZhHant={'./'}
                        mode={mode}
                        box={box1}
                        lang={lang}
                    />
                    </div>
                    <div 
                        className={box2===true?classes.nightLink:classes.nightLinkOnHover}
                        onMouseEnter={handleBox2On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock 
                            title={t('title2')}
                            description={t('description2')}
                            image={img02}
                            urlEn={'./'}
                            urlZhHant={'./'}
                            mode={mode}
                            box={box2}
                            lang={lang}
                        />
                    </div>
                    <div 
                        className={box3===true?classes.nightLink:classes.nightLinkOnHover}
                        onMouseEnter={handleBox3On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock 
                            title={t('title3')}
                            description={t('description3')}
                            image={img03}
                            urlEn={'https://weianofsteel.medium.com/how-to-publish-your-react-component-package-to-npm-20ee4f81a506'}
                            urlZhHant={'https://weianofsteel.medium.com/%E5%A6%82%E4%BD%95%E7%99%BC%E5%B8%83%E8%87%AA%E5%B7%B1%E7%9A%84-react-component-%E5%A5%97%E4%BB%B6%E5%88%B0-npm-%E4%B8%8A-acb042118ef5'}
                            mode={mode}
                            box={box3}
                            lang={lang}
                        />
                    </div>
                </React.Fragment>
            }

            
        </React.Fragment>
    )
}

Showcase.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('article')(Showcase)