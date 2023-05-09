import { useState, useRef, useEffect } from 'react';
import "../styles/HomeGallery.css"

const images = [
  "/img/homeGallery1.png",
  "/img/homeGallery2.png",
  "/img/homeGallery3.png"
];
const delay = 3000;

function HomeGallery() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((src, index) => (
          <div
            className="slide"
            key={index}
          >
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      
      <div className="slideshowDotsContainer">
        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeGallery;