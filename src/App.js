import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import KatalogPage from './components/KatalogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/katalog" element={<KatalogPage />} />
       
      </Routes>
    </Router>
  );
}

export default App;
