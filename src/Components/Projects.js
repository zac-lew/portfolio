import React from "react";
import "./Projects.scss";
import projectsList from "../Assets/Projects/projectData";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>
        <span>Projects</span>
      </h1>
      <div className="body-text">Here are a few of the projects I've worked on:</div>
      <div className="projects">{generateProjects(projectsList)}</div>
    </div>
  );
};

const generateProjects = (projectsList) => {
  return projectsList.map((project, i) => (
    <div className="individual-project" style={{ backgroundImage: "url(" + project.imageSource + ")" }} key={i}>
      <div className="project-description">
        <div className="hover">
          <h2>{project.projectTitle}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  ));
};

export default Projects;
