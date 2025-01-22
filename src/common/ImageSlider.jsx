import React, { useState, useEffect } from "react";
import "../styles/common/ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency array includes currentIndex

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="comm-img-slider">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-image">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="blurred-border"
        />
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
