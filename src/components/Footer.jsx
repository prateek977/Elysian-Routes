import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-container container">
        {/* Column 1: Brand */}
        <div className="footer-col">
          <h3 className="footer-brand">
            <span>✈️</span> Elysian Routes
          </h3>
          <p className="footer-desc">
            Curating high-end curated journeys for the modern voyager. 
            Discover authentic cultural adventures crafted with meticulous 
            attention to detail and local expertise.
          </p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Instagram">📷</a>
            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
            <a href="#" className="social-link" aria-label="Facebook">📘</a>
          </div>
        </div>

        {/* Column 2: About */}
        <div className="footer-col">
          <h4 className="footer-heading">About</h4>
          <ul className="footer-links">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Travel Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div className="footer-col">
          <h4 className="footer-heading">Support</h4>
          <ul className="footer-links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Booking Terms</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-col">
          <h4 className="footer-heading">Newsletter</h4>
          <p className="footer-newsletter-text">
            Subscribe to our editorial journal for curated adventure insights.
          </p>
          <div className="footer-newsletter">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn" aria-label="Subscribe">→</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom container">
        <p>© 2025 Elysian Routes. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
