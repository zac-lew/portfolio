import React from "react";
import "./Work.scss";
import workCards from "../Assets/workCards";
import RedbubbleLogo from "../Assets/redbubble-logo.png";
import WestpacLogo from "../Assets/westpac-logo.png";
import useWindowDimensions from "../Assets/CustomHooks/useWindowDimensions";

const Work = ({ isMobile }) => {
  const { height, width } = useWindowDimensions();
  return (
    <div className={isMobile ? "mobile-work work" : "work"}>
      <h1>
        <div className="work-main-title">Work</div>
      </h1>
      <div className="work-subtitle">
        Since 2018 I have worked in various software developement roles, with a combination of back-end, front-end and
        full-stack positions.
      </div>
      <div className="work-main-section">{generateWorkCards(width)}</div>
    </div>
  );
};

const generateWorkCards = (width) => {
  return workCards.map((company) => (
    <div className="company-card">
      <div className="company-header" key={company.companyName}>
        {company.companyName === "Redbubble" ? (
          <img src={RedbubbleLogo} style={{ width: width / 5 }} />
        ) : (
          <img src={WestpacLogo} style={{ width: width / 5 }} />
        )}
        <div className="company-name">
          <h2>
            {company.companyName} | {company.datesActive}
          </h2>
        </div>
      </div>
      <div className="company-roles">
        {company.roles.map((role) => (
          <div className="company-role">
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
