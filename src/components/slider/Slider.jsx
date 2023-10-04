import { useEffect, useState } from "react";
import "./Slider.css";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [textAnimationClass, setTextAnimationClass] = useState("fade-in");

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    setTextAnimationClass("fade-out");
    setTimeout(() => {
      setTextAnimationClass("fade-in");
    }, 2000);
  }, [slideIndex]);

  return (
    <div className="container-slider">
      {/* Largest background slider */}
      <div className="slider-largest-background">
        {[1, 2, 3].map((obj, index) => {
          const isActiveSlide = slideIndex === index + 1;
          return (
            <div
              key={obj.id}
              className={`slide-larget-background ${
                isActiveSlide ? "active-slide" : ""
              }`}
            >
              <img
                src={`../../src/assets/xl${index + 1}.jpg`}
                alt=""
                className="largest-backgroundImg"
              />
            </div>
          );
        })}
      </div>

      {/* Large background slider */}
      <div className="slider-background">
        {[1, 2, 3].map((obj, index) => {
          const isActiveSlide = slideIndex === index + 1;
          return (
            <div
              key={obj.id}
              className={`slide-background ${
                isActiveSlide ? "active-slide" : ""
              }`}
            >
              <img
                src={`../../src/assets/lg${index + 1}.jpg`}
                alt=""
                className="backgroundImg"
              />
            </div>
          );
        })}
      </div>

      {/* Small foreground slider */}
      <div className="slider-foreground relative">
        {[1, 2, 3].map((obj, index) => {
          const isActiveSlide = slideIndex === index + 1;
          // const content = slideContent[index];
          return (
            <div
              key={obj.id}
              className={`slide-foreground flex flex-col justify-center items-center ${
                isActiveSlide ? "active-slide" : ""
              }`}
            >
              <img
                src={`../../src/assets/sm${index + 1}.jpg`}
                alt=""
                className="foregroundImg"
              />
            </div>
          );
        })}
      </div>

      {/* Text Slider */}
      <div className={`slider-text absolute ${textAnimationClass}`}>
        <div className={`flex flex-col items-center ${ slideIndex ? "text-visible" : ""}`}>

          <h1 className="text-[165px] text-white uppercase tracking-[62px] leading-[0px]">
            {slideIndex === 1 ? "Indonesia" : slideIndex === 2 ? "Nepal": "Thailand"}
          </h1>
          
          <div className="w-[80%] h-[4px] bg-[#979696] opacity-[50%] mt-[100px]" />

          <p className="mt-[20px] font-Inter text-[25px] text-white uppercase tracking-[40px] drop-shadow-lg">
            {slideIndex === 1 ? "Desert View" : slideIndex === 2 ? "River View" : "Hills View"}
          </p>
          
        </div>

      </div>

      {/* Dots */}
      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
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
