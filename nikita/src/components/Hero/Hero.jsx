import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image & Overlay */}
      <div className="hero-background">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkc5bK_7obAmDh3bAHAb0ru3AenyyP5Ln0klOziG84O-4NX9R3R5rE94tqBQdg5XTul6wXhle8fW1PmbkdLeKScFnh-5biXhFCr-WNf3kqIrXIoKLLLCGcUDh9-7H02TBKZqskenAkViDLpyavGRlV4xMUUY-d0ZIPR2qib9m_MKOy8SBM98CCZXEJZIRh92-f8ovHnGFUoWwkC22nr2i9ppZNYeq64yaU3-x4MhrLO7ZrP5EoHmcWyIA7N-whVZw1ixB5hxvCgmxd" 
          alt="Dancer in motion" 
          className="hero-img"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <span className="hero-badge">Elevate Your Rhythm</span>
          
          <h1 className="hero-title">
            MUÉVETE CON <span className="text-gradient">PASIÓN</span>
          </h1>
          
          <p className="hero-description">
            Discover the explosive energy of contemporary dance. From urban street styles to classical grace, we transform movement into art.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">
              Start Dancing Today
            </button>
            <button className="btn-outline">
              View Classes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;