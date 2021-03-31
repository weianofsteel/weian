import React, { useEffect } from 'react'
import Header from '../Public/Header'
import Banner from '../Public/Banner'
import Drawer from '../Public/Drawer'
import Footer from '../Public/Footer'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import { PageLoader } from '../Public/PageLoader'

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
                    />
                </React.Fragment>
            }
            
        </React.Fragment>
    )
}