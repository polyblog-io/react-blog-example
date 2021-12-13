import { useState } from 'react';
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
        <Route path="/" element={<Home />} exact/>
        <Route path="/en" element={<Home/>} />
        <Route path="/en/:englishArticle" element={<Single />} />
        <Route path="/es" element={<Home />} />
        <Route path="/es/:spanishArticle" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;