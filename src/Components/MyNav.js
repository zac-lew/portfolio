import React from "react";
import "./MyNav.scss";

const MyNav = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <i class="fas fa-code icon" />
      </div>
      <a class="contact" href="mailto:zaclew922@gmail.com">
        Get In Touch!
      </a>
    </div>
  );
};

export default MyNav;
