import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgb(22, 32, 86)' }}> {/* Custom color for AppBar */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff' }}> {/* White text for the title */}
          Sales Site
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            sx={{ 
              '&:hover': { backgroundColor: 'rgb(25, 163, 210)', color: '#fff' },  // Custom hover effect for Home button
              color: '#fff'  // Default color
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/products" 
            sx={{
              '&:hover': { backgroundColor: 'rgb(25, 163, 210)', color: '#fff' },
              color: '#fff'
            }}
          >
            Products
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about" 
            sx={{
              '&:hover': { backgroundColor: 'rgb(25, 163, 210)', color: '#fff' },
              color: '#fff'
            }}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/contact" 
            sx={{
              '&:hover': { backgroundColor: 'rgb(25, 163, 210)', color: '#fff' },
              color: '#fff'
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
