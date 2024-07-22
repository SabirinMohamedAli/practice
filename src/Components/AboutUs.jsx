import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; // Custom CSS for additional styling

const AboutUs = () => {
  return (
    <div className="about-us-container container">
      <header className="text-center my-5">
        <h1>About Us</h1>
      </header>
      <section className="about-content row">
        <div className="col-md-4 text-center">
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo elit sed elit luctus, a luctus libero suscipit.</p>
        </div>
        <div className="col-md-4 text-center">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo elit sed elit luctus, a luctus libero suscipit.</p>
        </div>
        <div className="col-md-4 text-center">
          <h2>Our Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo elit sed elit luctus, a luctus libero suscipit.</p>
        </div>
      </section>
      <section className="products-section text-center mt-5">
        <img src="/path-to-your-image1.jpg" alt="Product 1" className="img-fluid" />
        <img src="/path-to-your-image2.jpg" alt="Product 2" className="img-fluid mx-3" />
        <img src="/path-to-your-image3.jpg" alt="Product 3" className="img-fluid" />
      </section>
    </div>
  );
};

export default AboutUs;
