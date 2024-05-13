import React, { useEffect } from "react";

import './preloder.css'
import { preLoaderAnim } from "../animation/index";

const Preloder=()=>{


    useEffect(()=>{
        preLoaderAnim()
    },[])
return (<>
  <div className="preloder">
    <div className="text-container">
<h3 className="text-center">Welcome</h3>
<span>please wait...</span>
    </div>
  </div>


</>)


}

export default Preloder;