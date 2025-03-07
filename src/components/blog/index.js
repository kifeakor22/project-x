import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import blogs from '../../blog.json';

const BlogCard = styled(Card)({
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
});

const BlogPostCard = ({ post }) => {
  return (
    <BlogCard>
      <CardMedia
        component="img"
        image={require(`./assets/${post.image}`)}
        alt={post.title}
        sx={{ height: { xs: '250px', sm: '400px' }, objectFit: 'cover' }}
      />
      <CardContent sx={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#F5A623' }}>
          {post.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
          {post.date} • {post.readTime}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6, maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {post.content.substring(0, 150)}...
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#F5A623', color: '#FFF', fontWeight: 'bold', '&:hover': { backgroundColor: '#FF8C00' } }}
          component={Link}
          to={`/blog/${post.id}`}
        >
          Read More
        </Button>
      </CardContent>
    </BlogCard>
  );
};

const BlogList = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5, color: '#F5A623' }}>
        Whiskytopia's Blogs
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {blogs.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </Box>
    </Container>
  );
};

export default BlogList;
