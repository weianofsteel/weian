import React from 'react'
import Header from '../Public/Header'
import Banner from '../Public/Banner'
import Drawer from '../Public/Drawer'
import Footer from '../Public/Footer'

export const Home = () => {

    const [drawer, setDrawer] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawer(true);
    }

    const handleDrawerClose = () => {
        setDrawer(false);
    }

    return(
        <React.Fragment>
            
            {drawer == false &&
                <React.Fragment>
                    <div>
                        <Header
                            handleDrawerOpen={handleDrawerOpen}
                        />
                    </div>
                    
                    <div>
                        <Banner/>
                    </div>

                    <div>
                        <Footer/>
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