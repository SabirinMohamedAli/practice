// src/App.js
import React from 'react';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Products from './Components/Products';
import Testimonials from './Components/Testimonials';
import News from './Components/News';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
}

export default App;
