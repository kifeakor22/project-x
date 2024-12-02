import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is small

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        className="navigation"
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <img onClick={() => navigate('/')}
            src={require('../products/assets/logo.jpg')}
            alt="company logo"
            style={{ marginRight: '10px' }}
          />

          <Typography onClick={() => navigate('/')}
            className="navLink"
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              color: '#F5A623', // Gold color for "WhiskyTopia"
            }}
          >
            WhiskyTopia
          </Typography>

          {/* Show Hamburger Menu Icon on Small Screens */}
          {isSmallScreen ? (
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                color: '#F5A623', // Gold color for Hamburger icon
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Show Navigation Links on Larger Screens
            <nav>
               <Button  onClick={() => navigate('/about-us')}
                className="navLink"
                variant="button"
                href=""
                sx={{ my: 1, mx: 1.5, color: 'inherit' }}
              >
                About us
              </Button>
              
               <Button onClick={() => navigate('/blog')}
                className="navLink"
                variant="button"
                href=""
                sx={{ my: 1, mx: 1.5, color: 'inherit' }}
              >
                Blog
              </Button>
              <Button onClick={() => navigate('/novice')}
                className="navLink"
                variant="button"
                href=""
                sx={{ my: 1, mx: 1.5, color: 'inherit' }}
              >
                Novice
              </Button>
              <Button  onClick={() => navigate('/intermediary')}
                className="navLink"
                variant="button"
                href=""
                sx={{ my: 1, mx: 1.5, color: 'inherit' }}
              >
                Intermediary
              </Button>
              <Button
                className="navLink"
                variant="button"
                href=""
                sx={{ my: 1, mx: 1.5, color: 'inherit' }}
              >
                Expert
              </Button>
              <Button onClick={() => navigate('/productlist')}
                className="navLink"
                variant="button"
                href=""
                sx={{ my: 1, mx: 1.5, color: 'inherit' }}
              >
                Products
              </Button>
            </nav>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Hamburger Menu */}
      <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={toggleDrawer(false)}
  PaperProps={{
    sx: {
      backgroundColor: '#808080', // Grey background for drawer
      color: 'white',
    },
  }}
>
  <List
    sx={{ width: 250 }}
  >
    {['About us', 'Blog', 'Novice', 'Intermediary', 'Expert', 'Products'].map((text, index) => (
      <React.Fragment key={text}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setDrawerOpen(false); // Close the drawer
              navigate(`/${text.toLowerCase().replace(' ', '-')}`); // Navigate to the correct path
            }}
            sx={{
              '&:hover': { backgroundColor: '#666' }, // Slightly darker grey on hover
            }}
          >
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                sx: { color: '#F5A623', fontWeight: 'bold' }, // Gold-colored text
              }}
            />
          </ListItemButton>
        </ListItem>
        {/* Gold Line Separator */}
        {index < 6 && (
          <div
            style={{
              height: '1px',
              backgroundColor: '#F5A623', // Gold separator
              margin: '0 16px',
            }}
          ></div>
        )}
      </React.Fragment>
    ))}
  </List>
</Drawer>

    </>
  );
};

export default Nav;
