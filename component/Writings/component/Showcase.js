import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'
import ArticleBlock from './ArticleBlock'
import ArticleBlock2 from './ArticleBlock2'
import img01 from '../../../public/image/writings/dynamic-import.png'
import img02 from '../../../public/image/writings/globe.png'
import img03 from '../../../public/image/writings/npm.png'
import img04 from '../../../public/image/writings/laptop.png'
import img05 from '../../../public/image/writings/typewriter.png'

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

    const [ box4, setBox4] = React.useState(true);

    const [ box5, setBox5] = React.useState(true);

    const handleBox1On = () => {
        setBox1(false);
    }

    const handleBox2On = () => {
        setBox2(false);
    }

    const handleBox3On = () => {
        setBox3(false);
    }

    const handleBox4On = () => {
        setBox4(false);
    }

    const handleBox5On = () => {
        setBox5(false);
    }

    const handleMouseLeave = () => {
        setBox1(true);
        setBox2(true);
        setBox3(true);
        setBox4(true);
        setBox5(true);
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
                        <ArticleBlock2 
                            title={t('title1')}
                            description={t('description1')}
                            image={img02}
                            urlEn={'https://levelup.gitconnected.com/exploring-next-js-multi-lingual-support-with-next-i18next-f4275d63c0e9'}
                            urlZhHant={'https://weianofsteel.medium.com/%E6%8E%A2%E7%B4%A2-next-js-%E7%94%A8-next-i18next-%E5%AE%8C%E6%88%90%E5%A4%9A%E8%AA%9E%E8%A8%80%E6%94%AF%E6%8F%B4-eced3f5f99dc'}
                            mode={mode}
                            box={box1}
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
                    <div 
                        className={box2===true?classes.link:classes.linkOnHover}
                        onMouseEnter={handleBox2On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock 
                            title={t('title2')}
                            description={t('description2')}
                            image={img01}
                            urlEn={'https://javascript.plainenglish.io/exploring-next-js-dynamic-import-ccb28a03e7f9'}
                            urlZhHant={'https://javascript.plainenglish.io/exploring-next-js-dynamic-import-ccb28a03e7f9'}
                            mode={mode}
                            box={box2}
                            lang={lang}
                        />
                    </div>
                    <div 
                        className={box4===true?classes.link:classes.linkOnHover}
                        onMouseEnter={handleBox4On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock2
                            title={t('title4')}
                            description={t('description4')}
                            image={img05}
                            urlEn={'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734'}
                            urlZhHant={'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734'}
                            mode={mode}
                            box={box4}
                            lang={lang}
                        />
                    </div>
                    <div 
                        className={box5===true?classes.link:classes.linkOnHover}
                        onMouseEnter={handleBox5On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock 
                            title={t('title5')}
                            description={t('description5')}
                            image={img04}
                            urlEn={'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734'}
                            urlZhHant={'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734'}
                            mode={mode}
                            box={box5}
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
                    <ArticleBlock2 
                        title={t('title1')}
                        description={t('description1')}
                        image={img02}
                        urlEn={'https://levelup.gitconnected.com/exploring-next-js-multi-lingual-support-with-next-i18next-f4275d63c0e9'}
                        urlZhHant={'https://weianofsteel.medium.com/%E6%8E%A2%E7%B4%A2-next-js-%E7%94%A8-next-i18next-%E5%AE%8C%E6%88%90%E5%A4%9A%E8%AA%9E%E8%A8%80%E6%94%AF%E6%8F%B4-eced3f5f99dc'}
                        mode={mode}
                        box={box1}
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
                    <div 
                        className={box2===true?classes.nightLink:classes.nightLinkOnHover}
                        onMouseEnter={handleBox2On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock 
                            title={t('title2')}
                            description={t('description2')}
                            image={img01}
                            urlEn={'https://javascript.plainenglish.io/exploring-next-js-dynamic-import-ccb28a03e7f9'}
                            urlZhHant={'https://javascript.plainenglish.io/exploring-next-js-dynamic-import-ccb28a03e7f9'}
                            mode={mode}
                            box={box2}
                            lang={lang}
                        />
                    </div>
                    <div 
                        className={box4===true?classes.nightLink:classes.nightLinkOnHover}
                        onMouseEnter={handleBox4On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock2 
                            title={t('title4')}
                            description={t('description4')}
                            image={img05}
                            urlEn={'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734'}
                            urlZhHant={'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734'}
                            mode={mode}
                            box={box4}
                            lang={lang}
                        />
                    </div>
                    <div 
                        className={box5===true?classes.nightLink:classes.nightLinkOnHover}
                        onMouseEnter={handleBox5On}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ArticleBlock 
                            title={t('title5')}
                            description={t('description5')}
                            image={img04}
                            urlEn={'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734'}
                            urlZhHant={'https://weianofsteel.medium.com/how-i-transitioned-to-front-end-developer-in-6-months-eae7a1d734'}
                            mode={mode}
                            box={box5}
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