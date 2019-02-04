import React from "react";
import { Button } from "reactstrap";
import logo from "../logo.png";
import "./MyNav.css";

const MyNav = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <img src={logo} alt="logo" height="60px" width="60px" />
      </div>
      <div className="contact">
        <Button href="mailto:zaclew922@gmail.com">Shoot me an email!</Button>
      </div>
    </div>
  );
};

export default MyNav;
