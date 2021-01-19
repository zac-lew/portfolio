import React from "react";
import "./Work.scss";
import { Westpac } from "../Assets/Logos";
import { Parallax } from "react-scroll-parallax";

const Work = ({ isMobile }) => {
  return (
    <div className={isMobile ? "mobile-work work" : "work"}>
      <div className="header">Work</div>
      <p>
        Most of my software development is focussed around front-end web development using the JavaScript framework
        React. This allows me to build interactive web applications and are both aesthetic and functional.
      </p>
      <Parallax>
        <img src={Westpac} className="logo" />
        <div className="title">Junior Developer</div>
        <div className="date">2018 - Current</div>
        <div className="job-body">
          <div className="description">
            <div className="date">Team 1: Financial Markets Technology</div>
            <div className="list">
              <ul>
                <li>Designed and developed user interfaces using React</li>
                <li>Implemented Restful API's to retrieve and display data</li>
                <li>
                  Designed and implemented Redux workflow for management of data within the front-end applications
                </li>
                <li>
                  Completed work efficiently through agile methods, including sprints and standups, while making use of
                  project management tools such as Jira and Confluence
                </li>
                <li>Interfaced with Bitbucket to manage and control code changes.</li>
                <li>Assisted in converting legacy systems from pure JS and Angular.JS to React</li>
                <li>
                  Used Java to develop a tool capable of converting Excel files containing test cases to Jira tickets.
                </li>
              </ul>
            </div>
          </div>
          <div className="tools">
            <div className="date">Team 2: Infrastructure & Asset Management</div>
            <div className="list">
              <ul>
                <li>
                  Worked with custom-designed asset management tools, such as Flexera, to ensure accurate licensing and
                  compliance within the company
                </li>
                <li>Used Powershell to automate the process of checking servers for firewalls.</li>
                <li>
                  Communicated with service owners and external vendors such as IBM, Westpac NZ, and The Mastermind
                  Group
                </li>
                <li>Managed the licensing of server spaces including Hybrid Cloud Services</li>
                <li>
                  Used data management and visualization tools, such as QlikView and PowerBI to produce licensing
                  reports
                </li>
              </ul>
            </div>
          </div>
          <div className="tools">
            <div className="date">Team 3: BT Super - Wealth Management Technology</div>
            <div className="list">
              <ul>
                <li>Designed and developed user interface components using Angular 8.</li>
                <li>Maintained and debugged legacy user interface components using Backbone.js</li>
                <li>Developed a thorough suite of test cases for existing user interface components using Jasmine</li>
                <li>Used agile techniques to complete tasks as assigned by the Scrum Master</li>
              </ul>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Work;
