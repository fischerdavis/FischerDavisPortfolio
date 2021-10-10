import React from "react";
import "./contact.scss";
import { BsGithub, BsLinkedin, FaFileCsv, GrDocumentCsv } from "react-icons/all";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <BsGithub />
      <BsLinkedin />
      <FaFileCsv />
    </div>
  );
};

export default Contact;
