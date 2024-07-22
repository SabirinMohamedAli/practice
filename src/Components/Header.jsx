import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../CartContext';

const Header = ({ showHero = true }) => {
  const { cart } = useContext(CartContext);

  const heroStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '300px',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    color: '#333',
    position: 'relative',
  };

  const headingStyle = {
    fontSize: '28px',
    marginBottom: '20px',
    animation: 'move 10s infinite',
  };

  const keyframes = `
    @keyframes move {
      0% { transform: translateX(0); }
      50% { transform: translateX(20px); }
      100% { transform: translateX(0); }
    }
  `;

  return (
    <header>
      <style>
        {keyframes}
      </style>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5rem' }}>Sabirin Beauty</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ fontSize: '1.2rem' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ fontSize: '1.2rem' }}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products" style={{ fontSize: '1.2rem' }}>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" style={{ fontSize: '1.2rem' }}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ fontSize: '1.2rem' }}>Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" style={{ fontSize: '1.2rem' }}>
                  <FaShoppingCart /> Cart ({cart.length})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showHero && (
        <div className="hero" style={heroStyle}>
          <h2 style={headingStyle}>Sale Up To 40% Off Aloe Vera Natural Cosmetics</h2>
          <button className="btn btn-danger mt-3" style={{ padding: '10px 20px', fontSize: '16px' }}>Shop Now</button>
        </div>
      )}
    </header>
  );
}

export default Header;
