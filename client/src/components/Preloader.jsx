import React, { useEffect, useState } from "react";
import isGrb from '../assets/is_grb.svg';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Blokiraj scroll
    document.body.style.overflowY = "hidden";

    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflowY = "scroll";
    }, 800);

    const handleLoad = () => {
      setIsLoaded(true);
      document.body.style.overflowY = "scroll";
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
      document.body.style.overflowY = "scroll"; // fallback
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div className="preloader">
      <div className="preloader-img">
        <img src={isGrb} alt="International School" />

      </div>
      <div className="title">
          <h1>International</h1>
          <h3>school</h3>
        </div>
    </div>
  );
};

export default Preloader;
