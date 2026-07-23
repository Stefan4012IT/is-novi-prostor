import { useEffect, useRef } from "react";
import gsap from "gsap";

function RotatingWords({ words = [], className = "" }) {
  const wordsRef = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const elements = wordsRef.current.filter(Boolean);
    const total = elements.length;

    if (!total) {
      return undefined;
    }

    // Postavi početne pozicije – samo prvi je vidljiv (y: 0), ostali ispod (y: 100%)
    gsap.set(elements, { yPercent: 100, opacity: 0 });
    gsap.set(elements[0], { yPercent: 0, opacity: 1 });

    // Jedan timeline upravlja celim krugom. Time se pri re-renderu ne
    // ostavljaju stare rekurzivne animacije da pomeraju iste elemente.
    const timeline = gsap.timeline({ repeat: -1 });

    elements.forEach((currentEl, index) => {
      const nextEl = elements[(index + 1) % total];

      timeline.to(currentEl, {
        yPercent: -120,
        duration: 1,
        ease: "power2.inOut",
      })
        .set(currentEl, { yPercent: 100, opacity: 0 }) // odmah ga pošalji nazad ispod
        .to(
          nextEl,
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "<" // startuje istovremeno sa prethodnim .to
        );
    });

    timelineRef.current = timeline;

    return () => {
      timeline.kill();
      if (timelineRef.current === timeline) {
        timelineRef.current = null;
      }
    };
  }, [words]);

  return (
    <div className={`rotating-words ${className}`}>
      <h2 className="new">NEW:</h2>
      {words.map((text, i) => (
        <h2
          key={i}
          ref={(el) => (wordsRef.current[i] = el)}
          className="rotate"
          style={{
            position: "absolute",
            top: 0,
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </h2>
      ))}
    </div>
  );
}

export default RotatingWords;
