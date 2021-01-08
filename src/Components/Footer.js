import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Get in contact!</h1>
      <div className="social-icons">
        <SocialIcon bgColor="#fff" url="http://twitter.com/zaclew" />
        <SocialIcon bgColor="#fff" url="mailto:zaclew922@gmail.com" />
        <SocialIcon bgColor="#fff" url="https://www.linkedin.com/in/zac-lew-1a616614a/" />
        <SocialIcon bgColor="#fff" url="https://github.com/zac-lew" />
      </div>
      <div className="copyright">Copyright &copy; 2021 Zac Lew</div>
    </div>
  );
};

export default Footer;
