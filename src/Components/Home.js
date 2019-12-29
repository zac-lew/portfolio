import React, { Component } from "react";
import MyNav from "./MyNav";
import "./Home.css";
import Intro from "./Intro";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";
import Education from "./Education";

class Home extends Component {
  state = {
    isMobile: false
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
        <MyNav />
        <div className="home-wrapper">
          <Intro isMobile={isMobile} />
          <Skills isMobile={isMobile} />
          <Work isMobile={isMobile} />
          <Education />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
