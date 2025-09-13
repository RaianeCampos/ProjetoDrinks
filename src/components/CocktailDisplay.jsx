import React from 'react';
import { useCocktail } from '../contexts/CocktailContext';
import { Box, CircularProgress, Alert, Card, CardContent, CardMedia, Typography, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import LiquorIcon from '@mui/icons-material/Liquor';

export default function CocktailDisplay() {
  const { state } = useCocktail();
  const { status, drink, error } = state;

  if (status === 'idle') {
    return <Typography sx={{ mt: 4, textAlign: 'center' }}>Busque um drink ou peça um aleatório para começar!</Typography>;
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
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure || ''} ${ingredient}`.trim());
      }
    }

    return (
      <Card sx={{ mt: 4, boxShadow: 3 }}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              image={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {drink.strDrink}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {drink.strCategory} | {drink.strAlcoholic}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {drink.strInstructions}
              </Typography>
              <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                Ingredientes:
              </Typography>
              <List dense>
                {ingredients.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <LiquorIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    );
  }

  return null;
}
