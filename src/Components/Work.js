import React from "react";
import "./Work.scss";
import { Westpac } from "../Assets/Logos";

const Work = ({ isMobile }) => {
  return (
    <div className={isMobile ? "mobile-work work" : "work"}>
      <div className="header">Work</div>
      <p>
        Most of my software development is focussed around front-end web development using the JavaScript framework
        React. This allows me to build interactive web applications and are both aesthetic and functional.
      </p>
      <div className="job-container">
        <img src={Westpac} className="logo" />
        <div className="title">Junior Developer</div>
        <div className="date">2018 - Current</div>
        <div className="job-body">
          <div className="description">
            <div className="date">The Role</div>
            <div className="list">
              <ul>
                <li>Design and development of user interfaces with React.js</li>
                <li>Implementation of Restful API's to retrieve and display data</li>
                <li>Agile work environment</li>
                <li>Use of Git and project management technologies</li>
              </ul>
            </div>
          </div>
          <div className="tools">
            <div className="date">Typical Development Stack</div>
            <div className="list">
              <ul>
                <li>Front End: React.js</li>
                <li>Back End: Java</li>
                <li>Source Control: BitBucket (Git)</li>
                <li>Unit Testing: Jest</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
