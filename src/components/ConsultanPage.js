import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './css/KatalogPage.css';

const ConsultanPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, category: 'kambing', name: 'Konsultasi Peternakan Kambing', description: 'Konsultasi ahli tentang peternakan kambing.', image: 'https://cdn.pixabay.com/photo/2017/10/31/12/01/goat-2905055_1280.jpg' },
    { id: 6, category: 'sampah', name: 'Konsultasi Pengelolaan Sampah', description: 'Solusi dan teknik pengelolaan sampah.', image: 'https://cdn.pixabay.com/photo/2017/04/29/11/52/wheelie-bin-2270582_1280.jpg' },

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
          {/* <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <option value="all">Semua</option>
            <option value="buah">Buah</option>
            <option value="sayur">Sayur</option>
            <option value="tanamanpangan">Tanaman Pangan</option>
          </select> */}
        </div>
        <div className="product-cards">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              // <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                <div className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href="#" className="order-button" onClick={(e) => handleOrderClick(e, product.id)}>Pesan</a>
                </div>
              // </Link>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>

    </>
  );
};

export default ConsultanPage;
