import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

const Checkout = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      setCheckoutMessage('Your cart is empty.');
    } else {
      setCheckoutMessage(`Thank you for your purchase, ${form.name}! A confirmation email has been sent to ${form.email}.`);
      setForm({ name: '', email: '', address: '' });
      // Here you can clear the cart or perform additional checkout logic
    }
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Complete Purchase</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
