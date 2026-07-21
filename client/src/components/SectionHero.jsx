import React, { useState } from "react";
import isGrb from "../assets/is_grb.svg";
import intro_img_1 from "../assets/hero/intro_sos_1.jpg";
import intro_img_2 from "../assets/hero/intro_sos_2.jpg";
import intro_img_3 from "../assets/hero/intro_sos_3.jpg";
import intro_img_4 from "../assets/hero/intro_sos_4.jpg";
import ministarstvoProsvet from "../assets/ministarstvo-prosvet.png";
import cambridgeBlack from "../assets/cambridge_black.png";
import sos_novi_prostor_video from "../assets/hero/sos_novi_prostor_final_720p_30fr.mov";

import RotatingWords from "./RotatingWords";

const SectionHero = () => {
  const [activeImage, setActiveImage] = useState(null);

  const heroImages = [
    { src: intro_img_1, alt: "Savremena novi prostor 1" },
    { src: intro_img_2, alt: "Savremena novi prostor 2" },
    { src: intro_img_3, alt: "Savremena novi prostor 3" },
    { src: intro_img_4, alt: "Savremena novi prostor 4" },
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

      <div className="hero--title-right">
        <h1>A SPACE FOR<br />THEIR NEXT CHAPTER</h1>
      </div>

      <div className="hero--second-title-line">
        <div className="hero--title-left">
          <RotatingWords
            words={[
              "uspesi",
              "ideje",
              "uspomene",
              "projekti",
              "prostor",
              "pobede",
              "inovacije",
            ]}
          />
          <video
            src={sos_novi_prostor_video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>

        <div className="hero--paragraph-text">
          <h3>
            A new address shaped around secondary school life
          </h3>
          <p>
            International School Secondary dobija svoj prostor na novoj adresi
            na Terazijama, u srcu Beograda, oblikovan prema ritmu i potrebama
            srednjoškolaca. Na 1.300 m², sa 17 savremeno opremljenih učionica
            i velikim amfiteatrom, nastava je osmišljena za aktivan rad,
            različite grupe i celovito iskustvo učenja. Mesto za učenje,
            stvaranje prijateljstava, nove ideje i sve što dolazi.
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
