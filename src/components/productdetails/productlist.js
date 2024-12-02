import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import products from '../../products.json';

const ProductList = () => {
  // Whiskytopia color palette
  const colors = {
    primary: '#F5A623', // Orange
    secondary: '#333333', // Dark Grey
    accent: '#FFF', // White
    background: '#F7F7F7', // Light Grey
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Responsive check

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: colors.background,
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          color: colors.primary,
          letterSpacing: '0.1em',
        }}
      >
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                borderRadius: '16px',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)',
                },
                backgroundColor: colors.accent,
              }}
            >
              <Box sx={{ padding: 2, backgroundColor: colors.background }}>
                <CardMedia
                  component="img"
                  image={product.image} // Ensure the images are dynamically loaded
                  alt={product.title}
                  sx={{
                    height: isMobile ? '180px' : '200px',
                    objectFit: 'contain',
                    margin: '0 auto',
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  textAlign: 'center',
                  padding: isMobile ? '16px' : '24px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    color: colors.secondary,
                  }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.secondary,
                    mb: 2,
                    fontSize: isMobile ? '0.9rem' : '1rem',
                  }}
                >
                  {product.description}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: colors.primary,
                    mb: 3,
                  }}
                >
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                   href={product.link}
            target="_blank"
                  sx={{
                    backgroundColor: colors.primary,
                    color: colors.accent,
                    fontWeight: 'bold',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: '#E18B00', // Darker orange
                    },
                  }}
                  
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
