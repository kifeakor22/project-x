import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import products from '../../products.json';
import './style.css';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TextField from '@mui/material/TextField';

const Product = () => {
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

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    prevArrow: <div className="slick-arrow slick-prev">‹</div>,  // Custom prev arrow
    nextArrow: <div className="slick-arrow slick-next">›</div>,  // Custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: '100%',
        margin: '0',
        backgroundColor: '#f7f7f7', // Add a light background color for visibility
        padding: '0',
        overflowX: 'auto',
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center', padding: '10px' }}>
        New and trending reviews
      </Typography>
      <Typography variant="body1" color="#ccc" textAlign="center">
        This week's popular reviews
      </Typography>

      <Slider {...settings}>
        {products.map((product) => (
          <Card
            key={product.id}
            id="products"
            data-aos="fade-up"
            sx={{
              boxShadow: '',
              width: '300px',
              height: 'auto',
              margin: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardMedia
              component="img"
              alt={product.alt}
              image={require(`${product.image}`)}
              sx={{
                height: '150px',
                objectFit: 'contain',
                marginBottom: '10px',
                marginTop: '10px',
              }}
            />
            <CardContent sx={{ textAlign: 'center', color: 'black' }}>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <img
                onClick={() => handleModalOpen(product)}
                className="goldenBtn"
                src={require('./assets/goldenBtn.png')}
                style={{ width: '100px', cursor: 'pointer' }}
              />
            </CardActions>
          </Card>
        ))}
      </Slider>

      {modalOpen && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}
  >
    <div
      style={{
        backgroundColor: '#F5A623', // Golden background
        borderRadius: '12px',
        maxWidth: '500px',
        width: '90%',
        padding: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflowY: 'auto', // Enable scrolling for smaller devices
        maxHeight: '90vh', // Ensure content doesn't overflow the screen
      }}
    >
      {/* Close Button */}
      <span
        onClick={handleModalClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '15px',
          fontSize: '24px',
          cursor: 'pointer',
          color: '#FFF',
          fontWeight: 'bold',
        }}
      >
        &times;
      </span>

      {/* Modal Content */}
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          marginBottom: '15px',
          color: 'black',
          fontWeight: 'bolder',
          fontSize: { xs: '1.2rem', sm: '1.5rem' }, // Responsive font size
        }}
      >
        {modalContent.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: '15px',
          color: '#FFF',
          textAlign: 'center',
          fontSize: { xs: '0.9rem', sm: '1rem' },
        }}
      >
        {modalContent.description}
      </Typography>

      {/* Responsive Image */}
      <img
        src={require(`${modalContent.image}`)}
        alt={modalContent.title}
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

      <Typography
        variant="body2"
        sx={{
          marginBottom: '15px',
          color: 'black',
          fontSize: { xs: '0.85rem', sm: '1rem' },
        }}
      >
        {modalContent.review}
      </Typography>

      {/* Responsive Form */}
      <form>
        <TextField
          fullWidth
          variant="outlined"
          label="Nose 👃"
          value={modalContent.smell || ''}
          sx={{
            marginBottom: '10px',
            '& .MuiInputLabel-root': { color: '#FFF' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
              color: '#FFF',
            },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Palate 👅"
          value={modalContent.taste || ''}
          sx={{
            marginBottom: '10px',
            '& .MuiInputLabel-root': { color: '#FFF' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
              color: '#FFF',
            },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Finish 🏁"
          value={modalContent.finish || ''}
          sx={{
            marginBottom: '10px',
            '& .MuiInputLabel-root': { color: '#FFF' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
              color: '#FFF',
            },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Country"
          value={modalContent.country || ''}
          sx={{
            marginBottom: '10px',
            '& .MuiInputLabel-root': { color: '#FFF' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
              color: '#FFF',
            },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="region"
          value={modalContent.region || ''}
          sx={{
            marginBottom: '10px',
            '& .MuiInputLabel-root': { color: '#FFF' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
              color: '#FFF',
            },
          }}
        />
      </form>

      {/* Responsive Button */}
      <Button
        variant="contained"
        sx={{
          width: '100%',
          backgroundColor: '#333',
          color: '#FFF',
          '&:hover': { backgroundColor: '#555' },
          fontSize: { xs: '0.9rem', sm: '1rem' },
          padding: { xs: '8px 12px', sm: '10px 20px' },
        }}
        href={modalContent.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy Now
      </Button>
    </div>
  </div>
)}

    </div>
  );
};

export default Product;

