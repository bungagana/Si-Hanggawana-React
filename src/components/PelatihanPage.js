import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './css/PelatihanPage.css'; // Create this CSS file for styling

const PelatihanPage = () => {
  // Sample gallery images
  const galleryImages = [
    'https://innovillage.id/storage/article_thumbnails/min_article_thumbnails_5b9813fd1ac85abbc3f2d0a6f886b519.jpeg',
    'https://i.ytimg.com/vi/PSGQQAPgCs4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVyhGMA8=&rs=AOn4CLC4led97-JD641sPtuaMO3Ecc16kg',
    'https://innovillage.id/storage/article_thumbnails/article_thumbnails_52b226cc2ba41aa641fb772141d97843.PNG',
  ];

  // Sample training products
  const trainingProducts = [
    { id: 1, name: 'Pelatihan Bisnis', description: 'Pelatihan untuk pengembangan bisnis.', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Pelatihan Kewirausahaan', description: 'Pelatihan untuk kewirausahaan.', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Pelatihan Manajemen', description: 'Pelatihan manajemen untuk bisnis.', image: 'https://via.placeholder.com/150' },
  ];

  const handleOrderClick = (e, productId) => {
    e.stopPropagation();
    window.open(`https://wa.me/yourwhatsappnumber?text=Hello, I am interested in training product ${productId}`, '_blank');
  };

  return (
    <>
      <Header />
      <div className="pelatihan-container">
        <h1 className="pelatihan-title">Galeri Pelatihan</h1>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <img src={image} alt={`Pelatihan ${index + 1}`} key={index} className="gallery-image" />
          ))}
        </div>
        <h2 className="products-title">Produk Pelatihan</h2>
        <div className="training-products">
          {trainingProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <a href="#" className="order-button" onClick={(e) => handleOrderClick(e, product.id)}>Pesan</a>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default PelatihanPage;
