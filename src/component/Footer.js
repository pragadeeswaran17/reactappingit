import React from 'react';
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function Footer() {
  return (
    <div>
         <footer className='footer'>
          <h1>
            Links
          </h1>

          <div className='icons-container'>
          <InstagramIcon className='items'/>
          <GitHubIcon className='items'/>
          <LinkedInIcon className='items'/>
          <MailOutlineIcon className='items'/>
          </div>






        </footer>
    </div>
  )
}

export default Footer