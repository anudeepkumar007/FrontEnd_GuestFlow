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
} from "@mui/material";
import { Google, Facebook } from "@mui/icons-material";
import Title from "./Title";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:8080/auth/login", formData, {
            headers: { "Content-Type": "application/json" },
        });
        if (response.data.id) {

          // alert(response);
          // alert("Login successful!");
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("AccountName", response.data.name);
          // alert(localStorage.getItem("AccountName"));

          // Redirect to MainPage
          navigate("/mainpage");
      }
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        alert("Login failed. Please Enter valid credentials.");
    }
};

  return (
    <Box>
      <Title />
    <Container maxWidth="xs">
      <Box sx={{ flexShrink: 0, mr: 2 }}>
            {/* <Title /> */}
          </Box>
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
        <Typography variant="h4"  sx={{
                  fontWeight: "bold",
                  fontFamily: '"Red Rose", cursive',
                  fontWeight: 500,
                  color: "black",
                  // fontSize: "30px"
                }}align="center" gutterBottom>
                    Login
                  </Typography>
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
              fontFamily: '"Red Rose", cursive',// Curve effect (not directly applied to TextField)
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                fontSize: "14px" // Apply rounded corners to the input field
              },
              "& .MuiInputLabel-root": {
                fontSize: "12px", // Adjust label font size
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
                fontFamily: '"Red Rose", cursive',
                fontSize: "14px" // Apply rounded corners to the input field
              },
              "& .MuiInputLabel-root": {
                fontSize: "12px", // Adjust label font size
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
                          sx={{ mt: 2, bgcolor: "#ed2011",fontFamily: '"Red Rose", cursive', "&:hover": { bgcolor: "" },borderRadius: "20px",textTransform: "none" }}>
                           Login
                        </Button>
                      </Box>
          <Typography align="center" sx={{ mt: 2, textDecoration: "underline", cursor: "pointer", fontFamily: '"Red Rose", cursive',
            fontWeight: 500,fontSize: "14px" }}>
            Forgot your password?
          </Typography>
          <Divider sx={{ my: 2, fontFamily: '"Red Rose", cursive' }}>or</Divider>
          <GoogleButton fullWidth variant="outlined" onClick={() => console.log("Google Sign-In Clicked")} style={{width: "100%",borderRadius: "25px",fontFamily: '"Red Rose", cursive',textTransform: "none"}}/>
           <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          <Button
                  // onClick={onClick}
                  fullWidth
                  variant="outlined"
                  startIcon={<FaFacebook size={24} color="#1877F2" />} // Facebook Blue Color
                  sx={{
                    borderRadius: "25px",
                    textTransform: "none",
                    fontFamily: '"Red Rose", cursive',
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1877F2", // Facebook theme color
                    borderColor: "#1877F2",
                    // "&:hover": { backgroundColor: "#1877F2", color: "white" },
                  }}
                >
                  Sign in with Facebook
                </Button>
                </Box>
          
        
          <Typography align="center" sx={{ mt: 2,fontFamily: '"Red Rose", cursive',
            fontWeight: 500,fontSize: "14px"  }}>
            Don't have an account? <span style={{ color: "blue", cursor: "pointer"}}>Sign up</span>
          </Typography>
        </form>
      </Box>
    </Container>
    </Box>
  );
};

export default Login;