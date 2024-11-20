import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import products from '../../products.json'; // Ensure correct path

const BlackFridayPopup = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(true); // Open the popup on component mount
  }, []);

  const handleClose = () => {
    setOpen(false); // Close the popup
  };

  // Use the first product as the featured product
  const featuredProduct = products[0];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ backgroundColor: '#F5A623', color: 'white' }}>
        🎉 Black Friday Sale! 🎉
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: '#2C2C2C', color: 'white' }}>
        <Typography variant="h6"  sx={{ color: '#F5A623' }}>
          Huge discounts on Scotch Whisky Gift Sets and bottles! 🍷
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '10px' }}>
          Don't miss out on our Black Friday deals! Enjoy up to 50% off selected products for a limited time.
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '10px', fontStyle: 'italic' }}>
          Offer valid until stocks last. Happy shopping!
        </Typography>

        {/* Featured Product Section */}
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h6"  sx={{ color: '#F5A623' }}>
            Featured Product:
          </Typography>
          <Box
            component="img"
            src={process.env.PUBLIC_URL + featuredProduct.image} // Use static path
            alt={featuredProduct.alt}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginTop: '10px',
            }}
          />
        <Button
                sx={{ color: '#F5A623' }}
                variant="contained"
                className="projectBtn"
                size="small"
                href={featuredProduct.link}
                target="_blank"
                rel="noopener noreferrer"
              >Buy Now</Button>
        </Box>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#F5A623' }}>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlackFridayPopup;
