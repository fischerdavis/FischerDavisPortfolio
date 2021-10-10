import React from "react";
import "./contact.scss";

// https://devicon.dev/

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Links</h1>
      <a href="https://github.com/fischerdavis">
        <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github"/>
      </a>
      <a href="https://linkedin.com/in/fischerdavis">
        <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn"/>
      </a>
    </div>
  );
}

export default Contact;
