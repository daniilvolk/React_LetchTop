import React from 'react';
import './CustomerTestimonialsAndCallToAction.scss';

const CustomerTestimonialsAndCallToAction: React.FC = () => {
  return (
    <div>
      {/* Customer Testimonials Section */}
      <section id="customer-testimonials" className="customer-testimonials">
        <h2 className="customer-testimonials__title">Customer Testimonials</h2>
        <p className="customer-testimonials__description">
          LechTop products exceeded my expectations every time!
        </p>
        <div className="customer-testimonials__reviews">
          <div className="review">
            <div className="review__stars">★★★★★</div>
            <p className="review__text">
              "The performance of my new gaming PC is incredible! I couldn't be happier with my purchase from LechTop."
            </p>
            <div className="review__info">
              <img src="/avatar1.png" alt="John Doe" className="review__avatar" />
              <div className="review__details">
                <p className="review__name">John Doe</p>
                <p className="review__role">Gamer, Enthusiast</p>
              </div>
              <img src="/webflow-icon.png" alt="Webflow" className="review__platform" />
            </div>
          </div>
          <div className="review">
            <div className="review__stars">★★★★★</div>
            <p className="review__text">
              "The customer service at LechTop is top-notch! They helped me choose the perfect components for my build."
            </p>
            <div className="review__info">
              <img src="/avatar2.png" alt="Jane Smith" className="review__avatar" />
              <div className="review__details">
                <p className="review__name">Jane Smith</p>
                <p className="review__role">Tech Reviewer</p>
              </div>
              <img src="/webflow-icon.png" alt="Webflow" className="review__platform" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="call-to-action" className="call-to-action">
        <div className="call-to-action__content">
          <div className="call-to-action__branding">
            <img src="/logo.png" alt="LechTop Logo" className="call-to-action__logo" />
            <h2 className="call-to-action__title">Unleash Your Gaming Potential</h2>
          </div>
          <p className="call-to-action__description">
            Discover our extensive range of high-performance gaming PCs and components tailored for every gamer. Whether you're looking for a custom build or need expert advice, we're here to help you elevate your gaming experience.
          </p>
          <div className="call-to-action__buttons">
            <a href="/explore" className="call-to-action__button call-to-action__button--explore">Explore</a>
            <a href="/contact" className="call-to-action__button call-to-action__button--contact">Contact</a>
          </div>
        </div>
      </section>
      </div>
  );
};

export default CustomerTestimonialsAndCallToAction;