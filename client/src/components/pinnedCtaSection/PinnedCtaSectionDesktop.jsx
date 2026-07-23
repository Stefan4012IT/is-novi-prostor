import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ctaImg from "../../assets/img_cta_960x500.jpg";

gsap.registerPlugin(ScrollTrigger);

function PinnedCtaSection() {
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

  return (
    <section className="section-7" ref={sectionRef}>
      <div className="heading-box">
        <h2 className="title" ref={titleRef}>
          <span style={{ color: "#f2d4b0" }}>Znanje i podrška</span> za siguran <br className="title-break-1920" />korak napred
        </h2>
      </div>


      <img src={ctaImg} alt="Kids" className="kids-img" ref={imgRef} />

      <div className="text" ref={textRef}>
        <p>International School pruža učenicima prostor da istraže svoja interesovanja, izaberu predmete koji odgovaraju njihovim planovima i postepeno preuzmu veću odgovornost za sopstveno obrazovanje. Uz Cambridge program, ličnog mentora i stručnu podršku pri izboru fakulteta, razvijaju znanje, samostalnost i sigurnost u svoje odluke.</p>
        <p>Međunarodna partnerstva škole dodatno im približavaju studije u inostranstvu kroz direktan kontakt sa predstavnicima univerziteta, posebne prezentacije studijskih programa i pristup stipendijama, pogodnostima pri upisu i finansijskoj podršci.</p>
      </div>

      <div className="btn-box">
        <div className="floated-box" ref={boxRef}></div>
        <div className="cta-text">
          <h4>Pridružite nam se. Postanite deo Savremene zajednice koja raste.</h4>
          <a href="https://www.savremena-gimnazija.edu.rs/prijava/">{`Upis za generaciju ${dynamicYears} je toku →`}</a>
        </div>
      </div>
    </section>
  );
}

export default PinnedCtaSection;
