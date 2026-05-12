import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">VIBE DANCE ACADEMY</div>
          <p className="footer-desc">Empowering dancers of all levels to find their unique rhythm through world-class training.</p>
          <div className="social-icons">
             <span className="material-symbols-outlined">brand_awareness</span>
             <span className="material-symbols-outlined">share</span>
             <span className="material-symbols-outlined">public</span>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Studio Rental</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>hello@vibeacademy.com</p>
          <p>+1 (555) 000-VIBE</p>
          <p className="copyright">© 2024 VIBE DANCE ACADEMY.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;