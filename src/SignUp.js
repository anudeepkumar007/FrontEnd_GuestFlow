import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Divider,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://56.228.31.113:8080/auth/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });
      alert(response.data);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#fff8e1", minHeight: "100vh" }}>
      {/* Header Bar */}
      <Box sx={{ backgroundColor: "#ffecb3" }}>
        <Toolbar>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{ flexGrow: 1, fontWeight: 'bold', color: 'black', px: 2 }}
          >
            GuestFlow
          </Typography>
        </Toolbar>
      </Box>
      {/* Heading */}
      <Box>
        <Typography variant="h4" sx= {{mt: 4, p: 3,textAlign: "center",fontWeight: "bold", textTransform: "None"}}>
          Join the GuestFlow Family!
        </Typography>
      </Box>
      {/* Signup Form Container */}
      <Container maxWidth="xs">
  <Box sx={{ mt: 6, p: 3, boxShadow: 3, borderRadius: 5, bgcolor: "white" }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Typography
      variant="h5"
      align="center"
      sx={{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
        mb: 2,
      }}
    >
      Create an Account
    </Typography>
    </Box>

    <form onSubmit={handleSubmit}>
      {["firstName", "lastName", "email", "password"].map((field, index) => (
        <TextField
          key={index}
          fullWidth
          label={
            field === "firstName"
              ? "First Name"
              : field === "lastName"
              ? "Last Name"
              : field === "email"
              ? "Email"
              : "Password"
          }
          name={field}
          type={field === "password" ? "password" : "text"}
          value={formData[field]}
          onChange={handleChange}
          required
          margin="normal"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
            },
            "& .MuiInputLabel-root": {
              fontSize: 'clamp(0.8rem, 1.1vw, 1rem)',
            },
          }}
        />
      ))}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          type="submit"
          sx={{
            bgcolor: "#ffa000",
            color: "black",
            fontWeight: "bold",
            borderRadius: "20px",
            textTransform: "none",
            px: 4,
            py: 1,
            "&:hover": { bgcolor: "#ffb300" },
          }}
        >
          Sign Up
        </Button>
      </Box>

      <Divider sx={{ my: 3 }}>or</Divider>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <FacebookTwoToneIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </Box>

      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
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
