import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container container">
        {/* Left: Text Content */}
        <div className="hero-content">
          <span className="hero-label">EXPLORE THE WORLD</span>
          <h1 className="hero-title">
            Adventure &amp; Experience<br />
            <span className="highlight">Where Luxury Meets Exploration.</span>
          </h1>
          <p className="hero-text">
            Embark on unforgettable journeys to the world&apos;s most captivating
            destinations. We craft experiences that create memories lasting a
            lifetime, all tailored to your style and budget.
          </p>
          <div className="hero-actions">
            <a href="#destinations" className="btn btn-primary">
              Discover Now
            </a>
            <a href="#tours" className="btn btn-outline">
              <span className="play-icon">▶</span>
              Watch Video
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Destinations</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">100k+</span>
              <span className="stat-label">Happy Travelers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Star Rating</span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=700&fit=crop"
              alt="Beautiful tropical beach destination"
              className="hero-image"
            />
            {/* Floating badge */}
            <div className="hero-badge">
              <div className="badge-content">
                <span className="badge-label">FEATURED LOCATION</span>
                <span className="badge-title">Nusa Penida, Indonesia</span>
              </div>
              <div className="badge-rating">
                <span>⭐</span>
                <span>4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
