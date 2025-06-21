import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Divider,
  Toolbar,
} from "@mui/material";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post("http://56.228.31.113:8080/auth/login", formData, {
            headers: { "Content-Type": "application/json" },
        });
        if (response.data.id) {

          // alert(response.data.id);
          // alert("Login successful!");
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("AccountName", response.data.name);
          // alert(localStorage.getItem("AccountName"));

          // Redirect to MainPage
          navigate("/AccountPage");
      }
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        alert("Login failed. Please Enter valid credentials.");
    }
};

  return (
    <Box sx={{backgroundColor: "#fff8e1",minHeight: "100vh"}}>
      {/* <Title /> */}
      <Box sx={{backgroundColor: "#ffecb3"}}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 'bold',color: 'black' }}>
            GuestFlow
          </Typography>
          </Toolbar>
          </Box>
        {/* </AppBar> */}
        <Box>
        <Typography variant="h4" sx= {{mt: 4, p: 3,textAlign: "center",fontWeight: "bold", textTransform: "None"}}>
          Welcome! Log in here.
        </Typography>
      </Box>
    <Container maxWidth="xs">
      <Box sx={{ mt: 6, p: 3, boxShadow: 3, borderRadius: 5, bgcolor: "white" }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Typography
      variant="h5" 
      sx={{
        fontWeight: "bold",
        color: "black",
      }}
      gutterBottom
    >
      Login
    </Typography>
  </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"

            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              // Reduce width
              borderRadius: "25px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                fontSize: "13px" // Apply rounded corners to the input field
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px", // Adjust label font size
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            sx={{
              // Reduce width
              borderRadius: "25px", // Curve effect (not directly applied to TextField)
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                fontSize: "13px" // Apply rounded corners to the input field
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px", // Adjust label font size
              },
            }}
          />
          <FormControlLabel
            control={<Checkbox name="rememberMe" />}
            label="Remember me"
            sx={{
              "& .MuiTypography-root": { fontSize: "14px", } // Adjust label font size
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          sx={{ mt: 2, bgcolor: "#0097a7",color: "black",fontWeight:"bold", "&:hover": { bgcolor: "" },borderRadius: "20px",textTransform: "none",backgroundColor: "#ffa000" }}>
                           Login
                        </Button>
                      </Box>
          <Typography align="center" sx={{ mt: 2, textDecoration: "underline", cursor: "pointer",
            fontWeight: 600,fontSize: "13px" }}>
            Forgot your password?
          </Typography>
          <Divider sx={{ my: 2 }}>or</Divider>
          
          
        
          <Typography align="center" sx={{ mt: 2,
            fontWeight: 600,fontSize: "13px"  }}>
            Don't have an account? <span style={{ color: "blue", cursor: "pointer"}} onClick={() => navigate("/SignUp")}>Sign up</span>
          </Typography>
        </form>
      </Box>
    </Container>
    </Box>
  );
};

export default Login;