import './App.css';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Article from './pages/Article/Article';



function App() {

  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/en" element={<Home/>} />
        <Route path="/en/:englishArticle" element={<Article />} />
        <Route path="/es" element={<Home />} />
        <Route path="/es/:spanishArticle" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;