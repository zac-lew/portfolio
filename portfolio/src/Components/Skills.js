import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <p>
        Through my education, work and years of experience experimenting with
        different web development technologies, I have managed to accumulate a
        handy number of both technical and professional skills.
      </p>
      <div className="skills-card">
        <div className="technical-skills">
          <span className="icons">
            <i class="fas fa-code" />
          </span>
          <h2>Technical Skills</h2>
          <ul className="single-skills-card">
            <li>JavaScript (ES6)</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>Bootstrap</li>
            <li>Source Control (Git)</li>
          </ul>
        </div>
        <div className="professional-skills">
          <span className="icons">
            <i class="fas fa-briefcase" />
          </span>
          <h2>Professional Skills</h2>
          <ul className="single-skills-card">
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Communication</li>
            <li>Agility</li>
            <li>Critical Thinking</li>
            <li>Time Management</li>
            <li>Goal Orientation</li>
            <li>Attention to Detail</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
