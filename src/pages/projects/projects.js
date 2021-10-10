import React from "react";
import "./projects.scss";
import { projectsList } from "./projectList";
import { Button, Card } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="card-container">
        {projectsList.map((project, index) => (
          <Card className="cards" style={{ width: '18rem' }} key={index}>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <p>{project.description}</p>
              <p>{project.techUsed}</p>
              <a href={project.link}><Button variant="primary">Link</Button></a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
