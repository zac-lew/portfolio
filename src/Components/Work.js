import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <div className="work">
      <h1>Work and Education</h1>
      <p>
        Through my education and working history I have been lucky enough to
        hone and develop the essential skills needed to thrive under high
        pressure conditions and work well in many different environments.
      </p>
      <div className="box-wrapper">
        <div className="education">
          <h2>University of New South Wales</h2>
          <h3>
            Master of Biomedical Engineering / Bachelor of Mechatronics
            Engineering
          </h3>
          <ul>
            <li>Software development skills</li>
            <li>Web development</li>
            <li>Building and interfacing mechatronic systems</li>
            <li>Research and prototyping biomedical technologies</li>
          </ul>
        </div>
        <div className="work1">
          <h2>Web Developer Intern</h2>
          <h3>Westpac Banking Corporation | 2018 - present</h3>
          <ul>
            <li>Design and development of user interfaces with React.js</li>
            <li>
              Implementation of Restful API's to retrieve and display data
            </li>
            <li>Agile work environment</li>
            <li>Use of Git and project management technologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
