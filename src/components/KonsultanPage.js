import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './css/Konsultan.css';

function KonsultanPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const konsultanProducts = [
    { id: 1, name: 'Konsultan Ternak Kambing', description: 'Ahli dalam pengelolaan dan perawatan kambing.', image: '/images/ternak-kambing.jpg' },
    { id: 2, name: 'Konsultan Greenhouse', description: 'Spesialis greenhouse untuk tanaman.', image: '/images/greenhouse.jpg' },
    { id: 3, name: 'Bisnis Plan', description: 'Bantuan dalam penyusunan rencana bisnis.', image: '/images/bisnis-plan.jpg' },
    { id: 4, name: 'Kebun dan Tanaman', description: 'Konsultasi mengenai kebun dan tanaman.', image: '/images/kebun-tanaman.jpg' },
    { id: 5, name: 'Kebun Buah Holitcurtura', description: 'Konsultan untuk kebun buah holitcurtura.', image: '/images/kebun-buah.jpg' },
    { id: 6, name: 'Sampah dan Produk', description: 'Solusi untuk pengelolaan sampah dan produk.', image: '/images/sampah-produk.jpg' }
  ];

  const filteredProducts = konsultanProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />

      <div className="konsultan-container">
        <h1 className="konsultan-title">Cari Konsultan Dengan Mudah</h1>
        <p className="konsultan-description">Temukan konsultan yang sesuai dengan kebutuhan Anda.</p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Cari produk konsultan..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="product-cards">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Link to={`/konsultan/${product.id}`} key={product.id} className="product-card-link">
                <div className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href="#" className="order-button" onClick={(e) => e.preventDefault()}>Pesan Konsultasi</a>
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
}

export default KonsultanPage;
