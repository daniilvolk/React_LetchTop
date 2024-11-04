import React from 'react';
import './CustomPCBuilding.scss';

const CustomPCBuilding: React.FC = () => {
  return (
    <section id="custom-pc-building" className="custom-pc-building">
      <h2 className="custom-pc-building__title">
        Discover Our Comprehensive Range of Custom PC Building Services
      </h2>
      <div className="custom-pc-building__grid">
        <div className="custom-pc-building__item">
          <img src="/image.png" alt="Expert Consultation" className="custom-pc-building__icon" />
          <h3 className="custom-pc-building__item-title">Expert Consultation for Your Perfect Gaming Setup</h3>
          <p className="custom-pc-building__item-description">
            At LechTop, we specialize in creating custom PCs tailored to your gaming needs.
          </p>
          <a href="/learn-more" className="custom-pc-building__link">Learn More &gt;</a>
        </div>
        <div className="custom-pc-building__item">
          <img src="/image.png" alt="After-Sales Support" className="custom-pc-building__icon" />
          <h3 className="custom-pc-building__item-title">Reliable After-Sales Support for Your Peace of Mind</h3>
          <p className="custom-pc-building__item-description">
            Our dedicated support team is here to assist you even after your purchase.
          </p>
          <a href="/contact" className="custom-pc-building__link">Contact &gt;</a>
        </div>
        <div className="custom-pc-building__item">
          <img src="/image.png" alt="Tailored Solutions" className="custom-pc-building__icon" />
          <h3 className="custom-pc-building__item-title">Tailored Solutions to Enhance Your Gaming Experience</h3>
          <p className="custom-pc-building__item-description">
            We provide personalized solutions that elevate your gaming performance and enjoyment.
          </p>
          <a href="/sign-up" className="custom-pc-building__link">Sign Up &gt;</a>
        </div>
      </div>
    </section>
  );
};

export default CustomPCBuilding;
