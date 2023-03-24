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
        document.getElementById('home-link').classList.add('active');
        return;
    }

  }, [])


  const activateHamburgerMenu = (e) => {
    const menu = document.querySelector('#menu.navbar-right');

    let node = e.target;
    if (!Array.from(node.classList).includes('hamburger-menu')) {
      node = node.parentNode;
    }

    if (![...node.children[0].classList].includes('active')) {
      Array.from(node.children).forEach(child => child.classList.add('active'));
      menu.classList.add('show');
    } else {
      Array.from(node.children).forEach(child => child.classList.remove('active'))
      menu.classList.remove('show');
    }

  }

  return (
    <NavigationContainer>
      <LogoContainer className='navbar-left'>
        <img id="logo" style={{ maxHeight: '100%', marginRight: '5px', width: 'auto' }} src={require('../assets/spatulaIcon.png')} alt="" />
        InGredients
        <button className="hamburger-menu" onClick={activateHamburgerMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
      </LogoContainer>
      <NavLinkContainer id='menu' className='navbar-right'>
        <NavLink id='home-link' to='/' className='nav-link'>Home</NavLink>
        <NavLink id='recipes-link' to='/recipes' className='nav-link'>My Recipes</NavLink>
        <NavLink id='add-recipes-link' to='/add-recipes' className='nav-link'>Add Recipes</NavLink>
        <NavLink id='profile-link' to='/profile' className='nav-link'>Profile</NavLink>
      </NavLinkContainer>
    </NavigationContainer>
  )
}

export default NavigationBar;

