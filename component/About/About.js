import React from 'react'
import Header from '../Public/Header'
import Banner from '../Public/Banner'
import Drawer from '../Public/Drawer'
import Footer from '../Public/Footer'

export const About = () => {

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
                    <div>
                        <Header
                            handleDrawerOpen={handleDrawerOpen}
                        />
                    </div>
                    
                    <div>
                        <Banner
                            mode={mode}
                        />
                    </div>

                    <div>
                        <Footer
                            mode={mode}
                        />
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