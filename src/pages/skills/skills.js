import React from "react";
import "./skills.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { skillsList } from "./skillsList";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1>Tech</h1>
      <div className="skills-items">

        {skillsList.map((item, index) => (
          <OverlayTrigger
            key={index}
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                Tooltip on <strong>{item.name}</strong>.
              </Tooltip>
            }
          >
            <img className="icon" src={item.link} alt={item.name} />
          </OverlayTrigger>
        ))}
      </div>
    </div>
  );
};

export default Skills;
