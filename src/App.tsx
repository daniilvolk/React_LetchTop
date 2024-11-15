import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience  from './components/Experience';
import ChoseYourBest from './components/ChoseYourBest';
import CustomPCBuilding from './components/CustomPCBuilding';
import TopGamingProducts from './components/TopGamingProducts';
import CustomerTestimonialsAndCallToAction from './components/CustomerTestimonialsAndCallToAction';
import './App.scss';

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      setShowContent(true);
    }, 3000); // 3 секунды для логотипа

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showLogo ? (
        <div className="logo-screen">
          <img src="/logo.png" alt="Logo" className="logo appear-fade" />
        </div>
      ) : (
        <>
          <div className={showContent ? "navbar animate-navbar" : "navbar"}>
            <Navbar />
          </div>
          <div className={showContent ? "hero animate-hero" : "hero"}>
            <Hero />
          </div>

        <div className={showContent ? "experience animate-experience" : "experience"}>
          <Experience />
        </div>

        <div className={showContent ? "features animate-features" : "features"}>
           <ChoseYourBest/>
        </div>

        <div className={showContent ? "customPCBuilding animate-customPCBuilding" : "customPCBuilding"}>
          <CustomPCBuilding/>
        </div>

        <div className={showContent ? "TopGamingProducts animate-TopGamingProducts" : "TopGamingProducts"} >
          <TopGamingProducts/>
        </div>

        <div>
          <CustomerTestimonialsAndCallToAction />
        </div>
       

          <main>
            <div className={showContent ? "section animate-section" : "section"}>
              
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
