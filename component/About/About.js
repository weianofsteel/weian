import React from 'react'
import Header from '../Public/Header'
import Banner from '../Public/Banner'
import Drawer from '../Public/Drawer'
import Footer from '../Public/Footer'
import Content from './component/Content'
import { makeStyles } from '@material-ui/core/styles'

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

    const [ mode, setMode ] = React.useState('day');

    const handleDrawerOpen = () => {
        setDrawer(true);
    }

    const handleDrawerClose = () => {
        setDrawer(false);
    }

    const handleMode = () => {
        if(mode === 'day') {
          setMode('night')
        }else{
          setMode('day')
        }
    }

    return(
        <React.Fragment>
            
            {drawer == false &&
                <React.Fragment>
                    <div className={mode==='day'?classes.dayBackground:classes.nightBackground}>
                        <div className={classes.body}>
                            <Header
                                handleDrawerOpen={handleDrawerOpen}
                                handleMode={handleMode}
                                mode={mode}
                            />
                        </div>
                        
                        <div className={classes.body}>
                            <Banner
                                mode={mode}
                            />
                        </div>

                        {/* <div className={classes.body}>
                            <Content
                                mode={mode}
                            />
                        </div> */}

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