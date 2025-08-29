import { useEffect, useRef } from "react";
import "../styles/stars.css";

const Stars = () => {
  const skyRef = useRef<HTMLDivElement>(null);

  function random(range: number, unit: string) {
    let randNum = Math.floor(Math.random() * range) + 1;
    return `${randNum}${unit}`;
  }

  function createStar(size: number) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    // pick a random blink animation
    const randRange5 = Math.floor(Math.random() * 5) + 1;
    circle.classList.add(`blink_${randRange5}`);

    // size
    const widthAndHeight = random(size, "px");
    circle.style.height = circle.style.width = widthAndHeight;

    // random position
    circle.style.left = random(window.innerWidth, "px");
    circle.style.top = random(window.innerHeight, "px");

    return circle;
  }

  function paintStars(stars: number, size: number) {
    const sky = skyRef.current;
    if (!sky) return;

    sky.innerHTML = ""; // clear existing
    for (let i = 0; i < stars; i++) {
      sky.appendChild(createStar(size));
    }
  }

  useEffect(() => {
    paintStars(30, 5); // initial stars
    window.addEventListener("resize", () => paintStars(30, 5));
    return () => window.removeEventListener("resize", () => paintStars(30, 5));
  }, []);

  return <div ref={skyRef} className="sky absolute top-0 left-0 w-full h-full overflow-hidden"></div>;
};

export default Stars;
