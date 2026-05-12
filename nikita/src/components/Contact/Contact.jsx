import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-grid">
        {/* Form Side */}
        <div className="contact-info">
          <h2 className="contact-title">Join the Movement</h2>
          <p className="contact-subtitle">Have questions? Send us a message and our team will get back to you within 24 hours.</p>
          
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help you?" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Map & Info Side */}
        <div className="contact-details">
          <div className="map-placeholder">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzSyZ6UJAkl0EI_-KKCvYkbKZZr_YmNalaqj-n-5MCt1PhDf_kp1oYPm7FLWQJHO16iCNBXW16Wc7C_R_9bY_Syor3C76gKhZlyoN1x2k79z3-_nWEzo0njeI1NKrGsvN7fLxJTWRCaUNpOubdv4WEZScT79cghM7hqsaRKFpvdzI6h3jJIEuACNGofjNB2IaCLnZraSjjw_CDkjxoVyFvn-KkiUyuOuTkP44ayZhMBkN4EjlPSac0iEuN2PhdWK_e1L9RXMgT28bI" alt="Location Map" />
            <div className="map-overlay"></div>
          </div>
          
          <div className="info-cards">
            <div className="info-card glass-card">
              <span className="material-symbols-outlined">location_on</span>
              <h4>Our Studio</h4>
              <p>123 Rhythm Avenue, Suite 400<br/>New York, NY 10001</p>
            </div>
            <div className="info-card glass-card">
              <span className="material-symbols-outlined">schedule</span>
              <h4>Hours</h4>
              <p>Mon - Fri: 9:00 - 22:00<br/>Sat - Sun: 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;