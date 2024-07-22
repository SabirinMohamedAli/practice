import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import AboutUs from './Components/AboutUs';
import { CartProvider } from './CartContext';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <Routes>
          <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
           
            <Route path="/" element={
              <>
                  <AboutUs />
                <Products />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
