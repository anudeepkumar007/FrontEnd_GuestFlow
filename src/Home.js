import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import Nav from './Nav';
import Signup from './SignUp';

function Home() {
    return (
        <Box sx={{ backgroundColor: '#fff8e1', minHeight: '100vh' }}>
            <Nav/>
        <Box sx={{ backgroundColor: '#fff8e1', justifyContent: 'center'
             
             }}>
            <Grid container sx={{ mt: { xs: 3  }, // Move grids closer to Nav
        px: { xs: 2, md: 4 },
        ml: { xs: 0, md: 10 }, }}>
                {/* Left Side */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            mt: { xs: 2, md: 3 },
                            p: { xs: 6, md: 8 },
                            width: '100%',
                            maxWidth: 600,
                            bgcolor: '#fff8e1',
                            borderRadius: 4,
                        }}
                    >
                        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                            Welcome to GuestFlow
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3, fontSize: { xs: '1.4rem', md: '2rem' } }}>
                            Your Ultimate Event Management Website
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: 500, mb: 2, fontSize: '1rem' }}>
                            <strong>GuestFlow</strong> is a web-based event management system designed to help seamlessly manage guest attendance at events. The application allows you to:
                        </Typography>

                        <Box component="ul" sx={{ fontWeight: 500, fontSize: '1rem', pl: 3, mb: 4, listStyle: 'disc' }}>
                            <li>Create new events with custom titles</li>
                            <li>Add and manage guest details (name, contact info, timestamp, etc.) for each event</li>
                            <li>View a real-time list of guests who attended a specific event</li>
                            <li>Ensure smooth guest tracking and enhance event organization</li>
                        </Box>

                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                            🔑 Core Features
                        </Typography>

                        <Box component="ul" sx={{ fontWeight: 500, fontSize: '1rem', pl: 3, listStyle: 'disc' }}>
                            <li><strong>Guest Management:</strong> Easily add, edit, and delete guest information.</li>
                            <li><strong>Event Creation:</strong> Create and manage events with ease.</li>
                            <li><strong>Real-time Tracking:</strong> Monitor guest check-ins and attendance in real-time.</li>
                            <li><strong>User-Friendly Interface:</strong> Intuitive design for seamless navigation.</li>
                            <li><strong>Secure Authentication:</strong> Ensure data privacy and security.</li>
                            <li><strong>Responsive Design:</strong> Access from any device, anywhere.</li>
                        </Box>
                    </Paper>
                </Grid>

                {/* Right Side (Signup Form) */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        p: { xs: 2, md: 2 },
                        ml: { xs: 0, md: 8 } // ✅ moves only the Signup section to right on medium+ screens
                    }}
                    >
                    <Container maxWidth="sm">
                        <Signup />
                    </Container>
</Grid>
            </Grid>
        </Box>
        </Box>
    );
}

export default Home;
