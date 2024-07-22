import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <ul className="list-group mb-4">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <div className="mt-3">
          <button className="btn btn-primary" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
