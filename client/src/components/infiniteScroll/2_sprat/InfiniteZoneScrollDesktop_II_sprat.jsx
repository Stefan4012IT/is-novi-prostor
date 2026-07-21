import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function InfiniteZoneScrollSprat({ zones = [] }) {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [activeBg, setActiveBg] = useState("#354180");
  

  

  useEffect(() => {
    zones.forEach((zone) => {
      zone.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  useEffect(() => {
    // Postavi prvu sliku odmah na load
    if (imageRef.current) {
      imageRef.current.src = zones[0].images[0];
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      zones.forEach((zone, zoneIndex) => {
        zone.text.forEach((_, textIndex) => {
          const triggerEl = wrapperRef.current?.querySelector(
            `.zone-text-II-sprat[data-zone='${zoneIndex}'][data-index='${textIndex}']`
          );

          const fadeImage = (newSrc) => {
            if (!imageRef.current) return;
            imageRef.current.classList.add("fade-in");
            setTimeout(() => {
              imageRef.current.src = newSrc;
              imageRef.current.classList.remove("fade-in");
            }, 100);
          };

          ScrollTrigger.create({
            trigger: triggerEl,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              fadeImage(zone.images[textIndex]);
              setActiveBg(zone.bgColor);
              wrapperRef.current
                ?.querySelectorAll(".zone-text-II-sprat")
                .forEach((el) => el.classList.remove("active-II-sprat"));
              triggerEl?.classList.add("active-II-sprat");
            },
            onEnterBack: () => {
              fadeImage(zone.images[textIndex]);
              setActiveBg(zone.bgColor);
              wrapperRef.current
                ?.querySelectorAll(".zone-text-II-sprat")
                .forEach((el) => el.classList.remove("active-II-sprat"));
              triggerEl?.classList.add("active-II-sprat");
            },
          });
        });
      });
    }, wrapperRef);
    return () => {
      ctx.revert(); // ⬅ obavezno
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="infinite-zone-II-sprat-wrapper"
      style={{ "--active-bg-II-sprat": activeBg }}
    >
      <div className="color-box"></div>
      <div className="zone-content">
        <div className="zone-texts-II-sprat">
          {zones.map((zone, zoneIndex) =>
            zone.text.map((txt, i) => (
              <div
                key={`${zoneIndex}-${i}`}
                className={`zone-text-II-sprat ${i === 0 ? "zone-text-primary" : "zone-text-secondary"}`}
                data-zone={zoneIndex}
                data-index={i}
              >
                <div className="heading-box">
                  {txt.subtitle && <h4>{txt.subtitle}</h4>}
                  {txt.title && <h2>{txt.title}</h2>}
                </div>
                <p>{txt.text}</p>
                {txt.list && (
                  <div className="list">
                    <div className="povrsina"><p>Površina:</p><span>{txt.list[0]}</span></div>
                    <div className="tip"><p>Tip:</p><span>{txt.list[1]}</span></div>
                    <div className="koriscenje"><p>Korišćenje:</p><span>{txt.list[2]}</span></div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        <div className="zone-image-box">
          <img ref={imageRef} alt="Zone preview" loading="lazy" />
        </div>
        <div className="zone-background"></div>
      </div>
    </section>
  );
}

export default InfiniteZoneScrollSprat;
