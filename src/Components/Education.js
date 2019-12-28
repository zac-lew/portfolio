import React from "react";
import "./Education.scss";

const Education = () => {
  return (
    <div className="education">
      <div className="header">Education</div>
      <p>
        Through my education and working history I have been lucky enough to hone and develop the essential skills
        needed to thrive under high pressure conditions and work well in many different environments.
      </p>
      <div className="box-wrapper">
        <div className="work1">
          <h2>Master of Biomedical Engineering</h2>
          <i class="fas fa-graduation-cap icon" />
          <h3>University of New South Wales</h3>
          <h4>2015 - 2019</h4>
          <ul>
            <li>Research and prototyping biomedical technologies</li>
            <li>Apply engineering analysis and techniques to problems in medicine and life sciences</li>
            <li>Develop systems to maintain and enhance life</li>
          </ul>
        </div>
        <div className="work1">
          <h2>Bachelor of Mechatronic Engineering</h2>
          <i class="fas fa-graduation-cap icon" />
          <h3>University of New South Wales</h3>
          <h4>2015 - 2019</h4>
          <ul>
            <li>Development of autonomous systems</li>
            <li>Thorough knowledge of industrial automation</li>
            <li>Design and development of web technologies</li>
            <li>Fundamental knowledge of computing systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
