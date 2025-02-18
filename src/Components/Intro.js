import React from "react";
import "./Intro.scss";
import Profile from "../Assets/2025-profile.jpeg";
import MobileProfile from "../Assets/mobileprofile.png";
import useWindowDimensions from "../Assets/CustomHooks/useWindowDimensions";

const Intro = ({ isMobile }) => {
  const { height, width } = useWindowDimensions();
  return (
    <div className={isMobile ? "mobile-intro" : "desktop-intro"} style={{ height: height, width: width }}>
      <TextColumn />
      <ProfileColumn height={height} width={width} />
    </div>
  );
};

const TextColumn = () => (
  <div className="text-column">
    <i class="fas fa-code icon" />
    <div className="name-role top-layer">
      <div><h1 className="name">Zac Lew</h1></div>
      <div><h3 className="role">Full Stack Developer</h3></div>
    </div>
    <div className="intro-description top-layer">
      <h2 className="who">Who am I?</h2>
      <div className="bio">
        My name is Zac and I'm a full-stack engineer with over {new Date().getFullYear() - 2019} years of experience and
        expertise in supply chain optimization, financial technology, and web development. Skilled in designing dynamic
        systems, leading projects, and working with technologies like React, Ruby, Node.js, and Java to deliver
        efficient, scalable solutions.
      </div>
    </div>
  </div>
);

const ProfileColumn = ({ isMobile, height }) =>
  isMobile ? (
    <div>
      <img src={MobileProfile} style={{ height: height / 3 }} />
    </div>
  ) : (
    <div>
      <img src={Profile} style={{ height: height }} />
    </div>
  );

export default Intro;
