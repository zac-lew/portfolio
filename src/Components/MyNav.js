import React from "react";
import "./MyNav.scss";

const MyNav = ({ scrollTo, leadershipRef, headerRef }) => {
  return (
    <div className="nav-wrapper" ref={headerRef}>
      <div className="logo">
        <i class="fas fa-code icon" />
      </div>
      <div className="nav-headers">
        <div>About Me</div>
        <div>|</div>
        <div onClick={() => scrollTo(leadershipRef.current)}>Skills</div>
        <div>|</div>
        <div>Work</div>
        <div>|</div>
        <div>Projects</div>
        <div>|</div>
        <div>Education</div>
        <div>|</div>
        <div>Contact Me</div>
      </div>
    </div>
  );
};

export default MyNav;
