import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Divider } from "@mui/material";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import axios from "axios"; 
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://16.171.143.231:8080/auth/signup", formData, {
                headers: { "Content-Type": "application/json" },
            });
            alert(response.data);
        } catch (error) {
            console.error("Signup error:", error.response?.data || error.message);
            alert("Signup failed. Please try again.");
        }
    };
    const navigate = useNavigate();

    return (
        <Box sx={{display: 'flex' }} >
            <Container maxWidth="xs">
                <Box sx={{ mt: 8, p: 3, boxShadow: 3, borderRadius: 5,backgroundColor: 'white' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            color: "black"                            
                        }}
                        align="center"
                        gutterBottom>
                        Create an Account
                    </Typography>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
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
                                  
                                },
                                "& .MuiInputLabel-root": {
                                  fontSize: "14px", // Adjust label font size
                                  
                                },
                              }}
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"                      
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
                                  
                                },
                                "& .MuiInputLabel-root": {
                                  fontSize: "14px", // Adjust label font size
                                  
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
                                  borderRadius: "25px", // Apply rounded corners to the input field
                                },
                                "& .MuiInputLabel-root": {
                                  fontSize: "14px", // Adjust label font size
                                  
                                },
                              }}
                        />
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ mt: 2, bgcolor: "#ffa000",color:"black",fontWeight:"bold", "&:hover": { bgcolor: "" },borderRadius: "20px",textTransform: "none" }}>
                                Sign Up
                            </Button>
                        </Box>
                        <Divider sx={{ my: 2 }}>or</Divider>
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                    <FacebookTwoToneIcon/>
                    <LinkedInIcon sx={{ ml: 2 }}/>
                    <InstagramIcon sx={{ ml: 2 }}/>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                <Typography align="center" sx={{ mt: 2,
                  fontWeight: 600,fontSize: "13px" }}>
                   Already have an Account?{" "}
                    <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
                </Typography>
                </Box>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Signup;
