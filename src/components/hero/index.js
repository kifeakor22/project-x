import React, { useEffect } from 'react';
import './style.css';
import { Container, Typography, Divider } from '@mui/material';
import AOS from 'aos';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);

    return (
        <>
            <Container
                className="heroGrid"
                disableGutters
                maxWidth="lg"
                component="main"
                sx={{
                    pt: { xs: 4, sm: 8 }, // Adjust padding top for small screens
                    pb: { xs: 3, sm: 6 }, // Adjust padding bottom for small screens
                    maxWidth: { xs: 'sm', md: 'lg' }, // Adjust maxWidth for small screens
                    minHeight: { xs: '50vh', sm: '70vh' }, // Reduce height on small screens
                    minHeight: { xs: '30vh', sm: '50vh' }, // Reduced height by 40% for larger screens
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end', // Centers the text vertically
                    alignItems: 'center', // Centers the text horizontally
                                    
                }}
            >
               
                <Typography
                    data-aos="fade-left"
                    className="heroContent"
                    variant="h3"
                    align="center"
                    color="text.secondary"
                    component="p"
                    sx={{
                        fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' } // Adjust font size for small, medium, and large screens
                      }}
                    
                >
                    <b>A Whisky Review site</b>
                </Typography>
            </Container>
            <div>
                <Divider className="Divider" textAlign="right"></Divider>
            </div>
        </>
    );
};

export default Hero;
