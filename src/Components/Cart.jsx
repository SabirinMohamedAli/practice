import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <div className="mt-3">
          <button className="btn btn-primary">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
