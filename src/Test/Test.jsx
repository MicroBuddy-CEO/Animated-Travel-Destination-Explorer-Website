import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

import "./Test.css";

const Test = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imgs = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentImageIndex,
    afterChange: (index) => setCurrentImageIndex(index),
  };

  const handleButtonClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
    );

    // Add the animate class to trigger the animation
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
      circle.classList.add("animate");
      setTimeout(() => {
        circle.classList.remove("animate");
      }, 1000); // Remove the animate class after 1 second (matching the animation duration)
    });
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imgs.map((imageUrl, index) => (
          <div key={index}>
            <div className={`circle ${currentImageIndex === index ? "animate" : ""}`}>
              <img src={imageUrl} alt={`Image ${index}`} />
            </div>
          </div>
        ))}
      </Slider>
      <button className="btn" onClick={handleButtonClick}>
        <span className="material-symbols-outlined">cached</span>
      </button>
    </div>
  );
};

export default Test;
