import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from "../i18n/LanguageContext";
import { landingContent } from "../i18n/landingContent";

gsap.registerPlugin(ScrollTrigger);

const TitleRevealHome = () => {
  const titleRef = useRef();
  const { language } = useLanguage();
  const content = landingContent[language].titleHolder;

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
      <><span style={{ color: "#f2d4b0" }}>{content.highlight}</span> {content.suffix}</>
    </h3>
  );
};

export default TitleRevealHome;
