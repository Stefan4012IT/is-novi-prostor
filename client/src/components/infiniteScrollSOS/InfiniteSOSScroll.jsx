import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function InfiniteSOSScroll({ items = [] }) {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [activeBg, setActiveBg] = useState(items[0]?.bgColor || "#354180");

  useEffect(() => {
    items.forEach((item) => {
      if (!item.image) return;
      const img = new Image();
      img.src = item.image;
    });
  }, [items]);

  useEffect(() => {
    if (imageRef.current && items[0]?.image) {
      imageRef.current.src = items[0].image;
    }
  }, [items]);

  useEffect(() => {
    if (!items.length || !wrapperRef.current) return;

    const fadeImage = (newSrc) => {
      if (!imageRef.current || !newSrc) return;

      imageRef.current.classList.add("fade-in");

      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.src = newSrc;
          imageRef.current.classList.remove("fade-in");
        }
      }, 120);
    };

    const ctx = gsap.context(() => {
      items.forEach((item, index) => {
        const triggerEl = wrapperRef.current?.querySelector(
          `.zone-text-sos[data-index='${index}']`
        );

        if (!triggerEl) return;

        ScrollTrigger.create({
          trigger: triggerEl,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            fadeImage(item.image);
            setActiveBg(item.bgColor);

            wrapperRef.current
              ?.querySelectorAll(".zone-text-sos")
              .forEach((el) => el.classList.remove("active-sos"));

            triggerEl.classList.add("active-sos");
          },
          onEnterBack: () => {
            fadeImage(item.image);
            setActiveBg(item.bgColor);

            wrapperRef.current
              ?.querySelectorAll(".zone-text-sos")
              .forEach((el) => el.classList.remove("active-sos"));

            triggerEl.classList.add("active-sos");
          },
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <section
      ref={wrapperRef}
      className="infinite-sos-scroll-wrapper"
      style={{ "--active-bg-sos": activeBg }}
    >
      <div className="color-box" />
      <div className="zone-content">
        <div className="zone-texts-sos">
          {items.map((item, index) => (
            <div
              key={index}
              className={`zone-text-sos ${index % 2 === 0 ? "is-even" : "is-odd"}`}
              data-index={index}
            >
              <div className="heading-box">
                {item.subtitle && <h4>{item.subtitle}</h4>}
                {item.title && <h2>{item.title}</h2>}
              </div>

              <p>{item.text}</p>

            </div>
          ))}
        </div>

        <div className="zone-image-box">
          <img ref={imageRef} alt="SOS zone preview" loading="lazy" />
        </div>

        <div className="zone-background" />
      </div>
    </section>
  );
}

export default InfiniteSOSScroll;
