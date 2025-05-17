import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Divider } from "@mui/material";
import Title from "./Title";
import { Facebook, Google } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios"; 
import GoogleButton from "react-google-button";
import { FaFacebook } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";

const Signup = () => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/auth/signup", formData, {
                headers: { "Content-Type": "application/json" },
            });
            alert(response.data);
        } catch (error) {
            console.error("Signup error:", error.response?.data || error.message);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <Box>
            <Title />
        
            <Container maxWidth="xs">
                <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 5 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            // fontWeight: "bold",
                            fontFamily: '"Red Rose", cursive',
                            fontWeight: 500,
                            color: "black",
                        }}
                        align="center"
                        gutterBottom>
                        Create an Account
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            fontFamily= '"Red Rose", cursive'
                            variant="outlined"
                            margin="normal"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            sx={{
                                // Reduce width
                                borderRadius: "25px", // Curve effect (not directly applied to TextField)
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: "25px",
                                  fontSize: "14px", // Apply rounded corners to the input field
                                  fontFamily: '"Red Rose", cursive',
                                },
                                "& .MuiInputLabel-root": {
                                  fontSize: "12px", // Adjust label font size
                                  fontFamily: '"Red Rose", cursive'
                                },
                              }}
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            fontFamily= '"Red Rose", cursive'
                            variant="outlined"
                            margin="normal"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            sx={{
                                // Reduce width
                                borderRadius: "25px", // Curve effect (not directly applied to TextField)
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: "25px",
                                  fontSize: "14px", // Apply rounded corners to the input field
                                  fontFamily: '"Red Rose", cursive'
                                },
                                "& .MuiInputLabel-root": {
                                  fontSize: "12px", // Adjust label font size
                                  fontFamily: '"Red Rose", cursive'
                                },
                              }}
                        />
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
                                borderRadius: "25px", // Curve effect (not directly applied to TextField)
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: "25px",
                                  fontSize: "14px", // Apply rounded corners to the input field
                                  fontFamily: '"Red Rose", cursive'
                                },
                                "& .MuiInputLabel-root": {
                                  fontSize: "12px", // Adjust label font size
                                  fontFamily: '"Red Rose", cursive'
                                },
                              }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            fontFamily= '"Red Rose", cursive'
                            variant="outlined"
                            margin="normal"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            sx={{
                                // Reduce width
                                borderRadius: "25px", // Curve effect (not directly applied to TextField)
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: "25px", // Apply rounded corners to the input field
                                },
                                "& .MuiInputLabel-root": {
                                  fontSize: "12px", // Adjust label font size
                                  fontFamily: '"Red Rose", cursive'
                                },
                              }}
                        />
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ mt: 2, bgcolor: "#ed2011",fontFamily: '"Red Rose", cursive', "&:hover": { bgcolor: "" },borderRadius: "20px",textTransform: "none" }}>
                                Create Account
                            </Button>
                        </Box>
                        <Divider sx={{ my: 2, fontFamily: '"Red Rose", cursive' }}>or</Divider>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                    
                    <GoogleButton fullWidth variant="outlined" onClick={() => console.log("Google Sign-In Clicked")} style={{width: "100%",borderRadius: "25px", fontFamily: '"Red Rose", cursive',textTransform: "none"}}/>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                <Button
        // onClick={onClick}
        fullWidth
        variant="outlined"
        startIcon={<FaFacebook size={24} color="#1877F2" />} // Facebook Blue Color
        sx={{
          borderRadius: "25px",
          textTransform: "none",
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: '"Red Rose", cursive',
          color: "#1877F2", // Facebook theme color
          borderColor: "#1877F2",
        //   "&:hover": { backgroundColor: "#1877F2", color: "white" },
        }}
      >
        Sign in with Facebook
      </Button>
                </Box>
                    </form>
                </Box>
            </Container>

            {/* Social Login Buttons */}
            <Container maxWidth="xs">
                <Typography align="center" sx={{ mt: 2,fontFamily: '"Red Rose", cursive',
                  fontWeight: 500,fontSize: "14px" }}>
                    Already have an account?{" "}
                    <span style={{ color: "blue", cursor: "pointer" }}>Sign in</span>
                </Typography>
            </Container>
        </Box>
    );
};

export default Signup;
