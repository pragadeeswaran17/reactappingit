import React from "react";
import Nav from "./Nav1";
import "./Nav.css";
import Letters from "./Letters"

function Header() {
  return (
    <div className="header">
      
      

      <Letters/>
      

      <div className="navbar">
        <Nav />
      </div>
    </div>
    

    
  )
}

export default Header;