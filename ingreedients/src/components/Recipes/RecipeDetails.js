import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { user1 } from '../../mockUser';
import NavigationBar from '../NavigationBar';
import {
  RecipeDetailsMetaContainer,
  RecipeDetailsContent,
  SectionTitle,
  Description,
  primaryOlive,
  offMaroon,
  DietTab,
  IngredientList,
  RedButton
} from '../../StyledComponents';

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Spinner from '../Spinner';

function RecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [loading, setLoading] = useState(true);
  let location = useLocation();

  useEffect(() => {
    const recipeQueryName = location.pathname.split('/')[[location.pathname.split('/').length - 1]];

    const desiredRecipe = user1.recipes.filter(recipe => {
      return recipe.recipeName.toLowerCase().split(' ').join('-') === recipeQueryName
    });

    setRecipeDetails(desiredRecipe[0]);
    setLoading(false);
  }, [location, recipeDetails])


  return (
    <>
      <NavigationBar />
      {
        !loading ?
          <>
            <RecipeDetailsMetaContainer>
              <RecipeDetailsContent>
                <img src={recipeDetails.recipeImg} style={{
                  width: '170px',
                  height: '120px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }} />
                <Box sx={{ paddingLeft: '15px' }}>
                  <Box sx={{ display: 'flex' }}>
                    <SectionTitle sx={{ fontWeight: 900 }}>
                      {recipeDetails.recipeName}
                    </SectionTitle>
                    <ShareOutlinedIcon sx={{ fontSize: 45 }} />
                    <ContentCopyOutlinedIcon sx={{ fontSize: 45 }} />
                  </Box>
                  <Description sx={{
                    color: primaryOlive,
                    fontWeight: 600
                  }}>
                    {
                      recipeDetails.categories.join('/')
                    }
                  </Description>
                </Box>

              </RecipeDetailsContent>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1ps solid blue',
                height: 85,
                width: ' 70%'
              }}>
                {
                  recipeDetails.diets.includes('vegan') && <DietTab sx={{ background: primaryOlive }}>Vegan Option</DietTab>
                }
                {
                  recipeDetails.diets.includes('lactose free') && <DietTab sx={{ background: 'white', color: 'black' }}>Lactose Free</DietTab>
                }
                {
                  recipeDetails.diets.includes('vegetarian') && <DietTab sx={{ background: offMaroon, color: 'white' }}>Vegetarian Friendly</DietTab>
                }
                {
                  recipeDetails.diets.includes('keto') && <DietTab sx={{ background: '#BFA978', color: 'white' }}>Keto</DietTab>
                }
              </Box>
            </RecipeDetailsMetaContainer>
            <RecipeDetailsContent sx={{ padding: '5%' }}>
              <Box sx={{
                width: '50%',
                borderRight: '1.5px solid #9C6B57',
                minHeight: '20vh',
              }}>
                <Description sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', height: '60px' }}>
                  <img src={require('../../assets/groceryIcon.png')} style={{ height: 45 }} /> Ingredients{` (${recipeDetails.ingredients.length})`}
                </Description>
                <IngredientList className='ingredient-list'>
                  {recipeDetails.ingredients.map(ingredient => {
                    return <ListItem sx={{ paddingTop: 0 }}>{'🔶 ' + ingredient}</ListItem>
                  })}
                </IngredientList>
              </Box>
              <Box sx={{
                width: '50%',
                borderLeft: '1.5px solid #9C6B57',
                minHeight: '20vh',
                paddingLeft: '10%'
              }}>
                <Description sx={{
                  fontWeight: 'bold',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '60px',
                }}>
                  <img src={require('../../assets/chefHatIcon.png')} style={{ height: 45, marginRight: '5px' }} />
                  Directions{` (${recipeDetails.directions.length})`}
                </Description>
                <ol style={{ width: '60%', fontFamily: 'Inter', lineHeight: '2.5', listStylePosition: 'inside' }}>
                  {recipeDetails.directions.map(direction => {
                    return <li style={{ paddingLeft: '1rem' }}>{direction}</li>
                  })}
                </ol>
              </Box>
            </RecipeDetailsContent>
            <RedButton sx={{ display: 'block', margin: '0 auto' }}>Delete Recipe</RedButton>
          </>

          :
          <Spinner />
      }

    </>
  )
}

export default RecipeDetails