import React from 'react';
import { FaWhatsapp, FaSearch } from 'react-icons/fa';
import logo from './images/logosi.png';
import './css/LandingPage.css'; // Pastikan path CSS sesuai

function LandingPage() {
  return (
    <>
      <header>
        <div className="logo">
        <img src={logo}/>   Hanggawana
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#katalog">Katalog</a></li>
            <li><a href="#konsultan">Konsultan</a></li>
            <li><a href="#pelatihan">Pelatihan</a></li>
            <li><a href="#outingclass">Outing Class</a></li>
            <li><a href="#tentangkita">Tentang Kita</a></li>
          </ul>
        </nav>
        <FaSearch className="search-icon" />
      </header>
      
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Pertanian Edukasi Wisata</h1>
          <p>Dapatkan panduan ahli dan praktisi pertanian terbaik, pelajari manajemen lahan, teknologi pertanian, dan cara menghasilkan produk berkualitas tinggi.</p>
          <a href="#katalog" className="cta-button transparent">Jelajahi</a>
          <a href="https://wa.me/yourwhatsappnumber" className="cta-button whatsapp"><FaWhatsapp /> Hubungi</a>
        </div>
      </section>
      
      <section id="tentangkita" className="section">
  <div className="two-column">
    <div className="column">
      <h3>
        <span>APA ITU</span>
        <span>SI HANGGAWANA</span>
      </h3>
      <p className="about-description">
        Di Si Hanggawana, kami menerapkan konsep pertanian terpadu dengan menggabungkan teknologi pertanian modern dengan praktik pertanian tradisional, termasuk pengelolaan lahan, pemupukan organik, dan penggunaan tanaman penutup untuk meningkatkan kesuburan tanah. Di SI Hanggawana, kami menerapkan konsep pertanian terpadu dengan menggabungkan teknologi pertanian modern dengan praktik pertanian tradisional, termasuk pengelolaan lahan, pemupukan organik, dan penggunaan tanaman penutup untuk meningkatkan kesuburan tanah
      </p>
    </div>
    <div className="column">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video about Si Hanggawana" frameBorder="0" allowFullScreen></iframe>
    </div>
  </div>
</section>


      
<section className="section">
  <h2 className="section-title">
    VISI MISI <span className="highlight">SI HANGGAWANA</span>
  </h2>
  <div className="two-column">
    <div className="column">
      <img src="https://innovillage.id/storage/article_thumbnails/min_article_thumbnails_5b9813fd1ac85abbc3f2d0a6f886b519.jpeg" alt="Visi Misi" width="100%" />
    </div>
    <div className="column">
      <h3>Visi</h3>
      <p>Terwujudnya Indonesia Maju yang Berdaulat, Mandiri dan Berkepribadian berlandaskan Gotong Royong". Untuk mendukung Visi tersebut, maka Kementerian Pertanian menetapkan Visi Pertanian Tahun 2020 - 2024, yakni:</p>
      <h3>Misi</h3>
      <p>
        1. Dalam rangka mewujudkan visi ini maka misi Kementerian Pertanian adalah<br />
        2. Dalam rangka mewujudkan visi ini maka misi Kementerian Pertanian adalah<br />
        3. Dalam rangka mewujudkan visi ini maka misi Kementerian Pertanian adalah
      </p>
    </div>
  </div>
</section>

<section id="katalog" className="section">
  <h2 className="section-title">Kategori Produk</h2>
  <div className="two-column">
    <div className="product-card" onClick={() => window.location.href = "#buah"}>
      <img src="https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg" alt="Buah" />
      <h3>Buah-buahan</h3>
      <p>Berbagai macam buah segar.</p>
    </div>
    <div className="product-card" onClick={() => window.location.href = "#sayuran"}>
      <img src="https://via.placeholder.com/150" alt="Sayuran" />
      <h3>Sayuran</h3>
      <p>Berbagai macam sayuran segar.</p>
    </div>
    <div className="product-card" onClick={() => window.location.href = "#tanamanpangan"}>
      <img src="https://via.placeholder.com/150" alt="Tanaman Pangan" />
      <h3>Tanaman Pangan</h3>
      <p>Tanaman untuk kebutuhan pangan.</p>
    </div>
    <div className="product-card" onClick={() => window.location.href = "#pelatihan"}>
      <img src="https://via.placeholder.com/150" alt="Pelatihan" />
      <h3>Pelatihan</h3>
      <p>Pelatihan pertanian yang mendalam.</p>
    </div>
    <div className="product-card" onClick={() => window.location.href = "#outingclass"}>
      <img src="https://via.placeholder.com/150" alt="Outing Class" />
      <h3>Outing Class</h3>
      <p>Kelas untuk outing dan praktik.</p>
    </div>
    <div className="product-card" onClick={() => window.location.href = "#konsultasi"}>
      <img src="https://via.placeholder.com/150" alt="Konsultasi" />
      <h3>Konsultasi</h3>
      <p>Jasa konsultasi pertanian.</p>
    </div>
  </div>
</section>


      
<section id="mitra" className="partners-section">
  <h2>Mitra Kami</h2>
  <div className="partners-logos">
    <img src="https://via.placeholder.com/100" alt="Mitra 1" />
    <img src="https://via.placeholder.com/100" alt="Mitra 2" />
    <img src="https://via.placeholder.com/100" alt="Mitra 3" />
    <img src="https://via.placeholder.com/100" alt="Mitra 4" />
    <img src="https://via.placeholder.com/100" alt="Mitra 5" />
    <img src="https://via.placeholder.com/100" alt="Mitra 6" />
  </div>
</section>

      
      <footer className="footer">
        <p>&copy; 2024 P4S Satria Tani Hanggwana. All rights reserved.</p>
      </footer>
    </>
  );
}

export default LandingPage;
