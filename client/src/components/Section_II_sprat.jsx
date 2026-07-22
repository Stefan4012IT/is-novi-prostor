import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isGrb from "../assets/is_grb.svg";
// import nacrt_II_sprat from '../assets/sprat_II/nacrt_II_sprat.svg'
import pticice from '../assets/ptice2.svg'

gsap.registerPlugin(ScrollTrigger);

function Sprat_II() {
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
        Zakoračite u novi prostor za srednjoškolce International Schoola
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
        Šta vas očekuje u novom prostoru?
        </h3>
    </section>
  );
}

export default Sprat_II;
