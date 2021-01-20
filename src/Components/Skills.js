import React from "react";
import "./Skills.scss";
import {
  JS,
  HTML5,
  CSS3,
  SASS,
  ReactJs,
  Redux,
  PS,
  Matlab,
  Node,
  MySQL,
  Java,
  C,
  Git,
  Heroku,
  Angular,
  Jasmine,
  PowerBI,
  Qlikview,
  Powershell,
} from "../Assets/Logos";

const Skills = ({ isMobile }) => {
  return (
    <div className="skills">
      <h1>
        <span>Skills</span>
      </h1>
      <div className="body-text">
        I've spent plenty of time at my computer over the last few years, here's a few of the things I've mucked around
        with:
      </div>
      <div className="skill-card-container">
        <div className="skill-card">
          <div className={isMobile ? "mobile-card-header" : "card-header"}>
            <h2>Basic Web Technologies</h2>
          </div>
          <div className="skill-section front-end">
            <div>
              <img src={HTML5}></img>
              <div>HTML5</div>
            </div>
            <div>
              <img src={CSS3}></img>
              <div>CSS3</div>
            </div>
            <div>
              <img src={JS}></img>
              <div>JavaScript</div>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <div className={isMobile ? "mobile-card-header" : "card-header"}>
            <h2>Frameworks & Libraries</h2>
          </div>
          <div className="skill-section back-end">
            <div>
              <img src={ReactJs}></img>
              <div>React.JS</div>
            </div>
            <div>
              <img src={Angular}></img>
              <div>Angular 8</div>
            </div>
            <div>
              <img src={Redux}></img>
              <div>Redux</div>
            </div>
            <div>
              <img src={SASS}></img>
              <div>SASS</div>
            </div>
            <div>
              <img src={Node}></img>
              <div>Node.JS</div>
            </div>
            <div>
              <img src={Jasmine}></img>
              <div>Jasmine</div>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <div className={isMobile ? "mobile-card-header" : "card-header"}>
            <h2>Data Management & Modelling</h2>
          </div>
          <div className="skill-section other">
            <div>
              <img src={MySQL}></img>
              <div>MySQL</div>
            </div>
            <div>
              <img src={Matlab}></img>
              <div>MATLAB</div>
            </div>
            <div>
              <img src={PowerBI}></img>
              <div>PowerBI</div>
            </div>
            <div>
              <img src={Qlikview}></img>
              <div>Qlikview</div>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <div className={isMobile ? "mobile-card-header" : "card-header"}>
            <h2>Other Languages & Tools</h2>
          </div>
          <div className="skill-section other">
            <div>
              <img src={Java}></img>
              <div>Java</div>
            </div>
            <div>
              <img src={C}></img>
              <div>C++</div>
            </div>
            <div>
              <img src={PS}></img>
              <div>Photoshop</div>
            </div>
            <div>
              <img src={Powershell}></img>
              <div>Powershell</div>
            </div>
            <div>
              <img src={Git}></img>
              <div>Git</div>
            </div>
            <div>
              <img src={Heroku}></img>
              <div>Heroku</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
