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

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        className="navigation"
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <img
            src={require('../products/assets/logo.jpg')}
            alt="company logo"
            style={{ marginRight: '10px' }}
          />

          <Typography
            className="navLink"
            variant="h6"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            WhiskyTopia
          </Typography>

          {/* Show Hamburger Menu Icon on Small Screens */}
          {isSmallScreen ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Show Navigation Links on Larger Screens
            <nav>
              <Button
                className="navLink"
                variant="button"
                href=""
                sx={{ my: 1, mx: 1.5 }}
              >
                Novice
              </Button>
              <Button
                className="navLink"
                variant="button"
                href=""
                sx={{ my: 1, mx: 1.5 }}
              >
                Intermediary
              </Button>
              <Button
                className="navLink"
                variant="button"
                href=""
                sx={{ my: 1, mx: 1.5 }}
              >
                Expert
              </Button>
              <Button
                className="navLink"
                variant="button"
                href=""
                sx={{ my: 1, mx: 1.5 }}
              >
                Region
              </Button>
            </nav>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Hamburger Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ width: 250 }}
        >
          {['Novice', 'Intermediary', 'Expert', 'Region'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Nav;
