import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './css/KonsultanDetailPage.css';

function KonsultanDetailPage() {
  const { id } = useParams();
  
  const konsultanProducts = [
    { id: 1, name: 'Konsultan Ternak Kambing', description: 'Ahli dalam pengelolaan dan perawatan kambing.', image: '/images/ternak-kambing.jpg', contactLink: 'https://wa.me/1234567890?text=Hello%20I%20am%20interested%20in%20Konsultan%20Ternak%20Kambing' },
    // other products...
  ];

  const product = konsultanProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Header />
      <div className="konsultan-detail-container">
        <h1 className="konsultan-detail-title">{product.name}</h1>
        <div className="konsultan-detail-content">
          <img src={product.image} alt={product.name} className="konsultan-detail-image" />
          <p className="konsultan-detail-description">{product.description}</p>
          <a href={product.contactLink} className="contact-button" target="_blank" rel="noopener noreferrer">Pesan Konsultasi</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default KonsultanDetailPage;
