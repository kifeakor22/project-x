import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Card, CardMedia } from '@mui/material';
import products from '../../products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));



  if (!product) {
    return (
      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ color: '#F5A623', fontWeight: 'bold' }}>
          Product not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#F7F7F7', // Light grey background
        borderRadius: '16px',
        boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Card
        sx={{
          padding: 2,
          borderRadius: '16px',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#FFF',
        }}
      >
        <CardMedia
          component="img"
          image={product.image} // Ensure the path matches your folder structure
          alt={product.title}
          sx={{
            borderRadius: '16px',
            mb: 3,
            height: '300px',
            objectFit: 'cover',
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            color: '#F5A623', // Whiskytopia's primary color
          }}
        >
          {product.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
          {product.details}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#F5A623',
            mb: 3,
          }}
        >
          {product.price}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#F5A623',
            color: '#FFF',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#D4881C',
            },
          }}
          href="/productlist"
        >
          Back to Products
        </Button>
      </Card>
    </Box>
  );
};

export default ProductDetail;
