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
            <div className="icon-container">
              <div className="icon">
                <img src={HTML5}></img>
              </div>
              <div className="title">HTML5</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={CSS3}></img>
              </div>
              <div className="title">CSS3</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={JS}></img>
              </div>
              <div className="title">JavaScript</div>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <div className={isMobile ? "mobile-card-header" : "card-header"}>
            <h2>Frameworks & Libraries</h2>
          </div>
          <div className="skill-section back-end">
            <div className="icon-container">
              <div className="icon">
                <img src={ReactJs}></img>
              </div>
              <div className="title">React.JS</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={Angular}></img>
              </div>
              <div className="title">Angular 8</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={Redux}></img>
              </div>
              <div className="title">Redux</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={SASS}></img>
              </div>
              <div className="title">SASS</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={Node}></img>
              </div>
              <div className="title">Node.JS</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={Jasmine}></img>
              </div>
              <div className="title">Jasmine</div>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <div className={isMobile ? "mobile-card-header" : "card-header"}>
            <h2>Data Management & Modelling</h2>
          </div>
          <div className="skill-section other">
            <div className="icon-container">
              <div className="icon">
                <img src={MySQL}></img>
              </div>
              <div className="title">MySQL</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={Matlab}></img>
              </div>
              <div className="title">MATLAB</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={PowerBI}></img>
              </div>
              <div className="title">PowerBI</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={Qlikview}></img>
              </div>
              <div className="title">Qlikview</div>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <div className={isMobile ? "mobile-card-header" : "card-header"}>
            <h2>Other Languages & Tools</h2>
          </div>
          <div className="skill-section other">
            <div className="icon-container">
              <div className="icon">
                <img src={Java}></img>
              </div>
              <div className="title">Java</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={C}></img>
              </div>
              <div className="title">C++</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={PS}></img>
              </div>
              <div className="title">Photoshop</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={Powershell}></img>
              </div>
              <div className="title">Powershell</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={Git}></img>
              </div>
              <div className="title">Git</div>
            </div>
            <div className="icon-container">
              <div className="icon">
                <img src={Heroku}></img>
              </div>
              <div className="title">Heroku</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
