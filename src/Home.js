
import { Typography, Container, Box } from '@mui/material';
import Nav from './Nav';


function Home() {
    return (
        <Box>
      {/* Top AppBar */}
      <Nav />

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to GuestFlow
        </Typography>
        <Typography variant="body1">
          A smart visitor management solution for your organization.
        </Typography>
      </Container>
    </Box>
    );
}

export default Home;