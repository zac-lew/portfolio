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
        <h3 className="role">Software Engineer & Web Developer</h3>
      </div>
      <div className="profile top-layer">
        <ProfileSection isMobile={isMobile} height={height} />
      </div>
      <div className="intro-description top-layer">
        <h2 className="who">Who am I?</h2>
        <div className="bio">
          My name is Zac and I'm a software developer at{" "}
          <a href="https://www.westpac.com.au" target="_blank">
            Westpac
          </a>
          . I build elegantly simple and beautiful websites and applications that are accessible and responsive.
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
