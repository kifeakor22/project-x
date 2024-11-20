import React from 'react';
import './style.css'; // Link to your CSS file
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const AboutUs = () => {
  return (
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
            // Stack image and text on small screens and place them side-by-side on large screens
            flexDirection: { xs: 'column', sm: 'row' },
        }}
    >
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>About Us</h1>
        <p>Welcome to Whiskytopia: A Magical Journey for Every Palate</p>
        <img
          src={require('./assets/tonyjpg.jpg')}
          alt="Whiskytopia Hero"
          className="hero-image"
        />
      </section>
      


      {/* Content Section */}
      <section className="content-section">
        <div className="category">
          <h2>Novice</h2>
          <p>Sip, Learn, Enjoy - We're here to make your initiation enjoyable and fun. Explore basics, sip approachable blends, and savour the joy of your first dram. Your introduction to whisky perfection starts here.</p>
        </div>
        <div className="category">
          <h2>Intermediate</h2>
          <p>Elevate Your Palate - Discover hidden gems and elevate your tasting game. It's a step up, but the view from here is fantastic.</p>
        </div>
        <div className="category">
          <h2>Expert</h2>
          <p>Connoisseur's Corner - Are you a whisky aficionado who can identify a distillery by the sound of the cork popping? This section will delve into lesser-known, value-for-money, and luxurious brands which we hope gets your pulse rate to quicken.</p>
        </div>
        <img
          src={require('./assets/about.jpg')}
          alt="Whisky Selection"
          className="content-image"
        />
        <p className="about-summary">
          So, whether you're savouring your first drop or building a whisky library, Whiskytopia is your destination. Join us in the category that suits your fancy, and let the adventure begin. Here’s to experiencing, learning, and enjoying the remarkable world of Scotch Whisky. Slanj!
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <p>Welcome to Whiskytopia, a passionate, honest, and humorous Scotch Whisky review site. Meet Garry (G) and Tony (T): two enthusiastic geeks who get giddy about whisky and want to keep sharing and learning about the water of life.</p>
        <p>Look out for Hamish, our Highland Coo and social media guru. He might introduce himself on our platforms, as he is rather knowledgeable.</p>
      </section>

      {/* Interactive Section */}
      <section className="interactive-section">
        <h2>Let's Collab!</h2>
        <p>This is a two-way street. Share your pictures, comments, opinions, and suggestions for what our followers should be tasting.</p>
        <p>Contact us to collaborate and share the joy of Scotch Whisky!</p>
      </section>
    </div>
    </Box>
    </Container>
  );
};

export default AboutUs;
