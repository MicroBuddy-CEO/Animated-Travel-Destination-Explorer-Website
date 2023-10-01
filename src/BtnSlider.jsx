import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={`${direction === "next" ? "btn-slide next " : "btn-slide prev"}  z-[999]  absolute flex justify-between`}
    >
      {direction === "next" ? "rightArrow" : ""}
    </button>
  );
}
