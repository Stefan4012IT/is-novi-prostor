import React from "react";
import logoIS from '../assets/logoes/is_white.png'
import logoCMPN from '../assets/logoes/camb_mpn.png'
import logoMinistarstvo from '../assets/logoes/ministarstvo_logo_wh.webp'
import logoCambridge from '../assets/logoes/cambridge_logo_white.webp'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-logo-left">
          <h4><a href="https://www.savremena-osnovna.edu.rs/">International School</a></h4>
          <div className="footer-copy">
            <p>&copy; {new Date().getFullYear()} <a href="https://www.savremena-osnovna.edu.rs/">International School. </a>Sva prava zadržana.</p>
          </div>
        </div>
        <div className="footer-logo-rigt">
          <a href="https://www.savremena-osnovna.edu.rs/">
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
