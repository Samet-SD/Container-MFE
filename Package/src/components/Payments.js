import { launch as launchOne} from "payments/Payments";
import React, { useRef, useEffect } from 'react';
import {useHistory} from 'react-router-dom'

export default () => {
    const ref = useRef(null);
    const history = useHistory();
  
    
    useEffect(() => {
        launchOne(ref.current,{
            onNavigate: ({pathname}) =>{
                //console.log(location);
                const myPath = history.location;
                if(pathname !== myPath){
                    history.push(pathname);
                    console.log(pathname);
                }
            }
        })
       
    }, []);
    
    return <div ref={ref} />
}
