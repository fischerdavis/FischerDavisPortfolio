import React from "react";
import "./about.scss";

import programmer from '../../assets/Programmer.svg';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-info-container">
        <div className="about-info">
        <h1>Hey,</h1>
        <h2>
          My name is Fischer Davis, and I'm a fullstack developer and life long learner.
          I currently work in the IoT Industry where I help to make warehouses just a little bit smarter.
          I have experience building fullstack applications using React, .NET, and MSSQL.
        </h2>
        </div>
        <div className="links-info">
          <h4>Socials</h4>
          <img className="about-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"  alt="LinkedIn"/>
          <img className="about-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Github"/>
        </div>
      </div>
      <div className="about-picture">
        <img className="pic" src={programmer} alt="Programmer" />
      </div>
    </div>
  );
};

export default About;
