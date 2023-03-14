import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinkContainer
}
  from '../StyledComponents';



function NavigationBar() {

  const currentPageChange = (e) => {
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    navLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active')
  }

  return (
    <NavigationContainer>
      <LogoContainer>
        <img style={{ maxHeight: '100%', position: 'relative', marginRight: '5px', width: 'auto' }} src={require('../assets/spatulaIcon.png')} alt="" />
        InGredients
      </LogoContainer>
      <NavLinkContainer>
        <NavLink to='/' onClick={currentPageChange} className='nav-link'>Home</NavLink>
        <NavLink to='/recipes' onClick={currentPageChange} className='nav-link'>My Recipes</NavLink>
        <NavLink onClick={currentPageChange} className='nav-link'>Add Recipes</NavLink>
        <NavLink onClick={currentPageChange} className='nav-link'>Profile</NavLink>
      </NavLinkContainer>
    </NavigationContainer>
  )
}

export default NavigationBar;

