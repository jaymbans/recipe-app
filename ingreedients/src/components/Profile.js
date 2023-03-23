import React from 'react'
import NavigationBar from './NavigationBar'

import {
  WelcomePagePopup,
  WelcomePageContainer,
  BeigeInput,
  GreenButton,
  RedButton,
  SmallDescription
}

  from '../StyledComponents'
import useLocalStorage from '../useLocalStorage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Profile() {
  const editName = () => {
    if (document.getElementById('edit-user-name-input').value.length < 1) {
      toast.error('Please Enter a new name!')
      return
    }

    setUserName(document.getElementById('edit-user-name-input').value);

    toast.success('Name edited, refresh page to update!')
  }

  const deleteRecipes = () => {
    setUserRecipes([]);
    toast.success('Reset account, refresh page to update!')
  }

  const [userName, setUserName] = useLocalStorage('user-name');
  const [recipes, setUserRecipes] = useLocalStorage('recipes');

  return (
    <>
      <NavigationBar />
      <ToastContainer />
      <WelcomePageContainer
        sx={{
          background: `url(https://i.pinimg.com/736x/8d/7a/05/8d7a050dbc96d9da81406fcb207c3464.jpg)`,
          height: '95vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <WelcomePagePopup
          sx={{
            background: 'rgba(255,255,255,.7)'
          }}
        >
          <h3>Edit Your Name</h3>
          <SmallDescription sx={{ fontStyle: 'italic', color: 'gray' }}>currently "{userName}"</SmallDescription>
          <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '15px 0' }} onSubmit={editName}>
            <BeigeInput label='Edit Name here' placeholder="Enter your name" variant="outlined" id='edit-user-name-input' autoFocus={true} sx={{ width: '100%' }} />
            <GreenButton type="submit" variant="contained" sx={{ width: '100%' }}>Edit Name</GreenButton>
            <RedButton type="submit" variant="contained" sx={{
              margin: '15px 0',
              width: '70%'
            }}
              onClick={deleteRecipes}
            >Reset Account</RedButton>
          </form>
        </WelcomePagePopup>
      </WelcomePageContainer>
    </>
  )
}

export default Profile