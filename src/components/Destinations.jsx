import './Destinations.css';

/* Destination data from the existing project */
const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    subtitle: "Cultural paradise & beaches",
    image: "https://images.unsplash.com/photo-2166559-pexels.jpeg?w=400&h=500&fit=crop",
    fallbackImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=500&fit=crop",
    rating: 4.9,
    photos: 2450,
  },
  {
    id: 2,
    name: "Paris, France",
    subtitle: "Art, culture & romance",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=500&fit=crop",
    rating: 4.8,
    photos: 3200,
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    subtitle: "Tradition meets future",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=500&fit=crop",
    rating: 4.9,
    photos: 2800,
  },
  {
    id: 4,
    name: "New York, USA",
    subtitle: "The city that never sleeps",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=500&fit=crop",
    rating: 4.7,
    photos: 4100,
  },
];

function DestinationCard({ destination }) {
  return (
    <div className="dest-card">
      <div className="dest-image-wrapper">
        <img
          src={destination.image}
          alt={destination.name}
          className="dest-image"
          onError={(e) => {
            if (destination.fallbackImage) {
              e.target.src = destination.fallbackImage;
            }
          }}
        />
        {/* Photo count badge */}
        <div className="dest-photo-count">
          <span>📷</span>
          <span>{destination.photos}</span>
        </div>
      </div>
      <div className="dest-info">
        <h3 className="dest-name">{destination.name}</h3>
        <p className="dest-subtitle">{destination.subtitle}</p>
      </div>
    </div>
  );
}

function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        {/* Section Header */}
        <div className="destinations-header">
          <div>
            <span className="section-label">WANDERLUST</span>
            <h2 className="section-title">Top Destinations</h2>
          </div>
          <a href="#destinations" className="destinations-see-all">
            See All Destinations →
          </a>
        </div>

        {/* Grid of Cards */}
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
