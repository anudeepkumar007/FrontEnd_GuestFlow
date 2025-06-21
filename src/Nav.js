import { Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Box sx={{ backgroundColor: "#ffecb3"}}>
      {/* <AppBar position="static" sx={{ mt: 0, bgcolor: "white" }}> */}
        <Toolbar>
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, fontWeight: 'bold', color: 'black' }}
          >
            GuestFlow
          </Typography>
          
          {/* Right-aligned buttons inside Toolbar */}
          <Button  color="primary"
           type="submit" onClick={handleSignupClick} sx={{ bgcolor: "#ffecb3",fontWeight: "bold",color: "black",
                     "&:hover": { bgcolor: "" },borderRadius: "20px",textTransform: "none" }}>
            Account +
          </Button>
          <Button  color="primary"
           type="submit" onClick={handleLoginClick} sx={{ bgcolor: "#ffecb3",fontWeight: "bold",color: "black",
                     "&:hover": { bgcolor: "" },borderRadius: "20px",textTransform: "none" }}>
            Login
          </Button>
          <Button  color="primary"
               type="submit" sx={{ bgcolor: "#ffecb3",fontWeight: "bold",color: "black",
                           "&:hover": { bgcolor: "" },borderRadius: "20px",textTransform: "none" }}>
            About Us
          </Button>
        </Toolbar>
      {/* </AppBar> */}
    </Box>
  );
}

export default Nav;
