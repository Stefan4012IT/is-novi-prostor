import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { getTestimonialsData } from "./testimonialsData";
import { useLanguage } from "../../i18n/LanguageContext";
import { landingContent } from "../../i18n/landingContent";

import img1 from "../../assets/ptice2.svg"


export default function TestimonialsSection() {
  const { language } = useLanguage();
  const content = landingContent[language].testimonials;
  const testimonialsData = getTestimonialsData(language);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonials-section">
    <div className="testimonials-section__background">
        
    </div>
      <div className="testimonials-section__inner">
        <img src={img1} alt="International School ilustracija" className="ptice" />
        <div className="testimonials-section__top">
          <h3 className="testimonials-section__heading">{content.heading}</h3>

          <div className="testimonials-section__nav">
            <button
              type="button"
              className="testimonials-section__arrow testimonials-section__arrow--prev"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label={content.previous}
            >
              &#8249;
            </button>

            <button
              type="button"
              className="testimonials-section__arrow testimonials-section__arrow--next"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label={content.next}
            >
              &#8250;
            </button>
          </div>
        </div>

        <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            speed={700}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
                const realIndex = swiper.realIndex ?? 0;
                setActiveIndex(realIndex);
            }}
            className="testimonials-slider"
            >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <div className="testimonial-card__media">
                  <img src={item.image} alt={item.name} />
                  <div className="testimonial-card__person">
                    <h4>{item.name}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>

                <div className="testimonial-card__content">
                  <h3 className="testimonial-card__title">{item.title}</h3>
                  <p className="testimonial-card__text">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonials-section__bottom">
          <div className="testimonials-section__counter">
            {activeIndex + 1} / {testimonialsData.length}
          </div>

          <div className="testimonials-section__thumbs">
            {testimonialsData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`testimonials-section__thumb ${
                  activeIndex === index ? "is-active" : ""
                }`}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                aria-label={`${content.goTo} ${index + 1}`}
              >
                <img src={item.image} alt={item.name} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
