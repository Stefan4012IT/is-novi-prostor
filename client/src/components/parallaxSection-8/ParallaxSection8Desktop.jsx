import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img_3 from "../../assets/cambridge-international-school.jpg";
import { useLanguage } from "../../i18n/LanguageContext";
import { landingContent } from "../../i18n/landingContent";

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection_8() {
  const { language } = useLanguage();
  const content = landingContent[language].sectionEight;
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
          {language === "en" ? (
            <><span style={{ color: "#f2d4b0" }}>{content.titleAccent}</span> {content.titleLineTwo} {content.titleLineThree}</>
          ) : (
            <><span style={{ color: "#f2d4b0" }}>{content.titleAccent}</span><br />{content.titleLineTwo}<br />{content.titleLineThree}</>
          )}
        </h2>
      </div>
      <div className="text" ref={textRef}>
        <p>{content.text}</p>
      </div>
      <img src={img_3} alt="Get in touch" className="img_prizemlje" ref={imgRef} />
    </section>
  );
}

export default ParallaxSection_8;
