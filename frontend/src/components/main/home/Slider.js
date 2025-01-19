import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [img, setimg] = useState(images[0])

  const handleMouseDown = (e) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    
    const randomItem = images[randomIndex];
    setimg(randomItem)
  };


  return (
    <div className="slider-container">
      <div className="slider"
        onMouseDown={handleMouseDown}
      >
          <img className="mid" src={img} alt={`Image ${1}`} />
      </div>
    </div>
  );
};

export default Slider;
