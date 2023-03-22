import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function RecipeIngredient() {

  return (
    <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }} className='ingredient-box'>
      <TextField
        variant="outlined"
        label='Measurement'
        className='measurement'
        sx={{ width: '40%', marginRight: '5%' }}
      />
      <TextField
        variant="outlined"
        label='Ingredient'
        className='ingredient'
        sx={{ width: '40%', marginRight: '5%' }}
      />
    </Box>
  )
}

export default RecipeIngredient