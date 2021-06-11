import React from "react";
import educationData from "../Assets/educationData";
import "./Education.scss";

const Education = () => {
  return (
    <div className="education">
      <h1>
        <span>Education</span>
      </h1>
      <div className="body-text">
        Through my education and working history I have been lucky enough to hone and develop the essential skills
        needed to thrive under high pressure conditions and work well in many different environments.
      </div>
      <div className="education-list">{generateEducation()}</div>
    </div>
  );
};

const generateEducation = () => {
  return educationData.map((education, i) => {
    return (
      <div key={i} className="individual-education">
        <h3 className="education-title">{education.educationTitle}</h3>
        <i class="fas fa-graduation-cap icon" />
        <h3 className="uni">University of New South Wales</h3>
        <h4 className="year">2015 - 2019</h4>
        <ul className="education-description">
          {education.educationDescription.map((description, i) => (
            <li>{description}</li>
          ))}
        </ul>
      </div>
    );
  });
};

export default Education;
