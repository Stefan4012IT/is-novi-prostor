import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img_1 from "../../assets/international-school-map.jpg";
import { useLanguage } from "../../i18n/LanguageContext";
import { landingContent } from "../../i18n/landingContent";

gsap.registerPlugin(ScrollTrigger);

function ParallaxSection_9() {
  const { language } = useLanguage();
  const content = landingContent[language].sectionNine;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef_1 = useRef(null);
  const textRef_2 = useRef(null);
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

      gsap.from(textRef_1.current, {
        y: -100,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: textRef_1.current,
          start: "top 100%",
          end: "top 60%",
          scrub: true,
        },
      });



      gsap.from(textRef_2.current, {
        y: -100,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: textRef_2.current,
          start: "top 100%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.fromTo(imgRef.current,
        { scale: .2, opacity: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-9" ref={sectionRef}>
      <h2 className="title" ref={titleRef}>{content.title}</h2>
      <div className="text_1" ref={textRef_1}>
        <div className="contact-box">
        
          <div>
            <p>{content.labels.address}</p>
            <span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=23%20Terazije%2C%20Beograd"
                target="_blank"
                rel="noreferrer"
              >
                23 Terazije, Beograd
              </a>
            </span>
          </div>

          <div>
            <p>{content.labels.phone}</p>
            <span><a href="tel:+381114011220">+381 (0)11 4011 220</a></span>
          </div>

          <div>
            <p>{content.labels.website}</p>
            <span><a href="https://www.international-school.edu.rs/">www.international-school.edu.rs</a></span>
          </div>

          <div>
            <p>{content.labels.info}</p>
            <span><a href="mailto:info@iss.edu.rs">info@iss.edu.rs</a></span>
          </div>

          <div>
            <p>{content.labels.admission}</p>
            <span><a href="mailto:admission@iss.edu.rs">admission@iss.edu.rs</a></span>
          </div>
        </div>

  
      </div>
      <div className="text_2">
        <div className="line" ref={textRef_2}></div>
        <p ref={textRef_2}>{content.closing}</p>
      </div>
      <img src={img_1} alt="Get in touch" className="img_gttouch" ref={imgRef} />
    </section>
  );
}

export default ParallaxSection_9;
