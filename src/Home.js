import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import Nav from './Nav';
import Signup from './SignUp';

function Home() {
    return (
        <Box sx={{ backgroundColor: '#fff8e1', minHeight: '100vh' }}>
            {/* Top AppBar */}
            <Nav />

            <Grid container   sx={{ minHeight: '85vh'}}>
                    {/* Left Side */}
                <Grid item xs={12} md={6} sx={{ ml: -22 , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Paper
                        elevation={3}
                        sx={{
                            mt: 8,
                            mb:4,
                        width: '75%',
                        maxWidth: '60%',
                        height: '75%',
                        p: 6,
                        bgcolor: '#fff8e1',
                        borderRadius: 4,
                        }}
                    >
                        <Typography variant="h3"sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
                        Welcome to GuestFlow
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 'bold',textAlign: 'center', mb: 3 }}>
                        Your Ultimate Event Management Website
                        </Typography>

                        <Typography variant="h5" sx={{ fontWeight: 500,mb: 2,fontSize: '1.1rem' }}>
                        <strong>GuestFlow</strong> is a web-based event management system designed to help  seamlessly manage guest attendance at events. The application allows to:
                        </Typography>

                        <Box component="ul"  sx={{ fontWeight: 500,fontSize: '1.1rem', pl: 8, mb: 4 ,istStyle: 'disc',
                            '& > li': {
                            marginBottom: '1%', // or use theme spacing like `mb: 1`
                            },}}>
                            <li>Create new events with custom titles</li>
                            <li>Add and manage guest details (name, contact info, timestamp, etc.) for each event</li>
                            <li>View a real-time list of guests who attended a specific event</li>
                            <li>Ensure smooth guest tracking and enhance event organization</li>
                        </Box>

                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                        🔑 Core Features
                        </Typography>

                        <Box component="ul" sx={{ fontWeight: 500, fontSize: '1.1rem', pl: 8,istStyle: 'disc',
                            '& > li': {
                            marginBottom: '1%', // or use theme spacing like `mb: 1`
                            }, }}>
                        <li><strong>Guest Management:</strong> Easily add, edit, and delete guest information.</li>
                        <li><strong>Event Creation:</strong> Create and manage events with ease.</li>
                        <li><strong>Real-time Tracking:</strong> Monitor guest check-ins and attendance in real-time.</li>
                        <li><strong>User-Friendly Interface:</strong> Intuitive design for seamless navigation.</li>
                        <li><strong>Secure Authentication:</strong> Ensure data privacy and security.</li>
                        <li><strong>Responsive Design:</strong> Access from any device, anywhere.</li>
                        </Box>
                    </Paper>
                </Grid>

            
                <Grid item xs={12} md={6}>
            
                    <Container maxWidth="xs" sx={{ mt: 8, mb: 6 }}>
                

                        {/* Side-by-side layout */}
                        <Grid container spacing={2} sx={{ ml:-10,mt:2,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* Signup Form */}
                            <Grid item xs={10} md={6}>
                                <Signup />
                            </Grid>
                        </Grid>
                
                    </Container>
                </Grid>
                
            </Grid>
        </Box>
    );
}

export default Home;
