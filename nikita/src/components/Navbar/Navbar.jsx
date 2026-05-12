import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          VIBE ACADEMY
        </div>
        
        <div className="navbar-links">
          <a href="#disciplines" className="nav-item">Disciplines</a>
          <a href="#schedule" className="nav-item">Schedule</a>
          <a href="#instructors" className="nav-item">Instructors</a>
          <a href="#gallery" className="nav-item">Gallery</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>

        <button className="nav-button">
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;