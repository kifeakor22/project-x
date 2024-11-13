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
                }}
            >
                <Typography
                    data-aos="fade-right"
                    className="heroContent"
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    <span className="exciting-font">WhiskyTopia</span>
                </Typography>
                <Typography
                    data-aos="fade-left"
                    className="heroContent"
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    <b>A Scotch Whisky gift review site</b>
                </Typography>
            </Container>
            <div>
                <Divider className="Divider" textAlign="right"></Divider>
            </div>
        </>
    );
};

export default Hero;
