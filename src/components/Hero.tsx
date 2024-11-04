import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1>
          Elevate Your Gaming Experience with <span>LechTop</span>
        </h1>
        <div className="hero__buttons">
        <button className="hero__button hero__button--shop">Shop</button>
        <button className="hero__button hero__button--learn">Learn More</button>

        </div>
      </div>
      <div className="hero__image">
        <img src="/pc.png" alt="Gaming Setup" />
      </div>
    </section>
  );
};

export default Hero;
