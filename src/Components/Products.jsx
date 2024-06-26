// src/components/Products.js
import React from 'react';
import product1 from '../images/8.jpg';
import product2 from '../images/9.jpg';
import product3 from '../images/10.jpg';
import product4 from '../images/11.jpg';

const Products = () => {
  const products = [
    { id: 1, name: 'Gabi Velvet Lip Combo', price: '$30.00', discount: '25%', image: product1 },
    { id: 2, name: 'Sahin Beauty Blusher', price: '$17.00', discount: '30%', image: product2 },
    { id: 3, name: 'Kemsoff Concealer Stick', price: '$25.00', discount: '15%', image: product3 },
    { id: 4, name: 'Nurture Gold Serum', price: '$30.00', discount: '20%', image: product4 },
  ];

  return (
    <section className="products">
      <h2>Trending Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <span>{product.discount}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
