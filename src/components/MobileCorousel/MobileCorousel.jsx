import { useEffect, useRef } from "react";
import "./MobileCorousel.css";

const images = [
  "/pastEvents/1.webp",
  "/pastEvents/2.webp",
  "/pastEvents/3.webp",
  "/pastEvents/4.webp",
  "/pastEvents/5.webp",
  "/pastEvents/6.webp",
  "/pastEvents/7.webp",
  "/pastEvents/8.webp",
  "/pastEvents/9.webp",
  "/pastEvents/10.webp",
  "/pastEvents/11.webp",
  "/pastEvents/12.webp",
];

const MobileCorousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const sliderItems = slider.querySelector(".slider-items");

    if (sliderItems) {
      let clone = sliderItems.cloneNode(true);
      clone.classList.add("clone");
      clone.ariaHidden = true;
      slider.append(clone);
    }
  }, []);

  return (
    <div id="mobileEventView" className="mobile-only-view h-screen w-screen">
      <div className="bg-container">
        <div className="flex h-40 py-10 items-center justify-center">
          <h1 
            className="md:text-9xl text-5xl font-bold uppercase text-center"
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

      <div className="slider-container bg-black">
        <div className="slider" ref={sliderRef}>
          <div className="slider-items">
            {images.map((img, index) => (
              <div className="item" key={`img-${index}`}>
                <img src={img} alt={`Past Event ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCorousel;
