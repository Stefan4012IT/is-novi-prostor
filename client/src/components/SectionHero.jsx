import React, { useState } from "react";
import isGrb from "../assets/is_grb.svg";
import isProstor1 from "../assets/hero/is_prostor_1.jpg";
import isProstor2 from "../assets/hero/is_prostor_2.jpg";
import isProstor3 from "../assets/hero/is_prostor_3.jpg";
import isProstor4 from "../assets/hero/is_prostor_4.jpg";
import ministarstvoProsvet from "../assets/ministarstvo-prosvet.png";
import cambridgeBlack from "../assets/cambridge_black.png";
import heroVideo from "../assets/hero/international-school-new-space-720p.mov";

import RotatingWords from "./RotatingWords";
import { useLanguage } from "../i18n/LanguageContext";
import { landingContent } from "../i18n/landingContent";

const SectionHero = () => {
  const [activeImage, setActiveImage] = useState(null);
  const { language, setLanguage } = useLanguage();
  const content = landingContent[language].hero;

  const heroImages = [
    { src: isProstor1, alt: "International School prostor 1" },
    { src: isProstor2, alt: "International School prostor 2" },
    { src: isProstor3, alt: "International School prostor 3" },
    { src: isProstor4, alt: "International School prostor 4" },
  ];

  const openModal = (src) => {
    setActiveImage(src);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="hero section-1">
      <div className="logo-box">
        <img src={isGrb} alt="Grb Internacionalne škole" />
      </div>

      <div className="sg_watermark">
        <div className="line_1"></div>
        <div className="square-name">
          <div className="name">
            <h6 className="big">International</h6>
            <h6 className="small">school</h6>
            <div className="accreditation-logos">
              <img src={ministarstvoProsvet} alt="Ministarstvo prosvete" />
              <img src={cambridgeBlack} alt="Cambridge International Education" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__language-switcher" aria-label="Izbor jezika">
        <button
          type="button"
          className={language === "sr" ? "is-active" : ""}
          onClick={() => setLanguage("sr")}
          aria-pressed={language === "sr"}
        >
          SR
        </button>
        <span className="divider">/</span>
        <button
          type="button"
          className={language === "en" ? "is-active" : ""}
          onClick={() => setLanguage("en")}
          aria-pressed={language === "en"}
        >
          EN
        </button>
      </div>

      <div className="hero--title-right">
        <h1>{content.headlineStart}<br />{content.headlineMiddle} <span style={{ color: "#f2d4b0" }}>{content.headlineAccent}</span></h1>
      </div>

      <div className="hero--second-title-line">
        <div className="hero--title-left">
          <RotatingWords
            words={content.rotatingWords}
          />
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>

        <div className="hero--paragraph-text">
          <p className="hero--paragraph-eyebrow">
            1,300 m² for Big Ideas and Even Bigger Achievements
          </p>
          <h3>
            <span style={{ color: "#f2d4b0" }}>{content.eyebrowStart}</span> {content.eyebrowMiddle}{" "}
            <span style={{ color: "#f2d4b0" }}>{content.eyebrowAccent}</span> {content.eyebrowEnd}
          </h3>
          <p>
            {content.text}
          </p>
        </div>
      </div>

      <div className="hero-img">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-img-trigger img-${index + 1}`}
            onClick={() => openModal(image.src)}
            aria-label={`Otvori sliku ${index + 1}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {activeImage && (
        <div className="image-modal" onClick={closeModal}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="image-modal-close"
              onClick={closeModal}
              aria-label="Zatvori prikaz slike"
            >
              ×
            </button>

            <img src={activeImage} alt="Prikaz u punoj veličini" />
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionHero;
