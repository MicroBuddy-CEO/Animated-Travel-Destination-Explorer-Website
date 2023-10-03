import { useState, useEffect } from "react";
import "./CodePen.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

function CodePen() {
  const images = [img1, img2, img3, img4];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const elementsArray = document.querySelectorAll(".circle");

  useEffect(() => {
    const updateBackgroundImage = () => {
      elementsArray.forEach(function (elem) {
        elem.classList.add("circle-animate");
      });

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = prevIndex + 1 >= images.length ? 0 : prevIndex + 1;
          elementsArray.forEach(function (elem) {
            elem.style.backgroundImage = "url('" + images[nextIndex] + "')";
            elem.classList.remove("circle-animate");
          });
          return nextIndex;
        });
      }, 2000); 
    };

    elementsArray.forEach(function (elem) {
      elem.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
    });

    const button = document.querySelector(".btn");

    button.addEventListener("click", function () {
      button.classList.add("btn-animate");
      updateBackgroundImage();
    });

    button.addEventListener("animationend", function () {
      button.classList.remove("btn-animate");
    });
  }, []);

  return (
    <section>
      <div className="header">
        <div className="circle"></div>
        <div className="circle">
          <div className="overlay"></div>
        </div>
        <div className="circle"></div>
      </div>

      <button className="btn">
        <span className="material-symbols-outlined">next</span>
      </button>
    </section>
  );
}

export default CodePen;

