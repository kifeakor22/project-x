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
            <CardContent sx={{ textAlign: 'center' }}>
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
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.description}</p>
            <p>{modalContent.review}</p>
            <form>
  {/* Populating form with product data */}
  <TextField
    className="NewModal"
    fullWidth
    variant="outlined"
    label="Nose 👃"
    value={modalContent.smell} // Populating from product data
    placeholder="Describe the smell"
    sx={{
      marginBottom: '10px',
      '& .MuiInputLabel-root': { color: '#F5A623' },
      '& .MuiOutlinedInput-root': {
        '& fieldset': { border: 'none' }, // Remove border
        '&:hover fieldset': { border: 'none' }, // Remove border on hover
        '&.Mui-focused fieldset': { border: 'none' }, // Remove border when focused
        color: '#F5A623', // Golden input text color
      },
    }}
  />
  <TextField
    className="NewModal"
    fullWidth
    variant="outlined"
    label="Palate 👅"
    value={modalContent.taste} // Populating from product data
    placeholder="Describe the taste"
    sx={{
      marginBottom: '10px',
      '& .MuiInputLabel-root': { color: '#F5A623' },  // Golden label color
      '& .MuiOutlinedInput-root': {
        '& fieldset': { border: 'none' }, // Remove border
        '&:hover fieldset': { border: 'none' }, // Remove border on hover
        '&.Mui-focused fieldset': { border: 'none' }, // Remove border when focused
        color: '#F5A623', // Golden input text color
      },
    }}
  />
   <TextField
    className="NewModal"
    fullWidth
    variant="outlined"
    label="Finish 🏁"
    value={modalContent.finish} // Populating from product data
    placeholder="Describe the taste"
    sx={{
      marginBottom: '10px',
      '& .MuiInputLabel-root': { color: '#F5A623' },  // Golden label color
      '& .MuiOutlinedInput-root': {
        '& fieldset': { border: 'none' }, // Remove border
        '&:hover fieldset': { border: 'none' }, // Remove border on hover
        '&.Mui-focused fieldset': { border: 'none' }, // Remove border when focused
        color: '#F5A623', // Golden input text color
      },
    }}
  />
  <TextField
    className="NewModal"
    fullWidth
    variant="outlined"
    label="Country 🌍"
    value={modalContent.country} // Populating from product data
    placeholder="Enter the whisky's region"
    sx={{
      marginBottom: '20px',
      '& .MuiInputLabel-root': { color: '#F5A623' },
      '& .MuiOutlinedInput-root': {
        '& fieldset': { border: 'none' }, // Remove border
        '&:hover fieldset': { border: 'none' }, // Remove border on hover
        '&.Mui-focused fieldset': { border: 'none' }, // Remove border when focused
        color: '#F5A623', // Golden input text color
      },
    }}
  />
   <TextField
    className="NewModal"
    fullWidth
    variant="outlined"
    label="Region "
    value={modalContent.region} // Populating from product data
    placeholder="Describe the taste"
    sx={{
      marginBottom: '10px',
      '& .MuiInputLabel-root': { color: '#F5A623' },  // Golden label color
      '& .MuiOutlinedInput-root': {
        '& fieldset': { border: 'none' }, // Remove border
        '&:hover fieldset': { border: 'none' }, // Remove border on hover
        '&.Mui-focused fieldset': { border: 'none' }, // Remove border when focused
        color: '#F5A623', // Golden input text color
      },
    }}
  />
 
</form>

            <Button
                sx={{ color: '#F5A623' }}
                variant="contained"
                className="projectBtn"
                size="small"
                href={modalContent.link}
                target="_blank"
                rel="noopener noreferrer"
              >Buy Now</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;

