import React, { useEffect, useState } from 'react';
import {
   Toolbar, Typography, IconButton, Container, Paper,
  Divider, Menu, MenuItem, Button, Table, TableHead,
  TableRow, TableCell, TableBody, TextField,
  Box
} from '@mui/material';
import { AccountBox } from '@mui/icons-material';
import { Select, InputLabel, FormControl } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AccountPage() {
  // const [selectedDate, setSelectedDate] = useState(dayjs());
  // const [submittedDate, setSubmittedDate] = useState(null);
  const [guests, setGuests] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [eventName, setEventName] = useState('');
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const accountName = localStorage.getItem("AccountName");

  const handleCreateEvent = () => {
    if (eventName.trim()) {
      navigate('/guestform', { state: { eventName } });
    }
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  useEffect(() => {
  const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://56.228.31.113:8080/guests/${userId}/events`);
      setEvents(response.data);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  if (userId) {
    fetchEvents();
  }
}, [userId]);

const handleEventSelect = async (event) => {
  const selected = event.target.value;
  setSelectedEvent(selected);

  try {
    const response = await axios.get(`http://56.228.31.113:8080/guests/${userId}/event/${encodeURIComponent(selected)}`);
    setGuests(response.data);
  } catch (error) {
    console.error("Failed to fetch guests by event:", error);
    setGuests([]);
  }
};



  return (
    <Box sx={{backgroundColor: '#fff8e1',minHeight: "100vh"}}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <Toolbar> */}
      <Box sx={{backgroundColor: "#ffecb3"}}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: 'bold',color: 'black' }}>
            GuestFlow
          </Typography>
          <IconButton onClick={handleClick} color="inherit">
          <AccountBox sx={{ fontSize: 40 }} />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem disabled><Typography variant="subtitle2">👤 {accountName}</Typography></MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
          </Toolbar>
          </Box>
       
      {/* </Toolbar> */}

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <TextField
        sx={{backgroundColor: 'white', mb: 2, borderRadius: 2}}
          fullWidth
          label="Create a new Event"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <Button variant="contained" fullWidth sx={{ mb: 4, backgroundColor: "#ffa000",color:"black", fontWeight:"bold",textTransform: 'none' }} onClick={handleCreateEvent}>
          + Create Event
        </Button>
<Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4 }}>
  Filter By Event
</Typography>
<Paper sx={{ p: 3, borderRadius: 2 }}>
  <FormControl fullWidth sx={{ mb: 2 }}>
    <InputLabel>Select Event</InputLabel>
    <Select value={selectedEvent} label="Select Event" onChange={handleEventSelect}>
      {events.map((eventName, index) => (
        <MenuItem key={index} value={eventName}>
          {eventName}
        </MenuItem>
      ))}
    </Select>
  </FormControl>

  <Divider sx={{ mb: 2 }} />

  {selectedEvent && (
    <>
      <Typography variant="subtitle1" gutterBottom>
        Guests for event: <strong>{selectedEvent}</strong>
      </Typography>
      {guests.length === 0 ? (
  <Typography>No guests found.</Typography>
) : (
  <>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><strong>Name</strong></TableCell>
          <TableCell><strong>Contact</strong></TableCell>
          <TableCell><strong>Host</strong></TableCell>
          <TableCell><strong>Event</strong></TableCell>
          <TableCell><strong>Check-In Time</strong></TableCell>
          <TableCell><strong>Guest Type</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {guests.map((guest, index) => (
          <TableRow key={index}>
            <TableCell>{guest.name}</TableCell>
            <TableCell>{guest.contactInfo}</TableCell>
            <TableCell>{guest.hostName}</TableCell>
            <TableCell>{guest.event}</TableCell>
            <TableCell>{dayjs(guest.checkInTime).format('HH:mm')}</TableCell>
            <TableCell>{guest.guestType}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    {/* 👇 Add Guest Button */}
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{ mt: 2,bgcolor: "#ffa000",textTransform: 'none',color: "black", fontWeight: "bold" }}
      onClick={() => navigate('/guestform', { state: { eventName: selectedEvent } })}
    >
      + Add Guest to This Event
    </Button>
  </>
)}

    </>
  )}
</Paper>

       
      </Container>
    </LocalizationProvider>
    </Box>
  );
}