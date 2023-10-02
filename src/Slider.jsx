import { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex % 5) + 1);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 1 ? 5 : prevIndex - 1));
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider border border-green-600">
      {[1, 2, 3, 4, 5].map((obj, index) => {
        const isActiveSlide = slideIndex === index + 1;
        const isPrevSlide = slideIndex === index;
        const isNextSlide = slideIndex === index + 2;

        const slideClasses = ["slide"];

        if (isActiveSlide) {
          slideClasses.push("active-slide");
        } else if (isPrevSlide) {
          slideClasses.push("prev-slide");
        } else if (isNextSlide) {
          slideClasses.push("next-slide");
        }

        return (
          <div key={obj.id} className={slideClasses.join(" ")}>
            <img src={`./src/assets/img${index + 1}.jpg`} className="mainImg" />
          </div>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots absolute bottom-0 z-[999] flex">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot dot-active" : "dot"}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-[-200px]  border-4 border-green-600 w-[850px] h-[850px]">
        <div className="container-background flex gap-2 relative z-0">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "bg bg-active absolute" : "bg absolute"}
            >
              <img
                src={`./src/assets/img${index + 1}.jpg`}
                className="w-[870px] h-[870px] rounded-full border border-red-600 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
