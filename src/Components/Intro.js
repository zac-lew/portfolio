import React from "react";
import "./Intro.scss";
import Profile from "../Assets/profile.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="name">Zac Lew</div>
      <div className="role">Web Developer and Mechatronics Engineer</div>
      <img src={Profile} className="profile" />
      <div className="who">Who am I?</div>
      <div className="bio">
        My name's Zac and I build elegantly simple and beautiful websites. I have a Masters in Biomedical Engineering
        and a Bachelors in Mechatronics Engineering. On top of these qualifications I have a wealth of experience
        building software, with a focus on Front-End Web Developement. I love writing code, designing websites,
        programming robots; pretty much anything that involves computers.
      </div>
    </div>
  );
};

export default Intro;
