import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, position: "fixed", alignContent: "center", justifySelf: "center"}}>
    <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="#Home">Home</Button>
          <Button color="inherit" href="#Experience">Experience</Button>
          <Button color="inherit" href="#Education">Education</Button>
          <Button color="inherit" href="#Projects">Projects</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
