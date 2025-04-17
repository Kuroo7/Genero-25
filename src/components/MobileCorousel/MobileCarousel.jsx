import "./MobileCarousel.css";

const images = [
  "/PastEvents/1.webp",
  "/PastEvents/3.webp",
  "/PastEvents/5.webp",
  "/PastEvents/6.webp",
  "/PastEvents/7.webp",
  "/PastEvents/8.webp",
  "/PastEvents/12.webp",
  "/PastEvents/10.webp",
];

const MobileCarousel = () => {
  return (
    <div id="mobileEventView" className="mobile-only-view">
      <div className="bg-container">
        <div className="header-container">
          <h1
            className="header-text"
            style={{
              background: "linear-gradient(90deg, white 0%, #ffbf00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
          Past Events
          </h1>
        </div>
      </div>

      <div className="carousel-container">
        <div className="carousel-grid">
          {images.map((img, index) => (
            <div className="carousel-item" key={`img-${index}`}>
              <img
                src={img}
                alt={`Past Event ${index + 1}`}
                className="carousel-image"
              />
              <div className="image-overlay">
                <span className="event-number">Event {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;