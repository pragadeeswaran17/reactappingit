import React from 'react'
import "./About.css"
import Footer from './Footer';

function About() {
  return (
    <div className='about'>
        <h1>
            Hi there!
        </h1>

        <p>
            My name is pragadeeswaran. 
            I recently graduated with a Bachelor 
            from Dhanalakhmi Srinivasan Engineering college 
        </p>

        <h3>
          Currently, I am:
        </h3>

        <ol>
            <li>
              <p>Learing New tech </p>
            </li>
            <li>
              <p>Developing websites using reactjs and python</p>
            </li>
            <li>
              <p>Looking for intresting and impactful work / website development / python / (please reach out)</p>
            </li>
        </ol>

        <Footer/>



       

        



    </div>
  )
}

export default About;