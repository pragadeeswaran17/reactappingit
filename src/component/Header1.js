import React from "react";
import "./header1.css";
import Letters from "./Letters"


function Header1() {
  return (
    <div className="header_body">

        <div className="header">
           
             <div className="letters">
                <Letters/>
             </div>
        </div>
    </div>
  )
}

export default Header1;