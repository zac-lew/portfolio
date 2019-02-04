import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  let d = new Date();
  return (
    <div className="footer">
      <h1>Get in contact!</h1>
      <div className="social-icons">
        <SocialIcon url="http://twitter.com/zac_lew" />
        <SocialIcon url="mailto:zaclew922@gmail.com" />
        <SocialIcon url="https://www.linkedin.com/in/zac-lew-1a616614a/" />
        <SocialIcon url="https://github.com/zac-lew" />
      </div>
      <div className="copyright">Copyright &copy; 2019 Zac Lew</div>
    </div>
  );
};

export default Footer;
