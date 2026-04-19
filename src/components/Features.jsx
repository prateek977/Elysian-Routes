import './Features.css';

/* Feature items data */
const features = [
  {
    id: 1,
    icon: "💰",
    title: "Best Prices Guaranteed",
    description: "We negotiate the best deals so every detail of your journey is crafted to deliver unrivaled value, always.",
  },
  {
    id: 2,
    icon: "📱",
    title: "Easy Booking Experience",
    description: "A seamless, intuitive mobile-first experience that feels like your personal travel concierge.",
  },
  {
    id: 3,
    icon: "🌍",
    title: "24/7 Global Support",
    description: "Our dedicated travel assistance and concierge team are available in every timezone, every day.",
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container container">
        {/* Left: Image / Visual */}
        <div className="features-visual">
          <div className="features-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=600&fit=crop"
              alt="Traveler exploring the world"
              className="features-image"
            />
            {/* Decorative floating elements */}
            <div className="floating-card card-1">
              <span className="float-text">Easy Planning</span>
            </div>
            <div className="floating-card card-2">
              <span className="float-text">Smart Booking</span>
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="features-content">
          <span className="section-label">OUR PROMISE</span>
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We bring the ease of luxury to budget travel, ensuring every detail
            of your journey is perfectly planned and stress-free.
          </p>

          {/* Feature List */}
          <div className="features-list">
            {features.map((feature) => (
              <div className="feature-item" key={feature.id}>
                <div className="feature-icon-wrapper">
                  <span className="feature-icon">{feature.icon}</span>
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
