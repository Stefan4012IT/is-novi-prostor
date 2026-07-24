import { useLanguage } from "../i18n/LanguageContext";
import { landingContent } from "../i18n/landingContent";
import brainfinityLogo from "../assets/awards/brainfinity.jpg";
import ecoSchoolLogo from "../assets/awards/eco-school.jpg";
import educationHeroLogo from "../assets/awards/education-hero.jpg";
import worldEducationSummitLogo from "../assets/awards/world-education-summit.jpg";
import globalSmartEducationLogo from "../assets/awards/global-smart-education.jpg";
import centuryLearningLogo from "../assets/awards/21st-century-learning.jpg";

const awards = [
  { src: brainfinityLogo, alt: "Brainfinity Problem Solving School" },
  { src: ecoSchoolLogo, alt: "International Eco-Schools" },
  { src: educationHeroLogo, alt: "Education Hero of the Year Gold Globee Winner" },
  { src: worldEducationSummitLogo, alt: "World Education Summit" },
  { src: globalSmartEducationLogo, alt: "Global Smart Education Innovation Prize" },
  { src: centuryLearningLogo, alt: "21st Century Learning" },
];

function AwardsSection() {
  const { language } = useLanguage();
  const content = landingContent[language].awards;

  return (
    <section className="awards-section" aria-labelledby="awards-title">
      <div className="awards-section__intro">
        <h3 id="awards-title">{content.title}</h3>
        <p className="awards-section__text">{content.text}</p>
      </div>

      <div className="awards-section__grid">
        {awards.map((award) => (
          <article className="awards-section__card" key={award.alt}>
            <img src={award.src} alt={award.alt} loading="lazy" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default AwardsSection;
