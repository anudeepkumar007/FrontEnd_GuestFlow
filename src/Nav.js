import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';


function Nav() {
    const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  }
    return (
        <AppBar position="static" color="primary">
        <Toolbar>
          {/* Title on the left */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            GuestFlow
          </Typography>
          

          {/* Navigation Buttons */}
          <Button color="inherit" onClick={handleSignupClick}>Signup</Button>
          <Button color="inherit" onClick={handleLoginClick}>Login</Button>
          <Button color="inherit">About Us</Button>
        </Toolbar>
      </AppBar>
    );
}

export default Nav;