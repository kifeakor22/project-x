import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent, CardMedia, Link } from '@mui/material';
import noviecImage from './assets/novice.png';
import { useNavigate } from 'react-router-dom';
import products from '../../products.json'; // Import the product JSON file

const NoviceSection = () => {
  const navigate = useNavigate();

  // Filter products tagged with "novice"
  const noviceProducts = products.filter((product) => product.tags && product.tags.includes('novice'));

  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F9F7F4',
        padding: { xs: '20px', sm: '40px', md: '80px' },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
      }}
    >
      {/* Introduction Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src={noviecImage}
          alt="Whisky glass"
          sx={{
            width: { xs: '100%', sm: '50%' },
            height: 'auto',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          }}
        />

        {/* Content Section */}
        <Box
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: '600px',
            padding: { xs: '20px 0', md: '0' },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#F5A623',
              lineHeight: 1.3,
              marginBottom: '20px',
            }}
          >
            The Beginning of Your Whisky Adventure...
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              color: '#5A5A5A',
              marginBottom: '20px',
              lineHeight: 1.8,
            }}
          >
            Welcome, fellow whisky lovers, to the Whisky Novice's Playground!
            Dive into a journey that’s as delightful as it is enlightening. This
            is your gateway to the world of whisky!
          </Typography>
          <Button
            onClick={() => navigate('/product')}
            variant="contained"
            sx={{
              backgroundColor: '#F5A623',
              color: '#FFF',
              padding: '10px 20px',
              borderRadius: '25px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FFB74D',
              },
            }}
          >
            Start Your Journey
          </Button>
        </Box>
      </Box>

      {/* Whiskytopia Reviews Section */}
      <Box
        sx={{
          backgroundColor: '#F5A456', // Dark brown background
          color: '#FFF',
          borderRadius: '10px',
          padding: '40px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Whiskytopia Reviews
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '20px',
          }}
        >
          We at Whiskytopia review the market constantly for the very best value
          for money and gift set offers for the novice palette.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '20px',
          }}
        >
          We believe these whisky gift sets and accessories below give a gentle
          introduction to your whisky experience. Please read our reviews (WT
          Reviews) to understand why we have included these to our list.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            lineHeight: 1.8,
          }}
        >
          If you want to explore further whisky products, we recommend the
          following whisky retailers:{' '}
          <Link
            href="https://www.masterofmalt.com/?utm_source=www.whiskytopia.co.uk&utm_medium=affiliate&adnetwork=af&affc=00ef216a-5642-4572-9744-2d911d00be41"
            sx={{ color: '#FFS789', fontWeight: 'bold' }}
          >
            The Whisky Shop
          </Link>{' '}
          and{' '}
          <Link
            href="https://www.whiskyshop.com/?utm_source=AffiliateFuture&utm_medium=affiliate&utm_campaign=www.whiskytopia.co.uk&affc=1f677403-12ae-4153-90c5-db4a3d8583ed"
            sx={{ color: '#FFS789', fontWeight: 'bold' }}
          >
            Master of Malt
          </Link>
          . Please use the below links to have a nosey about.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'black',
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '20px',
          }}
        >
          All the links below are affiliate, which means we receive a small commission if you purchase the item. This helps with the upkeep of the blog. We will never ask for your financial details. Please enjoy the reviews.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#F5A623', // Golden button
              color: '#8C4B2A',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FFC107',
              },
            }}
            href="https://www.whiskyshop.com/?utm_source=AffiliateFuture&utm_medium=affiliate&utm_campaign=www.whiskytopia.co.uk&affc=1f677403-12ae-4153-90c5-db4a3d8583ed"
          >
            Whisky Shop
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: 'black',
              color: 'black',
              fontWeight: 'bold',
              '&:hover': {
                borderColor: '#FFC107',
                color: '#FFC107',
              },
            }}
            href="https://www.masterofmalt.com/?utm_source=www.whiskytopia.co.uk&utm_medium=affiliate&adnetwork=af&affc=00ef216a-5642-4572-9744-2d911d00be41"
          >
            Master of Malt
          </Button>
        </Box>
      </Box>

      {/* Product Section */}
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#F5A623',
            textAlign: 'center',
          }}
        >
          Explore Our Novice Picks
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: '20px',
          }}
        >
          {noviceProducts.map((product) => (
           <Card
           key={product.id}
           sx={{
             maxWidth: 345,
             height: expandedCards[product.id] ? "auto" : "400px",
             margin: "0 auto",
             borderRadius: "10px",
             overflow: "hidden",
             "&:hover": {
               transform: "scale(1.05)",
               boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
             },
           }}
         >
           <CardMedia
             component="img"
             image={product.image}
             alt={product.name}
             sx={{
               height: "150px",
               objectFit: "contain",
               marginTop: "10px",
               marginBottom: "10px",
             }}
           />
           <CardContent>
             <Typography
               gutterBottom
               variant="h5"
               sx={{ fontWeight: "bold", color: "inherit" }}
             >
               {product.title}
             </Typography>
             <Typography
               variant="body1"
               color="text.primary"
               sx={{
                 lineHeight: 1.6,
                 marginBottom: "10px",
                 display: expandedCards[product.id] ? "block" : "-webkit-box",
                 WebkitLineClamp: expandedCards[product.id] ? "none" : 3,
                 WebkitBoxOrient: "vertical",
                 overflow: "hidden",
                 textOverflow: "ellipsis",
               }}
             >
               {product.review}
             </Typography>
             <Button
               size="small"
               onClick={() => toggleExpand(product.id)}
               sx={{ marginBottom: "10px",
                color: '#F44336',
                fontWeight: 'bold'
                }}
             >
               {expandedCards[product.id] ? "Show Less" : "Read More"}
             </Button>
             <Typography
               variant="body1"
               sx={{ fontWeight: "bold", color: "#F5A623" }}
             >
               {product.price}
             </Typography>
             <Button
               href={product.link}
               target="_blank"
               variant="contained"
               sx={{
                 backgroundColor: "#F5A623",
                 color: "#FFF",
                 fontWeight: "bold",
                 padding: "10px 15px",
                 borderRadius: "20px",
                 "&:hover": {
                   backgroundColor: "#FFB74D",
                 },
               }}
             >
               View Product
             </Button>
           </CardContent>
         </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default NoviceSection;
