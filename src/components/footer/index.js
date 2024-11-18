import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
    const [currentDate, setCurrentDate] = useState(moment().format('MMMM Do, YYYY'));
    const currentYear = moment().format('YYYY');
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDate(moment().format('MMMM Do, YYYY'));
      }, 60000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
        <>
    
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h5 className="mb-3">whiskytopia.co.uk</h5>    
            </div>
            <div className="col-md-3 text-md-right foot ">
              <p className="mb-3">{currentDate}</p>
              <p className="mb-0">London</p>
              <p className="mb-0">United Kingdom</p>
              <p className="mb-0"><i className="fa fa-phone mr-2" aria-hidden="true"></i></p>
              <WhatsAppWidget
              phoneNumber="+447807886318"
            message={`Hello! 👋🏼 \n\nWhat can we do for you?`}    
        />
            </div>  
          </div>
          <Button className='navLink'
              variant="button"
              href="https://twitter.com/Whiskytopia"
              sx={{ my: 1, mx: 1.5 }}
            >
              <TwitterIcon />
            </Button>
            <Button className='navLink'
              variant="button"
              href=""
              sx={{ my: 1, mx: 1.5 }}
            >
              <InstagramIcon/>
            </Button>
            <Button
            className='navLink'
              variant="button"
              href="https://www.youtube.com/@Whiskytopia"
              sx={{ my: 1, mx: 1.5 }}
            >
              <YouTubeIcon/>
            </Button>
            <Button className=" navLink fa-brands fa-tiktok" href="https://www.tiktok.com/@whiskytopia?is_from_webapp=1&sender_device=pc" target="_blank">
            </Button>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <small>
                &copy; {currentYear} whiskytopia. All Rights Reserved.
              </small>
            </div>
          </div>
          
        </div>
      </footer>
      </>
    );
  };
  
  export default Footer;