import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Colors
const primaryOlive = '#71865C';
const primaryGray = '#717070';
const secondaryBeige = '#F6F1EB'

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
  color: primaryGray,
  fontSize: 20,
  textDecoration: 'none',
  fontWeight: 'bold'
})

// Homepage
export const HomepageContainer = styled(Box)({
  background: `url(${require('./assets/homepageBackground.jpeg')})`,
  padding: '2% 2%',
  height: '90vh',
  width: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
})

export const HomepageContent = styled(Box)({
  background: 'red',
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})
