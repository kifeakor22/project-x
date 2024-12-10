import React, { useState } from "react";
import "./WhiskyLevelUp.css"; // Link the external CSS
import { Box, Typography, Button, Card, CardContent, CardMedia, Link } from "@mui/material";
import products from "../../products.json"; // Import the product JSON file

const WhiskyLevelUp = () => {
  // Filter products tagged with "inter"
  const intermediateProducts = products.filter(
    (product) => product.tags && product.tags.includes("inter")
  );
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="whisky-container">
      <header className="whisky-header">
        <h1 className="whisky-title">Level Up Your Whisky Game: Intermediate Edition</h1>
        <p className="whisky-congratulations">
          <strong>Congratulations, Whisky Enthusiast!</strong> You’ve officially leveled up to the Intermediate Edition of our whisky journey—where the adventure takes a deeper, more nuanced turn. If you've already begun to explore the world of whisky, it’s time to elevate your experience and refine your palate.
        </p>
      </header>

      <section className="whisky-section">
        <h2 className="whisky-section-title">Unlock the Secrets of Flavour</h2>
        <p className="whisky-section-text">
          Our expert reviews dive into the science behind whisky flavour development, detailing the subtle nuances between grain and malt whisky, and how the distillation process influences the final product. We’ll explore how the cask aging imparts rich flavors, from fruity to spicy, and guide you on how to decode these notes.
        </p>
      </section>

      <section className="whisky-section">
        <h2 className="whisky-section-title">Discover Your Perfect Whisky Match</h2>
        <p className="whisky-section-text">
          Finding your ideal whisky is a journey—one that we’re here to navigate with you. Our advice will help you identify whiskies that match your flavour preferences, whether you're leaning towards peat, smoke, honeyed sweetness, or a fruity profile. With every pour, we aim to bring you closer to becoming a true whisky connoisseur.
        </p>
      </section>

      <section className="whisky-highlight-section">
        <h2 className="whisky-section-title">Sip, Taste, Explore</h2>
        <p className="whisky-section-text">
          At <strong className="highlight">Whiskytopia</strong>, we don’t just tell you what’s in the bottle—we show you how to experience it. This section is designed for those eager to refine their palate, expand their whisky knowledge, and explore new flavour horizons. Ready for your next whisky adventure?
        </p>
      </section>

      {/* Display Intermediate Whisky Picks */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          margin: "40px 0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "30px",
            color: "#F5A623",
            textAlign: "center",
          }}
        >
          Explore Our Intermediate Picks
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: "20px",
          }}
        >
          {intermediateProducts.map((product) => (
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
    </div>
  );
};

export default WhiskyLevelUp;

