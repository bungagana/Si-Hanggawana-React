import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import KatalogPage from './components/KatalogPage';
import ProductDetailPage from './components/ProductDetailPage';
import KonsultanPage from './components/KonsultanPage';
import KonsultanDetailPage from './components/KonsultanDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/katalog" element={<KatalogPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/konsultan" element={<KonsultanPage />} />
        <Route path="/konsultan/:id" component={KonsultanDetailPage} />
       
      </Routes>
    </Router>
  );
}

export default App;
