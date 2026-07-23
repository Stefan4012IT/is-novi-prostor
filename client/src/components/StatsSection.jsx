import { useLanguage } from "../i18n/LanguageContext";
import { landingContent } from "../i18n/landingContent";

function StatsSection() {
  const { language } = useLanguage();
  const content = landingContent[language].stats;

  return (
    <section className="stats-section" id="stats">
      <div className="stats-section__grid">
        {content.items.map((item) => (
          <article className="stats-section__item" key={item.label}>
            <p className="stats-section__value">
              {item.value}<span>{item.suffix || ""}</span>
            </p>
            <p className="stats-section__label">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
