import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ctaImg from "../../assets/international-school-students-960x500.jpg";
import { useLanguage } from "../../i18n/LanguageContext";
import { landingContent } from "../../i18n/landingContent";
import { scheduleScrollTriggerRefresh } from "../../utils/scrollTriggerRefresh";

gsap.registerPlugin(ScrollTrigger);

function PinnedCtaSectionMobile() {
  const { language } = useLanguage();
  const content = landingContent[language].sectionSeven;
  const currentYear = new Date().getFullYear();
  const nextShort = (currentYear + 1).toString().slice(-2);
  const dynamicYears = `${currentYear}/${nextShort}`;

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const bodyTextRef = useRef(null);
  const ctaBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        xPercent: -25,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          end: "top 55%",
          scrub: true,
        },
      });

      gsap.from(bodyTextRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bodyTextRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(ctaBoxRef.current, {
        xPercent: -25,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ctaBoxRef.current,
          start: "top 90%",
          end: "top 55%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-7 mobile" ref={sectionRef}>
      <div className="heading-box">
        <h2 className="title" ref={titleRef}>
          <span style={{ color: "#f2d4b0" }}>{content.titleAccent}</span> {content.titleEnd}
        </h2>
      </div>

      <img
        src={ctaImg}
        alt="Kids"
        className="kids-img"
        onLoad={scheduleScrollTriggerRefresh}
      />

      <div className="text" ref={bodyTextRef}>
        {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <div className="btn-box" ref={ctaBoxRef}>
        <div className="cta-text">
          <h4>
            {content.cta}
          </h4>

          <a
            href="https://www.international-school.edu.rs/registration/"
            className="cta-link"
          >
            {content.enrollment.replace("{years}", dynamicYears)}
          </a>
        </div>

        <div className="floated-box"></div>
      </div>
    </section>
  );
}

export default PinnedCtaSectionMobile;
