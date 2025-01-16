import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        // background: 'linear-gradient(90deg, #1c1c1c, #333333)',
        background: 'white',
        // boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
        // padding: '0 20px',
        boxShadow: 'none',
        width:'80%',
        margin:' 0 auto'

      }}
    >
      <Toolbar sx={{width:"100%" ,display:"flex" ,justifyContent:'space-between'}}>
        {/* Left: Menu Icon */}
        {/* <IconButton edge="start" color="black" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton> */}

        {/* Brand Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 700,
            color: 'black',
            letterSpacing: '.1rem',
            marginRight: '20px',
            fontSize: '1.5rem'
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'black',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.color = '#ff9800')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            MyElegantApp
          </Link>
        </Typography>

        <div style={{display:'flex',gap:'1%', width:'40%'}} >
          {/* Tabs Next to Brand Name */}
          <Button
            color="black"
            sx={{
              mx: 1,
              fontSize: '1rem',
              '&:hover': { color: '#ff9800' },
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'black' ,padding:'0' }}>
              Collections
            </Link>
          </Button>
          <Button
            color="black"
            sx={{
              mx: 1,
              fontSize: '1rem',
              '&:hover': { color: '#ff9800' },
            }}
          >
            <Link to="/about" style={{ textDecoration: 'none', color: 'black',padding:'0' }}>
              Brands
            </Link>
          </Button>
          <Button
            color="black"
            sx={{
              mx: 1,
              fontSize: '1rem',
              '&:hover': { color: '#ff9800' },
            }}
          >
            <Link
              to="/shop"
              style={{ textDecoration: 'none', color: 'black',padding:'0' }}
            >
              Trends
            </Link>
          </Button>
        </div>

        {/* Spacer */}
        <div style={{ display: 'flex', justifyContent: "space-between", width: '15%' }}>

          {/* Search Icon */}
          <IconButton edge="end" color="black" aria-label="search" sx={{ padding: '0' }} >
            <SearchIcon sx={{ width: "100%", padding: '0' }} />
          </IconButton>

          {/* Shopping Bag Icon */}
          <IconButton edge="end" color="black" aria-label="shopping bag" sx={{ padding: '0' }} >
            <ShoppingBagIcon sx={{ width: "100%", padding: '0' }} />
          </IconButton>

          {/* User Account Dropdown */}
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="black"

          >
            <AccountCircle sx={{ width: "100%", padding: '0' }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link
                to="/profile"
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'color 0.3s',
                }}
                onMouseOver={(e) => (e.target.style.color = '#ff9800')}
                onMouseOut={(e) => (e.target.style.color = '#333')}
              >
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link
                to="/settings"
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'color 0.3s',
                }}
                onMouseOver={(e) => (e.target.style.color = '#ff9800')}
                onMouseOut={(e) => (e.target.style.color = '#333')}
              >
                Settings
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link
                to="/logout"
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'color 0.3s',
                }}
                onMouseOver={(e) => (e.target.style.color = '#ff9800')}
                onMouseOut={(e) => (e.target.style.color = '#333')}
              >
                Logout
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
