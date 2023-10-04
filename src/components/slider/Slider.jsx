import {  useState } from "react";
import "./Slider.css";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);


  const moveDot = (index) => {
    setSlideIndex(index);
  };


   // Define an array of slide content
   const slideContent = [
    {
      title: "Nepal",
      description: "Mountain View",
    },
    {
      title: "Thailand",
      description: "Beach View",
    },
    {
      title: "Indonesia",
      description: "Hill View",
    },
  ];



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
          const content = slideContent[index];
          return (
            <div key={obj.id} className={`slide-foreground flex flex-col justify-center items-center ${ isActiveSlide ? "active-slide" : ""}`}>
              <img src={`../../src/assets/sm${index + 1}.jpg`} alt="" className="foregroundImg"/>
              
              <div className={`absolute flex flex-col items-center textcontent ${ slideIndex ? "text-visible" : ""}`}>
                <h1 className="text-[165px] text-white uppercase tracking-[62px] leading-[0px]">
                  {content.title}
                </h1>
                <div className="w-[80%] h-[4px] bg-[#979696] opacity-[50%] mt-[100px]" />
                <p className="mt-[20px] font-Inter text-[25px] text-white uppercase tracking-[40px]">
                  {content.description}
                </p>
              </div>


            </div>
          );
        })}
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
