// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What The Clients Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <h4>Phoebe Hepburn</h4>
          <span>Makeup Artist</span>
        </div>
        <div className="testimonial-item">
          <p>
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </p>
          <h4>Rachel Green</h4>
          <span>Beauty Blogger</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
