import React from 'react';
import Header from './Components/Header';
import Categories from './Components/Products';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import { CartProvider } from './CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<>
              <Header />
              <Routes>
                <Route path="/products" element={<Categories />} />
                <Route path="/" element={<Categories />} />
              </Routes>
              <Footer />
            </>} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
