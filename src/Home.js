import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import Nav from './Nav';

function Home() {
  return (
    <Box sx={{ backgroundColor: '#fff8e1', minHeight: '100vh' }}>
      <Nav />

      <Container maxWidth="lg" justifyContent="center" sx={{ pt: { xs: 3, md: 10 }, pb: 6 }}>
        <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
          {/* Left Side Content */}
          <Grid item xs={12} sm={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                bgcolor: '#fff8e1',
                borderRadius: 6,
              }}
            >
              <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mb: { xs: 2, sm: 3 },
                    fontSize: 'clamp(1.4rem, 2.5vw, 2.8rem)',
                  }}
                >
                  Welcome to GuestFlow
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mb: 3,
                    fontSize: 'clamp(1rem, 2vw, 2rem)',
                  }}
                >
                  Your Ultimate Event Management Website
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 500,
                    mb: 3,
                    fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                    lineHeight: 1.8,
                  }}
                >
                  <strong>GuestFlow</strong> is a web-based event management system to help seamlessly manage guest attendance at events.
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    fontWeight: 500,
                    fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                    pl: 6,
                    mb: 4,
                    lineHeight: 2,
                    listStyle: 'disc',
                  }}
                >
                  <li>Create new events with custom titles</li>
                  <li>Add and manage guest details (name, contact info, timestamp, etc.) for each event</li>
                  <li>View a real-time list of guests who attended a specific event</li>
                  <li>Ensure smooth guest tracking and enhance event organization</li>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  🔑 Core Features
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    fontWeight: 500,
                    fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                    pl: 6,
                    lineHeight: 2,
                    listStyle: 'disc',
                  }}
                >
                  <li><strong>Guest Management:</strong> Easily add, edit, and delete guest information.</li>
                  <li><strong>Event Creation:</strong> Create and manage events with ease and effortlessly.</li>
                  <li><strong>Real-time Tracking:</strong> Monitor guest check-ins and attendance in real-time.</li>
                  <li><strong>User-Friendly Interface:</strong> Intuitive design for seamless navigation.</li>
                   <li><strong>Secure Authentication:</strong> Ensure data privacy and security.</li>
                  <li><strong>Responsive Design:</strong> Access from any device, anywhere.</li>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
