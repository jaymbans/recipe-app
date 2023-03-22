import React, { useState } from 'react'
import {
  AddRecipeContainer,
  AddRecipeStepContent,
  SectionTitle,
  StepTitle,
  BlackButton,
  GreenButton,
  Description,
  SmallDescription,
  SelectButton,
  ImageInput
} from '../../StyledComponents';
import NavigationBar from '../NavigationBar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { GhostButton } from '../../StyledComponents'

import RecipeIngredient from './RecipeIngredient';
import { useNavigate } from "react-router-dom";
import useLocalStorage from '../../useLocalStorage';

function AddRecipes() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    img: '',
    ingredients: [],
    directions: [],
    mealTypes: {
      breakfast: false,
      lunch: false,
      dinner: false,
      dessert: false,
      snacks: false
    },
    diet: {
      vegan: false,
      vegeterian: false,
      lactosefree: false,
      ketofriendly: false
    },
    mealTypeCategoryArr: [],
    dietCategoryArr: [],
    dateAdded: null
  })

  const nextStep = () => {
    setStep(step + 1)
    return;
  }

  // Step 1)
  const [ingredientsDisplayed, setIngredientsDisplayed] = useState([1]);
  const [numOfIngredients, setNumOfIngredients] = useState(ingredientsDisplayed.length);

  const changeRecipeName = (e) => {
    setFormData({ ...formData, ['name']: e.target.value })
  }

  const submitIngredients = () => {
    const ingredients = Array.from(document.getElementById('ingredient-container').children);

    const updatedIngredients = [];


    ingredients.forEach(ingredient => {
      const ingredientBox = ingredient.children[0];
      const measurement = ingredientBox.children[0].children[1].children[0].value;
      const ingredientName = ingredientBox.children[1].children[1].children[0].value;

      const measurementIngredientCombo = `${measurement}&${ingredientName}`;
      updatedIngredients.push(measurementIngredientCombo)
    })


    setFormData({
      ...formData,
      ['ingredients']: updatedIngredients,
      ['dateAdded']: new Date()
    })

    nextStep()
  }

  const addIngredient = (e) => {
    setNumOfIngredients(numOfIngredients + 1);
    setIngredientsDisplayed([...ingredientsDisplayed, numOfIngredients + 1])
  }
  const removeIngredient = (e) => {
    let removeButton = e.target

    while (removeButton.tagName !== 'BUTTON') {
      removeButton = removeButton.parentNode
    }
    const idxToRemove = removeButton.parentNode.id.split('-')[removeButton.parentNode.id.split('-').length - 1];
    const updatedIngredients = ingredientsDisplayed.filter((ingredient) => {
      return ingredient !== Number(idxToRemove)
    })
    setIngredientsDisplayed(updatedIngredients)

  }


  // Step 2)
  const [directionsDisplayed, setDirectionsDisplayed] = useState([1]);
  const [numOfDirections, setNumOfDirections] = useState(directionsDisplayed.length);


  const removeDirection = (e) => {
    let removeButton = e.target

    while (removeButton.tagName !== 'BUTTON') {
      removeButton = removeButton.parentNode
    }
    const idxToRemove = removeButton.parentNode.id.split('-')[removeButton.parentNode.id.split('-').length - 1];
    const updatedDirections = directionsDisplayed.filter((ingredient) => {
      return ingredient !== Number(idxToRemove)
    })
    setDirectionsDisplayed(updatedDirections)
  }
  const addDirection = () => {
    setNumOfDirections(numOfDirections + 1);
    setDirectionsDisplayed([...directionsDisplayed, numOfDirections + 1])
  }
  const submitDirections = () => {
    const directions = Array.from(document.getElementById('directions-container').children[0].children);

    const updatedDirections = [];

    directions.forEach(direction => {
      updatedDirections.push(direction.children[0].children[1].children[0].value)
    })

    setFormData({
      ...formData,
      ['directions']: updatedDirections
    })

    nextStep()
    return
  }


  // Step 3
  const [recipes, setRecipes] = useLocalStorage("recipes", []);


  const clickSelectButton = (e) => {
    const buttonValue = String(e.target.textContent.toLowerCase().split(' ').join(''));

    const categoryType = formData['mealTypes'][buttonValue] == null ? 'diet' : 'mealTypes';

    const updatedValue = !formData[categoryType][buttonValue]

    Array.from(e.target.classList).includes('active-btn') ? e.target.classList.remove('active-btn') : e.target.classList.add('active-btn')

    setFormData({
      ...formData,
      [categoryType]: {
        ...formData[categoryType],
        [buttonValue]: updatedValue
      }
    })
  }

  const convertCategoriesToArray = () => {
    const categoryArray = [];
    for (let category in formData.mealTypes) {
      if (formData.mealTypes[category])
        categoryArray.push(category)
    }

    const dietsArray = [];
    for (let diet in formData.diet) {
      if (formData.diet[diet])
        dietsArray.push(diet)
    }

    setFormData({
      ...formData,
      ['mealTypeCategoryArr']: categoryArray,
      ['dietCategoryArr']: dietsArray
    })

    nextStep();

  }

  const updateImageUrl = (e) => {
    setFormData({
      ...formData,
      ['img']: e.target.value
    })
    return;
  }

  const submitRecipe = () => {

    setRecipes(() => [
      ...recipes,
      formData
    ])



    setTimeout(() => {
      navigate(`/recipes/${formData.name.toLowerCase().split(' ').join('-')}`)
    }, 1000);

    return;
  }

  const displayRecipeStep = (stepNum) => {
    switch (stepNum) {
      case 1:
        return (
          <AddRecipeContainer>
            <AddRecipeStepContent sx={{ padding: '2% 3%' }}>
              <StepTitle>Step {step}</StepTitle>
              <SectionTitle sx={{ textAlign: 'center' }}>
                Add your Recipe Name & Ingredients
              </SectionTitle>
              <TextField
                variant="outlined"
                label='Recipe Name'
                onChange={changeRecipeName}
                sx={{ width: '100%' }}
              />
              <Box id='ingredient-container' sx={{
                width: '100%', paddingTop: '7%',
                borderTop: '1px solid black',
                marginTop: '7%'
              }}>
                {
                  ingredientsDisplayed.map((ingredient) => {
                    return (
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}
                        key={ingredient}
                        id={`ingredient-displayed-${ingredient}`}>
                        <RecipeIngredient key={`recipe-${ingredient}`} />
                        <GhostButton onClick={removeIngredient}>
                          <RemoveCircleOutlineIcon key={`remove-${ingredient}`} />
                        </GhostButton>
                      </Box>
                    )
                  })
                }
              </Box>
              <BlackButton onClick={addIngredient}>+ Add Ingredient</BlackButton>
              <Box
                onClick={submitIngredients}
                sx={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '50%' }}>
                <GreenButton sx={{ width: '40%', borderRadius: 0 }} >Next Step</GreenButton>
              </Box>
            </AddRecipeStepContent>
            <AddRecipeStepContent>
              <img
                src='https://media01.stockfood.com/largepreviews/MjA4NjExNDA=/00672940-Hand-Mixing-Egg-into-a-Bowl-of-Flour-with-a-Wooden-Spoon.jpg'
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </AddRecipeStepContent>
          </AddRecipeContainer >
        )
      case 2:
        return (
          <AddRecipeContainer>
            <AddRecipeStepContent sx={{ padding: '2% 3%' }}>
              <StepTitle>Step {step}</StepTitle>
              <SectionTitle sx={{ textAlign: 'center' }}>
                Insert Your directions
              </SectionTitle>
              <Box id='directions-container' sx={{
                width: '100%', paddingTop: '7%',
                borderTop: '1px solid black',
                marginTop: '7%'
              }}>
                <ol>
                  {
                    directionsDisplayed.map(direction => {
                      return (
                        <li
                          id={`direction-displayed-${direction}`}
                          key={`direction-${direction}`}
                          className='direction-item'>
                          <TextField
                            variant="outlined"
                            label={`Direction`}
                            sx={{ width: '100%', margin: '15px 0' }}
                          />
                          <GhostButton onClick={removeDirection}>
                            <RemoveCircleOutlineIcon sx={{ color: 'red' }} />
                          </GhostButton>
                        </li>
                      )
                    })
                  }
                </ol>
              </Box>
              <BlackButton onClick={addDirection}>+ Add Direction</BlackButton>
              <Box
                onClick={submitDirections}
                sx={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '50%' }}>
                <GreenButton sx={{ width: '40%', borderRadius: 0 }} onClick={submitDirections}>Next Step</GreenButton>
              </Box>
            </AddRecipeStepContent>
            <AddRecipeStepContent>
              <img
                src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2021%2F09%2F22%2Fmixing-cookie-dough-chocolate-chip-getty-0921-2000.jpg'
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
            </AddRecipeStepContent>
          </AddRecipeContainer >
        )
      case 3:
        return (
          <AddRecipeContainer>
            <AddRecipeStepContent sx={{ padding: '2% 3%' }}>
              <StepTitle>Step {step}</StepTitle>
              <SectionTitle sx={{ textAlign: 'center', marginBottom: '20px' }}>
                Select the Appropriate Categories & Diet/Restrictions
              </SectionTitle>
              <Description sx={{ textAlign: 'left', width: '100%' }}>
                Categories - Meal Type:
              </Description>
              <SmallDescription sx={{ color: 'red', textAlign: 'left', width: '100%' }}>
                please note: one than more meal type can be selected
              </SmallDescription>
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <SelectButton onClick={clickSelectButton}>Breakfast</SelectButton>
                <SelectButton onClick={clickSelectButton}>Lunch</SelectButton>
              </Box>
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <SelectButton onClick={clickSelectButton}>Dinner</SelectButton>
                <SelectButton onClick={clickSelectButton}>Snacks</SelectButton>
              </Box>
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <SelectButton onClick={clickSelectButton}>Dessert</SelectButton>
              </Box>
              <Description sx={{ textAlign: 'left', width: '100%' }}>
                Categories - Diet:
              </Description>
              <SmallDescription sx={{ color: 'red', textAlign: 'left', width: '100%' }}>
                please note: one than more diet can be selected
              </SmallDescription>
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <SelectButton onClick={clickSelectButton}>Vegan</SelectButton>
                <SelectButton onClick={clickSelectButton}>Vegetarian</SelectButton>
              </Box>
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <SelectButton onClick={clickSelectButton}>Lactose Free</SelectButton>
                <SelectButton onClick={clickSelectButton}>Keto Friendly</SelectButton>
              </Box>
              <GreenButton sx={{ width: '40%', borderRadius: 0 }} onClick={convertCategoriesToArray}>
                Finish & Submit
              </GreenButton>
            </AddRecipeStepContent>
            <AddRecipeStepContent>
              <img
                src='https://leitesculinaria.com/wp-content/uploads/2020/02/frozen-chocolae-chip-cookie-dough.jpg'
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </AddRecipeStepContent>
          </AddRecipeContainer >
        )
      case 4:
        return (
          <AddRecipeContainer>
            <AddRecipeStepContent sx={{ padding: '2% 3%' }}>
              <StepTitle>[Optional] Step {step}</StepTitle>
              <SectionTitle sx={{ textAlign: 'center', marginBottom: '20px' }}>
                Bon Appetit! Your recipe was added!
              </SectionTitle>
              <Description sx={{ textAlign: 'left', width: '100%' }}>
                Your have the option to add an image thumbnail to your recipe.
              </Description>
              <SmallDescription sx={{ color: 'black', fontWeight: 700, width: '100%', textAlign: 'center' }}>
                Replace the link below to switch the thumbnail!
              </SmallDescription>
              <ImageInput onChange={updateImageUrl} label='https://MyPlaceholderThumbnailLinkGoesHere' />
              <img
                src='https://www.seriouseats.com/thmb/-osPdxHxCxTuA6UL7ABekRdjkSo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__12__20201203-indonesian-pantry-vicky-wasik-1-b827da1c26134cf18153da281f8efb19.jpg'
                style={{
                  width: '60%',
                  height: '250px',
                  objectFit: 'cover',
                  margin: '15px 0'
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <SelectButton sx={{ borderRadius: 0, width: '45%', margin: '0 2%' }}>
                  The placeholder above is okay!
                </SelectButton>
                <GreenButton onClick={submitRecipe} sx={{ borderRadius: 0, width: '45%', margin: '0 2%' }} >
                  Use my custom link!
                </GreenButton>
              </Box>
              <SmallDescription sx={{ color: 'black', fontWeight: 700, width: '100%', textAlign: 'center', margin: '15px 0' }}>
                My Custom Thumbnail below:
              </SmallDescription>
              <img
                src={formData.img}
                style={{
                  width: '60%',
                  height: '250px',
                  objectFit: 'cover',
                  margin: '15px 0'
                }}
              />
            </AddRecipeStepContent>
            <AddRecipeStepContent>
              <img
                src='https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg'
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </AddRecipeStepContent>
          </AddRecipeContainer >
        )
    }
  }

  return (
    <>
      <NavigationBar />
      {displayRecipeStep(step)}
    </>
  )
}

export default AddRecipes