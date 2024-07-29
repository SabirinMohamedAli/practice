import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; // Custom CSS for additional styling

const AboutUs = () => {
  return (
    <div className="about-us-container container-fluid">
      <header className="text-center my-5">
        <h1>About Us</h1>
      </header>
      <section className="about-content row text-center">
        <div className="col-md-6 mb-4">
          <h2>Our Story</h2>
          <p>Sabirin Beauty was founded with a passion for skincare. We believe that everyone deserves to feel confident and beautiful in their skin. Our journey began with a mission to provide high-quality, natural skincare products that promote healthy .</p>
        </div>
        <div className="col-md-6 mb-4">
          <h2>Our Mission</h2>
          <p>Our mission at Sabirin Beauty is to revolutionize the skincare industry by offering products that are both effective and gentle on the skin. We are committed to using only the finest natural ingredients and ensuring that our products are free from harmful chemicals.</p>
        </div>
      </section>
      <section className="our-values text-center mt-5">
        <h2>Our Values</h2>
        <p>At Sabirin Beauty, we value transparency, sustainability, and customer satisfaction. We believe in being honest about what goes into our products and how they are made. Our commitment to sustainability means we strive to minimize our environmental impact through eco-friendly practices.</p>
      </section>
    </div>
  );
};

export default AboutUs;
