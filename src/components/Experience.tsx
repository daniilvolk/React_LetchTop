import React from "react";
import './Experience.scss';

const Experience: React.FC = () => {
    return(
        <section id="experience" className="experience">
      <div className="experience__content">
        <h2>Experience Unmatched Performance and Quality with <span>LechTop</span> Gaming PCs and Parts</h2>
        <p>
          LechTop delivers a premium gaming experience like no other. With cutting-edge hardware,
          ergonomic design, and unmatched performance, it’s the top choice for gamers around the world.
        </p>
        <p>
          Whether you’re looking for power, portability, or precision, LechTop has a solution tailored to your needs.
        </p>
      </div>
      <div className="experience__image">
        <img src="/logo.png" alt="Gaming Setup" />
      </div>
    </section>
    );
};

export default Experience;