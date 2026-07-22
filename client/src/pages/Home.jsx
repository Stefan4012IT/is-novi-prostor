import React, {useState, useEffect} from 'react';
import SG_logo from '../assets/SG_logo.svg'

import SectionPrizemlje from '../components/SectionPrizemlje';
import Section_II_sprat from '../components/Section_II_sprat';
import Section_III_sprat from '../components/Section_III_sprat';
import Section_IV_sprat from '../components/Section_IV_sprat';

import Footer from '../components/Footer';
import SectionHero from '../components/SectionHero';
import InfiniteZoneScrollWrapper_II_sprat from '../components/infiniteScroll/2_sprat/InfiniteZoneScrollWrapper_II_sprat';
import InfiniteZoneScrollWrapperPrizemlje from '../components/infiniteScroll/0_prizemlje/InfiniteZoneScrollWrapperPrizemlje';
import InfiniteZoneScrollWrapper_III_sprat from '../components/infiniteScroll/3_sprat/InfiniteZoneScrollWrapper_III_sprat';
import InfiniteZoneScrollWrapper_IV_sprat from '../components/infiniteScroll/4_sprat/InfiniteZoneScrollWrapper_IV_sprat';
import PinnedCtaSectionWrapper from '../components/pinnedCtaSection/pinnedCtaWrapper';
import ParallaxSection8Wrapper from '../components/parallaxSection-8/ParallaxSection8Wrapper';
import ParallaxSection9Wrapper from '../components/parallaxSection-9/ParallaxSection9Wrapper';
import ScrollTrigger from "gsap/ScrollTrigger";
import FloatingWrapper from '../components/floatingImagesSection/FloatingWrapper';
import StackScrollWrapper from '../components/stackScroll/StackScrollWrapper';
import Preloader from '../components/Preloader';
import FooterCtaSection from '../components/FooterCtaSection';
import FormSection from '../components/FormSection';
import TitleRevealHomeHolder from '../components/TitleRevealHomeHolder';
import InfiniteSOSScrollWrapper from '../components/infiniteScrollSOS/InfiniteSOSScrollWrapper';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';



function Home() {
  useEffect(() => {
    setTimeout(() => {
      console.log("🔥 REFRESHING SCROLLTRIGGER");
      ScrollTrigger.refresh();
    }, 1000);
  }, []);
    return (
      <main className="home">
        <Preloader />
        <SectionHero />
        <FormSection eyebrow="Prijavite se odmah" title="Izaberite obrazovanje koje otvara vrata uspešne budućnosti." text="Your child’s future just got more room to grow." />
        
        <TitleRevealHomeHolder />
        <StackScrollWrapper />
        
        <Section_II_sprat />
        <InfiniteSOSScrollWrapper />
        <FormSection eyebrow="Prijavite se odmah" title="Izaberite obrazovanje koje otvara vrata uspešne budućnosti." text="Your child’s future just got more room to grow." className="form-section-2"/>
        
        <PinnedCtaSectionWrapper />
        <ParallaxSection8Wrapper />
        <TestimonialsSection />
        <ParallaxSection9Wrapper />

        <FloatingWrapper />
        <FormSection eyebrow="Prijavite se odmah" title="Izaberite obrazovanje koje otvara vrata uspešne budućnosti." text="Your child’s future just got more room to grow." className="form-section-3" id="prijava-2"/>
        <Footer />
      </main>
    );
  }
  export default Home;
