// components/OutingClassPage.js
import Header from './Header';
import React from 'react';
import './css/OutingClassPage.css'; // Path to your CSS file

const OutingClassPage = () => {
  // Sample gallery images for outing class
  const galleryImages = [
    'https://innovillage.id/storage/article_thumbnails/min_article_thumbnails_5b9813fd1ac85abbc3f2d0a6f886b519.jpeg',
    'https://i.ytimg.com/vi/PSGQQAPgCs4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVyhGMA8=&rs=AOn4CLC4led97-JD641sPtuaMO3Ecc16kg',
    'https://innovillage.id/storage/article_thumbnails/article_thumbnails_52b226cc2ba41aa641fb772141d97843.PNG',
    'https://innovillage.id/storage/article_thumbnails/min_article_thumbnails_5b9813fd1ac85abbc3f2d0a6f886b519.jpeg',
    'https://i.ytimg.com/vi/PSGQQAPgCs4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVyhGMA8=&rs=AOn4CLC4led97-JD641sPtuaMO3Ecc16kg',
    'https://innovillage.id/storage/article_thumbnails/article_thumbnails_52b226cc2ba41aa641fb772141d97843.PNG',
    'https://innovillage.id/storage/article_thumbnails/min_article_thumbnails_5b9813fd1ac85abbc3f2d0a6f886b519.jpeg',
    'https://i.ytimg.com/vi/PSGQQAPgCs4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVyhGMA8=&rs=AOn4CLC4led97-JD641sPtuaMO3Ecc16kg',
    'https://innovillage.id/storage/article_thumbnails/article_thumbnails_52b226cc2ba41aa641fb772141d97843.PNG',
    'https://innovillage.id/storage/article_thumbnails/article_thumbnails_52b226cc2ba41aa641fb772141d97843.PNG',
  ];

  // Sample 360-degree view URLs
  const cameraViews = [
    'https://kuula.co/share/5mw3f?logo=0&info=1&fs=1&vr=0&sd=1&thumbs=1',
    'https://kuula.co/share/N7f7d?logo=0&info=1&fs=1&vr=0&sd=1&thumbs=1',
    'https://kuula.co/share/N03d4?logo=0&info=1&fs=1&vr=0&sd=1&thumbs=1',
    'https://kuula.co/share/NT8m1?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1'
  ];

  return (
    <>
      <Header />
      <div className="outingclass-container">
        <h1 className="outingclass-title">Galeri Outing Class</h1>
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <img src={image} alt={`Outing Class ${index + 1}`} key={index} className="gallery-image" />
          ))}
        </div>

        <h2 className="camera-title">Lihat 360 Derajat</h2>
        <div className="camera-container">
          {cameraViews.map((view, index) => (
            <iframe
              key={index}
              src={view} // Use the URL from cameraViews
              title={`360 View ${index + 1}`}
              frameBorder="0"
              allowFullScreen
              className="camera-view"
            ></iframe>
          ))}
        </div>
      </div>
    </>
  );
}

export default OutingClassPage;
