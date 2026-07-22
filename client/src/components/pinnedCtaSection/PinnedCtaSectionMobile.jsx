import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import ctaImg from "../../assets/img_cta_960x500.jpg";

gsap.registerPlugin(ScrollTrigger);

function PinnedCtaSectionMobile() {
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
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
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
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaBoxRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-7 mobile" ref={sectionRef}>
      <div className="heading-box">
        <h2 className="title" ref={titleRef}>
          Znanje i podrška za siguran korak napred
        </h2>
      </div>

      <img src={ctaImg} alt="Kids" className="kids-img" />

      <div className="text" ref={bodyTextRef}>
        <p>
          International School pruža učenicima prostor da istraže svoja
          interesovanja, izaberu predmete koji odgovaraju njihovim planovima i
          postepeno preuzmu veću odgovornost za sopstveno obrazovanje. Uz
          Cambridge program, ličnog mentora i stručnu podršku pri izboru
          fakulteta, razvijaju znanje, samostalnost i sigurnost u svoje odluke.
        </p>
        <p>
          Međunarodna partnerstva škole dodatno im približavaju studije u
          inostranstvu kroz direktan kontakt sa predstavnicima univerziteta,
          posebne prezentacije studijskih programa i pristup stipendijama,
          pogodnostima pri upisu i finansijskoj podršci.
        </p>
      </div>

      <div className="btn-box" ref={ctaBoxRef}>
        <div className="cta-text">
          <h4>
            Pridružite nam se. Postanite deo Savremene zajednice koja raste.
          </h4>

          <Link
            to="prijava-2"
            smooth={true}
            duration={700}
            offset={-80}
            className="cta-link"
          >
            {`Upis za generaciju ${dynamicYears} je toku →`}
          </Link>
        </div>

        <div className="floated-box"></div>
      </div>
    </section>
  );
}

export default PinnedCtaSectionMobile;
