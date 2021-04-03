import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import styles from '../../css/public.module.css'

const LoadingBar = (props) => {

    const [progress, setProgress] = React.useState(80);
    
    useEffect(()=>{
        
      },[])

    // const {
    //     mode
    // }  = props;

    var percent = progress + '%';

    return(
        <React.Fragment>
            
            <div className={styles.bar} style={{height:'1rem', width:percent}}>
                <p style={{color:'black'}}>{percent}</p>
            </div>

        </React.Fragment>
    )
}
  
export default LoadingBar