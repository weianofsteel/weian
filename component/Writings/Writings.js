import React from 'react'
import Header from '../Public/Header'
import Banner from '../Public/Banner'
import Drawer from '../Public/Drawer'
import Footer from '../Public/Footer'
import Showcase from './component/Showcase'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import { PageLoader } from '../Public/PageLoader'

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

export const Writings = () => {

    const classes = useStyles();

    const [drawer, setDrawer] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawer(true);
    }

    const handleDrawerClose = () => {
        setDrawer(false);
    }

    const mode = useSelector((state) => state.mode)

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
                            />
                        </div>


                        
                        <div className={classes.body}>
                            <Banner
                                mode={mode}
                            />
                        </div>

                        <div className={classes.body}>
                            <Showcase
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