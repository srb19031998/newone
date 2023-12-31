import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-router-dom";
export const MynavbarWithSellerButton:React.FC=()=>{
    return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Online Shoping Site
          </Typography>
          <Button variant="contained" color="error"><Link to={"/pro/seller-upload"}> upload products</Link> </Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    </>
}