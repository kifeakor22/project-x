import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { styled } from '@mui/system';
import blogs from '../../blog.json';

// Styled Card for the Blog Post
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

// BlogPostTemplate component that shows the full blog post when "Read More" is clicked
const BlogPostTemplate = ({ title, date, readTime, image, content }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Toggle full content visibility
  const handleReadMoreClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <BlogCard>
      {/* Image with Responsive Sizing */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'brightness(0.9)',
          '@media (max-width: 600px)': {
            height: '250px',
          },
        }}
      />

      {/* Blog Title, Date, and Read More Button */}
      <CardContent sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h5" component="h2" color="#F5A623" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="#ccc">
          {date} • {readTime}
        </Typography>

        {/* Toggle between showing preview and full content */}
        {showDetails ? (
          <Typography variant="body1" color="#F5A623" sx={{ marginTop: '10px' }}>
            {content}
          </Typography>
        ) : (
          <Typography variant="body2" color="#F5A623" sx={{ marginTop: '10px', maxHeight: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {content.slice(0, 100)}...
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleReadMoreClick}
          sx={{
            marginTop: '10px',
            color: '#FFF',
            backgroundColor: '#FFA500',
            '&:hover': { backgroundColor: '#FF8C00' },
          }}
        >
          {showDetails ? 'Show Less' : 'Read More'}
        </Button>
      </CardContent>
    </BlogCard>
  );
};

// Parent component that maps over blog data from JSON
const BlogList = () => {
  return (
    <div>
      {blogs.map((post, index) => (
        <BlogPostTemplate
          key={index}
          title={post.title}
          date={post.date}
          readTime={post.readTime}
          image={require(`./assets/${post.image.replace("require('./assets/", "").replace("')", "")}`)} // Adjust path for image import
          content={post.content}
        />
      ))}
    </div>
  );
};

export default BlogList;

