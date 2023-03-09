import './style.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


// component imports
import Homepage from './components/Homepage/Homepage';

function App() {
  const [userName, setUserName] = useState('Name');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Homepage userName={userName} />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
