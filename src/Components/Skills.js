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
  PHP,
  MySQL,
  Java,
  C,
  Git,
  Heroku
} from "../Assets/Logos";
import { Parallax } from "react-scroll-parallax";

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
      <div className="skills-card">
        <Parallax x={[5, -5]} className="parallax-container">
          <div className={isMobile ? "mobile-card-header" : "card-header"}>
            <h2>Front-End</h2>
          </div>
          <div className="skill-section front-end">
            <div>
              <img src={JS}></img>
              <div>JavaScript</div>
            </div>
            <div>
              <img src={HTML5}></img>
              <div>HTML5</div>
            </div>
            <div>
              <img src={CSS3}></img>
              <div>CSS3</div>
            </div>
            <div>
              <img src={ReactJs}></img>
              <div>React.JS</div>
            </div>
            <div>
              <img src={Redux}></img>
              <div>Redux</div>
            </div>
            <div>
              <img src={SASS}></img>
              <div>SASS</div>
            </div>
          </div>
        </Parallax>
        <Parallax className="parallax-container">
          <div className={isMobile ? "mobile-card-header" : "card-header"}>
            <h2>Back-End</h2>
          </div>
          <div className="skill-section back-end">
            <div>
              <img src={Node}></img>
              <div>Node.JS</div>
            </div>
            <div>
              <img src={PHP}></img>
              <div>PHP</div>
            </div>
            <div>
              <img src={MySQL}></img>
              <div>MySQL</div>
            </div>
            <div>
              <img src={Java}></img>
              <div>Java</div>
            </div>
            <div>
              <img src={C}></img>
              <div>C++</div>
            </div>
          </div>
        </Parallax>
        <Parallax x={[-5, 5]} className="parallax-container">
          <div className={isMobile ? "mobile-card-header" : "card-header"}>
            <h2>Other</h2>
          </div>
          <div className="skill-section other">
            <div>
              <img src={Git}></img>
              <div>Git</div>
            </div>
            <div>
              <img src={Heroku}></img>
              <div>Heroku</div>
            </div>
            <div>
              <img src={PS}></img>
              <div>Photoshop</div>
            </div>
            <div>
              <img src={Matlab}></img>
              <div>MATLAB</div>
            </div>
            <div>
              <img src={ReactJs}></img>
              <div>React Native</div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Skills;
