import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TitleRevealHome = () => {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { xPercent: -100, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <h3 ref={titleRef} className="title-reveal">
      <><span style={{ color: "#f2d4b0" }}>more room</span> to grow.</>
    </h3>
  );
};

export default TitleRevealHome;
