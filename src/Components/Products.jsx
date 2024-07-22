import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import category1 from '../images/2.jpg';
import category2 from '../images/3.jpg';
import category3 from '../images/4.jpg';
import category4 from '../images/5.jpg';
import category5 from '../images/10.jpg';
import category6 from '../images/2.jpg';
import category7 from '../images/3.jpg';
import category8 from '../images/10.jpg';
import category9 from '../images/11.jpg';

const Categories = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const categories = [
    { img: category1, name: 'Hair Cream' },
    { img: category2, name: 'Makeup Brushes' },
    { img: category3, name: 'Perfumes' },
    { img: category4, name: 'Skincare Cream' },
    { img: category5, name: 'Makeup Lipstick' },
    { img: category6, name: 'Face Cream' },
    { img: category7, name: 'Body Lotion' },
    { img: category8, name: 'Hand Cream' },
    { img: category9, name: 'Shampoo' },
  ];

  return (
    <section className="categories">
      <h2>Shop By Products</h2>
      <div className="category-list row">
        {categories.map((category, index) => (
          <div key={index} className="category-item col-md-3">
            <div className="card mb-4">
              <img src={category.img} alt={category.name} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                {cart.includes(category.name) ? (
                  <button className="btn btn-danger" onClick={() => removeFromCart(category.name)}>
                    Remove from Cart
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={() => addToCart(category.name)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
