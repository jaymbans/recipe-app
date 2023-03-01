import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinkContainer
}
  from '../StyledComponents';



function NavigationBar() {
  return (
    <NavigationContainer>
      <LogoContainer>
        <img style={{ maxHeight: '100%', position: 'relative', marginRight: '5px', width: 'auto' }} src={require('../assets/spatulaIcon.png')} alt="" />
        InGredients
      </LogoContainer>
      <NavLinkContainer>
        <NavLink>Home</NavLink>
        <NavLink>My Recipes</NavLink>
        <NavLink>Add Recipes</NavLink>
        <NavLink>Profile</NavLink>
      </NavLinkContainer>
    </NavigationContainer>
  )
}

export default NavigationBar;

