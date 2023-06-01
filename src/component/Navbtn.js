import React, { useState } from 'react'
import "./Navbtn.css"

function Navbtn() {

    const [isActive, setActive] = useState("false");

    const handleToggle = ()=> {
        setActive(!isActive)
    };



  return (
    <div>
    <div className={isActive ? "container" : "change"} onclick="myfunction(this)">
        <button onClick={handleToggle}>
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
       </button>
    </div>
    </div>
  )
}

export default Navbtn;