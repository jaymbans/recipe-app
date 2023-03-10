import { useState } from 'react';
import { Title, Description, GreenButton, primaryOlive } from '../../StyledComponents';
import Box from '@mui/material/Box';

function WelcomeBackPage({ userName }) {
  const hasRecipes = false;

  return (

    <Box sx={{
      width: '45%',
      height: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '15%',
      minHeight: 400
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 300, textAlign: 'center' }}>
        <Title variant='h1' sx={{ fontWeight: 700, lineHeight: '60px' }}>
          {
            !hasRecipes ?
              `Welcome, ${userName}!` :
              `Welcome Back, ${userName}`
          }
        </Title>
        <Description sx={{ marginTop: 5, fontWeight: 'bold' }}>
          {
            !hasRecipes ?
              'Get Started and Add Your Recipe!' :
              'Pick up where you left off!'
          }
        </Description>
        {
          !hasRecipes ?
            <GreenButton sx={{ width: '80%', marginTop: '5px' }}>
              Add Recipes
            </GreenButton> :
            <GreenButton sx={{ width: '80%', marginTop: '5px' }}>
              My Recipes
            </GreenButton>
        }
      </Box>
      {
        hasRecipes &&
        <Box sx={{ marginTop: '50px', width: '100%', display: 'flex', height: 120, alignItems: 'center', background: 'white', padding: '10px', boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
          <img src={require('../../assets/bellIcon.png')} style={{ width: 'auto', height: '65%' }} />
          <Box sx={{ paddingLeft: 2.5 }}>
            <Description>
              Total Recipes: <strong>{0}</strong>
            </Description>
            <Description>
              Last Recipe:
              <em style={{ color: primaryOlive, fontWeight: 'bold' }}>
                {'N/a'}
              </em>
            </Description>
          </Box>
        </Box>
      }



    </Box >

  )
}

export default WelcomeBackPage