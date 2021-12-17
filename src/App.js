import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import ArticlePage from './pages/ArticlePage/ArticlePage';



function App() {

  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact/>
        <Route path="/:locale" element={<HomePage />} />
        <Route path="/:locale/:slug" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;