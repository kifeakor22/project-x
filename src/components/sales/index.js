import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import products from '../../products.json'; // Ensure the correct path to your products JSON file

const BlackFridayPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false); // Open the popup on component mount change to true when you want the popup to open
  }, []);

  const handleClose = () => {
    setOpen(false); // Close the popup
  };

  // Use the first product as the featured product
  const featuredProduct = products[0];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiDialog-paper': {
          width: '90%',
          maxWidth: '500px',
          borderRadius: '15px',
          overflow: 'hidden',
          background: '#1C1C1E', // Sleek dark background
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
          color: 'white',
        },
      }}
    >
      {/* Dialog Header */}
      <DialogTitle
        sx={{
          background: 'linear-gradient(90deg, #F44336, #FF9800)',
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '20px',
          padding: '16px 24px',
        }}
      >
        🎉 Sale! 🎉
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent
        sx={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        {/* Sale Details */}
        <Typography
          variant="h6"
          sx={{
            color: '#FF9800',
            fontWeight: '500',
            textAlign: 'center',
            fontSize: '18px',
          }}
        >
          Up to 50% Off on Scotch Whisky Gift Sets! 🥃
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#E0E0E0',
            fontSize: '14px',
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          Don’t miss out on this limited-time deal! Grab your favorite products before they sell out.
        </Typography>

        <Divider sx={{ width: '100%', background: '#333', margin: '15px 0' }} />

        {/* Featured Product Section */}
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#FF9800',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            Featured Product
          </Typography>
          <Box
            component="img"
            src={process.env.PUBLIC_URL + featuredProduct.image} // Dynamic image path
            alt={featuredProduct.alt}
            sx={{
              width: '100%',
              maxWidth: '300px',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              marginTop: '10px',
            }}
          />
          <Button
            variant="contained"
            href={featuredProduct.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              marginTop: '10px',
              backgroundColor: '#FF9800',
              color: '#1C1C1E',
              fontWeight: 'bold',
              fontSize: '14px',
              padding: '10px 20px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#F57C00',
              },
            }}
          >
            Buy Now for {featuredProduct.price}
          </Button>
        </Box>
      </DialogContent>

      {/* Dialog Footer */}
      <DialogActions
        sx={{
          justifyContent: 'center',
          background: '#1C1C1E',
          padding: '10px 20px',
        }}
      >
        <Button
          onClick={handleClose}
          sx={{
            color: '#FF9800',
            fontWeight: 'bold',
            fontSize: '14px',
            textTransform: 'uppercase',
            '&:hover': {
              color: '#F57C00',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlackFridayPopup;
