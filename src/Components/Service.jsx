import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa, faDumbbell, faHeartbeat, faLeaf, faCapsules } from '@fortawesome/free-solid-svg-icons';
import './Service.css';

const services = [
  { icon: faSpa, title: 'Skincare', description: 'Experience the best in skincare with our natural and effective products.' },
  { icon: faDumbbell, title: 'Fitness', description: 'Achieve your fitness goals with our top-rated fitness programs and equipment.' },
  { icon: faHeartbeat, title: 'Wellness', description: 'Improve your wellness with our personalized wellness plans and supplements.' },
  { icon: faLeaf, title: 'Natural Products', description: 'Discover our range of natural and organic products for a healthier lifestyle.' },
  { icon: faCapsules, title: 'Supplements', description: 'Boost your health with our high-quality supplements and vitamins.' },
];

const Service = () => {
  return (
    <div className="service-container">
      <h2 className="service-title">Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <FontAwesomeIcon icon={service.icon} size="3x" className="service-icon" />
            <h3 className="service-item-title">{service.title}</h3>
            <p className="service-item-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
