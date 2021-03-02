import React from 'react'
import Header from '../Public/Header'
import Banner from '../Public/Banner'
import Drawer from '../Public/Drawer'
import Footer from '../Public/Footer'
import Showcase from './component/Showcase'

export const Writings = () => {

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
                        <Showcase/>
                    </div>

                    <div>
                        <Footer/>
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