import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './css/KatalogPage.css';

const ConsultanPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, category: 'kambing', name: 'Konsultasi Peternakan Kambing', description: 'Konsultasi ahli tentang peternakan kambing.', image: 'https://via.placeholder.com/150' },
    { id: 2, category: 'sayur', name: 'Konsultasi Sayur', description: 'Panduan lengkap untuk bertanam sayur.', image: 'https://via.placeholder.com/150' },
    { id: 3, category: 'buah', name: 'Konsultasi Buah', description: 'Tips dan teknik untuk bertanam buah.', image: 'https://via.placeholder.com/150' },
    { id: 4, category: 'kebun', name: 'Konsultasi Kebun dan Tanaman', description: 'Bantuan dalam perawatan kebun dan tanaman.', image: 'https://via.placeholder.com/150' },
    { id: 5, category: 'hortikultura', name: 'Konsultasi Horticultura', description: 'Konsultasi untuk berbagai aspek hortikultura.', image: 'https://via.placeholder.com/150' },
    { id: 6, category: 'sampah', name: 'Konsultasi Pengelolaan Sampah', description: 'Solusi dan teknik pengelolaan sampah.', image: 'https://via.placeholder.com/150' },
    { id: 7, category: 'greenhouse', name: 'Konsultasi Greenhouse', description: 'Panduan dan tips untuk greenhouse.', image: 'https://via.placeholder.com/150' },
    { id: 8, category: 'bisnisplab', name: 'Konsultasi Bisnis PLAB', description: 'Bantuan dalam mengelola bisnis PLAB.', image: 'https://via.placeholder.com/150' }
  ];

  const filteredProducts = products.filter(product =>
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrderClick = (e, productId) => {
    e.stopPropagation();
    window.open(`https://wa.me/yourwhatsappnumber?text=Hello, I am interested in product ${productId}`, '_blank');
  };

  return (
    <>
      <Header />
      <div className="katalog-container">
        <h1 className="katalog-title">Cari Dengan Mudah</h1>
        <p className="katalog-description">Cukup dengan satu langkah, temukan produk yang kalian inginkan.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="all">Semua</option>
            <option value="buah">Buah</option>
            <option value="sayur">Sayur</option>
            <option value="tanamanpangan">Tanaman Pangan</option>
          </select>
        </div>
        <div className="product-cards">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                <div className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href="#" className="order-button" onClick={(e) => handleOrderClick(e, product.id)}>Pesan</a>
                </div>
              </Link>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConsultanPage;
