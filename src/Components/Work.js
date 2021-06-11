import React from "react";
import "./Work.scss";
import ReactCardFlipper from "react-card-flipper";
import workCards from "../Assets/workCards";

const Work = ({ isMobile }) => {
  return (
    <div className={isMobile ? "mobile-work work" : "work"}>
      <h1>
        <span>Work</span>
      </h1>
      <div className="body-text">
        Since 2018 I have worked as a software developer at Westpac. I have had the good fortune of working in a few
        different teams, allowing me to develop my skills in many different areas:
      </div>
      <div className="job-body">{generateWorkCards()}</div>
    </div>
  );
};

const generateWorkCards = () => {
  return workCards.map((workCard, i) => {
    return (
      <ReactCardFlipper
        behavior="hover"
        width="500px"
        height="400px"
        className="outer-card"
        innerCardClass="inner-card">
        <div className="card-title" key={i}>
          <div className="team-number">
            <h3>Team #{workCard.teamNumber}</h3>
          </div>
          <div className="team-title">
            <div>
              <h3>{workCard.teamTitle}</h3>
              <i class={workCard.teamFaIcon + " fas icon"} />
            </div>
          </div>
        </div>
        <div className="job-outline">
          <ul>
            {workCard.teamHighlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      </ReactCardFlipper>
    );
  });
};

export default Work;
