// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
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
            <li>Search</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to receive the latest updates and offers.</p>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Belletny. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
