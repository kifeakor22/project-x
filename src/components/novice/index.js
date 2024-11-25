import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import noviecImage from './assets/novice.png';

const NoviceSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F9F7F4', // Light beige
        padding: { xs: '40px 20px', md: '80px 40px' },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px', // Add spacing between sections
      }}
    >
      {/* First Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src={noviecImage}
          alt="Whisky glass"
          sx={{
            maxWidth: { xs: '80%', sm: '50%' }, // Larger image on small screens
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            mt: { xs: 2, sm: 0 }, // Margin top for small screens to add spacing
          }}
        />

        {/* Content Section */}
        <Box
          sx={{
            textAlign: 'left',
            maxWidth: '600px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: '#F5A623', // Warm brown for title
              marginBottom: '20px',
              lineHeight: 1.2,
            }}
          >
            The Beginning of <br />
            Your Whisky Adventure...
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              color: '#5A5A5A', // Neutral gray for text
              marginBottom: '20px',
            }}
          >
            Welcome, fellow whisky lovers, to the Whisky Novice's Playground!
            Wipe your feet at the mat before coming in... lol. Get ready for a
            journey that’s as delightful as it is enlightening. If you’re new to
            the world of whisky, fear not—this is where the fun begins!
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: '16px',
              color: '#5A5A5A',
              marginBottom: '30px',
            }}
          >
            Our carefully crafted reviews are designed to help you understand
            and learn what whisky is all about. From flavors and pronunciations
            to distilleries, regions, and processes, we make it fun without
            overwhelming you with information overload.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#F5A456', // Match the title color
              color: '#FFF',
              fontWeight: 'bold',
              padding: '10px 20px',
              borderRadius: '25px',
              '&:hover': {
                backgroundColor: '#703B22',
              },
            }}
          >
            Start Your Journey
          </Button>
        </Box>
      </Box>

      {/* Whiskytopia Reviews Section */}
      <Box
        sx={{
          backgroundColor: '#F5A456', // Dark brown background
          color: '#FFF',
          borderRadius: '10px',
          padding: '40px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Whiskytopia Reviews
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '20px',
          }}
        >
          We at Whiskytopia review the market constantly for the very best value
          for money and gift set offers for the novice palette.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '20px',
          }}
        >
          We believe these whisky gift sets and accessories below give a gentle
          introduction to your whisky experience. Please read our reviews (WT
          Reviews) to understand why we have included these to our list.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            lineHeight: 1.8,
          }}
        >
          If you want to explore further whisky products, we recommend the
          following whisky retailers:{' '}
          <Link
            href="https://www.whiskyshop.com" // Replace with the correct URL
            sx={{ color: '#FFS789', fontWeight: 'bold' }}
          >
            The Whisky Shop
          </Link>{' '}
          and{' '}
          <Link
            href="https://www.masterofmalt.com" // Replace with the correct URL
            sx={{ color: '#FFS789', fontWeight: 'bold' }}
          >
            Master of Malt
          </Link>
          . Please use the below links to have a nosey about.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#F5A623', // Golden button
              color: '#8C4B2A',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FFC107',
              },
            }}
            href="https://www.whiskyshop.com/?utm_source=AffiliateFuture&utm_medium=affiliate&utm_campaign=www.whiskytopia.co.uk&affc=1f677403-12ae-4153-90c5-db4a3d8583ed"
          >
            Whisky Shop
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'black',
              color: 'black',
              fontWeight: 'bold',
              '&:hover': {
                borderColor: '#FFC107',
                color: '#FFC107',
              },
            }}
            href='https://www.masterofmalt.com/?utm_source=www.whiskytopia.co.uk&utm_medium=affiliate&adnetwork=af&affc=00ef216a-5642-4572-9744-2d911d00be41'
          >
            Master of Malt
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NoviceSection;
