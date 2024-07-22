import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [email, setEmail] = useState('');
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      setCheckoutMessage('Your cart is empty.');
    } else {
      setCheckoutMessage(`Thank you for your purchase! A confirmation email has been sent to ${email}.`);
      setEmail('');
      // Clear the cart or perform additional checkout logic here
    }
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
      {checkoutMessage && <div className="alert alert-success">{checkoutMessage}</div>}
      {cart.length > 0 && (
        <form onSubmit={handleCheckout}>
          <div className="form-group">
            <label htmlFor="email">Email for confirmation:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Checkout</button>
        </form>
      )}
    </div>
  );
}

export default Cart;
