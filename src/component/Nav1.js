import React from "react";
//<img src = {img1} alt = "img not found"/>
//import img1 from "E:/web development/react/reactapp/reactappingit/src/Asserts/img1.jpg"
//import {FaBars} from "react-icons/fa"
import { useRef } from 'react';
import "./Nav.css"
import Navbtn from "./Navbtn";


function Nav() {

    const navRef = useRef();

    const showNavbar = () => {

        navRef.current.classList.toggle("responsive_nav");
    }



  return (
    <header>
        <nav ref = {navRef}>
            <a href='./Home'>01 : Home</a>
            <a href='./Home'>02 : Home</a> 
        </nav>
        <button className='nav_btn' onClick={showNavbar}>
            <Navbtn/>
        </button>

    
    </header>

  )
}

export default Nav;