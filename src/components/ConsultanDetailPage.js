import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './css/ProductDetailPage.css';

const ConsultantDetailPage = () => {
  const { id } = useParams();

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

  const product = products.find(p => p.id === parseInt(id));

  return (
    <>
      <Header />
      <div className="product-detail-container">
        {product ? (
          <>
            <h1 className="product-title">{product.name}</h1>
            <img src={product.image} alt={product.name} className="product-detail-image" />
            <p className="product-description">{product.description}</p>
            <a href="https://wa.me/yourwhatsappnumber" className="order-button">Pesan</a>
          </>
        ) : (
          <p>Konsultan tidak ditemukan</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ConsultantDetailPage;
