import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/KatalogPage.css';

function KatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('buah');

  const products = [
    { id: 1, category: 'buah', name: 'Apel Merah', description: 'Apel merah segar langsung dari kebun.', image: 'https://via.placeholder.com/150' },
    { id: 2, category: 'buah', name: 'Jeruk Manis', description: 'Jeruk manis kaya akan vitamin C.', image: 'https://via.placeholder.com/150' },
    { id: 3, category: 'buah', name: 'Anggur Ungu', description: 'Anggur ungu segar untuk cemilan sehat.', image: 'https://via.placeholder.com/150' },
    { id: 4, category: 'sayur', name: 'Bayam Segar', description: 'Bayam hijau penuh nutrisi.', image: 'https://via.placeholder.com/150' },
    { id: 5, category: 'sayur', name: 'Wortel Organik', description: 'Wortel organik untuk kesehatan mata.', image: 'https://via.placeholder.com/150' },
    { id: 6, category: 'sayur', name: 'Sawi Hijau', description: 'Sawi hijau segar dari kebun lokal.', image: 'https://via.placeholder.com/150' },
    { id: 7, category: 'tanamanpangan', name: 'Padi Organik', description: 'Padi organik untuk hasil panen berkualitas.', image: 'https://via.placeholder.com/150' },
    { id: 8, category: 'tanamanpangan', name: 'Jagung Manis', description: 'Jagung manis siap tanam.', image: 'https://via.placeholder.com/150' },
    { id: 9, category: 'tanamanpangan', name: 'Kacang Hijau', description: 'Kacang hijau untuk berbagai masakan.', image: 'https://via.placeholder.com/150' }
  ];

  const filteredProducts = products.filter(product =>
    product.category === selectedCategory &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="katalog-container">
        <h1 className="katalog-title">Cari Dengan Mudah</h1>
        <p className="katalog-description">Cukup dengan satu langkah, temukan buah yang kalian inginkan.</p>

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
            <option value="buah">Buah</option>
            <option value="sayur">Sayur</option>
            <option value="tanamanpangan">Tanaman Pangan</option>
          </select>
        </div>

        <div className="product-cards">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a href="https://wa.me/yourwhatsappnumber" className="order-button">Pesan</a>
              </div>
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
