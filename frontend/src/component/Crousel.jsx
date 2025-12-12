import React, { useState, useEffect, useRef } from "react";

const Crousel = () => {
  const images = [
    "/images/pexels-ash-craig-122861-376464.jpg",
    "/images/pexels-chanwalrus-958545.jpg",
    "/images/pexels-elevate-1267320.jpg",
    "/images/pexels-ella-olsson-572949-1640777.jpg",
    "/images/pexels-fotios-photos-1279330.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll to current slide
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: current * window.innerWidth,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <div
      ref={containerRef}
      className="scroll flex w-full overflow-x-auto snap-x no-scrollbar"
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className="shrink-0 w-screen snap-start"
        >
          <img
            src={src}
            className="w-full h-[80vh] object-cover"
            alt={`Slide ${idx + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Crousel;
