import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scheduleScrollTriggerRefresh } from "../../utils/scrollTriggerRefresh";

gsap.registerPlugin(ScrollTrigger);

function StackScrollMobile({ children }) {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
  
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
  
    return () => {
      window.removeEventListener('resize', setViewportHeight);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;
      const count = panels.length;
      // const scrollLength = window.innerHeight * count;
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const scrollLength = viewportHeight * count;

      panels.forEach((panel, i) => {
        gsap.set(panel, {
          y: i === 0 ? 0 : '100vh',
          x: 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top+=1",
          end: `+=${scrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;

        tl.to(
          panel,
          {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          i
        );
      });

      scheduleScrollTriggerRefresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stack-scroll" ref={containerRef}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`stack-panel panel-${index}`}
          ref={(el) => (panelsRef.current[index] = el)}
        >
          {child}
        </div>
      ))}
    </section>
  );
}

export default StackScrollMobile;
