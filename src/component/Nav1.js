import React from "react";
import { useRef } from 'react';
import "./Nav.css"
import Navbtn from "./Navbtn";
import { Link } from "react-router-dom";


function Nav() {

    const navRef = useRef();

    const showNavbar = () => {

        navRef.current.classList.toggle("responsive_nav");
    }



  return (
    <header>
        <nav ref = {navRef}>
            <div className="container">
                  <div className="home-btn">
                  <Link className="home" to="/" > 01:Home </Link>
                  </div>
                  <div className="resume-btn">
                  <Link className="resume" to="/Resume" > 02:MyResume </Link>
                  </div>
                  <div className="contant-btn">
                  <Link className="contact" to="/Contact" > 03:ContactMe </Link>    
                  </div>
            </div>
            <div>
            
            </div>
            
             
        </nav>
        <button className='nav_btn' onClick={showNavbar}>
            <Navbtn/>
        </button>

    
    </header>

  )
}

export default Nav;