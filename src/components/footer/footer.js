import React from "react";
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="footer-creator">
        <h5>Designed & Developed By Fischer Davis</h5>
      </div>

      <div className="footer-links">
        <a href="https://github.com/fischerdavis">
          <img className="footer-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github"/>
        </a>
        <a href="https://linkedin.com/in/fischerdavis">
          <img className="footer-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;