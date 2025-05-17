import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function GuestForm() {
  const [guest, setGuest] = useState({
    name: '',
    contactInfo: '',
    purposeOfVisit: '',
    hostName: '',
    checkInTime: dayjs(),
    guestType: '',
  });

  const handleChange = (e) => {
    setGuest({ ...guest, [e.target.name]: e.target.value });
  };

  const handleDateChange = (newValue) => {
    setGuest({ ...guest, checkInTime: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guest submitted:', guest);
    // Here you can send data to the backend via axios or fetch
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, p: 4, boxShadow: 3, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            Add Guest Entry
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={guest.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Contact Info"
              name="contactInfo"
              value={guest.contactInfo}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Purpose of Visit"
              name="purposeOfVisit"
              value={guest.purposeOfVisit}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Host Name"
              name="hostName"
              value={guest.hostName}
              onChange={handleChange}
              required
            />
            <DateTimePicker
              label="Check-in Time"
              value={guest.checkInTime}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField fullWidth margin="normal" {...params} />
              )}
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
            >
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="VIP">VIP</MenuItem>
            </TextField>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Add Guest
            </Button>
          </form>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}

export default GuestForm;
