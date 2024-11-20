import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Box } from '@mui/material';
import products from '../../products.json'; // Importing product data from JSON

const Deal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleModalOpen = (product) => {
    setModalOpen(true);
    setModalContent(product);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalContent({});
  };

  return (
    <div>
      {/* Gold Background Section */}
      <div style={{ backgroundColor: '#F5A623', padding: '50px 0' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'black' }}>
          Black Friday Deals
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
          {products.slice(0, 3).map((product) => (
            <Box
              key={product.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '200px',
                cursor: 'pointer',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                overflow: 'hidden',
                textAlign: 'center',
                backgroundColor: 'white',
              }}
              onClick={() => handleModalOpen(product)}
            >
              <img
                src={process.env.PUBLIC_URL + product.image}
                alt={product.alt}
                style={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="h6" sx={{ padding: '10px', color: '#333' }}>
                {product.title}
              </Typography>
            </Box>
          ))}
        </div>
      </div>

      {/* Darker Shade Section */}
      <div style={{ backgroundColor: '#333', color: 'white', padding: '50px 0' }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Treat Yourself
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '20px' }}>
          Discover exclusive offers on premium whisky, handpicked for you.
        </Typography>
      </div>

      {/* Modal Pop-Up */}
      <Dialog open={modalOpen} onClose={handleModalClose}>
        <DialogTitle sx={{ backgroundColor: '#F5A623', color: 'white' }}>
          {modalContent.title}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: '#2C2C2C', color: 'white' }}>
          <Typography variant="body1">{modalContent.review}</Typography>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#F5A623' }}>
          <Button
            sx={{ color: 'white', backgroundColor: 'black' }}
            variant="contained"
            href={modalContent.link}
            target="_blank"
            rel="noopener noreferrer"
            
          >
            Buy Now
          </Button>
          <Button onClick={handleModalClose} sx={{ color: 'white' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Deal;
