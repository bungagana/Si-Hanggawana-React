import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Header from './Header';
import Footer from './Footer';
import './css/ProductDetailPage.css'; // Create this CSS file for styling

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Sample products data, you might fetch this from an API in a real application
  const products = [
    { id: 1, category: 'buah', name: 'Apel Merah', description: 'Apel merah segar langsung dari kebun.', image: 'https://cdn.pixabay.com/photo/2016/07/09/12/16/apples-1506119_1280.jpg' },
    { id: 2, category: 'buah', name: 'Jeruk Manis', description: 'Jeruk manis kaya akan vitamin C.', image: 'https://cdn.pixabay.com/photo/2014/08/01/08/31/oranges-407429_1280.jpg' },
    { id: 4, category: 'sayur', name: 'Melon Kuning', description: 'Melon Kuning penuh nutrisi.', image: 'https://cdn.pixabay.com/photo/2016/03/05/22/30/food-1239301_1280.jpg' },
    { id: 7, category: 'tanamanpangan', name: 'Padi Organik', description: 'Padi organik untuk hasil panen berkualitas.', image: 'https://cdn.pixabay.com/photo/2015/01/03/16/53/rice-and-corn-587593_1280.jpg' },

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

      {/* <Footer /> */}
    </>
  );
}

export default ProductDetailPage;
