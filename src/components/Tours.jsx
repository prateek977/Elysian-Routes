import './Tours.css';

/* Tours data from the existing project */
const tours = [
  {
    id: 1,
    title: "Maldives Beach Paradise",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&h=340&fit=crop",
    price: 1299,
    duration: "7 Days",
    people: "2-6",
    rating: 4.9,
    tag: "BESTSELLER",
  },
  {
    id: 2,
    title: "Swiss Alps Mountain Escape",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&h=340&fit=crop",
    price: 1850,
    duration: "5 Days",
    people: "2-4",
    rating: 4.8,
    tag: "POPULAR",
  },
  {
    id: 3,
    title: "Peru Cultural Expedition",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&h=340&fit=crop",
    price: 2100,
    duration: "10 Days",
    people: "4-8",
    rating: 4.7,
    tag: "NEW",
  },
];

function TourCard({ tour }) {
  return (
    <div className="tour-card">
      {/* Image */}
      <div className="tour-image-wrapper">
        <img src={tour.image} alt={tour.title} className="tour-image" />
        <span className="tour-tag">{tour.tag}</span>
      </div>

      {/* Content */}
      <div className="tour-content">
        <h3 className="tour-title">{tour.title}</h3>
        
        {/* Price Row */}
        <div className="tour-price-row">
          <span className="tour-price">${tour.price.toLocaleString()}</span>
          <span className="tour-price-label">/person</span>
        </div>

        {/* Meta Info */}
        <div className="tour-meta">
          <div className="tour-meta-item">
            <span>🕐</span>
            <span>{tour.duration}</span>
          </div>
          <div className="tour-meta-item">
            <span>👥</span>
            <span>{tour.people}</span>
          </div>
        </div>

        {/* Rating Bar */}
        <div className="tour-rating-bar">
          <div className="tour-rating-fill" style={{ width: `${(tour.rating / 5) * 100}%` }}></div>
        </div>

        {/* Action */}
        <a href="#" className="tour-view-btn">View Details</a>
      </div>
    </div>
  );
}

function Tours() {
  return (
    <section className="tours" id="tours">
      <div className="container">
        {/* Header */}
        <div className="tours-header">
          <span className="section-label">CURATED EXPERIENCES</span>
          <h2 className="section-title">Our Popular Tours</h2>
        </div>

        {/* Tour Cards */}
        <div className="tours-grid">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tours;
