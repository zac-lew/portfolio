import React from "react";
import "./Projects.scss";
import projectsList from "../Assets/Projects/projectData";
import useWindowDimensions from "../Assets/CustomHooks/useWindowDimensions";

const Projects = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div className="desktop-projects">
      <h1>
        <span>Projects</span>
      </h1>
      <div className="body-text">Here are a few of the projects I've worked on:</div>
      <div className="projects">{generateProjects(projectsList, width)}</div>
      <div className="divider" />
    </div>
  );
};

const generateProjects = (projectsList, width) => {
  return projectsList.map((project, i) => (
    <div
      className="individual-project"
      style={{
        backgroundImage: "url(" + project.imageSource + ")",
        height: calculateProjectHeight(width),
        width: width > 1100 ? "48%" : "98%",
      }}
      key={i}>
      <div className="project-description">
        <div className="hover">
          <div className="inner-hover">
            <div>
              <h2 style={{ fontSize: "35px" }}>{project.projectTitle}</h2>
            </div>
            <div>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

const calculateProjectHeight = (width) => {
  const widthPercentage = width < 1100 ? 0.9 : 0.44;
  return (width * widthPercentage) / 1.92;
};

const calculateFontSize = (width) => {
  const widthPercentage = width < 1100 ? 0.9 : 0.44;
  console.log(widthPercentage);
  return 0;
};

export default Projects;
