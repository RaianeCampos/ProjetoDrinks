import React from 'react';
import { CocktailProvider } from './contexts/CocktailContext';
import CocktailActions from './components/CocktailActions';
import CocktailDisplay from './components/CocktailDisplay';
import { Container, Typography, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: {
      default: '#431a1a', 
    },
    primary: {
      main: '#251515ff',
    },
    secondary: {
      main: '#251515ff',
    },
    text: {
      primary: '#251515ff',
      
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <CocktailProvider>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            py: 4, 
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                backgroundColor: '#ecdec5ff',
                p: { xs: 2, sm: 4 },
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Typography variant="h2" component="h1" align="center" gutterBottom color="primary">
                Guia de Drinks
              </Typography>
              <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
                Aproveite e relaxe com um bom drink!
              </Typography>

              <CocktailActions />
              <CocktailDisplay />
            </Box>
          </Container>
        </Box>
      </CocktailProvider>
    </ThemeProvider>
  );
}

export default App;

