import React from "react";
import "./about.scss";

import programmer from '../../assets/home-main.541f8179.svg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-info">
        <h1>Hey,</h1>
        <h2>
          My name is Fischer Davis, and I'm a fullstack developer and life long learner.
          I currently work in the IoT Industry where I help to make warehouses just a little bit smarter.
          I have experience building fullstack applications using React, .NET, and MSSQL.
        </h2>
      </div>
      <div className="about-picture">
        <img className="pic" src={programmer} alt="Programmer" />
      </div>
    </div>
  );
};

export default About;
