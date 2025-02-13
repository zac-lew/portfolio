import React from "react";
import "./Intro.scss";
import Profile from "../Assets/profile.png";
import MobileProfile from "../Assets/mobileprofile.png";
import useWindowDimensions from "../Assets/CustomHooks/useWindowDimensions";

const Intro = ({ isMobile }) => {
  const { height, width } = useWindowDimensions();
  return (
    <div className={isMobile ? "mobile-intro" : "desktop-intro"} style={{ height: height, width: width }}>
      <i class="fas fa-code icon" />
      <div className="intro-header top-layer">
        <h1 className="name">Zac Lew</h1>
        <h3 className="role">Full Stack Developer</h3>
      </div>
      <div className="profile top-layer">
        <ProfileSection isMobile={isMobile} height={height} />
      </div>
      <div className="intro-description top-layer">
        <h2 className="who">Who am I?</h2>
        <div className="bio">
        My name is Zac and I'm a full-stack engineer with over {new Date().getFullYear() - 2019} years of experience and expertise in supply chain optimization, financial technology, and
web development. Skilled in designing dynamic systems, leading projects, and working with technologies like React, Ruby,
Node.js, and Java to deliver efficient, scalable solutions.
        </div>
      </div>
    </div>
  );
};

const ProfileSection = ({ isMobile, height }) =>
  isMobile ? (
    <img src={MobileProfile} style={{ height: height / 3 }} />
  ) : (
    <img src={Profile} style={{ height: height / 3 }} />
  );

export default Intro;
