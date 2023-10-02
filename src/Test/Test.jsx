import  { useEffect } from "react";
import { gsap, TimelineMax } from "gsap";
import "./Test.css"; // Create this CSS file for styling


const GridSplitTransition = () => {
  useEffect(() => {
    const grid = document.getElementById("grid");
    const splitRoot = 3;
    const splitUnit = 100 / splitRoot;
    const splitSquare = splitRoot ** 2;
    const images = [
      "https://i.imgur.com/25VPnJp.jpg",
      "https://i.imgur.com/swK0rjR.jpg",
      "https://i.imgur.com/rumePhx.jpg",
      "https://i.imgur.com/S3UmKmM.jpg",
      "https://i.imgur.com/KnjxZ2L.jpg",
    ];

    Array(splitSquare)
      .fill(0)
      .forEach((_, index) => {
        const offsetW = `-${(index % splitRoot) * splitUnit}vw`;
        const offsetH = `-${Math.floor(index / splitRoot) * splitUnit}vh`;
        const gridItem = document.createElement("DIV");
        gridItem.setAttribute("class", "grid-item");
        Array(5)
          .fill(0)
          .forEach((_, subIndex) => {
            const item = document.createElement("DIV");
            item.setAttribute("class", "item");
            item.setAttribute("id", `item-${index}-${subIndex}`);
            item.style.background = `url('${images[subIndex]}')`;
            item.style.backgroundSize = "100vw 100vh";
            item.style.backgroundPosition = `${offsetW} ${offsetH}`;
            gridItem.appendChild(item);
          });
        grid.appendChild(gridItem);
      });

    const items = Array(5)
      .fill(0)
      .map((_, i) => i);

    const getPprv = (i) => {
      if (i === 0) return items[3];
      if (i === 1) return items[4];
      return items[i - 2];
    };

    const getPrv = (i) => {
      if (i === 0) return items[4];
      return items[i - 1];
    };

    const getNext = (i) => {
      if (i === 4) return 0;
      return i + 1;
    };

    const getRandomAnimation = () => {
      const r = Math.floor(Math.random() * 4);
      return [
        { x: `${splitUnit}vw`, y: "0vh" },
        { x: `-${splitUnit}vw`, y: "0vh" },
        { x: "0vw", y: `${splitUnit}vh` },
        { x: "0vw", y: `-${splitUnit}vh` },
      ][r];
    };

    const getId = (i, j) => {
      return `#item-${j}-${i}`;
    };

    const loop = (i) => {
      const prv = getPrv(i);
      const pprv = getPprv(i);
      const current = items[i];

      const tl = new TimelineMax({ onComplete: () => loop(getNext(i)) });

      Array(splitSquare)
        .fill(0)
        .forEach((_, j) => {
          tl.set(getId(pprv, j), { zIndex: 0 });
          tl.set(getId(prv, j), { zIndex: 1 });
        });
      tl.set({}, {}, "animationStart");

      Array(9)
        .fill(0)
        .forEach((_, j) => {
          const delay = 0.5;
          tl.fromTo(
            getId(current, j),
            { ...getRandomAnimation(), zIndex: 2 },
            { duration: 2, x: "0vw", y: "0vh", zIndex: 2, ease: " sine.in" },
            `animationStart+=${delay}`
          );
          tl.fromTo(
            getId(current, j),
            { backgroundSize: `150vw 150vh` },
            { backgroundSize: `100vw 100vh`, duration: 4, ease: " sine.in" },
            `animationStart+=${delay}`
          );
        });
    };

    gsap.registerPlugin(TimelineMax);
    window.addEventListener("load", () => {
      loop(4);
    });

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return <div className="grid" id="grid"></div>;
};

export default GridSplitTransition;
