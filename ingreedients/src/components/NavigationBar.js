import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinkContainer
}
  from '../StyledComponents';
import { useState, useEffect } from 'react'


function NavigationBar() {

  useEffect(() => {

    const currentPage = document.location.hash.split('/')[document.location.hash.split.length - 1];

    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    navLinks.forEach(link => link.classList.remove('active'));

    switch (currentPage) {
      case '':
        document.getElementById('home-link').classList.add('active');
        break;
      case 'recipes':
        document.getElementById('recipes-link').classList.add('active');
        break;
      case 'add-recipes':
        document.getElementById('add-recipes-link').classList.add('active');
        break;
      case 'profile':
        document.getElementById('profile-link').classList.add('active');
        break;
      default:
        return;
    }

  }, [])

  return (
    <NavigationContainer>
      <LogoContainer>
        <img style={{ maxHeight: '100%', position: 'relative', marginRight: '5px', width: 'auto' }} src={require('../assets/spatulaIcon.png')} alt="" />
        InGredients
      </LogoContainer>
      <NavLinkContainer>
        <NavLink id='home-link' to='/' className='nav-link'>Home</NavLink>
        <NavLink id='recipes-link' to='/recipes' className='nav-link'>My Recipes</NavLink>
        <NavLink id='add-recipes-link' className='nav-link'>Add Recipes</NavLink>
        <NavLink id='profile-link' className='nav-link'>Profile</NavLink>
      </NavLinkContainer>
    </NavigationContainer>
  )
}

export default NavigationBar;

