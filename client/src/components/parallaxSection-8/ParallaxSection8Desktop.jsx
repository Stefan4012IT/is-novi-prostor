import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img_3 from "../../assets/savremena_novi_prostor-1.png";

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection_8() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        xPercent: -100,
        opacity: .5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 100%",
          end: "top 10%",
          scrub: true,
        },
      });

      gsap.from(textRef.current, {
        y: 300,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 100%",
          end: "top 70%",
          scrub: true,
        },
      });

      gsap.fromTo(
        imgRef.current,
        { y: -500, scale: .1, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 25%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-8" ref={sectionRef}>
      <div className="heading-box">
        <h2 className="title" ref={titleRef}>
          <><span style={{ color: "#f2d4b0" }}>Cambridge obrazovanje</span><br />koje otvara vrata<br />sveta</>
        </h2>
      </div>
      <div className="text" ref={textRef}>
        <p>Kao akreditovana Cambridge International School, International School pruža učenicima obrazovanje zasnovano na međunarodno priznatim IGCSE, AS i A Level programima. Nastava na engleskom jeziku, pažljivo odabran izbor predmeta i Cambridge kvalifikacije pružaju snažnu osnovu za nastavak školovanja i otvaraju vrata fakulteta u Srbiji i širom sveta.</p>
      </div>
      <img src={img_3} alt="Get in touch" className="img_prizemlje" ref={imgRef} />
    </section>
  );
}

export default ParallaxSection_8;
