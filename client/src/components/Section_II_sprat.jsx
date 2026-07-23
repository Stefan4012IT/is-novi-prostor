import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isGrb from "../assets/is_grb.svg";
// import nacrt_II_sprat from '../assets/sprat_II/nacrt_II_sprat.svg'
import pticice from '../assets/ptice2.svg'
import { useLanguage } from "../i18n/LanguageContext";
import { landingContent } from "../i18n/landingContent";

gsap.registerPlugin(ScrollTrigger);

function Sprat_II() {
  const { language } = useLanguage();
  const content = landingContent[language].sectionTwo;
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

useEffect(() => {
    const ctx = gsap.context(() => {
      // Prati sekciju od ulaska do izlaska
      gsap.fromTo(
        imgRef.current,
        { opacity: 1, y: -400 },
        {
          opacity: 1,
          y: 800,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom top",
            scrub: true,
            ease: "power2.out",
          },
        }
      );
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);

  return (
    <section className="section-3-II" ref={sectionRef}>
        <h2 className="title">
        {content.titleStart} <span style={{ color: "#f2d4b0" }}>{content.titleAccent}</span> {content.titleEnd}
        </h2>
        <div className="section-img">
        <img src={pticice} alt="" />
        </div>
        <div className="img_box">
            <div className="img-wrapper">
                <img
                ref={imgRef}
                className="sticky-img"
                src={isGrb}
                alt="International School"
                />
            </div>
        </div>
        <h3 className="title-2">
        {content.subtitle}
        </h3>
    </section>
  );
}

export default Sprat_II;
