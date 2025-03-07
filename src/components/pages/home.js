import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import './style.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Hero from '../hero';
import Product from '../products';
import AOS from 'aos';
import AboutUsImage from './assets/aboutus.jpg'; // Import your image here
import Blog from '../blog';
import { useNavigate } from 'react-router-dom';
import BlackFridayPopup from '../sales';
import Deal from '../deal';

function HomeContent() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <React.Fragment>
      {/* Black Friday Popup */}
      {/* insert Black friday pop here This will show the popup on page load */}
      <BlackFridayPopup/>

      {/* Hero unit */}
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' }, // Adjust font size for small, medium, and large screens
          textAlign: 'center', // Center the text horizontally
          display: 'flex', // Use flex to align content
          justifyContent: 'center', // Horizontally center content
          alignItems: 'center', // Vertically center content
          margin: '5px',
          color: 'linear-gradient(90deg, #F44336, #FF9800)',
          fontWeight: 'bolder',

        }}
      >
        <p>Scotch Whisky Gifts - reviewed with passion!</p>
      </Typography>

      {/* Hero unit */}
      <Hero />

      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Box
          className="aboutUs"
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '100%', // Ensures it uses full available width
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1)',
            },
            // Stack image and text on small screens and place them side-by-side on large screens
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          {/* Left Content */}
          <Box sx={{ maxWidth: '100%' }}>
            <Typography variant="h4"
              sx={{
                color: 'white',
                fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem', } 
                // Adjust font size for small, medium, and large screens
              }}>
              <p>Let’s start our whisky journey together…</p>
            </Typography>

            <Typography data-aos="fade-up" variant="body1" mt={2} gutterBottom padding={1}>
              <p>
                Hey there, fellow whisky enthusiasts. Welcome to our blog; Whiskytopia. We’re
                here to use our experience, knowledge, passion, and a touch of humour to guide
                you through the world of Scotch Whisky Gift Sets and our great single bottle
                finds.
              </p>
              <p>
                So, whether you are a newbie, semi-knowledgeable or an expert, we hope you can
                find something new. So, pull up a seat and get those taste buds ready!.....
              </p>
            </Typography>
          </Box>

          {/* Right Side Image */}
          <Box
            component="img"
            src={AboutUsImage}
            alt="About Us"
            sx={{
              maxWidth: { xs: '80%', sm: '50%' }, // Larger image on small screens
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              mt: { xs: 2, sm: 0 }, // Margin top for small screens to add spacing
            }}
          />
        </Box>

        {/* Centering the Button on small screens */}
        <Button onClick={() => navigate('/about-us')}
          sx={{
            color: "#F5A623",
            display: 'block',
            margin: '20px auto', // Center the button
          }}
          variant="contained"
          className="projectBtn"
          size="large"
        >
          About Us
        </Button>
        <Deal/>
       
        <Blog />
      </Container>
      
      <Product />

      {/* End footer */}
    </React.Fragment>
  );
}

export default function Home() {
  return <HomeContent />;
}
