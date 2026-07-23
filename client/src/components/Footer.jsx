import React from "react";
import logoIS from '../assets/logoes/is_white.png'
import logoCMPN from '../assets/logoes/camb_mpn.png'
import logoMinistarstvo from '../assets/logoes/ministarstvo_logo_wh.webp'
import logoCambridge from '../assets/logoes/cambridge_logo_white.webp'
import { useLanguage } from "../i18n/LanguageContext";
import { landingContent } from "../i18n/landingContent";

const Footer = () => {
  const { language } = useLanguage();
  const content = landingContent[language];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo-left">
          <h4><a href="https://www.international-school.edu.rs/">International School</a></h4>
          <div className="footer-copy">
            <p>&copy; {new Date().getFullYear()} <a href="https://www.international-school.edu.rs/">International School. </a>{content.footer}</p>
          </div>
        </div>
        <div className="footer-logo-rigt">
          <a href="https://www.international-school.edu.rs/">
            <img src={logoIS} alt="International School" className="logo-sg"/>
          </a>
          <img src={logoMinistarstvo} alt="logo-footer-cambridge-ministarstvo-prosvete-i-nauke" className="logo-cmpn"/>
          <img src={logoCambridge} alt="logo-footer-cambridge-ministarstvo-prosvete-i-nauke" className="logo-cmpn"/>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
