import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router, Routes, Route 
} from 'react-router-dom';
import Single from './pages/Single/Single';


function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;