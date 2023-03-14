import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Colors
export const primaryOlive = '#71865C';
export const primaryGray = '#717070';
export const secondaryBeige = '#F6F1EB';
export const offMaroon = '#9C6B57';

// Navigation Bar Styles
export const NavigationContainer = styled(Box)({
  width: '100%',
  padding: '5px 2%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  height: '60px',
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
})
export const NavLinkContainer = styled(Box)({
  width: '50%',
  display: 'flex',
  justifyContent: 'space-between'
})

export const NavLink = styled(Link)({
  fontFamily: 'Inter, sans-serif',
  fontSize: 20,
  textDecoration: 'none',
  fontWeight: 'bold',
  '& .active': {
    color: primaryOlive
  },
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
  zIndex: 1
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
  height: '50%',
  width: '70%',
  maxWidth: '700px',
  maxHeight: '600px',
  minHeight: '300px',
  background: 'white',
  zIndex: 10,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontFamily: 'Inter, sans-serif',
  paddingTop: '10%'
})

// My Recipes
export const MyRecipesContainer = styled(Box)({
  padding: '2% 2%',
  width: '100%',
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
