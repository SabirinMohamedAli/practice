// src/components/Header.js
import React from 'react';
import heroImage from '../images/4.jpg';

const Header = () => {
  return (
    <header>
      <div className="top-bar">
      
        {/* <div className="search-cart">
          <input type="text" placeholder="Search Products Here..." />
          <button>Cart</button>
        </div> */}
      </div>
      <nav>
        <h1>Sabirin Beauty
        </h1>
        <ul>
          <li>Home</li>
          <li>Hair Cream</li>
          <li>Face Primer</li>
          <li>Makeup Brushes</li>
          <li>Hair Spray</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <h2>Sale Up To 40% Off Aloe Vera Natural Cosmetics</h2>
        <button>Shop Now</button>
      </div>
    </header>
  );
}

export default Header;
