import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Header from './Header';
import Footer from './Footer';
import './css/ProductDetailPage.css'; // Create this CSS file for styling

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Sample products data, you might fetch this from an API in a real application
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
          <p>Product not found</p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ProductDetailPage;
