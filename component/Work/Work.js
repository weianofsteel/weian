import React, { useEffect } from 'react'
import Header from '../Public/Header'
import Banner from '../Public/Banner'
import Drawer from '../Public/Drawer'
import Footer from '../Public/Footer'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import { PageLoader } from '../Public/PageLoader'
import LearnByDoing from '../Home/component/LearnByDoing'
import Skill from '../Home/component/Skill'
import Sharing from '../Home/component/Sharing'
import Working from './component/Working'

const useStyles = makeStyles({
    dayBackground:{
        backgroundColor:'white',
        color:'#1F1F1F'
    },
    nightBackground:{
        backgroundColor:'black',
        color:'#FFFFFF'
    },
    body:{
        paddingLeft:'8%', 
        paddingRight:'8%'
    }
})

export const Work = () => {

    const classes = useStyles();
    
    const [drawer, setDrawer] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawer(true);
    }

    const handleDrawerClose = () => {
        setDrawer(false);
    }

    const mode = useSelector((state) => state.mode)
    const lang = useSelector((state) => state.lang)

    return(
        <React.Fragment>
            
            {drawer == false &&
                <React.Fragment>
                    <div className={mode==='day'?classes.dayBackground:classes.nightBackground}>
                        
                        <PageLoader mode={mode}/>

                        <div className={classes.body}>
                            <Header
                                handleDrawerOpen={handleDrawerOpen}
                                mode={mode}
                                lang={lang}
                            />
                        </div>
                        
                        <div className={classes.body} style={{marginTop:'8rem'}}>
                            <Banner
                                mode={mode}
                            />
                        </div>

                        <div className={classes.body} style={{marginTop:'6rem'}}>
                            <Working
                                mode={mode}
                            />
                        </div>

                        <div className={classes.body} style={{marginTop:'6rem'}}>
                            <Skill
                                mode={mode}
                            />
                        </div>

                        <div className={classes.body} style={{marginTop:'6rem'}}>
                            <Sharing
                                mode={mode}
                            />
                        </div>

                        <div className={classes.body} style={{marginTop:'6rem'}}>
                            <LearnByDoing
                                mode={mode}
                            />
                        </div>

                        <div className={classes.body}>
                            <Footer
                                mode={mode}
                            />
                        </div>

                    </div>
                    
                </React.Fragment>
            }

            {drawer == true &&
                <React.Fragment>
                    <Drawer
                        handleDrawerClose={handleDrawerClose}
                        lang={lang}
                    />
                </React.Fragment>
            }
            
        </React.Fragment>
    )
}