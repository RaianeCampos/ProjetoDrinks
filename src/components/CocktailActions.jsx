import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCocktail } from '../contexts/CocktailContext';
import { TextField, Button, Box, Stack } from '@mui/material';

const schema = yup.object({
  drinkName: yup.string().required('O nome do drink é obrigatório, caso deseje buscar um drink específico.'),
});

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export default function CocktailActions() {
  const { dispatch } = useCocktail();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const fetchDrink = async (url) => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await axios.get(url);
      if (response.data.drinks) {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data.drinks[0] });
      } else {

        throw new Error('Nenhum drink foi encontrado com esse nome. Tente outro!');
      }
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  const onSearchSubmit = (data) => {
    fetchDrink(`${API_BASE_URL}/search.php?s=${data.drinkName}`);
  };

  const handleRandomClick = () => {
    fetchDrink(`${API_BASE_URL}/random.php`);
  };

  return (
    <Box>
      <Box component="form" onSubmit={handleSubmit(onSearchSubmit)} sx={{ mb: 2 }}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="Buscar por nome do drink"
            variant="outlined"
            {...register('drinkName')}
            error={!!errors.drinkName}
            helperText={errors.drinkName?.message}
          />
          <Button type="submit" variant="contained">Buscar</Button>
        </Stack>
      </Box>
      <Button onClick={handleRandomClick} variant="outlined" fullWidth>
        Me Surpreenda com um Drink Aleatório
      </Button>
    </Box>
  );
}
