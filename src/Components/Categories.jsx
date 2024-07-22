// src/components/Categories.jsx
import React from 'react';
import category1 from '../images/2.jpg';
import category2 from '../images/3.jpg';
import category3 from '../images/4.jpg';
import category4 from '../images/5.jpg';
import category5 from '../images/10.jpg';
import category6 from '../images/2.jpg';
import category7 from '../images/3.jpg';
import category8 from '../images/4.jpg';
import category9 from '../images/5.jpg';
import category10 from '../images/10.jpg';

const Categories = () => {
  return (
    <section className="categories">
      <h2>Shop By Categories</h2>
      <div className="category-list">
        <div className="category-item">
          <img src={category1} alt="Hair Cream" />
          <p>Hair Cream</p>
        </div>
        <div className="category-item">
          <img src={category2} alt="Makeup Brushes" />
          <p>Makeup Brushes</p>
        </div>
        <div className="category-item">
          <img src={category3} alt="Perfumes" />
          <p>Perfumes</p>
        </div>
        <div className="category-item">
          <img src={category4} alt="Skincare Cream" />
          <p>Skincare Cream</p>
        </div>
        <div className="category-item">
          <img src={category5} alt="Makeup Lipstick" />
          <p>Makeup Lipstick</p>
        </div>
        <div className="category-item">
          <img src={category6} alt="Face Cream" />
          <p>Face Cream</p>
        </div>
        <div className="category-item">
          <img src={category7} alt="Body Lotion" />
          <p>Body Lotion</p>
        </div>
        <div className="category-item">
          <img src={category8} alt="Hand Cream" />
          <p>Hand Cream</p>
        </div>
        <div className="category-item">
          <img src={category9} alt="Shampoo" />
          <p>Shampoo</p>
        </div>
        <div className="category-item">
          <img src={category10} alt="Conditioner" />
          <p>Conditioner</p>
        </div>
      </div>
    </section>
  );
}

export default Categories;
