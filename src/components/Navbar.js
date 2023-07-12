import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Pınar Topuz</Typography>


          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>

          <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#FF1744' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
