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
    <div className="individual-project">
      <h2>{project.projectTitle}</h2>
      <img src={project.imageSource} alt={project.projectTitle} />
    </div>
  ));
};

export default Projects;
