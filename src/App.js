import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage/ArticlePage';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/en" />} exact />
        <Route path="/:locale" element={<HomePage />} />
        <Route path="/:locale/:slug" element={<ArticlePage />} />
      </Routes>
    </Router>
  )
}

export default App
