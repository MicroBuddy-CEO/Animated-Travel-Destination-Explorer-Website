import { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  // const backgroundImages = [
  //   {
  //     imageUrl: "url('./assets/img1.jpg')",
  //     className: "bgSlide",
  //   },
   
  //   {
  //     imageUrl: "url('./assets/img2.jpg')",
  //     className: "bgSlide",
  //   },
   
  //   {
  //     imageUrl: "url('./assets/img3.jpg')",
  //     className: "bgSlide",
  //   },
   
  //   {
  //     imageUrl: "url('./assets/img4.jpg')",
  //     className: "bgSlide",
  //   },
   
  //   {
  //     imageUrl: "url('./assets/img5.jpg')",
  //     className: "bgSlide",
  //   },
   
  // ];
  

  

  const nextSlide = () => {
    if (slideIndex !== [1, 2, 3, 4, 5].length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === [1, 2, 3, 4, 5].length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex([1, 2, 3, 4, 5].length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">

      {[1, 2, 3, 4, 5].map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1
                ? "slide active-anim"
                : slideIndex === index
                ? "slide prev-slide"
                : slideIndex === index + 2
                ? "slide next-slide"
                : "slide"
            }

            style={{
              padding: "20px",
              backgroundImage: `url(./src/assets/img${index + 1}.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img src={`./src/assets/img${index + 1}.jpg`} className="mainImg" />

          </div>
        );
      })}


      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots absolute bottom-0 z-[999] border border-red-700 flex">
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
