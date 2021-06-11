import React from "react";
import skillsData from "../Assets/skillsData";
import "./Skills.scss";

const Skills = ({ isMobile }) => {
  return (
    <div className={isMobile ? "mobile-skills" : "desktop-skills"}>
      <h1>
        <span>Skills</span>
      </h1>
      <div className="body-text">
        I've spent plenty of time at my computer over the last few years, here's a few of the things I've mucked around
        with:
      </div>
      <div className="skills-display">{generateSkillsDisplay()}</div>
      <div className="divider" />
    </div>
  );
};

const generateSkillsDisplay = () => {
  return skillsData.map((skill, i) => {
    return (
      <div className={"skill-topic " + skill.skillsTitle.toLocaleLowerCase()}>
        <h3 className="skill-title">{skill.skillsTitle}:</h3>
        <i class={skill.skillsIcon + " fas icon"} />
        <p className="skill-description">{skill.skillsDescription}</p>
        <h4>Tools:</h4>
        <ul className="skill-list">
          {skill.skillsList.map((skillItem, i) => (
            <li key={i}>{skillItem}</li>
          ))}
        </ul>
      </div>
    );
  });
};

export default Skills;
