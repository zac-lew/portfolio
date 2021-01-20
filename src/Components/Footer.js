import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Get in touch!</h1>
      <a href="https://www.facebook.com/zacl922/" target="_blank" rel="noopener noreferrer">
        <i class="icon fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/zac_lew/" target="_blank" rel="noopener noreferrer">
        <i class="icon fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/zac-lew-1a616614a/" target="_blank" rel="noopener noreferrer">
        <i class="icon fab fa-linkedin"></i>
      </a>
      <a href="mailto:zaclew922@gmail.com">
        <i class="icon fas fa-envelope-open-text"></i>
      </a>
      <div className="copyright">Copyright &copy; 2021 Zac Lew</div>
    </div>
  );
};

export default Footer;
