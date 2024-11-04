import React from 'react';
import './ChoseYourBest.scss';

const ChoseYourBest: React.FC = () => {
  return (
    <section id="chose-your-best" className="chose-your-best">
      <h2 className="chose-your-best__title">
        Chose Your <span className="chose-your-best__highlight">Best</span> Way To Start
      </h2>
      <div className="chose-your-best__grid">
        <div className="chose-your-best__item">
          <img src="/pc-main.png" alt="RGB Lighting" className="chose-your-best__image" />
          <h3 className="chose-your-best__item-title">Illuminate Your Setup with Customizable RGB Lighting Options</h3>
          <p className="chose-your-best__item-description">
            Experience superior performance with high-quality components designed for gamers.
          </p>
          <a href="/learn-more" className="chose-your-best__link">Learn More &gt;</a>
        </div>
        <div className="chose-your-best__item">
          <img src="/pc-main.png" alt="Cooling Solutions" className="chose-your-best__image" />
          <h3 className="chose-your-best__item-title">Stay Cool Under Pressure with Innovative Cooling Solutions</h3>
          <p className="chose-your-best__item-description">
            Our advanced cooling systems ensure your PC runs smoothly during intense gaming sessions.
          </p>
          <a href="/learn-more" className="chose-your-best__link">Learn More &gt;</a>
        </div>
        <div className="chose-your-best__item">
          <img src="/pc-main.png" alt="High-Performance Components" className="chose-your-best__image" />
          <h3 className="chose-your-best__item-title">Transform Your Gaming Experience with High-Performance Components</h3>
          <p className="chose-your-best__item-description">
            Equip your rig with top-tier parts for unmatched speed and reliability.
          </p>
          <a href="/learn-more" className="chose-your-best__link">Learn More &gt;</a>
        </div>
      </div>
    </section>
  );
};

export default ChoseYourBest;
