import React from "react";
import { Button } from "reactstrap";
import logo from "../logo.png";
import "./MyNav.scss";

const MyNav = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <i class="fas fa-code icon" />
      </div>
      <a class="contact" href="mailto:zaclew922@gmail.com">
        Contact Me
      </a>
    </div>
  );
};

export default MyNav;
