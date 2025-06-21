import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Toolbar,
  Box,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';

function GuestPage() {
  

  const location = useLocation();
  const eventName = location.state?.eventName || 'Untitled Event';
  const [guestList, setGuestList] = useState([]);
  const userId = localStorage.getItem("userId");
  
  const [guest, setGuest] = useState({
    guestId: '',
    id: userId,
    name: '',
    contactInfo: '',
    purposeOfVisit: '',
    hostName: '',
    event:eventName,
    checkInTime: dayjs(),
    guestType: '',
  });
  const handleChange = (e) => {
    setGuest({ ...guest, [e.target.name]: e.target.value });
  };

  const handleDateChange = (newValue) => {
    setGuest({ ...guest, checkInTime: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...guest,
      checkInTime: guest.checkInTime.format('YYYY-MM-DDTHH:mm:ss'),
    };

    try {
      const response = await fetch('http://51.20.56.241:8080/guests/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to add guest');
      }

      const savedGuest = await response.json();
      setGuestList([...guestList, savedGuest]);

      setGuest({
        guestId: '',
        id: userId,
        event: eventName,
        name: '',
        contactInfo: '',
        purposeOfVisit: '',
        hostName: '',
        checkInTime: dayjs(),
        guestType: '',
      });
    } catch (error) {
      console.error('Error adding guest:', error);
    }
  };

  return (
    <Box sx={{backgroundColor: '#fff8e1',minHeight: "100vh"}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{backgroundColor: "#ffecb3"}}>
              <Toolbar>
                <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 'bold',color: 'black' }}>
                  GuestFlow
                </Typography>
      </Toolbar>
      </Box>

      <Container maxWidth="sm" sx={{ mt: 5, mb: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'none' }} gutterBottom>
          Event: {eventName}
        </Typography>
      </Container>

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 5, borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }} gutterBottom>
                ADD GUEST
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  name="name"
                  variant="outlined"
                  value={guest.name}
                  onChange={handleChange}
                  required
                  sx={{
                    borderRadius: "25px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px",
                      fontSize: "14px"
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "12px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Contact Info"
                  name="contactInfo"
                  value={guest.contactInfo}
                  onChange={handleChange}
                  required
                  sx={{
                    borderRadius: "25px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px",
                      fontSize: "14px"
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "12px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Purpose of Visit"
                  name="purposeOfVisit"
                  value={guest.purposeOfVisit}
                  onChange={handleChange}
                  sx={{
                    borderRadius: "25px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px",
                      fontSize: "14px"
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "12px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Host Name"
                  name="hostName"
                  value={guest.hostName}
                  onChange={handleChange}
                  required
                  sx={{
                    borderRadius: "25px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px",
                      fontSize: "14px"
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "12px",
                    },
                  }}
                />
                <DateTimePicker
                  label="Select Date & Time"
                  value={guest.checkInTime}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      fullWidth: true,
                      sx: {
                        mt: 2,
                        backgroundColor: 'white',
                        borderRadius: 2,
                        boxShadow: 1,
                        '& .MuiInputBase-input': {
                          padding: '10px',
                          fontSize: '12px',
                          fontFamily: "'Playfair Display', serif",
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'gray',
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: "10px",
                            fontFamily: "'Playfair Display', serif",
                          },
                          '&:hover fieldset': {
                            borderColor: 'blue',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'darkblue',
                          },
                        },
                      },
                    }
                  }}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  select
                  label="Guest Type"
                  name="guestType"
                  value={guest.guestType}
                  onChange={handleChange}
                  required
                  sx={{
                    borderRadius: "25px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px",
                      fontSize: "14px"
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "12px",
                    },
                  }}
                >
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="Personal">Personal</MenuItem>
                  <MenuItem value="VIP">VIP</MenuItem>
                </TextField>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#ffa000",textTransform: 'none',color: "black", fontWeight: "bold",
                    "&:hover": { bgcolor: "#007c91" },
                    borderRadius: "20px",
                  }}
                >
                  + Add Guest
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </LocalizationProvider>
    </Box>
  );
}

export default GuestPage;
