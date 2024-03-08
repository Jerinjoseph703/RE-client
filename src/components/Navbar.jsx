import React from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  if (isHomePage) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            Avanu Reality
          </Typography>
          <Button color="inherit"><a href="mailto:jerinjoseph703@gmail.com" style={{ color: 'white', textDecoration: "none" }}>Contact</a></Button>
          <Button color="inherit"><Link to='/Poperties' style={{ color: 'white', textDecoration: "none" }}>Properties</Link></Button>
          <Button color="inherit"><Link to='/Login' style={{ color: 'white', textDecoration: "none" }}>Login</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
