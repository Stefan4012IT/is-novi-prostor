import ucasLogo from "../assets/partners/ucas.jpg";
import ministryLogo from "../assets/partners/ministry-of-education.png";
import cambridgeLogo from "../assets/partners/partner-889.png";
import viaAcademicaLogo from "../assets/partners/partner-vaslika.png";
import euLogo from "../assets/partners/eu-co-funded.png";

const partners = [
  { src: ucasLogo, alt: "UCAS" },
  { src: ministryLogo, alt: "Ministry of Education" },
  { src: cambridgeLogo, alt: "Cambridge International Education" },
  { src: viaAcademicaLogo, alt: "VIA Academica" },
  { src: euLogo, alt: "Co-funded by the European Union" },
];

function PartnersSection() {
  return (
    <section className="partners-section" aria-label="Partners">
      <div className="partners-section__grid">
        {partners.map((partner) => (
          <div className="partners-section__item" key={partner.alt}>
            <img src={partner.src} alt={partner.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PartnersSection;
