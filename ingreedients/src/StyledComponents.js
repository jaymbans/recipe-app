import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled, createTheme } from '@mui/system';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';


// Colors
export const primaryOlive = '#71865C';
export const primaryGray = '#717070';
export const secondaryBeige = '#F6F1EB';
export const offMaroon = '#9C6B57';

// Themes
const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  }
});

// Navigation Bar Styles
export const NavigationContainer = styled(Box)({
  width: '100%',
  padding: '5px 2%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  height: '60px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '2% 2%',
    height: 'auto',
  }
})

export const LogoContainer = styled(Box)({
  width: '50%',
  fontFamily: 'Maiden Orange, cursive',
  fontSize: 20,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  maxHeight: '100%',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    justifyContent: 'space-between',
    height: '50px'
  }

})
export const NavLinkContainer = styled(Box)({
  width: '50%',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    width: '90vw',
    padding: '0',
    flexDirection: 'column',
    alignItems: 'flex-end',
    visibility: 'hidden',
    right: '-400%',
    transition: 'all .3s ease-in-out',
    height: '0',
    zIndex: '10',
    '&.show': {
      position: 'absolute',
      visibility: 'visible',
      margin: '0',
      right: '0',
      top: '60px',
      height: '100vh',
      justifyContent: 'flex-start',
      background: 'white',
      padding: '2% 2%',
    }
  }
})

export const NavLink = styled(Link)({
  fontFamily: 'Inter, sans-serif',
  fontSize: 20,
  textDecoration: 'none',
  fontWeight: 'bold',
  '& .active': {
    color: primaryOlive
  },
  [theme.breakpoints.down('md')]: {
    margin: '2vh',
  }
})

// Homepage
export const HomepageContainer = styled(Box)({
  background: `url(${require('./assets/homepageBackground.jpeg')})`,
  padding: '2% 2%',
  height: '95vh',
  width: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
})

export const HomepageContent = styled(Box)({
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const HomepageOverlay = styled(Box)({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'black',
  opacity: .7,
  position: 'absolute',
  zIndex: 1,
})

export const WelcomePageContainer = styled(Box)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
})

export const WelcomePagePopup = styled(Box)({
  background: 'white',
  zIndex: 10,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Inter, sans-serif',
  padding: '10%'
})

// My Recipes
export const MyRecipesContainer = styled(Box)({
  padding: '2% 2%',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
})

export const CategoryPane = styled(Button)({
  height: '120px',
  width: '170px',
  background: 'black',
  margin: '0 10px',
  color: 'white',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  fontSize: '18px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '&:hover': {
    opacity: '.8'
  },
  [theme.breakpoints.down('md')]: {
    margin: '5px'
  }
})

export const RecipePaneContainer = styled(Box)({
  background: secondaryBeige,
  width: '100%',
  padding: '5px 0',
  height: '120px',
  margin: '15px auto',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  display: 'flex',
  maxWidth: '1200px'
})

export const DietTab = styled(Box)({
  width: '40%',
  height: '40%',
  borderRadius: '5px',
  background: 'gray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontFamily: 'Inter',
  marginRight: '20px'
})

export const RecipeDetailsMetaContainer = styled(Box)({
  width: '100%',
  padding: '5% 7vw',
  background: secondaryBeige,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
})

export const RecipeDetailsContent = styled(Box)({
  display: 'flex',
})

export const IngredientList = styled(List)({
  textDecoration: 'none',
  fontFamily: 'Inter',
  lineHeight: '2.5',
  paddingTop: 0,
  marginTop: 0
})

export const AddRecipeContainer = styled(Box)({
  width: '100%',
  minHeight: '95vh',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    minHeight: 'auto'
  }
})

export const AddRecipeStepContent = styled(Box)({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
})

export const StepTitle = styled(Typography)({
  color: 'gray',
  textTransform: 'uppercase',
  fontSize: '30px'
})


// Utilities
export const BeigeInput = styled(TextField)({
  background: secondaryBeige,
  display: 'inline-block',
  marginBottom: 10,
  textAlign: 'center',
})

export const GreenButton = styled(Button)({
  background: primaryOlive,
  color: 'white',
  textTransform: 'capitalize',
  height: 45,
  width: 100,
  '&:hover': {
    backgroundColor: '#71865C',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  position: 'relative'
})

export const RedButton = styled(Button)({
  background: '#C77474',
  color: 'white',
  textTransform: 'capitalize',
  height: 45,
  width: 120,
  '&:hover': {
    backgroundColor: 'red',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  position: 'relative'
})

export const BlackButton = styled(Button)({
  background: '#3C3C3C',
  color: 'white',
  textTransform: 'capitalize',
  height: 45,
  width: '98%',
  margin: '5% 0',
  '&:hover': {
    backgroundColor: '#4C3C4C',
    borderColor: '#4C3C4C',
    boxShadow: 'none',
  },
  position: 'relative'
})


export const SelectButton = styled(Button)({
  background: '#E3E3E3',
  color: '#838383',
  textTransform: 'capitalize',
  height: 45,
  width: '40%',
  margin: '5% 5%',
  '&:hover': {
    backgroundColor: '#878787',
    color: 'white',
    borderColor: '#878787',
    boxShadow: 'none',
  },
  position: 'relative',
  '&.active-btn': {
    backgroundColor: '#71865C',
    color: 'white'
  }
})

export const GhostButton = styled(Button)({
  background: 'none',
  padding: '0',
  borderRadius: '50%',
  color: 'red',
  backgroundColor: 'none'
})


export const Title = styled(Typography)({
  fontSize: 50,
})

export const SectionTitle = styled(Typography)({
  fontSize: 45,
})

export const Description = styled(Typography)({
  fontSize: 18,
})
export const SmallDescription = styled(Typography)({
  fontSize: 16,
})

export const ImageInput = styled(TextField)({
  background: '#E9EAEA',
  width: '100%',
  textAlign: 'center',
  border: 'none',
  margin: '15px 0'
})


