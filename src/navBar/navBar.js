import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Logo from '../img/newLogo.jpg'

import { ButtonGroup } from '@mui/material';
import BasicTextFields from '../search/search';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#7A55F3"}}>
        <Toolbar>
       
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,  }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">

            <Box
            sx={{

              width:'150px',
              display:'flex',
              alignItems:'center',
              justifyContent:'center'
            }}>
            
                <img src={Logo}
                style={{
                    width:"100px",
                    height:"auto",
                    borderRadius:'10px',
                    backgroundColor:'wheat'
                }}
                />
                </Box>
          </Link>
          </Typography>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button sx={{backgroundColor:"#14D975", color:"black"}}variant="contained" component={Link} to="/pg1" color="inherit">Lista</Button >
                    <Button sx={{backgroundColor:"#14D975",color:"black" }} variant="contained" component={Link} to="/pg2" color="inherit" >Card</Button>
                   
                   
</ButtonGroup>
          

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}