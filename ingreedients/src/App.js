import './style.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// component imports
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
