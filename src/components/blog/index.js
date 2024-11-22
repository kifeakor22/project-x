import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Box, Typography, Card, CardMedia, CardContent, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import blogs from '../../blog.json';
import aImage from './assets/a.jpg';  // Import the image directly


// Styled Card Component
const BlogCard = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
  margin: '20px auto',
  overflow: 'hidden',
  borderRadius: '16px',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)',
  },
}));

const BlogPostTemplate = ({ title, date, readTime, image, content, highlight, post }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowDetails(!showDetails);
  };

  // Custom renderer for images
  const renderers = {
    img: ({ src, alt }) => {
      // Manually resolve the path for known images
      const imagePath = src === './assets/a.jpg' ? aImage : src; // Add more conditions for other images
      return <img src={imagePath} alt={alt} style={{ maxWidth: '100%', borderRadius: '8px',width: '80%',height: 'auto', }} />;
    },
  };

  return (
    <BlogCard
      sx={{
        backgroundColor: highlight ? '#F5A623' : '#FFF',
        color: highlight ? '#FFF' : '#333',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <CardMedia
        component="img"
        image={require(`./assets/${image}`)} // Ensure images in 'assets' folder are properly referenced
        alt={title}
        sx={{
          height: { xs: '250px', sm: '400px' },
          objectFit: 'cover',
          filter: highlight ? 'brightness(0.8)' : 'brightness(1)',
        }}
      />
      <CardContent sx={{ padding: '20px', textAlign: 'center' }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 'bold',
            mb: 1,
            color: highlight ? '#FFF' : '#F5A623',
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: highlight ? '#FFF' : '#666', mb: 2 }}>
          {date} • {readTime}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mb: 3,
            lineHeight: 1.6,
            maxHeight: showDetails ? 'none' : '100px',
            overflow: showDetails ? 'visible' : 'hidden',
            textOverflow: 'ellipsis',
            
          }}
        >
          {content}
        </Typography>
        {showDetails && (
          <Box
            sx={{
              mt: 3,
              fontSize: 'larger',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
               color: '#655'
            }}
          >
            <ReactMarkdown
              children={post}
              remarkPlugins={[remarkGfm]}
              components={renderers} // Use custom renderer for images
            />
          </Box>
        )}
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: highlight ? '#333' : '#F5A623',
            color: highlight ? '#FFF' : '#FFF',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: highlight ? '#555' : '#FF8C00' },
          }}
          onClick={handleReadMoreClick}
        >
          {showDetails ? 'Show Less' : 'Read More'}
        </Button>
      </CardContent>
    </BlogCard>
  );
};

const BlogList = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 5,
          color: '#F5A623',
        }}
      >
        Whisky Advent Calendars
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, }}>
        {blogs.map((post, index) => (
          <BlogPostTemplate
            key={index}
            title={post.title}
            date={post.date}
            readTime={post.readTime}
            image={post.image}
            content={post.content}
            post={post.post} // Pass the post field
            highlight={index === 0} // Highlight the first post
          />
        ))}
      </Box>
    </Container>
  );
};

export default BlogList;
