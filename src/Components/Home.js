import React, { Component } from "react";
import "./Home.css";
import Intro from "./Intro";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";
import Education from "./Education";
import Projects from "./Projects";

class Home extends Component {
  state = {
    isMobile: false,
  };
  componentDidMount() {
    this.setWindowSize();
    window.addEventListener("resize", this.setWindowSize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setWindowSize);
  }
  setWindowSize = () => {
    this.setState({ isMobile: window.innerWidth < 812 });
  };
  render() {
    const { isMobile } = this.state;
    return (
      <div>
        <div className="section">
          <Intro isMobile={isMobile} />
        </div>
        <div className="section">
          <Projects isMobile={isMobile} />
        </div>
        <div className="section">
          <Work isMobile={isMobile} />
        </div>
        <div className="section">
          <Skills isMobile={isMobile} />
        </div>
        <div className="section">
          <Education />
        </div>
        <div className="section">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
