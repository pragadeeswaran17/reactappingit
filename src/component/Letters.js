import React from 'react'
import "./Letters.css"
import { Cursor, Typewriter} from "react-simple-typewriter";

function TypeLetter() {

    
    return (

        <div className='body_letters'>
          <h1 className='typeletter'>
            
            Hello, I am
           <span className='letters'>
            <Typewriter 
            loop
            cursor
            cursorStyle= ""
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words= {[ " Pragadeeshwaran", " an Engineer", " a Developer", " a Techie, car Lover, music lover and Moon enthusiast" ]}
            />
           </span>
           <span className='cursor'>
            <Cursor/>
           </span>
           </h1>
        </div>
  )
}

export default TypeLetter;