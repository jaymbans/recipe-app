import React from 'react';
import NavigationBar from '../NavigationBar';
import Box from '@mui/material/Box';
import { Description, SectionTitle, SmallDescription, primaryGray, MyRecipesContainer, CategoryPane } from '../../StyledComponents';
import { Typography } from '@mui/material';
import RecipePane from './RecipePane';
import { user1 } from '../../mockUser';
import { Link } from 'react-router-dom';


function MyRecipes({ userName }) {
  const userRecipes = user1.recipes;
  const currentCategory = null;





  return (
    <>
      <NavigationBar />
      <Box sx={{
        height: '400px',
        width: '100%',
        background: 'url(https://media.tenor.com/UiVtVa1JRjgAAAAd/chop-veggies.gif)',
        backgroundSize: 'cover',
        backgroundPositionY: '-120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Box sx={{
          background: 'white',
          width: '60%',
          height: '60%',
          padding: '35px 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <SectionTitle sx={{ textAlign: 'center', }}>{`${userName}'s Recipes`}</SectionTitle>
          <Description sx={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{`0 Total Recipes`}</Description>
          <SmallDescription sx={{ color: primaryGray, fontWeight: 'bold', textAlign: 'center' }}>{`Latest Recipe: ${'Gochujang Noodles'}, ${'March 1, 2022'}`}</SmallDescription>
        </Box>
      </Box>
      <MyRecipesContainer>
        <Typography variant="h4">Categories</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', margin: '35px 0' }}>
          <CategoryPane sx={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://www.kyleecooks.com/wp-content/uploads/2021/12/Chocolate-Chip-Pancakes-1200x900-1-1.jpg')`,
            backgroundSize: 'cover'
          }}>
            Breakfast
          </CategoryPane>
          <CategoryPane sx={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://img.taste.com.au/bkaitH9W/taste/2016/11/pork-and-bean-burrito-bowl-109208-1.jpeg')`,
            backgroundSize: 'cover',
          }}>
            Lunch
          </CategoryPane>
          <CategoryPane sx={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://i.pinimg.com/originals/db/ea/4e/dbea4e1ba19d167660e400f19b1a0e88.png')`,
            backgroundSize: 'cover',
          }}>
            Dinner
          </CategoryPane>
          <CategoryPane sx={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://theviewfromgreatisland.com/wp-content/uploads/2019/06/Creamsicle-Cake-8508213-June-21-2019.jpg')`,
            backgroundSize: 'cover',
          }}>
            Dessert
          </CategoryPane>
          <CategoryPane sx={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://wichitamom.com/wp-content/uploads/2020/03/french-fries.png')`,
            backgroundSize: 'cover',
          }}>
            Snacks
          </CategoryPane>
        </Box>
        <Box>
          <Typography variant="h4">{`${userName}'s ${''} Recipes (${userRecipes.length})`}</Typography>
          {
            userRecipes.map(recipe => {
              return (
                <RecipePane recipeData={recipe} />
              )
            })
          }
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Link to='/add-recipe' style={{
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '0 auto',
            fontFamily: 'Inter'
          }}>Add more recipes</Link>
        </Box>
      </MyRecipesContainer>
    </>
  )
}

export default MyRecipes