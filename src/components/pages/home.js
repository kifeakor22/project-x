import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import './style.css';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Nav from '../nav';
import Hero from '../hero';
import Product from '../products';
import AOS from 'aos';
import AboutUsImage from './assets/aboutus.jpg'; // Import your image here

function HomeContent() {
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);

    return (
        <React.Fragment>
            {/* Hero unit */}
            <Nav />

            {/* Hero unit */}
            <Hero />

            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Box
                    className="aboutUs"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        maxWidth: '100%', // Ensures it uses full available width
                        transition: 'transform 0.2s',
                        '&:hover': {
                            transform: 'scale(1)',
                        },
                    }}
                >
                    {/* Left Content */}
                    <Box sx={{ maxWidth: '100%' }}>
                        <Typography variant="h3">
                            <p>Lets start the journey</p>
                        </Typography>

                        <Typography data-aos="fade-up" variant="body1" mt={2} gutterBottom>
                            <p>
                                Hey there, fellow whisky enthusiasts. Welcome to our blog; Whiskytopia. We’re
                                here to use our experience, knowledge, passion, and a touch of humour to guide
                                you through the world of Scotch Whisky Gift Sets and our great single bottle
                                finds.
                            </p>
                            <p>
                                So, whether you are a newbie, semi-knowledgeable or an expert, we hope you can
                                find something new. So, pull up a seat and get those taste buds ready.....
                            </p>
                        </Typography>
                        <Button sx={{color: "#F5A623"}} variant="contained" className='projectBtn' size="largegit add " href='' target='_blank'>About Us</Button>
                    </Box>

                    {/* Right Side Image */}
                    <Box
                        component="img"
                        src={AboutUsImage}
                        alt="About Us"
                        sx={{
                            maxWidth: '35%',
                            height: 'auto',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </Box>

                <Product />
            </Container>
            {/* End footer */}
        </React.Fragment>
    );
}

export default function Home() {
    return <HomeContent />;
}
