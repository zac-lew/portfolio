import React, { Component } from "react";
import MyNav from "./MyNav";
import "./Home.css";
import Intro from "./Intro";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";
import Education from "./Education";
import ScrollToTop from "../Assets/Utils/ScrollToTop";
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
      <React.Fragment>
        <ScrollToTop />
        <MyNav />
        <div className="home-wrapper">
          <Intro isMobile={isMobile} />
          <Skills isMobile={isMobile} />
          <Projects isMobile={isMobile} />
          <Education />
          <Work isMobile={isMobile} />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
