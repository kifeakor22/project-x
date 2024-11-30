import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
} from '@mui/material';
import products from '../../products.json';

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
      <Box
        sx={{
          backgroundColor: '#F5A623',
          padding: { xs: '30px 10px', md: '50px 0' },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'black',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            mb: 3,
            animation: 'fadeIn 1s ease-in-out',
          }}
        >
          Black Friday Deals
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          {products.slice(0, 6).map((product) => (
            <Box
              key={product.id}
              onClick={() => handleModalOpen(product)}
              sx={{
                width: { xs: '100%', sm: '250px' },
                cursor: 'pointer',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                overflow: 'hidden',
                textAlign: 'center',
                backgroundColor: 'white',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <img
                src={process.env.PUBLIC_URL + product.image}
                alt={product.alt}
                style={{ width: '100%', height: 'auto' }}
              />
              <Typography
                variant="h6"
                sx={{
                  padding: '10px',
                  color: '#333',
                  fontWeight: 'bold',
                }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#777', paddingBottom: '10px' }}
              >
                {product.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Darker Shade Section */}
      <Box
        sx={{
          backgroundColor: '#2C2C2C',
          color: 'white',
          padding: { xs: '30px 10px', md: '50px 0' },
          textAlign: 'center',
          mt: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            animation: 'slideIn 1s ease-in-out',
          }}
        >
          Treat Yourself
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', mx: 'auto' }}>
          Discover exclusive offers on premium whisky, handpicked just for you.
        </Typography>
      </Box>

      {/* Modal Pop-Up */}
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '20px',
            backgroundColor: '#2C2C2C',
            color: 'white',
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: '#F5A623',
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {modalContent.title}
        </DialogTitle>
        <DialogContent>
        {modalContent.image && (
      <img
        src={process.env.PUBLIC_URL + modalContent.image}
        alt={modalContent.alt || 'Product Image'}
        style={{
            width: '100%',
            maxWidth: '300px', // Limit image size
            height: 'auto',
            borderRadius: '8px',
            display: 'block',
            margin: '0 auto 20px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
      />
    )}
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.8,
            }}
          >
            
            {modalContent.review}
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            pb: 2,
            backgroundColor: '#F5A623',
          }}
        >
          <Button
            variant="contained"
            href={modalContent.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              '&:hover': {
                backgroundColor: '#444',
                margin: '5'
              },
            }}
          >
            Buy Now {modalContent.price}
          </Button>
          <Button
            onClick={handleModalClose}
            sx={{
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Deal;
