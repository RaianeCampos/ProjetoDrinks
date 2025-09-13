import React from 'react';
import { CocktailProvider } from './contexts/CocktailContext';
import CocktailActions from './components/CocktailActions';
import CocktailDisplay from './components/CocktailDisplay';
import { Container, Typography, CssBaseline, Box } from '@mui/material';

function App() {
  return (
    <CocktailProvider>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            Guia de Drinks
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
            Projeto de Programação Web Fullstack [cite: 3]
          </Typography>
          <CocktailActions />
          <CocktailDisplay />
        </Box>
      </Container>
    </CocktailProvider>
  );
}

export default App;