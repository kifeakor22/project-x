import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import blueStarImage from './assets/advent1.jpg'; // Adjust the path as needed

const BlogCard = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
  margin: '20px auto',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const Blog = () => {
  return (
    <BlogCard>
      {/* Full Width Image with Responsive Sizing */}
      <CardMedia
        component="img"
        image={blueStarImage}
        alt="Festive whisky calendar background"
        sx={{
          width: '100%',
          height: '700px', // Default height for larger screens
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'brightness(0.9)', 
          // Media query for small screens
          '@media (max-width: 600px)': {
            height: '300px', // Reduced height for smaller screens
          },
        }}
      />
      
      {/* Blog Content */}
      <CardContent sx={{ color: '#FFF', padding: '20px' }}>
        <Typography variant="h4" component="h2" color="#F5A623" gutterBottom>
          Top 10 Whisky Advent Calendars for the Perfect Festive Gift
        </Typography>
        <Box display="flex" justifyContent="space-between" mb={2} sx={{ color: '#ccc' }}>
          <Typography variant="body2">11/3/2024</Typography>
          <Typography variant="body2">5 min read</Typography>
        </Box>
        <Typography variant="body1" color="#F5A623">
          The festive season is almost here, and let’s be honest – nothing quite says “Merry Christmas” like a Whisky Advent Calendar! 
          Who doesn’t enjoy the thrill of opening those tiny doors each day? Whisky advent calendars are the ultimate countdown, packed with 
          excitement, warmth, and, of course, a delicious dram to help you unwind as the holidays draw near.
        </Typography>
      </CardContent>
    </BlogCard>
  );
};

export default Blog;
