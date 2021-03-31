import React, { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
 
export const PageLoader = (props) => {
  
  const [progress, setProgress] = React.useState(0);

  useEffect(()=>{
    setProgress(100);
  },[])

  const {
    mode
  } = props;
 
  return (
    <div>
      <LoadingBar
        color={mode==='day'?'black':'white'}
        height={3}
        waitingTime={600}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  )
}