import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Nav = () => {


    return(
        <>
        <AppBar
        position="static"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      className='navigation'>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
            
                <img
                src={require('../products/assets/logo.jpg')} 
                alt='company logo'
                />
        

          <Typography className='navLink' variant="h6" noWrap sx={{ flexGrow: 1 }}>
            WhiskyTopia
          </Typography>
          <nav>
            
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
          </nav>
          <Button className=" navLink fa-brands fa-tiktok" href="https://www.tiktok.com/@whiskytopia?is_from_webapp=1&sender_device=pc" target="_blank">
            
          </Button>
        </Toolbar>
      </AppBar>
        </>
    )
}

export default Nav