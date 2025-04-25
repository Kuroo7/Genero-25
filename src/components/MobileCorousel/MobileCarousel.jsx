import "./MobileCarousel.css";
import { useEffect, useRef } from "react";

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
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = gridRef.current.querySelectorAll(".carousel-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

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
        <div className="carousel-grid" ref={gridRef}>
          {images.map((img, index) => (
            <div
              className="carousel-item"
              key={`img-${index}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={img}
                alt={`Past Event ${index + 1}`}
                className="carousel-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
