import { useState } from "react";
import "./Slider.css";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">

      {/* Largest background slider */}
      <div className="slider-largest-background">
        {[1, 2, 3, 4, 5].map((obj, index) => {
          const isActiveSlide = slideIndex === index + 1;
          return (
            <div key={obj.id} className={`slide-larget-background ${ isActiveSlide ? "active-slide" : "" }`}>
              <img src={`./src/assets/img${index + 1}.jpg`} alt="" className="largest-backgroundImg"/>
            </div>
          );
        })}
      </div>


      {/* Large background slider */}
      <div className="slider-background">
        {[1, 2, 3, 4, 5].map((obj, index) => {
          const isActiveSlide = slideIndex === index + 1;
          return (
            <div key={obj.id} className={`slide-background ${ isActiveSlide ? "active-slide" : "" }`}>
              <img src={`./src/assets/img${index + 1}.jpg`} alt="" className="backgroundImg"/>
            </div>
          );
        })}
      </div>
      

      {/* Small foreground slider */}
      <div className="slider-foreground">
        {[1, 2, 3, 4, 5].map((obj, index) => {
          const isActiveSlide = slideIndex === index + 1;
          return (
            <div key={obj.id} className={`slide-foreground ${ isActiveSlide ? "active-slide" : "" }`}>
              <img src={`./src/assets/img${index + 1}.jpg`} alt="" className="foregroundImg"/>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot dot-active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
