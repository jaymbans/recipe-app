import './style.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


// component imports
import Homepage from './components/Homepage/Homepage';
import MyRecipes from './components/MyRecipes';

function App() {
  const [userName, setUserName] = useState('Name');
  const [firstVisit, setFirstVisit] = useState(true);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Homepage userName={userName} setUserName={setUserName} firstVisit={firstVisit} setFirstVisit={setFirstVisit} />
          } />
          <Route path='/recipes' element={
            <MyRecipes />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
