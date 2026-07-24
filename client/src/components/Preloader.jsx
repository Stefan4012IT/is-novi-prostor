import React, { useEffect, useState } from "react";
import isGrb from '../assets/is_grb.svg';

const MINIMUM_DISPLAY_TIME = 2000;
const MAXIMUM_DISPLAY_TIME = 3200;

const Preloader = ({ videoStatus }) => {
  const [minimumTimeElapsed, setMinimumTimeElapsed] = useState(false);
  const [maximumTimeElapsed, setMaximumTimeElapsed] = useState(false);
  const isLoaded = maximumTimeElapsed || (minimumTimeElapsed && videoStatus !== "loading");

  useEffect(() => {
    const previousOverflowY = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";

    const timer = window.setTimeout(
      () => setMinimumTimeElapsed(true),
      MINIMUM_DISPLAY_TIME,
    );
    const maximumTimer = window.setTimeout(
      () => setMaximumTimeElapsed(true),
      MAXIMUM_DISPLAY_TIME,
    );

    return () => {
      clearTimeout(timer);
      clearTimeout(maximumTimer);
      document.body.style.overflowY = previousOverflowY;
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      document.body.style.overflowY = "scroll";
    }
  }, [isLoaded]);

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
