import React from 'react';
import './TopGamingProducts.scss';

const TopGamingProducts: React.FC = () => {
  return (
    <div>
      <section id="top-gaming-products" className="top-gaming-products">
        <div className="top-gaming-products__content">
          <h2 className="top-gaming-products__subtitle">Unleash</h2>
          <h1 className="top-gaming-products__title">Discover Our Top Gaming PC Products</h1>
          <p className="top-gaming-products__description">
            Explore our selection of high-performance gaming PCs and components. Elevate your gaming experience with the best technology available.
          </p>
          <div className="top-gaming-products__features">
            <div className="feature">
              <img src="/image.png" alt="Featured Products" className="feature__icon" />
              <h3 className="feature__title">Featured Products</h3>
              <p className="feature__description">
                Cutting-edge technology designed for gamers, by gamers.
              </p>
            </div>
            <div className="feature">
              <img src="/image.png" alt="Why Choose Us" className="feature__icon" />
              <h3 className="feature__title">Why Choose Us</h3>
              <p className="feature__description">
                Quality, performance, and unbeatable customer support for all your gaming needs.
              </p>
            </div>
          </div>
          <div className="top-gaming-products__actions">
            <a href="/shop" className="top-gaming-products__button">Shop</a>
            <a href="/learn-more" className="top-gaming-products__link">Learn More &gt;</a>
          </div>
        </div>
        <div className="top-gaming-products__image">
          <img src="/pc-main.png" alt="Gaming Setup" />
        </div>
      </section>

      <section id="why-choose" className="why-choose">
        <div className="why-choose__content">
          <h2 className="why-choose__subtitle">Quality</h2>
          <h1 className="why-choose__title">Why Choose LechTop for Your Gaming Needs?</h1>
          <p className="why-choose__description">
            At LechTop, we prioritize your gaming experience. Enjoy unparalleled support, robust warranties, and prices that fit your budget.
          </p>
          <div className="why-choose__features">
            <div className="feature">
              <img src="/image.png" alt="Exceptional Support" className="feature__icon" />
              <h3 className="feature__title">Exceptional Support</h3>
              <p className="feature__description">
                Our dedicated team is here to assist you every step of the way.
              </p>
            </div>
            <div className="feature">
              <img src="/image.png" alt="Industry Warranties" className="feature__icon" />
              <h3 className="feature__title">Industry Warranties</h3>
              <p className="feature__description">
                We offer industry-leading warranties to ensure your peace of mind.
              </p>
            </div>
          </div>
          <div className="why-choose__actions">
            <a href="/learn-more" className="why-choose__button">Learn More</a>
          </div>
        </div>
        <div className="why-choose__image">
          <img src="/pc-main.png" alt="Quality Setup" />
        </div>
      </section>
    </div>
  );
};

export default TopGamingProducts;
