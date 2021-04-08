import React from 'react'
import Header from '../Public/Header'
import Banner from '../Public/Banner'
import Drawer from '../Public/Drawer'
import Footer from '../Public/Footer'
import { PageLoader } from '../Public/PageLoader'
import LoadingBar from '../Public/LoadingBar'
import Bio from './component/Bio'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
    dayBackground:{
        backgroundColor:'#FFFFFF',
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

export const About = () => {

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
                    <PageLoader mode={mode}/>
                    <div className={mode==='day'?classes.dayBackground:classes.nightBackground}>

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
                            <Bio
                                mode={mode}
                            />
                        </div>

                        <div className={classes.body} style={{marginTop:'4rem'}}>
                            <Footer
                                mode={mode}
                            />
                        </div>
                    </div>
                    
                </React.Fragment>
            }

            {drawer == true &&
                <React.Fragment>
                    <div style={{height:'100vh', backgroundColor:'#1f1f1f'}}>
                    <Drawer
                        handleDrawerClose={handleDrawerClose}
                    />
                    </div>
                </React.Fragment>
            }
            
        </React.Fragment>
    )
}