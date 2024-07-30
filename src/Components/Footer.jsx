import React from 'react';
import './Footer.css'; // Custom CSS for additional styling

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About Sabirin Beauty</h3>
          <p>
            Belletny is a leading online store providing a wide range of beauty and cosmetic products. Our mission is to bring the best in beauty to our customers.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sabirin Beauty. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
