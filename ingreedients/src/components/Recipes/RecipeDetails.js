import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
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
  RedButton,
  GhostButton
} from '../../StyledComponents';

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Spinner from '../Spinner';
import useLocalStorage from '../../useLocalStorage';
import { useNavigate } from "react-router-dom";


function RecipeDetails() {
  const navigate = useNavigate();

  const [usersRecipes, setUsersRecipes] = useLocalStorage('recipes', [])
  const [recipeDetails, setRecipeDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [recipeCategories, setRecipeCategories] = useState([]);
  const [recipeDiets, setRecipeDiets] = useState([]);
  let location = useLocation();


  const deleteRecipe = () => {
    const oldRecipes = usersRecipes;

    const newRecipes = oldRecipes.filter(recipe => {
      return recipe.name !== recipeDetails.name
    })

    setUsersRecipes(newRecipes)

    setTimeout(() => {
      navigate(`/recipes/`)
    }, 1000);
  }

  const copyRecipe = () => {
    const copiedRecipe =
      `Hey, check out my ${recipeDetails.name} recipe!
      Ingredients:
      ${recipeDetails.ingredients.map(ingredient => ingredient.split('&').join(' '))}

      Directions:
      ${recipeDetails.directions.map((direction, i) => (i + 1 + '. ' + direction))}
      `

    navigator.clipboard.writeText(copiedRecipe);
  }

  useEffect(() => {
    const recipeQueryName = location.pathname.split('/')[[location.pathname.split('/').length - 1]];

    const desiredRecipe = usersRecipes.filter(recipe => {
      return recipe['name'].toLowerCase().split(' ').join('-') === recipeQueryName
    })[0];

    setRecipeDetails(desiredRecipe)

    setLoading(false);
  }, []
  )


  return (
    <>
      <NavigationBar />
      {
        !loading ?
          <>
            <RecipeDetailsMetaContainer>
              <RecipeDetailsContent>
                <img src={recipeDetails.img} style={{
                  width: '170px',
                  height: '120px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }} />
                <Box sx={{ paddingLeft: '15px' }}>
                  <Box sx={{ display: 'flex' }}>
                    <SectionTitle sx={{ fontWeight: 900, textTransform: 'capitalize' }}>
                      {recipeDetails.name}
                    </SectionTitle>
                    <GhostButton sx={{ color: 'black' }} onClick={copyRecipe}>
                      <ContentCopyOutlinedIcon sx={{ fontSize: 45 }} />
                    </GhostButton>
                  </Box>
                  <Description sx={{
                    color: primaryOlive,
                    fontWeight: 600,
                    textTransform: 'capitalize'
                  }}>
                    {
                      recipeDetails.mealTypeCategoryArr.join('/')
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
                  recipeDetails.dietCategoryArr.includes('vegan') && <DietTab sx={{ background: primaryOlive }}>Vegan Option</DietTab>
                }
                {
                  recipeDetails.dietCategoryArr.includes('lactosefree') && <DietTab sx={{ background: 'white', color: 'black' }}>Lactose Free</DietTab>
                }
                {
                  recipeDetails.dietCategoryArr.includes('vegetarian') && <DietTab sx={{ background: offMaroon, color: 'white' }}>Vegetarian Friendly</DietTab>
                }
                {
                  recipeDetails.dietCategoryArr.includes('keto') && <DietTab sx={{ background: '#BFA978', color: 'white' }}>Keto</DietTab>
                }
              </Box>
            </RecipeDetailsMetaContainer>
            <RecipeDetailsContent sx={{ padding: '5%' }}>
              <Box sx={{
                width: '50%',
                borderRight: '1.5px solid #9C6B57',
                minHeight: '20vh',
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: '5%'
              }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 'fit-content' }}>
                  <Description sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', height: '60px' }}>
                    <img src={require('../../assets/groceryIcon.png')} style={{ height: 45 }} /> Ingredients{` (${recipeDetails.ingredients.length})`}
                  </Description>
                  <IngredientList className='ingredient-list'>
                    {recipeDetails.ingredients.map(ingredient => {
                      return <ListItem key={'ingredient-' + ingredient} sx={{ paddingTop: 0 }}>{'🔶 ' + ingredient.split("&").join(' ')}</ListItem>
                    })}
                  </IngredientList>
                </Box>
              </Box>
              <Box sx={{
                width: '50%',
                borderLeft: '1.5px solid #9C6B57',
                minHeight: '20vh',
                paddingLeft: '5%'
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
                  {recipeDetails.directions.map((direction, i) => {
                    return <li style={{ paddingLeft: '1rem' }} key={'direction-' + direction + i}>{direction}</li>
                  })}
                </ol>
              </Box>
            </RecipeDetailsContent>
            <RedButton onClick={deleteRecipe} sx={{ display: 'block', margin: '0 auto' }}>Delete Recipe</RedButton>
          </>

          :
          <Spinner />
      }

    </>
  )
}

export default RecipeDetails