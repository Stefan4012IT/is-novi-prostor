import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ctaImg from "../../assets/international-school-students-960x500.jpg";
import { useLanguage } from "../../i18n/LanguageContext";
import { landingContent } from "../../i18n/landingContent";

gsap.registerPlugin(ScrollTrigger);

function PinnedCtaSection() {
  const { language } = useLanguage();
  const content = landingContent[language].sectionSeven;
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const box = boxRef.current;

    const boxMaxY = section.offsetHeight - box.offsetHeight;

    const ctx = gsap.context(() => {
      // 👇 POMERAJ .floated-box
      gsap.to(box, {
        y: boxMaxY,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${boxMaxY}`,
          scrub: true,
        },
      });

      // 👇 PIN CELE SEKCIJE
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
      });

      // 👇 Parallax za title
      gsap.from(titleRef.current, {
        xPercent: -100,
        opacity: .5,
        scrollTrigger: {
          trigger: section,
          start: "top 100%",
          end: "top 10%",
          scrub: true,
        },
      });

      // 👇 Parallax za text
      gsap.from(textRef.current, {
        y: 500,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 👇 Parallax za sliku
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
            start: "top 75%",
            end: "top 25%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();
  const nextShort = (currentYear + 1).toString().slice(-2);
  const dynamicYears = `${currentYear}/${nextShort}`;
  const schoolName = language === "sr" ? "International Schoola" : "International School";
  const [ctaBefore, ctaAfter] = content.cta.split(schoolName);

  return (
    <section className="section-7" ref={sectionRef}>
      <div className="heading-box">
        <h2 className="title" ref={titleRef}>
          <span style={{ color: "#f2d4b0" }}>{content.titleAccent}</span>{" "}
          {language === "sr" ? (
            <>{content.titleBeforeBreak}<br />{content.titleAfterBreak}</>
          ) : (
            content.titleEnd
          )}
        </h2>
      </div>


      <img src={ctaImg} alt="Kids" className="kids-img" ref={imgRef} />

      <div className="text" ref={textRef}>
        {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <div className="btn-box">
        <div className="floated-box" ref={boxRef}></div>
        <div className="cta-text">
          <h4>{ctaBefore}<strong>{schoolName}</strong>{ctaAfter}</h4>
          <a href="https://www.international-school.edu.rs/registration/">{content.enrollment.replace("{years}", dynamicYears)}</a>
        </div>
      </div>
    </section>
  );
}

export default PinnedCtaSection;
