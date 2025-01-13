import React from "react";
import "./Work.scss";
import workCards from "../Assets/workCards";

const Work = ({ isMobile }) => {
  return (
    <div className={isMobile ? "mobile-work work" : "work"}>
      <h1>
        <div className="work-main-title">Work</div>
      </h1>
      <div className="work-subtitle">
        Since 2018 I have worked in various software developement roles, with a combination from back-end, front-end and
        full-stack positions.
      </div>
      <div className="work-main-section">{generateWorkCards()}</div>
    </div>
  );
};

const generateWorkCards = () => {
  return workCards.map((company) => (
    <div className="company-card">
      <div className="company-name" key={company.companyName}>
        <h2>{company.companyName} | {company.datesActive}</h2>
      </div>
      <div className="company-roles">
        {company.roles.map((role) => (
          <div>
            <div className="card-title" key={role.teamTitle}>
              <div className="team-title">
                <div>
                  <h4>{`${role.teamTitle} - ${role.teamRole} (${role.datesActive})`}</h4>
                </div>
              </div>
            </div>
            <div className="job-outline">
              <ul>
                {role.teamHighlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  ));
};

export default Work;
