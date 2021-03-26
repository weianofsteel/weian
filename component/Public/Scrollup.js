import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    icon: {
        fontSize:'4rem',
        color:'#8F8F8F',
        "&:hover":{
            color:'#1F1F1F'
        }
    },
    iconNight: {
        fontSize:'4rem',
        color:'#FFFFFF',
        "&:hover":{
            color:'#c9c9c9'
        }
    }
});


export const Scrollup = (props) => {
    
    const classes = useStyles();

    const [scrollC, setScrollC] = React.useState(0);

    useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        function onScroll() {
            setScrollC(window.scrollY);
        }  
    },[])

    const {
        mode
    } = props;

    const handleScrolltoTop = () => {
        if(window !== undefined) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    }

    return(
        <React.Fragment>
            <Grid container style={{align:'right'}}>
                <Grid item xs={5}></Grid>
                
                <Grid item xs={2}>
                    
                    {scrollC > 400 &&
                        <Button 
                            onClick={handleScrolltoTop}
                            style={{backgroundColor: 'transparent'}}
                            disableRipple={true}
                        >
                            <ExpandLessIcon className={mode==='day'?classes.icon:classes.iconNight}/>
                        </Button>
                    }

                </Grid>

                <Grid item xs={5}></Grid>

            </Grid>
        </React.Fragment>
    )
}