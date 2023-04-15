import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import './style.css'
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Nav from '../nav';
import Hero from '../hero';
import Product from '../products';
import AOS from 'aos';



function HomeContent() {

        useEffect(()=>{
        AOS.init({
            duration: 3000
        })
    },[])

  return (
    <React.Fragment>
      
      {/* Hero unit */}
      <Nav/>
      
      {/* Hero unit */}
      <Hero/>
     
      
      {/* End hero unit */}
      
      <Container maxWidth="md" component="main">
        <Box className='aboutUs' sx={{
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1)',
        },
    }}>
        <Divider style={{ boarderColor: '#F5A623', borderBottomWidth: '3px' }} className='divider' textAlign='center'>
  <Typography variant='h4' sx={{ textAlign: 'center', padding: '10px' }}>Who We Are?</Typography>
</Divider>


        <Typography data-aos="fade-up" variant='body1' mt={2} gutterBottom>
    <p>Welcome to Whiskytopia! We're a group of lifelong pals from Glasgow, Scotland who review the best Scotch Whisky Gifts from carefully selected U.K. retailers. Our goal is to suggest gifts based on the occasion with a fun, humorous, and approachable tone. We're not your typical stuffy whisky blog or review site. We're passionate about Scotland, its people, land, and of course, its national drink - Scotch Whisky!</p>

    <p>We carefully select Whisky Gift items that we would either like to receive or give to loved ones, and our aim is to showcase and educate you on our years of personal enjoyment of various Scotch, combined with our extensive research of leading online whisky distilleries and retailers. We're thrilled you stopped by and invite you to stay awhile, have some fun, interact with us, and share your personal whisky journey with the wider community.</p>

    <p>Please note that any views expressed are solely those of the founders, and we may receive a commission from online retailers for any products you choose to purchase through our website's links. As responsible adults, we ask that you enjoy our content responsibly, and remember to sip, not slurp! Slàinte Mhath! (Cheers). 

    Thank you for visiting Whiskytopia.</p>
   
</Typography>

            </Box>

    
        <Product/>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Home() {
  return <HomeContent />;
}