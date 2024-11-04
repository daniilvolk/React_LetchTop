import React, { useState } from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <ul className="navbar__nav-list">
          {/* Левая часть навигации */}
          <li className="navbar__item"><a href="/">Home</a></li>
          <li className="navbar__item"><a href="/">Products</a></li>

          {/* Логотип по центру */}
          <li className="navbar__logo-container">
            <img src="/logo-up.png" alt="logo" className="navbar__logo" />
          </li>

          {/* Правая часть навигации */}
          <li className="navbar__item"><a href="/">About Us</a></li>
          <li
            className="navbar__dropdown navbar__item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/">Support</a>
            <div className={`navbar__dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <a href="/support/faq">FAQ</a>
              <a href="/support/contact">Contact Us</a>
              <a href="/support/help">Help Center</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
