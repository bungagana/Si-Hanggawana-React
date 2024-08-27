// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import KatalogPage from './components/KatalogPage';
import ProductDetailPage from './components/ProductDetailPage';
import KonsultanPage from './components/ConsultanPage';
import KonsultanDetailPage from './components/ConsultanDetailPage';
import PelatihanPage from './components/PelatihanPage'; 
import OutingClassPage from './components/OutingClassPage'; // Import the new page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/katalog" element={<KatalogPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/konsultan" element={<KonsultanPage />} />
        <Route path="/konsultan/:id" element={<KonsultanDetailPage />} />
        <Route path="/pelatihan" element={<PelatihanPage />} />
        <Route path="/outingclass" element={<OutingClassPage />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
