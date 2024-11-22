import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { WhatsAppWidget } from "react-whatsapp-widget";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FaTiktok } from "react-icons/fa";
import './style.css'; // Add this for additional custom styles if needed.

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(moment().format("MMMM Do, YYYY"));
  const currentYear = moment().format("YYYY");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(moment().format("MMMM Do, YYYY"));
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box component="footer" sx={{ backgroundColor: "#2c2c2c", color: '#655', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: '#655' }}>
              whiskytopia.co.uk
            </Typography>
            <Typography variant="body2" sx={{ color: '#655' }}>
              Explore the finest whiskies from around the world. Join us for reviews, guides, and more.
            </Typography>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" sx={{ mb: 1, color: '#655' }}>
              {currentDate}
            </Typography>
            <Typography sx={{ color: '#655' }} variant="body2">London, United Kingdom</Typography>
            <Typography sx={{ color: '#655' }} variant="body2">📞 Contact us: +44 7807 886 318</Typography>
            <Box mt={2}>
              <WhatsAppWidget
                phoneNumber="+447807886318"
                message={`Hello! 👋🏼 \n\nWhat can we do for you?`}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Social Media Section */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          mt={4}
          flexWrap="wrap"
        >
          <Button
            href="https://twitter.com/Whiskytopia"
            target="_blank"
            sx={{ color: "#1DA1F2" }}
          >
            <TwitterIcon />
          </Button>
          <Button
            href="https://www.instagram.com/whiskytopia/"
            target="_blank"
            sx={{ color: "#E1306C" }}
          >
            <InstagramIcon />
          </Button>
          <Button
            href="https://www.youtube.com/@Whiskytopia"
            target="_blank"
            sx={{ color: "#FF0000" }}
          >
            <YouTubeIcon />
          </Button>
          <Button
          href="https://www.tiktok.com/@whiskytopia"
          target="_blank"
          sx={{ color: "#000000" }}
>
  <FaTiktok style={{ fontSize: "24px" }} />
</Button>
        </Box>

        {/* Divider */}
        <Box
          mt={4}
          mb={2}
          sx={{
            height: "1px",
            backgroundColor: "#FFD700", // Gold divider
            mx: "auto",
            width: "80%",
          }}
        ></Box>

        {/* Bottom Text */}
        <Typography variant="body2" align="center" sx={{ color: "#ccc", mt: 2 }}>
          &copy; {currentYear} whiskytopia. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
