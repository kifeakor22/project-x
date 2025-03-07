import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Container, Typography, Box } from '@mui/material';
import blogs from '../../blog.json';

const BlogDetail = () => {
  const { id } = useParams();
  const blogPost = blogs.find((post, index) => index === parseInt(id, 10));

  if (!blogPost) {
    return (
      <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h4" color="error">
          Blog not found
        </Typography>
      </Container>
    );
  }

  // Custom image renderer for Markdown images
  const renderers = {
    img: ({ src, alt }) => {
      // Ensure the correct path for images in markdown
      const resolvedSrc = src.startsWith('./assets/') ? `/assets/${src.split('/').pop()}` : src;

      return (
        <img
          src={resolvedSrc}
          alt={alt}
          style={{
            display: 'block',        // Ensures image is centered
            maxWidth: '100%',        // Responsive width
            width: '80%',            // Adjust width for better fit
            height: 'auto',          // Maintain aspect ratio
            borderRadius: '10px',    // Rounded corners
            margin: '20px auto',     // Center the image
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for aesthetics
          }}
        />
      );
    },
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
        {blogPost.title}
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: 'center', color: 'gray', mb: 4 }}>
        {blogPost.date} • {blogPost.readTime}
      </Typography>

      {/* Blog Content */}
      <Box sx={{ lineHeight: 1.7, fontSize: '1.1rem', color: '#F5F5F5' }}>
        <ReactMarkdown children={blogPost.post} remarkPlugins={[remarkGfm]} components={renderers} />
      </Box>
    </Container>
  );
};

export default BlogDetail;
