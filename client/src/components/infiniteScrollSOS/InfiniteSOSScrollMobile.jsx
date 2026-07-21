import { useLayoutEffect, useRef, useState } from "react";

function InfiniteSOSScrollMobile({ items = [] }) {
  const wrapperRef = useRef(null);
  const [activeBg, setActiveBg] = useState(items[0]?.bgColor || "#354180");

  useLayoutEffect(() => {
    if (!wrapperRef.current || !items.length) return;

    const blocks = wrapperRef.current.querySelectorAll(".zone-block-mobile");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting && items[index]) {
            setActiveBg(items[index].bgColor);
          }
        });
      },
      {
        root: null,
        threshold: 0.45,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    blocks.forEach((block) => observer.observe(block));

    return () => {
      blocks.forEach((block) => observer.unobserve(block));
      observer.disconnect();
    };
  }, [items]);

  return (
    <section
      ref={wrapperRef}
      className="infinite-sos-scroll-wrapper mobile"
      style={{ "--active-bg-sos": activeBg }}
    >
      <div className="color-box" />
      <div className="zone-content">
        <div className="zone-texts-sos-mobile">
          {items.map((item, index) => (
            <div
              key={index}
              className="zone-block-mobile"
              data-index={index}
            >
              <div className="zone-text-sos-mobile">
                <div className="heading-box">
                  {item.subtitle && <h4>{item.subtitle}</h4>}
                  {item.title && <h2>{item.title}</h2>}
                </div>

                <p>{item.text}</p>

                {item.list && (
                  <div className="list">
                    <div className="povrsina">
                      <p>površina</p>
                      <span>{item.list[0]}</span>
                    </div>
                    <div className="tip">
                      <p>tip</p>
                      <span>{item.list[1]}</span>
                    </div>
                    <div className="koriscenje">
                      <p>korišćenje</p>
                      <span>{item.list[2]}</span>
                    </div>
                  </div>
                )}
              </div>

              {item.image && (
                <div className="zone-image-box-mobile">
                  <img
                    src={item.image}
                    alt={`SOS zone ${index + 1}`}
                    className="zone-image-mobile"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="zone-background" />
      </div>
    </section>
  );
}

export default InfiniteSOSScrollMobile;
