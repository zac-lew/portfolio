import React from "react";
import "./Intro.scss";
import Profile from "../Assets/profile.png";
import MobileProfile from "../Assets/mobileprofile.png";
import MyNav from "./MyNav";

const Intro = ({ isMobile }) => {
  return (
    <div className="intro">
      <MyNav />
      <div className="name">Zac Lew</div>
      <div className="role">Front-End Web Developer</div>
      {!isMobile ? <img src={Profile} className="profile" /> : <img src={MobileProfile} className="mobileprofile" />}
      <div className="who">Who am I?</div>
      <div className="bio">
        My name is Zac and I'm a software developer at{" "}
        <a href="https://www.westpac.com.au" target="_blank">
          Westpac
        </a>
        . I build elegantly simple and beautiful websites and applications that are accessible and responsive.
      </div>
    </div>
  );
};

export default Intro;
