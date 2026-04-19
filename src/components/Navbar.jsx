import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <span className="logo-text">Elysian Routes</span>
        </a>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><a href="#destinations" className="nav-link active">Destinations</a></li>
          <li><a href="#tours" className="nav-link">Tours</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#about" className="nav-link">About Us</a></li>
        </ul>

        {/* CTA Button */}
        <a href="#tours" className="btn btn-primary navbar-cta">
          Start Booking
        </a>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
