import React from 'react';
import { useCocktail } from '../contexts/CocktailContext';
import { Box, CircularProgress, Alert, Card, CardContent, CardMedia, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LiquorIcon from '@mui/icons-material/Liquor'; 

export default function CocktailDisplay() {
  const { state } = useCocktail();
  const { status, drink, error } = state;

  if (status === 'idle') {
    return <Typography sx={{ mt: 4, textAlign: 'center' }}>Busque um drink ou peça um aleatório!</Typography>;
  }

  if (status === 'loading') {
    return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  }

  if (status === 'error') {
    return <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>;
  }

  if (status === 'success' && drink) {
  
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[strIngredient${i}];
      const measure = drink[strMeasure${i}];
      if (ingredient) {
        ingredients.push(${measure || ''} ${ingredient}.trim());
      }
    }

    return (
      <Card sx={{ mt: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {drink.strDrink}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {drink.strInstructions}
          </Typography>
          <Typography variant="h6" component="div" sx={{ mt: 2 }}>
            Ingredientes:
          </Typography>
          <List>
            {ingredients.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemIcon>
                  <LiquorIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }

  return null;
}