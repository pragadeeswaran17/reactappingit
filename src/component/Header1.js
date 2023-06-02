import React from "react";
import "./header1.css";
import Letters from "./Letters";
import backgroundimg from "./image.jpg";


function Header1() {

  const myStyle = {
    backgroundImage: `url(${backgroundimg})`
  }


  return (
    <div className="header_body">

        <div className="header" style={myStyle}>
            
          
             <div className="letters">
                <Letters/>
             </div>
       </div>
    </div>
  )
}

export default Header1;