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
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        backgroundColor: "#1E1E1E", // Sleek dark modal background
        borderRadius: "16px",
        maxWidth: "500px",
        width: "90%",
        padding: "24px",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)", // Modern shadow
        position: "relative",
        overflowY: "auto",
        maxHeight: "90vh",
        color: "#FFF",
      }}
    >
      {/* Close Button */}
      <button
        onClick={handleModalClose}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "none",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          color: "#FFF",
        }}
        aria-label="Close"
      >
        &times;
      </button>

      {/* Modal Content */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "16px",
          color: "#F5A623", // Golden title
          fontSize: { xs: "1.6rem", sm: "2rem" },
        }}
      >
        {modalContent.title || "Default Title"}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "#D1D1D1",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          marginBottom: "20px",
        }}
      >
        {modalContent.description || "Description not available."}
      </Typography>

      {/* Responsive Image */}
      {modalContent.image && (
        <img
          src={require(`${modalContent.image}`)}
          alt={modalContent.title || "Modal Image"}
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "20px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        />
      )}

      {/* Review Section */}
      <Typography
        variant="body2"
        sx={{
          color: "#FFD700", // Golden for emphasis
          textAlign: "center",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          marginBottom: "20px",
        }}
      >
        <strong>WT Review:</strong> {modalContent.review || "No reviews available."}
      </Typography>

      {/* Data Fields */}
      <Typography
        variant="body2"
        sx={{
          color: "#FFF",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          marginBottom: "12px",
        }}
      >
        <strong style={{ color: "#F5A623" }}>Nose 👃:</strong> {modalContent.smell || "No data"}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#FFF",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          marginBottom: "12px",
        }}
      >
        <strong style={{ color: "#F5A623" }}>Palate 👅:</strong> {modalContent.taste || "No data"}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#FFF",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          marginBottom: "12px",
        }}
      >
        <strong style={{ color: "#F5A623" }}>Finish 🏁:</strong> {modalContent.finish || "No data"}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#FFF",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          marginBottom: "12px",
        }}
      >
        <strong style={{ color: "#F5A623" }}>Country:</strong> {modalContent.country || "No data"}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#FFF",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          marginBottom: "12px",
        }}
      >
        <strong style={{ color: "#F5A623" }}>Region:</strong> {modalContent.region || "No data"}
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        href={modalContent.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          width: "100%",
          backgroundColor: "#F5A623",
          color: "#1E1E1E",
          fontSize: { xs: "1rem", sm: "1.2rem" },
          fontWeight: "bold",
          padding: { xs: "12px", sm: "16px" },
          marginTop: "20px",
          textTransform: "uppercase",
          "&:hover": {
            backgroundColor: "#FFD700",
          },
        }}
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

