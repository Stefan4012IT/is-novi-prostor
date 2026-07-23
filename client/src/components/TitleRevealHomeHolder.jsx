import TitleRevealHome from "./TitleRevealHome";
import { useLanguage } from "../i18n/LanguageContext";
import { landingContent } from "../i18n/landingContent";

const TitleRevealHomeHolder = () => {
  const { language } = useLanguage();
  const content = landingContent[language].titleHolder;

  return (
    <div className="title-holder">
        <div className="title">
            <h3>{content.prefix}</h3>
            <TitleRevealHome />
        </div>
        <p className="text">{content.text}</p>
    </div>
  );
};

export default TitleRevealHomeHolder;
