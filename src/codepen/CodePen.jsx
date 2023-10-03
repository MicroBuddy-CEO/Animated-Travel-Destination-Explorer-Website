import  { useState, useEffect } from 'react';
import './CodePen.css'; // Replace 'YourComponent.css' with your CSS file path

const images = [
  'https://www.inspiringtravelscotland.com/wp-content/uploads/2019/05/Quiraing-Skye-Scottish-Highlands.jpg',
  'https://www.worldatlas.com/r/w1200/upload/05/71/c2/shutterstock-713084413.jpg',
  'https://www.nestcampers.com/sites/default/files/blog/dolomites_lago%20di%20braies.png',
  'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/24/146502.jpg',
];

function YourComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const elementsArray = document.querySelectorAll(".circle");
  
  useEffect(() => {
    // Initialize header with the first image
    elementsArray.forEach(function (elem) {
      elem.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    });
  }, []);

  const handleButtonClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

    // Start animation
    elementsArray.forEach(function (elem) {
      elem.classList.add("circle-animate");
    });

    setTimeout(() => {
      // Register circle animationEnd event
      elementsArray.forEach(function (elem) {
        elem.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        elem.classList.remove("circle-animate");
      });
    }, 2000); // 2 seconds animation duration
  };

  return (
    <div className="header">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`circle${index === 1 ? ' overlay' : ''}`}
        ></div>
      ))}
      <button className="btn" onClick={handleButtonClick}>
        <span className="material-symbols-outlined">cached</span>
      </button>
    </div>
  );
}

export default YourComponent;
