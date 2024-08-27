import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import logo from './images/logosi.png';
import './css/Header.css'; // Path to your CSS file

function Header() {
  const location = useLocation();

  const getNavLinkClass = (path) => (location.pathname === path ? 'active' : '');

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" /> Hanggawana
      </div>
      <nav>
        <ul>
          <li><Link to="/" className={getNavLinkClass("/")}>Home</Link></li>
          <li><Link to="/katalog" className={getNavLinkClass("/katalog")}>Katalog</Link></li>
          <li><Link to="/konsultan" className={getNavLinkClass("/konsultan")}>Konsultan</Link></li>
          <li><Link to="/pelatihan" className={getNavLinkClass("/pelatihan")}>Pelatihan</Link></li>
          <li><Link to="/outingclass" className={getNavLinkClass("/outingclass")}>Outing Class</Link></li>
          <li><Link to="/tentangkita" className={getNavLinkClass("/tentangkita")}>Tentang Kita</Link></li>
        </ul>
      </nav>
      <FaSearch className="search-icon" />
    </header>
  );
}

export default Header;
