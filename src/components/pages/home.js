import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import './style.css'
import { Button, Divider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Nav from '../nav';
import Hero from '../hero';
import Product from '../products';
import AOS from 'aos';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function HomeContent() {

        useEffect(()=>{
        AOS.init({
            duration: 3000
        })
    },[])

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
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
      <Divider sx={{ borderColor: '#F5A623 !important', borderBottomWidth: '3px' }} className='divider' textAlign='center'>
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
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Home() {
  return <HomeContent />;
}