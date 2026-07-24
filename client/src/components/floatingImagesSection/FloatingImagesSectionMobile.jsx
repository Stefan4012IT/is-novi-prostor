import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scheduleScrollTriggerRefresh } from "../../utils/scrollTriggerRefresh";

import img_1 from "../../assets/floating/international-school/international-school-floating-01.png";
import img_2 from "../../assets/floating/international-school/international-school-floating-02.png";
import img_3 from "../../assets/floating/international-school/international-school-floating-03.png";
import img_4 from "../../assets/floating/international-school/international-school-floating-04.png";
import img_5 from "../../assets/floating/international-school/international-school-floating-05.png";
import img_6 from "../../assets/floating/international-school/international-school-floating-06.png";
import img_7 from "../../assets/floating/international-school/international-school-floating-07.png";
import img_8 from "../../assets/floating/international-school/international-school-floating-08.png";
import img_9 from "../../assets/floating/international-school/international-school-floating-09.png";

gsap.registerPlugin(ScrollTrigger);

const imgList = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9];

function FloatingImagesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = sectionRef.current.querySelectorAll(".float-image");

      images.forEach((img) => {
        const yFrom = gsap.utils.random(-10, 30);
        const trigger = {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        };

        gsap.fromTo(
          img,
          { y: yFrom },
          {
            y: -yFrom,
            ease: "none",
            scrollTrigger: trigger,
          }
        );

        gsap.timeline({ scrollTrigger: { ...trigger } })
          .to(img, { scale: 1.08, duration: 0.25, ease: "sine.inOut" })
          .to(img, { scale: 1, duration: 0.25, ease: "sine.inOut" })
          .to(img, { scale: 1.06, duration: 0.25, ease: "sine.inOut" })
          .to(img, { scale: 1, duration: 0.25, ease: "sine.inOut" });
      });

      scheduleScrollTriggerRefresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="floating-images-section">
      {imgList.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`floating-${i}`}
          className={`float-image float-image--${i + 1}`}
        />
      ))}
    </section>
  );
}

export default FloatingImagesSection;
