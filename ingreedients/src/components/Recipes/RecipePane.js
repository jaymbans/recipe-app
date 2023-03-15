import { RecipePaneContainer, Description, primaryOlive, DietTab, offMaroon } from '../../StyledComponents';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function RecipePane({ recipeData }) {
  return (
    <>
      <RecipePaneContainer>
        <img
          src={recipeData.recipeImg}
          style={{
            height: '100%',
            width: '10%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <Box sx={{ width: '50%', padding: '0 15px' }}>
          <Description sx={{ color: primaryOlive }}>
            {recipeData.categories.join('/')}
          </Description>
          <Link to={`/recipes/${recipeData.recipeName.toLowerCase().split(' ').join('-')}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Typography variant='h5' sx={{ fontStyle: 'italic', fontWeight: 900 }}>
              {recipeData.recipeName}</Typography>
          </Link>

        </Box>
        <Box sx={{ width: '40%', display: 'flex', flexWrap: 'wrap' }}>
          {
            recipeData.diets.includes('vegan') && <DietTab sx={{ background: primaryOlive }}>Vegan Option</DietTab>
          }
          {
            recipeData.diets.includes('lactose free') && <DietTab sx={{ background: 'white', color: 'black' }}>Lactose Free</DietTab>
          }
          {
            recipeData.diets.includes('vegetarian') && <DietTab sx={{ background: offMaroon, color: 'white' }}>Vegetarian Friendly</DietTab>
          }
          {
            recipeData.diets.includes('keto') && <DietTab sx={{ background: '#BFA978', color: 'white' }}>Keto</DietTab>
          }
        </Box>
      </RecipePaneContainer>

    </>
  )
}

export default RecipePane