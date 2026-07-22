import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img_3 from "../../assets/savremena_novi_prostor-1.png";

gsap.registerPlugin(ScrollTrigger);


function ParallaxSection8Mobile() {

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        xPercent: -90,
        opacity: .5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 25%",
          end: "bottom 70%",
          scrub: true,
        },
      });

      gsap.from(textRef.current, {
        y: 300,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 25%",
          end: "bottom 70%",
          scrub: true,
        },
      });

      gsap.fromTo(
        imgRef.current,
        { y: -150, scale: .1, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 25%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-8 mobile" ref={sectionRef}>
      <div className="heading-box">
        <h2 className="title" ref={titleRef}>
          <>Cambridge obrazovanje<br />koje otvara vrata<br />sveta</>
        </h2>
      </div>

      <div className="text" ref={textRef}>
        <p>Kao akreditovana Cambridge International School, International School pruža učenicima obrazovanje zasnovano na međunarodno priznatim IGCSE, AS i A Level programima. Nastava na engleskom jeziku, pažljivo odabran izbor predmeta i Cambridge kvalifikacije pružaju snažnu osnovu za nastavak školovanja i otvaraju vrata fakulteta u Srbiji i širom sveta.</p>
      </div>

      <img src={img_3} alt="Get in touch" className="sos_majka_dete" ref={imgRef} />
    </section>
  );
}

export default ParallaxSection8Mobile;
