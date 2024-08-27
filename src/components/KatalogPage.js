import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './css/KatalogPage.css';

function KatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, category: 'buah', name: 'Apel Merah', description: 'Apel merah segar langsung dari kebun.', image: 'https://cdn.pixabay.com/photo/2016/07/09/12/16/apples-1506119_1280.jpg' },
    { id: 2, category: 'buah', name: 'Jeruk Manis', description: 'Jeruk manis kaya akan vitamin C.', image: 'https://cdn.pixabay.com/photo/2014/08/01/08/31/oranges-407429_1280.jpg' },
    { id: 4, category: 'sayur', name: 'Bayam Segar', description: 'Bayam hijau penuh nutrisi.', image: 'https://cdn.pixabay.com/photo/2016/03/05/22/30/food-1239301_1280.jpg' },
    { id: 7, category: 'tanamanpangan', name: 'Padi Organik', description: 'Padi organik untuk hasil panen berkualitas.', image: 'https://cdn.pixabay.com/photo/2015/01/03/16/53/rice-and-corn-587593_1280.jpg' },

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
            placeholder="Cari produk buah dan sayur..."
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

    </>
  );
}

export default KatalogPage;
