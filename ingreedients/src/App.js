import './style.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// component imports
import Homepage from './components/Homepage/Homepage';
import MyRecipes from './components/Recipes/MyRecipes';
import RecipeDetails from './components/Recipes/RecipeDetails';
import AddRecipes from './components/Recipes/AddRecipes';
import useLocalStorage from './useLocalStorage';
import Profile from './components/Profile';

function App() {
  const [userName, setUserName] = useLocalStorage('user-name', '');


  let firstVisitValue;

  if (userName.length) {
    firstVisitValue = false;
  } else {
    firstVisitValue = true;
  }

  const [firstVisit, setFirstVisit] = useState(firstVisitValue);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Homepage userName={userName} setUserName={setUserName} firstVisit={firstVisit} setFirstVisit={setFirstVisit} />
          } />
          <Route path='/recipes' element={
            <MyRecipes userName={userName} />
          } />
          <Route path='/recipes/:recipename' element={
            <RecipeDetails />
          } />
          <Route path='/add-recipes' element={
            <AddRecipes />
          } />
          <Route path='/profile' element={
            <Profile />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
