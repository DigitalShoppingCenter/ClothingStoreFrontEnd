import React from 'react';
import '../Styling/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About Section */}
        <div className="footer-section">
          <h2>Envi</h2>
          <p>Hesape, hesape, me shum hesape</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: envieshtpenismadh@gmail.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: Coffee Brunch, Myslym Shyri</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} E & D. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
