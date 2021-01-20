import React from "react";
import "./Work.scss";
import ReactCardFlipper from "react-card-flipper";

const Work = ({ isMobile }) => {
  return (
    <div className={isMobile ? "mobile-work work" : "work"}>
      <h1>
        <span>Work</span>
      </h1>
      <div className="body-text">
        Since 2018 I have worked as a software developer at Westpac. I have had the good fortune of working in three
        different teams, allowing me to develop my skills in many different areas:
      </div>
      <div className="job-body">
        <ReactCardFlipper
          behavior="hover"
          width="400px"
          height="500px"
          className="outer-card"
          innerCardClass="inner-card team1">
          <div className="card-title">
            <div className="team-number">
              <h2>Team 1:</h2>
            </div>
            <div className="team-title">
              <h2>Financial Markets Technology</h2>
              <i class="fas fa-chart-line icon" />
            </div>
          </div>
          <div className="job-outline">
            <ul>
              <li>Designed and developed user interfaces using React.</li>
              <li>Implemented Restful API's to retrieve and display data.</li>
              <li>Designed and implemented Redux workflow for management of data within the front-end applications.</li>
              <li>Interfaced with Bitbucket to manage and control code changes.</li>
              <li>Assisted in converting legacy systems from pure JS and Angular.JS to React.</li>
              <li>
                Used Java to develop a tool capable of converting Excel files containing test cases to Jira tickets.
              </li>
            </ul>
          </div>
        </ReactCardFlipper>
        <ReactCardFlipper
          behavior="hover"
          width="400px"
          height="500px"
          className="outer-card"
          innerCardClass="inner-card team2">
          <div className="card-title">
            <div className="team-number">
              <h2>Team 2:</h2>
            </div>
            <div className="team-title">
              <h2>Infrastructure & Asset Management</h2>
              <i class="fas fa-cogs icon" />
            </div>
          </div>
          <div className="job-outline">
            <ul>
              <li>
                Worked with custom-designed asset management tools, such as Flexera, to ensure accurate licensing and
                compliance within the company.
              </li>
              <li>Used Powershell to automate the process of checking servers for firewalls.</li>
              <li>
                Communicated with service owners and external vendors such as IBM, Westpac NZ, and The Mastermind Group.
              </li>
              <li>Managed the licensing of server spaces including Hybrid Cloud Services.</li>
              <li>
                Used data management and visualization tools, such as QlikView and PowerBI to produce licensing reports.
              </li>
            </ul>
          </div>
        </ReactCardFlipper>
        <ReactCardFlipper
          behavior="hover"
          width="400px"
          height="500px"
          className="outer-card"
          innerCardClass="inner-card team3">
          <div className="card-title">
            <div className="team-number">
              <h2>Team 3:</h2>
            </div>
            <div className="team-title">
              <h2>BT Super - Wealth Management Technology</h2>
              <i class="fas fa-wallet icon" />
            </div>
          </div>
          <div className="job-outline">
            <ul>
              <li>Designed and developed user interface components using Angular 8.</li>
              <li>Maintained and debugged legacy user interface components using Backbone.js.</li>
              <li>Developed a thorough suite of test cases for existing user interface components using Jasmine.</li>
              <li>Used agile techniques to complete tasks as assigned by the Scrum Master.</li>
            </ul>
          </div>
        </ReactCardFlipper>
      </div>
    </div>
  );
};

export default Work;
